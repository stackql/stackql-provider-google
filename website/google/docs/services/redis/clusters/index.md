--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - redis
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.clusters" /></td></tr>
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
    <td>Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/clusters/&#123;cluster_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowFewerZonesDeployment" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable. Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones. Once set, if there is a zonal outage during the cluster creation, the cluster will only be deployed in 2 zones, and stay within the 2 zones for its lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="asyncClusterEndpointsDeletionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The automated backup config for the cluster. (id: AutomatedBackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="backupCollection" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The backup collection full resource name. Example: projects/&#123;project&#125;/locations/&#123;location&#125;/backupCollections/&#123;collection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="clusterEndpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of cluster endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp associated with the cluster creation request.</td>
</tr>
<tr>
    <td><CopyableCode code="crossClusterReplicationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Cross cluster replication config. (id: CrossClusterReplicationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. The delete operation will fail when the value is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Encryption information of the data at rest of the cluster. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects. (id: GcsBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The KMS key used to encrypt the at-rest data of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. ClusterMaintenancePolicy determines when to allow or deny updates. (id: ClusterMaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. ClusterMaintenanceSchedule Output only Published maintenance schedule. (id: ClusterMaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="managedBackupSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups generated and managed by memorystore service. (id: ManagedBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node.</td>
</tr>
<tr>
    <td><CopyableCode code="ondemandMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistence config (RDB, AOF) for the cluster. (id: ClusterPersistenceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preciseSizeGb" /></td>
    <td><code>number (double)</code></td>
    <td>Output only. Precise value of redis memory size in GB for the entire cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of PSC connections that are auto-created through service connectivity automation.</td>
</tr>
<tr>
    <td><CopyableCode code="pscServiceAttachments" /></td>
    <td><code>array</code></td>
    <td>Output only. Service attachment details to configure Psc connections</td>
</tr>
<tr>
    <td><CopyableCode code="redisConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Key/Value pairs of customer overrides for mutable Redis Configs</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of replica nodes per shard.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Number of shards for the Redis cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="simulateMaintenanceEvent" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Simulate a maintenance event.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Redis memory size in GB for the entire cluster rounded up to the next integer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about the current state of the cluster. (id: StateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System assigned, unique identifier for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zoneDistributionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region. (id: ZoneDistributionConfig)</td>
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
    <td>Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/clusters/&#123;cluster_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowFewerZonesDeployment" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable. Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones. Once set, if there is a zonal outage during the cluster creation, the cluster will only be deployed in 2 zones, and stay within the 2 zones for its lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="asyncClusterEndpointsDeletionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The automated backup config for the cluster. (id: AutomatedBackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="backupCollection" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The backup collection full resource name. Example: projects/&#123;project&#125;/locations/&#123;location&#125;/backupCollections/&#123;collection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="clusterEndpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of cluster endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp associated with the cluster creation request.</td>
</tr>
<tr>
    <td><CopyableCode code="crossClusterReplicationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Cross cluster replication config. (id: CrossClusterReplicationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. The delete operation will fail when the value is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Encryption information of the data at rest of the cluster. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects. (id: GcsBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The KMS key used to encrypt the at-rest data of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. ClusterMaintenancePolicy determines when to allow or deny updates. (id: ClusterMaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. ClusterMaintenanceSchedule Output only Published maintenance schedule. (id: ClusterMaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="managedBackupSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups generated and managed by memorystore service. (id: ManagedBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node.</td>
</tr>
<tr>
    <td><CopyableCode code="ondemandMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistence config (RDB, AOF) for the cluster. (id: ClusterPersistenceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preciseSizeGb" /></td>
    <td><code>number (double)</code></td>
    <td>Output only. Precise value of redis memory size in GB for the entire cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of PSC connections that are auto-created through service connectivity automation.</td>
</tr>
<tr>
    <td><CopyableCode code="pscServiceAttachments" /></td>
    <td><code>array</code></td>
    <td>Output only. Service attachment details to configure Psc connections</td>
</tr>
<tr>
    <td><CopyableCode code="redisConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Key/Value pairs of customer overrides for mutable Redis Configs</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of replica nodes per shard.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Number of shards for the Redis cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="simulateMaintenanceEvent" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Simulate a maintenance event.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Redis memory size in GB for the entire cluster rounded up to the next integer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about the current state of the cluster. (id: StateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System assigned, unique identifier for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zoneDistributionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region. (id: ZoneDistributionConfig)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets the details of a specific Redis cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a specific Redis cluster. Cluster stops serving and data is deleted.</td>
</tr>
<tr>
    <td><a href="#reschedule_cluster_maintenance"><CopyableCode code="reschedule_cluster_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Reschedules upcoming maintenance event.</td>
</tr>
<tr>
    <td><a href="#backup"><CopyableCode code="backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
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

Gets the details of a specific Redis cluster.

```sql
SELECT
name,
allowFewerZonesDeployment,
asyncClusterEndpointsDeletionEnabled,
authorizationMode,
automatedBackupConfig,
backupCollection,
clusterEndpoints,
createTime,
crossClusterReplicationConfig,
deletionProtectionEnabled,
discoveryEndpoints,
encryptionInfo,
gcsSource,
kmsKey,
maintenancePolicy,
maintenanceSchedule,
managedBackupSource,
nodeType,
ondemandMaintenance,
persistenceConfig,
preciseSizeGb,
pscConfigs,
pscConnections,
pscServiceAttachments,
redisConfigs,
replicaCount,
satisfiesPzi,
satisfiesPzs,
shardCount,
simulateMaintenanceEvent,
sizeGb,
state,
stateInfo,
transitEncryptionMode,
uid,
zoneDistributionConfig
FROM google.redis.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

```sql
SELECT
name,
allowFewerZonesDeployment,
asyncClusterEndpointsDeletionEnabled,
authorizationMode,
automatedBackupConfig,
backupCollection,
clusterEndpoints,
createTime,
crossClusterReplicationConfig,
deletionProtectionEnabled,
discoveryEndpoints,
encryptionInfo,
gcsSource,
kmsKey,
maintenancePolicy,
maintenanceSchedule,
managedBackupSource,
nodeType,
ondemandMaintenance,
persistenceConfig,
preciseSizeGb,
pscConfigs,
pscConnections,
pscServiceAttachments,
redisConfigs,
replicaCount,
satisfiesPzi,
satisfiesPzs,
shardCount,
simulateMaintenanceEvent,
sizeGb,
state,
stateInfo,
transitEncryptionMode,
uid,
zoneDistributionConfig
FROM google.redis.clusters
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

Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
INSERT INTO google.redis.clusters (
data__gcsSource,
data__managedBackupSource,
data__name,
data__replicaCount,
data__authorizationMode,
data__transitEncryptionMode,
data__shardCount,
data__pscConfigs,
data__nodeType,
data__persistenceConfig,
data__redisConfigs,
data__zoneDistributionConfig,
data__crossClusterReplicationConfig,
data__deletionProtectionEnabled,
data__maintenancePolicy,
data__clusterEndpoints,
data__simulateMaintenanceEvent,
data__kmsKey,
data__ondemandMaintenance,
data__automatedBackupConfig,
data__asyncClusterEndpointsDeletionEnabled,
data__allowFewerZonesDeployment,
projectsId,
locationsId,
clusterId,
requestId
)
SELECT 
'{{ gcsSource }}',
'{{ managedBackupSource }}',
'{{ name }}',
{{ replicaCount }},
'{{ authorizationMode }}',
'{{ transitEncryptionMode }}',
{{ shardCount }},
'{{ pscConfigs }}',
'{{ nodeType }}',
'{{ persistenceConfig }}',
'{{ redisConfigs }}',
'{{ zoneDistributionConfig }}',
'{{ crossClusterReplicationConfig }}',
{{ deletionProtectionEnabled }},
'{{ maintenancePolicy }}',
'{{ clusterEndpoints }}',
{{ simulateMaintenanceEvent }},
'{{ kmsKey }}',
{{ ondemandMaintenance }},
'{{ automatedBackupConfig }}',
{{ asyncClusterEndpointsDeletionEnabled }},
{{ allowFewerZonesDeployment }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clusterId }}',
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
- name: clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the clusters resource.
    - name: gcsSource
      value: object
      description: >
        Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects.
        
    - name: managedBackupSource
      value: object
      description: >
        Optional. Backups generated and managed by memorystore service.
        
    - name: name
      value: string
      description: >
        Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`
        
    - name: replicaCount
      value: integer
      description: >
        Optional. The number of replica nodes per shard.
        
    - name: authorizationMode
      value: string
      description: >
        Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.
        
      valid_values: ['AUTH_MODE_UNSPECIFIED', 'AUTH_MODE_IAM_AUTH', 'AUTH_MODE_DISABLED']
    - name: transitEncryptionMode
      value: string
      description: >
        Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster.
        
      valid_values: ['TRANSIT_ENCRYPTION_MODE_UNSPECIFIED', 'TRANSIT_ENCRYPTION_MODE_DISABLED', 'TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION']
    - name: shardCount
      value: integer
      description: >
        Optional. Number of shards for the Redis cluster.
        
    - name: pscConfigs
      value: array
      description: >
        Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.
        
    - name: nodeType
      value: string
      description: >
        Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node.
        
      valid_values: ['NODE_TYPE_UNSPECIFIED', 'REDIS_SHARED_CORE_NANO', 'REDIS_HIGHMEM_MEDIUM', 'REDIS_HIGHMEM_XLARGE', 'REDIS_STANDARD_SMALL']
    - name: persistenceConfig
      value: object
      description: >
        Optional. Persistence config (RDB, AOF) for the cluster.
        
    - name: redisConfigs
      value: object
      description: >
        Optional. Key/Value pairs of customer overrides for mutable Redis Configs
        
    - name: zoneDistributionConfig
      value: object
      description: >
        Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region.
        
    - name: crossClusterReplicationConfig
      value: object
      description: >
        Optional. Cross cluster replication config.
        
    - name: deletionProtectionEnabled
      value: boolean
      description: >
        Optional. The delete operation will fail when the value is set to true.
        
    - name: maintenancePolicy
      value: object
      description: >
        Optional. ClusterMaintenancePolicy determines when to allow or deny updates.
        
    - name: clusterEndpoints
      value: array
      description: >
        Optional. A list of cluster endpoints.
        
    - name: simulateMaintenanceEvent
      value: boolean
      description: >
        Optional. Input only. Simulate a maintenance event.
        
    - name: kmsKey
      value: string
      description: >
        Optional. The KMS key used to encrypt the at-rest data of the cluster.
        
    - name: ondemandMaintenance
      value: boolean
      description: >
        Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster.
        
    - name: automatedBackupConfig
      value: object
      description: >
        Optional. The automated backup config for the cluster.
        
    - name: asyncClusterEndpointsDeletionEnabled
      value: boolean
      description: >
        Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted.
        
    - name: allowFewerZonesDeployment
      value: boolean
      description: >
        Optional. Immutable. Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones. Once set, if there is a zonal outage during the cluster creation, the cluster will only be deployed in 2 zones, and stay within the 2 zones for its lifecycle.
        
    - name: clusterId
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

Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
UPDATE google.redis.clusters
SET 
data__gcsSource = '{{ gcsSource }}',
data__managedBackupSource = '{{ managedBackupSource }}',
data__name = '{{ name }}',
data__replicaCount = {{ replicaCount }},
data__authorizationMode = '{{ authorizationMode }}',
data__transitEncryptionMode = '{{ transitEncryptionMode }}',
data__shardCount = {{ shardCount }},
data__pscConfigs = '{{ pscConfigs }}',
data__nodeType = '{{ nodeType }}',
data__persistenceConfig = '{{ persistenceConfig }}',
data__redisConfigs = '{{ redisConfigs }}',
data__zoneDistributionConfig = '{{ zoneDistributionConfig }}',
data__crossClusterReplicationConfig = '{{ crossClusterReplicationConfig }}',
data__deletionProtectionEnabled = {{ deletionProtectionEnabled }},
data__maintenancePolicy = '{{ maintenancePolicy }}',
data__clusterEndpoints = '{{ clusterEndpoints }}',
data__simulateMaintenanceEvent = {{ simulateMaintenanceEvent }},
data__kmsKey = '{{ kmsKey }}',
data__ondemandMaintenance = {{ ondemandMaintenance }},
data__automatedBackupConfig = '{{ automatedBackupConfig }}',
data__asyncClusterEndpointsDeletionEnabled = {{ asyncClusterEndpointsDeletionEnabled }},
data__allowFewerZonesDeployment = {{ allowFewerZonesDeployment }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
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

Deletes a specific Redis cluster. Cluster stops serving and data is deleted.

```sql
DELETE FROM google.redis.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reschedule_cluster_maintenance"
    values={[
        { label: 'reschedule_cluster_maintenance', value: 'reschedule_cluster_maintenance' },
        { label: 'backup', value: 'backup' }
    ]}
>
<TabItem value="reschedule_cluster_maintenance">

Reschedules upcoming maintenance event.

```sql
EXEC google.redis.clusters.reschedule_cluster_maintenance 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"rescheduleType": "{{ rescheduleType }}", 
"scheduleTime": "{{ scheduleTime }}"
}';
```
</TabItem>
<TabItem value="backup">

Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup.

```sql
EXEC google.redis.clusters.backup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"ttl": "{{ ttl }}", 
"backupId": "{{ backupId }}"
}';
```
</TabItem>
</Tabs>
