--- 
title: tenancy_units
hide_title: false
hide_table_of_contents: false
keywords:
  - tenancy_units
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

Creates, updates, deletes, gets or lists a <code>tenancy_units</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tenancy_units</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.serviceconsumermanagement.tenancy_units" /></td></tr>
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
    <td>Globally unique identifier of this tenancy unit "services/&#123;service&#125;/&#123;collection id&#125;/&#123;resource id&#125;/tenancyUnits/&#123;unit&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="consumer" /></td>
    <td><code>string</code></td>
    <td>Output only. @OutputOnly Cloud resource name of the consumer of this service. For example 'projects/123456'.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. @OutputOnly The time this tenancy unit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Output only. Google Cloud API name of the managed service owning this tenancy unit. For example 'serviceconsumermanagement.googleapis.com'.</td>
</tr>
<tr>
    <td><CopyableCode code="tenantResources" /></td>
    <td><code>array</code></td>
    <td>Resources constituting the tenancy unit. There can be at most 512 tenant resources in a tenancy unit.</td>
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
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a></td>
    <td></td>
    <td>Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.</td>
</tr>
<tr>
    <td><a href="#apply_project_config"><CopyableCode code="apply_project_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.</td>
</tr>
<tr>
    <td><a href="#attach_project"><CopyableCode code="attach_project" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.</td>
</tr>
<tr>
    <td><a href="#undelete_project"><CopyableCode code="undelete_project" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-servicesId1"><code>servicesId1</code></a>, <a href="#parameter-servicesId2"><code>servicesId2</code></a>, <a href="#parameter-tenancyUnitsId"><code>tenancyUnitsId</code></a></td>
    <td></td>
    <td>Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.

```sql
SELECT
name,
consumer,
createTime,
service,
tenantResources
FROM google.serviceconsumermanagement.tenancy_units
WHERE servicesId = '{{ servicesId }}' -- required
AND servicesId1 = '{{ servicesId1 }}' -- required
AND servicesId2 = '{{ servicesId2 }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.

```sql
INSERT INTO google.serviceconsumermanagement.tenancy_units (
data__tenancyUnitId,
servicesId,
servicesId1,
servicesId2
)
SELECT 
'{{ tenancyUnitId }}',
'{{ servicesId }}',
'{{ servicesId1 }}',
'{{ servicesId2 }}'
RETURNING
name,
consumer,
createTime,
service,
tenantResources
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tenancy_units
  props:
    - name: servicesId
      value: string
      description: Required parameter for the tenancy_units resource.
    - name: servicesId1
      value: string
      description: Required parameter for the tenancy_units resource.
    - name: servicesId2
      value: string
      description: Required parameter for the tenancy_units resource.
    - name: tenancyUnitId
      value: string
      description: >
        Optional. Optional service producer-provided identifier of the tenancy unit. Must be no longer than 40 characters and preferably URI friendly. If it isn't provided, a UID for the tenancy unit is automatically generated. The identifier must be unique across a managed service. If the tenancy unit already exists for the managed service and service consumer pair, calling `CreateTenancyUnit` returns the existing tenancy unit if the provided identifier is identical or empty, otherwise the call fails.
        
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

Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.

```sql
DELETE FROM google.serviceconsumermanagement.tenancy_units
WHERE servicesId = '{{ servicesId }}' --required
AND servicesId1 = '{{ servicesId1 }}' --required
AND servicesId2 = '{{ servicesId2 }}' --required
AND tenancyUnitsId = '{{ tenancyUnitsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_project_config"
    values={[
        { label: 'apply_project_config', value: 'apply_project_config' },
        { label: 'attach_project', value: 'attach_project' },
        { label: 'undelete_project', value: 'undelete_project' }
    ]}
>
<TabItem value="apply_project_config">

Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.

```sql
EXEC google.serviceconsumermanagement.tenancy_units.apply_project_config 
@servicesId='{{ servicesId }}' --required, 
@servicesId1='{{ servicesId1 }}' --required, 
@servicesId2='{{ servicesId2 }}' --required, 
@tenancyUnitsId='{{ tenancyUnitsId }}' --required 
@@json=
'{
"projectConfig": "{{ projectConfig }}", 
"tag": "{{ tag }}"
}';
```
</TabItem>
<TabItem value="attach_project">

Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.

```sql
EXEC google.serviceconsumermanagement.tenancy_units.attach_project 
@servicesId='{{ servicesId }}' --required, 
@servicesId1='{{ servicesId1 }}' --required, 
@servicesId2='{{ servicesId2 }}' --required, 
@tenancyUnitsId='{{ tenancyUnitsId }}' --required 
@@json=
'{
"reservedResource": "{{ reservedResource }}", 
"externalResource": "{{ externalResource }}", 
"tag": "{{ tag }}"
}';
```
</TabItem>
<TabItem value="undelete_project">

Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

```sql
EXEC google.serviceconsumermanagement.tenancy_units.undelete_project 
@servicesId='{{ servicesId }}' --required, 
@servicesId1='{{ servicesId1 }}' --required, 
@servicesId2='{{ servicesId2 }}' --required, 
@tenancyUnitsId='{{ tenancyUnitsId }}' --required 
@@json=
'{
"tag": "{{ tag }}"
}';
```
</TabItem>
</Tabs>
