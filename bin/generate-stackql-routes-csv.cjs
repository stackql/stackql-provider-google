#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { createObjectCsvWriter } = require('csv-writer');

/**
 * Script to process StackQL provider docs and generate CSV of resources, methods, and operation details
 * 
 * Usage: node generate-stackql-routes-csv.cjs <services_dir> <output_dir>
 */

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node generate-stackql-routes-csv.cjs <services_dir> <output_dir>');
  process.exit(1);
}

const servicesDir = args[0];
const outputDir = args[1];

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Array to store all the data records
const records = [];

// Helper function to decode OpenAPI path references
function decodePathRef(ref) {
  return ref.replace(/~1/g, '/');
}

// Helper function to encode paths for lookup
function encodePathForLookup(pathStr) {
  return pathStr.replace(/\//g, '~1');
}

// Helper function to resolve operation references
function resolveOperationRef(doc, operationRef) {
  if (!operationRef) return null;

  // Remove the # prefix and decode ~1 to /
  const cleanRef = operationRef.replace('#', '');
  const decodedRef = decodePathRef(cleanRef);
  
  // Split into parts
  const parts = decodedRef.split('/');
  
  // Check if this is a paths reference
  if (parts.length >= 2 && parts[1] === 'paths') {
    // Extract the HTTP verb if it's at the end
    const httpVerbs = ['get', 'post', 'put', 'delete', 'patch'];
    let verb = null;
    
    const lastPart = parts[parts.length - 1].toLowerCase();
    if (httpVerbs.includes(lastPart)) {
      verb = parts.pop();
    }
    
    // Path will be everything after 'paths/' up to the verb (if any)
    const pathParts = parts.slice(2);
    const pathString = '/' + pathParts.join('/');
    
    // Find the correct path in the OpenAPI doc
    // We need to handle both encoded and decoded formats
    if (doc.paths) {
      // Try direct lookup with the encoded path as it appears in the reference
      const encodedPathKey = '/' + pathParts.join('/').replace(/\//g, '~1');
      
      // Different ways the path might be represented in the doc
      const possiblePathKeys = [
        // Original reference path format
        cleanRef.split('/').slice(2).join('/'),
        // Encoded path with leading slash
        encodedPathKey,
        // Encoded path without leading slash
        encodedPathKey.substring(1),
        // Original path with leading slash
        pathString,
        // Original path without leading slash
        pathString.substring(1)
      ];
      
      // Try each possible key format
      for (const key of possiblePathKeys) {
        if (doc.paths[key]) {
          // Found the path, now get the operation if a verb was specified
          if (verb && doc.paths[key][verb]) {
            return doc.paths[key][verb];
          }
          return doc.paths[key];
        }
      }
      
      // If we got here, try a more exhaustive search
      for (const docPath in doc.paths) {
        // Normalize both paths for comparison
        const normalizedDocPath = decodePathRef(docPath);
        // Try both with and without leading slash
        if (normalizedDocPath === pathString || '/' + normalizedDocPath === pathString) {
          if (verb && doc.paths[docPath][verb]) {
            return doc.paths[docPath][verb];
          }
          return doc.paths[docPath];
        }
      }
    }
  } else {
    // Handle non-path references (like components)
    let current = doc;
    
    // Skip empty first element if present
    const startIndex = parts[0] === '' ? 1 : 0;
    
    for (let i = startIndex; i < parts.length; i++) {
      if (parts[i] && current[parts[i]]) {
        current = current[parts[i]];
      } else {
        return null; // Couldn't resolve the reference
      }
    }
    
    return current;
  }
  
  return null;
}

// Process each YAML file in the services directory
const yamlFiles = fs.readdirSync(servicesDir)
  .filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));

