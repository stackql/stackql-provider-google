--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - pubsub
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.pubsub.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_topics_subscriptions_list"
    values={[
        { label: 'projects_topics_subscriptions_list', value: 'projects_topics_subscriptions_list' },
        { label: 'projects_subscriptions_get', value: 'projects_subscriptions_get' },
        { label: 'projects_subscriptions_list', value: 'projects_subscriptions_list' }
    ]}
>
<TabItem value="projects_topics_subscriptions_list">

Response for the `ListTopicSubscriptions` method.

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
    <td>Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions" /></td>
    <td><code>array</code></td>
    <td>Optional. The names of subscriptions attached to the topic specified in the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_subscriptions_get">

A subscription resource. If none of `push_config`, `bigquery_config`, or `cloud_storage_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.

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
    <td>Required. The name of the subscription. It must have the format `"projects/&#123;project&#125;/subscriptions/&#123;subscription&#125;"`. `&#123;subscription&#125;` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.</td>
</tr>
<tr>
    <td><CopyableCode code="ackDeadlineSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be _outstanding_. During that time period, the message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsHubSubscriptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the associated Analytics Hub subscription. Only set if the subscritpion is created by Analytics Hub. (id: AnalyticsHubSubscriptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it. (id: BigQueryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudStorageConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it. (id: CloudStorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deadLetterPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead_letter_policy is not set, dead lettering is disabled. The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-&#123;project_number&#125;@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. (id: DeadLetterPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="detached" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made.</td>
</tr>
<tr>
    <td><CopyableCode code="enableExactlyOnceDelivery" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: * The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires. * An acknowledged message will not be resent to a subscriber. Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery` is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct `message_id` values.</td>
</tr>
<tr>
    <td><CopyableCode code="enableMessageOrdering" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If `expiration_policy` is not set, a *default policy* with `ttl` of 31 days will be used. The minimum allowed value for `expiration_policy.ttl` is 1 day. If `expiration_policy` is set, but `expiration_policy.ttl` is not set, the subscription never expires. (id: ExpirationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only `PubsubMessage`s whose `attributes` field matches the filter are delivered on this subscription. If empty, then no messages are filtered out.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).</td>
</tr>
<tr>
    <td><CopyableCode code="messageRetentionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="messageTransforms" /></td>
    <td><code>array</code></td>
    <td>Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.</td>
</tr>
<tr>
    <td><CopyableCode code="pushConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. If push delivery is used with this subscription, this field is used to configure it. (id: PushConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="retainAckedMessages" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window. This must be true if you would like to [`Seek` to a timestamp] (https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) in the past to replay previously-acknowledged messages.</td>
</tr>
<tr>
    <td><CopyableCode code="retryPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription. If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgment deadline exceeded events for a given message. (id: RetryPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. An output-only field indicating whether or not the subscription can receive messages.</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the topic from which this subscription is receiving messages. Format is `projects/&#123;project&#125;/topics/&#123;topic&#125;`. The value of this field will be `_deleted-topic_` if the topic has been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="topicMessageRetentionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last `topic_message_retention_duration` are always available to subscribers. See the `message_retention_duration` field in `Topic`. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_subscriptions_list">

Response for the `ListSubscriptions` method.

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
    <td>Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions" /></td>
    <td><code>array</code></td>
    <td>Optional. The subscriptions that match the request.</td>
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
    <td><a href="#projects_topics_subscriptions_list"><CopyableCode code="projects_topics_subscriptions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-topicsId"><code>topicsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the names of the attached subscriptions on this topic.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_get"><CopyableCode code="projects_subscriptions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Gets the configuration details of a subscription.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_list"><CopyableCode code="projects_subscriptions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists matching subscriptions.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_patch"><CopyableCode code="projects_subscriptions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Updates an existing subscription by updating the fields specified in the update mask. Note that certain properties of a subscription, such as its topic, are not modifiable.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_delete"><CopyableCode code="projects_subscriptions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_detach"><CopyableCode code="projects_subscriptions_detach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_create"><CopyableCode code="projects_subscriptions_create" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Creates a subscription to a given topic. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic, conforming to the [resource name format] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). The generated name is populated in the returned Subscription object. Note that for REST API requests, you must specify a name in the request.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_modify_ack_deadline"><CopyableCode code="projects_subscriptions_modify_ack_deadline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_acknowledge"><CopyableCode code="projects_subscriptions_acknowledge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_pull"><CopyableCode code="projects_subscriptions_pull" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Pulls messages from the server.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_modify_push_config"><CopyableCode code="projects_subscriptions_modify_push_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.</td>
</tr>
<tr>
    <td><a href="#projects_subscriptions_seek"><CopyableCode code="projects_subscriptions_seek" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_topics_subscriptions_list"
    values={[
        { label: 'projects_topics_subscriptions_list', value: 'projects_topics_subscriptions_list' },
        { label: 'projects_subscriptions_get', value: 'projects_subscriptions_get' },
        { label: 'projects_subscriptions_list', value: 'projects_subscriptions_list' }
    ]}
>
<TabItem value="projects_topics_subscriptions_list">

Lists the names of the attached subscriptions on this topic.

