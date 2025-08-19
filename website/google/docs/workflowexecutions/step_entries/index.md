--- 
title: step_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - step_entries
  - workflowexecutions
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

Creates, updates, deletes, gets or lists a <code>step_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>step_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workflowexecutions.step_entries" /></td></tr>
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

An StepEntry contains debugging information for a step transition in a workflow execution.

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
    <td>Output only. The full resource name of the step entry. Each step entry has a unique entry ID, which is a monotonically increasing counter. Step entry names have the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workflows/&#123;workflow&#125;/executions/&#123;execution&#125;/stepEntries/&#123;step_entry&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the step entry.</td>
</tr>
<tr>
    <td><CopyableCode code="entryId" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The numeric ID of this step entry, used for navigation.</td>
</tr>
<tr>
    <td><CopyableCode code="exception" /></td>
    <td><code>object</code></td>
    <td>Output only. The exception thrown by the step entry. (id: Exception)</td>
</tr>
<tr>
    <td><CopyableCode code="navigationInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The NavigationInfo associated with this step. (id: NavigationInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="routine" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the routine this step entry belongs to. A routine name is the subworkflow name defined in the YAML source code. The top level routine name is `main`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the step entry.</td>
</tr>
<tr>
    <td><CopyableCode code="step" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the step this step entry belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="stepEntryMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. The StepEntryMetadata associated with this step. (id: StepEntryMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="stepType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the step this step entry belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recently updated time of the step entry.</td>
</tr>
<tr>
    <td><CopyableCode code="variableData" /></td>
    <td><code>object</code></td>
    <td>Output only. The VariableData associated with this step. (id: VariableData)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ExecutionHistory.ListStepEntries.

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
    <td>A token to retrieve next page of results. Pass this value in the ListStepEntriesRequest.page_token field in the subsequent call to `ListStepEntries` method to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="stepEntries" /></td>
    <td><code>array</code></td>
    <td>The list of entries.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Indicates the total number of StepEntries that matched the request filter. For running executions, this number shows the number of StepEntries that are executed thus far.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-stepEntriesId"><code>stepEntriesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a step entry.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-skip"><code>skip</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists step entries for the corresponding workflow execution. Returned entries are ordered by their create_time.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
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
<tr id="parameter-stepEntriesId">
    <td><CopyableCode code="stepEntriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workflowsId">
    <td><CopyableCode code="workflowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-skip">
    <td><CopyableCode code="skip" /></td>
    <td><code>integer (int32)</code></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a step entry.

```sql
SELECT
name,
createTime,
entryId,
exception,
navigationInfo,
routine,
state,
step,
stepEntryMetadata,
stepType,
updateTime,
variableData
FROM google.workflowexecutions.step_entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowsId = '{{ workflowsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND stepEntriesId = '{{ stepEntriesId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists step entries for the corresponding workflow execution. Returned entries are ordered by their create_time.

```sql
SELECT
nextPageToken,
stepEntries,
totalSize
FROM google.workflowexecutions.step_entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowsId = '{{ workflowsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND skip = '{{ skip }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
```
</TabItem>
</Tabs>
