--- 
title: replications
hide_title: false
hide_table_of_contents: false
keywords:
  - replications
  - netapp
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

Creates, updates, deletes, gets or lists a <code>replications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>replications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.replications" /></td></tr>
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
    <td>Identifier. The resource name of the Replication. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/volumes/&#123;volume_id&#125;/replications/&#123;replication_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. Location of the user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Replication create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description about this replication relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationVolume" /></td>
    <td><code>string</code></td>
    <td>Output only. Full name of destination volume resource. Example : "projects/&#123;project&#125;/locations/&#123;location&#125;/volumes/&#123;volume_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="destinationVolumeParameters" /></td>
    <td><code>object</code></td>
    <td>Required. Input only. Destination volume parameters (id: DestinationVolumeParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="healthy" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Condition of the relationship. Can be one of the following: - true: The replication relationship is healthy. It has not missed the most recent scheduled transfer. - false: The replication relationship is not healthy. It has missed the most recent scheduled transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="hybridPeeringDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Hybrid peering details. (id: HybridPeeringDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="hybridReplicationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the hybrid replication.</td>
</tr>
<tr>
    <td><CopyableCode code="hybridReplicationUserCommands" /></td>
    <td><code>object</code></td>
    <td>Output only. Copy pastable snapmirror commands to be executed on onprem cluster by the customer. (id: UserCommands)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="mirrorState" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates the state of mirroring.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationSchedule" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates the schedule for replication.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates whether this points to source or destination.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceVolume" /></td>
    <td><code>string</code></td>
    <td>Output only. Full name of source volume resource. Example : "projects/&#123;project&#125;/locations/&#123;location&#125;/volumes/&#123;volume_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the replication.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the replication.</td>
</tr>
<tr>
    <td><CopyableCode code="transferStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Replication transfer statistics. (id: TransferStats)</td>
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
    <td>Identifier. The resource name of the Replication. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/volumes/&#123;volume_id&#125;/replications/&#123;replication_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. Location of the user cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Replication create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description about this replication relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationVolume" /></td>
    <td><code>string</code></td>
    <td>Output only. Full name of destination volume resource. Example : "projects/&#123;project&#125;/locations/&#123;location&#125;/volumes/&#123;volume_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="destinationVolumeParameters" /></td>
    <td><code>object</code></td>
    <td>Required. Input only. Destination volume parameters (id: DestinationVolumeParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="healthy" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Condition of the relationship. Can be one of the following: - true: The replication relationship is healthy. It has not missed the most recent scheduled transfer. - false: The replication relationship is not healthy. It has missed the most recent scheduled transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="hybridPeeringDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Hybrid peering details. (id: HybridPeeringDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="hybridReplicationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the hybrid replication.</td>
</tr>
<tr>
    <td><CopyableCode code="hybridReplicationUserCommands" /></td>
    <td><code>object</code></td>
    <td>Output only. Copy pastable snapmirror commands to be executed on onprem cluster by the customer. (id: UserCommands)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="mirrorState" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates the state of mirroring.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationSchedule" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates the schedule for replication.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates whether this points to source or destination.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceVolume" /></td>
    <td><code>string</code></td>
    <td>Output only. Full name of source volume resource. Example : "projects/&#123;project&#125;/locations/&#123;location&#125;/volumes/&#123;volume_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the replication.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the replication.</td>
</tr>
<tr>
    <td><CopyableCode code="transferStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Replication transfer statistics. (id: TransferStats)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Describe a replication for a volume.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns descriptions of all replications for a volume.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td><a href="#parameter-replicationId"><code>replicationId</code></a></td>
    <td>Create a new replication for a volume.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings of a specific replication.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Deletes a replication.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Stop Cross Region Replication.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Resume Cross Region Replication.</td>
</tr>
<tr>
    <td><a href="#reverse_direction"><CopyableCode code="reverse_direction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Reverses direction of replication. Source becomes destination and destination becomes source.</td>
</tr>
<tr>
    <td><a href="#establish_peering"><CopyableCode code="establish_peering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Establish replication peering.</td>
</tr>
<tr>
    <td><a href="#sync"><CopyableCode code="sync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-replicationsId"><code>replicationsId</code></a></td>
    <td></td>
    <td>Syncs the replication. This will invoke one time volume data transfer from source to destination.</td>
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
<tr id="parameter-replicationsId">
    <td><CopyableCode code="replicationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-volumesId">
    <td><CopyableCode code="volumesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-replicationId">
    <td><CopyableCode code="replicationId" /></td>
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

Describe a replication for a volume.

```sql
SELECT
name,
clusterLocation,
createTime,
description,
destinationVolume,
destinationVolumeParameters,
healthy,
hybridPeeringDetails,
hybridReplicationType,
hybridReplicationUserCommands,
labels,
mirrorState,
replicationSchedule,
role,
sourceVolume,
state,
stateDetails,
transferStats
FROM google.netapp.replications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND volumesId = '{{ volumesId }}' -- required
AND replicationsId = '{{ replicationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns descriptions of all replications for a volume.

```sql
SELECT
name,
clusterLocation,
createTime,
description,
destinationVolume,
destinationVolumeParameters,
healthy,
hybridPeeringDetails,
hybridReplicationType,
hybridReplicationUserCommands,
labels,
mirrorState,
replicationSchedule,
role,
sourceVolume,
state,
stateDetails,
transferStats
FROM google.netapp.replications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND volumesId = '{{ volumesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
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

Create a new replication for a volume.

```sql
INSERT INTO google.netapp.replications (
data__name,
data__replicationSchedule,
data__labels,
data__description,
data__destinationVolumeParameters,
data__clusterLocation,
projectsId,
locationsId,
volumesId,
replicationId
)
SELECT 
'{{ name }}',
'{{ replicationSchedule }}',
'{{ labels }}',
'{{ description }}',
'{{ destinationVolumeParameters }}',
'{{ clusterLocation }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ volumesId }}',
'{{ replicationId }}'
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
- name: replications
  props:
    - name: projectsId
      value: string
      description: Required parameter for the replications resource.
    - name: locationsId
      value: string
      description: Required parameter for the replications resource.
    - name: volumesId
      value: string
      description: Required parameter for the replications resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the Replication. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}`.
        
    - name: replicationSchedule
      value: string
      description: >
        Required. Indicates the schedule for replication.
        
      valid_values: ['REPLICATION_SCHEDULE_UNSPECIFIED', 'EVERY_10_MINUTES', 'HOURLY', 'DAILY']
    - name: labels
      value: object
      description: >
        Resource labels to represent user provided metadata.
        
    - name: description
      value: string
      description: >
        A description about this replication relationship.
        
    - name: destinationVolumeParameters
      value: object
      description: >
        Required. Input only. Destination volume parameters
        
    - name: clusterLocation
      value: string
      description: >
        Optional. Location of the user cluster.
        
    - name: replicationId
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

Updates the settings of a specific replication.

```sql
UPDATE google.netapp.replications
SET 
data__name = '{{ name }}',
data__replicationSchedule = '{{ replicationSchedule }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__destinationVolumeParameters = '{{ destinationVolumeParameters }}',
data__clusterLocation = '{{ clusterLocation }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND volumesId = '{{ volumesId }}' --required
AND replicationsId = '{{ replicationsId }}' --required
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

Deletes a replication.

```sql
DELETE FROM google.netapp.replications
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND volumesId = '{{ volumesId }}' --required
AND replicationsId = '{{ replicationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop"
    values={[
        { label: 'stop', value: 'stop' },
        { label: 'resume', value: 'resume' },
        { label: 'reverse_direction', value: 'reverse_direction' },
        { label: 'establish_peering', value: 'establish_peering' },
        { label: 'sync', value: 'sync' }
    ]}
>
<TabItem value="stop">

Stop Cross Region Replication.

```sql
EXEC google.netapp.replications.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@volumesId='{{ volumesId }}' --required, 
@replicationsId='{{ replicationsId }}' --required 
@@json=
'{
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="resume">

Resume Cross Region Replication.

```sql
EXEC google.netapp.replications.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@volumesId='{{ volumesId }}' --required, 
@replicationsId='{{ replicationsId }}' --required;
```
</TabItem>
<TabItem value="reverse_direction">

Reverses direction of replication. Source becomes destination and destination becomes source.

```sql
EXEC google.netapp.replications.reverse_direction 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@volumesId='{{ volumesId }}' --required, 
@replicationsId='{{ replicationsId }}' --required;
```
</TabItem>
<TabItem value="establish_peering">

Establish replication peering.

```sql
EXEC google.netapp.replications.establish_peering 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@volumesId='{{ volumesId }}' --required, 
@replicationsId='{{ replicationsId }}' --required 
@@json=
'{
"peerClusterName": "{{ peerClusterName }}", 
"peerSvmName": "{{ peerSvmName }}", 
"peerIpAddresses": "{{ peerIpAddresses }}", 
"peerVolumeName": "{{ peerVolumeName }}"
}';
```
</TabItem>
<TabItem value="sync">

Syncs the replication. This will invoke one time volume data transfer from source to destination.

```sql
EXEC google.netapp.replications.sync 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@volumesId='{{ volumesId }}' --required, 
@replicationsId='{{ replicationsId }}' --required;
```
</TabItem>
</Tabs>
