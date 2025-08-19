--- 
title: create
hide_title: false
hide_table_of_contents: false
keywords:
  - create
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

Creates, updates, deletes, gets or lists a <code>create</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>create</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.create" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#organizations_developers_apps_keys_create_create"><CopyableCode code="organizations_developers_apps_keys_create_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="organizations_developers_apps_keys_create_create"
    values={[
        { label: 'organizations_developers_apps_keys_create_create', value: 'organizations_developers_apps_keys_create_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_create_create">

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.

```sql
INSERT INTO google.apigee.create (
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
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: create
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the create resource.
    - name: developersId
      value: string
      description: Required parameter for the create resource.
    - name: appsId
      value: string
      description: Required parameter for the create resource.
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
        Consumer key.
        
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
        Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.
        
```
</TabItem>
</Tabs>
