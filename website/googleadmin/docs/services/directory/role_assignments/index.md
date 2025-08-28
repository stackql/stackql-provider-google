--- 
title: role_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - role_assignments
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

Creates, updates, deletes, gets or lists a <code>role_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>role_assignments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.role_assignments" /></td></tr>
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
    <td><CopyableCode code="assignedTo" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).</td>
</tr>
<tr>
    <td><CopyableCode code="assigneeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the assignee (`USER` or `GROUP`).</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>string</code></td>
    <td>Optional. The condition associated with this role assignment. Note: Feature is available to Enterprise Standard, Enterprise Plus, Google Workspace for Education Plus and Cloud Identity Premium customers. A `RoleAssignment` with the `condition` field set will only take effect when the resource being accessed meets the condition. If `condition` is empty, the role (`role_id`) is applied to the actor (`assigned_to`) at the scope (`scope_type`) unconditionally. Currently, the following conditions are supported: - To make the `RoleAssignment` only applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` - To make the `RoleAssignment` not applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` Currently, the condition strings have to be verbatim and they only work with the following [pre-built administrator roles](https://support.google.com/a/answer/2405986): - Groups Editor - Groups Reader The condition follows [Cloud IAM condition syntax](https://cloud.google.com/iam/docs/conditions-overview). - To make the `RoleAssignment` not applicable to [Locked Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.locked']) && resource.type == 'cloudidentity.googleapis.com/Group'` This condition can also be used in conjunction with a Security-related condition.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#roleAssignment`. (default: admin#directory#roleAssignment)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.</td>
</tr>
<tr>
    <td><CopyableCode code="roleAssignmentId" /></td>
    <td><code>string (int64)</code></td>
    <td>ID of this roleAssignment.</td>
</tr>
<tr>
    <td><CopyableCode code="roleId" /></td>
    <td><code>string (int64)</code></td>
    <td>The ID of the role that is assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="scopeType" /></td>
    <td><code>string</code></td>
    <td>The scope in which this role is assigned.</td>
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
    <td><CopyableCode code="assignedTo" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).</td>
