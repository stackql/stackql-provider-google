--- 
title: branches_documents_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - branches_documents_metadata
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

Creates, updates, deletes, gets or lists a <code>branches_documents_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>branches_documents_metadata</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.branches_documents_metadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_batch_get_documents_metadata"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_batch_get_documents_metadata', value: 'projects_locations_collections_data_stores_branches_batch_get_documents_metadata' },
        { label: 'projects_locations_data_stores_branches_batch_get_documents_metadata', value: 'projects_locations_data_stores_branches_batch_get_documents_metadata' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_batch_get_documents_metadata">

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
    <td><CopyableCode code="documentsMetadata" /></td>
    <td><code>array</code></td>
    <td>The metadata of the Documents.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_branches_batch_get_documents_metadata">

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
    <td><CopyableCode code="documentsMetadata" /></td>
    <td><code>array</code></td>
    <td>The metadata of the Documents.</td>
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
    <td><a href="#projects_locations_collections_data_stores_branches_batch_get_documents_metadata"><CopyableCode code="projects_locations_collections_data_stores_branches_batch_get_documents_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-matcher.urisMatcher.uris"><code>matcher.urisMatcher.uris</code></a>, <a href="#parameter-matcher.fhirMatcher.fhirResources"><code>matcher.fhirMatcher.fhirResources</code></a></td>
    <td>Gets index freshness metadata for Documents. Supported for website search only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_batch_get_documents_metadata"><CopyableCode code="projects_locations_data_stores_branches_batch_get_documents_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-matcher.urisMatcher.uris"><code>matcher.urisMatcher.uris</code></a>, <a href="#parameter-matcher.fhirMatcher.fhirResources"><code>matcher.fhirMatcher.fhirResources</code></a></td>
    <td>Gets index freshness metadata for Documents. Supported for website search only.</td>
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
<tr id="parameter-branchesId">
    <td><CopyableCode code="branchesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-matcher.fhirMatcher.fhirResources">
    <td><CopyableCode code="matcher.fhirMatcher.fhirResources" /></td>
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
    defaultValue="projects_locations_collections_data_stores_branches_batch_get_documents_metadata"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_batch_get_documents_metadata', value: 'projects_locations_collections_data_stores_branches_batch_get_documents_metadata' },
        { label: 'projects_locations_data_stores_branches_batch_get_documents_metadata', value: 'projects_locations_data_stores_branches_batch_get_documents_metadata' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_batch_get_documents_metadata">

Gets index freshness metadata for Documents. Supported for website search only.

```sql
SELECT
documentsMetadata
FROM google.discoveryengine.branches_documents_metadata
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND matcher.urisMatcher.uris = '{{ matcher.urisMatcher.uris }}'
AND matcher.fhirMatcher.fhirResources = '{{ matcher.fhirMatcher.fhirResources }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_batch_get_documents_metadata">

Gets index freshness metadata for Documents. Supported for website search only.

```sql
SELECT
documentsMetadata
FROM google.discoveryengine.branches_documents_metadata
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND matcher.urisMatcher.uris = '{{ matcher.urisMatcher.uris }}'
AND matcher.fhirMatcher.fhirResources = '{{ matcher.fhirMatcher.fhirResources }}';
```
</TabItem>
</Tabs>
