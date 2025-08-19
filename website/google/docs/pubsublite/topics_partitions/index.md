--- 
title: topics_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - topics_partitions
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

Creates, updates, deletes, gets or lists a <code>topics_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>topics_partitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsublite.topics_partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="admin_projects_locations_topics_get_partitions"
    values={[
        { label: 'admin_projects_locations_topics_get_partitions', value: 'admin_projects_locations_topics_get_partitions' }
    ]}
>
<TabItem value="admin_projects_locations_topics_get_partitions">

Response for GetTopicPartitions.

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
    <td><CopyableCode code="partitionCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of partitions in the topic.</td>
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
    <td><a href="#admin_projects_locations_topics_get_partitions"><CopyableCode code="admin_projects_locations_topics_get_partitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Returns the partition information for the requested topic.</td>
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
<tr id="parameter-topicsId">
    <td><CopyableCode code="topicsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="admin_projects_locations_topics_get_partitions"
    values={[
        { label: 'admin_projects_locations_topics_get_partitions', value: 'admin_projects_locations_topics_get_partitions' }
    ]}
>
<TabItem value="admin_projects_locations_topics_get_partitions">

Returns the partition information for the requested topic.

```sql
SELECT
partitionCount
FROM google.pubsublite.topics_partitions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND topicsId = '{{ topicsId }}' -- required;
```
</TabItem>
</Tabs>
