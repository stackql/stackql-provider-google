--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
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

Creates, updates, deletes, gets or lists a <code>topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>topics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsublite.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="admin_projects_locations_topics_get"
    values={[
        { label: 'admin_projects_locations_topics_get', value: 'admin_projects_locations_topics_get' },
        { label: 'admin_projects_locations_reservations_topics_list', value: 'admin_projects_locations_reservations_topics_list' },
        { label: 'admin_projects_locations_topics_list', value: 'admin_projects_locations_topics_list' }
    ]}
>
<TabItem value="admin_projects_locations_topics_get">

Metadata about a topic resource.

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
    <td>The name of the topic. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/topics/&#123;topic_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="partitionConfig" /></td>
    <td><code>object</code></td>
    <td>The settings for this topic's partitions. (id: PartitionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationConfig" /></td>
    <td><code>object</code></td>
    <td>The settings for this topic's Reservation usage. (id: ReservationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionConfig" /></td>
    <td><code>object</code></td>
    <td>The settings for this topic's message retention. (id: RetentionConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="admin_projects_locations_reservations_topics_list">

Response for ListReservationTopics.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>The names of topics attached to the reservation. The order of the topics is unspecified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="admin_projects_locations_topics_list">

Response for ListTopics.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>The list of topic in the requested parent. The order of the topics is unspecified.</td>
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
    <td><a href="#admin_projects_locations_topics_get"><CopyableCode code="admin_projects_locations_topics_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Returns the topic configuration.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_reservations_topics_list"><CopyableCode code="admin_projects_locations_reservations_topics_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the topics attached to the specified reservation.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_topics_list"><CopyableCode code="admin_projects_locations_topics_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of topics for the given project.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_topics_create"><CopyableCode code="admin_projects_locations_topics_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-topicId"><code>topicId</code></a></td>
    <td>Creates a new topic.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_topics_patch"><CopyableCode code="admin_projects_locations_topics_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates properties of the specified topic.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_topics_delete"><CopyableCode code="admin_projects_locations_topics_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Deletes the specified topic.</td>
</tr>
<tr>
    <td><a href="#topic_stats_projects_locations_topics_compute_message_stats"><CopyableCode code="topic_stats_projects_locations_topics_compute_message_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Compute statistics about a range of messages in a given topic and partition.</td>
</tr>
<tr>
    <td><a href="#topic_stats_projects_locations_topics_compute_head_cursor"><CopyableCode code="topic_stats_projects_locations_topics_compute_head_cursor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.</td>
</tr>
<tr>
    <td><a href="#topic_stats_projects_locations_topics_compute_time_cursor"><CopyableCode code="topic_stats_projects_locations_topics_compute_time_cursor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td></td>
    <td>Compute the corresponding cursor for a publish or event time in a topic partition.</td>
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
<tr id="parameter-reservationsId">
    <td><CopyableCode code="reservationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-topicsId">
    <td><CopyableCode code="topicsId" /></td>
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
<tr id="parameter-topicId">
    <td><CopyableCode code="topicId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="admin_projects_locations_topics_get"
    values={[
        { label: 'admin_projects_locations_topics_get', value: 'admin_projects_locations_topics_get' },
        { label: 'admin_projects_locations_reservations_topics_list', value: 'admin_projects_locations_reservations_topics_list' },
        { label: 'admin_projects_locations_topics_list', value: 'admin_projects_locations_topics_list' }
    ]}
>
<TabItem value="admin_projects_locations_topics_get">

Returns the topic configuration.

```sql
SELECT
name,
partitionConfig,
reservationConfig,
retentionConfig
FROM google.pubsublite.topics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND topicsId = '{{ topicsId }}' -- required;
```
</TabItem>
<TabItem value="admin_projects_locations_reservations_topics_list">

Lists the topics attached to the specified reservation.

