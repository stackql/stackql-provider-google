--- 
title: crypto_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - crypto_keys
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

Creates, updates, deletes, gets or lists a <code>crypto_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>crypto_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.crypto_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.

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
    <td>Output only. The resource name for this CryptoKey in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CryptoKey was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyBackend" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/*/locations/*/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="destroyScheduledDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 30 days.</td>
</tr>
<tr>
    <td><CopyableCode code="importOnly" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether this key may contain imported versions only.</td>
</tr>
<tr>
    <td><CopyableCode code="keyAccessJustificationsPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The policy used for Key Access Justifications Policy Enforcement. If this field is present and this key is enrolled in Key Access Justifications Policy Enforcement, the policy will be evaluated in encrypt, decrypt, and sign operations, and the operation will fail if rejected by the policy. The policy is defined by specifying zero or more allowed justification codes. https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes By default, this field is absent, and all justification codes are allowed. (id: KeyAccessJustificationsPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).</td>
</tr>
<tr>
    <td><CopyableCode code="nextRotationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="primary" /></td>
    <td><code>object</code></td>
    <td>Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The CryptoKey's primary version can be updated via UpdateCryptoKeyPrimaryVersion. Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted. (id: CryptoKeyVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td>Immutable. The immutable purpose of this CryptoKey.</td>
