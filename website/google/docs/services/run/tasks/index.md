--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
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

Creates, updates, deletes, gets or lists a <code>tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tasks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.tasks" /></td></tr>
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
    <td>Output only. The unique name of this Task.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="containers" /></td>
    <td><code>array</code></td>
    <td>Holds the single container that defines the unit of execution for this task.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="execution" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the parent Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionEnvironment" /></td>
    <td><code>string</code></td>
    <td>The execution environment being used to host this Task.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="gpuZonalRedundancyDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. True if GPU zonal redundancy is disabled on this task.</td>
</tr>
<tr>
    <td><CopyableCode code="index" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Index of the Task, unique per execution, and beginning at 0.</td>
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
    <td><CopyableCode code="lastAttemptResult" /></td>
    <td><code>object</code></td>
    <td>Output only. Result of the last attempt of this Task. (id: GoogleCloudRunV2TaskAttemptResult)</td>
</tr>
<tr>
    <td><CopyableCode code="logUri" /></td>
    <td><code>string</code></td>
    <td>Output only. URI where logs for this execution can be found in Cloud Console.</td>
</tr>
<tr>
    <td><CopyableCode code="maxRetries" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of retries allowed per Task, before marking this Task failed.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSelector" /></td>
    <td><code>object</code></td>
    <td>Output only. The node selector for the task. (id: GoogleCloudRunV2NodeSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="retried" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>A list of Volumes to make available to containers.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcAccess" /></td>
    <td><code>object</code></td>
    <td>Output only. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. (id: GoogleCloudRunV2VpcAccess)</td>
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
    <td>Output only. The unique name of this Task.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="containers" /></td>
    <td><code>array</code></td>
    <td>Holds the single container that defines the unit of execution for this task.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="execution" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the parent Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionEnvironment" /></td>
    <td><code>string</code></td>
    <td>The execution environment being used to host this Task.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="gpuZonalRedundancyDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. True if GPU zonal redundancy is disabled on this task.</td>
</tr>
<tr>
    <td><CopyableCode code="index" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Index of the Task, unique per execution, and beginning at 0.</td>
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
    <td><CopyableCode code="lastAttemptResult" /></td>
    <td><code>object</code></td>
    <td>Output only. Result of the last attempt of this Task. (id: GoogleCloudRunV2TaskAttemptResult)</td>
</tr>
<tr>
    <td><CopyableCode code="logUri" /></td>
    <td><code>string</code></td>
    <td>Output only. URI where logs for this execution can be found in Cloud Console.</td>
</tr>
<tr>
    <td><CopyableCode code="maxRetries" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of retries allowed per Task, before marking this Task failed.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSelector" /></td>
    <td><code>object</code></td>
    <td>Output only. The node selector for the task. (id: GoogleCloudRunV2NodeSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="retried" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>A list of Volumes to make available to containers.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcAccess" /></td>
    <td><code>object</code></td>
    <td>Output only. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. (id: GoogleCloudRunV2VpcAccess)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td></td>
    <td>Gets information about a Task.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists Tasks from an Execution of a Job.</td>
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
<tr id="parameter-tasksId">
    <td><CopyableCode code="tasksId" /></td>
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

Gets information about a Task.

```sql
SELECT
name,
annotations,
completionTime,
conditions,
containers,
createTime,
deleteTime,
encryptionKey,
etag,
execution,
executionEnvironment,
expireTime,
generation,
gpuZonalRedundancyDisabled,
index,
job,
labels,
lastAttemptResult,
logUri,
maxRetries,
nodeSelector,
observedGeneration,
reconciling,
retried,
satisfiesPzs,
scheduledTime,
serviceAccount,
startTime,
timeout,
uid,
updateTime,
volumes,
vpcAccess
FROM google.run.tasks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND tasksId = '{{ tasksId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Tasks from an Execution of a Job.

```sql
SELECT
name,
annotations,
completionTime,
conditions,
containers,
createTime,
deleteTime,
encryptionKey,
etag,
execution,
executionEnvironment,
expireTime,
generation,
gpuZonalRedundancyDisabled,
index,
job,
labels,
lastAttemptResult,
logUri,
maxRetries,
nodeSelector,
observedGeneration,
reconciling,
retried,
satisfiesPzs,
scheduledTime,
serviceAccount,
startTime,
timeout,
uid,
updateTime,
volumes,
vpcAccess
FROM google.run.tasks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
```
</TabItem>
</Tabs>
