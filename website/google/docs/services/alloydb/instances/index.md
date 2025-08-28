--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - alloydb
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.instances" /></td></tr>
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
    <td>Output only. The name of the instance resource with the format: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125;/instances/&#123;instance_id&#125; where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="activationPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the `NEVER` to stop the instance. Likewise, the activation policy can be updated to `ALWAYS` to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityType" /></td>
    <td><code>string</code></td>
    <td>Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).</td>
</tr>
<tr>
    <td><CopyableCode code="clientConnectionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Client connection specific configurations (id: ClientConnectionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="databaseFlags" /></td>
    <td><code>object</code></td>
    <td>Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Delete time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable and human-readable display name for the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>For Resource freshness validation (https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="gceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the instance. Specified at creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address for the Instance. This is the connection endpoint for an end-user application.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="machineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the machines that host the underlying database engine. (id: MachineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Instance-level network configuration. (id: InstanceNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for observability. (id: ObservabilityInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="outboundPublicIpAddresses" /></td>
    <td><code>array</code></td>
    <td>Output only. All outbound public IP addresses configured for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="pscInstanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for Private Service Connect (PSC) for the instance. (id: PscInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application.</td>
</tr>
<tr>
    <td><CopyableCode code="queryInsightsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for query insights. (id: QueryInsightsInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="readPoolConfig" /></td>
    <td><code>object</code></td>
    <td>Read pool instance configuration. This is required if the value of instanceType is READ_POOL. (id: ReadPoolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current serving state of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="writableNode" /></td>
    <td><code>object</code></td>
    <td>Output only. This is set for the read-write VM of the PRIMARY instance only. (id: Node)</td>
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
    <td>Output only. The name of the instance resource with the format: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125;/instances/&#123;instance_id&#125; where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="activationPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the `NEVER` to stop the instance. Likewise, the activation policy can be updated to `ALWAYS` to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityType" /></td>
    <td><code>string</code></td>
    <td>Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).</td>
</tr>
<tr>
    <td><CopyableCode code="clientConnectionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Client connection specific configurations (id: ClientConnectionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="databaseFlags" /></td>
    <td><code>object</code></td>
    <td>Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Delete time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable and human-readable display name for the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>For Resource freshness validation (https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="gceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the instance. Specified at creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address for the Instance. This is the connection endpoint for an end-user application.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="machineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the machines that host the underlying database engine. (id: MachineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Instance-level network configuration. (id: InstanceNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for observability. (id: ObservabilityInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="outboundPublicIpAddresses" /></td>
    <td><code>array</code></td>
    <td>Output only. All outbound public IP addresses configured for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="pscInstanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for Private Service Connect (PSC) for the instance. (id: PscInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application.</td>
</tr>
<tr>
    <td><CopyableCode code="queryInsightsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for query insights. (id: QueryInsightsInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="readPoolConfig" /></td>
    <td><code>object</code></td>
    <td>Read pool instance configuration. This is required if the value of instanceType is READ_POOL. (id: ReadPoolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current serving state of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="writableNode" /></td>
    <td><code>object</code></td>
    <td>Output only. This is set for the read-write VM of the PRIMARY instance only. (id: Node)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single Instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Instances in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the parameters of a single Instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single Instance.</td>
</tr>
<tr>
    <td><a href="#failover"><CopyableCode code="failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.</td>
</tr>
<tr>
    <td><a href="#inject_fault"><CopyableCode code="inject_fault" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Injects fault in an instance. Imperative only.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Restart an Instance in a cluster. Imperative only.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets details of a single Instance.

```sql
SELECT
name,
activationPolicy,
annotations,
availabilityType,
clientConnectionConfig,
createTime,
databaseFlags,
deleteTime,
displayName,
etag,
gceZone,
instanceType,
ipAddress,
labels,
machineConfig,
networkConfig,
nodes,
observabilityConfig,
outboundPublicIpAddresses,
pscInstanceConfig,
publicIpAddress,
queryInsightsConfig,
readPoolConfig,
reconciling,
satisfiesPzs,
state,
uid,
updateTime,
writableNode
FROM google.alloydb.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists Instances in a given project and location.

```sql
SELECT
name,
activationPolicy,
annotations,
availabilityType,
clientConnectionConfig,
createTime,
databaseFlags,
deleteTime,
displayName,
etag,
gceZone,
instanceType,
ipAddress,
labels,
machineConfig,
networkConfig,
nodes,
observabilityConfig,
outboundPublicIpAddresses,
pscInstanceConfig,
publicIpAddress,
queryInsightsConfig,
readPoolConfig,
reconciling,
satisfiesPzs,
state,
uid,
updateTime,
writableNode
FROM google.alloydb.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
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

Creates a new Instance in a given project and location.

```sql
INSERT INTO google.alloydb.instances (
data__displayName,
data__labels,
data__instanceType,
data__machineConfig,
data__availabilityType,
data__gceZone,
data__databaseFlags,
data__queryInsightsConfig,
data__observabilityConfig,
data__readPoolConfig,
data__etag,
data__annotations,
data__clientConnectionConfig,
data__pscInstanceConfig,
data__networkConfig,
data__activationPolicy,
projectsId,
locationsId,
clustersId,
instanceId,
requestId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ instanceType }}',
'{{ machineConfig }}',
'{{ availabilityType }}',
'{{ gceZone }}',
'{{ databaseFlags }}',
'{{ queryInsightsConfig }}',
'{{ observabilityConfig }}',
'{{ readPoolConfig }}',
'{{ etag }}',
'{{ annotations }}',
'{{ clientConnectionConfig }}',
'{{ pscInstanceConfig }}',
'{{ networkConfig }}',
'{{ activationPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clustersId }}',
'{{ instanceId }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
    - name: clustersId
      value: string
      description: Required parameter for the instances resource.
    - name: displayName
      value: string
      description: >
        User-settable and human-readable display name for the Instance.
        
    - name: labels
      value: object
      description: >
        Labels as key value pairs
        
    - name: instanceType
      value: string
      description: >
        Required. The type of the instance. Specified at creation time.
        
      valid_values: ['INSTANCE_TYPE_UNSPECIFIED', 'PRIMARY', 'READ_POOL', 'SECONDARY']
    - name: machineConfig
      value: object
      description: >
        Configurations for the machines that host the underlying database engine.
        
    - name: availabilityType
      value: string
      description: >
        Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).
        
      valid_values: ['AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL']
    - name: gceZone
      value: string
      description: >
        The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
        
    - name: databaseFlags
      value: object
      description: >
        Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.
        
    - name: queryInsightsConfig
      value: object
      description: >
        Configuration for query insights.
        
    - name: observabilityConfig
      value: object
      description: >
        Configuration for observability.
        
    - name: readPoolConfig
      value: object
      description: >
        Read pool instance configuration. This is required if the value of instanceType is READ_POOL.
        
    - name: etag
      value: string
      description: >
        For Resource freshness validation (https://google.aip.dev/154)
        
    - name: annotations
      value: object
      description: >
        Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
        
    - name: clientConnectionConfig
      value: object
      description: >
        Optional. Client connection specific configurations
        
    - name: pscInstanceConfig
      value: object
      description: >
        Optional. The configuration for Private Service Connect (PSC) for the instance.
        
    - name: networkConfig
      value: object
      description: >
        Optional. Instance-level network configuration.
        
    - name: activationPolicy
      value: string
      description: >
        Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the `NEVER` to stop the instance. Likewise, the activation policy can be updated to `ALWAYS` to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details.
        
      valid_values: ['ACTIVATION_POLICY_UNSPECIFIED', 'ALWAYS', 'NEVER']
    - name: instanceId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
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

Updates the parameters of a single Instance.

```sql
UPDATE google.alloydb.instances
SET 
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__instanceType = '{{ instanceType }}',
data__machineConfig = '{{ machineConfig }}',
data__availabilityType = '{{ availabilityType }}',
data__gceZone = '{{ gceZone }}',
data__databaseFlags = '{{ databaseFlags }}',
data__queryInsightsConfig = '{{ queryInsightsConfig }}',
data__observabilityConfig = '{{ observabilityConfig }}',
data__readPoolConfig = '{{ readPoolConfig }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}',
data__clientConnectionConfig = '{{ clientConnectionConfig }}',
data__pscInstanceConfig = '{{ pscInstanceConfig }}',
data__networkConfig = '{{ networkConfig }}',
data__activationPolicy = '{{ activationPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
AND allowMissing = {{ allowMissing}}
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

Deletes a single Instance.

```sql
DELETE FROM google.alloydb.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover"
    values={[
        { label: 'failover', value: 'failover' },
        { label: 'inject_fault', value: 'inject_fault' },
        { label: 'restart', value: 'restart' }
    ]}
>
<TabItem value="failover">

Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.

```sql
EXEC google.alloydb.instances.failover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="inject_fault">

Injects fault in an instance. Imperative only.

```sql
EXEC google.alloydb.instances.inject_fault 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"faultType": "{{ faultType }}", 
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="restart">

Restart an Instance in a cluster. Imperative only.

```sql
EXEC google.alloydb.instances.restart 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}, 
"nodeIds": "{{ nodeIds }}"
}';
```
</TabItem>
</Tabs>
