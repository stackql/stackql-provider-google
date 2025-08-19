--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nodes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sasportal.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="nodes_nodes_nodes_list"
    values={[
        { label: 'nodes_nodes_nodes_list', value: 'nodes_nodes_nodes_list' },
        { label: 'nodes_nodes_list', value: 'nodes_nodes_list' }
    ]}
>
<TabItem value="nodes_nodes_nodes_list">

Response for ListNodes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>The nodes that match the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_nodes_list">

Response for ListNodes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>The nodes that match the request.</td>
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
    <td><a href="#nodes_nodes_nodes_list"><CopyableCode code="nodes_nodes_nodes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists nodes.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_list"><CopyableCode code="nodes_nodes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists nodes.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_nodes_create"><CopyableCode code="nodes_nodes_nodes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td></td>
    <td>Creates a new node.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_create"><CopyableCode code="nodes_nodes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a new node.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_patch"><CopyableCode code="customers_nodes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing node.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_patch"><CopyableCode code="nodes_nodes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing node.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_delete"><CopyableCode code="nodes_nodes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td></td>
    <td>Deletes a node.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_move"><CopyableCode code="customers_nodes_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Moves a node under another node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_move"><CopyableCode code="nodes_nodes_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td></td>
    <td>Moves a node under another node or customer.</td>
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
<tr id="parameter-nodesId1">
    <td><CopyableCode code="nodesId1" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="nodes_nodes_nodes_list"
    values={[
        { label: 'nodes_nodes_nodes_list', value: 'nodes_nodes_nodes_list' },
        { label: 'nodes_nodes_list', value: 'nodes_nodes_list' }
    ]}
>
<TabItem value="nodes_nodes_nodes_list">

Lists nodes.

```sql
SELECT
nextPageToken,
nodes
FROM google.sasportal.nodes
WHERE nodesId = '{{ nodesId }}' -- required
AND nodesId1 = '{{ nodesId1 }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="nodes_nodes_list">

Lists nodes.

```sql
SELECT
nextPageToken,
nodes
FROM google.sasportal.nodes
WHERE nodesId = '{{ nodesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="nodes_nodes_nodes_create"
    values={[
        { label: 'nodes_nodes_nodes_create', value: 'nodes_nodes_nodes_create' },
        { label: 'nodes_nodes_create', value: 'nodes_nodes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="nodes_nodes_nodes_create">

Creates a new node.

```sql
INSERT INTO google.sasportal.nodes (
data__name,
data__displayName,
data__sasUserIds,
nodesId,
nodesId1
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ nodesId }}',
'{{ nodesId1 }}'
RETURNING
name,
displayName,
sasUserIds
;
```
</TabItem>
<TabItem value="nodes_nodes_create">

Creates a new node.

```sql
INSERT INTO google.sasportal.nodes (
data__name,
data__displayName,
data__sasUserIds,
nodesId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ nodesId }}'
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
- name: nodes
  props:
    - name: nodesId
      value: string
      description: Required parameter for the nodes resource.
    - name: nodesId1
      value: string
      description: Required parameter for the nodes resource.
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


## `UPDATE` examples

<Tabs
    defaultValue="customers_nodes_patch"
    values={[
        { label: 'customers_nodes_patch', value: 'customers_nodes_patch' },
        { label: 'nodes_nodes_patch', value: 'nodes_nodes_patch' }
    ]}
>
<TabItem value="customers_nodes_patch">

Updates an existing node.

```sql
UPDATE google.sasportal.nodes
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__sasUserIds = '{{ sasUserIds }}'
WHERE 
customersId = '{{ customersId }}' --required
AND nodesId = '{{ nodesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
sasUserIds;
```
</TabItem>
<TabItem value="nodes_nodes_patch">

Updates an existing node.

```sql
UPDATE google.sasportal.nodes
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__sasUserIds = '{{ sasUserIds }}'
WHERE 
nodesId = '{{ nodesId }}' --required
AND nodesId1 = '{{ nodesId1 }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
sasUserIds;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="nodes_nodes_delete"
    values={[
        { label: 'nodes_nodes_delete', value: 'nodes_nodes_delete' }
    ]}
>
<TabItem value="nodes_nodes_delete">

Deletes a node.

```sql
DELETE FROM google.sasportal.nodes
WHERE nodesId = '{{ nodesId }}' --required
AND nodesId1 = '{{ nodesId1 }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="customers_nodes_move"
    values={[
        { label: 'customers_nodes_move', value: 'customers_nodes_move' },
        { label: 'nodes_nodes_move', value: 'nodes_nodes_move' }
    ]}
>
<TabItem value="customers_nodes_move">

Moves a node under another node or customer.

```sql
EXEC google.sasportal.nodes.customers_nodes_move 
@customersId='{{ customersId }}' --required, 
@nodesId='{{ nodesId }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}';
```
</TabItem>
<TabItem value="nodes_nodes_move">

Moves a node under another node or customer.

```sql
EXEC google.sasportal.nodes.nodes_nodes_move 
@nodesId='{{ nodesId }}' --required, 
@nodesId1='{{ nodesId1 }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}';
```
</TabItem>
</Tabs>
