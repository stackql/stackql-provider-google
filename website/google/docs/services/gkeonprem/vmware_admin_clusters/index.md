--- 
title: vmware_admin_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - vmware_admin_clusters
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

Creates, updates, deletes, gets or lists a <code>vmware_admin_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vmware_admin_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkeonprem.vmware_admin_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_get"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_get', value: 'projects_locations_vmware_admin_clusters_get' },
        { label: 'projects_locations_vmware_admin_clusters_list', value: 'projects_locations_vmware_admin_clusters_list' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_get">

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
    <td>Immutable. The VMware admin cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="addonNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster addon node configuration. (id: VmwareAdminAddonNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="antiAffinityGroups" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster anti affinity group configuration. (id: VmwareAAGConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster authorization configuration. (id: VmwareAdminAuthorizationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRepairConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster auto repair configuration. (id: VmwareAutoRepairConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bootstrapClusterMembership" /></td>
    <td><code>string</code></td>
    <td>The bootstrap cluster this VMware admin cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster control plane node configuration. (id: VmwareAdminControlPlaneNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAdvancedCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable advanced cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The DNS name of VMware admin cluster's API server.</td>
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
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>The OS image type for the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster load balancer configuration. (id: VmwareAdminLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster network configuration. (id: VmwareAdminNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="onPremVersion" /></td>
    <td><code>string</code></td>
    <td>The Anthos clusters on the VMware version for the admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="platformConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware platform configuration. (id: VmwarePlatformConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preparedSecrets" /></td>
    <td><code>object</code></td>
    <td>Output only. The VMware admin cluster prepared secrets configuration. It should always be enabled by the Central API, instead of letting users set it. (id: VmwareAdminPreparedSecretsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateRegistryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for registry. (id: VmwareAdminPrivateRegistryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster state. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck represents the result of the preflight check job. (id: ValidationCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster VCenter configuration. (id: VmwareAdminVCenterConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_vmware_admin_clusters_list">

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
    <td>Immutable. The VMware admin cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="addonNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster addon node configuration. (id: VmwareAdminAddonNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="antiAffinityGroups" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster anti affinity group configuration. (id: VmwareAAGConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster authorization configuration. (id: VmwareAdminAuthorizationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRepairConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster auto repair configuration. (id: VmwareAutoRepairConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bootstrapClusterMembership" /></td>
    <td><code>string</code></td>
    <td>The bootstrap cluster this VMware admin cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster control plane node configuration. (id: VmwareAdminControlPlaneNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAdvancedCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable advanced cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The DNS name of VMware admin cluster's API server.</td>
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
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>The OS image type for the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster load balancer configuration. (id: VmwareAdminLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster network configuration. (id: VmwareAdminNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="onPremVersion" /></td>
    <td><code>string</code></td>
    <td>The Anthos clusters on the VMware version for the admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="platformConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware platform configuration. (id: VmwarePlatformConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preparedSecrets" /></td>
    <td><code>object</code></td>
    <td>Output only. The VMware admin cluster prepared secrets configuration. It should always be enabled by the Central API, instead of letting users set it. (id: VmwareAdminPreparedSecretsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateRegistryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for registry. (id: VmwareAdminPrivateRegistryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster state. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck represents the result of the preflight check job. (id: ValidationCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster VCenter configuration. (id: VmwareAdminVCenterConfig)</td>
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
    <td><a href="#projects_locations_vmware_admin_clusters_get"><CopyableCode code="projects_locations_vmware_admin_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareAdminClustersId"><code>vmwareAdminClustersId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Gets details of a single VMware admin cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_list"><CopyableCode code="projects_locations_vmware_admin_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Lists VMware admin clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_create"><CopyableCode code="projects_locations_vmware_admin_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-vmwareAdminClusterId"><code>vmwareAdminClusterId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowPreflightFailure"><code>allowPreflightFailure</code></a></td>
    <td>Creates a new VMware admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_patch"><CopyableCode code="projects_locations_vmware_admin_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareAdminClustersId"><code>vmwareAdminClustersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single VMware admin cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_enroll"><CopyableCode code="projects_locations_vmware_admin_clusters_enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_unenroll"><CopyableCode code="projects_locations_vmware_admin_clusters_unenroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareAdminClustersId"><code>vmwareAdminClustersId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-ignoreErrors"><code>ignoreErrors</code></a></td>
    <td>Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.</td>
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
<tr id="parameter-vmwareAdminClustersId">
    <td><CopyableCode code="vmwareAdminClustersId" /></td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-vmwareAdminClusterId">
    <td><CopyableCode code="vmwareAdminClusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_get"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_get', value: 'projects_locations_vmware_admin_clusters_get' },
        { label: 'projects_locations_vmware_admin_clusters_list', value: 'projects_locations_vmware_admin_clusters_list' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_get">

Gets details of a single VMware admin cluster.

```sql
SELECT
name,
addonNode,
annotations,
antiAffinityGroups,
authorization,
autoRepairConfig,
bootstrapClusterMembership,
controlPlaneNode,
createTime,
description,
enableAdvancedCluster,
endpoint,
etag,
fleet,
imageType,
loadBalancer,
localName,
networkConfig,
onPremVersion,
platformConfig,
preparedSecrets,
privateRegistryConfig,
reconciling,
state,
status,
uid,
updateTime,
validationCheck,
vcenter
FROM google.gkeonprem.vmware_admin_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND vmwareAdminClustersId = '{{ vmwareAdminClustersId }}' -- required
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
<TabItem value="projects_locations_vmware_admin_clusters_list">

Lists VMware admin clusters in a given project and location.

```sql
SELECT
name,
addonNode,
annotations,
antiAffinityGroups,
authorization,
autoRepairConfig,
bootstrapClusterMembership,
controlPlaneNode,
createTime,
description,
enableAdvancedCluster,
endpoint,
etag,
fleet,
imageType,
loadBalancer,
localName,
networkConfig,
onPremVersion,
platformConfig,
preparedSecrets,
privateRegistryConfig,
reconciling,
state,
status,
uid,
updateTime,
validationCheck,
vcenter
FROM google.gkeonprem.vmware_admin_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_create"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_create', value: 'projects_locations_vmware_admin_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_create">

Creates a new VMware admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work.

```sql
INSERT INTO google.gkeonprem.vmware_admin_clusters (
data__name,
data__description,
data__etag,
data__annotations,
data__bootstrapClusterMembership,
data__onPremVersion,
data__imageType,
data__vcenter,
data__networkConfig,
data__loadBalancer,
data__controlPlaneNode,
data__addonNode,
data__antiAffinityGroups,
data__autoRepairConfig,
data__platformConfig,
data__authorization,
data__enableAdvancedCluster,
data__privateRegistryConfig,
projectsId,
locationsId,
vmwareAdminClusterId,
validateOnly,
allowPreflightFailure
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ etag }}',
'{{ annotations }}',
'{{ bootstrapClusterMembership }}',
'{{ onPremVersion }}',
'{{ imageType }}',
'{{ vcenter }}',
'{{ networkConfig }}',
'{{ loadBalancer }}',
'{{ controlPlaneNode }}',
'{{ addonNode }}',
'{{ antiAffinityGroups }}',
'{{ autoRepairConfig }}',
'{{ platformConfig }}',
'{{ authorization }}',
{{ enableAdvancedCluster }},
'{{ privateRegistryConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ vmwareAdminClusterId }}',
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
- name: vmware_admin_clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the vmware_admin_clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the vmware_admin_clusters resource.
    - name: name
      value: string
      description: >
        Immutable. The VMware admin cluster resource name.
        
    - name: description
      value: string
      description: >
        A human readable description of this VMware admin cluster.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
        
    - name: annotations
      value: object
      description: >
        Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
        
    - name: bootstrapClusterMembership
      value: string
      description: >
        The bootstrap cluster this VMware admin cluster belongs to.
        
    - name: onPremVersion
      value: string
      description: >
        The Anthos clusters on the VMware version for the admin cluster.
        
    - name: imageType
      value: string
      description: >
        The OS image type for the VMware admin cluster.
        
    - name: vcenter
      value: object
      description: >
        The VMware admin cluster VCenter configuration.
        
    - name: networkConfig
      value: object
      description: >
        The VMware admin cluster network configuration.
        
    - name: loadBalancer
      value: object
      description: >
        The VMware admin cluster load balancer configuration.
        
    - name: controlPlaneNode
      value: object
      description: >
        The VMware admin cluster control plane node configuration.
        
    - name: addonNode
      value: object
      description: >
        The VMware admin cluster addon node configuration.
        
    - name: antiAffinityGroups
      value: object
      description: >
        The VMware admin cluster anti affinity group configuration.
        
    - name: autoRepairConfig
      value: object
      description: >
        The VMware admin cluster auto repair configuration.
        
    - name: platformConfig
      value: object
      description: >
        The VMware platform configuration.
        
    - name: authorization
      value: object
      description: >
        The VMware admin cluster authorization configuration.
        
    - name: enableAdvancedCluster
      value: boolean
      description: >
        Enable advanced cluster.
        
    - name: privateRegistryConfig
      value: object
      description: >
        Configuration for registry.
        
    - name: vmwareAdminClusterId
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
    defaultValue="projects_locations_vmware_admin_clusters_patch"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_patch', value: 'projects_locations_vmware_admin_clusters_patch' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_patch">

Updates the parameters of a single VMware admin cluster.

```sql
UPDATE google.gkeonprem.vmware_admin_clusters
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}',
data__bootstrapClusterMembership = '{{ bootstrapClusterMembership }}',
data__onPremVersion = '{{ onPremVersion }}',
data__imageType = '{{ imageType }}',
data__vcenter = '{{ vcenter }}',
data__networkConfig = '{{ networkConfig }}',
data__loadBalancer = '{{ loadBalancer }}',
data__controlPlaneNode = '{{ controlPlaneNode }}',
data__addonNode = '{{ addonNode }}',
data__antiAffinityGroups = '{{ antiAffinityGroups }}',
data__autoRepairConfig = '{{ autoRepairConfig }}',
data__platformConfig = '{{ platformConfig }}',
data__authorization = '{{ authorization }}',
data__enableAdvancedCluster = {{ enableAdvancedCluster }},
data__privateRegistryConfig = '{{ privateRegistryConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND vmwareAdminClustersId = '{{ vmwareAdminClustersId }}' --required
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


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_enroll"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_enroll', value: 'projects_locations_vmware_admin_clusters_enroll' },
        { label: 'projects_locations_vmware_admin_clusters_unenroll', value: 'projects_locations_vmware_admin_clusters_unenroll' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_enroll">

Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

```sql
EXEC google.gkeonprem.vmware_admin_clusters.projects_locations_vmware_admin_clusters_enroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"vmwareAdminClusterId": "{{ vmwareAdminClusterId }}", 
"membership": "{{ membership }}"
}';
```
</TabItem>
<TabItem value="projects_locations_vmware_admin_clusters_unenroll">

Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.

```sql
EXEC google.gkeonprem.vmware_admin_clusters.projects_locations_vmware_admin_clusters_unenroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@vmwareAdminClustersId='{{ vmwareAdminClustersId }}' --required, 
@etag='{{ etag }}', 
@allowMissing={{ allowMissing }}, 
@validateOnly={{ validateOnly }}, 
@ignoreErrors={{ ignoreErrors }};
```
</TabItem>
</Tabs>
