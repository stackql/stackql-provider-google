--- 
title: apiproducts_developer_app_key_api_product
hide_title: false
hide_table_of_contents: false
keywords:
  - apiproducts_developer_app_key_api_product
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

Creates, updates, deletes, gets or lists an <code>apiproducts_developer_app_key_api_product</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apiproducts_developer_app_key_api_product</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apiproducts_developer_app_key_api_product" /></td></tr>
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
    <td><a href="#organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product"><CopyableCode code="organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product"
    values={[
        { label: 'organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product', value: 'organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product' }
    ]}
>
<TabItem value="organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product">

Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.

```sql
UPDATE google.apigee.apiproducts_developer_app_key_api_product
SET 
-- No updatable properties
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND appsId = '{{ appsId }}' --required
AND keysId = '{{ keysId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required
AND action = '{{ action}}';
```
</TabItem>
</Tabs>
