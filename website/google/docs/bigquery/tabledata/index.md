--- 
title: tabledata
hide_title: false
hide_table_of_contents: false
keywords:
  - tabledata
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

Creates, updates, deletes, gets or lists a <code>tabledata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tabledata</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.tabledata" /></td></tr>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>A hash of this page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resource type of the response. (default: bigquery#tableDataList)</td>
</tr>
<tr>
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td>A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.</td>
</tr>
<tr>
    <td><CopyableCode code="rows" /></td>
    <td><code>array</code></td>
    <td>Rows of results.</td>
</tr>
<tr>
    <td><CopyableCode code="totalRows" /></td>
    <td><code>string (int64)</code></td>
    <td>Total rows of the entire table. In order to show default value 0 we have to present it as string.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td><a href="#parameter-formatOptions.timestampOutputFormat"><code>formatOptions.timestampOutputFormat</code></a>, <a href="#parameter-formatOptions.useInt64Timestamp"><code>formatOptions.useInt64Timestamp</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-selectedFields"><code>selectedFields</code></a>, <a href="#parameter-startIndex"><code>startIndex</code></a></td>
    <td>List the content of a table in rows.</td>
</tr>
<tr>
    <td><a href="#insert_all"><CopyableCode code="insert_all" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td></td>
    <td>Streams data into BigQuery one record at a time without needing to run a load job.</td>
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
<tr id="parameter-+datasetId">
    <td><CopyableCode code="+datasetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-+tableId">
    <td><CopyableCode code="+tableId" /></td>
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
<tr id="parameter-selectedFields">
    <td><CopyableCode code="selectedFields" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startIndex">
    <td><CopyableCode code="startIndex" /></td>
    <td><code>string (uint64)</code></td>
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

List the content of a table in rows.

```sql
SELECT
etag,
kind,
pageToken,
rows,
totalRows
FROM google.bigquery.tabledata
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND +tableId = '{{ +tableId }}' -- required
AND formatOptions.timestampOutputFormat = '{{ formatOptions.timestampOutputFormat }}'
AND formatOptions.useInt64Timestamp = '{{ formatOptions.useInt64Timestamp }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND selectedFields = '{{ selectedFields }}'
AND startIndex = '{{ startIndex }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert_all"
    values={[
        { label: 'insert_all', value: 'insert_all' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert_all">

Streams data into BigQuery one record at a time without needing to run a load job.

```sql
INSERT INTO google.bigquery.tabledata (
data__ignoreUnknownValues,
data__kind,
data__rows,
data__skipInvalidRows,
data__templateSuffix,
data__traceId,
projectId,
+datasetId,
+tableId
)
SELECT 
{{ ignoreUnknownValues }},
'{{ kind }}',
'{{ rows }}',
{{ skipInvalidRows }},
'{{ templateSuffix }}',
'{{ traceId }}',
'{{ projectId }}',
'{{ +datasetId }}',
'{{ +tableId }}'
RETURNING
insertErrors,
kind
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tabledata
  props:
    - name: projectId
      value: string
      description: Required parameter for the tabledata resource.
    - name: +datasetId
      value: string
      description: Required parameter for the tabledata resource.
    - name: +tableId
      value: string
      description: Required parameter for the tabledata resource.
    - name: ignoreUnknownValues
      value: boolean
      description: >
        Optional. Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
        
    - name: kind
      value: string
      description: >
        Optional. The resource type of the response. The value is not checked at the backend. Historically, it has been set to "bigquery#tableDataInsertAllRequest" but you are not required to set it.
        
      default: bigquery#tableDataInsertAllRequest
    - name: rows
      value: array
    - name: skipInvalidRows
      value: boolean
      description: >
        Optional. Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
        
    - name: templateSuffix
      value: string
      description: >
        Optional. If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.
        
    - name: traceId
      value: string
      description: >
        Optional. Unique request trace id. Used for debugging purposes only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended.
        
```
</TabItem>
</Tabs>
