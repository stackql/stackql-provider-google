--- 
title: connector_platform_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_platform_regions
  - integrations
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

Creates, updates, deletes, gets or lists a <code>connector_platform_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connector_platform_regions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.connector_platform_regions" /></td></tr>
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
    <td><a href="#connector_platform_regions_enumerate"><CopyableCode code="connector_platform_regions_enumerate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Enumerates the regions for which Connector Platform is provisioned.</td>
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
    defaultValue="connector_platform_regions_enumerate"
    values={[
        { label: 'connector_platform_regions_enumerate', value: 'connector_platform_regions_enumerate' }
    ]}
>
<TabItem value="connector_platform_regions_enumerate">

Enumerates the regions for which Connector Platform is provisioned.

```sql
EXEC google.integrations.connector_platform_regions.connector_platform_regions_enumerate 
;
```
</TabItem>
</Tabs>
