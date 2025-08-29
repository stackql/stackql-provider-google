--- 
title: drives
hide_title: false
hide_table_of_contents: false
keywords:
  - drives
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

Creates, updates, deletes, gets or lists a <code>drives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>drives</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.drives" /></td></tr>
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
    <td>Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageFile" /></td>
    <td><code>object</code></td>
    <td>An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to this shared drive's background image.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="colorRgb" /></td>
    <td><code>string</code></td>
    <td>The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the shared drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="hidden" /></td>
    <td><code>boolean</code></td>
    <td>Whether the shared drive is hidden from default view.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#drive` (default: drive#drive)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>A set of restrictions that apply to this shared drive or items inside this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="themeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td>Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageFile" /></td>
    <td><code>object</code></td>
    <td>An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to this shared drive's background image.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="colorRgb" /></td>
    <td><code>string</code></td>
    <td>The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the shared drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="hidden" /></td>
    <td><code>boolean</code></td>
    <td>Whether the shared drive is hidden from default view.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#drive` (default: drive#drive)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>A set of restrictions that apply to this shared drive or items inside this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="themeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Gets a shared drive's metadata by ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td> Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Creates a new shared drive.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Updates the metadata for a shared drive.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-allowItemDeletion"><code>allowItemDeletion</code></a></td>
    <td>Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.</td>
</tr>
<tr>
    <td><a href="#hide"><CopyableCode code="hide" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td></td>
    <td>Hides a shared drive from the default view.</td>
</tr>
<tr>
    <td><a href="#unhide"><CopyableCode code="unhide" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td></td>
    <td>Restores a shared drive to the default view.</td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowItemDeletion">
    <td><CopyableCode code="allowItemDeletion" /></td>
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
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-useDomainAdminAccess">
    <td><CopyableCode code="useDomainAdminAccess" /></td>
    <td><code>boolean</code></td>
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

Gets a shared drive's metadata by ID.

```sql
SELECT
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdDate,
hidden,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev2.drives
WHERE driveId = '{{ driveId }}' -- required
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}';
```
</TabItem>
<TabItem value="list">

 Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide.

```sql
SELECT
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdDate,
hidden,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev2.drives
WHERE maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND q = '{{ q }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}';
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

Creates a new shared drive.

```sql
INSERT INTO googleworkspace.drivev2.drives (
data__id,
data__name,
data__colorRgb,
data__kind,
data__backgroundImageLink,
data__capabilities,
data__themeId,
data__backgroundImageFile,
data__createdDate,
data__hidden,
data__restrictions,
data__orgUnitId,
requestId
)
SELECT 
'{{ id }}',
'{{ name }}',
'{{ colorRgb }}',
'{{ kind }}',
'{{ backgroundImageLink }}',
'{{ capabilities }}',
'{{ themeId }}',
'{{ backgroundImageFile }}',
'{{ createdDate }}',
{{ hidden }},
'{{ restrictions }}',
'{{ orgUnitId }}',
'{{ requestId }}'
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdDate,
hidden,
kind,
orgUnitId,
restrictions,
themeId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: drives
  props:
    - name: requestId
      value: string
      description: Required parameter for the drives resource.
    - name: id
      value: string
      description: >
        Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.
        
    - name: name
      value: string
      description: >
        The name of this shared drive.
        
    - name: colorRgb
      value: string
      description: >
        The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.
        
    - name: kind
      value: string
      description: >
        Output only. This is always `drive#drive`
        
      default: drive#drive
    - name: backgroundImageLink
      value: string
      description: >
        Output only. A short-lived link to this shared drive's background image.
        
    - name: capabilities
      value: object
      description: >
        Output only. Capabilities the current user has on this shared drive.
        
    - name: themeId
      value: string
      description: >
        The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.
        
    - name: backgroundImageFile
      value: object
      description: >
        An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.
        
    - name: createdDate
      value: string
      description: >
        The time at which the shared drive was created (RFC 3339 date-time).
        
    - name: hidden
      value: boolean
      description: >
        Whether the shared drive is hidden from default view.
        
    - name: restrictions
      value: object
      description: >
        A set of restrictions that apply to this shared drive or items inside this shared drive.
        
    - name: orgUnitId
      value: string
      description: >
        Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.
        
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

Updates the metadata for a shared drive.

```sql
REPLACE googleworkspace.drivev2.drives
SET 
data__id = '{{ id }}',
data__name = '{{ name }}',
data__colorRgb = '{{ colorRgb }}',
data__kind = '{{ kind }}',
data__backgroundImageLink = '{{ backgroundImageLink }}',
data__capabilities = '{{ capabilities }}',
data__themeId = '{{ themeId }}',
data__backgroundImageFile = '{{ backgroundImageFile }}',
data__createdDate = '{{ createdDate }}',
data__hidden = {{ hidden }},
data__restrictions = '{{ restrictions }}',
data__orgUnitId = '{{ orgUnitId }}'
WHERE 
driveId = '{{ driveId }}' --required
AND useDomainAdminAccess = {{ useDomainAdminAccess}}
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdDate,
hidden,
kind,
orgUnitId,
restrictions,
themeId;
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

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.

```sql
DELETE FROM googleworkspace.drivev2.drives
WHERE driveId = '{{ driveId }}' --required
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND allowItemDeletion = '{{ allowItemDeletion }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="hide"
    values={[
        { label: 'hide', value: 'hide' },
        { label: 'unhide', value: 'unhide' }
    ]}
>
<TabItem value="hide">

Hides a shared drive from the default view.

```sql
EXEC googleworkspace.drivev2.drives.hide 
@driveId='{{ driveId }}' --required;
```
</TabItem>
<TabItem value="unhide">

Restores a shared drive to the default view.

```sql
EXEC googleworkspace.drivev2.drives.unhide 
@driveId='{{ driveId }}' --required;
```
</TabItem>
</Tabs>