yamlFiles.forEach(yamlFile => {
  const filePath = path.join(servicesDir, yamlFile);
  console.log(`Processing: ${filePath}`);
  
  try {
    // Read and parse the YAML file
    const content = fs.readFileSync(filePath, 'utf8');
    const doc = yaml.load(content);
    
    // Skip if no StackQL resources
    if (!doc.components || !doc.components['x-stackQL-resources']) {
      console.log(`No StackQL resources found in ${yamlFile}, skipping...`);
      return;
    }
    
    // Extract the service name from the file name (removing extension)
    const stackqlService = path.basename(yamlFile, path.extname(yamlFile));
    
    // Process each resource in the file
    const resources = doc.components['x-stackQL-resources'];
    
    Object.keys(resources).forEach(resourceKey => {
      const resource = resources[resourceKey];
      const stackqlResource = resource.name || resourceKey;
      
      // Process each method for the resource
      if (resource.methods) {
        Object.keys(resource.methods).forEach(methodKey => {
          const method = resource.methods[methodKey];
          
          // Determine which SQL verbs this method is used with
          let sqlVerbs = [];
          
          // Check each verb category
          ['select', 'insert', 'update', 'replace', 'delete'].forEach(verb => {
            if (resource.sqlVerbs && 
                resource.sqlVerbs[verb] && 
                resource.sqlVerbs[verb].some(m => m.$ref && m.$ref.includes(methodKey))) {
              sqlVerbs.push(verb);
            }
          });
          
          // Default to 'exec' if no verbs found
          if (sqlVerbs.length === 0) {
            sqlVerbs = ['exec'];
          }
          
          // For each verb, create a record
          sqlVerbs.forEach(sqlVerb => {
            // Resolve the operation reference
            let operationObj = null;
            if (method.operation && method.operation.$ref) {
              operationObj = resolveOperationRef(doc, method.operation.$ref);
              
              if (!operationObj) {
                console.warn(`Could not resolve operation reference: ${method.operation.$ref}`);
              }
            }
            
            // Extract response shape if available
            let responseShape = '';
            let operationId = '';
            let requiredParams = [];
            let httpPath = '';
            let httpVerb = '';
            
            if (operationObj) {
              // Extract operationId
              if (operationObj.operationId) {
                operationId = operationObj.operationId;
              }
              
              // Extract HTTP path and verb from the operation reference
              if (method.operation && method.operation.$ref) {
                // Get the path from the reference
                const pathRef = method.operation.$ref.replace('#', '');
                const decodedRef = decodePathRef(pathRef);
                const parts = decodedRef.split('/');
                
                if (parts.length >= 2 && parts[1] === 'paths') {
                  // Extract HTTP verb if it's the last part
                  const verbsToCheck = ['get', 'post', 'put', 'delete', 'patch'];
                  const lastPart = parts[parts.length - 1].toLowerCase();
                  
                  if (verbsToCheck.includes(lastPart)) {
                    httpVerb = lastPart.toUpperCase();
                    // Remove verb from parts for path extraction
                    parts.pop();
                  }
                  
                  // Extract path
                  const pathParts = parts.slice(2);
                  httpPath = '/' + pathParts.join('/');
                  
                  // Extract path parameters which are in {brackets}
                  const pathParams = httpPath.match(/\{([^}]+)\}/g) || [];
                  
                  // Add path parameters to required params (they're always required)
                  pathParams.forEach(param => {
                    // Remove the curly braces
                    const paramName = param.substring(1, param.length - 1);
                    // Remove 'Id' suffix if present - common pattern in these APIs
                    const cleanParamName = paramName.endsWith('Id') ? paramName.substring(0, paramName.length - 2) : paramName;
                    requiredParams.push(cleanParamName);
                  });
                }
              }
              
              // 2. Check for required query parameters
              if (operationObj.parameters) {
                operationObj.parameters.forEach(param => {
                  // Only include if it's a required query parameter
                  if (param.in === 'query' && param.required === true) {
                    requiredParams.push(param.name);
                  }
                });
              }
              
              // Extract response shape
              if (operationObj.responses && 
                  method.response && 
                  method.response.openAPIDocKey && 
                  operationObj.responses[method.response.openAPIDocKey] &&
                  operationObj.responses[method.response.openAPIDocKey].content &&
                  operationObj.responses[method.response.openAPIDocKey].content[method.response.mediaType]) {
                
                const responseContent = operationObj.responses[method.response.openAPIDocKey].content[method.response.mediaType];
                
                if (responseContent.schema) {
                  if (responseContent.schema.$ref) {
                    // Extract schema name from reference
                    responseShape = responseContent.schema.$ref.split('/').pop();
                  } else if (responseContent.schema.items && responseContent.schema.items.$ref) {
                    // Handle array types
                    responseShape = responseContent.schema.items.$ref.split('/').pop() + '[]';
                  } else {
                    // Use schema type if available
                    responseShape = responseContent.schema.type || 'unknown';
                  }
                }
              }
            }
            
            // Join required params with a pipe delimiter
            const requiredParamsString = requiredParams.join('|');
            
            // Add record
            records.push({
              stackql_service: stackqlService,
              stackql_resource: stackqlResource,
              stackql_method: methodKey,
              sql_verb: sqlVerb,
              object_key: method.response && method.response.objectKey ? method.response.objectKey : '',
              response_shape: responseShape,
              operation_id: operationId,
              required_params: requiredParamsString,
              http_path: httpPath,
              http_verb: httpVerb
            });
          });
        });
      }
    });
    
  } catch (err) {
    console.error(`Error processing ${yamlFile}: ${err.message}`);
  }
});

// Write the records to a CSV file
const csvPath = path.join(outputDir, 'stackql-resources.csv');
const csvWriter = createObjectCsvWriter({
  path: csvPath,
  header: [
    { id: 'stackql_service', title: 'STACKQL_SERVICE' },
    { id: 'stackql_resource', title: 'STACKQL_RESOURCE' },
    { id: 'stackql_method', title: 'STACKQL_METHOD' },
    { id: 'sql_verb', title: 'SQL_VERB' },
    { id: 'object_key', title: 'OBJECT_KEY' },
    { id: 'response_shape', title: 'RESPONSE_SHAPE' },
    { id: 'operation_id', title: 'OPERATION_ID' },
    { id: 'required_params', title: 'REQUIRED_PARAMS' },
    { id: 'http_path', title: 'HTTP_PATH' },
    { id: 'http_verb', title: 'HTTP_VERB' }
  ]
});

csvWriter.writeRecords(records)
  .then(() => {
    console.log(`CSV file successfully written to: ${csvPath}`);
    console.log(`Total records: ${records.length}`);
  })
  .catch(err => {
    console.error(`Error writing CSV: ${err.message}`);
  });