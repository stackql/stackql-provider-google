--- 
title: product_sets_product
hide_title: false
hide_table_of_contents: false
keywords:
  - product_sets_product
  - vision
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

Creates, updates, deletes, gets or lists a <code>product_sets_product</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>product_sets_product</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vision.product_sets_product" /></td></tr>
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
    <td><a href="#projects_locations_product_sets_add_product"><CopyableCode code="projects_locations_product_sets_add_product" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productSetsId"><code>productSetsId</code></a></td>
    <td></td>
    <td>Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_product_sets_remove_product"><CopyableCode code="projects_locations_product_sets_remove_product" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productSetsId"><code>productSetsId</code></a></td>
    <td></td>
    <td>Removes a Product from the specified ProductSet.</td>
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
<tr id="parameter-productSetsId">
    <td><CopyableCode code="productSetsId" /></td>
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
    defaultValue="projects_locations_product_sets_add_product"
    values={[
        { label: 'projects_locations_product_sets_add_product', value: 'projects_locations_product_sets_add_product' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_product_sets_add_product">

Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.

```sql
INSERT INTO google.vision.product_sets_product (
data__product,
projectsId,
locationsId,
productSetsId
)
SELECT 
'{{ product }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productSetsId }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: product_sets_product
  props:
    - name: projectsId
      value: string
      description: Required parameter for the product_sets_product resource.
    - name: locationsId
      value: string
      description: Required parameter for the product_sets_product resource.
    - name: productSetsId
      value: string
      description: Required parameter for the product_sets_product resource.
    - name: product
      value: string
      description: >
        Required. The resource name for the Product to be added to this ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_product_sets_remove_product"
    values={[
        { label: 'projects_locations_product_sets_remove_product', value: 'projects_locations_product_sets_remove_product' }
    ]}
>
<TabItem value="projects_locations_product_sets_remove_product">

Removes a Product from the specified ProductSet.

```sql
DELETE FROM google.vision.product_sets_product
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productSetsId = '{{ productSetsId }}' --required;
```
</TabItem>
</Tabs>
