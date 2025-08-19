--- 
title: group_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - group_stats
  - clouderrorreporting
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

Creates, updates, deletes, gets or lists a <code>group_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>group_stats</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouderrorreporting.group_stats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Contains a set of requested error group stats.

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
    <td><CopyableCode code="errorGroupStats" /></td>
    <td><code>array</code></td>
    <td>The error group stats which match the given request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="timeRangeBegin" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp specifies the start time to which the request was restricted. The start time is set based on the requested time range. It may be adjusted to a later time if a project has exceeded the storage quota and older data has been deleted.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-serviceFilter.service"><code>serviceFilter.service</code></a>, <a href="#parameter-serviceFilter.version"><code>serviceFilter.version</code></a>, <a href="#parameter-serviceFilter.resourceType"><code>serviceFilter.resourceType</code></a>, <a href="#parameter-timeRange.period"><code>timeRange.period</code></a>, <a href="#parameter-timedCountDuration"><code>timedCountDuration</code></a>, <a href="#parameter-alignment"><code>alignment</code></a>, <a href="#parameter-alignmentTime"><code>alignmentTime</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the specified groups.</td>
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
<tr id="parameter-alignment">
    <td><CopyableCode code="alignment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-alignmentTime">
    <td><CopyableCode code="alignmentTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
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
<tr id="parameter-serviceFilter.resourceType">
    <td><CopyableCode code="serviceFilter.resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceFilter.service">
    <td><CopyableCode code="serviceFilter.service" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceFilter.version">
    <td><CopyableCode code="serviceFilter.version" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeRange.period">
    <td><CopyableCode code="timeRange.period" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timedCountDuration">
    <td><CopyableCode code="timedCountDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the specified groups.

```sql
SELECT
errorGroupStats,
nextPageToken,
timeRangeBegin
FROM google.clouderrorreporting.group_stats
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND groupId = '{{ groupId }}'
AND serviceFilter.service = '{{ serviceFilter.service }}'
AND serviceFilter.version = '{{ serviceFilter.version }}'
AND serviceFilter.resourceType = '{{ serviceFilter.resourceType }}'
AND timeRange.period = '{{ timeRange.period }}'
AND timedCountDuration = '{{ timedCountDuration }}'
AND alignment = '{{ alignment }}'
AND alignmentTime = '{{ alignmentTime }}'
AND order = '{{ order }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
