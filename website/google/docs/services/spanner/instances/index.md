--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - spanner
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instances_get"
    values={[
        { label: 'projects_instances_get', value: 'projects_instances_get' },
        { label: 'projects_instances_list', value: 'projects_instances_list' }
    ]}
>
<TabItem value="projects_instances_get">

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
    <td>Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscalingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The autoscaling configuration. Autoscaling is enabled if this field is set. When autoscaling is enabled, node_count and processing_units are treated as OUTPUT_ONLY fields and reflect the current compute capacity allocated to the instance. (id: AutoscalingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the instance's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultBackupScheduleType" /></td>
    <td><code>string</code></td>
    <td>Optional. Controls the default backup schedule behavior for new databases within the instance. By default, a backup schedule is created automatically when a new database is created in a new instance. Note that the `AUTOMATIC` value isn't permitted for free instances, as backups and backup schedules aren't supported for free instances. In the `GetInstance` or `ListInstances` response, if the value of `default_backup_schedule_type` isn't set, or set to `NONE`, Spanner doesn't create a default backup schedule for new databases in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>Optional. The `Edition` of the current instance.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUris" /></td>
    <td><code>array</code></td>
    <td>Deprecated. This field is not populated.</td>
</tr>
<tr>
    <td><CopyableCode code="freeInstanceMetadata" /></td>
    <td><code>object</code></td>
    <td>Free instance metadata. Only populated for free instances. (id: FreeInstanceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The `InstanceType` of the current instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z&#123;0,62&#125;`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]&#123;0,63&#125;`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes allocated to this instance. At most, one of either `node_count` or `processing_units` should be present in the message. Users can set the `node_count` field to specify the target number of nodes allocated to the instance. If autoscaling is enabled, `node_count` is treated as an `OUTPUT_ONLY` field and reflects the current number of nodes allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying node count across replicas (achieved by setting `asymmetric_autoscaling_options` in the autoscaling configuration), the `node_count` set here is the maximum node count across all replicas. For more information, see [Compute capacity, nodes, and processing units](https://cloud.google.com/spanner/docs/compute-capacity).</td>
</tr>
<tr>
    <td><CopyableCode code="processingUnits" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of processing units allocated to this instance. At most, one of either `processing_units` or `node_count` should be present in the message. Users can set the `processing_units` field to specify the target number of processing units allocated to the instance. If autoscaling is enabled, `processing_units` is treated as an `OUTPUT_ONLY` field and reflects the current number of processing units allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying processing units per replica (achieved by setting `asymmetric_autoscaling_options` in the autoscaling configuration), the `processing_units` set here is the maximum processing units across all replicas. For more information, see [Compute capacity, nodes and processing units](https://cloud.google.com/spanner/docs/compute-capacity).</td>
</tr>
<tr>
    <td><CopyableCode code="replicaComputeCapacity" /></td>
    <td><code>array</code></td>
    <td>Output only. Lists the compute capacity per ReplicaSelection. A replica selection identifies a set of replicas with common properties. Replicas identified by a ReplicaSelection are scaled with the same compute capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance was most recently updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instances_list">

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
    <td>Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscalingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The autoscaling configuration. Autoscaling is enabled if this field is set. When autoscaling is enabled, node_count and processing_units are treated as OUTPUT_ONLY fields and reflect the current compute capacity allocated to the instance. (id: AutoscalingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the instance's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultBackupScheduleType" /></td>
    <td><code>string</code></td>
    <td>Optional. Controls the default backup schedule behavior for new databases within the instance. By default, a backup schedule is created automatically when a new database is created in a new instance. Note that the `AUTOMATIC` value isn't permitted for free instances, as backups and backup schedules aren't supported for free instances. In the `GetInstance` or `ListInstances` response, if the value of `default_backup_schedule_type` isn't set, or set to `NONE`, Spanner doesn't create a default backup schedule for new databases in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>Optional. The `Edition` of the current instance.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUris" /></td>
    <td><code>array</code></td>
    <td>Deprecated. This field is not populated.</td>
</tr>
<tr>
    <td><CopyableCode code="freeInstanceMetadata" /></td>
    <td><code>object</code></td>
    <td>Free instance metadata. Only populated for free instances. (id: FreeInstanceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The `InstanceType` of the current instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z&#123;0,62&#125;`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]&#123;0,63&#125;`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes allocated to this instance. At most, one of either `node_count` or `processing_units` should be present in the message. Users can set the `node_count` field to specify the target number of nodes allocated to the instance. If autoscaling is enabled, `node_count` is treated as an `OUTPUT_ONLY` field and reflects the current number of nodes allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying node count across replicas (achieved by setting `asymmetric_autoscaling_options` in the autoscaling configuration), the `node_count` set here is the maximum node count across all replicas. For more information, see [Compute capacity, nodes, and processing units](https://cloud.google.com/spanner/docs/compute-capacity).</td>
</tr>
<tr>
    <td><CopyableCode code="processingUnits" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of processing units allocated to this instance. At most, one of either `processing_units` or `node_count` should be present in the message. Users can set the `processing_units` field to specify the target number of processing units allocated to the instance. If autoscaling is enabled, `processing_units` is treated as an `OUTPUT_ONLY` field and reflects the current number of processing units allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying processing units per replica (achieved by setting `asymmetric_autoscaling_options` in the autoscaling configuration), the `processing_units` set here is the maximum processing units across all replicas. For more information, see [Compute capacity, nodes and processing units](https://cloud.google.com/spanner/docs/compute-capacity).</td>
</tr>
<tr>
    <td><CopyableCode code="replicaComputeCapacity" /></td>
    <td><code>array</code></td>
    <td>Output only. Lists the compute capacity per ReplicaSelection. A replica selection identifies a set of replicas with common properties. Replicas identified by a ReplicaSelection are scaled with the same compute capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance was most recently updated.</td>
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
    <td><a href="#projects_instances_get"><CopyableCode code="projects_instances_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-fieldMask"><code>fieldMask</code></a></td>
    <td>Gets information about a particular instance.</td>
</tr>
<tr>
    <td><a href="#projects_instances_list"><CopyableCode code="projects_instances_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-instanceDeadline"><code>instanceDeadline</code></a></td>
    <td>Lists all instances in the given project.</td>
</tr>
<tr>
    <td><a href="#projects_instances_create"><CopyableCode code="projects_instances_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance immediately unreadable via the API. * The instance can be deleted. * All other attempts to modify the instance are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can be created in the instance. * The instance's allocated resource levels are readable via the API. * The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.</td>
</tr>
<tr>
    <td><a href="#projects_instances_patch"><CopyableCode code="projects_instances_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`. Immediately upon completion of this request: * For resource types for which a decrease in the instance's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation: * Cancelling the operation sets its metadata's cancel_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status. * All other attempts to modify the instance are rejected. * Reading the instance via the API continues to give the pre-request resource levels. Upon completion of the returned operation: * Billing begins for all successfully-allocated resources (some types may have lower than the requested levels). * All newly-reserved resources are available for serving the instance's tables. * The instance's new resource levels are readable via the API. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance modification. The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful. Authorization requires `spanner.instances.update` permission on the resource name.</td>
</tr>
<tr>
    <td><a href="#projects_instances_delete"><CopyableCode code="projects_instances_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Deletes an instance. Immediately upon completion of the request: * Billing ceases for all of the instance's reserved resources. Soon afterward: * The instance and *all of its databases* immediately and irrevocably disappear from the API. All data in the databases is permanently deleted.</td>
</tr>
<tr>
    <td><a href="#projects_instances_move"><CopyableCode code="projects_instances_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Moves an instance to the target instance configuration. You can use the returned long-running operation to track the progress of moving the instance. `MoveInstance` returns `FAILED_PRECONDITION` if the instance meets any of the following criteria: * Is undergoing a move to a different instance configuration * Has backups * Has an ongoing update * Contains any CMEK-enabled databases * Is a free trial instance While the operation is pending: * All other attempts to modify the instance, including changes to its compute capacity, are rejected. * The following database and backup admin operations are rejected: * `DatabaseAdmin.CreateDatabase` * `DatabaseAdmin.UpdateDatabaseDdl` (disabled if default_leader is specified in the request.) * `DatabaseAdmin.RestoreDatabase` * `DatabaseAdmin.CreateBackup` * `DatabaseAdmin.CopyBackup` * Both the source and target instance configurations are subject to hourly compute and storage charges. * The instance might experience higher read-write latencies and a higher transaction abort rate. However, moving an instance doesn't cause any downtime. The returned long-running operation has a name of the format `/operations/` and can be used to track the move instance operation. The metadata field type is MoveInstanceMetadata. The response field type is Instance, if successful. Cancelling the operation sets its metadata's cancel_time. Cancellation is not immediate because it involves moving any data previously moved to the target instance configuration back to the original instance configuration. You can use this operation to track the progress of the cancellation. Upon successful completion of the cancellation, the operation terminates with `CANCELLED` status. If not cancelled, upon completion of the returned operation: * The instance successfully moves to the target instance configuration. * You are billed for compute and storage in target instance configuration. Authorization requires the `spanner.instances.update` permission on the resource instance. For more details, see [Move an instance](https://cloud.google.com/spanner/docs/move-instance).</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fieldMask">
    <td><CopyableCode code="fieldMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instanceDeadline">
    <td><CopyableCode code="instanceDeadline" /></td>
    <td><code>string (google-datetime)</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_instances_get"
    values={[
        { label: 'projects_instances_get', value: 'projects_instances_get' },
        { label: 'projects_instances_list', value: 'projects_instances_list' }
    ]}
>
<TabItem value="projects_instances_get">

Gets information about a particular instance.

```sql
SELECT
name,
autoscalingConfig,
config,
createTime,
defaultBackupScheduleType,
displayName,
edition,
endpointUris,
freeInstanceMetadata,
instanceType,
labels,
nodeCount,
processingUnits,
replicaComputeCapacity,
state,
updateTime
FROM google.spanner.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND fieldMask = '{{ fieldMask }}';
```
</TabItem>
<TabItem value="projects_instances_list">

Lists all instances in the given project.

```sql
SELECT
name,
autoscalingConfig,
config,
createTime,
defaultBackupScheduleType,
displayName,
edition,
endpointUris,
freeInstanceMetadata,
instanceType,
labels,
nodeCount,
processingUnits,
replicaComputeCapacity,
state,
updateTime
FROM google.spanner.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND instanceDeadline = '{{ instanceDeadline }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instances_create"
    values={[
        { label: 'projects_instances_create', value: 'projects_instances_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_create">

Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance immediately unreadable via the API. * The instance can be deleted. * All other attempts to modify the instance are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can be created in the instance. * The instance's allocated resource levels are readable via the API. * The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.

```sql
INSERT INTO google.spanner.instances (
data__instanceId,
data__instance,
projectsId
)
SELECT 
'{{ instanceId }}',
'{{ instance }}',
'{{ projectsId }}'
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
    - name: instanceId
      value: string
      description: >
        Required. The ID of the instance to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length.
        
    - name: instance
      value: object
      description: >
        An isolated set of Cloud Spanner resources on which databases can be hosted.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_instances_patch"
    values={[
        { label: 'projects_instances_patch', value: 'projects_instances_patch' }
    ]}
>
<TabItem value="projects_instances_patch">

Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`. Immediately upon completion of this request: * For resource types for which a decrease in the instance's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation: * Cancelling the operation sets its metadata's cancel_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status. * All other attempts to modify the instance are rejected. * Reading the instance via the API continues to give the pre-request resource levels. Upon completion of the returned operation: * Billing begins for all successfully-allocated resources (some types may have lower than the requested levels). * All newly-reserved resources are available for serving the instance's tables. * The instance's new resource levels are readable via the API. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance modification. The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful. Authorization requires `spanner.instances.update` permission on the resource name.

```sql
UPDATE google.spanner.instances
SET 
data__instance = '{{ instance }}',
data__fieldMask = '{{ fieldMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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
    defaultValue="projects_instances_delete"
    values={[
        { label: 'projects_instances_delete', value: 'projects_instances_delete' }
    ]}
>
<TabItem value="projects_instances_delete">

Deletes an instance. Immediately upon completion of the request: * Billing ceases for all of the instance's reserved resources. Soon afterward: * The instance and *all of its databases* immediately and irrevocably disappear from the API. All data in the databases is permanently deleted.

```sql
DELETE FROM google.spanner.instances
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_instances_move"
    values={[
        { label: 'projects_instances_move', value: 'projects_instances_move' }
    ]}
>
<TabItem value="projects_instances_move">

Moves an instance to the target instance configuration. You can use the returned long-running operation to track the progress of moving the instance. `MoveInstance` returns `FAILED_PRECONDITION` if the instance meets any of the following criteria: * Is undergoing a move to a different instance configuration * Has backups * Has an ongoing update * Contains any CMEK-enabled databases * Is a free trial instance While the operation is pending: * All other attempts to modify the instance, including changes to its compute capacity, are rejected. * The following database and backup admin operations are rejected: * `DatabaseAdmin.CreateDatabase` * `DatabaseAdmin.UpdateDatabaseDdl` (disabled if default_leader is specified in the request.) * `DatabaseAdmin.RestoreDatabase` * `DatabaseAdmin.CreateBackup` * `DatabaseAdmin.CopyBackup` * Both the source and target instance configurations are subject to hourly compute and storage charges. * The instance might experience higher read-write latencies and a higher transaction abort rate. However, moving an instance doesn't cause any downtime. The returned long-running operation has a name of the format `/operations/` and can be used to track the move instance operation. The metadata field type is MoveInstanceMetadata. The response field type is Instance, if successful. Cancelling the operation sets its metadata's cancel_time. Cancellation is not immediate because it involves moving any data previously moved to the target instance configuration back to the original instance configuration. You can use this operation to track the progress of the cancellation. Upon successful completion of the cancellation, the operation terminates with `CANCELLED` status. If not cancelled, upon completion of the returned operation: * The instance successfully moves to the target instance configuration. * You are billed for compute and storage in target instance configuration. Authorization requires the `spanner.instances.update` permission on the resource instance. For more details, see [Move an instance](https://cloud.google.com/spanner/docs/move-instance).

```sql
EXEC google.spanner.instances.projects_instances_move 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"targetConfig": "{{ targetConfig }}", 
"targetDatabaseMoveConfigs": "{{ targetDatabaseMoveConfigs }}"
}';
```
</TabItem>
</Tabs>
