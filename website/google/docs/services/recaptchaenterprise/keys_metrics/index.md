--- 
title: keys_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_metrics
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists a <code>keys_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.keys_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metrics"
    values={[
        { label: 'get_metrics', value: 'get_metrics' }
    ]}
>
<TabItem value="get_metrics">

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
    <td>Output only. Identifier. The name of the metrics, in the format `projects/&#123;project&#125;/keys/&#123;key&#125;/metrics`.</td>
</tr>
<tr>
    <td><CopyableCode code="challengeMetrics" /></td>
    <td><code>array</code></td>
    <td>Metrics are continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE) have challenge-based data.</td>
</tr>
<tr>
    <td><CopyableCode code="scoreMetrics" /></td>
    <td><code>array</code></td>
    <td>Metrics are continuous and in order by dates, and in the granularity of day. All Key types should have score-based data.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Inclusive start time aligned to a day in the America/Los_Angeles (Pacific) timezone.</td>
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
    <td><a href="#get_metrics"><CopyableCode code="get_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Get some aggregated metrics for a Key. This data can be used to build dashboards.</td>
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
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_metrics"
    values={[
        { label: 'get_metrics', value: 'get_metrics' }
    ]}
>
<TabItem value="get_metrics">

Get some aggregated metrics for a Key. This data can be used to build dashboards.

```sql
SELECT
name,
challengeMetrics,
scoreMetrics,
startTime
FROM google.recaptchaenterprise.keys_metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND keysId = '{{ keysId }}' -- required;
```
</TabItem>
</Tabs>
