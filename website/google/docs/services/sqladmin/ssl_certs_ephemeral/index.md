--- 
title: ssl_certs_ephemeral
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_certs_ephemeral
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>ssl_certs_ephemeral</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>ssl_certs_ephemeral</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.ssl_certs_ephemeral" /></td></tr>
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
    <td><a href="#create_ephemeral"><CopyableCode code="create_ephemeral" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_ephemeral"
    values={[
        { label: 'create_ephemeral', value: 'create_ephemeral' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ephemeral">

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

```sql
INSERT INTO google.sqladmin.ssl_certs_ephemeral (
data__public_key,
data__access_token,
project,
instance
)
SELECT 
'{{ public_key }}',
'{{ access_token }}',
'{{ project }}',
'{{ instance }}'
RETURNING
cert,
certSerialNumber,
commonName,
createTime,
expirationTime,
instance,
kind,
selfLink,
sha1Fingerprint
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: ssl_certs_ephemeral
  props:
    - name: project
      value: string
      description: Required parameter for the ssl_certs_ephemeral resource.
    - name: instance
      value: string
      description: Required parameter for the ssl_certs_ephemeral resource.
    - name: public_key
      value: string
      description: >
        PEM encoded public key to include in the signed certificate.
        
    - name: access_token
      value: string
      description: >
        Access token to include in the signed certificate.
        
```
</TabItem>
</Tabs>
