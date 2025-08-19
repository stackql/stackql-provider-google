--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_tasks_jobs_get"
    values={[
        { label: 'projects_locations_lakes_tasks_jobs_get', value: 'projects_locations_lakes_tasks_jobs_get' },
        { label: 'projects_locations_lakes_tasks_jobs_list', value: 'projects_locations_lakes_tasks_jobs_list' },
        { label: 'projects_locations_data_scans_jobs_get', value: 'projects_locations_data_scans_jobs_get' },
        { label: 'projects_locations_data_scans_jobs_list', value: 'projects_locations_data_scans_jobs_list' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_jobs_get">

A job represents an instance of a task.

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
    <td>Output only. The relative resource name of the job, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/tasks/&#123;task_id&#125;/jobs/&#123;job_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="executionSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Spec related to how a task is executed. (id: GoogleCloudDataplexV1TaskExecutionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Output only. User-defined labels for the task.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="retryCount" /></td>
    <td><code>integer (uint32)</code></td>
    <td>Output only. The number of times the job has been retried (excluding the initial attempt).</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Output only. The underlying service running a job.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceJob" /></td>
    <td><code>string</code></td>
    <td>Output only. The full resource name for the job run under a particular service.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Execution state for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger" /></td>
    <td><code>string</code></td>
    <td>Output only. Job execution trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_tasks_jobs_list">

List jobs response.

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
    <td>Jobs under a given task.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_scans_jobs_get">

A DataScanJob represents an instance of DataScan execution.

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
    <td>Output only. Identifier. The relative resource name of the DataScanJob, of the form: projects/&#123;project&#125;/locations/&#123;location_id&#125;/dataScans/&#123;datascan_id&#125;/jobs/&#123;job_id&#125;, where project refers to a project_id or project_number and location_id refers to a Google Cloud region.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataScanJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataDiscoveryResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of a data discovery scan. (id: GoogleCloudDataplexV1DataDiscoveryResult)</td>
</tr>
<tr>
    <td><CopyableCode code="dataDiscoverySpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Settings for a data discovery scan. (id: GoogleCloudDataplexV1DataDiscoverySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataProfileResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of a data profile scan. (id: GoogleCloudDataplexV1DataProfileResult)</td>
</tr>
<tr>
    <td><CopyableCode code="dataProfileSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Settings for a data profile scan. (id: GoogleCloudDataplexV1DataProfileSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataQualityResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of a data quality scan. (id: GoogleCloudDataplexV1DataQualityResult)</td>
</tr>
<tr>
    <td><CopyableCode code="dataQualitySpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Settings for a data quality scan. (id: GoogleCloudDataplexV1DataQualitySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataScanJob ended.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataScanJob was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Execution state for the DataScanJob.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the parent DataScan.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the DataScanJob.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_scans_jobs_list">

List DataScanJobs response.

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
    <td><CopyableCode code="dataScanJobs" /></td>
    <td><code>array</code></td>
    <td>DataScanJobs (BASIC view only) under a given dataScan.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
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
    <td><a href="#projects_locations_lakes_tasks_jobs_get"><CopyableCode code="projects_locations_lakes_tasks_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Get job resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_jobs_list"><CopyableCode code="projects_locations_lakes_tasks_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Jobs under the given task.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_jobs_get"><CopyableCode code="projects_locations_data_scans_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a DataScanJob resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_jobs_list"><CopyableCode code="projects_locations_data_scans_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists DataScanJobs under the given DataScan.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_tasks_jobs_cancel"><CopyableCode code="projects_locations_lakes_tasks_jobs_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Cancel jobs running for the task resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_scans_jobs_generate_data_quality_rules"><CopyableCode code="projects_locations_data_scans_jobs_generate_data_quality_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataScansId"><code>dataScansId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.</td>
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
<tr id="parameter-dataScansId">
    <td><CopyableCode code="dataScansId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobsId">
    <td><CopyableCode code="jobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_tasks_jobs_get"
    values={[
        { label: 'projects_locations_lakes_tasks_jobs_get', value: 'projects_locations_lakes_tasks_jobs_get' },
        { label: 'projects_locations_lakes_tasks_jobs_list', value: 'projects_locations_lakes_tasks_jobs_list' },
        { label: 'projects_locations_data_scans_jobs_get', value: 'projects_locations_data_scans_jobs_get' },
        { label: 'projects_locations_data_scans_jobs_list', value: 'projects_locations_data_scans_jobs_list' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_jobs_get">

Get job resource.

```sql
SELECT
name,
endTime,
executionSpec,
labels,
message,
retryCount,
service,
serviceJob,
startTime,
state,
trigger,
uid
FROM google.dataplex.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND tasksId = '{{ tasksId }}' -- required
AND jobsId = '{{ jobsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_lakes_tasks_jobs_list">

Lists Jobs under the given task.

```sql
SELECT
jobs,
nextPageToken
FROM google.dataplex.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND tasksId = '{{ tasksId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_data_scans_jobs_get">

Gets a DataScanJob resource.

```sql
SELECT
name,
createTime,
dataDiscoveryResult,
dataDiscoverySpec,
dataProfileResult,
dataProfileSpec,
dataQualityResult,
dataQualitySpec,
endTime,
message,
startTime,
state,
type,
uid
FROM google.dataplex.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataScansId = '{{ dataScansId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_locations_data_scans_jobs_list">

Lists DataScanJobs under the given DataScan.

```sql
SELECT
dataScanJobs,
nextPageToken
FROM google.dataplex.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataScansId = '{{ dataScansId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_lakes_tasks_jobs_cancel"
    values={[
        { label: 'projects_locations_lakes_tasks_jobs_cancel', value: 'projects_locations_lakes_tasks_jobs_cancel' },
        { label: 'projects_locations_data_scans_jobs_generate_data_quality_rules', value: 'projects_locations_data_scans_jobs_generate_data_quality_rules' }
    ]}
>
<TabItem value="projects_locations_lakes_tasks_jobs_cancel">

Cancel jobs running for the task resource.

```sql
EXEC google.dataplex.jobs.projects_locations_lakes_tasks_jobs_cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@lakesId='{{ lakesId }}' --required, 
@tasksId='{{ tasksId }}' --required, 
@jobsId='{{ jobsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_scans_jobs_generate_data_quality_rules">

Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.

```sql
EXEC google.dataplex.jobs.projects_locations_data_scans_jobs_generate_data_quality_rules 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataScansId='{{ dataScansId }}' --required, 
@jobsId='{{ jobsId }}' --required;
```
</TabItem>
</Tabs>
