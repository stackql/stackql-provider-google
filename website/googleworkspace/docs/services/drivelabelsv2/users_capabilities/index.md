--- 
title: users_capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - users_capabilities
  - drivelabelsv2
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>users_capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>users_capabilities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivelabelsv2.users_capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capabilities"
    values={[
        { label: 'get_capabilities', value: 'get_capabilities' }
    ]}
>
<TabItem value="get_capabilities">

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
    <td>Output only. Resource name for the user capabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="canAccessLabelManager" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user is allowed access to the label manager.</td>
</tr>
<tr>
    <td><CopyableCode code="canAdministrateLabels" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user is an administrator for the shared labels feature.</td>
</tr>
<tr>
    <td><CopyableCode code="canCreateAdminLabels" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user is allowed to create admin labels.</td>
</tr>
<tr>
    <td><CopyableCode code="canCreateSharedLabels" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user is allowed to create shared labels.</td>
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
    <td><a href="#get_capabilities"><CopyableCode code="get_capabilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Gets the user capabilities.</td>
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
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capabilities"
    values={[
        { label: 'get_capabilities', value: 'get_capabilities' }
    ]}
>
<TabItem value="get_capabilities">

Gets the user capabilities.

```sql
SELECT
name,
canAccessLabelManager,
canAdministrateLabels,
canCreateAdminLabels,
canCreateSharedLabels
FROM googleworkspace.drivelabelsv2.users_capabilities
WHERE usersId = '{{ usersId }}' -- required
AND customer = '{{ customer }}';
```
</TabItem>
</Tabs>
