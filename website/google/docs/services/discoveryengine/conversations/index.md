--- 
title: conversations
hide_title: false
hide_table_of_contents: false
keywords:
  - conversations
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

Creates, updates, deletes, gets or lists a <code>conversations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>conversations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.conversations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_conversations_get"
    values={[
        { label: 'projects_locations_collections_data_stores_conversations_get', value: 'projects_locations_collections_data_stores_conversations_get' },
        { label: 'projects_locations_collections_engines_conversations_get', value: 'projects_locations_collections_engines_conversations_get' },
        { label: 'projects_locations_collections_data_stores_conversations_list', value: 'projects_locations_collections_data_stores_conversations_list' },
        { label: 'projects_locations_collections_engines_conversations_list', value: 'projects_locations_collections_engines_conversations_list' },
        { label: 'projects_locations_data_stores_conversations_get', value: 'projects_locations_data_stores_conversations_get' },
        { label: 'projects_locations_data_stores_conversations_list', value: 'projects_locations_data_stores_conversations_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_conversations_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/dataStore/*/conversations/*` or `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/*/conversations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Conversation messages.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/dataStore/*/conversations/*` or `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/*/conversations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Conversation messages.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_conversations_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/dataStore/*/conversations/*` or `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/*/conversations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Conversation messages.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/dataStore/*/conversations/*` or `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/*/conversations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Conversation messages.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/dataStore/*/conversations/*` or `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/*/conversations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Conversation messages.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/dataStore/*/conversations/*` or `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/*/conversations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Conversation messages.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the conversation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
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
    <td><a href="#projects_locations_collections_data_stores_conversations_get"><CopyableCode code="projects_locations_collections_data_stores_conversations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Gets a Conversation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_conversations_get"><CopyableCode code="projects_locations_collections_engines_conversations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Gets a Conversation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_conversations_list"><CopyableCode code="projects_locations_collections_data_stores_conversations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all Conversations by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_conversations_list"><CopyableCode code="projects_locations_collections_engines_conversations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all Conversations by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_conversations_get"><CopyableCode code="projects_locations_data_stores_conversations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Gets a Conversation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_conversations_list"><CopyableCode code="projects_locations_data_stores_conversations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all Conversations by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_conversations_create"><CopyableCode code="projects_locations_collections_data_stores_conversations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_conversations_create"><CopyableCode code="projects_locations_collections_engines_conversations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td></td>
    <td>Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_conversations_create"><CopyableCode code="projects_locations_data_stores_conversations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_conversations_patch"><CopyableCode code="projects_locations_collections_data_stores_conversations_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_conversations_patch"><CopyableCode code="projects_locations_collections_engines_conversations_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_conversations_patch"><CopyableCode code="projects_locations_data_stores_conversations_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_conversations_delete"><CopyableCode code="projects_locations_collections_data_stores_conversations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_conversations_delete"><CopyableCode code="projects_locations_collections_engines_conversations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_conversations_delete"><CopyableCode code="projects_locations_data_stores_conversations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_conversations_converse"><CopyableCode code="projects_locations_collections_data_stores_conversations_converse" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Converses a conversation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_conversations_converse"><CopyableCode code="projects_locations_collections_engines_conversations_converse" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Converses a conversation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_conversations_converse"><CopyableCode code="projects_locations_data_stores_conversations_converse" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Converses a conversation.</td>
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
<tr id="parameter-conversationsId">
    <td><CopyableCode code="conversationsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="projects_locations_collections_data_stores_conversations_get"
    values={[
        { label: 'projects_locations_collections_data_stores_conversations_get', value: 'projects_locations_collections_data_stores_conversations_get' },
        { label: 'projects_locations_collections_engines_conversations_get', value: 'projects_locations_collections_engines_conversations_get' },
        { label: 'projects_locations_collections_data_stores_conversations_list', value: 'projects_locations_collections_data_stores_conversations_list' },
        { label: 'projects_locations_collections_engines_conversations_list', value: 'projects_locations_collections_engines_conversations_list' },
        { label: 'projects_locations_data_stores_conversations_get', value: 'projects_locations_data_stores_conversations_get' },
        { label: 'projects_locations_data_stores_conversations_list', value: 'projects_locations_data_stores_conversations_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_conversations_get">

Gets a Conversation.

```sql
SELECT
name,
endTime,
messages,
startTime,
state,
userPseudoId
FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_get">

Gets a Conversation.

```sql
SELECT
name,
endTime,
messages,
startTime,
state,
userPseudoId
FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_conversations_list">

Lists all Conversations by their parent DataStore.

```sql
SELECT
name,
endTime,
messages,
startTime,
state,
userPseudoId
FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_list">

Lists all Conversations by their parent DataStore.

```sql
SELECT
name,
endTime,
messages,
startTime,
state,
userPseudoId
FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_get">

Gets a Conversation.

```sql
SELECT
name,
endTime,
messages,
startTime,
state,
userPseudoId
FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_list">

Lists all Conversations by their parent DataStore.

```sql
SELECT
name,
endTime,
messages,
startTime,
state,
userPseudoId
FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_conversations_create"
    values={[
        { label: 'projects_locations_collections_data_stores_conversations_create', value: 'projects_locations_collections_data_stores_conversations_create' },
        { label: 'projects_locations_collections_engines_conversations_create', value: 'projects_locations_collections_engines_conversations_create' },
        { label: 'projects_locations_data_stores_conversations_create', value: 'projects_locations_data_stores_conversations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_conversations_create">

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.conversations (
data__name,
data__state,
data__userPseudoId,
data__messages,
projectsId,
locationsId,
collectionsId,
dataStoresId
)
SELECT 
'{{ name }}',
'{{ state }}',
'{{ userPseudoId }}',
'{{ messages }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}'
RETURNING
name,
endTime,
messages,
startTime,
state,
userPseudoId
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_create">

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.conversations (
data__name,
data__state,
data__userPseudoId,
data__messages,
projectsId,
locationsId,
collectionsId,
enginesId
)
SELECT 
'{{ name }}',
'{{ state }}',
'{{ userPseudoId }}',
'{{ messages }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ enginesId }}'
RETURNING
name,
endTime,
messages,
startTime,
state,
userPseudoId
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_create">

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.conversations (
data__name,
data__state,
data__userPseudoId,
data__messages,
projectsId,
locationsId,
dataStoresId
)
SELECT 
'{{ name }}',
'{{ state }}',
'{{ userPseudoId }}',
'{{ messages }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}'
RETURNING
name,
endTime,
messages,
startTime,
state,
userPseudoId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: conversations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the conversations resource.
    - name: locationsId
      value: string
      description: Required parameter for the conversations resource.
    - name: collectionsId
      value: string
      description: Required parameter for the conversations resource.
    - name: dataStoresId
      value: string
      description: Required parameter for the conversations resource.
    - name: enginesId
      value: string
      description: Required parameter for the conversations resource.
    - name: name
      value: string
      description: >
        Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*/conversations/*`.
        
    - name: state
      value: string
      description: >
        The state of the Conversation.
        
      valid_values: ['STATE_UNSPECIFIED', 'IN_PROGRESS', 'COMPLETED']
    - name: userPseudoId
      value: string
      description: >
        A unique identifier for tracking users.
        
    - name: messages
      value: array
      description: >
        Conversation messages.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_conversations_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_conversations_patch', value: 'projects_locations_collections_data_stores_conversations_patch' },
        { label: 'projects_locations_collections_engines_conversations_patch', value: 'projects_locations_collections_engines_conversations_patch' },
        { label: 'projects_locations_data_stores_conversations_patch', value: 'projects_locations_data_stores_conversations_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_conversations_patch">

Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.conversations
SET 
data__name = '{{ name }}',
data__state = '{{ state }}',
data__userPseudoId = '{{ userPseudoId }}',
data__messages = '{{ messages }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
endTime,
messages,
startTime,
state,
userPseudoId;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_patch">

Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.conversations
SET 
data__name = '{{ name }}',
data__state = '{{ state }}',
data__userPseudoId = '{{ userPseudoId }}',
data__messages = '{{ messages }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
endTime,
messages,
startTime,
state,
userPseudoId;
```
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_patch">

Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.conversations
SET 
data__name = '{{ name }}',
data__state = '{{ state }}',
data__userPseudoId = '{{ userPseudoId }}',
data__messages = '{{ messages }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
endTime,
messages,
startTime,
state,
userPseudoId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_conversations_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_conversations_delete', value: 'projects_locations_collections_data_stores_conversations_delete' },
        { label: 'projects_locations_collections_engines_conversations_delete', value: 'projects_locations_collections_engines_conversations_delete' },
        { label: 'projects_locations_data_stores_conversations_delete', value: 'projects_locations_data_stores_conversations_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_conversations_delete">

Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND conversationsId = '{{ conversationsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_delete">

Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND conversationsId = '{{ conversationsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_delete">

Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND conversationsId = '{{ conversationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_conversations_converse"
    values={[
        { label: 'projects_locations_collections_data_stores_conversations_converse', value: 'projects_locations_collections_data_stores_conversations_converse' },
        { label: 'projects_locations_collections_engines_conversations_converse', value: 'projects_locations_collections_engines_conversations_converse' },
        { label: 'projects_locations_data_stores_conversations_converse', value: 'projects_locations_data_stores_conversations_converse' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_conversations_converse">

Converses a conversation.

```sql
EXEC google.discoveryengine.conversations.projects_locations_collections_data_stores_conversations_converse 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@conversationsId='{{ conversationsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"servingConfig": "{{ servingConfig }}", 
"conversation": "{{ conversation }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"summarySpec": "{{ summarySpec }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_conversations_converse">

Converses a conversation.

```sql
EXEC google.discoveryengine.conversations.projects_locations_collections_engines_conversations_converse 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@conversationsId='{{ conversationsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"servingConfig": "{{ servingConfig }}", 
"conversation": "{{ conversation }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"summarySpec": "{{ summarySpec }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_conversations_converse">

Converses a conversation.

```sql
EXEC google.discoveryengine.conversations.projects_locations_data_stores_conversations_converse 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@conversationsId='{{ conversationsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"servingConfig": "{{ servingConfig }}", 
"conversation": "{{ conversation }}", 
"safeSearch": {{ safeSearch }}, 
"userLabels": "{{ userLabels }}", 
"summarySpec": "{{ summarySpec }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}"
}';
```
</TabItem>
</Tabs>
