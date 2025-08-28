--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - cloudtasks
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudtasks.tasks" /></td></tr>
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
    <td>Optionally caller-specified in CreateTask. The task name. The task name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the task's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * `TASK_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineHttpRequest" /></td>
    <td><code>object</code></td>
    <td>HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has AppEngineHttpRequest set. (id: AppEngineHttpRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the task was created. `create_time` will be truncated to the nearest second.</td>
</tr>
<tr>
    <td><CopyableCode code="dispatchCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven't received a response.</td>
</tr>
<tr>
    <td><CopyableCode code="dispatchDeadline" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the task according to the RetryConfig. Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests. The default and maximum values depend on the type of request: * For HTTP tasks, the default is 10 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. Regardless of the task's `dispatch_deadline`, the app handler will not run for longer than than the service's timeout. We recommend setting the `dispatch_deadline` to at most a few seconds more than the app handler's timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts). The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an approximate deadline.</td>
</tr>
<tr>
    <td><CopyableCode code="firstAttempt" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of the task's first attempt. Only dispatch_time will be set. The other Attempt information is not retained by Cloud Tasks. (id: Attempt)</td>
</tr>
<tr>
    <td><CopyableCode code="httpRequest" /></td>
    <td><code>object</code></td>
    <td>HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set. (id: HttpRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttempt" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of the task's last attempt. (id: Attempt)</td>
</tr>
<tr>
    <td><CopyableCode code="responseCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of attempts which have received a response.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the task is scheduled to be attempted or retried. `schedule_time` will be truncated to the nearest microsecond.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Output only. The view specifies which subset of the Task has been returned.</td>
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
    <td>Optionally caller-specified in CreateTask. The task name. The task name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the task's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * `TASK_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineHttpRequest" /></td>
    <td><code>object</code></td>
    <td>HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has AppEngineHttpRequest set. (id: AppEngineHttpRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the task was created. `create_time` will be truncated to the nearest second.</td>
</tr>
<tr>
    <td><CopyableCode code="dispatchCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven't received a response.</td>
</tr>
<tr>
    <td><CopyableCode code="dispatchDeadline" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the task according to the RetryConfig. Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests. The default and maximum values depend on the type of request: * For HTTP tasks, the default is 10 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. Regardless of the task's `dispatch_deadline`, the app handler will not run for longer than than the service's timeout. We recommend setting the `dispatch_deadline` to at most a few seconds more than the app handler's timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts). The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an approximate deadline.</td>
</tr>
<tr>
    <td><CopyableCode code="firstAttempt" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of the task's first attempt. Only dispatch_time will be set. The other Attempt information is not retained by Cloud Tasks. (id: Attempt)</td>
</tr>
<tr>
    <td><CopyableCode code="httpRequest" /></td>
    <td><code>object</code></td>
    <td>HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set. (id: HttpRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttempt" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of the task's last attempt. (id: Attempt)</td>
</tr>
<tr>
    <td><CopyableCode code="responseCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of attempts which have received a response.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the task is scheduled to be attempted or retried. `schedule_time` will be truncated to the nearest microsecond.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Output only. The view specifies which subset of the Task has been returned.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuesId"><code>queuesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td><a href="#parameter-responseView"><code>responseView</code></a></td>
    <td>Gets a task.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuesId"><code>queuesId</code></a></td>
    <td><a href="#parameter-responseView"><code>responseView</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuesId"><code>queuesId</code></a></td>
    <td></td>
    <td>Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuesId"><code>queuesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td></td>
    <td>Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuesId"><code>queuesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td></td>
    <td>Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.</td>
</tr>
<tr>
    <td><a href="#buffer"><CopyableCode code="buffer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuesId"><code>queuesId</code></a>, <a href="#parameter-taskId"><code>taskId</code></a></td>
    <td></td>
    <td>Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.</td>
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
<tr id="parameter-queuesId">
    <td><CopyableCode code="queuesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
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
<tr id="parameter-responseView">
    <td><CopyableCode code="responseView" /></td>
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

Gets a task.

```sql
SELECT
name,
appEngineHttpRequest,
createTime,
dispatchCount,
dispatchDeadline,
firstAttempt,
httpRequest,
lastAttempt,
responseCount,
scheduleTime,
view
FROM google.cloudtasks.tasks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND queuesId = '{{ queuesId }}' -- required
AND tasksId = '{{ tasksId }}' -- required
AND responseView = '{{ responseView }}';
```
</TabItem>
<TabItem value="list">

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

```sql
SELECT
name,
appEngineHttpRequest,
createTime,
dispatchCount,
dispatchDeadline,
firstAttempt,
httpRequest,
lastAttempt,
responseCount,
scheduleTime,
view
FROM google.cloudtasks.tasks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND queuesId = '{{ queuesId }}' -- required
AND responseView = '{{ responseView }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

```sql
INSERT INTO google.cloudtasks.tasks (
data__task,
data__responseView,
projectsId,
locationsId,
queuesId
)
SELECT 
'{{ task }}',
'{{ responseView }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ queuesId }}'
RETURNING
name,
appEngineHttpRequest,
createTime,
dispatchCount,
dispatchDeadline,
firstAttempt,
httpRequest,
lastAttempt,
responseCount,
scheduleTime,
view
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tasks
  props:
    - name: projectsId
      value: string
      description: Required parameter for the tasks resource.
    - name: locationsId
      value: string
      description: Required parameter for the tasks resource.
    - name: queuesId
      value: string
      description: Required parameter for the tasks resource.
    - name: task
      value: object
      description: >
        A unit of scheduled work.
        
    - name: responseView
      value: string
      description: >
        The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.
        
      valid_values: ['VIEW_UNSPECIFIED', 'BASIC', 'FULL']
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

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

```sql
DELETE FROM google.cloudtasks.tasks
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND queuesId = '{{ queuesId }}' --required
AND tasksId = '{{ tasksId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="run"
    values={[
        { label: 'run', value: 'run' },
        { label: 'buffer', value: 'buffer' }
    ]}
>
<TabItem value="run">

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

```sql
EXEC google.cloudtasks.tasks.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@queuesId='{{ queuesId }}' --required, 
@tasksId='{{ tasksId }}' --required 
@@json=
'{
"responseView": "{{ responseView }}"
}';
```
</TabItem>
<TabItem value="buffer">

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

```sql
EXEC google.cloudtasks.tasks.buffer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@queuesId='{{ queuesId }}' --required, 
@taskId='{{ taskId }}' --required 
@@json=
'{
"body": "{{ body }}"
}';
```
</TabItem>
</Tabs>
