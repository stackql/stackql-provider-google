--- 
title: crypto_keys_protected_resources_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - crypto_keys_protected_resources_summary
  - kmsinventory
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

Creates, updates, deletes, gets or lists a <code>crypto_keys_protected_resources_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>crypto_keys_protected_resources_summary</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.kmsinventory.crypto_keys_protected_resources_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_protected_resources_summary"
    values={[
        { label: 'get_protected_resources_summary', value: 'get_protected_resources_summary' }
    ]}
>
<TabItem value="get_protected_resources_summary">

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
    <td>The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary</td>
</tr>
<tr>
    <td><CopyableCode code="cloudProducts" /></td>
    <td><code>object</code></td>
    <td>The number of resources protected by the key grouped by Cloud product.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>object</code></td>
    <td>The number of resources protected by the key grouped by region.</td>
</tr>
<tr>
    <td><CopyableCode code="projectCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The total number of protected resources in the same Cloud organization as the key.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceTypes" /></td>
    <td><code>object</code></td>
    <td>The number of resources protected by the key grouped by resource type.</td>
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
    <td><a href="#get_protected_resources_summary"><CopyableCode code="get_protected_resources_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td></td>
    <td>Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.</td>
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
<tr id="parameter-cryptoKeysId">
    <td><CopyableCode code="cryptoKeysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keyRingsId">
    <td><CopyableCode code="keyRingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_protected_resources_summary"
    values={[
        { label: 'get_protected_resources_summary', value: 'get_protected_resources_summary' }
    ]}
>
<TabItem value="get_protected_resources_summary">

Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

```sql
SELECT
name,
cloudProducts,
locations,
projectCount,
resourceCount,
resourceTypes
FROM google.kmsinventory.crypto_keys_protected_resources_summary
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND cryptoKeysId = '{{ cryptoKeysId }}' -- required;
```
</TabItem>
</Tabs>
