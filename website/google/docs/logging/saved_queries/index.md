--- 
title: saved_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - saved_queries
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

Creates, updates, deletes, gets or lists a <code>saved_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>saved_queries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.saved_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_saved_queries_get"
    values={[
        { label: 'projects_locations_saved_queries_get', value: 'projects_locations_saved_queries_get' },
        { label: 'organizations_locations_saved_queries_get', value: 'organizations_locations_saved_queries_get' },
        { label: 'folders_locations_saved_queries_get', value: 'folders_locations_saved_queries_get' },
        { label: 'billing_accounts_locations_saved_queries_get', value: 'billing_accounts_locations_saved_queries_get' },
        { label: 'projects_locations_saved_queries_list', value: 'projects_locations_saved_queries_list' },
        { label: 'organizations_locations_saved_queries_list', value: 'organizations_locations_saved_queries_list' },
        { label: 'folders_locations_saved_queries_list', value: 'folders_locations_saved_queries_list' },
        { label: 'billing_accounts_locations_saved_queries_list', value: 'billing_accounts_locations_saved_queries_list' }
    ]}
>
<TabItem value="projects_locations_saved_queries_get">

Describes a query that has been saved by a user.

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
    <td>Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human readable description of the saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user specified title for the SavedQuery.</td>
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
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Required. The visibility status of this query, which determines its ownership.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_saved_queries_get">

Describes a query that has been saved by a user.

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
    <td>Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human readable description of the saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user specified title for the SavedQuery.</td>
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
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Required. The visibility status of this query, which determines its ownership.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_saved_queries_get">

Describes a query that has been saved by a user.

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
    <td>Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human readable description of the saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user specified title for the SavedQuery.</td>
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
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Required. The visibility status of this query, which determines its ownership.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_get">

Describes a query that has been saved by a user.

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
    <td>Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human readable description of the saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user specified title for the SavedQuery.</td>
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
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the saved query was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Required. The visibility status of this query, which determines its ownership.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_saved_queries_list">

The response from ListSavedQueries.

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
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="savedQueries" /></td>
    <td><code>array</code></td>
    <td>A list of saved queries.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_saved_queries_list">

The response from ListSavedQueries.

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
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="savedQueries" /></td>
    <td><code>array</code></td>
    <td>A list of saved queries.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_saved_queries_list">

The response from ListSavedQueries.

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
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="savedQueries" /></td>
    <td><code>array</code></td>
    <td>A list of saved queries.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_list">

The response from ListSavedQueries.

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
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
<tr>
    <td><CopyableCode code="savedQueries" /></td>
    <td><code>array</code></td>
    <td>A list of saved queries.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.</td>
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
    <td><a href="#projects_locations_saved_queries_get"><CopyableCode code="projects_locations_saved_queries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Returns all data associated with the requested query.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_saved_queries_get"><CopyableCode code="organizations_locations_saved_queries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Returns all data associated with the requested query.</td>
</tr>
<tr>
    <td><a href="#folders_locations_saved_queries_get"><CopyableCode code="folders_locations_saved_queries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Returns all data associated with the requested query.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_saved_queries_get"><CopyableCode code="billing_accounts_locations_saved_queries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Returns all data associated with the requested query.</td>
</tr>
<tr>
    <td><a href="#projects_locations_saved_queries_list"><CopyableCode code="projects_locations_saved_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the SavedQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_saved_queries_list"><CopyableCode code="organizations_locations_saved_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the SavedQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#folders_locations_saved_queries_list"><CopyableCode code="folders_locations_saved_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the SavedQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_saved_queries_list"><CopyableCode code="billing_accounts_locations_saved_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the SavedQueries that were created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#projects_locations_saved_queries_create"><CopyableCode code="projects_locations_saved_queries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-savedQueryId"><code>savedQueryId</code></a></td>
    <td>Creates a new SavedQuery for the user making the request.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_saved_queries_create"><CopyableCode code="organizations_locations_saved_queries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-savedQueryId"><code>savedQueryId</code></a></td>
    <td>Creates a new SavedQuery for the user making the request.</td>
</tr>
<tr>
    <td><a href="#folders_locations_saved_queries_create"><CopyableCode code="folders_locations_saved_queries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-savedQueryId"><code>savedQueryId</code></a></td>
    <td>Creates a new SavedQuery for the user making the request.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_saved_queries_create"><CopyableCode code="billing_accounts_locations_saved_queries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-savedQueryId"><code>savedQueryId</code></a></td>
    <td>Creates a new SavedQuery for the user making the request.</td>
</tr>
<tr>
    <td><a href="#projects_locations_saved_queries_patch"><CopyableCode code="projects_locations_saved_queries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing SavedQuery.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_saved_queries_patch"><CopyableCode code="organizations_locations_saved_queries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing SavedQuery.</td>
</tr>
<tr>
    <td><a href="#folders_locations_saved_queries_patch"><CopyableCode code="folders_locations_saved_queries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing SavedQuery.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_saved_queries_patch"><CopyableCode code="billing_accounts_locations_saved_queries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing SavedQuery.</td>
