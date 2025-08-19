--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - run
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>executions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.executions" /></td></tr>
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

Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.

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
    <td>Output only. The unique name of this Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.</td>
</tr>
<tr>
    <td><CopyableCode code="cancelledCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of tasks which reached phase Cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Condition of this Execution, containing its readiness status, and detailed error information in case it did not reach the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the authenticated creator.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="failedCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of tasks which reached phase Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="job" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the parent Job.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.</td>
</tr>
<tr>
    <td><CopyableCode code="logUri" /></td>
    <td><code>string</code></td>
    <td>Output only. URI where logs for this execution can be found in Cloud Console.</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelism" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be &lt;= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) &lt; .spec.parallelism), i.e. when the work left to do is less than max parallelism.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="retriedCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of tasks which have retried at least once.</td>
</tr>
<tr>
    <td><CopyableCode code="runningCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of actively running tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="succeededCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of tasks which reached phase Succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="taskCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Output only. The template used to create tasks for this execution. (id: GoogleCloudRunV2TaskTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message containing a list of Executions.

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
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>The resulting list of Executions.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Gets information about an Execution.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists Executions from a Job. Results are sorted by creation time, descending.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an Execution.</td>
</tr>
<tr>
    <td><a href="#export_status"><CopyableCode code="export_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-executionsId1"><code>executionsId1</code></a></td>
    <td></td>
    <td>Read the status of an image export operation.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Cancels an Execution.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-executionsId1">
    <td><CopyableCode code="executionsId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobsId">
    <td><CopyableCode code="jobsId" /></td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Gets information about an Execution.

```sql
SELECT
name,
annotations,
cancelledCount,
completionTime,
conditions,
createTime,
creator,
deleteTime,
etag,
expireTime,
failedCount,
generation,
job,
labels,
launchStage,
logUri,
observedGeneration,
parallelism,
reconciling,
retriedCount,
runningCount,
satisfiesPzs,
startTime,
succeededCount,
taskCount,
template,
uid,
updateTime
FROM google.run.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Executions from a Job. Results are sorted by creation time, descending.

```sql
SELECT
executions,
nextPageToken
FROM google.run.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
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

Deletes an Execution.

```sql
DELETE FROM google.run.executions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND executionsId = '{{ executionsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_status"
    values={[
        { label: 'export_status', value: 'export_status' },
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="export_status">

Read the status of an image export operation.

```sql
EXEC google.run.executions.export_status 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobsId='{{ jobsId }}' --required, 
@executionsId='{{ executionsId }}' --required, 
@executionsId1='{{ executionsId1 }}' --required;
```
</TabItem>
<TabItem value="cancel">

Cancels an Execution.

```sql
EXEC google.run.executions.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobsId='{{ jobsId }}' --required, 
@executionsId='{{ executionsId }}' --required 
@@json=
'{
"validateOnly": {{ validateOnly }}, 
"etag": "{{ etag }}"
}';
```
</TabItem>
</Tabs>
