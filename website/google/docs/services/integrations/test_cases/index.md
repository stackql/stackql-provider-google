--- 
title: test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - test_cases
  - integrations
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_integrations_versions_test_cases_get"
    values={[
        { label: 'projects_locations_integrations_versions_test_cases_get', value: 'projects_locations_integrations_versions_test_cases_get' },
        { label: 'projects_locations_integrations_versions_test_cases_list', value: 'projects_locations_integrations_versions_test_cases_list' }
    ]}
>
<TabItem value="projects_locations_integrations_versions_test_cases_get">

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
    <td>Output only. Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePersistencePolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Various policies for how to persist the test execution info including execution info, execution export info, execution metadata index and execution param index..</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of test case.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="lockHolderEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="testInputParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Parameters that are expected to be passed to the test case when the test case is triggered. This gives the user the ability to provide default values. This should include all the output variables of the trigger as input variables.</td>
</tr>
<tr>
    <td><CopyableCode code="testTaskConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. However, the test case doesn't mock or assert anything without test_task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration detail of a trigger. (id: GoogleCloudIntegrationsV1alphaTriggerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerId" /></td>
    <td><code>string</code></td>
    <td>Required. This defines the trigger ID in workflow which is considered to be executed as starting point of the test case</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Auto-generated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_versions_test_cases_list">

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
    <td>Output only. Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePersistencePolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Various policies for how to persist the test execution info including execution info, execution export info, execution metadata index and execution param index..</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of test case.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="lockHolderEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="testInputParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Parameters that are expected to be passed to the test case when the test case is triggered. This gives the user the ability to provide default values. This should include all the output variables of the trigger as input variables.</td>
</tr>
<tr>
    <td><CopyableCode code="testTaskConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. However, the test case doesn't mock or assert anything without test_task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration detail of a trigger. (id: GoogleCloudIntegrationsV1alphaTriggerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerId" /></td>
    <td><code>string</code></td>
    <td>Required. This defines the trigger ID in workflow which is considered to be executed as starting point of the test case</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Auto-generated.</td>
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
    <td><a href="#projects_locations_integrations_versions_test_cases_get"><CopyableCode code="projects_locations_integrations_versions_test_cases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td>Get a test case</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_list"><CopyableCode code="projects_locations_integrations_versions_test_cases_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all the test cases that satisfy the filters.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_create"><CopyableCode code="projects_locations_integrations_versions_test_cases_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-testCaseId"><code>testCaseId</code></a></td>
    <td>Creates a new test case</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_patch"><CopyableCode code="projects_locations_integrations_versions_test_cases_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a test case</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_delete"><CopyableCode code="projects_locations_integrations_versions_test_cases_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td>Deletes a test case</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_execute_test"><CopyableCode code="projects_locations_integrations_versions_test_cases_execute_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td>Executes functional test</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_upload"><CopyableCode code="projects_locations_integrations_versions_test_cases_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Uploads a test case. The content can be a previously downloaded test case. Performs the same function as CreateTestCase, but accepts input in a string format, which holds the complete representation of the TestCase content.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_download"><CopyableCode code="projects_locations_integrations_versions_test_cases_download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td><a href="#parameter-fileFormat"><code>fileFormat</code></a></td>
    <td>Downloads a test case. Retrieves the `TestCase` for a given `test_case_id` and returns the response as a string.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_takeover_edit_lock"><CopyableCode code="projects_locations_integrations_versions_test_cases_takeover_edit_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td>Clear the lock fields and assign them to current user</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_test_cases_execute"><CopyableCode code="projects_locations_integrations_versions_test_cases_execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Executes all test cases in an integration version.</td>
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
<tr id="parameter-integrationsId">
    <td><CopyableCode code="integrationsId" /></td>
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
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fileFormat">
    <td><CopyableCode code="fileFormat" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-testCaseId">
    <td><CopyableCode code="testCaseId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_integrations_versions_test_cases_get"
    values={[
        { label: 'projects_locations_integrations_versions_test_cases_get', value: 'projects_locations_integrations_versions_test_cases_get' },
        { label: 'projects_locations_integrations_versions_test_cases_list', value: 'projects_locations_integrations_versions_test_cases_list' }
    ]}
