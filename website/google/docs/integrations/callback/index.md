--- 
title: callback
hide_title: false
hide_table_of_contents: false
keywords:
  - callback
  - integrations
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

Creates, updates, deletes, gets or lists a <code>callback</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>callback</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.callback" /></td></tr>
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
    <td><a href="#callback_generate_token"><CopyableCode code="callback_generate_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-code"><code>code</code></a>, <a href="#parameter-gcpProjectId"><code>gcpProjectId</code></a>, <a href="#parameter-redirectUri"><code>redirectUri</code></a>, <a href="#parameter-product"><code>product</code></a></td>
    <td>Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.</td>
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
<tr id="parameter-code">
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gcpProjectId">
    <td><CopyableCode code="gcpProjectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-redirectUri">
    <td><CopyableCode code="redirectUri" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="callback_generate_token"
    values={[
        { label: 'callback_generate_token', value: 'callback_generate_token' }
    ]}
>
<TabItem value="callback_generate_token">

Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

```sql
EXEC google.integrations.callback.callback_generate_token 
@state='{{ state }}', 
@code='{{ code }}', 
@gcpProjectId='{{ gcpProjectId }}', 
@redirectUri='{{ redirectUri }}', 
@product='{{ product }}';
```
</TabItem>
</Tabs>
