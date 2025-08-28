--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
  - connectors
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

Creates, updates, deletes, gets or lists an <code>entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.connectors.entities" /></td></tr>
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
    <td>Output only. Resource name of the Entity. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;connection&#125;/entityTypes/&#123;type&#125;/entities/&#123;id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata like service latency, etc.</td>
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
    <td>Output only. Resource name of the Entity. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;connection&#125;/entityTypes/&#123;type&#125;/entities/&#123;id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata like service latency, etc.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td></td>
    <td>Gets a single entity row matching the entity type and entity id specified in the request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-conditions"><code>conditions</code></a></td>
    <td>Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td></td>
    <td>Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.</td>
</tr>
<tr>
    <td><a href="#update_entities_with_conditions"><CopyableCode code="update_entities_with_conditions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-conditions"><code>conditions</code></a></td>
    <td>Updates entities based on conditions specified in the request and not on entity id.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td></td>
    <td>Deletes an existing entity row matching the entity type and entity id specified in the request.</td>
</tr>
<tr>
    <td><a href="#delete_entities_with_conditions"><CopyableCode code="delete_entities_with_conditions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-conditions"><code>conditions</code></a></td>
    <td>Deletes entities based on conditions specified in the request and not on entity id.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-entitiesId">
    <td><CopyableCode code="entitiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-entityTypesId">
    <td><CopyableCode code="entityTypesId" /></td>
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
<tr id="parameter-conditions">
    <td><CopyableCode code="conditions" /></td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
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

Gets a single entity row matching the entity type and entity id specified in the request.

```sql
SELECT
name,
fields,
metadata
FROM google.connectors.entities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required
AND entitiesId = '{{ entitiesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.

```sql
SELECT
name,
fields,
metadata
FROM google.connectors.entities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND conditions = '{{ conditions }}';
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

Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.

```sql
INSERT INTO google.connectors.entities (
data__fields,
data__metadata,
projectsId,
locationsId,
connectionsId,
entityTypesId
)
SELECT 
'{{ fields }}',
'{{ metadata }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionsId }}',
'{{ entityTypesId }}'
RETURNING
name,
fields,
metadata
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: entities
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entities resource.
    - name: locationsId
      value: string
      description: Required parameter for the entities resource.
    - name: connectionsId
      value: string
      description: Required parameter for the entities resource.
    - name: entityTypesId
      value: string
      description: Required parameter for the entities resource.
    - name: fields
      value: object
      description: >
        Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.
        
    - name: metadata
      value: object
      description: >
        Metadata like service latency, etc.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'update_entities_with_conditions', value: 'update_entities_with_conditions' }
    ]}
>
<TabItem value="patch">

Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.

```sql
UPDATE google.connectors.entities
SET 
data__fields = '{{ fields }}',
data__metadata = '{{ metadata }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND entitiesId = '{{ entitiesId }}' --required
RETURNING
name,
fields,
metadata;
```
</TabItem>
<TabItem value="update_entities_with_conditions">

Updates entities based on conditions specified in the request and not on entity id.

```sql
UPDATE google.connectors.entities
SET 
data__fields = '{{ fields }}',
data__metadata = '{{ metadata }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND conditions = '{{ conditions}}'
RETURNING
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'delete_entities_with_conditions', value: 'delete_entities_with_conditions' }
    ]}
>
<TabItem value="delete">

Deletes an existing entity row matching the entity type and entity id specified in the request.

```sql
DELETE FROM google.connectors.entities
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND entitiesId = '{{ entitiesId }}' --required;
```
</TabItem>
<TabItem value="delete_entities_with_conditions">

Deletes entities based on conditions specified in the request and not on entity id.

```sql
DELETE FROM google.connectors.entities
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND conditions = '{{ conditions }}';
```
</TabItem>
</Tabs>
