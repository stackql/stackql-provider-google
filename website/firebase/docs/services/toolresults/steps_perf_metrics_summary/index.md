--- 
title: steps_perf_metrics_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - steps_perf_metrics_summary
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

Creates, updates, deletes, gets or lists a <code>steps_perf_metrics_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>steps_perf_metrics_summary</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.steps_perf_metrics_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_perf_metrics_summary"
    values={[
        { label: 'get_perf_metrics_summary', value: 'get_perf_metrics_summary' }
    ]}
>
<TabItem value="get_perf_metrics_summary">

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
    <td><CopyableCode code="appStartTime" /></td>
    <td><code>object</code></td>
    <td> (id: AppStartTime)</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>A tool results execution ID. @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="graphicsStats" /></td>
    <td><code>object</code></td>
    <td>Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run. (id: GraphicsStats)</td>
</tr>
<tr>
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td>A tool results history ID. @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="perfEnvironment" /></td>
    <td><code>object</code></td>
    <td>Describes the environment in which the performance metrics were collected (id: PerfEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="perfMetrics" /></td>
    <td><code>array</code></td>
    <td>Set of resource collected</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The cloud project @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td>A tool results step ID. @OutputOnly</td>
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
    <td><a href="#get_perf_metrics_summary"><CopyableCode code="get_perf_metrics_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td></td>
    <td>Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist</td>
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
<tr id="parameter-stepId">
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_perf_metrics_summary"
    values={[
        { label: 'get_perf_metrics_summary', value: 'get_perf_metrics_summary' }
    ]}
>
<TabItem value="get_perf_metrics_summary">

Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

```sql
SELECT
appStartTime,
executionId,
graphicsStats,
historyId,
perfEnvironment,
perfMetrics,
projectId,
stepId
FROM firebase.toolresults.steps_perf_metrics_summary
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND stepId = '{{ stepId }}' -- required;
```
</TabItem>
</Tabs>
