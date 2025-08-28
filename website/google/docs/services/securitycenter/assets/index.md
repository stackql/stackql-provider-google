--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - securitycenter
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_assets_list"
    values={[
        { label: 'folders_assets_list', value: 'folders_assets_list' },
        { label: 'projects_assets_list', value: 'projects_assets_list' },
        { label: 'organizations_assets_list', value: 'organizations_assets_list' }
    ]}
>
<TabItem value="folders_assets_list">

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
    <td><CopyableCode code="asset" /></td>
    <td><code>object</code></td>
    <td>Asset matching the search request. (id: Asset)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td>State change of the asset between the points in time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_assets_list">

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
    <td><CopyableCode code="asset" /></td>
    <td><code>object</code></td>
    <td>Asset matching the search request. (id: Asset)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td>State change of the asset between the points in time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_assets_list">

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
    <td><CopyableCode code="asset" /></td>
    <td><code>object</code></td>
    <td>Asset matching the search request. (id: Asset)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td>State change of the asset between the points in time.</td>
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
    <td><a href="#folders_assets_list"><CopyableCode code="folders_assets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists an organization's assets.</td>
</tr>
<tr>
    <td><a href="#projects_assets_list"><CopyableCode code="projects_assets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists an organization's assets.</td>
</tr>
<tr>
    <td><a href="#organizations_assets_list"><CopyableCode code="organizations_assets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists an organization's assets.</td>
</tr>
<tr>
    <td><a href="#folders_assets_group"><CopyableCode code="folders_assets_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Filters an organization's assets and groups them by their specified properties.</td>
</tr>
<tr>
    <td><a href="#projects_assets_group"><CopyableCode code="projects_assets_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Filters an organization's assets and groups them by their specified properties.</td>
</tr>
<tr>
    <td><a href="#organizations_assets_group"><CopyableCode code="organizations_assets_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Filters an organization's assets and groups them by their specified properties.</td>
</tr>
<tr>
    <td><a href="#organizations_assets_run_discovery"><CopyableCode code="organizations_assets_run_discovery" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
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
<tr id="parameter-compareDuration">
    <td><CopyableCode code="compareDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-fieldMask">
    <td><CopyableCode code="fieldMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
<tr id="parameter-readTime">
    <td><CopyableCode code="readTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="folders_assets_list"
    values={[
        { label: 'folders_assets_list', value: 'folders_assets_list' },
        { label: 'projects_assets_list', value: 'projects_assets_list' },
        { label: 'organizations_assets_list', value: 'organizations_assets_list' }
    ]}
>
<TabItem value="folders_assets_list">

Lists an organization's assets.

```sql
SELECT
asset,
stateChange
FROM google.securitycenter.assets
WHERE foldersId = '{{ foldersId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_assets_list">

Lists an organization's assets.

```sql
SELECT
asset,
stateChange
FROM google.securitycenter.assets
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_assets_list">

Lists an organization's assets.

```sql
SELECT
asset,
stateChange
FROM google.securitycenter.assets
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="folders_assets_group"
    values={[
        { label: 'folders_assets_group', value: 'folders_assets_group' },
        { label: 'projects_assets_group', value: 'projects_assets_group' },
        { label: 'organizations_assets_group', value: 'organizations_assets_group' },
        { label: 'organizations_assets_run_discovery', value: 'organizations_assets_run_discovery' }
    ]}
>
<TabItem value="folders_assets_group">

Filters an organization's assets and groups them by their specified properties.

```sql
EXEC google.securitycenter.assets.folders_assets_group 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"compareDuration": "{{ compareDuration }}", 
"readTime": "{{ readTime }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="projects_assets_group">

Filters an organization's assets and groups them by their specified properties.

```sql
EXEC google.securitycenter.assets.projects_assets_group 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"compareDuration": "{{ compareDuration }}", 
"readTime": "{{ readTime }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="organizations_assets_group">

Filters an organization's assets and groups them by their specified properties.

```sql
EXEC google.securitycenter.assets.organizations_assets_group 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"compareDuration": "{{ compareDuration }}", 
"readTime": "{{ readTime }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="organizations_assets_run_discovery">

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

```sql
EXEC google.securitycenter.assets.organizations_assets_run_discovery 
@organizationsId='{{ organizationsId }}' --required;
```
</TabItem>
</Tabs>
