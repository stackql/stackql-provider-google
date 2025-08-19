--- 
title: bare_metal_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - bare_metal_clusters
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

Creates, updates, deletes, gets or lists a <code>bare_metal_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bare_metal_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkeonprem.bare_metal_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_get"
    values={[
        { label: 'projects_locations_bare_metal_clusters_get', value: 'projects_locations_bare_metal_clusters_get' },
        { label: 'projects_locations_bare_metal_clusters_list', value: 'projects_locations_bare_metal_clusters_list' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_get">

Resource that represents a bare metal user cluster.

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
    <td>Immutable. The bare metal user cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="adminClusterMembership" /></td>
    <td><code>string</code></td>
    <td>Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership.</td>
</tr>
<tr>
    <td><CopyableCode code="adminClusterName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the bare metal admin cluster managing this user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="bareMetalVersion" /></td>
    <td><code>string</code></td>
    <td>Required. The Anthos clusters on bare metal version for your user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Binary Authorization related configurations. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterOperations" /></td>
    <td><code>object</code></td>
    <td>Cluster operations configuration. (id: BareMetalClusterOperationsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlane" /></td>
    <td><code>object</code></td>
    <td>Required. Control plane configuration. (id: BareMetalControlPlaneConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the bare metal user cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the bare metal user cluster was deleted. If the resource is not deleted, this must be empty</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this bare metal user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of the bare metal user cluster's API server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Output only. Fleet configuration for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>Required. Load balancer configuration. (id: BareMetalLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the bare metal user cluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the name in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. When the local name and cluster name differ, the local name is used in the admin cluster controller logs. You use the cluster name when accessing the cluster using bmctl and kubectl.</td>
</tr>
<tr>
    <td><CopyableCode code="localNamespace" /></td>
    <td><code>string</code></td>
    <td>Output only. The namespace of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceConfig" /></td>
    <td><code>object</code></td>
    <td>Maintenance configuration. (id: BareMetalMaintenanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of on-going maintenance tasks. (id: BareMetalMaintenanceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Network configuration. (id: BareMetalNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeAccessConfig" /></td>
    <td><code>object</code></td>
    <td>Node access related configurations. (id: BareMetalNodeAccessConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Workload node configuration. (id: BareMetalWorkloadNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="osEnvironmentConfig" /></td>
    <td><code>object</code></td>
    <td>OS environment related configurations. (id: BareMetalOsEnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy" /></td>
    <td><code>object</code></td>
    <td>Proxy configuration. (id: BareMetalProxyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the bare metal user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="securityConfig" /></td>
    <td><code>object</code></td>
    <td>Security related setting configuration. (id: BareMetalSecurityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the bare metal user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Detailed cluster status. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Required. Storage configuration. (id: BareMetalStorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the bare metal user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the bare metal user cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradePolicy" /></td>
    <td><code>object</code></td>
    <td>The cluster upgrade policy. (id: BareMetalClusterUpgradePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of the preflight check. (id: ValidationCheck)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_list">

Response message for listing bare metal Clusters.

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
    <td><CopyableCode code="bareMetalClusters" /></td>
    <td><code>array</code></td>
    <td>The list of bare metal Clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token.</td>
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
    <td><a href="#projects_locations_bare_metal_clusters_get"><CopyableCode code="projects_locations_bare_metal_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Gets details of a single bare metal Cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_list"><CopyableCode code="projects_locations_bare_metal_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Lists bare metal clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_create"><CopyableCode code="projects_locations_bare_metal_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bareMetalClusterId"><code>bareMetalClusterId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowPreflightFailure"><code>allowPreflightFailure</code></a></td>
    <td>Creates a new bare metal cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_patch"><CopyableCode code="projects_locations_bare_metal_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single bare metal Cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_delete"><CopyableCode code="projects_locations_bare_metal_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-ignoreErrors"><code>ignoreErrors</code></a></td>
    <td>Deletes a single bare metal Cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_enroll"><CopyableCode code="projects_locations_bare_metal_clusters_enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_unenroll"><CopyableCode code="projects_locations_bare_metal_clusters_unenroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Unenrolls an existing bare metal user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_query_version_config"><CopyableCode code="projects_locations_bare_metal_clusters_query_version_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-createConfig.adminClusterMembership"><code>createConfig.adminClusterMembership</code></a>, <a href="#parameter-createConfig.adminClusterName"><code>createConfig.adminClusterName</code></a>, <a href="#parameter-upgradeConfig.clusterName"><code>upgradeConfig.clusterName</code></a></td>
    <td>Queries the bare metal user cluster version config.</td>
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
<tr id="parameter-bareMetalClustersId">
    <td><CopyableCode code="bareMetalClustersId" /></td>
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
<tr id="parameter-bareMetalClusterId">
    <td><CopyableCode code="bareMetalClusterId" /></td>
    <td><code>string</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_get"
    values={[
        { label: 'projects_locations_bare_metal_clusters_get', value: 'projects_locations_bare_metal_clusters_get' },
        { label: 'projects_locations_bare_metal_clusters_list', value: 'projects_locations_bare_metal_clusters_list' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_get">

Gets details of a single bare metal Cluster.

```sql
SELECT
name,
adminClusterMembership,
adminClusterName,
annotations,
bareMetalVersion,
binaryAuthorization,
clusterOperations,
controlPlane,
createTime,
deleteTime,
description,
endpoint,
etag,
fleet,
loadBalancer,
localName,
localNamespace,
maintenanceConfig,
maintenanceStatus,
networkConfig,
nodeAccessConfig,
nodeConfig,
osEnvironmentConfig,
proxy,
reconciling,
securityConfig,
state,
status,
storage,
uid,
updateTime,
upgradePolicy,
validationCheck
FROM google.gkeonprem.bare_metal_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' -- required
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_list">

Lists bare metal clusters in a given project and location.

```sql
SELECT
bareMetalClusters,
nextPageToken,
unreachable
FROM google.gkeonprem.bare_metal_clusters
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
    defaultValue="projects_locations_bare_metal_clusters_create"
    values={[
        { label: 'projects_locations_bare_metal_clusters_create', value: 'projects_locations_bare_metal_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_create">

Creates a new bare metal cluster in a given project and location.

```sql
INSERT INTO google.gkeonprem.bare_metal_clusters (
data__name,
data__adminClusterMembership,
data__description,
data__bareMetalVersion,
data__annotations,
data__networkConfig,
data__controlPlane,
data__loadBalancer,
data__storage,
data__proxy,
data__clusterOperations,
data__maintenanceConfig,
data__nodeConfig,
data__securityConfig,
data__nodeAccessConfig,
data__osEnvironmentConfig,
data__binaryAuthorization,
data__upgradePolicy,
projectsId,
locationsId,
bareMetalClusterId,
validateOnly,
allowPreflightFailure
)
SELECT 
'{{ name }}',
'{{ adminClusterMembership }}',
'{{ description }}',
'{{ bareMetalVersion }}',
'{{ annotations }}',
'{{ networkConfig }}',
'{{ controlPlane }}',
'{{ loadBalancer }}',
'{{ storage }}',
'{{ proxy }}',
'{{ clusterOperations }}',
'{{ maintenanceConfig }}',
'{{ nodeConfig }}',
'{{ securityConfig }}',
'{{ nodeAccessConfig }}',
'{{ osEnvironmentConfig }}',
'{{ binaryAuthorization }}',
'{{ upgradePolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bareMetalClusterId }}',
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
- name: bare_metal_clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the bare_metal_clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the bare_metal_clusters resource.
    - name: name
      value: string
      description: >
        Immutable. The bare metal user cluster resource name.
        
    - name: adminClusterMembership
      value: string
      description: >
        Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership.
        
    - name: description
      value: string
      description: >
        A human readable description of this bare metal user cluster.
        
    - name: bareMetalVersion
      value: string
      description: >
        Required. The Anthos clusters on bare metal version for your user cluster.
        
    - name: annotations
      value: object
      description: >
        Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
        
    - name: networkConfig
      value: object
      description: >
        Required. Network configuration.
        
    - name: controlPlane
      value: object
      description: >
        Required. Control plane configuration.
        
    - name: loadBalancer
      value: object
      description: >
        Required. Load balancer configuration.
        
    - name: storage
      value: object
      description: >
        Required. Storage configuration.
        
    - name: proxy
      value: object
      description: >
        Proxy configuration.
        
    - name: clusterOperations
      value: object
      description: >
        Cluster operations configuration.
        
    - name: maintenanceConfig
      value: object
      description: >
        Maintenance configuration.
        
    - name: nodeConfig
      value: object
      description: >
        Workload node configuration.
        
    - name: securityConfig
      value: object
      description: >
        Security related setting configuration.
        
    - name: nodeAccessConfig
      value: object
      description: >
        Node access related configurations.
        
    - name: osEnvironmentConfig
      value: object
      description: >
        OS environment related configurations.
        
    - name: binaryAuthorization
      value: object
      description: >
        Binary Authorization related configurations.
        
    - name: upgradePolicy
      value: object
      description: >
        The cluster upgrade policy.
        
    - name: bareMetalClusterId
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
    defaultValue="projects_locations_bare_metal_clusters_patch"
    values={[
        { label: 'projects_locations_bare_metal_clusters_patch', value: 'projects_locations_bare_metal_clusters_patch' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_patch">

Updates the parameters of a single bare metal Cluster.

```sql
UPDATE google.gkeonprem.bare_metal_clusters
SET 
data__name = '{{ name }}',
data__adminClusterMembership = '{{ adminClusterMembership }}',
data__description = '{{ description }}',
data__bareMetalVersion = '{{ bareMetalVersion }}',
data__annotations = '{{ annotations }}',
data__networkConfig = '{{ networkConfig }}',
data__controlPlane = '{{ controlPlane }}',
data__loadBalancer = '{{ loadBalancer }}',
data__storage = '{{ storage }}',
data__proxy = '{{ proxy }}',
data__clusterOperations = '{{ clusterOperations }}',
data__maintenanceConfig = '{{ maintenanceConfig }}',
data__nodeConfig = '{{ nodeConfig }}',
data__securityConfig = '{{ securityConfig }}',
data__nodeAccessConfig = '{{ nodeAccessConfig }}',
data__osEnvironmentConfig = '{{ osEnvironmentConfig }}',
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__upgradePolicy = '{{ upgradePolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
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
    defaultValue="projects_locations_bare_metal_clusters_delete"
    values={[
        { label: 'projects_locations_bare_metal_clusters_delete', value: 'projects_locations_bare_metal_clusters_delete' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_delete">

Deletes a single bare metal Cluster.

```sql
DELETE FROM google.gkeonprem.bare_metal_clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' --required
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
    defaultValue="projects_locations_bare_metal_clusters_enroll"
    values={[
        { label: 'projects_locations_bare_metal_clusters_enroll', value: 'projects_locations_bare_metal_clusters_enroll' },
        { label: 'projects_locations_bare_metal_clusters_unenroll', value: 'projects_locations_bare_metal_clusters_unenroll' },
        { label: 'projects_locations_bare_metal_clusters_query_version_config', value: 'projects_locations_bare_metal_clusters_query_version_config' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_enroll">

Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

```sql
EXEC google.gkeonprem.bare_metal_clusters.projects_locations_bare_metal_clusters_enroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"bareMetalClusterId": "{{ bareMetalClusterId }}", 
"localName": "{{ localName }}", 
"adminClusterMembership": "{{ adminClusterMembership }}", 
"localNamespace": "{{ localNamespace }}"
}';
```
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_unenroll">

Unenrolls an existing bare metal user cluster and its node pools from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters and node pools will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.

```sql
EXEC google.gkeonprem.bare_metal_clusters.projects_locations_bare_metal_clusters_unenroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bareMetalClustersId='{{ bareMetalClustersId }}' --required, 
@etag='{{ etag }}', 
@allowMissing={{ allowMissing }}, 
@validateOnly={{ validateOnly }}, 
@force={{ force }};
```
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_query_version_config">

Queries the bare metal user cluster version config.

```sql
EXEC google.gkeonprem.bare_metal_clusters.projects_locations_bare_metal_clusters_query_version_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@createConfig.adminClusterMembership='{{ createConfig.adminClusterMembership }}', 
@createConfig.adminClusterName='{{ createConfig.adminClusterName }}', 
@upgradeConfig.clusterName='{{ upgradeConfig.clusterName }}';
```
</TabItem>
</Tabs>
