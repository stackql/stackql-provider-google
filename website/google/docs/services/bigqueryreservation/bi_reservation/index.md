--- 
title: bi_reservation
hide_title: false
hide_table_of_contents: false
keywords:
  - bi_reservation
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

Creates, updates, deletes, gets or lists a <code>bi_reservation</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bi_reservation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigqueryreservation.bi_reservation" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bi_reservation"
    values={[
        { label: 'get_bi_reservation', value: 'get_bi_reservation' }
    ]}
>
<TabItem value="get_bi_reservation">

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
    <td>Identifier. The resource name of the singleton BI reservation. Reservation names have the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/biReservation`.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredTables" /></td>
    <td><code>array</code></td>
    <td>Optional. Preferred tables to use BI capacity for.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Size of a reservation, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a reservation.</td>
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
    <td><a href="#get_bi_reservation"><CopyableCode code="get_bi_reservation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves a BI reservation.</td>
</tr>
<tr>
    <td><a href="#update_bi_reservation"><CopyableCode code="update_bi_reservation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a BI reservation. Only fields specified in the `field_mask` are updated. A singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bi_reservation"
    values={[
        { label: 'get_bi_reservation', value: 'get_bi_reservation' }
    ]}
>
<TabItem value="get_bi_reservation">

Retrieves a BI reservation.

```sql
SELECT
name,
preferredTables,
size,
updateTime
FROM google.bigqueryreservation.bi_reservation
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bi_reservation"
    values={[
        { label: 'update_bi_reservation', value: 'update_bi_reservation' }
    ]}
>
<TabItem value="update_bi_reservation">

Updates a BI reservation. Only fields specified in the `field_mask` are updated. A singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.

```sql
UPDATE google.bigqueryreservation.bi_reservation
SET 
data__name = '{{ name }}',
data__size = '{{ size }}',
data__preferredTables = '{{ preferredTables }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
preferredTables,
size,
updateTime;
```
</TabItem>
</Tabs>
