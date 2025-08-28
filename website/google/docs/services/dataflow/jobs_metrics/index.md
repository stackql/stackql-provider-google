--- 
title: jobs_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs_metrics
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

Creates, updates, deletes, gets or lists a <code>jobs_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.jobs_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_jobs_get_metrics"
    values={[
        { label: 'projects_locations_jobs_get_metrics', value: 'projects_locations_jobs_get_metrics' },
        { label: 'projects_jobs_get_metrics', value: 'projects_jobs_get_metrics' }
    ]}
>
<TabItem value="projects_locations_jobs_get_metrics">

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
    <td><CopyableCode code="metricTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp as of which metric values are current.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>All metrics for this job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_jobs_get_metrics">

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
    <td><CopyableCode code="metricTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp as of which metric values are current.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>All metrics for this job.</td>
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
    <td><a href="#projects_locations_jobs_get_metrics"><CopyableCode code="projects_locations_jobs_get_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a></td>
    <td>Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_get_metrics"><CopyableCode code="projects_jobs_get_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.</td>
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
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_jobs_get_metrics"
    values={[
        { label: 'projects_locations_jobs_get_metrics', value: 'projects_locations_jobs_get_metrics' },
        { label: 'projects_jobs_get_metrics', value: 'projects_jobs_get_metrics' }
    ]}
>
<TabItem value="projects_locations_jobs_get_metrics">

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

```sql
SELECT
metricTime,
metrics
FROM google.dataflow.jobs_metrics
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required
AND startTime = '{{ startTime }}';
```
</TabItem>
<TabItem value="projects_jobs_get_metrics">

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

```sql
SELECT
metricTime,
metrics
FROM google.dataflow.jobs_metrics
WHERE projectId = '{{ projectId }}' -- required
AND jobId = '{{ jobId }}' -- required
AND startTime = '{{ startTime }}'
AND location = '{{ location }}';
```
</TabItem>
</Tabs>
