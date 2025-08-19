--- 
title: site_search_engine
hide_title: false
hide_table_of_contents: false
keywords:
  - site_search_engine
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

Creates, updates, deletes, gets or lists a <code>site_search_engine</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>site_search_engine</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.site_search_engine" /></td></tr>
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
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Upgrade from basic site search to advanced site search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_disable_advanced_site_search"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_disable_advanced_site_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Downgrade from advanced site search to basic site search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_recrawl_uris"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_recrawl_uris" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Request on-demand recrawl for a list of URIs.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_batch_verify_target_sites"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_batch_verify_target_sites" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_enable_advanced_site_search"><CopyableCode code="projects_locations_data_stores_site_search_engine_enable_advanced_site_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Upgrade from basic site search to advanced site search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_disable_advanced_site_search"><CopyableCode code="projects_locations_data_stores_site_search_engine_disable_advanced_site_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Downgrade from advanced site search to basic site search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_recrawl_uris"><CopyableCode code="projects_locations_data_stores_site_search_engine_recrawl_uris" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Request on-demand recrawl for a list of URIs.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search', value: 'projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search' },
        { label: 'projects_locations_collections_data_stores_site_search_engine_disable_advanced_site_search', value: 'projects_locations_collections_data_stores_site_search_engine_disable_advanced_site_search' },
        { label: 'projects_locations_collections_data_stores_site_search_engine_recrawl_uris', value: 'projects_locations_collections_data_stores_site_search_engine_recrawl_uris' },
        { label: 'projects_locations_collections_data_stores_site_search_engine_batch_verify_target_sites', value: 'projects_locations_collections_data_stores_site_search_engine_batch_verify_target_sites' },
        { label: 'projects_locations_data_stores_site_search_engine_enable_advanced_site_search', value: 'projects_locations_data_stores_site_search_engine_enable_advanced_site_search' },
        { label: 'projects_locations_data_stores_site_search_engine_disable_advanced_site_search', value: 'projects_locations_data_stores_site_search_engine_disable_advanced_site_search' },
        { label: 'projects_locations_data_stores_site_search_engine_recrawl_uris', value: 'projects_locations_data_stores_site_search_engine_recrawl_uris' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search">

Upgrade from basic site search to advanced site search.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_collections_data_stores_site_search_engine_enable_advanced_site_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_disable_advanced_site_search">

Downgrade from advanced site search to basic site search.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_collections_data_stores_site_search_engine_disable_advanced_site_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_recrawl_uris">

Request on-demand recrawl for a list of URIs.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_collections_data_stores_site_search_engine_recrawl_uris 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"uris": "{{ uris }}", 
"siteCredential": "{{ siteCredential }}"
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_batch_verify_target_sites">

Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_collections_data_stores_site_search_engine_batch_verify_target_sites 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_enable_advanced_site_search">

Upgrade from basic site search to advanced site search.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_data_stores_site_search_engine_enable_advanced_site_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_disable_advanced_site_search">

Downgrade from advanced site search to basic site search.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_data_stores_site_search_engine_disable_advanced_site_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_recrawl_uris">

Request on-demand recrawl for a list of URIs.

```sql
EXEC google.discoveryengine.site_search_engine.projects_locations_data_stores_site_search_engine_recrawl_uris 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"uris": "{{ uris }}", 
"siteCredential": "{{ siteCredential }}"
}';
```
</TabItem>
</Tabs>
