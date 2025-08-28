--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.revisions" /></td></tr>
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
    <td>Output only. The ID of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="keepForever" /></td>
    <td><code>boolean</code></td>
    <td>Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`. (default: drive#revision)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The MIME type of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the revision was modified (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="publishAuto" /></td>
    <td><code>boolean</code></td>
    <td>Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="published" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published. This is only applicable to Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the published revision. This is only populated for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedOutsideDomain" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published outside the domain. This is only applicable to Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.</td>
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
    <td>Output only. The ID of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="keepForever" /></td>
    <td><code>boolean</code></td>
    <td>Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`. (default: drive#revision)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The MIME type of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the revision was modified (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="publishAuto" /></td>
    <td><code>boolean</code></td>
    <td>Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="published" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published. This is only applicable to Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the published revision. This is only populated for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedOutsideDomain" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published outside the domain. This is only applicable to Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td><a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a></td>
    <td>Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td></td>
    <td>Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td></td>
    <td>Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions).</td>
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
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-acknowledgeAbuse">
    <td><CopyableCode code="acknowledgeAbuse" /></td>
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

Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

```sql
SELECT
id,
exportLinks,
keepForever,
kind,
lastModifyingUser,
md5Checksum,
mimeType,
modifiedTime,
originalFilename,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
size
FROM googleworkspace.drivev3.revisions
WHERE fileId = '{{ fileId }}' -- required
AND revisionId = '{{ revisionId }}' -- required
AND acknowledgeAbuse = '{{ acknowledgeAbuse }}';
```
</TabItem>
<TabItem value="list">

Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

```sql
SELECT
id,
exportLinks,
keepForever,
kind,
lastModifyingUser,
md5Checksum,
mimeType,
modifiedTime,
originalFilename,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
size
FROM googleworkspace.drivev3.revisions
WHERE fileId = '{{ fileId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

```sql
UPDATE googleworkspace.drivev3.revisions
SET 
data__id = '{{ id }}',
data__mimeType = '{{ mimeType }}',
data__kind = '{{ kind }}',
data__published = {{ published }},
data__exportLinks = '{{ exportLinks }}',
data__keepForever = {{ keepForever }},
data__md5Checksum = '{{ md5Checksum }}',
data__modifiedTime = '{{ modifiedTime }}',
data__publishAuto = {{ publishAuto }},
data__publishedOutsideDomain = {{ publishedOutsideDomain }},
data__publishedLink = '{{ publishedLink }}',
data__size = '{{ size }}',
data__originalFilename = '{{ originalFilename }}',
data__lastModifyingUser = '{{ lastModifyingUser }}'
WHERE 
fileId = '{{ fileId }}' --required
AND revisionId = '{{ revisionId }}' --required
RETURNING
id,
exportLinks,
keepForever,
kind,
lastModifyingUser,
md5Checksum,
mimeType,
modifiedTime,
originalFilename,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
size;
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

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions).

```sql
DELETE FROM googleworkspace.drivev3.revisions
WHERE fileId = '{{ fileId }}' --required
AND revisionId = '{{ revisionId }}' --required;
```
</TabItem>
</Tabs>
