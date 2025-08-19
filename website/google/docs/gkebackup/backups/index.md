--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - gkebackup
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.backups" /></td></tr>
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

Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups).

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
    <td>Output only. The fully qualified name of the Backup. `projects/*/locations/*/backupPlans/*/backups/*`</td>
</tr>
<tr>
    <td><CopyableCode code="allNamespaces" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If True, all namespaces were included in the Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the GKE cluster from which this Backup was created. (id: ClusterMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Completion time of the Backup</td>
</tr>
<tr>
    <td><CopyableCode code="configBackupSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of the config backup in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="containsSecrets" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not the Backup contains Kubernetes Secrets. Controlled by the parent BackupPlan's include_secrets value.</td>
</tr>
<tr>
    <td><CopyableCode code="containsVolumeData" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not the Backup contains volume data. Controlled by the parent BackupPlan's include_volume_data value.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this Backup resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteLockDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update).</td>
</tr>
<tr>
    <td><CopyableCode code="deleteLockExpireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which an existing delete lock will expire for this backup (calculated from create_time + delete_lock_days).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>object</code></td>
    <td>Output only. The customer managed encryption key that was used to encrypt the Backup's artifacts. Inherited from the parent BackupPlan's encryption_key value. (id: EncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform backup updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackup`, and systems are expected to put that etag in the request to `UpdateBackup` or `DeleteBackup` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="manual" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This flag indicates whether this Backup resource was created manually by a user or via a schedule in the BackupPlan. A value of True means that the Backup was created manually.</td>
</tr>
<tr>
    <td><CopyableCode code="permissiveMode" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If false, Backup will fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore. Inherited from the parent BackupPlan's permissive_mode value.</td>
</tr>
<tr>
    <td><CopyableCode code="podCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of Kubernetes Pods contained in the Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of Kubernetes resources included in the Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="retainDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The age (in days) after which this Backup will be automatically deleted. Must be an integer value &gt;= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be &gt;= delete_lock_days and &lt;= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value.</td>
</tr>
<tr>
    <td><CopyableCode code="retainExpireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Backup will be automatically deleted (calculated from create_time + retain_days).</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selectedApplications" /></td>
    <td><code>object</code></td>
    <td>Output only. If set, the list of ProtectedApplications whose resources were included in the Backup. (id: NamespacedNames)</td>
</tr>
<tr>
    <td><CopyableCode code="selectedNamespaceLabels" /></td>
    <td><code>object</code></td>
    <td>Output only. If set, the list of labels whose constituent namespaces were included in the Backup. (id: ResourceLabels)</td>
</tr>
<tr>
    <td><CopyableCode code="selectedNamespaces" /></td>
    <td><code>object</code></td>
    <td>Output only. If set, the list of namespaces that were included in the Backup. (id: Namespaces)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The total size of the Backup in bytes = config backup size + sum(volume backup sizes)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the Backup</td>
</tr>
<tr>
    <td><CopyableCode code="stateReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why the backup is in the current `state`. This field is only meant for human readability and should not be used programmatically as this field is not guaranteed to be consistent.</td>
</tr>
<tr>
    <td><CopyableCode code="troubleshootingInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the troubleshooting steps which will provide debugging information to the end users. (id: TroubleshootingInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this Backup resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of volume backups contained in the Backup.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListBackups.

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
    <td>The list of Backups matching the given criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token which may be sent as page_token in a subsequent `ListBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single Backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists the Backups for a given BackupPlan.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a></td>
    <td>Creates a Backup for the given BackupPlan.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a Backup.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an existing Backup.</td>
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
<tr id="parameter-backupPlansId">
    <td><CopyableCode code="backupPlansId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-backupsId">
    <td><CopyableCode code="backupsId" /></td>
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
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Retrieve the details of a single Backup.

```sql
SELECT
name,
allNamespaces,
clusterMetadata,
completeTime,
configBackupSizeBytes,
containsSecrets,
containsVolumeData,
createTime,
deleteLockDays,
deleteLockExpireTime,
description,
encryptionKey,
etag,
labels,
manual,
permissiveMode,
podCount,
resourceCount,
retainDays,
retainExpireTime,
satisfiesPzi,
satisfiesPzs,
selectedApplications,
selectedNamespaceLabels,
selectedNamespaces,
sizeBytes,
state,
stateReason,
troubleshootingInfo,
uid,
updateTime,
volumeCount
FROM google.gkebackup.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupPlansId = '{{ backupPlansId }}' -- required
AND backupsId = '{{ backupsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Backups for a given BackupPlan.

```sql
SELECT
backups,
nextPageToken,
unreachable
FROM google.gkebackup.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupPlansId = '{{ backupPlansId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
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

Creates a Backup for the given BackupPlan.

```sql
INSERT INTO google.gkebackup.backups (
data__labels,
data__deleteLockDays,
data__retainDays,
data__description,
projectsId,
locationsId,
backupPlansId,
backupId
)
SELECT 
'{{ labels }}',
{{ deleteLockDays }},
{{ retainDays }},
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupPlansId }}',
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
    - name: locationsId
      value: string
      description: Required parameter for the backups resource.
    - name: backupPlansId
      value: string
      description: Required parameter for the backups resource.
    - name: labels
      value: object
      description: >
        Optional. A set of custom labels supplied by user.
        
    - name: deleteLockDays
      value: integer
      description: >
        Optional. Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update).
        
    - name: retainDays
      value: integer
      description: >
        Optional. The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value.
        
    - name: description
      value: string
      description: >
        Optional. User specified descriptive string for this Backup.
        
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

Update a Backup.

```sql
UPDATE google.gkebackup.backups
SET 
data__labels = '{{ labels }}',
data__deleteLockDays = {{ deleteLockDays }},
data__retainDays = {{ retainDays }},
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlansId = '{{ backupPlansId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes an existing Backup.

```sql
DELETE FROM google.gkebackup.backups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlansId = '{{ backupPlansId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