</tr>
<tr>
    <td><a href="#projects_locations_saved_queries_delete"><CopyableCode code="projects_locations_saved_queries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Deletes an existing SavedQuery that was created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_saved_queries_delete"><CopyableCode code="organizations_locations_saved_queries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Deletes an existing SavedQuery that was created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#folders_locations_saved_queries_delete"><CopyableCode code="folders_locations_saved_queries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Deletes an existing SavedQuery that was created by the user making the request.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_saved_queries_delete"><CopyableCode code="billing_accounts_locations_saved_queries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-savedQueriesId"><code>savedQueriesId</code></a></td>
    <td></td>
    <td>Deletes an existing SavedQuery that was created by the user making the request.</td>
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
<tr id="parameter-savedQueriesId">
    <td><CopyableCode code="savedQueriesId" /></td>
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
<tr id="parameter-savedQueryId">
    <td><CopyableCode code="savedQueryId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_saved_queries_get"
    values={[
        { label: 'projects_locations_saved_queries_get', value: 'projects_locations_saved_queries_get' },
        { label: 'organizations_locations_saved_queries_get', value: 'organizations_locations_saved_queries_get' },
        { label: 'folders_locations_saved_queries_get', value: 'folders_locations_saved_queries_get' },
        { label: 'billing_accounts_locations_saved_queries_get', value: 'billing_accounts_locations_saved_queries_get' },
        { label: 'projects_locations_saved_queries_list', value: 'projects_locations_saved_queries_list' },
        { label: 'organizations_locations_saved_queries_list', value: 'organizations_locations_saved_queries_list' },
        { label: 'folders_locations_saved_queries_list', value: 'folders_locations_saved_queries_list' },
        { label: 'billing_accounts_locations_saved_queries_list', value: 'billing_accounts_locations_saved_queries_list' }
    ]}
>
<TabItem value="projects_locations_saved_queries_get">

Returns all data associated with the requested query.

```sql
SELECT
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
FROM google.logging.saved_queries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND savedQueriesId = '{{ savedQueriesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_saved_queries_get">

Returns all data associated with the requested query.

```sql
SELECT
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
FROM google.logging.saved_queries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND savedQueriesId = '{{ savedQueriesId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_saved_queries_get">

Returns all data associated with the requested query.

```sql
SELECT
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
FROM google.logging.saved_queries
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND savedQueriesId = '{{ savedQueriesId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_get">

Returns all data associated with the requested query.

```sql
SELECT
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
FROM google.logging.saved_queries
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND savedQueriesId = '{{ savedQueriesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_saved_queries_list">

Lists the SavedQueries that were created by the user making the request.

```sql
SELECT
nextPageToken,
savedQueries,
unreachable
FROM google.logging.saved_queries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_saved_queries_list">

Lists the SavedQueries that were created by the user making the request.

```sql
SELECT
nextPageToken,
savedQueries,
unreachable
FROM google.logging.saved_queries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="folders_locations_saved_queries_list">

Lists the SavedQueries that were created by the user making the request.

