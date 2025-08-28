--- 
title: test_environment_catalog
hide_title: false
hide_table_of_contents: false
keywords:
  - test_environment_catalog
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

Creates, updates, deletes, gets or lists a <code>test_environment_catalog</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>test_environment_catalog</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.testing.test_environment_catalog" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="androidDeviceCatalog" /></td>
    <td><code>object</code></td>
    <td>Supported Android devices. (id: AndroidDeviceCatalog)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceIpBlockCatalog" /></td>
    <td><code>object</code></td>
    <td>The IP blocks used by devices in the test environment. (id: DeviceIpBlockCatalog)</td>
</tr>
<tr>
    <td><CopyableCode code="iosDeviceCatalog" /></td>
    <td><code>object</code></td>
    <td>Supported iOS devices. (id: IosDeviceCatalog)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfigurationCatalog" /></td>
    <td><code>object</code></td>
    <td>Supported network configurations. (id: NetworkConfigurationCatalog)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareCatalog" /></td>
    <td><code>object</code></td>
    <td>The software test environment provided by TestExecutionService. (id: ProvidedSoftwareCatalog)</td>
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
    <td><a href="#parameter-environmentType"><code>environmentType</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-includeViewableModels"><code>includeViewableModels</code></a></td>
    <td>Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred</td>
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
<tr id="parameter-environmentType">
    <td><CopyableCode code="environmentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeViewableModels">
    <td><CopyableCode code="includeViewableModels" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

```sql
SELECT
androidDeviceCatalog,
deviceIpBlockCatalog,
iosDeviceCatalog,
networkConfigurationCatalog,
softwareCatalog
FROM firebase.testing.test_environment_catalog
WHERE environmentType = '{{ environmentType }}' -- required
AND projectId = '{{ projectId }}'
AND includeViewableModels = '{{ includeViewableModels }}';
```
</TabItem>
</Tabs>
