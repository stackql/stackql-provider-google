--- 
title: resourcefiles
hide_title: false
hide_table_of_contents: false
keywords:
  - resourcefiles
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

Creates, updates, deletes, gets or lists a <code>resourcefiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resourcefiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.resourcefiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_resourcefiles_get"
    values={[
        { label: 'organizations_environments_resourcefiles_get', value: 'organizations_environments_resourcefiles_get' },
        { label: 'organizations_environments_resourcefiles_list_environment_resources', value: 'organizations_environments_resourcefiles_list_environment_resources' },
        { label: 'organizations_environments_resourcefiles_list', value: 'organizations_environments_resourcefiles_list' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_get">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_resourcefiles_list_environment_resources">

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
    <td><CopyableCode code="resourceFile" /></td>
    <td><code>array</code></td>
    <td>List of resources files.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_resourcefiles_list">

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
    <td><CopyableCode code="resourceFile" /></td>
    <td><code>array</code></td>
    <td>List of resources files.</td>
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
    <td><a href="#organizations_environments_resourcefiles_get"><CopyableCode code="organizations_environments_resourcefiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
</tr>
<tr>
    <td><a href="#organizations_environments_resourcefiles_list_environment_resources"><CopyableCode code="organizations_environments_resourcefiles_list_environment_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
</tr>
<tr>
    <td><a href="#organizations_environments_resourcefiles_list"><CopyableCode code="organizations_environments_resourcefiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td>Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
</tr>
<tr>
    <td><a href="#organizations_environments_resourcefiles_create"><CopyableCode code="organizations_environments_resourcefiles_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
</tr>
<tr>
    <td><a href="#organizations_environments_resourcefiles_update"><CopyableCode code="organizations_environments_resourcefiles_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
</tr>
<tr>
    <td><a href="#organizations_environments_resourcefiles_delete"><CopyableCode code="organizations_environments_resourcefiles_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_resourcefiles_get"
    values={[
        { label: 'organizations_environments_resourcefiles_get', value: 'organizations_environments_resourcefiles_get' },
        { label: 'organizations_environments_resourcefiles_list_environment_resources', value: 'organizations_environments_resourcefiles_list_environment_resources' },
        { label: 'organizations_environments_resourcefiles_list', value: 'organizations_environments_resourcefiles_list' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_get">

Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
SELECT
contentType,
data,
extensions
FROM google.apigee.resourcefiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND type = '{{ type }}' -- required
AND name = '{{ name }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_resourcefiles_list_environment_resources">

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
SELECT
resourceFile
FROM google.apigee.resourcefiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND type = '{{ type }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_resourcefiles_list">

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
SELECT
resourceFile
FROM google.apigee.resourcefiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND type = '{{ type }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_resourcefiles_create"
    values={[
        { label: 'organizations_environments_resourcefiles_create', value: 'organizations_environments_resourcefiles_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_create">

Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
INSERT INTO google.apigee.resourcefiles (
data__contentType,
data__data,
data__extensions,
organizationsId,
environmentsId,
type,
name
)
SELECT 
'{{ contentType }}',
'{{ data }}',
'{{ extensions }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ type }}',
'{{ name }}'
RETURNING
name,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: resourcefiles
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the resourcefiles resource.
    - name: environmentsId
      value: string
      description: Required parameter for the resourcefiles resource.
    - name: contentType
      value: string
      description: >
        The HTTP Content-Type header value specifying the content type of the body.
        
    - name: data
      value: string
      description: >
        The HTTP request/response body as raw binary.
        
    - name: extensions
      value: array
      description: >
        Application specific response metadata. Must be set in the first response for streaming APIs.
        
    - name: type
      value: string
    - name: name
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_environments_resourcefiles_update"
    values={[
        { label: 'organizations_environments_resourcefiles_update', value: 'organizations_environments_resourcefiles_update' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_update">

Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
REPLACE google.apigee.resourcefiles
SET 
data__contentType = '{{ contentType }}',
data__data = '{{ data }}',
data__extensions = '{{ extensions }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND type = '{{ type }}' --required
AND name = '{{ name }}' --required
RETURNING
name,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_environments_resourcefiles_delete"
    values={[
        { label: 'organizations_environments_resourcefiles_delete', value: 'organizations_environments_resourcefiles_delete' }
    ]}
>
<TabItem value="organizations_environments_resourcefiles_delete">

Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

```sql
DELETE FROM google.apigee.resourcefiles
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND type = '{{ type }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>
