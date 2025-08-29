--- 
title: web_apps_config
hide_title: false
hide_table_of_contents: false
keywords:
  - web_apps_config
  - firebase
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>web_apps_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>web_apps_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebase.web_apps_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_config"
    values={[
        { label: 'get_config', value: 'get_config' }
    ]}
>
<TabItem value="get_config">

Successful response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="apiKey" /></td>
    <td><code>string</code></td>
    <td>The [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key associated with the `WebApp`. Note that this value is _not_ the [`apiKeyId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.api_key_id) (the UID) of the API key associated with the `WebApp`.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`.</td>
</tr>
<tr>
    <td><CopyableCode code="authDomain" /></td>
    <td><code>string</code></td>
    <td>The domain Firebase Auth configures for OAuth redirects, in the format: PROJECT_ID.firebaseapp.com</td>
</tr>
<tr>
    <td><CopyableCode code="databaseURL" /></td>
    <td><code>string</code></td>
    <td>**DEPRECATED.** _Instead, find the URL of the default Realtime Database instance using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. If the default instance for the Project has not yet been provisioned, the return might not contain a default instance. Note that the config that's generated for the Firebase console or the Firebase CLI uses the Realtime Database endpoint to populate this value for that config._ The URL of the default Firebase Realtime Database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>**DEPRECATED.** _Instead, use product-specific REST APIs to find the location of each resource in a Project. This field may not be populated, especially for newly provisioned projects after October 30, 2024._ The ID of the Project's ["location for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location), which are resources associated with Google App Engine. The location is one of the available [App Engine locations](https://cloud.google.com/about/locations#region). This field is omitted if the location for default Google Cloud resources has not been set.</td>
</tr>
<tr>
    <td><CopyableCode code="measurementId" /></td>
    <td><code>string</code></td>
    <td>The unique Google-assigned identifier of the Google Analytics web stream associated with the `WebApp`. Firebase SDKs use this ID to interact with Google Analytics APIs. This field is only present if the `WebApp` is linked to a web stream in a Google Analytics App + Web property. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). To generate a `measurementId` and link the `WebApp` with a Google Analytics web stream, call [`AddGoogleAnalytics`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects/addGoogleAnalytics). For apps using the Firebase JavaScript SDK v7.20.0 and later, Firebase dynamically fetches the `measurementId` when your app initializes Analytics. Having this ID in your config object is optional, but it does serve as a fallback in the rare case that the dynamic fetch fails.</td>
</tr>
<tr>
    <td><CopyableCode code="messagingSenderId" /></td>
    <td><code>string</code></td>
    <td>The sender ID for use with Firebase Cloud Messaging.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Immutable. A user-assigned unique identifier for the `FirebaseProject`.</td>
</tr>
<tr>
    <td><CopyableCode code="projectNumber" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Google Cloud or third-party services.</td>
</tr>
<tr>
    <td><CopyableCode code="realtimeDatabaseUrl" /></td>
    <td><code>string</code></td>
    <td>Optional. Duplicate field for the URL of the default Realtime Database instances (if the default instance has been provisioned). If the request asks for the V2 config format, this field will be populated instead of `realtime_database_instance_uri`.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBucket" /></td>
    <td><code>string</code></td>
    <td>**DEPRECATED.** _Instead, find the name of the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. If the default bucket for the Project has not yet been provisioned, the return might not contain a default bucket. Note that the config that's generated for the Firebase console or the Firebase CLI uses the Cloud Storage for Firebase endpoint to populate this value for that config._ The name of the default Cloud Storage for Firebase bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the config specification.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_config"><CopyableCode code="get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-webAppsId"><code>webAppsId</code></a></td>
    <td></td>
    <td>Gets the configuration artifact associated with the specified WebApp.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-webAppsId">
    <td><CopyableCode code="webAppsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_config"
    values={[
        { label: 'get_config', value: 'get_config' }
    ]}
>
<TabItem value="get_config">

Gets the configuration artifact associated with the specified WebApp.

```sql
SELECT
apiKey,
appId,
authDomain,
databaseURL,
locationId,
measurementId,
messagingSenderId,
projectId,
projectNumber,
realtimeDatabaseUrl,
storageBucket,
version
FROM firebase.firebase.web_apps_config
WHERE projectsId = '{{ projectsId }}' -- required
AND webAppsId = '{{ webAppsId }}' -- required;
```
</TabItem>
</Tabs>
