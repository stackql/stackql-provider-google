--- 
title: instances_latest_recovery_time
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_latest_recovery_time
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

Creates, updates, deletes, gets or lists an <code>instances_latest_recovery_time</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_latest_recovery_time</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.instances_latest_recovery_time" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_latest_recovery_time"
    values={[
        { label: 'get_latest_recovery_time', value: 'get_latest_recovery_time' }
    ]}
>
<TabItem value="get_latest_recovery_time">

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
    <td>This is always `sql#getLatestRecoveryTime`.</td>
</tr>
<tr>
    <td><CopyableCode code="latestRecoveryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp, identifies the latest recovery time of the source instance.</td>
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
    <td><a href="#get_latest_recovery_time"><CopyableCode code="get_latest_recovery_time" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-sourceInstanceDeletionTime"><code>sourceInstanceDeletionTime</code></a></td>
    <td>Get Latest Recovery Time for a given instance.</td>
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
<tr id="parameter-sourceInstanceDeletionTime">
    <td><CopyableCode code="sourceInstanceDeletionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_latest_recovery_time"
    values={[
        { label: 'get_latest_recovery_time', value: 'get_latest_recovery_time' }
    ]}
>
<TabItem value="get_latest_recovery_time">

Get Latest Recovery Time for a given instance.

```sql
SELECT
kind,
latestRecoveryTime
FROM google.sqladmin.instances_latest_recovery_time
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND sourceInstanceDeletionTime = '{{ sourceInstanceDeletionTime }}';
```
</TabItem>
</Tabs>
