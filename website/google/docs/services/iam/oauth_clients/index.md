--- 
title: oauth_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_clients
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

Creates, updates, deletes, gets or lists an <code>oauth_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oauth_clients</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.oauth_clients" /></td></tr>
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
    <td>Immutable. Identifier. The resource name of the OauthClient. Format:`projects/&#123;project&#125;/locations/&#123;location&#125;/oauthClients/&#123;oauth_client&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedGrantTypes" /></td>
    <td><code>array</code></td>
    <td>Required. The list of OAuth grant types is allowed for the OauthClient.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedRedirectUris" /></td>
    <td><code>array</code></td>
    <td>Required. The list of redirect uris that is allowed to redirect back when authorization process is completed.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedScopes" /></td>
    <td><code>array</code></td>
    <td>Required. The list of scopes that the OauthClient is allowed to request during OAuth flows. The following scopes are supported: * `https://www.googleapis.com/auth/cloud-platform`: See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account. * `openid`: The OAuth client can associate you with your personal information on Google Cloud. * `email`: The OAuth client can read a federated identity's email address. * `groups`: The OAuth client can read a federated identity's groups.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated OauthClient id.</td>
</tr>
<tr>
    <td><CopyableCode code="clientType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of OauthClient. Either public or private. For private clients, the client secret can be managed using the dedicated OauthClientCredential resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified description of the OauthClient. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the OauthClient is disabled. You cannot use a disabled OAuth client.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified display name of the OauthClient. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the OauthClient will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the OauthClient.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Immutable. Identifier. The resource name of the OauthClient. Format:`projects/&#123;project&#125;/locations/&#123;location&#125;/oauthClients/&#123;oauth_client&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedGrantTypes" /></td>
    <td><code>array</code></td>
    <td>Required. The list of OAuth grant types is allowed for the OauthClient.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedRedirectUris" /></td>
    <td><code>array</code></td>
    <td>Required. The list of redirect uris that is allowed to redirect back when authorization process is completed.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedScopes" /></td>
    <td><code>array</code></td>
    <td>Required. The list of scopes that the OauthClient is allowed to request during OAuth flows. The following scopes are supported: * `https://www.googleapis.com/auth/cloud-platform`: See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account. * `openid`: The OAuth client can associate you with your personal information on Google Cloud. * `email`: The OAuth client can read a federated identity's email address. * `groups`: The OAuth client can read a federated identity's groups.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated OauthClient id.</td>
</tr>
<tr>
    <td><CopyableCode code="clientType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of OauthClient. Either public or private. For private clients, the client secret can be managed using the dedicated OauthClientCredential resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified description of the OauthClient. Cannot exceed 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the OauthClient is disabled. You cannot use a disabled OAuth client.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified display name of the OauthClient. Cannot exceed 32 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time after which the OauthClient will be permanently purged and cannot be recovered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the OauthClient.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Gets an individual OauthClient.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists all non-deleted OauthClients in a project. If `show_deleted` is set to `true`, then deleted OauthClients are also listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-oauthClientId"><code>oauthClientId</code></a></td>
    <td>Creates a new OauthClient. You cannot reuse the name of a deleted OauthClient until 30 days after deletion.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing OauthClient.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Deletes an OauthClient. You cannot use a deleted OauthClient. However, deletion does not revoke access tokens that have already been issued. They continue to grant access. Deletion does revoke refresh tokens that have already been issued. They cannot be used to renew an access token. If the OauthClient is undeleted, and the refresh tokens are not expired, they are valid for token exchange again. You can undelete an OauthClient for 30 days. After 30 days, deletion is permanent. You cannot update deleted OauthClients. However, you can view and list them.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Undeletes an OauthClient, as long as it was deleted fewer than 30 days ago.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-oauthClientsId">
    <td><CopyableCode code="oauthClientsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-oauthClientId">
    <td><CopyableCode code="oauthClientId" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
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

Gets an individual OauthClient.

```sql
SELECT
name,
allowedGrantTypes,
allowedRedirectUris,
allowedScopes,
clientId,
clientType,
description,
disabled,
displayName,
expireTime,
state
FROM google.iam.oauth_clients
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND oauthClientsId = '{{ oauthClientsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all non-deleted OauthClients in a project. If `show_deleted` is set to `true`, then deleted OauthClients are also listed.

```sql
SELECT
name,
allowedGrantTypes,
allowedRedirectUris,
allowedScopes,
clientId,
clientType,
description,
disabled,
displayName,
expireTime,
state
FROM google.iam.oauth_clients
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
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

