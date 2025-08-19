--- 
title: service_account_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account_keys
  - iam
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

Creates, updates, deletes, gets or lists a <code>service_account_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_account_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.service_account_keys" /></td></tr>
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

Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.

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
    <td>The resource name of the service account key in the following format `projects/&#123;PROJECT_ID&#125;/serviceAccounts/&#123;ACCOUNT&#125;/keys/&#123;key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="disableReason" /></td>
    <td><code>string</code></td>
    <td>Output only. optional. If the key is disabled, it may have a DisableReason describing why it was disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>The key status.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedStatus" /></td>
    <td><code>array</code></td>
    <td>Output only. Extended Status provides permanent information about a service account key. For example, if this key was detected as exposed or compromised, that information will remain for the lifetime of the key in the extended_status.</td>
</tr>
<tr>
    <td><CopyableCode code="keyAlgorithm" /></td>
    <td><code>string</code></td>
    <td>Specifies the algorithm (and possibly key size) for the key.</td>
</tr>
<tr>
    <td><CopyableCode code="keyOrigin" /></td>
    <td><code>string</code></td>
    <td>The key origin.</td>
</tr>
<tr>
    <td><CopyableCode code="keyType" /></td>
    <td><code>string</code></td>
    <td>The key type.</td>
</tr>
<tr>
    <td><CopyableCode code="privateKeyData" /></td>
    <td><code>string (byte)</code></td>
    <td>The private key data. Only provided in `CreateServiceAccountKey` responses. Make sure to keep the private key data secure because it allows for the assertion of the service account identity. When base64 decoded, the private key data can be used to authenticate with Google API client libraries and with gcloud auth activate-service-account.</td>
</tr>
<tr>
    <td><CopyableCode code="privateKeyType" /></td>
    <td><code>string</code></td>
    <td>The output format for the private key. Only provided in `CreateServiceAccountKey` responses, not in `GetServiceAccountKey` or `ListServiceAccountKey` responses. Google never exposes system-managed private keys, and never retains user-managed private keys.</td>
</tr>
<tr>
    <td><CopyableCode code="publicKeyData" /></td>
    <td><code>string (byte)</code></td>
    <td>The public key data. Only provided in `GetServiceAccountKey` responses.</td>
</tr>
<tr>
    <td><CopyableCode code="validAfterTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The key can be used after this timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="validBeforeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The key can be used before this timestamp. For system-managed key pairs, this timestamp is the end time for the private key signing operation. The public key could still be used for verification for a few hours after this time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The service account keys list response.

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
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>The public keys for the service account.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td><a href="#parameter-publicKeyType"><code>publicKeyType</code></a></td>
    <td>Gets a ServiceAccountKey.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td><a href="#parameter-keyTypes"><code>keyTypes</code></a></td>
    <td>Lists every ServiceAccountKey for a service account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Creates a ServiceAccountKey.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.</td>
</tr>
<tr>
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a></td>
    <td></td>
    <td>Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-serviceAccountsId"><code>serviceAccountsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Enable a ServiceAccountKey.</td>
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
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-keyTypes">
    <td><CopyableCode code="keyTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-publicKeyType">
    <td><CopyableCode code="publicKeyType" /></td>
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

Gets a ServiceAccountKey.

```sql
SELECT
name,
disableReason,
disabled,
extendedStatus,
keyAlgorithm,
keyOrigin,
keyType,
privateKeyData,
privateKeyType,
publicKeyData,
validAfterTime,
validBeforeTime
FROM google.iam.service_account_keys
WHERE projectsId = '{{ projectsId }}' -- required
AND serviceAccountsId = '{{ serviceAccountsId }}' -- required
AND keysId = '{{ keysId }}' -- required
AND publicKeyType = '{{ publicKeyType }}';
```
</TabItem>
<TabItem value="list">

Lists every ServiceAccountKey for a service account.

```sql
SELECT
keys
FROM google.iam.service_account_keys
WHERE projectsId = '{{ projectsId }}' -- required
AND serviceAccountsId = '{{ serviceAccountsId }}' -- required
AND keyTypes = '{{ keyTypes }}';
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

Creates a ServiceAccountKey.

```sql
INSERT INTO google.iam.service_account_keys (
data__privateKeyType,
data__keyAlgorithm,
projectsId,
serviceAccountsId
)
SELECT 
'{{ privateKeyType }}',
'{{ keyAlgorithm }}',
'{{ projectsId }}',
'{{ serviceAccountsId }}'
RETURNING
name,
disableReason,
disabled,
extendedStatus,
keyAlgorithm,
keyOrigin,
keyType,
privateKeyData,
privateKeyType,
publicKeyData,
validAfterTime,
validBeforeTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: service_account_keys
  props:
    - name: projectsId
      value: string
      description: Required parameter for the service_account_keys resource.
    - name: serviceAccountsId
      value: string
      description: Required parameter for the service_account_keys resource.
    - name: privateKeyType
      value: string
      description: >
        The output format of the private key. The default value is `TYPE_GOOGLE_CREDENTIALS_FILE`, which is the Google Credentials File format.
        
      valid_values: ['TYPE_UNSPECIFIED', 'TYPE_PKCS12_FILE', 'TYPE_GOOGLE_CREDENTIALS_FILE']
    - name: keyAlgorithm
      value: string
      description: >
        Which type of key and algorithm to use for the key. The default is currently a 2K RSA key. However this may change in the future.
        
      valid_values: ['KEY_ALG_UNSPECIFIED', 'KEY_ALG_RSA_1024', 'KEY_ALG_RSA_2048']
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

Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.

```sql
DELETE FROM google.iam.service_account_keys
WHERE projectsId = '{{ projectsId }}' --required
AND serviceAccountsId = '{{ serviceAccountsId }}' --required
AND keysId = '{{ keysId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' },
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="upload">

Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.

```sql
EXEC google.iam.service_account_keys.upload 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required 
@@json=
'{
"publicKeyData": "{{ publicKeyData }}"
}';
```
</TabItem>
<TabItem value="disable">

Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.

```sql
EXEC google.iam.service_account_keys.disable 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required, 
@keysId='{{ keysId }}' --required 
@@json=
'{
"serviceAccountKeyDisableReason": "{{ serviceAccountKeyDisableReason }}", 
"extendedStatusMessage": "{{ extendedStatusMessage }}"
}';
```
</TabItem>
<TabItem value="enable">

Enable a ServiceAccountKey.

```sql
EXEC google.iam.service_account_keys.enable 
@projectsId='{{ projectsId }}' --required, 
@serviceAccountsId='{{ serviceAccountsId }}' --required, 
@keysId='{{ keysId }}' --required;
```
</TabItem>
</Tabs>
