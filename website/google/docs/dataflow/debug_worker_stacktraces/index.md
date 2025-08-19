--- 
title: debug_worker_stacktraces
hide_title: false
hide_table_of_contents: false
keywords:
  - debug_worker_stacktraces
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

Creates, updates, deletes, gets or lists a <code>debug_worker_stacktraces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>debug_worker_stacktraces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.debug_worker_stacktraces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_jobs_debug_get_worker_stacktraces"
    values={[
        { label: 'projects_locations_jobs_debug_get_worker_stacktraces', value: 'projects_locations_jobs_debug_get_worker_stacktraces' }
    ]}
>
<TabItem value="projects_locations_jobs_debug_get_worker_stacktraces">

Response to get worker stacktraces from debug capture.

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
    <td><CopyableCode code="sdks" /></td>
    <td><code>array</code></td>
    <td>Repeated as unified worker may have multiple SDK processes.</td>
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
    <td><a href="#projects_locations_jobs_debug_get_worker_stacktraces"><CopyableCode code="projects_locations_jobs_debug_get_worker_stacktraces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Get worker stacktraces from debug capture.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_jobs_debug_get_worker_stacktraces"
    values={[
        { label: 'projects_locations_jobs_debug_get_worker_stacktraces', value: 'projects_locations_jobs_debug_get_worker_stacktraces' }
    ]}
>
<TabItem value="projects_locations_jobs_debug_get_worker_stacktraces">

Get worker stacktraces from debug capture.

```sql
SELECT
sdks
FROM google.dataflow.debug_worker_stacktraces
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required;
```
</TabItem>
</Tabs>
