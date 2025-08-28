--- 
title: nat_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - nat_addresses
  - apigee
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

Creates, updates, deletes, gets or lists a <code>nat_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>nat_addresses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.nat_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_instances_nat_addresses_get"
    values={[
        { label: 'organizations_instances_nat_addresses_get', value: 'organizations_instances_nat_addresses_get' },
        { label: 'organizations_instances_nat_addresses_list', value: 'organizations_instances_nat_addresses_list' }
    ]}
>
<TabItem value="organizations_instances_nat_addresses_get">

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
    <td>Required. Resource ID of the NAT address.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The static IPV4 address.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the nat address.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_instances_nat_addresses_list">

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
    <td>Required. Resource ID of the NAT address.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The static IPV4 address.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the nat address.</td>
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
    <td><a href="#organizations_instances_nat_addresses_get"><CopyableCode code="organizations_instances_nat_addresses_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-natAddressesId"><code>natAddressesId</code></a></td>
    <td></td>
    <td>Gets the details of a NAT address. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_nat_addresses_list"><CopyableCode code="organizations_instances_nat_addresses_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_nat_addresses_create"><CopyableCode code="organizations_instances_nat_addresses_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_nat_addresses_delete"><CopyableCode code="organizations_instances_nat_addresses_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-natAddressesId"><code>natAddressesId</code></a></td>
    <td></td>
    <td>Deletes the NAT address. Connections that are actively using the address are drained before it is removed. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_nat_addresses_activate"><CopyableCode code="organizations_instances_nat_addresses_activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-natAddressesId"><code>natAddressesId</code></a></td>
    <td></td>
    <td>Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.</td>
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
<tr id="parameter-natAddressesId">
    <td><CopyableCode code="natAddressesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_instances_nat_addresses_get"
    values={[
        { label: 'organizations_instances_nat_addresses_get', value: 'organizations_instances_nat_addresses_get' },
        { label: 'organizations_instances_nat_addresses_list', value: 'organizations_instances_nat_addresses_list' }
    ]}
>
<TabItem value="organizations_instances_nat_addresses_get">

Gets the details of a NAT address. **Note:** Not supported for Apigee hybrid.

```sql
SELECT
name,
ipAddress,
state
FROM google.apigee.nat_addresses
WHERE organizationsId = '{{ organizationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND natAddressesId = '{{ natAddressesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_instances_nat_addresses_list">

Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.

```sql
SELECT
name,
ipAddress,
state
FROM google.apigee.nat_addresses
WHERE organizationsId = '{{ organizationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_instances_nat_addresses_create"
    values={[
        { label: 'organizations_instances_nat_addresses_create', value: 'organizations_instances_nat_addresses_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_instances_nat_addresses_create">

Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.

```sql
INSERT INTO google.apigee.nat_addresses (
data__name,
organizationsId,
instancesId
)
SELECT 
'{{ name }}',
'{{ organizationsId }}',
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
- name: nat_addresses
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the nat_addresses resource.
    - name: instancesId
      value: string
      description: Required parameter for the nat_addresses resource.
    - name: name
      value: string
      description: >
        Required. Resource ID of the NAT address.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_instances_nat_addresses_delete"
    values={[
        { label: 'organizations_instances_nat_addresses_delete', value: 'organizations_instances_nat_addresses_delete' }
    ]}
>
<TabItem value="organizations_instances_nat_addresses_delete">

Deletes the NAT address. Connections that are actively using the address are drained before it is removed. **Note:** Not supported for Apigee hybrid.

```sql
DELETE FROM google.apigee.nat_addresses
WHERE organizationsId = '{{ organizationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND natAddressesId = '{{ natAddressesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_instances_nat_addresses_activate"
    values={[
        { label: 'organizations_instances_nat_addresses_activate', value: 'organizations_instances_nat_addresses_activate' }
    ]}
>
<TabItem value="organizations_instances_nat_addresses_activate">

Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.

```sql
EXEC google.apigee.nat_addresses.organizations_instances_nat_addresses_activate 
@organizationsId='{{ organizationsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@natAddressesId='{{ natAddressesId }}' --required;
```
</TabItem>
</Tabs>
