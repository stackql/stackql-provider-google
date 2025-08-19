--- 
title: interconnect_groups_operational_status
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnect_groups_operational_status
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

Creates, updates, deletes, gets or lists an <code>interconnect_groups_operational_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>interconnect_groups_operational_status</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnect_groups_operational_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_operational_status"
    values={[
        { label: 'get_operational_status', value: 'get_operational_status' }
    ]}
>
<TabItem value="get_operational_status">

Response for the InterconnectGroupsGetOperationalStatusResponse.

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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Request to get the status of the interconnect group with extra detail. (id: InterconnectGroupsOperationalStatus)</td>
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
    <td><a href="#get_operational_status"><CopyableCode code="get_operational_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnectGroup"><code>interconnectGroup</code></a></td>
    <td></td>
    <td>Returns the interconnectStatuses for the specified InterconnectGroup.</td>
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
<tr id="parameter-interconnectGroup">
    <td><CopyableCode code="interconnectGroup" /></td>
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
    defaultValue="get_operational_status"
    values={[
        { label: 'get_operational_status', value: 'get_operational_status' }
    ]}
>
<TabItem value="get_operational_status">

Returns the interconnectStatuses for the specified InterconnectGroup.

```sql
SELECT
etag,
result
FROM google.compute.interconnect_groups_operational_status
WHERE project = '{{ project }}' -- required
AND interconnectGroup = '{{ interconnectGroup }}' -- required;
```
</TabItem>
</Tabs>
