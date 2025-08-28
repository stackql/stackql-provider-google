--- 
title: instances_disk_shrink_config
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_disk_shrink_config
  - sqladmin
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

Creates, updates, deletes, gets or lists an <code>instances_disk_shrink_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_disk_shrink_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.instances_disk_shrink_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_disk_shrink_config"
    values={[
        { label: 'get_disk_shrink_config', value: 'get_disk_shrink_config' }
    ]}
>
<TabItem value="get_disk_shrink_config">

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
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#getDiskShrinkConfig`.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Additional message to customers.</td>
</tr>
<tr>
    <td><CopyableCode code="minimalTargetSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>The minimum size to which a disk can be shrunk in GigaBytes.</td>
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
    <td><a href="#get_disk_shrink_config"><CopyableCode code="get_disk_shrink_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Get Disk Shrink Config for a given instance.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_disk_shrink_config"
    values={[
        { label: 'get_disk_shrink_config', value: 'get_disk_shrink_config' }
    ]}
>
<TabItem value="get_disk_shrink_config">

Get Disk Shrink Config for a given instance.

```sql
SELECT
kind,
message,
minimalTargetSizeGb
FROM google.sqladmin.instances_disk_shrink_config
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required;
```
</TabItem>
</Tabs>
