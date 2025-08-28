--- 
title: intents
hide_title: false
hide_table_of_contents: false
keywords:
  - intents
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

Creates, updates, deletes, gets or lists an <code>intents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>intents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.intents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_intents_get"
    values={[
        { label: 'projects_locations_agents_intents_get', value: 'projects_locations_agents_intents_get' },
        { label: 'projects_locations_agents_intents_list', value: 'projects_locations_agents_intents_list' }
    ]}
>
<TabItem value="projects_locations_agents_intents_get">

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
    <td>The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the intent, unique within the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="isFallback" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>The collection of parameters associated with the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingPhrases" /></td>
    <td><code>array</code></td>
    <td>The collection of training phrases the agent is trained on to identify the intent.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_intents_list">

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
    <td>The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the intent, unique within the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="isFallback" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>The collection of parameters associated with the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingPhrases" /></td>
    <td><code>array</code></td>
    <td>The collection of training phrases the agent is trained on to identify the intent.</td>
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
    <td><a href="#projects_locations_agents_intents_get"><CopyableCode code="projects_locations_agents_intents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-intentsId"><code>intentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Retrieves the specified intent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_list"><CopyableCode code="projects_locations_agents_intents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-intentView"><code>intentView</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all intents in the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_create"><CopyableCode code="projects_locations_agents_intents_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_patch"><CopyableCode code="projects_locations_agents_intents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-intentsId"><code>intentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_delete"><CopyableCode code="projects_locations_agents_intents_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-intentsId"><code>intentsId</code></a></td>
    <td></td>
    <td>Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_import"><CopyableCode code="projects_locations_agents_intents_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportIntentsMetadata - `response`: ImportIntentsResponse</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_export"><CopyableCode code="projects_locations_agents_intents_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportIntentsMetadata - `response`: ExportIntentsResponse</td>
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
<tr id="parameter-intentsId">
    <td><CopyableCode code="intentsId" /></td>
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
<tr id="parameter-intentView">
    <td><CopyableCode code="intentView" /></td>
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
    defaultValue="projects_locations_agents_intents_get"
    values={[
        { label: 'projects_locations_agents_intents_get', value: 'projects_locations_agents_intents_get' },
        { label: 'projects_locations_agents_intents_list', value: 'projects_locations_agents_intents_list' }
    ]}
>
<TabItem value="projects_locations_agents_intents_get">

Retrieves the specified intent.

```sql
SELECT
name,
description,
displayName,
isFallback,
labels,
parameters,
priority,
trainingPhrases
FROM google.dialogflow.intents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND intentsId = '{{ intentsId }}' -- required
AND languageCode = '{{ languageCode }}';
```
</TabItem>
<TabItem value="projects_locations_agents_intents_list">

Returns the list of all intents in the specified agent.

```sql
SELECT
name,
description,
displayName,
isFallback,
labels,
parameters,
priority,
trainingPhrases
FROM google.dialogflow.intents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND intentView = '{{ intentView }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_intents_create"
    values={[
        { label: 'projects_locations_agents_intents_create', value: 'projects_locations_agents_intents_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_intents_create">

Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
INSERT INTO google.dialogflow.intents (
data__name,
data__displayName,
data__trainingPhrases,
data__parameters,
data__priority,
data__isFallback,
data__labels,
data__description,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ trainingPhrases }}',
'{{ parameters }}',
{{ priority }},
{{ isFallback }},
'{{ labels }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
description,
displayName,
isFallback,
labels,
parameters,
priority,
trainingPhrases
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: intents
  props:
    - name: projectsId
      value: string
      description: Required parameter for the intents resource.
    - name: locationsId
      value: string
      description: Required parameter for the intents resource.
    - name: agentsId
      value: string
      description: Required parameter for the intents resource.
    - name: name
      value: string
      description: >
        The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the intent, unique within the agent.
        
    - name: trainingPhrases
      value: array
      description: >
        The collection of training phrases the agent is trained on to identify the intent.
        
    - name: parameters
      value: array
      description: >
        The collection of parameters associated with the intent.
        
    - name: priority
      value: integer
      description: >
        The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
        
    - name: isFallback
      value: boolean
      description: >
        Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
        
    - name: labels
      value: object
      description: >
        The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
        
    - name: description
      value: string
      description: >
        Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
        
    - name: languageCode
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_intents_patch"
    values={[
        { label: 'projects_locations_agents_intents_patch', value: 'projects_locations_agents_intents_patch' }
    ]}
>
<TabItem value="projects_locations_agents_intents_patch">

Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
UPDATE google.dialogflow.intents
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__trainingPhrases = '{{ trainingPhrases }}',
data__parameters = '{{ parameters }}',
data__priority = {{ priority }},
data__isFallback = {{ isFallback }},
data__labels = '{{ labels }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND intentsId = '{{ intentsId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
description,
displayName,
isFallback,
labels,
parameters,
priority,
trainingPhrases;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_intents_delete"
    values={[
        { label: 'projects_locations_agents_intents_delete', value: 'projects_locations_agents_intents_delete' }
    ]}
>
<TabItem value="projects_locations_agents_intents_delete">

Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
DELETE FROM google.dialogflow.intents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND intentsId = '{{ intentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_intents_import"
    values={[
        { label: 'projects_locations_agents_intents_import', value: 'projects_locations_agents_intents_import' },
        { label: 'projects_locations_agents_intents_export', value: 'projects_locations_agents_intents_export' }
    ]}
>
<TabItem value="projects_locations_agents_intents_import">

Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportIntentsMetadata - `response`: ImportIntentsResponse

```sql
EXEC google.dialogflow.intents.projects_locations_agents_intents_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"intentsUri": "{{ intentsUri }}", 
"intentsContent": "{{ intentsContent }}", 
"mergeOption": "{{ mergeOption }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_intents_export">

Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportIntentsMetadata - `response`: ExportIntentsResponse

```sql
EXEC google.dialogflow.intents.projects_locations_agents_intents_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"intents": "{{ intents }}", 
"intentsUri": "{{ intentsUri }}", 
"intentsContentInline": {{ intentsContentInline }}, 
"dataFormat": "{{ dataFormat }}"
}';
```
</TabItem>
</Tabs>
