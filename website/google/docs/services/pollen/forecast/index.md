--- 
title: forecast
hide_title: false
hide_table_of_contents: false
keywords:
  - forecast
  - pollen
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

Creates, updates, deletes, gets or lists a <code>forecast</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>forecast</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.pollen.forecast" /></td></tr>
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
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-location.latitude"><code>location.latitude</code></a>, <a href="#parameter-location.longitude"><code>location.longitude</code></a>, <a href="#parameter-days"><code>days</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-plantsDescription"><code>plantsDescription</code></a></td>
    <td>Returns up to 5 days of daily pollen information in more than 65 countries, up to 1km resolution.</td>
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
<tr id="parameter-days">
    <td><CopyableCode code="days" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
<tr id="parameter-plantsDescription">
    <td><CopyableCode code="plantsDescription" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="lookup"
    values={[
        { label: 'lookup', value: 'lookup' }
    ]}
>
<TabItem value="lookup">

Returns up to 5 days of daily pollen information in more than 65 countries, up to 1km resolution.

```sql
EXEC google.pollen.forecast.lookup 
@location.latitude='{{ location.latitude }}', 
@location.longitude='{{ location.longitude }}', 
@days='{{ days }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@languageCode='{{ languageCode }}', 
@plantsDescription={{ plantsDescription }};
```
</TabItem>
</Tabs>
