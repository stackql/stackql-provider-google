--- 
title: network_peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - network_peerings
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

Creates, updates, deletes, gets or lists a <code>network_peerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_peerings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.network_peerings" /></td></tr>
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
    <td>Output only. Identifier. The resource name of the network peering. NetworkPeering is a global resource and location can only be global. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this network peering.</td>
</tr>
<tr>
    <td><CopyableCode code="exchangeSubnetRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is 'ACTIVE'.</td>
</tr>
<tr>
    <td><CopyableCode code="exportCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="exportCustomRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.</td>
</tr>
<tr>
    <td><CopyableCode code="importCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="importCustomRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field.</td>
</tr>
<tr>
    <td><CopyableCode code="peerMtu" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Maximum transmission unit (MTU) in bytes. The default value is `1500`. If a value of `0` is provided for this field, VMware Engine uses the default value instead.</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the `peer_network_type` is VMWARE_ENGINE_NETWORK, specify the name in the form: `projects/&#123;project&#125;/locations/global/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;`. Otherwise specify the name in the form: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;`, where `&#123;project&#125;` can either be a project number or a project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetworkType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the network to peer with the VMware Engine network.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the network peering. This field has a value of 'ACTIVE' when there's a matching configuration in the peer network. New values may be added to this enum when appropriate.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. Output Only. Details about the current state of the network peering.</td>
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
    <td>Required. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/&#123;project&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;` where `&#123;project&#125;` can either be a project number or a project ID.</td>
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
    <td>Output only. Identifier. The resource name of the network peering. NetworkPeering is a global resource and location can only be global. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this network peering.</td>
</tr>
<tr>
    <td><CopyableCode code="exchangeSubnetRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is 'ACTIVE'.</td>
</tr>
<tr>
    <td><CopyableCode code="exportCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="exportCustomRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.</td>
</tr>
<tr>
    <td><CopyableCode code="importCustomRoutes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="importCustomRoutesWithPublicIp" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field.</td>
</tr>
<tr>
    <td><CopyableCode code="peerMtu" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Maximum transmission unit (MTU) in bytes. The default value is `1500`. If a value of `0` is provided for this field, VMware Engine uses the default value instead.</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the `peer_network_type` is VMWARE_ENGINE_NETWORK, specify the name in the form: `projects/&#123;project&#125;/locations/global/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;`. Otherwise specify the name in the form: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;`, where `&#123;project&#125;` can either be a project number or a project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetworkType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the network to peer with the VMware Engine network.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the network peering. This field has a value of 'ACTIVE' when there's a matching configuration in the peer network. New values may be added to this enum when appropriate.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. Output Only. Details about the current state of the network peering.</td>
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
    <td>Required. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/&#123;project&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;` where `&#123;project&#125;` can either be a project number or a project ID.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPeeringsId"><code>networkPeeringsId</code></a></td>
    <td></td>
    <td>Retrieves a `NetworkPeering` resource by its resource name. The resource contains details of the network peering, such as peered networks, import and export custom route configurations, and peering state. NetworkPeering is a global resource and location can only be global.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists `NetworkPeering` resources in a given project. NetworkPeering is a global resource and location can only be global.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-networkPeeringId"><code>networkPeeringId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new network peering between the peer network and VMware Engine network provided in a `NetworkPeering` resource. NetworkPeering is a global resource and location can only be global.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPeeringsId"><code>networkPeeringsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Modifies a `NetworkPeering` resource. Only the `description` field can be updated. Only fields specified in `updateMask` are applied. NetworkPeering is a global resource and location can only be global.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPeeringsId"><code>networkPeeringsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a `NetworkPeering` resource. When a network peering is deleted for a VMware Engine network, the peer network becomes inaccessible to that VMware Engine network. NetworkPeering is a global resource and location can only be global.</td>
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
<tr id="parameter-networkPeeringsId">
    <td><CopyableCode code="networkPeeringsId" /></td>
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
<tr id="parameter-networkPeeringId">
    <td><CopyableCode code="networkPeeringId" /></td>
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

Retrieves a `NetworkPeering` resource by its resource name. The resource contains details of the network peering, such as peered networks, import and export custom route configurations, and peering state. NetworkPeering is a global resource and location can only be global.

```sql
SELECT
name,
createTime,
description,
exchangeSubnetRoutes,
exportCustomRoutes,
exportCustomRoutesWithPublicIp,
importCustomRoutes,
importCustomRoutesWithPublicIp,
peerMtu,
peerNetwork,
peerNetworkType,
state,
stateDetails,
uid,
updateTime,
vmwareEngineNetwork
FROM google.vmwareengine.network_peerings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkPeeringsId = '{{ networkPeeringsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists `NetworkPeering` resources in a given project. NetworkPeering is a global resource and location can only be global.

```sql
SELECT
name,
createTime,
description,
exchangeSubnetRoutes,
exportCustomRoutes,
exportCustomRoutesWithPublicIp,
importCustomRoutes,
importCustomRoutesWithPublicIp,
peerMtu,
peerNetwork,
peerNetworkType,
state,
stateDetails,
uid,
updateTime,
vmwareEngineNetwork
FROM google.vmwareengine.network_peerings
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

