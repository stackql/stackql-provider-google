--- 
title: playbooks
hide_title: false
hide_table_of_contents: false
keywords:
  - playbooks
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

Creates, updates, deletes, gets or lists a <code>playbooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>playbooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.playbooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_playbooks_get"
    values={[
        { label: 'projects_locations_agents_playbooks_get', value: 'projects_locations_agents_playbooks_get' },
        { label: 'projects_locations_agents_playbooks_list', value: 'projects_locations_agents_playbooks_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_get">

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
    <td>The unique identifier of the playbook. Format: `projects//locations//agents//playbooks/`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of initial playbook creation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the playbook, unique within an agent.</td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>string</code></td>
    <td>Required. High level description of the goal the playbook intend to accomplish. A goal should be concise since it's visible to other playbooks that may reference this playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="handlers" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of registered handlers to execuate based on the specified triggers.</td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured input parameters for this playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>object</code></td>
    <td>Instruction to accomplish target goal. (id: GoogleCloudDialogflowCxV3PlaybookInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Llm model settings for the playbook. (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured output parameters for this playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="playbookType" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of the playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="referencedFlows" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource name of flows referenced by the current playbook in the instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="referencedPlaybooks" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource name of other playbooks referenced by the current playbook in the instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="referencedTools" /></td>
    <td><code>array</code></td>
    <td>Optional. The resource name of tools referenced by the current playbook in the instructions. If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.</td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Estimated number of tokes current playbook takes when sent to the LLM.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the playbook version was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_playbooks_list">

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
    <td>The unique identifier of the playbook. Format: `projects//locations//agents//playbooks/`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of initial playbook creation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the playbook, unique within an agent.</td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>string</code></td>
    <td>Required. High level description of the goal the playbook intend to accomplish. A goal should be concise since it's visible to other playbooks that may reference this playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="handlers" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of registered handlers to execuate based on the specified triggers.</td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured input parameters for this playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>object</code></td>
    <td>Instruction to accomplish target goal. (id: GoogleCloudDialogflowCxV3PlaybookInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Llm model settings for the playbook. (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured output parameters for this playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="playbookType" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of the playbook.</td>
</tr>
<tr>
    <td><CopyableCode code="referencedFlows" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource name of flows referenced by the current playbook in the instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="referencedPlaybooks" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource name of other playbooks referenced by the current playbook in the instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="referencedTools" /></td>
    <td><code>array</code></td>
    <td>Optional. The resource name of tools referenced by the current playbook in the instructions. If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.</td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Estimated number of tokes current playbook takes when sent to the LLM.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the playbook version was updated.</td>
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
    <td><a href="#projects_locations_agents_playbooks_get"><CopyableCode code="projects_locations_agents_playbooks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td>Retrieves the specified Playbook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_list"><CopyableCode code="projects_locations_agents_playbooks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of playbooks in the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_create"><CopyableCode code="projects_locations_agents_playbooks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Creates a playbook in a specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_patch"><CopyableCode code="projects_locations_agents_playbooks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Playbook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_delete"><CopyableCode code="projects_locations_agents_playbooks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td>Deletes a specified playbook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_export"><CopyableCode code="projects_locations_agents_playbooks_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td>Exports the specified playbook to a binary file. Note that resources (e.g. examples, tools) that the playbook references will also be exported.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_import"><CopyableCode code="projects_locations_agents_playbooks_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Imports the specified playbook to the specified agent from a binary file.</td>
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
<tr id="parameter-playbooksId">
    <td><CopyableCode code="playbooksId" /></td>
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
    defaultValue="projects_locations_agents_playbooks_get"
    values={[
        { label: 'projects_locations_agents_playbooks_get', value: 'projects_locations_agents_playbooks_get' },
        { label: 'projects_locations_agents_playbooks_list', value: 'projects_locations_agents_playbooks_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_get">

Retrieves the specified Playbook.

```sql
SELECT
name,
createTime,
displayName,
goal,
handlers,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime
FROM google.dialogflow.playbooks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_list">

Returns a list of playbooks in the specified agent.

```sql
SELECT
name,
createTime,
displayName,
goal,
handlers,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime
FROM google.dialogflow.playbooks
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
    defaultValue="projects_locations_agents_playbooks_create"
    values={[
        { label: 'projects_locations_agents_playbooks_create', value: 'projects_locations_agents_playbooks_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_create">

Creates a playbook in a specified agent.

```sql
INSERT INTO google.dialogflow.playbooks (
data__name,
data__displayName,
data__goal,
data__inputParameterDefinitions,
data__outputParameterDefinitions,
data__instruction,
data__referencedTools,
data__llmModelSettings,
data__handlers,
data__playbookType,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ goal }}',
'{{ inputParameterDefinitions }}',
'{{ outputParameterDefinitions }}',
'{{ instruction }}',
'{{ referencedTools }}',
'{{ llmModelSettings }}',
'{{ handlers }}',
'{{ playbookType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
createTime,
displayName,
goal,
handlers,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: playbooks
  props:
    - name: projectsId
      value: string
      description: Required parameter for the playbooks resource.
    - name: locationsId
      value: string
      description: Required parameter for the playbooks resource.
    - name: agentsId
      value: string
      description: Required parameter for the playbooks resource.
    - name: name
      value: string
      description: >
        The unique identifier of the playbook. Format: `projects//locations//agents//playbooks/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the playbook, unique within an agent.
        
    - name: goal
      value: string
      description: >
        Required. High level description of the goal the playbook intend to accomplish. A goal should be concise since it's visible to other playbooks that may reference this playbook.
        
    - name: inputParameterDefinitions
      value: array
      description: >
        Optional. Defined structured input parameters for this playbook.
        
    - name: outputParameterDefinitions
      value: array
      description: >
        Optional. Defined structured output parameters for this playbook.
        
    - name: instruction
      value: object
      description: >
        Instruction to accomplish target goal.
        
    - name: referencedTools
      value: array
      description: >
        Optional. The resource name of tools referenced by the current playbook in the instructions. If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.
        
    - name: llmModelSettings
      value: object
      description: >
        Optional. Llm model settings for the playbook.
        
    - name: handlers
      value: array
      description: >
        Optional. A list of registered handlers to execuate based on the specified triggers.
        
    - name: playbookType
      value: string
      description: >
        Optional. Type of the playbook.
        
      valid_values: ['PLAYBOOK_TYPE_UNSPECIFIED', 'TASK', 'ROUTINE']
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_patch"
    values={[
        { label: 'projects_locations_agents_playbooks_patch', value: 'projects_locations_agents_playbooks_patch' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_patch">

Updates the specified Playbook.

```sql
UPDATE google.dialogflow.playbooks
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__goal = '{{ goal }}',
data__inputParameterDefinitions = '{{ inputParameterDefinitions }}',
data__outputParameterDefinitions = '{{ outputParameterDefinitions }}',
data__instruction = '{{ instruction }}',
data__referencedTools = '{{ referencedTools }}',
data__llmModelSettings = '{{ llmModelSettings }}',
data__handlers = '{{ handlers }}',
data__playbookType = '{{ playbookType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
goal,
handlers,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_delete"
    values={[
        { label: 'projects_locations_agents_playbooks_delete', value: 'projects_locations_agents_playbooks_delete' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_delete">

Deletes a specified playbook.

```sql
DELETE FROM google.dialogflow.playbooks
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_playbooks_export"
    values={[
        { label: 'projects_locations_agents_playbooks_export', value: 'projects_locations_agents_playbooks_export' },
        { label: 'projects_locations_agents_playbooks_import', value: 'projects_locations_agents_playbooks_import' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_export">

Exports the specified playbook to a binary file. Note that resources (e.g. examples, tools) that the playbook references will also be exported.

```sql
EXEC google.dialogflow.playbooks.projects_locations_agents_playbooks_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@playbooksId='{{ playbooksId }}' --required 
@@json=
'{
"playbookUri": "{{ playbookUri }}", 
"dataFormat": "{{ dataFormat }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_import">

Imports the specified playbook to the specified agent from a binary file.

```sql
EXEC google.dialogflow.playbooks.projects_locations_agents_playbooks_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"playbookUri": "{{ playbookUri }}", 
"playbookContent": "{{ playbookContent }}", 
"importStrategy": "{{ importStrategy }}"
}';
```
</TabItem>
</Tabs>
