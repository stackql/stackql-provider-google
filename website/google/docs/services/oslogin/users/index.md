--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - oslogin
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oslogin.users" /></td></tr>
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
    <td><a href="#import_ssh_public_key"><CopyableCode code="import_ssh_public_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-regions"><code>regions</code></a></td>
    <td>Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.</td>
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
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-regions">
    <td><CopyableCode code="regions" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="import_ssh_public_key"
    values={[
        { label: 'import_ssh_public_key', value: 'import_ssh_public_key' }
    ]}
>
<TabItem value="import_ssh_public_key">

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

```sql
EXEC google.oslogin.users.import_ssh_public_key 
@usersId='{{ usersId }}' --required, 
@projectId='{{ projectId }}', 
@regions='{{ regions }}' 
@@json=
'{
"key": "{{ key }}", 
"expirationTimeUsec": "{{ expirationTimeUsec }}"
}';
```
</TabItem>
</Tabs>
