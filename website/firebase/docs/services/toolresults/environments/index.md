--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - toolresults
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="completionTime" /></td>
    <td><code>object</code></td>
    <td>Output only. The time when the Environment status was set to complete. This value will be set automatically when state transitions to COMPLETE. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>object</code></td>
    <td>Output only. The time when the Environment was created. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensionValue" /></td>
    <td><code>array</code></td>
    <td>Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>Output only. An Environment id.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentResult" /></td>
    <td><code>object</code></td>
    <td>Merged result of the environment. (id: MergedResult)</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>Output only. An Execution id.</td>
</tr>
<tr>
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td>Output only. A History id.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Output only. A Project id.</td>
</tr>
<tr>
    <td><CopyableCode code="resultsStorage" /></td>
    <td><code>object</code></td>
    <td>The location where output files are stored in the user bucket. (id: ResultsStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="shardSummaries" /></td>
    <td><code>array</code></td>
    <td>Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="completionTime" /></td>
    <td><code>object</code></td>
    <td>Output only. The time when the Environment status was set to complete. This value will be set automatically when state transitions to COMPLETE. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>object</code></td>
    <td>Output only. The time when the Environment was created. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensionValue" /></td>
    <td><code>array</code></td>
    <td>Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>Output only. An Environment id.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentResult" /></td>
    <td><code>object</code></td>
    <td>Merged result of the environment. (id: MergedResult)</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>Output only. An Execution id.</td>
</tr>
<tr>
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td>Output only. A History id.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Output only. A Project id.</td>
</tr>
<tr>
    <td><CopyableCode code="resultsStorage" /></td>
    <td><code>object</code></td>
    <td>The location where output files are stored in the user bucket. (id: ResultsStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="shardSummaries" /></td>
    <td><code>array</code></td>
    <td>Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a></td>
    <td></td>
    <td>Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist</td>
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
<tr id="parameter-environmentId">
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-executionId">
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-historyId">
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist

```sql
SELECT
completionTime,
creationTime,
dimensionValue,
displayName,
environmentId,
environmentResult,
executionId,
historyId,
projectId,
resultsStorage,
shardSummaries
FROM firebase.toolresults.environments
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND environmentId = '{{ environmentId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist

```sql
SELECT
completionTime,
creationTime,
dimensionValue,
displayName,
environmentId,
environmentResult,
executionId,
historyId,
projectId,
resultsStorage,
shardSummaries
FROM firebase.toolresults.environments
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
