--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - transcoder
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.transcoder.jobs" /></td></tr>
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
    <td>The resource name of the job. Format: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/jobs/&#123;job&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="batchModePriority" /></td>
    <td><code>integer (int32)</code></td>
    <td>The processing priority of a batch job. This field can only be set for batch mode jobs. The default value is 0. This value cannot be negative. Higher values correspond to higher priorities for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for this job. (id: JobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the transcoding finished.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. An error object that describes the reason for the failure. This property is always present when ProcessingState is `FAILED`. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="fillContentGaps" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Insert silence and duplicate frames when timestamp gaps are detected in a given stream.</td>
</tr>
<tr>
    <td><CopyableCode code="inputUri" /></td>
    <td><code>string</code></td>
    <td>Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this job. You can use these to organize and group your jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`.</td>
</tr>
<tr>
    <td><CopyableCode code="optimization" /></td>
    <td><code>string</code></td>
    <td>Optional. The optimization strategy of the job. The default is `AUTODETECT`.</td>
</tr>
<tr>
    <td><CopyableCode code="outputUri" /></td>
    <td><code>string</code></td>
    <td>Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the transcoding started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="templateId" /></td>
    <td><code>string</code></td>
    <td>Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `&#123;job_template_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="ttlAfterCompletionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.</td>
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
    <td>The resource name of the job. Format: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/jobs/&#123;job&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="batchModePriority" /></td>
    <td><code>integer (int32)</code></td>
    <td>The processing priority of a batch job. This field can only be set for batch mode jobs. The default value is 0. This value cannot be negative. Higher values correspond to higher priorities for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for this job. (id: JobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the transcoding finished.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. An error object that describes the reason for the failure. This property is always present when ProcessingState is `FAILED`. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="fillContentGaps" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Insert silence and duplicate frames when timestamp gaps are detected in a given stream.</td>
</tr>
<tr>
    <td><CopyableCode code="inputUri" /></td>
    <td><code>string</code></td>
    <td>Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this job. You can use these to organize and group your jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`.</td>
</tr>
<tr>
    <td><CopyableCode code="optimization" /></td>
    <td><code>string</code></td>
    <td>Optional. The optimization strategy of the job. The default is `AUTODETECT`.</td>
</tr>
<tr>
    <td><CopyableCode code="outputUri" /></td>
    <td><code>string</code></td>
    <td>Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the transcoding started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="templateId" /></td>
    <td><code>string</code></td>
    <td>Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `&#123;job_template_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="ttlAfterCompletionDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Returns the job data.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists jobs in the specified region.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a job in the specified region.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Deletes a job.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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

Returns the job data.

```sql
SELECT
name,
batchModePriority,
config,
createTime,
endTime,
error,
fillContentGaps,
inputUri,
labels,
mode,
optimization,
outputUri,
startTime,
state,
templateId,
ttlAfterCompletionDays
FROM google.transcoder.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists jobs in the specified region.

```sql
SELECT
name,
batchModePriority,
config,
createTime,
endTime,
error,
fillContentGaps,
inputUri,
labels,
mode,
optimization,
outputUri,
startTime,
state,
templateId,
ttlAfterCompletionDays
FROM google.transcoder.jobs
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

Creates a job in the specified region.

```sql
INSERT INTO google.transcoder.jobs (
data__name,
data__inputUri,
data__outputUri,
data__templateId,
data__config,
data__ttlAfterCompletionDays,
data__labels,
data__mode,
data__batchModePriority,
data__optimization,
data__fillContentGaps,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ inputUri }}',
'{{ outputUri }}',
'{{ templateId }}',
'{{ config }}',
{{ ttlAfterCompletionDays }},
'{{ labels }}',
'{{ mode }}',
{{ batchModePriority }},
'{{ optimization }}',
{{ fillContentGaps }},
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
batchModePriority,
config,
createTime,
endTime,
error,
fillContentGaps,
inputUri,
labels,
mode,
optimization,
outputUri,
startTime,
state,
templateId,
ttlAfterCompletionDays
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
    - name: locationsId
      value: string
      description: Required parameter for the jobs resource.
    - name: name
      value: string
      description: >
        The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}`
        
    - name: inputUri
      value: string
      description: >
        Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
        
    - name: outputUri
      value: string
      description: >
        Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
        
    - name: templateId
      value: string
      description: >
        Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}`
        
    - name: config
      value: object
      description: >
        The configuration for this job.
        
    - name: ttlAfterCompletionDays
      value: integer
      description: >
        Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
        
    - name: labels
      value: object
      description: >
        The labels associated with this job. You can use these to organize and group your jobs.
        
    - name: mode
      value: string
      description: >
        The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`.
        
      valid_values: ['PROCESSING_MODE_UNSPECIFIED', 'PROCESSING_MODE_INTERACTIVE', 'PROCESSING_MODE_BATCH']
    - name: batchModePriority
      value: integer
      description: >
        The processing priority of a batch job. This field can only be set for batch mode jobs. The default value is 0. This value cannot be negative. Higher values correspond to higher priorities for the job.
        
    - name: optimization
      value: string
      description: >
        Optional. The optimization strategy of the job. The default is `AUTODETECT`.
        
      valid_values: ['OPTIMIZATION_STRATEGY_UNSPECIFIED', 'AUTODETECT', 'DISABLED']
    - name: fillContentGaps
      value: boolean
      description: >
        Optional. Insert silence and duplicate frames when timestamp gaps are detected in a given stream.
        
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

Deletes a job.

```sql
DELETE FROM google.transcoder.jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
</Tabs>
