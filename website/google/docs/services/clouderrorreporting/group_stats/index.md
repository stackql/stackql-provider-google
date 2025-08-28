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
    <td><CopyableCode code="affectedServices" /></td>
    <td><code>array</code></td>
    <td>Service contexts with a non-zero error count for the given filter criteria. This list can be truncated if multiple services are affected. Refer to `num_affected_services` for the total count.</td>
</tr>
<tr>
    <td><CopyableCode code="affectedUsersCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Approximate number of affected users in the given group that match the filter criteria. Users are distinguished by data in the ErrorContext of the individual error events, such as their login name or their remote IP address in case of HTTP requests. The number of affected users can be zero even if the number of errors is non-zero if no data was provided from which the affected user could be deduced. Users are counted based on data in the request context that was provided in the error report. If more users are implicitly affected, such as due to a crash of the whole service, this is not reflected here.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>string (int64)</code></td>
    <td>Approximate total number of events in the given group that match the filter criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="firstSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Approximate first occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>object</code></td>
    <td>Group data that is independent of the filter criteria. (id: ErrorGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Approximate last occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="numAffectedServices" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of services with a non-zero error count for the given filter criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="representative" /></td>
    <td><code>object</code></td>
    <td>An arbitrary event that is chosen as representative for the whole group. The representative event is intended to be used as a quick preview for the whole group. Events in the group are usually sufficiently similar to each other such that showing an arbitrary representative provides insight into the characteristics of the group as a whole. (id: ErrorEvent)</td>
</tr>
<tr>
    <td><CopyableCode code="timedCounts" /></td>
    <td><code>array</code></td>
    <td>Approximate number of occurrences over time. Timed counts returned by ListGroups are guaranteed to be: - Inside the requested time interval - Non-overlapping, and - Ordered by ascending time.</td>
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
affectedServices,
affectedUsersCount,
count,
firstSeenTime,
group,
lastSeenTime,
numAffectedServices,
representative,
timedCounts
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