</tr>
<tr>
    <td><CopyableCode code="rotationPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="versionTemplate" /></td>
    <td><code>object</code></td>
    <td>A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template. (id: CryptoKeyVersionTemplate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for KeyManagementService.ListCryptoKeys.

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
    <td><CopyableCode code="cryptoKeys" /></td>
    <td><code>array</code></td>
    <td>The list of CryptoKeys.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of CryptoKeys that matched the query. This field is not populated if ListCryptoKeysRequest.filter is applied.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td></td>
    <td>Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-versionView"><code>versionView</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists CryptoKeys.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a></td>
    <td><a href="#parameter-cryptoKeyId"><code>cryptoKeyId</code></a>, <a href="#parameter-skipInitialVersionCreation"><code>skipInitialVersionCreation</code></a></td>
    <td>Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a CryptoKey.</td>
</tr>
<tr>
    <td><a href="#encrypt"><CopyableCode code="encrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td></td>
    <td>Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.</td>
</tr>
<tr>
    <td><a href="#decrypt"><CopyableCode code="decrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td></td>
    <td>Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.</td>
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
<tr id="parameter-cryptoKeyId">
    <td><CopyableCode code="cryptoKeyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-skipInitialVersionCreation">
    <td><CopyableCode code="skipInitialVersionCreation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-versionView">
    <td><CopyableCode code="versionView" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.

```sql
SELECT
name,
createTime,
cryptoKeyBackend,
destroyScheduledDuration,
importOnly,
keyAccessJustificationsPolicy,
labels,
nextRotationTime,
primary,
purpose,
rotationPeriod,
versionTemplate
FROM google.cloudkms.crypto_keys
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND cryptoKeysId = '{{ cryptoKeysId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists CryptoKeys.

```sql
SELECT
cryptoKeys,
nextPageToken,
totalSize
FROM google.cloudkms.crypto_keys
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND versionView = '{{ versionView }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.

```sql
INSERT INTO google.cloudkms.crypto_keys (
data__purpose,
data__nextRotationTime,
data__rotationPeriod,
data__versionTemplate,
data__labels,
data__importOnly,
data__destroyScheduledDuration,
data__cryptoKeyBackend,
data__keyAccessJustificationsPolicy,
projectsId,
locationsId,
keyRingsId,
cryptoKeyId,
skipInitialVersionCreation
)
SELECT 
'{{ purpose }}',
'{{ nextRotationTime }}',
'{{ rotationPeriod }}',
'{{ versionTemplate }}',
'{{ labels }}',
{{ importOnly }},
'{{ destroyScheduledDuration }}',
'{{ cryptoKeyBackend }}',
'{{ keyAccessJustificationsPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ keyRingsId }}',
'{{ cryptoKeyId }}',
'{{ skipInitialVersionCreation }}'
RETURNING
name,
createTime,
cryptoKeyBackend,
destroyScheduledDuration,
importOnly,
keyAccessJustificationsPolicy,
labels,
nextRotationTime,
primary,
purpose,
rotationPeriod,
versionTemplate
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: crypto_keys
  props:
    - name: projectsId
      value: string
      description: Required parameter for the crypto_keys resource.
    - name: locationsId
      value: string
      description: Required parameter for the crypto_keys resource.
    - name: keyRingsId
      value: string
      description: Required parameter for the crypto_keys resource.
    - name: purpose
      value: string
      description: >
        Immutable. The immutable purpose of this CryptoKey.
        
      valid_values: ['CRYPTO_KEY_PURPOSE_UNSPECIFIED', 'ENCRYPT_DECRYPT', 'ASYMMETRIC_SIGN', 'ASYMMETRIC_DECRYPT', 'RAW_ENCRYPT_DECRYPT', 'MAC', 'KEY_ENCAPSULATION']
    - name: nextRotationTime
      value: string
      description: >
        At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
        
    - name: rotationPeriod
      value: string
      description: >
        next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
        
    - name: versionTemplate
      value: object
      description: >
        A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.
        
    - name: labels
      value: object
      description: >
        Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
        
    - name: importOnly
      value: boolean
      description: >
        Immutable. Whether this key may contain imported versions only.
        
    - name: destroyScheduledDuration
      value: string
      description: >
        Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 30 days.
        
    - name: cryptoKeyBackend
      value: string
      description: >
        Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/*/locations/*/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
        
    - name: keyAccessJustificationsPolicy
      value: object
      description: >
        Optional. The policy used for Key Access Justifications Policy Enforcement. If this field is present and this key is enrolled in Key Access Justifications Policy Enforcement, the policy will be evaluated in encrypt, decrypt, and sign operations, and the operation will fail if rejected by the policy. The policy is defined by specifying zero or more allowed justification codes. https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes By default, this field is absent, and all justification codes are allowed.
        
    - name: cryptoKeyId
      value: string
    - name: skipInitialVersionCreation
      value: boolean
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

Update a CryptoKey.

```sql
UPDATE google.cloudkms.crypto_keys
SET 
data__purpose = '{{ purpose }}',
data__nextRotationTime = '{{ nextRotationTime }}',
data__rotationPeriod = '{{ rotationPeriod }}',
data__versionTemplate = '{{ versionTemplate }}',
data__labels = '{{ labels }}',
data__importOnly = {{ importOnly }},
data__destroyScheduledDuration = '{{ destroyScheduledDuration }}',
data__cryptoKeyBackend = '{{ cryptoKeyBackend }}',
data__keyAccessJustificationsPolicy = '{{ keyAccessJustificationsPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND keyRingsId = '{{ keyRingsId }}' --required
AND cryptoKeysId = '{{ cryptoKeysId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
cryptoKeyBackend,
destroyScheduledDuration,
importOnly,
keyAccessJustificationsPolicy,
labels,
nextRotationTime,
primary,
purpose,
rotationPeriod,
versionTemplate;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="encrypt"
    values={[
        { label: 'encrypt', value: 'encrypt' },
        { label: 'decrypt', value: 'decrypt' }
    ]}
>
<TabItem value="encrypt">

Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

```sql
EXEC google.cloudkms.crypto_keys.encrypt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required 
@@json=
'{
"plaintext": "{{ plaintext }}", 
"additionalAuthenticatedData": "{{ additionalAuthenticatedData }}", 
"plaintextCrc32c": "{{ plaintextCrc32c }}", 
"additionalAuthenticatedDataCrc32c": "{{ additionalAuthenticatedDataCrc32c }}"
}';
```
</TabItem>
<TabItem value="decrypt">

Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

```sql
EXEC google.cloudkms.crypto_keys.decrypt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required 
@@json=
'{
"ciphertext": "{{ ciphertext }}", 
"additionalAuthenticatedData": "{{ additionalAuthenticatedData }}", 
"ciphertextCrc32c": "{{ ciphertextCrc32c }}", 
"additionalAuthenticatedDataCrc32c": "{{ additionalAuthenticatedDataCrc32c }}"
}';
```
</TabItem>
</Tabs>
