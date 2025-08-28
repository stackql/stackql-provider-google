--- 
title: building_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - building_insights
  - solar
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

Creates, updates, deletes, gets or lists a <code>building_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>building_insights</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.solar.building_insights" /></td></tr>
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
    <td><a href="#find_closest"><CopyableCode code="find_closest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-location.latitude"><code>location.latitude</code></a>, <a href="#parameter-location.longitude"><code>location.longitude</code></a>, <a href="#parameter-requiredQuality"><code>requiredQuality</code></a>, <a href="#parameter-experiments"><code>experiments</code></a></td>
    <td>Locates the building whose centroid is closest to a query point. Returns an error with code `NOT_FOUND` if there are no buildings within approximately 50m of the query point.</td>
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
<tr id="parameter-experiments">
    <td><CopyableCode code="experiments" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location.latitude">
    <td><CopyableCode code="location.latitude" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr id="parameter-location.longitude">
    <td><CopyableCode code="location.longitude" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr id="parameter-requiredQuality">
    <td><CopyableCode code="requiredQuality" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="find_closest"
    values={[
        { label: 'find_closest', value: 'find_closest' }
    ]}
>
<TabItem value="find_closest">

Locates the building whose centroid is closest to a query point. Returns an error with code `NOT_FOUND` if there are no buildings within approximately 50m of the query point.

```sql
EXEC google.solar.building_insights.find_closest 
@location.latitude='{{ location.latitude }}', 
@location.longitude='{{ location.longitude }}', 
@requiredQuality='{{ requiredQuality }}', 
@experiments='{{ experiments }}';
```
</TabItem>
</Tabs>
