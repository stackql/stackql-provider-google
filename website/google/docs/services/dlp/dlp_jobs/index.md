--- 
title: dlp_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dlp_jobs
  - dlp
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

Creates, updates, deletes, gets or lists a <code>dlp_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dlp_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.dlp_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_dlp_jobs_get"
    values={[
        { label: 'projects_locations_dlp_jobs_get', value: 'projects_locations_dlp_jobs_get' },
        { label: 'projects_locations_dlp_jobs_list', value: 'projects_locations_dlp_jobs_list' },
        { label: 'projects_dlp_jobs_get', value: 'projects_dlp_jobs_get' },
        { label: 'organizations_locations_dlp_jobs_list', value: 'organizations_locations_dlp_jobs_list' },
        { label: 'projects_dlp_jobs_list', value: 'projects_dlp_jobs_list' }
    ]}
>
<TabItem value="projects_locations_dlp_jobs_get">

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
    <td>The server-assigned name.</td>
</tr>
<tr>
    <td><CopyableCode code="actionDetails" /></td>
    <td><code>array</code></td>
    <td>Events that should occur after the job has completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job finished.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A stream of errors encountered running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectDetails" /></td>
    <td><code>object</code></td>
    <td>Results from inspecting a data source. (id: GooglePrivacyDlpV2InspectDataSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTriggerName" /></td>
    <td><code>string</code></td>
    <td>If created by a job trigger, the resource name of the trigger that instantiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModified" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was last modified by the system.</td>
</tr>
<tr>
    <td><CopyableCode code="riskDetails" /></td>
    <td><code>object</code></td>
    <td>Results from analyzing risk of a data source. (id: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_dlp_jobs_list">

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
    <td>The server-assigned name.</td>
</tr>
<tr>
    <td><CopyableCode code="actionDetails" /></td>
    <td><code>array</code></td>
    <td>Events that should occur after the job has completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job finished.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A stream of errors encountered running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectDetails" /></td>
    <td><code>object</code></td>
    <td>Results from inspecting a data source. (id: GooglePrivacyDlpV2InspectDataSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTriggerName" /></td>
    <td><code>string</code></td>
    <td>If created by a job trigger, the resource name of the trigger that instantiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModified" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was last modified by the system.</td>
</tr>
<tr>
    <td><CopyableCode code="riskDetails" /></td>
    <td><code>object</code></td>
    <td>Results from analyzing risk of a data source. (id: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_dlp_jobs_get">

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
    <td>The server-assigned name.</td>
</tr>
<tr>
    <td><CopyableCode code="actionDetails" /></td>
    <td><code>array</code></td>
    <td>Events that should occur after the job has completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job finished.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A stream of errors encountered running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectDetails" /></td>
    <td><code>object</code></td>
    <td>Results from inspecting a data source. (id: GooglePrivacyDlpV2InspectDataSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTriggerName" /></td>
    <td><code>string</code></td>
    <td>If created by a job trigger, the resource name of the trigger that instantiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModified" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was last modified by the system.</td>
</tr>
<tr>
    <td><CopyableCode code="riskDetails" /></td>
    <td><code>object</code></td>
    <td>Results from analyzing risk of a data source. (id: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_dlp_jobs_list">

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
    <td>The server-assigned name.</td>
</tr>
<tr>
    <td><CopyableCode code="actionDetails" /></td>
    <td><code>array</code></td>
    <td>Events that should occur after the job has completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job finished.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A stream of errors encountered running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectDetails" /></td>
    <td><code>object</code></td>
    <td>Results from inspecting a data source. (id: GooglePrivacyDlpV2InspectDataSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTriggerName" /></td>
    <td><code>string</code></td>
    <td>If created by a job trigger, the resource name of the trigger that instantiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModified" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was last modified by the system.</td>
</tr>
<tr>
    <td><CopyableCode code="riskDetails" /></td>
    <td><code>object</code></td>
    <td>Results from analyzing risk of a data source. (id: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_dlp_jobs_list">

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
    <td>The server-assigned name.</td>
</tr>
<tr>
    <td><CopyableCode code="actionDetails" /></td>
    <td><code>array</code></td>
    <td>Events that should occur after the job has completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job finished.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A stream of errors encountered running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectDetails" /></td>
    <td><code>object</code></td>
    <td>Results from inspecting a data source. (id: GooglePrivacyDlpV2InspectDataSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTriggerName" /></td>
    <td><code>string</code></td>
    <td>If created by a job trigger, the resource name of the trigger that instantiated the job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModified" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job was last modified by the system.</td>
</tr>
<tr>
    <td><CopyableCode code="riskDetails" /></td>
    <td><code>object</code></td>
    <td>Results from analyzing risk of a data source. (id: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the job started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of job.</td>
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
    <td><a href="#projects_locations_dlp_jobs_get"><CopyableCode code="projects_locations_dlp_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dlp_jobs_list"><CopyableCode code="projects_locations_dlp_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_dlp_jobs_get"><CopyableCode code="projects_dlp_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_dlp_jobs_list"><CopyableCode code="organizations_locations_dlp_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_dlp_jobs_list"><CopyableCode code="projects_dlp_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dlp_jobs_create"><CopyableCode code="projects_locations_dlp_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.</td>
</tr>
<tr>
    <td><a href="#projects_dlp_jobs_create"><CopyableCode code="projects_dlp_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dlp_jobs_delete"><CopyableCode code="projects_locations_dlp_jobs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_dlp_jobs_delete"><CopyableCode code="projects_dlp_jobs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dlp_jobs_cancel"><CopyableCode code="projects_locations_dlp_jobs_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dlp_jobs_hybrid_inspect"><CopyableCode code="projects_locations_dlp_jobs_hybrid_inspect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Inspect hybrid content and store findings to a job. To review the findings, inspect the job. Inspection will occur asynchronously.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dlp_jobs_finish"><CopyableCode code="projects_locations_dlp_jobs_finish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.</td>
</tr>
<tr>
    <td><a href="#projects_dlp_jobs_cancel"><CopyableCode code="projects_dlp_jobs_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-dlpJobsId"><code>dlpJobsId</code></a></td>
    <td></td>
    <td>Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.</td>
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
<tr id="parameter-dlpJobsId">
    <td><CopyableCode code="dlpJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
<tr id="parameter-locationId">
    <td><CopyableCode code="locationId" /></td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_dlp_jobs_get"
    values={[
        { label: 'projects_locations_dlp_jobs_get', value: 'projects_locations_dlp_jobs_get' },
        { label: 'projects_locations_dlp_jobs_list', value: 'projects_locations_dlp_jobs_list' },
        { label: 'projects_dlp_jobs_get', value: 'projects_dlp_jobs_get' },
        { label: 'organizations_locations_dlp_jobs_list', value: 'organizations_locations_dlp_jobs_list' },
        { label: 'projects_dlp_jobs_list', value: 'projects_dlp_jobs_list' }
    ]}
>
<TabItem value="projects_locations_dlp_jobs_get">

Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
SELECT
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
FROM google.dlp.dlp_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dlpJobsId = '{{ dlpJobsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_dlp_jobs_list">

Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
SELECT
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
FROM google.dlp.dlp_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND type = '{{ type }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="projects_dlp_jobs_get">

Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
SELECT
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
FROM google.dlp.dlp_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND dlpJobsId = '{{ dlpJobsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_dlp_jobs_list">

Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
SELECT
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
FROM google.dlp.dlp_jobs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND type = '{{ type }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="projects_dlp_jobs_list">

Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
SELECT
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
FROM google.dlp.dlp_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND type = '{{ type }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_dlp_jobs_create"
    values={[
        { label: 'projects_locations_dlp_jobs_create', value: 'projects_locations_dlp_jobs_create' },
        { label: 'projects_dlp_jobs_create', value: 'projects_dlp_jobs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_dlp_jobs_create">

Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

```sql
INSERT INTO google.dlp.dlp_jobs (
data__inspectJob,
data__riskJob,
data__jobId,
data__locationId,
projectsId,
locationsId
)
SELECT 
'{{ inspectJob }}',
'{{ riskJob }}',
'{{ jobId }}',
'{{ locationId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
;
```
</TabItem>
<TabItem value="projects_dlp_jobs_create">

Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.

```sql
INSERT INTO google.dlp.dlp_jobs (
data__inspectJob,
data__riskJob,
data__jobId,
data__locationId,
projectsId
)
SELECT 
'{{ inspectJob }}',
'{{ riskJob }}',
'{{ jobId }}',
'{{ locationId }}',
'{{ projectsId }}'
RETURNING
name,
actionDetails,
createTime,
endTime,
errors,
inspectDetails,
jobTriggerName,
lastModified,
riskDetails,
startTime,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dlp_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the dlp_jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the dlp_jobs resource.
    - name: inspectJob
      value: object
      description: >
        An inspection job scans a storage repository for InfoTypes.
        
    - name: riskJob
      value: object
      description: >
        A risk analysis job calculates re-identification risk metrics for a BigQuery table.
        
    - name: jobId
      value: string
      description: >
        The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
        
    - name: locationId
      value: string
      description: >
        Deprecated. This field has no effect.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_dlp_jobs_delete"
    values={[
        { label: 'projects_locations_dlp_jobs_delete', value: 'projects_locations_dlp_jobs_delete' },
        { label: 'projects_dlp_jobs_delete', value: 'projects_dlp_jobs_delete' }
    ]}
>
<TabItem value="projects_locations_dlp_jobs_delete">

Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
DELETE FROM google.dlp.dlp_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dlpJobsId = '{{ dlpJobsId }}' --required;
```
</TabItem>
<TabItem value="projects_dlp_jobs_delete">

Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
DELETE FROM google.dlp.dlp_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND dlpJobsId = '{{ dlpJobsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_dlp_jobs_cancel"
    values={[
        { label: 'projects_locations_dlp_jobs_cancel', value: 'projects_locations_dlp_jobs_cancel' },
        { label: 'projects_locations_dlp_jobs_hybrid_inspect', value: 'projects_locations_dlp_jobs_hybrid_inspect' },
        { label: 'projects_locations_dlp_jobs_finish', value: 'projects_locations_dlp_jobs_finish' },
        { label: 'projects_dlp_jobs_cancel', value: 'projects_dlp_jobs_cancel' }
    ]}
>
<TabItem value="projects_locations_dlp_jobs_cancel">

Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
EXEC google.dlp.dlp_jobs.projects_locations_dlp_jobs_cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dlpJobsId='{{ dlpJobsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_dlp_jobs_hybrid_inspect">

Inspect hybrid content and store findings to a job. To review the findings, inspect the job. Inspection will occur asynchronously.

```sql
EXEC google.dlp.dlp_jobs.projects_locations_dlp_jobs_hybrid_inspect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dlpJobsId='{{ dlpJobsId }}' --required 
@@json=
'{
"hybridItem": "{{ hybridItem }}"
}';
```
</TabItem>
<TabItem value="projects_locations_dlp_jobs_finish">

Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.

```sql
EXEC google.dlp.dlp_jobs.projects_locations_dlp_jobs_finish 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dlpJobsId='{{ dlpJobsId }}' --required;
```
</TabItem>
<TabItem value="projects_dlp_jobs_cancel">

Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.

```sql
EXEC google.dlp.dlp_jobs.projects_dlp_jobs_cancel 
@projectsId='{{ projectsId }}' --required, 
@dlpJobsId='{{ dlpJobsId }}' --required;
```
</TabItem>
</Tabs>
