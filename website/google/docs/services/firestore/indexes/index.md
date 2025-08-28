--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
  - firestore
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>indexes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.indexes" /></td></tr>
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
    <td>Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/&#123;project_id&#125;/databases/&#123;database_id&#125;/collectionGroups/&#123;collection_id&#125;/indexes/&#123;composite_index_id&#125;` For single field indexes, this field will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="apiScope" /></td>
    <td><code>string</code></td>
    <td>The API scope supported by this index.</td>
</tr>
<tr>
    <td><CopyableCode code="density" /></td>
    <td><code>string</code></td>
    <td>Immutable. The density configuration of the index.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.</td>
</tr>
<tr>
    <td><CopyableCode code="multikey" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to index with MONGODB_COMPATIBLE_API ApiScope.</td>
</tr>
<tr>
    <td><CopyableCode code="queryScope" /></td>
    <td><code>string</code></td>
    <td>Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection ID. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection ID as this index.</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of shards for the index.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The serving state of the index.</td>
</tr>
<tr>
    <td><CopyableCode code="unique" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.</td>
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
    <td>Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/&#123;project_id&#125;/databases/&#123;database_id&#125;/collectionGroups/&#123;collection_id&#125;/indexes/&#123;composite_index_id&#125;` For single field indexes, this field will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="apiScope" /></td>
    <td><code>string</code></td>
    <td>The API scope supported by this index.</td>
</tr>
<tr>
    <td><CopyableCode code="density" /></td>
    <td><code>string</code></td>
    <td>Immutable. The density configuration of the index.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.</td>
</tr>
<tr>
    <td><CopyableCode code="multikey" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to index with MONGODB_COMPATIBLE_API ApiScope.</td>
</tr>
<tr>
    <td><CopyableCode code="queryScope" /></td>
    <td><code>string</code></td>
    <td>Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection ID. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection ID as this index.</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of shards for the index.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The serving state of the index.</td>
</tr>
<tr>
    <td><CopyableCode code="unique" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-collectionGroupsId"><code>collectionGroupsId</code></a>, <a href="#parameter-indexesId"><code>indexesId</code></a></td>
    <td></td>
    <td>Gets a composite index.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-collectionGroupsId"><code>collectionGroupsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists composite indexes.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-collectionGroupsId"><code>collectionGroupsId</code></a></td>
    <td></td>
    <td>Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-collectionGroupsId"><code>collectionGroupsId</code></a>, <a href="#parameter-indexesId"><code>indexesId</code></a></td>
    <td></td>
    <td>Deletes a composite index.</td>
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
<tr id="parameter-collectionGroupsId">
    <td><CopyableCode code="collectionGroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-indexesId">
    <td><CopyableCode code="indexesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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

Gets a composite index.

```sql
SELECT
name,
apiScope,
density,
fields,
multikey,
queryScope,
shardCount,
state,
unique
FROM google.firestore.indexes
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND collectionGroupsId = '{{ collectionGroupsId }}' -- required
AND indexesId = '{{ indexesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists composite indexes.

```sql
SELECT
name,
apiScope,
density,
fields,
multikey,
queryScope,
shardCount,
state,
unique
FROM google.firestore.indexes
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND collectionGroupsId = '{{ collectionGroupsId }}' -- required
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

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

```sql
INSERT INTO google.firestore.indexes (
data__name,
data__queryScope,
data__apiScope,
data__fields,
data__state,
data__density,
data__multikey,
data__shardCount,
data__unique,
projectsId,
databasesId,
collectionGroupsId
)
SELECT 
'{{ name }}',
'{{ queryScope }}',
'{{ apiScope }}',
'{{ fields }}',
'{{ state }}',
'{{ density }}',
{{ multikey }},
{{ shardCount }},
{{ unique }},
'{{ projectsId }}',
'{{ databasesId }}',
'{{ collectionGroupsId }}'
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
- name: indexes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the indexes resource.
    - name: databasesId
      value: string
      description: Required parameter for the indexes resource.
    - name: collectionGroupsId
      value: string
      description: Required parameter for the indexes resource.
    - name: name
      value: string
      description: >
        Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.
        
    - name: queryScope
      value: string
      description: >
        Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection ID. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection ID as this index.
        
      valid_values: ['QUERY_SCOPE_UNSPECIFIED', 'COLLECTION', 'COLLECTION_GROUP', 'COLLECTION_RECURSIVE']
    - name: apiScope
      value: string
      description: >
        The API scope supported by this index.
        
      valid_values: ['ANY_API', 'DATASTORE_MODE_API', 'MONGODB_COMPATIBLE_API']
    - name: fields
      value: array
      description: >
        The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.
        
    - name: state
      value: string
      description: >
        Output only. The serving state of the index.
        
      valid_values: ['STATE_UNSPECIFIED', 'CREATING', 'READY', 'NEEDS_REPAIR']
    - name: density
      value: string
      description: >
        Immutable. The density configuration of the index.
        
      valid_values: ['DENSITY_UNSPECIFIED', 'SPARSE_ALL', 'SPARSE_ANY', 'DENSE']
    - name: multikey
      value: boolean
      description: >
        Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to index with MONGODB_COMPATIBLE_API ApiScope.
        
    - name: shardCount
      value: integer
      description: >
        Optional. The number of shards for the index.
        
    - name: unique
      value: boolean
      description: >
        Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.
        
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

Deletes a composite index.

```sql
DELETE FROM google.firestore.indexes
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND collectionGroupsId = '{{ collectionGroupsId }}' --required
AND indexesId = '{{ indexesId }}' --required;
```
</TabItem>
</Tabs>
