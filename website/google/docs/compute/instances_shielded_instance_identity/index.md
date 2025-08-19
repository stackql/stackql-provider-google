--- 
title: instances_shielded_instance_identity
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_shielded_instance_identity
  - compute
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

Creates, updates, deletes, gets or lists an <code>instances_shielded_instance_identity</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_shielded_instance_identity</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instances_shielded_instance_identity" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_shielded_instance_identity"
    values={[
        { label: 'get_shielded_instance_identity', value: 'get_shielded_instance_identity' }
    ]}
>
<TabItem value="get_shielded_instance_identity">

A Shielded Instance Identity.

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
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>object</code></td>
    <td>An Endorsement Key (EK) made by the RSA 2048 algorithm issued to the Shielded Instance's vTPM. (id: ShieldedInstanceIdentityEntry)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#shieldedInstanceIdentity for shielded Instance identity entry. (default: compute#shieldedInstanceIdentity)</td>
</tr>
<tr>
    <td><CopyableCode code="signingKey" /></td>
    <td><code>object</code></td>
    <td>An Attestation Key (AK) made by the RSA 2048 algorithm issued to the Shielded Instance's vTPM. (id: ShieldedInstanceIdentityEntry)</td>
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
    <td><a href="#get_shielded_instance_identity"><CopyableCode code="get_shielded_instance_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Returns the Shielded Instance Identity of an instance</td>
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
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_shielded_instance_identity"
    values={[
        { label: 'get_shielded_instance_identity', value: 'get_shielded_instance_identity' }
    ]}
>
<TabItem value="get_shielded_instance_identity">

Returns the Shielded Instance Identity of an instance

```sql
SELECT
encryptionKey,
kind,
signingKey
FROM google.compute.instances_shielded_instance_identity
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instance = '{{ instance }}' -- required;
```
</TabItem>
</Tabs>
