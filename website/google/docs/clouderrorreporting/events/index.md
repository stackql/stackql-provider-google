--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>events</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouderrorreporting.events" /></td></tr>
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

Contains a set of requested error events.

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
    <td><CopyableCode code="errorEvents" /></td>
    <td><code>array</code></td>
    <td>The error events which match the given request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="timeRangeBegin" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp specifies the start time to which the request was restricted.</td>
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
    <td><a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-serviceFilter.service"><code>serviceFilter.service</code></a>, <a href="#parameter-serviceFilter.version"><code>serviceFilter.version</code></a>, <a href="#parameter-serviceFilter.resourceType"><code>serviceFilter.resourceType</code></a>, <a href="#parameter-timeRange.period"><code>timeRange.period</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the specified events.</td>
</tr>
<tr>
    <td><a href="#delete_events"><CopyableCode code="delete_events" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Deletes all error events of a given project.</td>
</tr>
<tr>
    <td><a href="#report"><CopyableCode code="report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/&#123;projectName&#125;/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a service built on Cloud Logging and can analyze log entries when all of the following are true: * Customer-managed encryption keys (CMEK) are disabled on the log bucket. * The log bucket satisfies one of the following: * The log bucket is stored in the same project where the logs originated. * The logs were routed to a project, and then that project stored those logs in a log bucket that it owns.</td>
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
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
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

Lists the specified events.

```sql
SELECT
errorEvents,
nextPageToken,
timeRangeBegin
FROM google.clouderrorreporting.events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND groupId = '{{ groupId }}'
AND serviceFilter.service = '{{ serviceFilter.service }}'
AND serviceFilter.version = '{{ serviceFilter.version }}'
AND serviceFilter.resourceType = '{{ serviceFilter.resourceType }}'
AND timeRange.period = '{{ timeRange.period }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_events"
    values={[
        { label: 'delete_events', value: 'delete_events' }
    ]}
>
<TabItem value="delete_events">

Deletes all error events of a given project.

```sql
DELETE FROM google.clouderrorreporting.events
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="report"
    values={[
        { label: 'report', value: 'report' }
    ]}
>
<TabItem value="report">

Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/&#123;projectName&#125;/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a service built on Cloud Logging and can analyze log entries when all of the following are true: * Customer-managed encryption keys (CMEK) are disabled on the log bucket. * The log bucket satisfies one of the following: * The log bucket is stored in the same project where the logs originated. * The logs were routed to a project, and then that project stored those logs in a log bucket that it owns.

```sql
EXEC google.clouderrorreporting.events.report 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"eventTime": "{{ eventTime }}", 
"serviceContext": "{{ serviceContext }}", 
"message": "{{ message }}", 
"context": "{{ context }}"
}';
```
</TabItem>
</Tabs>
