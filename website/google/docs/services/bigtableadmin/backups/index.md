--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - bigtableadmin
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.backups" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/&#123;cluster&#125;/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/&#123;cluster&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupType" /></td>
    <td><code>string</code></td>
    <td>Indicates the backup type of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. The expiration time of the backup. When creating a backup or updating its `expire_time`, the value must be greater than the backup creation time by: - At least 6 hours - At most 90 days Once the `expire_time` has passed, Cloud Bigtable will delete the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="hotToStandardTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the hot backup will be converted to a standard backup. Once the `hot_to_standard_time` has passed, Cloud Bigtable will convert the hot backup to a standard backup. This value must be greater than the backup creation time by: - At least 24 hours This field only applies for hot backups. When creating or updating a standard backup, attempting to set this field will fail the request.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size of the backup in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceBackup" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//clusters//backups/</td>
</tr>
<tr>
    <td><CopyableCode code="sourceTable" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/tables/&#123;source_table&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the backup.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/&#123;cluster&#125;/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/&#123;cluster&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupType" /></td>
    <td><code>string</code></td>
    <td>Indicates the backup type of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. The expiration time of the backup. When creating a backup or updating its `expire_time`, the value must be greater than the backup creation time by: - At least 6 hours - At most 90 days Once the `expire_time` has passed, Cloud Bigtable will delete the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="hotToStandardTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the hot backup will be converted to a standard backup. Once the `hot_to_standard_time` has passed, Cloud Bigtable will convert the hot backup to a standard backup. This value must be greater than the backup creation time by: - At least 24 hours This field only applies for hot backups. When creating or updating a standard backup, attempting to set this field will fail the request.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size of the backup in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceBackup" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//clusters//backups/</td>
</tr>
<tr>
    <td><CopyableCode code="sourceTable" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/tables/&#123;source_table&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the backup.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Gets metadata on a pending or completed Cloud Bigtable Backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Cloud Bigtable backups. Returns both completed and pending backups.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a></td>
    <td>Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a pending or completed Cloud Bigtable Backup.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Deletes a pending or completed Cloud Bigtable backup.</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets metadata on a pending or completed Cloud Bigtable Backup.

```sql
SELECT
name,
backupType,
encryptionInfo,
endTime,
expireTime,
hotToStandardTime,
sizeBytes,
sourceBackup,
sourceTable,
startTime,
state
FROM google.bigtableadmin.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND backupsId = '{{ backupsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Cloud Bigtable backups. Returns both completed and pending backups.

```sql
SELECT
name,
backupType,
encryptionInfo,
endTime,
expireTime,
hotToStandardTime,
sizeBytes,
sourceBackup,
sourceTable,
startTime,
state
FROM google.bigtableadmin.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.

```sql
INSERT INTO google.bigtableadmin.backups (
data__name,
data__sourceTable,
data__expireTime,
data__backupType,
data__hotToStandardTime,
projectsId,
instancesId,
clustersId,
backupId
)
SELECT 
'{{ name }}',
'{{ sourceTable }}',
'{{ expireTime }}',
'{{ backupType }}',
'{{ hotToStandardTime }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ clustersId }}',
'{{ backupId }}'
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
    - name: clustersId
      value: string
      description: Required parameter for the backups resource.
    - name: name
      value: string
      description: >
        A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
        
    - name: sourceTable
      value: string
      description: >
        Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`.
        
    - name: expireTime
      value: string
      description: >
        Required. The expiration time of the backup. When creating a backup or updating its `expire_time`, the value must be greater than the backup creation time by: - At least 6 hours - At most 90 days Once the `expire_time` has passed, Cloud Bigtable will delete the backup.
        
    - name: backupType
      value: string
      description: >
        Indicates the backup type of the backup.
        
      valid_values: ['BACKUP_TYPE_UNSPECIFIED', 'STANDARD', 'HOT']
    - name: hotToStandardTime
      value: string
      description: >
        The time at which the hot backup will be converted to a standard backup. Once the `hot_to_standard_time` has passed, Cloud Bigtable will convert the hot backup to a standard backup. This value must be greater than the backup creation time by: - At least 24 hours This field only applies for hot backups. When creating or updating a standard backup, attempting to set this field will fail the request.
        
    - name: backupId
      value: string
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

Updates a pending or completed Cloud Bigtable Backup.

```sql
UPDATE google.bigtableadmin.backups
SET 
data__name = '{{ name }}',
data__sourceTable = '{{ sourceTable }}',
data__expireTime = '{{ expireTime }}',
data__backupType = '{{ backupType }}',
data__hotToStandardTime = '{{ hotToStandardTime }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
backupType,
encryptionInfo,
endTime,
expireTime,
hotToStandardTime,
sizeBytes,
sourceBackup,
sourceTable,
startTime,
state;
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

Deletes a pending or completed Cloud Bigtable backup.

```sql
DELETE FROM google.bigtableadmin.backups
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND backupsId = '{{ backupsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy"
    values={[
        { label: 'copy', value: 'copy' }
    ]}
>
<TabItem value="copy">

Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.

```sql
EXEC google.bigtableadmin.backups.copy 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"backupId": "{{ backupId }}", 
"sourceBackup": "{{ sourceBackup }}", 
"expireTime": "{{ expireTime }}"
}';
```
</TabItem>
</Tabs>
