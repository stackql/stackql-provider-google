--- 
title: chromeos
hide_title: false
hide_table_of_contents: false
keywords:
  - chromeos
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

Creates, updates, deletes, gets or lists a <code>chromeos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>chromeos</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.chromeos" /></td></tr>
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
    <td><a href="#issue_command"><CopyableCode code="issue_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td></td>
    <td>Issues a command for the device to execute.</td>
</tr>
<tr>
    <td><a href="#batch_change_status"><CopyableCode code="batch_change_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td></td>
    <td>Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="issue_command"
    values={[
        { label: 'issue_command', value: 'issue_command' },
        { label: 'batch_change_status', value: 'batch_change_status' }
    ]}
>
<TabItem value="issue_command">

Issues a command for the device to execute.

```sql
EXEC googleadmin.directory.chromeos.issue_command 
@customerId='{{ customerId }}' --required, 
@deviceId='{{ deviceId }}' --required 
@@json=
'{
"commandType": "{{ commandType }}", 
"payload": "{{ payload }}"
}';
```
</TabItem>
<TabItem value="batch_change_status">

Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).

```sql
EXEC googleadmin.directory.chromeos.batch_change_status 
@customerId='{{ customerId }}' --required 
@@json=
'{
"deviceIds": "{{ deviceIds }}", 
"changeChromeOsDeviceStatusAction": "{{ changeChromeOsDeviceStatusAction }}", 
"deprovisionReason": "{{ deprovisionReason }}"
}';
```
</TabItem>
</Tabs>
