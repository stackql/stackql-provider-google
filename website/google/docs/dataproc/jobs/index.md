--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - dataproc
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_regions_jobs_get"
    values={[
        { label: 'projects_regions_jobs_get', value: 'projects_regions_jobs_get' },
        { label: 'projects_regions_jobs_list', value: 'projects_regions_jobs_list' }
    ]}
>
<TabItem value="projects_regions_jobs_get">

A Dataproc job resource.

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
    <td><CopyableCode code="done" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="driverControlFilesUri" /></td>
    <td><code>string</code></td>
    <td>Output only. If present, the location of miscellaneous control files which can be used as part of job setup and handling. If not present, control files might be placed in the same location as driver_output_uri.</td>
</tr>
<tr>
    <td><CopyableCode code="driverOutputResourceUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A URI pointing to the location of the stdout of the job's driver program.</td>
</tr>
<tr>
    <td><CopyableCode code="driverSchedulingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Driver scheduling configuration. (id: DriverSchedulingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="flinkJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Flink job. (id: FlinkJob)</td>
</tr>
<tr>
    <td><CopyableCode code="hadoopJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Hadoop job. (id: HadoopJob)</td>
</tr>
<tr>
    <td><CopyableCode code="hiveJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Hive job. (id: HiveJob)</td>
</tr>
<tr>
    <td><CopyableCode code="jobUuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that might be reused over time.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.</td>
</tr>
<tr>
    <td><CopyableCode code="pigJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Pig job. (id: PigJob)</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>Required. Job information, including how, when, and where to run the job. (id: JobPlacement)</td>
</tr>
<tr>
    <td><CopyableCode code="prestoJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Presto job. (id: PrestoJob)</td>
