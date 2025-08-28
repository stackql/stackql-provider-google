--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
  - compute
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="advancedDeploymentControl" /></td>
    <td><code>object</code></td>
    <td>Advanced control for cluster management, applicable only to DENSE deployment type reservations. (id: ReservationAdvancedDeploymentControl)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregateReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for aggregated resources, providing shape flexibility. (id: AllocationAggregateReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="commitment" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAfterDuration" /></td>
    <td><code>object</code></td>
    <td>Duration time relative to reservation creation when Compute Engine will automatically delete this resource. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAtTime" /></td>
    <td><code>string</code></td>
    <td>Absolute time in future when the reservation will be auto-deleted by Compute Engine. Timestamp is represented in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Specifies the deployment strategy for this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enableEmergentMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Compute Engine allows unplanned maintenance for your VMs; for example, to fix hardware errors.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#reservations for reservations. (default: compute#reservation)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedCommitments" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Full or partial URL to parent commitments. This field displays for reservations that are tied to multiple commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationSharingPolicy" /></td>
    <td><code>object</code></td>
    <td>Specify the reservation sharing policy. If unspecified, the reservation will not be shared with Google Cloud managed services. (id: AllocationReservationSharingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>object</code></td>
    <td>Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Status information for Reservation resource. (id: AllocationResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingType" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance for the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>Specify share-settings to create a shared reservation. This property is optional. For more information about the syntax and options for this field and its subfields, see the guide for creating a shared reservation. (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for instances with specific machine shapes. (id: AllocationSpecificSKUReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the reservation. - CREATING: Reservation resources are being allocated. - READY: Reservation resources have been allocated, and the reservation is ready for use. - DELETING: Reservation deletion is in progress. - UPDATING: Reservation update is in progress. </td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of Allocation resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource.Always compute#reservationsList for listsof reservations (default: compute#reservationList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="advancedDeploymentControl" /></td>
    <td><code>object</code></td>
    <td>Advanced control for cluster management, applicable only to DENSE deployment type reservations. (id: ReservationAdvancedDeploymentControl)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregateReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for aggregated resources, providing shape flexibility. (id: AllocationAggregateReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="commitment" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAfterDuration" /></td>
    <td><code>object</code></td>
    <td>Duration time relative to reservation creation when Compute Engine will automatically delete this resource. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAtTime" /></td>
    <td><code>string</code></td>
    <td>Absolute time in future when the reservation will be auto-deleted by Compute Engine. Timestamp is represented in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Specifies the deployment strategy for this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enableEmergentMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Compute Engine allows unplanned maintenance for your VMs; for example, to fix hardware errors.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#reservations for reservations. (default: compute#reservation)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedCommitments" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Full or partial URL to parent commitments. This field displays for reservations that are tied to multiple commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationSharingPolicy" /></td>
    <td><code>object</code></td>
    <td>Specify the reservation sharing policy. If unspecified, the reservation will not be shared with Google Cloud managed services. (id: AllocationReservationSharingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>object</code></td>
    <td>Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Status information for Reservation resource. (id: AllocationResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingType" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance for the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>Specify share-settings to create a shared reservation. This property is optional. For more information about the syntax and options for this field and its subfields, see the guide for creating a shared reservation. (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for instances with specific machine shapes. (id: AllocationSpecificSKUReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the reservation. - CREATING: Reservation resources are being allocated. - READY: Reservation resources have been allocated, and the reservation is ready for use. - DELETING: Reservation deletion is in progress. - UPDATING: Reservation update is in progress. </td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td></td>
    <td>Retrieves information about the specified reservation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>A list of all the reservations that have been configured for the specified project in specified zone.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of reservations. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new reservation. For more information, read Reserving zonal resources.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-paths"><code>paths</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update share settings of the reservation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified reservation.</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.</td>
</tr>
<tr>
    <td><a href="#perform_maintenance"><CopyableCode code="perform_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Perform maintenance on an extended reservation</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservation">
    <td><CopyableCode code="reservation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
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
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Retrieves information about the specified reservation.

```sql
SELECT
id,
name,
advancedDeploymentControl,
aggregateReservation,
commitment,
creationTimestamp,
deleteAfterDuration,
deleteAtTime,
deploymentType,
description,
enableEmergentMaintenance,
kind,
linkedCommitments,
reservationSharingPolicy,
resourcePolicies,
resourceStatus,
satisfiesPzs,
schedulingType,
selfLink,
shareSettings,
specificReservation,
specificReservationRequired,
status,
zone
FROM google.compute.reservations
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND reservation = '{{ reservation }}' -- required;
```
</TabItem>
<TabItem value="list">

A list of all the reservations that have been configured for the specified project in specified zone.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.reservations
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of reservations. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
advancedDeploymentControl,
aggregateReservation,
commitment,
creationTimestamp,
deleteAfterDuration,
deleteAtTime,
deploymentType,
description,
enableEmergentMaintenance,
kind,
linkedCommitments,
reservationSharingPolicy,
resourcePolicies,
resourceStatus,
satisfiesPzs,
schedulingType,
selfLink,
shareSettings,
specificReservation,
specificReservationRequired,
status,
zone
FROM google.compute.reservations
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new reservation. For more information, read Reserving zonal resources.

```sql
INSERT INTO google.compute.reservations (
data__specificReservation,
data__aggregateReservation,
data__deleteAtTime,
data__deleteAfterDuration,
data__kind,
data__id,
data__creationTimestamp,
data__selfLink,
data__zone,
data__description,
data__name,
data__commitment,
data__linkedCommitments,
data__specificReservationRequired,
data__status,
data__shareSettings,
data__satisfiesPzs,
data__resourcePolicies,
data__resourceStatus,
data__reservationSharingPolicy,
data__deploymentType,
data__advancedDeploymentControl,
data__enableEmergentMaintenance,
data__schedulingType,
project,
zone,
requestId
)
SELECT 
'{{ specificReservation }}',
'{{ aggregateReservation }}',
'{{ deleteAtTime }}',
'{{ deleteAfterDuration }}',
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ selfLink }}',
'{{ zone }}',
'{{ description }}',
'{{ name }}',
'{{ commitment }}',
'{{ linkedCommitments }}',
{{ specificReservationRequired }},
'{{ status }}',
'{{ shareSettings }}',
{{ satisfiesPzs }},
'{{ resourcePolicies }}',
'{{ resourceStatus }}',
'{{ reservationSharingPolicy }}',
'{{ deploymentType }}',
'{{ advancedDeploymentControl }}',
{{ enableEmergentMaintenance }},
'{{ schedulingType }}',
'{{ project }}',
'{{ zone }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: reservations
  props:
    - name: project
      value: string
      description: Required parameter for the reservations resource.
    - name: zone
      value: string
      description: Required parameter for the reservations resource.
    - name: specificReservation
      value: object
      description: >
        Reservation for instances with specific machine shapes.
        
    - name: aggregateReservation
      value: object
      description: >
        Reservation for aggregated resources, providing shape flexibility.
        
    - name: deleteAtTime
      value: string
      description: >
        Absolute time in future when the reservation will be auto-deleted by Compute Engine. Timestamp is represented in RFC3339 text format.
        
    - name: deleteAfterDuration
      value: object
      description: >
        Duration time relative to reservation creation when Compute Engine will automatically delete this resource.
        
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#reservations for reservations.
        
      default: compute#reservation
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined fully-qualified URL for this resource.
        
    - name: zone
      value: string
      description: >
        Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: name
      value: string
      description: >
        The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: commitment
      value: string
      description: >
        [Output Only] Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.
        
    - name: linkedCommitments
      value: array
      description: >
        [Output Only] Full or partial URL to parent commitments. This field displays for reservations that are tied to multiple commitments.
        
    - name: specificReservationRequired
      value: boolean
      description: >
        Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.
        
    - name: status
      value: string
      description: >
        [Output Only] The status of the reservation. - CREATING: Reservation resources are being allocated. - READY: Reservation resources have been allocated, and the reservation is ready for use. - DELETING: Reservation deletion is in progress. - UPDATING: Reservation update is in progress. 
        
      valid_values: ['CREATING', 'DELETING', 'INVALID', 'READY', 'UPDATING']
    - name: shareSettings
      value: object
      description: >
        Specify share-settings to create a shared reservation. This property is optional. For more information about the syntax and options for this field and its subfields, see the guide for creating a shared reservation.
        
    - name: satisfiesPzs
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: resourcePolicies
      value: object
      description: >
        Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.
        
    - name: resourceStatus
      value: object
      description: >
        [Output Only] Status information for Reservation resource.
        
    - name: reservationSharingPolicy
      value: object
      description: >
        Specify the reservation sharing policy. If unspecified, the reservation will not be shared with Google Cloud managed services.
        
    - name: deploymentType
      value: string
      description: >
        Specifies the deployment strategy for this reservation.
        
      valid_values: ['DENSE', 'DEPLOYMENT_TYPE_UNSPECIFIED']
    - name: advancedDeploymentControl
      value: object
      description: >
        Advanced control for cluster management, applicable only to DENSE deployment type reservations.
        
    - name: enableEmergentMaintenance
      value: boolean
      description: >
        Indicates whether Compute Engine allows unplanned maintenance for your VMs; for example, to fix hardware errors.
        
    - name: schedulingType
      value: string
      description: >
        The type of maintenance for the reservation.
        
      valid_values: ['GROUPED', 'GROUP_MAINTENANCE_TYPE_UNSPECIFIED', 'INDEPENDENT']
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update share settings of the reservation.

```sql
UPDATE google.compute.reservations
SET 
data__specificReservation = '{{ specificReservation }}',
data__aggregateReservation = '{{ aggregateReservation }}',
data__deleteAtTime = '{{ deleteAtTime }}',
data__deleteAfterDuration = '{{ deleteAfterDuration }}',
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__selfLink = '{{ selfLink }}',
data__zone = '{{ zone }}',
data__description = '{{ description }}',
data__name = '{{ name }}',
data__commitment = '{{ commitment }}',
data__linkedCommitments = '{{ linkedCommitments }}',
data__specificReservationRequired = {{ specificReservationRequired }},
data__status = '{{ status }}',
data__shareSettings = '{{ shareSettings }}',
data__satisfiesPzs = {{ satisfiesPzs }},
data__resourcePolicies = '{{ resourcePolicies }}',
data__resourceStatus = '{{ resourceStatus }}',
data__reservationSharingPolicy = '{{ reservationSharingPolicy }}',
data__deploymentType = '{{ deploymentType }}',
data__advancedDeploymentControl = '{{ advancedDeploymentControl }}',
data__enableEmergentMaintenance = {{ enableEmergentMaintenance }},
data__schedulingType = '{{ schedulingType }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND reservation = '{{ reservation }}' --required
AND paths = '{{ paths}}'
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
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

Deletes the specified reservation.

```sql
DELETE FROM google.compute.reservations
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND reservation = '{{ reservation }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resize"
    values={[
        { label: 'resize', value: 'resize' },
        { label: 'perform_maintenance', value: 'perform_maintenance' }
    ]}
>
<TabItem value="resize">

Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.

```sql
EXEC google.compute.reservations.resize 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@reservation='{{ reservation }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"specificSkuCount": "{{ specificSkuCount }}"
}';
```
</TabItem>
<TabItem value="perform_maintenance">

Perform maintenance on an extended reservation

```sql
EXEC google.compute.reservations.perform_maintenance 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@reservation='{{ reservation }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"maintenanceScope": "{{ maintenanceScope }}"
}';
```
</TabItem>
</Tabs>
