--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>devices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.devices" /></td></tr>
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

 A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.

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
    <td>Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/&#123;device&#125;`, where device is the unique id assigned to the Device. Important: Device API scopes require that you use domain-wide delegation to access the API. For more information, see [Set up the Devices API](https://cloud.google.com/identity/docs/how-to/setup-devices).</td>
</tr>
<tr>
    <td><CopyableCode code="androidSpecificAttributes" /></td>
    <td><code>object</code></td>
    <td>Output only. Attributes specific to Android devices. (id: GoogleAppsCloudidentityDevicesV1AndroidAttributes)</td>
</tr>
<tr>
    <td><CopyableCode code="assetTag" /></td>
    <td><code>string</code></td>
    <td>Asset tag of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="basebandVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Baseband version of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="bootloaderVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Device bootloader version. Example: 0.6.7.</td>
</tr>
<tr>
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>Output only. Device brand. Example: Samsung.</td>
</tr>
<tr>
    <td><CopyableCode code="buildNumber" /></td>
    <td><code>string</code></td>
    <td>Output only. Build number of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="compromisedState" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents whether the Device is compromised.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of device.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledDeveloperOptions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether developer options is enabled on device.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledUsbDebugging" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether USB debugging is enabled on device.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionState" /></td>
    <td><code>string</code></td>
    <td>Output only. Device encryption state.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointVerificationSpecificAttributes" /></td>
    <td><code>object</code></td>
    <td>Output only. Attributes specific to [Endpoint Verification](https://cloud.google.com/endpoint-verification/docs/overview) devices. (id: GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Host name of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="imei" /></td>
    <td><code>string</code></td>
    <td>Output only. IMEI number of device if GSM device; empty otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="kernelVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Kernel version of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Most recent time when device synced with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="managementState" /></td>
    <td><code>string</code></td>
    <td>Output only. Management state of the device</td>
</tr>
<tr>
    <td><CopyableCode code="manufacturer" /></td>
    <td><code>string</code></td>
    <td>Output only. Device manufacturer. Example: Motorola.</td>
</tr>
<tr>
    <td><CopyableCode code="meid" /></td>
    <td><code>string</code></td>
    <td>Output only. MEID number of device if CDMA device; empty otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Output only. Model name of device. Example: Pixel 3.</td>
</tr>
<tr>
    <td><CopyableCode code="networkOperator" /></td>
    <td><code>string</code></td>
    <td>Output only. Mobile or network operator of device, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="osVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. OS version of the device. Example: Android 8.1.0.</td>
</tr>
<tr>
    <td><CopyableCode code="otherAccounts" /></td>
    <td><code>array</code></td>
    <td>Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".</td>
</tr>
<tr>
    <td><CopyableCode code="ownerType" /></td>
    <td><code>string</code></td>
    <td>Output only. Whether the device is owned by the company or an individual</td>
</tr>
<tr>
    <td><CopyableCode code="releaseVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. OS release version. Example: 6.0.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPatchTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. OS security patch update time on device.</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>Serial Number of device. Example: HT82V1A01076.</td>
</tr>
<tr>
    <td><CopyableCode code="unifiedDeviceId" /></td>
    <td><code>string</code></td>
    <td>Output only. Unified device id of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="wifiMacAddresses" /></td>
    <td><code>array</code></td>
    <td>WiFi MAC addresses of device.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message that is returned from the ListDevices method.

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
    <td><CopyableCode code="devices" /></td>
    <td><code>array</code></td>
    <td>Devices meeting the list restrictions.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results. Empty if there are no more results.</td>
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
    <td><a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Retrieves the specified device.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists/Searches devices.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a></td>
    <td>Deletes the specified device.</td>
</tr>
<tr>
    <td><a href="#wipe"><CopyableCode code="wipe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Wipes all data on the specified device.</td>
</tr>
<tr>
    <td><a href="#cancel_wipe"><CopyableCode code="cancel_wipe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. This operation is possible when the device is in a "pending wipe" state. The device enters the "pending wipe" state when a wipe device command is issued, but has not yet been sent to the device. The cancel wipe will fail if the wipe command has already been issued to the device.</td>
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
<tr id="parameter-devicesId">
    <td><CopyableCode code="devicesId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Retrieves the specified device.

```sql
SELECT
name,
androidSpecificAttributes,
assetTag,
basebandVersion,
bootloaderVersion,
brand,
buildNumber,
compromisedState,
createTime,
deviceId,
deviceType,
enabledDeveloperOptions,
enabledUsbDebugging,
encryptionState,
endpointVerificationSpecificAttributes,
hostname,
imei,
kernelVersion,
lastSyncTime,
managementState,
manufacturer,
meid,
model,
networkOperator,
osVersion,
otherAccounts,
ownerType,
releaseVersion,
securityPatchTime,
serialNumber,
unifiedDeviceId,
wifiMacAddresses
FROM google.cloudidentity.devices
WHERE devicesId = '{{ devicesId }}' -- required
AND customer = '{{ customer }}';
```
</TabItem>
<TabItem value="list">

Lists/Searches devices.

```sql
SELECT
devices,
nextPageToken
FROM google.cloudidentity.devices
WHERE customer = '{{ customer }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

```sql
INSERT INTO google.cloudidentity.devices (
data__lastSyncTime,
data__serialNumber,
data__assetTag,
data__wifiMacAddresses,
data__deviceId,
data__hostname,
customer
)
SELECT 
'{{ lastSyncTime }}',
'{{ serialNumber }}',
'{{ assetTag }}',
'{{ wifiMacAddresses }}',
'{{ deviceId }}',
'{{ hostname }}',
'{{ customer }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: devices
  props:
    - name: lastSyncTime
      value: string
      description: >
        Most recent time when device synced with this service.
        
    - name: serialNumber
      value: string
      description: >
        Serial Number of device. Example: HT82V1A01076.
        
    - name: assetTag
      value: string
      description: >
        Asset tag of the device.
        
    - name: wifiMacAddresses
      value: array
      description: >
        WiFi MAC addresses of device.
        
    - name: deviceId
      value: string
      description: >
        Unique identifier for the device.
        
    - name: hostname
      value: string
      description: >
        Host name of the device.
        
    - name: customer
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

Deletes the specified device.

```sql
DELETE FROM google.cloudidentity.devices
WHERE devicesId = '{{ devicesId }}' --required
AND customer = '{{ customer }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="wipe"
    values={[
        { label: 'wipe', value: 'wipe' },
        { label: 'cancel_wipe', value: 'cancel_wipe' }
    ]}
>
<TabItem value="wipe">

Wipes all data on the specified device.

```sql
EXEC google.cloudidentity.devices.wipe 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"customer": "{{ customer }}", 
"removeResetLock": {{ removeResetLock }}
}';
```
</TabItem>
<TabItem value="cancel_wipe">

Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. This operation is possible when the device is in a "pending wipe" state. The device enters the "pending wipe" state when a wipe device command is issued, but has not yet been sent to the device. The cancel wipe will fail if the wipe command has already been issued to the device.

```sql
EXEC google.cloudidentity.devices.cancel_wipe 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"customer": "{{ customer }}"
}';
```
</TabItem>
</Tabs>
