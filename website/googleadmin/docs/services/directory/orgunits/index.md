--- 
title: orgunits
hide_title: false
hide_table_of_contents: false
keywords:
  - orgunits
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

Creates, updates, deletes, gets or lists an <code>orgunits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>orgunits</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.orgunits" /></td></tr>
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
    <td>The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.</td>
</tr>
<tr>
    <td><CopyableCode code="blockInheritance" /></td>
    <td><code>boolean</code></td>
    <td>This field is deprecated and setting its value has no effect.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the organizational unit.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`. (default: admin#directory#orgUnit)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the organizational unit.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td>The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#update_user).</td>
</tr>
<tr>
    <td><CopyableCode code="parentOrgUnitId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.</td>
</tr>
<tr>
    <td><CopyableCode code="parentOrgUnitPath" /></td>
    <td><code>string</code></td>
    <td>The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.</td>
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
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`. (default: admin#directory#orgUnits)</td>
</tr>
<tr>
    <td><CopyableCode code="organizationUnits" /></td>
    <td><code>array</code></td>
    <td>A list of organizational unit objects.</td>
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
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-orgunitsId"><code>orgunitsId</code></a></td>
    <td></td>
    <td>Retrieves an organizational unit.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td><a href="#parameter-orgUnitPath"><code>orgUnitPath</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Retrieves a list of all organizational units for an account.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td></td>
    <td>Adds an organizational unit.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-orgunitsId"><code>orgunitsId</code></a></td>
    <td></td>
    <td>Updates an organizational unit. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-orgunitsId"><code>orgunitsId</code></a></td>
    <td></td>
    <td>Updates an organizational unit.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-orgunitsId"><code>orgunitsId</code></a></td>
    <td></td>
    <td>Removes an organizational unit.</td>
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
<tr id="parameter-customerId">
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orgunitsId">
    <td><CopyableCode code="orgunitsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orgUnitPath">
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
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

Retrieves an organizational unit.

```sql
SELECT
name,
blockInheritance,
description,
etag,
kind,
orgUnitId,
orgUnitPath,
parentOrgUnitId,
parentOrgUnitPath
FROM googleadmin.directory.orgunits
WHERE customerId = '{{ customerId }}' -- required
AND orgunitsId = '{{ orgunitsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of all organizational units for an account.

```sql
SELECT
etag,
kind,
organizationUnits
FROM googleadmin.directory.orgunits
WHERE customerId = '{{ customerId }}' -- required
AND orgUnitPath = '{{ orgUnitPath }}'
AND type = '{{ type }}';
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

Adds an organizational unit.

```sql
INSERT INTO googleadmin.directory.orgunits (
data__kind,
data__name,
data__description,
data__etag,
data__blockInheritance,
data__orgUnitId,
data__orgUnitPath,
data__parentOrgUnitId,
data__parentOrgUnitPath,
customerId
)
SELECT 
'{{ kind }}',
'{{ name }}',
'{{ description }}',
'{{ etag }}',
{{ blockInheritance }},
'{{ orgUnitId }}',
'{{ orgUnitPath }}',
'{{ parentOrgUnitId }}',
'{{ parentOrgUnitPath }}',
'{{ customerId }}'
RETURNING
name,
blockInheritance,
description,
etag,
kind,
orgUnitId,
orgUnitPath,
parentOrgUnitId,
parentOrgUnitPath
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: orgunits
  props:
    - name: customerId
      value: string
      description: Required parameter for the orgunits resource.
    - name: kind
      value: string
      description: >
        The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.
        
      default: admin#directory#orgUnit
    - name: name
      value: string
      description: >
        The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.
        
    - name: description
      value: string
      description: >
        Description of the organizational unit.
        
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
    - name: blockInheritance
      value: boolean
      description: >
        This field is deprecated and setting its value has no effect.
        
    - name: orgUnitId
      value: string
      description: >
        The unique ID of the organizational unit.
        
    - name: orgUnitPath
      value: string
      description: >
        The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#update_user).
        
    - name: parentOrgUnitId
      value: string
      description: >
        The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.
        
    - name: parentOrgUnitPath
      value: string
      description: >
        The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.
        
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

Updates an organizational unit. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch)

```sql
UPDATE googleadmin.directory.orgunits
SET 
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__blockInheritance = {{ blockInheritance }},
data__orgUnitId = '{{ orgUnitId }}',
data__orgUnitPath = '{{ orgUnitPath }}',
data__parentOrgUnitId = '{{ parentOrgUnitId }}',
data__parentOrgUnitPath = '{{ parentOrgUnitPath }}'
WHERE 
customerId = '{{ customerId }}' --required
AND orgunitsId = '{{ orgunitsId }}' --required
RETURNING
name,
blockInheritance,
description,
etag,
kind,
orgUnitId,
orgUnitPath,
parentOrgUnitId,
parentOrgUnitPath;
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

Updates an organizational unit.

```sql
REPLACE googleadmin.directory.orgunits
SET 
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__blockInheritance = {{ blockInheritance }},
data__orgUnitId = '{{ orgUnitId }}',
data__orgUnitPath = '{{ orgUnitPath }}',
data__parentOrgUnitId = '{{ parentOrgUnitId }}',
data__parentOrgUnitPath = '{{ parentOrgUnitPath }}'
WHERE 
customerId = '{{ customerId }}' --required
AND orgunitsId = '{{ orgunitsId }}' --required
RETURNING
name,
blockInheritance,
description,
etag,
kind,
orgUnitId,
orgUnitPath,
parentOrgUnitId,
parentOrgUnitPath;
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

Removes an organizational unit.

```sql
DELETE FROM googleadmin.directory.orgunits
WHERE customerId = '{{ customerId }}' --required
AND orgunitsId = '{{ orgunitsId }}' --required;
```
</TabItem>
</Tabs>
