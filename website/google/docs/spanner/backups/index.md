--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instances_backups_get"
    values={[
        { label: 'projects_instances_backups_get', value: 'projects_instances_backups_get' },
        { label: 'projects_instances_backups_list', value: 'projects_instances_backups_list' }
    ]}
>
<TabItem value="projects_instances_backups_get">

A backup of a Cloud Spanner database.

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
    <td>Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupSchedules" /></td>
    <td><code>array</code></td>
    <td>Output only. List of backup schedule URIs that are associated with creating this backup. This is only applicable for scheduled backups, and is empty for on-demand backups. To optimize for storage, whenever possible, multiple schedules are collapsed together to create one backup. In such cases, this field captures the list of all backup schedule URIs that are associated with creating this backup. If collapsing is not done, then this field captures the single backup schedule URI associated with creating this backup.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the CreateBackup request is received. If the request does not specify `version_time`, the `version_time` of the backup will be equivalent to the `create_time`.</td>
</tr>
<tr>
    <td><CopyableCode code="database" /></td>
    <td><code>string</code></td>
    <td>Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDialect" /></td>
    <td><code>string</code></td>
    <td>Output only. The database dialect information for the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Encryption information for a Cloud Spanner database or backup. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInformation" /></td>
    <td><code>array</code></td>
    <td>Output only. The encryption information for the backup, whether it is protected by one or more KMS keys. The information includes all Cloud KMS key versions used to encrypt the backup. The `encryption_status` field inside of each `EncryptionInfo` is not populated. At least one of the key versions must be available for the backup to be restored. If a key version is revoked in the middle of a restore, the restore behavior is undefined.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusiveSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. For a backup in an incremental backup chain, this is the storage space needed to keep the data that has changed since the previous backup. For all other backups, this is always the size of the backup. This value may change if backups on the same chain get deleted or expired. This field can be used to calculate the total storage space used by a set of backups. For example, the total space used by all backups of a database can be computed by summing up this field.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="freeableSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of bytes that will be freed by deleting this backup. This value will be zero if, for example, this backup is part of an incremental backup chain and younger backups in the chain require that we keep its data. For backups not in an incremental backup chain, this is always the size of the backup. This value may change if backups on the same chain get created, deleted or expired.</td>
</tr>
<tr>
    <td><CopyableCode code="incrementalBackupChainId" /></td>
    <td><code>string</code></td>
    <td>Output only. Populated only for backups in an incremental backup chain. Backups share the same chain id if and only if they belong to the same incremental backup chain. Use this field to determine which backups are part of the same incremental backup chain. The ordering of backups in the chain can be determined by ordering the backup `version_time`.</td>
</tr>
<tr>
    <td><CopyableCode code="instancePartitions" /></td>
    <td><code>array</code></td>
    <td>Output only. The instance partition(s) storing the backup. This is the same as the list of the instance partition(s) that the database had footprint in at the backup's `version_time`.</td>
</tr>
<tr>
    <td><CopyableCode code="maxExpireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The max allowed expiration time of the backup, with microseconds granularity. A backup's expiration time can be configured in multiple APIs: CreateBackup, UpdateBackup, CopyBackup. When updating or copying an existing backup, the expiration time specified must be less than `Backup.max_expire_time`.</td>
</tr>
<tr>
    <td><CopyableCode code="oldestVersionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Data deleted at a time older than this is guaranteed not to be retained in order to support this backup. For a backup in an incremental backup chain, this is the version time of the oldest backup that exists or ever existed in the chain. For all other backups, this is the version time of the backup. This field can be used to understand what data is being retained by the backup system.</td>
</tr>
<tr>
    <td><CopyableCode code="referencingBackups" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of the destination backups being created by copying this source backup. The backup names are of the form `projects//instances//backups/`. Referencing backups may exist in different instances. The existence of any referencing backup prevents the backup from being deleted. When the copy operation is done (either successfully completed or cancelled or the destination backup is deleted), the reference to the backup is removed.</td>
</tr>
<tr>
    <td><CopyableCode code="referencingDatabases" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of the restored databases that reference the backup. The database names are of the form `projects//instances//databases/`. Referencing databases may exist in different instances. The existence of any referencing database prevents the backup from being deleted. When a restored database from the backup enters the `READY` state, the reference to the backup is removed.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size of the backup in bytes. For a backup in an incremental backup chain, this is the sum of the `exclusive_size_bytes` of itself and all older backups in the chain.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="versionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The backup will contain an externally consistent copy of the database at the timestamp specified by `version_time`. If `version_time` is not specified, the system will set `version_time` to the `create_time` of the backup.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instances_backups_list">

