--- 
title: evaluation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_jobs
  - datalabeling
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

Creates, updates, deletes, gets or lists an <code>evaluation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.evaluation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_evaluation_jobs_get"
    values={[
        { label: 'projects_evaluation_jobs_get', value: 'projects_evaluation_jobs_get' },
        { label: 'projects_evaluation_jobs_list', value: 'projects_evaluation_jobs_list' }
    ]}
>
<TabItem value="projects_evaluation_jobs_get">

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
    <td>Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/&#123;project_id&#125;/evaluationJobs/ &#123;evaluation_job_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSpecSet" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/&#123;project_id&#125;/annotationSpecSets/&#123;annotation_spec_set_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="attempts" /></td>
    <td><code>array</code></td>
    <td>Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp of when this evaluation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Required. Description of the job. The description can be up to 25,000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationJobConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration details for the evaluation job. (id: GoogleCloudDatalabelingV1beta1EvaluationJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labelMissingGroundTruth" /></td>
    <td><code>boolean</code></td>
    <td>Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="modelVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/&#123;project_id&#125;/models/&#123;model_name&#125;/versions/&#123;version_name&#125;" There can only be one evaluation job per model version.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the current state of the job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_evaluation_jobs_list">

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
    <td>Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/&#123;project_id&#125;/evaluationJobs/ &#123;evaluation_job_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSpecSet" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/&#123;project_id&#125;/annotationSpecSets/&#123;annotation_spec_set_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="attempts" /></td>
    <td><code>array</code></td>
    <td>Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp of when this evaluation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Required. Description of the job. The description can be up to 25,000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationJobConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration details for the evaluation job. (id: GoogleCloudDatalabelingV1beta1EvaluationJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labelMissingGroundTruth" /></td>
    <td><code>boolean</code></td>
    <td>Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.</td>
</tr>
<tr>
    <td><CopyableCode code="modelVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/&#123;project_id&#125;/models/&#123;model_name&#125;/versions/&#123;version_name&#125;" There can only be one evaluation job per model version.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the current state of the job.</td>
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
    <td><a href="#projects_evaluation_jobs_get"><CopyableCode code="projects_evaluation_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-evaluationJobsId"><code>evaluationJobsId</code></a></td>
    <td></td>
    <td>Gets an evaluation job by resource name.</td>
</tr>
<tr>
    <td><a href="#projects_evaluation_jobs_list"><CopyableCode code="projects_evaluation_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all evaluation jobs within a project with possible filters. Pagination is supported.</td>
</tr>
<tr>
    <td><a href="#projects_evaluation_jobs_create"><CopyableCode code="projects_evaluation_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td> Creates an evaluation job.</td>
</tr>
<tr>
    <td><a href="#projects_evaluation_jobs_patch"><CopyableCode code="projects_evaluation_jobs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-evaluationJobsId"><code>evaluationJobsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.</td>
</tr>
<tr>
    <td><a href="#projects_evaluation_jobs_delete"><CopyableCode code="projects_evaluation_jobs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-evaluationJobsId"><code>evaluationJobsId</code></a></td>
    <td></td>
    <td>Stops and deletes an evaluation job.</td>
</tr>
<tr>
    <td><a href="#projects_evaluation_jobs_pause"><CopyableCode code="projects_evaluation_jobs_pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-evaluationJobsId"><code>evaluationJobsId</code></a></td>
    <td></td>
    <td>Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.</td>
</tr>
<tr>
    <td><a href="#projects_evaluation_jobs_resume"><CopyableCode code="projects_evaluation_jobs_resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-evaluationJobsId"><code>evaluationJobsId</code></a></td>
    <td></td>
    <td>Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.</td>
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
<tr id="parameter-evaluationJobsId">
    <td><CopyableCode code="evaluationJobsId" /></td>
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
    defaultValue="projects_evaluation_jobs_get"
    values={[
        { label: 'projects_evaluation_jobs_get', value: 'projects_evaluation_jobs_get' },
        { label: 'projects_evaluation_jobs_list', value: 'projects_evaluation_jobs_list' }
    ]}
>
<TabItem value="projects_evaluation_jobs_get">

Gets an evaluation job by resource name.

```sql
SELECT
name,
annotationSpecSet,
attempts,
createTime,
description,
evaluationJobConfig,
labelMissingGroundTruth,
modelVersion,
schedule,
state
FROM google.datalabeling.evaluation_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND evaluationJobsId = '{{ evaluationJobsId }}' -- required;
```
</TabItem>
<TabItem value="projects_evaluation_jobs_list">

Lists all evaluation jobs within a project with possible filters. Pagination is supported.

```sql
SELECT
name,
annotationSpecSet,
attempts,
createTime,
description,
evaluationJobConfig,
labelMissingGroundTruth,
modelVersion,
schedule,
state
FROM google.datalabeling.evaluation_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_evaluation_jobs_create"
    values={[
        { label: 'projects_evaluation_jobs_create', value: 'projects_evaluation_jobs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_evaluation_jobs_create">

 Creates an evaluation job.

```sql
INSERT INTO google.datalabeling.evaluation_jobs (
data__job,
projectsId
)
SELECT 
'{{ job }}',
'{{ projectsId }}'
RETURNING
name,
annotationSpecSet,
attempts,
createTime,
description,
evaluationJobConfig,
labelMissingGroundTruth,
modelVersion,
schedule,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: evaluation_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the evaluation_jobs resource.
    - name: job
      value: object
      description: >
        Required. The evaluation job to create.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_evaluation_jobs_patch"
    values={[
        { label: 'projects_evaluation_jobs_patch', value: 'projects_evaluation_jobs_patch' }
    ]}
>
<TabItem value="projects_evaluation_jobs_patch">

Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.

```sql
UPDATE google.datalabeling.evaluation_jobs
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__state = '{{ state }}',
data__schedule = '{{ schedule }}',
data__modelVersion = '{{ modelVersion }}',
data__evaluationJobConfig = '{{ evaluationJobConfig }}',
data__annotationSpecSet = '{{ annotationSpecSet }}',
data__labelMissingGroundTruth = {{ labelMissingGroundTruth }},
data__attempts = '{{ attempts }}',
data__createTime = '{{ createTime }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND evaluationJobsId = '{{ evaluationJobsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
annotationSpecSet,
attempts,
createTime,
description,
evaluationJobConfig,
labelMissingGroundTruth,
modelVersion,
schedule,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_evaluation_jobs_delete"
    values={[
        { label: 'projects_evaluation_jobs_delete', value: 'projects_evaluation_jobs_delete' }
    ]}
>
<TabItem value="projects_evaluation_jobs_delete">

Stops and deletes an evaluation job.

```sql
DELETE FROM google.datalabeling.evaluation_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND evaluationJobsId = '{{ evaluationJobsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_evaluation_jobs_pause"
    values={[
        { label: 'projects_evaluation_jobs_pause', value: 'projects_evaluation_jobs_pause' },
        { label: 'projects_evaluation_jobs_resume', value: 'projects_evaluation_jobs_resume' }
    ]}
>
<TabItem value="projects_evaluation_jobs_pause">

Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.

```sql
EXEC google.datalabeling.evaluation_jobs.projects_evaluation_jobs_pause 
@projectsId='{{ projectsId }}' --required, 
@evaluationJobsId='{{ evaluationJobsId }}' --required;
```
</TabItem>
<TabItem value="projects_evaluation_jobs_resume">

Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.

```sql
EXEC google.datalabeling.evaluation_jobs.projects_evaluation_jobs_resume 
@projectsId='{{ projectsId }}' --required, 
@evaluationJobsId='{{ evaluationJobsId }}' --required;
```
</TabItem>
</Tabs>