```sql
SELECT
nextPageToken,
savedQueries,
unreachable
FROM google.logging.saved_queries
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_list">

Lists the SavedQueries that were created by the user making the request.

```sql
SELECT
nextPageToken,
savedQueries,
unreachable
FROM google.logging.saved_queries
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_saved_queries_create"
    values={[
        { label: 'projects_locations_saved_queries_create', value: 'projects_locations_saved_queries_create' },
        { label: 'organizations_locations_saved_queries_create', value: 'organizations_locations_saved_queries_create' },
        { label: 'folders_locations_saved_queries_create', value: 'folders_locations_saved_queries_create' },
        { label: 'billing_accounts_locations_saved_queries_create', value: 'billing_accounts_locations_saved_queries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_saved_queries_create">

Creates a new SavedQuery for the user making the request.

```sql
INSERT INTO google.logging.saved_queries (
data__displayName,
data__description,
data__loggingQuery,
data__opsAnalyticsQuery,
data__visibility,
projectsId,
locationsId,
savedQueryId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ loggingQuery }}',
'{{ opsAnalyticsQuery }}',
'{{ visibility }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ savedQueryId }}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
;
```
</TabItem>
<TabItem value="organizations_locations_saved_queries_create">

Creates a new SavedQuery for the user making the request.

```sql
INSERT INTO google.logging.saved_queries (
data__displayName,
data__description,
data__loggingQuery,
data__opsAnalyticsQuery,
data__visibility,
organizationsId,
locationsId,
savedQueryId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ loggingQuery }}',
'{{ opsAnalyticsQuery }}',
'{{ visibility }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ savedQueryId }}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
;
```
</TabItem>
<TabItem value="folders_locations_saved_queries_create">

Creates a new SavedQuery for the user making the request.

```sql
INSERT INTO google.logging.saved_queries (
data__displayName,
data__description,
data__loggingQuery,
data__opsAnalyticsQuery,
data__visibility,
foldersId,
locationsId,
savedQueryId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ loggingQuery }}',
'{{ opsAnalyticsQuery }}',
'{{ visibility }}',
'{{ foldersId }}',
'{{ locationsId }}',
'{{ savedQueryId }}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
;
```
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_create">

Creates a new SavedQuery for the user making the request.

```sql
INSERT INTO google.logging.saved_queries (
data__displayName,
data__description,
data__loggingQuery,
data__opsAnalyticsQuery,
data__visibility,
billingAccountsId,
locationsId,
savedQueryId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ loggingQuery }}',
'{{ opsAnalyticsQuery }}',
'{{ visibility }}',
'{{ billingAccountsId }}',
'{{ locationsId }}',
'{{ savedQueryId }}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: saved_queries
  props:
    - name: projectsId
      value: string
      description: Required parameter for the saved_queries resource.
    - name: locationsId
      value: string
      description: Required parameter for the saved_queries resource.
    - name: organizationsId
      value: string
      description: Required parameter for the saved_queries resource.
    - name: foldersId
      value: string
      description: Required parameter for the saved_queries resource.
    - name: billingAccountsId
      value: string
      description: Required parameter for the saved_queries resource.
    - name: displayName
      value: string
      description: >
        Required. The user specified title for the SavedQuery.
        
    - name: description
      value: string
      description: >
        Optional. A human readable description of the saved query.
        
    - name: loggingQuery
      value: object
      description: >
        Logging query that can be executed in Logs Explorer or via Logging API.
        
    - name: opsAnalyticsQuery
      value: object
      description: >
        Analytics query that can be executed in Log Analytics.
        
    - name: visibility
      value: string
      description: >
        Required. The visibility status of this query, which determines its ownership.
        
      valid_values: ['VISIBILITY_UNSPECIFIED', 'PRIVATE', 'SHARED']
    - name: savedQueryId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_saved_queries_patch"
    values={[
        { label: 'projects_locations_saved_queries_patch', value: 'projects_locations_saved_queries_patch' },
        { label: 'organizations_locations_saved_queries_patch', value: 'organizations_locations_saved_queries_patch' },
        { label: 'folders_locations_saved_queries_patch', value: 'folders_locations_saved_queries_patch' },
        { label: 'billing_accounts_locations_saved_queries_patch', value: 'billing_accounts_locations_saved_queries_patch' }
    ]}
>
<TabItem value="projects_locations_saved_queries_patch">

Updates an existing SavedQuery.

```sql
UPDATE google.logging.saved_queries
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__loggingQuery = '{{ loggingQuery }}',
data__opsAnalyticsQuery = '{{ opsAnalyticsQuery }}',
data__visibility = '{{ visibility }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility;
```
</TabItem>
<TabItem value="organizations_locations_saved_queries_patch">

Updates an existing SavedQuery.

```sql
UPDATE google.logging.saved_queries
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__loggingQuery = '{{ loggingQuery }}',
data__opsAnalyticsQuery = '{{ opsAnalyticsQuery }}',
data__visibility = '{{ visibility }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility;
```
</TabItem>
<TabItem value="folders_locations_saved_queries_patch">

Updates an existing SavedQuery.

```sql
UPDATE google.logging.saved_queries
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__loggingQuery = '{{ loggingQuery }}',
data__opsAnalyticsQuery = '{{ opsAnalyticsQuery }}',
data__visibility = '{{ visibility }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility;
```
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_patch">

Updates an existing SavedQuery.

```sql
UPDATE google.logging.saved_queries
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__loggingQuery = '{{ loggingQuery }}',
data__opsAnalyticsQuery = '{{ opsAnalyticsQuery }}',
data__visibility = '{{ visibility }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
loggingQuery,
opsAnalyticsQuery,
updateTime,
visibility;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_saved_queries_delete"
    values={[
        { label: 'projects_locations_saved_queries_delete', value: 'projects_locations_saved_queries_delete' },
        { label: 'organizations_locations_saved_queries_delete', value: 'organizations_locations_saved_queries_delete' },
        { label: 'folders_locations_saved_queries_delete', value: 'folders_locations_saved_queries_delete' },
        { label: 'billing_accounts_locations_saved_queries_delete', value: 'billing_accounts_locations_saved_queries_delete' }
    ]}
>
<TabItem value="projects_locations_saved_queries_delete">

Deletes an existing SavedQuery that was created by the user making the request.

```sql
DELETE FROM google.logging.saved_queries
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_saved_queries_delete">

Deletes an existing SavedQuery that was created by the user making the request.

```sql
DELETE FROM google.logging.saved_queries
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required;
```
</TabItem>
<TabItem value="folders_locations_saved_queries_delete">

Deletes an existing SavedQuery that was created by the user making the request.

```sql
DELETE FROM google.logging.saved_queries
WHERE foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_locations_saved_queries_delete">

Deletes an existing SavedQuery that was created by the user making the request.

```sql
DELETE FROM google.logging.saved_queries
WHERE billingAccountsId = '{{ billingAccountsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND savedQueriesId = '{{ savedQueriesId }}' --required;
```
</TabItem>
</Tabs>
