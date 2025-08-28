--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>flows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_flows_get"
    values={[
        { label: 'projects_locations_agents_flows_get', value: 'projects_locations_agents_flows_get' },
        { label: 'projects_locations_agents_flows_list', value: 'projects_locations_agents_flows_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_get">

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
    <td>The unique identifier of the flow. Format: `projects//locations//agents//flows/`.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td>Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level. (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td>A flow's event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page's event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured input parameters for this flow.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Knowledge connector configuration. (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the flow is locked for changes. If the flow is locked, modifications to the flow will be rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="multiLanguageSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Multi-lingual agent settings for this flow. (id: GoogleCloudDialogflowCxV3FlowMultiLanguageSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="nluSettings" /></td>
    <td><code>object</code></td>
    <td>NLU related settings of the flow. (id: GoogleCloudDialogflowCxV3NluSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured output parameters for this flow.</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRouteGroups" /></td>
    <td><code>array</code></td>
    <td>A flow's transition route group serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition route groups. Transition route groups defined in the page have higher priority than those defined in the flow. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups.</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRoutes" /></td>
    <td><code>array</code></td>
    <td>A flow's transition routes serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition routes and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evaluated in the following order: * TransitionRoutes with intent specified. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_flows_list">

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
    <td>The unique identifier of the flow. Format: `projects//locations//agents//flows/`.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td>Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level. (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td>A flow's event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page's event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured input parameters for this flow.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Knowledge connector configuration. (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the flow is locked for changes. If the flow is locked, modifications to the flow will be rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="multiLanguageSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Multi-lingual agent settings for this flow. (id: GoogleCloudDialogflowCxV3FlowMultiLanguageSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="nluSettings" /></td>
    <td><code>object</code></td>
    <td>NLU related settings of the flow. (id: GoogleCloudDialogflowCxV3NluSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td>Optional. Defined structured output parameters for this flow.</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRouteGroups" /></td>
    <td><code>array</code></td>
    <td>A flow's transition route group serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition route groups. Transition route groups defined in the page have higher priority than those defined in the flow. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups.</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRoutes" /></td>
    <td><code>array</code></td>
    <td>A flow's transition routes serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition routes and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evaluated in the following order: * TransitionRoutes with intent specified. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow.</td>
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
    <td><a href="#projects_locations_agents_flows_get"><CopyableCode code="projects_locations_agents_flows_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Retrieves the specified flow.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_list"><CopyableCode code="projects_locations_agents_flows_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Returns the list of all flows in the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_create"><CopyableCode code="projects_locations_agents_flows_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_patch"><CopyableCode code="projects_locations_agents_flows_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Updates the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_delete"><CopyableCode code="projects_locations_agents_flows_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a specified flow.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_train"><CopyableCode code="projects_locations_agents_flows_train" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td></td>
    <td>Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_validate"><CopyableCode code="projects_locations_agents_flows_validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td></td>
    <td>Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_import"><CopyableCode code="projects_locations_agents_flows_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_export"><CopyableCode code="projects_locations_agents_flows_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td></td>
    <td>Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.</td>
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
<tr id="parameter-flowsId">
    <td><CopyableCode code="flowsId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_agents_flows_get"
    values={[
        { label: 'projects_locations_agents_flows_get', value: 'projects_locations_agents_flows_get' },
        { label: 'projects_locations_agents_flows_list', value: 'projects_locations_agents_flows_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_get">

Retrieves the specified flow.

```sql
SELECT
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.flows
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND languageCode = '{{ languageCode }}';
```
</TabItem>
<TabItem value="projects_locations_agents_flows_list">

Returns the list of all flows in the specified agent.

```sql
SELECT
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.flows
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND languageCode = '{{ languageCode }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_flows_create"
    values={[
        { label: 'projects_locations_agents_flows_create', value: 'projects_locations_agents_flows_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_flows_create">

Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
INSERT INTO google.dialogflow.flows (
data__name,
data__displayName,
data__description,
data__transitionRoutes,
data__eventHandlers,
data__transitionRouteGroups,
data__nluSettings,
data__advancedSettings,
data__knowledgeConnectorSettings,
data__inputParameterDefinitions,
data__outputParameterDefinitions,
data__multiLanguageSettings,
data__locked,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ transitionRoutes }}',
'{{ eventHandlers }}',
'{{ transitionRouteGroups }}',
'{{ nluSettings }}',
'{{ advancedSettings }}',
'{{ knowledgeConnectorSettings }}',
'{{ inputParameterDefinitions }}',
'{{ outputParameterDefinitions }}',
'{{ multiLanguageSettings }}',
{{ locked }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: flows
  props:
    - name: projectsId
      value: string
      description: Required parameter for the flows resource.
    - name: locationsId
      value: string
      description: Required parameter for the flows resource.
    - name: agentsId
      value: string
      description: Required parameter for the flows resource.
    - name: name
      value: string
      description: >
        The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the flow.
        
    - name: description
      value: string
      description: >
        The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
        
    - name: transitionRoutes
      value: array
      description: >
        A flow's transition routes serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition routes and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evaluated in the following order: * TransitionRoutes with intent specified. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow.
        
    - name: eventHandlers
      value: array
      description: >
        A flow's event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page's event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
        
    - name: transitionRouteGroups
      value: array
      description: >
        A flow's transition route group serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition route groups. Transition route groups defined in the page have higher priority than those defined in the flow. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups.
        
    - name: nluSettings
      value: object
      description: >
        NLU related settings of the flow.
        
    - name: advancedSettings
      value: object
      description: >
        Hierarchical advanced settings for this flow. The settings exposed at the lower level overrides the settings exposed at the higher level.
        
    - name: knowledgeConnectorSettings
      value: object
      description: >
        Optional. Knowledge connector configuration.
        
    - name: inputParameterDefinitions
      value: array
      description: >
        Optional. Defined structured input parameters for this flow.
        
    - name: outputParameterDefinitions
      value: array
      description: >
        Optional. Defined structured output parameters for this flow.
        
    - name: multiLanguageSettings
      value: object
      description: >
        Optional. Multi-lingual agent settings for this flow.
        
    - name: locked
      value: boolean
      description: >
        Indicates whether the flow is locked for changes. If the flow is locked, modifications to the flow will be rejected.
        
    - name: languageCode
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_patch"
    values={[
        { label: 'projects_locations_agents_flows_patch', value: 'projects_locations_agents_flows_patch' }
    ]}
>
<TabItem value="projects_locations_agents_flows_patch">

Updates the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
UPDATE google.dialogflow.flows
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__transitionRoutes = '{{ transitionRoutes }}',
data__eventHandlers = '{{ eventHandlers }}',
data__transitionRouteGroups = '{{ transitionRouteGroups }}',
data__nluSettings = '{{ nluSettings }}',
data__advancedSettings = '{{ advancedSettings }}',
data__knowledgeConnectorSettings = '{{ knowledgeConnectorSettings }}',
data__inputParameterDefinitions = '{{ inputParameterDefinitions }}',
data__outputParameterDefinitions = '{{ outputParameterDefinitions }}',
data__multiLanguageSettings = '{{ multiLanguageSettings }}',
data__locked = {{ locked }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND updateMask = '{{ updateMask}}'
AND languageCode = '{{ languageCode}}'
RETURNING
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_delete"
    values={[
        { label: 'projects_locations_agents_flows_delete', value: 'projects_locations_agents_flows_delete' }
    ]}
>
<TabItem value="projects_locations_agents_flows_delete">

Deletes a specified flow.

```sql
DELETE FROM google.dialogflow.flows
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_flows_train"
    values={[
        { label: 'projects_locations_agents_flows_train', value: 'projects_locations_agents_flows_train' },
        { label: 'projects_locations_agents_flows_validate', value: 'projects_locations_agents_flows_validate' },
        { label: 'projects_locations_agents_flows_import', value: 'projects_locations_agents_flows_import' },
        { label: 'projects_locations_agents_flows_export', value: 'projects_locations_agents_flows_export' }
    ]}
>
<TabItem value="projects_locations_agents_flows_train">

Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_train 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_validate">

Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_validate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required 
@@json=
'{
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_flows_import">

Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"flowUri": "{{ flowUri }}", 
"flowContent": "{{ flowContent }}", 
"importOption": "{{ importOption }}", 
"flowImportStrategy": "{{ flowImportStrategy }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_flows_export">

Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required 
@@json=
'{
"flowUri": "{{ flowUri }}", 
"includeReferencedFlows": {{ includeReferencedFlows }}
}';
```
</TabItem>
</Tabs>
