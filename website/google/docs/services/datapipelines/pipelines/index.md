--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - datapipelines
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

Creates, updates, deletes, gets or lists a <code>pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>pipelines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datapipelines.pipelines" /></td></tr>
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
    <td>The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="jobCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineSources" /></td>
    <td><code>object</code></td>
    <td>Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleInfo" /></td>
    <td><code>object</code></td>
    <td>Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally. (id: GoogleCloudDatapipelinesV1ScheduleSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="schedulerServiceAccountEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="workload" /></td>
    <td><code>object</code></td>
    <td>Workload information for creating new jobs. (id: GoogleCloudDatapipelinesV1Workload)</td>
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
    <td>The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="jobCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineSources" /></td>
    <td><code>object</code></td>
    <td>Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleInfo" /></td>
    <td><code>object</code></td>
    <td>Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally. (id: GoogleCloudDatapipelinesV1ScheduleSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="schedulerServiceAccountEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="workload" /></td>
    <td><code>object</code></td>
    <td>Workload information for creating new jobs. (id: GoogleCloudDatapipelinesV1Workload)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pipelinesId"><code>pipelinesId</code></a></td>
    <td></td>
    <td>Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pipelinesId"><code>pipelinesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pipelinesId"><code>pipelinesId</code></a></td>
    <td></td>
    <td>Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pipelinesId"><code>pipelinesId</code></a></td>
    <td></td>
    <td>Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pipelinesId"><code>pipelinesId</code></a></td>
    <td></td>
    <td>Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.</td>
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
<tr id="parameter-pipelinesId">
    <td><CopyableCode code="pipelinesId" /></td>
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

Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

```sql
SELECT
name,
createTime,
displayName,
jobCount,
lastUpdateTime,
pipelineSources,
scheduleInfo,
schedulerServiceAccountEmail,
state,
type,
workload
FROM google.datapipelines.pipelines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pipelinesId = '{{ pipelinesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

```sql
SELECT
name,
createTime,
displayName,
jobCount,
lastUpdateTime,
pipelineSources,
scheduleInfo,
schedulerServiceAccountEmail,
state,
type,
workload
FROM google.datapipelines.pipelines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
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

Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.

```sql
INSERT INTO google.datapipelines.pipelines (
data__name,
data__displayName,
data__type,
data__state,
data__workload,
data__scheduleInfo,
data__schedulerServiceAccountEmail,
data__pipelineSources,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ type }}',
'{{ state }}',
'{{ workload }}',
'{{ scheduleInfo }}',
'{{ schedulerServiceAccountEmail }}',
'{{ pipelineSources }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
jobCount,
lastUpdateTime,
pipelineSources,
scheduleInfo,
schedulerServiceAccountEmail,
state,
type,
workload
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: pipelines
  props:
    - name: projectsId
      value: string
      description: Required parameter for the pipelines resource.
    - name: locationsId
      value: string
      description: Required parameter for the pipelines resource.
    - name: name
      value: string
      description: >
        The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).
        
    - name: type
      value: string
      description: >
        Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
        
      valid_values: ['PIPELINE_TYPE_UNSPECIFIED', 'PIPELINE_TYPE_BATCH', 'PIPELINE_TYPE_STREAMING']
    - name: state
      value: string
      description: >
        Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.
        
      valid_values: ['STATE_UNSPECIFIED', 'STATE_RESUMING', 'STATE_ACTIVE', 'STATE_STOPPING', 'STATE_ARCHIVED', 'STATE_PAUSED']
    - name: workload
      value: object
      description: >
        Workload information for creating new jobs.
        
    - name: scheduleInfo
      value: object
      description: >
        Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.
        
    - name: schedulerServiceAccountEmail
      value: string
      description: >
        Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.
        
    - name: pipelineSources
      value: object
      description: >
        Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.
        
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

Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.

```sql
UPDATE google.datapipelines.pipelines
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__type = '{{ type }}',
data__state = '{{ state }}',
data__workload = '{{ workload }}',
data__scheduleInfo = '{{ scheduleInfo }}',
data__schedulerServiceAccountEmail = '{{ schedulerServiceAccountEmail }}',
data__pipelineSources = '{{ pipelineSources }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pipelinesId = '{{ pipelinesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
jobCount,
lastUpdateTime,
pipelineSources,
scheduleInfo,
schedulerServiceAccountEmail,
state,
type,
workload;
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

Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.

```sql
DELETE FROM google.datapipelines.pipelines
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pipelinesId = '{{ pipelinesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop"
    values={[
        { label: 'stop', value: 'stop' },
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="stop">

Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

```sql
EXEC google.datapipelines.pipelines.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pipelinesId='{{ pipelinesId }}' --required;
```
</TabItem>
<TabItem value="run">

Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.

```sql
EXEC google.datapipelines.pipelines.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pipelinesId='{{ pipelinesId }}' --required;
```
</TabItem>
</Tabs>
