--- 
title: jobs_query_results
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs_query_results
  - bigquery
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

Creates, updates, deletes, gets or lists a <code>jobs_query_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs_query_results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.jobs_query_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

Response object of GetQueryResults.

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
    <td><CopyableCode code="cacheHit" /></td>
    <td><code>boolean</code></td>
    <td>Whether the query result was fetched from the query cache.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>A hash of this response.</td>
</tr>
<tr>
    <td><CopyableCode code="jobComplete" /></td>
    <td><code>boolean</code></td>
    <td>Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.</td>
</tr>
<tr>
    <td><CopyableCode code="jobReference" /></td>
    <td><code>object</code></td>
    <td>Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults). (id: JobReference)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resource type of the response. (default: bigquery#getQueryResultsResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="numDmlAffectedRows" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.</td>
</tr>
<tr>
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td>A token used for paging results. When this token is non-empty, it indicates additional results are available.</td>
</tr>
<tr>
    <td><CopyableCode code="rows" /></td>
    <td><code>array</code></td>
    <td>An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. The REST-based representation of this data leverages a series of JSON f,v objects for indicating fields and values.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The schema of the results. Present only when the query completes successfully. (id: TableSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="totalBytesProcessed" /></td>
    <td><code>string (int64)</code></td>
    <td>The total number of bytes processed for this query.</td>
</tr>
<tr>
    <td><CopyableCode code="totalRows" /></td>
    <td><code>string (uint64)</code></td>
    <td>The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.</td>
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
    <td><a href="#get_query_results"><CopyableCode code="get_query_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+jobId"><code>+jobId</code></a></td>
    <td><a href="#parameter-formatOptions.timestampOutputFormat"><code>formatOptions.timestampOutputFormat</code></a>, <a href="#parameter-formatOptions.useInt64Timestamp"><code>formatOptions.useInt64Timestamp</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-startIndex"><code>startIndex</code></a>, <a href="#parameter-timeoutMs"><code>timeoutMs</code></a></td>
    <td>RPC to get the results of a query job.</td>
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
<tr id="parameter-+jobId">
    <td><CopyableCode code="+jobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-formatOptions.timestampOutputFormat">
    <td><CopyableCode code="formatOptions.timestampOutputFormat" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-formatOptions.useInt64Timestamp">
    <td><CopyableCode code="formatOptions.useInt64Timestamp" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startIndex">
    <td><CopyableCode code="startIndex" /></td>
    <td><code>string (uint64)</code></td>
    <td></td>
</tr>
<tr id="parameter-timeoutMs">
    <td><CopyableCode code="timeoutMs" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

RPC to get the results of a query job.

```sql
SELECT
cacheHit,
errors,
etag,
jobComplete,
jobReference,
kind,
numDmlAffectedRows,
pageToken,
rows,
schema,
totalBytesProcessed,
totalRows
FROM google.bigquery.jobs_query_results
WHERE projectId = '{{ projectId }}' -- required
AND +jobId = '{{ +jobId }}' -- required
AND formatOptions.timestampOutputFormat = '{{ formatOptions.timestampOutputFormat }}'
AND formatOptions.useInt64Timestamp = '{{ formatOptions.useInt64Timestamp }}'
AND location = '{{ location }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND startIndex = '{{ startIndex }}'
AND timeoutMs = '{{ timeoutMs }}';
```
</TabItem>
</Tabs>
