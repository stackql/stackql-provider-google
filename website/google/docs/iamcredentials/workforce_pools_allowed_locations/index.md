--- 
title: workforce_pools_allowed_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - workforce_pools_allowed_locations
  - iamcredentials
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

Creates, updates, deletes, gets or lists a <code>workforce_pools_allowed_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workforce_pools_allowed_locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iamcredentials.workforce_pools_allowed_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_allowed_locations"
    values={[
        { label: 'get_allowed_locations', value: 'get_allowed_locations' }
    ]}
>
<TabItem value="get_allowed_locations">

Represents a list of allowed locations for given workforce pool.

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
    <td><CopyableCode code="encodedLocations" /></td>
    <td><code>string</code></td>
    <td>Output only. The hex encoded bitmap of the trust boundary locations</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Output only. The human readable trust boundary locations. For example, ["us-central1", "europe-west1"]</td>
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
    <td><a href="#get_allowed_locations"><CopyableCode code="get_allowed_locations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workforcePoolsId"><code>workforcePoolsId</code></a></td>
    <td></td>
    <td>Returns the trust boundary info for a given workforce pool.</td>
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
<tr id="parameter-workforcePoolsId">
    <td><CopyableCode code="workforcePoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_allowed_locations"
    values={[
        { label: 'get_allowed_locations', value: 'get_allowed_locations' }
    ]}
>
<TabItem value="get_allowed_locations">

Returns the trust boundary info for a given workforce pool.

```sql
SELECT
encodedLocations,
locations
FROM google.iamcredentials.workforce_pools_allowed_locations
WHERE locationsId = '{{ locationsId }}' -- required
AND workforcePoolsId = '{{ workforcePoolsId }}' -- required;
```
</TabItem>
</Tabs>
