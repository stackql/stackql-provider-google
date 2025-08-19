--- 
title: customer_node
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_node
  - prod_tt_sasportal
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

Creates, updates, deletes, gets or lists a <code>customer_node</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customer_node</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.prod_tt_sasportal.customer_node" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="customers_nodes_get"
    values={[
        { label: 'customers_nodes_get', value: 'customers_nodes_get' }
    ]}
>
<TabItem value="customers_nodes_get">

The Node.

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The node's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="sasUserIds" /></td>
    <td><code>array</code></td>
    <td>User ids used by the devices belonging to this node.</td>
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
    <td><a href="#customers_nodes_get"><CopyableCode code="customers_nodes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Returns a requested node.</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodesId">
    <td><CopyableCode code="nodesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="customers_nodes_get"
    values={[
        { label: 'customers_nodes_get', value: 'customers_nodes_get' }
    ]}
>
<TabItem value="customers_nodes_get">

Returns a requested node.

```sql
SELECT
name,
displayName,
sasUserIds
FROM google.prod_tt_sasportal.customer_node
WHERE customersId = '{{ customersId }}' -- required
AND nodesId = '{{ nodesId }}' -- required;
```
</TabItem>
</Tabs>
