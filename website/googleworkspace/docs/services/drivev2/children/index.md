--- 
title: children
hide_title: false
hide_table_of_contents: false
keywords:
  - children
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

Creates, updates, deletes, gets or lists a <code>children</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>children</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.children" /></td></tr>
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
    <td>The ID of the child.</td>
</tr>
<tr>
    <td><CopyableCode code="childLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the child.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#childReference`. (default: drive#childReference)</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the child.</td>
</tr>
<tr>
    <td><CopyableCode code="childLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the child.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#childReference`. (default: drive#childReference)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this reference.</td>
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
    <td><a href="#parameter-folderId"><code>folderId</code></a>, <a href="#parameter-childId"><code>childId</code></a></td>
    <td></td>
    <td>Gets a specific child reference.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-folderId"><code>folderId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-q"><code>q</code></a></td>
    <td>Lists a folder's children.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-folderId"><code>folderId</code></a></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Inserts a file into a folder.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-folderId"><code>folderId</code></a>, <a href="#parameter-childId"><code>childId</code></a></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a></td>
    <td>Removes a child from a folder.</td>
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
<tr id="parameter-childId">
    <td><CopyableCode code="childId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-folderId">
    <td><CopyableCode code="folderId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceSingleParent">
    <td><CopyableCode code="enforceSingleParent" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
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

Gets a specific child reference.

```sql
SELECT
id,
childLink,
kind,
selfLink
FROM googleworkspace.drivev2.children
WHERE folderId = '{{ folderId }}' -- required
AND childId = '{{ childId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists a folder's children.

```sql
SELECT
id,
childLink,
kind,
selfLink
FROM googleworkspace.drivev2.children
WHERE folderId = '{{ folderId }}' -- required
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND q = '{{ q }}';
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

Inserts a file into a folder.

```sql
INSERT INTO googleworkspace.drivev2.children (
data__id,
data__selfLink,
data__kind,
data__childLink,
folderId,
enforceSingleParent,
supportsAllDrives,
supportsTeamDrives
)
SELECT 
'{{ id }}',
'{{ selfLink }}',
'{{ kind }}',
'{{ childLink }}',
'{{ folderId }}',
'{{ enforceSingleParent }}',
'{{ supportsAllDrives }}',
'{{ supportsTeamDrives }}'
RETURNING
id,
childLink,
kind,
selfLink
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: children
  props:
    - name: folderId
      value: string
      description: Required parameter for the children resource.
    - name: id
      value: string
      description: >
        The ID of the child.
        
    - name: selfLink
      value: string
      description: >
        Output only. A link back to this reference.
        
    - name: kind
      value: string
      description: >
        Output only. This is always `drive#childReference`.
        
      default: drive#childReference
    - name: childLink
      value: string
      description: >
        Output only. A link to the child.
        
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

Removes a child from a folder.

```sql
DELETE FROM googleworkspace.drivev2.children
WHERE folderId = '{{ folderId }}' --required
AND childId = '{{ childId }}' --required
AND enforceSingleParent = '{{ enforceSingleParent }}';
```
</TabItem>
</Tabs>
