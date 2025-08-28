--- 
title: commands
hide_title: false
hide_table_of_contents: false
keywords:
  - commands
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>commands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>commands</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.commands" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="commandExpireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.</td>
</tr>
<tr>
    <td><CopyableCode code="commandId" /></td>
    <td><code>string (int64)</code></td>
    <td>Unique ID of a device command.</td>
</tr>
<tr>
    <td><CopyableCode code="commandResult" /></td>
    <td><code>object</code></td>
    <td>The result of the command execution. (id: DirectoryChromeosdevicesCommandResult)</td>
</tr>
<tr>
    <td><CopyableCode code="issueTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the command was issued by the admin.</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>string</code></td>
    <td>The payload that the command specified, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates the command state.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the command.</td>
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
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a>, <a href="#parameter-commandId"><code>commandId</code></a></td>
    <td></td>
    <td>Gets command data a specific command issued to the device.</td>
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
<tr id="parameter-commandId">
    <td><CopyableCode code="commandId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customerId">
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets command data a specific command issued to the device.

```sql
SELECT
commandExpireTime,
commandId,
commandResult,
issueTime,
payload,
state,
type
FROM googleadmin.directory.commands
WHERE customerId = '{{ customerId }}' -- required
AND deviceId = '{{ deviceId }}' -- required
AND commandId = '{{ commandId }}' -- required;
```
</TabItem>
</Tabs>
