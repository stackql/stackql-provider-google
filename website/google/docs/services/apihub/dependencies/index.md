--- 
title: dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - dependencies
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

Creates, updates, deletes, gets or lists a <code>dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dependencies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.dependencies" /></td></tr>
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
    <td>Identifier. The name of the dependency in the API Hub. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/dependencies/&#123;dependency&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`. The value is the attribute values associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="consumer" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The entity acting as the consumer in the dependency. (id: GoogleCloudApihubV1DependencyEntityReference)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the dependency was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human readable description corresponding of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryMode" /></td>
    <td><code>string</code></td>
    <td>Output only. Discovery mode of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetail" /></td>
    <td><code>object</code></td>
    <td>Output only. Error details of a dependency if the system has detected it internally. (id: GoogleCloudApihubV1DependencyErrorDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="supplier" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The entity acting as the supplier in the dependency. (id: GoogleCloudApihubV1DependencyEntityReference)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the dependency was last updated.</td>
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
    <td>Identifier. The name of the dependency in the API Hub. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/dependencies/&#123;dependency&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`. The value is the attribute values associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="consumer" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The entity acting as the consumer in the dependency. (id: GoogleCloudApihubV1DependencyEntityReference)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the dependency was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human readable description corresponding of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryMode" /></td>
    <td><code>string</code></td>
    <td>Output only. Discovery mode of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetail" /></td>
    <td><code>object</code></td>
    <td>Output only. Error details of a dependency if the system has detected it internally. (id: GoogleCloudApihubV1DependencyErrorDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="supplier" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The entity acting as the supplier in the dependency. (id: GoogleCloudApihubV1DependencyEntityReference)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the dependency was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dependenciesId"><code>dependenciesId</code></a></td>
    <td></td>
    <td>Get details about a dependency resource in the API hub.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List dependencies based on the provided filter and pagination parameters.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dependencyId"><code>dependencyId</code></a></td>
    <td>Create a dependency between two entities in the API hub.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dependenciesId"><code>dependenciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a dependency based on the update_mask provided in the request. The following fields in the dependency can be updated: * description</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dependenciesId"><code>dependenciesId</code></a></td>
    <td></td>
    <td>Delete the dependency resource.</td>
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
<tr id="parameter-dependenciesId">
    <td><CopyableCode code="dependenciesId" /></td>
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
<tr id="parameter-dependencyId">
    <td><CopyableCode code="dependencyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Get details about a dependency resource in the API hub.

```sql
SELECT
name,
attributes,
consumer,
createTime,
description,
discoveryMode,
errorDetail,
state,
supplier,
updateTime
FROM google.apihub.dependencies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dependenciesId = '{{ dependenciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List dependencies based on the provided filter and pagination parameters.

```sql
SELECT
name,
attributes,
consumer,
createTime,
description,
discoveryMode,
errorDetail,
state,
supplier,
updateTime
FROM google.apihub.dependencies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
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

Create a dependency between two entities in the API hub.

```sql
INSERT INTO google.apihub.dependencies (
data__name,
data__consumer,
data__supplier,
data__description,
data__attributes,
projectsId,
locationsId,
dependencyId
)
SELECT 
'{{ name }}',
'{{ consumer }}',
'{{ supplier }}',
'{{ description }}',
'{{ attributes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dependencyId }}'
RETURNING
name,
attributes,
consumer,
createTime,
description,
discoveryMode,
errorDetail,
state,
supplier,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dependencies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the dependencies resource.
    - name: locationsId
      value: string
      description: Required parameter for the dependencies resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the dependency in the API Hub. Format: `projects/{project}/locations/{location}/dependencies/{dependency}`
        
    - name: consumer
      value: object
      description: >
        Required. Immutable. The entity acting as the consumer in the dependency.
        
    - name: supplier
      value: object
      description: >
        Required. Immutable. The entity acting as the supplier in the dependency.
        
    - name: description
      value: string
      description: >
        Optional. Human readable description corresponding of the dependency.
        
    - name: attributes
      value: object
      description: >
        Optional. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource.
        
    - name: dependencyId
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

Update a dependency based on the update_mask provided in the request. The following fields in the dependency can be updated: * description

```sql
UPDATE google.apihub.dependencies
SET 
data__name = '{{ name }}',
data__consumer = '{{ consumer }}',
data__supplier = '{{ supplier }}',
data__description = '{{ description }}',
data__attributes = '{{ attributes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dependenciesId = '{{ dependenciesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
attributes,
consumer,
createTime,
description,
discoveryMode,
errorDetail,
state,
supplier,
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

Delete the dependency resource.

```sql
DELETE FROM google.apihub.dependencies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dependenciesId = '{{ dependenciesId }}' --required;
```
</TabItem>
</Tabs>
