--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_schemas_get"
    values={[
        { label: 'projects_locations_collections_data_stores_schemas_get', value: 'projects_locations_collections_data_stores_schemas_get' },
        { label: 'projects_locations_collections_data_stores_schemas_list', value: 'projects_locations_collections_data_stores_schemas_list' },
        { label: 'projects_locations_data_stores_schemas_get', value: 'projects_locations_data_stores_schemas_get' },
        { label: 'projects_locations_data_stores_schemas_list', value: 'projects_locations_data_stores_schemas_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_schemas_get">

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
    <td>Immutable. The full resource name of the schema, in the format of `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/schemas/&#123;schema&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonSchema" /></td>
    <td><code>string</code></td>
    <td>The JSON representation of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="structSchema" /></td>
    <td><code>object</code></td>
    <td>The structured representation of the schema.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_schemas_list">

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
    <td>Immutable. The full resource name of the schema, in the format of `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/schemas/&#123;schema&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonSchema" /></td>
    <td><code>string</code></td>
    <td>The JSON representation of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="structSchema" /></td>
    <td><code>object</code></td>
    <td>The structured representation of the schema.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_get">

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
    <td>Immutable. The full resource name of the schema, in the format of `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/schemas/&#123;schema&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonSchema" /></td>
    <td><code>string</code></td>
    <td>The JSON representation of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="structSchema" /></td>
    <td><code>object</code></td>
    <td>The structured representation of the schema.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_list">

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
    <td>Immutable. The full resource name of the schema, in the format of `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/schemas/&#123;schema&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonSchema" /></td>
    <td><code>string</code></td>
    <td>The JSON representation of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="structSchema" /></td>
    <td><code>object</code></td>
    <td>The structured representation of the schema.</td>
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
    <td><a href="#projects_locations_collections_data_stores_schemas_get"><CopyableCode code="projects_locations_collections_data_stores_schemas_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Gets a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_schemas_list"><CopyableCode code="projects_locations_collections_data_stores_schemas_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Gets a list of Schemas.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_schemas_get"><CopyableCode code="projects_locations_data_stores_schemas_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Gets a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_schemas_list"><CopyableCode code="projects_locations_data_stores_schemas_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Gets a list of Schemas.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_schemas_create"><CopyableCode code="projects_locations_collections_data_stores_schemas_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-schemaId"><code>schemaId</code></a></td>
    <td>Creates a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_schemas_create"><CopyableCode code="projects_locations_data_stores_schemas_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-schemaId"><code>schemaId</code></a></td>
    <td>Creates a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_schemas_patch"><CopyableCode code="projects_locations_collections_data_stores_schemas_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_schemas_patch"><CopyableCode code="projects_locations_data_stores_schemas_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_schemas_delete"><CopyableCode code="projects_locations_collections_data_stores_schemas_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Deletes a Schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_schemas_delete"><CopyableCode code="projects_locations_data_stores_schemas_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Deletes a Schema.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
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
<tr id="parameter-schemasId">
    <td><CopyableCode code="schemasId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-schemaId">
    <td><CopyableCode code="schemaId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_schemas_get"
    values={[
        { label: 'projects_locations_collections_data_stores_schemas_get', value: 'projects_locations_collections_data_stores_schemas_get' },
        { label: 'projects_locations_collections_data_stores_schemas_list', value: 'projects_locations_collections_data_stores_schemas_list' },
        { label: 'projects_locations_data_stores_schemas_get', value: 'projects_locations_data_stores_schemas_get' },
        { label: 'projects_locations_data_stores_schemas_list', value: 'projects_locations_data_stores_schemas_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_schemas_get">

Gets a Schema.

```sql
SELECT
name,
jsonSchema,
structSchema
FROM google.discoveryengine.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND schemasId = '{{ schemasId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_schemas_list">

Gets a list of Schemas.

```sql
SELECT
name,
jsonSchema,
structSchema
FROM google.discoveryengine.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_get">

Gets a Schema.

```sql
SELECT
name,
jsonSchema,
structSchema
FROM google.discoveryengine.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND schemasId = '{{ schemasId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_list">

Gets a list of Schemas.

```sql
SELECT
name,
jsonSchema,
structSchema
FROM google.discoveryengine.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_schemas_create"
    values={[
        { label: 'projects_locations_collections_data_stores_schemas_create', value: 'projects_locations_collections_data_stores_schemas_create' },
        { label: 'projects_locations_data_stores_schemas_create', value: 'projects_locations_data_stores_schemas_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_schemas_create">

Creates a Schema.

```sql
INSERT INTO google.discoveryengine.schemas (
data__structSchema,
data__jsonSchema,
data__name,
projectsId,
locationsId,
collectionsId,
dataStoresId,
schemaId
)
SELECT 
'{{ structSchema }}',
'{{ jsonSchema }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}',
'{{ schemaId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_create">

Creates a Schema.

```sql
INSERT INTO google.discoveryengine.schemas (
data__structSchema,
data__jsonSchema,
data__name,
projectsId,
locationsId,
dataStoresId,
schemaId
)
SELECT 
'{{ structSchema }}',
'{{ jsonSchema }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}',
'{{ schemaId }}'
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
- name: schemas
  props:
    - name: projectsId
      value: string
      description: Required parameter for the schemas resource.
    - name: locationsId
      value: string
      description: Required parameter for the schemas resource.
    - name: collectionsId
      value: string
      description: Required parameter for the schemas resource.
    - name: dataStoresId
      value: string
      description: Required parameter for the schemas resource.
    - name: structSchema
      value: object
      description: >
        The structured representation of the schema.
        
    - name: jsonSchema
      value: string
      description: >
        The JSON representation of the schema.
        
    - name: name
      value: string
      description: >
        Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
        
    - name: schemaId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_schemas_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_schemas_patch', value: 'projects_locations_collections_data_stores_schemas_patch' },
        { label: 'projects_locations_data_stores_schemas_patch', value: 'projects_locations_data_stores_schemas_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_schemas_patch">

Updates a Schema.

```sql
UPDATE google.discoveryengine.schemas
SET 
data__structSchema = '{{ structSchema }}',
data__jsonSchema = '{{ jsonSchema }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND schemasId = '{{ schemasId }}' --required
AND allowMissing = {{ allowMissing}}
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_patch">

Updates a Schema.

```sql
UPDATE google.discoveryengine.schemas
SET 
data__structSchema = '{{ structSchema }}',
data__jsonSchema = '{{ jsonSchema }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND schemasId = '{{ schemasId }}' --required
AND allowMissing = {{ allowMissing}}
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_schemas_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_schemas_delete', value: 'projects_locations_collections_data_stores_schemas_delete' },
        { label: 'projects_locations_data_stores_schemas_delete', value: 'projects_locations_data_stores_schemas_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_schemas_delete">

Deletes a Schema.

```sql
DELETE FROM google.discoveryengine.schemas
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND schemasId = '{{ schemasId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_schemas_delete">

Deletes a Schema.

```sql
DELETE FROM google.discoveryengine.schemas
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND schemasId = '{{ schemasId }}' --required;
```
</TabItem>
</Tabs>
