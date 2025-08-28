--- 
title: customer_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_nodes
  - sasportal
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

Creates, updates, deletes, gets or lists a <code>customer_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customer_nodes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sasportal.customer_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="customers_nodes_nodes_list"
    values={[
        { label: 'customers_nodes_nodes_list', value: 'customers_nodes_nodes_list' },
        { label: 'customers_nodes_list', value: 'customers_nodes_list' }
    ]}
>
<TabItem value="customers_nodes_nodes_list">

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
<TabItem value="customers_nodes_list">

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
    <td><a href="#customers_nodes_nodes_list"><CopyableCode code="customers_nodes_nodes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists nodes.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_list"><CopyableCode code="customers_nodes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists nodes.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_nodes_create"><CopyableCode code="customers_nodes_nodes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a new node.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_create"><CopyableCode code="customers_nodes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates a new node.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_delete"><CopyableCode code="customers_nodes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Deletes a node.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="customers_nodes_nodes_list"
    values={[
        { label: 'customers_nodes_nodes_list', value: 'customers_nodes_nodes_list' },
        { label: 'customers_nodes_list', value: 'customers_nodes_list' }
    ]}
>
<TabItem value="customers_nodes_nodes_list">

Lists nodes.

```sql
SELECT
name,
displayName,
sasUserIds
FROM google.sasportal.customer_nodes
WHERE customersId = '{{ customersId }}' -- required
AND nodesId = '{{ nodesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="customers_nodes_list">

Lists nodes.

```sql
SELECT
name,
displayName,
sasUserIds
FROM google.sasportal.customer_nodes
WHERE customersId = '{{ customersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="customers_nodes_nodes_create"
    values={[
        { label: 'customers_nodes_nodes_create', value: 'customers_nodes_nodes_create' },
        { label: 'customers_nodes_create', value: 'customers_nodes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="customers_nodes_nodes_create">

Creates a new node.

```sql
INSERT INTO google.sasportal.customer_nodes (
data__name,
data__displayName,
data__sasUserIds,
customersId,
nodesId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ customersId }}',
'{{ nodesId }}'
RETURNING
name,
displayName,
sasUserIds
;
```
</TabItem>
<TabItem value="customers_nodes_create">

Creates a new node.

```sql
INSERT INTO google.sasportal.customer_nodes (
data__name,
data__displayName,
data__sasUserIds,
customersId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ customersId }}'
RETURNING
name,
displayName,
sasUserIds
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: customer_nodes
  props:
    - name: customersId
      value: string
      description: Required parameter for the customer_nodes resource.
    - name: nodesId
      value: string
      description: Required parameter for the customer_nodes resource.
    - name: name
      value: string
      description: >
        Output only. Resource name.
        
    - name: displayName
      value: string
      description: >
        The node's display name.
        
    - name: sasUserIds
      value: array
      description: >
        User ids used by the devices belonging to this node.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="customers_nodes_delete"
    values={[
        { label: 'customers_nodes_delete', value: 'customers_nodes_delete' }
    ]}
>
<TabItem value="customers_nodes_delete">

Deletes a node.

```sql
DELETE FROM google.sasportal.customer_nodes
WHERE customersId = '{{ customersId }}' --required
AND nodesId = '{{ nodesId }}' --required;
```
</TabItem>
</Tabs>
