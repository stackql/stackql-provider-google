--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
  - bigqueryreservation
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

Creates, updates, deletes, gets or lists a <code>reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reservations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigqueryreservation.reservations" /></td></tr>
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
    <td>Identifier. The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration parameters for the auto scaling feature. (id: Autoscale)</td>
</tr>
<tr>
    <td><CopyableCode code="concurrency" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as target job concurrency in the Information Schema, DDL and BigQuery CLI.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>Optional. Edition of the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreIdleSlots" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels associated with this reservation. You can use these to organize and group your reservations. You can set this property when you create or update a reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="maxSlots" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The overall max slots for the reservation, covering slot_capacity (baseline), idle slots (if ignore_idle_slots is false) and scaled slots. If present, the reservation won't use more than the specified number of slots, even if there is demand and supply (from idle slots). NOTE: capping a reservation's idle slot usage is best effort and its usage may exceed the max_slots value. However, in terms of autoscale.current_slots (which accounts for the additional added slots), it will never exceed the max_slots - baseline. This field must be set together with the scaling_mode enum value, otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. If the max_slots and scaling_mode are set, the autoscale or autoscale.max_slots field must be unset. Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. However, the autoscale field may still be in the output. The autopscale.max_slots will always show as 0 and the autoscaler.current_slots will represent the current slots from autoscaler excluding idle slots. For example, if the max_slots is 1000 and scaling_mode is AUTOSCALE_ONLY, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots may be any value between 0 and 1000. If the max_slots is 1000, scaling_mode is ALL_SLOTS, the baseline is 100 and idle slots usage is 200, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots will not be higher than 700. If the max_slots is 1000, scaling_mode is IDLE_SLOTS_ONLY, then in the output, the autoscaler field will be null. If the max_slots and scaling_mode are set, then the ignore_idle_slots field must be aligned with the scaling_mode enum value.(See details in ScalingMode comments). Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note, the max_slots is for user to manage the part of slots greater than the baseline. Therefore, we don't allow users to set max_slots smaller or equal to the baseline as it will not be meaningful. If the field is present and slot_capacity&gt;=max_slots, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note that if max_slots is set to 0, we will treat it as unset. Customers can set max_slots to 0 and set scaling_mode to SCALING_MODE_UNSPECIFIED to disable the max_slots feature.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRegionAuxiliary" /></td>
    <td><code>boolean</code></td>
    <td>Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.</td>
</tr>
<tr>
    <td><CopyableCode code="originalPrimaryLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. The location where the reservation was originally created. This is set only during the failover reservation's creation. All billing charges for the failover reservation will be applied to this location.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. The current location of the reservation's primary replica. This field is only set for reservations using the managed disaster recovery feature.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The Disaster Recovery(DR) replication status of the reservation. This is only available for the primary replicas of DR/failover reservations and provides information about the both the staleness of the secondary and the last error encountered while trying to replicate changes from the primary to the secondary. If this field is blank, it means that the reservation is either not a DR reservation or the reservation is a DR secondary or that any replication operations on the reservation have succeeded. (id: ReplicationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationGroup" /></td>
    <td><code>string</code></td>
    <td>Optional. The reservation group that this reservation belongs to. You can set this property when you create or update a reservation. Reservations do not need to belong to a reservation group. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/reservationGroups/&#123;reservation_group&#125; or just &#123;reservation_group&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="scalingMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The scaling mode for the reservation. If the field is present but max_slots is not present, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. The current location of the reservation's secondary replica. This field is only set for reservations using the managed disaster recovery feature. Users can set this in create reservation calls to create a failover reservation or in update reservation calls to convert a non-failover reservation to a failover reservation(or vice versa).</td>
</tr>
<tr>
    <td><CopyableCode code="slotCapacity" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Baseline slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false, or autoscaling is enabled. The total slot_capacity of the reservation and its siblings may exceed the total slot_count of capacity commitments. In that case, the exceeding slots will be charged with the autoscale SKU. You can increase the number of baseline slots in a reservation every few minutes. If you want to decrease your baseline slots, you are limited to once an hour if you have recently changed your baseline slot capacity and your baseline slots exceed your committed slots. Otherwise, you can decrease your baseline slots every few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of the reservation.</td>
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
    <td>Identifier. The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration parameters for the auto scaling feature. (id: Autoscale)</td>
