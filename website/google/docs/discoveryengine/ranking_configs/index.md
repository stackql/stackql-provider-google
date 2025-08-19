--- 
title: ranking_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - ranking_configs
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

Creates, updates, deletes, gets or lists a <code>ranking_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ranking_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.ranking_configs" /></td></tr>
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
    <td><a href="#projects_locations_ranking_configs_rank"><CopyableCode code="projects_locations_ranking_configs_rank" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-rankingConfigsId"><code>rankingConfigsId</code></a></td>
    <td></td>
    <td>Ranks a list of text records based on the given input query.</td>
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
<tr id="parameter-rankingConfigsId">
    <td><CopyableCode code="rankingConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_ranking_configs_rank"
    values={[
        { label: 'projects_locations_ranking_configs_rank', value: 'projects_locations_ranking_configs_rank' }
    ]}
>
<TabItem value="projects_locations_ranking_configs_rank">

Ranks a list of text records based on the given input query.

```sql
EXEC google.discoveryengine.ranking_configs.projects_locations_ranking_configs_rank 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@rankingConfigsId='{{ rankingConfigsId }}' --required 
@@json=
'{
"model": "{{ model }}", 
"topN": {{ topN }}, 
"query": "{{ query }}", 
"records": "{{ records }}", 
"ignoreRecordDetailsInResponse": {{ ignoreRecordDetailsInResponse }}, 
"userLabels": "{{ userLabels }}"
}';
```
</TabItem>
</Tabs>
