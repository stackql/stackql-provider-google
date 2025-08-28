--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - servicenetworking
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#disable_vpc_service_controls"><CopyableCode code="disable_vpc_service_controls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Disables VPC service controls for a connection.</td>
</tr>
<tr>
    <td><a href="#enable_vpc_service_controls"><CopyableCode code="enable_vpc_service_controls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Enables VPC service controls for a connection.</td>
</tr>
<tr>
    <td><a href="#search_range"><CopyableCode code="search_range" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).</td>
</tr>
<tr>
    <td><a href="#validate"><CopyableCode code="validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disable_vpc_service_controls"
    values={[
        { label: 'disable_vpc_service_controls', value: 'disable_vpc_service_controls' },
        { label: 'enable_vpc_service_controls', value: 'enable_vpc_service_controls' },
        { label: 'search_range', value: 'search_range' },
        { label: 'validate', value: 'validate' }
    ]}
>
<TabItem value="disable_vpc_service_controls">

Disables VPC service controls for a connection.

```sql
EXEC google.servicenetworking.services.disable_vpc_service_controls 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"consumerNetwork": "{{ consumerNetwork }}"
}';
```
</TabItem>
<TabItem value="enable_vpc_service_controls">

Enables VPC service controls for a connection.

```sql
EXEC google.servicenetworking.services.enable_vpc_service_controls 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"consumerNetwork": "{{ consumerNetwork }}"
}';
```
</TabItem>
<TabItem value="search_range">

Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).

```sql
EXEC google.servicenetworking.services.search_range 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"network": "{{ network }}", 
"ipPrefixLength": {{ ipPrefixLength }}
}';
```
</TabItem>
<TabItem value="validate">

Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

```sql
EXEC google.servicenetworking.services.validate 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"consumerNetwork": "{{ consumerNetwork }}", 
"validateNetwork": {{ validateNetwork }}, 
"consumerProject": "{{ consumerProject }}", 
"rangeReservation": "{{ rangeReservation }}", 
"checkServiceNetworkingUsePermission": {{ checkServiceNetworkingUsePermission }}
}';
```
</TabItem>
</Tabs>
