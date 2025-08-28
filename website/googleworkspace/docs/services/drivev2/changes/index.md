--- 
title: changes
hide_title: false
hide_table_of_contents: false
keywords:
  - changes
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

Creates, updates, deletes, gets or lists a <code>changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>changes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.changes" /></td></tr>
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
    <td><code>string (int64)</code></td>
    <td>The ID of the change.</td>
</tr>
<tr>
    <td><CopyableCode code="changeType" /></td>
    <td><code>string</code></td>
    <td>The type of the change. Possible values are `file` and `drive`.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.</td>
</tr>
<tr>
    <td><CopyableCode code="drive" /></td>
    <td><code>object</code></td>
    <td>The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. (id: Drive)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>The ID of the shared drive associated with this change.</td>
</tr>
<tr>
    <td><CopyableCode code="file" /></td>
    <td><code>object</code></td>
    <td>The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. (id: File)</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the file associated with this change.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#change`. (default: drive#change)</td>
</tr>
<tr>
    <td><CopyableCode code="modificationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of this modification.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this change.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrive" /></td>
    <td><code>object</code></td>
    <td>Deprecated: Use `drive` instead. (id: TeamDrive)</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Use `changeType` instead.</td>
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
    <td><code>string (int64)</code></td>
    <td>The ID of the change.</td>
</tr>
<tr>
    <td><CopyableCode code="changeType" /></td>
    <td><code>string</code></td>
    <td>The type of the change. Possible values are `file` and `drive`.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.</td>
</tr>
<tr>
    <td><CopyableCode code="drive" /></td>
    <td><code>object</code></td>
    <td>The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. (id: Drive)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>The ID of the shared drive associated with this change.</td>
</tr>
<tr>
    <td><CopyableCode code="file" /></td>
    <td><code>object</code></td>
    <td>The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. (id: File)</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the file associated with this change.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#change`. (default: drive#change)</td>
</tr>
<tr>
    <td><CopyableCode code="modificationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of this modification.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this change.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrive" /></td>
    <td><code>object</code></td>
    <td>Deprecated: Use `drive` instead. (id: TeamDrive)</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Use `changeType` instead.</td>
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
    <td><a href="#parameter-changeId"><code>changeId</code></a></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a></td>
    <td>Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-includeCorpusRemovals"><code>includeCorpusRemovals</code></a>, <a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-includeSubscribed"><code>includeSubscribed</code></a>, <a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-spaces"><code>spaces</code></a>, <a href="#parameter-startChangeId"><code>startChangeId</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Lists the changes for a user or shared drive.</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-includeCorpusRemovals"><code>includeCorpusRemovals</code></a>, <a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-includeSubscribed"><code>includeSubscribed</code></a>, <a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-spaces"><code>spaces</code></a>, <a href="#parameter-startChangeId"><code>startChangeId</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Subscribe to changes for a user.</td>
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
<tr id="parameter-changeId">
    <td><CopyableCode code="changeId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-driveId">
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeCorpusRemovals">
    <td><CopyableCode code="includeCorpusRemovals" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeDeleted">
    <td><CopyableCode code="includeDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeItemsFromAllDrives">
    <td><CopyableCode code="includeItemsFromAllDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeLabels">
    <td><CopyableCode code="includeLabels" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includePermissionsForView">
    <td><CopyableCode code="includePermissionsForView" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeSubscribed">
    <td><CopyableCode code="includeSubscribed" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeTeamDriveItems">
    <td><CopyableCode code="includeTeamDriveItems" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-spaces">
    <td><CopyableCode code="spaces" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startChangeId">
    <td><CopyableCode code="startChangeId" /></td>
    <td><code>string (int64)</code></td>
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
<tr id="parameter-teamDriveId">
    <td><CopyableCode code="teamDriveId" /></td>
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

Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.

```sql
SELECT
id,
changeType,
deleted,
drive,
driveId,
file,
fileId,
kind,
modificationDate,
selfLink,
teamDrive,
teamDriveId,
type
FROM googleworkspace.drivev2.changes
WHERE changeId = '{{ changeId }}' -- required
AND driveId = '{{ driveId }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND teamDriveId = '{{ teamDriveId }}';
```
</TabItem>
<TabItem value="list">

Lists the changes for a user or shared drive.

```sql
SELECT
id,
changeType,
deleted,
drive,
driveId,
file,
fileId,
kind,
modificationDate,
selfLink,
teamDrive,
teamDriveId,
type
FROM googleworkspace.drivev2.changes
WHERE driveId = '{{ driveId }}'
AND includeCorpusRemovals = '{{ includeCorpusRemovals }}'
AND includeDeleted = '{{ includeDeleted }}'
AND includeItemsFromAllDrives = '{{ includeItemsFromAllDrives }}'
AND includeSubscribed = '{{ includeSubscribed }}'
AND includeTeamDriveItems = '{{ includeTeamDriveItems }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND spaces = '{{ spaces }}'
AND startChangeId = '{{ startChangeId }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND teamDriveId = '{{ teamDriveId }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND includeLabels = '{{ includeLabels }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="watch"
    values={[
        { label: 'watch', value: 'watch' }
    ]}
>
<TabItem value="watch">

Subscribe to changes for a user.

```sql
EXEC googleworkspace.drivev2.changes.watch 
@driveId='{{ driveId }}', 
@includeCorpusRemovals={{ includeCorpusRemovals }}, 
@includeDeleted={{ includeDeleted }}, 
@includeItemsFromAllDrives={{ includeItemsFromAllDrives }}, 
@includeSubscribed={{ includeSubscribed }}, 
@includeTeamDriveItems={{ includeTeamDriveItems }}, 
@maxResults='{{ maxResults }}', 
@pageToken='{{ pageToken }}', 
@spaces='{{ spaces }}', 
@startChangeId='{{ startChangeId }}', 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@teamDriveId='{{ teamDriveId }}', 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}' 
@@json=
'{
"payload": {{ payload }}, 
"id": "{{ id }}", 
"resourceId": "{{ resourceId }}", 
"resourceUri": "{{ resourceUri }}", 
"token": "{{ token }}", 
"expiration": "{{ expiration }}", 
"type": "{{ type }}", 
"address": "{{ address }}", 
"params": "{{ params }}", 
"kind": "{{ kind }}"
}';
```
</TabItem>
</Tabs>
