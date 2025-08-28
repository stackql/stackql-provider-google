--- 
title: network_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - network_policies
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

Creates, updates, deletes, gets or lists a <code>network_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.network_policies" /></td></tr>
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
    <td>Output only. Identifier. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this network policy.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeServicesCidr" /></td>
    <td><code>string</code></td>
    <td>Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIp" /></td>
    <td><code>object</code></td>
    <td>Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled. (id: NetworkService)</td>
</tr>
<tr>
    <td><CopyableCode code="internetAccess" /></td>
    <td><code>object</code></td>
    <td>Network service that allows VMware workloads to access the internet. (id: NetworkService)</td>
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
    <td>Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/&#123;project&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;` where `&#123;project&#125;` can either be a project number or a project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="vmwareEngineNetworkCanonical" /></td>
    <td><code>string</code></td>
    <td>Output only. The canonical name of the VMware Engine network in the form: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;`</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifier. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this network policy.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeServicesCidr" /></td>
    <td><code>string</code></td>
    <td>Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIp" /></td>
    <td><code>object</code></td>
    <td>Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled. (id: NetworkService)</td>
</tr>
<tr>
    <td><CopyableCode code="internetAccess" /></td>
    <td><code>object</code></td>
    <td>Network service that allows VMware workloads to access the internet. (id: NetworkService)</td>
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
    <td>Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/&#123;project&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;` where `&#123;project&#125;` can either be a project number or a project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="vmwareEngineNetworkCanonical" /></td>
    <td><code>string</code></td>
    <td>Output only. The canonical name of the VMware Engine network in the form: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;`</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a></td>
    <td></td>
    <td>Retrieves a `NetworkPolicy` resource by its resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists `NetworkPolicy` resources in a specified project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-networkPolicyId"><code>networkPolicyId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new network policy in a given VMware Engine network of a project and location (region). A new network policy cannot be created if another network policy already exists in the same scope.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Modifies a `NetworkPolicy` resource. Only the following fields can be updated: `internet_access`, `external_ip`, `edge_services_cidr`. Only fields specified in `updateMask` are applied. When updating a network policy, the external IP network service can only be disabled if there are no external IP addresses present in the scope of the policy. Also, a `NetworkService` cannot be updated when `NetworkService.state` is set to `RECONCILING`. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a `NetworkPolicy` resource. A network policy cannot be deleted when `NetworkService.state` is set to `RECONCILING` for either its external IP or internet access service.</td>
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
<tr id="parameter-networkPoliciesId">
    <td><CopyableCode code="networkPoliciesId" /></td>
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
<tr id="parameter-networkPolicyId">
    <td><CopyableCode code="networkPolicyId" /></td>
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

Retrieves a `NetworkPolicy` resource by its resource name.

```sql
SELECT
name,
createTime,
description,
edgeServicesCidr,
externalIp,
internetAccess,
uid,
updateTime,
vmwareEngineNetwork,
vmwareEngineNetworkCanonical
FROM google.vmwareengine.network_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkPoliciesId = '{{ networkPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists `NetworkPolicy` resources in a specified project and location.

```sql
SELECT
name,
createTime,
description,
edgeServicesCidr,
externalIp,
internetAccess,
uid,
updateTime,
vmwareEngineNetwork,
vmwareEngineNetworkCanonical
FROM google.vmwareengine.network_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new network policy in a given VMware Engine network of a project and location (region). A new network policy cannot be created if another network policy already exists in the same scope.

```sql
INSERT INTO google.vmwareengine.network_policies (
data__internetAccess,
data__externalIp,
data__edgeServicesCidr,
data__vmwareEngineNetwork,
data__description,
projectsId,
locationsId,
networkPolicyId,
requestId
)
SELECT 
'{{ internetAccess }}',
'{{ externalIp }}',
'{{ edgeServicesCidr }}',
'{{ vmwareEngineNetwork }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ networkPolicyId }}',
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
- name: network_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the network_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the network_policies resource.
    - name: internetAccess
      value: object
      description: >
        Network service that allows VMware workloads to access the internet.
        
    - name: externalIp
      value: object
      description: >
        Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.
        
    - name: edgeServicesCidr
      value: string
      description: >
        Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.
        
    - name: vmwareEngineNetwork
      value: string
      description: >
        Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.
        
    - name: description
      value: string
      description: >
        Optional. User-provided description for this network policy.
        
    - name: networkPolicyId
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

Modifies a `NetworkPolicy` resource. Only the following fields can be updated: `internet_access`, `external_ip`, `edge_services_cidr`. Only fields specified in `updateMask` are applied. When updating a network policy, the external IP network service can only be disabled if there are no external IP addresses present in the scope of the policy. Also, a `NetworkService` cannot be updated when `NetworkService.state` is set to `RECONCILING`. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.

```sql
UPDATE google.vmwareengine.network_policies
SET 
data__internetAccess = '{{ internetAccess }}',
data__externalIp = '{{ externalIp }}',
data__edgeServicesCidr = '{{ edgeServicesCidr }}',
data__vmwareEngineNetwork = '{{ vmwareEngineNetwork }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkPoliciesId = '{{ networkPoliciesId }}' --required
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

Deletes a `NetworkPolicy` resource. A network policy cannot be deleted when `NetworkService.state` is set to `RECONCILING` for either its external IP or internet access service.

```sql
DELETE FROM google.vmwareengine.network_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkPoliciesId = '{{ networkPoliciesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
