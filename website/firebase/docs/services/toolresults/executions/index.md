--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>executions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.executions" /></td></tr>
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
    <td><CopyableCode code="completionTime" /></td>
    <td><code>object</code></td>
    <td>The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>object</code></td>
    <td>The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensionDefinitions" /></td>
    <td><code>array</code></td>
    <td>The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="outcome" /></td>
    <td><code>object</code></td>
    <td>Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional (id: Outcome)</td>
</tr>
<tr>
    <td><CopyableCode code="specification" /></td>
    <td><code>object</code></td>
    <td>Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional (id: Specification)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional</td>
</tr>
<tr>
    <td><CopyableCode code="testExecutionMatrixId" /></td>
    <td><code>string</code></td>
    <td>TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set</td>
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
    <td><CopyableCode code="completionTime" /></td>
    <td><code>object</code></td>
    <td>The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>object</code></td>
    <td>The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensionDefinitions" /></td>
    <td><code>array</code></td>
    <td>The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="outcome" /></td>
    <td><code>object</code></td>
    <td>Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional (id: Outcome)</td>
</tr>
<tr>
    <td><CopyableCode code="specification" /></td>
    <td><code>object</code></td>
    <td>Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional (id: Specification)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional</td>
</tr>
<tr>
    <td><CopyableCode code="testExecutionMatrixId" /></td>
    <td><code>string</code></td>
    <td>TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td></td>
    <td>Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist</td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

```sql
SELECT
completionTime,
creationTime,
dimensionDefinitions,
executionId,
outcome,
specification,
state,
testExecutionMatrixId
FROM firebase.toolresults.executions
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

```sql
SELECT
completionTime,
creationTime,
dimensionDefinitions,
executionId,
outcome,
specification,
state,
testExecutionMatrixId
FROM firebase.toolresults.executions
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
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

Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

```sql
INSERT INTO firebase.toolresults.executions (
data__executionId,
data__state,
data__creationTime,
data__completionTime,
data__outcome,
data__dimensionDefinitions,
data__specification,
data__testExecutionMatrixId,
projectId,
historyId,
requestId
)
SELECT 
'{{ executionId }}',
'{{ state }}',
'{{ creationTime }}',
'{{ completionTime }}',
'{{ outcome }}',
'{{ dimensionDefinitions }}',
'{{ specification }}',
'{{ testExecutionMatrixId }}',
'{{ projectId }}',
'{{ historyId }}',
'{{ requestId }}'
RETURNING
completionTime,
creationTime,
dimensionDefinitions,
executionId,
outcome,
specification,
state,
testExecutionMatrixId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: executions
  props:
    - name: projectId
      value: string
      description: Required parameter for the executions resource.
    - name: historyId
      value: string
      description: Required parameter for the executions resource.
    - name: executionId
      value: string
      description: >
        A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set
        
    - name: state
      value: string
      description: >
        The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional
        
      valid_values: ['unknownState', 'pending', 'inProgress', 'complete']
    - name: creationTime
      value: object
      description: >
        The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set
        
    - name: completionTime
      value: object
      description: >
        The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set
        
    - name: outcome
      value: object
      description: >
        Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional
        
    - name: dimensionDefinitions
      value: array
      description: >
        The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set
        
    - name: specification
      value: object
      description: >
        Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional
        
    - name: testExecutionMatrixId
      value: string
      description: >
        TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

```sql
UPDATE firebase.toolresults.executions
SET 
data__executionId = '{{ executionId }}',
data__state = '{{ state }}',
data__creationTime = '{{ creationTime }}',
data__completionTime = '{{ completionTime }}',
data__outcome = '{{ outcome }}',
data__dimensionDefinitions = '{{ dimensionDefinitions }}',
data__specification = '{{ specification }}',
data__testExecutionMatrixId = '{{ testExecutionMatrixId }}'
WHERE 
projectId = '{{ projectId }}' --required
AND historyId = '{{ historyId }}' --required
AND executionId = '{{ executionId }}' --required
AND requestId = '{{ requestId}}'
RETURNING
completionTime,
creationTime,
dimensionDefinitions,
executionId,
outcome,
specification,
state,
testExecutionMatrixId;
```
</TabItem>
</Tabs>
