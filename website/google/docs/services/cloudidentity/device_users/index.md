--- 
title: device_users
hide_title: false
hide_table_of_contents: false
keywords:
  - device_users
  - cloudidentity
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

Creates, updates, deletes, gets or lists a <code>device_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>device_users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.device_users" /></td></tr>
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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/&#123;device&#125;/deviceUsers/&#123;device_user&#125;`, where `device_user` uniquely identifies a user's use of a device.</td>
</tr>
<tr>
    <td><CopyableCode code="compromisedState" /></td>
    <td><code>string</code></td>
    <td>Compromised State of the DeviceUser object</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>When the user first signed in to the device</td>
</tr>
<tr>
    <td><CopyableCode code="firstSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Most recent time when user registered with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Default locale used on device, in IETF BCP-47 format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time when user synced with policies.</td>
</tr>
<tr>
    <td><CopyableCode code="managementState" /></td>
    <td><code>string</code></td>
    <td>Output only. Management state of the user on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="passwordState" /></td>
    <td><code>string</code></td>
    <td>Password state of the DeviceUser object</td>
</tr>
<tr>
    <td><CopyableCode code="userAgent" /></td>
    <td><code>string</code></td>
    <td>Output only. User agent on the device for this specific user</td>
</tr>
<tr>
    <td><CopyableCode code="userEmail" /></td>
    <td><code>string</code></td>
    <td>Email address of the user registered on the device.</td>
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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/&#123;device&#125;/deviceUsers/&#123;device_user&#125;`, where `device_user` uniquely identifies a user's use of a device.</td>
</tr>
<tr>
    <td><CopyableCode code="compromisedState" /></td>
    <td><code>string</code></td>
    <td>Compromised State of the DeviceUser object</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>When the user first signed in to the device</td>
</tr>
<tr>
    <td><CopyableCode code="firstSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Most recent time when user registered with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. Default locale used on device, in IETF BCP-47 format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time when user synced with policies.</td>
</tr>
<tr>
    <td><CopyableCode code="managementState" /></td>
    <td><code>string</code></td>
    <td>Output only. Management state of the user on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="passwordState" /></td>
    <td><code>string</code></td>
    <td>Password state of the DeviceUser object</td>
</tr>
<tr>
    <td><CopyableCode code="userAgent" /></td>
    <td><code>string</code></td>
    <td>Output only. User agent on the device for this specific user</td>
</tr>
<tr>
    <td><CopyableCode code="userEmail" /></td>
    <td><code>string</code></td>
    <td>Email address of the user registered on the device.</td>
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
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Retrieves the specified DeviceUser</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists/Searches DeviceUsers.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Deletes the specified DeviceUser. This also revokes the user's access to device data.</td>
</tr>
<tr>
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-androidId"><code>androidId</code></a>, <a href="#parameter-rawResourceId"><code>rawResourceId</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td>Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td></td>
    <td>Approves device to access user data.</td>
</tr>
<tr>
    <td><a href="#block"><CopyableCode code="block" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td></td>
    <td>Blocks device from accessing user data</td>
</tr>
<tr>
    <td><a href="#wipe"><CopyableCode code="wipe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td></td>
    <td>Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.</td>
</tr>
<tr>
    <td><a href="#cancel_wipe"><CopyableCode code="cancel_wipe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a>, <a href="#parameter-deviceUsersId"><code>deviceUsersId</code></a></td>
    <td></td>
    <td>Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.</td>
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
<tr id="parameter-deviceUsersId">
    <td><CopyableCode code="deviceUsersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-devicesId">
    <td><CopyableCode code="devicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-androidId">
    <td><CopyableCode code="androidId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-rawResourceId">
    <td><CopyableCode code="rawResourceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
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

Retrieves the specified DeviceUser

```sql
SELECT
name,
compromisedState,
createTime,
firstSyncTime,
languageCode,
lastSyncTime,
managementState,
passwordState,
userAgent,
userEmail
FROM google.cloudidentity.device_users
WHERE devicesId = '{{ devicesId }}' -- required
AND deviceUsersId = '{{ deviceUsersId }}' -- required
AND customer = '{{ customer }}';
```
</TabItem>
<TabItem value="list">

Lists/Searches DeviceUsers.

```sql
SELECT
name,
compromisedState,
createTime,
firstSyncTime,
languageCode,
lastSyncTime,
managementState,
passwordState,
userAgent,
userEmail
FROM google.cloudidentity.device_users
WHERE devicesId = '{{ devicesId }}' -- required
AND customer = '{{ customer }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}';
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

Deletes the specified DeviceUser. This also revokes the user's access to device data.

```sql
DELETE FROM google.cloudidentity.device_users
WHERE devicesId = '{{ devicesId }}' --required
AND deviceUsersId = '{{ deviceUsersId }}' --required
AND customer = '{{ customer }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="lookup"
    values={[
        { label: 'lookup', value: 'lookup' },
        { label: 'approve', value: 'approve' },
        { label: 'block', value: 'block' },
        { label: 'wipe', value: 'wipe' },
        { label: 'cancel_wipe', value: 'cancel_wipe' }
    ]}
>
<TabItem value="lookup">

Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.

```sql
EXEC google.cloudidentity.device_users.lookup 
@devicesId='{{ devicesId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@androidId='{{ androidId }}', 
@rawResourceId='{{ rawResourceId }}', 
@userId='{{ userId }}';
```
</TabItem>
<TabItem value="approve">

Approves device to access user data.

```sql
EXEC google.cloudidentity.device_users.approve 
@devicesId='{{ devicesId }}' --required, 
@deviceUsersId='{{ deviceUsersId }}' --required 
@@json=
'{
"customer": "{{ customer }}"
}';
```
</TabItem>
<TabItem value="block">

Blocks device from accessing user data

```sql
EXEC google.cloudidentity.device_users.block 
@devicesId='{{ devicesId }}' --required, 
@deviceUsersId='{{ deviceUsersId }}' --required 
@@json=
'{
"customer": "{{ customer }}"
}';
```
</TabItem>
<TabItem value="wipe">

Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.

```sql
EXEC google.cloudidentity.device_users.wipe 
@devicesId='{{ devicesId }}' --required, 
@deviceUsersId='{{ deviceUsersId }}' --required 
@@json=
'{
"customer": "{{ customer }}"
}';
```
</TabItem>
<TabItem value="cancel_wipe">

Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.

```sql
EXEC google.cloudidentity.device_users.cancel_wipe 
@devicesId='{{ devicesId }}' --required, 
@deviceUsersId='{{ deviceUsersId }}' --required 
@@json=
'{
"customer": "{{ customer }}"
}';
```
</TabItem>
</Tabs>
