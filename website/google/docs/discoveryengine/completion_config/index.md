--- 
title: completion_config
hide_title: false
hide_table_of_contents: false
keywords:
  - completion_config
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

Creates, updates, deletes, gets or lists a <code>completion_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>completion_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.completion_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_collections_data_stores_completion_config_complete_query"><CopyableCode code="projects_locations_collections_data_stores_completion_config_complete_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Completes the user input with advanced keyword suggestions.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_completion_config_complete_query"><CopyableCode code="projects_locations_collections_engines_completion_config_complete_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td></td>
    <td>Completes the user input with advanced keyword suggestions.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_completion_config_complete_query"><CopyableCode code="projects_locations_data_stores_completion_config_complete_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Completes the user input with advanced keyword suggestions.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_completion_config_complete_query"
    values={[
        { label: 'projects_locations_collections_data_stores_completion_config_complete_query', value: 'projects_locations_collections_data_stores_completion_config_complete_query' },
        { label: 'projects_locations_collections_engines_completion_config_complete_query', value: 'projects_locations_collections_engines_completion_config_complete_query' },
        { label: 'projects_locations_data_stores_completion_config_complete_query', value: 'projects_locations_data_stores_completion_config_complete_query' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_completion_config_complete_query">

Completes the user input with advanced keyword suggestions.

```sql
EXEC google.discoveryengine.completion_config.projects_locations_collections_data_stores_completion_config_complete_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"queryModel": "{{ queryModel }}", 
"userPseudoId": "{{ userPseudoId }}", 
"userInfo": "{{ userInfo }}", 
"includeTailSuggestions": {{ includeTailSuggestions }}, 
"boostSpec": "{{ boostSpec }}", 
"suggestionTypes": "{{ suggestionTypes }}", 
"suggestionTypeSpecs": "{{ suggestionTypeSpecs }}", 
"experimentIds": "{{ experimentIds }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_completion_config_complete_query">

Completes the user input with advanced keyword suggestions.

```sql
EXEC google.discoveryengine.completion_config.projects_locations_collections_engines_completion_config_complete_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"queryModel": "{{ queryModel }}", 
"userPseudoId": "{{ userPseudoId }}", 
"userInfo": "{{ userInfo }}", 
"includeTailSuggestions": {{ includeTailSuggestions }}, 
"boostSpec": "{{ boostSpec }}", 
"suggestionTypes": "{{ suggestionTypes }}", 
"suggestionTypeSpecs": "{{ suggestionTypeSpecs }}", 
"experimentIds": "{{ experimentIds }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_completion_config_complete_query">

Completes the user input with advanced keyword suggestions.

```sql
EXEC google.discoveryengine.completion_config.projects_locations_data_stores_completion_config_complete_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"queryModel": "{{ queryModel }}", 
"userPseudoId": "{{ userPseudoId }}", 
"userInfo": "{{ userInfo }}", 
"includeTailSuggestions": {{ includeTailSuggestions }}, 
"boostSpec": "{{ boostSpec }}", 
"suggestionTypes": "{{ suggestionTypes }}", 
"suggestionTypeSpecs": "{{ suggestionTypeSpecs }}", 
"experimentIds": "{{ experimentIds }}"
}';
```
</TabItem>
</Tabs>
