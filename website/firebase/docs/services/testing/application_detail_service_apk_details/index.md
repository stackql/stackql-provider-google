--- 
title: application_detail_service_apk_details
hide_title: false
hide_table_of_contents: false
keywords:
  - application_detail_service_apk_details
  - testing
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

Creates, updates, deletes, gets or lists an <code>application_detail_service_apk_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>application_detail_service_apk_details</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.testing.application_detail_service_apk_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_apk_details"
    values={[
        { label: 'get_apk_details', value: 'get_apk_details' }
    ]}
>
<TabItem value="get_apk_details">

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
    <td><CopyableCode code="apkDetail" /></td>
    <td><code>object</code></td>
    <td>Details of the Android App. (id: ApkDetail)</td>
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
    <td><a href="#get_apk_details"><CopyableCode code="get_apk_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-bundleLocation.gcsPath"><code>bundleLocation.gcsPath</code></a></td>
    <td>Gets the details of an Android application APK.</td>
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
<tr id="parameter-bundleLocation.gcsPath">
    <td><CopyableCode code="bundleLocation.gcsPath" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_apk_details"
    values={[
        { label: 'get_apk_details', value: 'get_apk_details' }
    ]}
>
<TabItem value="get_apk_details">

Gets the details of an Android application APK.

```sql
SELECT
apkDetail
FROM firebase.testing.application_detail_service_apk_details
WHERE bundleLocation.gcsPath = '{{ bundleLocation.gcsPath }}';
```
</TabItem>
</Tabs>
