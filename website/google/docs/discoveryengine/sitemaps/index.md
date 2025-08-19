--- 
title: sitemaps
hide_title: false
hide_table_of_contents: false
keywords:
  - sitemaps
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

Creates, updates, deletes, gets or lists a <code>sitemaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sitemaps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.sitemaps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch', value: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch' },
        { label: 'projects_locations_data_stores_site_search_engine_sitemaps_fetch', value: 'projects_locations_data_stores_site_search_engine_sitemaps_fetch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch">

Response message for SiteSearchEngineService.FetchSitemaps method.

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
    <td><CopyableCode code="sitemapsMetadata" /></td>
    <td><code>array</code></td>
    <td>List of Sitemaps fetched.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_sitemaps_fetch">

Response message for SiteSearchEngineService.FetchSitemaps method.

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
    <td><CopyableCode code="sitemapsMetadata" /></td>
    <td><code>array</code></td>
    <td>List of Sitemaps fetched.</td>
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
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-matcher.urisMatcher.uris"><code>matcher.urisMatcher.uris</code></a></td>
    <td>Fetch Sitemaps in a DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_sitemaps_fetch"><CopyableCode code="projects_locations_data_stores_site_search_engine_sitemaps_fetch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-matcher.urisMatcher.uris"><code>matcher.urisMatcher.uris</code></a></td>
    <td>Fetch Sitemaps in a DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_sitemaps_create"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_sitemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates a Sitemap.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_sitemaps_create"><CopyableCode code="projects_locations_data_stores_site_search_engine_sitemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Creates a Sitemap.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_site_search_engine_sitemaps_delete"><CopyableCode code="projects_locations_collections_data_stores_site_search_engine_sitemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sitemapsId"><code>sitemapsId</code></a></td>
    <td></td>
    <td>Deletes a Sitemap.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_site_search_engine_sitemaps_delete"><CopyableCode code="projects_locations_data_stores_site_search_engine_sitemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sitemapsId"><code>sitemapsId</code></a></td>
    <td></td>
    <td>Deletes a Sitemap.</td>
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
<tr id="parameter-sitemapsId">
    <td><CopyableCode code="sitemapsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-matcher.urisMatcher.uris">
    <td><CopyableCode code="matcher.urisMatcher.uris" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch', value: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch' },
        { label: 'projects_locations_data_stores_site_search_engine_sitemaps_fetch', value: 'projects_locations_data_stores_site_search_engine_sitemaps_fetch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_sitemaps_fetch">

Fetch Sitemaps in a DataStore.

```sql
SELECT
sitemapsMetadata
FROM google.discoveryengine.sitemaps
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND matcher.urisMatcher.uris = '{{ matcher.urisMatcher.uris }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_sitemaps_fetch">

Fetch Sitemaps in a DataStore.

```sql
SELECT
sitemapsMetadata
FROM google.discoveryengine.sitemaps
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND matcher.urisMatcher.uris = '{{ matcher.urisMatcher.uris }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_sitemaps_create"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_create', value: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_create' },
        { label: 'projects_locations_data_stores_site_search_engine_sitemaps_create', value: 'projects_locations_data_stores_site_search_engine_sitemaps_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_sitemaps_create">

Creates a Sitemap.

```sql
INSERT INTO google.discoveryengine.sitemaps (
data__uri,
projectsId,
locationsId,
collectionsId,
dataStoresId
)
SELECT 
'{{ uri }}',
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
<TabItem value="projects_locations_data_stores_site_search_engine_sitemaps_create">

Creates a Sitemap.

```sql
INSERT INTO google.discoveryengine.sitemaps (
data__uri,
projectsId,
locationsId,
dataStoresId
)
SELECT 
'{{ uri }}',
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
- name: sitemaps
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sitemaps resource.
    - name: locationsId
      value: string
      description: Required parameter for the sitemaps resource.
    - name: collectionsId
      value: string
      description: Required parameter for the sitemaps resource.
    - name: dataStoresId
      value: string
      description: Required parameter for the sitemaps resource.
    - name: uri
      value: string
      description: >
        Public URI for the sitemap, e.g. `www.example.com/sitemap.xml`.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_site_search_engine_sitemaps_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_delete', value: 'projects_locations_collections_data_stores_site_search_engine_sitemaps_delete' },
        { label: 'projects_locations_data_stores_site_search_engine_sitemaps_delete', value: 'projects_locations_data_stores_site_search_engine_sitemaps_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_site_search_engine_sitemaps_delete">

Deletes a Sitemap.

```sql
DELETE FROM google.discoveryengine.sitemaps
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND sitemapsId = '{{ sitemapsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_site_search_engine_sitemaps_delete">

Deletes a Sitemap.

```sql
DELETE FROM google.discoveryengine.sitemaps
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND sitemapsId = '{{ sitemapsId }}' --required;
```
</TabItem>
</Tabs>
