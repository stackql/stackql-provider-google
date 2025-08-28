--- 
title: products_local_inventories
hide_title: false
hide_table_of_contents: false
keywords:
  - products_local_inventories
  - retail
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

Creates, updates, deletes, gets or lists a <code>products_local_inventories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>products_local_inventories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.products_local_inventories" /></td></tr>
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
    <td><a href="#projects_locations_catalogs_branches_products_add_local_inventories"><CopyableCode code="projects_locations_catalogs_branches_products_add_local_inventories" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_remove_local_inventories"><CopyableCode code="projects_locations_catalogs_branches_products_remove_local_inventories" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.</td>
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
<tr id="parameter-branchesId">
    <td><CopyableCode code="branchesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
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
    defaultValue="projects_locations_catalogs_branches_products_add_local_inventories"
    values={[
        { label: 'projects_locations_catalogs_branches_products_add_local_inventories', value: 'projects_locations_catalogs_branches_products_add_local_inventories' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_add_local_inventories">

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

```sql
INSERT INTO google.retail.products_local_inventories (
data__localInventories,
data__addMask,
data__addTime,
data__allowMissing,
projectsId,
locationsId,
catalogsId,
branchesId,
productsId
)
SELECT 
'{{ localInventories }}',
'{{ addMask }}',
'{{ addTime }}',
{{ allowMissing }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ branchesId }}',
'{{ productsId }}'
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
- name: products_local_inventories
  props:
    - name: projectsId
      value: string
      description: Required parameter for the products_local_inventories resource.
    - name: locationsId
      value: string
      description: Required parameter for the products_local_inventories resource.
    - name: catalogsId
      value: string
      description: Required parameter for the products_local_inventories resource.
    - name: branchesId
      value: string
      description: Required parameter for the products_local_inventories resource.
    - name: productsId
      value: string
      description: Required parameter for the products_local_inventories resource.
    - name: localInventories
      value: array
      description: >
        Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request.
        
    - name: addMask
      value: string
      description: >
        Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.
        
    - name: addTime
      value: string
      description: >
        The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used.
        
    - name: allowMissing
      value: boolean
      description: >
        If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_branches_products_remove_local_inventories"
    values={[
        { label: 'projects_locations_catalogs_branches_products_remove_local_inventories', value: 'projects_locations_catalogs_branches_products_remove_local_inventories' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_remove_local_inventories">

Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

```sql
DELETE FROM google.retail.products_local_inventories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND productsId = '{{ productsId }}' --required;
```
</TabItem>
</Tabs>