Creates a new network peering between the peer network and VMware Engine network provided in a `NetworkPeering` resource. NetworkPeering is a global resource and location can only be global.

```sql
INSERT INTO google.vmwareengine.network_peerings (
data__peerNetwork,
data__exportCustomRoutes,
data__importCustomRoutes,
data__exchangeSubnetRoutes,
data__exportCustomRoutesWithPublicIp,
data__importCustomRoutesWithPublicIp,
data__peerMtu,
data__peerNetworkType,
data__vmwareEngineNetwork,
data__description,
projectsId,
locationsId,
networkPeeringId,
requestId
)
SELECT 
'{{ peerNetwork }}',
{{ exportCustomRoutes }},
{{ importCustomRoutes }},
{{ exchangeSubnetRoutes }},
{{ exportCustomRoutesWithPublicIp }},
{{ importCustomRoutesWithPublicIp }},
{{ peerMtu }},
'{{ peerNetworkType }}',
'{{ vmwareEngineNetwork }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ networkPeeringId }}',
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
- name: network_peerings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the network_peerings resource.
    - name: locationsId
      value: string
      description: Required parameter for the network_peerings resource.
    - name: peerNetwork
      value: string
      description: >
        Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the `peer_network_type` is VMWARE_ENGINE_NETWORK, specify the name in the form: `projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}`. Otherwise specify the name in the form: `projects/{project}/global/networks/{network_id}`, where `{project}` can either be a project number or a project ID.
        
    - name: exportCustomRoutes
      value: boolean
      description: >
        Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true.
        
    - name: importCustomRoutes
      value: boolean
      description: >
        Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true.
        
    - name: exchangeSubnetRoutes
      value: boolean
      description: >
        Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is 'ACTIVE'.
        
    - name: exportCustomRoutesWithPublicIp
      value: boolean
      description: >
        Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.
        
    - name: importCustomRoutesWithPublicIp
      value: boolean
      description: >
        Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field.
        
    - name: peerMtu
      value: integer
      description: >
        Optional. Maximum transmission unit (MTU) in bytes. The default value is `1500`. If a value of `0` is provided for this field, VMware Engine uses the default value instead.
        
    - name: peerNetworkType
      value: string
      description: >
        Required. The type of the network to peer with the VMware Engine network.
        
      valid_values: ['PEER_NETWORK_TYPE_UNSPECIFIED', 'STANDARD', 'VMWARE_ENGINE_NETWORK', 'PRIVATE_SERVICES_ACCESS', 'NETAPP_CLOUD_VOLUMES', 'THIRD_PARTY_SERVICE', 'DELL_POWERSCALE', 'GOOGLE_CLOUD_NETAPP_VOLUMES', 'GOOGLE_CLOUD_FILESTORE_INSTANCES']
    - name: vmwareEngineNetwork
      value: string
      description: >
        Required. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.
        
    - name: description
      value: string
      description: >
        Optional. User-provided description for this network peering.
        
    - name: networkPeeringId
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

Modifies a `NetworkPeering` resource. Only the `description` field can be updated. Only fields specified in `updateMask` are applied. NetworkPeering is a global resource and location can only be global.

```sql
UPDATE google.vmwareengine.network_peerings
SET 
data__peerNetwork = '{{ peerNetwork }}',
data__exportCustomRoutes = {{ exportCustomRoutes }},
data__importCustomRoutes = {{ importCustomRoutes }},
data__exchangeSubnetRoutes = {{ exchangeSubnetRoutes }},
data__exportCustomRoutesWithPublicIp = {{ exportCustomRoutesWithPublicIp }},
data__importCustomRoutesWithPublicIp = {{ importCustomRoutesWithPublicIp }},
data__peerMtu = {{ peerMtu }},
data__peerNetworkType = '{{ peerNetworkType }}',
data__vmwareEngineNetwork = '{{ vmwareEngineNetwork }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkPeeringsId = '{{ networkPeeringsId }}' --required
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

Deletes a `NetworkPeering` resource. When a network peering is deleted for a VMware Engine network, the peer network becomes inaccessible to that VMware Engine network. NetworkPeering is a global resource and location can only be global.

```sql
DELETE FROM google.vmwareengine.network_peerings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkPeeringsId = '{{ networkPeeringsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
