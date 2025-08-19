--- 
title: user_creds
hide_title: false
hide_table_of_contents: false
keywords:
  - user_creds
  - firestore
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

Creates, updates, deletes, gets or lists a <code>user_creds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_creds</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.user_creds" /></td></tr>
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

A Cloud Firestore User Creds.

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
    <td>Identifier. The resource name of the UserCreds. Format: `projects/&#123;project&#125;/databases/&#123;database&#125;/userCreds/&#123;user_creds&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the user creds were created.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceIdentity" /></td>
    <td><code>object</code></td>
    <td>Resource Identity descriptor. (id: GoogleFirestoreAdminV1ResourceIdentity)</td>
</tr>
<tr>
    <td><CopyableCode code="securePassword" /></td>
    <td><code>string</code></td>
    <td>Output only. The plaintext server-generated password for the user creds. Only populated in responses for CreateUserCreds and ResetUserPassword.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Whether the user creds are enabled or disabled. Defaults to ENABLED on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the user creds were last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for FirestoreAdmin.ListUserCreds.

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
    <td><CopyableCode code="userCreds" /></td>
    <td><code>array</code></td>
    <td>The user creds for the database.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-userCredsId"><code>userCredsId</code></a></td>
    <td></td>
    <td>Gets a user creds resource. Note that the returned resource does not contain the secret value itself.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>List all user creds in the database. Note that the returned resource does not contain the secret value itself.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-userCredsId"><code>userCredsId</code></a></td>
    <td>Create a user creds.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-userCredsId"><code>userCredsId</code></a></td>
    <td></td>
    <td>Deletes a user creds.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-userCredsId"><code>userCredsId</code></a></td>
    <td></td>
    <td>Enables a user creds. No-op if the user creds are already enabled.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-userCredsId"><code>userCredsId</code></a></td>
    <td></td>
    <td>Disables a user creds. No-op if the user creds are already disabled.</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-userCredsId"><code>userCredsId</code></a></td>
    <td></td>
    <td>Resets the password of a user creds.</td>
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
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userCredsId">
    <td><CopyableCode code="userCredsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userCredsId">
    <td><CopyableCode code="userCredsId" /></td>
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

Gets a user creds resource. Note that the returned resource does not contain the secret value itself.

```sql
SELECT
name,
createTime,
resourceIdentity,
securePassword,
state,
updateTime
FROM google.firestore.user_creds
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND userCredsId = '{{ userCredsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List all user creds in the database. Note that the returned resource does not contain the secret value itself.

```sql
SELECT
userCreds
FROM google.firestore.user_creds
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required;
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

Create a user creds.

```sql
INSERT INTO google.firestore.user_creds (
data__name,
data__resourceIdentity,
projectsId,
databasesId,
userCredsId
)
SELECT 
'{{ name }}',
'{{ resourceIdentity }}',
'{{ projectsId }}',
'{{ databasesId }}',
'{{ userCredsId }}'
RETURNING
name,
createTime,
resourceIdentity,
securePassword,
state,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: user_creds
  props:
    - name: projectsId
      value: string
      description: Required parameter for the user_creds resource.
    - name: databasesId
      value: string
      description: Required parameter for the user_creds resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the UserCreds. Format: `projects/{project}/databases/{database}/userCreds/{user_creds}`
        
    - name: resourceIdentity
      value: object
      description: >
        Resource Identity descriptor.
        
    - name: userCredsId
      value: string
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

Deletes a user creds.

```sql
DELETE FROM google.firestore.user_creds
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND userCredsId = '{{ userCredsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable"
    values={[
        { label: 'enable', value: 'enable' },
        { label: 'disable', value: 'disable' },
        { label: 'reset_password', value: 'reset_password' }
    ]}
>
<TabItem value="enable">

Enables a user creds. No-op if the user creds are already enabled.

```sql
EXEC google.firestore.user_creds.enable 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@userCredsId='{{ userCredsId }}' --required;
```
</TabItem>
<TabItem value="disable">

Disables a user creds. No-op if the user creds are already disabled.

```sql
EXEC google.firestore.user_creds.disable 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@userCredsId='{{ userCredsId }}' --required;
```
</TabItem>
<TabItem value="reset_password">

Resets the password of a user creds.

```sql
EXEC google.firestore.user_creds.reset_password 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@userCredsId='{{ userCredsId }}' --required;
```
</TabItem>
</Tabs>
