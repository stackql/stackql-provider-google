--- 
title: backup_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plans
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

Creates, updates, deletes, gets or lists a <code>backup_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.backup_plans" /></td></tr>
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

A `BackupPlan` specifies some common fields, such as `description` as well as one or more `BackupRule` messages. Each `BackupRule` has a retention policy and defines a schedule by which the system is to perform backup workloads.

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
    <td>Output only. Identifier. The resource name of the `BackupPlan`. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/backupPlans/&#123;backup_plan&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="backupRules" /></td>
    <td><code>array</code></td>
    <td>Optional. The backup rules for this `BackupPlan`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupVault" /></td>
    <td><code>string</code></td>
    <td>Required. Resource name of backup vault which will be used as storage location for backups. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/backupVaults/&#123;backupvault&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupVaultServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google Cloud Platform Service Account to be used by the BackupVault for taking backups. Specify the email address of the Backup Vault Service Account.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the `BackupPlan` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the `BackupPlan` resource. The description allows for additional details about `BackupPlan` and its use cases to be provided. An example description is the following: "This is a backup plan that performs a daily backup at 6pm and retains data for 3 months". The description must be at most 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. `etag` is returned from the service in the response. As a user of the service, you may provide an etag value in this field to prevent stale resources.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. This collection of key/value pairs allows for custom labels to be supplied by the user. Example, &#123;"tag": "Weekly"&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="logRetentionDays" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Applicable only for CloudSQL resource_type. Configures how long logs will be stored. It is defined in “days”. This value should be greater than or equal to minimum enforced log retention duration of the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Required. The resource type to which the `BackupPlan` will be applied. Examples include, "compute.googleapis.com/Instance", "sqladmin.googleapis.com/Instance", "alloydb.googleapis.com/Cluster", "compute.googleapis.com/Disk".</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The user friendly revision ID of the `BackupPlanRevision`. Example: v0, v1, v2, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource id of the `BackupPlanRevision`. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/backupPlans/&#123;backup_plan&#125;/revisions/&#123;revision_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The `State` for the `BackupPlan`.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedResourceTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. All resource types to which backupPlan can be applied.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the `BackupPlan` was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response message for getting a list of `BackupPlan`.

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
    <td><CopyableCode code="backupPlans" /></td>
    <td><code>array</code></td>
    <td>The list of `BackupPlans` in the project for the specified location. If the `&#123;location&#125;` value in the request is "-", the response contains a list of resources from all locations. In case any location is unreachable, the response will only return backup plans in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. BackupPlan</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token which may be sent as page_token in a subsequent `ListBackupPlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td></td>
    <td>Gets details of a single BackupPlan.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists BackupPlans in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupPlanId"><code>backupPlanId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a BackupPlan</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a BackupPlan.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlansId"><code>backupPlansId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single BackupPlan.</td>
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

Gets details of a single BackupPlan.

```sql
SELECT
name,
backupRules,
backupVault,
backupVaultServiceAccount,
createTime,
description,
etag,
labels,
logRetentionDays,
resourceType,
revisionId,
revisionName,
state,
supportedResourceTypes,
updateTime
FROM google.backupdr.backup_plans
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupPlansId = '{{ backupPlansId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists BackupPlans in a given project and location.

```sql
SELECT
backupPlans,
nextPageToken,
unreachable
FROM google.backupdr.backup_plans
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

Create a BackupPlan

```sql
INSERT INTO google.backupdr.backup_plans (
data__description,
data__labels,
data__backupRules,
data__resourceType,
data__etag,
data__backupVault,
data__logRetentionDays,
projectsId,
locationsId,
backupPlanId,
requestId
)
SELECT 
'{{ description }}',
'{{ labels }}',
'{{ backupRules }}',
'{{ resourceType }}',
'{{ etag }}',
'{{ backupVault }}',
'{{ logRetentionDays }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupPlanId }}',
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
        Optional. The description of the `BackupPlan` resource. The description allows for additional details about `BackupPlan` and its use cases to be provided. An example description is the following: "This is a backup plan that performs a daily backup at 6pm and retains data for 3 months". The description must be at most 2048 characters.
        
    - name: labels
      value: object
      description: >
        Optional. This collection of key/value pairs allows for custom labels to be supplied by the user. Example, {"tag": "Weekly"}.
        
    - name: backupRules
      value: array
      description: >
        Optional. The backup rules for this `BackupPlan`.
        
    - name: resourceType
      value: string
      description: >
        Required. The resource type to which the `BackupPlan` will be applied. Examples include, "compute.googleapis.com/Instance", "sqladmin.googleapis.com/Instance", "alloydb.googleapis.com/Cluster", "compute.googleapis.com/Disk".
        
    - name: etag
      value: string
      description: >
        Optional. `etag` is returned from the service in the response. As a user of the service, you may provide an etag value in this field to prevent stale resources.
        
    - name: backupVault
      value: string
      description: >
        Required. Resource name of backup vault which will be used as storage location for backups. Format: projects/{project}/locations/{location}/backupVaults/{backupvault}
        
    - name: logRetentionDays
      value: string
      description: >
        Optional. Applicable only for CloudSQL resource_type. Configures how long logs will be stored. It is defined in “days”. This value should be greater than or equal to minimum enforced log retention duration of the backup vault.
        
    - name: backupPlanId
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

Update a BackupPlan.

```sql
UPDATE google.backupdr.backup_plans
SET 
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__backupRules = '{{ backupRules }}',
data__resourceType = '{{ resourceType }}',
data__etag = '{{ etag }}',
data__backupVault = '{{ backupVault }}',
data__logRetentionDays = '{{ logRetentionDays }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlansId = '{{ backupPlansId }}' --required
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

Deletes a single BackupPlan.

```sql
DELETE FROM google.backupdr.backup_plans
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlansId = '{{ backupPlansId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
