--- 
title: custom_constraints
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_constraints
  - orgpolicy
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

Creates, updates, deletes, gets or lists a <code>custom_constraints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>custom_constraints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.orgpolicy.custom_constraints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_custom_constraints_get"
    values={[
        { label: 'organizations_custom_constraints_get', value: 'organizations_custom_constraints_get' },
        { label: 'organizations_custom_constraints_list', value: 'organizations_custom_constraints_list' }
    ]}
>
<TabItem value="organizations_custom_constraints_get">

A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.

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
    <td>Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/&#123;organization_id&#125;/customConstraints/&#123;custom_constraint_id&#125;` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/&#123;organization_id&#125;/customConstraints/` is not counted.</td>
</tr>
<tr>
    <td><CopyableCode code="actionType" /></td>
    <td><code>string</code></td>
    <td>Allow or deny type.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>string</code></td>
    <td>A Common Expression Language (CEL) condition which is used in the evaluation of the constraint. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Detailed information about this custom policy constraint. The max length of the description is 2000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>One line display name for the UI. The max length of the display_name is 200 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="methodTypes" /></td>
    <td><code>array</code></td>
    <td>All the operations being applied for this constraint.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceTypes" /></td>
    <td><code>array</code></td>
    <td>Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` methods were called.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_custom_constraints_list">

The response returned from the ListCustomConstraints method. It will be empty if no custom or managed constraints are set on the organization resource.

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
    <td><CopyableCode code="customConstraints" /></td>
    <td><code>array</code></td>
    <td>All custom and managed constraints that exist on the organization resource. It will be empty if no custom constraints are set.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.</td>
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
    <td><a href="#organizations_custom_constraints_get"><CopyableCode code="organizations_custom_constraints_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customConstraintsId"><code>customConstraintsId</code></a></td>
    <td></td>
    <td>Gets a custom or managed constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the custom or managed constraint does not exist.</td>
</tr>
<tr>
    <td><a href="#organizations_custom_constraints_list"><CopyableCode code="organizations_custom_constraints_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves all of the custom constraints that exist on a particular organization resource.</td>
</tr>
<tr>
    <td><a href="#organizations_custom_constraints_create"><CopyableCode code="organizations_custom_constraints_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.</td>
</tr>
<tr>
    <td><a href="#organizations_custom_constraints_patch"><CopyableCode code="organizations_custom_constraints_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customConstraintsId"><code>customConstraintsId</code></a></td>
    <td></td>
    <td>Updates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Note: the supplied policy will perform a full overwrite of all fields.</td>
</tr>
<tr>
    <td><a href="#organizations_custom_constraints_delete"><CopyableCode code="organizations_custom_constraints_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customConstraintsId"><code>customConstraintsId</code></a></td>
    <td></td>
    <td>Deletes a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist.</td>
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
<tr id="parameter-customConstraintsId">
    <td><CopyableCode code="customConstraintsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
    defaultValue="organizations_custom_constraints_get"
    values={[
        { label: 'organizations_custom_constraints_get', value: 'organizations_custom_constraints_get' },
        { label: 'organizations_custom_constraints_list', value: 'organizations_custom_constraints_list' }
    ]}
>
<TabItem value="organizations_custom_constraints_get">

Gets a custom or managed constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the custom or managed constraint does not exist.

```sql
SELECT
name,
actionType,
condition,
description,
displayName,
methodTypes,
resourceTypes,
updateTime
FROM google.orgpolicy.custom_constraints
WHERE organizationsId = '{{ organizationsId }}' -- required
AND customConstraintsId = '{{ customConstraintsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_custom_constraints_list">

Retrieves all of the custom constraints that exist on a particular organization resource.

```sql
SELECT
customConstraints,
nextPageToken
FROM google.orgpolicy.custom_constraints
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_custom_constraints_create"
    values={[
        { label: 'organizations_custom_constraints_create', value: 'organizations_custom_constraints_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_custom_constraints_create">

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

```sql
INSERT INTO google.orgpolicy.custom_constraints (
data__name,
data__resourceTypes,
data__methodTypes,
data__condition,
data__actionType,
data__displayName,
data__description,
organizationsId
)
SELECT 
'{{ name }}',
'{{ resourceTypes }}',
'{{ methodTypes }}',
'{{ condition }}',
'{{ actionType }}',
'{{ displayName }}',
'{{ description }}',
'{{ organizationsId }}'
RETURNING
name,
actionType,
condition,
description,
displayName,
methodTypes,
resourceTypes,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: custom_constraints
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the custom_constraints resource.
    - name: name
      value: string
      description: >
        Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.
        
    - name: resourceTypes
      value: array
      description: >
        Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`.
        
    - name: methodTypes
      value: array
      description: >
        All the operations being applied for this constraint.
        
    - name: condition
      value: string
      description: >
        A Common Expression Language (CEL) condition which is used in the evaluation of the constraint. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.
        
    - name: actionType
      value: string
      description: >
        Allow or deny type.
        
      valid_values: ['ACTION_TYPE_UNSPECIFIED', 'ALLOW', 'DENY']
    - name: displayName
      value: string
      description: >
        One line display name for the UI. The max length of the display_name is 200 characters.
        
    - name: description
      value: string
      description: >
        Detailed information about this custom policy constraint. The max length of the description is 2000 characters.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_custom_constraints_patch"
    values={[
        { label: 'organizations_custom_constraints_patch', value: 'organizations_custom_constraints_patch' }
    ]}
>
<TabItem value="organizations_custom_constraints_patch">

Updates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Note: the supplied policy will perform a full overwrite of all fields.

```sql
UPDATE google.orgpolicy.custom_constraints
SET 
data__name = '{{ name }}',
data__resourceTypes = '{{ resourceTypes }}',
data__methodTypes = '{{ methodTypes }}',
data__condition = '{{ condition }}',
data__actionType = '{{ actionType }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND customConstraintsId = '{{ customConstraintsId }}' --required
RETURNING
name,
actionType,
condition,
description,
displayName,
methodTypes,
resourceTypes,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_custom_constraints_delete"
    values={[
        { label: 'organizations_custom_constraints_delete', value: 'organizations_custom_constraints_delete' }
    ]}
>
<TabItem value="organizations_custom_constraints_delete">

Deletes a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist.

```sql
DELETE FROM google.orgpolicy.custom_constraints
WHERE organizationsId = '{{ organizationsId }}' --required
AND customConstraintsId = '{{ customConstraintsId }}' --required;
```
</TabItem>
</Tabs>