</tr>
<tr>
    <td><CopyableCode code="assigneeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the assignee (`USER` or `GROUP`).</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>string</code></td>
    <td>Optional. The condition associated with this role assignment. Note: Feature is available to Enterprise Standard, Enterprise Plus, Google Workspace for Education Plus and Cloud Identity Premium customers. A `RoleAssignment` with the `condition` field set will only take effect when the resource being accessed meets the condition. If `condition` is empty, the role (`role_id`) is applied to the actor (`assigned_to`) at the scope (`scope_type`) unconditionally. Currently, the following conditions are supported: - To make the `RoleAssignment` only applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` - To make the `RoleAssignment` not applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` Currently, the condition strings have to be verbatim and they only work with the following [pre-built administrator roles](https://support.google.com/a/answer/2405986): - Groups Editor - Groups Reader The condition follows [Cloud IAM condition syntax](https://cloud.google.com/iam/docs/conditions-overview). - To make the `RoleAssignment` not applicable to [Locked Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.locked']) && resource.type == 'cloudidentity.googleapis.com/Group'` This condition can also be used in conjunction with a Security-related condition.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#roleAssignment`. (default: admin#directory#roleAssignment)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.</td>
</tr>
<tr>
    <td><CopyableCode code="roleAssignmentId" /></td>
    <td><code>string (int64)</code></td>
    <td>ID of this roleAssignment.</td>
</tr>
<tr>
    <td><CopyableCode code="roleId" /></td>
    <td><code>string (int64)</code></td>
    <td>The ID of the role that is assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="scopeType" /></td>
    <td><code>string</code></td>
    <td>The scope in which this role is assigned.</td>
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
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-roleAssignmentId"><code>roleAssignmentId</code></a></td>
    <td></td>
    <td>Retrieves a role assignment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-userKey"><code>userKey</code></a>, <a href="#parameter-includeIndirectRoleAssignments"><code>includeIndirectRoleAssignments</code></a></td>
    <td>Retrieves a paginated list of all roleAssignments.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td></td>
    <td>Creates a role assignment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-roleAssignmentId"><code>roleAssignmentId</code></a></td>
    <td></td>
    <td>Deletes a role assignment.</td>
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
<tr id="parameter-roleAssignmentId">
    <td><CopyableCode code="roleAssignmentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeIndirectRoleAssignments">
    <td><CopyableCode code="includeIndirectRoleAssignments" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-roleId">
    <td><CopyableCode code="roleId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userKey">
    <td><CopyableCode code="userKey" /></td>
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

Retrieves a role assignment.

```sql
SELECT
assignedTo,
assigneeType,
condition,
etag,
kind,
orgUnitId,
roleAssignmentId,
roleId,
scopeType
FROM googleadmin.directory.role_assignments
WHERE customer = '{{ customer }}' -- required
AND roleAssignmentId = '{{ roleAssignmentId }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of all roleAssignments.

```sql
SELECT
assignedTo,
assigneeType,
condition,
etag,
kind,
orgUnitId,
roleAssignmentId,
roleId,
scopeType
FROM googleadmin.directory.role_assignments
WHERE customer = '{{ customer }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND roleId = '{{ roleId }}'
AND userKey = '{{ userKey }}'
AND includeIndirectRoleAssignments = '{{ includeIndirectRoleAssignments }}';
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

Creates a role assignment.

```sql
INSERT INTO googleadmin.directory.role_assignments (
data__roleAssignmentId,
data__roleId,
data__kind,
data__etag,
data__assignedTo,
data__scopeType,
data__orgUnitId,
data__condition,
customer
)
SELECT 
'{{ roleAssignmentId }}',
'{{ roleId }}',
'{{ kind }}',
'{{ etag }}',
'{{ assignedTo }}',
'{{ scopeType }}',
'{{ orgUnitId }}',
'{{ condition }}',
'{{ customer }}'
RETURNING
assignedTo,
assigneeType,
condition,
etag,
kind,
orgUnitId,
roleAssignmentId,
roleId,
scopeType
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: role_assignments
  props:
    - name: customer
      value: string
      description: Required parameter for the role_assignments resource.
    - name: roleAssignmentId
      value: string
      description: >
        ID of this roleAssignment.
        
    - name: roleId
      value: string
      description: >
        The ID of the role that is assigned.
        
    - name: kind
      value: string
      description: >
        The type of the API resource. This is always `admin#directory#roleAssignment`.
        
      default: admin#directory#roleAssignment
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
    - name: assignedTo
      value: string
      description: >
        The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).
        
    - name: scopeType
      value: string
      description: >
        The scope in which this role is assigned.
        
    - name: orgUnitId
      value: string
      description: >
        If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.
        
    - name: condition
      value: string
      description: >
        Optional. The condition associated with this role assignment. Note: Feature is available to Enterprise Standard, Enterprise Plus, Google Workspace for Education Plus and Cloud Identity Premium customers. A `RoleAssignment` with the `condition` field set will only take effect when the resource being accessed meets the condition. If `condition` is empty, the role (`role_id`) is applied to the actor (`assigned_to`) at the scope (`scope_type`) unconditionally. Currently, the following conditions are supported: - To make the `RoleAssignment` only applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` - To make the `RoleAssignment` not applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` Currently, the condition strings have to be verbatim and they only work with the following [pre-built administrator roles](https://support.google.com/a/answer/2405986): - Groups Editor - Groups Reader The condition follows [Cloud IAM condition syntax](https://cloud.google.com/iam/docs/conditions-overview). - To make the `RoleAssignment` not applicable to [Locked Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.locked']) && resource.type == 'cloudidentity.googleapis.com/Group'` This condition can also be used in conjunction with a Security-related condition.
        
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

Deletes a role assignment.

```sql
DELETE FROM googleadmin.directory.role_assignments
WHERE customer = '{{ customer }}' --required
AND roleAssignmentId = '{{ roleAssignmentId }}' --required;
```
</TabItem>
</Tabs>
