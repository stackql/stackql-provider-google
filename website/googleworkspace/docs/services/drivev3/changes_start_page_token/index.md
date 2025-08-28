--- 
title: changes_start_page_token
hide_title: false
hide_table_of_contents: false
keywords:
  - changes_start_page_token
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

Creates, updates, deletes, gets or lists a <code>changes_start_page_token</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>changes_start_page_token</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.changes_start_page_token" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_start_page_token"
    values={[
        { label: 'get_start_page_token', value: 'get_start_page_token' }
    ]}
>
<TabItem value="get_start_page_token">

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
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`. (default: drive#startPageToken)</td>
</tr>
<tr>
    <td><CopyableCode code="startPageToken" /></td>
    <td><code>string</code></td>
    <td>The starting page token for listing future changes. The page token doesn't expire.</td>
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
    <td><a href="#get_start_page_token"><CopyableCode code="get_start_page_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a></td>
    <td>Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).</td>
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
<tr id="parameter-driveId">
    <td><CopyableCode code="driveId" /></td>
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
<tr id="parameter-teamDriveId">
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_start_page_token"
    values={[
        { label: 'get_start_page_token', value: 'get_start_page_token' }
    ]}
>
<TabItem value="get_start_page_token">

Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

```sql
SELECT
kind,
startPageToken
FROM googleworkspace.drivev3.changes_start_page_token
WHERE driveId = '{{ driveId }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND teamDriveId = '{{ teamDriveId }}';
```
</TabItem>
</Tabs>
