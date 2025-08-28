--- 
title: chromeosdevices
hide_title: false
hide_table_of_contents: false
keywords:
  - chromeosdevices
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

Creates, updates, deletes, gets or lists a <code>chromeosdevices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>chromeosdevices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.chromeosdevices" /></td></tr>
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
    <td><CopyableCode code="activeTimeRanges" /></td>
    <td><code>array</code></td>
    <td>A list of active time ranges (Read-only).</td>
</tr>
<tr>
    <td><CopyableCode code="annotatedAssetId" /></td>
    <td><code>string</code></td>
    <td>The asset identifier as noted by an administrator or specified during enrollment.</td>
</tr>
<tr>
    <td><CopyableCode code="annotatedLocation" /></td>
    <td><code>string</code></td>
    <td>The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="annotatedUser" /></td>
    <td><code>string</code></td>
    <td>The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="autoUpdateExpiration" /></td>
    <td><code>string (int64)</code></td>
    <td>(Read-only) The timestamp after which the device will stop receiving Chrome updates or support. Please use "autoUpdateThrough" instead.</td>
</tr>
<tr>
    <td><CopyableCode code="autoUpdateThrough" /></td>
    <td><code>string</code></td>
    <td>Output only. The timestamp after which the device will stop receiving Chrome updates or support.</td>
</tr>
<tr>
    <td><CopyableCode code="backlightInfo" /></td>
    <td><code>array</code></td>
    <td>Output only. Contains backlight information for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="bootMode" /></td>
    <td><code>string</code></td>
    <td>The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).</td>
