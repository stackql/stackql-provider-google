--- 
title: identity_aware_proxy_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_aware_proxy_clients
  - iap
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

Creates, updates, deletes, gets or lists an <code>identity_aware_proxy_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>identity_aware_proxy_clients</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iap.identity_aware_proxy_clients" /></td></tr>
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

Contains the data that describes an Identity Aware Proxy owned client.

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
    <td>Output only. Unique identifier of the OAuth client.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Human-friendly name given to the OAuth client.</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>Output only. Client secret of the OAuth client.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListIdentityAwareProxyClients.

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
    <td><CopyableCode code="identityAwareProxyClients" /></td>
    <td><code>array</code></td>
    <td>Clients existing in the brand.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-brandsId"><code>brandsId</code></a>, <a href="#parameter-identityAwareProxyClientsId"><code>identityAwareProxyClientsId</code></a></td>
    <td></td>
    <td>Retrieves an Identity Aware Proxy (IAP) OAuth client. Requires that the client is owned by IAP.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-brandsId"><code>brandsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the existing clients for the brand.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-brandsId"><code>brandsId</code></a></td>
    <td></td>
    <td>Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-brandsId"><code>brandsId</code></a>, <a href="#parameter-identityAwareProxyClientsId"><code>identityAwareProxyClientsId</code></a></td>
    <td></td>
    <td>Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.</td>
</tr>
<tr>
    <td><a href="#reset_secret"><CopyableCode code="reset_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-brandsId"><code>brandsId</code></a>, <a href="#parameter-identityAwareProxyClientsId"><code>identityAwareProxyClientsId</code></a></td>
    <td></td>
    <td>Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.</td>
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
<tr id="parameter-brandsId">
    <td><CopyableCode code="brandsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-identityAwareProxyClientsId">
    <td><CopyableCode code="identityAwareProxyClientsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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

Retrieves an Identity Aware Proxy (IAP) OAuth client. Requires that the client is owned by IAP.

```sql
SELECT
name,
displayName,
secret
FROM google.iap.identity_aware_proxy_clients
WHERE projectsId = '{{ projectsId }}' -- required
AND brandsId = '{{ brandsId }}' -- required
AND identityAwareProxyClientsId = '{{ identityAwareProxyClientsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the existing clients for the brand.

```sql
SELECT
identityAwareProxyClients,
nextPageToken
FROM google.iap.identity_aware_proxy_clients
WHERE projectsId = '{{ projectsId }}' -- required
AND brandsId = '{{ brandsId }}' -- required
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

Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.

```sql
INSERT INTO google.iap.identity_aware_proxy_clients (
data__displayName,
projectsId,
brandsId
)
SELECT 
'{{ displayName }}',
'{{ projectsId }}',
'{{ brandsId }}'
RETURNING
name,
displayName,
secret
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: identity_aware_proxy_clients
  props:
    - name: projectsId
      value: string
      description: Required parameter for the identity_aware_proxy_clients resource.
    - name: brandsId
      value: string
      description: Required parameter for the identity_aware_proxy_clients resource.
    - name: displayName
      value: string
      description: >
        Human-friendly name given to the OAuth client.
        
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

Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.

```sql
DELETE FROM google.iap.identity_aware_proxy_clients
WHERE projectsId = '{{ projectsId }}' --required
AND brandsId = '{{ brandsId }}' --required
AND identityAwareProxyClientsId = '{{ identityAwareProxyClientsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_secret"
    values={[
        { label: 'reset_secret', value: 'reset_secret' }
    ]}
>
<TabItem value="reset_secret">

Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.

```sql
EXEC google.iap.identity_aware_proxy_clients.reset_secret 
@projectsId='{{ projectsId }}' --required, 
@brandsId='{{ brandsId }}' --required, 
@identityAwareProxyClientsId='{{ identityAwareProxyClientsId }}' --required;
```
</TabItem>
</Tabs>
