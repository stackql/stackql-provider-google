--- 
title: auth_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - auth_configs
  - integrations
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

Creates, updates, deletes, gets or lists an <code>auth_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>auth_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.auth_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_auth_configs_get"
    values={[
        { label: 'projects_locations_products_auth_configs_get', value: 'projects_locations_products_auth_configs_get' },
        { label: 'projects_locations_products_auth_configs_list', value: 'projects_locations_products_auth_configs_list' },
        { label: 'projects_locations_auth_configs_get', value: 'projects_locations_auth_configs_get' },
        { label: 'projects_locations_auth_configs_list', value: 'projects_locations_auth_configs_list' }
    ]}
>
<TabItem value="projects_locations_products_auth_configs_get">

The AuthConfig resource use to hold channels and connection config data.

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
    <td>Resource name of the auth config. For more information, see Manage authentication profiles. projects/&#123;project&#125;/locations/&#123;location&#125;/authConfigs/&#123;authConfig&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateId" /></td>
    <td><code>string</code></td>
    <td>Certificate id for client certificate</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the auth config is created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorEmail" /></td>
    <td><code>string</code></td>
    <td>The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="credentialType" /></td>
    <td><code>string</code></td>
    <td>Required. Credential type of the encrypted credential.</td>
</tr>
<tr>
    <td><CopyableCode code="decryptedCredential" /></td>
    <td><code>object</code></td>
    <td>Raw auth credentials. (id: GoogleCloudIntegrationsV1alphaCredential)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the auth config.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the auth config.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptedCredential" /></td>
    <td><code>string (byte)</code></td>
    <td>Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="expiryNotificationDuration" /></td>
    <td><code>array</code></td>
    <td>Optional. User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="overrideValidTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason / details of the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the auth config.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the auth config is modified.</td>
</tr>
<tr>
    <td><CopyableCode code="validTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The time until the auth config is valid. Empty or max value is considered the auth config won't expire.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Optional. The visibility of the auth config.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_auth_configs_list">

Response to list AuthConfigs.

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
    <td><CopyableCode code="authConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of AuthConfigs retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_auth_configs_get">

The AuthConfig resource use to hold channels and connection config data.

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
    <td>Resource name of the auth config. For more information, see Manage authentication profiles. projects/&#123;project&#125;/locations/&#123;location&#125;/authConfigs/&#123;authConfig&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateId" /></td>
    <td><code>string</code></td>
    <td>Certificate id for client certificate</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the auth config is created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorEmail" /></td>
    <td><code>string</code></td>
    <td>The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="credentialType" /></td>
    <td><code>string</code></td>
    <td>Required. Credential type of the encrypted credential.</td>
</tr>
<tr>
    <td><CopyableCode code="decryptedCredential" /></td>
    <td><code>object</code></td>
    <td>Raw auth credentials. (id: GoogleCloudIntegrationsV1alphaCredential)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the auth config.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the auth config.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptedCredential" /></td>
    <td><code>string (byte)</code></td>
    <td>Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="expiryNotificationDuration" /></td>
    <td><code>array</code></td>
    <td>Optional. User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="overrideValidTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason / details of the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the auth config.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the auth config is modified.</td>
</tr>
<tr>
    <td><CopyableCode code="validTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The time until the auth config is valid. Empty or max value is considered the auth config won't expire.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Optional. The visibility of the auth config.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_auth_configs_list">