</tr>
<tr>
    <td><CopyableCode code="pysparkJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a PySpark job. (id: PySparkJob)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>object</code></td>
    <td>Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id. (id: JobReference)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduling" /></td>
    <td><code>object</code></td>
    <td>Optional. Job scheduling configuration. (id: JobScheduling)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Spark job. (id: SparkJob)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkRJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a SparkR job. (id: SparkRJob)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkSqlJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a SparkSql job. (id: SparkSqlJob)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. The job status. Additional application-specific status information might be contained in the type_job and yarn_applications fields. (id: JobStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="statusHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. The previous job status.</td>
</tr>
<tr>
    <td><CopyableCode code="trinoJob" /></td>
    <td><code>object</code></td>
    <td>Optional. Job is a Trino job. (id: TrinoJob)</td>
</tr>
<tr>
    <td><CopyableCode code="yarnApplications" /></td>
    <td><code>array</code></td>
    <td>Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It might be changed before final release.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_regions_jobs_list">

A list of jobs in a project.

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
    <td>Output only. Jobs list.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Output only. List of jobs with kms_key-encrypted parameters that could not be decrypted. A response to a jobs.get request may indicate the reason for the decryption failure for a specific job.</td>
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
    <td><a href="#projects_regions_jobs_get"><CopyableCode code="projects_regions_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Gets the resource representation for a job in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_jobs_list"><CopyableCode code="projects_regions_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a>, <a href="#parameter-jobStateMatcher"><code>jobStateMatcher</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists regions/&#123;region&#125;/jobs in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_jobs_patch"><CopyableCode code="projects_regions_jobs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a job in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_jobs_delete"><CopyableCode code="projects_regions_jobs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.</td>
</tr>
<tr>
    <td><a href="#projects_regions_jobs_submit"><CopyableCode code="projects_regions_jobs_submit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a job to a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_regions_jobs_submit_as_operation"><CopyableCode code="projects_regions_jobs_submit_as_operation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits job to a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_regions_jobs_cancel"><CopyableCode code="projects_regions_jobs_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Starts a job cancellation request. To access the job resource after cancellation, call regions/&#123;region&#125;/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/&#123;region&#125;/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).</td>
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
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterName">
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobStateMatcher">
    <td><CopyableCode code="jobStateMatcher" /></td>
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
    defaultValue="projects_regions_jobs_get"
    values={[
        { label: 'projects_regions_jobs_get', value: 'projects_regions_jobs_get' },
        { label: 'projects_regions_jobs_list', value: 'projects_regions_jobs_list' }
    ]}
>
<TabItem value="projects_regions_jobs_get">

Gets the resource representation for a job in a project.

```sql
SELECT
done,
driverControlFilesUri,
driverOutputResourceUri,
driverSchedulingConfig,
flinkJob,
hadoopJob,
hiveJob,
jobUuid,
labels,
pigJob,
placement,
prestoJob,
pysparkJob,
reference,
scheduling,
sparkJob,
sparkRJob,
sparkSqlJob,
status,
statusHistory,
trinoJob,
yarnApplications
FROM google.dataproc.jobs
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND jobId = '{{ jobId }}' -- required;
```
</TabItem>
<TabItem value="projects_regions_jobs_list">

Lists regions/&#123;region&#125;/jobs in a project.

```sql
SELECT
jobs,
nextPageToken,
unreachable
FROM google.dataproc.jobs
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND clusterName = '{{ clusterName }}'
AND jobStateMatcher = '{{ jobStateMatcher }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_regions_jobs_patch"
    values={[
        { label: 'projects_regions_jobs_patch', value: 'projects_regions_jobs_patch' }
    ]}
>
<TabItem value="projects_regions_jobs_patch">

Updates a job in a project.

```sql
UPDATE google.dataproc.jobs
SET 
data__reference = '{{ reference }}',
data__placement = '{{ placement }}',
data__hadoopJob = '{{ hadoopJob }}',
data__sparkJob = '{{ sparkJob }}',
data__pysparkJob = '{{ pysparkJob }}',
data__hiveJob = '{{ hiveJob }}',
data__pigJob = '{{ pigJob }}',
data__sparkRJob = '{{ sparkRJob }}',
data__sparkSqlJob = '{{ sparkSqlJob }}',
data__prestoJob = '{{ prestoJob }}',
data__trinoJob = '{{ trinoJob }}',
data__flinkJob = '{{ flinkJob }}',
data__labels = '{{ labels }}',
data__scheduling = '{{ scheduling }}',
data__driverSchedulingConfig = '{{ driverSchedulingConfig }}'
WHERE 
projectId = '{{ projectId }}' --required
AND region = '{{ region }}' --required
AND jobId = '{{ jobId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
done,
driverControlFilesUri,
driverOutputResourceUri,
driverSchedulingConfig,
flinkJob,
hadoopJob,
hiveJob,
jobUuid,
labels,
pigJob,
placement,
prestoJob,
pysparkJob,
reference,
scheduling,
sparkJob,
sparkRJob,
sparkSqlJob,
status,
statusHistory,
trinoJob,
yarnApplications;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_regions_jobs_delete"
    values={[
        { label: 'projects_regions_jobs_delete', value: 'projects_regions_jobs_delete' }
    ]}
>
<TabItem value="projects_regions_jobs_delete">

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

```sql
DELETE FROM google.dataproc.jobs
WHERE projectId = '{{ projectId }}' --required
AND region = '{{ region }}' --required
AND jobId = '{{ jobId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_regions_jobs_submit"
    values={[
        { label: 'projects_regions_jobs_submit', value: 'projects_regions_jobs_submit' },
        { label: 'projects_regions_jobs_submit_as_operation', value: 'projects_regions_jobs_submit_as_operation' },
        { label: 'projects_regions_jobs_cancel', value: 'projects_regions_jobs_cancel' }
    ]}
>
<TabItem value="projects_regions_jobs_submit">

Submits a job to a cluster.

```sql
EXEC google.dataproc.jobs.projects_regions_jobs_submit 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"job": "{{ job }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="projects_regions_jobs_submit_as_operation">

Submits job to a cluster.

```sql
EXEC google.dataproc.jobs.projects_regions_jobs_submit_as_operation 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"job": "{{ job }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="projects_regions_jobs_cancel">

Starts a job cancellation request. To access the job resource after cancellation, call regions/&#123;region&#125;/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/&#123;region&#125;/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

```sql
EXEC google.dataproc.jobs.projects_regions_jobs_cancel 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@jobId='{{ jobId }}' --required;
```
</TabItem>
</Tabs>
