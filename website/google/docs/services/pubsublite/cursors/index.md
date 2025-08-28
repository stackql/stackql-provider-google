--- 
title: cursors
hide_title: false
hide_table_of_contents: false
keywords:
  - cursors
  - pubsublite
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

Creates, updates, deletes, gets or lists a <code>cursors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cursors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsublite.cursors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="cursor_projects_locations_subscriptions_cursors_list"
    values={[
        { label: 'cursor_projects_locations_subscriptions_cursors_list', value: 'cursor_projects_locations_subscriptions_cursors_list' }
    ]}
>
<TabItem value="cursor_projects_locations_subscriptions_cursors_list">

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
    <td><CopyableCode code="cursor" /></td>
    <td><code>object</code></td>
    <td>The value of the cursor. (id: Cursor)</td>
</tr>
<tr>
    <td><CopyableCode code="partition" /></td>
    <td><code>string (int64)</code></td>
    <td>The partition this is for.</td>
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
    <td><a href="#cursor_projects_locations_subscriptions_cursors_list"><CopyableCode code="cursor_projects_locations_subscriptions_cursors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns all committed cursor information for a subscription.</td>
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
<tr id="parameter-subscriptionsId">
    <td><CopyableCode code="subscriptionsId" /></td>
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
    defaultValue="cursor_projects_locations_subscriptions_cursors_list"
    values={[
        { label: 'cursor_projects_locations_subscriptions_cursors_list', value: 'cursor_projects_locations_subscriptions_cursors_list' }
    ]}
>
<TabItem value="cursor_projects_locations_subscriptions_cursors_list">

Returns all committed cursor information for a subscription.

```sql
SELECT
cursor,
partition
FROM google.pubsublite.cursors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND subscriptionsId = '{{ subscriptionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
