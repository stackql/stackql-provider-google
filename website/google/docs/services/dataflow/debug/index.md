--- 
title: debug
hide_title: false
hide_table_of_contents: false
keywords:
  - debug
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

Creates, updates, deletes, gets or lists a <code>debug</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>debug</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.debug" /></td></tr>
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
    <td><a href="#projects_jobs_debug_send_capture"><CopyableCode code="projects_jobs_debug_send_capture" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Send encoded debug capture data for component.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_debug_send_capture"><CopyableCode code="projects_locations_jobs_debug_send_capture" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Send encoded debug capture data for component.</td>
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
    defaultValue="projects_jobs_debug_send_capture"
    values={[
        { label: 'projects_jobs_debug_send_capture', value: 'projects_jobs_debug_send_capture' },
        { label: 'projects_locations_jobs_debug_send_capture', value: 'projects_locations_jobs_debug_send_capture' }
    ]}
>
<TabItem value="projects_jobs_debug_send_capture">

Send encoded debug capture data for component.

```sql
EXEC google.dataflow.debug.projects_jobs_debug_send_capture 
@projectId='{{ projectId }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"workerId": "{{ workerId }}", 
"componentId": "{{ componentId }}", 
"data": "{{ data }}", 
"dataFormat": "{{ dataFormat }}", 
"location": "{{ location }}"
}';
```
</TabItem>
<TabItem value="projects_locations_jobs_debug_send_capture">

Send encoded debug capture data for component.

```sql
EXEC google.dataflow.debug.projects_locations_jobs_debug_send_capture 
@projectId='{{ projectId }}' --required, 
@location='{{ location }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"workerId": "{{ workerId }}", 
"componentId": "{{ componentId }}", 
"data": "{{ data }}", 
"dataFormat": "{{ dataFormat }}", 
"location": "{{ location }}"
}';
```
</TabItem>
</Tabs>