</tr>
<tr>
    <td><CopyableCode code="concurrency" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as target job concurrency in the Information Schema, DDL and BigQuery CLI.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>Optional. Edition of the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreIdleSlots" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels associated with this reservation. You can use these to organize and group your reservations. You can set this property when you create or update a reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="maxSlots" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The overall max slots for the reservation, covering slot_capacity (baseline), idle slots (if ignore_idle_slots is false) and scaled slots. If present, the reservation won't use more than the specified number of slots, even if there is demand and supply (from idle slots). NOTE: capping a reservation's idle slot usage is best effort and its usage may exceed the max_slots value. However, in terms of autoscale.current_slots (which accounts for the additional added slots), it will never exceed the max_slots - baseline. This field must be set together with the scaling_mode enum value, otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. If the max_slots and scaling_mode are set, the autoscale or autoscale.max_slots field must be unset. Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. However, the autoscale field may still be in the output. The autopscale.max_slots will always show as 0 and the autoscaler.current_slots will represent the current slots from autoscaler excluding idle slots. For example, if the max_slots is 1000 and scaling_mode is AUTOSCALE_ONLY, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots may be any value between 0 and 1000. If the max_slots is 1000, scaling_mode is ALL_SLOTS, the baseline is 100 and idle slots usage is 200, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots will not be higher than 700. If the max_slots is 1000, scaling_mode is IDLE_SLOTS_ONLY, then in the output, the autoscaler field will be null. If the max_slots and scaling_mode are set, then the ignore_idle_slots field must be aligned with the scaling_mode enum value.(See details in ScalingMode comments). Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note, the max_slots is for user to manage the part of slots greater than the baseline. Therefore, we don't allow users to set max_slots smaller or equal to the baseline as it will not be meaningful. If the field is present and slot_capacity&gt;=max_slots, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note that if max_slots is set to 0, we will treat it as unset. Customers can set max_slots to 0 and set scaling_mode to SCALING_MODE_UNSPECIFIED to disable the max_slots feature.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRegionAuxiliary" /></td>
    <td><code>boolean</code></td>
    <td>Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.</td>
</tr>
<tr>
    <td><CopyableCode code="originalPrimaryLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. The location where the reservation was originally created. This is set only during the failover reservation's creation. All billing charges for the failover reservation will be applied to this location.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. The current location of the reservation's primary replica. This field is only set for reservations using the managed disaster recovery feature.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The Disaster Recovery(DR) replication status of the reservation. This is only available for the primary replicas of DR/failover reservations and provides information about the both the staleness of the secondary and the last error encountered while trying to replicate changes from the primary to the secondary. If this field is blank, it means that the reservation is either not a DR reservation or the reservation is a DR secondary or that any replication operations on the reservation have succeeded. (id: ReplicationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationGroup" /></td>
    <td><code>string</code></td>
    <td>Optional. The reservation group that this reservation belongs to. You can set this property when you create or update a reservation. Reservations do not need to belong to a reservation group. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/reservationGroups/&#123;reservation_group&#125; or just &#123;reservation_group&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="scalingMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The scaling mode for the reservation. If the field is present but max_slots is not present, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. The current location of the reservation's secondary replica. This field is only set for reservations using the managed disaster recovery feature. Users can set this in create reservation calls to create a failover reservation or in update reservation calls to convert a non-failover reservation to a failover reservation(or vice versa).</td>
</tr>
<tr>
    <td><CopyableCode code="slotCapacity" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Baseline slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false, or autoscaling is enabled. The total slot_capacity of the reservation and its siblings may exceed the total slot_count of capacity commitments. In that case, the exceeding slots will be charged with the autoscale SKU. You can increase the number of baseline slots in a reservation every few minutes. If you want to decrease your baseline slots, you are limited to once an hour if you have recently changed your baseline slot capacity and your baseline slots exceed your committed slots. Otherwise, you can decrease your baseline slots every few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of the reservation.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td></td>
    <td>Returns information about the reservation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the reservations for the project in the specified location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-reservationId"><code>reservationId</code></a></td>
    <td>Creates a new reservation resource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing reservation resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td></td>
    <td>Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.</td>
