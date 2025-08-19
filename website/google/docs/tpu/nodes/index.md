--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - tpu
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nodes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.tpu.nodes" /></td></tr>
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

A TPU instance.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The unique identifier for the TPU Node.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The name of the TPU.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleratorConfig" /></td>
    <td><code>object</code></td>
    <td>The AccleratorConfig for the TPU Node. (id: AcceleratorConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="acceleratorType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of hardware accelerators associated with this node.</td>
</tr>
<tr>
    <td><CopyableCode code="apiVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The API version that created this Node.</td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataDisks" /></td>
    <td><code>array</code></td>
    <td>The additional data disks for the Node.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-supplied description of the TPU. Maximum of 512 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The health status of the TPU node.</td>
</tr>
<tr>
    <td><CopyableCode code="healthDescription" /></td>
    <td><code>string</code></td>
    <td>Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script</td>
</tr>
<tr>
    <td><CopyableCode code="multisliceNode" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the Node belongs to a Multislice group.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Network configurations for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Repeated network configurations for the TPU node. This field is used to specify multiple networks configs for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="networkEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedResource" /></td>
    <td><code>string</code></td>
    <td>Output only. The qualified name of the QueuedResource that requested this Node.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The runtime version running in the Node.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingConfig" /></td>
    <td><code>object</code></td>
    <td>The scheduling options for this node. (id: SchedulingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>object</code></td>
    <td>The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used. (id: ServiceAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedInstanceConfig" /></td>
    <td><code>object</code></td>
    <td>Shielded Instance options. (id: ShieldedInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state for the TPU Node.</td>
</tr>
<tr>
    <td><CopyableCode code="symptoms" /></td>
    <td><code>array</code></td>
    <td>Output only. The Symptoms that have occurred to the TPU Node.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.</td>
</tr>
<tr>
    <td><CopyableCode code="upcomingMaintenance" /></td>
    <td><code>object</code></td>
    <td>Output only. Upcoming maintenance on this TPU node. (id: UpcomingMaintenance)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for ListNodes.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The next page token or empty if none.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>The listed nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Gets the details of a node.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists nodes.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-nodeId"><code>nodeId</code></a></td>
    <td>Creates a node.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the configurations of a node.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Deletes a node.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Stops a node. This operation is only available with single TPU nodes.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Starts a node.</td>
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
<tr id="parameter-nodesId">
    <td><CopyableCode code="nodesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodeId">
    <td><CopyableCode code="nodeId" /></td>
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

Gets the details of a node.

```sql
SELECT
id,
name,
acceleratorConfig,
acceleratorType,
apiVersion,
cidrBlock,
createTime,
dataDisks,
description,
health,
healthDescription,
labels,
metadata,
multisliceNode,
networkConfig,
networkConfigs,
networkEndpoints,
queuedResource,
runtimeVersion,
schedulingConfig,
serviceAccount,
shieldedInstanceConfig,
state,
symptoms,
tags,
upcomingMaintenance
FROM google.tpu.nodes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND nodesId = '{{ nodesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists nodes.

```sql
SELECT
nextPageToken,
nodes,
unreachable
FROM google.tpu.nodes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a node.

```sql
INSERT INTO google.tpu.nodes (
data__description,
data__acceleratorType,
data__runtimeVersion,
data__networkConfig,
data__networkConfigs,
data__cidrBlock,
data__serviceAccount,
data__schedulingConfig,
data__health,
data__labels,
data__metadata,
data__tags,
data__dataDisks,
data__shieldedInstanceConfig,
data__acceleratorConfig,
projectsId,
locationsId,
nodeId
)
SELECT 
'{{ description }}',
'{{ acceleratorType }}',
'{{ runtimeVersion }}',
'{{ networkConfig }}',
'{{ networkConfigs }}',
'{{ cidrBlock }}',
'{{ serviceAccount }}',
'{{ schedulingConfig }}',
'{{ health }}',
'{{ labels }}',
'{{ metadata }}',
'{{ tags }}',
'{{ dataDisks }}',
'{{ shieldedInstanceConfig }}',
'{{ acceleratorConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ nodeId }}'
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
- name: nodes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the nodes resource.
    - name: locationsId
      value: string
      description: Required parameter for the nodes resource.
    - name: description
      value: string
      description: >
        The user-supplied description of the TPU. Maximum of 512 characters.
        
    - name: acceleratorType
      value: string
      description: >
        Optional. The type of hardware accelerators associated with this node.
        
    - name: runtimeVersion
      value: string
      description: >
        Required. The runtime version running in the Node.
        
    - name: networkConfig
      value: object
      description: >
        Network configurations for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned.
        
    - name: networkConfigs
      value: array
      description: >
        Optional. Repeated network configurations for the TPU node. This field is used to specify multiple networks configs for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned.
        
    - name: cidrBlock
      value: string
      description: >
        The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.
        
    - name: serviceAccount
      value: object
      description: >
        The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used.
        
    - name: schedulingConfig
      value: object
      description: >
        The scheduling options for this node.
        
    - name: health
      value: string
      description: >
        The health status of the TPU node.
        
      valid_values: ['HEALTH_UNSPECIFIED', 'HEALTHY', 'TIMEOUT', 'UNHEALTHY_TENSORFLOW', 'UNHEALTHY_MAINTENANCE']
    - name: labels
      value: object
      description: >
        Resource labels to represent user-provided metadata.
        
    - name: metadata
      value: object
      description: >
        Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script
        
    - name: tags
      value: array
      description: >
        Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
        
    - name: dataDisks
      value: array
      description: >
        The additional data disks for the Node.
        
    - name: shieldedInstanceConfig
      value: object
      description: >
        Shielded Instance options.
        
    - name: acceleratorConfig
      value: object
      description: >
        The AccleratorConfig for the TPU Node.
        
    - name: nodeId
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

Updates the configurations of a node.

```sql
UPDATE google.tpu.nodes
SET 
data__description = '{{ description }}',
data__acceleratorType = '{{ acceleratorType }}',
data__runtimeVersion = '{{ runtimeVersion }}',
data__networkConfig = '{{ networkConfig }}',
data__networkConfigs = '{{ networkConfigs }}',
data__cidrBlock = '{{ cidrBlock }}',
data__serviceAccount = '{{ serviceAccount }}',
data__schedulingConfig = '{{ schedulingConfig }}',
data__health = '{{ health }}',
data__labels = '{{ labels }}',
data__metadata = '{{ metadata }}',
data__tags = '{{ tags }}',
data__dataDisks = '{{ dataDisks }}',
data__shieldedInstanceConfig = '{{ shieldedInstanceConfig }}',
data__acceleratorConfig = '{{ acceleratorConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND nodesId = '{{ nodesId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a node.

```sql
DELETE FROM google.tpu.nodes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND nodesId = '{{ nodesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop"
    values={[
        { label: 'stop', value: 'stop' },
        { label: 'start', value: 'start' }
    ]}
>
<TabItem value="stop">

Stops a node. This operation is only available with single TPU nodes.

```sql
EXEC google.tpu.nodes.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@nodesId='{{ nodesId }}' --required;
```
</TabItem>
<TabItem value="start">

Starts a node.

```sql
EXEC google.tpu.nodes.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@nodesId='{{ nodesId }}' --required;
```
</TabItem>
</Tabs>
