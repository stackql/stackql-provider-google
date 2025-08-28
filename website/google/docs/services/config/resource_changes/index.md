--- 
title: resource_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_changes
  - config
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

Creates, updates, deletes, gets or lists a <code>resource_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_changes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.resource_changes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td>Identifier. The name of the resource change. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/previews/&#123;preview&#125;/resourceChanges/&#123;resource_change&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="intent" /></td>
    <td><code>string</code></td>
    <td>Output only. The intent of the resource change.</td>
</tr>
<tr>
    <td><CopyableCode code="propertyChanges" /></td>
    <td><code>array</code></td>
    <td>Output only. The property changes of the resource change.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Terraform info of the resource change. (id: ResourceChangeTerraformInfo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Identifier. The name of the resource change. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/previews/&#123;preview&#125;/resourceChanges/&#123;resource_change&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="intent" /></td>
    <td><code>string</code></td>
    <td>Output only. The intent of the resource change.</td>
</tr>
<tr>
    <td><CopyableCode code="propertyChanges" /></td>
    <td><code>array</code></td>
    <td>Output only. The property changes of the resource change.</td>
</tr>
<tr>
    <td><CopyableCode code="terraformInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Terraform info of the resource change. (id: ResourceChangeTerraformInfo)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-previewsId"><code>previewsId</code></a>, <a href="#parameter-resourceChangesId"><code>resourceChangesId</code></a></td>
    <td></td>
    <td>Get a ResourceChange for a given preview.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-previewsId"><code>previewsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ResourceChanges for a given preview.</td>
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
<tr id="parameter-previewsId">
    <td><CopyableCode code="previewsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resourceChangesId">
    <td><CopyableCode code="resourceChangesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a ResourceChange for a given preview.

```sql
SELECT
name,
intent,
propertyChanges,
terraformInfo
FROM google.config.resource_changes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND previewsId = '{{ previewsId }}' -- required
AND resourceChangesId = '{{ resourceChangesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ResourceChanges for a given preview.

```sql
SELECT
name,
intent,
propertyChanges,
terraformInfo
FROM google.config.resource_changes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND previewsId = '{{ previewsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
