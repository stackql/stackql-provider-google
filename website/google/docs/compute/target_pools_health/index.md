--- 
title: target_pools_health
hide_title: false
hide_table_of_contents: false
keywords:
  - target_pools_health
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

Creates, updates, deletes, gets or lists a <code>target_pools_health</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_pools_health</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.target_pools_health" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_health"
    values={[
        { label: 'get_health', value: 'get_health' }
    ]}
>
<TabItem value="get_health">

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
    <td><CopyableCode code="healthStatus" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance. (default: compute#targetPoolInstanceHealth)</td>
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
    <td><a href="#get_health"><CopyableCode code="get_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetPool"><code>targetPool</code></a></td>
    <td></td>
    <td>Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.</td>
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
<tr id="parameter-targetPool">
    <td><CopyableCode code="targetPool" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_health"
    values={[
        { label: 'get_health', value: 'get_health' }
    ]}
>
<TabItem value="get_health">

Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.

```sql
SELECT
healthStatus,
kind
FROM google.compute.target_pools_health
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND targetPool = '{{ targetPool }}' -- required;
```
</TabItem>
</Tabs>