</tr>
<tr>
    <td><a href="#failover_reservation"><CopyableCode code="failover_reservation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td></td>
    <td>Fail over a reservation to the secondary location. The operation should be done in the current secondary location, which will be promoted to the new primary location for the reservation. Attempting to failover a reservation in the current primary location will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.</td>
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
<tr id="parameter-reservationsId">
    <td><CopyableCode code="reservationsId" /></td>
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
<tr id="parameter-reservationId">
    <td><CopyableCode code="reservationId" /></td>
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

Returns information about the reservation.

```sql
SELECT
name,
autoscale,
concurrency,
creationTime,
edition,
ignoreIdleSlots,
labels,
maxSlots,
multiRegionAuxiliary,
originalPrimaryLocation,
primaryLocation,
replicationStatus,
reservationGroup,
scalingMode,
secondaryLocation,
slotCapacity,
updateTime
FROM google.bigqueryreservation.reservations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reservationsId = '{{ reservationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all the reservations for the project in the specified location.

```sql
SELECT
name,
autoscale,
concurrency,
creationTime,
edition,
ignoreIdleSlots,
labels,
maxSlots,
multiRegionAuxiliary,
originalPrimaryLocation,
primaryLocation,
replicationStatus,
reservationGroup,
scalingMode,
secondaryLocation,
slotCapacity,
updateTime
FROM google.bigqueryreservation.reservations
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

Creates a new reservation resource.

```sql
INSERT INTO google.bigqueryreservation.reservations (
data__name,
data__slotCapacity,
data__ignoreIdleSlots,
data__autoscale,
data__concurrency,
data__multiRegionAuxiliary,
data__edition,
data__secondaryLocation,
data__maxSlots,
data__scalingMode,
data__labels,
data__reservationGroup,
projectsId,
locationsId,
reservationId
)
SELECT 
'{{ name }}',
'{{ slotCapacity }}',
{{ ignoreIdleSlots }},
'{{ autoscale }}',
'{{ concurrency }}',
{{ multiRegionAuxiliary }},
'{{ edition }}',
'{{ secondaryLocation }}',
'{{ maxSlots }}',
'{{ scalingMode }}',
'{{ labels }}',
'{{ reservationGroup }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ reservationId }}'
RETURNING
name,
autoscale,
concurrency,
creationTime,
edition,
ignoreIdleSlots,
labels,
maxSlots,
multiRegionAuxiliary,
originalPrimaryLocation,
primaryLocation,
replicationStatus,
reservationGroup,
scalingMode,
secondaryLocation,
slotCapacity,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: reservations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the reservations resource.
    - name: locationsId
      value: string
      description: Required parameter for the reservations resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
        
    - name: slotCapacity
      value: string
      description: >
        Optional. Baseline slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false, or autoscaling is enabled. The total slot_capacity of the reservation and its siblings may exceed the total slot_count of capacity commitments. In that case, the exceeding slots will be charged with the autoscale SKU. You can increase the number of baseline slots in a reservation every few minutes. If you want to decrease your baseline slots, you are limited to once an hour if you have recently changed your baseline slot capacity and your baseline slots exceed your committed slots. Otherwise, you can decrease your baseline slots every few minutes.
        
    - name: ignoreIdleSlots
      value: boolean
      description: >
        Optional. If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.
        
    - name: autoscale
      value: object
      description: >
        Optional. The configuration parameters for the auto scaling feature.
        
    - name: concurrency
      value: string
      description: >
        Optional. Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as target job concurrency in the Information Schema, DDL and BigQuery CLI.
        
    - name: multiRegionAuxiliary
      value: boolean
      description: >
        Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. NOTE: this is a preview feature. Project must be allow-listed in order to set this field.
        
    - name: edition
      value: string
      description: >
        Optional. Edition of the reservation.
        
      valid_values: ['EDITION_UNSPECIFIED', 'STANDARD', 'ENTERPRISE', 'ENTERPRISE_PLUS']
    - name: secondaryLocation
      value: string
      description: >
        Optional. The current location of the reservation's secondary replica. This field is only set for reservations using the managed disaster recovery feature. Users can set this in create reservation calls to create a failover reservation or in update reservation calls to convert a non-failover reservation to a failover reservation(or vice versa).
        
    - name: maxSlots
      value: string
      description: >
        Optional. The overall max slots for the reservation, covering slot_capacity (baseline), idle slots (if ignore_idle_slots is false) and scaled slots. If present, the reservation won't use more than the specified number of slots, even if there is demand and supply (from idle slots). NOTE: capping a reservation's idle slot usage is best effort and its usage may exceed the max_slots value. However, in terms of autoscale.current_slots (which accounts for the additional added slots), it will never exceed the max_slots - baseline. This field must be set together with the scaling_mode enum value, otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. If the max_slots and scaling_mode are set, the autoscale or autoscale.max_slots field must be unset. Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. However, the autoscale field may still be in the output. The autopscale.max_slots will always show as 0 and the autoscaler.current_slots will represent the current slots from autoscaler excluding idle slots. For example, if the max_slots is 1000 and scaling_mode is AUTOSCALE_ONLY, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots may be any value between 0 and 1000. If the max_slots is 1000, scaling_mode is ALL_SLOTS, the baseline is 100 and idle slots usage is 200, then in the output, the autoscaler.max_slots will be 0 and the autoscaler.current_slots will not be higher than 700. If the max_slots is 1000, scaling_mode is IDLE_SLOTS_ONLY, then in the output, the autoscaler field will be null. If the max_slots and scaling_mode are set, then the ignore_idle_slots field must be aligned with the scaling_mode enum value.(See details in ScalingMode comments). Otherwise the request will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note, the max_slots is for user to manage the part of slots greater than the baseline. Therefore, we don't allow users to set max_slots smaller or equal to the baseline as it will not be meaningful. If the field is present and slot_capacity>=max_slots, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`. Please note that if max_slots is set to 0, we will treat it as unset. Customers can set max_slots to 0 and set scaling_mode to SCALING_MODE_UNSPECIFIED to disable the max_slots feature.
        
    - name: scalingMode
      value: string
      description: >
        Optional. The scaling mode for the reservation. If the field is present but max_slots is not present, requests will be rejected with error code `google.rpc.Code.INVALID_ARGUMENT`.
        
      valid_values: ['SCALING_MODE_UNSPECIFIED', 'AUTOSCALE_ONLY', 'IDLE_SLOTS_ONLY', 'ALL_SLOTS']
    - name: labels
      value: object
      description: >
        Optional. The labels associated with this reservation. You can use these to organize and group your reservations. You can set this property when you create or update a reservation.
        
    - name: reservationGroup
      value: string
      description: >
        Optional. The reservation group that this reservation belongs to. You can set this property when you create or update a reservation. Reservations do not need to belong to a reservation group. Format: projects/{project}/locations/{location}/reservationGroups/{reservation_group} or just {reservation_group}
        
    - name: reservationId
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

