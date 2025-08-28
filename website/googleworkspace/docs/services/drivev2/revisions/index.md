--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>revisions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.revisions" /></td></tr>
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
    <td><CopyableCode code="downloadUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The ETag of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSize" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#revision`. (default: drive#revision)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUserName" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last user to modify this revision.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The MIME type of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this revision was modified (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="pinned" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions.</td>
</tr>
<tr>
    <td><CopyableCode code="publishAuto" /></td>
    <td><code>boolean</code></td>
    <td>Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="published" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published. This is only populated and can only be modified for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the published revision. This is only populated for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedOutsideDomain" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this revision.</td>
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
    <td><CopyableCode code="downloadUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The ETag of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSize" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#revision`. (default: drive#revision)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUserName" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last user to modify this revision.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The MIME type of the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this revision was modified (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="pinned" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions.</td>
</tr>
<tr>
    <td><CopyableCode code="publishAuto" /></td>
    <td><code>boolean</code></td>
    <td>Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="published" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published. This is only populated and can only be modified for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the published revision. This is only populated for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="publishedOutsideDomain" /></td>
    <td><code>boolean</code></td>
    <td>Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this revision.</td>
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
    <td></td>
    <td>Gets a specific revision.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists a file's revisions.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td></td>
    <td>Updates a revision.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td></td>
    <td>Updates a revision.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td></td>
    <td>Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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

Gets a specific revision.

```sql
SELECT
id,
downloadUrl,
etag,
exportLinks,
fileSize,
kind,
lastModifyingUser,
lastModifyingUserName,
md5Checksum,
mimeType,
modifiedDate,
originalFilename,
pinned,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
selfLink
FROM googleworkspace.drivev2.revisions
WHERE fileId = '{{ fileId }}' -- required
AND revisionId = '{{ revisionId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists a file's revisions.

```sql
SELECT
id,
downloadUrl,
etag,
exportLinks,
fileSize,
kind,
lastModifyingUser,
lastModifyingUserName,
md5Checksum,
mimeType,
modifiedDate,
originalFilename,
pinned,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
selfLink
FROM googleworkspace.drivev2.revisions
WHERE fileId = '{{ fileId }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
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

Updates a revision.

```sql
UPDATE googleworkspace.drivev2.revisions
SET 
data__id = '{{ id }}',
data__mimeType = '{{ mimeType }}',
data__kind = '{{ kind }}',
data__published = {{ published }},
data__etag = '{{ etag }}',
data__exportLinks = '{{ exportLinks }}',
data__pinned = {{ pinned }},
data__md5Checksum = '{{ md5Checksum }}',
data__modifiedDate = '{{ modifiedDate }}',
data__lastModifyingUserName = '{{ lastModifyingUserName }}',
data__downloadUrl = '{{ downloadUrl }}',
data__publishAuto = {{ publishAuto }},
data__publishedOutsideDomain = {{ publishedOutsideDomain }},
data__publishedLink = '{{ publishedLink }}',
data__fileSize = '{{ fileSize }}',
data__originalFilename = '{{ originalFilename }}',
data__lastModifyingUser = '{{ lastModifyingUser }}',
data__selfLink = '{{ selfLink }}'
WHERE 
fileId = '{{ fileId }}' --required
AND revisionId = '{{ revisionId }}' --required
RETURNING
id,
downloadUrl,
etag,
exportLinks,
fileSize,
kind,
lastModifyingUser,
lastModifyingUserName,
md5Checksum,
mimeType,
modifiedDate,
originalFilename,
pinned,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
selfLink;
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

Updates a revision.

```sql
REPLACE googleworkspace.drivev2.revisions
SET 
data__id = '{{ id }}',
data__mimeType = '{{ mimeType }}',
data__kind = '{{ kind }}',
data__published = {{ published }},
data__etag = '{{ etag }}',
data__exportLinks = '{{ exportLinks }}',
data__pinned = {{ pinned }},
data__md5Checksum = '{{ md5Checksum }}',
data__modifiedDate = '{{ modifiedDate }}',
data__lastModifyingUserName = '{{ lastModifyingUserName }}',
data__downloadUrl = '{{ downloadUrl }}',
data__publishAuto = {{ publishAuto }},
data__publishedOutsideDomain = {{ publishedOutsideDomain }},
data__publishedLink = '{{ publishedLink }}',
data__fileSize = '{{ fileSize }}',
data__originalFilename = '{{ originalFilename }}',
data__lastModifyingUser = '{{ lastModifyingUser }}',
data__selfLink = '{{ selfLink }}'
WHERE 
fileId = '{{ fileId }}' --required
AND revisionId = '{{ revisionId }}' --required
RETURNING
id,
downloadUrl,
etag,
exportLinks,
fileSize,
kind,
lastModifyingUser,
lastModifyingUserName,
md5Checksum,
mimeType,
modifiedDate,
originalFilename,
pinned,
publishAuto,
published,
publishedLink,
publishedOutsideDomain,
selfLink;
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

Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

```sql
DELETE FROM googleworkspace.drivev2.revisions
WHERE fileId = '{{ fileId }}' --required
AND revisionId = '{{ revisionId }}' --required;
```
</TabItem>
</Tabs>
