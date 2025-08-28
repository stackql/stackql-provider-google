--- 
title: work_items
hide_title: false
hide_table_of_contents: false
keywords:
  - work_items
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

Creates, updates, deletes, gets or lists a <code>work_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>work_items</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.work_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_jobs_work_items_report_status"><CopyableCode code="projects_jobs_work_items_report_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Reports the status of dataflow WorkItems leased by a worker.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_work_items_lease"><CopyableCode code="projects_jobs_work_items_lease" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Leases a dataflow WorkItem to run.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_work_items_report_status"><CopyableCode code="projects_locations_jobs_work_items_report_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Reports the status of dataflow WorkItems leased by a worker.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_work_items_lease"><CopyableCode code="projects_locations_jobs_work_items_lease" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Leases a dataflow WorkItem to run.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_jobs_work_items_report_status"
    values={[
        { label: 'projects_jobs_work_items_report_status', value: 'projects_jobs_work_items_report_status' },
        { label: 'projects_jobs_work_items_lease', value: 'projects_jobs_work_items_lease' },
        { label: 'projects_locations_jobs_work_items_report_status', value: 'projects_locations_jobs_work_items_report_status' },
        { label: 'projects_locations_jobs_work_items_lease', value: 'projects_locations_jobs_work_items_lease' }
    ]}
>
<TabItem value="projects_jobs_work_items_report_status">

Reports the status of dataflow WorkItems leased by a worker.

```sql
EXEC google.dataflow.work_items.projects_jobs_work_items_report_status 
@projectId='{{ projectId }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"workerId": "{{ workerId }}", 
"workItemStatuses": "{{ workItemStatuses }}", 
"currentWorkerTime": "{{ currentWorkerTime }}", 
"location": "{{ location }}", 
"unifiedWorkerRequest": "{{ unifiedWorkerRequest }}", 
"projectNumber": "{{ projectNumber }}"
}';
```
</TabItem>
<TabItem value="projects_jobs_work_items_lease">

Leases a dataflow WorkItem to run.

```sql
EXEC google.dataflow.work_items.projects_jobs_work_items_lease 
@projectId='{{ projectId }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"workItemTypes": "{{ workItemTypes }}", 
"workerCapabilities": "{{ workerCapabilities }}", 
"requestedLeaseDuration": "{{ requestedLeaseDuration }}", 
"currentWorkerTime": "{{ currentWorkerTime }}", 
"workerId": "{{ workerId }}", 
"location": "{{ location }}", 
"unifiedWorkerRequest": "{{ unifiedWorkerRequest }}", 
"projectNumber": "{{ projectNumber }}"
}';
```
</TabItem>
<TabItem value="projects_locations_jobs_work_items_report_status">

Reports the status of dataflow WorkItems leased by a worker.

```sql
EXEC google.dataflow.work_items.projects_locations_jobs_work_items_report_status 
@projectId='{{ projectId }}' --required, 
@location='{{ location }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"workerId": "{{ workerId }}", 
"workItemStatuses": "{{ workItemStatuses }}", 
"currentWorkerTime": "{{ currentWorkerTime }}", 
"location": "{{ location }}", 
"unifiedWorkerRequest": "{{ unifiedWorkerRequest }}", 
"projectNumber": "{{ projectNumber }}"
}';
```
</TabItem>
<TabItem value="projects_locations_jobs_work_items_lease">

Leases a dataflow WorkItem to run.

```sql
EXEC google.dataflow.work_items.projects_locations_jobs_work_items_lease 
@projectId='{{ projectId }}' --required, 
@location='{{ location }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"workItemTypes": "{{ workItemTypes }}", 
"workerCapabilities": "{{ workerCapabilities }}", 
"requestedLeaseDuration": "{{ requestedLeaseDuration }}", 
"currentWorkerTime": "{{ currentWorkerTime }}", 
"workerId": "{{ workerId }}", 
"location": "{{ location }}", 
"unifiedWorkerRequest": "{{ unifiedWorkerRequest }}", 
"projectNumber": "{{ projectNumber }}"
}';
```
</TabItem>
</Tabs>