</tr>
<tr>
    <td><CopyableCode code="chromeOsType" /></td>
    <td><code>string</code></td>
    <td>Output only. Chrome OS type of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuInfo" /></td>
    <td><code>array</code></td>
    <td>Information regarding CPU specs in the device.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuStatusReports" /></td>
    <td><code>array</code></td>
    <td>Reports of CPU utilization and temperature (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="deprovisionReason" /></td>
    <td><code>string</code></td>
    <td>(Read-only) Deprovision reason.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceFiles" /></td>
    <td><code>array</code></td>
    <td>A list of device files to download (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Chrome device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceLicenseType" /></td>
    <td><code>string</code></td>
    <td>Output only. Device license type.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSpaceUsage" /></td>
    <td><code>object</code></td>
    <td>Output only. How much disk space the device has available and is currently using. (id: ByteUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="diskVolumeReports" /></td>
    <td><code>array</code></td>
    <td>Reports of disk space and other info about mounted/connected volumes.</td>
</tr>
<tr>
    <td><CopyableCode code="dockMacAddress" /></td>
    <td><code>string</code></td>
    <td>(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ethernetMacAddress" /></td>
    <td><code>string</code></td>
    <td>The device's MAC address on the ethernet network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ethernetMacAddress0" /></td>
    <td><code>string</code></td>
    <td>(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedSupportEligible" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not the device requires the extended support opt in.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedSupportEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether extended support policy is enabled on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedSupportStart" /></td>
    <td><code>string</code></td>
    <td>Output only. Date of the device when extended support policy for automatic updates starts.</td>
</tr>
<tr>
    <td><CopyableCode code="fanInfo" /></td>
    <td><code>array</code></td>
    <td>Output only. Fan information for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="firmwareVersion" /></td>
    <td><code>string</code></td>
    <td>The Chrome device's firmware version.</td>
</tr>
<tr>
    <td><CopyableCode code="firstEnrollmentTime" /></td>
    <td><code>string</code></td>
    <td>Date and time for the first time the device was enrolled.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`. (default: admin#directory#chromeosdevice)</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeprovisionTimestamp" /></td>
    <td><code>string</code></td>
    <td>(Read-only) Date and time for the last deprovision of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEnrollmentTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was last enrolled (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="lastKnownNetwork" /></td>
    <td><code>array</code></td>
    <td>Contains last known network (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="macAddress" /></td>
    <td><code>string</code></td>
    <td>The device's wireless MAC address. If the device does not have this information, it is not included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="manufactureDate" /></td>
    <td><code>string</code></td>
    <td>(Read-only) The date the device was manufactured in yyyy-mm-dd format.</td>
</tr>
<tr>
    <td><CopyableCode code="meid" /></td>
    <td><code>string</code></td>
    <td>The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices.html#export_meid).</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The device's model information. If the device does not have this information, this property is not included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="orderNumber" /></td>
    <td><code>string</code></td>
    <td>The device's order number. Only devices directly purchased from Google have an order number.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td>The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).</td>
</tr>
<tr>
    <td><CopyableCode code="osUpdateStatus" /></td>
    <td><code>object</code></td>
    <td>The status of the OS updates for the device. (id: OsUpdateStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="osVersion" /></td>
    <td><code>string</code></td>
    <td>The Chrome device's operating system version.</td>
</tr>
<tr>
    <td><CopyableCode code="osVersionCompliance" /></td>
    <td><code>string</code></td>
    <td>Output only. Compliance status of the OS version.</td>
</tr>
<tr>
    <td><CopyableCode code="platformVersion" /></td>
    <td><code>string</code></td>
    <td>The Chrome device's platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="recentUsers" /></td>
    <td><code>array</code></td>
    <td>A list of recent device users, in descending order, by last login time.</td>
</tr>
<tr>
    <td><CopyableCode code="screenshotFiles" /></td>
    <td><code>array</code></td>
    <td>A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="supportEndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Final date the device will be supported (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="systemRamFreeReports" /></td>
    <td><code>array</code></td>
    <td>Reports of amounts of available RAM memory (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="systemRamTotal" /></td>
    <td><code>string (int64)</code></td>
    <td>Total RAM on the device [in bytes] (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="tpmVersionInfo" /></td>
    <td><code>object</code></td>
    <td>Trusted Platform Module (TPM) (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="willAutoRenew" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the device will auto renew its support after the support end date. This is a read-only property.</td>
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
    <td><CopyableCode code="activeTimeRanges" /></td>
    <td><code>array</code></td>
    <td>A list of active time ranges (Read-only).</td>
</tr>
<tr>
    <td><CopyableCode code="annotatedAssetId" /></td>
    <td><code>string</code></td>
    <td>The asset identifier as noted by an administrator or specified during enrollment.</td>
</tr>
<tr>
    <td><CopyableCode code="annotatedLocation" /></td>
    <td><code>string</code></td>
    <td>The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="annotatedUser" /></td>
    <td><code>string</code></td>
    <td>The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="autoUpdateExpiration" /></td>
    <td><code>string (int64)</code></td>
    <td>(Read-only) The timestamp after which the device will stop receiving Chrome updates or support. Please use "autoUpdateThrough" instead.</td>
</tr>
<tr>
    <td><CopyableCode code="autoUpdateThrough" /></td>
    <td><code>string</code></td>
    <td>Output only. The timestamp after which the device will stop receiving Chrome updates or support.</td>
</tr>
<tr>
    <td><CopyableCode code="backlightInfo" /></td>
    <td><code>array</code></td>
    <td>Output only. Contains backlight information for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="bootMode" /></td>
    <td><code>string</code></td>
    <td>The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).</td>
</tr>
<tr>
    <td><CopyableCode code="chromeOsType" /></td>
    <td><code>string</code></td>
    <td>Output only. Chrome OS type of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuInfo" /></td>
    <td><code>array</code></td>
    <td>Information regarding CPU specs in the device.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuStatusReports" /></td>
    <td><code>array</code></td>
    <td>Reports of CPU utilization and temperature (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="deprovisionReason" /></td>
    <td><code>string</code></td>
    <td>(Read-only) Deprovision reason.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceFiles" /></td>
    <td><code>array</code></td>
    <td>A list of device files to download (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Chrome device.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceLicenseType" /></td>
    <td><code>string</code></td>
    <td>Output only. Device license type.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSpaceUsage" /></td>
    <td><code>object</code></td>
    <td>Output only. How much disk space the device has available and is currently using. (id: ByteUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="diskVolumeReports" /></td>
    <td><code>array</code></td>
    <td>Reports of disk space and other info about mounted/connected volumes.</td>
</tr>
<tr>
    <td><CopyableCode code="dockMacAddress" /></td>
    <td><code>string</code></td>
    <td>(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ethernetMacAddress" /></td>
    <td><code>string</code></td>
    <td>The device's MAC address on the ethernet network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ethernetMacAddress0" /></td>
    <td><code>string</code></td>
    <td>(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedSupportEligible" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not the device requires the extended support opt in.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedSupportEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether extended support policy is enabled on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="extendedSupportStart" /></td>
    <td><code>string</code></td>
    <td>Output only. Date of the device when extended support policy for automatic updates starts.</td>
</tr>
<tr>
    <td><CopyableCode code="fanInfo" /></td>
    <td><code>array</code></td>
    <td>Output only. Fan information for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="firmwareVersion" /></td>
    <td><code>string</code></td>
    <td>The Chrome device's firmware version.</td>
</tr>
<tr>
    <td><CopyableCode code="firstEnrollmentTime" /></td>
    <td><code>string</code></td>
    <td>Date and time for the first time the device was enrolled.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`. (default: admin#directory#chromeosdevice)</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeprovisionTimestamp" /></td>
    <td><code>string</code></td>
    <td>(Read-only) Date and time for the last deprovision of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEnrollmentTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was last enrolled (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="lastKnownNetwork" /></td>
    <td><code>array</code></td>
    <td>Contains last known network (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="macAddress" /></td>
    <td><code>string</code></td>
    <td>The device's wireless MAC address. If the device does not have this information, it is not included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="manufactureDate" /></td>
    <td><code>string</code></td>
    <td>(Read-only) The date the device was manufactured in yyyy-mm-dd format.</td>
</tr>
<tr>
    <td><CopyableCode code="meid" /></td>
    <td><code>string</code></td>
    <td>The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices.html#export_meid).</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The device's model information. If the device does not have this information, this property is not included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="orderNumber" /></td>
    <td><code>string</code></td>
    <td>The device's order number. Only devices directly purchased from Google have an order number.</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td>The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).</td>
</tr>
<tr>
    <td><CopyableCode code="osUpdateStatus" /></td>
    <td><code>object</code></td>
    <td>The status of the OS updates for the device. (id: OsUpdateStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="osVersion" /></td>
    <td><code>string</code></td>
    <td>The Chrome device's operating system version.</td>
</tr>
<tr>
    <td><CopyableCode code="osVersionCompliance" /></td>
    <td><code>string</code></td>
    <td>Output only. Compliance status of the OS version.</td>
</tr>
<tr>
    <td><CopyableCode code="platformVersion" /></td>
    <td><code>string</code></td>
    <td>The Chrome device's platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="recentUsers" /></td>
    <td><code>array</code></td>
    <td>A list of recent device users, in descending order, by last login time.</td>
</tr>
<tr>
    <td><CopyableCode code="screenshotFiles" /></td>
    <td><code>array</code></td>
    <td>A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="supportEndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Final date the device will be supported (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="systemRamFreeReports" /></td>
    <td><code>array</code></td>
    <td>Reports of amounts of available RAM memory (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="systemRamTotal" /></td>
    <td><code>string (int64)</code></td>
    <td>Total RAM on the device [in bytes] (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="tpmVersionInfo" /></td>
    <td><code>object</code></td>
    <td>Trusted Platform Module (TPM) (Read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="willAutoRenew" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the device will auto renew its support after the support end date. This is a read-only property.</td>
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
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td><a href="#parameter-projection"><code>projection</code></a></td>
    <td>Retrieves a Chrome OS device's properties.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-orgUnitPath"><code>orgUnitPath</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-includeChildOrgunits"><code>includeChildOrgunits</code></a></td>
    <td>Retrieves a paginated list of Chrome OS devices within an account.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td><a href="#parameter-projection"><code>projection</code></a></td>
    <td>Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td><a href="#parameter-projection"><code>projection</code></a></td>
    <td>Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.</td>
</tr>
<tr>
    <td><a href="#action"><CopyableCode code="action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a></td>
    <td></td>
    <td>Use [BatchChangeChromeOsDeviceStatus](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).</td>
</tr>
<tr>
    <td><a href="#move_devices_to_ou"><CopyableCode code="move_devices_to_ou" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customerId"><code>customerId</code></a>, <a href="#parameter-orgUnitPath"><code>orgUnitPath</code></a></td>
    <td></td>
    <td>Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.</td>
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
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orgUnitPath">
    <td><CopyableCode code="orgUnitPath" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeChildOrgunits">
    <td><CopyableCode code="includeChildOrgunits" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-orgUnitPath">
    <td><CopyableCode code="orgUnitPath" /></td>
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

Retrieves a Chrome OS device's properties.

```sql
SELECT
activeTimeRanges,
annotatedAssetId,
annotatedLocation,
annotatedUser,
autoUpdateExpiration,
autoUpdateThrough,
backlightInfo,
bootMode,
chromeOsType,
cpuInfo,
cpuStatusReports,
deprovisionReason,
deviceFiles,
deviceId,
deviceLicenseType,
diskSpaceUsage,
diskVolumeReports,
dockMacAddress,
etag,
ethernetMacAddress,
ethernetMacAddress0,
extendedSupportEligible,
extendedSupportEnabled,
extendedSupportStart,
fanInfo,
firmwareVersion,
firstEnrollmentTime,
kind,
lastDeprovisionTimestamp,
lastEnrollmentTime,
lastKnownNetwork,
lastSync,
macAddress,
manufactureDate,
meid,
model,
notes,
orderNumber,
orgUnitId,
orgUnitPath,
osUpdateStatus,
osVersion,
osVersionCompliance,
platformVersion,
recentUsers,
screenshotFiles,
serialNumber,
status,
supportEndDate,
systemRamFreeReports,
systemRamTotal,
tpmVersionInfo,
willAutoRenew
FROM googleadmin.directory.chromeosdevices
WHERE customerId = '{{ customerId }}' -- required
AND deviceId = '{{ deviceId }}' -- required
AND projection = '{{ projection }}';
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of Chrome OS devices within an account.

```sql
SELECT
activeTimeRanges,
annotatedAssetId,
annotatedLocation,
annotatedUser,
autoUpdateExpiration,
autoUpdateThrough,
backlightInfo,
bootMode,
chromeOsType,
cpuInfo,
cpuStatusReports,
deprovisionReason,
deviceFiles,
deviceId,
deviceLicenseType,
diskSpaceUsage,
diskVolumeReports,
dockMacAddress,
etag,
ethernetMacAddress,
ethernetMacAddress0,
extendedSupportEligible,
extendedSupportEnabled,
extendedSupportStart,
fanInfo,
firmwareVersion,
firstEnrollmentTime,
kind,
lastDeprovisionTimestamp,
lastEnrollmentTime,
lastKnownNetwork,
lastSync,
macAddress,
manufactureDate,
meid,
model,
notes,
orderNumber,
orgUnitId,
orgUnitPath,
osUpdateStatus,
osVersion,
osVersionCompliance,
platformVersion,
recentUsers,
screenshotFiles,
serialNumber,
status,
supportEndDate,
systemRamFreeReports,
systemRamTotal,
tpmVersionInfo,
willAutoRenew
FROM googleadmin.directory.chromeosdevices
WHERE customerId = '{{ customerId }}' -- required
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND orgUnitPath = '{{ orgUnitPath }}'
AND pageToken = '{{ pageToken }}'
AND projection = '{{ projection }}'
AND query = '{{ query }}'
AND sortOrder = '{{ sortOrder }}'
AND includeChildOrgunits = '{{ includeChildOrgunits }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

```sql
UPDATE googleadmin.directory.chromeosdevices
SET 
data__deviceId = '{{ deviceId }}',
data__serialNumber = '{{ serialNumber }}',
data__status = '{{ status }}',
data__lastSync = '{{ lastSync }}',
data__supportEndDate = '{{ supportEndDate }}',
data__annotatedUser = '{{ annotatedUser }}',
data__annotatedLocation = '{{ annotatedLocation }}',
data__notes = '{{ notes }}',
data__model = '{{ model }}',
data__meid = '{{ meid }}',
data__orderNumber = '{{ orderNumber }}',
data__willAutoRenew = {{ willAutoRenew }},
data__osVersion = '{{ osVersion }}',
data__platformVersion = '{{ platformVersion }}',
data__firmwareVersion = '{{ firmwareVersion }}',
data__macAddress = '{{ macAddress }}',
data__bootMode = '{{ bootMode }}',
data__lastEnrollmentTime = '{{ lastEnrollmentTime }}',
data__kind = '{{ kind }}',
data__recentUsers = '{{ recentUsers }}',
data__activeTimeRanges = '{{ activeTimeRanges }}',
data__ethernetMacAddress = '{{ ethernetMacAddress }}',
data__annotatedAssetId = '{{ annotatedAssetId }}',
data__etag = '{{ etag }}',
data__diskVolumeReports = '{{ diskVolumeReports }}',
data__systemRamTotal = '{{ systemRamTotal }}',
data__cpuStatusReports = '{{ cpuStatusReports }}',
data__cpuInfo = '{{ cpuInfo }}',
data__deviceFiles = '{{ deviceFiles }}',
data__systemRamFreeReports = '{{ systemRamFreeReports }}',
data__lastKnownNetwork = '{{ lastKnownNetwork }}',
data__autoUpdateExpiration = '{{ autoUpdateExpiration }}',
data__ethernetMacAddress0 = '{{ ethernetMacAddress0 }}',
data__dockMacAddress = '{{ dockMacAddress }}',
data__manufactureDate = '{{ manufactureDate }}',
data__orgUnitPath = '{{ orgUnitPath }}',
data__tpmVersionInfo = '{{ tpmVersionInfo }}',
data__screenshotFiles = '{{ screenshotFiles }}',
data__orgUnitId = '{{ orgUnitId }}',
data__osUpdateStatus = '{{ osUpdateStatus }}',
data__firstEnrollmentTime = '{{ firstEnrollmentTime }}',
data__lastDeprovisionTimestamp = '{{ lastDeprovisionTimestamp }}',
data__deprovisionReason = '{{ deprovisionReason }}'
WHERE 
customerId = '{{ customerId }}' --required
AND deviceId = '{{ deviceId }}' --required
AND projection = '{{ projection}}'
RETURNING
activeTimeRanges,
annotatedAssetId,
annotatedLocation,
annotatedUser,
autoUpdateExpiration,
autoUpdateThrough,
backlightInfo,
bootMode,
chromeOsType,
cpuInfo,
cpuStatusReports,
deprovisionReason,
deviceFiles,
deviceId,
deviceLicenseType,
diskSpaceUsage,
diskVolumeReports,
dockMacAddress,
etag,
ethernetMacAddress,
ethernetMacAddress0,
extendedSupportEligible,
extendedSupportEnabled,
extendedSupportStart,
fanInfo,
firmwareVersion,
firstEnrollmentTime,
kind,
lastDeprovisionTimestamp,
lastEnrollmentTime,
lastKnownNetwork,
lastSync,
macAddress,
manufactureDate,
meid,
model,
notes,
orderNumber,
orgUnitId,
orgUnitPath,
osUpdateStatus,
osVersion,
osVersionCompliance,
platformVersion,
recentUsers,
screenshotFiles,
serialNumber,
status,
supportEndDate,
systemRamFreeReports,
systemRamTotal,
tpmVersionInfo,
willAutoRenew;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

```sql
REPLACE googleadmin.directory.chromeosdevices
SET 
data__deviceId = '{{ deviceId }}',
data__serialNumber = '{{ serialNumber }}',
data__status = '{{ status }}',
data__lastSync = '{{ lastSync }}',
data__supportEndDate = '{{ supportEndDate }}',
data__annotatedUser = '{{ annotatedUser }}',
data__annotatedLocation = '{{ annotatedLocation }}',
data__notes = '{{ notes }}',
data__model = '{{ model }}',
data__meid = '{{ meid }}',
data__orderNumber = '{{ orderNumber }}',
data__willAutoRenew = {{ willAutoRenew }},
data__osVersion = '{{ osVersion }}',
data__platformVersion = '{{ platformVersion }}',
data__firmwareVersion = '{{ firmwareVersion }}',
data__macAddress = '{{ macAddress }}',
data__bootMode = '{{ bootMode }}',
data__lastEnrollmentTime = '{{ lastEnrollmentTime }}',
data__kind = '{{ kind }}',
data__recentUsers = '{{ recentUsers }}',
data__activeTimeRanges = '{{ activeTimeRanges }}',
data__ethernetMacAddress = '{{ ethernetMacAddress }}',
data__annotatedAssetId = '{{ annotatedAssetId }}',
data__etag = '{{ etag }}',
data__diskVolumeReports = '{{ diskVolumeReports }}',
data__systemRamTotal = '{{ systemRamTotal }}',
data__cpuStatusReports = '{{ cpuStatusReports }}',
data__cpuInfo = '{{ cpuInfo }}',
data__deviceFiles = '{{ deviceFiles }}',
data__systemRamFreeReports = '{{ systemRamFreeReports }}',
data__lastKnownNetwork = '{{ lastKnownNetwork }}',
data__autoUpdateExpiration = '{{ autoUpdateExpiration }}',
data__ethernetMacAddress0 = '{{ ethernetMacAddress0 }}',
data__dockMacAddress = '{{ dockMacAddress }}',
data__manufactureDate = '{{ manufactureDate }}',
data__orgUnitPath = '{{ orgUnitPath }}',
data__tpmVersionInfo = '{{ tpmVersionInfo }}',
data__screenshotFiles = '{{ screenshotFiles }}',
data__orgUnitId = '{{ orgUnitId }}',
data__osUpdateStatus = '{{ osUpdateStatus }}',
data__firstEnrollmentTime = '{{ firstEnrollmentTime }}',
data__lastDeprovisionTimestamp = '{{ lastDeprovisionTimestamp }}',
data__deprovisionReason = '{{ deprovisionReason }}'
WHERE 
customerId = '{{ customerId }}' --required
AND deviceId = '{{ deviceId }}' --required
AND projection = '{{ projection}}'
RETURNING
activeTimeRanges,
annotatedAssetId,
annotatedLocation,
annotatedUser,
autoUpdateExpiration,
autoUpdateThrough,
backlightInfo,
bootMode,
chromeOsType,
cpuInfo,
cpuStatusReports,
deprovisionReason,
deviceFiles,
deviceId,
deviceLicenseType,
diskSpaceUsage,
diskVolumeReports,
dockMacAddress,
etag,
ethernetMacAddress,
ethernetMacAddress0,
extendedSupportEligible,
extendedSupportEnabled,
extendedSupportStart,
fanInfo,
firmwareVersion,
firstEnrollmentTime,
kind,
lastDeprovisionTimestamp,
lastEnrollmentTime,
lastKnownNetwork,
lastSync,
macAddress,
manufactureDate,
meid,
model,
notes,
orderNumber,
orgUnitId,
orgUnitPath,
osUpdateStatus,
osVersion,
osVersionCompliance,
platformVersion,
recentUsers,
screenshotFiles,
serialNumber,
status,
supportEndDate,
systemRamFreeReports,
systemRamTotal,
tpmVersionInfo,
willAutoRenew;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="action"
    values={[
        { label: 'action', value: 'action' },
        { label: 'move_devices_to_ou', value: 'move_devices_to_ou' }
    ]}
>
<TabItem value="action">

Use [BatchChangeChromeOsDeviceStatus](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

```sql
EXEC googleadmin.directory.chromeosdevices.action 
@customerId='{{ customerId }}' --required, 
@resourceId='{{ resourceId }}' --required 
@@json=
'{
"action": "{{ action }}", 
"deprovisionReason": "{{ deprovisionReason }}"
}';
```
</TabItem>
<TabItem value="move_devices_to_ou">

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

```sql
EXEC googleadmin.directory.chromeosdevices.move_devices_to_ou 
@customerId='{{ customerId }}' --required, 
@orgUnitPath='{{ orgUnitPath }}' --required 
@@json=
'{
"deviceIds": "{{ deviceIds }}"
}';
```
</TabItem>
</Tabs>
