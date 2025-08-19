--- 
title: backup_plan_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plan_associations
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

Creates, updates, deletes, gets or lists a <code>backup_plan_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_plan_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.backup_plan_associations" /></td></tr>
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

A BackupPlanAssociation represents a single BackupPlanAssociation which contains details like workload, backup plan etc

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
    <td>Output only. Identifier. The resource name of BackupPlanAssociation in below format Format : projects/&#123;project&#125;/locations/&#123;location&#125;/backupPlanAssociations/&#123;backupPlanAssociationId&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlan" /></td>
    <td><code>string</code></td>
    <td>Required. Resource name of backup plan which needs to be applied on workload. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/backupPlans/&#123;backupPlanId&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlanRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The user friendly revision ID of the `BackupPlanRevision`. Example: v0, v1, v2, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlanRevisionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource id of the `BackupPlanRevision`. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/backupPlans/&#123;backup_plan&#125;/revisions/&#123;revision_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSqlInstanceBackupPlanAssociationProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Cloud SQL instance's backup plan association properties. (id: CloudSqlInstanceBackupPlanAssociationProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of data source which will be used as storage location for backups taken. Format : projects/&#123;project&#125;/locations/&#123;location&#125;/backupVaults/&#123;backupvault&#125;/dataSources/&#123;datasource&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Resource name of workload on which the backup plan is applied. The format can either be the resource name (e.g., "projects/my-project/zones/us-central1-a/instances/my-instance") or the full resource URI (e.g., "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance").</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Resource type of workload on which backupplan is applied</td>
</tr>
<tr>
    <td><CopyableCode code="rulesConfigInfo" /></td>
    <td><code>array</code></td>
    <td>Output only. The config info related to backup rules.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The BackupPlanAssociation resource state.</td>
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

Response message for List BackupPlanAssociation

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
    <td><CopyableCode code="backupPlanAssociations" /></td>
    <td><code>array</code></td>
    <td>The list of Backup Plan Associations in the project for the specified location. If the `&#123;location&#125;` value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return backup plan associations in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlanAssociationsId"><code>backupPlanAssociationsId</code></a></td>
    <td></td>
    <td>Gets details of a single BackupPlanAssociation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists BackupPlanAssociations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupPlanAssociationId"><code>backupPlanAssociationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a BackupPlanAssociation</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlanAssociationsId"><code>backupPlanAssociationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a BackupPlanAssociation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlanAssociationsId"><code>backupPlanAssociationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single BackupPlanAssociation.</td>
</tr>
<tr>
    <td><a href="#trigger_backup"><CopyableCode code="trigger_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupPlanAssociationsId"><code>backupPlanAssociationsId</code></a></td>
    <td></td>
    <td>Triggers a new Backup.</td>
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
<tr id="parameter-backupPlanAssociationsId">
    <td><CopyableCode code="backupPlanAssociationsId" /></td>
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
<tr id="parameter-backupPlanAssociationId">
    <td><CopyableCode code="backupPlanAssociationId" /></td>
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

Gets details of a single BackupPlanAssociation.

```sql
SELECT
name,
backupPlan,
backupPlanRevisionId,
backupPlanRevisionName,
cloudSqlInstanceBackupPlanAssociationProperties,
createTime,
dataSource,
resource,
resourceType,
rulesConfigInfo,
state,
updateTime
FROM google.backupdr.backup_plan_associations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupPlanAssociationsId = '{{ backupPlanAssociationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists BackupPlanAssociations in a given project and location.

```sql
SELECT
backupPlanAssociations,
nextPageToken,
unreachable
FROM google.backupdr.backup_plan_associations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Create a BackupPlanAssociation

```sql
INSERT INTO google.backupdr.backup_plan_associations (
data__resourceType,
data__resource,
data__backupPlan,
projectsId,
locationsId,
backupPlanAssociationId,
requestId
)
SELECT 
'{{ resourceType }}',
'{{ resource }}',
'{{ backupPlan }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupPlanAssociationId }}',
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
- name: backup_plan_associations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backup_plan_associations resource.
    - name: locationsId
      value: string
      description: Required parameter for the backup_plan_associations resource.
    - name: resourceType
      value: string
      description: >
        Required. Immutable. Resource type of workload on which backupplan is applied
        
    - name: resource
      value: string
      description: >
        Required. Immutable. Resource name of workload on which the backup plan is applied. The format can either be the resource name (e.g., "projects/my-project/zones/us-central1-a/instances/my-instance") or the full resource URI (e.g., "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance").
        
    - name: backupPlan
      value: string
      description: >
        Required. Resource name of backup plan which needs to be applied on workload. Format: projects/{project}/locations/{location}/backupPlans/{backupPlanId}
        
    - name: backupPlanAssociationId
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

Update a BackupPlanAssociation.

```sql
UPDATE google.backupdr.backup_plan_associations
SET 
data__resourceType = '{{ resourceType }}',
data__resource = '{{ resource }}',
data__backupPlan = '{{ backupPlan }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlanAssociationsId = '{{ backupPlanAssociationsId }}' --required
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

Deletes a single BackupPlanAssociation.

```sql
DELETE FROM google.backupdr.backup_plan_associations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupPlanAssociationsId = '{{ backupPlanAssociationsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="trigger_backup"
    values={[
        { label: 'trigger_backup', value: 'trigger_backup' }
    ]}
>
<TabItem value="trigger_backup">

Triggers a new Backup.

```sql
EXEC google.backupdr.backup_plan_associations.trigger_backup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupPlanAssociationsId='{{ backupPlanAssociationsId }}' --required 
@@json=
'{
"ruleId": "{{ ruleId }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
