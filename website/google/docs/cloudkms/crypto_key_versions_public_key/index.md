--- 
title: crypto_key_versions_public_key
hide_title: false
hide_table_of_contents: false
keywords:
  - crypto_key_versions_public_key
  - cloudkms
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

Creates, updates, deletes, gets or lists a <code>crypto_key_versions_public_key</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>crypto_key_versions_public_key</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.crypto_key_versions_public_key" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' }
    ]}
>
<TabItem value="get_public_key">

The public keys for a given CryptoKeyVersion. Obtained via GetPublicKey.

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
    <td>The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta.</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>The Algorithm associated with this key.</td>
</tr>
<tr>
    <td><CopyableCode code="pem" /></td>
    <td><code>string</code></td>
    <td>The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).</td>
</tr>
<tr>
    <td><CopyableCode code="pemCrc32c" /></td>
    <td><code>string (int64)</code></td>
    <td>Integrity verification field. A CRC32C checksum of the returned PublicKey.pem. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed `2^32-1`, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta.</td>
</tr>
<tr>
    <td><CopyableCode code="protectionLevel" /></td>
    <td><code>string</code></td>
    <td>The ProtectionLevel of the CryptoKeyVersion public key.</td>
</tr>
<tr>
    <td><CopyableCode code="publicKey" /></td>
    <td><code>object</code></td>
    <td>This field contains the public key (with integrity verification), formatted according to the public_key_format field. (id: ChecksummedData)</td>
</tr>
<tr>
    <td><CopyableCode code="publicKeyFormat" /></td>
    <td><code>string</code></td>
    <td>The PublicKey format specified by the customer through the public_key_format field.</td>
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
    <td><a href="#get_public_key"><CopyableCode code="get_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td><a href="#parameter-publicKeyFormat"><code>publicKeyFormat</code></a></td>
    <td>Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.</td>
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
<tr id="parameter-cryptoKeyVersionsId">
    <td><CopyableCode code="cryptoKeyVersionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-publicKeyFormat">
    <td><CopyableCode code="publicKeyFormat" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' }
    ]}
>
<TabItem value="get_public_key">

Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.

```sql
SELECT
name,
algorithm,
pem,
pemCrc32c,
protectionLevel,
publicKey,
publicKeyFormat
FROM google.cloudkms.crypto_key_versions_public_key
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND cryptoKeysId = '{{ cryptoKeysId }}' -- required
AND cryptoKeyVersionsId = '{{ cryptoKeyVersionsId }}' -- required
AND publicKeyFormat = '{{ publicKeyFormat }}';
```
</TabItem>
</Tabs>