Response to list AuthConfigs.

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
    <td><CopyableCode code="authConfigs" /></td>
    <td><code>array</code></td>
    <td>The list of AuthConfigs retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
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
    <td><a href="#projects_locations_products_auth_configs_get"><CopyableCode code="projects_locations_products_auth_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-authConfigsId"><code>authConfigsId</code></a></td>
    <td></td>
    <td>Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_auth_configs_list"><CopyableCode code="projects_locations_products_auth_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_auth_configs_get"><CopyableCode code="projects_locations_auth_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authConfigsId"><code>authConfigsId</code></a></td>
    <td></td>
    <td>Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_auth_configs_list"><CopyableCode code="projects_locations_auth_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_auth_configs_create"><CopyableCode code="projects_locations_products_auth_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-clientCertificate.sslCertificate"><code>clientCertificate.sslCertificate</code></a>, <a href="#parameter-clientCertificate.encryptedPrivateKey"><code>clientCertificate.encryptedPrivateKey</code></a>, <a href="#parameter-clientCertificate.passphrase"><code>clientCertificate.passphrase</code></a></td>
    <td>Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_auth_configs_create"><CopyableCode code="projects_locations_auth_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clientCertificate.sslCertificate"><code>clientCertificate.sslCertificate</code></a>, <a href="#parameter-clientCertificate.encryptedPrivateKey"><code>clientCertificate.encryptedPrivateKey</code></a>, <a href="#parameter-clientCertificate.passphrase"><code>clientCertificate.passphrase</code></a></td>
    <td>Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_auth_configs_patch"><CopyableCode code="projects_locations_products_auth_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-authConfigsId"><code>authConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-clientCertificate.sslCertificate"><code>clientCertificate.sslCertificate</code></a>, <a href="#parameter-clientCertificate.encryptedPrivateKey"><code>clientCertificate.encryptedPrivateKey</code></a>, <a href="#parameter-clientCertificate.passphrase"><code>clientCertificate.passphrase</code></a></td>
    <td>Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_auth_configs_patch"><CopyableCode code="projects_locations_auth_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authConfigsId"><code>authConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-clientCertificate.sslCertificate"><code>clientCertificate.sslCertificate</code></a>, <a href="#parameter-clientCertificate.encryptedPrivateKey"><code>clientCertificate.encryptedPrivateKey</code></a>, <a href="#parameter-clientCertificate.passphrase"><code>clientCertificate.passphrase</code></a></td>
    <td>Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_auth_configs_delete"><CopyableCode code="projects_locations_products_auth_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-authConfigsId"><code>authConfigsId</code></a></td>
    <td></td>
    <td>Deletes an auth config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_auth_configs_delete"><CopyableCode code="projects_locations_auth_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authConfigsId"><code>authConfigsId</code></a></td>
    <td></td>
    <td>Deletes an auth config.</td>
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
<tr id="parameter-authConfigsId">
    <td><CopyableCode code="authConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientCertificate.encryptedPrivateKey">
    <td><CopyableCode code="clientCertificate.encryptedPrivateKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientCertificate.passphrase">
    <td><CopyableCode code="clientCertificate.passphrase" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientCertificate.sslCertificate">
    <td><CopyableCode code="clientCertificate.sslCertificate" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_products_auth_configs_get"
    values={[
        { label: 'projects_locations_products_auth_configs_get', value: 'projects_locations_products_auth_configs_get' },
        { label: 'projects_locations_products_auth_configs_list', value: 'projects_locations_products_auth_configs_list' },
        { label: 'projects_locations_auth_configs_get', value: 'projects_locations_auth_configs_get' },
        { label: 'projects_locations_auth_configs_list', value: 'projects_locations_auth_configs_list' }
    ]}
>
<TabItem value="projects_locations_products_auth_configs_get">

Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.

```sql
SELECT
name,
certificateId,
createTime,
creatorEmail,
credentialType,
decryptedCredential,
description,
displayName,
encryptedCredential,
expiryNotificationDuration,
lastModifierEmail,
overrideValidTime,
reason,
state,
updateTime,
validTime,
visibility
FROM google.integrations.auth_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND authConfigsId = '{{ authConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_auth_configs_list">

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

```sql
SELECT
authConfigs,
nextPageToken
FROM google.integrations.auth_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="projects_locations_auth_configs_get">

Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.

