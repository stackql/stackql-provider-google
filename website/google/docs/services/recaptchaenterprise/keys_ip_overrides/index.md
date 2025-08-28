--- 
title: keys_ip_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_ip_overrides
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists a <code>keys_ip_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys_ip_overrides</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.keys_ip_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ip_overrides"
    values={[
        { label: 'list_ip_overrides', value: 'list_ip_overrides' }
    ]}
>
<TabItem value="list_ip_overrides">

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
    <td><CopyableCode code="ip" /></td>
    <td><code>string</code></td>
    <td>Required. The IP address to override (can be IPv4, IPv6 or CIDR). The IP override must be a valid IPv4 or IPv6 address, or a CIDR range. The IP override must be a public IP address. Example of IPv4: 168.192.5.6 Example of IPv6: 2001:0000:130F:0000:0000:09C0:876A:130B Example of IPv4 with CIDR: 168.192.5.0/24 Example of IPv6 with CIDR: 2001:0DB8:1234::/48</td>
</tr>
<tr>
    <td><CopyableCode code="overrideType" /></td>
    <td><code>string</code></td>
    <td>Required. Describes the type of IP override.</td>
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
    <td><a href="#list_ip_overrides"><CopyableCode code="list_ip_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all IP overrides for a key.</td>
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
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="list_ip_overrides"
    values={[
        { label: 'list_ip_overrides', value: 'list_ip_overrides' }
    ]}
>
<TabItem value="list_ip_overrides">

Lists all IP overrides for a key.

```sql
SELECT
ip,
overrideType
FROM google.recaptchaenterprise.keys_ip_overrides
WHERE projectsId = '{{ projectsId }}' -- required
AND keysId = '{{ keysId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
