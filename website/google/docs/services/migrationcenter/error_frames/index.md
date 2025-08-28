--- 
title: error_frames
hide_title: false
hide_table_of_contents: false
keywords:
  - error_frames
  - migrationcenter
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

Creates, updates, deletes, gets or lists an <code>error_frames</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>error_frames</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.migrationcenter.error_frames" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td>Output only. The identifier of the ErrorFrame.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Frame ingestion time.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFrame" /></td>
    <td><code>object</code></td>
    <td>Contains data reported from an inventory source on an asset. (id: AssetFrame)</td>
</tr>
<tr>
    <td><CopyableCode code="violations" /></td>
    <td><code>array</code></td>
    <td>Output only. All the violations that were detected for the frame.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td>Output only. The identifier of the ErrorFrame.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Frame ingestion time.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFrame" /></td>
    <td><code>object</code></td>
    <td>Contains data reported from an inventory source on an asset. (id: AssetFrame)</td>
</tr>
<tr>
    <td><CopyableCode code="violations" /></td>
    <td><code>array</code></td>
    <td>Output only. All the violations that were detected for the frame.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-errorFramesId"><code>errorFramesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the details of an error frame.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists all error frames in a given source and location.</td>
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
<tr id="parameter-errorFramesId">
    <td><CopyableCode code="errorFramesId" /></td>
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
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the details of an error frame.

```sql
SELECT
name,
ingestionTime,
originalFrame,
violations
FROM google.migrationcenter.error_frames
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND errorFramesId = '{{ errorFramesId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists all error frames in a given source and location.

```sql
SELECT
name,
ingestionTime,
originalFrame,
violations
FROM google.migrationcenter.error_frames
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}';
```
</TabItem>
</Tabs>
