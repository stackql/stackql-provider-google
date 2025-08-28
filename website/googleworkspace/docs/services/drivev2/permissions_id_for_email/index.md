--- 
title: permissions_id_for_email
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions_id_for_email
  - drivev2
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>permissions_id_for_email</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>permissions_id_for_email</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.permissions_id_for_email" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_id_for_email"
    values={[
        { label: 'get_id_for_email', value: 'get_id_for_email' }
    ]}
>
<TabItem value="get_id_for_email">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The permission ID.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#permissionId`. (default: drive#permissionId)</td>
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
    <td><a href="#get_id_for_email"><CopyableCode code="get_id_for_email" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Returns the permission ID for an email address.</td>
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
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_id_for_email"
    values={[
        { label: 'get_id_for_email', value: 'get_id_for_email' }
    ]}
>
<TabItem value="get_id_for_email">

Returns the permission ID for an email address.

```sql
SELECT
id,
kind
FROM googleworkspace.drivev2.permissions_id_for_email
WHERE email = '{{ email }}' -- required;
```
</TabItem>
</Tabs>
