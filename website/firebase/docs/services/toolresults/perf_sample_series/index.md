--- 
title: perf_sample_series
hide_title: false
hide_table_of_contents: false
keywords:
  - perf_sample_series
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

Creates, updates, deletes, gets or lists a <code>perf_sample_series</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>perf_sample_series</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.perf_sample_series" /></td></tr>
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
    <td><CopyableCode code="basicPerfSampleSeries" /></td>
    <td><code>object</code></td>
    <td>Basic series represented by a line chart (id: BasicPerfSampleSeries)</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>A tool results execution ID. @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td>A tool results history ID. @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The cloud project @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="sampleSeriesId" /></td>
    <td><code>string</code></td>
    <td>A sample series id @OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td>A tool results step ID. @OutputOnly</td>
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
    <td><CopyableCode code="perfSampleSeries" /></td>
    <td><code>array</code></td>
    <td>The resulting PerfSampleSeries sorted by id</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a>, <a href="#parameter-sampleSeriesId"><code>sampleSeriesId</code></a></td>
    <td></td>
    <td>Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td></td>
    <td>Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist</td>
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
<tr id="parameter-sampleSeriesId">
    <td><CopyableCode code="sampleSeriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stepId">
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

```sql
SELECT
basicPerfSampleSeries,
executionId,
historyId,
projectId,
sampleSeriesId,
stepId
FROM firebase.toolresults.perf_sample_series
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND stepId = '{{ stepId }}' -- required
AND sampleSeriesId = '{{ sampleSeriesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

```sql
SELECT
perfSampleSeries
FROM firebase.toolresults.perf_sample_series
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND stepId = '{{ stepId }}' -- required
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

```sql
INSERT INTO firebase.toolresults.perf_sample_series (
data__projectId,
data__historyId,
data__executionId,
data__stepId,
data__sampleSeriesId,
data__basicPerfSampleSeries,
projectId,
historyId,
executionId,
stepId
)
SELECT 
'{{ projectId }}',
'{{ historyId }}',
'{{ executionId }}',
'{{ stepId }}',
'{{ sampleSeriesId }}',
'{{ basicPerfSampleSeries }}',
'{{ projectId }}',
'{{ historyId }}',
'{{ executionId }}',
'{{ stepId }}'
RETURNING
basicPerfSampleSeries,
executionId,
historyId,
projectId,
sampleSeriesId,
stepId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: perf_sample_series
  props:
    - name: projectId
      value: string
      description: Required parameter for the perf_sample_series resource.
    - name: historyId
      value: string
      description: Required parameter for the perf_sample_series resource.
    - name: executionId
      value: string
      description: Required parameter for the perf_sample_series resource.
    - name: stepId
      value: string
      description: Required parameter for the perf_sample_series resource.
    - name: projectId
      value: string
      description: >
        The cloud project @OutputOnly
        
    - name: historyId
      value: string
      description: >
        A tool results history ID. @OutputOnly
        
    - name: executionId
      value: string
      description: >
        A tool results execution ID. @OutputOnly
        
    - name: stepId
      value: string
      description: >
        A tool results step ID. @OutputOnly
        
    - name: sampleSeriesId
      value: string
      description: >
        A sample series id @OutputOnly
        
    - name: basicPerfSampleSeries
      value: object
      description: >
        Basic series represented by a line chart
        
```
</TabItem>
</Tabs>
