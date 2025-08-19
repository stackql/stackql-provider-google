---
title: google
hide_title: false
hide_table_of_contents: false
keywords:
  - google
  - google cloud platform
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Google Cloud Platform resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
id: 'provider-intro'

---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Cloud services from Google.

:::info[Provider Summary] 

total services: __179__  
total resources: __2212__  

:::

See also:   
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * * 

## Installation

To pull the latest version of the `google` provider, run the following command:  

```bash
REGISTRY PULL google;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).  

## Authentication


The following authentication methods are supported:
- <CopyableCode code="service_account" />
- <CopyableCode code="interactive" /> for running interactive queries from Cloud Shell or other machines where the user is authenticated using <CopyableCode code="gcloud auth login" />

> for more information on creating service accounts and key files, see [Service accounts overview](https://cloud.google.com/iam/docs/service-account-overview).

### Service Account Environment Variable (default)

The following system environment variable is used by default:  

- <CopyableCode code="GOOGLE_CREDENTIALS" /> - contents of the <code>google</code> service account key json file.  This variable is sourced at runtime (from the local machine using <code>export GOOGLE_CREDENTIALS=cat creds/my-sa-key.json</code> for example or as a CI variable/secret).

This variable is sourced at runtime (from the local machine using `export GOOGLE_CREDENTIALS=$(cat creds/my-sa-key.json)` for example or as a CI variable/secret).

<details>

<summary>Specifying the service account key file location directly</summary>

You can specify the path to the service account key file without using the default environment variable by using the <CopyableCode code="--auth" /> flag of the <code>stackql</code> program.  For example:  

```bash
AUTH='{ "google": { "type": "service_account",  "credentialsfilepath": "creds/sa-key.json" }}'
stackql shell --auth="${AUTH}"
```

or using PowerShell:  

```powershell
$Auth = "{ 'google': { 'type': 'service_account',  'credentialsfilepath': 'creds/sa-key.json' }}"
stackql.exe shell --auth=$Auth
```

</details>

### Interactive Authentication
When you are using Google Cloud Shell or on a machine where you have authenticated using <CopyableCode code="gcloud auth login" />, you can then use the following authentication method:   

```bash
AUTH='{ "google": { "type": "interactive" }}'
stackql shell --auth="${AUTH}"
```

or using PowerShell:  

```powershell
$Auth = "{ 'google': { 'type': 'interactive' }}"
stackql.exe shell --auth=$Auth
```

## Services
<div class="row">
<div class="providerDocColumn">
<a href="/accessapproval/">accessapproval</a><br />
<a href="/accesscontextmanager/">accesscontextmanager</a><br />
<a href="/addressvalidation/">addressvalidation</a><br />
<a href="/advisorynotifications/">advisorynotifications</a><br />
<a href="/aiplatform/">aiplatform</a><br />
<a href="/airquality/">airquality</a><br />
<a href="/alloydb/">alloydb</a><br />
<a href="/analyticshub/">analyticshub</a><br />
<a href="/apigateway/">apigateway</a><br />
<a href="/apigee/">apigee</a><br />
<a href="/apigeeregistry/">apigeeregistry</a><br />
<a href="/apihub/">apihub</a><br />
<a href="/apikeys/">apikeys</a><br />
<a href="/apim/">apim</a><br />
<a href="/appengine/">appengine</a><br />
<a href="/apphub/">apphub</a><br />
<a href="/areainsights/">areainsights</a><br />
<a href="/artifactregistry/">artifactregistry</a><br />
<a href="/assuredworkloads/">assuredworkloads</a><br />
<a href="/backupdr/">backupdr</a><br />
<a href="/baremetalsolution/">baremetalsolution</a><br />
<a href="/batch/">batch</a><br />
<a href="/beyondcorp/">beyondcorp</a><br />
<a href="/biglake/">biglake</a><br />
<a href="/bigquery/">bigquery</a><br />
<a href="/bigqueryconnection/">bigqueryconnection</a><br />
<a href="/bigquerydatapolicy/">bigquerydatapolicy</a><br />
<a href="/bigquerydatatransfer/">bigquerydatatransfer</a><br />
<a href="/bigqueryreservation/">bigqueryreservation</a><br />
<a href="/bigtableadmin/">bigtableadmin</a><br />
<a href="/billingbudgets/">billingbudgets</a><br />
<a href="/binaryauthorization/">binaryauthorization</a><br />
<a href="/blockchainnodeengine/">blockchainnodeengine</a><br />
<a href="/certificatemanager/">certificatemanager</a><br />
<a href="/cloudasset/">cloudasset</a><br />
<a href="/cloudbilling/">cloudbilling</a><br />
<a href="/cloudbuild/">cloudbuild</a><br />
<a href="/cloudcommerceprocurement/">cloudcommerceprocurement</a><br />
<a href="/cloudcontrolspartner/">cloudcontrolspartner</a><br />
<a href="/clouddeploy/">clouddeploy</a><br />
<a href="/clouderrorreporting/">clouderrorreporting</a><br />
<a href="/cloudfunctions/">cloudfunctions</a><br />
<a href="/cloudidentity/">cloudidentity</a><br />
<a href="/cloudkms/">cloudkms</a><br />
<a href="/cloudlocationfinder/">cloudlocationfinder</a><br />
<a href="/cloudprofiler/">cloudprofiler</a><br />
<a href="/cloudresourcemanager/">cloudresourcemanager</a><br />
<a href="/cloudscheduler/">cloudscheduler</a><br />
<a href="/cloudshell/">cloudshell</a><br />
<a href="/cloudsupport/">cloudsupport</a><br />
<a href="/cloudtasks/">cloudtasks</a><br />
<a href="/cloudtrace/">cloudtrace</a><br />
<a href="/composer/">composer</a><br />
<a href="/compute/">compute</a><br />
<a href="/config/">config</a><br />
<a href="/connectors/">connectors</a><br />
<a href="/contactcenteraiplatform/">contactcenteraiplatform</a><br />
<a href="/contactcenterinsights/">contactcenterinsights</a><br />
<a href="/container/">container</a><br />
<a href="/containeranalysis/">containeranalysis</a><br />
<a href="/contentwarehouse/">contentwarehouse</a><br />
<a href="/datacatalog/">datacatalog</a><br />
<a href="/dataflow/">dataflow</a><br />
<a href="/dataform/">dataform</a><br />
<a href="/datafusion/">datafusion</a><br />
<a href="/datalabeling/">datalabeling</a><br />
<a href="/datalineage/">datalineage</a><br />
<a href="/datamigration/">datamigration</a><br />
<a href="/datapipelines/">datapipelines</a><br />
<a href="/dataplex/">dataplex</a><br />
<a href="/dataproc/">dataproc</a><br />
<a href="/datastore/">datastore</a><br />
<a href="/datastream/">datastream</a><br />
<a href="/deploymentmanager/">deploymentmanager</a><br />
<a href="/developerconnect/">developerconnect</a><br />
<a href="/dialogflow/">dialogflow</a><br />
<a href="/discoveryengine/">discoveryengine</a><br />
<a href="/dlp/">dlp</a><br />
<a href="/dns/">dns</a><br />
<a href="/documentai/">documentai</a><br />
<a href="/domains/">domains</a><br />
<a href="/essentialcontacts/">essentialcontacts</a><br />
<a href="/eventarc/">eventarc</a><br />
<a href="/file/">file</a><br />
<a href="/firestore/">firestore</a><br />
<a href="/geminicloudassist/">geminicloudassist</a><br />
<a href="/gkebackup/">gkebackup</a><br />
<a href="/gkehub/">gkehub</a><br />
<a href="/gkeonprem/">gkeonprem</a><br />
<a href="/healthcare/">healthcare</a><br />
</div>
<div class="providerDocColumn">
<a href="/iam/">iam</a><br />
<a href="/iamcredentials/">iamcredentials</a><br />
<a href="/iamv2/">iamv2</a><br />
<a href="/iamv2beta/">iamv2beta</a><br />
<a href="/iap/">iap</a><br />
<a href="/identitytoolkit/">identitytoolkit</a><br />
<a href="/ids/">ids</a><br />
<a href="/integrations/">integrations</a><br />
<a href="/jobs/">jobs</a><br />
<a href="/kmsinventory/">kmsinventory</a><br />
<a href="/language/">language</a><br />
<a href="/libraryagent/">libraryagent</a><br />
<a href="/lifesciences/">lifesciences</a><br />
<a href="/logging/">logging</a><br />
<a href="/looker/">looker</a><br />
<a href="/managedidentities/">managedidentities</a><br />
<a href="/managedkafka/">managedkafka</a><br />
<a href="/memcache/">memcache</a><br />
<a href="/migrationcenter/">migrationcenter</a><br />
<a href="/ml/">ml</a><br />
<a href="/monitoring/">monitoring</a><br />
<a href="/netapp/">netapp</a><br />
<a href="/networkconnectivity/">networkconnectivity</a><br />
<a href="/networkmanagement/">networkmanagement</a><br />
<a href="/networksecurity/">networksecurity</a><br />
<a href="/networkservices/">networkservices</a><br />
<a href="/notebooks/">notebooks</a><br />
<a href="/observability/">observability</a><br />
<a href="/ondemandscanning/">ondemandscanning</a><br />
<a href="/oracledatabase/">oracledatabase</a><br />
<a href="/orgpolicy/">orgpolicy</a><br />
<a href="/osconfig/">osconfig</a><br />
<a href="/oslogin/">oslogin</a><br />
<a href="/parallelstore/">parallelstore</a><br />
<a href="/parametermanager/">parametermanager</a><br />
<a href="/places/">places</a><br />
<a href="/policyanalyzer/">policyanalyzer</a><br />
<a href="/policysimulator/">policysimulator</a><br />
<a href="/policytroubleshooter/">policytroubleshooter</a><br />
<a href="/pollen/">pollen</a><br />
<a href="/privateca/">privateca</a><br />
<a href="/prod_tt_sasportal/">prod_tt_sasportal</a><br />
<a href="/publicca/">publicca</a><br />
<a href="/pubsub/">pubsub</a><br />
<a href="/pubsublite/">pubsublite</a><br />
<a href="/rapidmigrationassessment/">rapidmigrationassessment</a><br />
<a href="/recaptchaenterprise/">recaptchaenterprise</a><br />
<a href="/recommendationengine/">recommendationengine</a><br />
<a href="/recommender/">recommender</a><br />
<a href="/redis/">redis</a><br />
<a href="/retail/">retail</a><br />
<a href="/run/">run</a><br />
<a href="/runtimeconfig/">runtimeconfig</a><br />
<a href="/saasservicemgmt/">saasservicemgmt</a><br />
<a href="/sasportal/">sasportal</a><br />
<a href="/secretmanager/">secretmanager</a><br />
<a href="/securesourcemanager/">securesourcemanager</a><br />
<a href="/securitycenter/">securitycenter</a><br />
<a href="/securityposture/">securityposture</a><br />
<a href="/serviceconsumermanagement/">serviceconsumermanagement</a><br />
<a href="/servicecontrol/">servicecontrol</a><br />
<a href="/servicedirectory/">servicedirectory</a><br />
<a href="/servicemanagement/">servicemanagement</a><br />
<a href="/servicenetworking/">servicenetworking</a><br />
<a href="/serviceusage/">serviceusage</a><br />
<a href="/solar/">solar</a><br />
<a href="/spanner/">spanner</a><br />
<a href="/speech/">speech</a><br />
<a href="/sqladmin/">sqladmin</a><br />
<a href="/storage/">storage</a><br />
<a href="/storagebatchoperations/">storagebatchoperations</a><br />
<a href="/storagetransfer/">storagetransfer</a><br />
<a href="/testing/">testing</a><br />
<a href="/texttospeech/">texttospeech</a><br />
<a href="/tpu/">tpu</a><br />
<a href="/trafficdirector/">trafficdirector</a><br />
<a href="/transcoder/">transcoder</a><br />
<a href="/translate/">translate</a><br />
<a href="/videointelligence/">videointelligence</a><br />
<a href="/vision/">vision</a><br />
<a href="/vmmigration/">vmmigration</a><br />
<a href="/vmwareengine/">vmwareengine</a><br />
<a href="/vpcaccess/">vpcaccess</a><br />
<a href="/webrisk/">webrisk</a><br />
<a href="/websecurityscanner/">websecurityscanner</a><br />
<a href="/workflowexecutions/">workflowexecutions</a><br />
<a href="/workflows/">workflows</a><br />
<a href="/workloadmanager/">workloadmanager</a><br />
<a href="/workstations/">workstations</a><br />
</div>
</div>
