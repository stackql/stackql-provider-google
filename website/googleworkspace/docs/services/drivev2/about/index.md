--- 
title: about
hide_title: false
hide_table_of_contents: false
keywords:
  - about
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

Creates, updates, deletes, gets or lists an <code>about</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>about</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.about" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the current user.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalRoleInfo" /></td>
    <td><code>array</code></td>
    <td>Information about supported additional roles per file type. The most specific type takes precedence.</td>
</tr>
<tr>
    <td><CopyableCode code="canCreateDrives" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user can create shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="canCreateTeamDrives" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated: Use `canCreateDrives` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="domainSharingPolicy" /></td>
    <td><code>string</code></td>
    <td>The domain sharing policy for the current user. Possible values are: * `allowed` * `allowedWithWarning` * `incomingOnly` * `disallowed`</td>
</tr>
<tr>
    <td><CopyableCode code="driveThemes" /></td>
    <td><code>array</code></td>
    <td>A list of themes that are supported for shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The ETag of the item.</td>
</tr>
<tr>
    <td><CopyableCode code="exportFormats" /></td>
    <td><code>array</code></td>
    <td>The allowable export formats.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>List of additional features enabled on this account.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorPalette" /></td>
    <td><code>array</code></td>
    <td>The palette of allowable folder colors as RGB hex strings.</td>
</tr>
<tr>
    <td><CopyableCode code="importFormats" /></td>
    <td><code>array</code></td>
    <td>The allowable import formats.</td>
</tr>
<tr>
    <td><CopyableCode code="isCurrentAppInstalled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean indicating whether the authenticated app is installed by the authenticated user.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#about`. (default: drive#about)</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).</td>
</tr>
<tr>
    <td><CopyableCode code="largestChangeId" /></td>
    <td><code>string (int64)</code></td>
    <td>The largest change id.</td>
</tr>
<tr>
    <td><CopyableCode code="maxUploadSizes" /></td>
    <td><code>array</code></td>
    <td>List of max upload sizes for each file type. The most specific type takes precedence.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionId" /></td>
    <td><code>string</code></td>
    <td>The current user's ID as visible in the permissions collection.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesByService" /></td>
    <td><code>array</code></td>
    <td>The amount of storage quota used by different Google services.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesTotal" /></td>
    <td><code>string (int64)</code></td>
    <td>The total number of quota bytes. This is only relevant when quotaType is LIMITED.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of quota bytes used by Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsedAggregate" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of quota bytes used by all Google apps (Drive, Picasa, etc.).</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsedInTrash" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of quota bytes used by trashed items.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaType" /></td>
    <td><code>string</code></td>
    <td>The type of the user's storage quota. Possible values are: * `LIMITED` * `UNLIMITED`</td>
</tr>
<tr>
    <td><CopyableCode code="remainingChangeIds" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of remaining change ids, limited to no more than 2500.</td>
</tr>
<tr>
    <td><CopyableCode code="rootFolderId" /></td>
    <td><code>string</code></td>
    <td>The id of the root folder.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveThemes" /></td>
    <td><code>array</code></td>
    <td>Deprecated: Use `driveThemes` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The authenticated user. (id: User)</td>
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
    <td></td>
    <td><a href="#parameter-includeSubscribed"><code>includeSubscribed</code></a>, <a href="#parameter-maxChangeIdCount"><code>maxChangeIdCount</code></a>, <a href="#parameter-startChangeId"><code>startChangeId</code></a></td>
    <td>Gets the information about the current user along with Drive API settings</td>
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
<tr id="parameter-includeSubscribed">
    <td><CopyableCode code="includeSubscribed" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxChangeIdCount">
    <td><CopyableCode code="maxChangeIdCount" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-startChangeId">
    <td><CopyableCode code="startChangeId" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets the information about the current user along with Drive API settings

```sql
SELECT
name,
additionalRoleInfo,
canCreateDrives,
canCreateTeamDrives,
domainSharingPolicy,
driveThemes,
etag,
exportFormats,
features,
folderColorPalette,
importFormats,
isCurrentAppInstalled,
kind,
languageCode,
largestChangeId,
maxUploadSizes,
permissionId,
quotaBytesByService,
quotaBytesTotal,
quotaBytesUsed,
quotaBytesUsedAggregate,
quotaBytesUsedInTrash,
quotaType,
remainingChangeIds,
rootFolderId,
selfLink,
teamDriveThemes,
user
FROM googleworkspace.drivev2.about
WHERE includeSubscribed = '{{ includeSubscribed }}'
AND maxChangeIdCount = '{{ maxChangeIdCount }}'
AND startChangeId = '{{ startChangeId }}';
```
</TabItem>
</Tabs>
