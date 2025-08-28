--- 
title: device_check_config
hide_title: false
hide_table_of_contents: false
keywords:
  - device_check_config
  - appcheck
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>device_check_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>device_check_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appcheck.device_check_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'batch_get', value: 'batch_get' }
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
    <td>Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/&#123;project_number&#125;/apps/&#123;app_id&#125;/deviceCheckConfig ```</td>
</tr>
<tr>
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.</td>
</tr>
<tr>
    <td><CopyableCode code="privateKey" /></td>
    <td><code>string</code></td>
    <td>Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response.</td>
</tr>
<tr>
    <td><CopyableCode code="privateKeySet" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set.</td>
</tr>
<tr>
    <td><CopyableCode code="tokenTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get">

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
    <td><CopyableCode code="configs" /></td>
    <td><code>array</code></td>
    <td>DeviceCheckConfigs retrieved.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.</td>
</tr>
<tr>
    <td><a href="#batch_get"><CopyableCode code="batch_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-names"><code>names</code></a></td>
    <td>Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'batch_get', value: 'batch_get' }
    ]}
>
<TabItem value="get">

Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.

```sql
SELECT
name,
keyId,
privateKey,
privateKeySet,
tokenTtl
FROM firebase.appcheck.device_check_config
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required;
```
</TabItem>
<TabItem value="batch_get">

Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

```sql
SELECT
configs
FROM firebase.appcheck.device_check_config
WHERE projectsId = '{{ projectsId }}' -- required
AND names = '{{ names }}';
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

Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.

```sql
UPDATE firebase.appcheck.device_check_config
SET 
data__name = '{{ name }}',
data__tokenTtl = '{{ tokenTtl }}',
data__keyId = '{{ keyId }}',
data__privateKey = '{{ privateKey }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
keyId,
privateKey,
privateKeySet,
tokenTtl;
```
</TabItem>
</Tabs>
