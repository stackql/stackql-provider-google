--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
  - drivev3
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

Creates, updates, deletes, gets or lists a <code>comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>comments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.comments" /></td></tr>
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
    <td>Output only. The ID of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="anchor" /></td>
    <td><code>string</code></td>
    <td>A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the comment was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the comment has been deleted. A deleted comment has no content.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the comment with HTML formatting.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`. (default: drive#comment)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the comment or any of its replies was modified (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="quotedFileContent" /></td>
    <td><code>object</code></td>
    <td>The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="replies" /></td>
    <td><code>array</code></td>
    <td>Output only. The full list of replies to the comment in chronological order.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the comment has been resolved by one of its replies.</td>
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
    <td>Output only. The ID of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="anchor" /></td>
    <td><code>string</code></td>
    <td>A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the comment was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the comment has been deleted. A deleted comment has no content.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the comment with HTML formatting.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`. (default: drive#comment)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the comment or any of its replies was modified (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="quotedFileContent" /></td>
    <td><code>object</code></td>
    <td>The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="replies" /></td>
    <td><code>array</code></td>
    <td>Output only. The full list of replies to the comment in chronological order.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the comment has been resolved by one of its replies.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a></td>
    <td>Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-startModifiedTime"><code>startModifiedTime</code></a></td>
    <td>Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).</td>
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
<tr id="parameter-commentId">
    <td><CopyableCode code="commentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeDeleted">
    <td><CopyableCode code="includeDeleted" /></td>
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
<tr id="parameter-startModifiedTime">
    <td><CopyableCode code="startModifiedTime" /></td>
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

Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

```sql
SELECT
id,
anchor,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime,
quotedFileContent,
replies,
resolved
FROM googleworkspace.drivev3.comments
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND includeDeleted = '{{ includeDeleted }}';
```
</TabItem>
<TabItem value="list">

Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

```sql
SELECT
id,
anchor,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime,
quotedFileContent,
replies,
resolved
FROM googleworkspace.drivev3.comments
WHERE fileId = '{{ fileId }}' -- required
AND includeDeleted = '{{ includeDeleted }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND startModifiedTime = '{{ startModifiedTime }}';
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

Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

```sql
INSERT INTO googleworkspace.drivev3.comments (
data__id,
data__kind,
data__createdTime,
data__modifiedTime,
data__resolved,
data__anchor,
data__replies,
data__author,
data__deleted,
data__htmlContent,
data__content,
data__quotedFileContent,
fileId
)
SELECT 
'{{ id }}',
'{{ kind }}',
'{{ createdTime }}',
'{{ modifiedTime }}',
{{ resolved }},
'{{ anchor }}',
'{{ replies }}',
'{{ author }}',
{{ deleted }},
'{{ htmlContent }}',
'{{ content }}',
'{{ quotedFileContent }}',
'{{ fileId }}'
RETURNING
id,
anchor,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime,
quotedFileContent,
replies,
resolved
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: comments
  props:
    - name: fileId
      value: string
      description: Required parameter for the comments resource.
    - name: id
      value: string
      description: >
        Output only. The ID of the comment.
        
    - name: kind
      value: string
      description: >
        Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`.
        
      default: drive#comment
    - name: createdTime
      value: string
      description: >
        The time at which the comment was created (RFC 3339 date-time).
        
    - name: modifiedTime
      value: string
      description: >
        The last time the comment or any of its replies was modified (RFC 3339 date-time).
        
    - name: resolved
      value: boolean
      description: >
        Output only. Whether the comment has been resolved by one of its replies.
        
    - name: anchor
      value: string
      description: >
        A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).
        
    - name: replies
      value: array
      description: >
        Output only. The full list of replies to the comment in chronological order.
        
    - name: author
      value: object
      description: >
        Information about a Drive user.
        
    - name: deleted
      value: boolean
      description: >
        Output only. Whether the comment has been deleted. A deleted comment has no content.
        
    - name: htmlContent
      value: string
      description: >
        Output only. The content of the comment with HTML formatting.
        
    - name: content
      value: string
      description: >
        The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.
        
    - name: quotedFileContent
      value: object
      description: >
        The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

```sql
UPDATE googleworkspace.drivev3.comments
SET 
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__createdTime = '{{ createdTime }}',
data__modifiedTime = '{{ modifiedTime }}',
data__resolved = {{ resolved }},
data__anchor = '{{ anchor }}',
data__replies = '{{ replies }}',
data__author = '{{ author }}',
data__deleted = {{ deleted }},
data__htmlContent = '{{ htmlContent }}',
data__content = '{{ content }}',
data__quotedFileContent = '{{ quotedFileContent }}'
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
RETURNING
id,
anchor,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime,
quotedFileContent,
replies,
resolved;
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

Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

```sql
DELETE FROM googleworkspace.drivev3.comments
WHERE fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required;
```
</TabItem>
</Tabs>
