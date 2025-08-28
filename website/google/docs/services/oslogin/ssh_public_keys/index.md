--- 
title: ssh_public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - ssh_public_keys
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

Creates, updates, deletes, gets or lists a <code>ssh_public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssh_public_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oslogin.ssh_public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

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
    <td>Output only. The canonical resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTimeUsec" /></td>
    <td><code>string (int64)</code></td>
    <td>An expiration time in microseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA-256 fingerprint of the SSH public key.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Required. Public key text in SSH format, defined by [RFC4253](https://www.ietf.org/rfc/rfc4253.txt) section 6.6.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-sshPublicKeysId"><code>sshPublicKeysId</code></a></td>
    <td></td>
    <td>Retrieves an SSH public key.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td></td>
    <td>Create an SSH public key</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-sshPublicKeysId"><code>sshPublicKeysId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an SSH public key and returns the profile information. This method supports patch semantics.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-sshPublicKeysId"><code>sshPublicKeysId</code></a></td>
    <td></td>
    <td>Deletes an SSH public key.</td>
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
<tr id="parameter-sshPublicKeysId">
    <td><CopyableCode code="sshPublicKeysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieves an SSH public key.

```sql
SELECT
name,
expirationTimeUsec,
fingerprint,
key
FROM google.oslogin.ssh_public_keys
WHERE usersId = '{{ usersId }}' -- required
AND sshPublicKeysId = '{{ sshPublicKeysId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create an SSH public key

```sql
INSERT INTO google.oslogin.ssh_public_keys (
data__key,
data__expirationTimeUsec,
usersId
)
SELECT 
'{{ key }}',
'{{ expirationTimeUsec }}',
'{{ usersId }}'
RETURNING
name,
expirationTimeUsec,
fingerprint,
key
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: ssh_public_keys
  props:
    - name: usersId
      value: string
      description: Required parameter for the ssh_public_keys resource.
    - name: key
      value: string
      description: >
        Required. Public key text in SSH format, defined by [RFC4253](https://www.ietf.org/rfc/rfc4253.txt) section 6.6.
        
    - name: expirationTimeUsec
      value: string
      description: >
        An expiration time in microseconds since epoch.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an SSH public key and returns the profile information. This method supports patch semantics.

```sql
UPDATE google.oslogin.ssh_public_keys
SET 
data__key = '{{ key }}',
data__expirationTimeUsec = '{{ expirationTimeUsec }}'
WHERE 
usersId = '{{ usersId }}' --required
AND sshPublicKeysId = '{{ sshPublicKeysId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
expirationTimeUsec,
fingerprint,
key;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an SSH public key.

```sql
DELETE FROM google.oslogin.ssh_public_keys
WHERE usersId = '{{ usersId }}' --required
AND sshPublicKeysId = '{{ sshPublicKeysId }}' --required;
```
</TabItem>
</Tabs>
