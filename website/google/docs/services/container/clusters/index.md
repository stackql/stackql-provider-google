--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_clusters_get"
    values={[
        { label: 'projects_locations_clusters_get', value: 'projects_locations_clusters_get' },
        { label: 'projects_zones_clusters_get', value: 'projects_zones_clusters_get' },
        { label: 'projects_locations_clusters_list', value: 'projects_locations_clusters_list' },
        { label: 'projects_zones_clusters_list', value: 'projects_zones_clusters_list' }
    ]}
>
<TabItem value="projects_locations_clusters_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique id for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the various addons available to run in the cluster. (id: AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="alphaClusterFeatureGates" /></td>
    <td><code>array</code></td>
    <td>The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false")</td>
</tr>
<tr>
    <td><CopyableCode code="anonymousAuthenticationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for limiting anonymous access to all endpoints except the health checks. (id: AnonymousAuthenticationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticatorGroupsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling RBAC group membership information. (id: AuthenticatorGroupsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autopilot" /></td>
    <td><code>object</code></td>
    <td>Autopilot configuration for the cluster. (id: Autopilot)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level autoscaling configuration. (id: ClusterAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Configuration for Binary Authorization. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.</td>
</tr>
<tr>
    <td><CopyableCode code="compliancePostureConfig" /></td>
    <td><code>object</code></td>
    <td>Enable/Disable Compliance Posture features for the cluster. (id: CompliancePostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialNodes" /></td>
    <td><code>object</code></td>
    <td>Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. (id: ConfidentialNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEndpointsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for all cluster's control plane endpoints. (id: ControlPlaneEndpointsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="costManagementConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the fine-grained cost management feature. (id: CostManagementConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMasterVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current software version of the master endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated, use [NodePools.version](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEncryption" /></td>
    <td><code>object</code></td>
    <td>Configuration of etcd encryption. (id: DatabaseEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMaxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableK8sBetaApis" /></td>
    <td><code>object</code></td>
    <td>Beta APIs Config (id: K8sBetaAPIConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableKubernetesAlpha" /></td>
    <td><code>boolean</code></td>
    <td>Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableTpu" /></td>
    <td><code>boolean</code></td>
    <td>Enable the ability to use Cloud TPUs in this cluster. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.</td>
</tr>
<tr>
    <td><CopyableCode code="enterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>GKE Enterprise Configuration. (id: EnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Fleet information for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeAutoUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for GKE auto upgrades. (id: GkeAutoUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Identity Service component. (id: IdentityServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="initialClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated. Use node_pools.instance_group_urls.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAllocationPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster IP allocation. (id: IPAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string</code></td>
    <td>The fingerprint of the set of labels for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyAbac" /></td>
    <td><code>object</code></td>
    <td>Configuration for the legacy ABAC authorization mode. (id: LegacyAbac)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) or [region](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration for the cluster. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingService" /></td>
    <td><code>string</code></td>
    <td>The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Configure the maintenance policy for this cluster. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuth" /></td>
    <td><code>object</code></td>
    <td>The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. (id: MasterAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuthorizedNetworksConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. (id: MasterAuthorizedNetworksConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="meshCertificates" /></td>
    <td><code>object</code></td>
    <td>Configuration for issuance of mTLS keys and certificates to Kubernetes pods. (id: MeshCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration for the cluster. (id: MonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringService" /></td>
    <td><code>string</code></td>
    <td>The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster networking. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the NetworkPolicy feature. (id: NetworkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolAutoConfig" /></td>
    <td><code>object</code></td>
    <td>Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. (id: NodePoolAutoConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolDefaults" /></td>
    <td><code>object</code></td>
    <td>Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. (id: NodePoolDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration of the cluster. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="parentProductConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. (id: ParentProductConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="podAutoscaling" /></td>
    <td><code>object</code></td>
    <td>The config for pod autoscaling. (id: PodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for private cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rbacBindingConfig" /></td>
    <td><code>object</code></td>
    <td>RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. (id: RBACBindingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>object</code></td>
    <td>Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. (id: ReleaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for the cluster to use to annotate any related Google Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUsageExportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified. (id: ResourceUsageExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="secretManagerConfig" /></td>
    <td><code>object</code></td>
    <td>Secret CSI driver configuration. (id: SecretManagerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPostureConfig" /></td>
    <td><code>object</code></td>
    <td>Enable/Disable Security Posture API features for the cluster. (id: SecurityPostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="servicesIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedNodes" /></td>
    <td><code>object</code></td>
    <td>Shielded Nodes configuration. (id: ShieldedNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [subnetwork](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/subnetworks) to which the cluster is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tpuIpv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="userManagedKeysConfig" /></td>
    <td><code>object</code></td>
    <td>The Custom keys configuration for the cluster. (id: UserManagedKeysConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="verticalPodAutoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level Vertical Pod Autoscaling configuration. (id: VerticalPodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. (id: WorkloadIdentityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique id for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the various addons available to run in the cluster. (id: AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="alphaClusterFeatureGates" /></td>
    <td><code>array</code></td>
    <td>The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false")</td>
</tr>
<tr>
    <td><CopyableCode code="anonymousAuthenticationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for limiting anonymous access to all endpoints except the health checks. (id: AnonymousAuthenticationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticatorGroupsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling RBAC group membership information. (id: AuthenticatorGroupsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autopilot" /></td>
    <td><code>object</code></td>
    <td>Autopilot configuration for the cluster. (id: Autopilot)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level autoscaling configuration. (id: ClusterAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Configuration for Binary Authorization. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.</td>
</tr>
<tr>
    <td><CopyableCode code="compliancePostureConfig" /></td>
    <td><code>object</code></td>
    <td>Enable/Disable Compliance Posture features for the cluster. (id: CompliancePostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialNodes" /></td>
    <td><code>object</code></td>
    <td>Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. (id: ConfidentialNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEndpointsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for all cluster's control plane endpoints. (id: ControlPlaneEndpointsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="costManagementConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the fine-grained cost management feature. (id: CostManagementConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMasterVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current software version of the master endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated, use [NodePools.version](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEncryption" /></td>
    <td><code>object</code></td>
    <td>Configuration of etcd encryption. (id: DatabaseEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMaxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableK8sBetaApis" /></td>
    <td><code>object</code></td>
    <td>Beta APIs Config (id: K8sBetaAPIConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableKubernetesAlpha" /></td>
    <td><code>boolean</code></td>
    <td>Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableTpu" /></td>
    <td><code>boolean</code></td>
    <td>Enable the ability to use Cloud TPUs in this cluster. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.</td>
</tr>
<tr>
    <td><CopyableCode code="enterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>GKE Enterprise Configuration. (id: EnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Fleet information for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeAutoUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for GKE auto upgrades. (id: GkeAutoUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Identity Service component. (id: IdentityServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="initialClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated. Use node_pools.instance_group_urls.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAllocationPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster IP allocation. (id: IPAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string</code></td>
    <td>The fingerprint of the set of labels for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyAbac" /></td>
    <td><code>object</code></td>
    <td>Configuration for the legacy ABAC authorization mode. (id: LegacyAbac)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) or [region](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration for the cluster. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingService" /></td>
    <td><code>string</code></td>
    <td>The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Configure the maintenance policy for this cluster. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuth" /></td>
    <td><code>object</code></td>
    <td>The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. (id: MasterAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuthorizedNetworksConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. (id: MasterAuthorizedNetworksConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="meshCertificates" /></td>
    <td><code>object</code></td>
    <td>Configuration for issuance of mTLS keys and certificates to Kubernetes pods. (id: MeshCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration for the cluster. (id: MonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringService" /></td>
    <td><code>string</code></td>
    <td>The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster networking. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the NetworkPolicy feature. (id: NetworkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolAutoConfig" /></td>
    <td><code>object</code></td>
    <td>Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. (id: NodePoolAutoConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolDefaults" /></td>
    <td><code>object</code></td>
    <td>Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. (id: NodePoolDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration of the cluster. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="parentProductConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. (id: ParentProductConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="podAutoscaling" /></td>
    <td><code>object</code></td>
    <td>The config for pod autoscaling. (id: PodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for private cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rbacBindingConfig" /></td>
    <td><code>object</code></td>
    <td>RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. (id: RBACBindingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>object</code></td>
    <td>Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. (id: ReleaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for the cluster to use to annotate any related Google Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUsageExportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified. (id: ResourceUsageExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="secretManagerConfig" /></td>
    <td><code>object</code></td>
    <td>Secret CSI driver configuration. (id: SecretManagerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPostureConfig" /></td>
    <td><code>object</code></td>
    <td>Enable/Disable Security Posture API features for the cluster. (id: SecurityPostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="servicesIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedNodes" /></td>
    <td><code>object</code></td>
    <td>Shielded Nodes configuration. (id: ShieldedNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [subnetwork](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/subnetworks) to which the cluster is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tpuIpv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="userManagedKeysConfig" /></td>
    <td><code>object</code></td>
    <td>The Custom keys configuration for the cluster. (id: UserManagedKeysConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="verticalPodAutoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level Vertical Pod Autoscaling configuration. (id: VerticalPodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. (id: WorkloadIdentityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_clusters_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique id for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the various addons available to run in the cluster. (id: AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="alphaClusterFeatureGates" /></td>
    <td><code>array</code></td>
    <td>The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false")</td>
</tr>
<tr>
    <td><CopyableCode code="anonymousAuthenticationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for limiting anonymous access to all endpoints except the health checks. (id: AnonymousAuthenticationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticatorGroupsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling RBAC group membership information. (id: AuthenticatorGroupsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autopilot" /></td>
    <td><code>object</code></td>
    <td>Autopilot configuration for the cluster. (id: Autopilot)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level autoscaling configuration. (id: ClusterAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Configuration for Binary Authorization. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.</td>
</tr>
<tr>
    <td><CopyableCode code="compliancePostureConfig" /></td>
    <td><code>object</code></td>
    <td>Enable/Disable Compliance Posture features for the cluster. (id: CompliancePostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialNodes" /></td>
    <td><code>object</code></td>
    <td>Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. (id: ConfidentialNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEndpointsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for all cluster's control plane endpoints. (id: ControlPlaneEndpointsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="costManagementConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the fine-grained cost management feature. (id: CostManagementConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMasterVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current software version of the master endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated, use [NodePools.version](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEncryption" /></td>
    <td><code>object</code></td>
    <td>Configuration of etcd encryption. (id: DatabaseEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMaxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableK8sBetaApis" /></td>
    <td><code>object</code></td>
    <td>Beta APIs Config (id: K8sBetaAPIConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableKubernetesAlpha" /></td>
    <td><code>boolean</code></td>
    <td>Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableTpu" /></td>
    <td><code>boolean</code></td>
    <td>Enable the ability to use Cloud TPUs in this cluster. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.</td>
</tr>
<tr>
    <td><CopyableCode code="enterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>GKE Enterprise Configuration. (id: EnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Fleet information for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeAutoUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for GKE auto upgrades. (id: GkeAutoUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Identity Service component. (id: IdentityServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="initialClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated. Use node_pools.instance_group_urls.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAllocationPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster IP allocation. (id: IPAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string</code></td>
    <td>The fingerprint of the set of labels for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyAbac" /></td>
    <td><code>object</code></td>
    <td>Configuration for the legacy ABAC authorization mode. (id: LegacyAbac)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) or [region](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration for the cluster. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingService" /></td>
    <td><code>string</code></td>
    <td>The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Configure the maintenance policy for this cluster. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuth" /></td>
    <td><code>object</code></td>
    <td>The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. (id: MasterAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuthorizedNetworksConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. (id: MasterAuthorizedNetworksConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="meshCertificates" /></td>
    <td><code>object</code></td>
    <td>Configuration for issuance of mTLS keys and certificates to Kubernetes pods. (id: MeshCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration for the cluster. (id: MonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringService" /></td>
    <td><code>string</code></td>
    <td>The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster networking. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the NetworkPolicy feature. (id: NetworkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolAutoConfig" /></td>
    <td><code>object</code></td>
    <td>Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. (id: NodePoolAutoConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolDefaults" /></td>
    <td><code>object</code></td>
    <td>Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. (id: NodePoolDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration of the cluster. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="parentProductConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. (id: ParentProductConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="podAutoscaling" /></td>
    <td><code>object</code></td>
    <td>The config for pod autoscaling. (id: PodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for private cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rbacBindingConfig" /></td>
    <td><code>object</code></td>
    <td>RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. (id: RBACBindingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>object</code></td>
    <td>Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. (id: ReleaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for the cluster to use to annotate any related Google Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUsageExportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified. (id: ResourceUsageExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="secretManagerConfig" /></td>
    <td><code>object</code></td>
    <td>Secret CSI driver configuration. (id: SecretManagerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPostureConfig" /></td>
    <td><code>object</code></td>
    <td>Enable/Disable Security Posture API features for the cluster. (id: SecurityPostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="servicesIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedNodes" /></td>
    <td><code>object</code></td>
    <td>Shielded Nodes configuration. (id: ShieldedNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [subnetwork](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/subnetworks) to which the cluster is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tpuIpv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="userManagedKeysConfig" /></td>
    <td><code>object</code></td>
    <td>The Custom keys configuration for the cluster. (id: UserManagedKeysConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="verticalPodAutoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level Vertical Pod Autoscaling configuration. (id: VerticalPodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. (id: WorkloadIdentityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_list">

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
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>A list of clusters in the project in the specified zone, or across all ones.</td>
</tr>
<tr>
    <td><CopyableCode code="missingZones" /></td>
    <td><code>array</code></td>
    <td>If any zones are listed here, the list of clusters returned may be missing those zones.</td>
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
    <td><a href="#projects_locations_clusters_get"><CopyableCode code="projects_locations_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td>Gets the details of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_get"><CopyableCode code="projects_zones_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets the details of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_list"><CopyableCode code="projects_locations_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td>Lists all clusters owned by a project in either the specified zone or all zones.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_list"><CopyableCode code="projects_zones_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Lists all clusters owned by a project in either the specified zone or all zones.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_create"><CopyableCode code="projects_locations_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_create"><CopyableCode code="projects_zones_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_update"><CopyableCode code="projects_locations_clusters_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Updates the settings of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_update"><CopyableCode code="projects_zones_clusters_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Updates the settings of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_delete"><CopyableCode code="projects_locations_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td>Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_delete"><CopyableCode code="projects_zones_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_logging"><CopyableCode code="projects_locations_clusters_set_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the logging service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_monitoring"><CopyableCode code="projects_locations_clusters_set_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the monitoring service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_addons"><CopyableCode code="projects_locations_clusters_set_addons" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the addons for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_locations"><CopyableCode code="projects_locations_clusters_set_locations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_update_master"><CopyableCode code="projects_locations_clusters_update_master" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Updates the master for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_master_auth"><CopyableCode code="projects_locations_clusters_set_master_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_resource_labels"><CopyableCode code="projects_locations_clusters_set_resource_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets labels on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_legacy_abac"><CopyableCode code="projects_locations_clusters_set_legacy_abac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Enables or disables the ABAC authorization mechanism on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_start_ip_rotation"><CopyableCode code="projects_locations_clusters_start_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Starts master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_complete_ip_rotation"><CopyableCode code="projects_locations_clusters_complete_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Completes master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_network_policy"><CopyableCode code="projects_locations_clusters_set_network_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Enables or disables Network Policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_maintenance_policy"><CopyableCode code="projects_locations_clusters_set_maintenance_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the maintenance policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_check_autopilot_compatibility"><CopyableCode code="projects_locations_clusters_check_autopilot_compatibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_logging"><CopyableCode code="projects_zones_clusters_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the logging service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_monitoring"><CopyableCode code="projects_zones_clusters_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the monitoring service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_addons"><CopyableCode code="projects_zones_clusters_addons" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the addons for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_locations"><CopyableCode code="projects_zones_clusters_locations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_master"><CopyableCode code="projects_zones_clusters_master" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Updates the master for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_set_master_auth"><CopyableCode code="projects_zones_clusters_set_master_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_resource_labels"><CopyableCode code="projects_zones_clusters_resource_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets labels on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_legacy_abac"><CopyableCode code="projects_zones_clusters_legacy_abac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Enables or disables the ABAC authorization mechanism on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_start_ip_rotation"><CopyableCode code="projects_zones_clusters_start_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Starts master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_complete_ip_rotation"><CopyableCode code="projects_zones_clusters_complete_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Completes master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_set_network_policy"><CopyableCode code="projects_zones_clusters_set_network_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Enables or disables Network Policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_set_maintenance_policy"><CopyableCode code="projects_zones_clusters_set_maintenance_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the maintenance policy for a cluster.</td>
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
    defaultValue="projects_locations_clusters_get"
    values={[
        { label: 'projects_locations_clusters_get', value: 'projects_locations_clusters_get' },
        { label: 'projects_zones_clusters_get', value: 'projects_zones_clusters_get' },
        { label: 'projects_locations_clusters_list', value: 'projects_locations_clusters_list' },
        { label: 'projects_zones_clusters_list', value: 'projects_zones_clusters_list' }
    ]}
>
<TabItem value="projects_locations_clusters_get">

Gets the details of a specific cluster.

```sql
SELECT
id,
name,
addonsConfig,
alphaClusterFeatureGates,
anonymousAuthenticationConfig,
authenticatorGroupsConfig,
autopilot,
autoscaling,
binaryAuthorization,
clusterIpv4Cidr,
compliancePostureConfig,
conditions,
confidentialNodes,
controlPlaneEndpointsConfig,
costManagementConfig,
createTime,
currentMasterVersion,
currentNodeCount,
currentNodeVersion,
databaseEncryption,
defaultMaxPodsConstraint,
description,
enableK8sBetaApis,
enableKubernetesAlpha,
enableTpu,
endpoint,
enterpriseConfig,
etag,
expireTime,
fleet,
gkeAutoUpgradeConfig,
identityServiceConfig,
initialClusterVersion,
initialNodeCount,
instanceGroupUrls,
ipAllocationPolicy,
labelFingerprint,
legacyAbac,
location,
locations,
loggingConfig,
loggingService,
maintenancePolicy,
masterAuth,
masterAuthorizedNetworksConfig,
meshCertificates,
monitoringConfig,
monitoringService,
network,
networkConfig,
networkPolicy,
nodeConfig,
nodeIpv4CidrSize,
nodePoolAutoConfig,
nodePoolDefaults,
nodePools,
notificationConfig,
parentProductConfig,
podAutoscaling,
privateClusterConfig,
rbacBindingConfig,
releaseChannel,
resourceLabels,
resourceUsageExportConfig,
satisfiesPzi,
satisfiesPzs,
secretManagerConfig,
securityPostureConfig,
selfLink,
servicesIpv4Cidr,
shieldedNodes,
status,
statusMessage,
subnetwork,
tpuIpv4CidrBlock,
userManagedKeysConfig,
verticalPodAutoscaling,
workloadIdentityConfig,
zone
FROM google.container.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
AND clusterId = '{{ clusterId }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_get">

Gets the details of a specific cluster.

```sql
SELECT
id,
name,
addonsConfig,
alphaClusterFeatureGates,
anonymousAuthenticationConfig,
authenticatorGroupsConfig,
autopilot,
autoscaling,
binaryAuthorization,
clusterIpv4Cidr,
compliancePostureConfig,
conditions,
confidentialNodes,
controlPlaneEndpointsConfig,
costManagementConfig,
createTime,
currentMasterVersion,
currentNodeCount,
currentNodeVersion,
databaseEncryption,
defaultMaxPodsConstraint,
description,
enableK8sBetaApis,
enableKubernetesAlpha,
enableTpu,
endpoint,
enterpriseConfig,
etag,
expireTime,
fleet,
gkeAutoUpgradeConfig,
identityServiceConfig,
initialClusterVersion,
initialNodeCount,
instanceGroupUrls,
ipAllocationPolicy,
labelFingerprint,
legacyAbac,
location,
locations,
loggingConfig,
loggingService,
maintenancePolicy,
masterAuth,
masterAuthorizedNetworksConfig,
meshCertificates,
monitoringConfig,
monitoringService,
network,
networkConfig,
networkPolicy,
nodeConfig,
nodeIpv4CidrSize,
nodePoolAutoConfig,
nodePoolDefaults,
nodePools,
notificationConfig,
parentProductConfig,
podAutoscaling,
privateClusterConfig,
rbacBindingConfig,
releaseChannel,
resourceLabels,
resourceUsageExportConfig,
satisfiesPzi,
satisfiesPzs,
secretManagerConfig,
securityPostureConfig,
selfLink,
servicesIpv4Cidr,
shieldedNodes,
status,
statusMessage,
subnetwork,
tpuIpv4CidrBlock,
userManagedKeysConfig,
verticalPodAutoscaling,
workloadIdentityConfig,
zone
FROM google.container.clusters
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND clusterId = '{{ clusterId }}' -- required
AND name = '{{ name }}';
```
</TabItem>
<TabItem value="projects_locations_clusters_list">

Lists all clusters owned by a project in either the specified zone or all zones.

```sql
SELECT
id,
name,
addonsConfig,
alphaClusterFeatureGates,
anonymousAuthenticationConfig,
authenticatorGroupsConfig,
autopilot,
autoscaling,
binaryAuthorization,
clusterIpv4Cidr,
compliancePostureConfig,
conditions,
confidentialNodes,
controlPlaneEndpointsConfig,
costManagementConfig,
createTime,
currentMasterVersion,
currentNodeCount,
currentNodeVersion,
databaseEncryption,
defaultMaxPodsConstraint,
description,
enableK8sBetaApis,
enableKubernetesAlpha,
enableTpu,
endpoint,
enterpriseConfig,
etag,
expireTime,
fleet,
gkeAutoUpgradeConfig,
identityServiceConfig,
initialClusterVersion,
initialNodeCount,
instanceGroupUrls,
ipAllocationPolicy,
labelFingerprint,
legacyAbac,
location,
locations,
loggingConfig,
loggingService,
maintenancePolicy,
masterAuth,
masterAuthorizedNetworksConfig,
meshCertificates,
monitoringConfig,
monitoringService,
network,
networkConfig,
networkPolicy,
nodeConfig,
nodeIpv4CidrSize,
nodePoolAutoConfig,
nodePoolDefaults,
nodePools,
notificationConfig,
parentProductConfig,
podAutoscaling,
privateClusterConfig,
rbacBindingConfig,
releaseChannel,
resourceLabels,
resourceUsageExportConfig,
satisfiesPzi,
satisfiesPzs,
secretManagerConfig,
securityPostureConfig,
selfLink,
servicesIpv4Cidr,
shieldedNodes,
status,
statusMessage,
subnetwork,
tpuIpv4CidrBlock,
userManagedKeysConfig,
verticalPodAutoscaling,
workloadIdentityConfig,
zone
FROM google.container.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_list">

Lists all clusters owned by a project in either the specified zone or all zones.

```sql
SELECT
clusters,
missingZones
FROM google.container.clusters
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND parent = '{{ parent }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_clusters_create"
    values={[
        { label: 'projects_locations_clusters_create', value: 'projects_locations_clusters_create' },
        { label: 'projects_zones_clusters_create', value: 'projects_zones_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_clusters_create">

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

```sql
INSERT INTO google.container.clusters (
data__projectId,
data__zone,
data__cluster,
data__parent,
projectsId,
locationsId
)
SELECT 
'{{ projectId }}',
'{{ zone }}',
'{{ cluster }}',
'{{ parent }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
<TabItem value="projects_zones_clusters_create">

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

```sql
INSERT INTO google.container.clusters (
data__projectId,
data__zone,
data__cluster,
data__parent,
projectId,
zone
)
SELECT 
'{{ projectId }}',
'{{ zone }}',
'{{ cluster }}',
'{{ parent }}',
'{{ projectId }}',
'{{ zone }}'
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
- name: clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the clusters resource.
    - name: projectId
      value: string
      description: Required parameter for the clusters resource.
    - name: zone
      value: string
      description: Required parameter for the clusters resource.
    - name: projectId
      value: string
      description: >
        Deprecated. The Google Developers Console [project ID or project number](https://{$universe.dns_names.final_documentation_domain}/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
        
    - name: zone
      value: string
      description: >
        Deprecated. The name of the Google Compute Engine [zone](https://{$universe.dns_names.final_documentation_domain}/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
        
    - name: cluster
      value: object
      description: >
        A Google Kubernetes Engine cluster.
        
    - name: parent
      value: string
      description: >
        The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_clusters_update"
    values={[
        { label: 'projects_locations_clusters_update', value: 'projects_locations_clusters_update' },
        { label: 'projects_zones_clusters_update', value: 'projects_zones_clusters_update' }
    ]}
>
<TabItem value="projects_locations_clusters_update">

Updates the settings of a specific cluster.

```sql
REPLACE google.container.clusters
SET 
data__projectId = '{{ projectId }}',
data__zone = '{{ zone }}',
data__clusterId = '{{ clusterId }}',
data__update = '{{ update }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
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
<TabItem value="projects_zones_clusters_update">

Updates the settings of a specific cluster.

```sql
REPLACE google.container.clusters
SET 
data__projectId = '{{ projectId }}',
data__zone = '{{ zone }}',
data__clusterId = '{{ clusterId }}',
data__update = '{{ update }}',
data__name = '{{ name }}'
WHERE 
projectId = '{{ projectId }}' --required
AND zone = '{{ zone }}' --required
AND clusterId = '{{ clusterId }}' --required
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
    defaultValue="projects_locations_clusters_delete"
    values={[
        { label: 'projects_locations_clusters_delete', value: 'projects_locations_clusters_delete' },
        { label: 'projects_zones_clusters_delete', value: 'projects_zones_clusters_delete' }
    ]}
>
<TabItem value="projects_locations_clusters_delete">

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

```sql
DELETE FROM google.container.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
AND clusterId = '{{ clusterId }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_delete">

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

```sql
DELETE FROM google.container.clusters
WHERE projectId = '{{ projectId }}' --required
AND zone = '{{ zone }}' --required
AND clusterId = '{{ clusterId }}' --required
AND name = '{{ name }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_clusters_set_logging"
    values={[
        { label: 'projects_locations_clusters_set_logging', value: 'projects_locations_clusters_set_logging' },
        { label: 'projects_locations_clusters_set_monitoring', value: 'projects_locations_clusters_set_monitoring' },
        { label: 'projects_locations_clusters_set_addons', value: 'projects_locations_clusters_set_addons' },
        { label: 'projects_locations_clusters_set_locations', value: 'projects_locations_clusters_set_locations' },
        { label: 'projects_locations_clusters_update_master', value: 'projects_locations_clusters_update_master' },
        { label: 'projects_locations_clusters_set_master_auth', value: 'projects_locations_clusters_set_master_auth' },
        { label: 'projects_locations_clusters_set_resource_labels', value: 'projects_locations_clusters_set_resource_labels' },
        { label: 'projects_locations_clusters_set_legacy_abac', value: 'projects_locations_clusters_set_legacy_abac' },
        { label: 'projects_locations_clusters_start_ip_rotation', value: 'projects_locations_clusters_start_ip_rotation' },
        { label: 'projects_locations_clusters_complete_ip_rotation', value: 'projects_locations_clusters_complete_ip_rotation' },
        { label: 'projects_locations_clusters_set_network_policy', value: 'projects_locations_clusters_set_network_policy' },
        { label: 'projects_locations_clusters_set_maintenance_policy', value: 'projects_locations_clusters_set_maintenance_policy' },
        { label: 'projects_locations_clusters_check_autopilot_compatibility', value: 'projects_locations_clusters_check_autopilot_compatibility' },
        { label: 'projects_zones_clusters_logging', value: 'projects_zones_clusters_logging' },
        { label: 'projects_zones_clusters_monitoring', value: 'projects_zones_clusters_monitoring' },
        { label: 'projects_zones_clusters_addons', value: 'projects_zones_clusters_addons' },
        { label: 'projects_zones_clusters_locations', value: 'projects_zones_clusters_locations' },
        { label: 'projects_zones_clusters_master', value: 'projects_zones_clusters_master' },
        { label: 'projects_zones_clusters_set_master_auth', value: 'projects_zones_clusters_set_master_auth' },
        { label: 'projects_zones_clusters_resource_labels', value: 'projects_zones_clusters_resource_labels' },
        { label: 'projects_zones_clusters_legacy_abac', value: 'projects_zones_clusters_legacy_abac' },
        { label: 'projects_zones_clusters_start_ip_rotation', value: 'projects_zones_clusters_start_ip_rotation' },
        { label: 'projects_zones_clusters_complete_ip_rotation', value: 'projects_zones_clusters_complete_ip_rotation' },
        { label: 'projects_zones_clusters_set_network_policy', value: 'projects_zones_clusters_set_network_policy' },
        { label: 'projects_zones_clusters_set_maintenance_policy', value: 'projects_zones_clusters_set_maintenance_policy' }
    ]}
>
<TabItem value="projects_locations_clusters_set_logging">

Sets the logging service for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_logging 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"loggingService": "{{ loggingService }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_monitoring">

Sets the monitoring service for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_monitoring 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"monitoringService": "{{ monitoringService }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_addons">

Sets the addons for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_addons 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"addonsConfig": "{{ addonsConfig }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_locations">

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_locations 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"locations": "{{ locations }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_update_master">

Updates the master for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_update_master 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"masterVersion": "{{ masterVersion }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_master_auth">

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_master_auth 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"action": "{{ action }}", 
"update": "{{ update }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_resource_labels">

Sets labels on a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_resource_labels 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"resourceLabels": "{{ resourceLabels }}", 
"labelFingerprint": "{{ labelFingerprint }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_legacy_abac">

Enables or disables the ABAC authorization mechanism on a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_legacy_abac 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"enabled": {{ enabled }}, 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_start_ip_rotation">

Starts master IP rotation.

```sql
EXEC google.container.clusters.projects_locations_clusters_start_ip_rotation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"rotateCredentials": {{ rotateCredentials }}
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_complete_ip_rotation">

Completes master IP rotation.

```sql
EXEC google.container.clusters.projects_locations_clusters_complete_ip_rotation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_network_policy">

Enables or disables Network Policy for a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_network_policy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"networkPolicy": "{{ networkPolicy }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_set_maintenance_policy">

Sets the maintenance policy for a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_maintenance_policy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"maintenancePolicy": "{{ maintenancePolicy }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_locations_clusters_check_autopilot_compatibility">

Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.

```sql
EXEC google.container.clusters.projects_locations_clusters_check_autopilot_compatibility 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required;
```
</TabItem>
<TabItem value="projects_zones_clusters_logging">

Sets the logging service for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_logging 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"loggingService": "{{ loggingService }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_monitoring">

Sets the monitoring service for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_monitoring 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"monitoringService": "{{ monitoringService }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_addons">

Sets the addons for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_addons 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"addonsConfig": "{{ addonsConfig }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_locations">

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://&#123;$universe.dns_names.final_documentation_domain&#125;/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

```sql
EXEC google.container.clusters.projects_zones_clusters_locations 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"locations": "{{ locations }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_master">

Updates the master for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_master 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"masterVersion": "{{ masterVersion }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_set_master_auth">

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

```sql
EXEC google.container.clusters.projects_zones_clusters_set_master_auth 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"action": "{{ action }}", 
"update": "{{ update }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_resource_labels">

Sets labels on a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_resource_labels 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"resourceLabels": "{{ resourceLabels }}", 
"labelFingerprint": "{{ labelFingerprint }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_legacy_abac">

Enables or disables the ABAC authorization mechanism on a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_legacy_abac 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"enabled": {{ enabled }}, 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_start_ip_rotation">

Starts master IP rotation.

```sql
EXEC google.container.clusters.projects_zones_clusters_start_ip_rotation 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"rotateCredentials": {{ rotateCredentials }}
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_complete_ip_rotation">

Completes master IP rotation.

```sql
EXEC google.container.clusters.projects_zones_clusters_complete_ip_rotation 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_set_network_policy">

Enables or disables Network Policy for a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_set_network_policy 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"networkPolicy": "{{ networkPolicy }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_clusters_set_maintenance_policy">

Sets the maintenance policy for a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_set_maintenance_policy 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"clusterId": "{{ clusterId }}", 
"maintenancePolicy": "{{ maintenancePolicy }}", 
"name": "{{ name }}"
}';
```
</TabItem>
</Tabs>
