--- 
title: notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications
  - storage
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

Creates, updates, deletes, gets or lists a <code>notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notifications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.notifications" /></td></tr>
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

A subscription to receive Google PubSub notifications.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_attributes" /></td>
    <td><code>object</code></td>
    <td>An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>HTTP 1.1 Entity tag for this subscription notification.</td>
</tr>
<tr>
    <td><CopyableCode code="event_types" /></td>
    <td><code>array</code></td>
    <td>If present, only send notifications about listed event types. If empty, sent notifications for all event types.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For notifications, this is always storage#notification. (default: storage#notification)</td>
</tr>
<tr>
    <td><CopyableCode code="object_name_prefix" /></td>
    <td><code>string</code></td>
    <td>If present, only apply this notification configuration to object names that begin with this prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="payload_format" /></td>
    <td><code>string</code></td>
    <td>The desired content of the Payload. (default: JSON_API_V1)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The canonical URL of this notification.</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/&#123;project-identifier&#125;/topics/&#123;my-topic&#125;'</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of notification subscriptions.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of items.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For lists of notifications, this is always storage#notifications. (default: storage#notifications)</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-notification"><code>notification</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>View a notification configuration.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Retrieves a list of notification subscriptions for a given bucket.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Creates a notification subscription for a given bucket.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-notification"><code>notification</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Permanently deletes a notification subscription.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-notification">
    <td><CopyableCode code="notification" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userProject">
    <td><CopyableCode code="userProject" /></td>
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

View a notification configuration.

```sql
SELECT
id,
custom_attributes,
etag,
event_types,
kind,
object_name_prefix,
payload_format,
selfLink,
topic
FROM google.storage.notifications
WHERE bucket = '{{ bucket }}' -- required
AND notification = '{{ notification }}' -- required
AND userProject = '{{ userProject }}';
```
</TabItem>
<TabItem value="list">

Retrieves a list of notification subscriptions for a given bucket.

```sql
SELECT
items,
kind
FROM google.storage.notifications
WHERE bucket = '{{ bucket }}' -- required
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a notification subscription for a given bucket.

```sql
INSERT INTO google.storage.notifications (
data__custom_attributes,
data__etag,
data__event_types,
data__id,
data__kind,
data__object_name_prefix,
data__payload_format,
data__selfLink,
data__topic,
bucket,
userProject
)
SELECT 
'{{ custom_attributes }}',
'{{ etag }}',
'{{ event_types }}',
'{{ id }}',
'{{ kind }}',
'{{ object_name_prefix }}',
'{{ payload_format }}',
'{{ selfLink }}',
'{{ topic }}',
'{{ bucket }}',
'{{ userProject }}'
RETURNING
id,
custom_attributes,
etag,
event_types,
kind,
object_name_prefix,
payload_format,
selfLink,
topic
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: notifications
  props:
    - name: bucket
      value: string
      description: Required parameter for the notifications resource.
    - name: custom_attributes
      value: object
      description: >
        An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.
        
    - name: etag
      value: string
      description: >
        HTTP 1.1 Entity tag for this subscription notification.
        
    - name: event_types
      value: array
      description: >
        If present, only send notifications about listed event types. If empty, sent notifications for all event types.
        
    - name: id
      value: string
      description: >
        The ID of the notification.
        
    - name: kind
      value: string
      description: >
        The kind of item this is. For notifications, this is always storage#notification.
        
      default: storage#notification
    - name: object_name_prefix
      value: string
      description: >
        If present, only apply this notification configuration to object names that begin with this prefix.
        
    - name: payload_format
      value: string
      description: >
        The desired content of the Payload.
        
      default: JSON_API_V1
    - name: selfLink
      value: string
      description: >
        The canonical URL of this notification.
        
    - name: topic
      value: string
      description: >
        The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'
        
    - name: userProject
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Permanently deletes a notification subscription.

```sql
DELETE FROM google.storage.notifications
WHERE bucket = '{{ bucket }}' --required
AND notification = '{{ notification }}' --required
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>
