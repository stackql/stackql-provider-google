--- 
title: iap_iap_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - iap_iap_settings
  - iap
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

Creates, updates, deletes, gets or lists an <code>iap_iap_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iap_iap_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iap.iap_iap_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iap_settings"
    values={[
        { label: 'get_iap_settings', value: 'get_iap_settings' }
    ]}
>
<TabItem value="get_iap_settings">

The IAP configurable settings.

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
    <td>Required. The resource name of the IAP protected resource.</td>
</tr>
<tr>
    <td><CopyableCode code="accessSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Top level wrapper for all access related setting in IAP (id: AccessSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Top level wrapper for all application related settings in IAP (id: ApplicationSettings)</td>
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
    <td><a href="#get_iap_settings"><CopyableCode code="get_iap_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-v1Id"><code>v1Id</code></a></td>
    <td></td>
    <td>Gets the IAP settings on a particular IAP protected resource.</td>
</tr>
<tr>
    <td><a href="#update_iap_settings"><CopyableCode code="update_iap_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-v1Id"><code>v1Id</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.</td>
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
<tr id="parameter-v1Id">
    <td><CopyableCode code="v1Id" /></td>
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
    defaultValue="get_iap_settings"
    values={[
        { label: 'get_iap_settings', value: 'get_iap_settings' }
    ]}
>
<TabItem value="get_iap_settings">

Gets the IAP settings on a particular IAP protected resource.

```sql
SELECT
name,
accessSettings,
applicationSettings
FROM google.iap.iap_iap_settings
WHERE v1Id = '{{ v1Id }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iap_settings"
    values={[
        { label: 'update_iap_settings', value: 'update_iap_settings' }
    ]}
>
<TabItem value="update_iap_settings">

Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

```sql
UPDATE google.iap.iap_iap_settings
SET 
data__name = '{{ name }}',
data__accessSettings = '{{ accessSettings }}',
data__applicationSettings = '{{ applicationSettings }}'
WHERE 
v1Id = '{{ v1Id }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
accessSettings,
applicationSettings;
```
</TabItem>
</Tabs>
