--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - backupdr
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.backups" /></td></tr>
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
    <td>Output only. Identifier. Name of the backup to create. It must have the format`"projects//locations//backupVaults//dataSources/&#123;datasource&#125;/backups/&#123;backup&#125;"`. `&#123;backup&#125;` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the datasource.</td>
</tr>
<tr>
    <td><CopyableCode code="backupApplianceBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Backup Appliance specific backup properties. (id: BackupApplianceBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="backupApplianceLocks" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of BackupLocks taken by the accessor Backup Appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="backupType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the backup, unspecified, scheduled or ondemand.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSqlInstanceBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Cloud SQL specific backup properties. (id: CloudSqlInstanceBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="computeInstanceBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Compute Engine specific backup properties. (id: ComputeInstanceBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="consistencyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The point in time when this backup was captured from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description of the Backup instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="diskBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Disk specific backup properties. (id: DiskBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="enforcedRetentionEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The backup can not be deleted before this time.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Server specified ETag to prevent updates from overwriting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. When this backup is automatically expired.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpBackupPlanInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Configuration for a Google Cloud resource. (id: GCPBackupPlanInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user provided metadata. No labels currently defined.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. source resource size in bytes at the time of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLocks" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of BackupLocks taken by the service to prevent the deletion of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The Backup resource instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
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
    <td>Output only. Identifier. Name of the backup to create. It must have the format`"projects//locations//backupVaults//dataSources/&#123;datasource&#125;/backups/&#123;backup&#125;"`. `&#123;backup&#125;` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the datasource.</td>
</tr>
<tr>
    <td><CopyableCode code="backupApplianceBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Backup Appliance specific backup properties. (id: BackupApplianceBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="backupApplianceLocks" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of BackupLocks taken by the accessor Backup Appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="backupType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the backup, unspecified, scheduled or ondemand.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSqlInstanceBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Cloud SQL specific backup properties. (id: CloudSqlInstanceBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="computeInstanceBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Compute Engine specific backup properties. (id: ComputeInstanceBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="consistencyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The point in time when this backup was captured from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description of the Backup instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="diskBackupProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Disk specific backup properties. (id: DiskBackupProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="enforcedRetentionEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The backup can not be deleted before this time.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Server specified ETag to prevent updates from overwriting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. When this backup is automatically expired.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpBackupPlanInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Configuration for a Google Cloud resource. (id: GCPBackupPlanInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user provided metadata. No labels currently defined.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. source resource size in bytes at the time of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLocks" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of BackupLocks taken by the service to prevent the deletion of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The Backup resource instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a Backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists Backups in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the settings of a Backup.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a Backup.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Restore from a Backup</td>
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
<tr id="parameter-backupVaultsId">
    <td><CopyableCode code="backupVaultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-backupsId">
    <td><CopyableCode code="backupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataSourcesId">
    <td><CopyableCode code="dataSourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
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

Gets details of a Backup.

```sql
SELECT
name,
backupApplianceBackupProperties,
backupApplianceLocks,
backupType,
cloudSqlInstanceBackupProperties,
computeInstanceBackupProperties,
consistencyTime,
createTime,
description,
diskBackupProperties,
enforcedRetentionEndTime,
etag,
expireTime,
gcpBackupPlanInfo,
labels,
resourceSizeBytes,
satisfiesPzi,
satisfiesPzs,
serviceLocks,
state,
updateTime
FROM google.backupdr.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required
AND dataSourcesId = '{{ dataSourcesId }}' -- required
AND backupsId = '{{ backupsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists Backups in a given project and location.

```sql
SELECT
name,
backupApplianceBackupProperties,
backupApplianceLocks,
backupType,
cloudSqlInstanceBackupProperties,
computeInstanceBackupProperties,
consistencyTime,
createTime,
description,
diskBackupProperties,
enforcedRetentionEndTime,
etag,
expireTime,
gcpBackupPlanInfo,
labels,
resourceSizeBytes,
satisfiesPzi,
satisfiesPzs,
serviceLocks,
state,
updateTime
FROM google.backupdr.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required
AND dataSourcesId = '{{ dataSourcesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
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

Updates the settings of a Backup.

```sql
UPDATE google.backupdr.backups
SET 
data__labels = '{{ labels }}',
data__enforcedRetentionEndTime = '{{ enforcedRetentionEndTime }}',
data__expireTime = '{{ expireTime }}',
data__etag = '{{ etag }}',
data__backupApplianceLocks = '{{ backupApplianceLocks }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
AND dataSourcesId = '{{ dataSourcesId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a Backup.

```sql
DELETE FROM google.backupdr.backups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
AND dataSourcesId = '{{ dataSourcesId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="restore">

Restore from a Backup

```sql
EXEC google.backupdr.backups.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupVaultsId='{{ backupVaultsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required, 
@backupsId='{{ backupsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"computeInstanceTargetEnvironment": "{{ computeInstanceTargetEnvironment }}", 
"diskTargetEnvironment": "{{ diskTargetEnvironment }}", 
"regionDiskTargetEnvironment": "{{ regionDiskTargetEnvironment }}", 
"computeInstanceRestoreProperties": "{{ computeInstanceRestoreProperties }}", 
"diskRestoreProperties": "{{ diskRestoreProperties }}"
}';
```
</TabItem>
</Tabs>
