--- 
title: management_dns_zone_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - management_dns_zone_bindings
  - vmwareengine
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

Creates, updates, deletes, gets or lists a <code>management_dns_zone_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>management_dns_zone_bindings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.management_dns_zone_bindings" /></td></tr>
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

Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.

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
    <td>Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vmwareEngineNetwork" /></td>
    <td><code>string</code></td>
    <td>Network to bind is a VMware Engine network. Specify the name in the following form for VMware engine network: `projects/&#123;project&#125;/locations/global/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;`. `&#123;project&#125;` can either be a project number or a project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcNetwork" /></td>
    <td><code>string</code></td>
    <td>Network to bind is a standard consumer VPC. Specify the name in the following form for consumer VPC network: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;`. `&#123;project&#125;` can either be a project number or a project ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for VmwareEngine.ListManagementDnsZoneBindings

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
    <td><CopyableCode code="managementDnsZoneBindings" /></td>
    <td><code>array</code></td>
    <td>A list of management DNS zone bindings.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached when making an aggregated query using wildcards.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-managementDnsZoneBindingsId"><code>managementDnsZoneBindingsId</code></a></td>
    <td></td>
    <td>Retrieves a 'ManagementDnsZoneBinding' resource by its resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-managementDnsZoneBindingId"><code>managementDnsZoneBindingId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new `ManagementDnsZoneBinding` resource in a private cloud. This RPC creates the DNS binding and the resource that represents the DNS binding of the consumer VPC network to the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-managementDnsZoneBindingsId"><code>managementDnsZoneBindingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a `ManagementDnsZoneBinding` resource. Only fields specified in `update_mask` are applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-managementDnsZoneBindingsId"><code>managementDnsZoneBindingsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a `ManagementDnsZoneBinding` resource. When a management DNS zone binding is deleted, the corresponding consumer VPC network is no longer bound to the management DNS zone.</td>
</tr>
<tr>
    <td><a href="#repair"><CopyableCode code="repair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a>, <a href="#parameter-managementDnsZoneBindingsId"><code>managementDnsZoneBindingsId</code></a></td>
    <td></td>
    <td>Retries to create a `ManagementDnsZoneBinding` resource that is in failed state.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-managementDnsZoneBindingsId">
    <td><CopyableCode code="managementDnsZoneBindingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-privateCloudsId">
    <td><CopyableCode code="privateCloudsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-managementDnsZoneBindingId">
    <td><CopyableCode code="managementDnsZoneBindingId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Retrieves a 'ManagementDnsZoneBinding' resource by its resource name.

```sql
SELECT
name,
createTime,
description,
state,
uid,
updateTime,
vmwareEngineNetwork,
vpcNetwork
FROM google.vmwareengine.management_dns_zone_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateCloudsId = '{{ privateCloudsId }}' -- required
AND managementDnsZoneBindingsId = '{{ managementDnsZoneBindingsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.

```sql
SELECT
managementDnsZoneBindings,
nextPageToken,
unreachable
FROM google.vmwareengine.management_dns_zone_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateCloudsId = '{{ privateCloudsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new `ManagementDnsZoneBinding` resource in a private cloud. This RPC creates the DNS binding and the resource that represents the DNS binding of the consumer VPC network to the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.

```sql
INSERT INTO google.vmwareengine.management_dns_zone_bindings (
data__description,
data__vpcNetwork,
data__vmwareEngineNetwork,
projectsId,
locationsId,
privateCloudsId,
managementDnsZoneBindingId,
requestId
)
SELECT 
'{{ description }}',
'{{ vpcNetwork }}',
'{{ vmwareEngineNetwork }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ privateCloudsId }}',
'{{ managementDnsZoneBindingId }}',
'{{ requestId }}'
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
- name: management_dns_zone_bindings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the management_dns_zone_bindings resource.
    - name: locationsId
      value: string
      description: Required parameter for the management_dns_zone_bindings resource.
    - name: privateCloudsId
      value: string
      description: Required parameter for the management_dns_zone_bindings resource.
    - name: description
      value: string
      description: >
        User-provided description for this resource.
        
    - name: vpcNetwork
      value: string
      description: >
        Network to bind is a standard consumer VPC. Specify the name in the following form for consumer VPC network: `projects/{project}/global/networks/{network_id}`. `{project}` can either be a project number or a project ID.
        
    - name: vmwareEngineNetwork
      value: string
      description: >
        Network to bind is a VMware Engine network. Specify the name in the following form for VMware engine network: `projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}`. `{project}` can either be a project number or a project ID.
        
    - name: managementDnsZoneBindingId
      value: string
    - name: requestId
      value: string
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

Updates a `ManagementDnsZoneBinding` resource. Only fields specified in `update_mask` are applied.

```sql
UPDATE google.vmwareengine.management_dns_zone_bindings
SET 
data__description = '{{ description }}',
data__vpcNetwork = '{{ vpcNetwork }}',
data__vmwareEngineNetwork = '{{ vmwareEngineNetwork }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
AND managementDnsZoneBindingsId = '{{ managementDnsZoneBindingsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a `ManagementDnsZoneBinding` resource. When a management DNS zone binding is deleted, the corresponding consumer VPC network is no longer bound to the management DNS zone.

```sql
DELETE FROM google.vmwareengine.management_dns_zone_bindings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
AND managementDnsZoneBindingsId = '{{ managementDnsZoneBindingsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="repair"
    values={[
        { label: 'repair', value: 'repair' }
    ]}
>
<TabItem value="repair">

Retries to create a `ManagementDnsZoneBinding` resource that is in failed state.

```sql
EXEC google.vmwareengine.management_dns_zone_bindings.repair 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required, 
@managementDnsZoneBindingsId='{{ managementDnsZoneBindingsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
