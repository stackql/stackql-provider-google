--- 
title: controls
hide_title: false
hide_table_of_contents: false
keywords:
  - controls
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

Creates, updates, deletes, gets or lists a <code>controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_controls_get"
    values={[
        { label: 'projects_locations_collections_data_stores_controls_get', value: 'projects_locations_collections_data_stores_controls_get' },
        { label: 'projects_locations_collections_engines_controls_get', value: 'projects_locations_collections_engines_controls_get' },
        { label: 'projects_locations_collections_data_stores_controls_list', value: 'projects_locations_collections_data_stores_controls_list' },
        { label: 'projects_locations_collections_engines_controls_list', value: 'projects_locations_collections_engines_controls_list' },
        { label: 'projects_locations_data_stores_controls_get', value: 'projects_locations_data_stores_controls_get' },
        { label: 'projects_locations_data_stores_controls_list', value: 'projects_locations_data_stores_controls_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_controls_get">

Defines a conditioned behavior to employ during serving. Must be attached to a ServingConfig to be considered at serving time. Permitted actions dependent on `SolutionType`.

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
    <td>Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*`</td>
</tr>
<tr>
    <td><CopyableCode code="associatedServingConfigIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of all ServingConfig IDs this control is attached to. May take up to 10 minutes to update after changes.</td>
</tr>
<tr>
    <td><CopyableCode code="boostAction" /></td>
    <td><code>object</code></td>
    <td>Defines a boost-type control (id: GoogleCloudDiscoveryengineV1ControlBoostAction)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Determines when the associated action will trigger. Omit to always apply the action. Currently only a single condition may be specified. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human readable name. The identifier used in UI views. Must be UTF-8 encoded string. Length limit is 128 characters. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="filterAction" /></td>
    <td><code>object</code></td>
    <td>Defines a filter-type control Currently not supported by Recommendation (id: GoogleCloudDiscoveryengineV1ControlFilterAction)</td>
</tr>
<tr>
    <td><CopyableCode code="promoteAction" /></td>
    <td><code>object</code></td>
    <td>Promote certain links based on predefined trigger queries. (id: GoogleCloudDiscoveryengineV1ControlPromoteAction)</td>
</tr>
<tr>
    <td><CopyableCode code="redirectAction" /></td>
    <td><code>object</code></td>
    <td>Defines a redirect-type control. (id: GoogleCloudDiscoveryengineV1ControlRedirectAction)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. What solution the control belongs to. Must be compatible with vertical of resource. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsAction" /></td>
    <td><code>object</code></td>
    <td>Treats a group of terms as synonyms of one another. (id: GoogleCloudDiscoveryengineV1ControlSynonymsAction)</td>
</tr>
<tr>
    <td><CopyableCode code="useCases" /></td>
    <td><code>array</code></td>
    <td>Specifies the use case for the control. Affects what condition fields can be set. Only applies to SOLUTION_TYPE_SEARCH. Currently only allow one use case per control. Must be set when solution_type is SolutionType.SOLUTION_TYPE_SEARCH.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_get">

Defines a conditioned behavior to employ during serving. Must be attached to a ServingConfig to be considered at serving time. Permitted actions dependent on `SolutionType`.

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
    <td>Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*`</td>
</tr>
<tr>
    <td><CopyableCode code="associatedServingConfigIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of all ServingConfig IDs this control is attached to. May take up to 10 minutes to update after changes.</td>
</tr>
<tr>
    <td><CopyableCode code="boostAction" /></td>
    <td><code>object</code></td>
    <td>Defines a boost-type control (id: GoogleCloudDiscoveryengineV1ControlBoostAction)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Determines when the associated action will trigger. Omit to always apply the action. Currently only a single condition may be specified. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human readable name. The identifier used in UI views. Must be UTF-8 encoded string. Length limit is 128 characters. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="filterAction" /></td>
    <td><code>object</code></td>
    <td>Defines a filter-type control Currently not supported by Recommendation (id: GoogleCloudDiscoveryengineV1ControlFilterAction)</td>
</tr>
<tr>
    <td><CopyableCode code="promoteAction" /></td>
    <td><code>object</code></td>
    <td>Promote certain links based on predefined trigger queries. (id: GoogleCloudDiscoveryengineV1ControlPromoteAction)</td>
</tr>
<tr>
    <td><CopyableCode code="redirectAction" /></td>
    <td><code>object</code></td>
    <td>Defines a redirect-type control. (id: GoogleCloudDiscoveryengineV1ControlRedirectAction)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. What solution the control belongs to. Must be compatible with vertical of resource. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsAction" /></td>
    <td><code>object</code></td>
    <td>Treats a group of terms as synonyms of one another. (id: GoogleCloudDiscoveryengineV1ControlSynonymsAction)</td>
</tr>
<tr>
    <td><CopyableCode code="useCases" /></td>
    <td><code>array</code></td>
    <td>Specifies the use case for the control. Affects what condition fields can be set. Only applies to SOLUTION_TYPE_SEARCH. Currently only allow one use case per control. Must be set when solution_type is SolutionType.SOLUTION_TYPE_SEARCH.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_controls_list">

Response for ListControls method.

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
    <td><CopyableCode code="controls" /></td>
    <td><code>array</code></td>
    <td>All the Controls for a given data store.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token, if not returned indicates the last page.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_list">

Response for ListControls method.

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
    <td><CopyableCode code="controls" /></td>
    <td><code>array</code></td>
    <td>All the Controls for a given data store.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token, if not returned indicates the last page.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_controls_get">

Defines a conditioned behavior to employ during serving. Must be attached to a ServingConfig to be considered at serving time. Permitted actions dependent on `SolutionType`.

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
    <td>Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*`</td>
</tr>
<tr>
    <td><CopyableCode code="associatedServingConfigIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of all ServingConfig IDs this control is attached to. May take up to 10 minutes to update after changes.</td>
</tr>
<tr>
    <td><CopyableCode code="boostAction" /></td>
    <td><code>object</code></td>
    <td>Defines a boost-type control (id: GoogleCloudDiscoveryengineV1ControlBoostAction)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Determines when the associated action will trigger. Omit to always apply the action. Currently only a single condition may be specified. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Human readable name. The identifier used in UI views. Must be UTF-8 encoded string. Length limit is 128 characters. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="filterAction" /></td>
    <td><code>object</code></td>
    <td>Defines a filter-type control Currently not supported by Recommendation (id: GoogleCloudDiscoveryengineV1ControlFilterAction)</td>
</tr>
<tr>
    <td><CopyableCode code="promoteAction" /></td>
    <td><code>object</code></td>
    <td>Promote certain links based on predefined trigger queries. (id: GoogleCloudDiscoveryengineV1ControlPromoteAction)</td>
</tr>
<tr>
    <td><CopyableCode code="redirectAction" /></td>
    <td><code>object</code></td>
    <td>Defines a redirect-type control. (id: GoogleCloudDiscoveryengineV1ControlRedirectAction)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. What solution the control belongs to. Must be compatible with vertical of resource. Otherwise an INVALID ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsAction" /></td>
    <td><code>object</code></td>
    <td>Treats a group of terms as synonyms of one another. (id: GoogleCloudDiscoveryengineV1ControlSynonymsAction)</td>
</tr>
<tr>
    <td><CopyableCode code="useCases" /></td>
    <td><code>array</code></td>
    <td>Specifies the use case for the control. Affects what condition fields can be set. Only applies to SOLUTION_TYPE_SEARCH. Currently only allow one use case per control. Must be set when solution_type is SolutionType.SOLUTION_TYPE_SEARCH.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_controls_list">

Response for ListControls method.

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
    <td><CopyableCode code="controls" /></td>
    <td><code>array</code></td>
    <td>All the Controls for a given data store.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token, if not returned indicates the last page.</td>
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
    <td><a href="#projects_locations_collections_data_stores_controls_get"><CopyableCode code="projects_locations_collections_data_stores_controls_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Gets a Control.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_controls_get"><CopyableCode code="projects_locations_collections_engines_controls_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Gets a Control.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_controls_list"><CopyableCode code="projects_locations_collections_data_stores_controls_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all Controls by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_controls_list"><CopyableCode code="projects_locations_collections_engines_controls_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all Controls by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_controls_get"><CopyableCode code="projects_locations_data_stores_controls_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Gets a Control.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_controls_list"><CopyableCode code="projects_locations_data_stores_controls_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all Controls by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_controls_create"><CopyableCode code="projects_locations_collections_data_stores_controls_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-controlId"><code>controlId</code></a></td>
    <td>Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_controls_create"><CopyableCode code="projects_locations_collections_engines_controls_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-controlId"><code>controlId</code></a></td>
    <td>Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_controls_create"><CopyableCode code="projects_locations_data_stores_controls_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-controlId"><code>controlId</code></a></td>
    <td>Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_controls_patch"><CopyableCode code="projects_locations_collections_data_stores_controls_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_controls_patch"><CopyableCode code="projects_locations_collections_engines_controls_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_controls_patch"><CopyableCode code="projects_locations_data_stores_controls_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_controls_delete"><CopyableCode code="projects_locations_collections_data_stores_controls_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_controls_delete"><CopyableCode code="projects_locations_collections_engines_controls_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_controls_delete"><CopyableCode code="projects_locations_data_stores_controls_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.</td>
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
<tr id="parameter-controlsId">
    <td><CopyableCode code="controlsId" /></td>
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
<tr id="parameter-controlId">
    <td><CopyableCode code="controlId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="projects_locations_collections_data_stores_controls_get"
    values={[
        { label: 'projects_locations_collections_data_stores_controls_get', value: 'projects_locations_collections_data_stores_controls_get' },
        { label: 'projects_locations_collections_engines_controls_get', value: 'projects_locations_collections_engines_controls_get' },
        { label: 'projects_locations_collections_data_stores_controls_list', value: 'projects_locations_collections_data_stores_controls_list' },
        { label: 'projects_locations_collections_engines_controls_list', value: 'projects_locations_collections_engines_controls_list' },
        { label: 'projects_locations_data_stores_controls_get', value: 'projects_locations_data_stores_controls_get' },
        { label: 'projects_locations_data_stores_controls_list', value: 'projects_locations_data_stores_controls_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_controls_get">

Gets a Control.

```sql
SELECT
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases
FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND controlsId = '{{ controlsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_get">

Gets a Control.

```sql
SELECT
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases
FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND controlsId = '{{ controlsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_controls_list">

Lists all Controls by their parent DataStore.

```sql
SELECT
controls,
nextPageToken
FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_list">

Lists all Controls by their parent DataStore.

```sql
SELECT
controls,
nextPageToken
FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_controls_get">

Gets a Control.

```sql
SELECT
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases
FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND controlsId = '{{ controlsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_controls_list">

Lists all Controls by their parent DataStore.

```sql
SELECT
controls,
nextPageToken
FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_controls_create"
    values={[
        { label: 'projects_locations_collections_data_stores_controls_create', value: 'projects_locations_collections_data_stores_controls_create' },
        { label: 'projects_locations_collections_engines_controls_create', value: 'projects_locations_collections_engines_controls_create' },
        { label: 'projects_locations_data_stores_controls_create', value: 'projects_locations_data_stores_controls_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_controls_create">

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.controls (
data__boostAction,
data__filterAction,
data__redirectAction,
data__synonymsAction,
data__promoteAction,
data__name,
data__displayName,
data__solutionType,
data__useCases,
data__conditions,
projectsId,
locationsId,
collectionsId,
dataStoresId,
controlId
)
SELECT 
'{{ boostAction }}',
'{{ filterAction }}',
'{{ redirectAction }}',
'{{ synonymsAction }}',
'{{ promoteAction }}',
'{{ name }}',
'{{ displayName }}',
'{{ solutionType }}',
'{{ useCases }}',
'{{ conditions }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}',
'{{ controlId }}'
RETURNING
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_create">

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.controls (
data__boostAction,
data__filterAction,
data__redirectAction,
data__synonymsAction,
data__promoteAction,
data__name,
data__displayName,
data__solutionType,
data__useCases,
data__conditions,
projectsId,
locationsId,
collectionsId,
enginesId,
controlId
)
SELECT 
'{{ boostAction }}',
'{{ filterAction }}',
'{{ redirectAction }}',
'{{ synonymsAction }}',
'{{ promoteAction }}',
'{{ name }}',
'{{ displayName }}',
'{{ solutionType }}',
'{{ useCases }}',
'{{ conditions }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ enginesId }}',
'{{ controlId }}'
RETURNING
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_controls_create">

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.controls (
data__boostAction,
data__filterAction,
data__redirectAction,
data__synonymsAction,
data__promoteAction,
data__name,
data__displayName,
data__solutionType,
data__useCases,
data__conditions,
projectsId,
locationsId,
dataStoresId,
controlId
)
SELECT 
'{{ boostAction }}',
'{{ filterAction }}',
'{{ redirectAction }}',
'{{ synonymsAction }}',
'{{ promoteAction }}',
'{{ name }}',
'{{ displayName }}',
'{{ solutionType }}',
'{{ useCases }}',
'{{ conditions }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}',
'{{ controlId }}'
RETURNING
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: controls
  props:
    - name: projectsId
      value: string
      description: Required parameter for the controls resource.
    - name: locationsId
      value: string
      description: Required parameter for the controls resource.
    - name: collectionsId
      value: string
      description: Required parameter for the controls resource.
    - name: dataStoresId
      value: string
      description: Required parameter for the controls resource.
    - name: enginesId
      value: string
      description: Required parameter for the controls resource.
    - name: boostAction
      value: object
      description: >
        Defines a boost-type control
        
    - name: filterAction
      value: object
      description: >
        Defines a filter-type control Currently not supported by Recommendation
        
    - name: redirectAction
      value: object
      description: >
        Defines a redirect-type control.
        
    - name: synonymsAction
      value: object
      description: >
        Treats a group of terms as synonyms of one another.
        
    - name: promoteAction
      value: object
      description: >
        Promote certain links based on predefined trigger queries.
        
    - name: name
      value: string
      description: >
        Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*`
        
    - name: displayName
      value: string
      description: >
        Required. Human readable name. The identifier used in UI views. Must be UTF-8 encoded string. Length limit is 128 characters. Otherwise an INVALID ARGUMENT error is thrown.
        
    - name: solutionType
      value: string
      description: >
        Required. Immutable. What solution the control belongs to. Must be compatible with vertical of resource. Otherwise an INVALID ARGUMENT error is thrown.
        
      valid_values: ['SOLUTION_TYPE_UNSPECIFIED', 'SOLUTION_TYPE_RECOMMENDATION', 'SOLUTION_TYPE_SEARCH', 'SOLUTION_TYPE_CHAT', 'SOLUTION_TYPE_GENERATIVE_CHAT']
    - name: useCases
      value: array
      description: >
        Specifies the use case for the control. Affects what condition fields can be set. Only applies to SOLUTION_TYPE_SEARCH. Currently only allow one use case per control. Must be set when solution_type is SolutionType.SOLUTION_TYPE_SEARCH.
        
    - name: conditions
      value: array
      description: >
        Determines when the associated action will trigger. Omit to always apply the action. Currently only a single condition may be specified. Otherwise an INVALID ARGUMENT error is thrown.
        
    - name: controlId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_controls_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_controls_patch', value: 'projects_locations_collections_data_stores_controls_patch' },
        { label: 'projects_locations_collections_engines_controls_patch', value: 'projects_locations_collections_engines_controls_patch' },
        { label: 'projects_locations_data_stores_controls_patch', value: 'projects_locations_data_stores_controls_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_controls_patch">

Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.controls
SET 
data__boostAction = '{{ boostAction }}',
data__filterAction = '{{ filterAction }}',
data__redirectAction = '{{ redirectAction }}',
data__synonymsAction = '{{ synonymsAction }}',
data__promoteAction = '{{ promoteAction }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__solutionType = '{{ solutionType }}',
data__useCases = '{{ useCases }}',
data__conditions = '{{ conditions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND controlsId = '{{ controlsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_patch">

Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.controls
SET 
data__boostAction = '{{ boostAction }}',
data__filterAction = '{{ filterAction }}',
data__redirectAction = '{{ redirectAction }}',
data__synonymsAction = '{{ synonymsAction }}',
data__promoteAction = '{{ promoteAction }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__solutionType = '{{ solutionType }}',
data__useCases = '{{ useCases }}',
data__conditions = '{{ conditions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND controlsId = '{{ controlsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases;
```
</TabItem>
<TabItem value="projects_locations_data_stores_controls_patch">

Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.controls
SET 
data__boostAction = '{{ boostAction }}',
data__filterAction = '{{ filterAction }}',
data__redirectAction = '{{ redirectAction }}',
data__synonymsAction = '{{ synonymsAction }}',
data__promoteAction = '{{ promoteAction }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__solutionType = '{{ solutionType }}',
data__useCases = '{{ useCases }}',
data__conditions = '{{ conditions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND controlsId = '{{ controlsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
associatedServingConfigIds,
boostAction,
conditions,
displayName,
filterAction,
promoteAction,
redirectAction,
solutionType,
synonymsAction,
useCases;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_controls_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_controls_delete', value: 'projects_locations_collections_data_stores_controls_delete' },
        { label: 'projects_locations_collections_engines_controls_delete', value: 'projects_locations_collections_engines_controls_delete' },
        { label: 'projects_locations_data_stores_controls_delete', value: 'projects_locations_data_stores_controls_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_controls_delete">

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND controlsId = '{{ controlsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_controls_delete">

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND controlsId = '{{ controlsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_controls_delete">

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.controls
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND controlsId = '{{ controlsId }}' --required;
```
</TabItem>
</Tabs>
