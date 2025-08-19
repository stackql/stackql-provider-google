--- 
title: entity_types
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_types
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

Creates, updates, deletes, gets or lists an <code>entity_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entity_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.entity_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_get"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_get', value: 'projects_locations_agents_environments_sessions_entity_types_get' },
        { label: 'projects_locations_agents_sessions_entity_types_get', value: 'projects_locations_agents_sessions_entity_types_get' },
        { label: 'projects_locations_agents_environments_sessions_entity_types_list', value: 'projects_locations_agents_environments_sessions_entity_types_list' },
        { label: 'projects_locations_agents_entity_types_get', value: 'projects_locations_agents_entity_types_get' },
        { label: 'projects_locations_agents_sessions_entity_types_list', value: 'projects_locations_agents_sessions_entity_types_list' },
        { label: 'projects_locations_agents_entity_types_list', value: 'projects_locations_agents_entity_types_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_get">

Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).

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
    <td>Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>Required. The collection of entities to override or supplement the custom entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="entityOverrideMode" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates whether the additional data should override or supplement the custom entity type definition.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_get">

Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).

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
    <td>Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>Required. The collection of entities to override or supplement the custom entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="entityOverrideMode" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates whether the additional data should override or supplement the custom entity type definition.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_list">

The response message for SessionEntityTypes.ListSessionEntityTypes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionEntityTypes" /></td>
    <td><code>array</code></td>
    <td>The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_entity_types_get">

Entities are extracted from user input and represent parameters that are meaningful to your application. For example, a date range, a proper name such as a geographic location or landmark, and so on. Entities represent actionable data for your application. When you define an entity, you can also include synonyms that all map to that entity. For example, "soft drink", "soda", "pop", and so on. There are three types of entities: * **System** - entities that are defined by the Dialogflow API for common data types such as date, time, currency, and so on. A system entity is represented by the `EntityType` type. * **Custom** - entities that are defined by you that represent actionable data that is meaningful to your application. For example, you could define a `pizza.sauce` entity for red or white pizza sauce, a `pizza.cheese` entity for the different types of cheese on a pizza, a `pizza.topping` entity for different toppings, and so on. A custom entity is represented by the `EntityType` type. * **User** - entities that are built for an individual user such as favorites, preferences, playlists, and so on. A user entity is represented by the SessionEntityType type. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).

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
    <td>The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.</td>
</tr>
<tr>
    <td><CopyableCode code="autoExpansionMode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the entity type can be automatically expanded.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the entity type, unique within the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="enableFuzzyExtraction" /></td>
    <td><code>boolean</code></td>
    <td>Enables fuzzy entity extraction during classification.</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>The collection of entity entries associated with the entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="excludedPhrases" /></td>
    <td><code>array</code></td>
    <td>Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry `giant`(an adjective), you might consider adding `giants`(a noun) as an exclusion. If the kind of entity type is `KIND_MAP`, then the phrases specified by entities and excluded phrases should be mutually exclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates the kind of entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="redact" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_list">

The response message for SessionEntityTypes.ListSessionEntityTypes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionEntityTypes" /></td>
    <td><code>array</code></td>
    <td>The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_entity_types_list">

