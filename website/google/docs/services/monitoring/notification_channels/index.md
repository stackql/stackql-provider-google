--- 
title: notification_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_channels
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

Creates, updates, deletes, gets or lists a <code>notification_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notification_channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.notification_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_notification_channels_get"
    values={[
        { label: 'projects_notification_channels_get', value: 'projects_notification_channels_get' },
        { label: 'projects_notification_channels_list', value: 'projects_notification_channels_list' }
    ]}
>
<TabItem value="projects_notification_channels_get">

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
    <td>Identifier. The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="creationRecord" /></td>
    <td><code>object</code></td>
    <td>Record of the creation of this channel. (id: MutationRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field.</td>
</tr>
<tr>
    <td><CopyableCode code="mutationRecords" /></td>
    <td><code>array</code></td>
    <td>Records of the modification of this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="verificationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notification_channels_list">

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
    <td>Identifier. The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation.</td>
</tr>
<tr>
    <td><CopyableCode code="creationRecord" /></td>
    <td><code>object</code></td>
    <td>Record of the creation of this channel. (id: MutationRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field.</td>
</tr>
<tr>
    <td><CopyableCode code="mutationRecords" /></td>
    <td><code>array</code></td>
    <td>Records of the modification of this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="verificationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel.</td>
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
    <td><a href="#projects_notification_channels_get"><CopyableCode code="projects_notification_channels_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationChannelsId"><code>notificationChannelsId</code></a></td>
    <td></td>
    <td>Gets a single notification channel. The channel includes the relevant configuration details with which the channel was created. However, the response may truncate or omit passwords, API keys, or other private key matter and thus the response may not be 100% identical to the information that was supplied in the call to the create method.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channels_list"><CopyableCode code="projects_notification_channels_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channels_create"><CopyableCode code="projects_notification_channels_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channels_patch"><CopyableCode code="projects_notification_channels_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationChannelsId"><code>notificationChannelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a notification channel. Fields not specified in the field mask remain unchanged.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channels_delete"><CopyableCode code="projects_notification_channels_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationChannelsId"><code>notificationChannelsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a notification channel.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channels_send_verification_code"><CopyableCode code="projects_notification_channels_send_verification_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationChannelsId"><code>notificationChannelsId</code></a></td>
    <td></td>
    <td>Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.</td>
</tr>
<tr>
    <td><a href="#projects_notification_channels_verify"><CopyableCode code="projects_notification_channels_verify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationChannelsId"><code>notificationChannelsId</code></a></td>
    <td></td>
    <td>Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.</td>
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
<tr id="parameter-notificationChannelsId">
    <td><CopyableCode code="notificationChannelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_notification_channels_get"
    values={[
        { label: 'projects_notification_channels_get', value: 'projects_notification_channels_get' },
        { label: 'projects_notification_channels_list', value: 'projects_notification_channels_list' }
    ]}
>
<TabItem value="projects_notification_channels_get">

Gets a single notification channel. The channel includes the relevant configuration details with which the channel was created. However, the response may truncate or omit passwords, API keys, or other private key matter and thus the response may not be 100% identical to the information that was supplied in the call to the create method.

```sql
SELECT
name,
creationRecord,
description,
displayName,
enabled,
labels,
mutationRecords,
type,
userLabels,
verificationStatus
FROM google.monitoring.notification_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND notificationChannelsId = '{{ notificationChannelsId }}' -- required;
```
</TabItem>
<TabItem value="projects_notification_channels_list">

Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.

```sql
SELECT
name,
creationRecord,
description,
displayName,
enabled,
labels,
mutationRecords,
type,
userLabels,
verificationStatus
FROM google.monitoring.notification_channels
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_notification_channels_create"
    values={[
        { label: 'projects_notification_channels_create', value: 'projects_notification_channels_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_notification_channels_create">

Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.

```sql
INSERT INTO google.monitoring.notification_channels (
data__type,
data__name,
data__displayName,
data__description,
data__labels,
data__userLabels,
data__verificationStatus,
data__enabled,
data__creationRecord,
data__mutationRecords,
projectsId
)
SELECT 
'{{ type }}',
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ labels }}',
'{{ userLabels }}',
'{{ verificationStatus }}',
{{ enabled }},
'{{ creationRecord }}',
'{{ mutationRecords }}',
'{{ projectsId }}'
RETURNING
name,
creationRecord,
description,
displayName,
enabled,
labels,
mutationRecords,
type,
userLabels,
verificationStatus
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: notification_channels
  props:
    - name: projectsId
      value: string
      description: Required parameter for the notification_channels resource.
    - name: type
      value: string
      description: >
        The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field.
        
    - name: name
      value: string
      description: >
        Identifier. The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation.
        
    - name: displayName
      value: string
      description: >
        An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.
        
    - name: description
      value: string
      description: >
        An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.
        
    - name: labels
      value: object
      description: >
        Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field.
        
    - name: userLabels
      value: object
      description: >
        User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
        
    - name: verificationStatus
      value: string
      description: >
        Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel.
        
      valid_values: ['VERIFICATION_STATUS_UNSPECIFIED', 'UNVERIFIED', 'VERIFIED']
    - name: enabled
      value: boolean
      description: >
        Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.
        
    - name: creationRecord
      value: object
      description: >
        Record of the creation of this channel.
        
    - name: mutationRecords
      value: array
      description: >
        Records of the modification of this channel.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_notification_channels_patch"
    values={[
        { label: 'projects_notification_channels_patch', value: 'projects_notification_channels_patch' }
    ]}
>
<TabItem value="projects_notification_channels_patch">

Updates a notification channel. Fields not specified in the field mask remain unchanged.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.

```sql
UPDATE google.monitoring.notification_channels
SET 
data__type = '{{ type }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__userLabels = '{{ userLabels }}',
data__verificationStatus = '{{ verificationStatus }}',
data__enabled = {{ enabled }},
data__creationRecord = '{{ creationRecord }}',
data__mutationRecords = '{{ mutationRecords }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND notificationChannelsId = '{{ notificationChannelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
creationRecord,
description,
displayName,
enabled,
labels,
mutationRecords,
type,
userLabels,
verificationStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_notification_channels_delete"
    values={[
        { label: 'projects_notification_channels_delete', value: 'projects_notification_channels_delete' }
    ]}
>
<TabItem value="projects_notification_channels_delete">

Deletes a notification channel.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.

```sql
DELETE FROM google.monitoring.notification_channels
WHERE projectsId = '{{ projectsId }}' --required
AND notificationChannelsId = '{{ notificationChannelsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_notification_channels_send_verification_code"
    values={[
        { label: 'projects_notification_channels_send_verification_code', value: 'projects_notification_channels_send_verification_code' },
        { label: 'projects_notification_channels_verify', value: 'projects_notification_channels_verify' }
    ]}
>
<TabItem value="projects_notification_channels_send_verification_code">

Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.

```sql
EXEC google.monitoring.notification_channels.projects_notification_channels_send_verification_code 
@projectsId='{{ projectsId }}' --required, 
@notificationChannelsId='{{ notificationChannelsId }}' --required;
```
</TabItem>
<TabItem value="projects_notification_channels_verify">

Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.

```sql
EXEC google.monitoring.notification_channels.projects_notification_channels_verify 
@projectsId='{{ projectsId }}' --required, 
@notificationChannelsId='{{ notificationChannelsId }}' --required 
@@json=
'{
"code": "{{ code }}"
}';
```
</TabItem>
</Tabs>
