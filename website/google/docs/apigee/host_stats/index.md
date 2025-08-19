--- 
title: host_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - host_stats
  - apigee
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

Creates, updates, deletes, gets or lists a <code>host_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>host_stats</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.host_stats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_host_stats_get"
    values={[
        { label: 'organizations_host_stats_get', value: 'organizations_host_stats_get' }
    ]}
>
<TabItem value="organizations_host_stats_get">

Encapsulates a `stats` response.

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
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>List of query results on the environment level.</td>
</tr>
<tr>
    <td><CopyableCode code="hosts" /></td>
    <td><code>array</code></td>
    <td>List of query results grouped by host.</td>
</tr>
<tr>
    <td><CopyableCode code="metaData" /></td>
    <td><code>object</code></td>
    <td>Metadata information. (id: GoogleCloudApigeeV1Metadata)</td>
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
    <td><a href="#organizations_host_stats_get"><CopyableCode code="organizations_host_stats_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-hostStatsId"><code>hostStatsId</code></a></td>
    <td><a href="#parameter-select"><code>select</code></a>, <a href="#parameter-timeUnit"><code>timeUnit</code></a>, <a href="#parameter-timeRange"><code>timeRange</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-sortby"><code>sortby</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-topk"><code>topk</code></a>, <a href="#parameter-tsAscending"><code>tsAscending</code></a>, <a href="#parameter-realtime"><code>realtime</code></a>, <a href="#parameter-tzo"><code>tzo</code></a>, <a href="#parameter-accuracy"><code>accuracy</code></a>, <a href="#parameter-envgroupHostname"><code>envgroupHostname</code></a></td>
    <td>Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.</td>
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
<tr id="parameter-hostStatsId">
    <td><CopyableCode code="hostStatsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-accuracy">
    <td><CopyableCode code="accuracy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-envgroupHostname">
    <td><CopyableCode code="envgroupHostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-realtime">
    <td><CopyableCode code="realtime" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-select">
    <td><CopyableCode code="select" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sortby">
    <td><CopyableCode code="sortby" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeRange">
    <td><CopyableCode code="timeRange" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeUnit">
    <td><CopyableCode code="timeUnit" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-topk">
    <td><CopyableCode code="topk" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tsAscending">
    <td><CopyableCode code="tsAscending" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-tzo">
    <td><CopyableCode code="tzo" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_host_stats_get"
    values={[
        { label: 'organizations_host_stats_get', value: 'organizations_host_stats_get' }
    ]}
>
<TabItem value="organizations_host_stats_get">

Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.

```sql
SELECT
environments,
hosts,
metaData
FROM google.apigee.host_stats
WHERE organizationsId = '{{ organizationsId }}' -- required
AND hostStatsId = '{{ hostStatsId }}' -- required
AND select = '{{ select }}'
AND timeUnit = '{{ timeUnit }}'
AND timeRange = '{{ timeRange }}'
AND filter = '{{ filter }}'
AND sort = '{{ sort }}'
AND sortby = '{{ sortby }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND topk = '{{ topk }}'
AND tsAscending = '{{ tsAscending }}'
AND realtime = '{{ realtime }}'
AND tzo = '{{ tzo }}'
AND accuracy = '{{ accuracy }}'
AND envgroupHostname = '{{ envgroupHostname }}';
```
</TabItem>
</Tabs>
