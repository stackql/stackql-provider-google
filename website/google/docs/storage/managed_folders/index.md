--- 
title: managed_folders
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_folders
  - storage
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

Creates, updates, deletes, gets or lists a <code>managed_folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>managed_folders</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.managed_folders" /></td></tr>
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

A managed folder.

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
    <td>The ID of the managed folder, including the bucket name and managed folder name.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed folder. Required if not specified by URL parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this managed folder.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the managed folder in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For managed folders, this is always storage#managedFolder. (default: storage#managedFolder)</td>
</tr>
<tr>
    <td><CopyableCode code="metageneration" /></td>
    <td><code>string (int64)</code></td>
    <td>The version of the metadata for this managed folder. Used for preconditions and for detecting changes in metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this managed folder.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update time of the managed folder metadata in RFC 3339 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of managed folders.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of items.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For lists of managed folders, this is always storage#managedFolders. (default: storage#managedFolders)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-managedFolder"><code>managedFolder</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a></td>
    <td>Returns metadata of the specified managed folder.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Lists managed folders in the given bucket.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Creates a new managed folder.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-managedFolder"><code>managedFolder</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-allowNonEmpty"><code>allowNonEmpty</code></a></td>
    <td>Permanently deletes a managed folder.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-managedFolder">
    <td><CopyableCode code="managedFolder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowNonEmpty">
    <td><CopyableCode code="allowNonEmpty" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationMatch">
    <td><CopyableCode code="ifMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationNotMatch">
    <td><CopyableCode code="ifMetagenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
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
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
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

Returns metadata of the specified managed folder.

```sql
SELECT
id,
name,
bucket,
createTime,
kind,
metageneration,
selfLink,
updateTime
FROM google.storage.managed_folders
WHERE bucket = '{{ bucket }}' -- required
AND managedFolder = '{{ managedFolder }}' -- required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}';
```
</TabItem>
<TabItem value="list">

Lists managed folders in the given bucket.

```sql
SELECT
items,
kind,
nextPageToken
FROM google.storage.managed_folders
WHERE bucket = '{{ bucket }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND prefix = '{{ prefix }}';
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

Creates a new managed folder.

```sql
INSERT INTO google.storage.managed_folders (
data__bucket,
data__id,
data__kind,
data__metageneration,
data__name,
data__selfLink,
data__createTime,
data__updateTime,
bucket
)
SELECT 
'{{ bucket }}',
'{{ id }}',
'{{ kind }}',
'{{ metageneration }}',
'{{ name }}',
'{{ selfLink }}',
'{{ createTime }}',
'{{ updateTime }}',
'{{ bucket }}'
RETURNING
id,
name,
bucket,
createTime,
kind,
metageneration,
selfLink,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: managed_folders
  props:
    - name: bucket
      value: string
      description: Required parameter for the managed_folders resource.
    - name: bucket
      value: string
      description: >
        The name of the bucket containing this managed folder.
        
    - name: id
      value: string
      description: >
        The ID of the managed folder, including the bucket name and managed folder name.
        
    - name: kind
      value: string
      description: >
        The kind of item this is. For managed folders, this is always storage#managedFolder.
        
      default: storage#managedFolder
    - name: metageneration
      value: string
      description: >
        The version of the metadata for this managed folder. Used for preconditions and for detecting changes in metadata.
        
    - name: name
      value: string
      description: >
        The name of the managed folder. Required if not specified by URL parameter.
        
    - name: selfLink
      value: string
      description: >
        The link to this managed folder.
        
    - name: createTime
      value: string
      description: >
        The creation time of the managed folder in RFC 3339 format.
        
    - name: updateTime
      value: string
      description: >
        The last update time of the managed folder metadata in RFC 3339 format.
        
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

Permanently deletes a managed folder.

```sql
DELETE FROM google.storage.managed_folders
WHERE bucket = '{{ bucket }}' --required
AND managedFolder = '{{ managedFolder }}' --required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
AND allowNonEmpty = '{{ allowNonEmpty }}';
```
</TabItem>
</Tabs>