Updates an existing reservation resource.

```sql
UPDATE google.bigqueryreservation.reservations
SET 
data__name = '{{ name }}',
data__slotCapacity = '{{ slotCapacity }}',
data__ignoreIdleSlots = {{ ignoreIdleSlots }},
data__autoscale = '{{ autoscale }}',
data__concurrency = '{{ concurrency }}',
data__multiRegionAuxiliary = {{ multiRegionAuxiliary }},
data__edition = '{{ edition }}',
data__secondaryLocation = '{{ secondaryLocation }}',
data__maxSlots = '{{ maxSlots }}',
data__scalingMode = '{{ scalingMode }}',
data__labels = '{{ labels }}',
data__reservationGroup = '{{ reservationGroup }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reservationsId = '{{ reservationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
autoscale,
concurrency,
creationTime,
edition,
ignoreIdleSlots,
labels,
maxSlots,
multiRegionAuxiliary,
originalPrimaryLocation,
primaryLocation,
replicationStatus,
reservationGroup,
scalingMode,
secondaryLocation,
slotCapacity,
updateTime;
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

Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.

```sql
DELETE FROM google.bigqueryreservation.reservations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reservationsId = '{{ reservationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover_reservation"
    values={[
        { label: 'failover_reservation', value: 'failover_reservation' }
    ]}
>
<TabItem value="failover_reservation">

Fail over a reservation to the secondary location. The operation should be done in the current secondary location, which will be promoted to the new primary location for the reservation. Attempting to failover a reservation in the current primary location will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

```sql
EXEC google.bigqueryreservation.reservations.failover_reservation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reservationsId='{{ reservationsId }}' --required 
@@json=
'{
"failoverMode": "{{ failoverMode }}"
}';
```
</TabItem>
</Tabs>