The response message for EntityTypes.ListEntityTypes.

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
    <td><CopyableCode code="entityTypes" /></td>
    <td><code>array</code></td>
    <td>The list of entity types. There will be a maximum number of items returned based on the page_size field in the request.</td>
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
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_get"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Retrieves the specified session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_get"><CopyableCode code="projects_locations_agents_sessions_entity_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Retrieves the specified session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_list"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all session entity types in the specified session.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_get"><CopyableCode code="projects_locations_agents_entity_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Retrieves the specified entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_list"><CopyableCode code="projects_locations_agents_sessions_entity_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all session entity types in the specified session.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_list"><CopyableCode code="projects_locations_agents_entity_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all entity types in the specified agent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_create"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Creates a session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_create"><CopyableCode code="projects_locations_agents_sessions_entity_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Creates a session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_create"><CopyableCode code="projects_locations_agents_entity_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Creates an entity type in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_patch"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_patch"><CopyableCode code="projects_locations_agents_sessions_entity_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_patch"><CopyableCode code="projects_locations_agents_entity_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_delete"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Deletes the specified session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_delete"><CopyableCode code="projects_locations_agents_sessions_entity_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Deletes the specified session entity type.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_delete"><CopyableCode code="projects_locations_agents_entity_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_export"><CopyableCode code="projects_locations_agents_entity_types_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Exports the selected entity types.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_import"><CopyableCode code="projects_locations_agents_entity_types_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Imports the specified entitytypes into the agent.</td>
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
<tr id="parameter-entityTypesId">
    <td><CopyableCode code="entityTypesId" /></td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
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
    defaultValue="projects_locations_agents_environments_sessions_entity_types_get"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_get', value: 'projects_locations_agents_environments_sessions_entity_types_get' },
        { label: 'projects_locations_agents_sessions_entity_types_get', value: 'projects_locations_agents_sessions_entity_types_get' },
        { label: 'projects_locations_agents_environments_sessions_entity_types_list', value: 'projects_locations_agents_environments_sessions_entity_types_list' },
        { label: 'projects_locations_agents_entity_types_get', value: 'projects_locations_agents_entity_types_get' },
        { label: 'projects_locations_agents_sessions_entity_types_list', value: 'projects_locations_agents_sessions_entity_types_list' },
        { label: 'projects_locations_agents_entity_types_list', value: 'projects_locations_agents_entity_types_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_get">

Retrieves the specified session entity type.

```sql
SELECT
name,
entities,
entityOverrideMode
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_get">

Retrieves the specified session entity type.

```sql
SELECT
name,
entities,
entityOverrideMode
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_list">

Returns the list of all session entity types in the specified session.

```sql
SELECT
nextPageToken,
sessionEntityTypes
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_get">

Retrieves the specified entity type.

```sql
SELECT
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required
AND languageCode = '{{ languageCode }}';
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_list">

Returns the list of all session entity types in the specified session.

```sql
SELECT
nextPageToken,
sessionEntityTypes
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_list">

Returns the list of all entity types in the specified agent.

```sql
SELECT
entityTypes,
nextPageToken
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_create"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_create', value: 'projects_locations_agents_environments_sessions_entity_types_create' },
        { label: 'projects_locations_agents_sessions_entity_types_create', value: 'projects_locations_agents_sessions_entity_types_create' },
        { label: 'projects_locations_agents_entity_types_create', value: 'projects_locations_agents_entity_types_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_create">

Creates a session entity type.

```sql
INSERT INTO google.dialogflow.entity_types (
data__name,
data__entityOverrideMode,
data__entities,
projectsId,
locationsId,
agentsId,
environmentsId,
sessionsId
)
SELECT 
'{{ name }}',
'{{ entityOverrideMode }}',
'{{ entities }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ environmentsId }}',
'{{ sessionsId }}'
RETURNING
name,
entities,
entityOverrideMode
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_create">

Creates a session entity type.

```sql
INSERT INTO google.dialogflow.entity_types (
data__name,
data__entityOverrideMode,
data__entities,
projectsId,
locationsId,
agentsId,
sessionsId
)
SELECT 
'{{ name }}',
'{{ entityOverrideMode }}',
'{{ entities }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ sessionsId }}'
RETURNING
name,
entities,
entityOverrideMode
;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_create">

Creates an entity type in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
INSERT INTO google.dialogflow.entity_types (
data__name,
data__displayName,
data__kind,
data__autoExpansionMode,
data__entities,
data__excludedPhrases,
data__enableFuzzyExtraction,
data__redact,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ kind }}',
'{{ autoExpansionMode }}',
'{{ entities }}',
'{{ excludedPhrases }}',
{{ enableFuzzyExtraction }},
{{ redact }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: entity_types
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: locationsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: agentsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: environmentsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: sessionsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: name
      value: string
      description: >
        The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.
        
    - name: entityOverrideMode
      value: string
      description: >
        Required. Indicates whether the additional data should override or supplement the custom entity type definition.
        
      valid_values: ['ENTITY_OVERRIDE_MODE_UNSPECIFIED', 'ENTITY_OVERRIDE_MODE_OVERRIDE', 'ENTITY_OVERRIDE_MODE_SUPPLEMENT']
    - name: entities
      value: array
      description: >
        The collection of entity entries associated with the entity type.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the entity type, unique within the agent.
        
    - name: kind
      value: string
      description: >
        Required. Indicates the kind of entity type.
        
      valid_values: ['KIND_UNSPECIFIED', 'KIND_MAP', 'KIND_LIST', 'KIND_REGEXP']
    - name: autoExpansionMode
      value: string
      description: >
        Indicates whether the entity type can be automatically expanded.
        
      valid_values: ['AUTO_EXPANSION_MODE_UNSPECIFIED', 'AUTO_EXPANSION_MODE_DEFAULT']
    - name: excludedPhrases
      value: array
      description: >
        Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry `giant`(an adjective), you might consider adding `giants`(a noun) as an exclusion. If the kind of entity type is `KIND_MAP`, then the phrases specified by entities and excluded phrases should be mutually exclusive.
        
    - name: enableFuzzyExtraction
      value: boolean
      description: >
        Enables fuzzy entity extraction during classification.
        
    - name: redact
      value: boolean
      description: >
        Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
        
    - name: languageCode
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_patch"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_patch', value: 'projects_locations_agents_environments_sessions_entity_types_patch' },
        { label: 'projects_locations_agents_sessions_entity_types_patch', value: 'projects_locations_agents_sessions_entity_types_patch' },
        { label: 'projects_locations_agents_entity_types_patch', value: 'projects_locations_agents_entity_types_patch' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_patch">

Updates the specified session entity type.

```sql
UPDATE google.dialogflow.entity_types
SET 
data__name = '{{ name }}',
data__entityOverrideMode = '{{ entityOverrideMode }}',
data__entities = '{{ entities }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
entities,
entityOverrideMode;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_patch">

Updates the specified session entity type.

```sql
UPDATE google.dialogflow.entity_types
SET 
data__name = '{{ name }}',
data__entityOverrideMode = '{{ entityOverrideMode }}',
data__entities = '{{ entities }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
entities,
entityOverrideMode;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_patch">

Updates the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
UPDATE google.dialogflow.entity_types
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__kind = '{{ kind }}',
data__autoExpansionMode = '{{ autoExpansionMode }}',
data__entities = '{{ entities }}',
data__excludedPhrases = '{{ excludedPhrases }}',
data__enableFuzzyExtraction = {{ enableFuzzyExtraction }},
data__redact = {{ redact }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_delete"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_delete', value: 'projects_locations_agents_environments_sessions_entity_types_delete' },
        { label: 'projects_locations_agents_sessions_entity_types_delete', value: 'projects_locations_agents_sessions_entity_types_delete' },
        { label: 'projects_locations_agents_entity_types_delete', value: 'projects_locations_agents_entity_types_delete' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_delete">

Deletes the specified session entity type.

```sql
DELETE FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_delete">

Deletes the specified session entity type.

```sql
DELETE FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_delete">

Deletes the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

```sql
DELETE FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_entity_types_export"
    values={[
        { label: 'projects_locations_agents_entity_types_export', value: 'projects_locations_agents_entity_types_export' },
        { label: 'projects_locations_agents_entity_types_import', value: 'projects_locations_agents_entity_types_import' }
    ]}
>
<TabItem value="projects_locations_agents_entity_types_export">

Exports the selected entity types.

```sql
EXEC google.dialogflow.entity_types.projects_locations_agents_entity_types_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"entityTypes": "{{ entityTypes }}", 
"entityTypesUri": "{{ entityTypesUri }}", 
"entityTypesContentInline": {{ entityTypesContentInline }}, 
"dataFormat": "{{ dataFormat }}", 
"languageCode": "{{ languageCode }}"
}';
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_import">

Imports the specified entitytypes into the agent.

```sql
EXEC google.dialogflow.entity_types.projects_locations_agents_entity_types_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"entityTypesUri": "{{ entityTypesUri }}", 
"entityTypesContent": "{{ entityTypesContent }}", 
"mergeOption": "{{ mergeOption }}", 
"targetEntityType": "{{ targetEntityType }}"
}';
```
</TabItem>
</Tabs>
