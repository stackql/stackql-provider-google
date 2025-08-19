--- 
title: debug_config
hide_title: false
hide_table_of_contents: false
keywords:
  - debug_config
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

Creates, updates, deletes, gets or lists a <code>debug_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>debug_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.debug_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_jobs_debug_get_config"
    values={[
        { label: 'projects_locations_jobs_debug_get_config', value: 'projects_locations_jobs_debug_get_config' },
        { label: 'projects_jobs_debug_get_config', value: 'projects_jobs_debug_get_config' }
    ]}
>
<TabItem value="projects_locations_jobs_debug_get_config">

Response to a get debug configuration request.

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
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>The encoded debug configuration for the requested component.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_jobs_debug_get_config">

Response to a get debug configuration request.

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
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>The encoded debug configuration for the requested component.</td>
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
    <td><a href="#projects_locations_jobs_debug_get_config"><CopyableCode code="projects_locations_jobs_debug_get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Get encoded debug configuration for component. Not cacheable.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_debug_get_config"><CopyableCode code="projects_jobs_debug_get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Get encoded debug configuration for component. Not cacheable.</td>
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
    defaultValue="projects_locations_jobs_debug_get_config"
    values={[
        { label: 'projects_locations_jobs_debug_get_config', value: 'projects_locations_jobs_debug_get_config' },
        { label: 'projects_jobs_debug_get_config', value: 'projects_jobs_debug_get_config' }
    ]}
>
<TabItem value="projects_locations_jobs_debug_get_config">

Get encoded debug configuration for component. Not cacheable.

```sql
SELECT
config
FROM google.dataflow.debug_config
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required;
```
</TabItem>
<TabItem value="projects_jobs_debug_get_config">

Get encoded debug configuration for component. Not cacheable.

```sql
SELECT
config
FROM google.dataflow.debug_config
WHERE projectId = '{{ projectId }}' -- required
AND jobId = '{{ jobId }}' -- required;
```
</TabItem>
</Tabs>
