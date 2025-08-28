--- 
title: notification_channel_descriptors
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_channel_descriptors
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>notification_channel_descriptors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notification_channel_descriptors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.notification_channel_descriptors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_notification_channel_descriptors_get"
    values={[
        { label: 'projects_notification_channel_descriptors_get', value: 'projects_notification_channel_descriptors_get' },
        { label: 'projects_notification_channel_descriptors_list', value: 'projects_notification_channel_descriptors_list' }
    ]}
>
<TabItem value="projects_notification_channel_descriptors_get">

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
    <td>The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the notification channel type. This form of the name is suitable for a user interface.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The product launch stage for channels of this type.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedTiers" /></td>
    <td><code>array</code></td>
    <td>The tiers that support this notification channel; the project service tier must be one of the supported_tiers.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notification_channel_descriptors_list">

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
    <td>The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the notification channel type. This form of the name is suitable for a user interface.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The product launch stage for channels of this type.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedTiers" /></td>
    <td><code>array</code></td>
    <td>The tiers that support this notification channel; the project service tier must be one of the supported_tiers.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique.</td>
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
    <td><a href="#projects_notification_channel_descriptors_get"><CopyableCode code="projects_notification_channel_descriptors_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationChannelDescriptorsId"><code>notificationChannelDescriptorsId</code></a></td>
    <td></td>
    <td>Gets a single channel descriptor. The descriptor indicates which fields are expected / permitted for a notification channel of the given type.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channel_descriptors_list"><CopyableCode code="projects_notification_channel_descriptors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.</td>
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
<tr id="parameter-notificationChannelDescriptorsId">
    <td><CopyableCode code="notificationChannelDescriptorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_notification_channel_descriptors_get"
    values={[
        { label: 'projects_notification_channel_descriptors_get', value: 'projects_notification_channel_descriptors_get' },
        { label: 'projects_notification_channel_descriptors_list', value: 'projects_notification_channel_descriptors_list' }
    ]}
>
<TabItem value="projects_notification_channel_descriptors_get">

Gets a single channel descriptor. The descriptor indicates which fields are expected / permitted for a notification channel of the given type.

```sql
SELECT
name,
description,
displayName,
labels,
launchStage,
supportedTiers,
type
FROM google.monitoring.notification_channel_descriptors
WHERE projectsId = '{{ projectsId }}' -- required
AND notificationChannelDescriptorsId = '{{ notificationChannelDescriptorsId }}' -- required;
```
</TabItem>
<TabItem value="projects_notification_channel_descriptors_list">

Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.

```sql
SELECT
name,
description,
displayName,
labels,
launchStage,
supportedTiers,
type
FROM google.monitoring.notification_channel_descriptors
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
