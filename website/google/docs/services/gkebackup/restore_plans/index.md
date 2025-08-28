--- 
title: restore_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_plans
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

Creates, updates, deletes, gets or lists a <code>restore_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>restore_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.restore_plans" /></td></tr>
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
    <td>Output only. The full name of the RestorePlan resource. Format: `projects/*/locations/*/restorePlans/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlan" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/*/locations/*/backupPlans/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this RestorePlan resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this RestorePlan.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlan`, and systems are expected to put that etag in the request to `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreChannel" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully qualified name of the RestoreChannel to be used to create a RestorePlan. This field is set only if the `backup_plan` is in a different project than the RestorePlan. Format: `projects/*/locations/*/restoreChannels/*`</td>
</tr>
<tr>
    <td><CopyableCode code="restoreConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration of Restores created via this RestorePlan. (id: RestoreConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the RestorePlan. This State field reflects the various stages a RestorePlan can be in during the Create operation.</td>
</tr>
<tr>
    <td><CopyableCode code="stateReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why RestorePlan is in the current `state`. This field is only meant for human readability and should not be used programmatically as this field is not guaranteed to be consistent.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this RestorePlan resource was last updated.</td>
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
    <td>Output only. The full name of the RestorePlan resource. Format: `projects/*/locations/*/restorePlans/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlan" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/*/locations/*/backupPlans/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this RestorePlan resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User specified descriptive string for this RestorePlan.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlan`, and systems are expected to put that etag in the request to `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. A set of custom labels supplied by user.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreChannel" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully qualified name of the RestoreChannel to be used to create a RestorePlan. This field is set only if the `backup_plan` is in a different project than the RestorePlan. Format: `projects/*/locations/*/restoreChannels/*`</td>
</tr>
<tr>
    <td><CopyableCode code="restoreConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration of Restores created via this RestorePlan. (id: RestoreConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the RestorePlan. This State field reflects the various stages a RestorePlan can be in during the Create operation.</td>
</tr>
<tr>
    <td><CopyableCode code="stateReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable description of why RestorePlan is in the current `state`. This field is only meant for human readability and should not be used programmatically as this field is not guaranteed to be consistent.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this RestorePlan resource was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single RestorePlan.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists RestorePlans in a given location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-restorePlanId"><code>restorePlanId</code></a></td>
    <td>Creates a new RestorePlan in a given location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a RestorePlan.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an existing RestorePlan.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-restorePlansId">
    <td><CopyableCode code="restorePlansId" /></td>
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
<tr id="parameter-restorePlanId">
    <td><CopyableCode code="restorePlanId" /></td>
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

Retrieve the details of a single RestorePlan.

```sql
SELECT
name,
backupPlan,
cluster,
createTime,
description,
etag,
labels,
restoreChannel,
restoreConfig,
state,
stateReason,
uid,
updateTime
FROM google.gkebackup.restore_plans
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restorePlansId = '{{ restorePlansId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists RestorePlans in a given location.

```sql
SELECT
name,
backupPlan,
cluster,
createTime,
description,
etag,
labels,
restoreChannel,
restoreConfig,
state,
stateReason,
uid,
updateTime
FROM google.gkebackup.restore_plans
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

Creates a new RestorePlan in a given location.

```sql
INSERT INTO google.gkebackup.restore_plans (
data__description,
data__backupPlan,
data__cluster,
data__restoreConfig,
data__labels,
projectsId,
locationsId,
restorePlanId
)
SELECT 
'{{ description }}',
'{{ backupPlan }}',
'{{ cluster }}',
'{{ restoreConfig }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ restorePlanId }}'
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
- name: restore_plans
  props:
    - name: projectsId
      value: string
      description: Required parameter for the restore_plans resource.
    - name: locationsId
      value: string
      description: Required parameter for the restore_plans resource.
    - name: description
      value: string
      description: >
        Optional. User specified descriptive string for this RestorePlan.
        
    - name: backupPlan
      value: string
      description: >
        Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/*/locations/*/backupPlans/*`.
        
    - name: cluster
      value: string
      description: >
        Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`
        
    - name: restoreConfig
      value: object
      description: >
        Required. Configuration of Restores created via this RestorePlan.
        
    - name: labels
      value: object
      description: >
        Optional. A set of custom labels supplied by user.
        
    - name: restorePlanId
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

Update a RestorePlan.

```sql
UPDATE google.gkebackup.restore_plans
SET 
data__description = '{{ description }}',
data__backupPlan = '{{ backupPlan }}',
data__cluster = '{{ cluster }}',
data__restoreConfig = '{{ restoreConfig }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND restorePlansId = '{{ restorePlansId }}' --required
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

Deletes an existing RestorePlan.

```sql
DELETE FROM google.gkebackup.restore_plans
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND restorePlansId = '{{ restorePlansId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
