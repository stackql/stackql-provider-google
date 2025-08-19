--- 
title: catalogs_completion_config
hide_title: false
hide_table_of_contents: false
keywords:
  - catalogs_completion_config
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

Creates, updates, deletes, gets or lists a <code>catalogs_completion_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>catalogs_completion_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.catalogs_completion_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_get_completion_config"
    values={[
        { label: 'projects_locations_catalogs_get_completion_config', value: 'projects_locations_catalogs_get_completion_config' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_completion_config">

Catalog level autocomplete config for customers to customize autocomplete feature's settings.

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
    <td>Required. Immutable. Fully qualified name `projects/*/locations/*/catalogs/*/completionConfig`</td>
</tr>
<tr>
    <td><CopyableCode code="allowlistInputConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The source data for the latest import of the autocomplete allowlist phrases. (id: GoogleCloudRetailV2CompletionDataInputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoLearning" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use `cloud-retail` data in CompleteQueryRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="denylistInputConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The source data for the latest import of the autocomplete denylist phrases. (id: GoogleCloudRetailV2CompletionDataInputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastAllowlistImportOperation" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the LRO corresponding to the latest allowlist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDenylistImportOperation" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the LRO corresponding to the latest denylist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuggestionsImportOperation" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the LRO corresponding to the latest suggestion terms list import. Can use GetOperation API method to retrieve the latest state of the Long Running Operation.</td>
</tr>
<tr>
    <td><CopyableCode code="matchingOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the matching order for autocomplete suggestions, e.g., a query consisting of 'sh' with 'out-of-order' specified would suggest "women's shoes", whereas a query of 'red s' with 'exact-prefix' specified would suggest "red shoes". Currently supported values: * 'out-of-order' * 'exact-prefix' Default value: 'exact-prefix'.</td>
</tr>
<tr>
    <td><CopyableCode code="maxSuggestions" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20.</td>
</tr>
<tr>
    <td><CopyableCode code="minPrefixLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20.</td>
</tr>
<tr>
    <td><CopyableCode code="suggestionsInputConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The source data for the latest import of the autocomplete suggestion phrases. (id: GoogleCloudRetailV2CompletionDataInputConfig)</td>
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
    <td><a href="#projects_locations_catalogs_get_completion_config"><CopyableCode code="projects_locations_catalogs_get_completion_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Gets a CompletionConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_update_completion_config"><CopyableCode code="projects_locations_catalogs_update_completion_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the CompletionConfigs.</td>
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
    defaultValue="projects_locations_catalogs_get_completion_config"
    values={[
        { label: 'projects_locations_catalogs_get_completion_config', value: 'projects_locations_catalogs_get_completion_config' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_completion_config">

Gets a CompletionConfig.

```sql
SELECT
name,
allowlistInputConfig,
autoLearning,
denylistInputConfig,
lastAllowlistImportOperation,
lastDenylistImportOperation,
lastSuggestionsImportOperation,
matchingOrder,
maxSuggestions,
minPrefixLength,
suggestionsInputConfig
FROM google.retail.catalogs_completion_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_update_completion_config"
    values={[
        { label: 'projects_locations_catalogs_update_completion_config', value: 'projects_locations_catalogs_update_completion_config' }
    ]}
>
<TabItem value="projects_locations_catalogs_update_completion_config">

Updates the CompletionConfigs.

```sql
UPDATE google.retail.catalogs_completion_config
SET 
data__name = '{{ name }}',
data__matchingOrder = '{{ matchingOrder }}',
data__maxSuggestions = {{ maxSuggestions }},
data__minPrefixLength = {{ minPrefixLength }},
data__autoLearning = {{ autoLearning }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowlistInputConfig,
autoLearning,
denylistInputConfig,
lastAllowlistImportOperation,
lastDenylistImportOperation,
lastSuggestionsImportOperation,
matchingOrder,
maxSuggestions,
minPrefixLength,
suggestionsInputConfig;
```
</TabItem>
</Tabs>
