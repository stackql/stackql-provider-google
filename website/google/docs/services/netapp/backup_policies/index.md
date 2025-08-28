--- 
title: backup_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_policies
  - netapp
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

Creates, updates, deletes, gets or lists a <code>backup_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.backup_policies" /></td></tr>
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
    <td>Identifier. The resource name of the backup policy. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupPolicies/&#123;backup_policy_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="assignedVolumeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of volumes assigned by this backup policy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the backup policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dailyBackupLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of daily backups to keep. Note that the minimum daily backup limit is 2.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the backup policy.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this policy attached and enforced on volume level. If not specified, default is true.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="monthlyBackupLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup policy state.</td>
</tr>
<tr>
    <td><CopyableCode code="weeklyBackupLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.</td>
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
    <td>Identifier. The resource name of the backup policy. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupPolicies/&#123;backup_policy_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="assignedVolumeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of volumes assigned by this backup policy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the backup policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dailyBackupLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of daily backups to keep. Note that the minimum daily backup limit is 2.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the backup policy.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this policy attached and enforced on volume level. If not specified, default is true.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="monthlyBackupLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup policy state.</td>
</tr>
<tr>
    <td><CopyableCode code="weeklyBackupLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPoliciesId"><code>backupPoliciesId</code></a></td>
    <td></td>
    <td>Returns the description of the specified backup policy by backup_policy_id.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns list of all available backup policies.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupPolicyId"><code>backupPolicyId</code></a></td>
    <td>Creates new backup policy</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPoliciesId"><code>backupPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates settings of a specific backup policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPoliciesId"><code>backupPoliciesId</code></a></td>
    <td></td>
    <td>Warning! This operation will permanently delete the backup policy.</td>
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
<tr id="parameter-backupPoliciesId">
    <td><CopyableCode code="backupPoliciesId" /></td>
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
<tr id="parameter-backupPolicyId">
    <td><CopyableCode code="backupPolicyId" /></td>
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

Returns the description of the specified backup policy by backup_policy_id.

```sql
SELECT
name,
assignedVolumeCount,
createTime,
dailyBackupLimit,
description,
enabled,
labels,
monthlyBackupLimit,
state,
weeklyBackupLimit
FROM google.netapp.backup_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupPoliciesId = '{{ backupPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns list of all available backup policies.

```sql
SELECT
name,
assignedVolumeCount,
createTime,
dailyBackupLimit,
description,
enabled,
labels,
monthlyBackupLimit,
state,
weeklyBackupLimit
FROM google.netapp.backup_policies
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

Creates new backup policy

```sql
INSERT INTO google.netapp.backup_policies (
data__name,
data__dailyBackupLimit,
data__weeklyBackupLimit,
data__monthlyBackupLimit,
data__description,
data__enabled,
data__labels,
projectsId,
locationsId,
backupPolicyId
)
SELECT 
'{{ name }}',
{{ dailyBackupLimit }},
{{ weeklyBackupLimit }},
{{ monthlyBackupLimit }},
'{{ description }}',
{{ enabled }},
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupPolicyId }}'
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
- name: backup_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backup_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the backup_policies resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the backup policy. Format: `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`.
        
    - name: dailyBackupLimit
      value: integer
      description: >
        Number of daily backups to keep. Note that the minimum daily backup limit is 2.
        
    - name: weeklyBackupLimit
      value: integer
      description: >
        Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
        
    - name: monthlyBackupLimit
      value: integer
      description: >
        Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
        
    - name: description
      value: string
      description: >
        Description of the backup policy.
        
    - name: enabled
      value: boolean
      description: >
        If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this policy attached and enforced on volume level. If not specified, default is true.
        
    - name: labels
      value: object
      description: >
        Resource labels to represent user provided metadata.
        
    - name: backupPolicyId
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

Updates settings of a specific backup policy.

```sql
UPDATE google.netapp.backup_policies
SET 
data__name = '{{ name }}',
data__dailyBackupLimit = {{ dailyBackupLimit }},
data__weeklyBackupLimit = {{ weeklyBackupLimit }},
data__monthlyBackupLimit = {{ monthlyBackupLimit }},
data__description = '{{ description }}',
data__enabled = {{ enabled }},
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPoliciesId = '{{ backupPoliciesId }}' --required
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

Warning! This operation will permanently delete the backup policy.

```sql
DELETE FROM google.netapp.backup_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPoliciesId = '{{ backupPoliciesId }}' --required;
```
</TabItem>
</Tabs>
