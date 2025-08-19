--- 
title: migrating_vms
hide_title: false
hide_table_of_contents: false
keywords:
  - migrating_vms
  - vmmigration
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

Creates, updates, deletes, gets or lists a <code>migrating_vms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>migrating_vms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.migrating_vms" /></td></tr>
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

MigratingVm describes the VM that will be migrated from a Source environment and its replication state.

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
    <td>Output only. The identifier of the MigratingVm.</td>
</tr>
<tr>
    <td><CopyableCode code="awsSourceVmDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the VM from an AWS source. (id: AwsSourceVmDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="azureSourceVmDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the VM from an Azure source. (id: AzureSourceVmDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="computeEngineDisksTargetDefaults" /></td>
    <td><code>object</code></td>
    <td>Details of the target Persistent Disks in Compute Engine. (id: ComputeEngineDisksTargetDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="computeEngineTargetDefaults" /></td>
    <td><code>object</code></td>
    <td>Details of the target VM in Compute Engine. (id: ComputeEngineTargetDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source).</td>
</tr>
<tr>
    <td><CopyableCode code="currentSyncInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the current running replication cycle. (id: ReplicationCycle)</td>
</tr>
<tr>
    <td><CopyableCode code="cutoverForecast" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details of future CutoverJobs of a MigratingVm. Set to empty when cutover forecast is unavailable. (id: CutoverForecast)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description attached to the migrating VM by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name attached to the MigratingVm by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the Migrating VM in case of an error in replication. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details about the expiration state of the migrating VM. (id: Expiration)</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels of the migrating VM.</td>
</tr>
<tr>
    <td><CopyableCode code="lastReplicationCycle" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the last replication cycle. This will be updated whenever a replication cycle is finished and is not to be confused with last_sync which is only updated on successful replication cycles. (id: ReplicationCycle)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSync" /></td>
    <td><code>object</code></td>
    <td>Output only. The most updated snapshot created time in the source that finished replication. (id: ReplicationSync)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The replication schedule policy. (id: SchedulePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="recentCloneJobs" /></td>
    <td><code>array</code></td>
    <td>Output only. The recent clone jobs performed on the migrating VM. This field holds the vm's last completed clone job and the vm's running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.</td>
</tr>
<tr>
    <td><CopyableCode code="recentCutoverJobs" /></td>
    <td><code>array</code></td>
    <td>Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm's last completed cutover job and the vm's running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceVmId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the MigratingVm.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the migrating VM state was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the migrating VM resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vmwareSourceVmDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the VM from a Vmware source. (id: VmwareSourceVmDetails)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for 'ListMigratingVms' request.

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
    <td><CopyableCode code="migratingVms" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of Migrating VMs response.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Output only. Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single MigratingVm.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists MigratingVms in a given Source.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-migratingVmId"><code>migratingVmId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new MigratingVm in a given Source.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single MigratingVm.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td></td>
    <td>Deletes a single MigratingVm.</td>
</tr>
<tr>
    <td><a href="#start_migration"><CopyableCode code="start_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td></td>
    <td>Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.</td>
</tr>
<tr>
    <td><a href="#resume_migration"><CopyableCode code="resume_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td></td>
    <td>Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.</td>
</tr>
<tr>
    <td><a href="#pause_migration"><CopyableCode code="pause_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td></td>
    <td>Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.</td>
</tr>
<tr>
    <td><a href="#finalize_migration"><CopyableCode code="finalize_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td></td>
    <td>Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.</td>
</tr>
<tr>
    <td><a href="#extend_migration"><CopyableCode code="extend_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td></td>
    <td>Extend the migrating VM time to live.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-migratingVmsId">
    <td><CopyableCode code="migratingVmsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-migratingVmId">
    <td><CopyableCode code="migratingVmId" /></td>
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

Gets details of a single MigratingVm.

```sql
SELECT
name,
awsSourceVmDetails,
azureSourceVmDetails,
computeEngineDisksTargetDefaults,
computeEngineTargetDefaults,
createTime,
currentSyncInfo,
cutoverForecast,
description,
displayName,
error,
expiration,
group,
labels,
lastReplicationCycle,
lastSync,
policy,
recentCloneJobs,
recentCutoverJobs,
sourceVmId,
state,
stateTime,
updateTime,
vmwareSourceVmDetails
FROM google.vmmigration.migrating_vms
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND migratingVmsId = '{{ migratingVmsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists MigratingVms in a given Source.

```sql
SELECT
migratingVms,
nextPageToken,
unreachable
FROM google.vmmigration.migrating_vms
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
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

Creates a new MigratingVm in a given Source.

```sql
INSERT INTO google.vmmigration.migrating_vms (
data__computeEngineTargetDefaults,
data__computeEngineDisksTargetDefaults,
data__sourceVmId,
data__displayName,
data__description,
data__policy,
data__labels,
projectsId,
locationsId,
sourcesId,
migratingVmId,
requestId
)
SELECT 
'{{ computeEngineTargetDefaults }}',
'{{ computeEngineDisksTargetDefaults }}',
'{{ sourceVmId }}',
'{{ displayName }}',
'{{ description }}',
'{{ policy }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sourcesId }}',
'{{ migratingVmId }}',
'{{ requestId }}'
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
- name: migrating_vms
  props:
    - name: projectsId
      value: string
      description: Required parameter for the migrating_vms resource.
    - name: locationsId
      value: string
      description: Required parameter for the migrating_vms resource.
    - name: sourcesId
      value: string
      description: Required parameter for the migrating_vms resource.
    - name: computeEngineTargetDefaults
      value: object
      description: >
        Details of the target VM in Compute Engine.
        
    - name: computeEngineDisksTargetDefaults
      value: object
      description: >
        Details of the target Persistent Disks in Compute Engine.
        
    - name: sourceVmId
      value: string
      description: >
        The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.
        
    - name: displayName
      value: string
      description: >
        The display name attached to the MigratingVm by the user.
        
    - name: description
      value: string
      description: >
        The description attached to the migrating VM by the user.
        
    - name: policy
      value: object
      description: >
        The replication schedule policy.
        
    - name: labels
      value: object
      description: >
        The labels of the migrating VM.
        
    - name: migratingVmId
      value: string
    - name: requestId
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

Updates the parameters of a single MigratingVm.

```sql
UPDATE google.vmmigration.migrating_vms
SET 
data__computeEngineTargetDefaults = '{{ computeEngineTargetDefaults }}',
data__computeEngineDisksTargetDefaults = '{{ computeEngineDisksTargetDefaults }}',
data__sourceVmId = '{{ sourceVmId }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__policy = '{{ policy }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND migratingVmsId = '{{ migratingVmsId }}' --required
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

Deletes a single MigratingVm.

```sql
DELETE FROM google.vmmigration.migrating_vms
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND migratingVmsId = '{{ migratingVmsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_migration"
    values={[
        { label: 'start_migration', value: 'start_migration' },
        { label: 'resume_migration', value: 'resume_migration' },
        { label: 'pause_migration', value: 'pause_migration' },
        { label: 'finalize_migration', value: 'finalize_migration' },
        { label: 'extend_migration', value: 'extend_migration' }
    ]}
>
<TabItem value="start_migration">

Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.

```sql
EXEC google.vmmigration.migrating_vms.start_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@migratingVmsId='{{ migratingVmsId }}' --required;
```
</TabItem>
<TabItem value="resume_migration">

Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.

```sql
EXEC google.vmmigration.migrating_vms.resume_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@migratingVmsId='{{ migratingVmsId }}' --required;
```
</TabItem>
<TabItem value="pause_migration">

Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.

```sql
EXEC google.vmmigration.migrating_vms.pause_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@migratingVmsId='{{ migratingVmsId }}' --required;
```
</TabItem>
<TabItem value="finalize_migration">

Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.

```sql
EXEC google.vmmigration.migrating_vms.finalize_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@migratingVmsId='{{ migratingVmsId }}' --required;
```
</TabItem>
<TabItem value="extend_migration">

Extend the migrating VM time to live.

```sql
EXEC google.vmmigration.migrating_vms.extend_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@migratingVmsId='{{ migratingVmsId }}' --required;
```
</TabItem>
</Tabs>
