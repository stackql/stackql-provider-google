--- 
title: backup_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_schedules
  - firestore
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

Creates, updates, deletes, gets or lists a <code>backup_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.backup_schedules" /></td></tr>
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

A backup schedule for a Cloud Firestore Database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though.

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
    <td>Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/&#123;project&#125;/databases/&#123;database&#125;/backupSchedules/&#123;backup_schedule&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which this backup schedule was created and effective since. No backups will be created for this schedule before this time.</td>
</tr>
<tr>
    <td><CopyableCode code="dailyRecurrence" /></td>
    <td><code>object</code></td>
    <td>For a schedule that runs daily. (id: GoogleFirestoreAdminV1DailyRecurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="retention" /></td>
    <td><code>string (google-duration)</code></td>
    <td>At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. The maximum supported retention period is 14 weeks.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which this backup schedule was most recently updated. When a backup schedule is first created, this is the same as create_time.</td>
</tr>
<tr>
    <td><CopyableCode code="weeklyRecurrence" /></td>
    <td><code>object</code></td>
    <td>For a schedule that runs weekly on a specific day. (id: GoogleFirestoreAdminV1WeeklyRecurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for FirestoreAdmin.ListBackupSchedules.

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
    <td><CopyableCode code="backupSchedules" /></td>
    <td><code>array</code></td>
    <td>List of all backup schedules.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-backupSchedulesId"><code>backupSchedulesId</code></a></td>
    <td></td>
    <td>Gets information about a backup schedule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>List backup schedules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule and one weekly backup schedule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-backupSchedulesId"><code>backupSchedulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a backup schedule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-backupSchedulesId"><code>backupSchedulesId</code></a></td>
    <td></td>
    <td>Deletes a backup schedule.</td>
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
<tr id="parameter-backupSchedulesId">
    <td><CopyableCode code="backupSchedulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets information about a backup schedule.

```sql
SELECT
name,
createTime,
dailyRecurrence,
retention,
updateTime,
weeklyRecurrence
FROM google.firestore.backup_schedules
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND backupSchedulesId = '{{ backupSchedulesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List backup schedules.

```sql
SELECT
backupSchedules
FROM google.firestore.backup_schedules
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required;
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

Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule and one weekly backup schedule.

```sql
INSERT INTO google.firestore.backup_schedules (
data__retention,
data__dailyRecurrence,
data__weeklyRecurrence,
projectsId,
databasesId
)
SELECT 
'{{ retention }}',
'{{ dailyRecurrence }}',
'{{ weeklyRecurrence }}',
'{{ projectsId }}',
'{{ databasesId }}'
RETURNING
name,
createTime,
dailyRecurrence,
retention,
updateTime,
weeklyRecurrence
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: backup_schedules
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backup_schedules resource.
    - name: databasesId
      value: string
      description: Required parameter for the backup_schedules resource.
    - name: retention
      value: string
      description: >
        At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. The maximum supported retention period is 14 weeks.
        
    - name: dailyRecurrence
      value: object
      description: >
        For a schedule that runs daily.
        
    - name: weeklyRecurrence
      value: object
      description: >
        For a schedule that runs weekly on a specific day.
        
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

Updates a backup schedule.

```sql
UPDATE google.firestore.backup_schedules
SET 
data__retention = '{{ retention }}',
data__dailyRecurrence = '{{ dailyRecurrence }}',
data__weeklyRecurrence = '{{ weeklyRecurrence }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND backupSchedulesId = '{{ backupSchedulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dailyRecurrence,
retention,
updateTime,
weeklyRecurrence;
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

Deletes a backup schedule.

```sql
DELETE FROM google.firestore.backup_schedules
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND backupSchedulesId = '{{ backupSchedulesId }}' --required;
```
</TabItem>
</Tabs>
