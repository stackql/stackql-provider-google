---
title: firebase
hide_title: false
hide_table_of_contents: false
keywords:
  - firebase
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Google Cloud Platform (GCP) infrastructure and resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Application development platform for creating mobile and web applications.

:::info[Provider Summary] 

total services: __15__  
total resources: __96__  
source project: __[stackql-provider-google](https://github.com/stackql-registry/stackql-provider-google)__  

:::

See also:   
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * * 

## Installation

To pull the latest version of the `firebase` provider, run the following command:  

```bash
REGISTRY PULL firebase;
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

## Example Queries

Try the following queries using `stackql shell`, or run them from a script or CI pipeline with `stackql exec`.

### Firebase projects

All Firebase projects visible to the authenticated principal:

```sql
SELECT
  projectId,
  displayName,
  state
FROM firebase.firebase.projects;
```

### Apps by platform

Android, iOS and web apps registered in a project:

```sql
SELECT appId, displayName, state
FROM firebase.firebase.android_apps
WHERE projectsId = 'my-project';

SELECT appId, displayName, state
FROM firebase.firebase.ios_apps
WHERE projectsId = 'my-project';

SELECT appId, displayName, state
FROM firebase.firebase.web_apps
WHERE projectsId = 'my-project';
```

### Web app config

The client config (API key, auth domain, storage bucket) for a registered web app:

```sql
SELECT
  appId,
  apiKey,
  authDomain,
  storageBucket
FROM firebase.firebase.web_apps_config
WHERE projectsId = 'my-project'
AND webAppsId = 'my-web-app-id';
```

### Test results

Test executions from Test Lab, most recent first:

```sql
SELECT
  executionId,
  state,
  testExecutionMatrixId
FROM firebase.toolresults.executions
WHERE projectId = 'my-project' AND historyId = 'my-history-id'
ORDER BY executionId DESC;
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/appcheck/">appcheck</a><br />
<a href="/services/appdistribution/">appdistribution</a><br />
<a href="/services/apphosting/">apphosting</a><br />
<a href="/services/database/">database</a><br />
<a href="/services/dataconnect/">dataconnect</a><br />
<a href="/services/fcm/">fcm</a><br />
<a href="/services/fcmdata/">fcmdata</a><br />
<a href="/services/firebase/">firebase</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/firebasecrashlytics/">firebasecrashlytics</a><br />
<a href="/services/hosting/">hosting</a><br />
<a href="/services/ml/">ml</a><br />
<a href="/services/rules/">rules</a><br />
<a href="/services/storage/">storage</a><br />
<a href="/services/testing/">testing</a><br />
<a href="/services/toolresults/">toolresults</a><br />
</div>
</div>
