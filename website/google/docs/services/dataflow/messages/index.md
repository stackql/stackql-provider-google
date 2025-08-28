--- 
title: messages
hide_title: false
hide_table_of_contents: false
keywords:
  - messages
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

Creates, updates, deletes, gets or lists a <code>messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>messages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_jobs_messages_list"
    values={[
        { label: 'projects_locations_jobs_messages_list', value: 'projects_locations_jobs_messages_list' },
        { label: 'projects_jobs_messages_list', value: 'projects_jobs_messages_list' }
    ]}
>
<TabItem value="projects_locations_jobs_messages_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="messageImportance" /></td>
    <td><code>string</code></td>
    <td>Importance level of the message.</td>
</tr>
<tr>
    <td><CopyableCode code="messageText" /></td>
    <td><code>string</code></td>
    <td>The text of the message.</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp of the message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_jobs_messages_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="messageImportance" /></td>
    <td><code>string</code></td>
    <td>Importance level of the message.</td>
</tr>
<tr>
    <td><CopyableCode code="messageText" /></td>
    <td><code>string</code></td>
    <td>The text of the message.</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp of the message.</td>
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
    <td><a href="#projects_locations_jobs_messages_list"><CopyableCode code="projects_locations_jobs_messages_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-minimumImportance"><code>minimumImportance</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a></td>
    <td>Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_messages_list"><CopyableCode code="projects_jobs_messages_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-minimumImportance"><code>minimumImportance</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-minimumImportance">
    <td><CopyableCode code="minimumImportance" /></td>
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
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_jobs_messages_list"
    values={[
        { label: 'projects_locations_jobs_messages_list', value: 'projects_locations_jobs_messages_list' },
        { label: 'projects_jobs_messages_list', value: 'projects_jobs_messages_list' }
    ]}
>
<TabItem value="projects_locations_jobs_messages_list">

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

```sql
SELECT
id,
messageImportance,
messageText,
time
FROM google.dataflow.messages
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required
AND minimumImportance = '{{ minimumImportance }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}';
```
</TabItem>
<TabItem value="projects_jobs_messages_list">

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

```sql
SELECT
id,
messageImportance,
messageText,
time
FROM google.dataflow.messages
WHERE projectId = '{{ projectId }}' -- required
AND jobId = '{{ jobId }}' -- required
AND minimumImportance = '{{ minimumImportance }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND location = '{{ location }}';
```
</TabItem>
</Tabs>
