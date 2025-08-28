--- 
title: backup_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plans
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

Creates, updates, deletes, gets or lists a <code>backup_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.backup_plans" /></td></tr>
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
    <td>Output only. The full name of the BackupPlan resource. Format: `projects/*/locations/*/backupPlans/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupChannel" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully qualified name of the BackupChannel to be used to create a backup. This field is set only if the cluster being backed up is in a different project. `projects/*/locations/*/backupChannels/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines the configuration of Backups created via this BackupPlan. (id: BackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="backupSchedule" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines a schedule for automatic Backup creation via this BackupPlan. (id: Schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this BackupPlan resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deactivated" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this BackupPlan.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup plan from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlan`, and systems are expected to put that etag in the request to `UpdateBackupPlan` or `DeleteBackupPlan` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulBackupTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Completion time of the last successful Backup. This is sourced from a successful Backup's complete_time field. This field is added to maintain consistency with BackupPlanBinding to display last successful backup time.</td>
</tr>
<tr>
    <td><CopyableCode code="protectedPodCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. RetentionPolicy governs lifecycle of Backups created under this plan. (id: RetentionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="rpoRiskLevel" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. A number that represents the current risk level of this BackupPlan from RPO perspective with 1 being no risk and 5 being highest risk.</td>
</tr>
<tr>
    <td><CopyableCode code="rpoRiskReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why the BackupPlan is in the current rpo_risk_level and action items if any.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the BackupPlan. This State field reflects the various stages a BackupPlan can be in during the Create operation. It will be set to "DEACTIVATED" if the BackupPlan is deactivated on an Update</td>
</tr>
<tr>
    <td><CopyableCode code="stateReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why BackupPlan is in the current `state`. This field is only meant for human readability and should not be used programmatically as this field is not guaranteed to be consistent.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this BackupPlan resource was last updated.</td>
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
    <td>Output only. The full name of the BackupPlan resource. Format: `projects/*/locations/*/backupPlans/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupChannel" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully qualified name of the BackupChannel to be used to create a backup. This field is set only if the cluster being backed up is in a different project. `projects/*/locations/*/backupChannels/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines the configuration of Backups created via this BackupPlan. (id: BackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="backupSchedule" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines a schedule for automatic Backup creation via this BackupPlan. (id: Schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this BackupPlan resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deactivated" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this BackupPlan.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup plan from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlan`, and systems are expected to put that etag in the request to `UpdateBackupPlan` or `DeleteBackupPlan` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulBackupTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Completion time of the last successful Backup. This is sourced from a successful Backup's complete_time field. This field is added to maintain consistency with BackupPlanBinding to display last successful backup time.</td>
</tr>
<tr>
    <td><CopyableCode code="protectedPodCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. RetentionPolicy governs lifecycle of Backups created under this plan. (id: RetentionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="rpoRiskLevel" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. A number that represents the current risk level of this BackupPlan from RPO perspective with 1 being no risk and 5 being highest risk.</td>
</tr>
<tr>
    <td><CopyableCode code="rpoRiskReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why the BackupPlan is in the current rpo_risk_level and action items if any.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the BackupPlan. This State field reflects the various stages a BackupPlan can be in during the Create operation. It will be set to "DEACTIVATED" if the BackupPlan is deactivated on an Update</td>
</tr>
<tr>
    <td><CopyableCode code="stateReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why BackupPlan is in the current `state`. This field is only meant for human readability and should not be used programmatically as this field is not guaranteed to be consistent.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this BackupPlan resource was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single BackupPlan.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists BackupPlans in a given location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupPlanId"><code>backupPlanId</code></a></td>
    <td>Creates a new BackupPlan in a given location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a BackupPlan.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an existing BackupPlan.</td>
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
<tr id="parameter-backupPlanId">
    <td><CopyableCode code="backupPlanId" /></td>
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

Retrieve the details of a single BackupPlan.

```sql
SELECT
name,
backupChannel,
backupConfig,
backupSchedule,
cluster,
createTime,
deactivated,
description,
etag,
labels,
lastSuccessfulBackupTime,
protectedPodCount,
retentionPolicy,
rpoRiskLevel,
rpoRiskReason,
state,
stateReason,
uid,
updateTime
FROM google.gkebackup.backup_plans
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupPlansId = '{{ backupPlansId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists BackupPlans in a given location.

```sql
SELECT
name,
backupChannel,
backupConfig,
backupSchedule,
cluster,
createTime,
deactivated,
description,
etag,
labels,
lastSuccessfulBackupTime,
protectedPodCount,
retentionPolicy,
rpoRiskLevel,
rpoRiskReason,
state,
stateReason,
uid,
updateTime
FROM google.gkebackup.backup_plans
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new BackupPlan in a given location.

```sql
INSERT INTO google.gkebackup.backup_plans (
data__description,
data__cluster,
data__retentionPolicy,
data__labels,
data__backupSchedule,
data__deactivated,
data__backupConfig,
projectsId,
locationsId,
backupPlanId
)
SELECT 
'{{ description }}',
'{{ cluster }}',
'{{ retentionPolicy }}',
'{{ labels }}',
'{{ backupSchedule }}',
{{ deactivated }},
'{{ backupConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupPlanId }}'
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
- name: backup_plans
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backup_plans resource.
    - name: locationsId
      value: string
      description: Required parameter for the backup_plans resource.
    - name: description
      value: string
      description: >
        Optional. User specified descriptive string for this BackupPlan.
        
    - name: cluster
      value: string
      description: >
        Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`
        
    - name: retentionPolicy
      value: object
      description: >
        Optional. RetentionPolicy governs lifecycle of Backups created under this plan.
        
    - name: labels
      value: object
      description: >
        Optional. A set of custom labels supplied by user.
        
    - name: backupSchedule
      value: object
      description: >
        Optional. Defines a schedule for automatic Backup creation via this BackupPlan.
        
    - name: deactivated
      value: boolean
      description: >
        Optional. This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False
        
    - name: backupConfig
      value: object
      description: >
        Optional. Defines the configuration of Backups created via this BackupPlan.
        
    - name: backupPlanId
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

Update a BackupPlan.

```sql
UPDATE google.gkebackup.backup_plans
SET 
data__description = '{{ description }}',
data__cluster = '{{ cluster }}',
data__retentionPolicy = '{{ retentionPolicy }}',
data__labels = '{{ labels }}',
data__backupSchedule = '{{ backupSchedule }}',
data__deactivated = {{ deactivated }},
data__backupConfig = '{{ backupConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlansId = '{{ backupPlansId }}' --required
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

Deletes an existing BackupPlan.

```sql
DELETE FROM google.gkebackup.backup_plans
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlansId = '{{ backupPlansId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
