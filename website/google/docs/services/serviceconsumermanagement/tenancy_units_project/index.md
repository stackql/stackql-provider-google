--- 
title: tenancy_units_project
hide_title: false
hide_table_of_contents: false
keywords:
  - tenancy_units_project
  - serviceconsumermanagement
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

Creates, updates, deletes, gets or lists a <code>tenancy_units_project</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tenancy_units_project</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.serviceconsumermanagement.tenancy_units_project" /></td></tr>
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
    <td><a href="#add_project"><CopyableCode code="add_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.</td>
</tr>
<tr>
    <td><a href="#remove_project"><CopyableCode code="remove_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId1">
    <td><CopyableCode code="servicesId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId2">
    <td><CopyableCode code="servicesId2" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tenancyUnitsId">
    <td><CopyableCode code="tenancyUnitsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_project"
    values={[
        { label: 'add_project', value: 'add_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_project">

Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.

```sql
INSERT INTO google.serviceconsumermanagement.tenancy_units_project (
data__tag,
data__projectConfig,
servicesId,
servicesId1,
servicesId2,
tenancyUnitsId
)
SELECT 
'{{ tag }}',
'{{ projectConfig }}',
'{{ servicesId }}',
'{{ servicesId1 }}',
'{{ servicesId2 }}',
'{{ tenancyUnitsId }}'
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
- name: tenancy_units_project
  props:
    - name: servicesId
      value: string
      description: Required parameter for the tenancy_units_project resource.
    - name: servicesId1
      value: string
      description: Required parameter for the tenancy_units_project resource.
    - name: servicesId2
      value: string
      description: Required parameter for the tenancy_units_project resource.
    - name: tenancyUnitsId
      value: string
      description: Required parameter for the tenancy_units_project resource.
    - name: tag
      value: string
      description: >
        Required. Tag of the added project. Must be less than 128 characters. Required.
        
    - name: projectConfig
      value: object
      description: >
        Configuration of the new tenant project to be added to tenancy unit resources.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_project"
    values={[
        { label: 'remove_project', value: 'remove_project' },
        { label: 'delete_project', value: 'delete_project' }
    ]}
>
<TabItem value="remove_project">

Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.

```sql
DELETE FROM google.serviceconsumermanagement.tenancy_units_project
WHERE servicesId = '{{ servicesId }}' --required
AND servicesId1 = '{{ servicesId1 }}' --required
AND servicesId2 = '{{ servicesId2 }}' --required
AND tenancyUnitsId = '{{ tenancyUnitsId }}' --required;
```
</TabItem>
<TabItem value="delete_project">

Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.

```sql
DELETE FROM google.serviceconsumermanagement.tenancy_units_project
WHERE servicesId = '{{ servicesId }}' --required
AND servicesId1 = '{{ servicesId1 }}' --required
AND servicesId2 = '{{ servicesId2 }}' --required
AND tenancyUnitsId = '{{ tenancyUnitsId }}' --required;
```
</TabItem>
</Tabs>
