--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - ml
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_jobs_get"
    values={[
        { label: 'projects_jobs_get', value: 'projects_jobs_get' },
        { label: 'projects_jobs_list', value: 'projects_jobs_list' }
    ]}
>
<TabItem value="projects_jobs_get">

Represents a training or prediction job.

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the job processing was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. The details of a failure or a cancellation.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>Required. The user-specified id of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="jobPosition" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. It's only effect when the job is in QUEUED state. If it's positive, it indicates the job's position in the job scheduler. It's 0 when the job is already scheduled.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.</td>
</tr>
<tr>
    <td><CopyableCode code="predictionInput" /></td>
    <td><code>object</code></td>
    <td>Input parameters to create a prediction job. (id: GoogleCloudMlV1__PredictionInput)</td>
</tr>
<tr>
    <td><CopyableCode code="predictionOutput" /></td>
    <td><code>object</code></td>
    <td>The current prediction job result. (id: GoogleCloudMlV1__PredictionOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the job processing was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingInput" /></td>
    <td><code>object</code></td>
    <td>Input parameters to create a training job. (id: GoogleCloudMlV1__TrainingInput)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingOutput" /></td>
    <td><code>object</code></td>
    <td>The current training job result. (id: GoogleCloudMlV1__TrainingOutput)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_jobs_list">

Response message for the ListJobs method.

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
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>The list of jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Optional. Pass this token as the `page_token` field of the request for a subsequent call.</td>
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
    <td><a href="#projects_jobs_get"><CopyableCode code="projects_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Describes a job.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_list"><CopyableCode code="projects_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: &#123;&#125;.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_create"><CopyableCode code="projects_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a training or a batch prediction job.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_patch"><CopyableCode code="projects_jobs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a specific job resource. Currently the only supported fields to update are `labels`.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_cancel"><CopyableCode code="projects_jobs_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Cancels a running job.</td>
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
<tr id="parameter-jobsId">
    <td><CopyableCode code="jobsId" /></td>
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
    defaultValue="projects_jobs_get"
    values={[
        { label: 'projects_jobs_get', value: 'projects_jobs_get' },
        { label: 'projects_jobs_list', value: 'projects_jobs_list' }
    ]}
>
<TabItem value="projects_jobs_get">

Describes a job.

```sql
SELECT
createTime,
endTime,
errorMessage,
etag,
jobId,
jobPosition,
labels,
predictionInput,
predictionOutput,
startTime,
state,
trainingInput,
trainingOutput
FROM google.ml.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required;
```
</TabItem>
<TabItem value="projects_jobs_list">

Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: &#123;&#125;.

```sql
SELECT
jobs,
nextPageToken
FROM google.ml.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_jobs_create"
    values={[
        { label: 'projects_jobs_create', value: 'projects_jobs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_jobs_create">

Creates a training or a batch prediction job.

```sql
INSERT INTO google.ml.jobs (
data__jobId,
data__trainingInput,
data__predictionInput,
data__createTime,
data__startTime,
data__endTime,
data__state,
data__errorMessage,
data__trainingOutput,
data__predictionOutput,
data__labels,
data__etag,
projectsId
)
SELECT 
'{{ jobId }}',
'{{ trainingInput }}',
'{{ predictionInput }}',
'{{ createTime }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ state }}',
'{{ errorMessage }}',
'{{ trainingOutput }}',
'{{ predictionOutput }}',
'{{ labels }}',
'{{ etag }}',
'{{ projectsId }}'
RETURNING
createTime,
endTime,
errorMessage,
etag,
jobId,
jobPosition,
labels,
predictionInput,
predictionOutput,
startTime,
state,
trainingInput,
trainingOutput
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the jobs resource.
    - name: jobId
      value: string
      description: >
        Required. The user-specified id of the job.
        
    - name: trainingInput
      value: object
      description: >
        Input parameters to create a training job.
        
    - name: predictionInput
      value: object
      description: >
        Input parameters to create a prediction job.
        
    - name: createTime
      value: string
      description: >
        Output only. When the job was created.
        
    - name: startTime
      value: string
      description: >
        Output only. When the job processing was started.
        
    - name: endTime
      value: string
      description: >
        Output only. When the job processing was completed.
        
    - name: state
      value: string
      description: >
        Output only. The detailed state of a job.
        
      valid_values: ['STATE_UNSPECIFIED', 'QUEUED', 'PREPARING', 'RUNNING', 'SUCCEEDED', 'FAILED', 'CANCELLING', 'CANCELLED']
    - name: errorMessage
      value: string
      description: >
        Output only. The details of a failure or a cancellation.
        
    - name: trainingOutput
      value: object
      description: >
        The current training job result.
        
    - name: predictionOutput
      value: object
      description: >
        The current prediction job result.
        
    - name: labels
      value: object
      description: >
        Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.
        
    - name: etag
      value: string
      description: >
        `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_jobs_patch"
    values={[
        { label: 'projects_jobs_patch', value: 'projects_jobs_patch' }
    ]}
>
<TabItem value="projects_jobs_patch">

Updates a specific job resource. Currently the only supported fields to update are `labels`.

```sql
UPDATE google.ml.jobs
SET 
data__jobId = '{{ jobId }}',
data__trainingInput = '{{ trainingInput }}',
data__predictionInput = '{{ predictionInput }}',
data__createTime = '{{ createTime }}',
data__startTime = '{{ startTime }}',
data__endTime = '{{ endTime }}',
data__state = '{{ state }}',
data__errorMessage = '{{ errorMessage }}',
data__trainingOutput = '{{ trainingOutput }}',
data__predictionOutput = '{{ predictionOutput }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
createTime,
endTime,
errorMessage,
etag,
jobId,
jobPosition,
labels,
predictionInput,
predictionOutput,
startTime,
state,
trainingInput,
trainingOutput;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_jobs_cancel"
    values={[
        { label: 'projects_jobs_cancel', value: 'projects_jobs_cancel' }
    ]}
>
<TabItem value="projects_jobs_cancel">

Cancels a running job.

```sql
EXEC google.ml.jobs.projects_jobs_cancel 
@projectsId='{{ projectsId }}' --required, 
@jobsId='{{ jobsId }}' --required;
```
</TabItem>
</Tabs>
