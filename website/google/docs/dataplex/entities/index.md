--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
  - dataplex
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_get"
    values={[
        { label: 'projects_locations_lakes_zones_entities_get', value: 'projects_locations_lakes_zones_entities_get' },
        { label: 'projects_locations_lakes_zones_entities_list', value: 'projects_locations_lakes_zones_entities_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_get">

Represents tables and fileset metadata contained within a zone.

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
    <td>Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the entity, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;/entities/&#123;id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="access" /></td>
    <td><code>object</code></td>
    <td>Output only. Identifies the access mechanism to the entity. Not user settable. (id: GoogleCloudDataplexV1StorageAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="asset" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="catalogEntry" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the associated Data Catalog entry.</td>
</tr>
<tr>
    <td><CopyableCode code="compatibility" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata stores that the entity is compatible with. (id: GoogleCloudDataplexV1EntityCompatibilityStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the entity was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPath" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPathPattern" /></td>
    <td><code>string</code></td>
    <td>Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name must be shorter than or equal to 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>object</code></td>
    <td>Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery. (id: GoogleCloudDataplexV1StorageFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response. (id: GoogleCloudDataplexV1Schema)</td>
</tr>
<tr>
    <td><CopyableCode code="system" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Identifies the storage system of the entity data.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The type of entity.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the entity was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_zones_entities_list">

List metadata entities response.

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>Entities in the specified parent zone.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no remaining results in the list.</td>
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
    <td><a href="#projects_locations_lakes_zones_entities_get"><CopyableCode code="projects_locations_lakes_zones_entities_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Get a metadata entity.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_list"><CopyableCode code="projects_locations_lakes_zones_entities_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List metadata entities in a zone.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_create"><CopyableCode code="projects_locations_lakes_zones_entities_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a metadata entity.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_update"><CopyableCode code="projects_locations_lakes_zones_entities_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update a metadata entity. Only supports full resource update.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_entities_delete"><CopyableCode code="projects_locations_lakes_zones_entities_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-entitiesId"><code>entitiesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Delete a metadata entity.</td>
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
<tr id="parameter-entitiesId">
    <td><CopyableCode code="entitiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-lakesId">
    <td><CopyableCode code="lakesId" /></td>
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
<tr id="parameter-zonesId">
    <td><CopyableCode code="zonesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_get"
    values={[
        { label: 'projects_locations_lakes_zones_entities_get', value: 'projects_locations_lakes_zones_entities_get' },
        { label: 'projects_locations_lakes_zones_entities_list', value: 'projects_locations_lakes_zones_entities_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_get">

Get a metadata entity.

```sql
SELECT
id,
name,
access,
asset,
catalogEntry,
compatibility,
createTime,
dataPath,
dataPathPattern,
description,
displayName,
etag,
format,
schema,
system,
type,
uid,
updateTime
FROM google.dataplex.entities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND entitiesId = '{{ entitiesId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_locations_lakes_zones_entities_list">

List metadata entities in a zone.

```sql
SELECT
entities,
nextPageToken
FROM google.dataplex.entities
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_create"
    values={[
        { label: 'projects_locations_lakes_zones_entities_create', value: 'projects_locations_lakes_zones_entities_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_create">

Create a metadata entity.

```sql
INSERT INTO google.dataplex.entities (
data__displayName,
data__description,
data__id,
data__etag,
data__type,
data__asset,
data__dataPath,
data__dataPathPattern,
data__system,
data__format,
data__schema,
projectsId,
locationsId,
lakesId,
zonesId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ id }}',
'{{ etag }}',
'{{ type }}',
'{{ asset }}',
'{{ dataPath }}',
'{{ dataPathPattern }}',
'{{ system }}',
'{{ format }}',
'{{ schema }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ zonesId }}',
'{{ validateOnly }}'
RETURNING
id,
name,
access,
asset,
catalogEntry,
compatibility,
createTime,
dataPath,
dataPathPattern,
description,
displayName,
etag,
format,
schema,
system,
type,
uid,
updateTime
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
    - name: lakesId
      value: string
      description: Required parameter for the entities resource.
    - name: zonesId
      value: string
      description: Required parameter for the entities resource.
    - name: displayName
      value: string
      description: >
        Optional. Display name must be shorter than or equal to 256 characters.
        
    - name: description
      value: string
      description: >
        Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.
        
    - name: id
      value: string
      description: >
        Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters.
        
    - name: etag
      value: string
      description: >
        Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.
        
    - name: type
      value: string
      description: >
        Required. Immutable. The type of entity.
        
      valid_values: ['TYPE_UNSPECIFIED', 'TABLE', 'FILESET']
    - name: asset
      value: string
      description: >
        Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.
        
    - name: dataPath
      value: string
      description: >
        Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.
        
    - name: dataPathPattern
      value: string
      description: >
        Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv.
        
    - name: system
      value: string
      description: >
        Required. Immutable. Identifies the storage system of the entity data.
        
      valid_values: ['STORAGE_SYSTEM_UNSPECIFIED', 'CLOUD_STORAGE', 'BIGQUERY']
    - name: format
      value: object
      description: >
        Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery.
        
    - name: schema
      value: object
      description: >
        Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response.
        
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_update"
    values={[
        { label: 'projects_locations_lakes_zones_entities_update', value: 'projects_locations_lakes_zones_entities_update' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_update">

Update a metadata entity. Only supports full resource update.

```sql
REPLACE google.dataplex.entities
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__id = '{{ id }}',
data__etag = '{{ etag }}',
data__type = '{{ type }}',
data__asset = '{{ asset }}',
data__dataPath = '{{ dataPath }}',
data__dataPathPattern = '{{ dataPathPattern }}',
data__system = '{{ system }}',
data__format = '{{ format }}',
data__schema = '{{ schema }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required
AND entitiesId = '{{ entitiesId }}' --required
AND validateOnly = {{ validateOnly}}
RETURNING
id,
name,
access,
asset,
catalogEntry,
compatibility,
createTime,
dataPath,
dataPathPattern,
description,
displayName,
etag,
format,
schema,
system,
type,
uid,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_entities_delete"
    values={[
        { label: 'projects_locations_lakes_zones_entities_delete', value: 'projects_locations_lakes_zones_entities_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_entities_delete">

Delete a metadata entity.

```sql
DELETE FROM google.dataplex.entities
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required
AND entitiesId = '{{ entitiesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
