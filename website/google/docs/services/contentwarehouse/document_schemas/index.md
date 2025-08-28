--- 
title: document_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - document_schemas
  - contentwarehouse
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

Creates, updates, deletes, gets or lists a <code>document_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>document_schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contentwarehouse.document_schemas" /></td></tr>
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
    <td>The resource name of the document schema. Format: projects/&#123;project_number&#125;/locations/&#123;location&#125;/documentSchemas/&#123;document_schema_id&#125;. The name is ignored when creating a document schema.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the document schema is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Schema description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the schema given by the user. Must be unique per project.</td>
</tr>
<tr>
    <td><CopyableCode code="documentIsFolder" /></td>
    <td><code>boolean</code></td>
    <td>Document Type, true refers the document is a folder, otherwise it is a typical document.</td>
</tr>
<tr>
    <td><CopyableCode code="propertyDefinitions" /></td>
    <td><code>array</code></td>
    <td>Document details.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the document schema is last updated.</td>
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
    <td>The resource name of the document schema. Format: projects/&#123;project_number&#125;/locations/&#123;location&#125;/documentSchemas/&#123;document_schema_id&#125;. The name is ignored when creating a document schema.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the document schema is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Schema description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the schema given by the user. Must be unique per project.</td>
</tr>
<tr>
    <td><CopyableCode code="documentIsFolder" /></td>
    <td><code>boolean</code></td>
    <td>Document Type, true refers the document is a folder, otherwise it is a typical document.</td>
</tr>
<tr>
    <td><CopyableCode code="propertyDefinitions" /></td>
    <td><code>array</code></td>
    <td>Document details.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the document schema is last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentSchemasId"><code>documentSchemasId</code></a></td>
    <td></td>
    <td>Gets a document schema. Returns NOT_FOUND if the document schema does not exist.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists document schemas.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a document schema.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentSchemasId"><code>documentSchemasId</code></a></td>
    <td></td>
    <td>Updates a Document Schema. Returns INVALID_ARGUMENT if the name of the Document Schema is non-empty and does not equal the existing name. Supports only appending new properties, adding new ENUM possible values, and updating the EnumTypeOptions.validation_check_disabled flag for ENUM possible values. Updating existing properties will result into INVALID_ARGUMENT.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentSchemasId"><code>documentSchemasId</code></a></td>
    <td></td>
    <td>Deletes a document schema. Returns NOT_FOUND if the document schema does not exist. Returns BAD_REQUEST if the document schema has documents depending on it.</td>
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
<tr id="parameter-documentSchemasId">
    <td><CopyableCode code="documentSchemasId" /></td>
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

Gets a document schema. Returns NOT_FOUND if the document schema does not exist.

```sql
SELECT
name,
createTime,
description,
displayName,
documentIsFolder,
propertyDefinitions,
updateTime
FROM google.contentwarehouse.document_schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND documentSchemasId = '{{ documentSchemasId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists document schemas.

```sql
SELECT
name,
createTime,
description,
displayName,
documentIsFolder,
propertyDefinitions,
updateTime
FROM google.contentwarehouse.document_schemas
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

Creates a document schema.

```sql
INSERT INTO google.contentwarehouse.document_schemas (
data__description,
data__displayName,
data__propertyDefinitions,
data__name,
data__documentIsFolder,
projectsId,
locationsId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ propertyDefinitions }}',
'{{ name }}',
{{ documentIsFolder }},
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
description,
displayName,
documentIsFolder,
propertyDefinitions,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: document_schemas
  props:
    - name: projectsId
      value: string
      description: Required parameter for the document_schemas resource.
    - name: locationsId
      value: string
      description: Required parameter for the document_schemas resource.
    - name: description
      value: string
      description: >
        Schema description.
        
    - name: displayName
      value: string
      description: >
        Required. Name of the schema given by the user. Must be unique per project.
        
    - name: propertyDefinitions
      value: array
      description: >
        Document details.
        
    - name: name
      value: string
      description: >
        The resource name of the document schema. Format: projects/{project_number}/locations/{location}/documentSchemas/{document_schema_id}. The name is ignored when creating a document schema.
        
    - name: documentIsFolder
      value: boolean
      description: >
        Document Type, true refers the document is a folder, otherwise it is a typical document.
        
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

Updates a Document Schema. Returns INVALID_ARGUMENT if the name of the Document Schema is non-empty and does not equal the existing name. Supports only appending new properties, adding new ENUM possible values, and updating the EnumTypeOptions.validation_check_disabled flag for ENUM possible values. Updating existing properties will result into INVALID_ARGUMENT.

```sql
UPDATE google.contentwarehouse.document_schemas
SET 
data__documentSchema = '{{ documentSchema }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND documentSchemasId = '{{ documentSchemasId }}' --required
RETURNING
name,
createTime,
description,
displayName,
documentIsFolder,
propertyDefinitions,
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

Deletes a document schema. Returns NOT_FOUND if the document schema does not exist. Returns BAD_REQUEST if the document schema has documents depending on it.

```sql
DELETE FROM google.contentwarehouse.document_schemas
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND documentSchemasId = '{{ documentSchemasId }}' --required;
```
</TabItem>
</Tabs>
