--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
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

Creates, updates, deletes, gets or lists a <code>folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>folders</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.folders" /></td></tr>
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

A folder. Only available in buckets with hierarchical namespace enabled.

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
    <td>The ID of the folder, including the bucket name, folder name.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the folder. Required if not specified by URL parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this folder.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the folder in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For folders, this is always storage#folder. (default: storage#folder)</td>
</tr>
<tr>
    <td><CopyableCode code="metageneration" /></td>
    <td><code>string (int64)</code></td>
    <td>The version of the metadata for this folder. Used for preconditions and for detecting changes in metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingRenameInfo" /></td>
    <td><code>object</code></td>
    <td>Only present if the folder is part of an ongoing rename folder operation. Contains information which can be used to query the operation status.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this folder.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the folder metadata in RFC 3339 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of folders.

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
    <td>The kind of item this is. For lists of folders, this is always storage#folders. (default: storage#folders)</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-folder"><code>folder</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a></td>
    <td>Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-endOffset"><code>endOffset</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-startOffset"><code>startOffset</code></a></td>
    <td>Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-recursive"><code>recursive</code></a></td>
    <td>Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-folder"><code>folder</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a></td>
    <td>Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.</td>
</tr>
<tr>
    <td><a href="#rename"><CopyableCode code="rename" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-sourceFolder"><code>sourceFolder</code></a>, <a href="#parameter-destinationFolder"><code>destinationFolder</code></a></td>
    <td><a href="#parameter-ifSourceMetagenerationMatch"><code>ifSourceMetagenerationMatch</code></a>, <a href="#parameter-ifSourceMetagenerationNotMatch"><code>ifSourceMetagenerationNotMatch</code></a></td>
    <td>Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.</td>
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
<tr id="parameter-destinationFolder">
    <td><CopyableCode code="destinationFolder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-folder">
    <td><CopyableCode code="folder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourceFolder">
    <td><CopyableCode code="sourceFolder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-endOffset">
    <td><CopyableCode code="endOffset" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-ifSourceMetagenerationMatch">
    <td><CopyableCode code="ifSourceMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifSourceMetagenerationNotMatch">
    <td><CopyableCode code="ifSourceMetagenerationNotMatch" /></td>
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
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-startOffset">
    <td><CopyableCode code="startOffset" /></td>
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

Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.

```sql
SELECT
id,
name,
bucket,
createTime,
kind,
metageneration,
pendingRenameInfo,
selfLink,
updateTime
FROM google.storage.folders
WHERE bucket = '{{ bucket }}' -- required
AND folder = '{{ folder }}' -- required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}';
```
</TabItem>
<TabItem value="list">

Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.

```sql
SELECT
items,
kind,
nextPageToken
FROM google.storage.folders
WHERE bucket = '{{ bucket }}' -- required
AND delimiter = '{{ delimiter }}'
AND endOffset = '{{ endOffset }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND prefix = '{{ prefix }}'
AND startOffset = '{{ startOffset }}';
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

Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.

```sql
INSERT INTO google.storage.folders (
data__bucket,
data__id,
data__kind,
data__metageneration,
data__name,
data__selfLink,
data__createTime,
data__updateTime,
data__pendingRenameInfo,
bucket,
recursive
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
'{{ pendingRenameInfo }}',
'{{ bucket }}',
'{{ recursive }}'
RETURNING
id,
name,
bucket,
createTime,
kind,
metageneration,
pendingRenameInfo,
selfLink,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: folders
  props:
    - name: bucket
      value: string
      description: Required parameter for the folders resource.
    - name: bucket
      value: string
      description: >
        The name of the bucket containing this folder.
        
    - name: id
      value: string
      description: >
        The ID of the folder, including the bucket name, folder name.
        
    - name: kind
      value: string
      description: >
        The kind of item this is. For folders, this is always storage#folder.
        
      default: storage#folder
    - name: metageneration
      value: string
      description: >
        The version of the metadata for this folder. Used for preconditions and for detecting changes in metadata.
        
    - name: name
      value: string
      description: >
        The name of the folder. Required if not specified by URL parameter.
        
    - name: selfLink
      value: string
      description: >
        The link to this folder.
        
    - name: createTime
      value: string
      description: >
        The creation time of the folder in RFC 3339 format.
        
    - name: updateTime
      value: string
      description: >
        The modification time of the folder metadata in RFC 3339 format.
        
    - name: pendingRenameInfo
      value: object
      description: >
        Only present if the folder is part of an ongoing rename folder operation. Contains information which can be used to query the operation status.
        
    - name: recursive
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

Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.

```sql
DELETE FROM google.storage.folders
WHERE bucket = '{{ bucket }}' --required
AND folder = '{{ folder }}' --required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rename"
    values={[
        { label: 'rename', value: 'rename' }
    ]}
>
<TabItem value="rename">

Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.

```sql
EXEC google.storage.folders.rename 
@bucket='{{ bucket }}' --required, 
@sourceFolder='{{ sourceFolder }}' --required, 
@destinationFolder='{{ destinationFolder }}' --required, 
@ifSourceMetagenerationMatch='{{ ifSourceMetagenerationMatch }}', 
@ifSourceMetagenerationNotMatch='{{ ifSourceMetagenerationNotMatch }}';
```
</TabItem>
</Tabs>
