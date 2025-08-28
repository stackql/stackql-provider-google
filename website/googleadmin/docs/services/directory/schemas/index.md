--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.schemas" /></td></tr>
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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name for the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>A list of fields in the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#schema)</td>
</tr>
<tr>
    <td><CopyableCode code="schemaId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the schema (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="schemaName" /></td>
    <td><code>string</code></td>
    <td>The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.</td>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind of resource this is. (default: admin#directory#schemas)</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>A list of UserSchema objects.</td>
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
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-schemaKey"><code>schemaKey</code></a></td>
    <td></td>
    <td>Retrieves a schema.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td></td>
    <td>Retrieves all schemas for a customer.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td></td>
    <td>Creates a schema.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-schemaKey"><code>schemaKey</code></a></td>
    <td></td>
    <td>Patches a schema.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-schemaKey"><code>schemaKey</code></a></td>
    <td></td>
    <td>Updates a schema.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-schemaKey"><code>schemaKey</code></a></td>
    <td></td>
    <td>Deletes a schema.</td>
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
<tr id="parameter-customerId">
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-schemaKey">
    <td><CopyableCode code="schemaKey" /></td>
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

Retrieves a schema.

```sql
SELECT
displayName,
etag,
fields,
kind,
schemaId,
schemaName
FROM googleadmin.directory.schemas
WHERE customerId = '{{ customerId }}' -- required
AND schemaKey = '{{ schemaKey }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves all schemas for a customer.

```sql
SELECT
etag,
kind,
schemas
FROM googleadmin.directory.schemas
WHERE customerId = '{{ customerId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a schema.

```sql
INSERT INTO googleadmin.directory.schemas (
data__schemaId,
data__schemaName,
data__fields,
data__displayName,
data__kind,
data__etag,
customerId
)
SELECT 
'{{ schemaId }}',
'{{ schemaName }}',
'{{ fields }}',
'{{ displayName }}',
'{{ kind }}',
'{{ etag }}',
'{{ customerId }}'
RETURNING
displayName,
etag,
fields,
kind,
schemaId,
schemaName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: schemas
  props:
    - name: customerId
      value: string
      description: Required parameter for the schemas resource.
    - name: schemaId
      value: string
      description: >
        The unique identifier of the schema (Read-only)
        
    - name: schemaName
      value: string
      description: >
        The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.
        
    - name: fields
      value: array
      description: >
        A list of fields in the schema.
        
    - name: displayName
      value: string
      description: >
        Display name for the schema.
        
    - name: kind
      value: string
      description: >
        Kind of resource this is.
        
      default: admin#directory#schema
    - name: etag
      value: string
      description: >
        The ETag of the resource.
        
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

Patches a schema.

```sql
UPDATE googleadmin.directory.schemas
SET 
data__schemaId = '{{ schemaId }}',
data__schemaName = '{{ schemaName }}',
data__fields = '{{ fields }}',
data__displayName = '{{ displayName }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}'
WHERE 
customerId = '{{ customerId }}' --required
AND schemaKey = '{{ schemaKey }}' --required
RETURNING
displayName,
etag,
fields,
kind,
schemaId,
schemaName;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a schema.

```sql
REPLACE googleadmin.directory.schemas
SET 
data__schemaId = '{{ schemaId }}',
data__schemaName = '{{ schemaName }}',
data__fields = '{{ fields }}',
data__displayName = '{{ displayName }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}'
WHERE 
customerId = '{{ customerId }}' --required
AND schemaKey = '{{ schemaKey }}' --required
RETURNING
displayName,
etag,
fields,
kind,
schemaId,
schemaName;
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

Deletes a schema.

```sql
DELETE FROM googleadmin.directory.schemas
WHERE customerId = '{{ customerId }}' --required
AND schemaKey = '{{ schemaKey }}' --required;
```
</TabItem>
</Tabs>
