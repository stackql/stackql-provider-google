--- 
title: forecast
hide_title: false
hide_table_of_contents: false
keywords:
  - forecast
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

Creates, updates, deletes, gets or lists a <code>forecast</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>forecast</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.airquality.forecast" /></td></tr>
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
    <td></td>
    <td>Returns air quality forecast for a specific location for a given time range.</td>
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

Returns air quality forecast for a specific location for a given time range.

```sql
EXEC google.airquality.forecast.lookup 
@@json=
'{
"location": "{{ location }}", 
"dateTime": "{{ dateTime }}", 
"period": "{{ period }}", 
"universalAqi": {{ universalAqi }}, 
"extraComputations": "{{ extraComputations }}", 
"languageCode": "{{ languageCode }}", 
"uaqiColorPalette": "{{ uaqiColorPalette }}", 
"customLocalAqis": "{{ customLocalAqis }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
</Tabs>
