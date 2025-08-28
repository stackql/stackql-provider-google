--- 
title: attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes
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

Creates, updates, deletes, gets or lists an <code>attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attributes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_developers_apps_attributes_get"
    values={[
        { label: 'organizations_developers_apps_attributes_get', value: 'organizations_developers_apps_attributes_get' },
        { label: 'organizations_apiproducts_attributes_get', value: 'organizations_apiproducts_attributes_get' },
        { label: 'organizations_developers_apps_attributes_list', value: 'organizations_developers_apps_attributes_list' },
        { label: 'organizations_developers_attributes_get', value: 'organizations_developers_attributes_get' },
        { label: 'organizations_apiproducts_attributes_list', value: 'organizations_apiproducts_attributes_list' },
        { label: 'organizations_developers_attributes_list', value: 'organizations_developers_attributes_list' }
    ]}
>
<TabItem value="organizations_developers_apps_attributes_get">

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
    <td>API key of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Value of the attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apiproducts_attributes_get">

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
    <td>API key of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Value of the attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_developers_apps_attributes_list">

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
    <td><CopyableCode code="attribute" /></td>
    <td><code>array</code></td>
    <td>List of attributes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_developers_attributes_get">

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
    <td>API key of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Value of the attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apiproducts_attributes_list">

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
    <td><CopyableCode code="attribute" /></td>
    <td><code>array</code></td>
    <td>List of attributes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_developers_attributes_list">

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
    <td><CopyableCode code="attribute" /></td>
    <td><code>array</code></td>
    <td>List of attributes.</td>
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
    <td><a href="#organizations_developers_apps_attributes_get"><CopyableCode code="organizations_developers_apps_attributes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Returns a developer app attribute.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_attributes_get"><CopyableCode code="organizations_apiproducts_attributes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Gets the value of an API product attribute.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_attributes_list"><CopyableCode code="organizations_developers_apps_attributes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Returns a list of all developer app attributes.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_attributes_get"><CopyableCode code="organizations_developers_attributes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Returns the value of the specified developer attribute.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_attributes_list"><CopyableCode code="organizations_apiproducts_attributes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Lists all API product attributes.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_attributes_list"><CopyableCode code="organizations_developers_attributes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Returns a list of all developer attributes.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_attributes_delete"><CopyableCode code="organizations_developers_apps_attributes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Deletes a developer app attribute.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_attributes_delete"><CopyableCode code="organizations_apiproducts_attributes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Deletes an API product attribute.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_attributes_delete"><CopyableCode code="organizations_developers_attributes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Deletes a developer attribute.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_attributes_update_api_product_attribute"><CopyableCode code="organizations_apiproducts_attributes_update_api_product_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_attributes_update_developer_app_attribute"><CopyableCode code="organizations_developers_apps_attributes_update_developer_app_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Updates a developer app attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_attributes_update_developer_attribute"><CopyableCode code="organizations_developers_attributes_update_developer_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Updates a developer attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.</td>
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
<tr id="parameter-attributesId">
    <td><CopyableCode code="attributesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
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

## `SELECT` examples

<Tabs
    defaultValue="organizations_developers_apps_attributes_get"
    values={[
        { label: 'organizations_developers_apps_attributes_get', value: 'organizations_developers_apps_attributes_get' },
        { label: 'organizations_apiproducts_attributes_get', value: 'organizations_apiproducts_attributes_get' },
        { label: 'organizations_developers_apps_attributes_list', value: 'organizations_developers_apps_attributes_list' },
        { label: 'organizations_developers_attributes_get', value: 'organizations_developers_attributes_get' },
        { label: 'organizations_apiproducts_attributes_list', value: 'organizations_apiproducts_attributes_list' },
        { label: 'organizations_developers_attributes_list', value: 'organizations_developers_attributes_list' }
    ]}
>
<TabItem value="organizations_developers_apps_attributes_get">

Returns a developer app attribute.

```sql
SELECT
name,
value
FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND attributesId = '{{ attributesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apiproducts_attributes_get">

Gets the value of an API product attribute.

```sql
SELECT
name,
value
FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apiproductsId = '{{ apiproductsId }}' -- required
AND attributesId = '{{ attributesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_developers_apps_attributes_list">

Returns a list of all developer app attributes.

```sql
SELECT
attribute
FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND appsId = '{{ appsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_developers_attributes_get">

Returns the value of the specified developer attribute.

```sql
SELECT
name,
value
FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND attributesId = '{{ attributesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apiproducts_attributes_list">

Lists all API product attributes.

```sql
SELECT
attribute
FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apiproductsId = '{{ apiproductsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_developers_attributes_list">

Returns a list of all developer attributes.

```sql
SELECT
attribute
FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_developers_apps_attributes_delete"
    values={[
        { label: 'organizations_developers_apps_attributes_delete', value: 'organizations_developers_apps_attributes_delete' },
        { label: 'organizations_apiproducts_attributes_delete', value: 'organizations_apiproducts_attributes_delete' },
        { label: 'organizations_developers_attributes_delete', value: 'organizations_developers_attributes_delete' }
    ]}
>
<TabItem value="organizations_developers_apps_attributes_delete">

Deletes a developer app attribute.

```sql
DELETE FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND appsId = '{{ appsId }}' --required
AND attributesId = '{{ attributesId }}' --required;
```
</TabItem>
<TabItem value="organizations_apiproducts_attributes_delete">

Deletes an API product attribute.

```sql
DELETE FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required
AND attributesId = '{{ attributesId }}' --required;
```
</TabItem>
<TabItem value="organizations_developers_attributes_delete">

Deletes a developer attribute.

```sql
DELETE FROM google.apigee.attributes
WHERE organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND attributesId = '{{ attributesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_apiproducts_attributes_update_api_product_attribute"
    values={[
        { label: 'organizations_apiproducts_attributes_update_api_product_attribute', value: 'organizations_apiproducts_attributes_update_api_product_attribute' },
        { label: 'organizations_developers_apps_attributes_update_developer_app_attribute', value: 'organizations_developers_apps_attributes_update_developer_app_attribute' },
        { label: 'organizations_developers_attributes_update_developer_attribute', value: 'organizations_developers_attributes_update_developer_attribute' }
    ]}
>
<TabItem value="organizations_apiproducts_attributes_update_api_product_attribute">

Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

```sql
EXEC google.apigee.attributes.organizations_apiproducts_attributes_update_api_product_attribute 
@organizationsId='{{ organizationsId }}' --required, 
@apiproductsId='{{ apiproductsId }}' --required, 
@attributesId='{{ attributesId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}';
```
</TabItem>
<TabItem value="organizations_developers_apps_attributes_update_developer_app_attribute">

Updates a developer app attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

```sql
EXEC google.apigee.attributes.organizations_developers_apps_attributes_update_developer_app_attribute 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required, 
@appsId='{{ appsId }}' --required, 
@attributesId='{{ attributesId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}';
```
</TabItem>
<TabItem value="organizations_developers_attributes_update_developer_attribute">

Updates a developer attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

```sql
EXEC google.apigee.attributes.organizations_developers_attributes_update_developer_attribute 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required, 
@attributesId='{{ attributesId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}';
```
</TabItem>
</Tabs>
