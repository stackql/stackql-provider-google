--- 
title: effective_firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_firewalls
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

Creates, updates, deletes, gets or lists an <code>effective_firewalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>effective_firewalls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.effective_firewalls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_effective_firewalls"
    values={[
        { label: 'get_effective_firewalls', value: 'get_effective_firewalls' }
    ]}
>
<TabItem value="get_effective_firewalls">

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
    <td><CopyableCode code="firewallPolicys" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Effective firewalls from firewall policies.</td>
</tr>
<tr>
    <td><CopyableCode code="firewalls" /></td>
    <td><code>array</code></td>
    <td>Effective firewalls on the instance.</td>
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
    <td><a href="#get_effective_firewalls"><CopyableCode code="get_effective_firewalls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-networkInterface"><code>networkInterface</code></a></td>
    <td></td>
    <td>Returns effective firewalls applied to an interface of the instance.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkInterface">
    <td><CopyableCode code="networkInterface" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_effective_firewalls"
    values={[
        { label: 'get_effective_firewalls', value: 'get_effective_firewalls' }
    ]}
>
<TabItem value="get_effective_firewalls">

Returns effective firewalls applied to an interface of the instance.

```sql
SELECT
firewallPolicys,
firewalls
FROM google.compute.effective_firewalls
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instance = '{{ instance }}' -- required
AND networkInterface = '{{ networkInterface }}' -- required;
```
</TabItem>
</Tabs>
