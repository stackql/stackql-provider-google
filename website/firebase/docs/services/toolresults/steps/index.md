--- 
title: steps
hide_title: false
hide_table_of_contents: false
keywords:
  - steps
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

Creates, updates, deletes, gets or lists a <code>steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>steps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.steps" /></td></tr>
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
    <td>A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>object</code></td>
    <td>The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>object</code></td>
    <td>The time when the step was created. - In response: always set - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional</td>
</tr>
<tr>
    <td><CopyableCode code="deviceUsageDuration" /></td>
    <td><code>object</code></td>
    <td>How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensionValue" /></td>
    <td><code>array</code></td>
    <td>If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="hasImages" /></td>
    <td><code>boolean</code></td>
    <td>Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value</td>
</tr>
<tr>
    <td><CopyableCode code="multiStep" /></td>
    <td><code>object</code></td>
    <td>Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional (id: MultiStep)</td>
</tr>
<tr>
    <td><CopyableCode code="outcome" /></td>
    <td><code>object</code></td>
    <td>Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional (id: Outcome)</td>
</tr>
<tr>
    <td><CopyableCode code="runDuration" /></td>
    <td><code>object</code></td>
    <td>How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -&gt; COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional</td>
</tr>
<tr>
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="testExecutionStep" /></td>
    <td><code>object</code></td>
    <td>An execution of a test runner. (id: TestExecutionStep)</td>
