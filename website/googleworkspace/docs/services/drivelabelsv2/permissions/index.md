--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - drivelabelsv2
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivelabelsv2.permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Resource name of this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="audience" /></td>
    <td><code>string</code></td>
    <td>Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the label.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Specifies the email address for a user or group principal. Not populated for audience principals. User and group permissions may only be inserted using an email address. On update requests, if email address is specified, no principal should be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Group resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="person" /></td>
    <td><code>string</code></td>
    <td>Person resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role the principal should have.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists a label's permissions.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a></td>
    <td>Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.</td>
</tr>
<tr>
    <td><a href="#batch_update"><CopyableCode code="batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a>, <a href="#parameter-permissionsId"><code>permissionsId</code></a></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a></td>
    <td>Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.</td>
</tr>
<tr>
    <td><a href="#batch_delete"><CopyableCode code="batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.</td>
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
<tr id="parameter-labelsId">
    <td><CopyableCode code="labelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-permissionsId">
    <td><CopyableCode code="permissionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
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
<tr id="parameter-useAdminAccess">
    <td><CopyableCode code="useAdminAccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists a label's permissions.

```sql
SELECT
name,
audience,
email,
group,
person,
role
FROM googleworkspace.drivelabelsv2.permissions
WHERE labelsId = '{{ labelsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND useAdminAccess = '{{ useAdminAccess }}'
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

Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

```sql
INSERT INTO googleworkspace.drivelabelsv2.permissions (
data__person,
data__group,
data__audience,
data__name,
data__email,
data__role,
labelsId,
revisionsId,
useAdminAccess
)
SELECT 
'{{ person }}',
'{{ group }}',
'{{ audience }}',
'{{ name }}',
'{{ email }}',
'{{ role }}',
'{{ labelsId }}',
'{{ revisionsId }}',
'{{ useAdminAccess }}'
RETURNING
name,
audience,
email,
group,
person,
role
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: permissions
  props:
    - name: labelsId
      value: string
      description: Required parameter for the permissions resource.
    - name: revisionsId
      value: string
      description: Required parameter for the permissions resource.
    - name: person
      value: string
      description: >
        Person resource name.
        
    - name: group
      value: string
      description: >
        Group resource name.
        
    - name: audience
      value: string
      description: >
        Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the label.
        
    - name: name
      value: string
      description: >
        Resource name of this permission.
        
    - name: email
      value: string
      description: >
        Specifies the email address for a user or group principal. Not populated for audience principals. User and group permissions may only be inserted using an email address. On update requests, if email address is specified, no principal should be specified.
        
    - name: role
      value: string
      description: >
        The role the principal should have.
        
      valid_values: ['LABEL_ROLE_UNSPECIFIED', 'READER', 'APPLIER', 'ORGANIZER', 'EDITOR']
    - name: useAdminAccess
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="batch_update"
    values={[
        { label: 'batch_update', value: 'batch_update' }
    ]}
>
<TabItem value="batch_update">

Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

```sql
UPDATE googleworkspace.drivelabelsv2.permissions
SET 
data__requests = '{{ requests }}',
data__useAdminAccess = {{ useAdminAccess }}
WHERE 
labelsId = '{{ labelsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
RETURNING
permissions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'batch_delete', value: 'batch_delete' }
    ]}
>
<TabItem value="delete">

Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

```sql
DELETE FROM googleworkspace.drivelabelsv2.permissions
WHERE labelsId = '{{ labelsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
AND permissionsId = '{{ permissionsId }}' --required
AND useAdminAccess = '{{ useAdminAccess }}';
```
</TabItem>
<TabItem value="batch_delete">

Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

```sql
DELETE FROM googleworkspace.drivelabelsv2.permissions
WHERE labelsId = '{{ labelsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required;
```
</TabItem>
</Tabs>
