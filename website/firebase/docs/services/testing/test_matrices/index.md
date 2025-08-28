--- 
title: test_matrices
hide_title: false
hide_table_of_contents: false
keywords:
  - test_matrices
  - testing
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

Creates, updates, deletes, gets or lists a <code>test_matrices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>test_matrices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.testing.test_matrices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="clientInfo" /></td>
    <td><code>object</code></td>
    <td>Information about the client which invoked the test. (id: ClientInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentMatrix" /></td>
    <td><code>object</code></td>
    <td>Required. The devices the tests are being executed on. (id: EnvironmentMatrix)</td>
</tr>
<tr>
    <td><CopyableCode code="extendedInvalidMatrixDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Details about why a matrix was deemed invalid. If multiple checks can be safely performed, they will be reported but no assumptions should be made about the length of this list.</td>
</tr>
<tr>
    <td><CopyableCode code="failFast" /></td>
    <td><code>boolean</code></td>
    <td>If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.</td>
</tr>
<tr>
    <td><CopyableCode code="flakyTestAttempts" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidMatrixDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.</td>
</tr>
<tr>
    <td><CopyableCode code="outcomeSummary" /></td>
    <td><code>string</code></td>
    <td>Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The cloud project that owns the test matrix.</td>
</tr>
<tr>
    <td><CopyableCode code="resultStorage" /></td>
    <td><code>object</code></td>
    <td>Required. Where the results for the matrix are written. (id: ResultStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates the current progress of the test matrix.</td>
</tr>
<tr>
    <td><CopyableCode code="testExecutions" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of test executions that the service creates for this matrix.</td>
</tr>
<tr>
    <td><CopyableCode code="testMatrixId" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique id set by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="testSpecification" /></td>
    <td><code>object</code></td>
    <td>Required. How to run the test. (id: TestSpecification)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this test matrix was initially created.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-testMatrixId"><code>testMatrixId</code></a></td>
    <td></td>
    <td>Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. Execution creation happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-testMatrixId"><code>testMatrixId</code></a></td>
    <td></td>
    <td>Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist</td>
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
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-testMatrixId">
    <td><CopyableCode code="testMatrixId" /></td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

```sql
SELECT
clientInfo,
environmentMatrix,
extendedInvalidMatrixDetails,
failFast,
flakyTestAttempts,
invalidMatrixDetails,
outcomeSummary,
projectId,
resultStorage,
state,
testExecutions,
testMatrixId,
testSpecification,
timestamp
FROM firebase.testing.test_matrices
WHERE projectId = '{{ projectId }}' -- required
AND testMatrixId = '{{ testMatrixId }}' -- required;
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

Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. Execution creation happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.

```sql
INSERT INTO firebase.testing.test_matrices (
data__testMatrixId,
data__projectId,
data__clientInfo,
data__testSpecification,
data__environmentMatrix,
data__testExecutions,
data__resultStorage,
data__state,
data__timestamp,
data__invalidMatrixDetails,
data__flakyTestAttempts,
data__outcomeSummary,
data__failFast,
projectId,
requestId
)
SELECT 
'{{ testMatrixId }}',
'{{ projectId }}',
'{{ clientInfo }}',
'{{ testSpecification }}',
'{{ environmentMatrix }}',
'{{ testExecutions }}',
'{{ resultStorage }}',
'{{ state }}',
'{{ timestamp }}',
'{{ invalidMatrixDetails }}',
{{ flakyTestAttempts }},
'{{ outcomeSummary }}',
{{ failFast }},
'{{ projectId }}',
'{{ requestId }}'
RETURNING
clientInfo,
environmentMatrix,
extendedInvalidMatrixDetails,
failFast,
flakyTestAttempts,
invalidMatrixDetails,
outcomeSummary,
projectId,
resultStorage,
state,
testExecutions,
testMatrixId,
testSpecification,
timestamp
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: test_matrices
  props:
    - name: projectId
      value: string
      description: Required parameter for the test_matrices resource.
    - name: testMatrixId
      value: string
      description: >
        Output only. Unique id set by the service.
        
    - name: projectId
      value: string
      description: >
        The cloud project that owns the test matrix.
        
    - name: clientInfo
      value: object
      description: >
        Information about the client which invoked the test.
        
    - name: testSpecification
      value: object
      description: >
        Required. How to run the test.
        
    - name: environmentMatrix
      value: object
      description: >
        Required. The devices the tests are being executed on.
        
    - name: testExecutions
      value: array
      description: >
        Output only. The list of test executions that the service creates for this matrix.
        
    - name: resultStorage
      value: object
      description: >
        Required. Where the results for the matrix are written.
        
    - name: state
      value: string
      description: >
        Output only. Indicates the current progress of the test matrix.
        
      valid_values: ['TEST_STATE_UNSPECIFIED', 'VALIDATING', 'PENDING', 'RUNNING', 'FINISHED', 'ERROR', 'UNSUPPORTED_ENVIRONMENT', 'INCOMPATIBLE_ENVIRONMENT', 'INCOMPATIBLE_ARCHITECTURE', 'CANCELLED', 'INVALID']
    - name: timestamp
      value: string
      description: >
        Output only. The time this test matrix was initially created.
        
    - name: invalidMatrixDetails
      value: string
      description: >
        Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.
        
      valid_values: ['INVALID_MATRIX_DETAILS_UNSPECIFIED', 'DETAILS_UNAVAILABLE', 'MALFORMED_APK', 'MALFORMED_TEST_APK', 'NO_MANIFEST', 'NO_PACKAGE_NAME', 'INVALID_PACKAGE_NAME', 'TEST_SAME_AS_APP', 'NO_INSTRUMENTATION', 'NO_SIGNATURE', 'INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE', 'NO_TEST_RUNNER_CLASS', 'NO_LAUNCHER_ACTIVITY', 'FORBIDDEN_PERMISSIONS', 'INVALID_ROBO_DIRECTIVES', 'INVALID_RESOURCE_NAME', 'INVALID_DIRECTIVE_ACTION', 'TEST_LOOP_INTENT_FILTER_NOT_FOUND', 'SCENARIO_LABEL_NOT_DECLARED', 'SCENARIO_LABEL_MALFORMED', 'SCENARIO_NOT_DECLARED', 'DEVICE_ADMIN_RECEIVER', 'MALFORMED_XC_TEST_ZIP', 'BUILT_FOR_IOS_SIMULATOR', 'NO_TESTS_IN_XC_TEST_ZIP', 'USE_DESTINATION_ARTIFACTS', 'TEST_NOT_APP_HOSTED', 'PLIST_CANNOT_BE_PARSED', 'TEST_ONLY_APK', 'MALFORMED_IPA', 'MISSING_URL_SCHEME', 'MALFORMED_APP_BUNDLE', 'NO_CODE_APK', 'INVALID_INPUT_APK', 'INVALID_APK_PREVIEW_SDK', 'MATRIX_TOO_LARGE', 'TEST_QUOTA_EXCEEDED', 'SERVICE_NOT_ACTIVATED', 'UNKNOWN_PERMISSION_ERROR']
    - name: flakyTestAttempts
      value: integer
      description: >
        The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.
        
    - name: outcomeSummary
      value: string
      description: >
        Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.
        
      valid_values: ['OUTCOME_SUMMARY_UNSPECIFIED', 'SUCCESS', 'FAILURE', 'INCONCLUSIVE', 'SKIPPED']
    - name: failFast
      value: boolean
      description: >
        If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

```sql
EXEC firebase.testing.test_matrices.cancel 
@projectId='{{ projectId }}' --required, 
@testMatrixId='{{ testMatrixId }}' --required;
```
</TabItem>
</Tabs>
