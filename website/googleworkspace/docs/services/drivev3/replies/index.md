--- 
title: replies
hide_title: false
hide_table_of_contents: false
keywords:
  - replies
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

Creates, updates, deletes, gets or lists a <code>replies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>replies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.replies" /></td></tr>
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
    <td>Output only. The ID of the reply.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the reply was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the reply has been deleted. A deleted reply has no content.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the reply with HTML formatting.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`. (default: drive#reply)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the reply was modified (RFC 3339 date-time).</td>
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
    <td>Output only. The ID of the reply.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the reply was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the reply has been deleted. A deleted reply has no content.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the reply with HTML formatting.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`. (default: drive#reply)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the reply was modified (RFC 3339 date-time).</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a></td>
    <td>Gets a reply by ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists a comment's replies.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Creates a reply to a comment.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Updates a reply with patch semantics.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Deletes a reply.</td>
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
<tr id="parameter-replyId">
    <td><CopyableCode code="replyId" /></td>
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

Gets a reply by ID.

```sql
SELECT
id,
action,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime
FROM googleworkspace.drivev3.replies
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND replyId = '{{ replyId }}' -- required
AND includeDeleted = '{{ includeDeleted }}';
```
</TabItem>
<TabItem value="list">

Lists a comment's replies.

```sql
SELECT
id,
action,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime
FROM googleworkspace.drivev3.replies
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND includeDeleted = '{{ includeDeleted }}'
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

Creates a reply to a comment.

```sql
INSERT INTO googleworkspace.drivev3.replies (
data__id,
data__kind,
data__createdTime,
data__modifiedTime,
data__action,
data__author,
data__deleted,
data__htmlContent,
data__content,
fileId,
commentId
)
SELECT 
'{{ id }}',
'{{ kind }}',
'{{ createdTime }}',
'{{ modifiedTime }}',
'{{ action }}',
'{{ author }}',
{{ deleted }},
'{{ htmlContent }}',
'{{ content }}',
'{{ fileId }}',
'{{ commentId }}'
RETURNING
id,
action,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: replies
  props:
    - name: fileId
      value: string
      description: Required parameter for the replies resource.
    - name: commentId
      value: string
      description: Required parameter for the replies resource.
    - name: id
      value: string
      description: >
        Output only. The ID of the reply.
        
    - name: kind
      value: string
      description: >
        Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`.
        
      default: drive#reply
    - name: createdTime
      value: string
      description: >
        The time at which the reply was created (RFC 3339 date-time).
        
    - name: modifiedTime
      value: string
      description: >
        The last time the reply was modified (RFC 3339 date-time).
        
    - name: action
      value: string
      description: >
        The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`
        
    - name: author
      value: object
      description: >
        Information about a Drive user.
        
    - name: deleted
      value: boolean
      description: >
        Output only. Whether the reply has been deleted. A deleted reply has no content.
        
    - name: htmlContent
      value: string
      description: >
        Output only. The content of the reply with HTML formatting.
        
    - name: content
      value: string
      description: >
        The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.
        
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

Updates a reply with patch semantics.

```sql
UPDATE googleworkspace.drivev3.replies
SET 
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__createdTime = '{{ createdTime }}',
data__modifiedTime = '{{ modifiedTime }}',
data__action = '{{ action }}',
data__author = '{{ author }}',
data__deleted = {{ deleted }},
data__htmlContent = '{{ htmlContent }}',
data__content = '{{ content }}'
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required
RETURNING
id,
action,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
modifiedTime;
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

Deletes a reply.

```sql
DELETE FROM googleworkspace.drivev3.replies
WHERE fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required;
```
</TabItem>
</Tabs>
