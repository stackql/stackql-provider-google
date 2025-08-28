--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - dataplex
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_tasks_get"
    values={[
        { label: 'projects_locations_lakes_tasks_get', value: 'projects_locations_lakes_tasks_get' },
        { label: 'projects_locations_lakes_tasks_list', value: 'projects_locations_lakes_tasks_list' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_get">

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
    <td>Output only. The relative resource name of the task, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/ tasks/&#123;task_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="executionSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Spec related to how a task is executed. (id: GoogleCloudDataplexV1TaskExecutionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="executionStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the latest task executions. (id: GoogleCloudDataplexV1TaskExecutionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the task.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook" /></td>
    <td><code>object</code></td>
    <td>Config related to running scheduled Notebooks. (id: GoogleCloudDataplexV1TaskNotebookTaskConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="spark" /></td>
    <td><code>object</code></td>
    <td>Config related to running custom Spark tasks. (id: GoogleCloudDataplexV1TaskSparkTaskConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Spec related to how often and when a task should be triggered. (id: GoogleCloudDataplexV1TaskTriggerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the task was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_tasks_list">

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
    <td>Output only. The relative resource name of the task, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/ tasks/&#123;task_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="executionSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Spec related to how a task is executed. (id: GoogleCloudDataplexV1TaskExecutionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="executionStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the latest task executions. (id: GoogleCloudDataplexV1TaskExecutionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the task.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook" /></td>
    <td><code>object</code></td>
    <td>Config related to running scheduled Notebooks. (id: GoogleCloudDataplexV1TaskNotebookTaskConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="spark" /></td>
    <td><code>object</code></td>
    <td>Config related to running custom Spark tasks. (id: GoogleCloudDataplexV1TaskSparkTaskConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Spec related to how often and when a task should be triggered. (id: GoogleCloudDataplexV1TaskTriggerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the task was last updated.</td>
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
    <td><a href="#projects_locations_lakes_tasks_get"><CopyableCode code="projects_locations_lakes_tasks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td></td>
    <td>Get task resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_list"><CopyableCode code="projects_locations_lakes_tasks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists tasks under the given lake.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_create"><CopyableCode code="projects_locations_lakes_tasks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a task resource within a lake.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_patch"><CopyableCode code="projects_locations_lakes_tasks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update the task resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_delete"><CopyableCode code="projects_locations_lakes_tasks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td></td>
    <td>Delete the task resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_run"><CopyableCode code="projects_locations_lakes_tasks_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td></td>
    <td>Run an on demand execution of a Task.</td>
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
<tr id="parameter-lakesId">
    <td><CopyableCode code="lakesId" /></td>
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
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_lakes_tasks_get"
    values={[
        { label: 'projects_locations_lakes_tasks_get', value: 'projects_locations_lakes_tasks_get' },
        { label: 'projects_locations_lakes_tasks_list', value: 'projects_locations_lakes_tasks_list' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_get">

Get task resource.

```sql
SELECT
name,
createTime,
description,
displayName,
executionSpec,
executionStatus,
labels,
notebook,
spark,
state,
triggerSpec,
uid,
updateTime
FROM google.dataplex.tasks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND tasksId = '{{ tasksId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_lakes_tasks_list">

Lists tasks under the given lake.

```sql
SELECT
name,
createTime,
description,
displayName,
executionSpec,
executionStatus,
labels,
notebook,
spark,
state,
triggerSpec,
uid,
updateTime
FROM google.dataplex.tasks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_tasks_create"
    values={[
        { label: 'projects_locations_lakes_tasks_create', value: 'projects_locations_lakes_tasks_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_create">

Creates a task resource within a lake.

```sql
INSERT INTO google.dataplex.tasks (
data__description,
data__displayName,
data__labels,
data__triggerSpec,
data__executionSpec,
data__spark,
data__notebook,
projectsId,
locationsId,
lakesId,
taskId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ triggerSpec }}',
'{{ executionSpec }}',
'{{ spark }}',
'{{ notebook }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ taskId }}',
'{{ validateOnly }}'
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
- name: tasks
  props:
    - name: projectsId
      value: string
      description: Required parameter for the tasks resource.
    - name: locationsId
      value: string
      description: Required parameter for the tasks resource.
    - name: lakesId
      value: string
      description: Required parameter for the tasks resource.
    - name: description
      value: string
      description: >
        Optional. Description of the task.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the task.
        
    - name: triggerSpec
      value: object
      description: >
        Required. Spec related to how often and when a task should be triggered.
        
    - name: executionSpec
      value: object
      description: >
        Required. Spec related to how a task is executed.
        
    - name: spark
      value: object
      description: >
        Config related to running custom Spark tasks.
        
    - name: notebook
      value: object
      description: >
        Config related to running scheduled Notebooks.
        
    - name: taskId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_lakes_tasks_patch"
    values={[
        { label: 'projects_locations_lakes_tasks_patch', value: 'projects_locations_lakes_tasks_patch' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_patch">

Update the task resource.

```sql
UPDATE google.dataplex.tasks
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__triggerSpec = '{{ triggerSpec }}',
data__executionSpec = '{{ executionSpec }}',
data__spark = '{{ spark }}',
data__notebook = '{{ notebook }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND tasksId = '{{ tasksId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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
    defaultValue="projects_locations_lakes_tasks_delete"
    values={[
        { label: 'projects_locations_lakes_tasks_delete', value: 'projects_locations_lakes_tasks_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_delete">

Delete the task resource.

```sql
DELETE FROM google.dataplex.tasks
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND tasksId = '{{ tasksId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_lakes_tasks_run"
    values={[
        { label: 'projects_locations_lakes_tasks_run', value: 'projects_locations_lakes_tasks_run' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_run">

Run an on demand execution of a Task.

```sql
EXEC google.dataplex.tasks.projects_locations_lakes_tasks_run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@lakesId='{{ lakesId }}' --required, 
@tasksId='{{ tasksId }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"args": "{{ args }}"
}';
```
</TabItem>
</Tabs>
