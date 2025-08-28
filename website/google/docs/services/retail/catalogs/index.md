--- 
title: catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - catalogs
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

Creates, updates, deletes, gets or lists a <code>catalogs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>catalogs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.catalogs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_list"
    values={[
        { label: 'projects_locations_catalogs_list', value: 'projects_locations_catalogs_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_list">

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
    <td>Required. Immutable. The fully qualified resource name of the catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="productLevelConfig" /></td>
    <td><code>object</code></td>
    <td>Required. The product level configuration. (id: GoogleCloudRetailV2ProductLevelConfig)</td>
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
    <td><a href="#projects_locations_catalogs_list"><CopyableCode code="projects_locations_catalogs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the Catalogs associated with the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_patch"><CopyableCode code="projects_locations_catalogs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the Catalogs.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_export_analytics_metrics"><CopyableCode code="projects_locations_catalogs_export_analytics_metrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Exports analytics metrics. `Operation.response` is of type `ExportAnalyticsMetricsResponse`. `Operation.metadata` is of type `ExportMetadata`.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_set_default_branch"><CopyableCode code="projects_locations_catalogs_set_default_branch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch &#123;newBranch&#125;. * SearchService will only return product IDs from branch &#123;newBranch&#125; (if branch is not explicitly set). * UserEventService will only join events with products from branch &#123;newBranch&#125;.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_complete_query"><CopyableCode code="projects_locations_catalogs_complete_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-visitorId"><code>visitorId</code></a>, <a href="#parameter-languageCodes"><code>languageCodes</code></a>, <a href="#parameter-deviceType"><code>deviceType</code></a>, <a href="#parameter-dataset"><code>dataset</code></a>, <a href="#parameter-maxSuggestions"><code>maxSuggestions</code></a>, <a href="#parameter-enableAttributeSuggestions"><code>enableAttributeSuggestions</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td>Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.</td>
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
<tr id="parameter-dataset">
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deviceType">
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enableAttributeSuggestions">
    <td><CopyableCode code="enableAttributeSuggestions" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-entity">
    <td><CopyableCode code="entity" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCodes">
    <td><CopyableCode code="languageCodes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxSuggestions">
    <td><CopyableCode code="maxSuggestions" /></td>
    <td><code>integer (int32)</code></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-visitorId">
    <td><CopyableCode code="visitorId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_list"
    values={[
        { label: 'projects_locations_catalogs_list', value: 'projects_locations_catalogs_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_list">

Lists all the Catalogs associated with the project.

```sql
SELECT
name,
displayName,
productLevelConfig
FROM google.retail.catalogs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_patch"
    values={[
        { label: 'projects_locations_catalogs_patch', value: 'projects_locations_catalogs_patch' }
    ]}
>
<TabItem value="projects_locations_catalogs_patch">

Updates the Catalogs.

```sql
UPDATE google.retail.catalogs
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__productLevelConfig = '{{ productLevelConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
productLevelConfig;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_export_analytics_metrics"
    values={[
        { label: 'projects_locations_catalogs_export_analytics_metrics', value: 'projects_locations_catalogs_export_analytics_metrics' },
        { label: 'projects_locations_catalogs_set_default_branch', value: 'projects_locations_catalogs_set_default_branch' },
        { label: 'projects_locations_catalogs_complete_query', value: 'projects_locations_catalogs_complete_query' }
    ]}
>
<TabItem value="projects_locations_catalogs_export_analytics_metrics">

Exports analytics metrics. `Operation.response` is of type `ExportAnalyticsMetricsResponse`. `Operation.metadata` is of type `ExportMetadata`.

```sql
EXEC google.retail.catalogs.projects_locations_catalogs_export_analytics_metrics 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"outputConfig": "{{ outputConfig }}", 
"filter": "{{ filter }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_set_default_branch">

Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch &#123;newBranch&#125;. * SearchService will only return product IDs from branch &#123;newBranch&#125; (if branch is not explicitly set). * UserEventService will only join events with products from branch &#123;newBranch&#125;.

```sql
EXEC google.retail.catalogs.projects_locations_catalogs_set_default_branch 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"branchId": "{{ branchId }}", 
"note": "{{ note }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_complete_query">

Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

```sql
EXEC google.retail.catalogs.projects_locations_catalogs_complete_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@query='{{ query }}', 
@visitorId='{{ visitorId }}', 
@languageCodes='{{ languageCodes }}', 
@deviceType='{{ deviceType }}', 
@dataset='{{ dataset }}', 
@maxSuggestions='{{ maxSuggestions }}', 
@enableAttributeSuggestions={{ enableAttributeSuggestions }}, 
@entity='{{ entity }}';
```
</TabItem>
</Tabs>
