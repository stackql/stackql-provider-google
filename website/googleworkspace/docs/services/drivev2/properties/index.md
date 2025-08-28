--- 
title: properties
hide_title: false
hide_table_of_contents: false
keywords:
  - properties
  - drivev2
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>properties</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.properties" /></td></tr>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the property.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key of this property.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#property`. (default: drive#property)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. The link back to this property.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of this property.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.</td>
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
    <td>The ETag of the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of properties.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#propertyList`. (default: drive#propertyList)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link back to this list.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-propertyKey"><code>propertyKey</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a></td>
    <td>Gets a property by its key.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Lists a file's properties.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Adds a property to a file, or updates it if it already exists.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-propertyKey"><code>propertyKey</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a></td>
    <td>Updates a property.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-propertyKey"><code>propertyKey</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a></td>
    <td>Updates a property.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-propertyKey"><code>propertyKey</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a></td>
    <td>Deletes a property.</td>
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
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-propertyKey">
    <td><CopyableCode code="propertyKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-visibility">
    <td><CopyableCode code="visibility" /></td>
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

Gets a property by its key.

```sql
SELECT
etag,
key,
kind,
selfLink,
value,
visibility
FROM googleworkspace.drivev2.properties
WHERE fileId = '{{ fileId }}' -- required
AND propertyKey = '{{ propertyKey }}' -- required
AND visibility = '{{ visibility }}';
```
</TabItem>
<TabItem value="list">

Lists a file's properties.

```sql
SELECT
etag,
items,
kind,
selfLink
FROM googleworkspace.drivev2.properties
WHERE fileId = '{{ fileId }}' -- required;
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

Adds a property to a file, or updates it if it already exists.

```sql
INSERT INTO googleworkspace.drivev2.properties (
data__selfLink,
data__value,
data__visibility,
data__kind,
data__etag,
data__key,
fileId
)
SELECT 
'{{ selfLink }}',
'{{ value }}',
'{{ visibility }}',
'{{ kind }}',
'{{ etag }}',
'{{ key }}',
'{{ fileId }}'
RETURNING
etag,
key,
kind,
selfLink,
value,
visibility
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: properties
  props:
    - name: fileId
      value: string
      description: Required parameter for the properties resource.
    - name: selfLink
      value: string
      description: >
        Output only. The link back to this property.
        
    - name: value
      value: string
      description: >
        The value of this property.
        
    - name: visibility
      value: string
      description: >
        The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
        
    - name: kind
      value: string
      description: >
        Output only. This is always `drive#property`.
        
      default: drive#property
    - name: etag
      value: string
      description: >
        Output only. ETag of the property.
        
    - name: key
      value: string
      description: >
        The key of this property.
        
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

Updates a property.

```sql
UPDATE googleworkspace.drivev2.properties
SET 
data__selfLink = '{{ selfLink }}',
data__value = '{{ value }}',
data__visibility = '{{ visibility }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__key = '{{ key }}'
WHERE 
fileId = '{{ fileId }}' --required
AND propertyKey = '{{ propertyKey }}' --required
AND visibility = '{{ visibility}}'
RETURNING
etag,
key,
kind,
selfLink,
value,
visibility;
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

Updates a property.

```sql
REPLACE googleworkspace.drivev2.properties
SET 
data__selfLink = '{{ selfLink }}',
data__value = '{{ value }}',
data__visibility = '{{ visibility }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__key = '{{ key }}'
WHERE 
fileId = '{{ fileId }}' --required
AND propertyKey = '{{ propertyKey }}' --required
AND visibility = '{{ visibility}}'
RETURNING
etag,
key,
kind,
selfLink,
value,
visibility;
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

Deletes a property.

```sql
DELETE FROM googleworkspace.drivev2.properties
WHERE fileId = '{{ fileId }}' --required
AND propertyKey = '{{ propertyKey }}' --required
AND visibility = '{{ visibility }}';
```
</TabItem>
</Tabs>
