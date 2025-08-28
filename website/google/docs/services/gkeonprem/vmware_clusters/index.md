--- 
title: vmware_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - vmware_clusters
  - gkeonprem
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

Creates, updates, deletes, gets or lists a <code>vmware_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vmware_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkeonprem.vmware_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_vmware_clusters_get"
    values={[
        { label: 'projects_locations_vmware_clusters_get', value: 'projects_locations_vmware_clusters_get' },
        { label: 'projects_locations_vmware_clusters_list', value: 'projects_locations_vmware_clusters_list' }
    ]}
>
<TabItem value="projects_locations_vmware_clusters_get">

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
    <td>Immutable. The VMware user cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="adminClusterMembership" /></td>
    <td><code>string</code></td>
    <td>Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources.</td>
</tr>
<tr>
    <td><CopyableCode code="adminClusterName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the VMware admin cluster hosting this user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="antiAffinityGroups" /></td>
    <td><code>object</code></td>
    <td>AAGConfig specifies whether to spread VMware user cluster nodes across at least three physical hosts in the datacenter. (id: VmwareAAGConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>RBAC policy that will be applied and managed by the Anthos On-Prem API. (id: Authorization)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRepairConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for auto repairing. (id: VmwareAutoRepairConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Binary Authorization related configurations. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneNode" /></td>
    <td><code>object</code></td>
    <td>VMware user cluster control plane nodes must have either 1 or 3 replicas. (id: VmwareControlPlaneNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware user cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplaneV2" /></td>
    <td><code>object</code></td>
    <td>VmwareDataplaneV2Config specifies configuration for Dataplane V2. (id: VmwareDataplaneV2Config)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware user cluster was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="disableBundledIngress" /></td>
    <td><code>boolean</code></td>
    <td>Disable bundled ingress.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAdvancedCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable advanced cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableControlPlaneV2" /></td>
    <td><code>boolean</code></td>
    <td>Enable control plane V2. Default to false.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The DNS name of VMware user cluster's API server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Output only. Fleet configuration for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>Load balancer configuration. (id: VmwareLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware user cluster network configuration. (id: VmwareNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="onPremVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The Anthos clusters on the VMware version for your user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster state. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage configuration. (id: VmwareStorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware user cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradePolicy" /></td>
    <td><code>object</code></td>
    <td>Specifies upgrade policy for the cluster. (id: VmwareClusterUpgradePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck represents the result of the preflight check job. (id: ValidationCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>VmwareVCenterConfig specifies vCenter config for the user cluster. If unspecified, it is inherited from the admin cluster. (id: VmwareVCenterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="vmTrackingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable VM tracking.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_vmware_clusters_list">

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
    <td>Immutable. The VMware user cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="adminClusterMembership" /></td>
    <td><code>string</code></td>
    <td>Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources.</td>
</tr>
<tr>
    <td><CopyableCode code="adminClusterName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the VMware admin cluster hosting this user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="antiAffinityGroups" /></td>
    <td><code>object</code></td>
    <td>AAGConfig specifies whether to spread VMware user cluster nodes across at least three physical hosts in the datacenter. (id: VmwareAAGConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>RBAC policy that will be applied and managed by the Anthos On-Prem API. (id: Authorization)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRepairConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for auto repairing. (id: VmwareAutoRepairConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Binary Authorization related configurations. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneNode" /></td>
    <td><code>object</code></td>
    <td>VMware user cluster control plane nodes must have either 1 or 3 replicas. (id: VmwareControlPlaneNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware user cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplaneV2" /></td>
    <td><code>object</code></td>
    <td>VmwareDataplaneV2Config specifies configuration for Dataplane V2. (id: VmwareDataplaneV2Config)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware user cluster was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="disableBundledIngress" /></td>
    <td><code>boolean</code></td>
    <td>Disable bundled ingress.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAdvancedCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable advanced cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableControlPlaneV2" /></td>
    <td><code>boolean</code></td>
    <td>Enable control plane V2. Default to false.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The DNS name of VMware user cluster's API server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Output only. Fleet configuration for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>Load balancer configuration. (id: VmwareLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware user cluster network configuration. (id: VmwareNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="onPremVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The Anthos clusters on the VMware version for your user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster state. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage configuration. (id: VmwareStorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the VMware user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware user cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradePolicy" /></td>
    <td><code>object</code></td>
    <td>Specifies upgrade policy for the cluster. (id: VmwareClusterUpgradePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck represents the result of the preflight check job. (id: ValidationCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>VmwareVCenterConfig specifies vCenter config for the user cluster. If unspecified, it is inherited from the admin cluster. (id: VmwareVCenterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="vmTrackingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable VM tracking.</td>
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
    <td><a href="#projects_locations_vmware_clusters_get"><CopyableCode code="projects_locations_vmware_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareClustersId"><code>vmwareClustersId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Gets details of a single VMware Cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_list"><CopyableCode code="projects_locations_vmware_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Lists VMware Clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_create"><CopyableCode code="projects_locations_vmware_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-vmwareClusterId"><code>vmwareClusterId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowPreflightFailure"><code>allowPreflightFailure</code></a></td>
    <td>Creates a new VMware user cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_patch"><CopyableCode code="projects_locations_vmware_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareClustersId"><code>vmwareClustersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single VMware cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_delete"><CopyableCode code="projects_locations_vmware_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareClustersId"><code>vmwareClustersId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-ignoreErrors"><code>ignoreErrors</code></a></td>
    <td>Deletes a single VMware Cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_enroll"><CopyableCode code="projects_locations_vmware_clusters_enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_unenroll"><CopyableCode code="projects_locations_vmware_clusters_unenroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareClustersId"><code>vmwareClustersId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Unenrolls an existing VMware user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or UI.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_clusters_query_version_config"><CopyableCode code="projects_locations_vmware_clusters_query_version_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-createConfig.adminClusterMembership"><code>createConfig.adminClusterMembership</code></a>, <a href="#parameter-createConfig.adminClusterName"><code>createConfig.adminClusterName</code></a>, <a href="#parameter-upgradeConfig.clusterName"><code>upgradeConfig.clusterName</code></a></td>
    <td>Queries the VMware user cluster version config.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-vmwareClustersId">
    <td><CopyableCode code="vmwareClustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-allowPreflightFailure">
    <td><CopyableCode code="allowPreflightFailure" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-createConfig.adminClusterMembership">
    <td><CopyableCode code="createConfig.adminClusterMembership" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-createConfig.adminClusterName">
    <td><CopyableCode code="createConfig.adminClusterName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreErrors">
    <td><CopyableCode code="ignoreErrors" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-upgradeConfig.clusterName">
    <td><CopyableCode code="upgradeConfig.clusterName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-vmwareClusterId">
    <td><CopyableCode code="vmwareClusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_vmware_clusters_get"
    values={[
        { label: 'projects_locations_vmware_clusters_get', value: 'projects_locations_vmware_clusters_get' },
        { label: 'projects_locations_vmware_clusters_list', value: 'projects_locations_vmware_clusters_list' }
    ]}
>
<TabItem value="projects_locations_vmware_clusters_get">

Gets details of a single VMware Cluster.

```sql
SELECT
name,
adminClusterMembership,
adminClusterName,
annotations,
antiAffinityGroups,
authorization,
autoRepairConfig,
binaryAuthorization,
controlPlaneNode,
createTime,
dataplaneV2,
deleteTime,
description,
disableBundledIngress,
enableAdvancedCluster,
enableControlPlaneV2,
endpoint,
etag,
fleet,
loadBalancer,
localName,
networkConfig,
onPremVersion,
reconciling,
state,
status,
storage,
uid,
updateTime,
upgradePolicy,
validationCheck,
vcenter,
vmTrackingEnabled
FROM google.gkeonprem.vmware_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND vmwareClustersId = '{{ vmwareClustersId }}' -- required
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
<TabItem value="projects_locations_vmware_clusters_list">

Lists VMware Clusters in a given project and location.

```sql
SELECT
name,
adminClusterMembership,
adminClusterName,
annotations,
antiAffinityGroups,
authorization,
autoRepairConfig,
binaryAuthorization,
controlPlaneNode,
createTime,
dataplaneV2,
deleteTime,
description,
disableBundledIngress,
enableAdvancedCluster,
enableControlPlaneV2,
endpoint,
etag,
fleet,
loadBalancer,
localName,
networkConfig,
onPremVersion,
reconciling,
state,
status,
storage,
uid,
updateTime,
upgradePolicy,
validationCheck,
vcenter,
vmTrackingEnabled
FROM google.gkeonprem.vmware_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_vmware_clusters_create"
    values={[
        { label: 'projects_locations_vmware_clusters_create', value: 'projects_locations_vmware_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_vmware_clusters_create">

Creates a new VMware user cluster in a given project and location.

```sql
INSERT INTO google.gkeonprem.vmware_clusters (
data__name,
data__adminClusterMembership,
data__description,
data__onPremVersion,
data__etag,
data__annotations,
data__controlPlaneNode,
data__antiAffinityGroups,
data__storage,
data__networkConfig,
data__loadBalancer,
data__vcenter,
data__dataplaneV2,
data__vmTrackingEnabled,
data__autoRepairConfig,
data__authorization,
data__enableControlPlaneV2,
data__binaryAuthorization,
data__upgradePolicy,
data__disableBundledIngress,
data__enableAdvancedCluster,
projectsId,
locationsId,
vmwareClusterId,
validateOnly,
allowPreflightFailure
)
SELECT 
'{{ name }}',
'{{ adminClusterMembership }}',
'{{ description }}',
'{{ onPremVersion }}',
'{{ etag }}',
'{{ annotations }}',
'{{ controlPlaneNode }}',
'{{ antiAffinityGroups }}',
'{{ storage }}',
'{{ networkConfig }}',
'{{ loadBalancer }}',
'{{ vcenter }}',
'{{ dataplaneV2 }}',
{{ vmTrackingEnabled }},
'{{ autoRepairConfig }}',
'{{ authorization }}',
{{ enableControlPlaneV2 }},
'{{ binaryAuthorization }}',
'{{ upgradePolicy }}',
{{ disableBundledIngress }},
{{ enableAdvancedCluster }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ vmwareClusterId }}',
'{{ validateOnly }}',
'{{ allowPreflightFailure }}'
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
- name: vmware_clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the vmware_clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the vmware_clusters resource.
    - name: name
      value: string
      description: >
        Immutable. The VMware user cluster resource name.
        
    - name: adminClusterMembership
      value: string
      description: >
        Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources.
        
    - name: description
      value: string
      description: >
        A human readable description of this VMware user cluster.
        
    - name: onPremVersion
      value: string
      description: >
        Required. The Anthos clusters on the VMware version for your user cluster.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
        
    - name: annotations
      value: object
      description: >
        Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
        
    - name: controlPlaneNode
      value: object
      description: >
        VMware user cluster control plane nodes must have either 1 or 3 replicas.
        
    - name: antiAffinityGroups
      value: object
      description: >
        AAGConfig specifies whether to spread VMware user cluster nodes across at least three physical hosts in the datacenter.
        
    - name: storage
      value: object
      description: >
        Storage configuration.
        
    - name: networkConfig
      value: object
      description: >
        The VMware user cluster network configuration.
        
    - name: loadBalancer
      value: object
      description: >
        Load balancer configuration.
        
    - name: vcenter
      value: object
      description: >
        VmwareVCenterConfig specifies vCenter config for the user cluster. If unspecified, it is inherited from the admin cluster.
        
    - name: dataplaneV2
      value: object
      description: >
        VmwareDataplaneV2Config specifies configuration for Dataplane V2.
        
    - name: vmTrackingEnabled
      value: boolean
      description: >
        Enable VM tracking.
        
    - name: autoRepairConfig
      value: object
      description: >
        Configuration for auto repairing.
        
    - name: authorization
      value: object
      description: >
        RBAC policy that will be applied and managed by the Anthos On-Prem API.
        
    - name: enableControlPlaneV2
      value: boolean
      description: >
        Enable control plane V2. Default to false.
        
    - name: binaryAuthorization
      value: object
      description: >
        Binary Authorization related configurations.
        
    - name: upgradePolicy
      value: object
      description: >
        Specifies upgrade policy for the cluster.
        
    - name: disableBundledIngress
      value: boolean
      description: >
        Disable bundled ingress.
        
    - name: enableAdvancedCluster
      value: boolean
      description: >
        Enable advanced cluster.
        
    - name: vmwareClusterId
      value: string
    - name: validateOnly
      value: boolean
    - name: allowPreflightFailure
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_vmware_clusters_patch"
    values={[
        { label: 'projects_locations_vmware_clusters_patch', value: 'projects_locations_vmware_clusters_patch' }
    ]}
>
<TabItem value="projects_locations_vmware_clusters_patch">

Updates the parameters of a single VMware cluster.

```sql
UPDATE google.gkeonprem.vmware_clusters
SET 
data__name = '{{ name }}',
data__adminClusterMembership = '{{ adminClusterMembership }}',
data__description = '{{ description }}',
data__onPremVersion = '{{ onPremVersion }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}',
data__controlPlaneNode = '{{ controlPlaneNode }}',
data__antiAffinityGroups = '{{ antiAffinityGroups }}',
data__storage = '{{ storage }}',
data__networkConfig = '{{ networkConfig }}',
data__loadBalancer = '{{ loadBalancer }}',
data__vcenter = '{{ vcenter }}',
data__dataplaneV2 = '{{ dataplaneV2 }}',
data__vmTrackingEnabled = {{ vmTrackingEnabled }},
data__autoRepairConfig = '{{ autoRepairConfig }}',
data__authorization = '{{ authorization }}',
data__enableControlPlaneV2 = {{ enableControlPlaneV2 }},
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__upgradePolicy = '{{ upgradePolicy }}',
data__disableBundledIngress = {{ disableBundledIngress }},
data__enableAdvancedCluster = {{ enableAdvancedCluster }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND vmwareClustersId = '{{ vmwareClustersId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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
    defaultValue="projects_locations_vmware_clusters_delete"
    values={[
        { label: 'projects_locations_vmware_clusters_delete', value: 'projects_locations_vmware_clusters_delete' }
    ]}
>
<TabItem value="projects_locations_vmware_clusters_delete">

Deletes a single VMware Cluster.

```sql
DELETE FROM google.gkeonprem.vmware_clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND vmwareClustersId = '{{ vmwareClustersId }}' --required
AND etag = '{{ etag }}'
AND allowMissing = '{{ allowMissing }}'
AND validateOnly = '{{ validateOnly }}'
AND force = '{{ force }}'
AND ignoreErrors = '{{ ignoreErrors }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_vmware_clusters_enroll"
    values={[
        { label: 'projects_locations_vmware_clusters_enroll', value: 'projects_locations_vmware_clusters_enroll' },
        { label: 'projects_locations_vmware_clusters_unenroll', value: 'projects_locations_vmware_clusters_unenroll' },
        { label: 'projects_locations_vmware_clusters_query_version_config', value: 'projects_locations_vmware_clusters_query_version_config' }
    ]}
>
<TabItem value="projects_locations_vmware_clusters_enroll">

Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

```sql
EXEC google.gkeonprem.vmware_clusters.projects_locations_vmware_clusters_enroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"vmwareClusterId": "{{ vmwareClusterId }}", 
"localName": "{{ localName }}", 
"adminClusterMembership": "{{ adminClusterMembership }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="projects_locations_vmware_clusters_unenroll">

Unenrolls an existing VMware user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or UI.

```sql
EXEC google.gkeonprem.vmware_clusters.projects_locations_vmware_clusters_unenroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@vmwareClustersId='{{ vmwareClustersId }}' --required, 
@etag='{{ etag }}', 
@allowMissing={{ allowMissing }}, 
@validateOnly={{ validateOnly }}, 
@force={{ force }};
```
</TabItem>
<TabItem value="projects_locations_vmware_clusters_query_version_config">

Queries the VMware user cluster version config.

```sql
EXEC google.gkeonprem.vmware_clusters.projects_locations_vmware_clusters_query_version_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@createConfig.adminClusterMembership='{{ createConfig.adminClusterMembership }}', 
@createConfig.adminClusterName='{{ createConfig.adminClusterName }}', 
@upgradeConfig.clusterName='{{ upgradeConfig.clusterName }}';
```
</TabItem>
</Tabs>
