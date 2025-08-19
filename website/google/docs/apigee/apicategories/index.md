--- 
title: apicategories
hide_title: false
hide_table_of_contents: false
keywords:
  - apicategories
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

Creates, updates, deletes, gets or lists an <code>apicategories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apicategories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apicategories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_sites_apicategories_get"
    values={[
        { label: 'organizations_sites_apicategories_get', value: 'organizations_sites_apicategories_get' },
        { label: 'organizations_sites_apicategories_list', value: 'organizations_sites_apicategories_list' }
    ]}
>
<TabItem value="organizations_sites_apicategories_get">

The API category resource wrapped with response status, error_code, etc.

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>The API category resource. (id: GoogleCloudApigeeV1ApiCategory)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Unique error code for the request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Description of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sites_apicategories_list">

The response for `ListApiCategoriesRequest`. Next ID: 6

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
    <td><CopyableCode code="data" /></td>
    <td><code>array</code></td>
    <td>The API category resources.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Unique error code for the request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Description of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation.</td>
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
    <td><a href="#organizations_sites_apicategories_get"><CopyableCode code="organizations_sites_apicategories_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apicategoriesId"><code>apicategoriesId</code></a></td>
    <td></td>
    <td>Gets an API category.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apicategories_list"><CopyableCode code="organizations_sites_apicategories_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a></td>
    <td></td>
    <td>Returns the API categories associated with a portal.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apicategories_create"><CopyableCode code="organizations_sites_apicategories_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a></td>
    <td></td>
    <td>Creates a new API category.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apicategories_patch"><CopyableCode code="organizations_sites_apicategories_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apicategoriesId"><code>apicategoriesId</code></a></td>
    <td></td>
    <td>Updates an API category.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apicategories_delete"><CopyableCode code="organizations_sites_apicategories_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apicategoriesId"><code>apicategoriesId</code></a></td>
    <td></td>
    <td>Deletes an API category.</td>
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
<tr id="parameter-apicategoriesId">
    <td><CopyableCode code="apicategoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sitesId">
    <td><CopyableCode code="sitesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_sites_apicategories_get"
    values={[
        { label: 'organizations_sites_apicategories_get', value: 'organizations_sites_apicategories_get' },
        { label: 'organizations_sites_apicategories_list', value: 'organizations_sites_apicategories_list' }
    ]}
>
<TabItem value="organizations_sites_apicategories_get">

Gets an API category.

```sql
SELECT
data,
errorCode,
message,
requestId,
status
FROM google.apigee.apicategories
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sitesId = '{{ sitesId }}' -- required
AND apicategoriesId = '{{ apicategoriesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_sites_apicategories_list">

Returns the API categories associated with a portal.

```sql
SELECT
data,
errorCode,
message,
requestId,
status
FROM google.apigee.apicategories
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sitesId = '{{ sitesId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_sites_apicategories_create"
    values={[
        { label: 'organizations_sites_apicategories_create', value: 'organizations_sites_apicategories_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_sites_apicategories_create">

Creates a new API category.

```sql
INSERT INTO google.apigee.apicategories (
data__siteId,
data__name,
data__id,
data__updateTime,
organizationsId,
sitesId
)
SELECT 
'{{ siteId }}',
'{{ name }}',
'{{ id }}',
'{{ updateTime }}',
'{{ organizationsId }}',
'{{ sitesId }}'
RETURNING
data,
errorCode,
message,
requestId,
status
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apicategories
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the apicategories resource.
    - name: sitesId
      value: string
      description: Required parameter for the apicategories resource.
    - name: siteId
      value: string
      description: >
        Name of the portal.
        
    - name: name
      value: string
      description: >
        Name of the category.
        
    - name: id
      value: string
      description: >
        ID of the category (a UUID).
        
    - name: updateTime
      value: string
      description: >
        Time the category was last modified in milliseconds since epoch.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_sites_apicategories_patch"
    values={[
        { label: 'organizations_sites_apicategories_patch', value: 'organizations_sites_apicategories_patch' }
    ]}
>
<TabItem value="organizations_sites_apicategories_patch">

Updates an API category.

```sql
UPDATE google.apigee.apicategories
SET 
data__siteId = '{{ siteId }}',
data__name = '{{ name }}',
data__id = '{{ id }}',
data__updateTime = '{{ updateTime }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sitesId = '{{ sitesId }}' --required
AND apicategoriesId = '{{ apicategoriesId }}' --required
RETURNING
data,
errorCode,
message,
requestId,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_sites_apicategories_delete"
    values={[
        { label: 'organizations_sites_apicategories_delete', value: 'organizations_sites_apicategories_delete' }
    ]}
>
<TabItem value="organizations_sites_apicategories_delete">

Deletes an API category.

```sql
DELETE FROM google.apigee.apicategories
WHERE organizationsId = '{{ organizationsId }}' --required
AND sitesId = '{{ sitesId }}' --required
AND apicategoriesId = '{{ apicategoriesId }}' --required;
```
</TabItem>
</Tabs>
