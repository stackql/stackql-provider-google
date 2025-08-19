--- 
title: backup_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_schedules
  - spanner
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.backup_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instances_databases_backup_schedules_get"
    values={[
        { label: 'projects_instances_databases_backup_schedules_get', value: 'projects_instances_databases_backup_schedules_get' },
        { label: 'projects_instances_databases_backup_schedules_list', value: 'projects_instances_databases_backup_schedules_list' }
    ]}
>
<TabItem value="projects_instances_databases_backup_schedules_get">

BackupSchedule expresses the automated backup creation specification for a Spanner database.

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
    <td>Identifier. Output only for the CreateBackupSchedule operation. Required for the UpdateBackupSchedule operation. A globally unique identifier for the backup schedule which cannot be changed. Values are of the form `projects//instances//databases//backupSchedules/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The encryption configuration that is used to encrypt the backup. If this field is not specified, the backup uses the same encryption configuration as the database. (id: CreateBackupEncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="fullBackupSpec" /></td>
    <td><code>object</code></td>
    <td>The schedule creates only full backups. (id: FullBackupSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="incrementalBackupSpec" /></td>
    <td><code>object</code></td>
    <td>The schedule creates incremental backup chains. (id: IncrementalBackupSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The retention duration of a backup that must be at least 6 hours and at most 366 days. The backup is eligible to be automatically deleted once the retention period has elapsed.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. The schedule specification based on which the backup creations are triggered. (id: BackupScheduleSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which the schedule was last updated. If the schedule has never been updated, this field contains the timestamp when the schedule was first created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instances_databases_backup_schedules_list">

The response for ListBackupSchedules.

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
    <td>The list of backup schedules for a database.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>`next_page_token` can be sent in a subsequent ListBackupSchedules call to fetch more of the schedules.</td>
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
    <td><a href="#projects_instances_databases_backup_schedules_get"><CopyableCode code="projects_instances_databases_backup_schedules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-backupSchedulesId"><code>backupSchedulesId</code></a></td>
    <td></td>
    <td>Gets backup schedule for the input schedule name.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_backup_schedules_list"><CopyableCode code="projects_instances_databases_backup_schedules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the backup schedules for the database.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_backup_schedules_create"><CopyableCode code="projects_instances_databases_backup_schedules_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-backupScheduleId"><code>backupScheduleId</code></a></td>
    <td>Creates a new backup schedule.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_backup_schedules_patch"><CopyableCode code="projects_instances_databases_backup_schedules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-backupSchedulesId"><code>backupSchedulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a backup schedule.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_backup_schedules_delete"><CopyableCode code="projects_instances_databases_backup_schedules_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-backupSchedulesId"><code>backupSchedulesId</code></a></td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-backupScheduleId">
    <td><CopyableCode code="backupScheduleId" /></td>
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

## `SELECT` examples

<Tabs
    defaultValue="projects_instances_databases_backup_schedules_get"
    values={[
        { label: 'projects_instances_databases_backup_schedules_get', value: 'projects_instances_databases_backup_schedules_get' },
        { label: 'projects_instances_databases_backup_schedules_list', value: 'projects_instances_databases_backup_schedules_list' }
    ]}
>
<TabItem value="projects_instances_databases_backup_schedules_get">

Gets backup schedule for the input schedule name.

```sql
SELECT
name,
encryptionConfig,
fullBackupSpec,
incrementalBackupSpec,
retentionDuration,
spec,
updateTime
FROM google.spanner.backup_schedules
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND backupSchedulesId = '{{ backupSchedulesId }}' -- required;
```
</TabItem>
<TabItem value="projects_instances_databases_backup_schedules_list">

Lists all the backup schedules for the database.

```sql
SELECT
backupSchedules,
nextPageToken
FROM google.spanner.backup_schedules
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instances_databases_backup_schedules_create"
    values={[
        { label: 'projects_instances_databases_backup_schedules_create', value: 'projects_instances_databases_backup_schedules_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_databases_backup_schedules_create">

Creates a new backup schedule.

```sql
INSERT INTO google.spanner.backup_schedules (
data__name,
data__spec,
data__retentionDuration,
data__encryptionConfig,
data__fullBackupSpec,
data__incrementalBackupSpec,
projectsId,
instancesId,
databasesId,
backupScheduleId
)
SELECT 
'{{ name }}',
'{{ spec }}',
'{{ retentionDuration }}',
'{{ encryptionConfig }}',
'{{ fullBackupSpec }}',
'{{ incrementalBackupSpec }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ databasesId }}',
'{{ backupScheduleId }}'
RETURNING
name,
encryptionConfig,
fullBackupSpec,
incrementalBackupSpec,
retentionDuration,
spec,
updateTime
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
    - name: instancesId
      value: string
      description: Required parameter for the backup_schedules resource.
    - name: databasesId
      value: string
      description: Required parameter for the backup_schedules resource.
    - name: name
      value: string
      description: >
        Identifier. Output only for the CreateBackupSchedule operation. Required for the UpdateBackupSchedule operation. A globally unique identifier for the backup schedule which cannot be changed. Values are of the form `projects//instances//databases//backupSchedules/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length.
        
    - name: spec
      value: object
      description: >
        Optional. The schedule specification based on which the backup creations are triggered.
        
    - name: retentionDuration
      value: string
      description: >
        Optional. The retention duration of a backup that must be at least 6 hours and at most 366 days. The backup is eligible to be automatically deleted once the retention period has elapsed.
        
    - name: encryptionConfig
      value: object
      description: >
        Optional. The encryption configuration that is used to encrypt the backup. If this field is not specified, the backup uses the same encryption configuration as the database.
        
    - name: fullBackupSpec
      value: object
      description: >
        The schedule creates only full backups.
        
    - name: incrementalBackupSpec
      value: object
      description: >
        The schedule creates incremental backup chains.
        
    - name: backupScheduleId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_instances_databases_backup_schedules_patch"
    values={[
        { label: 'projects_instances_databases_backup_schedules_patch', value: 'projects_instances_databases_backup_schedules_patch' }
    ]}
>
<TabItem value="projects_instances_databases_backup_schedules_patch">

Updates a backup schedule.

```sql
UPDATE google.spanner.backup_schedules
SET 
data__name = '{{ name }}',
data__spec = '{{ spec }}',
data__retentionDuration = '{{ retentionDuration }}',
data__encryptionConfig = '{{ encryptionConfig }}',
data__fullBackupSpec = '{{ fullBackupSpec }}',
data__incrementalBackupSpec = '{{ incrementalBackupSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND backupSchedulesId = '{{ backupSchedulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
encryptionConfig,
fullBackupSpec,
incrementalBackupSpec,
retentionDuration,
spec,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_instances_databases_backup_schedules_delete"
    values={[
        { label: 'projects_instances_databases_backup_schedules_delete', value: 'projects_instances_databases_backup_schedules_delete' }
    ]}
>
<TabItem value="projects_instances_databases_backup_schedules_delete">

Deletes a backup schedule.

```sql
DELETE FROM google.spanner.backup_schedules
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND backupSchedulesId = '{{ backupSchedulesId }}' --required;
```
</TabItem>
</Tabs>
