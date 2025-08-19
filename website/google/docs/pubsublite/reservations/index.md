--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
  - pubsublite
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsublite.reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="admin_projects_locations_reservations_get"
    values={[
        { label: 'admin_projects_locations_reservations_get', value: 'admin_projects_locations_reservations_get' },
        { label: 'admin_projects_locations_reservations_list', value: 'admin_projects_locations_reservations_list' }
    ]}
>
<TabItem value="admin_projects_locations_reservations_get">

Metadata about a reservation resource.

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
    <td>The name of the reservation. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/reservations/&#123;reservation_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="throughputCapacity" /></td>
    <td><code>string (int64)</code></td>
    <td>The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="admin_projects_locations_reservations_list">

Response for ListReservations.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="reservations" /></td>
    <td><code>array</code></td>
    <td>The list of reservation in the requested parent. The order of the reservations is unspecified.</td>
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
    <td><a href="#admin_projects_locations_reservations_get"><CopyableCode code="admin_projects_locations_reservations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td></td>
    <td>Returns the reservation configuration.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_reservations_list"><CopyableCode code="admin_projects_locations_reservations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of reservations for the given project.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_reservations_create"><CopyableCode code="admin_projects_locations_reservations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-reservationId"><code>reservationId</code></a></td>
    <td>Creates a new reservation.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_reservations_patch"><CopyableCode code="admin_projects_locations_reservations_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates properties of the specified reservation.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_reservations_delete"><CopyableCode code="admin_projects_locations_reservations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td></td>
    <td>Deletes the specified reservation.</td>
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
    defaultValue="admin_projects_locations_reservations_get"
    values={[
        { label: 'admin_projects_locations_reservations_get', value: 'admin_projects_locations_reservations_get' },
        { label: 'admin_projects_locations_reservations_list', value: 'admin_projects_locations_reservations_list' }
    ]}
>
<TabItem value="admin_projects_locations_reservations_get">

Returns the reservation configuration.

```sql
SELECT
name,
throughputCapacity
FROM google.pubsublite.reservations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reservationsId = '{{ reservationsId }}' -- required;
```
</TabItem>
<TabItem value="admin_projects_locations_reservations_list">

Returns the list of reservations for the given project.

```sql
SELECT
nextPageToken,
reservations
FROM google.pubsublite.reservations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="admin_projects_locations_reservations_create"
    values={[
        { label: 'admin_projects_locations_reservations_create', value: 'admin_projects_locations_reservations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="admin_projects_locations_reservations_create">

Creates a new reservation.

```sql
INSERT INTO google.pubsublite.reservations (
data__name,
data__throughputCapacity,
projectsId,
locationsId,
reservationId
)
SELECT 
'{{ name }}',
'{{ throughputCapacity }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ reservationId }}'
RETURNING
name,
throughputCapacity
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
        The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
        
    - name: throughputCapacity
      value: string
      description: >
        The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.
        
    - name: reservationId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="admin_projects_locations_reservations_patch"
    values={[
        { label: 'admin_projects_locations_reservations_patch', value: 'admin_projects_locations_reservations_patch' }
    ]}
>
<TabItem value="admin_projects_locations_reservations_patch">

Updates properties of the specified reservation.

```sql
UPDATE google.pubsublite.reservations
SET 
data__name = '{{ name }}',
data__throughputCapacity = '{{ throughputCapacity }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reservationsId = '{{ reservationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
throughputCapacity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="admin_projects_locations_reservations_delete"
    values={[
        { label: 'admin_projects_locations_reservations_delete', value: 'admin_projects_locations_reservations_delete' }
    ]}
>
<TabItem value="admin_projects_locations_reservations_delete">

Deletes the specified reservation.

```sql
DELETE FROM google.pubsublite.reservations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reservationsId = '{{ reservationsId }}' --required;
```
</TabItem>
</Tabs>
