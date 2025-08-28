--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - appengine
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="authDomain" /></td>
    <td><code>string</code></td>
    <td>Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.</td>
</tr>
<tr>
    <td><CopyableCode code="codeBucket" /></td>
    <td><code>string</code></td>
    <td>Output only. Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="databaseType" /></td>
    <td><code>string</code></td>
    <td>The type of the Cloud Firestore or Cloud Datastore database associated with this application.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultBucket" /></td>
    <td><code>string</code></td>
    <td>Output only. Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="defaultCookieExpiration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Cookie expiration policy for this application.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultHostname" /></td>
    <td><code>string</code></td>
    <td>Output only. Hostname used to reach this application, as resolved by App Engine.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="dispatchRules" /></td>
    <td><code>array</code></td>
    <td>HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.</td>
</tr>
<tr>
    <td><CopyableCode code="featureSettings" /></td>
    <td><code>object</code></td>
    <td>The feature specific settings to be used in the application. (id: FeatureSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="gcrDomain" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google Container Registry domain used for storing managed build docker images for this application.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedCustomerMetadata" /></td>
    <td><code>object</code></td>
    <td>Additional Google Generated Customer Metadata, this field won't be provided by default and can be requested by setting the IncludeExtraData field in GetApplicationRequest</td>
</tr>
<tr>
    <td><CopyableCode code="iap" /></td>
    <td><code>object</code></td>
    <td>Identity-Aware Proxy (id: IdentityAwareProxy)</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.</td>
</tr>
<tr>
    <td><CopyableCode code="servingStatus" /></td>
    <td><code>string</code></td>
    <td>Serving status of this application.</td>
</tr>
<tr>
    <td><CopyableCode code="sslPolicy" /></td>
    <td><code>string</code></td>
    <td>The SSL policy that will be applied to the application. If set to Modern it will restrict traffic with TLS &lt; 1.2 and allow only Modern Ciphers suite</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-includeExtraData"><code>includeExtraData</code></a></td>
    <td>Gets information about an application.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.</td>
</tr>
<tr>
    <td><a href="#repair"><CopyableCode code="repair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.</td>
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
<tr id="parameter-applicationsId">
    <td><CopyableCode code="applicationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeExtraData">
    <td><CopyableCode code="includeExtraData" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets information about an application.

```sql
SELECT
id,
name,
authDomain,
codeBucket,
databaseType,
defaultBucket,
defaultCookieExpiration,
defaultHostname,
dispatchRules,
featureSettings,
gcrDomain,
generatedCustomerMetadata,
iap,
locationId,
serviceAccount,
servingStatus,
sslPolicy
FROM google.appengine.apps
WHERE appsId = '{{ appsId }}' -- required
AND includeExtraData = '{{ includeExtraData }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

```sql
INSERT INTO google.appengine.apps (
data__id,
data__dispatchRules,
data__authDomain,
data__locationId,
data__defaultCookieExpiration,
data__servingStatus,
data__serviceAccount,
data__iap,
data__databaseType,
data__featureSettings,
data__generatedCustomerMetadata,
data__sslPolicy
)
SELECT 
'{{ id }}',
'{{ dispatchRules }}',
'{{ authDomain }}',
'{{ locationId }}',
'{{ defaultCookieExpiration }}',
'{{ servingStatus }}',
'{{ serviceAccount }}',
'{{ iap }}',
'{{ databaseType }}',
'{{ featureSettings }}',
'{{ generatedCustomerMetadata }}',
'{{ sslPolicy }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apps
  props:
    - name: id
      value: string
      description: >
        Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
        
    - name: dispatchRules
      value: array
      description: >
        HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.
        
    - name: authDomain
      value: string
      description: >
        Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
        
    - name: locationId
      value: string
      description: >
        Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).
        
    - name: defaultCookieExpiration
      value: string
      description: >
        Cookie expiration policy for this application.
        
    - name: servingStatus
      value: string
      description: >
        Serving status of this application.
        
      valid_values: ['UNSPECIFIED', 'SERVING', 'USER_DISABLED', 'SYSTEM_DISABLED']
    - name: serviceAccount
      value: string
      description: >
        The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.
        
    - name: iap
      value: object
      description: >
        Identity-Aware Proxy
        
    - name: databaseType
      value: string
      description: >
        The type of the Cloud Firestore or Cloud Datastore database associated with this application.
        
      valid_values: ['DATABASE_TYPE_UNSPECIFIED', 'CLOUD_DATASTORE', 'CLOUD_FIRESTORE', 'CLOUD_DATASTORE_COMPATIBILITY']
    - name: featureSettings
      value: object
      description: >
        The feature specific settings to be used in the application.
        
    - name: generatedCustomerMetadata
      value: object
      description: >
        Additional Google Generated Customer Metadata, this field won't be provided by default and can be requested by setting the IncludeExtraData field in GetApplicationRequest
        
    - name: sslPolicy
      value: string
      description: >
        The SSL policy that will be applied to the application. If set to Modern it will restrict traffic with TLS < 1.2 and allow only Modern Ciphers suite
        
      valid_values: ['SSL_POLICY_UNSPECIFIED', 'DEFAULT', 'MODERN']
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

```sql
UPDATE google.appengine.apps
SET 
data__id = '{{ id }}',
data__dispatchRules = '{{ dispatchRules }}',
data__authDomain = '{{ authDomain }}',
data__locationId = '{{ locationId }}',
data__defaultCookieExpiration = '{{ defaultCookieExpiration }}',
data__servingStatus = '{{ servingStatus }}',
data__serviceAccount = '{{ serviceAccount }}',
data__iap = '{{ iap }}',
data__databaseType = '{{ databaseType }}',
data__featureSettings = '{{ featureSettings }}',
data__generatedCustomerMetadata = '{{ generatedCustomerMetadata }}',
data__sslPolicy = '{{ sslPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="repair"
    values={[
        { label: 'repair', value: 'repair' }
    ]}
>
<TabItem value="repair">

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

```sql
EXEC google.appengine.apps.repair 
@appsId='{{ appsId }}' --required;
```
</TabItem>
</Tabs>
