--- 
title: about
hide_title: false
hide_table_of_contents: false
keywords:
  - about
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

Creates, updates, deletes, gets or lists an <code>about</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>about</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.about" /></td></tr>
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
    <td><CopyableCode code="appInstalled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has installed the requesting app.</td>
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
    <td><CopyableCode code="driveThemes" /></td>
    <td><code>array</code></td>
    <td>A list of themes that are supported for shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="exportFormats" /></td>
    <td><code>object</code></td>
    <td>A map of source MIME type to possible targets for all supported exports.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorPalette" /></td>
    <td><code>array</code></td>
    <td>The currently supported folder colors as RGB hex strings.</td>
</tr>
<tr>
    <td><CopyableCode code="importFormats" /></td>
    <td><code>object</code></td>
    <td>A map of source MIME type to possible targets for all supported imports.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Identifies what kind of resource this is. Value: the fixed string `"drive#about"`. (default: drive#about)</td>
</tr>
<tr>
    <td><CopyableCode code="maxImportSizes" /></td>
    <td><code>object</code></td>
    <td>A map of maximum import sizes by MIME type, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="maxUploadSize" /></td>
    <td><code>string (int64)</code></td>
    <td>The maximum upload size in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="storageQuota" /></td>
    <td><code>object</code></td>
    <td>The user's storage quota limits and usage. For users that are part of an organization with pooled storage, information about the limit and usage across all services is for the organization, rather than the individual user. All fields are measured in bytes.</td>
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
    <td></td>
    <td>Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).</td>
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

Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

```sql
SELECT
appInstalled,
canCreateDrives,
canCreateTeamDrives,
driveThemes,
exportFormats,
folderColorPalette,
importFormats,
kind,
maxImportSizes,
maxUploadSize,
storageQuota,
teamDriveThemes,
user
FROM googleworkspace.drivev3.about;
```
</TabItem>
</Tabs>
