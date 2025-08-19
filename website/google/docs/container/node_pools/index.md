--- 
title: node_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - node_pools
  - container
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

Creates, updates, deletes, gets or lists a <code>node_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>node_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.node_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_clusters_node_pools_get"
    values={[
        { label: 'projects_locations_clusters_node_pools_get', value: 'projects_locations_clusters_node_pools_get' },
        { label: 'projects_zones_clusters_node_pools_get', value: 'projects_zones_clusters_node_pools_get' },
        { label: 'projects_locations_clusters_node_pools_list', value: 'projects_locations_clusters_node_pools_list' },
        { label: 'projects_zones_clusters_node_pools_list', value: 'projects_zones_clusters_node_pools_list' }
    ]}
>
<TabItem value="projects_locations_clusters_node_pools_get">

NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.

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
    <td>The name of the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="autopilotConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies the autopilot configuration for this node pool. This field is exclusively reserved for Cluster Autoscaler. (id: AutopilotConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present. (id: NodePoolAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="bestEffortProvisioning" /></td>
    <td><code>object</code></td>
    <td>Enable best effort provisioning for nodes (id: BestEffortProvisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current node pool state.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The node configuration of the pool. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource URLs of the [managed instance groups](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="management" /></td>
    <td><code>object</code></td>
    <td>NodeManagement configuration for this NodePool. (id: NodeManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="maxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults. (id: NodeNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="placementPolicy" /></td>
    <td><code>object</code></td>
    <td>Specifies the node placement policy. (id: PlacementPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="podIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The pod CIDR block size per node in this node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedProvisioning" /></td>
    <td><code>object</code></td>
    <td>Specifies the configuration of queued provisioning. (id: QueuedProvisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the nodes in this pool instance.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="updateInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Update info contains relevant information during a node pool update. (id: UpdateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeSettings" /></td>
    <td><code>object</code></td>
    <td>Upgrade settings control disruption and speed of the upgrade. (id: UpgradeSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/versioning#specifying_node_version).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_get">

NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.

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
    <td>The name of the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="autopilotConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies the autopilot configuration for this node pool. This field is exclusively reserved for Cluster Autoscaler. (id: AutopilotConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present. (id: NodePoolAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="bestEffortProvisioning" /></td>
    <td><code>object</code></td>
    <td>Enable best effort provisioning for nodes (id: BestEffortProvisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current node pool state.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The node configuration of the pool. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource URLs of the [managed instance groups](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="management" /></td>
    <td><code>object</code></td>
    <td>NodeManagement configuration for this NodePool. (id: NodeManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="maxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults. (id: NodeNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="placementPolicy" /></td>
    <td><code>object</code></td>
    <td>Specifies the node placement policy. (id: PlacementPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="podIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The pod CIDR block size per node in this node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedProvisioning" /></td>
    <td><code>object</code></td>
    <td>Specifies the configuration of queued provisioning. (id: QueuedProvisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the nodes in this pool instance.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="updateInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Update info contains relevant information during a node pool update. (id: UpdateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeSettings" /></td>
    <td><code>object</code></td>
    <td>Upgrade settings control disruption and speed of the upgrade. (id: UpgradeSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/versioning#specifying_node_version).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_clusters_node_pools_list">

ListNodePoolsResponse is the result of ListNodePoolsRequest.

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
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>A list of node pools for a cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_list">

ListNodePoolsResponse is the result of ListNodePoolsRequest.

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
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>A list of node pools for a cluster.</td>
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
    <td><a href="#projects_locations_clusters_node_pools_get"><CopyableCode code="projects_locations_clusters_node_pools_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td>Retrieves the requested node pool.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_get"><CopyableCode code="projects_zones_clusters_node_pools_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Retrieves the requested node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_list"><CopyableCode code="projects_locations_clusters_node_pools_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td>Lists the node pools for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_list"><CopyableCode code="projects_zones_clusters_node_pools_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Lists the node pools for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_create"><CopyableCode code="projects_locations_clusters_node_pools_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Creates a node pool for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_create"><CopyableCode code="projects_zones_clusters_node_pools_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Creates a node pool for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_update"><CopyableCode code="projects_zones_clusters_node_pools_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td></td>
    <td>Updates the version and/or image type for the specified node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_update"><CopyableCode code="projects_locations_clusters_node_pools_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td></td>
    <td>Updates the version and/or image type for the specified node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_delete"><CopyableCode code="projects_locations_clusters_node_pools_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td>Deletes a node pool from a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_delete"><CopyableCode code="projects_zones_clusters_node_pools_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Deletes a node pool from a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_set_autoscaling"><CopyableCode code="projects_locations_clusters_node_pools_set_autoscaling" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td></td>
    <td>Sets the autoscaling settings for the specified node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_complete_upgrade"><CopyableCode code="projects_locations_clusters_node_pools_complete_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td></td>
    <td>CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_rollback"><CopyableCode code="projects_locations_clusters_node_pools_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td></td>
    <td>Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_set_management"><CopyableCode code="projects_locations_clusters_node_pools_set_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td></td>
    <td>Sets the NodeManagement options for a node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_node_pools_set_size"><CopyableCode code="projects_locations_clusters_node_pools_set_size" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodePoolsId"><code>nodePoolsId</code></a></td>
    <td></td>
    <td>Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_autoscaling"><CopyableCode code="projects_zones_clusters_node_pools_autoscaling" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td></td>
    <td>Sets the autoscaling settings for the specified node pool.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_rollback"><CopyableCode code="projects_zones_clusters_node_pools_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td></td>
    <td>Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_set_management"><CopyableCode code="projects_zones_clusters_node_pools_set_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td></td>
    <td>Sets the NodeManagement options for a node pool.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_node_pools_set_size"><CopyableCode code="projects_zones_clusters_node_pools_set_size" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodePoolId"><code>nodePoolId</code></a></td>
    <td></td>
    <td>Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodePoolId">
    <td><CopyableCode code="nodePoolId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodePoolsId">
    <td><CopyableCode code="nodePoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodePoolId">
    <td><CopyableCode code="nodePoolId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_clusters_node_pools_get"
    values={[
        { label: 'projects_locations_clusters_node_pools_get', value: 'projects_locations_clusters_node_pools_get' },
        { label: 'projects_zones_clusters_node_pools_get', value: 'projects_zones_clusters_node_pools_get' },
        { label: 'projects_locations_clusters_node_pools_list', value: 'projects_locations_clusters_node_pools_list' },
        { label: 'projects_zones_clusters_node_pools_list', value: 'projects_zones_clusters_node_pools_list' }
    ]}
>
<TabItem value="projects_locations_clusters_node_pools_get">

Retrieves the requested node pool.

```sql
SELECT
name,
autopilotConfig,
autoscaling,
bestEffortProvisioning,
conditions,
config,
etag,
initialNodeCount,
instanceGroupUrls,
locations,
management,
maxPodsConstraint,
networkConfig,
placementPolicy,
podIpv4CidrSize,
queuedProvisioning,
selfLink,
status,
statusMessage,
updateInfo,
upgradeSettings,
version
FROM google.container.node_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND nodePoolsId = '{{ nodePoolsId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
AND clusterId = '{{ clusterId }}'
AND nodePoolId = '{{ nodePoolId }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_get">

Retrieves the requested node pool.

```sql
SELECT
name,
autopilotConfig,
autoscaling,
bestEffortProvisioning,
conditions,
config,
etag,
initialNodeCount,
instanceGroupUrls,
locations,
management,
maxPodsConstraint,
networkConfig,
placementPolicy,
podIpv4CidrSize,
queuedProvisioning,
selfLink,
status,
statusMessage,
updateInfo,
upgradeSettings,
version
FROM google.container.node_pools
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND clusterId = '{{ clusterId }}' -- required
AND nodePoolId = '{{ nodePoolId }}' -- required
AND name = '{{ name }}';
```
</TabItem>
<TabItem value="projects_locations_clusters_node_pools_list">

Lists the node pools for a cluster.

```sql
SELECT
nodePools
FROM google.container.node_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
AND clusterId = '{{ clusterId }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_list">

Lists the node pools for a cluster.

```sql
SELECT
nodePools
FROM google.container.node_pools
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND clusterId = '{{ clusterId }}' -- required
AND parent = '{{ parent }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_clusters_node_pools_create"
    values={[
        { label: 'projects_locations_clusters_node_pools_create', value: 'projects_locations_clusters_node_pools_create' },
        { label: 'projects_zones_clusters_node_pools_create', value: 'projects_zones_clusters_node_pools_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_clusters_node_pools_create">

Creates a node pool for a cluster.

```sql
INSERT INTO google.container.node_pools (
data__projectId,
data__zone,
data__clusterId,
data__nodePool,
data__parent,
projectsId,
locationsId,
clustersId
)
SELECT 
'{{ projectId }}',
'{{ zone }}',
'{{ clusterId }}',
'{{ nodePool }}',
'{{ parent }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clustersId }}'
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
;
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_create">

Creates a node pool for a cluster.

```sql
INSERT INTO google.container.node_pools (
data__projectId,
data__zone,
data__clusterId,
data__nodePool,
data__parent,
projectId,
zone,
clusterId
)
SELECT 
'{{ projectId }}',
'{{ zone }}',
'{{ clusterId }}',
'{{ nodePool }}',
'{{ parent }}',
'{{ projectId }}',
'{{ zone }}',
'{{ clusterId }}'
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: node_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the node_pools resource.
    - name: locationsId
      value: string
      description: Required parameter for the node_pools resource.
    - name: clustersId
      value: string
      description: Required parameter for the node_pools resource.
    - name: projectId
      value: string
      description: Required parameter for the node_pools resource.
    - name: zone
      value: string
      description: Required parameter for the node_pools resource.
    - name: clusterId
      value: string
      description: Required parameter for the node_pools resource.
    - name: projectId
      value: string
      description: >
        Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
        
    - name: zone
      value: string
      description: >
        Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
        
    - name: clusterId
      value: string
      description: >
        Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
        
    - name: nodePool
      value: object
      description: >
        NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
        
    - name: parent
      value: string
      description: >
        The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_zones_clusters_node_pools_update"
    values={[
        { label: 'projects_zones_clusters_node_pools_update', value: 'projects_zones_clusters_node_pools_update' }
    ]}
>
<TabItem value="projects_zones_clusters_node_pools_update">

Updates the version and/or image type for the specified node pool.

```sql
UPDATE google.container.node_pools
SET 
data__projectId = '{{ projectId }}',
data__zone = '{{ zone }}',
data__clusterId = '{{ clusterId }}',
data__nodePoolId = '{{ nodePoolId }}',
data__nodeVersion = '{{ nodeVersion }}',
data__imageType = '{{ imageType }}',
data__name = '{{ name }}',
data__locations = '{{ locations }}',
data__workloadMetadataConfig = '{{ workloadMetadataConfig }}',
data__upgradeSettings = '{{ upgradeSettings }}',
data__tags = '{{ tags }}',
data__taints = '{{ taints }}',
data__labels = '{{ labels }}',
data__linuxNodeConfig = '{{ linuxNodeConfig }}',
data__kubeletConfig = '{{ kubeletConfig }}',
data__nodeNetworkConfig = '{{ nodeNetworkConfig }}',
data__gcfsConfig = '{{ gcfsConfig }}',
data__confidentialNodes = '{{ confidentialNodes }}',
data__gvnic = '{{ gvnic }}',
data__etag = '{{ etag }}',
data__fastSocket = '{{ fastSocket }}',
data__loggingConfig = '{{ loggingConfig }}',
data__resourceLabels = '{{ resourceLabels }}',
data__windowsNodeConfig = '{{ windowsNodeConfig }}',
data__accelerators = '{{ accelerators }}',
data__machineType = '{{ machineType }}',
data__diskType = '{{ diskType }}',
data__diskSizeGb = '{{ diskSizeGb }}',
data__resourceManagerTags = '{{ resourceManagerTags }}',
data__containerdConfig = '{{ containerdConfig }}',
data__queuedProvisioning = '{{ queuedProvisioning }}',
data__storagePools = '{{ storagePools }}',
data__maxRunDuration = '{{ maxRunDuration }}',
data__flexStart = {{ flexStart }},
data__bootDisk = '{{ bootDisk }}'
WHERE 
projectId = '{{ projectId }}' --required
AND zone = '{{ zone }}' --required
AND clusterId = '{{ clusterId }}' --required
AND nodePoolId = '{{ nodePoolId }}' --required
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_clusters_node_pools_update"
    values={[
        { label: 'projects_locations_clusters_node_pools_update', value: 'projects_locations_clusters_node_pools_update' }
    ]}
>
<TabItem value="projects_locations_clusters_node_pools_update">

Updates the version and/or image type for the specified node pool.

```sql
REPLACE google.container.node_pools
SET 
data__projectId = '{{ projectId }}',
data__zone = '{{ zone }}',
data__clusterId = '{{ clusterId }}',
data__nodePoolId = '{{ nodePoolId }}',
data__nodeVersion = '{{ nodeVersion }}',
data__imageType = '{{ imageType }}',
data__name = '{{ name }}',
data__locations = '{{ locations }}',
data__workloadMetadataConfig = '{{ workloadMetadataConfig }}',
data__upgradeSettings = '{{ upgradeSettings }}',
data__tags = '{{ tags }}',
data__taints = '{{ taints }}',
data__labels = '{{ labels }}',
data__linuxNodeConfig = '{{ linuxNodeConfig }}',
data__kubeletConfig = '{{ kubeletConfig }}',
data__nodeNetworkConfig = '{{ nodeNetworkConfig }}',
data__gcfsConfig = '{{ gcfsConfig }}',
data__confidentialNodes = '{{ confidentialNodes }}',
data__gvnic = '{{ gvnic }}',
data__etag = '{{ etag }}',
data__fastSocket = '{{ fastSocket }}',
data__loggingConfig = '{{ loggingConfig }}',
data__resourceLabels = '{{ resourceLabels }}',
data__windowsNodeConfig = '{{ windowsNodeConfig }}',
data__accelerators = '{{ accelerators }}',
data__machineType = '{{ machineType }}',
data__diskType = '{{ diskType }}',
data__diskSizeGb = '{{ diskSizeGb }}',
data__resourceManagerTags = '{{ resourceManagerTags }}',
data__containerdConfig = '{{ containerdConfig }}',
data__queuedProvisioning = '{{ queuedProvisioning }}',
data__storagePools = '{{ storagePools }}',
data__maxRunDuration = '{{ maxRunDuration }}',
data__flexStart = {{ flexStart }},
data__bootDisk = '{{ bootDisk }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND nodePoolsId = '{{ nodePoolsId }}' --required
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_clusters_node_pools_delete"
    values={[
        { label: 'projects_locations_clusters_node_pools_delete', value: 'projects_locations_clusters_node_pools_delete' },
        { label: 'projects_zones_clusters_node_pools_delete', value: 'projects_zones_clusters_node_pools_delete' }
    ]}
>
<TabItem value="projects_locations_clusters_node_pools_delete">

Deletes a node pool from a cluster.

```sql
DELETE FROM google.container.node_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND nodePoolsId = '{{ nodePoolsId }}' --required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
AND clusterId = '{{ clusterId }}'
AND nodePoolId = '{{ nodePoolId }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_delete">

Deletes a node pool from a cluster.

```sql
DELETE FROM google.container.node_pools
WHERE projectId = '{{ projectId }}' --required
AND zone = '{{ zone }}' --required
AND clusterId = '{{ clusterId }}' --required
AND nodePoolId = '{{ nodePoolId }}' --required
AND name = '{{ name }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_clusters_node_pools_set_autoscaling"
    values={[
        { label: 'projects_locations_clusters_node_pools_set_autoscaling', value: 'projects_locations_clusters_node_pools_set_autoscaling' },
        { label: 'projects_locations_clusters_node_pools_complete_upgrade', value: 'projects_locations_clusters_node_pools_complete_upgrade' },
        { label: 'projects_locations_clusters_node_pools_rollback', value: 'projects_locations_clusters_node_pools_rollback' },
        { label: 'projects_locations_clusters_node_pools_set_management', value: 'projects_locations_clusters_node_pools_set_management' },
        { label: 'projects_locations_clusters_node_pools_set_size', value: 'projects_locations_clusters_node_pools_set_size' },
        { label: 'projects_zones_clusters_node_pools_autoscaling', value: 'projects_zones_clusters_node_pools_autoscaling' },
        { label: 'projects_zones_clusters_node_pools_rollback', value: 'projects_zones_clusters_node_pools_rollback' },
        { label: 'projects_zones_clusters_node_pools_set_management', value: 'projects_zones_clusters_node_pools_set_management' },
        { label: 'projects_zones_clusters_node_pools_set_size', value: 'projects_zones_clusters_node_pools_set_size' }
    ]}
>
<TabItem value="projects_locations_clusters_node_pools_set_autoscaling">

Sets the autoscaling settings for the specified node pool.

```sql
EXEC google.container.node_pools.projects_locations_clusters_node_pools_set_autoscaling 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodePoolsId='{{ nodePoolsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"autoscaling": "{{ autoscaling }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_node_pools_complete_upgrade">

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

```sql
EXEC google.container.node_pools.projects_locations_clusters_node_pools_complete_upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodePoolsId='{{ nodePoolsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_clusters_node_pools_rollback">

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

```sql
EXEC google.container.node_pools.projects_locations_clusters_node_pools_rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodePoolsId='{{ nodePoolsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"name": "{{ name }}", 
"respectPdb": {{ respectPdb }}
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_node_pools_set_management">

Sets the NodeManagement options for a node pool.

```sql
EXEC google.container.node_pools.projects_locations_clusters_node_pools_set_management 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodePoolsId='{{ nodePoolsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"management": "{{ management }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_node_pools_set_size">

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

```sql
EXEC google.container.node_pools.projects_locations_clusters_node_pools_set_size 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodePoolsId='{{ nodePoolsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"nodeCount": {{ nodeCount }}, 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_autoscaling">

Sets the autoscaling settings for the specified node pool.

```sql
EXEC google.container.node_pools.projects_zones_clusters_node_pools_autoscaling 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required, 
@nodePoolId='{{ nodePoolId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"autoscaling": "{{ autoscaling }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_rollback">

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

```sql
EXEC google.container.node_pools.projects_zones_clusters_node_pools_rollback 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required, 
@nodePoolId='{{ nodePoolId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"name": "{{ name }}", 
"respectPdb": {{ respectPdb }}
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_set_management">

Sets the NodeManagement options for a node pool.

```sql
EXEC google.container.node_pools.projects_zones_clusters_node_pools_set_management 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required, 
@nodePoolId='{{ nodePoolId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"management": "{{ management }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_node_pools_set_size">

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

```sql
EXEC google.container.node_pools.projects_zones_clusters_node_pools_set_size 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required, 
@nodePoolId='{{ nodePoolId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"nodePoolId": "{{ nodePoolId }}", 
"nodeCount": {{ nodeCount }}, 
"name": "{{ name }}"
}';
```
</TabItem>
</Tabs>
