--- 
title: finding_type_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_type_stats
  - websecurityscanner
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

Creates, updates, deletes, gets or lists a <code>finding_type_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>finding_type_stats</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.websecurityscanner.finding_type_stats" /></td></tr>
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

Response for the `ListFindingTypeStats` method.

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
    <td><CopyableCode code="findingTypeStats" /></td>
    <td><code>array</code></td>
    <td>The list of FindingTypeStats returned.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-scanConfigsId"><code>scanConfigsId</code></a>, <a href="#parameter-scanRunsId"><code>scanRunsId</code></a></td>
    <td></td>
    <td>List all FindingTypeStats under a given ScanRun.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-scanConfigsId">
    <td><CopyableCode code="scanConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-scanRunsId">
    <td><CopyableCode code="scanRunsId" /></td>
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

List all FindingTypeStats under a given ScanRun.

```sql
SELECT
findingTypeStats
FROM google.websecurityscanner.finding_type_stats
WHERE projectsId = '{{ projectsId }}' -- required
AND scanConfigsId = '{{ scanConfigsId }}' -- required
AND scanRunsId = '{{ scanRunsId }}' -- required;
```
</TabItem>
</Tabs>
