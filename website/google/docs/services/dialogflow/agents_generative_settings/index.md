--- 
title: agents_generative_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - agents_generative_settings
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

Creates, updates, deletes, gets or lists an <code>agents_generative_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agents_generative_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.agents_generative_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_get_generative_settings"
    values={[
        { label: 'projects_locations_agents_get_generative_settings', value: 'projects_locations_agents_get_generative_settings' }
    ]}
>
<TabItem value="projects_locations_agents_get_generative_settings">

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
    <td>Format: `projects//locations//agents//generativeSettings`.</td>
</tr>
<tr>
    <td><CopyableCode code="fallbackSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for Generative Fallback. (id: GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="generativeSafetySettings" /></td>
    <td><code>object</code></td>
    <td>Settings for Generative Safety. (id: GoogleCloudDialogflowCxV3SafetySettings)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for knowledge connector. (id: GoogleCloudDialogflowCxV3GenerativeSettingsKnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Language for this settings.</td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td>LLM model settings. (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
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
    <td><a href="#projects_locations_agents_get_generative_settings"><CopyableCode code="projects_locations_agents_get_generative_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Gets the generative settings for the agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_update_generative_settings"><CopyableCode code="projects_locations_agents_update_generative_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the generative settings for the agent.</td>
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
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
    defaultValue="projects_locations_agents_get_generative_settings"
    values={[
        { label: 'projects_locations_agents_get_generative_settings', value: 'projects_locations_agents_get_generative_settings' }
    ]}
>
<TabItem value="projects_locations_agents_get_generative_settings">

Gets the generative settings for the agent.

```sql
SELECT
name,
fallbackSettings,
generativeSafetySettings,
knowledgeConnectorSettings,
languageCode,
llmModelSettings
FROM google.dialogflow.agents_generative_settings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND languageCode = '{{ languageCode }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_update_generative_settings"
    values={[
        { label: 'projects_locations_agents_update_generative_settings', value: 'projects_locations_agents_update_generative_settings' }
    ]}
>
<TabItem value="projects_locations_agents_update_generative_settings">

Updates the generative settings for the agent.

```sql
UPDATE google.dialogflow.agents_generative_settings
SET 
data__name = '{{ name }}',
data__fallbackSettings = '{{ fallbackSettings }}',
data__generativeSafetySettings = '{{ generativeSafetySettings }}',
data__knowledgeConnectorSettings = '{{ knowledgeConnectorSettings }}',
data__languageCode = '{{ languageCode }}',
data__llmModelSettings = '{{ llmModelSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
fallbackSettings,
generativeSafetySettings,
knowledgeConnectorSettings,
languageCode,
llmModelSettings;
```
</TabItem>
</Tabs>
