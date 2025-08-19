--- 
title: inbound_oidc_sso_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_oidc_sso_profiles
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

Creates, updates, deletes, gets or lists an <code>inbound_oidc_sso_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>inbound_oidc_sso_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.inbound_oidc_sso_profiles" /></td></tr>
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

An [OIDC](https://openid.net/developers/how-connect-works/) federation between a Google enterprise customer and an OIDC identity provider.

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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the OIDC SSO profile.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. The customer. For example: `customers/C0123abc`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the OIDC SSO profile.</td>
</tr>
<tr>
    <td><CopyableCode code="idpConfig" /></td>
    <td><code>object</code></td>
    <td>OIDC identity provider configuration. (id: OidcIdpConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rpConfig" /></td>
    <td><code>object</code></td>
    <td>OIDC relying party (RP) configuration for this OIDC SSO profile. These are the RP details provided by Google that should be configured on the corresponding identity provider. (id: OidcRpConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response of the InboundOidcSsoProfilesService.ListInboundOidcSsoProfiles method.

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
    <td><CopyableCode code="inboundOidcSsoProfiles" /></td>
    <td><code>array</code></td>
    <td>List of InboundOidcSsoProfiles.</td>
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
    <td><a href="#parameter-inboundOidcSsoProfilesId"><code>inboundOidcSsoProfilesId</code></a></td>
    <td></td>
    <td>Gets an InboundOidcSsoProfile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists InboundOidcSsoProfile objects for a Google enterprise customer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates an InboundOidcSsoProfile for a customer. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-inboundOidcSsoProfilesId"><code>inboundOidcSsoProfilesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an InboundOidcSsoProfile. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-inboundOidcSsoProfilesId"><code>inboundOidcSsoProfilesId</code></a></td>
    <td></td>
    <td>Deletes an InboundOidcSsoProfile.</td>
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
<tr id="parameter-inboundOidcSsoProfilesId">
    <td><CopyableCode code="inboundOidcSsoProfilesId" /></td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets an InboundOidcSsoProfile.

```sql
SELECT
name,
customer,
displayName,
idpConfig,
rpConfig
FROM google.cloudidentity.inbound_oidc_sso_profiles
WHERE inboundOidcSsoProfilesId = '{{ inboundOidcSsoProfilesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists InboundOidcSsoProfile objects for a Google enterprise customer.

```sql
SELECT
inboundOidcSsoProfiles,
nextPageToken
FROM google.cloudidentity.inbound_oidc_sso_profiles
WHERE filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates an InboundOidcSsoProfile for a customer. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.

```sql
INSERT INTO google.cloudidentity.inbound_oidc_sso_profiles (
data__customer,
data__displayName,
data__idpConfig,
data__rpConfig
)
SELECT 
'{{ customer }}',
'{{ displayName }}',
'{{ idpConfig }}',
'{{ rpConfig }}'
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
- name: inbound_oidc_sso_profiles
  props:
    - name: customer
      value: string
      description: >
        Immutable. The customer. For example: `customers/C0123abc`.
        
    - name: displayName
      value: string
      description: >
        Human-readable name of the OIDC SSO profile.
        
    - name: idpConfig
      value: object
      description: >
        OIDC identity provider configuration.
        
    - name: rpConfig
      value: object
      description: >
        OIDC relying party (RP) configuration for this OIDC SSO profile. These are the RP details provided by Google that should be configured on the corresponding identity provider.
        
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

Updates an InboundOidcSsoProfile. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.

```sql
UPDATE google.cloudidentity.inbound_oidc_sso_profiles
SET 
data__customer = '{{ customer }}',
data__displayName = '{{ displayName }}',
data__idpConfig = '{{ idpConfig }}',
data__rpConfig = '{{ rpConfig }}'
WHERE 
inboundOidcSsoProfilesId = '{{ inboundOidcSsoProfilesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes an InboundOidcSsoProfile.

```sql
DELETE FROM google.cloudidentity.inbound_oidc_sso_profiles
WHERE inboundOidcSsoProfilesId = '{{ inboundOidcSsoProfilesId }}' --required;
```
</TabItem>
</Tabs>
