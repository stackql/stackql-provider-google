--- 
title: instance_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_partitions
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

Creates, updates, deletes, gets or lists an <code>instance_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_partitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.instance_partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instances_instance_partitions_get"
    values={[
        { label: 'projects_instances_instance_partitions_get', value: 'projects_instances_instance_partitions_get' },
        { label: 'projects_instances_instance_partitions_list', value: 'projects_instances_instance_partitions_list' }
    ]}
>
<TabItem value="projects_instances_instance_partitions_get">

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
    <td>Required. A unique identifier for the instance partition. Values are of the form `projects//instances//instancePartitions/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length. An instance partition's name cannot be changed after the instance partition is created.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the instance partition's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance partition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The descriptive name for this instance partition as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance partition from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance partition updates in order to avoid race conditions: An etag is returned in the response which contains instance partitions, and systems are expected to put that etag in the request to update instance partitions to ensure that their change will be applied to the same version of the instance partition. If no etag is provided in the call to update instance partition, then the existing instance partition is overwritten blindly.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes allocated to this instance partition. Users can set the `node_count` field to specify the target number of nodes allocated to the instance partition. This may be zero in API responses for instance partitions that are not yet in state `READY`.</td>
</tr>
<tr>
    <td><CopyableCode code="processingUnits" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of processing units allocated to this instance partition. Users can set the `processing_units` field to specify the target number of processing units allocated to the instance partition. This might be zero in API responses for instance partitions that are not yet in the `READY` state.</td>
</tr>
<tr>
    <td><CopyableCode code="referencingBackups" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated: This field is not populated. Output only. The names of the backups that reference this instance partition. Referencing backups should share the parent instance. The existence of any referencing backup prevents the instance partition from being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="referencingDatabases" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of the databases that reference this instance partition. Referencing databases should share the parent instance. The existence of any referencing database prevents the instance partition from being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current instance partition state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance partition was most recently updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instances_instance_partitions_list">

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
    <td>Required. A unique identifier for the instance partition. Values are of the form `projects//instances//instancePartitions/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length. An instance partition's name cannot be changed after the instance partition is created.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the instance partition's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance partition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The descriptive name for this instance partition as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance partition from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance partition updates in order to avoid race conditions: An etag is returned in the response which contains instance partitions, and systems are expected to put that etag in the request to update instance partitions to ensure that their change will be applied to the same version of the instance partition. If no etag is provided in the call to update instance partition, then the existing instance partition is overwritten blindly.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes allocated to this instance partition. Users can set the `node_count` field to specify the target number of nodes allocated to the instance partition. This may be zero in API responses for instance partitions that are not yet in state `READY`.</td>
</tr>
<tr>
    <td><CopyableCode code="processingUnits" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of processing units allocated to this instance partition. Users can set the `processing_units` field to specify the target number of processing units allocated to the instance partition. This might be zero in API responses for instance partitions that are not yet in the `READY` state.</td>
</tr>
<tr>
    <td><CopyableCode code="referencingBackups" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated: This field is not populated. Output only. The names of the backups that reference this instance partition. Referencing backups should share the parent instance. The existence of any referencing backup prevents the instance partition from being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="referencingDatabases" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of the databases that reference this instance partition. Referencing databases should share the parent instance. The existence of any referencing database prevents the instance partition from being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current instance partition state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance partition was most recently updated.</td>
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
    <td><a href="#projects_instances_instance_partitions_get"><CopyableCode code="projects_instances_instance_partitions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-instancePartitionsId"><code>instancePartitionsId</code></a></td>
    <td></td>
    <td>Gets information about a particular instance partition.</td>
</tr>
<tr>
    <td><a href="#projects_instances_instance_partitions_list"><CopyableCode code="projects_instances_instance_partitions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-instancePartitionDeadline"><code>instancePartitionDeadline</code></a></td>
    <td>Lists all instance partitions for the given instance.</td>
</tr>
<tr>
    <td><a href="#projects_instances_instance_partitions_create"><CopyableCode code="projects_instances_instance_partitions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates an instance partition and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance partition. The instance partition name is assigned by the caller. If the named instance partition already exists, `CreateInstancePartition` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance partition is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance partition immediately unreadable via the API. * The instance partition can be deleted. * All other attempts to modify the instance partition are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can start using this instance partition. * The instance partition's allocated resource levels are readable via the API. * The instance partition's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance partition. The metadata field type is CreateInstancePartitionMetadata. The response field type is InstancePartition, if successful.</td>
</tr>
<tr>
    <td><a href="#projects_instances_instance_partitions_patch"><CopyableCode code="projects_instances_instance_partitions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-instancePartitionsId"><code>instancePartitionsId</code></a></td>
    <td></td>
    <td>Updates an instance partition, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance partition. If the named instance partition does not exist, returns `NOT_FOUND`. Immediately upon completion of this request: * For resource types for which a decrease in the instance partition's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation: * Cancelling the operation sets its metadata's cancel_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status. * All other attempts to modify the instance partition are rejected. * Reading the instance partition via the API continues to give the pre-request resource levels. Upon completion of the returned operation: * Billing begins for all successfully-allocated resources (some types may have lower than the requested levels). * All newly-reserved resources are available for serving the instance partition's tables. * The instance partition's new resource levels are readable via the API. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance partition modification. The metadata field type is UpdateInstancePartitionMetadata. The response field type is InstancePartition, if successful. Authorization requires `spanner.instancePartitions.update` permission on the resource name.</td>
