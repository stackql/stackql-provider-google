--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - run
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.locations" /></td></tr>
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
    <td><a href="#export_project_metadata"><CopyableCode code="export_project_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Export generated customer metadata for a given project.</td>
</tr>
<tr>
    <td><a href="#export_metadata"><CopyableCode code="export_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-locationsId1"><code>locationsId1</code></a></td>
    <td></td>
    <td>Export generated customer metadata for a given resource.</td>
</tr>
<tr>
    <td><a href="#export_image_metadata"><CopyableCode code="export_image_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-locationsId1"><code>locationsId1</code></a></td>
    <td></td>
    <td>Export image metadata for a given resource.</td>
</tr>
<tr>
    <td><a href="#export_image"><CopyableCode code="export_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-locationsId1"><code>locationsId1</code></a></td>
    <td></td>
    <td>Export image for a given resource.</td>
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
<tr id="parameter-locationsId1">
    <td><CopyableCode code="locationsId1" /></td>
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
    defaultValue="export_project_metadata"
    values={[
        { label: 'export_project_metadata', value: 'export_project_metadata' },
        { label: 'export_metadata', value: 'export_metadata' },
        { label: 'export_image_metadata', value: 'export_image_metadata' },
        { label: 'export_image', value: 'export_image' }
    ]}
>
<TabItem value="export_project_metadata">

Export generated customer metadata for a given project.

```sql
EXEC google.run.locations.export_project_metadata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required;
```
</TabItem>
<TabItem value="export_metadata">

Export generated customer metadata for a given resource.

```sql
EXEC google.run.locations.export_metadata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@locationsId1='{{ locationsId1 }}' --required;
```
</TabItem>
<TabItem value="export_image_metadata">

Export image metadata for a given resource.

```sql
EXEC google.run.locations.export_image_metadata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@locationsId1='{{ locationsId1 }}' --required;
```
</TabItem>
<TabItem value="export_image">

Export image for a given resource.

```sql
EXEC google.run.locations.export_image 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@locationsId1='{{ locationsId1 }}' --required 
@@json=
'{
"destinationRepo": "{{ destinationRepo }}"
}';
```
</TabItem>
</Tabs>
