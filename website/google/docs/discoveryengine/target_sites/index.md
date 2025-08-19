--- 
title: target_sites
hide_title: false
hide_table_of_contents: false
keywords:
  - target_sites
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

Creates, updates, deletes, gets or lists a <code>target_sites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_sites</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.target_sites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_target_sites_get"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_get', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_get' },
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_list', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_list' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_get', value: 'projects_locations_data_stores_site_search_engine_target_sites_get' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_list', value: 'projects_locations_data_stores_site_search_engine_target_sites_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_get">

A target site for the SiteSearchEngine.

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
    <td>Output only. The fully qualified resource name of the target site. `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/siteSearchEngine/targetSites/&#123;target_site&#125;` The `target_site_id` is system-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="exactMatch" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>object</code></td>
    <td>Output only. Failure reason. (id: GoogleCloudDiscoveryengineV1TargetSiteFailureReason)</td>
</tr>
<tr>
    <td><CopyableCode code="generatedUriPattern" /></td>
    <td><code>string</code></td>
    <td>Output only. This is system-generated based on the provided_uri_pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="indexingStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Indexing status.</td>
</tr>
<tr>
    <td><CopyableCode code="providedUriPattern" /></td>
    <td><code>string</code></td>
    <td>Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="rootDomainUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Root domain of the provided_uri_pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="siteVerificationInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Site ownership and validity verification status. (id: GoogleCloudDiscoveryengineV1SiteVerificationInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the target site, e.g., whether the site is to be included or excluded.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The target site's last updated time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_list">

Response message for SiteSearchEngineService.ListTargetSites method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSites" /></td>
    <td><code>array</code></td>
    <td>List of TargetSites.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of items matching the request. This will always be populated in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_get">

A target site for the SiteSearchEngine.

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
    <td>Output only. The fully qualified resource name of the target site. `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/siteSearchEngine/targetSites/&#123;target_site&#125;` The `target_site_id` is system-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="exactMatch" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>object</code></td>
    <td>Output only. Failure reason. (id: GoogleCloudDiscoveryengineV1TargetSiteFailureReason)</td>
</tr>
<tr>
    <td><CopyableCode code="generatedUriPattern" /></td>
    <td><code>string</code></td>
    <td>Output only. This is system-generated based on the provided_uri_pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="indexingStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Indexing status.</td>
</tr>
<tr>
    <td><CopyableCode code="providedUriPattern" /></td>
    <td><code>string</code></td>
    <td>Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="rootDomainUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Root domain of the provided_uri_pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="siteVerificationInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Site ownership and validity verification status. (id: GoogleCloudDiscoveryengineV1SiteVerificationInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the target site, e.g., whether the site is to be included or excluded.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The target site's last updated time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_list">

Response message for SiteSearchEngineService.ListTargetSites method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSites" /></td>
    <td><code>array</code></td>
    <td>List of TargetSites.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of items matching the request. This will always be populated in the response.</td>
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
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_target_sites_get"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_target_sites_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-targetSitesId"><code>targetSitesId</code></a></td>
    <td></td>
    <td>Gets a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_target_sites_list"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_target_sites_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Gets a list of TargetSites.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_target_sites_get"><CopyableCode code="projects_locations_data_stores_site_search_engine_target_sites_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-targetSitesId"><code>targetSitesId</code></a></td>
    <td></td>
    <td>Gets a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_target_sites_list"><CopyableCode code="projects_locations_data_stores_site_search_engine_target_sites_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Gets a list of TargetSites.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_target_sites_create"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_target_sites_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_target_sites_batch_create"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_target_sites_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates TargetSite in a batch.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_target_sites_create"><CopyableCode code="projects_locations_data_stores_site_search_engine_target_sites_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_target_sites_batch_create"><CopyableCode code="projects_locations_data_stores_site_search_engine_target_sites_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates TargetSite in a batch.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_target_sites_patch"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_target_sites_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-targetSitesId"><code>targetSitesId</code></a></td>
    <td></td>
    <td>Updates a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_target_sites_patch"><CopyableCode code="projects_locations_data_stores_site_search_engine_target_sites_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-targetSitesId"><code>targetSitesId</code></a></td>
    <td></td>
    <td>Updates a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_target_sites_delete"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_target_sites_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-targetSitesId"><code>targetSitesId</code></a></td>
    <td></td>
    <td>Deletes a TargetSite.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_target_sites_delete"><CopyableCode code="projects_locations_data_stores_site_search_engine_target_sites_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-targetSitesId"><code>targetSitesId</code></a></td>
    <td></td>
    <td>Deletes a TargetSite.</td>
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
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
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
<tr id="parameter-targetSitesId">
    <td><CopyableCode code="targetSitesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_target_sites_get"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_get', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_get' },
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_list', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_list' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_get', value: 'projects_locations_data_stores_site_search_engine_target_sites_get' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_list', value: 'projects_locations_data_stores_site_search_engine_target_sites_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_get">

Gets a TargetSite.

```sql
SELECT
name,
exactMatch,
failureReason,
generatedUriPattern,
indexingStatus,
providedUriPattern,
rootDomainUri,
siteVerificationInfo,
type,
updateTime
FROM google.discoveryengine.target_sites
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND targetSitesId = '{{ targetSitesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_list">

Gets a list of TargetSites.

```sql
SELECT
nextPageToken,
targetSites,
totalSize
FROM google.discoveryengine.target_sites
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_get">

Gets a TargetSite.

```sql
SELECT
name,
exactMatch,
failureReason,
generatedUriPattern,
indexingStatus,
providedUriPattern,
rootDomainUri,
siteVerificationInfo,
type,
updateTime
FROM google.discoveryengine.target_sites
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND targetSitesId = '{{ targetSitesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_list">

Gets a list of TargetSites.

```sql
SELECT
nextPageToken,
targetSites,
totalSize
FROM google.discoveryengine.target_sites
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_target_sites_create"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_create', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_create' },
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_batch_create', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_batch_create' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_create', value: 'projects_locations_data_stores_site_search_engine_target_sites_create' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_batch_create', value: 'projects_locations_data_stores_site_search_engine_target_sites_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_create">

Creates a TargetSite.

```sql
INSERT INTO google.discoveryengine.target_sites (
data__providedUriPattern,
data__type,
data__exactMatch,
projectsId,
locationsId,
collectionsId,
dataStoresId
)
SELECT 
'{{ providedUriPattern }}',
'{{ type }}',
{{ exactMatch }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_batch_create">

Creates TargetSite in a batch.

```sql
INSERT INTO google.discoveryengine.target_sites (
data__requests,
projectsId,
locationsId,
collectionsId,
dataStoresId
)
SELECT 
'{{ requests }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_create">

Creates a TargetSite.

```sql
INSERT INTO google.discoveryengine.target_sites (
data__providedUriPattern,
data__type,
data__exactMatch,
projectsId,
locationsId,
dataStoresId
)
SELECT 
'{{ providedUriPattern }}',
'{{ type }}',
{{ exactMatch }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_batch_create">

Creates TargetSite in a batch.

```sql
INSERT INTO google.discoveryengine.target_sites (
data__requests,
projectsId,
locationsId,
dataStoresId
)
SELECT 
'{{ requests }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: target_sites
  props:
    - name: projectsId
      value: string
      description: Required parameter for the target_sites resource.
    - name: locationsId
      value: string
      description: Required parameter for the target_sites resource.
    - name: collectionsId
      value: string
      description: Required parameter for the target_sites resource.
    - name: dataStoresId
      value: string
      description: Required parameter for the target_sites resource.
    - name: providedUriPattern
      value: string
      description: >
        Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.
        
    - name: type
      value: string
      description: >
        The type of the target site, e.g., whether the site is to be included or excluded.
        
      valid_values: ['TYPE_UNSPECIFIED', 'INCLUDE', 'EXCLUDE']
    - name: exactMatch
      value: boolean
      description: >
        Immutable. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.
        
    - name: requests
      value: array
      description: >
        Required. The request message specifying the resources to create. A maximum of 20 TargetSites can be created in a batch.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_target_sites_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_patch', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_patch' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_patch', value: 'projects_locations_data_stores_site_search_engine_target_sites_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_patch">

Updates a TargetSite.

```sql
UPDATE google.discoveryengine.target_sites
SET 
data__providedUriPattern = '{{ providedUriPattern }}',
data__type = '{{ type }}',
data__exactMatch = {{ exactMatch }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND targetSitesId = '{{ targetSitesId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_patch">

Updates a TargetSite.

```sql
UPDATE google.discoveryengine.target_sites
SET 
data__providedUriPattern = '{{ providedUriPattern }}',
data__type = '{{ type }}',
data__exactMatch = {{ exactMatch }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND targetSitesId = '{{ targetSitesId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_target_sites_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_target_sites_delete', value: 'projects_locations_collections_data_stores_site_search_engine_target_sites_delete' },
        { label: 'projects_locations_data_stores_site_search_engine_target_sites_delete', value: 'projects_locations_data_stores_site_search_engine_target_sites_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_target_sites_delete">

Deletes a TargetSite.

```sql
DELETE FROM google.discoveryengine.target_sites
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND targetSitesId = '{{ targetSitesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_target_sites_delete">

Deletes a TargetSite.

```sql
DELETE FROM google.discoveryengine.target_sites
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND targetSitesId = '{{ targetSitesId }}' --required;
```
</TabItem>
</Tabs>
