--- 
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>roles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.roles" /></td></tr>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="isSuperAdminRole" /></td>
    <td><code>boolean</code></td>
    <td>Returns `true` if the role is a super admin role.</td>
</tr>
<tr>
    <td><CopyableCode code="isSystemRole" /></td>
    <td><code>boolean</code></td>
    <td>Returns `true` if this is a pre-defined system role.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#role`. (default: admin#directory#role)</td>
</tr>
<tr>
    <td><CopyableCode code="roleDescription" /></td>
    <td><code>string</code></td>
    <td>A short description of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="roleId" /></td>
    <td><code>string (int64)</code></td>
    <td>ID of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="roleName" /></td>
    <td><code>string</code></td>
    <td>Name of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="rolePrivileges" /></td>
    <td><code>array</code></td>
    <td>The set of privileges that are granted to this role.</td>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="isSuperAdminRole" /></td>
    <td><code>boolean</code></td>
    <td>Returns `true` if the role is a super admin role.</td>
</tr>
<tr>
    <td><CopyableCode code="isSystemRole" /></td>
    <td><code>boolean</code></td>
    <td>Returns `true` if this is a pre-defined system role.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#role`. (default: admin#directory#role)</td>
</tr>
<tr>
    <td><CopyableCode code="roleDescription" /></td>
    <td><code>string</code></td>
    <td>A short description of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="roleId" /></td>
    <td><code>string (int64)</code></td>
    <td>ID of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="roleName" /></td>
    <td><code>string</code></td>
    <td>Name of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="rolePrivileges" /></td>
    <td><code>array</code></td>
    <td>The set of privileges that are granted to this role.</td>
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
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-roleId"><code>roleId</code></a></td>
    <td></td>
    <td>Retrieves a role.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves a paginated list of all the roles in a domain.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Creates a role.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-roleId"><code>roleId</code></a></td>
    <td></td>
    <td>Patches a role.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-roleId"><code>roleId</code></a></td>
    <td></td>
    <td>Updates a role.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-roleId"><code>roleId</code></a></td>
    <td></td>
    <td>Deletes a role.</td>
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
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-roleId">
    <td><CopyableCode code="roleId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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

Retrieves a role.

```sql
SELECT
etag,
isSuperAdminRole,
isSystemRole,
kind,
roleDescription,
roleId,
roleName,
rolePrivileges
FROM googleadmin.directory.roles
WHERE customer = '{{ customer }}' -- required
AND roleId = '{{ roleId }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of all the roles in a domain.

```sql
SELECT
etag,
isSuperAdminRole,
isSystemRole,
kind,
roleDescription,
roleId,
roleName,
rolePrivileges
FROM googleadmin.directory.roles
WHERE customer = '{{ customer }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
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

Creates a role.

```sql
INSERT INTO googleadmin.directory.roles (
data__roleId,
data__roleName,
data__roleDescription,
data__rolePrivileges,
data__isSystemRole,
data__isSuperAdminRole,
data__kind,
data__etag,
customer
)
SELECT 
'{{ roleId }}',
'{{ roleName }}',
'{{ roleDescription }}',
'{{ rolePrivileges }}',
{{ isSystemRole }},
{{ isSuperAdminRole }},
'{{ kind }}',
'{{ etag }}',
'{{ customer }}'
RETURNING
etag,
isSuperAdminRole,
isSystemRole,
kind,
roleDescription,
roleId,
roleName,
rolePrivileges
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: roles
  props:
    - name: customer
      value: string
      description: Required parameter for the roles resource.
    - name: roleId
      value: string
      description: >
        ID of the role.
        
    - name: roleName
      value: string
      description: >
        Name of the role.
        
    - name: roleDescription
      value: string
      description: >
        A short description of the role.
        
    - name: rolePrivileges
      value: array
      description: >
        The set of privileges that are granted to this role.
        
    - name: isSystemRole
      value: boolean
      description: >
        Returns `true` if this is a pre-defined system role.
        
    - name: isSuperAdminRole
      value: boolean
      description: >
        Returns `true` if the role is a super admin role.
        
    - name: kind
      value: string
      description: >
        The type of the API resource. This is always `admin#directory#role`.
        
      default: admin#directory#role
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
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

Patches a role.

```sql
UPDATE googleadmin.directory.roles
SET 
data__roleId = '{{ roleId }}',
data__roleName = '{{ roleName }}',
data__roleDescription = '{{ roleDescription }}',
data__rolePrivileges = '{{ rolePrivileges }}',
data__isSystemRole = {{ isSystemRole }},
data__isSuperAdminRole = {{ isSuperAdminRole }},
data__kind = '{{ kind }}',
data__etag = '{{ etag }}'
WHERE 
customer = '{{ customer }}' --required
AND roleId = '{{ roleId }}' --required
RETURNING
etag,
isSuperAdminRole,
isSystemRole,
kind,
roleDescription,
roleId,
roleName,
rolePrivileges;
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

Updates a role.

```sql
REPLACE googleadmin.directory.roles
SET 
data__roleId = '{{ roleId }}',
data__roleName = '{{ roleName }}',
data__roleDescription = '{{ roleDescription }}',
data__rolePrivileges = '{{ rolePrivileges }}',
data__isSystemRole = {{ isSystemRole }},
data__isSuperAdminRole = {{ isSuperAdminRole }},
data__kind = '{{ kind }}',
data__etag = '{{ etag }}'
WHERE 
customer = '{{ customer }}' --required
AND roleId = '{{ roleId }}' --required
RETURNING
etag,
isSuperAdminRole,
isSystemRole,
kind,
roleDescription,
roleId,
roleName,
rolePrivileges;
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

Deletes a role.

```sql
DELETE FROM googleadmin.directory.roles
WHERE customer = '{{ customer }}' --required
AND roleId = '{{ roleId }}' --required;
```
</TabItem>
</Tabs>
