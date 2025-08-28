--- 
title: recent_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - recent_queries
  - logging
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

Creates, updates, deletes, gets or lists a <code>recent_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>recent_queries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.recent_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_recent_queries_list"
    values={[
        { label: 'projects_locations_recent_queries_list', value: 'projects_locations_recent_queries_list' },
        { label: 'organizations_locations_recent_queries_list', value: 'organizations_locations_recent_queries_list' },
        { label: 'folders_locations_recent_queries_list', value: 'folders_locations_recent_queries_list' },
        { label: 'billing_accounts_locations_recent_queries_list', value: 'billing_accounts_locations_recent_queries_list' }
    ]}
>
<TabItem value="projects_locations_recent_queries_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this query was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingQuery" /></td>
    <td><code>object</code></td>
    <td>Logging query that can be executed in Logs Explorer or via Logging API. (id: LoggingQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="opsAnalyticsQuery" /></td>
    <td><code>object</code></td>
    <td>Analytics query that can be executed in Log Analytics. (id: OpsAnalyticsQuery)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_recent_queries_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this query was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingQuery" /></td>
    <td><code>object</code></td>
    <td>Logging query that can be executed in Logs Explorer or via Logging API. (id: LoggingQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="opsAnalyticsQuery" /></td>
    <td><code>object</code></td>
    <td>Analytics query that can be executed in Log Analytics. (id: OpsAnalyticsQuery)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_recent_queries_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this query was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingQuery" /></td>
    <td><code>object</code></td>
    <td>Logging query that can be executed in Logs Explorer or via Logging API. (id: LoggingQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="opsAnalyticsQuery" /></td>
    <td><code>object</code></td>
    <td>Analytics query that can be executed in Log Analytics. (id: OpsAnalyticsQuery)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_recent_queries_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this query was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingQuery" /></td>
    <td><code>object</code></td>
    <td>Logging query that can be executed in Logs Explorer or via Logging API. (id: LoggingQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="opsAnalyticsQuery" /></td>
    <td><code>object</code></td>
    <td>Analytics query that can be executed in Log Analytics. (id: OpsAnalyticsQuery)</td>
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
    <td><a href="#projects_locations_recent_queries_list"><CopyableCode code="projects_locations_recent_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the RecentQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_recent_queries_list"><CopyableCode code="organizations_locations_recent_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the RecentQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#folders_locations_recent_queries_list"><CopyableCode code="folders_locations_recent_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the RecentQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_recent_queries_list"><CopyableCode code="billing_accounts_locations_recent_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the RecentQueries that were created by the user making the request.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="projects_locations_recent_queries_list"
    values={[
        { label: 'projects_locations_recent_queries_list', value: 'projects_locations_recent_queries_list' },
        { label: 'organizations_locations_recent_queries_list', value: 'organizations_locations_recent_queries_list' },
        { label: 'folders_locations_recent_queries_list', value: 'folders_locations_recent_queries_list' },
        { label: 'billing_accounts_locations_recent_queries_list', value: 'billing_accounts_locations_recent_queries_list' }
    ]}
>
<TabItem value="projects_locations_recent_queries_list">

Lists the RecentQueries that were created by the user making the request.

```sql
SELECT
name,
lastRunTime,
loggingQuery,
opsAnalyticsQuery
FROM google.logging.recent_queries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_recent_queries_list">

Lists the RecentQueries that were created by the user making the request.

```sql
SELECT
name,
lastRunTime,
loggingQuery,
opsAnalyticsQuery
FROM google.logging.recent_queries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="folders_locations_recent_queries_list">

Lists the RecentQueries that were created by the user making the request.

```sql
SELECT
name,
lastRunTime,
loggingQuery,
opsAnalyticsQuery
FROM google.logging.recent_queries
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_recent_queries_list">

Lists the RecentQueries that were created by the user making the request.

```sql
SELECT
name,
lastRunTime,
loggingQuery,
opsAnalyticsQuery
FROM google.logging.recent_queries
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
