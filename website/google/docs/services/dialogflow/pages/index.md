--- 
title: pages
hide_title: false
hide_table_of_contents: false
keywords:
  - pages
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

Creates, updates, deletes, gets or lists a <code>pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>pages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_flows_pages_get"
    values={[
        { label: 'projects_locations_agents_flows_pages_get', value: 'projects_locations_agents_flows_pages_get' },
        { label: 'projects_locations_agents_flows_pages_list', value: 'projects_locations_agents_flows_pages_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_get">

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
    <td>The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td>Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level. (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the page. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the page, unique within the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="entryFulfillment" /></td>
    <td><code>object</code></td>
    <td>The fulfillment to call when the session is entering the page. (id: GoogleCloudDialogflowCxV3Fulfillment)</td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td>Handlers associated with the page to handle events such as webhook errors, no match or no input.</td>
</tr>
<tr>
    <td><CopyableCode code="form" /></td>
    <td><code>object</code></td>
    <td>The form associated with the page, used for collecting parameters relevant to the page. (id: GoogleCloudDialogflowCxV3Form)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Knowledge connector configuration. (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRouteGroups" /></td>
    <td><code>array</code></td>
    <td>Ordered list of `TransitionRouteGroups` added to the page. Transition route groups must be unique within a page. If the page links both flow-level transition route groups and agent-level transition route groups, the flow-level ones will have higher priority and will be put before the agent-level ones. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -&gt; page's transition route group -&gt; flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups.</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRoutes" /></td>
    <td><code>array</code></td>
    <td>A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evaluated in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_flows_pages_list">

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
    <td>The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td>Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level. (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the page. The maximum length is 500 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the page, unique within the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="entryFulfillment" /></td>
    <td><code>object</code></td>
    <td>The fulfillment to call when the session is entering the page. (id: GoogleCloudDialogflowCxV3Fulfillment)</td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td>Handlers associated with the page to handle events such as webhook errors, no match or no input.</td>
</tr>
<tr>
    <td><CopyableCode code="form" /></td>
    <td><code>object</code></td>
    <td>The form associated with the page, used for collecting parameters relevant to the page. (id: GoogleCloudDialogflowCxV3Form)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Knowledge connector configuration. (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRouteGroups" /></td>
    <td><code>array</code></td>
    <td>Ordered list of `TransitionRouteGroups` added to the page. Transition route groups must be unique within a page. If the page links both flow-level transition route groups and agent-level transition route groups, the flow-level ones will have higher priority and will be put before the agent-level ones. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -&gt; page's transition route group -&gt; flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups.</td>
</tr>
<tr>
    <td><CopyableCode code="transitionRoutes" /></td>
    <td><code>array</code></td>
    <td>A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evaluated in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified.</td>
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
    <td><a href="#projects_locations_agents_flows_pages_get"><CopyableCode code="projects_locations_agents_flows_pages_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-pagesId"><code>pagesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Retrieves the specified page.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_list"><CopyableCode code="projects_locations_agents_flows_pages_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all pages in the specified flow.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_create"><CopyableCode code="projects_locations_agents_flows_pages_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_patch"><CopyableCode code="projects_locations_agents_flows_pages_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-pagesId"><code>pagesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_delete"><CopyableCode code="projects_locations_agents_flows_pages_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-pagesId"><code>pagesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
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
<tr id="parameter-pagesId">
    <td><CopyableCode code="pagesId" /></td>
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
    defaultValue="projects_locations_agents_flows_pages_get"
    values={[
        { label: 'projects_locations_agents_flows_pages_get', value: 'projects_locations_agents_flows_pages_get' },
        { label: 'projects_locations_agents_flows_pages_list', value: 'projects_locations_agents_flows_pages_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_get">

Retrieves the specified page.

```sql
SELECT
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.pages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND pagesId = '{{ pagesId }}' -- required
AND languageCode = '{{ languageCode }}';
```
</TabItem>
<TabItem value="projects_locations_agents_flows_pages_list">

Returns the list of all pages in the specified flow.

```sql
SELECT
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.pages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_flows_pages_create"
    values={[
        { label: 'projects_locations_agents_flows_pages_create', value: 'projects_locations_agents_flows_pages_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_create">

Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
INSERT INTO google.dialogflow.pages (
data__name,
data__displayName,
data__description,
data__entryFulfillment,
data__form,
data__transitionRouteGroups,
data__transitionRoutes,
data__eventHandlers,
data__advancedSettings,
data__knowledgeConnectorSettings,
projectsId,
locationsId,
agentsId,
flowsId,
languageCode
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ entryFulfillment }}',
'{{ form }}',
'{{ transitionRouteGroups }}',
'{{ transitionRoutes }}',
'{{ eventHandlers }}',
'{{ advancedSettings }}',
'{{ knowledgeConnectorSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ flowsId }}',
'{{ languageCode }}'
RETURNING
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: pages
  props:
    - name: projectsId
      value: string
      description: Required parameter for the pages resource.
    - name: locationsId
      value: string
      description: Required parameter for the pages resource.
    - name: agentsId
      value: string
      description: Required parameter for the pages resource.
    - name: flowsId
      value: string
      description: Required parameter for the pages resource.
    - name: name
      value: string
      description: >
        The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the page, unique within the flow.
        
    - name: description
      value: string
      description: >
        The description of the page. The maximum length is 500 characters.
        
    - name: entryFulfillment
      value: object
      description: >
        The fulfillment to call when the session is entering the page.
        
    - name: form
      value: object
      description: >
        The form associated with the page, used for collecting parameters relevant to the page.
        
    - name: transitionRouteGroups
      value: array
      description: >
        Ordered list of `TransitionRouteGroups` added to the page. Transition route groups must be unique within a page. If the page links both flow-level transition route groups and agent-level transition route groups, the flow-level ones will have higher priority and will be put before the agent-level ones. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups.
        
    - name: transitionRoutes
      value: array
      description: >
        A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evaluated in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified.
        
    - name: eventHandlers
      value: array
      description: >
        Handlers associated with the page to handle events such as webhook errors, no match or no input.
        
    - name: advancedSettings
      value: object
      description: >
        Hierarchical advanced settings for this page. The settings exposed at the lower level overrides the settings exposed at the higher level.
        
    - name: knowledgeConnectorSettings
      value: object
      description: >
        Optional. Knowledge connector configuration.
        
    - name: languageCode
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_pages_patch"
    values={[
        { label: 'projects_locations_agents_flows_pages_patch', value: 'projects_locations_agents_flows_pages_patch' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_patch">

Updates the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
UPDATE google.dialogflow.pages
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__entryFulfillment = '{{ entryFulfillment }}',
data__form = '{{ form }}',
data__transitionRouteGroups = '{{ transitionRouteGroups }}',
data__transitionRoutes = '{{ transitionRoutes }}',
data__eventHandlers = '{{ eventHandlers }}',
data__advancedSettings = '{{ advancedSettings }}',
data__knowledgeConnectorSettings = '{{ knowledgeConnectorSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND pagesId = '{{ pagesId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_pages_delete"
    values={[
        { label: 'projects_locations_agents_flows_pages_delete', value: 'projects_locations_agents_flows_pages_delete' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_delete">

Deletes the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
DELETE FROM google.dialogflow.pages
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND pagesId = '{{ pagesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
