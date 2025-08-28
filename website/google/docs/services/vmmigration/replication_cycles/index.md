--- 
title: replication_cycles
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_cycles
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

Creates, updates, deletes, gets or lists a <code>replication_cycles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>replication_cycles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.replication_cycles" /></td></tr>
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
    <td>The identifier of the ReplicationCycle.</td>
</tr>
<tr>
    <td><CopyableCode code="cycleNumber" /></td>
    <td><code>integer (int32)</code></td>
    <td>The cycle's ordinal number.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the replication cycle has ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the cycle in case of an error. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="progressPercent" /></td>
    <td><code>integer (int32)</code></td>
    <td>The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the replication cycle has started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the ReplicationCycle.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>The cycle's steps list representing its progress.</td>
</tr>
<tr>
    <td><CopyableCode code="totalPauseDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The accumulated duration the replication cycle was paused.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. Warnings that occurred during the cycle.</td>
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
    <td>The identifier of the ReplicationCycle.</td>
</tr>
<tr>
    <td><CopyableCode code="cycleNumber" /></td>
    <td><code>integer (int32)</code></td>
    <td>The cycle's ordinal number.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the replication cycle has ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the cycle in case of an error. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="progressPercent" /></td>
    <td><code>integer (int32)</code></td>
    <td>The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the replication cycle has started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the ReplicationCycle.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>The cycle's steps list representing its progress.</td>
</tr>
<tr>
    <td><CopyableCode code="totalPauseDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The accumulated duration the replication cycle was paused.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. Warnings that occurred during the cycle.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a>, <a href="#parameter-replicationCyclesId"><code>replicationCyclesId</code></a></td>
    <td></td>
    <td>Gets details of a single ReplicationCycle.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ReplicationCycles in a given MigratingVM.</td>
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
<tr id="parameter-replicationCyclesId">
    <td><CopyableCode code="replicationCyclesId" /></td>
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

Gets details of a single ReplicationCycle.

```sql
SELECT
name,
cycleNumber,
endTime,
error,
progressPercent,
startTime,
state,
steps,
totalPauseDuration,
warnings
FROM google.vmmigration.replication_cycles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND migratingVmsId = '{{ migratingVmsId }}' -- required
AND replicationCyclesId = '{{ replicationCyclesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ReplicationCycles in a given MigratingVM.

```sql
SELECT
name,
cycleNumber,
endTime,
error,
progressPercent,
startTime,
state,
steps,
totalPauseDuration,
warnings
FROM google.vmmigration.replication_cycles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND migratingVmsId = '{{ migratingVmsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
