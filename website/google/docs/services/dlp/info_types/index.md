--- 
title: info_types
hide_title: false
hide_table_of_contents: false
keywords:
  - info_types
  - dlp
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

Creates, updates, deletes, gets or lists an <code>info_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>info_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.info_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_info_types_list"
    values={[
        { label: 'projects_locations_info_types_list', value: 'projects_locations_info_types_list' },
        { label: 'organizations_locations_info_types_list', value: 'organizations_locations_info_types_list' },
        { label: 'locations_info_types_list', value: 'locations_info_types_list' },
        { label: 'info_types_list', value: 'info_types_list' }
    ]}
>
<TabItem value="projects_locations_info_types_list">

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
    <td><CopyableCode code="infoTypes" /></td>
    <td><code>array</code></td>
    <td>Set of sensitive infoTypes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_info_types_list">

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
    <td><CopyableCode code="infoTypes" /></td>
    <td><code>array</code></td>
    <td>Set of sensitive infoTypes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="locations_info_types_list">

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
    <td><CopyableCode code="infoTypes" /></td>
    <td><code>array</code></td>
    <td>Set of sensitive infoTypes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="info_types_list">

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
    <td><CopyableCode code="infoTypes" /></td>
    <td><code>array</code></td>
    <td>Set of sensitive infoTypes.</td>
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
    <td><a href="#projects_locations_info_types_list"><CopyableCode code="projects_locations_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_info_types_list"><CopyableCode code="organizations_locations_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.</td>
</tr>
<tr>
    <td><a href="#locations_info_types_list"><CopyableCode code="locations_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.</td>
</tr>
<tr>
    <td><a href="#info_types_list"><CopyableCode code="info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-locationId"><code>locationId</code></a></td>
    <td>Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationId">
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_info_types_list"
    values={[
        { label: 'projects_locations_info_types_list', value: 'projects_locations_info_types_list' },
        { label: 'organizations_locations_info_types_list', value: 'organizations_locations_info_types_list' },
        { label: 'locations_info_types_list', value: 'locations_info_types_list' },
        { label: 'info_types_list', value: 'info_types_list' }
    ]}
>
<TabItem value="projects_locations_info_types_list">

Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.

```sql
SELECT
infoTypes
FROM google.dlp.info_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND filter = '{{ filter }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="organizations_locations_info_types_list">

Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.

```sql
SELECT
infoTypes
FROM google.dlp.info_types
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND filter = '{{ filter }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="locations_info_types_list">

Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.

```sql
SELECT
infoTypes
FROM google.dlp.info_types
WHERE locationsId = '{{ locationsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND filter = '{{ filter }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
<TabItem value="info_types_list">

Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.

```sql
SELECT
infoTypes
FROM google.dlp.info_types
WHERE parent = '{{ parent }}'
AND languageCode = '{{ languageCode }}'
AND filter = '{{ filter }}'
AND locationId = '{{ locationId }}';
```
</TabItem>
</Tabs>
