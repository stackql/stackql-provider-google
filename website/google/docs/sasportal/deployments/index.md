--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sasportal.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="customers_nodes_deployments_list"
    values={[
        { label: 'customers_nodes_deployments_list', value: 'customers_nodes_deployments_list' },
        { label: 'customers_deployments_get', value: 'customers_deployments_get' },
        { label: 'nodes_nodes_deployments_list', value: 'nodes_nodes_deployments_list' },
        { label: 'nodes_deployments_get', value: 'nodes_deployments_get' },
        { label: 'customers_deployments_list', value: 'customers_deployments_list' },
        { label: 'nodes_deployments_list', value: 'nodes_deployments_list' },
        { label: 'deployments_get', value: 'deployments_get' }
    ]}
>
<TabItem value="customers_nodes_deployments_list">

Response for ListDeployments.

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>The deployments that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_deployments_get">

The Deployment.

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
    <td>The deployment's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="frns" /></td>
    <td><code>array</code></td>
    <td>Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.</td>
</tr>
<tr>
    <td><CopyableCode code="sasUserIds" /></td>
    <td><code>array</code></td>
    <td>User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_nodes_deployments_list">

Response for ListDeployments.

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>The deployments that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_deployments_get">

The Deployment.

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
    <td>The deployment's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="frns" /></td>
    <td><code>array</code></td>
    <td>Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.</td>
</tr>
<tr>
    <td><CopyableCode code="sasUserIds" /></td>
    <td><code>array</code></td>
    <td>User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_deployments_list">

Response for ListDeployments.

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>The deployments that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_deployments_list">

Response for ListDeployments.

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>The deployments that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="deployments_get">

The Deployment.

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
    <td>The deployment's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="frns" /></td>
    <td><code>array</code></td>
    <td>Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.</td>
</tr>
<tr>
    <td><CopyableCode code="sasUserIds" /></td>
    <td><code>array</code></td>
    <td>User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.</td>
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
    <td><a href="#customers_nodes_deployments_list"><CopyableCode code="customers_nodes_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists deployments.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_get"><CopyableCode code="customers_deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Returns a requested deployment.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_deployments_list"><CopyableCode code="nodes_nodes_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists deployments.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_get"><CopyableCode code="nodes_deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Returns a requested deployment.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_list"><CopyableCode code="customers_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists deployments.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_list"><CopyableCode code="nodes_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists deployments.</td>
</tr>
<tr>
    <td><a href="#deployments_get"><CopyableCode code="deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Returns a requested deployment.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_deployments_create"><CopyableCode code="customers_nodes_deployments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a new deployment.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_deployments_create"><CopyableCode code="nodes_nodes_deployments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td></td>
    <td>Creates a new deployment.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_create"><CopyableCode code="customers_deployments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates a new deployment.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_patch"><CopyableCode code="customers_deployments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing deployment.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_patch"><CopyableCode code="nodes_deployments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing deployment.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_delete"><CopyableCode code="customers_deployments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Deletes a deployment.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_delete"><CopyableCode code="nodes_deployments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Deletes a deployment.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_move"><CopyableCode code="customers_deployments_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Moves a deployment under another node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_move"><CopyableCode code="nodes_deployments_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Moves a deployment under another node or customer.</td>
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
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
    defaultValue="customers_nodes_deployments_list"
    values={[
        { label: 'customers_nodes_deployments_list', value: 'customers_nodes_deployments_list' },
        { label: 'customers_deployments_get', value: 'customers_deployments_get' },
        { label: 'nodes_nodes_deployments_list', value: 'nodes_nodes_deployments_list' },
        { label: 'nodes_deployments_get', value: 'nodes_deployments_get' },
        { label: 'customers_deployments_list', value: 'customers_deployments_list' },
        { label: 'nodes_deployments_list', value: 'nodes_deployments_list' },
        { label: 'deployments_get', value: 'deployments_get' }
    ]}
>
<TabItem value="customers_nodes_deployments_list">

Lists deployments.

```sql
SELECT
deployments,
nextPageToken
FROM google.sasportal.deployments
WHERE customersId = '{{ customersId }}' -- required
AND nodesId = '{{ nodesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="customers_deployments_get">

Returns a requested deployment.

```sql
SELECT
name,
displayName,
frns,
sasUserIds
FROM google.sasportal.deployments
WHERE customersId = '{{ customersId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
<TabItem value="nodes_nodes_deployments_list">

Lists deployments.

