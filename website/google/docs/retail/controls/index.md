--- 
title: controls
hide_title: false
hide_table_of_contents: false
keywords:
  - controls
  - retail
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_controls_get"
    values={[
        { label: 'projects_locations_catalogs_controls_get', value: 'projects_locations_catalogs_controls_get' },
        { label: 'projects_locations_catalogs_controls_list', value: 'projects_locations_catalogs_controls_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_controls_get">

Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.

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
    <td>Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`</td>
</tr>
<tr>
    <td><CopyableCode code="associatedServingConfigIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of serving config ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes". (id: GoogleCloudRetailV2Rule)</td>
</tr>
<tr>
    <td><CopyableCode code="searchSolutionUseCase" /></td>
    <td><code>array</code></td>
    <td>Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionTypes" /></td>
    <td><code>array</code></td>
    <td>Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_catalogs_controls_list">

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
    <td>All the Controls for a given catalog.</td>
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
    <td><a href="#projects_locations_catalogs_controls_get"><CopyableCode code="projects_locations_catalogs_controls_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td></td>
    <td>Gets a Control.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_controls_list"><CopyableCode code="projects_locations_catalogs_controls_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all Controls by their parent Catalog.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_controls_create"><CopyableCode code="projects_locations_catalogs_controls_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-controlId"><code>controlId</code></a></td>
    <td>Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_controls_patch"><CopyableCode code="projects_locations_catalogs_controls_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Control. Control cannot be set to a different oneof field, if so an INVALID_ARGUMENT is returned. If the Control to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_controls_delete"><CopyableCode code="projects_locations_catalogs_controls_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-controlsId"><code>controlsId</code></a></td>
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
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-controlsId">
    <td><CopyableCode code="controlsId" /></td>
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
    defaultValue="projects_locations_catalogs_controls_get"
    values={[
        { label: 'projects_locations_catalogs_controls_get', value: 'projects_locations_catalogs_controls_get' },
        { label: 'projects_locations_catalogs_controls_list', value: 'projects_locations_catalogs_controls_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_controls_get">

Gets a Control.

```sql
SELECT
name,
associatedServingConfigIds,
displayName,
rule,
searchSolutionUseCase,
solutionTypes
FROM google.retail.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND controlsId = '{{ controlsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_controls_list">

Lists all Controls by their parent Catalog.

```sql
SELECT
controls,
nextPageToken
FROM google.retail.controls
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_controls_create"
    values={[
        { label: 'projects_locations_catalogs_controls_create', value: 'projects_locations_catalogs_controls_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_controls_create">

Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.retail.controls (
data__name,
data__displayName,
data__rule,
data__solutionTypes,
data__searchSolutionUseCase,
projectsId,
locationsId,
catalogsId,
controlId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ rule }}',
'{{ solutionTypes }}',
'{{ searchSolutionUseCase }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ controlId }}'
RETURNING
name,
associatedServingConfigIds,
displayName,
rule,
searchSolutionUseCase,
solutionTypes
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
    - name: catalogsId
      value: string
      description: Required parameter for the controls resource.
    - name: name
      value: string
      description: >
        Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`
        
    - name: displayName
      value: string
      description: >
        Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.
        
    - name: rule
      value: object
      description: >
        A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".
        
    - name: solutionTypes
      value: array
      description: >
        Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.
        
    - name: searchSolutionUseCase
      value: array
      description: >
        Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.
        
    - name: controlId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_controls_patch"
    values={[
        { label: 'projects_locations_catalogs_controls_patch', value: 'projects_locations_catalogs_controls_patch' }
    ]}
>
<TabItem value="projects_locations_catalogs_controls_patch">

Updates a Control. Control cannot be set to a different oneof field, if so an INVALID_ARGUMENT is returned. If the Control to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.retail.controls
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__rule = '{{ rule }}',
data__solutionTypes = '{{ solutionTypes }}',
data__searchSolutionUseCase = '{{ searchSolutionUseCase }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND controlsId = '{{ controlsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
associatedServingConfigIds,
displayName,
rule,
searchSolutionUseCase,
solutionTypes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_controls_delete"
    values={[
        { label: 'projects_locations_catalogs_controls_delete', value: 'projects_locations_catalogs_controls_delete' }
    ]}
>
<TabItem value="projects_locations_catalogs_controls_delete">

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.retail.controls
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND controlsId = '{{ controlsId }}' --required;
```
</TabItem>
</Tabs>