</tr>
<tr>
    <td><a href="#projects_instances_instance_partitions_delete"><CopyableCode code="projects_instances_instance_partitions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-instancePartitionsId"><code>instancePartitionsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an existing instance partition. Requires that the instance partition is not used by any database or backup and is not the default instance partition of an instance. Authorization requires `spanner.instancePartitions.delete` permission on the resource name.</td>
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
<tr id="parameter-instancePartitionsId">
    <td><CopyableCode code="instancePartitionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancePartitionDeadline">
    <td><CopyableCode code="instancePartitionDeadline" /></td>
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
    defaultValue="projects_instances_instance_partitions_get"
    values={[
        { label: 'projects_instances_instance_partitions_get', value: 'projects_instances_instance_partitions_get' },
        { label: 'projects_instances_instance_partitions_list', value: 'projects_instances_instance_partitions_list' }
    ]}
>
<TabItem value="projects_instances_instance_partitions_get">

Gets information about a particular instance partition.

```sql
SELECT
name,
config,
createTime,
displayName,
etag,
nodeCount,
processingUnits,
referencingBackups,
referencingDatabases,
state,
updateTime
FROM google.spanner.instance_partitions
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND instancePartitionsId = '{{ instancePartitionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_instances_instance_partitions_list">

Lists all instance partitions for the given instance.

```sql
SELECT
name,
config,
createTime,
displayName,
etag,
nodeCount,
processingUnits,
referencingBackups,
referencingDatabases,
state,
updateTime
FROM google.spanner.instance_partitions
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND instancePartitionDeadline = '{{ instancePartitionDeadline }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instances_instance_partitions_create"
    values={[
        { label: 'projects_instances_instance_partitions_create', value: 'projects_instances_instance_partitions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_instance_partitions_create">

Creates an instance partition and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance partition. The instance partition name is assigned by the caller. If the named instance partition already exists, `CreateInstancePartition` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance partition is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance partition immediately unreadable via the API. * The instance partition can be deleted. * All other attempts to modify the instance partition are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can start using this instance partition. * The instance partition's allocated resource levels are readable via the API. * The instance partition's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance partition. The metadata field type is CreateInstancePartitionMetadata. The response field type is InstancePartition, if successful.

```sql
INSERT INTO google.spanner.instance_partitions (
data__instancePartitionId,
data__instancePartition,
projectsId,
instancesId
)
SELECT 
'{{ instancePartitionId }}',
'{{ instancePartition }}',
'{{ projectsId }}',
'{{ instancesId }}'
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
- name: instance_partitions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instance_partitions resource.
    - name: instancesId
      value: string
      description: Required parameter for the instance_partitions resource.
    - name: instancePartitionId
      value: string
      description: >
        Required. The ID of the instance partition to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length.
        
    - name: instancePartition
      value: object
      description: >
        An isolated set of Cloud Spanner resources that databases can define placements on.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_instances_instance_partitions_patch"
    values={[
        { label: 'projects_instances_instance_partitions_patch', value: 'projects_instances_instance_partitions_patch' }
    ]}
>
<TabItem value="projects_instances_instance_partitions_patch">

Updates an instance partition, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance partition. If the named instance partition does not exist, returns `NOT_FOUND`. Immediately upon completion of this request: * For resource types for which a decrease in the instance partition's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation: * Cancelling the operation sets its metadata's cancel_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status. * All other attempts to modify the instance partition are rejected. * Reading the instance partition via the API continues to give the pre-request resource levels. Upon completion of the returned operation: * Billing begins for all successfully-allocated resources (some types may have lower than the requested levels). * All newly-reserved resources are available for serving the instance partition's tables. * The instance partition's new resource levels are readable via the API. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance partition modification. The metadata field type is UpdateInstancePartitionMetadata. The response field type is InstancePartition, if successful. Authorization requires `spanner.instancePartitions.update` permission on the resource name.

```sql
UPDATE google.spanner.instance_partitions
SET 
data__instancePartition = '{{ instancePartition }}',
data__fieldMask = '{{ fieldMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND instancePartitionsId = '{{ instancePartitionsId }}' --required
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
    defaultValue="projects_instances_instance_partitions_delete"
    values={[
        { label: 'projects_instances_instance_partitions_delete', value: 'projects_instances_instance_partitions_delete' }
    ]}
>
<TabItem value="projects_instances_instance_partitions_delete">

Deletes an existing instance partition. Requires that the instance partition is not used by any database or backup and is not the default instance partition of an instance. Authorization requires `spanner.instancePartitions.delete` permission on the resource name.

```sql
DELETE FROM google.spanner.instance_partitions
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND instancePartitionsId = '{{ instancePartitionsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
