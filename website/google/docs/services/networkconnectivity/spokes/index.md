--- 
title: spokes
hide_title: false
hide_table_of_contents: false
keywords:
  - spokes
  - networkconnectivity
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

Creates, updates, deletes, gets or lists a <code>spokes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>spokes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.spokes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_spokes', value: 'list_spokes' },
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
    <td>Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/&#123;project_number&#125;/locations/&#123;region&#125;/spokes/&#123;spoke_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the spoke was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldPathsPendingUpdate" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of fields waiting for hub administration's approval.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the group that this spoke is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="hub" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the hub that this spoke is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="linkedInterconnectAttachments" /></td>
    <td><code>object</code></td>
    <td>Optional. VLAN attachments that are associated with the spoke. (id: LinkedInterconnectAttachments)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedProducerVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Optional. The linked producer VPC that is associated with the spoke. (id: LinkedProducerVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedRouterApplianceInstances" /></td>
    <td><code>object</code></td>
    <td>Optional. Router appliance instances that are associated with the spoke. (id: LinkedRouterApplianceInstances)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC network that is associated with the spoke. (id: LinkedVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedVpnTunnels" /></td>
    <td><code>object</code></td>
    <td>Optional. VPN tunnels that are associated with the spoke. (id: LinkedVpnTunnels)</td>
</tr>
<tr>
    <td><CopyableCode code="reasons" /></td>
    <td><code>array</code></td>
    <td>Output only. The reasons for current state of the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="spokeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of resource associated with the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different `unique_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the spoke was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_spokes">

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
    <td>Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/&#123;project_number&#125;/locations/&#123;region&#125;/spokes/&#123;spoke_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the spoke was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldPathsPendingUpdate" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of fields waiting for hub administration's approval.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the group that this spoke is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="hub" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the hub that this spoke is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="linkedInterconnectAttachments" /></td>
    <td><code>object</code></td>
    <td>Optional. VLAN attachments that are associated with the spoke. (id: LinkedInterconnectAttachments)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedProducerVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Optional. The linked producer VPC that is associated with the spoke. (id: LinkedProducerVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedRouterApplianceInstances" /></td>
    <td><code>object</code></td>
    <td>Optional. Router appliance instances that are associated with the spoke. (id: LinkedRouterApplianceInstances)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC network that is associated with the spoke. (id: LinkedVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedVpnTunnels" /></td>
    <td><code>object</code></td>
    <td>Optional. VPN tunnels that are associated with the spoke. (id: LinkedVpnTunnels)</td>
</tr>
<tr>
    <td><CopyableCode code="reasons" /></td>
    <td><code>array</code></td>
    <td>Output only. The reasons for current state of the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="spokeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of resource associated with the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different `unique_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the spoke was last updated.</td>
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
    <td>Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/&#123;project_number&#125;/locations/&#123;region&#125;/spokes/&#123;spoke_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the spoke was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldPathsPendingUpdate" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of fields waiting for hub administration's approval.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the group that this spoke is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="hub" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the hub that this spoke is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="linkedInterconnectAttachments" /></td>
    <td><code>object</code></td>
    <td>Optional. VLAN attachments that are associated with the spoke. (id: LinkedInterconnectAttachments)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedProducerVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Optional. The linked producer VPC that is associated with the spoke. (id: LinkedProducerVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedRouterApplianceInstances" /></td>
    <td><code>object</code></td>
    <td>Optional. Router appliance instances that are associated with the spoke. (id: LinkedRouterApplianceInstances)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC network that is associated with the spoke. (id: LinkedVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedVpnTunnels" /></td>
    <td><code>object</code></td>
    <td>Optional. VPN tunnels that are associated with the spoke. (id: LinkedVpnTunnels)</td>
</tr>
<tr>
    <td><CopyableCode code="reasons" /></td>
    <td><code>array</code></td>
    <td>Output only. The reasons for current state of the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="spokeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of resource associated with the spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this spoke.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different `unique_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the spoke was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a></td>
    <td></td>
    <td>Gets details about a Network Connectivity Center spoke.</td>
</tr>
<tr>
    <td><a href="#list_spokes"><CopyableCode code="list_spokes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td><a href="#parameter-spokeLocations"><code>spokeLocations</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists the Network Connectivity Center spokes associated with a specified hub and location. The list includes both spokes that are attached to the hub and spokes that have been proposed but not yet accepted.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the Network Connectivity Center spokes in a specified project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-spokeId"><code>spokeId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Network Connectivity Center spoke.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a Network Connectivity Center spoke.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a Network Connectivity Center spoke.</td>
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
<tr id="parameter-hubsId">
    <td><CopyableCode code="hubsId" /></td>
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
<tr id="parameter-spokesId">
    <td><CopyableCode code="spokesId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-spokeId">
    <td><CopyableCode code="spokeId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-spokeLocations">
    <td><CopyableCode code="spokeLocations" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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
        { label: 'list_spokes', value: 'list_spokes' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details about a Network Connectivity Center spoke.

```sql
SELECT
name,
createTime,
description,
etag,
fieldPathsPendingUpdate,
group,
hub,
labels,
linkedInterconnectAttachments,
linkedProducerVpcNetwork,
linkedRouterApplianceInstances,
linkedVpcNetwork,
linkedVpnTunnels,
reasons,
spokeType,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.spokes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND spokesId = '{{ spokesId }}' -- required;
```
</TabItem>
<TabItem value="list_spokes">

Lists the Network Connectivity Center spokes associated with a specified hub and location. The list includes both spokes that are attached to the hub and spokes that have been proposed but not yet accepted.

```sql
SELECT
name,
createTime,
description,
etag,
fieldPathsPendingUpdate,
group,
hub,
labels,
linkedInterconnectAttachments,
linkedProducerVpcNetwork,
linkedRouterApplianceInstances,
linkedVpcNetwork,
linkedVpnTunnels,
reasons,
spokeType,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.spokes
WHERE projectsId = '{{ projectsId }}' -- required
AND hubsId = '{{ hubsId }}' -- required
AND spokeLocations = '{{ spokeLocations }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists the Network Connectivity Center spokes in a specified project and location.

```sql
SELECT
name,
createTime,
description,
etag,
fieldPathsPendingUpdate,
group,
hub,
labels,
linkedInterconnectAttachments,
linkedProducerVpcNetwork,
linkedRouterApplianceInstances,
linkedVpcNetwork,
linkedVpnTunnels,
reasons,
spokeType,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.spokes
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

Creates a Network Connectivity Center spoke.

```sql
INSERT INTO google.networkconnectivity.spokes (
data__name,
data__labels,
data__description,
data__hub,
data__group,
data__linkedVpnTunnels,
data__linkedInterconnectAttachments,
data__linkedRouterApplianceInstances,
data__linkedVpcNetwork,
data__linkedProducerVpcNetwork,
data__etag,
data__fieldPathsPendingUpdate,
projectsId,
locationsId,
spokeId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ hub }}',
'{{ group }}',
'{{ linkedVpnTunnels }}',
'{{ linkedInterconnectAttachments }}',
'{{ linkedRouterApplianceInstances }}',
'{{ linkedVpcNetwork }}',
'{{ linkedProducerVpcNetwork }}',
'{{ etag }}',
'{{ fieldPathsPendingUpdate }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ spokeId }}',
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
- name: spokes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the spokes resource.
    - name: locationsId
      value: string
      description: Required parameter for the spokes resource.
    - name: name
      value: string
      description: >
        Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`
        
    - name: labels
      value: object
      description: >
        Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
        
    - name: description
      value: string
      description: >
        Optional. An optional description of the spoke.
        
    - name: hub
      value: string
      description: >
        Immutable. The name of the hub that this spoke is attached to.
        
    - name: group
      value: string
      description: >
        Optional. The name of the group that this spoke is associated with.
        
    - name: linkedVpnTunnels
      value: object
      description: >
        Optional. VPN tunnels that are associated with the spoke.
        
    - name: linkedInterconnectAttachments
      value: object
      description: >
        Optional. VLAN attachments that are associated with the spoke.
        
    - name: linkedRouterApplianceInstances
      value: object
      description: >
        Optional. Router appliance instances that are associated with the spoke.
        
    - name: linkedVpcNetwork
      value: object
      description: >
        Optional. VPC network that is associated with the spoke.
        
    - name: linkedProducerVpcNetwork
      value: object
      description: >
        Optional. The linked producer VPC that is associated with the spoke.
        
    - name: etag
      value: string
      description: >
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: fieldPathsPendingUpdate
      value: array
      description: >
        Optional. The list of fields waiting for hub administration's approval.
        
    - name: spokeId
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

Updates the parameters of a Network Connectivity Center spoke.

```sql
UPDATE google.networkconnectivity.spokes
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__hub = '{{ hub }}',
data__group = '{{ group }}',
data__linkedVpnTunnels = '{{ linkedVpnTunnels }}',
data__linkedInterconnectAttachments = '{{ linkedInterconnectAttachments }}',
data__linkedRouterApplianceInstances = '{{ linkedRouterApplianceInstances }}',
data__linkedVpcNetwork = '{{ linkedVpcNetwork }}',
data__linkedProducerVpcNetwork = '{{ linkedProducerVpcNetwork }}',
data__etag = '{{ etag }}',
data__fieldPathsPendingUpdate = '{{ fieldPathsPendingUpdate }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND spokesId = '{{ spokesId }}' --required
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

Deletes a Network Connectivity Center spoke.

```sql
DELETE FROM google.networkconnectivity.spokes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND spokesId = '{{ spokesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
