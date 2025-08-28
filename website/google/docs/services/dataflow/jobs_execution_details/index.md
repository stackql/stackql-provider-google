--- 
title: jobs_execution_details
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs_execution_details
  - dataflow
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

Creates, updates, deletes, gets or lists a <code>jobs_execution_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs_execution_details</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.jobs_execution_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_jobs_get_execution_details"
    values={[
        { label: 'projects_locations_jobs_get_execution_details', value: 'projects_locations_jobs_get_execution_details' }
    ]}
>
<TabItem value="projects_locations_jobs_get_execution_details">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics for this stage.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Progress for this stage. Only applicable to Batch jobs. (id: ProgressTimeseries)</td>
</tr>
<tr>
    <td><CopyableCode code="stageId" /></td>
    <td><code>string</code></td>
    <td>ID of this stage</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Start time of this stage.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of this stage.</td>
</tr>
<tr>
    <td><CopyableCode code="stragglerSummary" /></td>
    <td><code>object</code></td>
    <td>Straggler summary for this stage. (id: StragglerSummary)</td>
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
    <td><a href="#projects_locations_jobs_get_execution_details"><CopyableCode code="projects_locations_jobs_get_execution_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
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
    defaultValue="projects_locations_jobs_get_execution_details"
    values={[
        { label: 'projects_locations_jobs_get_execution_details', value: 'projects_locations_jobs_get_execution_details' }
    ]}
>
<TabItem value="projects_locations_jobs_get_execution_details">

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

```sql
SELECT
endTime,
metrics,
progress,
stageId,
startTime,
state,
stragglerSummary
FROM google.dataflow.jobs_execution_details
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
