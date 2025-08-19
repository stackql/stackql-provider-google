--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get"
    values={[
        { label: 'projects_locations_get', value: 'projects_locations_get' },
        { label: 'projects_locations_list', value: 'projects_locations_list' }
    ]}
>
<TabItem value="projects_locations_get">

A resource that represents a Google Cloud location.

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
    <td>Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name for this location, typically a nearby city name. For example, "Tokyo".</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cross-service attributes for the location. For example &#123;"cloud.googleapis.com/region": "us-east1"&#125; </td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The canonical id for this location. For example: "us-east1".</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata. For example the available capacity at the given location.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_list">

The response message for Locations.ListLocations.

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
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>A list of locations that matches the specified filter in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The standard List next-page token.</td>
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
    <td><a href="#projects_locations_get"><CopyableCode code="projects_locations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets information about a location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_list"><CopyableCode code="projects_locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lookup_entry"><CopyableCode code="projects_locations_lookup_entry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-aspectTypes"><code>aspectTypes</code></a>, <a href="#parameter-paths"><code>paths</code></a>, <a href="#parameter-entry"><code>entry</code></a></td>
    <td>Looks up an entry by name using the permission on the source system.</td>
</tr>
<tr>
    <td><a href="#projects_locations_search_entries"><CopyableCode code="projects_locations_search_entries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-semanticSearch"><code>semanticSearch</code></a></td>
    <td>Searches for Entries matching the given query and scope.</td>
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
<tr id="parameter-aspectTypes">
    <td><CopyableCode code="aspectTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-entry">
    <td><CopyableCode code="entry" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-extraLocationTypes">
    <td><CopyableCode code="extraLocationTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-semanticSearch">
    <td><CopyableCode code="semanticSearch" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_get"
    values={[
        { label: 'projects_locations_get', value: 'projects_locations_get' },
        { label: 'projects_locations_list', value: 'projects_locations_list' }
    ]}
>
<TabItem value="projects_locations_get">

Gets information about a location.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.dataplex.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
locations,
nextPageToken
FROM google.dataplex.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_lookup_entry"
    values={[
        { label: 'projects_locations_lookup_entry', value: 'projects_locations_lookup_entry' },
        { label: 'projects_locations_search_entries', value: 'projects_locations_search_entries' }
    ]}
>
<TabItem value="projects_locations_lookup_entry">

Looks up an entry by name using the permission on the source system.

```sql
EXEC google.dataplex.locations.projects_locations_lookup_entry 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@view='{{ view }}', 
@aspectTypes='{{ aspectTypes }}', 
@paths='{{ paths }}', 
@entry='{{ entry }}';
```
</TabItem>
<TabItem value="projects_locations_search_entries">

Searches for Entries matching the given query and scope.

```sql
EXEC google.dataplex.locations.projects_locations_search_entries 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@query='{{ query }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@orderBy='{{ orderBy }}', 
@scope='{{ scope }}', 
@semanticSearch={{ semanticSearch }};
```
</TabItem>
</Tabs>
