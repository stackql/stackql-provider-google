--- 
title: placements
hide_title: false
hide_table_of_contents: false
keywords:
  - placements
  - recommendationengine
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

Creates, updates, deletes, gets or lists a <code>placements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>placements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommendationengine.placements" /></td></tr>
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
    <td><a href="#projects_locations_catalogs_event_stores_placements_predict"><CopyableCode code="projects_locations_catalogs_event_stores_placements_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-eventStoresId"><code>eventStoresId</code></a>, <a href="#parameter-placementsId"><code>placementsId</code></a></td>
    <td></td>
    <td>Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).</td>
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
<tr id="parameter-eventStoresId">
    <td><CopyableCode code="eventStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-placementsId">
    <td><CopyableCode code="placementsId" /></td>
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
    defaultValue="projects_locations_catalogs_event_stores_placements_predict"
    values={[
        { label: 'projects_locations_catalogs_event_stores_placements_predict', value: 'projects_locations_catalogs_event_stores_placements_predict' }
    ]}
>
<TabItem value="projects_locations_catalogs_event_stores_placements_predict">

Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).

```sql
EXEC google.recommendationengine.placements.projects_locations_catalogs_event_stores_placements_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@eventStoresId='{{ eventStoresId }}' --required, 
@placementsId='{{ placementsId }}' --required 
@@json=
'{
"userEvent": "{{ userEvent }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"filter": "{{ filter }}", 
"dryRun": {{ dryRun }}, 
"params": "{{ params }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
</Tabs>
