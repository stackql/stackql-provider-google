--- 
title: cloudasset_assets_history
hide_title: false
hide_table_of_contents: false
keywords:
  - cloudasset_assets_history
  - cloudasset
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

Creates, updates, deletes, gets or lists a <code>cloudasset_assets_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloudasset_assets_history</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.cloudasset_assets_history" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_assets_history"
    values={[
        { label: 'batch_get_assets_history', value: 'batch_get_assets_history' }
    ]}
>
<TabItem value="batch_get_assets_history">

Batch get assets history response.

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
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td>A list of assets with valid time windows.</td>
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
    <td><a href="#batch_get_assets_history"><CopyableCode code="batch_get_assets_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-assetNames"><code>assetNames</code></a>, <a href="#parameter-contentType"><code>contentType</code></a>, <a href="#parameter-readTimeWindow.startTime"><code>readTimeWindow.startTime</code></a>, <a href="#parameter-readTimeWindow.endTime"><code>readTimeWindow.endTime</code></a>, <a href="#parameter-relationshipTypes"><code>relationshipTypes</code></a></td>
    <td>Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.</td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assetNames">
    <td><CopyableCode code="assetNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-contentType">
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readTimeWindow.endTime">
    <td><CopyableCode code="readTimeWindow.endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-readTimeWindow.startTime">
    <td><CopyableCode code="readTimeWindow.startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-relationshipTypes">
    <td><CopyableCode code="relationshipTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_assets_history"
    values={[
        { label: 'batch_get_assets_history', value: 'batch_get_assets_history' }
    ]}
>
<TabItem value="batch_get_assets_history">

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

```sql
SELECT
assets
FROM google.cloudasset.cloudasset_assets_history
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND assetNames = '{{ assetNames }}'
AND contentType = '{{ contentType }}'
AND readTimeWindow.startTime = '{{ readTimeWindow.startTime }}'
AND readTimeWindow.endTime = '{{ readTimeWindow.endTime }}'
AND relationshipTypes = '{{ relationshipTypes }}';
```
</TabItem>
</Tabs>
