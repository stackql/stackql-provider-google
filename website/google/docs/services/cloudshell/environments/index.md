--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - cloudshell
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudshell.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. The environment's identifier, unique among the user's environments.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. Full name of this resource, in the format `users/&#123;owner_email&#125;/environments/&#123;environment_id&#125;`. `&#123;owner_email&#125;` is the email address of the user to whom this environment belongs, and `&#123;environment_id&#125;` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.</td>
</tr>
<tr>
    <td><CopyableCode code="dockerImage" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest".</td>
</tr>
<tr>
    <td><CopyableCode code="publicKeys" /></td>
    <td><code>array</code></td>
    <td>Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods.</td>
</tr>
<tr>
    <td><CopyableCode code="sshHost" /></td>
    <td><code>string</code></td>
    <td>Output only. Host to which clients can connect to initiate SSH sessions with the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="sshPort" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Port to which clients can connect to initiate SSH sessions with the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="sshUsername" /></td>
    <td><code>string</code></td>
    <td>Output only. Username that clients should use when initiating SSH sessions with the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current execution state of this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="webHost" /></td>
    <td><code>string</code></td>
    <td>Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment.</td>
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
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Gets an environment. Returns NOT_FOUND if the environment does not exist.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.</td>
</tr>
<tr>
    <td><a href="#authorize"><CopyableCode code="authorize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets an environment. Returns NOT_FOUND if the environment does not exist.

```sql
SELECT
id,
name,
dockerImage,
publicKeys,
sshHost,
sshPort,
sshUsername,
state,
webHost
FROM google.cloudshell.environments
WHERE usersId = '{{ usersId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' },
        { label: 'authorize', value: 'authorize' }
    ]}
>
<TabItem value="start">

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

```sql
EXEC google.cloudshell.environments.start 
@usersId='{{ usersId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"accessToken": "{{ accessToken }}", 
"publicKeys": "{{ publicKeys }}"
}';
```
</TabItem>
<TabItem value="authorize">

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

```sql
EXEC google.cloudshell.environments.authorize 
@usersId='{{ usersId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"accessToken": "{{ accessToken }}", 
"idToken": "{{ idToken }}", 
"expireTime": "{{ expireTime }}"
}';
```
</TabItem>
</Tabs>
