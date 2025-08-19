--- 
title: address_groups_items
hide_title: false
hide_table_of_contents: false
keywords:
  - address_groups_items
  - networksecurity
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

Creates, updates, deletes, gets or lists an <code>address_groups_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>address_groups_items</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.address_groups_items" /></td></tr>
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
    <td><a href="#projects_locations_address_groups_add_items"><CopyableCode code="projects_locations_address_groups_add_items" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Adds items to an address group.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_add_items"><CopyableCode code="organizations_locations_address_groups_add_items" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Adds items to an address group.</td>
</tr>
<tr>
    <td><a href="#projects_locations_address_groups_remove_items"><CopyableCode code="projects_locations_address_groups_remove_items" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Removes items from an address group.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_remove_items"><CopyableCode code="organizations_locations_address_groups_remove_items" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Removes items from an address group.</td>
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
<tr id="parameter-addressGroupsId">
    <td><CopyableCode code="addressGroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_address_groups_add_items"
    values={[
        { label: 'projects_locations_address_groups_add_items', value: 'projects_locations_address_groups_add_items' },
        { label: 'organizations_locations_address_groups_add_items', value: 'organizations_locations_address_groups_add_items' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_address_groups_add_items">

Adds items to an address group.

```sql
INSERT INTO google.networksecurity.address_groups_items (
data__items,
data__requestId,
projectsId,
locationsId,
addressGroupsId
)
SELECT 
'{{ items }}',
'{{ requestId }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ addressGroupsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="organizations_locations_address_groups_add_items">

Adds items to an address group.

```sql
INSERT INTO google.networksecurity.address_groups_items (
data__items,
data__requestId,
organizationsId,
locationsId,
addressGroupsId
)
SELECT 
'{{ items }}',
'{{ requestId }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ addressGroupsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: address_groups_items
  props:
    - name: projectsId
      value: string
      description: Required parameter for the address_groups_items resource.
    - name: locationsId
      value: string
      description: Required parameter for the address_groups_items resource.
    - name: addressGroupsId
      value: string
      description: Required parameter for the address_groups_items resource.
    - name: organizationsId
      value: string
      description: Required parameter for the address_groups_items resource.
    - name: items
      value: array
      description: >
        Required. List of items to add.
        
    - name: requestId
      value: string
      description: >
        Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_address_groups_remove_items"
    values={[
        { label: 'projects_locations_address_groups_remove_items', value: 'projects_locations_address_groups_remove_items' },
        { label: 'organizations_locations_address_groups_remove_items', value: 'organizations_locations_address_groups_remove_items' }
    ]}
>
<TabItem value="projects_locations_address_groups_remove_items">

Removes items from an address group.

```sql
DELETE FROM google.networksecurity.address_groups_items
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND addressGroupsId = '{{ addressGroupsId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_address_groups_remove_items">

Removes items from an address group.

```sql
DELETE FROM google.networksecurity.address_groups_items
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND addressGroupsId = '{{ addressGroupsId }}' --required;
```
</TabItem>
</Tabs>
