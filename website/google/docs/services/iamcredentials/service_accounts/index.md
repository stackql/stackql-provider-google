--- 
title: service_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_accounts
  - iamcredentials
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

Creates, updates, deletes, gets or lists a <code>service_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iamcredentials.service_accounts" /></td></tr>
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
    <td><a href="#generate_access_token"><CopyableCode code="generate_access_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Generates an OAuth 2.0 access token for a service account.</td>
</tr>
<tr>
    <td><a href="#generate_id_token"><CopyableCode code="generate_id_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Generates an OpenID Connect ID token for a service account.</td>
</tr>
<tr>
    <td><a href="#sign_blob"><CopyableCode code="sign_blob" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Signs a blob using a service account's system-managed private key.</td>
</tr>
<tr>
    <td><a href="#sign_jwt"><CopyableCode code="sign_jwt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Signs a JWT using a service account's system-managed private key.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceAccountsId">
    <td><CopyableCode code="serviceAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="generate_access_token"
    values={[
        { label: 'generate_access_token', value: 'generate_access_token' },
        { label: 'generate_id_token', value: 'generate_id_token' },
        { label: 'sign_blob', value: 'sign_blob' },
        { label: 'sign_jwt', value: 'sign_jwt' }
    ]}
>
<TabItem value="generate_access_token">

Generates an OAuth 2.0 access token for a service account.

```sql
EXEC google.iamcredentials.service_accounts.generate_access_token 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"delegates": "{{ delegates }}", 
"scope": "{{ scope }}", 
"lifetime": "{{ lifetime }}"
}';
```
</TabItem>
<TabItem value="generate_id_token">

Generates an OpenID Connect ID token for a service account.

```sql
EXEC google.iamcredentials.service_accounts.generate_id_token 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"delegates": "{{ delegates }}", 
"audience": "{{ audience }}", 
"includeEmail": {{ includeEmail }}, 
"organizationNumberIncluded": {{ organizationNumberIncluded }}
}';
```
</TabItem>
<TabItem value="sign_blob">

Signs a blob using a service account's system-managed private key.

```sql
EXEC google.iamcredentials.service_accounts.sign_blob 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"delegates": "{{ delegates }}", 
"payload": "{{ payload }}"
}';
```
</TabItem>
<TabItem value="sign_jwt">

Signs a JWT using a service account's system-managed private key.

```sql
EXEC google.iamcredentials.service_accounts.sign_jwt 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"delegates": "{{ delegates }}", 
"payload": "{{ payload }}"
}';
```
</TabItem>
</Tabs>
