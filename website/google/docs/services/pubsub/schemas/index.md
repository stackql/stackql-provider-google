--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - pubsub
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsub.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_schemas_get"
    values={[
        { label: 'projects_schemas_get', value: 'projects_schemas_get' },
        { label: 'projects_schemas_list', value: 'projects_schemas_list' }
    ]}
>
<TabItem value="projects_schemas_get">

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
    <td>Required. Name of the schema. Format is `projects/&#123;project&#125;/schemas/&#123;schema&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in `type`.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the schema definition.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_schemas_list">

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
    <td>Required. Name of the schema. Format is `projects/&#123;project&#125;/schemas/&#123;schema&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in `type`.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the schema definition.</td>
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
    <td><a href="#projects_schemas_get"><CopyableCode code="projects_schemas_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a schema.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_list"><CopyableCode code="projects_schemas_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists schemas in a project.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_create"><CopyableCode code="projects_schemas_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-schemaId"><code>schemaId</code></a></td>
    <td>Creates a schema.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_delete"><CopyableCode code="projects_schemas_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Deletes a schema.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_commit"><CopyableCode code="projects_schemas_commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Commits a new schema revision to an existing schema.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_rollback"><CopyableCode code="projects_schemas_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Creates a new schema revision that is a copy of the provided revision_id.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_validate"><CopyableCode code="projects_schemas_validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Validates a schema.</td>
</tr>
<tr>
    <td><a href="#projects_schemas_validate_message"><CopyableCode code="projects_schemas_validate_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Validates a message against a schema.</td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_schemas_get"
    values={[
        { label: 'projects_schemas_get', value: 'projects_schemas_get' },
        { label: 'projects_schemas_list', value: 'projects_schemas_list' }
    ]}
>
<TabItem value="projects_schemas_get">

Gets a schema.

```sql
SELECT
name,
definition,
revisionCreateTime,
revisionId,
type
FROM google.pubsub.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND schemasId = '{{ schemasId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_schemas_list">

Lists schemas in a project.

```sql
SELECT
name,
definition,
revisionCreateTime,
revisionId,
type
FROM google.pubsub.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_schemas_create"
    values={[
        { label: 'projects_schemas_create', value: 'projects_schemas_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_schemas_create">

Creates a schema.

```sql
INSERT INTO google.pubsub.schemas (
data__name,
data__type,
data__definition,
projectsId,
schemaId
)
SELECT 
'{{ name }}',
'{{ type }}',
'{{ definition }}',
'{{ projectsId }}',
'{{ schemaId }}'
RETURNING
name,
definition,
revisionCreateTime,
revisionId,
type
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
    - name: name
      value: string
      description: >
        Required. Name of the schema. Format is `projects/{project}/schemas/{schema}`.
        
    - name: type
      value: string
      description: >
        The type of the schema definition.
        
      valid_values: ['TYPE_UNSPECIFIED', 'PROTOCOL_BUFFER', 'AVRO']
    - name: definition
      value: string
      description: >
        The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in `type`.
        
    - name: schemaId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_schemas_delete"
    values={[
        { label: 'projects_schemas_delete', value: 'projects_schemas_delete' }
    ]}
>
<TabItem value="projects_schemas_delete">

Deletes a schema.

```sql
DELETE FROM google.pubsub.schemas
WHERE projectsId = '{{ projectsId }}' --required
AND schemasId = '{{ schemasId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_schemas_commit"
    values={[
        { label: 'projects_schemas_commit', value: 'projects_schemas_commit' },
        { label: 'projects_schemas_rollback', value: 'projects_schemas_rollback' },
        { label: 'projects_schemas_validate', value: 'projects_schemas_validate' },
        { label: 'projects_schemas_validate_message', value: 'projects_schemas_validate_message' }
    ]}
>
<TabItem value="projects_schemas_commit">

Commits a new schema revision to an existing schema.

```sql
EXEC google.pubsub.schemas.projects_schemas_commit 
@projectsId='{{ projectsId }}' --required, 
@schemasId='{{ schemasId }}' --required 
@@json=
'{
"schema": "{{ schema }}"
}';
```
</TabItem>
<TabItem value="projects_schemas_rollback">

Creates a new schema revision that is a copy of the provided revision_id.

```sql
EXEC google.pubsub.schemas.projects_schemas_rollback 
@projectsId='{{ projectsId }}' --required, 
@schemasId='{{ schemasId }}' --required 
@@json=
'{
"revisionId": "{{ revisionId }}"
}';
```
</TabItem>
<TabItem value="projects_schemas_validate">

Validates a schema.

```sql
EXEC google.pubsub.schemas.projects_schemas_validate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"schema": "{{ schema }}"
}';
```
</TabItem>
<TabItem value="projects_schemas_validate_message">

Validates a message against a schema.

```sql
EXEC google.pubsub.schemas.projects_schemas_validate_message 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"schema": "{{ schema }}", 
"message": "{{ message }}", 
"encoding": "{{ encoding }}"
}';
```
</TabItem>
</Tabs>
