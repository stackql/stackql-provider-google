--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - memcache
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.memcache.instances" /></td></tr>
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
    <td>Required. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>The full name of the Google Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Endpoint for the Discovery API.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceMessages" /></td>
    <td><code>array</code></td>
    <td>List of messages that describe the current state of the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule. (id: GoogleCloudMemcacheV1MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. Published maintenance schedule. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheFullVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheNodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of Memcached nodes. Refer to Node message for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheVersion" /></td>
    <td><code>string</code></td>
    <td>The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for Memcached nodes. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Number of nodes in the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>User defined parameters to apply to the memcached process on each node. (id: MemcacheParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRangeId" /></td>
    <td><code>array</code></td>
    <td>Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.</td>
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
    <td>Required. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>The full name of the Google Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Endpoint for the Discovery API.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceMessages" /></td>
    <td><code>array</code></td>
    <td>List of messages that describe the current state of the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule. (id: GoogleCloudMemcacheV1MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. Published maintenance schedule. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheFullVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheNodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of Memcached nodes. Refer to Node message for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheVersion" /></td>
    <td><code>string</code></td>
    <td>The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for Memcached nodes. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Number of nodes in the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>User defined parameters to apply to the memcached process on each node. (id: MemcacheParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRangeId" /></td>
    <td><code>array</code></td>
    <td>Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.</td>
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
    <td>Gets details of a single Instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Instances in a given location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates a new Instance in a given location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing Instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Deletes a single Instance.</td>
</tr>
<tr>
    <td><a href="#apply_parameters"><CopyableCode code="apply_parameters" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.</td>
</tr>
<tr>
    <td><a href="#reschedule_maintenance"><CopyableCode code="reschedule_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Reschedules upcoming maintenance event.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Upgrades the Memcache instance to a newer memcached engine version specified in the request.</td>
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

Gets details of a single Instance.

```sql
SELECT
name,
authorizedNetwork,
createTime,
discoveryEndpoint,
displayName,
instanceMessages,
labels,
maintenancePolicy,
maintenanceSchedule,
memcacheFullVersion,
memcacheNodes,
memcacheVersion,
nodeConfig,
nodeCount,
parameters,
reservedIpRangeId,
satisfiesPzi,
satisfiesPzs,
state,
updateTime,
zones
FROM google.memcache.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Instances in a given location.

```sql
SELECT
name,
authorizedNetwork,
createTime,
discoveryEndpoint,
displayName,
instanceMessages,
labels,
maintenancePolicy,
maintenanceSchedule,
memcacheFullVersion,
memcacheNodes,
memcacheVersion,
nodeConfig,
nodeCount,
parameters,
reservedIpRangeId,
satisfiesPzi,
satisfiesPzs,
state,
updateTime,
zones
FROM google.memcache.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new Instance in a given location.

```sql
INSERT INTO google.memcache.instances (
data__name,
data__displayName,
data__labels,
data__authorizedNetwork,
data__zones,
data__nodeCount,
data__nodeConfig,
data__memcacheVersion,
data__parameters,
data__instanceMessages,
data__maintenancePolicy,
data__reservedIpRangeId,
projectsId,
locationsId,
instanceId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ labels }}',
'{{ authorizedNetwork }}',
'{{ zones }}',
{{ nodeCount }},
'{{ nodeConfig }}',
'{{ memcacheVersion }}',
'{{ parameters }}',
'{{ instanceMessages }}',
'{{ maintenancePolicy }}',
'{{ reservedIpRangeId }}',
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
        Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
        
    - name: displayName
      value: string
      description: >
        User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.
        
    - name: labels
      value: object
      description: >
        Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
        
    - name: authorizedNetwork
      value: string
      description: >
        The full name of the Google Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.
        
    - name: zones
      value: array
      description: >
        Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.
        
    - name: nodeCount
      value: integer
      description: >
        Required. Number of nodes in the Memcached instance.
        
    - name: nodeConfig
      value: object
      description: >
        Required. Configuration for Memcached nodes.
        
    - name: memcacheVersion
      value: string
      description: >
        The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.
        
      valid_values: ['MEMCACHE_VERSION_UNSPECIFIED', 'MEMCACHE_1_5', 'MEMCACHE_1_6_15']
    - name: parameters
      value: object
      description: >
        User defined parameters to apply to the memcached process on each node.
        
    - name: instanceMessages
      value: array
      description: >
        List of messages that describe the current state of the Memcached instance.
        
    - name: maintenancePolicy
      value: object
      description: >
        The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule.
        
    - name: reservedIpRangeId
      value: array
      description: >
        Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.
        
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

Updates an existing Instance in a given project and location.

```sql
UPDATE google.memcache.instances
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__authorizedNetwork = '{{ authorizedNetwork }}',
data__zones = '{{ zones }}',
data__nodeCount = {{ nodeCount }},
data__nodeConfig = '{{ nodeConfig }}',
data__memcacheVersion = '{{ memcacheVersion }}',
data__parameters = '{{ parameters }}',
data__instanceMessages = '{{ instanceMessages }}',
data__maintenancePolicy = '{{ maintenancePolicy }}',
data__reservedIpRangeId = '{{ reservedIpRangeId }}'
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

Deletes a single Instance.

```sql
DELETE FROM google.memcache.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_parameters"
    values={[
        { label: 'apply_parameters', value: 'apply_parameters' },
        { label: 'reschedule_maintenance', value: 'reschedule_maintenance' },
        { label: 'upgrade', value: 'upgrade' }
    ]}
>
<TabItem value="apply_parameters">

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

```sql
EXEC google.memcache.instances.apply_parameters 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"nodeIds": "{{ nodeIds }}", 
"applyAll": {{ applyAll }}
}';
```
</TabItem>
<TabItem value="reschedule_maintenance">

Reschedules upcoming maintenance event.

```sql
EXEC google.memcache.instances.reschedule_maintenance 
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
<TabItem value="upgrade">

Upgrades the Memcache instance to a newer memcached engine version specified in the request.

```sql
EXEC google.memcache.instances.upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"memcacheVersion": "{{ memcacheVersion }}"
}';
```
</TabItem>
</Tabs>
