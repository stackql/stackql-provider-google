--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - bigquerydatatransfer
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatatransfer.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_sources_get"
    values={[
        { label: 'projects_locations_data_sources_get', value: 'projects_locations_data_sources_get' },
        { label: 'projects_data_sources_get', value: 'projects_data_sources_get' },
        { label: 'projects_locations_data_sources_list', value: 'projects_locations_data_sources_list' },
        { label: 'projects_data_sources_list', value: 'projects_data_sources_list' }
    ]}
>
<TabItem value="projects_locations_data_sources_get">

Defines the properties and custom parameters for a data source.

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
    <td>Output only. Data source resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationType" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of authorization.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>Data source client id which should be used to receive refresh token.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRefreshType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Data source id.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDataRefreshWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSchedule" /></td>
    <td><code>string</code></td>
    <td>Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User friendly data source description string.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User friendly data source name.</td>
</tr>
<tr>
    <td><CopyableCode code="helpUrl" /></td>
    <td><code>string</code></td>
    <td>Url for the help document for this data source.</td>
</tr>
<tr>
    <td><CopyableCode code="manualRunsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Disables backfilling and manual run scheduling for the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumScheduleInterval" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The minimum interval for scheduler to schedule runs.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Data source parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery</td>
</tr>
<tr>
    <td><CopyableCode code="supportsCustomSchedule" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsMultipleTransfers" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. This field has no effect.</td>
</tr>
<tr>
    <td><CopyableCode code="transferType" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field has no effect.</td>
</tr>
<tr>
    <td><CopyableCode code="updateDeadlineSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_data_sources_get">

Defines the properties and custom parameters for a data source.

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
    <td>Output only. Data source resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationType" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of authorization.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>Data source client id which should be used to receive refresh token.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRefreshType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Data source id.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDataRefreshWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSchedule" /></td>
    <td><code>string</code></td>
    <td>Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User friendly data source description string.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User friendly data source name.</td>
</tr>
<tr>
    <td><CopyableCode code="helpUrl" /></td>
    <td><code>string</code></td>
    <td>Url for the help document for this data source.</td>
</tr>
<tr>
    <td><CopyableCode code="manualRunsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Disables backfilling and manual run scheduling for the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumScheduleInterval" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The minimum interval for scheduler to schedule runs.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Data source parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery</td>
</tr>
<tr>
    <td><CopyableCode code="supportsCustomSchedule" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsMultipleTransfers" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. This field has no effect.</td>
</tr>
<tr>
    <td><CopyableCode code="transferType" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field has no effect.</td>
</tr>
<tr>
    <td><CopyableCode code="updateDeadlineSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_sources_list">

Returns list of supported data sources and their metadata.

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
    <td><CopyableCode code="dataSources" /></td>
    <td><code>array</code></td>
    <td>List of supported data sources and their transfer settings.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_data_sources_list">

Returns list of supported data sources and their metadata.

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
    <td><CopyableCode code="dataSources" /></td>
    <td><code>array</code></td>
    <td>List of supported data sources and their transfer settings.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.</td>
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
    <td><a href="#projects_locations_data_sources_get"><CopyableCode code="projects_locations_data_sources_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Retrieves a supported data source and returns its settings.</td>
</tr>
<tr>
    <td><a href="#projects_data_sources_get"><CopyableCode code="projects_data_sources_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Retrieves a supported data source and returns its settings.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_sources_list"><CopyableCode code="projects_locations_data_sources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists supported data sources and returns their settings.</td>
</tr>
<tr>
    <td><a href="#projects_data_sources_list"><CopyableCode code="projects_data_sources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists supported data sources and returns their settings.</td>
</tr>
<tr>
    <td><a href="#projects_data_sources_check_valid_creds"><CopyableCode code="projects_data_sources_check_valid_creds" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Returns true if valid credentials exist for the given data source and requesting user.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_sources_check_valid_creds"><CopyableCode code="projects_locations_data_sources_check_valid_creds" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Returns true if valid credentials exist for the given data source and requesting user.</td>
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
<tr id="parameter-dataSourcesId">
    <td><CopyableCode code="dataSourcesId" /></td>
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
    defaultValue="projects_locations_data_sources_get"
    values={[
        { label: 'projects_locations_data_sources_get', value: 'projects_locations_data_sources_get' },
        { label: 'projects_data_sources_get', value: 'projects_data_sources_get' },
        { label: 'projects_locations_data_sources_list', value: 'projects_locations_data_sources_list' },
        { label: 'projects_data_sources_list', value: 'projects_data_sources_list' }
    ]}
>
<TabItem value="projects_locations_data_sources_get">

Retrieves a supported data source and returns its settings.

```sql
SELECT
name,
authorizationType,
clientId,
dataRefreshType,
dataSourceId,
defaultDataRefreshWindowDays,
defaultSchedule,
description,
displayName,
helpUrl,
manualRunsDisabled,
minimumScheduleInterval,
parameters,
scopes,
supportsCustomSchedule,
supportsMultipleTransfers,
transferType,
updateDeadlineSeconds
FROM google.bigquerydatatransfer.data_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataSourcesId = '{{ dataSourcesId }}' -- required;
```
</TabItem>
<TabItem value="projects_data_sources_get">

Retrieves a supported data source and returns its settings.

```sql
SELECT
name,
authorizationType,
clientId,
dataRefreshType,
dataSourceId,
defaultDataRefreshWindowDays,
defaultSchedule,
description,
displayName,
helpUrl,
manualRunsDisabled,
minimumScheduleInterval,
parameters,
scopes,
supportsCustomSchedule,
supportsMultipleTransfers,
transferType,
updateDeadlineSeconds
FROM google.bigquerydatatransfer.data_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND dataSourcesId = '{{ dataSourcesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_sources_list">

Lists supported data sources and returns their settings.

```sql
SELECT
dataSources,
nextPageToken
FROM google.bigquerydatatransfer.data_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_data_sources_list">

Lists supported data sources and returns their settings.

```sql
SELECT
dataSources,
nextPageToken
FROM google.bigquerydatatransfer.data_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_data_sources_check_valid_creds"
    values={[
        { label: 'projects_data_sources_check_valid_creds', value: 'projects_data_sources_check_valid_creds' },
        { label: 'projects_locations_data_sources_check_valid_creds', value: 'projects_locations_data_sources_check_valid_creds' }
    ]}
>
<TabItem value="projects_data_sources_check_valid_creds">

Returns true if valid credentials exist for the given data source and requesting user.

```sql
EXEC google.bigquerydatatransfer.data_sources.projects_data_sources_check_valid_creds 
@projectsId='{{ projectsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_sources_check_valid_creds">

Returns true if valid credentials exist for the given data source and requesting user.

```sql
EXEC google.bigquerydatatransfer.data_sources.projects_locations_data_sources_check_valid_creds 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required;
```
</TabItem>
</Tabs>
