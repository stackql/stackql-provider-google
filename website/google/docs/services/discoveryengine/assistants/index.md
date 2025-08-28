--- 
title: assistants
hide_title: false
hide_table_of_contents: false
keywords:
  - assistants
  - discoveryengine
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

Creates, updates, deletes, gets or lists an <code>assistants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assistants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.assistants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_get"
    values={[
        { label: 'projects_locations_collections_engines_assistants_get', value: 'projects_locations_collections_engines_assistants_get' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_get">

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
    <td>Immutable. Resource name of the assistant. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;/assistants/&#123;assistant&#125;` It must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="customerPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer policy for the assistant. (id: GoogleCloudDiscoveryengineV1AssistantCustomerPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledTools" /></td>
    <td><code>object</code></td>
    <td>Optional. Note: not implemented yet. Use enabled_actions instead. The enabled tools on this assistant. The keys are connector name, for example "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/collections/&#123;collectionId&#125;/dataconnector The values consist of admin enabled tools towards the connector instance. Admin can selectively enable multiple tools on any of the connector instances that they created in the project. For example &#123;"jira1ConnectorName": [(toolId1, "createTicket"), (toolId2, "transferTicket")], "gmail1ConnectorName": [(toolId3, "sendEmail"),..] &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="generationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for the generation of the assistant response. (id: GoogleCloudDiscoveryengineV1AssistantGenerationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="webGroundingType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of web grounding to use.</td>
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
    <td><a href="#projects_locations_collections_engines_assistants_get"><CopyableCode code="projects_locations_collections_engines_assistants_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td></td>
    <td>Gets an Assistant.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_patch"><CopyableCode code="projects_locations_collections_engines_assistants_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Assistant</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_stream_assist"><CopyableCode code="projects_locations_collections_engines_assistants_stream_assist" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td></td>
    <td>Assists the user with a query in a streaming fashion.</td>
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
<tr id="parameter-assistantsId">
    <td><CopyableCode code="assistantsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enginesId">
    <td><CopyableCode code="enginesId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_get"
    values={[
        { label: 'projects_locations_collections_engines_assistants_get', value: 'projects_locations_collections_engines_assistants_get' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_get">

Gets an Assistant.

```sql
SELECT
name,
customerPolicy,
enabledTools,
generationConfig,
webGroundingType
FROM google.discoveryengine.assistants
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND assistantsId = '{{ assistantsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_patch"
    values={[
        { label: 'projects_locations_collections_engines_assistants_patch', value: 'projects_locations_collections_engines_assistants_patch' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_patch">

Updates an Assistant

```sql
UPDATE google.discoveryengine.assistants
SET 
data__name = '{{ name }}',
data__generationConfig = '{{ generationConfig }}',
data__webGroundingType = '{{ webGroundingType }}',
data__enabledTools = '{{ enabledTools }}',
data__customerPolicy = '{{ customerPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND assistantsId = '{{ assistantsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
customerPolicy,
enabledTools,
generationConfig,
webGroundingType;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_stream_assist"
    values={[
        { label: 'projects_locations_collections_engines_assistants_stream_assist', value: 'projects_locations_collections_engines_assistants_stream_assist' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_stream_assist">

Assists the user with a query in a streaming fashion.

```sql
EXEC google.discoveryengine.assistants.projects_locations_collections_engines_assistants_stream_assist 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@assistantsId='{{ assistantsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"userMetadata": "{{ userMetadata }}", 
"toolsSpec": "{{ toolsSpec }}", 
"generationSpec": "{{ generationSpec }}"
}';
```
</TabItem>
</Tabs>
