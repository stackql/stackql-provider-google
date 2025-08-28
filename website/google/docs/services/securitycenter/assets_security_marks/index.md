--- 
title: assets_security_marks
hide_title: false
hide_table_of_contents: false
keywords:
  - assets_security_marks
  - securitycenter
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

Creates, updates, deletes, gets or lists an <code>assets_security_marks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assets_security_marks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.assets_security_marks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#folders_assets_update_security_marks"><CopyableCode code="folders_assets_update_security_marks" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-startTime"><code>startTime</code></a></td>
    <td>Updates security marks.</td>
</tr>
<tr>
    <td><a href="#projects_assets_update_security_marks"><CopyableCode code="projects_assets_update_security_marks" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-startTime"><code>startTime</code></a></td>
    <td>Updates security marks.</td>
</tr>
<tr>
    <td><a href="#organizations_assets_update_security_marks"><CopyableCode code="organizations_assets_update_security_marks" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-startTime"><code>startTime</code></a></td>
    <td>Updates security marks.</td>
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
<tr id="parameter-assetsId">
    <td><CopyableCode code="assetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="folders_assets_update_security_marks"
    values={[
        { label: 'folders_assets_update_security_marks', value: 'folders_assets_update_security_marks' },
        { label: 'projects_assets_update_security_marks', value: 'projects_assets_update_security_marks' },
        { label: 'organizations_assets_update_security_marks', value: 'organizations_assets_update_security_marks' }
    ]}
>
<TabItem value="folders_assets_update_security_marks">

Updates security marks.

```sql
UPDATE google.securitycenter.assets_security_marks
SET 
data__name = '{{ name }}',
data__marks = '{{ marks }}',
data__canonicalName = '{{ canonicalName }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND assetsId = '{{ assetsId }}' --required
AND updateMask = '{{ updateMask}}'
AND startTime = '{{ startTime}}'
RETURNING
name,
canonicalName,
marks;
```
</TabItem>
<TabItem value="projects_assets_update_security_marks">

Updates security marks.

```sql
UPDATE google.securitycenter.assets_security_marks
SET 
data__name = '{{ name }}',
data__marks = '{{ marks }}',
data__canonicalName = '{{ canonicalName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND assetsId = '{{ assetsId }}' --required
AND updateMask = '{{ updateMask}}'
AND startTime = '{{ startTime}}'
RETURNING
name,
canonicalName,
marks;
```
</TabItem>
<TabItem value="organizations_assets_update_security_marks">

Updates security marks.

```sql
UPDATE google.securitycenter.assets_security_marks
SET 
data__name = '{{ name }}',
data__marks = '{{ marks }}',
data__canonicalName = '{{ canonicalName }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND assetsId = '{{ assetsId }}' --required
AND updateMask = '{{ updateMask}}'
AND startTime = '{{ startTime}}'
RETURNING
name,
canonicalName,
marks;
```
</TabItem>
</Tabs>
