--- 
title: serving_configs_control
hide_title: false
hide_table_of_contents: false
keywords:
  - serving_configs_control
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

Creates, updates, deletes, gets or lists a <code>serving_configs_control</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>serving_configs_control</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.serving_configs_control" /></td></tr>
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
    <td><a href="#projects_locations_catalogs_serving_configs_add_control"><CopyableCode code="projects_locations_catalogs_serving_configs_add_control" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_remove_control"><CopyableCode code="projects_locations_catalogs_serving_configs_remove_control" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.</td>
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
<tr id="parameter-servingConfigsId">
    <td><CopyableCode code="servingConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_add_control"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_add_control', value: 'projects_locations_catalogs_serving_configs_add_control' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_add_control">

Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

```sql
INSERT INTO google.retail.serving_configs_control (
data__controlId,
projectsId,
locationsId,
catalogsId,
servingConfigsId
)
SELECT 
'{{ controlId }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ servingConfigsId }}'
RETURNING
name,
boostControlIds,
displayName,
diversityLevel,
diversityType,
doNotAssociateControlIds,
dynamicFacetSpec,
enableCategoryFilterLevel,
facetControlIds,
filterControlIds,
ignoreControlIds,
ignoreRecsDenylist,
modelId,
onewaySynonymsControlIds,
personalizationSpec,
priceRerankingLevel,
redirectControlIds,
replacementControlIds,
solutionTypes,
twowaySynonymsControlIds
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: serving_configs_control
  props:
    - name: projectsId
      value: string
      description: Required parameter for the serving_configs_control resource.
    - name: locationsId
      value: string
      description: Required parameter for the serving_configs_control resource.
    - name: catalogsId
      value: string
      description: Required parameter for the serving_configs_control resource.
    - name: servingConfigsId
      value: string
      description: Required parameter for the serving_configs_control resource.
    - name: controlId
      value: string
      description: >
        Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_remove_control"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_remove_control', value: 'projects_locations_catalogs_serving_configs_remove_control' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_remove_control">

Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.

```sql
DELETE FROM google.retail.serving_configs_control
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required;
```
</TabItem>
</Tabs>