</tr>
<tr>
    <td><CopyableCode code="toolExecutionStep" /></td>
    <td><code>object</code></td>
    <td>An execution of a tool (used for steps we don't explicitly support). (id: ToolExecutionStep)</td>
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
    <td>A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>object</code></td>
    <td>The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>object</code></td>
    <td>The time when the step was created. - In response: always set - In create/update request: never set (id: Timestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional</td>
</tr>
<tr>
    <td><CopyableCode code="deviceUsageDuration" /></td>
    <td><code>object</code></td>
    <td>How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="dimensionValue" /></td>
    <td><code>array</code></td>
    <td>If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="hasImages" /></td>
    <td><code>boolean</code></td>
    <td>Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value</td>
</tr>
<tr>
    <td><CopyableCode code="multiStep" /></td>
    <td><code>object</code></td>
    <td>Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional (id: MultiStep)</td>
</tr>
<tr>
    <td><CopyableCode code="outcome" /></td>
    <td><code>object</code></td>
    <td>Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional (id: Outcome)</td>
</tr>
<tr>
    <td><CopyableCode code="runDuration" /></td>
    <td><code>object</code></td>
    <td>How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -&gt; COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional</td>
</tr>
<tr>
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set</td>
</tr>
<tr>
    <td><CopyableCode code="testExecutionStep" /></td>
    <td><code>object</code></td>
    <td>An execution of a test runner. (id: TestExecutionStep)</td>
</tr>
<tr>
    <td><CopyableCode code="toolExecutionStep" /></td>
    <td><code>object</code></td>
    <td>An execution of a tool (used for steps we don't explicitly support). (id: ToolExecutionStep)</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td></td>
    <td>Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist</td>
</tr>
<tr>
    <td><a href="#accessibility_clusters"><CopyableCode code="accessibility_clusters" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-historiesId"><code>historiesId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a>, <a href="#parameter-stepsId"><code>stepsId</code></a></td>
    <td><a href="#parameter-locale"><code>locale</code></a></td>
    <td>Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist</td>
</tr>
<tr>
    <td><a href="#publish_xunit_xml_files"><CopyableCode code="publish_xunit_xml_files" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td></td>
    <td>Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-historiesId">
    <td><CopyableCode code="historiesId" /></td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stepId">
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stepsId">
    <td><CopyableCode code="stepsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locale">
    <td><CopyableCode code="locale" /></td>
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

Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

```sql
SELECT
name,
completionTime,
creationTime,
description,
deviceUsageDuration,
dimensionValue,
hasImages,
labels,
multiStep,
outcome,
runDuration,
state,
stepId,
testExecutionStep,
toolExecutionStep
FROM firebase.toolresults.steps
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
AND stepId = '{{ stepId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

```sql
SELECT
name,
completionTime,
creationTime,
description,
deviceUsageDuration,
dimensionValue,
hasImages,
labels,
multiStep,
outcome,
runDuration,
state,
stepId,
testExecutionStep,
toolExecutionStep
FROM firebase.toolresults.steps
WHERE projectId = '{{ projectId }}' -- required
AND historyId = '{{ historyId }}' -- required
AND executionId = '{{ executionId }}' -- required
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

Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

```sql
INSERT INTO firebase.toolresults.steps (
data__testExecutionStep,
data__toolExecutionStep,
data__stepId,
data__creationTime,
data__completionTime,
data__name,
data__description,
data__state,
data__outcome,
data__hasImages,
data__labels,
data__dimensionValue,
data__runDuration,
data__deviceUsageDuration,
data__multiStep,
projectId,
historyId,
executionId,
requestId
)
SELECT 
'{{ testExecutionStep }}',
'{{ toolExecutionStep }}',
'{{ stepId }}',
'{{ creationTime }}',
'{{ completionTime }}',
'{{ name }}',
'{{ description }}',
'{{ state }}',
'{{ outcome }}',
{{ hasImages }},
'{{ labels }}',
'{{ dimensionValue }}',
'{{ runDuration }}',
'{{ deviceUsageDuration }}',
'{{ multiStep }}',
'{{ projectId }}',
'{{ historyId }}',
'{{ executionId }}',
'{{ requestId }}'
RETURNING
name,
completionTime,
creationTime,
description,
deviceUsageDuration,
dimensionValue,
hasImages,
labels,
multiStep,
outcome,
runDuration,
state,
stepId,
testExecutionStep,
toolExecutionStep
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: steps
  props:
    - name: projectId
      value: string
      description: Required parameter for the steps resource.
    - name: historyId
      value: string
      description: Required parameter for the steps resource.
    - name: executionId
      value: string
      description: Required parameter for the steps resource.
    - name: testExecutionStep
      value: object
      description: >
        An execution of a test runner.
        
    - name: toolExecutionStep
      value: object
      description: >
        An execution of a tool (used for steps we don't explicitly support).
        
    - name: stepId
      value: string
      description: >
        A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set
        
    - name: creationTime
      value: object
      description: >
        The time when the step was created. - In response: always set - In create/update request: never set
        
    - name: completionTime
      value: object
      description: >
        The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set
        
    - name: name
      value: string
      description: >
        A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set
        
    - name: description
      value: string
      description: >
        A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional
        
    - name: state
      value: string
      description: >
        The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional
        
      valid_values: ['unknownState', 'pending', 'inProgress', 'complete']
    - name: outcome
      value: object
      description: >
        Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional
        
    - name: hasImages
      value: boolean
      description: >
        Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set
        
    - name: labels
      value: array
      description: >
        Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value
        
    - name: dimensionValue
      value: array
      description: >
        If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set
        
    - name: runDuration
      value: object
      description: >
        How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional
        
    - name: deviceUsageDuration
      value: object
      description: >
        How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional
        
    - name: multiStep
      value: object
      description: >
        Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional
        
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

Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

```sql
UPDATE firebase.toolresults.steps
SET 
data__testExecutionStep = '{{ testExecutionStep }}',
data__toolExecutionStep = '{{ toolExecutionStep }}',
data__stepId = '{{ stepId }}',
data__creationTime = '{{ creationTime }}',
data__completionTime = '{{ completionTime }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__state = '{{ state }}',
data__outcome = '{{ outcome }}',
data__hasImages = {{ hasImages }},
data__labels = '{{ labels }}',
data__dimensionValue = '{{ dimensionValue }}',
data__runDuration = '{{ runDuration }}',
data__deviceUsageDuration = '{{ deviceUsageDuration }}',
data__multiStep = '{{ multiStep }}'
WHERE 
projectId = '{{ projectId }}' --required
AND historyId = '{{ historyId }}' --required
AND executionId = '{{ executionId }}' --required
AND stepId = '{{ stepId }}' --required
AND requestId = '{{ requestId}}'
RETURNING
name,
completionTime,
creationTime,
description,
deviceUsageDuration,
dimensionValue,
hasImages,
labels,
multiStep,
outcome,
runDuration,
state,
stepId,
testExecutionStep,
toolExecutionStep;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accessibility_clusters"
    values={[
        { label: 'accessibility_clusters', value: 'accessibility_clusters' },
        { label: 'publish_xunit_xml_files', value: 'publish_xunit_xml_files' }
    ]}
>
<TabItem value="accessibility_clusters">

Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist

```sql
EXEC firebase.toolresults.steps.accessibility_clusters 
@projectsId='{{ projectsId }}' --required, 
@historiesId='{{ historiesId }}' --required, 
@executionsId='{{ executionsId }}' --required, 
@stepsId='{{ stepsId }}' --required, 
@locale='{{ locale }}';
```
</TabItem>
<TabItem value="publish_xunit_xml_files">

Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

```sql
EXEC firebase.toolresults.steps.publish_xunit_xml_files 
@projectId='{{ projectId }}' --required, 
@historyId='{{ historyId }}' --required, 
@executionId='{{ executionId }}' --required, 
@stepId='{{ stepId }}' --required 
@@json=
'{
"xunitXmlFiles": "{{ xunitXmlFiles }}"
}';
```
</TabItem>
</Tabs>