The response for ListBackups.

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
    <td><CopyableCode code="backups" /></td>
    <td><code>array</code></td>
    <td>The list of matching backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>`next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups.</td>
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
    <td><a href="#projects_instances_backups_get"><CopyableCode code="projects_instances_backups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Gets metadata on a pending or completed Backup.</td>
</tr>
<tr>
    <td><a href="#projects_instances_backups_list"><CopyableCode code="projects_instances_backups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.</td>
</tr>
<tr>
    <td><a href="#projects_instances_backups_create"><CopyableCode code="projects_instances_backups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-encryptionConfig.encryptionType"><code>encryptionConfig.encryptionType</code></a>, <a href="#parameter-encryptionConfig.kmsKeyName"><code>encryptionConfig.kmsKeyName</code></a>, <a href="#parameter-encryptionConfig.kmsKeyNames"><code>encryptionConfig.kmsKeyNames</code></a></td>
    <td>Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.</td>
</tr>
<tr>
    <td><a href="#projects_instances_backups_patch"><CopyableCode code="projects_instances_backups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a pending or completed Backup.</td>
</tr>
<tr>
    <td><a href="#projects_instances_backups_delete"><CopyableCode code="projects_instances_backups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Deletes a pending or completed Backup.</td>
</tr>
<tr>
    <td><a href="#projects_instances_backups_copy"><CopyableCode code="projects_instances_backups_copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the destination backup. Concurrent CopyBackup requests can run on the same source backup.</td>
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
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-encryptionConfig.encryptionType">
    <td><CopyableCode code="encryptionConfig.encryptionType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-encryptionConfig.kmsKeyName">
    <td><CopyableCode code="encryptionConfig.kmsKeyName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-encryptionConfig.kmsKeyNames">
    <td><CopyableCode code="encryptionConfig.kmsKeyNames" /></td>
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

## `SELECT` examples

<Tabs
    defaultValue="projects_instances_backups_get"
    values={[
        { label: 'projects_instances_backups_get', value: 'projects_instances_backups_get' },
        { label: 'projects_instances_backups_list', value: 'projects_instances_backups_list' }
    ]}
>
<TabItem value="projects_instances_backups_get">

Gets metadata on a pending or completed Backup.

```sql
SELECT
name,
backupSchedules,
createTime,
database,
databaseDialect,
encryptionInfo,
encryptionInformation,
exclusiveSizeBytes,
expireTime,
freeableSizeBytes,
incrementalBackupChainId,
instancePartitions,
maxExpireTime,
oldestVersionTime,
referencingBackups,
referencingDatabases,
sizeBytes,
state,
versionTime
FROM google.spanner.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND backupsId = '{{ backupsId }}' -- required;
```
</TabItem>
<TabItem value="projects_instances_backups_list">

Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.

```sql
SELECT
backups,
nextPageToken
FROM google.spanner.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instances_backups_create"
    values={[
        { label: 'projects_instances_backups_create', value: 'projects_instances_backups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_backups_create">

Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.

```sql
INSERT INTO google.spanner.backups (
data__database,
data__versionTime,
data__expireTime,
data__name,
projectsId,
instancesId,
backupId,
encryptionConfig.encryptionType,
encryptionConfig.kmsKeyName,
encryptionConfig.kmsKeyNames
)
SELECT 
'{{ database }}',
'{{ versionTime }}',
'{{ expireTime }}',
'{{ name }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ backupId }}',
'{{ encryptionConfig.encryptionType }}',
'{{ encryptionConfig.kmsKeyName }}',
'{{ encryptionConfig.kmsKeyNames }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: backups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backups resource.
    - name: instancesId
      value: string
      description: Required parameter for the backups resource.
    - name: database
      value: string
      description: >
        Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`.
        
    - name: versionTime
      value: string
      description: >
        The backup will contain an externally consistent copy of the database at the timestamp specified by `version_time`. If `version_time` is not specified, the system will set `version_time` to the `create_time` of the backup.
        
    - name: expireTime
      value: string
      description: >
        Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.
        
    - name: name
      value: string
      description: >
        Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`.
        
    - name: backupId
      value: string
    - name: encryptionConfig.encryptionType
      value: string
    - name: encryptionConfig.kmsKeyName
      value: string
    - name: encryptionConfig.kmsKeyNames
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_instances_backups_patch"
    values={[
        { label: 'projects_instances_backups_patch', value: 'projects_instances_backups_patch' }
    ]}
>
<TabItem value="projects_instances_backups_patch">

Updates a pending or completed Backup.

```sql
UPDATE google.spanner.backups
SET 
data__database = '{{ database }}',
data__versionTime = '{{ versionTime }}',
data__expireTime = '{{ expireTime }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
backupSchedules,
createTime,
database,
databaseDialect,
encryptionInfo,
encryptionInformation,
exclusiveSizeBytes,
expireTime,
freeableSizeBytes,
incrementalBackupChainId,
instancePartitions,
maxExpireTime,
oldestVersionTime,
referencingBackups,
referencingDatabases,
sizeBytes,
state,
versionTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_instances_backups_delete"
    values={[
        { label: 'projects_instances_backups_delete', value: 'projects_instances_backups_delete' }
    ]}
>
<TabItem value="projects_instances_backups_delete">

Deletes a pending or completed Backup.

```sql
DELETE FROM google.spanner.backups
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND backupsId = '{{ backupsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_instances_backups_copy"
    values={[
        { label: 'projects_instances_backups_copy', value: 'projects_instances_backups_copy' }
    ]}
>
<TabItem value="projects_instances_backups_copy">

Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the destination backup. Concurrent CopyBackup requests can run on the same source backup.

```sql
EXEC google.spanner.backups.projects_instances_backups_copy 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"backupId": "{{ backupId }}", 
"sourceBackup": "{{ sourceBackup }}", 
"expireTime": "{{ expireTime }}", 
"encryptionConfig": "{{ encryptionConfig }}"
}';
```
</TabItem>
</Tabs>
