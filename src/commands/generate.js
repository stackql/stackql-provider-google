import { logger } from '../util/logging.js';
import { 
    createOrCleanDir, 
    removeProviderIndexFile,
    createDir, 
    writeFile 
} from '../util/filesystem.js';
import { 
    getCurrentDate,
    populateSecuritySchemes, 
    replaceSchemaRefs, 
    processParameters, 
    populatePaths,
    generateStackQLResources,
} from '../helper/functions.js';
import {
    providerConfig
} from '../config/providers.js';
import * as path from 'path';
import fetch from 'node-fetch';
import * as yaml from 'js-yaml';
import fs from 'fs';

const baseOpenApiDoc = {
    openapi: '3.1.0', 
    info: {
        contact: {
            name: 'StackQL Studios',
            url: 'https://github.com/stackql/google-discovery-to-openapi',
            email: 'info@stackql.io'
        },
    }, 
    externalDocs: {}, 
    servers: [], 
    components: {},
    paths: {}
};

/*
*  provider index creation function
*/
async function generateProviderIndex(provider, servicesDir, providerDir, configObj, debug) {

    logger.info(`generating provider index for ${provider}...`);

    const version = 'v00.00.00000';
    const providerServices = {};

    const providerName = provider === 'googleapis.com' ? 'google' : provider;

    // Read all YAML files in the servicesDir directory
    const files = fs.readdirSync(servicesDir);

    for (const file of files) {
        try {			
            debug ? logger.debug(`processing: ${file}`) : null;
            if (path.extname(file) === '.yaml') {
                const filePath = path.join(servicesDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const apiSpec = yaml.load(fileContent);
    
                const serviceName = path.basename(file, '.yaml');
                const info = apiSpec.info;
    
                providerServices[serviceName] = {
                    id: `${serviceName}:${version}`,
                    name: serviceName,
                    preferred: true,
                    service: {
                        $ref: `${provider}/${version}/services/${serviceName}.yaml`
                    },
                    title: info.title,
                    version: version,
                    description: info.description,
                };
            }
        } catch (err) {
            logger.error(`Error processing file ${file}: ${err.message}`);
        }
    }

    const providerYaml = {
        id: providerName,
        name: providerName,
        version: version,
        providerServices: providerServices,
        config: configObj
    };

    // Ensure the provider directory exists
    if (!fs.existsSync(providerDir)) {
        debug ? logger.debug(`${providerDir} does not exist, creating...`) : null;
        fs.mkdirSync(providerDir, { recursive: true });
    }

    // Write the provider YAML to the provider.yaml file
    const outputFilePath = path.join(providerDir, 'provider.yaml');
    debug ? logger.debug(`writing file to: ${outputFilePath}...`) : null;
    await writeFile(outputFilePath, yaml.dump(providerYaml), debug);
    debug ? logger.debug(`provider index generated at: ${outputFilePath}`) : null;
}

/*
*  service processing function
*/
async function processService(provider, serviceName, serviceData, serviceDir, debug){
    try {

        // init openapi doc
        let openApiDoc = baseOpenApiDoc;

        // populate service info
        debug ? logger.debug('populating service info...') : null;
        openApiDoc['info']['title'] = serviceData.title;
        openApiDoc['info']['description'] = serviceData.description;
        openApiDoc['info']['version'] = serviceData.version;
        openApiDoc['info']['x-discovery-doc-revision'] = serviceData.revision; 
        openApiDoc['info']['x-generated-date'] = getCurrentDate();

        // populate external docs
        debug ? logger.debug('populating external docs..') : null;
        openApiDoc['externalDocs']['url'] = serviceData.documentationLink;

        // populate servers
        debug ? logger.debug('populating servers..') : null;
        let serverUrl = `${serviceData.rootUrl}${serviceData.servicePath}`;
        if(serverUrl.endsWith('/')){
            serverUrl = serverUrl.slice(0, -1);
        }
        openApiDoc['servers'] = [];
        openApiDoc['servers'].push({'url': serverUrl});        
        
        // populate securitySchemes
        debug ? logger.debug('populating securitySchemes..') : null;
        
        if(serviceData.auth){
            openApiDoc['components']['securitySchemes'] = populateSecuritySchemes(serviceData.auth);
            // console.log(serviceData.auth);
        }
    
        // populate schemas
        debug ? logger.debug('populating schemas..') : null;
        openApiDoc['components']['schemas'] = replaceSchemaRefs(serviceData.schemas);

        // populate parameters
        debug ? logger.debug('populating parameters..') : null;
        let paramRefList = [];
        if(serviceData.parameters){
            const [paramsObj, retParamsRefList] = processParameters(serviceData.parameters);
            paramRefList = retParamsRefList;
            openApiDoc['components']['parameters'] = paramsObj;
        }

        // populate paths (most of the action happens here)
        debug ? logger.debug('populating paths..') : null;
        openApiDoc['paths'] = populatePaths({}, serviceData.resources, paramRefList, debug);

        // add stackql resources
        debug ? logger.debug('adding stackQL resources...') : null;
        openApiDoc = generateStackQLResources(provider, openApiDoc, serviceName, debug);

        // remove problematic operations
        debug ? logger.debug('removing problem paths..') : null;
        const pathsToRemove = [
            '/v1alpha/projects/{projectsId}/locations/{locationsId}/integrations/{integrationsId}:executeEvent'
        ];

        pathsToRemove.forEach(path => {
            delete openApiDoc['paths'][path];
        });

        // write out openapi doc as yaml
        const openApiDocYaml = yaml.dump(openApiDoc);
        await writeFile(path.join(serviceDir, `${serviceName}.yaml`), openApiDocYaml, debug);

        return
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
}

/*
*  main routine
*/
export async function generateSpecs(options, rootDir) {
    const debug = options.debug;
    const preferred = options.preferred;
    let outputDir = options.output;
    const provider = options.provider;

    logger.info(`generate called for ${provider}...`);
    debug ? logger.debug({rootDir: rootDir, ...options}) : null;

    // make sure provider is supported
    if(![
        'googleapis.com',
        'firebase',
        'googleworkspace',
        'googleadmin'
    ].includes(provider)){
        logger.error('invalid service specified, exiting...');
        return;
    }

    // get output directory
    if(outputDir.startsWith('/') || outputDir.startsWith('C:\\')){
        debug ? logger.debug('absolute path supplied for output directory') : null;
    } else {
        outputDir = path.join(rootDir, outputDir, 'src');
    }
    logger.info(`output directory: ${outputDir}`);
    
    // create spec directory
    const providerDir = path.join(outputDir, provider, 'v00.00.00000'); 
    let servicesDir = path.join(providerDir, 'services');
    if(!preferred && provider != 'googleadmin'){
        servicesDir = path.join(outputDir, provider == 'googleapis.com' ? 'google_beta' : `${provider}_beta`, 'v00.00.00000', 'services');
    }
    createOrCleanDir(servicesDir, debug);
    removeProviderIndexFile(providerDir, debug);

    // 
    // get service list
    //
    let services = [];

    if('includedServiceData' in providerConfig[provider]){
        // explict service list


    } else {
        // get all services from `rootDiscoveryUrl`
        logger.info(`Getting data from ${providerConfig[provider]['rootDiscoveryUrl']}...`);
        const rootResp = await fetch(providerConfig[provider]['rootDiscoveryUrl']);
        const rootData = await rootResp.json();
        
        // filter out `excludedServices` if any
        services = rootData.items.filter(item => 
            !providerConfig[provider]['excludedServices'].includes(item.name)
        );

        // add `additionalServiceData` if any
        services = services.concat(providerConfig[provider]['additionalServiceData']);

        // if `includedServiceNames` or `includedServiceNamePattern` filter out all except these
        if('includedServiceNames' in providerConfig[provider] 
            || 'includedServiceNamePattern' in providerConfig[provider]
        ){
            services = services.filter(service => {
                let byName = false;
                let byPattern = false;

                if (providerConfig[provider]['includedServiceNames']) {
                    byName = providerConfig[provider]['includedServiceNames'].includes(service.name);
                }

                if (providerConfig[provider]['includedServiceNamePattern']) {
                    const regex = new RegExp(providerConfig[provider]['includedServiceNamePattern']);
                    byPattern = regex.test(service.name);
                }

                return byName || byPattern;
            });
        }
    }
    
    logger.info(`processing: ${services.length} services...`);
    debug ? logger.debug(`services to be processed:`) : null;
    if(debug){
        services.forEach(service => {
            logger.debug(service.name);
        });
    }

    for(let service of services){
        try {
            logger.info(`checking ${service.name}...`);

            // get service data
            const svcResp = await fetch(service.discoveryRestUrl);
            const svcData = await svcResp.json();

            // check if svcData.auth.oauth2.scopes includes any key
            if(svcData['auth'] && svcData['auth']['oauth2'] && svcData['auth']['oauth2']['scopes']
                && Object.keys(svcData['auth']['oauth2']['scopes']).length > 0
            ){
                logger.info('Checking OAuth scopes...');
                if (Object.keys(svcData.auth.oauth2.scopes).includes(providerConfig[provider]['requiredScope'])) {
                    logger.info(`--------------------------------------`);
                    logger.info(`processing service ${service.name} ...`);
                    logger.info(`--------------------------------------`);
                    await processService(provider, service.name, svcData, servicesDir, debug);
                } else {
                    logger.info(`service ${service.name} does not have required scope, skipping...`);
                }
            } else {
                logger.info(`service ${service.name} has no auth, skipping...`);
            }

        } catch (err) {
            // crash program if error
            logger.error(err);
            if(service.name != 'poly'){
                process.exit(1);
            }
        }
    }

    // add provider.yaml file
    await generateProviderIndex(provider, servicesDir, providerDir, configObj, debug);

    const runtime = Math.round(process.uptime() * 100) / 100;
    logger.info(`generate completed in ${runtime}s. ${services.length} files generated.`);
 
}
