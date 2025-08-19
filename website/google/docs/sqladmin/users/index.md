--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.users" /></td></tr>
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

A Cloud SQL user resource.

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
    <td>The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="dualPasswordType" /></td>
    <td><code>string</code></td>
    <td>Dual password status for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated and will be removed from a future version of the API.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#user`.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>The password for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="passwordPolicy" /></td>
    <td><code>object</code></td>
    <td>User level password validation policy. (id: UserPasswordValidationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverUserDetails" /></td>
    <td><code>object</code></td>
    <td>Represents a Sql Server user on the Cloud SQL instance. (id: SqlServerUserDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

User list response.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>List of user resources in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#usersList`.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Unused.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-host"><code>host</code></a></td>
    <td>Retrieves a resource containing information about a user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Lists users in the specified Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Creates a new user in a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-host"><code>host</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Updates an existing user in a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-host"><code>host</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Deletes a user from a Cloud SQL instance.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-host">
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
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

Retrieves a resource containing information about a user.

```sql
SELECT
name,
dualPasswordType,
etag,
host,
instance,
kind,
password,
passwordPolicy,
project,
sqlserverUserDetails,
type
FROM google.sqladmin.users
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND name = '{{ name }}' -- required
AND host = '{{ host }}';
```
</TabItem>
<TabItem value="list">

Lists users in the specified Cloud SQL instance.

```sql
SELECT
items,
kind,
nextPageToken
FROM google.sqladmin.users
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new user in a Cloud SQL instance.

```sql
INSERT INTO google.sqladmin.users (
data__kind,
data__password,
data__etag,
data__name,
data__host,
data__instance,
data__project,
data__type,
data__sqlserverUserDetails,
data__passwordPolicy,
data__dualPasswordType,
project,
instance
)
SELECT 
'{{ kind }}',
'{{ password }}',
'{{ etag }}',
'{{ name }}',
'{{ host }}',
'{{ instance }}',
'{{ project }}',
'{{ type }}',
'{{ sqlserverUserDetails }}',
'{{ passwordPolicy }}',
'{{ dualPasswordType }}',
'{{ project }}',
'{{ instance }}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: users
  props:
    - name: project
      value: string
      description: Required parameter for the users resource.
    - name: instance
      value: string
      description: Required parameter for the users resource.
    - name: kind
      value: string
      description: >
        This is always `sql#user`.
        
    - name: password
      value: string
      description: >
        The password for the user.
        
    - name: etag
      value: string
      description: >
        This field is deprecated and will be removed from a future version of the API.
        
    - name: name
      value: string
      description: >
        The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.
        
    - name: host
      value: string
      description: >
        Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.
        
    - name: instance
      value: string
      description: >
        The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL.
        
    - name: project
      value: string
      description: >
        The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL.
        
    - name: type
      value: string
      description: >
        The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.
        
      valid_values: ['BUILT_IN', 'CLOUD_IAM_USER', 'CLOUD_IAM_SERVICE_ACCOUNT', 'CLOUD_IAM_GROUP', 'CLOUD_IAM_GROUP_USER', 'CLOUD_IAM_GROUP_SERVICE_ACCOUNT']
    - name: sqlserverUserDetails
      value: object
      description: >
        Represents a Sql Server user on the Cloud SQL instance.
        
    - name: passwordPolicy
      value: object
      description: >
        User level password validation policy.
        
    - name: dualPasswordType
      value: string
      description: >
        Dual password status for the user.
        
      valid_values: ['DUAL_PASSWORD_TYPE_UNSPECIFIED', 'NO_MODIFY_DUAL_PASSWORD', 'NO_DUAL_PASSWORD', 'DUAL_PASSWORD']
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing user in a Cloud SQL instance.

```sql
REPLACE google.sqladmin.users
SET 
data__kind = '{{ kind }}',
data__password = '{{ password }}',
data__etag = '{{ etag }}',
data__name = '{{ name }}',
data__host = '{{ host }}',
data__instance = '{{ instance }}',
data__project = '{{ project }}',
data__type = '{{ type }}',
data__sqlserverUserDetails = '{{ sqlserverUserDetails }}',
data__passwordPolicy = '{{ passwordPolicy }}',
data__dualPasswordType = '{{ dualPasswordType }}'
WHERE 
project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND host = '{{ host}}'
AND name = '{{ name}}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user;
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

Deletes a user from a Cloud SQL instance.

```sql
DELETE FROM google.sqladmin.users
WHERE project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND host = '{{ host }}'
AND name = '{{ name }}';
```
</TabItem>
</Tabs>
