--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.backups" /></td></tr>
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
    <td><a href="#create_backup"><CopyableCode code="create_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.</td>
</tr>
<tr>
    <td><a href="#list_backups"><CopyableCode code="list_backups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all backups associated with the project.</td>
</tr>
<tr>
    <td><a href="#get_backup"><CopyableCode code="get_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Retrieves a resource containing information about a backup.</td>
</tr>
<tr>
    <td><a href="#update_backup"><CopyableCode code="update_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the retention period and description of the backup. You can use this API to update final backups only.</td>
</tr>
<tr>
    <td><a href="#delete_backup"><CopyableCode code="delete_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Deletes the backup.</td>
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
<tr id="parameter-backupsId">
    <td><CopyableCode code="backupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="create_backup"
    values={[
        { label: 'create_backup', value: 'create_backup' },
        { label: 'list_backups', value: 'list_backups' },
        { label: 'get_backup', value: 'get_backup' },
        { label: 'update_backup', value: 'update_backup' },
        { label: 'delete_backup', value: 'delete_backup' }
    ]}
>
<TabItem value="create_backup">

Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.

```sql
EXEC google.sqladmin.backups.create_backup 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"description": "{{ description }}", 
"instance": "{{ instance }}", 
"location": "{{ location }}", 
"ttlDays": "{{ ttlDays }}", 
"expiryTime": "{{ expiryTime }}"
}';
```
</TabItem>
<TabItem value="list_backups">

Lists all backups associated with the project.

```sql
EXEC google.sqladmin.backups.list_backups 
@projectsId='{{ projectsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@filter='{{ filter }}';
```
</TabItem>
<TabItem value="get_backup">

Retrieves a resource containing information about a backup.

```sql
EXEC google.sqladmin.backups.get_backup 
@projectsId='{{ projectsId }}' --required, 
@backupsId='{{ backupsId }}' --required;
```
</TabItem>
<TabItem value="update_backup">

Updates the retention period and description of the backup. You can use this API to update final backups only.

```sql
EXEC google.sqladmin.backups.update_backup 
@projectsId='{{ projectsId }}' --required, 
@backupsId='{{ backupsId }}' --required, 
@updateMask='{{ updateMask }}' 
@@json=
'{
"description": "{{ description }}", 
"instance": "{{ instance }}", 
"location": "{{ location }}", 
"ttlDays": "{{ ttlDays }}", 
"expiryTime": "{{ expiryTime }}"
}';
```
</TabItem>
<TabItem value="delete_backup">

Deletes the backup.

```sql
EXEC google.sqladmin.backups.delete_backup 
@projectsId='{{ projectsId }}' --required, 
@backupsId='{{ backupsId }}' --required;
```
</TabItem>
</Tabs>
