--- 
title: vpn_gateways_status
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_gateways_status
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

Creates, updates, deletes, gets or lists a <code>vpn_gateways_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>vpn_gateways_status</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.vpn_gateways_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_status"
    values={[
        { label: 'get_status', value: 'get_status' }
    ]}
>
<TabItem value="get_status">

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
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td> (id: VpnGatewayStatus)</td>
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
    <td><a href="#get_status"><CopyableCode code="get_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpnGateway"><code>vpnGateway</code></a></td>
    <td></td>
    <td>Returns the status for the specified VPN gateway.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-vpnGateway">
    <td><CopyableCode code="vpnGateway" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_status"
    values={[
        { label: 'get_status', value: 'get_status' }
    ]}
>
<TabItem value="get_status">

Returns the status for the specified VPN gateway.

```sql
SELECT
result
FROM google.compute.vpn_gateways_status
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND vpnGateway = '{{ vpnGateway }}' -- required;
```
</TabItem>
</Tabs>
