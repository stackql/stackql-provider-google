--- 
title: callbacks
hide_title: false
hide_table_of_contents: false
keywords:
  - callbacks
  - workflowexecutions
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

Creates, updates, deletes, gets or lists a <code>callbacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>callbacks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workflowexecutions.callbacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td>Output only. The resource name of the callback. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/workflows/&#123;workflow&#125;/executions/&#123;execution&#125;/callback/&#123;callback&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="availablePayloads" /></td>
    <td><code>array</code></td>
    <td>Output only. The payloads received by the callback that have not been processed by a waiting execution step.</td>
</tr>
<tr>
    <td><CopyableCode code="method" /></td>
    <td><code>string</code></td>
    <td>Output only. The method accepted by the callback. For example: GET, POST, PUT.</td>
</tr>
<tr>
    <td><CopyableCode code="waiters" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of execution steps waiting on this callback.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workflowsId"><code>workflowsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workflowsId">
    <td><CopyableCode code="workflowsId" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.

```sql
SELECT
name,
availablePayloads,
method,
waiters
FROM google.workflowexecutions.callbacks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workflowsId = '{{ workflowsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