```sql
SELECT
nextPageToken,
subscriptions
FROM google.pubsub.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND topicsId = '{{ topicsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_subscriptions_get">

Gets the configuration details of a subscription.

```sql
SELECT
name,
ackDeadlineSeconds,
analyticsHubSubscriptionInfo,
bigqueryConfig,
cloudStorageConfig,
deadLetterPolicy,
detached,
enableExactlyOnceDelivery,
enableMessageOrdering,
expirationPolicy,
filter,
labels,
messageRetentionDuration,
messageTransforms,
pushConfig,
retainAckedMessages,
retryPolicy,
state,
topic,
topicMessageRetentionDuration
FROM google.pubsub.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND subscriptionsId = '{{ subscriptionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_subscriptions_list">

Lists matching subscriptions.

```sql
SELECT
nextPageToken,
subscriptions
FROM google.pubsub.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_subscriptions_patch"
    values={[
        { label: 'projects_subscriptions_patch', value: 'projects_subscriptions_patch' }
    ]}
>
<TabItem value="projects_subscriptions_patch">

Updates an existing subscription by updating the fields specified in the update mask. Note that certain properties of a subscription, such as its topic, are not modifiable.

```sql
UPDATE google.pubsub.subscriptions
SET 
data__subscription = '{{ subscription }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required
RETURNING
name,
ackDeadlineSeconds,
analyticsHubSubscriptionInfo,
bigqueryConfig,
cloudStorageConfig,
deadLetterPolicy,
detached,
enableExactlyOnceDelivery,
enableMessageOrdering,
expirationPolicy,
filter,
labels,
messageRetentionDuration,
messageTransforms,
pushConfig,
retainAckedMessages,
retryPolicy,
state,
topic,
topicMessageRetentionDuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_subscriptions_delete"
    values={[
        { label: 'projects_subscriptions_delete', value: 'projects_subscriptions_delete' }
    ]}
>
<TabItem value="projects_subscriptions_delete">

Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.

```sql
DELETE FROM google.pubsub.subscriptions
WHERE projectsId = '{{ projectsId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_subscriptions_detach"
    values={[
        { label: 'projects_subscriptions_detach', value: 'projects_subscriptions_detach' },
        { label: 'projects_subscriptions_create', value: 'projects_subscriptions_create' },
        { label: 'projects_subscriptions_modify_ack_deadline', value: 'projects_subscriptions_modify_ack_deadline' },
        { label: 'projects_subscriptions_acknowledge', value: 'projects_subscriptions_acknowledge' },
        { label: 'projects_subscriptions_pull', value: 'projects_subscriptions_pull' },
        { label: 'projects_subscriptions_modify_push_config', value: 'projects_subscriptions_modify_push_config' },
        { label: 'projects_subscriptions_seek', value: 'projects_subscriptions_seek' }
    ]}
>
<TabItem value="projects_subscriptions_detach">

Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_detach 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required;
```
</TabItem>
<TabItem value="projects_subscriptions_create">

Creates a subscription to a given topic. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic, conforming to the [resource name format] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). The generated name is populated in the returned Subscription object. Note that for REST API requests, you must specify a name in the request.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_create 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"topic": "{{ topic }}", 
"pushConfig": "{{ pushConfig }}", 
"bigqueryConfig": "{{ bigqueryConfig }}", 
"cloudStorageConfig": "{{ cloudStorageConfig }}", 
"ackDeadlineSeconds": {{ ackDeadlineSeconds }}, 
"retainAckedMessages": {{ retainAckedMessages }}, 
"messageRetentionDuration": "{{ messageRetentionDuration }}", 
"labels": "{{ labels }}", 
"enableMessageOrdering": {{ enableMessageOrdering }}, 
"expirationPolicy": "{{ expirationPolicy }}", 
"filter": "{{ filter }}", 
"deadLetterPolicy": "{{ deadLetterPolicy }}", 
"retryPolicy": "{{ retryPolicy }}", 
"detached": {{ detached }}, 
"enableExactlyOnceDelivery": {{ enableExactlyOnceDelivery }}, 
"messageTransforms": "{{ messageTransforms }}"
}';
```
</TabItem>
<TabItem value="projects_subscriptions_modify_ack_deadline">

Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_modify_ack_deadline 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"ackIds": "{{ ackIds }}", 
"ackDeadlineSeconds": {{ ackDeadlineSeconds }}
}';
```
</TabItem>
<TabItem value="projects_subscriptions_acknowledge">

Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_acknowledge 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"ackIds": "{{ ackIds }}"
}';
```
</TabItem>
<TabItem value="projects_subscriptions_pull">

Pulls messages from the server.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_pull 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"returnImmediately": {{ returnImmediately }}, 
"maxMessages": {{ maxMessages }}
}';
```
</TabItem>
<TabItem value="projects_subscriptions_modify_push_config">

Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_modify_push_config 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"pushConfig": "{{ pushConfig }}"
}';
```
</TabItem>
<TabItem value="projects_subscriptions_seek">

Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.

```sql
EXEC google.pubsub.subscriptions.projects_subscriptions_seek 
@projectsId='{{ projectsId }}' --required, 
@subscriptionsId='{{ subscriptionsId }}' --required 
@@json=
'{
"time": "{{ time }}", 
"snapshot": "{{ snapshot }}"
}';
```
</TabItem>
</Tabs>
