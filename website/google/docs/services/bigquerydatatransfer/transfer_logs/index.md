--- 
title: transfer_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - transfer_logs
  - bigquerydatatransfer
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

Creates, updates, deletes, gets or lists a <code>transfer_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transfer_logs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatatransfer.transfer_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_transfer_configs_runs_transfer_logs_list"
    values={[
        { label: 'projects_locations_transfer_configs_runs_transfer_logs_list', value: 'projects_locations_transfer_configs_runs_transfer_logs_list' },
        { label: 'projects_transfer_configs_runs_transfer_logs_list', value: 'projects_transfer_configs_runs_transfer_logs_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_runs_transfer_logs_list">

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
    <td><CopyableCode code="messageText" /></td>
    <td><code>string</code></td>
    <td>Message text.</td>
</tr>
<tr>
    <td><CopyableCode code="messageTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when message was logged.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Message severity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_runs_transfer_logs_list">

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
    <td><CopyableCode code="messageText" /></td>
    <td><code>string</code></td>
    <td>Message text.</td>
</tr>
<tr>
    <td><CopyableCode code="messageTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when message was logged.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Message severity.</td>
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
    <td><a href="#projects_locations_transfer_configs_runs_transfer_logs_list"><CopyableCode code="projects_locations_transfer_configs_runs_transfer_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-messageTypes"><code>messageTypes</code></a></td>
    <td>Returns log messages for the transfer run.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_runs_transfer_logs_list"><CopyableCode code="projects_transfer_configs_runs_transfer_logs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-messageTypes"><code>messageTypes</code></a></td>
    <td>Returns log messages for the transfer run.</td>
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
<tr id="parameter-runsId">
    <td><CopyableCode code="runsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-transferConfigsId">
    <td><CopyableCode code="transferConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-messageTypes">
    <td><CopyableCode code="messageTypes" /></td>
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
    defaultValue="projects_locations_transfer_configs_runs_transfer_logs_list"
    values={[
        { label: 'projects_locations_transfer_configs_runs_transfer_logs_list', value: 'projects_locations_transfer_configs_runs_transfer_logs_list' },
        { label: 'projects_transfer_configs_runs_transfer_logs_list', value: 'projects_transfer_configs_runs_transfer_logs_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_runs_transfer_logs_list">

Returns log messages for the transfer run.

```sql
SELECT
messageText,
messageTime,
severity
FROM google.bigquerydatatransfer.transfer_logs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND runsId = '{{ runsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND messageTypes = '{{ messageTypes }}';
```
</TabItem>
<TabItem value="projects_transfer_configs_runs_transfer_logs_list">

Returns log messages for the transfer run.

```sql
SELECT
messageText,
messageTime,
severity
FROM google.bigquerydatatransfer.transfer_logs
WHERE projectsId = '{{ projectsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND runsId = '{{ runsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND messageTypes = '{{ messageTypes }}';
```
</TabItem>
</Tabs>
