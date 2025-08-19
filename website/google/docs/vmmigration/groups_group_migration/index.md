--- 
title: groups_group_migration
hide_title: false
hide_table_of_contents: false
keywords:
  - groups_group_migration
  - vmmigration
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

Creates, updates, deletes, gets or lists a <code>groups_group_migration</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groups_group_migration</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.groups_group_migration" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_group_migration"><CopyableCode code="add_group_migration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Adds a MigratingVm to a Group.</td>
</tr>
<tr>
    <td><a href="#remove_group_migration"><CopyableCode code="remove_group_migration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Removes a MigratingVm from a Group.</td>
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
<tr id="parameter-groupsId">
    <td><CopyableCode code="groupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_group_migration"
    values={[
        { label: 'add_group_migration', value: 'add_group_migration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_group_migration">

Adds a MigratingVm to a Group.

```sql
INSERT INTO google.vmmigration.groups_group_migration (
data__migratingVm,
projectsId,
locationsId,
groupsId
)
SELECT 
'{{ migratingVm }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ groupsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: groups_group_migration
  props:
    - name: projectsId
      value: string
      description: Required parameter for the groups_group_migration resource.
    - name: locationsId
      value: string
      description: Required parameter for the groups_group_migration resource.
    - name: groupsId
      value: string
      description: Required parameter for the groups_group_migration resource.
    - name: migratingVm
      value: string
      description: >
        The full path name of the MigratingVm to add.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_group_migration"
    values={[
        { label: 'remove_group_migration', value: 'remove_group_migration' }
    ]}
>
<TabItem value="remove_group_migration">

Removes a MigratingVm from a Group.

```sql
DELETE FROM google.vmmigration.groups_group_migration
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND groupsId = '{{ groupsId }}' --required;
```
</TabItem>
</Tabs>
