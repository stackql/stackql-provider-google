--- 
title: optimized_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - optimized_stats
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

Creates, updates, deletes, gets or lists an <code>optimized_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>optimized_stats</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.optimized_stats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_optimized_stats_get"
    values={[
        { label: 'organizations_environments_optimized_stats_get', value: 'organizations_environments_optimized_stats_get' }
    ]}
>
<TabItem value="organizations_environments_optimized_stats_get">

Encapsulates a response format for JavaScript Optimized Scenario.

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
    <td><CopyableCode code="Response" /></td>
    <td><code>object</code></td>
    <td>Wraps the `stats` response for JavaScript Optimized Scenario with a response key. For example: ```&#123; "Response": &#123; "TimeUnit": [], "metaData": &#123; "errors": [], "notices": [ "Source:Postgres", "Table used: edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query served by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] &#125;, "resultTruncated": false, "stats": &#123; "data": [ &#123; "identifier": &#123; "names": [ "apiproxy" ], "values": [ "sirjee" ] &#125;, "metric": [ &#123; "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] &#125;, &#123; "env": "prod", "name": "sum(is_error)", "values": [ 36.0 ] &#125; ] &#125; ] &#125; &#125; &#125;``` (id: GoogleCloudApigeeV1OptimizedStatsResponse)</td>
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
    <td><a href="#organizations_environments_optimized_stats_get"><CopyableCode code="organizations_environments_optimized_stats_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-optimizedStatsId"><code>optimizedStatsId</code></a></td>
    <td><a href="#parameter-select"><code>select</code></a>, <a href="#parameter-timeUnit"><code>timeUnit</code></a>, <a href="#parameter-timeRange"><code>timeRange</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-sortby"><code>sortby</code></a>, <a href="#parameter-aggTable"><code>aggTable</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-topk"><code>topk</code></a>, <a href="#parameter-tsAscending"><code>tsAscending</code></a>, <a href="#parameter-realtime"><code>realtime</code></a>, <a href="#parameter-sonar"><code>sonar</code></a>, <a href="#parameter-tzo"><code>tzo</code></a>, <a href="#parameter-accuracy"><code>accuracy</code></a></td>
    <td>Similar to GetStats except that the response is less verbose.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-optimizedStatsId">
    <td><CopyableCode code="optimizedStatsId" /></td>
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
<tr id="parameter-aggTable">
    <td><CopyableCode code="aggTable" /></td>
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
<tr id="parameter-sonar">
    <td><CopyableCode code="sonar" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="organizations_environments_optimized_stats_get"
    values={[
        { label: 'organizations_environments_optimized_stats_get', value: 'organizations_environments_optimized_stats_get' }
    ]}
>
<TabItem value="organizations_environments_optimized_stats_get">

Similar to GetStats except that the response is less verbose.

```sql
SELECT
Response
FROM google.apigee.optimized_stats
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND optimizedStatsId = '{{ optimizedStatsId }}' -- required
AND select = '{{ select }}'
AND timeUnit = '{{ timeUnit }}'
AND timeRange = '{{ timeRange }}'
AND filter = '{{ filter }}'
AND sort = '{{ sort }}'
AND sortby = '{{ sortby }}'
AND aggTable = '{{ aggTable }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND topk = '{{ topk }}'
AND tsAscending = '{{ tsAscending }}'
AND realtime = '{{ realtime }}'
AND sonar = '{{ sonar }}'
AND tzo = '{{ tzo }}'
AND accuracy = '{{ accuracy }}';
```
</TabItem>
</Tabs>
