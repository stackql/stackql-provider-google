--- 
title: heatmap_tiles
hide_title: false
hide_table_of_contents: false
keywords:
  - heatmap_tiles
  - airquality
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

Creates, updates, deletes, gets or lists a <code>heatmap_tiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>heatmap_tiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.airquality.heatmap_tiles" /></td></tr>
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
    <td><a href="#lookup_heatmap_tile"><CopyableCode code="lookup_heatmap_tile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-mapType"><code>mapType</code></a>, <a href="#parameter-zoom"><code>zoom</code></a>, <a href="#parameter-x"><code>x</code></a>, <a href="#parameter-y"><code>y</code></a></td>
    <td></td>
    <td>Returns a bytes array containing the data of the tile PNG image.</td>
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
<tr id="parameter-mapType">
    <td><CopyableCode code="mapType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x">
    <td><CopyableCode code="x" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-y">
    <td><CopyableCode code="y" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zoom">
    <td><CopyableCode code="zoom" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="lookup_heatmap_tile"
    values={[
        { label: 'lookup_heatmap_tile', value: 'lookup_heatmap_tile' }
    ]}
>
<TabItem value="lookup_heatmap_tile">

Returns a bytes array containing the data of the tile PNG image.

```sql
EXEC google.airquality.heatmap_tiles.lookup_heatmap_tile 
@mapType='{{ mapType }}' --required, 
@zoom='{{ zoom }}' --required, 
@x='{{ x }}' --required, 
@y='{{ y }}' --required;
```
</TabItem>
</Tabs>