```sql
SELECT
nextPageToken,
topics
FROM google.pubsublite.topics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reservationsId = '{{ reservationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="admin_projects_locations_topics_list">

Returns the list of topics for the given project.

```sql
SELECT
nextPageToken,
topics
FROM google.pubsublite.topics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="admin_projects_locations_topics_create"
    values={[
        { label: 'admin_projects_locations_topics_create', value: 'admin_projects_locations_topics_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="admin_projects_locations_topics_create">

Creates a new topic.

```sql
INSERT INTO google.pubsublite.topics (
data__name,
data__partitionConfig,
data__retentionConfig,
data__reservationConfig,
projectsId,
locationsId,
topicId
)
SELECT 
'{{ name }}',
'{{ partitionConfig }}',
'{{ retentionConfig }}',
'{{ reservationConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ topicId }}'
RETURNING
name,
partitionConfig,
reservationConfig,
retentionConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: topics
  props:
    - name: projectsId
      value: string
      description: Required parameter for the topics resource.
    - name: locationsId
      value: string
      description: Required parameter for the topics resource.
    - name: name
      value: string
      description: >
        The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
        
    - name: partitionConfig
      value: object
      description: >
        The settings for this topic's partitions.
        
    - name: retentionConfig
      value: object
      description: >
        The settings for this topic's message retention.
        
    - name: reservationConfig
      value: object
      description: >
        The settings for this topic's Reservation usage.
        
    - name: topicId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="admin_projects_locations_topics_patch"
    values={[
        { label: 'admin_projects_locations_topics_patch', value: 'admin_projects_locations_topics_patch' }
    ]}
>
<TabItem value="admin_projects_locations_topics_patch">

Updates properties of the specified topic.

```sql
UPDATE google.pubsublite.topics
SET 
data__name = '{{ name }}',
data__partitionConfig = '{{ partitionConfig }}',
data__retentionConfig = '{{ retentionConfig }}',
data__reservationConfig = '{{ reservationConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND topicsId = '{{ topicsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
partitionConfig,
reservationConfig,
retentionConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="admin_projects_locations_topics_delete"
    values={[
        { label: 'admin_projects_locations_topics_delete', value: 'admin_projects_locations_topics_delete' }
    ]}
>
<TabItem value="admin_projects_locations_topics_delete">

Deletes the specified topic.

```sql
DELETE FROM google.pubsublite.topics
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND topicsId = '{{ topicsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="topic_stats_projects_locations_topics_compute_message_stats"
    values={[
        { label: 'topic_stats_projects_locations_topics_compute_message_stats', value: 'topic_stats_projects_locations_topics_compute_message_stats' },
        { label: 'topic_stats_projects_locations_topics_compute_head_cursor', value: 'topic_stats_projects_locations_topics_compute_head_cursor' },
        { label: 'topic_stats_projects_locations_topics_compute_time_cursor', value: 'topic_stats_projects_locations_topics_compute_time_cursor' }
    ]}
>
<TabItem value="topic_stats_projects_locations_topics_compute_message_stats">

Compute statistics about a range of messages in a given topic and partition.

```sql
EXEC google.pubsublite.topics.topic_stats_projects_locations_topics_compute_message_stats 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@topicsId='{{ topicsId }}' --required 
@@json=
'{
"partition": "{{ partition }}", 
"startCursor": "{{ startCursor }}", 
"endCursor": "{{ endCursor }}"
}';
```
</TabItem>
<TabItem value="topic_stats_projects_locations_topics_compute_head_cursor">

Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.

```sql
EXEC google.pubsublite.topics.topic_stats_projects_locations_topics_compute_head_cursor 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@topicsId='{{ topicsId }}' --required 
@@json=
'{
"partition": "{{ partition }}"
}';
```
</TabItem>
<TabItem value="topic_stats_projects_locations_topics_compute_time_cursor">

Compute the corresponding cursor for a publish or event time in a topic partition.

```sql
EXEC google.pubsublite.topics.topic_stats_projects_locations_topics_compute_time_cursor 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@topicsId='{{ topicsId }}' --required 
@@json=
'{
"partition": "{{ partition }}", 
"target": "{{ target }}"
}';
```
</TabItem>
</Tabs>
