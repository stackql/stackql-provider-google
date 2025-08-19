--- 
title: crypto_key_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - crypto_key_versions
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

Creates, updates, deletes, gets or lists a <code>crypto_key_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>crypto_key_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.crypto_key_versions" /></td></tr>
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

A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.

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
    <td>Output only. The resource name for this CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM. (id: KeyOperationAttestation)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CryptoKeyVersion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destroyEventTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.</td>
</tr>
<tr>
    <td><CopyableCode code="destroyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.</td>
</tr>
<tr>
    <td><CopyableCode code="externalDestructionFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="externalProtectionLevelOptions" /></td>
    <td><code>object</code></td>
    <td>ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. (id: ExternalProtectionLevelOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="generateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this CryptoKeyVersion's key material was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="generationFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="importFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="importJob" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="importTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this CryptoKeyVersion's key material was most recently imported.</td>
</tr>
<tr>
    <td><CopyableCode code="protectionLevel" /></td>
    <td><code>string</code></td>
    <td>Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="reimportEligible" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the CryptoKeyVersion.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for KeyManagementService.ListCryptoKeyVersions.

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
    <td><CopyableCode code="cryptoKeyVersions" /></td>
    <td><code>array</code></td>
    <td>The list of CryptoKeyVersions.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of CryptoKeyVersions that matched the query. This field is not populated if ListCryptoKeyVersionsRequest.filter is applied.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Returns metadata for a given CryptoKeyVersion.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists CryptoKeyVersions.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td></td>
    <td>Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.</td>
</tr>
<tr>
    <td><a href="#destroy"><CopyableCode code="destroy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a></td>
    <td></td>
    <td>Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.</td>
</tr>
<tr>
    <td><a href="#raw_encrypt"><CopyableCode code="raw_encrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.</td>
</tr>
<tr>
    <td><a href="#raw_decrypt"><CopyableCode code="raw_decrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.</td>
</tr>
<tr>
    <td><a href="#asymmetric_sign"><CopyableCode code="asymmetric_sign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.</td>
</tr>
<tr>
    <td><a href="#asymmetric_decrypt"><CopyableCode code="asymmetric_decrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.</td>
</tr>
<tr>
    <td><a href="#mac_sign"><CopyableCode code="mac_sign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.</td>
</tr>
<tr>
    <td><a href="#mac_verify"><CopyableCode code="mac_verify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.</td>
</tr>
<tr>
    <td><a href="#decapsulate"><CopyableCode code="decapsulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-cryptoKeysId"><code>cryptoKeysId</code></a>, <a href="#parameter-cryptoKeyVersionsId"><code>cryptoKeyVersionsId</code></a></td>
    <td></td>
    <td>Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY_ENCAPSULATION.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Returns metadata for a given CryptoKeyVersion.

```sql
SELECT
name,
algorithm,
attestation,
createTime,
destroyEventTime,
destroyTime,
externalDestructionFailureReason,
externalProtectionLevelOptions,
generateTime,
generationFailureReason,
importFailureReason,
importJob,
importTime,
protectionLevel,
reimportEligible,
state
FROM google.cloudkms.crypto_key_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND cryptoKeysId = '{{ cryptoKeysId }}' -- required
AND cryptoKeyVersionsId = '{{ cryptoKeyVersionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists CryptoKeyVersions.

```sql
SELECT
cryptoKeyVersions,
nextPageToken,
totalSize
FROM google.cloudkms.crypto_key_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND cryptoKeysId = '{{ cryptoKeysId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
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

Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.

```sql
INSERT INTO google.cloudkms.crypto_key_versions (
data__state,
data__externalProtectionLevelOptions,
projectsId,
locationsId,
keyRingsId,
cryptoKeysId
)
SELECT 
'{{ state }}',
'{{ externalProtectionLevelOptions }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ keyRingsId }}',
'{{ cryptoKeysId }}'
RETURNING
name,
algorithm,
attestation,
createTime,
destroyEventTime,
destroyTime,
externalDestructionFailureReason,
externalProtectionLevelOptions,
generateTime,
generationFailureReason,
importFailureReason,
importJob,
importTime,
protectionLevel,
reimportEligible,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: crypto_key_versions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the crypto_key_versions resource.
    - name: locationsId
      value: string
      description: Required parameter for the crypto_key_versions resource.
    - name: keyRingsId
      value: string
      description: Required parameter for the crypto_key_versions resource.
    - name: cryptoKeysId
      value: string
      description: Required parameter for the crypto_key_versions resource.
    - name: state
      value: string
      description: >
        The current state of the CryptoKeyVersion.
        
      valid_values: ['CRYPTO_KEY_VERSION_STATE_UNSPECIFIED', 'PENDING_GENERATION', 'ENABLED', 'DISABLED', 'DESTROYED', 'DESTROY_SCHEDULED', 'PENDING_IMPORT', 'IMPORT_FAILED', 'GENERATION_FAILED', 'PENDING_EXTERNAL_DESTRUCTION', 'EXTERNAL_DESTRUCTION_FAILED']
    - name: externalProtectionLevelOptions
      value: object
      description: >
        ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
        
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

Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.

```sql
UPDATE google.cloudkms.crypto_key_versions
SET 
data__state = '{{ state }}',
data__externalProtectionLevelOptions = '{{ externalProtectionLevelOptions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND keyRingsId = '{{ keyRingsId }}' --required
AND cryptoKeysId = '{{ cryptoKeysId }}' --required
AND cryptoKeyVersionsId = '{{ cryptoKeyVersionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
algorithm,
attestation,
createTime,
destroyEventTime,
destroyTime,
externalDestructionFailureReason,
externalProtectionLevelOptions,
generateTime,
generationFailureReason,
importFailureReason,
importJob,
importTime,
protectionLevel,
reimportEligible,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="destroy"
    values={[
        { label: 'destroy', value: 'destroy' }
    ]}
>
<TabItem value="destroy">

Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.

```sql
DELETE FROM google.cloudkms.crypto_key_versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND keyRingsId = '{{ keyRingsId }}' --required
AND cryptoKeysId = '{{ cryptoKeysId }}' --required
AND cryptoKeyVersionsId = '{{ cryptoKeyVersionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' },
        { label: 'restore', value: 'restore' },
        { label: 'raw_encrypt', value: 'raw_encrypt' },
        { label: 'raw_decrypt', value: 'raw_decrypt' },
        { label: 'asymmetric_sign', value: 'asymmetric_sign' },
        { label: 'asymmetric_decrypt', value: 'asymmetric_decrypt' },
        { label: 'mac_sign', value: 'mac_sign' },
        { label: 'mac_verify', value: 'mac_verify' },
        { label: 'decapsulate', value: 'decapsulate' }
    ]}
>
<TabItem value="import">

Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.

```sql
EXEC google.cloudkms.crypto_key_versions.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required 
@@json=
'{
"cryptoKeyVersion": "{{ cryptoKeyVersion }}", 
"algorithm": "{{ algorithm }}", 
"importJob": "{{ importJob }}", 
"wrappedKey": "{{ wrappedKey }}", 
"rsaAesWrappedKey": "{{ rsaAesWrappedKey }}"
}';
```
</TabItem>
<TabItem value="restore">

Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.

```sql
EXEC google.cloudkms.crypto_key_versions.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required;
```
</TabItem>
<TabItem value="raw_encrypt">

Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.

```sql
EXEC google.cloudkms.crypto_key_versions.raw_encrypt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"plaintext": "{{ plaintext }}", 
"additionalAuthenticatedData": "{{ additionalAuthenticatedData }}", 
"plaintextCrc32c": "{{ plaintextCrc32c }}", 
"additionalAuthenticatedDataCrc32c": "{{ additionalAuthenticatedDataCrc32c }}", 
"initializationVector": "{{ initializationVector }}", 
"initializationVectorCrc32c": "{{ initializationVectorCrc32c }}"
}';
```
</TabItem>
<TabItem value="raw_decrypt">

Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.

```sql
EXEC google.cloudkms.crypto_key_versions.raw_decrypt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"ciphertext": "{{ ciphertext }}", 
"additionalAuthenticatedData": "{{ additionalAuthenticatedData }}", 
"initializationVector": "{{ initializationVector }}", 
"tagLength": {{ tagLength }}, 
"ciphertextCrc32c": "{{ ciphertextCrc32c }}", 
"additionalAuthenticatedDataCrc32c": "{{ additionalAuthenticatedDataCrc32c }}", 
"initializationVectorCrc32c": "{{ initializationVectorCrc32c }}"
}';
```
</TabItem>
<TabItem value="asymmetric_sign">

Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.

```sql
EXEC google.cloudkms.crypto_key_versions.asymmetric_sign 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"digest": "{{ digest }}", 
"digestCrc32c": "{{ digestCrc32c }}", 
"data": "{{ data }}", 
"dataCrc32c": "{{ dataCrc32c }}"
}';
```
</TabItem>
<TabItem value="asymmetric_decrypt">

Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.

```sql
EXEC google.cloudkms.crypto_key_versions.asymmetric_decrypt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"ciphertext": "{{ ciphertext }}", 
"ciphertextCrc32c": "{{ ciphertextCrc32c }}"
}';
```
</TabItem>
<TabItem value="mac_sign">

Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.

```sql
EXEC google.cloudkms.crypto_key_versions.mac_sign 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"data": "{{ data }}", 
"dataCrc32c": "{{ dataCrc32c }}"
}';
```
</TabItem>
<TabItem value="mac_verify">

Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.

```sql
EXEC google.cloudkms.crypto_key_versions.mac_verify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"data": "{{ data }}", 
"dataCrc32c": "{{ dataCrc32c }}", 
"mac": "{{ mac }}", 
"macCrc32c": "{{ macCrc32c }}"
}';
```
</TabItem>
<TabItem value="decapsulate">

Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY_ENCAPSULATION.

```sql
EXEC google.cloudkms.crypto_key_versions.decapsulate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@keyRingsId='{{ keyRingsId }}' --required, 
@cryptoKeysId='{{ cryptoKeysId }}' --required, 
@cryptoKeyVersionsId='{{ cryptoKeyVersionsId }}' --required 
@@json=
'{
"ciphertext": "{{ ciphertext }}", 
"ciphertextCrc32c": "{{ ciphertextCrc32c }}"
}';
```
</TabItem>
</Tabs>
