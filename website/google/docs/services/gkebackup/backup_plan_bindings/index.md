--- 
title: backup_plan_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plan_bindings
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

Creates, updates, deletes, gets or lists a <code>backup_plan_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_plan_bindings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.backup_plan_bindings" /></td></tr>
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
    <td>Identifier. The fully qualified name of the BackupPlanBinding. `projects/*/locations/*/backupChannels/*/backupPlanBindings/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The fully qualified name of the BackupPlan bound with the parent BackupChannel. `projects/*/locations/*/backupPlans/&#123;backup_plan&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlanDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains details about the backup plan/backup. (id: BackupPlanDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The fully qualified name of the cluster that is being backed up Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a BackupPlanBinding from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlanBinding updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlanBinding`, and systems are expected to put that etag in the request to `UpdateBackupPlanBinding` or `DeleteBackupPlanBinding` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this binding was created.</td>
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
    <td>Identifier. The fully qualified name of the BackupPlanBinding. `projects/*/locations/*/backupChannels/*/backupPlanBindings/*`</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The fully qualified name of the BackupPlan bound with the parent BackupChannel. `projects/*/locations/*/backupPlans/&#123;backup_plan&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="backupPlanDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains details about the backup plan/backup. (id: BackupPlanDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The fully qualified name of the cluster that is being backed up Valid formats: - `projects/*/locations/*/clusters/*` - `projects/*/zones/*/clusters/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a BackupPlanBinding from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlanBinding updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlanBinding`, and systems are expected to put that etag in the request to `UpdateBackupPlanBinding` or `DeleteBackupPlanBinding` to ensure that their change will be applied to the same version of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this binding was created.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupChannelsId"><code>backupChannelsId</code></a>, <a href="#parameter-backupPlanBindingsId"><code>backupPlanBindingsId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single BackupPlanBinding.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupChannelsId"><code>backupChannelsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists BackupPlanBindings in a given location.</td>
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
<tr id="parameter-backupChannelsId">
    <td><CopyableCode code="backupChannelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-backupPlanBindingsId">
    <td><CopyableCode code="backupPlanBindingsId" /></td>
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

Retrieve the details of a single BackupPlanBinding.

```sql
SELECT
name,
backupPlan,
backupPlanDetails,
cluster,
createTime,
etag,
uid,
updateTime
FROM google.gkebackup.backup_plan_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupChannelsId = '{{ backupChannelsId }}' -- required
AND backupPlanBindingsId = '{{ backupPlanBindingsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists BackupPlanBindings in a given location.

```sql
SELECT
name,
backupPlan,
backupPlanDetails,
cluster,
createTime,
etag,
uid,
updateTime
FROM google.gkebackup.backup_plan_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupChannelsId = '{{ backupChannelsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
