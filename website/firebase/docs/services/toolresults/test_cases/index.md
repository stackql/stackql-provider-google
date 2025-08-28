--- 
title: test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - test_cases
  - toolresults
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>test_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>test_cases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="elapsedTime" /></td>
    <td><code>object</code></td>
    <td>The elapsed run time of the test case. Required. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>object</code></td>
    <td>The end time of the test case. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="skippedMessage" /></td>
    <td><code>string</code></td>
    <td>Why the test case was skipped. Present only for skipped test case</td>
</tr>
<tr>
    <td><CopyableCode code="stackTraces" /></td>
    <td><code>array</code></td>
    <td>The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>object</code></td>
    <td>The start time of the test case. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the test case. Required.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier within a Step for this Test Case.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseReference" /></td>
    <td><code>object</code></td>
    <td>Test case reference, e.g. name, class name and test suite name. Required. (id: TestCaseReference)</td>
</tr>
<tr>
    <td><CopyableCode code="toolOutputs" /></td>
    <td><code>array</code></td>
    <td>References to opaque files of any format output by the tool execution. @OutputOnly</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="elapsedTime" /></td>
    <td><code>object</code></td>
    <td>The elapsed run time of the test case. Required. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>object</code></td>
    <td>The end time of the test case. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="skippedMessage" /></td>
    <td><code>string</code></td>
    <td>Why the test case was skipped. Present only for skipped test case</td>
</tr>
<tr>
    <td><CopyableCode code="stackTraces" /></td>
    <td><code>array</code></td>
    <td>The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>object</code></td>
    <td>The start time of the test case. (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the test case. Required.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier within a Step for this Test Case.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseReference" /></td>
    <td><code>object</code></td>
    <td>Test case reference, e.g. name, class name and test suite name. Required. (id: TestCaseReference)</td>
</tr>
<tr>
    <td><CopyableCode code="toolOutputs" /></td>
    <td><code>array</code></td>
    <td>References to opaque files of any format output by the tool execution. @OutputOnly</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a>, <a href="#parameter-testCaseId"><code>testCaseId</code></a></td>
    <td></td>
    <td>Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist</td>
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
<tr id="parameter-executionId">
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-historyId">
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stepId">
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-testCaseId">
    <td><CopyableCode code="testCaseId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist

```sql
SELECT
elapsedTime,
endTime,
skippedMessage,
stackTraces,
startTime,
status,
testCaseId,
testCaseReference,
toolOutputs
FROM firebase.toolresults.test_cases
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND stepId = '{{ stepId }}' -- required
AND testCaseId = '{{ testCaseId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist

```sql
SELECT
elapsedTime,
endTime,
skippedMessage,
stackTraces,
startTime,
status,
testCaseId,
testCaseReference,
toolOutputs
FROM firebase.toolresults.test_cases
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND stepId = '{{ stepId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
