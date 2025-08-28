--- 
title: host_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - host_queries
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

Creates, updates, deletes, gets or lists a <code>host_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>host_queries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.host_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_host_queries_get"
    values={[
        { label: 'organizations_host_queries_get', value: 'organizations_host_queries_get' },
        { label: 'organizations_host_queries_list', value: 'organizations_host_queries_list' }
    ]}
>
<TabItem value="organizations_host_queries_get">

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
    <td>Asynchronous Query Name.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>Creation time of the query.</td>
</tr>
<tr>
    <td><CopyableCode code="envgroupHostname" /></td>
    <td><code>string</code></td>
    <td>Hostname is available only when query is executed at host level.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Error is set when query fails.</td>
</tr>
<tr>
    <td><CopyableCode code="executionTime" /></td>
    <td><code>string</code></td>
    <td>ExecutionTime is available only after the query is completed.</td>
</tr>
<tr>
    <td><CopyableCode code="queryParams" /></td>
    <td><code>object</code></td>
    <td>Contains information like metrics, dimenstions etc of the AsyncQuery. (id: GoogleCloudApigeeV1QueryMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="reportDefinitionId" /></td>
    <td><code>string</code></td>
    <td>Asynchronous Report ID.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Result is available only after the query is completed. (id: GoogleCloudApigeeV1AsyncQueryResult)</td>
</tr>
<tr>
    <td><CopyableCode code="resultFileSize" /></td>
    <td><code>string</code></td>
    <td>ResultFileSize is available only after the query is completed.</td>
</tr>
<tr>
    <td><CopyableCode code="resultRows" /></td>
    <td><code>string (int64)</code></td>
    <td>ResultRows is available only after the query is completed.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>Self link of the query. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Query state could be "enqueued", "running", "completed", "failed".</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string</code></td>
    <td>Last updated timestamp for the query.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_host_queries_list">

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
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>The asynchronous queries belong to requested resource name.</td>
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
    <td><a href="#organizations_host_queries_get"><CopyableCode code="organizations_host_queries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-hostQueriesId"><code>hostQueriesId</code></a></td>
    <td></td>
    <td>Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"</td>
</tr>
<tr>
    <td><a href="#organizations_host_queries_list"><CopyableCode code="organizations_host_queries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-submittedBy"><code>submittedBy</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-dataset"><code>dataset</code></a>, <a href="#parameter-inclQueriesWithoutReport"><code>inclQueriesWithoutReport</code></a>, <a href="#parameter-envgroupHostname"><code>envgroupHostname</code></a></td>
    <td>Return a list of Asynchronous Queries at host level.</td>
</tr>
<tr>
    <td><a href="#organizations_host_queries_create"><CopyableCode code="organizations_host_queries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.</td>
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
<tr id="parameter-hostQueriesId">
    <td><CopyableCode code="hostQueriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataset">
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-envgroupHostname">
    <td><CopyableCode code="envgroupHostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-inclQueriesWithoutReport">
    <td><CopyableCode code="inclQueriesWithoutReport" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-submittedBy">
    <td><CopyableCode code="submittedBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_host_queries_get"
    values={[
        { label: 'organizations_host_queries_get', value: 'organizations_host_queries_get' },
        { label: 'organizations_host_queries_list', value: 'organizations_host_queries_list' }
    ]}
>
<TabItem value="organizations_host_queries_get">

Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

```sql
SELECT
name,
created,
envgroupHostname,
error,
executionTime,
queryParams,
reportDefinitionId,
result,
resultFileSize,
resultRows,
self,
state,
updated
FROM google.apigee.host_queries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND hostQueriesId = '{{ hostQueriesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_host_queries_list">

Return a list of Asynchronous Queries at host level.

```sql
SELECT
queries
FROM google.apigee.host_queries
WHERE organizationsId = '{{ organizationsId }}' -- required
AND submittedBy = '{{ submittedBy }}'
AND status = '{{ status }}'
AND from = '{{ from }}'
AND to = '{{ to }}'
AND dataset = '{{ dataset }}'
AND inclQueriesWithoutReport = '{{ inclQueriesWithoutReport }}'
AND envgroupHostname = '{{ envgroupHostname }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_host_queries_create"
    values={[
        { label: 'organizations_host_queries_create', value: 'organizations_host_queries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_host_queries_create">

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

```sql
INSERT INTO google.apigee.host_queries (
data__metrics,
data__dimensions,
data__timeRange,
data__filter,
data__groupByTimeUnit,
data__limit,
data__outputFormat,
data__csvDelimiter,
data__envgroupHostname,
data__reportDefinitionId,
data__name,
organizationsId
)
SELECT 
'{{ metrics }}',
'{{ dimensions }}',
'{{ timeRange }}',
'{{ filter }}',
'{{ groupByTimeUnit }}',
{{ limit }},
'{{ outputFormat }}',
'{{ csvDelimiter }}',
'{{ envgroupHostname }}',
'{{ reportDefinitionId }}',
'{{ name }}',
'{{ organizationsId }}'
RETURNING
name,
created,
envgroupHostname,
error,
executionTime,
queryParams,
reportDefinitionId,
result,
resultFileSize,
resultRows,
self,
state,
updated
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: host_queries
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the host_queries resource.
    - name: metrics
      value: array
      description: >
        A list of Metrics.
        
    - name: dimensions
      value: array
      description: >
        A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions
        
    - name: timeRange
      value: any
      description: >
        Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }
        
    - name: filter
      value: string
      description: >
        Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax
        
    - name: groupByTimeUnit
      value: string
      description: >
        Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.
        
    - name: limit
      value: integer
      description: >
        Maximum number of rows that can be returned in the result.
        
    - name: outputFormat
      value: string
      description: >
        Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.
        
    - name: csvDelimiter
      value: string
      description: >
        Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`).
        
    - name: envgroupHostname
      value: string
      description: >
        Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.
        
    - name: reportDefinitionId
      value: string
      description: >
        Asynchronous Report ID.
        
    - name: name
      value: string
      description: >
        Asynchronous Query Name.
        
```
</TabItem>
</Tabs>
