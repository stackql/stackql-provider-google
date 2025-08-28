--- 
title: users_login_profile
hide_title: false
hide_table_of_contents: false
keywords:
  - users_login_profile
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

Creates, updates, deletes, gets or lists a <code>users_login_profile</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users_login_profile</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oslogin.users_login_profile" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_login_profile"
    values={[
        { label: 'get_login_profile', value: 'get_login_profile' }
    ]}
>
<TabItem value="get_login_profile">

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
    <td>Required. A unique user ID.</td>
</tr>
<tr>
    <td><CopyableCode code="posixAccounts" /></td>
    <td><code>array</code></td>
    <td>The list of POSIX accounts associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>object</code></td>
    <td>A map from SSH public key fingerprint to the associated key object.</td>
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
    <td><a href="#get_login_profile"><CopyableCode code="get_login_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-systemId"><code>systemId</code></a></td>
    <td>Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.</td>
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
<tr id="parameter-systemId">
    <td><CopyableCode code="systemId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_login_profile"
    values={[
        { label: 'get_login_profile', value: 'get_login_profile' }
    ]}
>
<TabItem value="get_login_profile">

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

```sql
SELECT
name,
posixAccounts,
sshPublicKeys
FROM google.oslogin.users_login_profile
WHERE usersId = '{{ usersId }}' -- required
AND projectId = '{{ projectId }}'
AND systemId = '{{ systemId }}';
```
</TabItem>
</Tabs>
