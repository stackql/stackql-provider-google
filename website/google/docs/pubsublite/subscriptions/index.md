--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsublite.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="admin_projects_locations_topics_subscriptions_list"
    values={[
        { label: 'admin_projects_locations_topics_subscriptions_list', value: 'admin_projects_locations_topics_subscriptions_list' },
        { label: 'admin_projects_locations_subscriptions_get', value: 'admin_projects_locations_subscriptions_get' },
        { label: 'admin_projects_locations_subscriptions_list', value: 'admin_projects_locations_subscriptions_list' }
    ]}
>
<TabItem value="admin_projects_locations_topics_subscriptions_list">

Response for ListTopicSubscriptions.

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
    <td><CopyableCode code="subscriptions" /></td>
    <td><code>array</code></td>
    <td>The names of subscriptions attached to the topic. The order of the subscriptions is unspecified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="admin_projects_locations_subscriptions_get">

Metadata about a subscription resource.

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
    <td>The name of the subscription. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/subscriptions/&#123;subscription_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryConfig" /></td>
    <td><code>object</code></td>
    <td>The settings for this subscription's message delivery. (id: DeliveryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="exportConfig" /></td>
    <td><code>object</code></td>
    <td>If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination. (id: ExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The name of the topic this subscription is attached to. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/topics/&#123;topic_id&#125;</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="admin_projects_locations_subscriptions_list">

Response for ListSubscriptions.

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
    <td><CopyableCode code="subscriptions" /></td>
    <td><code>array</code></td>
    <td>The list of subscriptions in the requested parent. The order of the subscriptions is unspecified.</td>
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
    <td><a href="#admin_projects_locations_topics_subscriptions_list"><CopyableCode code="admin_projects_locations_topics_subscriptions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the subscriptions attached to the specified topic.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_subscriptions_get"><CopyableCode code="admin_projects_locations_subscriptions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Returns the subscription configuration.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_subscriptions_list"><CopyableCode code="admin_projects_locations_subscriptions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of subscriptions for the given project.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_subscriptions_create"><CopyableCode code="admin_projects_locations_subscriptions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-skipBacklog"><code>skipBacklog</code></a></td>
    <td>Creates a new subscription.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_subscriptions_patch"><CopyableCode code="admin_projects_locations_subscriptions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates properties of the specified subscription.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_subscriptions_delete"><CopyableCode code="admin_projects_locations_subscriptions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Deletes the specified subscription.</td>
</tr>
<tr>
    <td><a href="#admin_projects_locations_subscriptions_seek"><CopyableCode code="admin_projects_locations_subscriptions_seek" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.</td>
</tr>
<tr>
    <td><a href="#cursor_projects_locations_subscriptions_commit_cursor"><CopyableCode code="cursor_projects_locations_subscriptions_commit_cursor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Updates the committed cursor.</td>
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
<tr id="parameter-skipBacklog">
    <td><CopyableCode code="skipBacklog" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-subscriptionId">
    <td><CopyableCode code="subscriptionId" /></td>
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
    defaultValue="admin_projects_locations_topics_subscriptions_list"
    values={[
        { label: 'admin_projects_locations_topics_subscriptions_list', value: 'admin_projects_locations_topics_subscriptions_list' },
        { label: 'admin_projects_locations_subscriptions_get', value: 'admin_projects_locations_subscriptions_get' },
        { label: 'admin_projects_locations_subscriptions_list', value: 'admin_projects_locations_subscriptions_list' }
    ]}
>
<TabItem value="admin_projects_locations_topics_subscriptions_list">

Lists the subscriptions attached to the specified topic.

```sql
SELECT
nextPageToken,
subscriptions
FROM google.pubsublite.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND topicsId = '{{ topicsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="admin_projects_locations_subscriptions_get">

Returns the subscription configuration.

```sql
SELECT
name,
deliveryConfig,
exportConfig,
topic
FROM google.pubsublite.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND subscriptionsId = '{{ subscriptionsId }}' -- required;
```
</TabItem>
<TabItem value="admin_projects_locations_subscriptions_list">

Returns the list of subscriptions for the given project.

```sql
SELECT
nextPageToken,
subscriptions
FROM google.pubsublite.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="admin_projects_locations_subscriptions_create"
    values={[
        { label: 'admin_projects_locations_subscriptions_create', value: 'admin_projects_locations_subscriptions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="admin_projects_locations_subscriptions_create">

Creates a new subscription.

```sql
INSERT INTO google.pubsublite.subscriptions (
data__name,
data__topic,
data__deliveryConfig,
data__exportConfig,
projectsId,
locationsId,
subscriptionId,
skipBacklog
)
SELECT 
'{{ name }}',
'{{ topic }}',
'{{ deliveryConfig }}',
'{{ exportConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ subscriptionId }}',
'{{ skipBacklog }}'
RETURNING
name,
deliveryConfig,
exportConfig,
topic
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the subscriptions resource.
    - name: locationsId
      value: string
      description: Required parameter for the subscriptions resource.
    - name: name
      value: string
      description: >
        The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
        
    - name: topic
      value: string
      description: >
        The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
        
    - name: deliveryConfig
      value: object
      description: >
        The settings for this subscription's message delivery.
        
    - name: exportConfig
      value: object
      description: >
        If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.
        
    - name: subscriptionId
      value: string
    - name: skipBacklog
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="admin_projects_locations_subscriptions_patch"
    values={[
        { label: 'admin_projects_locations_subscriptions_patch', value: 'admin_projects_locations_subscriptions_patch' }
    ]}
>
<TabItem value="admin_projects_locations_subscriptions_patch">

Updates properties of the specified subscription.

```sql
UPDATE google.pubsublite.subscriptions
SET 
data__name = '{{ name }}',
data__topic = '{{ topic }}',
data__deliveryConfig = '{{ deliveryConfig }}',
data__exportConfig = '{{ exportConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
deliveryConfig,
exportConfig,
topic;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="admin_projects_locations_subscriptions_delete"
    values={[
        { label: 'admin_projects_locations_subscriptions_delete', value: 'admin_projects_locations_subscriptions_delete' }
    ]}
>
<TabItem value="admin_projects_locations_subscriptions_delete">

Deletes the specified subscription.

```sql
DELETE FROM google.pubsublite.subscriptions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="admin_projects_locations_subscriptions_seek"
    values={[
        { label: 'admin_projects_locations_subscriptions_seek', value: 'admin_projects_locations_subscriptions_seek' },
        { label: 'cursor_projects_locations_subscriptions_commit_cursor', value: 'cursor_projects_locations_subscriptions_commit_cursor' }
    ]}
>
<TabItem value="admin_projects_locations_subscriptions_seek">

Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.

```sql
EXEC google.pubsublite.subscriptions.admin_projects_locations_subscriptions_seek 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"namedTarget": "{{ namedTarget }}", 
"timeTarget": "{{ timeTarget }}"
}';
```
</TabItem>
<TabItem value="cursor_projects_locations_subscriptions_commit_cursor">

Updates the committed cursor.

```sql
EXEC google.pubsublite.subscriptions.cursor_projects_locations_subscriptions_commit_cursor 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"partition": "{{ partition }}", 
"cursor": "{{ cursor }}"
}';
```
</TabItem>
</Tabs>
