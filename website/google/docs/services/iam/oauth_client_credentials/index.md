--- 
title: oauth_client_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_client_credentials
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

Creates, updates, deletes, gets or lists an <code>oauth_client_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oauth_client_credentials</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.oauth_client_credentials" /></td></tr>
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
    <td>Immutable. Identifier. The resource name of the OauthClientCredential. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/oauthClients/&#123;oauth_client&#125;/credentials/&#123;credential&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="clientSecret" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated OAuth client secret. The client secret must be stored securely. If the client secret is leaked, you must delete and re-create the client credential. To learn more, see [OAuth client and credential security risks and mitigations](https://cloud.google.com/iam/docs/workforce-oauth-app#security)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-specified display name of the OauthClientCredential. Cannot exceed 32 characters.</td>
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
    <td><CopyableCode code="oauthClientCredentials" /></td>
    <td><code>array</code></td>
    <td>A list of OauthClientCredentials.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a>, <a href="#parameter-credentialsId"><code>credentialsId</code></a></td>
    <td></td>
    <td>Gets an individual OauthClientCredential.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td></td>
    <td>Lists all OauthClientCredentials in an OauthClient.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a></td>
    <td><a href="#parameter-oauthClientCredentialId"><code>oauthClientCredentialId</code></a></td>
    <td>Creates a new OauthClientCredential.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a>, <a href="#parameter-credentialsId"><code>credentialsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing OauthClientCredential.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-oauthClientsId"><code>oauthClientsId</code></a>, <a href="#parameter-credentialsId"><code>credentialsId</code></a></td>
    <td></td>
    <td>Deletes an OauthClientCredential. Before deleting an OauthClientCredential, it should first be disabled.</td>
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
<tr id="parameter-credentialsId">
    <td><CopyableCode code="credentialsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-oauthClientCredentialId">
    <td><CopyableCode code="oauthClientCredentialId" /></td>
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

Gets an individual OauthClientCredential.

```sql
SELECT
name,
clientSecret,
disabled,
displayName
FROM google.iam.oauth_client_credentials
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND oauthClientsId = '{{ oauthClientsId }}' -- required
AND credentialsId = '{{ credentialsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all OauthClientCredentials in an OauthClient.

```sql
SELECT
oauthClientCredentials
FROM google.iam.oauth_client_credentials
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND oauthClientsId = '{{ oauthClientsId }}' -- required;
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

Creates a new OauthClientCredential.

```sql
INSERT INTO google.iam.oauth_client_credentials (
data__name,
data__disabled,
data__displayName,
projectsId,
locationsId,
oauthClientsId,
oauthClientCredentialId
)
SELECT 
'{{ name }}',
{{ disabled }},
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ oauthClientsId }}',
'{{ oauthClientCredentialId }}'
RETURNING
name,
clientSecret,
disabled,
displayName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: oauth_client_credentials
  props:
    - name: projectsId
      value: string
      description: Required parameter for the oauth_client_credentials resource.
    - name: locationsId
      value: string
      description: Required parameter for the oauth_client_credentials resource.
    - name: oauthClientsId
      value: string
      description: Required parameter for the oauth_client_credentials resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The resource name of the OauthClientCredential. Format: `projects/{project}/locations/{location}/oauthClients/{oauth_client}/credentials/{credential}`
        
    - name: disabled
      value: boolean
      description: >
        Optional. Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential.
        
    - name: displayName
      value: string
      description: >
        Optional. A user-specified display name of the OauthClientCredential. Cannot exceed 32 characters.
        
    - name: oauthClientCredentialId
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

Updates an existing OauthClientCredential.

```sql
UPDATE google.iam.oauth_client_credentials
SET 
data__name = '{{ name }}',
data__disabled = {{ disabled }},
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND oauthClientsId = '{{ oauthClientsId }}' --required
AND credentialsId = '{{ credentialsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
clientSecret,
disabled,
displayName;
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

Deletes an OauthClientCredential. Before deleting an OauthClientCredential, it should first be disabled.

```sql
DELETE FROM google.iam.oauth_client_credentials
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND oauthClientsId = '{{ oauthClientsId }}' --required
AND credentialsId = '{{ credentialsId }}' --required;
```
</TabItem>
</Tabs>
