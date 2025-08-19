--- 
title: attributes_api_product_attribute
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes_api_product_attribute
  - apigee
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

Creates, updates, deletes, gets or lists an <code>attributes_api_product_attribute</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attributes_api_product_attribute</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.attributes_api_product_attribute" /></td></tr>
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
    <td><a href="#organizations_apiproducts_attributes_update_api_product_attribute"><CopyableCode code="organizations_apiproducts_attributes_update_api_product_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.</td>
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
<tr id="parameter-apiproductsId">
    <td><CopyableCode code="apiproductsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-attributesId">
    <td><CopyableCode code="attributesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="organizations_apiproducts_attributes_update_api_product_attribute"
    values={[
        { label: 'organizations_apiproducts_attributes_update_api_product_attribute', value: 'organizations_apiproducts_attributes_update_api_product_attribute' }
    ]}
>
<TabItem value="organizations_apiproducts_attributes_update_api_product_attribute">

Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

```sql
UPDATE google.apigee.attributes_api_product_attribute
SET 
data__name = '{{ name }}',
data__value = '{{ value }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required
AND attributesId = '{{ attributesId }}' --required
RETURNING
name,
value;
```
</TabItem>
</Tabs>
