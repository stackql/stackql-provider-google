--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - logging
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get"
    values={[
        { label: 'projects_locations_get', value: 'projects_locations_get' },
        { label: 'organizations_locations_get', value: 'organizations_locations_get' },
        { label: 'folders_locations_get', value: 'folders_locations_get' },
        { label: 'billing_accounts_locations_get', value: 'billing_accounts_locations_get' },
        { label: 'locations_list', value: 'locations_list' },
        { label: 'projects_locations_list', value: 'projects_locations_list' },
        { label: 'organizations_locations_list', value: 'organizations_locations_list' },
        { label: 'folders_locations_list', value: 'folders_locations_list' },
        { label: 'billing_accounts_locations_list', value: 'billing_accounts_locations_list' }
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
<TabItem value="organizations_locations_get">

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
<TabItem value="folders_locations_get">

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
<TabItem value="billing_accounts_locations_get">

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
<TabItem value="locations_list">

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
<TabItem value="organizations_locations_list">

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
<TabItem value="folders_locations_list">

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
<TabItem value="billing_accounts_locations_list">

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
    <td><a href="#organizations_locations_get"><CopyableCode code="organizations_locations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets information about a location.</td>
</tr>
<tr>
    <td><a href="#folders_locations_get"><CopyableCode code="folders_locations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets information about a location.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_get"><CopyableCode code="billing_accounts_locations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets information about a location.</td>
</tr>
<tr>
    <td><a href="#locations_list"><CopyableCode code="locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#projects_locations_list"><CopyableCode code="projects_locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_list"><CopyableCode code="organizations_locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#folders_locations_list"><CopyableCode code="folders_locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_locations_list"><CopyableCode code="billing_accounts_locations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_locations_get"
    values={[
        { label: 'projects_locations_get', value: 'projects_locations_get' },
        { label: 'organizations_locations_get', value: 'organizations_locations_get' },
        { label: 'folders_locations_get', value: 'folders_locations_get' },
        { label: 'billing_accounts_locations_get', value: 'billing_accounts_locations_get' },
        { label: 'locations_list', value: 'locations_list' },
        { label: 'projects_locations_list', value: 'projects_locations_list' },
        { label: 'organizations_locations_list', value: 'organizations_locations_list' },
        { label: 'folders_locations_list', value: 'folders_locations_list' },
        { label: 'billing_accounts_locations_list', value: 'billing_accounts_locations_list' }
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
FROM google.logging.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_get">

Gets information about a location.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.logging.locations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_get">

Gets information about a location.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.logging.locations
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_locations_get">

Gets information about a location.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.logging.locations
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
<TabItem value="locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
locations,
nextPageToken
FROM google.logging.locations
WHERE name = '{{ name }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
<TabItem value="projects_locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
locations,
nextPageToken
FROM google.logging.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
<TabItem value="organizations_locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
locations,
nextPageToken
FROM google.logging.locations
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
<TabItem value="folders_locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
locations,
nextPageToken
FROM google.logging.locations
WHERE foldersId = '{{ foldersId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
<TabItem value="billing_accounts_locations_list">

Lists information about the supported locations for this service.

```sql
SELECT
locations,
nextPageToken
FROM google.logging.locations
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND extraLocationTypes = '{{ extraLocationTypes }}';
```
</TabItem>
</Tabs>
