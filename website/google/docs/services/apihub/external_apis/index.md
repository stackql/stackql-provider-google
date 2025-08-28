--- 
title: external_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - external_apis
  - apihub
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

Creates, updates, deletes, gets or lists an <code>external_apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>external_apis</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.external_apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/externalApi/&#123;externalApi&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`. The value is the attribute values associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the external API. Max length is 2000 characters (Unicode Code Points).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the external API. Max length is 63 characters (Unicode Code Points).</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Optional. Documentation of the external API. (id: GoogleCloudApihubV1Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. List of endpoints on which this API is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="paths" /></td>
    <td><code>array</code></td>
    <td>Optional. List of paths served by this API.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/externalApi/&#123;externalApi&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`. The value is the attribute values associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the external API. Max length is 2000 characters (Unicode Code Points).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the external API. Max length is 63 characters (Unicode Code Points).</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Optional. Documentation of the external API. (id: GoogleCloudApihubV1Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. List of endpoints on which this API is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="paths" /></td>
    <td><code>array</code></td>
    <td>Optional. List of paths served by this API.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update timestamp.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-externalApisId"><code>externalApisId</code></a></td>
    <td></td>
    <td>Get details about an External API resource in the API hub.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List External API resources in the API hub.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-externalApiId"><code>externalApiId</code></a></td>
    <td>Create an External API resource in the API hub.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-externalApisId"><code>externalApisId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update an External API resource in the API hub. The following fields can be updated: * display_name * description * documentation * endpoints * paths The update_mask should be used to specify the fields being updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-externalApisId"><code>externalApisId</code></a></td>
    <td></td>
    <td>Delete an External API resource in the API hub.</td>
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
<tr id="parameter-externalApisId">
    <td><CopyableCode code="externalApisId" /></td>
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
<tr id="parameter-externalApiId">
    <td><CopyableCode code="externalApiId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details about an External API resource in the API hub.

```sql
SELECT
name,
attributes,
createTime,
description,
displayName,
documentation,
endpoints,
paths,
updateTime
FROM google.apihub.external_apis
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND externalApisId = '{{ externalApisId }}' -- required;
```
</TabItem>
<TabItem value="list">

List External API resources in the API hub.

```sql
SELECT
name,
attributes,
createTime,
description,
displayName,
documentation,
endpoints,
paths,
updateTime
FROM google.apihub.external_apis
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Create an External API resource in the API hub.

```sql
INSERT INTO google.apihub.external_apis (
data__name,
data__displayName,
data__description,
data__endpoints,
data__paths,
data__documentation,
data__attributes,
projectsId,
locationsId,
externalApiId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ endpoints }}',
'{{ paths }}',
'{{ documentation }}',
'{{ attributes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ externalApiId }}'
RETURNING
name,
attributes,
createTime,
description,
displayName,
documentation,
endpoints,
paths,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: external_apis
  props:
    - name: projectsId
      value: string
      description: Required parameter for the external_apis resource.
    - name: locationsId
      value: string
      description: Required parameter for the external_apis resource.
    - name: name
      value: string
      description: >
        Identifier. Format: `projects/{project}/locations/{location}/externalApi/{externalApi}`.
        
    - name: displayName
      value: string
      description: >
        Required. Display name of the external API. Max length is 63 characters (Unicode Code Points).
        
    - name: description
      value: string
      description: >
        Optional. Description of the external API. Max length is 2000 characters (Unicode Code Points).
        
    - name: endpoints
      value: array
      description: >
        Optional. List of endpoints on which this API is accessible.
        
    - name: paths
      value: array
      description: >
        Optional. List of paths served by this API.
        
    - name: documentation
      value: object
      description: >
        Optional. Documentation of the external API.
        
    - name: attributes
      value: object
      description: >
        Optional. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource.
        
    - name: externalApiId
      value: string
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

Update an External API resource in the API hub. The following fields can be updated: * display_name * description * documentation * endpoints * paths The update_mask should be used to specify the fields being updated.

```sql
UPDATE google.apihub.external_apis
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__endpoints = '{{ endpoints }}',
data__paths = '{{ paths }}',
data__documentation = '{{ documentation }}',
data__attributes = '{{ attributes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND externalApisId = '{{ externalApisId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
attributes,
createTime,
description,
displayName,
documentation,
endpoints,
paths,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an External API resource in the API hub.

```sql
DELETE FROM google.apihub.external_apis
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND externalApisId = '{{ externalApisId }}' --required;
```
</TabItem>
</Tabs>
