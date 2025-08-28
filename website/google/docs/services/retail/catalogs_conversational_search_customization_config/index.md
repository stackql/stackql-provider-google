--- 
title: catalogs_conversational_search_customization_config
hide_title: false
hide_table_of_contents: false
keywords:
  - catalogs_conversational_search_customization_config
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

Creates, updates, deletes, gets or lists a <code>catalogs_conversational_search_customization_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>catalogs_conversational_search_customization_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.catalogs_conversational_search_customization_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_get_conversational_search_customization_config"
    values={[
        { label: 'projects_locations_catalogs_get_conversational_search_customization_config', value: 'projects_locations_catalogs_get_conversational_search_customization_config' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_conversational_search_customization_config">

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
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Required. Resource name of the catalog. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/catalogs/&#123;catalog&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="intentClassificationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configs for intent classification. (id: GoogleCloudRetailV2IntentClassificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="retailerDisplayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The retailer's display name that could be used in our LLM answers. Example - "Google"</td>
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
    <td><a href="#projects_locations_catalogs_get_conversational_search_customization_config"><CopyableCode code="projects_locations_catalogs_get_conversational_search_customization_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Returns the conversational search customization config for a given catalog.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_update_conversational_search_customization_config"><CopyableCode code="projects_locations_catalogs_update_conversational_search_customization_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the conversational search customization config for a given catalog.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_get_conversational_search_customization_config"
    values={[
        { label: 'projects_locations_catalogs_get_conversational_search_customization_config', value: 'projects_locations_catalogs_get_conversational_search_customization_config' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_conversational_search_customization_config">

Returns the conversational search customization config for a given catalog.

```sql
SELECT
catalog,
intentClassificationConfig,
retailerDisplayName
FROM google.retail.catalogs_conversational_search_customization_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_update_conversational_search_customization_config"
    values={[
        { label: 'projects_locations_catalogs_update_conversational_search_customization_config', value: 'projects_locations_catalogs_update_conversational_search_customization_config' }
    ]}
>
<TabItem value="projects_locations_catalogs_update_conversational_search_customization_config">

Updates the conversational search customization config for a given catalog.

```sql
UPDATE google.retail.catalogs_conversational_search_customization_config
SET 
data__retailerDisplayName = '{{ retailerDisplayName }}',
data__intentClassificationConfig = '{{ intentClassificationConfig }}',
data__catalog = '{{ catalog }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
catalog,
intentClassificationConfig,
retailerDisplayName;
```
</TabItem>
</Tabs>
