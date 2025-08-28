--- 
title: private_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - private_connections
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

Creates, updates, deletes, gets or lists a <code>private_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>private_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.private_connections" /></td></tr>
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
    <td>Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this private connection.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringId" /></td>
    <td><code>string</code></td>
    <td>Output only. VPC network peering id between given network VPC and VMwareEngineNetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringState" /></td>
    <td><code>string</code></td>
    <td>Output only. Peering state between service network and VMware Engine network.</td>
</tr>
<tr>
    <td><CopyableCode code="routingMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Routing Mode. Default value is set to GLOBAL. For type = PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. Service network to create private connection. Specify the name in the following form: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;` For type = PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type = NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type = DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type= THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the private connection.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Private connection type.</td>
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
    <td>Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: `projects/&#123;project&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;` where `&#123;project&#125;`, `&#123;location&#125;` will be same as specified in private connection resource name and `&#123;vmware_engine_network_id&#125;` will be in the form of `&#123;location&#125;`-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default.</td>
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
    <td>Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this private connection.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringId" /></td>
    <td><code>string</code></td>
    <td>Output only. VPC network peering id between given network VPC and VMwareEngineNetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringState" /></td>
    <td><code>string</code></td>
    <td>Output only. Peering state between service network and VMware Engine network.</td>
</tr>
<tr>
    <td><CopyableCode code="routingMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Routing Mode. Default value is set to GLOBAL. For type = PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. Service network to create private connection. Specify the name in the following form: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;` For type = PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type = NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type = DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type= THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the private connection.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Private connection type.</td>
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
    <td>Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: `projects/&#123;project&#125;/locations/&#123;location&#125;/vmwareEngineNetworks/&#123;vmware_engine_network_id&#125;` where `&#123;project&#125;`, `&#123;location&#125;` will be same as specified in private connection resource name and `&#123;vmware_engine_network_id&#125;` will be in the form of `&#123;location&#125;`-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateConnectionsId"><code>privateConnectionsId</code></a></td>
    <td></td>
    <td>Retrieves a `PrivateConnection` resource by its resource name. The resource contains details of the private connection, such as connected network, routing mode and state.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists `PrivateConnection` resources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-privateConnectionId"><code>privateConnectionId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new private connection that can be used for accessing private Clouds.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateConnectionsId"><code>privateConnectionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Modifies a `PrivateConnection` resource. Only `description` and `routing_mode` fields can be updated. Only fields specified in `updateMask` are applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateConnectionsId"><code>privateConnectionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a `PrivateConnection` resource. When a private connection is deleted for a VMware Engine network, the connected network becomes inaccessible to that VMware Engine network.</td>
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
<tr id="parameter-privateConnectionsId">
    <td><CopyableCode code="privateConnectionsId" /></td>
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
<tr id="parameter-privateConnectionId">
    <td><CopyableCode code="privateConnectionId" /></td>
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

Retrieves a `PrivateConnection` resource by its resource name. The resource contains details of the private connection, such as connected network, routing mode and state.

```sql
SELECT
name,
createTime,
description,
peeringId,
peeringState,
routingMode,
serviceNetwork,
state,
type,
uid,
updateTime,
vmwareEngineNetwork,
vmwareEngineNetworkCanonical
FROM google.vmwareengine.private_connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateConnectionsId = '{{ privateConnectionsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists `PrivateConnection` resources in a given project and location.

```sql
SELECT
name,
createTime,
description,
peeringId,
peeringState,
routingMode,
serviceNetwork,
state,
type,
uid,
updateTime,
vmwareEngineNetwork,
vmwareEngineNetworkCanonical
FROM google.vmwareengine.private_connections
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

Creates a new private connection that can be used for accessing private Clouds.

```sql
INSERT INTO google.vmwareengine.private_connections (
data__description,
data__vmwareEngineNetwork,
data__type,
data__routingMode,
data__serviceNetwork,
projectsId,
locationsId,
privateConnectionId,
requestId
)
SELECT 
'{{ description }}',
'{{ vmwareEngineNetwork }}',
'{{ type }}',
'{{ routingMode }}',
'{{ serviceNetwork }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ privateConnectionId }}',
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
- name: private_connections
  props:
    - name: projectsId
      value: string
      description: Required parameter for the private_connections resource.
    - name: locationsId
      value: string
      description: Required parameter for the private_connections resource.
    - name: description
      value: string
      description: >
        Optional. User-provided description for this private connection.
        
    - name: vmwareEngineNetwork
      value: string
      description: >
        Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}`, `{location}` will be same as specified in private connection resource name and `{vmware_engine_network_id}` will be in the form of `{location}`-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default.
        
    - name: type
      value: string
      description: >
        Required. Private connection type.
        
      valid_values: ['TYPE_UNSPECIFIED', 'PRIVATE_SERVICE_ACCESS', 'NETAPP_CLOUD_VOLUMES', 'DELL_POWERSCALE', 'THIRD_PARTY_SERVICE']
    - name: routingMode
      value: string
      description: >
        Optional. Routing Mode. Default value is set to GLOBAL. For type = PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported.
        
      valid_values: ['ROUTING_MODE_UNSPECIFIED', 'GLOBAL', 'REGIONAL']
    - name: serviceNetwork
      value: string
      description: >
        Required. Service network to create private connection. Specify the name in the following form: `projects/{project}/global/networks/{network_id}` For type = PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type = NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type = DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type= THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc.
        
    - name: privateConnectionId
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

Modifies a `PrivateConnection` resource. Only `description` and `routing_mode` fields can be updated. Only fields specified in `updateMask` are applied.

```sql
UPDATE google.vmwareengine.private_connections
SET 
data__description = '{{ description }}',
data__vmwareEngineNetwork = '{{ vmwareEngineNetwork }}',
data__type = '{{ type }}',
data__routingMode = '{{ routingMode }}',
data__serviceNetwork = '{{ serviceNetwork }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateConnectionsId = '{{ privateConnectionsId }}' --required
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

Deletes a `PrivateConnection` resource. When a private connection is deleted for a VMware Engine network, the connected network becomes inaccessible to that VMware Engine network.

```sql
DELETE FROM google.vmwareengine.private_connections
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateConnectionsId = '{{ privateConnectionsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