Creates a new OauthClient. You cannot reuse the name of a deleted OauthClient until 30 days after deletion.

```sql
INSERT INTO google.iam.oauth_clients (
data__name,
data__disabled,
data__displayName,
data__description,
data__clientType,
data__allowedGrantTypes,
data__allowedScopes,
data__allowedRedirectUris,
projectsId,
locationsId,
oauthClientId
)
SELECT 
'{{ name }}',
{{ disabled }},
'{{ displayName }}',
'{{ description }}',
'{{ clientType }}',
'{{ allowedGrantTypes }}',
'{{ allowedScopes }}',
'{{ allowedRedirectUris }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ oauthClientId }}'
RETURNING
name,
allowedGrantTypes,
allowedRedirectUris,
allowedScopes,
clientId,
clientType,
description,
disabled,
displayName,
expireTime,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: oauth_clients
  props:
    - name: projectsId
      value: string
      description: Required parameter for the oauth_clients resource.
    - name: locationsId
      value: string
      description: Required parameter for the oauth_clients resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The resource name of the OauthClient. Format:`projects/{project}/locations/{location}/oauthClients/{oauth_client}`.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Whether the OauthClient is disabled. You cannot use a disabled OAuth client.
        
    - name: displayName
      value: string
      description: >
        Optional. A user-specified display name of the OauthClient. Cannot exceed 32 characters.
        
    - name: description
      value: string
      description: >
        Optional. A user-specified description of the OauthClient. Cannot exceed 256 characters.
        
    - name: clientType
      value: string
      description: >
        Immutable. The type of OauthClient. Either public or private. For private clients, the client secret can be managed using the dedicated OauthClientCredential resource.
        
      valid_values: ['CLIENT_TYPE_UNSPECIFIED', 'PUBLIC_CLIENT', 'CONFIDENTIAL_CLIENT']
    - name: allowedGrantTypes
      value: array
      description: >
        Required. The list of OAuth grant types is allowed for the OauthClient.
        
    - name: allowedScopes
      value: array
      description: >
        Required. The list of scopes that the OauthClient is allowed to request during OAuth flows. The following scopes are supported: * `https://www.googleapis.com/auth/cloud-platform`: See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account. * `openid`: The OAuth client can associate you with your personal information on Google Cloud. * `email`: The OAuth client can read a federated identity's email address. * `groups`: The OAuth client can read a federated identity's groups.
        
    - name: allowedRedirectUris
      value: array
      description: >
        Required. The list of redirect uris that is allowed to redirect back when authorization process is completed.
        
    - name: oauthClientId
      value: string
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

Updates an existing OauthClient.

```sql
UPDATE google.iam.oauth_clients
SET 
data__name = '{{ name }}',
data__disabled = {{ disabled }},
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__clientType = '{{ clientType }}',
data__allowedGrantTypes = '{{ allowedGrantTypes }}',
data__allowedScopes = '{{ allowedScopes }}',
data__allowedRedirectUris = '{{ allowedRedirectUris }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND oauthClientsId = '{{ oauthClientsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowedGrantTypes,
allowedRedirectUris,
allowedScopes,
clientId,
clientType,
description,
disabled,
displayName,
expireTime,
state;
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

Deletes an OauthClient. You cannot use a deleted OauthClient. However, deletion does not revoke access tokens that have already been issued. They continue to grant access. Deletion does revoke refresh tokens that have already been issued. They cannot be used to renew an access token. If the OauthClient is undeleted, and the refresh tokens are not expired, they are valid for token exchange again. You can undelete an OauthClient for 30 days. After 30 days, deletion is permanent. You cannot update deleted OauthClients. However, you can view and list them.

```sql
DELETE FROM google.iam.oauth_clients
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND oauthClientsId = '{{ oauthClientsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="undelete">

Undeletes an OauthClient, as long as it was deleted fewer than 30 days ago.

```sql
EXEC google.iam.oauth_clients.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@oauthClientsId='{{ oauthClientsId }}' --required;
```
</TabItem>
</Tabs>