```sql
SELECT
name,
certificateId,
createTime,
creatorEmail,
credentialType,
decryptedCredential,
description,
displayName,
encryptedCredential,
expiryNotificationDuration,
lastModifierEmail,
overrideValidTime,
reason,
state,
updateTime,
validTime,
visibility
FROM google.integrations.auth_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authConfigsId = '{{ authConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_auth_configs_list">

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

```sql
SELECT
authConfigs,
nextPageToken
FROM google.integrations.auth_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_products_auth_configs_create"
    values={[
        { label: 'projects_locations_products_auth_configs_create', value: 'projects_locations_products_auth_configs_create' },
        { label: 'projects_locations_auth_configs_create', value: 'projects_locations_auth_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_auth_configs_create">

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

```sql
INSERT INTO google.integrations.auth_configs (
data__name,
data__displayName,
data__description,
data__encryptedCredential,
data__decryptedCredential,
data__certificateId,
data__credentialType,
data__creatorEmail,
data__lastModifierEmail,
data__visibility,
data__expiryNotificationDuration,
data__validTime,
data__overrideValidTime,
projectsId,
locationsId,
productsId,
clientCertificate.sslCertificate,
clientCertificate.encryptedPrivateKey,
clientCertificate.passphrase
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ encryptedCredential }}',
'{{ decryptedCredential }}',
'{{ certificateId }}',
'{{ credentialType }}',
'{{ creatorEmail }}',
'{{ lastModifierEmail }}',
'{{ visibility }}',
'{{ expiryNotificationDuration }}',
'{{ validTime }}',
'{{ overrideValidTime }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}',
'{{ clientCertificate.sslCertificate }}',
'{{ clientCertificate.encryptedPrivateKey }}',
'{{ clientCertificate.passphrase }}'
RETURNING
name,
certificateId,
createTime,
creatorEmail,
credentialType,
decryptedCredential,
description,
displayName,
encryptedCredential,
expiryNotificationDuration,
lastModifierEmail,
overrideValidTime,
reason,
state,
updateTime,
validTime,
visibility
;
```
</TabItem>
<TabItem value="projects_locations_auth_configs_create">

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

```sql
INSERT INTO google.integrations.auth_configs (
data__name,
data__displayName,
data__description,
data__encryptedCredential,
data__decryptedCredential,
data__certificateId,
data__credentialType,
data__creatorEmail,
data__lastModifierEmail,
data__visibility,
data__expiryNotificationDuration,
data__validTime,
data__overrideValidTime,
projectsId,
locationsId,
clientCertificate.sslCertificate,
clientCertificate.encryptedPrivateKey,
clientCertificate.passphrase
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ encryptedCredential }}',
'{{ decryptedCredential }}',
'{{ certificateId }}',
'{{ credentialType }}',
'{{ creatorEmail }}',
'{{ lastModifierEmail }}',
'{{ visibility }}',
'{{ expiryNotificationDuration }}',
'{{ validTime }}',
'{{ overrideValidTime }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clientCertificate.sslCertificate }}',
'{{ clientCertificate.encryptedPrivateKey }}',
'{{ clientCertificate.passphrase }}'
RETURNING
name,
certificateId,
createTime,
creatorEmail,
credentialType,
decryptedCredential,
description,
displayName,
encryptedCredential,
expiryNotificationDuration,
lastModifierEmail,
overrideValidTime,
reason,
state,
updateTime,
validTime,
visibility
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: auth_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the auth_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the auth_configs resource.
    - name: productsId
      value: string
      description: Required parameter for the auth_configs resource.
    - name: name
      value: string
      description: >
        Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}.
        
    - name: displayName
      value: string
      description: >
        Required. The name of the auth config.
        
    - name: description
      value: string
      description: >
        Optional. A description of the auth config.
        
    - name: encryptedCredential
      value: string
      description: >
        Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.
        
    - name: decryptedCredential
      value: object
      description: >
        Raw auth credentials.
        
    - name: certificateId
      value: string
      description: >
        Certificate id for client certificate
        
    - name: credentialType
      value: string
      description: >
        Required. Credential type of the encrypted credential.
        
      valid_values: ['CREDENTIAL_TYPE_UNSPECIFIED', 'USERNAME_AND_PASSWORD', 'API_KEY', 'OAUTH2_AUTHORIZATION_CODE', 'OAUTH2_IMPLICIT', 'OAUTH2_CLIENT_CREDENTIALS', 'OAUTH2_RESOURCE_OWNER_CREDENTIALS', 'JWT', 'AUTH_TOKEN', 'SERVICE_ACCOUNT', 'CLIENT_CERTIFICATE_ONLY', 'OIDC_TOKEN']
    - name: creatorEmail
      value: string
      description: >
        The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: lastModifierEmail
      value: string
      description: >
        The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: visibility
      value: string
      description: >
        Optional. The visibility of the auth config.
        
      valid_values: ['AUTH_CONFIG_VISIBILITY_UNSPECIFIED', 'PRIVATE', 'CLIENT_VISIBLE']
    - name: expiryNotificationDuration
      value: array
      description: >
        Optional. User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.
        
    - name: validTime
      value: string
      description: >
        Optional. The time until the auth config is valid. Empty or max value is considered the auth config won't expire.
        
    - name: overrideValidTime
      value: string
      description: >
        Optional. User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.
        
    - name: clientCertificate.sslCertificate
      value: string
    - name: clientCertificate.encryptedPrivateKey
      value: string
    - name: clientCertificate.passphrase
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_products_auth_configs_patch"
    values={[
        { label: 'projects_locations_products_auth_configs_patch', value: 'projects_locations_products_auth_configs_patch' },
        { label: 'projects_locations_auth_configs_patch', value: 'projects_locations_auth_configs_patch' }
    ]}
>
<TabItem value="projects_locations_products_auth_configs_patch">

Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.

```sql
UPDATE google.integrations.auth_configs
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__encryptedCredential = '{{ encryptedCredential }}',
data__decryptedCredential = '{{ decryptedCredential }}',
data__certificateId = '{{ certificateId }}',
data__credentialType = '{{ credentialType }}',
data__creatorEmail = '{{ creatorEmail }}',
data__lastModifierEmail = '{{ lastModifierEmail }}',
data__visibility = '{{ visibility }}',
data__expiryNotificationDuration = '{{ expiryNotificationDuration }}',
data__validTime = '{{ validTime }}',
data__overrideValidTime = '{{ overrideValidTime }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND authConfigsId = '{{ authConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
AND clientCertificate.sslCertificate = '{{ clientCertificate.sslCertificate}}'
AND clientCertificate.encryptedPrivateKey = '{{ clientCertificate.encryptedPrivateKey}}'
AND clientCertificate.passphrase = '{{ clientCertificate.passphrase}}'
RETURNING
name,
certificateId,
createTime,
creatorEmail,
credentialType,
decryptedCredential,
description,
displayName,
encryptedCredential,
expiryNotificationDuration,
lastModifierEmail,
overrideValidTime,
reason,
state,
updateTime,
validTime,
visibility;
```
</TabItem>
<TabItem value="projects_locations_auth_configs_patch">

Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.

```sql
UPDATE google.integrations.auth_configs
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__encryptedCredential = '{{ encryptedCredential }}',
data__decryptedCredential = '{{ decryptedCredential }}',
data__certificateId = '{{ certificateId }}',
data__credentialType = '{{ credentialType }}',
data__creatorEmail = '{{ creatorEmail }}',
data__lastModifierEmail = '{{ lastModifierEmail }}',
data__visibility = '{{ visibility }}',
data__expiryNotificationDuration = '{{ expiryNotificationDuration }}',
data__validTime = '{{ validTime }}',
data__overrideValidTime = '{{ overrideValidTime }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authConfigsId = '{{ authConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
AND clientCertificate.sslCertificate = '{{ clientCertificate.sslCertificate}}'
AND clientCertificate.encryptedPrivateKey = '{{ clientCertificate.encryptedPrivateKey}}'
AND clientCertificate.passphrase = '{{ clientCertificate.passphrase}}'
RETURNING
name,
certificateId,
createTime,
creatorEmail,
credentialType,
decryptedCredential,
description,
displayName,
encryptedCredential,
expiryNotificationDuration,
lastModifierEmail,
overrideValidTime,
reason,
state,
updateTime,
validTime,
visibility;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_products_auth_configs_delete"
    values={[
        { label: 'projects_locations_products_auth_configs_delete', value: 'projects_locations_products_auth_configs_delete' },
        { label: 'projects_locations_auth_configs_delete', value: 'projects_locations_auth_configs_delete' }
    ]}
>
<TabItem value="projects_locations_products_auth_configs_delete">

Deletes an auth config.

```sql
DELETE FROM google.integrations.auth_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND authConfigsId = '{{ authConfigsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_auth_configs_delete">

Deletes an auth config.

```sql
DELETE FROM google.integrations.auth_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authConfigsId = '{{ authConfigsId }}' --required;
```
</TabItem>
</Tabs>
