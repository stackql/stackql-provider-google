--- 
title: test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - test_cases
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>test_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>test_cases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_test_cases_get"
    values={[
        { label: 'projects_locations_agents_test_cases_get', value: 'projects_locations_agents_test_cases_get' },
        { label: 'projects_locations_agents_test_cases_list', value: 'projects_locations_agents_test_cases_list' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_get">

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
    <td>The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents//testCases/`.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTestResult" /></td>
    <td><code>object</code></td>
    <td>The latest test result. (id: GoogleCloudDialogflowCxV3TestCaseResult)</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Additional freeform notes about the test case. Limit of 400 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseConversationTurns" /></td>
    <td><code>array</code></td>
    <td>The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.</td>
</tr>
<tr>
    <td><CopyableCode code="testConfig" /></td>
    <td><code>object</code></td>
    <td>Config for the test case. (id: GoogleCloudDialogflowCxV3TestConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_test_cases_list">

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
    <td>The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents//testCases/`.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTestResult" /></td>
    <td><code>object</code></td>
    <td>The latest test result. (id: GoogleCloudDialogflowCxV3TestCaseResult)</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Additional freeform notes about the test case. Limit of 400 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseConversationTurns" /></td>
    <td><code>array</code></td>
    <td>The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.</td>
</tr>
<tr>
    <td><CopyableCode code="testConfig" /></td>
    <td><code>object</code></td>
    <td>Config for the test case. (id: GoogleCloudDialogflowCxV3TestConfig)</td>
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
    <td><a href="#projects_locations_agents_test_cases_get"><CopyableCode code="projects_locations_agents_test_cases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td>Gets a test case.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_list"><CopyableCode code="projects_locations_agents_test_cases_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Fetches a list of test cases for a given agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_create"><CopyableCode code="projects_locations_agents_test_cases_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Creates a test case for the given agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_patch"><CopyableCode code="projects_locations_agents_test_cases_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified test case.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_batch_delete"><CopyableCode code="projects_locations_agents_test_cases_batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Batch deletes test cases.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_run"><CopyableCode code="projects_locations_agents_test_cases_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td>Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_batch_run"><CopyableCode code="projects_locations_agents_test_cases_batch_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_calculate_coverage"><CopyableCode code="projects_locations_agents_test_cases_calculate_coverage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td>Calculates the test coverage for an agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_import"><CopyableCode code="projects_locations_agents_test_cases_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_export"><CopyableCode code="projects_locations_agents_test_cases_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse</td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
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
<tr id="parameter-testCasesId">
    <td><CopyableCode code="testCasesId" /></td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_agents_test_cases_get"
    values={[
        { label: 'projects_locations_agents_test_cases_get', value: 'projects_locations_agents_test_cases_get' },
        { label: 'projects_locations_agents_test_cases_list', value: 'projects_locations_agents_test_cases_list' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_get">

Gets a test case.

```sql
SELECT
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig
FROM google.dialogflow.test_cases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND testCasesId = '{{ testCasesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_list">

Fetches a list of test cases for a given agent.

```sql
SELECT
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig
FROM google.dialogflow.test_cases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_create"
    values={[
        { label: 'projects_locations_agents_test_cases_create', value: 'projects_locations_agents_test_cases_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_create">

Creates a test case for the given agent.

```sql
INSERT INTO google.dialogflow.test_cases (
data__name,
data__tags,
data__displayName,
data__notes,
data__testConfig,
data__testCaseConversationTurns,
data__lastTestResult,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ name }}',
'{{ tags }}',
'{{ displayName }}',
'{{ notes }}',
'{{ testConfig }}',
'{{ testCaseConversationTurns }}',
'{{ lastTestResult }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: test_cases
  props:
    - name: projectsId
      value: string
      description: Required parameter for the test_cases resource.
    - name: locationsId
      value: string
      description: Required parameter for the test_cases resource.
    - name: agentsId
      value: string
      description: Required parameter for the test_cases resource.
    - name: name
      value: string
      description: >
        The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents//testCases/`.
        
    - name: tags
      value: array
      description: >
        Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.
        
    - name: notes
      value: string
      description: >
        Additional freeform notes about the test case. Limit of 400 characters.
        
    - name: testConfig
      value: object
      description: >
        Config for the test case.
        
    - name: testCaseConversationTurns
      value: array
      description: >
        The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
        
    - name: lastTestResult
      value: object
      description: >
        The latest test result.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_patch"
    values={[
        { label: 'projects_locations_agents_test_cases_patch', value: 'projects_locations_agents_test_cases_patch' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_patch">

Updates the specified test case.

```sql
UPDATE google.dialogflow.test_cases
SET 
data__name = '{{ name }}',
data__tags = '{{ tags }}',
data__displayName = '{{ displayName }}',
data__notes = '{{ notes }}',
data__testConfig = '{{ testConfig }}',
data__testCaseConversationTurns = '{{ testCaseConversationTurns }}',
data__lastTestResult = '{{ lastTestResult }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND testCasesId = '{{ testCasesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_batch_delete"
    values={[
        { label: 'projects_locations_agents_test_cases_batch_delete', value: 'projects_locations_agents_test_cases_batch_delete' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_batch_delete">

Batch deletes test cases.

```sql
DELETE FROM google.dialogflow.test_cases
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_test_cases_run"
    values={[
        { label: 'projects_locations_agents_test_cases_run', value: 'projects_locations_agents_test_cases_run' },
        { label: 'projects_locations_agents_test_cases_batch_run', value: 'projects_locations_agents_test_cases_batch_run' },
        { label: 'projects_locations_agents_test_cases_calculate_coverage', value: 'projects_locations_agents_test_cases_calculate_coverage' },
        { label: 'projects_locations_agents_test_cases_import', value: 'projects_locations_agents_test_cases_import' },
        { label: 'projects_locations_agents_test_cases_export', value: 'projects_locations_agents_test_cases_export' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_run">

Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@testCasesId='{{ testCasesId }}' --required 
@@json=
'{
"environment": "{{ environment }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_batch_run">

Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_batch_run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"environment": "{{ environment }}", 
"testCases": "{{ testCases }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_calculate_coverage">

Calculates the test coverage for an agent.

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_calculate_coverage 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@type='{{ type }}';
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_import">

Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"gcsUri": "{{ gcsUri }}", 
"content": "{{ content }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_export">

Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"gcsUri": "{{ gcsUri }}", 
"dataFormat": "{{ dataFormat }}", 
"filter": "{{ filter }}"
}';
```
</TabItem>
</Tabs>
