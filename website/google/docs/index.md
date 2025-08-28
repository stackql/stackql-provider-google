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

total services: __178__  
total resources: __2093__  

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
<a href="/services/accessapproval/">accessapproval</a><br />
<a href="/services/accesscontextmanager/">accesscontextmanager</a><br />
<a href="/services/addressvalidation/">addressvalidation</a><br />
<a href="/services/advisorynotifications/">advisorynotifications</a><br />
<a href="/services/aiplatform/">aiplatform</a><br />
<a href="/services/airquality/">airquality</a><br />
<a href="/services/alloydb/">alloydb</a><br />
<a href="/services/analyticshub/">analyticshub</a><br />
<a href="/services/apigateway/">apigateway</a><br />
<a href="/services/apigee/">apigee</a><br />
<a href="/services/apigeeregistry/">apigeeregistry</a><br />
<a href="/services/apihub/">apihub</a><br />
<a href="/services/apikeys/">apikeys</a><br />
<a href="/services/apim/">apim</a><br />
<a href="/services/appengine/">appengine</a><br />
<a href="/services/apphub/">apphub</a><br />
<a href="/services/areainsights/">areainsights</a><br />
<a href="/services/artifactregistry/">artifactregistry</a><br />
<a href="/services/assuredworkloads/">assuredworkloads</a><br />
<a href="/services/backupdr/">backupdr</a><br />
<a href="/services/baremetalsolution/">baremetalsolution</a><br />
<a href="/services/batch/">batch</a><br />
<a href="/services/beyondcorp/">beyondcorp</a><br />
<a href="/services/biglake/">biglake</a><br />
<a href="/services/bigquery/">bigquery</a><br />
<a href="/services/bigqueryconnection/">bigqueryconnection</a><br />
<a href="/services/bigquerydatapolicy/">bigquerydatapolicy</a><br />
<a href="/services/bigquerydatatransfer/">bigquerydatatransfer</a><br />
<a href="/services/bigqueryreservation/">bigqueryreservation</a><br />
<a href="/services/bigtableadmin/">bigtableadmin</a><br />
<a href="/services/billingbudgets/">billingbudgets</a><br />
<a href="/services/binaryauthorization/">binaryauthorization</a><br />
<a href="/services/blockchainnodeengine/">blockchainnodeengine</a><br />
<a href="/services/certificatemanager/">certificatemanager</a><br />
<a href="/services/cloudasset/">cloudasset</a><br />
<a href="/services/cloudbilling/">cloudbilling</a><br />
<a href="/services/cloudbuild/">cloudbuild</a><br />
<a href="/services/cloudcommerceprocurement/">cloudcommerceprocurement</a><br />
<a href="/services/cloudcontrolspartner/">cloudcontrolspartner</a><br />
<a href="/services/clouddeploy/">clouddeploy</a><br />
<a href="/services/clouderrorreporting/">clouderrorreporting</a><br />
<a href="/services/cloudfunctions/">cloudfunctions</a><br />
<a href="/services/cloudidentity/">cloudidentity</a><br />
<a href="/services/cloudkms/">cloudkms</a><br />
<a href="/services/cloudlocationfinder/">cloudlocationfinder</a><br />
<a href="/services/cloudprofiler/">cloudprofiler</a><br />
<a href="/services/cloudresourcemanager/">cloudresourcemanager</a><br />
<a href="/services/cloudscheduler/">cloudscheduler</a><br />
<a href="/services/cloudshell/">cloudshell</a><br />
<a href="/services/cloudsupport/">cloudsupport</a><br />
<a href="/services/cloudtasks/">cloudtasks</a><br />
<a href="/services/cloudtrace/">cloudtrace</a><br />
<a href="/services/composer/">composer</a><br />
<a href="/services/compute/">compute</a><br />
<a href="/services/config/">config</a><br />
<a href="/services/connectors/">connectors</a><br />
<a href="/services/contactcenteraiplatform/">contactcenteraiplatform</a><br />
<a href="/services/contactcenterinsights/">contactcenterinsights</a><br />
<a href="/services/container/">container</a><br />
<a href="/services/containeranalysis/">containeranalysis</a><br />
<a href="/services/contentwarehouse/">contentwarehouse</a><br />
<a href="/services/datacatalog/">datacatalog</a><br />
<a href="/services/dataflow/">dataflow</a><br />
<a href="/services/dataform/">dataform</a><br />
<a href="/services/datafusion/">datafusion</a><br />
<a href="/services/datalabeling/">datalabeling</a><br />
<a href="/services/datalineage/">datalineage</a><br />
<a href="/services/datamigration/">datamigration</a><br />
<a href="/services/datapipelines/">datapipelines</a><br />
<a href="/services/dataplex/">dataplex</a><br />
<a href="/services/dataproc/">dataproc</a><br />
<a href="/services/datastore/">datastore</a><br />
<a href="/services/datastream/">datastream</a><br />
<a href="/services/deploymentmanager/">deploymentmanager</a><br />
<a href="/services/developerconnect/">developerconnect</a><br />
<a href="/services/dialogflow/">dialogflow</a><br />
<a href="/services/discoveryengine/">discoveryengine</a><br />
<a href="/services/dlp/">dlp</a><br />
<a href="/services/dns/">dns</a><br />
<a href="/services/documentai/">documentai</a><br />
<a href="/services/domains/">domains</a><br />
<a href="/services/essentialcontacts/">essentialcontacts</a><br />
<a href="/services/eventarc/">eventarc</a><br />
<a href="/services/file/">file</a><br />
<a href="/services/firestore/">firestore</a><br />
<a href="/services/geminicloudassist/">geminicloudassist</a><br />
<a href="/services/gkebackup/">gkebackup</a><br />
<a href="/services/gkehub/">gkehub</a><br />
<a href="/services/gkeonprem/">gkeonprem</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/healthcare/">healthcare</a><br />
<a href="/services/iam/">iam</a><br />
<a href="/services/iamcredentials/">iamcredentials</a><br />
<a href="/services/iamv2/">iamv2</a><br />
<a href="/services/iamv2beta/">iamv2beta</a><br />
<a href="/services/iap/">iap</a><br />
<a href="/services/identitytoolkit/">identitytoolkit</a><br />
<a href="/services/ids/">ids</a><br />
<a href="/services/integrations/">integrations</a><br />
<a href="/services/jobs/">jobs</a><br />
<a href="/services/kmsinventory/">kmsinventory</a><br />
<a href="/services/language/">language</a><br />
<a href="/services/libraryagent/">libraryagent</a><br />
<a href="/services/lifesciences/">lifesciences</a><br />
<a href="/services/logging/">logging</a><br />
<a href="/services/looker/">looker</a><br />
<a href="/services/managedidentities/">managedidentities</a><br />
<a href="/services/managedkafka/">managedkafka</a><br />
<a href="/services/memcache/">memcache</a><br />
<a href="/services/migrationcenter/">migrationcenter</a><br />
<a href="/services/ml/">ml</a><br />
<a href="/services/monitoring/">monitoring</a><br />
<a href="/services/netapp/">netapp</a><br />
<a href="/services/networkconnectivity/">networkconnectivity</a><br />
<a href="/services/networkmanagement/">networkmanagement</a><br />
<a href="/services/networksecurity/">networksecurity</a><br />
<a href="/services/networkservices/">networkservices</a><br />
<a href="/services/notebooks/">notebooks</a><br />
<a href="/services/observability/">observability</a><br />
<a href="/services/ondemandscanning/">ondemandscanning</a><br />
<a href="/services/oracledatabase/">oracledatabase</a><br />
<a href="/services/orgpolicy/">orgpolicy</a><br />
<a href="/services/osconfig/">osconfig</a><br />
<a href="/services/oslogin/">oslogin</a><br />
<a href="/services/parallelstore/">parallelstore</a><br />
<a href="/services/parametermanager/">parametermanager</a><br />
<a href="/services/places/">places</a><br />
<a href="/services/policyanalyzer/">policyanalyzer</a><br />
<a href="/services/policysimulator/">policysimulator</a><br />
<a href="/services/policytroubleshooter/">policytroubleshooter</a><br />
<a href="/services/pollen/">pollen</a><br />
<a href="/services/privateca/">privateca</a><br />
<a href="/services/prod_tt_sasportal/">prod_tt_sasportal</a><br />
<a href="/services/publicca/">publicca</a><br />
<a href="/services/pubsub/">pubsub</a><br />
<a href="/services/pubsublite/">pubsublite</a><br />
<a href="/services/rapidmigrationassessment/">rapidmigrationassessment</a><br />
<a href="/services/recaptchaenterprise/">recaptchaenterprise</a><br />
<a href="/services/recommendationengine/">recommendationengine</a><br />
<a href="/services/recommender/">recommender</a><br />
<a href="/services/redis/">redis</a><br />
<a href="/services/retail/">retail</a><br />
<a href="/services/run/">run</a><br />
<a href="/services/runtimeconfig/">runtimeconfig</a><br />
<a href="/services/saasservicemgmt/">saasservicemgmt</a><br />
<a href="/services/sasportal/">sasportal</a><br />
<a href="/services/secretmanager/">secretmanager</a><br />
<a href="/services/securesourcemanager/">securesourcemanager</a><br />
<a href="/services/securitycenter/">securitycenter</a><br />
<a href="/services/securityposture/">securityposture</a><br />
<a href="/services/serviceconsumermanagement/">serviceconsumermanagement</a><br />
<a href="/services/servicecontrol/">servicecontrol</a><br />
<a href="/services/servicedirectory/">servicedirectory</a><br />
<a href="/services/servicemanagement/">servicemanagement</a><br />
<a href="/services/servicenetworking/">servicenetworking</a><br />
<a href="/services/serviceusage/">serviceusage</a><br />
<a href="/services/solar/">solar</a><br />
<a href="/services/spanner/">spanner</a><br />
<a href="/services/speech/">speech</a><br />
<a href="/services/sqladmin/">sqladmin</a><br />
<a href="/services/storage/">storage</a><br />
<a href="/services/storagebatchoperations/">storagebatchoperations</a><br />
<a href="/services/storagetransfer/">storagetransfer</a><br />
<a href="/services/texttospeech/">texttospeech</a><br />
<a href="/services/tpu/">tpu</a><br />
<a href="/services/trafficdirector/">trafficdirector</a><br />
<a href="/services/transcoder/">transcoder</a><br />
<a href="/services/translate/">translate</a><br />
<a href="/services/videointelligence/">videointelligence</a><br />
<a href="/services/vision/">vision</a><br />
<a href="/services/vmmigration/">vmmigration</a><br />
<a href="/services/vmwareengine/">vmwareengine</a><br />
<a href="/services/vpcaccess/">vpcaccess</a><br />
<a href="/services/webrisk/">webrisk</a><br />
<a href="/services/websecurityscanner/">websecurityscanner</a><br />
<a href="/services/workflowexecutions/">workflowexecutions</a><br />
<a href="/services/workflows/">workflows</a><br />
<a href="/services/workloadmanager/">workloadmanager</a><br />
<a href="/services/workstations/">workstations</a><br />
</div>
</div>
