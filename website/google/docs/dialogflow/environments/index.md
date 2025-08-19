--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_environments_get"
    values={[
        { label: 'projects_locations_agents_environments_get', value: 'projects_locations_agents_environments_get' },
        { label: 'projects_locations_agents_environments_list', value: 'projects_locations_agents_environments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_get">

Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.

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
    <td>The name of the environment. Format: `projects//locations//agents//environments/`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="testCasesConfig" /></td>
    <td><code>object</code></td>
    <td>The test cases config for continuous tests of this environment. (id: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time of this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="versionConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="webhookConfig" /></td>
    <td><code>object</code></td>
    <td>The webhook configuration for this environment. (id: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_environments_list">

The response message for Environments.ListEnvironments.

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
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>The list of environments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
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
    <td><a href="#projects_locations_agents_environments_get"><CopyableCode code="projects_locations_agents_environments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Retrieves the specified Environment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_list"><CopyableCode code="projects_locations_agents_environments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all environments in the specified Agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_create"><CopyableCode code="projects_locations_agents_environments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_patch"><CopyableCode code="projects_locations_agents_environments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_delete"><CopyableCode code="projects_locations_agents_environments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Deletes the specified Environment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_lookup_environment_history"><CopyableCode code="projects_locations_agents_environments_lookup_environment_history" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Looks up the history of the specified Environment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_run_continuous_test"><CopyableCode code="projects_locations_agents_environments_run_continuous_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_deploy_flow"><CopyableCode code="projects_locations_agents_environments_deploy_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_get"
    values={[
        { label: 'projects_locations_agents_environments_get', value: 'projects_locations_agents_environments_get' },
        { label: 'projects_locations_agents_environments_list', value: 'projects_locations_agents_environments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_get">

Retrieves the specified Environment.

```sql
SELECT
name,
description,
displayName,
testCasesConfig,
updateTime,
versionConfigs,
webhookConfig
FROM google.dialogflow.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_list">

Returns the list of all environments in the specified Agent.

```sql
SELECT
environments,
nextPageToken
FROM google.dialogflow.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_create"
    values={[
        { label: 'projects_locations_agents_environments_create', value: 'projects_locations_agents_environments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_environments_create">

Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment

```sql
INSERT INTO google.dialogflow.environments (
data__name,
data__displayName,
data__description,
data__versionConfigs,
data__testCasesConfig,
data__webhookConfig,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ versionConfigs }}',
'{{ testCasesConfig }}',
'{{ webhookConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: environments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the environments resource.
    - name: locationsId
      value: string
      description: Required parameter for the environments resource.
    - name: agentsId
      value: string
      description: Required parameter for the environments resource.
    - name: name
      value: string
      description: >
        The name of the environment. Format: `projects//locations//agents//environments/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.
        
    - name: description
      value: string
      description: >
        The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
        
    - name: versionConfigs
      value: array
      description: >
        A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.
        
    - name: testCasesConfig
      value: object
      description: >
        The test cases config for continuous tests of this environment.
        
    - name: webhookConfig
      value: object
      description: >
        The webhook configuration for this environment.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_patch"
    values={[
        { label: 'projects_locations_agents_environments_patch', value: 'projects_locations_agents_environments_patch' }
    ]}
>
<TabItem value="projects_locations_agents_environments_patch">

Updates the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment

```sql
UPDATE google.dialogflow.environments
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__versionConfigs = '{{ versionConfigs }}',
data__testCasesConfig = '{{ testCasesConfig }}',
data__webhookConfig = '{{ webhookConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_delete"
    values={[
        { label: 'projects_locations_agents_environments_delete', value: 'projects_locations_agents_environments_delete' }
    ]}
>
<TabItem value="projects_locations_agents_environments_delete">

Deletes the specified Environment.

```sql
DELETE FROM google.dialogflow.environments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_environments_lookup_environment_history"
    values={[
        { label: 'projects_locations_agents_environments_lookup_environment_history', value: 'projects_locations_agents_environments_lookup_environment_history' },
        { label: 'projects_locations_agents_environments_run_continuous_test', value: 'projects_locations_agents_environments_run_continuous_test' },
        { label: 'projects_locations_agents_environments_deploy_flow', value: 'projects_locations_agents_environments_deploy_flow' }
    ]}
>
<TabItem value="projects_locations_agents_environments_lookup_environment_history">

Looks up the history of the specified Environment.

```sql
EXEC google.dialogflow.environments.projects_locations_agents_environments_lookup_environment_history 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_agents_environments_run_continuous_test">

Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse

```sql
EXEC google.dialogflow.environments.projects_locations_agents_environments_run_continuous_test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_deploy_flow">

Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse

```sql
EXEC google.dialogflow.environments.projects_locations_agents_environments_deploy_flow 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"flowVersion": "{{ flowVersion }}"
}';
```
</TabItem>
</Tabs>
