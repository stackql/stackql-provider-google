--- 
title: idp_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - idp_credentials
  - cloudidentity
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

Creates, updates, deletes, gets or lists an <code>idp_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>idp_credentials</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.idp_credentials" /></td></tr>
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

Credential for verifying signatures produced by the Identity Provider.

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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential.</td>
</tr>
<tr>
    <td><CopyableCode code="dsaKeyInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information of a DSA public key. (id: DsaPublicKeyInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="rsaKeyInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information of a RSA public key. (id: RsaPublicKeyInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the `IdpCredential` was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.

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
    <td><CopyableCode code="idpCredentials" /></td>
    <td><code>array</code></td>
    <td>The IdpCredentials from the specified InboundSamlSsoProfile.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-inboundSamlSsoProfilesId"><code>inboundSamlSsoProfilesId</code></a>, <a href="#parameter-idpCredentialsId"><code>idpCredentialsId</code></a></td>
    <td></td>
    <td>Gets an IdpCredential.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-inboundSamlSsoProfilesId"><code>inboundSamlSsoProfilesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of IdpCredentials in an InboundSamlSsoProfile.</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-inboundSamlSsoProfilesId"><code>inboundSamlSsoProfilesId</code></a></td>
    <td></td>
    <td>Adds an IdpCredential. Up to 2 credentials are allowed. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-inboundSamlSsoProfilesId"><code>inboundSamlSsoProfilesId</code></a>, <a href="#parameter-idpCredentialsId"><code>idpCredentialsId</code></a></td>
    <td></td>
    <td>Deletes an IdpCredential.</td>
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
<tr id="parameter-idpCredentialsId">
    <td><CopyableCode code="idpCredentialsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-inboundSamlSsoProfilesId">
    <td><CopyableCode code="inboundSamlSsoProfilesId" /></td>
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

Gets an IdpCredential.

```sql
SELECT
name,
dsaKeyInfo,
rsaKeyInfo,
updateTime
FROM google.cloudidentity.idp_credentials
WHERE inboundSamlSsoProfilesId = '{{ inboundSamlSsoProfilesId }}' -- required
AND idpCredentialsId = '{{ idpCredentialsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns a list of IdpCredentials in an InboundSamlSsoProfile.

```sql
SELECT
idpCredentials,
nextPageToken
FROM google.cloudidentity.idp_credentials
WHERE inboundSamlSsoProfilesId = '{{ inboundSamlSsoProfilesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add">

Adds an IdpCredential. Up to 2 credentials are allowed. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.

```sql
INSERT INTO google.cloudidentity.idp_credentials (
data__pemData,
inboundSamlSsoProfilesId
)
SELECT 
'{{ pemData }}',
'{{ inboundSamlSsoProfilesId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: idp_credentials
  props:
    - name: inboundSamlSsoProfilesId
      value: string
      description: Required parameter for the idp_credentials resource.
    - name: pemData
      value: string
      description: >
        PEM encoded x509 certificate containing the public key for verifying IdP signatures.
        
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

Deletes an IdpCredential.

```sql
DELETE FROM google.cloudidentity.idp_credentials
WHERE inboundSamlSsoProfilesId = '{{ inboundSamlSsoProfilesId }}' --required
AND idpCredentialsId = '{{ idpCredentialsId }}' --required;
```
</TabItem>
</Tabs>
