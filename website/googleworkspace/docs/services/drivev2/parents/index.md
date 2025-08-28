--- 
title: parents
hide_title: false
hide_table_of_contents: false
keywords:
  - parents
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

Creates, updates, deletes, gets or lists a <code>parents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>parents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.parents" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent.</td>
</tr>
<tr>
    <td><CopyableCode code="isRoot" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not the parent is the root folder.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#parentReference`. (default: drive#parentReference)</td>
</tr>
<tr>
    <td><CopyableCode code="parentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the parent.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this reference.</td>
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
    <td>The list of parents.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#parentList`. (default: drive#parentList)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this list.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-parentId"><code>parentId</code></a></td>
    <td></td>
    <td>Gets a specific parent reference.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Lists a file's parents.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Adds a parent folder for a file.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-parentId"><code>parentId</code></a></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a></td>
    <td>Removes a parent from a file.</td>
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
<tr id="parameter-parentId">
    <td><CopyableCode code="parentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceSingleParent">
    <td><CopyableCode code="enforceSingleParent" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-supportsAllDrives">
    <td><CopyableCode code="supportsAllDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-supportsTeamDrives">
    <td><CopyableCode code="supportsTeamDrives" /></td>
    <td><code>boolean</code></td>
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

Gets a specific parent reference.

```sql
SELECT
id,
isRoot,
kind,
parentLink,
selfLink
FROM googleworkspace.drivev2.parents
WHERE fileId = '{{ fileId }}' -- required
AND parentId = '{{ parentId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists a file's parents.

```sql
SELECT
etag,
items,
kind,
selfLink
FROM googleworkspace.drivev2.parents
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

Adds a parent folder for a file.

```sql
INSERT INTO googleworkspace.drivev2.parents (
data__selfLink,
data__id,
data__isRoot,
data__kind,
data__parentLink,
fileId,
enforceSingleParent,
supportsAllDrives,
supportsTeamDrives
)
SELECT 
'{{ selfLink }}',
'{{ id }}',
{{ isRoot }},
'{{ kind }}',
'{{ parentLink }}',
'{{ fileId }}',
'{{ enforceSingleParent }}',
'{{ supportsAllDrives }}',
'{{ supportsTeamDrives }}'
RETURNING
id,
isRoot,
kind,
parentLink,
selfLink
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: parents
  props:
    - name: fileId
      value: string
      description: Required parameter for the parents resource.
    - name: selfLink
      value: string
      description: >
        Output only. A link back to this reference.
        
    - name: id
      value: string
      description: >
        The ID of the parent.
        
    - name: isRoot
      value: boolean
      description: >
        Output only. Whether or not the parent is the root folder.
        
    - name: kind
      value: string
      description: >
        Output only. This is always `drive#parentReference`.
        
      default: drive#parentReference
    - name: parentLink
      value: string
      description: >
        Output only. A link to the parent.
        
    - name: enforceSingleParent
      value: boolean
    - name: supportsAllDrives
      value: boolean
    - name: supportsTeamDrives
      value: boolean
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

Removes a parent from a file.

```sql
DELETE FROM googleworkspace.drivev2.parents
WHERE fileId = '{{ fileId }}' --required
AND parentId = '{{ parentId }}' --required
AND enforceSingleParent = '{{ enforceSingleParent }}';
```
</TabItem>
</Tabs>
