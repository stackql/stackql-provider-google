--- 
title: results
hide_title: false
hide_table_of_contents: false
keywords:
  - results
  - policysimulator
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

Creates, updates, deletes, gets or lists a <code>results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.policysimulator.results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_replays_results_list"
    values={[
        { label: 'projects_locations_replays_results_list', value: 'projects_locations_replays_results_list' },
        { label: 'folders_locations_replays_results_list', value: 'folders_locations_replays_results_list' },
        { label: 'organizations_locations_replays_results_list', value: 'organizations_locations_replays_results_list' }
    ]}
>
<TabItem value="projects_locations_replays_results_list">

Response message for Simulator.ListReplayResults.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="replayResults" /></td>
    <td><code>array</code></td>
    <td>The results of running a Replay.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_replays_results_list">

Response message for Simulator.ListReplayResults.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="replayResults" /></td>
    <td><code>array</code></td>
    <td>The results of running a Replay.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_replays_results_list">

Response message for Simulator.ListReplayResults.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="replayResults" /></td>
    <td><code>array</code></td>
    <td>The results of running a Replay.</td>
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
    <td><a href="#projects_locations_replays_results_list"><CopyableCode code="projects_locations_replays_results_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-replaysId"><code>replaysId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the results of running a Replay.</td>
</tr>
<tr>
    <td><a href="#folders_locations_replays_results_list"><CopyableCode code="folders_locations_replays_results_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-replaysId"><code>replaysId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the results of running a Replay.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_replays_results_list"><CopyableCode code="organizations_locations_replays_results_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-replaysId"><code>replaysId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the results of running a Replay.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
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
<tr id="parameter-replaysId">
    <td><CopyableCode code="replaysId" /></td>
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
    defaultValue="projects_locations_replays_results_list"
    values={[
        { label: 'projects_locations_replays_results_list', value: 'projects_locations_replays_results_list' },
        { label: 'folders_locations_replays_results_list', value: 'folders_locations_replays_results_list' },
        { label: 'organizations_locations_replays_results_list', value: 'organizations_locations_replays_results_list' }
    ]}
>
<TabItem value="projects_locations_replays_results_list">

Lists the results of running a Replay.

```sql
SELECT
nextPageToken,
replayResults
FROM google.policysimulator.results
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND replaysId = '{{ replaysId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_locations_replays_results_list">

Lists the results of running a Replay.

```sql
SELECT
nextPageToken,
replayResults
FROM google.policysimulator.results
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND replaysId = '{{ replaysId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_locations_replays_results_list">

Lists the results of running a Replay.

```sql
SELECT
nextPageToken,
replayResults
FROM google.policysimulator.results
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND replaysId = '{{ replaysId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
