--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - workflowexecutions
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>executions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workflowexecutions.executions" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the execution. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/workflows/&#123;workflow&#125;/executions/&#123;execution&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="argument" /></td>
    <td><code>string</code></td>
    <td>Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'&#123;"argument":"&#123;\"firstName\":\"FIRST\",\"lastName\":\"LAST\"&#125;"&#125;'`</td>
</tr>
<tr>
    <td><CopyableCode code="callLogLevel" /></td>
    <td><code>string</code></td>
    <td>The call logging level associated to this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Marks the creation of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="disableConcurrencyQuotaOverflowBuffering" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, the execution will not be backlogged when the concurrency quota is exhausted. The backlog execution starts when the concurrency quota becomes available.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. Measures the duration of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Marks the end of execution, successful or not.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`. (id: Error)</td>
</tr>
<tr>
    <td><CopyableCode code="executionHistoryLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes the execution history level to apply to this execution. If not specified, the execution history level is determined by its workflow's execution history level. If the levels are different, the executionHistoryLevel overrides the workflow's execution history level for this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Marks the beginning of execution. Note that this will be the same as `createTime` for executions that start immediately.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="stateError" /></td>
    <td><code>object</code></td>
    <td>Output only. Error regarding the state of the Execution resource. For example, this field will have error details if the execution data is unavailable due to revoked KMS key permissions. (id: StateError)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Status tracks the current steps and progress data of this execution. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Revision of the workflow this execution is using.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the execution. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/workflows/&#123;workflow&#125;/executions/&#123;execution&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="argument" /></td>
    <td><code>string</code></td>
    <td>Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'&#123;"argument":"&#123;\"firstName\":\"FIRST\",\"lastName\":\"LAST\"&#125;"&#125;'`</td>
</tr>
<tr>
    <td><CopyableCode code="callLogLevel" /></td>
    <td><code>string</code></td>
    <td>The call logging level associated to this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Marks the creation of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="disableConcurrencyQuotaOverflowBuffering" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, the execution will not be backlogged when the concurrency quota is exhausted. The backlog execution starts when the concurrency quota becomes available.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. Measures the duration of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Marks the end of execution, successful or not.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`. (id: Error)</td>
</tr>
<tr>
    <td><CopyableCode code="executionHistoryLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes the execution history level to apply to this execution. If not specified, the execution history level is determined by its workflow's execution history level. If the levels are different, the executionHistoryLevel overrides the workflow's execution history level for this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Marks the beginning of execution. Note that this will be the same as `createTime` for executions that start immediately.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="stateError" /></td>
    <td><code>object</code></td>
    <td>Output only. Error regarding the state of the Execution resource. For example, this field will have error details if the execution data is unavailable due to revoked KMS key permissions. (id: StateError)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Status tracks the current steps and progress data of this execution. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Revision of the workflow this execution is using.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Returns an execution of the given name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a></td>
    <td></td>
    <td>Creates a new execution using the latest revision of the given workflow. For more information, see Execute a workflow.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Cancels an execution of the given name.</td>
</tr>
<tr>
    <td><a href="#export_data"><CopyableCode code="export_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
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
<tr id="parameter-workflowsId">
    <td><CopyableCode code="workflowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Returns an execution of the given name.

```sql
SELECT
name,
argument,
callLogLevel,
createTime,
disableConcurrencyQuotaOverflowBuffering,
duration,
endTime,
error,
executionHistoryLevel,
labels,
result,
startTime,
state,
stateError,
status,
workflowRevisionId
FROM google.workflowexecutions.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowsId = '{{ workflowsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

```sql
SELECT
name,
argument,
callLogLevel,
createTime,
disableConcurrencyQuotaOverflowBuffering,
duration,
endTime,
error,
executionHistoryLevel,
labels,
result,
startTime,
state,
stateError,
status,
workflowRevisionId
FROM google.workflowexecutions.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowsId = '{{ workflowsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new execution using the latest revision of the given workflow. For more information, see Execute a workflow.

```sql
INSERT INTO google.workflowexecutions.executions (
data__argument,
data__callLogLevel,
data__labels,
data__disableConcurrencyQuotaOverflowBuffering,
data__executionHistoryLevel,
projectsId,
locationsId,
workflowsId
)
SELECT 
'{{ argument }}',
'{{ callLogLevel }}',
'{{ labels }}',
{{ disableConcurrencyQuotaOverflowBuffering }},
'{{ executionHistoryLevel }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workflowsId }}'
RETURNING
name,
argument,
callLogLevel,
createTime,
disableConcurrencyQuotaOverflowBuffering,
duration,
endTime,
error,
executionHistoryLevel,
labels,
result,
startTime,
state,
stateError,
status,
workflowRevisionId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: executions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the executions resource.
    - name: locationsId
      value: string
      description: Required parameter for the executions resource.
    - name: workflowsId
      value: string
      description: Required parameter for the executions resource.
    - name: argument
      value: string
      description: >
        Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'`
        
    - name: callLogLevel
      value: string
      description: >
        The call logging level associated to this execution.
        
      valid_values: ['CALL_LOG_LEVEL_UNSPECIFIED', 'LOG_ALL_CALLS', 'LOG_ERRORS_ONLY', 'LOG_NONE']
    - name: labels
      value: object
      description: >
        Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution.
        
    - name: disableConcurrencyQuotaOverflowBuffering
      value: boolean
      description: >
        Optional. If set to true, the execution will not be backlogged when the concurrency quota is exhausted. The backlog execution starts when the concurrency quota becomes available.
        
    - name: executionHistoryLevel
      value: string
      description: >
        Optional. Describes the execution history level to apply to this execution. If not specified, the execution history level is determined by its workflow's execution history level. If the levels are different, the executionHistoryLevel overrides the workflow's execution history level for this execution.
        
      valid_values: ['EXECUTION_HISTORY_LEVEL_UNSPECIFIED', 'EXECUTION_HISTORY_BASIC', 'EXECUTION_HISTORY_DETAILED']
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' },
        { label: 'export_data', value: 'export_data' }
    ]}
>
<TabItem value="cancel">

Cancels an execution of the given name.

```sql
EXEC google.workflowexecutions.executions.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workflowsId='{{ workflowsId }}' --required, 
@executionsId='{{ executionsId }}' --required;
```
</TabItem>
<TabItem value="export_data">

Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.

```sql
EXEC google.workflowexecutions.executions.export_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workflowsId='{{ workflowsId }}' --required, 
@executionsId='{{ executionsId }}' --required;
```
</TabItem>
</Tabs>