>
<TabItem value="projects_locations_integrations_versions_test_cases_get">

Get a test case

```sql
SELECT
name,
createTime,
creatorEmail,
databasePersistencePolicy,
description,
displayName,
lastModifierEmail,
lockHolderEmail,
testInputParameters,
testTaskConfigs,
triggerConfig,
triggerId,
updateTime
FROM google.integrations.test_cases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND testCasesId = '{{ testCasesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_test_cases_list">

Lists all the test cases that satisfy the filters.

```sql
SELECT
name,
createTime,
creatorEmail,
databasePersistencePolicy,
description,
displayName,
lastModifierEmail,
lockHolderEmail,
testInputParameters,
testTaskConfigs,
triggerConfig,
triggerId,
updateTime
FROM google.integrations.test_cases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_integrations_versions_test_cases_create"
    values={[
        { label: 'projects_locations_integrations_versions_test_cases_create', value: 'projects_locations_integrations_versions_test_cases_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_integrations_versions_test_cases_create">

Creates a new test case

```sql
INSERT INTO google.integrations.test_cases (
data__displayName,
data__description,
data__triggerId,
data__testInputParameters,
data__testTaskConfigs,
data__databasePersistencePolicy,
data__creatorEmail,
data__createTime,
data__lastModifierEmail,
data__updateTime,
data__lockHolderEmail,
data__triggerConfig,
projectsId,
locationsId,
integrationsId,
versionsId,
testCaseId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ triggerId }}',
'{{ testInputParameters }}',
'{{ testTaskConfigs }}',
'{{ databasePersistencePolicy }}',
'{{ creatorEmail }}',
'{{ createTime }}',
'{{ lastModifierEmail }}',
'{{ updateTime }}',
'{{ lockHolderEmail }}',
'{{ triggerConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ integrationsId }}',
'{{ versionsId }}',
'{{ testCaseId }}'
RETURNING
name,
createTime,
creatorEmail,
databasePersistencePolicy,
description,
displayName,
lastModifierEmail,
lockHolderEmail,
testInputParameters,
testTaskConfigs,
triggerConfig,
triggerId,
updateTime
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
    - name: integrationsId
      value: string
      description: Required parameter for the test_cases resource.
    - name: versionsId
      value: string
      description: Required parameter for the test_cases resource.
    - name: displayName
      value: string
      description: >
        Required. The display name of test case.
        
    - name: description
      value: string
      description: >
        Optional. Description of the test case.
        
    - name: triggerId
      value: string
      description: >
        Required. This defines the trigger ID in workflow which is considered to be executed as starting point of the test case
        
    - name: testInputParameters
      value: array
      description: >
        Optional. Parameters that are expected to be passed to the test case when the test case is triggered. This gives the user the ability to provide default values. This should include all the output variables of the trigger as input variables.
        
    - name: testTaskConfigs
      value: array
      description: >
        Optional. However, the test case doesn't mock or assert anything without test_task_configs.
        
    - name: databasePersistencePolicy
      value: string
      description: >
        Optional. Various policies for how to persist the test execution info including execution info, execution export info, execution metadata index and execution param index..
        
      valid_values: ['DATABASE_PERSISTENCE_POLICY_UNSPECIFIED', 'DATABASE_PERSISTENCE_DISABLED', 'DATABASE_PERSISTENCE_ASYNC']
    - name: creatorEmail
      value: string
      description: >
        Optional. The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: createTime
      value: string
      description: >
        Auto-generated.
        
    - name: lastModifierEmail
      value: string
      description: >
        The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: updateTime
      value: string
      description: >
        Auto-generated.
        
    - name: lockHolderEmail
      value: string
      description: >
        Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: triggerConfig
      value: object
      description: >
        Configuration detail of a trigger.
        
    - name: testCaseId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_integrations_versions_test_cases_patch"
    values={[
        { label: 'projects_locations_integrations_versions_test_cases_patch', value: 'projects_locations_integrations_versions_test_cases_patch' }
    ]}
>
<TabItem value="projects_locations_integrations_versions_test_cases_patch">

Updates a test case

```sql
UPDATE google.integrations.test_cases
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__triggerId = '{{ triggerId }}',
data__testInputParameters = '{{ testInputParameters }}',
data__testTaskConfigs = '{{ testTaskConfigs }}',
data__databasePersistencePolicy = '{{ databasePersistencePolicy }}',
data__creatorEmail = '{{ creatorEmail }}',
data__createTime = '{{ createTime }}',
data__lastModifierEmail = '{{ lastModifierEmail }}',
data__updateTime = '{{ updateTime }}',
data__lockHolderEmail = '{{ lockHolderEmail }}',
data__triggerConfig = '{{ triggerConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND testCasesId = '{{ testCasesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
creatorEmail,
databasePersistencePolicy,
description,
displayName,
lastModifierEmail,
lockHolderEmail,
testInputParameters,
testTaskConfigs,
triggerConfig,
triggerId,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_integrations_versions_test_cases_delete"
    values={[
        { label: 'projects_locations_integrations_versions_test_cases_delete', value: 'projects_locations_integrations_versions_test_cases_delete' }
    ]}
>
<TabItem value="projects_locations_integrations_versions_test_cases_delete">

Deletes a test case

```sql
DELETE FROM google.integrations.test_cases
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND testCasesId = '{{ testCasesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_integrations_versions_test_cases_execute_test"
    values={[
        { label: 'projects_locations_integrations_versions_test_cases_execute_test', value: 'projects_locations_integrations_versions_test_cases_execute_test' },
        { label: 'projects_locations_integrations_versions_test_cases_upload', value: 'projects_locations_integrations_versions_test_cases_upload' },
        { label: 'projects_locations_integrations_versions_test_cases_download', value: 'projects_locations_integrations_versions_test_cases_download' },
        { label: 'projects_locations_integrations_versions_test_cases_takeover_edit_lock', value: 'projects_locations_integrations_versions_test_cases_takeover_edit_lock' },
        { label: 'projects_locations_integrations_versions_test_cases_execute', value: 'projects_locations_integrations_versions_test_cases_execute' }
    ]}
>
<TabItem value="projects_locations_integrations_versions_test_cases_execute_test">

Executes functional test

```sql
EXEC google.integrations.test_cases.projects_locations_integrations_versions_test_cases_execute_test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@testCasesId='{{ testCasesId }}' --required 
@@json=
'{
"inputParameters": "{{ inputParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_test_cases_upload">

Uploads a test case. The content can be a previously downloaded test case. Performs the same function as CreateTestCase, but accepts input in a string format, which holds the complete representation of the TestCase content.

```sql
EXEC google.integrations.test_cases.projects_locations_integrations_versions_test_cases_upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"content": "{{ content }}", 
"fileFormat": "{{ fileFormat }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_test_cases_download">

Downloads a test case. Retrieves the `TestCase` for a given `test_case_id` and returns the response as a string.

```sql
EXEC google.integrations.test_cases.projects_locations_integrations_versions_test_cases_download 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@testCasesId='{{ testCasesId }}' --required, 
@fileFormat='{{ fileFormat }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_test_cases_takeover_edit_lock">

Clear the lock fields and assign them to current user

```sql
EXEC google.integrations.test_cases.projects_locations_integrations_versions_test_cases_takeover_edit_lock 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@testCasesId='{{ testCasesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_test_cases_execute">

Executes all test cases in an integration version.

```sql
EXEC google.integrations.test_cases.projects_locations_integrations_versions_test_cases_execute 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required;
```
</TabItem>
</Tabs>
