--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_get"
    values={[
        { label: 'projects_locations_agents_get', value: 'projects_locations_agents_get' },
        { label: 'projects_locations_agents_list', value: 'projects_locations_agents_list' }
    ]}
>
<TabItem value="projects_locations_agents_get">

Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, TransitionRouteGroups and so on to manage the conversation flows.

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
    <td>The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td>Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level. (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="answerFeedbackSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Answer feedback collection settings. (id: GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="avatarUri" /></td>
    <td><code>string</code></td>
    <td>The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration.</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificateSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for custom client certificates. (id: GoogleCloudDialogflowCxV3AgentClientCertificateSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLanguageCode" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the agent, unique within the location.</td>
</tr>
<tr>
    <td><CopyableCode code="enableMultiLanguageTraining" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enable training multi-lingual models for this agent. These models will be trained on all the languages supported by the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSpellCorrection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if automatic spell correction is enabled in detect intent requests.</td>
</tr>
<tr>
    <td><CopyableCode code="enableStackdriverLogging" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead.</td>
</tr>
<tr>
    <td><CopyableCode code="genAppBuilderSettings" /></td>
    <td><code>object</code></td>
    <td>Gen App Builder-related agent-level settings. (id: GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="gitIntegrationSettings" /></td>
    <td><code>object</code></td>
    <td>Git integration settings for this agent. (id: GoogleCloudDialogflowCxV3AgentGitIntegrationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for RestoreAgent.</td>
</tr>
<tr>
    <td><CopyableCode code="personalizationSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for end user personalization. (id: GoogleCloudDialogflowCxV3AgentPersonalizationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. A read only boolean field reflecting Zone Isolation status of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. A read only boolean field reflecting Zone Separation status of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="securitySettings" /></td>
    <td><code>string</code></td>
    <td>Name of the SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.</td>
</tr>
<tr>
    <td><CopyableCode code="speechToTextSettings" /></td>
    <td><code>object</code></td>
    <td>Speech recognition related settings. (id: GoogleCloudDialogflowCxV3SpeechToTextSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="startFlow" /></td>
    <td><code>string</code></td>
    <td>Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`. Currently only the default start flow with id "00000000-0000-0000-0000-000000000000" is allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="startPlaybook" /></td>
    <td><code>string</code></td>
    <td>Name of the start playbook in this agent. A start playbook will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//playbooks/`. Currently only the default playbook with id "00000000-0000-0000-0000-000000000000" is allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedLanguageCodes" /></td>
    <td><code>array</code></td>
    <td>The list of all languages supported by the agent (except for the `default_language_code`).</td>
</tr>
<tr>
    <td><CopyableCode code="textToSpeechSettings" /></td>
    <td><code>object</code></td>
    <td>Settings on instructing the speech synthesizer on how to generate the output audio content. (id: GoogleCloudDialogflowCxV3TextToSpeechSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_list">

The response message for Agents.ListAgents.

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
    <td><CopyableCode code="agents" /></td>
    <td><code>array</code></td>
    <td>The list of agents. There will be a maximum number of items returned based on the page_size field in the request.</td>
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
    <td><a href="#projects_locations_agents_get"><CopyableCode code="projects_locations_agents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Retrieves the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_list"><CopyableCode code="projects_locations_agents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all agents in the specified location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_create"><CopyableCode code="projects_locations_agents_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_patch"><CopyableCode code="projects_locations_agents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified agent. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_delete"><CopyableCode code="projects_locations_agents_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Deletes the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_export"><CopyableCode code="projects_locations_agents_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_restore"><CopyableCode code="projects_locations_agents_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_validate"><CopyableCode code="projects_locations_agents_validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.</td>
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
    defaultValue="projects_locations_agents_get"
    values={[
        { label: 'projects_locations_agents_get', value: 'projects_locations_agents_get' },
        { label: 'projects_locations_agents_list', value: 'projects_locations_agents_list' }
    ]}
>
<TabItem value="projects_locations_agents_get">

Retrieves the specified agent.

```sql
SELECT
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone
FROM google.dialogflow.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_list">

Returns the list of all agents in the specified location.

```sql
SELECT
agents,
nextPageToken
FROM google.dialogflow.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_create"
    values={[
        { label: 'projects_locations_agents_create', value: 'projects_locations_agents_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_create">

Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
INSERT INTO google.dialogflow.agents (
data__name,
data__displayName,
data__defaultLanguageCode,
data__supportedLanguageCodes,
data__timeZone,
data__description,
data__avatarUri,
data__speechToTextSettings,
data__startFlow,
data__startPlaybook,
data__securitySettings,
data__enableStackdriverLogging,
data__enableSpellCorrection,
data__enableMultiLanguageTraining,
data__locked,
data__advancedSettings,
data__gitIntegrationSettings,
data__textToSpeechSettings,
data__genAppBuilderSettings,
data__answerFeedbackSettings,
data__personalizationSettings,
data__clientCertificateSettings,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ defaultLanguageCode }}',
'{{ supportedLanguageCodes }}',
'{{ timeZone }}',
'{{ description }}',
'{{ avatarUri }}',
'{{ speechToTextSettings }}',
'{{ startFlow }}',
'{{ startPlaybook }}',
'{{ securitySettings }}',
{{ enableStackdriverLogging }},
{{ enableSpellCorrection }},
{{ enableMultiLanguageTraining }},
{{ locked }},
'{{ advancedSettings }}',
'{{ gitIntegrationSettings }}',
'{{ textToSpeechSettings }}',
'{{ genAppBuilderSettings }}',
'{{ answerFeedbackSettings }}',
'{{ personalizationSettings }}',
'{{ clientCertificateSettings }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: agents
  props:
    - name: projectsId
      value: string
      description: Required parameter for the agents resource.
    - name: locationsId
      value: string
      description: Required parameter for the agents resource.
    - name: name
      value: string
      description: >
        The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the agent, unique within the location.
        
    - name: defaultLanguageCode
      value: string
      description: >
        Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method.
        
    - name: supportedLanguageCodes
      value: array
      description: >
        The list of all languages supported by the agent (except for the `default_language_code`).
        
    - name: timeZone
      value: string
      description: >
        Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
        
    - name: description
      value: string
      description: >
        The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected.
        
    - name: avatarUri
      value: string
      description: >
        The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration.
        
    - name: speechToTextSettings
      value: object
      description: >
        Speech recognition related settings.
        
    - name: startFlow
      value: string
      description: >
        Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`. Currently only the default start flow with id "00000000-0000-0000-0000-000000000000" is allowed.
        
    - name: startPlaybook
      value: string
      description: >
        Name of the start playbook in this agent. A start playbook will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//playbooks/`. Currently only the default playbook with id "00000000-0000-0000-0000-000000000000" is allowed.
        
    - name: securitySettings
      value: string
      description: >
        Name of the SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
        
    - name: enableStackdriverLogging
      value: boolean
      description: >
        Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead.
        
    - name: enableSpellCorrection
      value: boolean
      description: >
        Indicates if automatic spell correction is enabled in detect intent requests.
        
    - name: enableMultiLanguageTraining
      value: boolean
      description: >
        Optional. Enable training multi-lingual models for this agent. These models will be trained on all the languages supported by the agent.
        
    - name: locked
      value: boolean
      description: >
        Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for RestoreAgent.
        
    - name: advancedSettings
      value: object
      description: >
        Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.
        
    - name: gitIntegrationSettings
      value: object
      description: >
        Git integration settings for this agent.
        
    - name: textToSpeechSettings
      value: object
      description: >
        Settings on instructing the speech synthesizer on how to generate the output audio content.
        
    - name: genAppBuilderSettings
      value: object
      description: >
        Gen App Builder-related agent-level settings.
        
    - name: answerFeedbackSettings
      value: object
      description: >
        Optional. Answer feedback collection settings.
        
    - name: personalizationSettings
      value: object
      description: >
        Optional. Settings for end user personalization.
        
    - name: clientCertificateSettings
      value: object
      description: >
        Optional. Settings for custom client certificates.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_patch"
    values={[
        { label: 'projects_locations_agents_patch', value: 'projects_locations_agents_patch' }
    ]}
>
<TabItem value="projects_locations_agents_patch">

Updates the specified agent. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
UPDATE google.dialogflow.agents
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__defaultLanguageCode = '{{ defaultLanguageCode }}',
data__supportedLanguageCodes = '{{ supportedLanguageCodes }}',
data__timeZone = '{{ timeZone }}',
data__description = '{{ description }}',
data__avatarUri = '{{ avatarUri }}',
data__speechToTextSettings = '{{ speechToTextSettings }}',
data__startFlow = '{{ startFlow }}',
data__startPlaybook = '{{ startPlaybook }}',
data__securitySettings = '{{ securitySettings }}',
data__enableStackdriverLogging = {{ enableStackdriverLogging }},
data__enableSpellCorrection = {{ enableSpellCorrection }},
data__enableMultiLanguageTraining = {{ enableMultiLanguageTraining }},
data__locked = {{ locked }},
data__advancedSettings = '{{ advancedSettings }}',
data__gitIntegrationSettings = '{{ gitIntegrationSettings }}',
data__textToSpeechSettings = '{{ textToSpeechSettings }}',
data__genAppBuilderSettings = '{{ genAppBuilderSettings }}',
data__answerFeedbackSettings = '{{ answerFeedbackSettings }}',
data__personalizationSettings = '{{ personalizationSettings }}',
data__clientCertificateSettings = '{{ clientCertificateSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_delete"
    values={[
        { label: 'projects_locations_agents_delete', value: 'projects_locations_agents_delete' }
    ]}
>
<TabItem value="projects_locations_agents_delete">

Deletes the specified agent.

```sql
DELETE FROM google.dialogflow.agents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_export"
    values={[
        { label: 'projects_locations_agents_export', value: 'projects_locations_agents_export' },
        { label: 'projects_locations_agents_restore', value: 'projects_locations_agents_restore' },
        { label: 'projects_locations_agents_validate', value: 'projects_locations_agents_validate' }
    ]}
>
<TabItem value="projects_locations_agents_export">

Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

```sql
EXEC google.dialogflow.agents.projects_locations_agents_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"agentUri": "{{ agentUri }}", 
"dataFormat": "{{ dataFormat }}", 
"environment": "{{ environment }}", 
"gitDestination": "{{ gitDestination }}", 
"includeBigqueryExportSettings": {{ includeBigqueryExportSettings }}
}';
```
</TabItem>
<TabItem value="projects_locations_agents_restore">

Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
EXEC google.dialogflow.agents.projects_locations_agents_restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"agentUri": "{{ agentUri }}", 
"agentContent": "{{ agentContent }}", 
"gitSource": "{{ gitSource }}", 
"restoreOption": "{{ restoreOption }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_validate">

Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.

```sql
EXEC google.dialogflow.agents.projects_locations_agents_validate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
</Tabs>
