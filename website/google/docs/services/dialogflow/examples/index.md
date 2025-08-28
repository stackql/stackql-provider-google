--- 
title: examples
hide_title: false
hide_table_of_contents: false
keywords:
  - examples
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

Creates, updates, deletes, gets or lists an <code>examples</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>examples</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.examples" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_get"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_get', value: 'projects_locations_agents_playbooks_examples_get' },
        { label: 'projects_locations_agents_playbooks_examples_list', value: 'projects_locations_agents_playbooks_examples_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_get">

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
    <td>The unique identifier of the playbook example. Format: `projects//locations//agents//playbooks//examples/`.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Required. The ordered list of actions performed by the end user and the Dialogflow agent.</td>
</tr>
<tr>
    <td><CopyableCode code="conversationState" /></td>
    <td><code>string</code></td>
    <td>Required. Example's output state.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of initial example creation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The high level concise description of the example. The max number of characters is 200.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the example.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Optional. The language code of the example. If not specified, the agent's default language is used. Note: languages must be enabled in the agent before they can be used. Note: example's language code is not currently used in dialogflow agents.</td>
</tr>
<tr>
    <td><CopyableCode code="playbookInput" /></td>
    <td><code>object</code></td>
    <td>Optional. The input to the playbook in the example. (id: GoogleCloudDialogflowCxV3PlaybookInput)</td>
</tr>
<tr>
    <td><CopyableCode code="playbookOutput" /></td>
    <td><code>object</code></td>
    <td>Optional. The output of the playbook in the example. (id: GoogleCloudDialogflowCxV3PlaybookOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Estimated number of tokes current example takes when sent to the LLM.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the example was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_playbooks_examples_list">

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
    <td>The unique identifier of the playbook example. Format: `projects//locations//agents//playbooks//examples/`.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Required. The ordered list of actions performed by the end user and the Dialogflow agent.</td>
</tr>
<tr>
    <td><CopyableCode code="conversationState" /></td>
    <td><code>string</code></td>
    <td>Required. Example's output state.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of initial example creation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The high level concise description of the example. The max number of characters is 200.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the example.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Optional. The language code of the example. If not specified, the agent's default language is used. Note: languages must be enabled in the agent before they can be used. Note: example's language code is not currently used in dialogflow agents.</td>
</tr>
<tr>
    <td><CopyableCode code="playbookInput" /></td>
    <td><code>object</code></td>
    <td>Optional. The input to the playbook in the example. (id: GoogleCloudDialogflowCxV3PlaybookInput)</td>
</tr>
<tr>
    <td><CopyableCode code="playbookOutput" /></td>
    <td><code>object</code></td>
    <td>Optional. The output of the playbook in the example. (id: GoogleCloudDialogflowCxV3PlaybookOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Estimated number of tokes current example takes when sent to the LLM.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the example was updated.</td>
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
    <td><a href="#projects_locations_agents_playbooks_examples_get"><CopyableCode code="projects_locations_agents_playbooks_examples_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td></td>
    <td>Retrieves the specified example.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_list"><CopyableCode code="projects_locations_agents_playbooks_examples_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Returns a list of examples in the specified playbook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_create"><CopyableCode code="projects_locations_agents_playbooks_examples_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td>Creates an example in the specified playbook.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_patch"><CopyableCode code="projects_locations_agents_playbooks_examples_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update the specified example.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_delete"><CopyableCode code="projects_locations_agents_playbooks_examples_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td></td>
    <td>Deletes the specified example.</td>
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
<tr id="parameter-examplesId">
    <td><CopyableCode code="examplesId" /></td>
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
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
    defaultValue="projects_locations_agents_playbooks_examples_get"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_get', value: 'projects_locations_agents_playbooks_examples_get' },
        { label: 'projects_locations_agents_playbooks_examples_list', value: 'projects_locations_agents_playbooks_examples_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_get">

Retrieves the specified example.

```sql
SELECT
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime
FROM google.dialogflow.examples
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
AND examplesId = '{{ examplesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_examples_list">

Returns a list of examples in the specified playbook.

```sql
SELECT
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime
FROM google.dialogflow.examples
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND languageCode = '{{ languageCode }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_create"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_create', value: 'projects_locations_agents_playbooks_examples_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_create">

Creates an example in the specified playbook.

```sql
INSERT INTO google.dialogflow.examples (
data__name,
data__playbookInput,
data__playbookOutput,
data__actions,
data__displayName,
data__description,
data__conversationState,
data__languageCode,
projectsId,
locationsId,
agentsId,
playbooksId
)
SELECT 
'{{ name }}',
'{{ playbookInput }}',
'{{ playbookOutput }}',
'{{ actions }}',
'{{ displayName }}',
'{{ description }}',
'{{ conversationState }}',
'{{ languageCode }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ playbooksId }}'
RETURNING
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: examples
  props:
    - name: projectsId
      value: string
      description: Required parameter for the examples resource.
    - name: locationsId
      value: string
      description: Required parameter for the examples resource.
    - name: agentsId
      value: string
      description: Required parameter for the examples resource.
    - name: playbooksId
      value: string
      description: Required parameter for the examples resource.
    - name: name
      value: string
      description: >
        The unique identifier of the playbook example. Format: `projects//locations//agents//playbooks//examples/`.
        
    - name: playbookInput
      value: object
      description: >
        Optional. The input to the playbook in the example.
        
    - name: playbookOutput
      value: object
      description: >
        Optional. The output of the playbook in the example.
        
    - name: actions
      value: array
      description: >
        Required. The ordered list of actions performed by the end user and the Dialogflow agent.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the example.
        
    - name: description
      value: string
      description: >
        Optional. The high level concise description of the example. The max number of characters is 200.
        
    - name: conversationState
      value: string
      description: >
        Required. Example's output state.
        
      valid_values: ['OUTPUT_STATE_UNSPECIFIED', 'OUTPUT_STATE_OK', 'OUTPUT_STATE_CANCELLED', 'OUTPUT_STATE_FAILED', 'OUTPUT_STATE_ESCALATED', 'OUTPUT_STATE_PENDING']
    - name: languageCode
      value: string
      description: >
        Optional. The language code of the example. If not specified, the agent's default language is used. Note: languages must be enabled in the agent before they can be used. Note: example's language code is not currently used in dialogflow agents.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_patch"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_patch', value: 'projects_locations_agents_playbooks_examples_patch' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_patch">

Update the specified example.

```sql
UPDATE google.dialogflow.examples
SET 
data__name = '{{ name }}',
data__playbookInput = '{{ playbookInput }}',
data__playbookOutput = '{{ playbookOutput }}',
data__actions = '{{ actions }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__conversationState = '{{ conversationState }}',
data__languageCode = '{{ languageCode }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND examplesId = '{{ examplesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_delete"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_delete', value: 'projects_locations_agents_playbooks_examples_delete' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_delete">

Deletes the specified example.

```sql
DELETE FROM google.dialogflow.examples
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND examplesId = '{{ examplesId }}' --required;
```
</TabItem>
</Tabs>