```sql
SELECT
deployments,
nextPageToken
FROM google.sasportal.deployments
WHERE nodesId = '{{ nodesId }}' -- required
AND nodesId1 = '{{ nodesId1 }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="nodes_deployments_get">

Returns a requested deployment.

```sql
SELECT
name,
displayName,
frns,
sasUserIds
FROM google.sasportal.deployments
WHERE nodesId = '{{ nodesId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
<TabItem value="customers_deployments_list">

Lists deployments.

```sql
SELECT
deployments,
nextPageToken
FROM google.sasportal.deployments
WHERE customersId = '{{ customersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="nodes_deployments_list">

Lists deployments.

```sql
SELECT
deployments,
nextPageToken
FROM google.sasportal.deployments
WHERE nodesId = '{{ nodesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="deployments_get">

Returns a requested deployment.

```sql
SELECT
name,
displayName,
frns,
sasUserIds
FROM google.sasportal.deployments
WHERE deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="customers_nodes_deployments_create"
    values={[
        { label: 'customers_nodes_deployments_create', value: 'customers_nodes_deployments_create' },
        { label: 'nodes_nodes_deployments_create', value: 'nodes_nodes_deployments_create' },
        { label: 'customers_deployments_create', value: 'customers_deployments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="customers_nodes_deployments_create">

Creates a new deployment.

```sql
INSERT INTO google.sasportal.deployments (
data__displayName,
data__sasUserIds,
customersId,
nodesId
)
SELECT 
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ customersId }}',
'{{ nodesId }}'
RETURNING
name,
displayName,
frns,
sasUserIds
;
```
</TabItem>
<TabItem value="nodes_nodes_deployments_create">

Creates a new deployment.

```sql
INSERT INTO google.sasportal.deployments (
data__displayName,
data__sasUserIds,
nodesId,
nodesId1
)
SELECT 
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ nodesId }}',
'{{ nodesId1 }}'
RETURNING
name,
displayName,
frns,
sasUserIds
;
```
</TabItem>
<TabItem value="customers_deployments_create">

Creates a new deployment.

```sql
INSERT INTO google.sasportal.deployments (
data__displayName,
data__sasUserIds,
customersId
)
SELECT 
'{{ displayName }}',
'{{ sasUserIds }}',
'{{ customersId }}'
RETURNING
name,
displayName,
frns,
sasUserIds
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: deployments
  props:
    - name: customersId
      value: string
      description: Required parameter for the deployments resource.
    - name: nodesId
      value: string
      description: Required parameter for the deployments resource.
    - name: nodesId1
      value: string
      description: Required parameter for the deployments resource.
    - name: displayName
      value: string
      description: >
        The deployment's display name.
        
    - name: sasUserIds
      value: array
      description: >
        User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="customers_deployments_patch"
    values={[
        { label: 'customers_deployments_patch', value: 'customers_deployments_patch' },
        { label: 'nodes_deployments_patch', value: 'nodes_deployments_patch' }
    ]}
>
<TabItem value="customers_deployments_patch">

Updates an existing deployment.

```sql
UPDATE google.sasportal.deployments
SET 
data__displayName = '{{ displayName }}',
data__sasUserIds = '{{ sasUserIds }}'
WHERE 
customersId = '{{ customersId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
frns,
sasUserIds;
```
</TabItem>
<TabItem value="nodes_deployments_patch">

Updates an existing deployment.

```sql
UPDATE google.sasportal.deployments
SET 
data__displayName = '{{ displayName }}',
data__sasUserIds = '{{ sasUserIds }}'
WHERE 
nodesId = '{{ nodesId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
frns,
sasUserIds;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="customers_deployments_delete"
    values={[
        { label: 'customers_deployments_delete', value: 'customers_deployments_delete' },
        { label: 'nodes_deployments_delete', value: 'nodes_deployments_delete' }
    ]}
>
<TabItem value="customers_deployments_delete">

Deletes a deployment.

```sql
DELETE FROM google.sasportal.deployments
WHERE customersId = '{{ customersId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required;
```
</TabItem>
<TabItem value="nodes_deployments_delete">

Deletes a deployment.

```sql
DELETE FROM google.sasportal.deployments
WHERE nodesId = '{{ nodesId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="customers_deployments_move"
    values={[
        { label: 'customers_deployments_move', value: 'customers_deployments_move' },
        { label: 'nodes_deployments_move', value: 'nodes_deployments_move' }
    ]}
>
<TabItem value="customers_deployments_move">

Moves a deployment under another node or customer.

```sql
EXEC google.sasportal.deployments.customers_deployments_move 
@customersId='{{ customersId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}';
```
</TabItem>
<TabItem value="nodes_deployments_move">

Moves a deployment under another node or customer.

```sql
EXEC google.sasportal.deployments.nodes_deployments_move 
@nodesId='{{ nodesId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}';
```
</TabItem>
</Tabs>
