--- 
title: networks_peering
hide_title: false
hide_table_of_contents: false
keywords:
  - networks_peering
  - compute
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

Creates, updates, deletes, gets or lists a <code>networks_peering</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>networks_peering</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.networks_peering" /></td></tr>
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
    <td><a href="#add_peering"><CopyableCode code="add_peering" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds a peering to the specified network.</td>
</tr>
<tr>
    <td><a href="#update_peering"><CopyableCode code="update_peering" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.</td>
</tr>
<tr>
    <td><a href="#remove_peering"><CopyableCode code="remove_peering" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Removes a peering from the specified network.</td>
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
<tr id="parameter-network">
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_peering"
    values={[
        { label: 'add_peering', value: 'add_peering' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_peering">

Adds a peering to the specified network.

```sql
INSERT INTO google.compute.networks_peering (
data__name,
data__peerNetwork,
data__autoCreateRoutes,
data__networkPeering,
project,
network,
requestId
)
SELECT 
'{{ name }}',
'{{ peerNetwork }}',
{{ autoCreateRoutes }},
'{{ networkPeering }}',
'{{ project }}',
'{{ network }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: networks_peering
  props:
    - name: project
      value: string
      description: Required parameter for the networks_peering resource.
    - name: network
      value: string
      description: Required parameter for the networks_peering resource.
    - name: name
      value: string
      description: >
        Name of the peering, which should conform to RFC1035.
        
    - name: peerNetwork
      value: string
      description: >
        URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.
        
    - name: autoCreateRoutes
      value: boolean
      description: >
        This field will be deprecated soon. Use exchange_subnet_routes in network_peering instead. Indicates whether full mesh connectivity is created and managed automatically between peered networks. Currently this field should always be true since Google Compute Engine will automatically create and manage subnetwork routes between two networks when peering state is ACTIVE.
        
    - name: networkPeering
      value: object
      description: >
        A network peering attached to a network resource. The message includes the peering name, peer network, peering state, and a flag indicating whether Google Compute Engine should automatically create routes for the peering.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_peering"
    values={[
        { label: 'update_peering', value: 'update_peering' }
    ]}
>
<TabItem value="update_peering">

Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

```sql
UPDATE google.compute.networks_peering
SET 
data__networkPeering = '{{ networkPeering }}'
WHERE 
project = '{{ project }}' --required
AND network = '{{ network }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_peering"
    values={[
        { label: 'remove_peering', value: 'remove_peering' }
    ]}
>
<TabItem value="remove_peering">

Removes a peering from the specified network.

```sql
DELETE FROM google.compute.networks_peering
WHERE project = '{{ project }}' --required
AND network = '{{ network }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
