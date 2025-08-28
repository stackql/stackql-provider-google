--- 
title: grounding_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - grounding_configs
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

Creates, updates, deletes, gets or lists a <code>grounding_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>grounding_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.grounding_configs" /></td></tr>
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
    <td><a href="#projects_locations_grounding_configs_check"><CopyableCode code="projects_locations_grounding_configs_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-groundingConfigsId"><code>groundingConfigsId</code></a></td>
    <td></td>
    <td>Performs a grounding check.</td>
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
<tr id="parameter-groundingConfigsId">
    <td><CopyableCode code="groundingConfigsId" /></td>
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
    defaultValue="projects_locations_grounding_configs_check"
    values={[
        { label: 'projects_locations_grounding_configs_check', value: 'projects_locations_grounding_configs_check' }
    ]}
>
<TabItem value="projects_locations_grounding_configs_check">

Performs a grounding check.

```sql
EXEC google.discoveryengine.grounding_configs.projects_locations_grounding_configs_check 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@groundingConfigsId='{{ groundingConfigsId }}' --required 
@@json=
'{
"answerCandidate": "{{ answerCandidate }}", 
"facts": "{{ facts }}", 
"groundingSpec": "{{ groundingSpec }}", 
"userLabels": "{{ userLabels }}"
}';
```
</TabItem>
</Tabs>
