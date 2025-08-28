--- 
title: catalogs_default_branch
hide_title: false
hide_table_of_contents: false
keywords:
  - catalogs_default_branch
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

Creates, updates, deletes, gets or lists a <code>catalogs_default_branch</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>catalogs_default_branch</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.catalogs_default_branch" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_get_default_branch"
    values={[
        { label: 'projects_locations_catalogs_get_default_branch', value: 'projects_locations_catalogs_get_default_branch' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_default_branch">

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
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>Full resource name of the branch id currently set as default branch.</td>
</tr>
<tr>
    <td><CopyableCode code="note" /></td>
    <td><code>string</code></td>
    <td>This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default.</td>
</tr>
<tr>
    <td><CopyableCode code="setTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when this branch is set to default.</td>
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
    <td><a href="#projects_locations_catalogs_get_default_branch"><CopyableCode code="projects_locations_catalogs_get_default_branch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_get_default_branch"
    values={[
        { label: 'projects_locations_catalogs_get_default_branch', value: 'projects_locations_catalogs_get_default_branch' }
    ]}
>
<TabItem value="projects_locations_catalogs_get_default_branch">

Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.

```sql
SELECT
branch,
note,
setTime
FROM google.retail.catalogs_default_branch
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required;
```
</TabItem>
</Tabs>
