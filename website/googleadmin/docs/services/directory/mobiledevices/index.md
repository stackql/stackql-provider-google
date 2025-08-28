--- 
title: mobiledevices
hide_title: false
hide_table_of_contents: false
keywords:
  - mobiledevices
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>mobiledevices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mobiledevices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.mobiledevices" /></td></tr>
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
    <td><code>array</code></td>
    <td>The list of the owner's user names. If your application needs the current list of device owner names, use the [get](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user).</td>
</tr>
<tr>
    <td><CopyableCode code="adbStatus" /></td>
    <td><code>boolean</code></td>
    <td>Adb (USB debugging) enabled or disabled on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.</td>
</tr>
<tr>
    <td><CopyableCode code="basebandVersion" /></td>
    <td><code>string</code></td>
    <td>The device's baseband version.</td>
</tr>
<tr>
    <td><CopyableCode code="bootloaderVersion" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Bootloader version (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Brand (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="buildNumber" /></td>
    <td><code>string</code></td>
    <td>The device's operating system build number.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLanguage" /></td>
    <td><code>string</code></td>
    <td>The default locale used on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="developerOptionsStatus" /></td>
    <td><code>boolean</code></td>
    <td>Developer options enabled or disabled on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceCompromisedStatus" /></td>
    <td><code>string</code></td>
    <td>The compromised device status.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="devicePasswordStatus" /></td>
    <td><code>string</code></td>
    <td>DevicePasswordStatus (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>array</code></td>
    <td>The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) method.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Encryption Status (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="firstSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Hardware (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="hardwareId" /></td>
    <td><code>string</code></td>
    <td>The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.</td>
</tr>
<tr>
    <td><CopyableCode code="imei" /></td>
    <td><code>string</code></td>
    <td>The device's IMEI number.</td>
</tr>
<tr>
    <td><CopyableCode code="kernelVersion" /></td>
    <td><code>string</code></td>
    <td>The device's kernel version.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`. (default: admin#directory#mobiledevice)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="managedAccountIsOnOwnerProfile" /></td>
    <td><code>boolean</code></td>
    <td>Boolean indicating if this account is on owner/primary profile or not.</td>
</tr>
<tr>
    <td><CopyableCode code="manufacturer" /></td>
    <td><code>string</code></td>
    <td>Mobile Device manufacturer (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="meid" /></td>
    <td><code>string</code></td>
    <td>The device's MEID number.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The mobile device's model name, for example Nexus S. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile=devices#update_mobile_device).</td>
</tr>
<tr>
    <td><CopyableCode code="networkOperator" /></td>
    <td><code>string</code></td>
    <td>Mobile Device mobile or network operator (if available) (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device).</td>
</tr>
<tr>
    <td><CopyableCode code="otherAccountsInfo" /></td>
    <td><code>array</code></td>
    <td>The list of accounts added on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="privilege" /></td>
    <td><code>string</code></td>
    <td>DMAgentPermission (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseVersion" /></td>
    <td><code>string</code></td>
    <td>Mobile Device release version version (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID the API service uses to identify the mobile device.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPatchLevel" /></td>
    <td><code>string (int64)</code></td>
    <td>Mobile Device Security patch level (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>The device's serial number.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The device's status.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsWorkProfile" /></td>
    <td><code>boolean</code></td>
    <td>Work profile supported on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of mobile device.</td>
</tr>
<tr>
    <td><CopyableCode code="unknownSourcesStatus" /></td>
    <td><code>boolean</code></td>
    <td>Unknown sources enabled or disabled on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="userAgent" /></td>
    <td><code>string</code></td>
    <td>Gives information about the device such as `os` version. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device).</td>
</tr>
<tr>
    <td><CopyableCode code="wifiMacAddress" /></td>
    <td><code>string</code></td>
    <td>The device's MAC address on Wi-Fi networks.</td>
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
    <td><code>array</code></td>
    <td>The list of the owner's user names. If your application needs the current list of device owner names, use the [get](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user).</td>
</tr>
<tr>
    <td><CopyableCode code="adbStatus" /></td>
    <td><code>boolean</code></td>
    <td>Adb (USB debugging) enabled or disabled on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.</td>
</tr>
<tr>
    <td><CopyableCode code="basebandVersion" /></td>
    <td><code>string</code></td>
    <td>The device's baseband version.</td>
</tr>
<tr>
    <td><CopyableCode code="bootloaderVersion" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Bootloader version (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Brand (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="buildNumber" /></td>
    <td><code>string</code></td>
    <td>The device's operating system build number.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLanguage" /></td>
    <td><code>string</code></td>
    <td>The default locale used on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="developerOptionsStatus" /></td>
    <td><code>boolean</code></td>
    <td>Developer options enabled or disabled on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceCompromisedStatus" /></td>
    <td><code>string</code></td>
    <td>The compromised device status.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="devicePasswordStatus" /></td>
    <td><code>string</code></td>
    <td>DevicePasswordStatus (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>array</code></td>
    <td>The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) method.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Encryption Status (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="firstSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware" /></td>
    <td><code>string</code></td>
    <td>Mobile Device Hardware (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="hardwareId" /></td>
    <td><code>string</code></td>
    <td>The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.</td>
</tr>
<tr>
    <td><CopyableCode code="imei" /></td>
    <td><code>string</code></td>
    <td>The device's IMEI number.</td>
</tr>
<tr>
    <td><CopyableCode code="kernelVersion" /></td>
    <td><code>string</code></td>
    <td>The device's kernel version.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`. (default: admin#directory#mobiledevice)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="managedAccountIsOnOwnerProfile" /></td>
    <td><code>boolean</code></td>
    <td>Boolean indicating if this account is on owner/primary profile or not.</td>
</tr>
<tr>
    <td><CopyableCode code="manufacturer" /></td>
    <td><code>string</code></td>
    <td>Mobile Device manufacturer (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="meid" /></td>
    <td><code>string</code></td>
    <td>The device's MEID number.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The mobile device's model name, for example Nexus S. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile=devices#update_mobile_device).</td>
</tr>
<tr>
    <td><CopyableCode code="networkOperator" /></td>
    <td><code>string</code></td>
    <td>Mobile Device mobile or network operator (if available) (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device).</td>
</tr>
<tr>
    <td><CopyableCode code="otherAccountsInfo" /></td>
    <td><code>array</code></td>
    <td>The list of accounts added on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="privilege" /></td>
    <td><code>string</code></td>
    <td>DMAgentPermission (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseVersion" /></td>
    <td><code>string</code></td>
    <td>Mobile Device release version version (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID the API service uses to identify the mobile device.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPatchLevel" /></td>
    <td><code>string (int64)</code></td>
    <td>Mobile Device Security patch level (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>The device's serial number.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The device's status.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsWorkProfile" /></td>
    <td><code>boolean</code></td>
    <td>Work profile supported on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of mobile device.</td>
</tr>
<tr>
    <td><CopyableCode code="unknownSourcesStatus" /></td>
    <td><code>boolean</code></td>
    <td>Unknown sources enabled or disabled on device (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="userAgent" /></td>
    <td><code>string</code></td>
    <td>Gives information about the device such as `os` version. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device).</td>
</tr>
<tr>
    <td><CopyableCode code="wifiMacAddress" /></td>
    <td><code>string</code></td>
    <td>The device's MAC address on Wi-Fi networks.</td>
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
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a></td>
    <td><a href="#parameter-projection"><code>projection</code></a></td>
    <td>Retrieves a mobile device's properties.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a></td>
    <td></td>
    <td>Removes a mobile device.</td>
</tr>
<tr>
    <td><a href="#action"><CopyableCode code="action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a></td>
    <td></td>
    <td>Takes an action that affects a mobile device. For example, remotely wiping a device.</td>
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
<tr id="parameter-customerId">
    <td><CopyableCode code="customerId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projection">
    <td><CopyableCode code="projection" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
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

Retrieves a mobile device's properties.

```sql
SELECT
name,
adbStatus,
applications,
basebandVersion,
bootloaderVersion,
brand,
buildNumber,
defaultLanguage,
developerOptionsStatus,
deviceCompromisedStatus,
deviceId,
devicePasswordStatus,
email,
encryptionStatus,
etag,
firstSync,
hardware,
hardwareId,
imei,
kernelVersion,
kind,
lastSync,
managedAccountIsOnOwnerProfile,
manufacturer,
meid,
model,
networkOperator,
os,
otherAccountsInfo,
privilege,
releaseVersion,
resourceId,
securityPatchLevel,
serialNumber,
status,
supportsWorkProfile,
type,
unknownSourcesStatus,
userAgent,
wifiMacAddress
FROM googleadmin.directory.mobiledevices
WHERE customerId = '{{ customerId }}' -- required
AND resourceId = '{{ resourceId }}' -- required
AND projection = '{{ projection }}';
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).

```sql
SELECT
name,
adbStatus,
applications,
basebandVersion,
bootloaderVersion,
brand,
buildNumber,
defaultLanguage,
developerOptionsStatus,
deviceCompromisedStatus,
deviceId,
devicePasswordStatus,
email,
encryptionStatus,
etag,
firstSync,
hardware,
hardwareId,
imei,
kernelVersion,
kind,
lastSync,
managedAccountIsOnOwnerProfile,
manufacturer,
meid,
model,
networkOperator,
os,
otherAccountsInfo,
privilege,
releaseVersion,
resourceId,
securityPatchLevel,
serialNumber,
status,
supportsWorkProfile,
type,
unknownSourcesStatus,
userAgent,
wifiMacAddress
FROM googleadmin.directory.mobiledevices
WHERE customerId = '{{ customerId }}' -- required
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND projection = '{{ projection }}'
AND query = '{{ query }}'
AND sortOrder = '{{ sortOrder }}';
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

Removes a mobile device.

```sql
DELETE FROM googleadmin.directory.mobiledevices
WHERE customerId = '{{ customerId }}' --required
AND resourceId = '{{ resourceId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="action"
    values={[
        { label: 'action', value: 'action' }
    ]}
>
<TabItem value="action">

Takes an action that affects a mobile device. For example, remotely wiping a device.

```sql
EXEC googleadmin.directory.mobiledevices.action 
@customerId='{{ customerId }}' --required, 
@resourceId='{{ resourceId }}' --required 
@@json=
'{
"action": "{{ action }}"
}';
```
</TabItem>
</Tabs>
