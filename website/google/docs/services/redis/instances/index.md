--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.instances" /></td></tr>
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
    <td>Required. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="alternativeLocationId" /></td>
    <td><code>string</code></td>
    <td>Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="authEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Optional. The available maintenance versions that an instance could update to.</td>
</tr>
<tr>
    <td><CopyableCode code="connectMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currentLocationId" /></td>
    <td><code>string</code></td>
    <td>Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The KMS key reference that the customer provides when trying to create the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>An arbitrary and optional user-provided name for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. Date and time of upcoming maintenance events which have been scheduled. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Redis memory size in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. Info per node.</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistence configuration parameters (id: PersistenceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceIamIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The port number of the exposed Redis endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="readEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'.</td>
</tr>
<tr>
    <td><CopyableCode code="readEndpointPort" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.</td>
</tr>
<tr>
    <td><CopyableCode code="readReplicasMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="redisConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries</td>
</tr>
<tr>
    <td><CopyableCode code="redisVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The version of Redis software. If not provided, the default version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility * `REDIS_7_0` for Redis 7.0 compatibility (default) * `REDIS_7_2` for Redis 7.2 compatibility</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.</td>
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
    <td><CopyableCode code="secondaryIpRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaCerts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of server CA certificates for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current status of this instance, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReasons" /></td>
    <td><code>array</code></td>
    <td>Optional. reasons that causes instance in "SUSPENDED" state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Required. The service tier of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.</td>
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
    <td>Required. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="alternativeLocationId" /></td>
    <td><code>string</code></td>
    <td>Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="authEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Optional. The available maintenance versions that an instance could update to.</td>
</tr>
<tr>
    <td><CopyableCode code="connectMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currentLocationId" /></td>
    <td><code>string</code></td>
    <td>Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The KMS key reference that the customer provides when trying to create the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>An arbitrary and optional user-provided name for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. Date and time of upcoming maintenance events which have been scheduled. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Redis memory size in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. Info per node.</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistence configuration parameters (id: PersistenceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceIamIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The port number of the exposed Redis endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="readEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'.</td>
</tr>
<tr>
    <td><CopyableCode code="readEndpointPort" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.</td>
</tr>
<tr>
    <td><CopyableCode code="readReplicasMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="redisConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries</td>
</tr>
<tr>
    <td><CopyableCode code="redisVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The version of Redis software. If not provided, the default version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility * `REDIS_7_0` for Redis 7.0 compatibility (default) * `REDIS_7_2` for Redis 7.2 compatibility</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.</td>
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
    <td><CopyableCode code="secondaryIpRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaCerts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of server CA certificates for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current status of this instance, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReasons" /></td>
    <td><code>array</code></td>
    <td>Optional. reasons that causes instance in "SUSPENDED" state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Required. The service tier of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets the details of a specific Redis instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Deletes a specific Redis instance. Instance stops serving and data is deleted.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Upgrades Redis instance to the newer Redis version specified in the request.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#failover"><CopyableCode code="failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.</td>
</tr>
<tr>
    <td><a href="#reschedule_maintenance"><CopyableCode code="reschedule_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Reschedule maintenance for a given instance in a given project and location.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets the details of a specific Redis instance.

```sql
SELECT
name,
alternativeLocationId,
authEnabled,
authorizedNetwork,
availableMaintenanceVersions,
connectMode,
createTime,
currentLocationId,
customerManagedKey,
displayName,
host,
labels,
locationId,
maintenancePolicy,
maintenanceSchedule,
maintenanceVersion,
memorySizeGb,
nodes,
persistenceConfig,
persistenceIamIdentity,
port,
readEndpoint,
readEndpointPort,
readReplicasMode,
redisConfigs,
redisVersion,
replicaCount,
reservedIpRange,
satisfiesPzi,
satisfiesPzs,
secondaryIpRange,
serverCaCerts,
state,
statusMessage,
suspensionReasons,
tags,
tier,
transitEncryptionMode
FROM google.redis.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

```sql
SELECT
name,
alternativeLocationId,
authEnabled,
authorizedNetwork,
availableMaintenanceVersions,
connectMode,
createTime,
currentLocationId,
customerManagedKey,
displayName,
host,
labels,
locationId,
maintenancePolicy,
maintenanceSchedule,
maintenanceVersion,
memorySizeGb,
nodes,
persistenceConfig,
persistenceIamIdentity,
port,
readEndpoint,
readEndpointPort,
readReplicasMode,
redisConfigs,
redisVersion,
replicaCount,
reservedIpRange,
satisfiesPzi,
satisfiesPzs,
secondaryIpRange,
serverCaCerts,
state,
statusMessage,
suspensionReasons,
tags,
tier,
transitEncryptionMode
FROM google.redis.instances
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

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
INSERT INTO google.redis.instances (
data__name,
data__displayName,
data__labels,
data__locationId,
data__alternativeLocationId,
data__redisVersion,
data__reservedIpRange,
data__secondaryIpRange,
data__redisConfigs,
data__tier,
data__memorySizeGb,
data__authorizedNetwork,
data__connectMode,
data__authEnabled,
data__transitEncryptionMode,
data__maintenancePolicy,
data__replicaCount,
data__readReplicasMode,
data__customerManagedKey,
data__persistenceConfig,
data__suspensionReasons,
data__maintenanceVersion,
data__availableMaintenanceVersions,
data__tags,
projectsId,
locationsId,
instanceId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ labels }}',
'{{ locationId }}',
'{{ alternativeLocationId }}',
'{{ redisVersion }}',
'{{ reservedIpRange }}',
'{{ secondaryIpRange }}',
'{{ redisConfigs }}',
'{{ tier }}',
{{ memorySizeGb }},
'{{ authorizedNetwork }}',
'{{ connectMode }}',
{{ authEnabled }},
'{{ transitEncryptionMode }}',
'{{ maintenancePolicy }}',
{{ replicaCount }},
'{{ readReplicasMode }}',
'{{ customerManagedKey }}',
'{{ persistenceConfig }}',
'{{ suspensionReasons }}',
'{{ maintenanceVersion }}',
'{{ availableMaintenanceVersions }}',
'{{ tags }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}'
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
- name: instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the instances resource.
    - name: name
      value: string
      description: >
        Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.
        
    - name: displayName
      value: string
      description: >
        An arbitrary and optional user-provided name for the instance.
        
    - name: labels
      value: object
      description: >
        Resource labels to represent user provided metadata
        
    - name: locationId
      value: string
      description: >
        Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.
        
    - name: alternativeLocationId
      value: string
      description: >
        Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.
        
    - name: redisVersion
      value: string
      description: >
        Optional. The version of Redis software. If not provided, the default version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility * `REDIS_7_0` for Redis 7.0 compatibility (default) * `REDIS_7_2` for Redis 7.2 compatibility
        
    - name: reservedIpRange
      value: string
      description: >
        Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.
        
    - name: secondaryIpRange
      value: string
      description: >
        Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".
        
    - name: redisConfigs
      value: object
      description: >
        Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries
        
    - name: tier
      value: string
      description: >
        Required. The service tier of the instance.
        
      valid_values: ['TIER_UNSPECIFIED', 'BASIC', 'STANDARD_HA']
    - name: memorySizeGb
      value: integer
      description: >
        Required. Redis memory size in GiB.
        
    - name: authorizedNetwork
      value: string
      description: >
        Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.
        
    - name: connectMode
      value: string
      description: >
        Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.
        
      valid_values: ['CONNECT_MODE_UNSPECIFIED', 'DIRECT_PEERING', 'PRIVATE_SERVICE_ACCESS']
    - name: authEnabled
      value: boolean
      description: >
        Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.
        
    - name: transitEncryptionMode
      value: string
      description: >
        Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.
        
      valid_values: ['TRANSIT_ENCRYPTION_MODE_UNSPECIFIED', 'SERVER_AUTHENTICATION', 'DISABLED']
    - name: maintenancePolicy
      value: object
      description: >
        Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time.
        
    - name: replicaCount
      value: integer
      description: >
        Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.
        
    - name: readReplicasMode
      value: string
      description: >
        Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.
        
      valid_values: ['READ_REPLICAS_MODE_UNSPECIFIED', 'READ_REPLICAS_DISABLED', 'READ_REPLICAS_ENABLED']
    - name: customerManagedKey
      value: string
      description: >
        Optional. The KMS key reference that the customer provides when trying to create the instance.
        
    - name: persistenceConfig
      value: object
      description: >
        Optional. Persistence configuration parameters
        
    - name: suspensionReasons
      value: array
      description: >
        Optional. reasons that causes instance in "SUSPENDED" state.
        
    - name: maintenanceVersion
      value: string
      description: >
        Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".
        
    - name: availableMaintenanceVersions
      value: array
      description: >
        Optional. The available maintenance versions that an instance could update to.
        
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
        
    - name: instanceId
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

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
UPDATE google.redis.instances
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__locationId = '{{ locationId }}',
data__alternativeLocationId = '{{ alternativeLocationId }}',
data__redisVersion = '{{ redisVersion }}',
data__reservedIpRange = '{{ reservedIpRange }}',
data__secondaryIpRange = '{{ secondaryIpRange }}',
data__redisConfigs = '{{ redisConfigs }}',
data__tier = '{{ tier }}',
data__memorySizeGb = {{ memorySizeGb }},
data__authorizedNetwork = '{{ authorizedNetwork }}',
data__connectMode = '{{ connectMode }}',
data__authEnabled = {{ authEnabled }},
data__transitEncryptionMode = '{{ transitEncryptionMode }}',
data__maintenancePolicy = '{{ maintenancePolicy }}',
data__replicaCount = {{ replicaCount }},
data__readReplicasMode = '{{ readReplicasMode }}',
data__customerManagedKey = '{{ customerManagedKey }}',
data__persistenceConfig = '{{ persistenceConfig }}',
data__suspensionReasons = '{{ suspensionReasons }}',
data__maintenanceVersion = '{{ maintenanceVersion }}',
data__availableMaintenanceVersions = '{{ availableMaintenanceVersions }}',
data__tags = '{{ tags }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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

Deletes a specific Redis instance. Instance stops serving and data is deleted.

```sql
DELETE FROM google.redis.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upgrade"
    values={[
        { label: 'upgrade', value: 'upgrade' },
        { label: 'import', value: 'import' },
        { label: 'export', value: 'export' },
        { label: 'failover', value: 'failover' },
        { label: 'reschedule_maintenance', value: 'reschedule_maintenance' }
    ]}
>
<TabItem value="upgrade">

Upgrades Redis instance to the newer Redis version specified in the request.

```sql
EXEC google.redis.instances.upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"redisVersion": "{{ redisVersion }}"
}';
```
</TabItem>
<TabItem value="import">

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
EXEC google.redis.instances.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"inputConfig": "{{ inputConfig }}"
}';
```
</TabItem>
<TabItem value="export">

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
EXEC google.redis.instances.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"outputConfig": "{{ outputConfig }}"
}';
```
</TabItem>
<TabItem value="failover">

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

```sql
EXEC google.redis.instances.failover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"dataProtectionMode": "{{ dataProtectionMode }}"
}';
```
</TabItem>
<TabItem value="reschedule_maintenance">

Reschedule maintenance for a given instance in a given project and location.

```sql
EXEC google.redis.instances.reschedule_maintenance 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"rescheduleType": "{{ rescheduleType }}", 
"scheduleTime": "{{ scheduleTime }}"
}';
```
</TabItem>
</Tabs>
