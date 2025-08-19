--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - apigee
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_developers_apps_keys_get"
    values={[
        { label: 'organizations_developers_apps_keys_get', value: 'organizations_developers_apps_keys_get' },
        { label: 'organizations_appgroups_apps_keys_get', value: 'organizations_appgroups_apps_keys_get' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_get">

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
    <td><CopyableCode code="apiProducts" /></td>
    <td><code>array</code></td>
    <td>List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>List of attributes associated with the credential.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerKey" /></td>
    <td><code>string</code></td>
    <td>Consumer key.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerSecret" /></td>
    <td><code>string</code></td>
    <td>Secret key.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Time the developer app expires in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresInSeconds" /></td>
    <td><code>string (int64)</code></td>
    <td>Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.</td>
</tr>
<tr>
    <td><CopyableCode code="issuedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Time the developer app was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the credential. Valid values include `approved` or `revoked`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_appgroups_apps_keys_get">

AppGroupAppKey contains all the information associated with the credentials.

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
    <td><CopyableCode code="apiProducts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>List of attributes associated with the credential.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. Consumer key.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerSecret" /></td>
    <td><code>string</code></td>
    <td>Secret key.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the AppGroup app expires in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresInSeconds" /></td>
    <td><code>string (int64)</code></td>
    <td>Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.</td>
</tr>
<tr>
    <td><CopyableCode code="issuedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the AppGroup app was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the credential. Valid values include `approved` or `revoked`.</td>
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
    <td><a href="#organizations_developers_apps_keys_get"><CopyableCode code="organizations_developers_apps_keys_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Gets details for a consumer key for a developer app, including the key and secret value, associated API products, and other information.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_keys_get"><CopyableCode code="organizations_appgroups_apps_keys_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Gets details for a consumer key for a AppGroup app, including the key and secret value, associated API products, and other information.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_keys_create"><CopyableCode code="organizations_developers_apps_keys_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_keys_create"><CopyableCode code="organizations_appgroups_apps_keys_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateAppGroupAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteAppGroupAppKey API.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_keys_replace_developer_app_key"><CopyableCode code="organizations_developers_apps_keys_replace_developer_app_key" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Updates the scope of an app. This API replaces the existing scopes with those specified in the request. Include or exclude any existing scopes that you want to retain or delete, respectively. The specified scopes must already be defined for the API products associated with the app. This API sets the `scopes` element under the `apiProducts` element in the attributes of the app.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_keys_delete"><CopyableCode code="organizations_developers_apps_keys_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs. **Note**: After you delete a consumer key, you may want to: 1. Create a new consumer key and secret for the developer app using the CreateDeveloperAppKey API, and subsequently add an API product to the key using the UpdateDeveloperAppKey API. 2. Delete the developer app, if it is no longer required.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_keys_delete"><CopyableCode code="organizations_appgroups_apps_keys_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs.</td>
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
<tr id="parameter-appgroupsId">
    <td><CopyableCode code="appgroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_developers_apps_keys_get"
    values={[
        { label: 'organizations_developers_apps_keys_get', value: 'organizations_developers_apps_keys_get' },
        { label: 'organizations_appgroups_apps_keys_get', value: 'organizations_appgroups_apps_keys_get' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_get">

Gets details for a consumer key for a developer app, including the key and secret value, associated API products, and other information.

```sql
SELECT
apiProducts,
attributes,
consumerKey,
consumerSecret,
expiresAt,
expiresInSeconds,
issuedAt,
scopes,
status
FROM google.apigee.keys
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND keysId = '{{ keysId }}' -- required;
```
</TabItem>
<TabItem value="organizations_appgroups_apps_keys_get">

Gets details for a consumer key for a AppGroup app, including the key and secret value, associated API products, and other information.

```sql
SELECT
apiProducts,
attributes,
consumerKey,
consumerSecret,
expiresAt,
expiresInSeconds,
issuedAt,
scopes,
status
FROM google.apigee.keys
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appgroupsId = '{{ appgroupsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND keysId = '{{ keysId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_developers_apps_keys_create"
    values={[
        { label: 'organizations_developers_apps_keys_create', value: 'organizations_developers_apps_keys_create' },
        { label: 'organizations_appgroups_apps_keys_create', value: 'organizations_appgroups_apps_keys_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_create">

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.

```sql
INSERT INTO google.apigee.keys (
data__apiProducts,
data__attributes,
data__consumerKey,
data__consumerSecret,
data__expiresAt,
data__issuedAt,
data__scopes,
data__status,
data__expiresInSeconds,
organizationsId,
developersId,
appsId
)
SELECT 
'{{ apiProducts }}',
'{{ attributes }}',
'{{ consumerKey }}',
'{{ consumerSecret }}',
'{{ expiresAt }}',
'{{ issuedAt }}',
'{{ scopes }}',
'{{ status }}',
'{{ expiresInSeconds }}',
'{{ organizationsId }}',
'{{ developersId }}',
'{{ appsId }}'
RETURNING
apiProducts,
attributes,
consumerKey,
consumerSecret,
expiresAt,
expiresInSeconds,
issuedAt,
scopes,
status
;
```
</TabItem>
<TabItem value="organizations_appgroups_apps_keys_create">

Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateAppGroupAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteAppGroupAppKey API.

```sql
INSERT INTO google.apigee.keys (
data__attributes,
data__consumerKey,
data__consumerSecret,
data__scopes,
data__status,
data__expiresInSeconds,
organizationsId,
appgroupsId,
appsId
)
SELECT 
'{{ attributes }}',
'{{ consumerKey }}',
'{{ consumerSecret }}',
'{{ scopes }}',
'{{ status }}',
'{{ expiresInSeconds }}',
'{{ organizationsId }}',
'{{ appgroupsId }}',
'{{ appsId }}'
RETURNING
apiProducts,
attributes,
consumerKey,
consumerSecret,
expiresAt,
expiresInSeconds,
issuedAt,
scopes,
status
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: keys
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the keys resource.
    - name: developersId
      value: string
      description: Required parameter for the keys resource.
    - name: appsId
      value: string
      description: Required parameter for the keys resource.
    - name: appgroupsId
      value: string
      description: Required parameter for the keys resource.
    - name: apiProducts
      value: array
      description: >
        List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.
        
    - name: attributes
      value: array
      description: >
        List of attributes associated with the credential.
        
    - name: consumerKey
      value: string
      description: >
        Immutable. Consumer key.
        
    - name: consumerSecret
      value: string
      description: >
        Secret key.
        
    - name: expiresAt
      value: string
      description: >
        Time the developer app expires in milliseconds since epoch.
        
    - name: issuedAt
      value: string
      description: >
        Time the developer app was created in milliseconds since epoch.
        
    - name: scopes
      value: array
      description: >
        Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.
        
    - name: status
      value: string
      description: >
        Status of the credential. Valid values include `approved` or `revoked`.
        
    - name: expiresInSeconds
      value: string
      description: >
        Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_developers_apps_keys_replace_developer_app_key"
    values={[
        { label: 'organizations_developers_apps_keys_replace_developer_app_key', value: 'organizations_developers_apps_keys_replace_developer_app_key' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_replace_developer_app_key">

Updates the scope of an app. This API replaces the existing scopes with those specified in the request. Include or exclude any existing scopes that you want to retain or delete, respectively. The specified scopes must already be defined for the API products associated with the app. This API sets the `scopes` element under the `apiProducts` element in the attributes of the app.

```sql
REPLACE google.apigee.keys
SET 
data__apiProducts = '{{ apiProducts }}',
data__attributes = '{{ attributes }}',
data__consumerKey = '{{ consumerKey }}',
data__consumerSecret = '{{ consumerSecret }}',
data__expiresAt = '{{ expiresAt }}',
data__issuedAt = '{{ issuedAt }}',
data__scopes = '{{ scopes }}',
data__status = '{{ status }}',
data__expiresInSeconds = '{{ expiresInSeconds }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND appsId = '{{ appsId }}' --required
AND keysId = '{{ keysId }}' --required
RETURNING
apiProducts,
attributes,
consumerKey,
consumerSecret,
expiresAt,
expiresInSeconds,
issuedAt,
scopes,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_developers_apps_keys_delete"
    values={[
        { label: 'organizations_developers_apps_keys_delete', value: 'organizations_developers_apps_keys_delete' },
        { label: 'organizations_appgroups_apps_keys_delete', value: 'organizations_appgroups_apps_keys_delete' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_delete">

Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs. **Note**: After you delete a consumer key, you may want to: 1. Create a new consumer key and secret for the developer app using the CreateDeveloperAppKey API, and subsequently add an API product to the key using the UpdateDeveloperAppKey API. 2. Delete the developer app, if it is no longer required.

```sql
DELETE FROM google.apigee.keys
WHERE organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND appsId = '{{ appsId }}' --required
AND keysId = '{{ keysId }}' --required;
```
</TabItem>
<TabItem value="organizations_appgroups_apps_keys_delete">

Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs.

```sql
DELETE FROM google.apigee.keys
WHERE organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
AND appsId = '{{ appsId }}' --required
AND keysId = '{{ keysId }}' --required;
```
</TabItem>
</Tabs>
