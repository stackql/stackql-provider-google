--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - accesscontextmanager
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accesscontextmanager.services" /></td></tr>
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
    <td>The service name or address of the supported service, such as `service.googleapis.com`.</td>
</tr>
<tr>
    <td><CopyableCode code="availableOnRestrictedVip" /></td>
    <td><code>boolean</code></td>
    <td>True if the service is available on the restricted VIP. Services on the restricted VIP typically either support VPC Service Controls or are core infrastructure services required for the functioning of Google Cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="knownLimitations" /></td>
    <td><code>boolean</code></td>
    <td>True if the service is supported with some limitations. Check [documentation](https://cloud.google.com/vpc-service-controls/docs/supported-products) for details.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceSupportStage" /></td>
    <td><code>string</code></td>
    <td>The support stage of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="supportStage" /></td>
    <td><code>string</code></td>
    <td>The support stage of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedMethods" /></td>
    <td><code>array</code></td>
    <td>The list of the supported methods. This field exists only in response to GetSupportedService</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The name of the supported product, such as 'Cloud Product API'.</td>
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
    <td>The service name or address of the supported service, such as `service.googleapis.com`.</td>
</tr>
<tr>
    <td><CopyableCode code="availableOnRestrictedVip" /></td>
    <td><code>boolean</code></td>
    <td>True if the service is available on the restricted VIP. Services on the restricted VIP typically either support VPC Service Controls or are core infrastructure services required for the functioning of Google Cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="knownLimitations" /></td>
    <td><code>boolean</code></td>
    <td>True if the service is supported with some limitations. Check [documentation](https://cloud.google.com/vpc-service-controls/docs/supported-products) for details.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceSupportStage" /></td>
    <td><code>string</code></td>
    <td>The support stage of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="supportStage" /></td>
    <td><code>string</code></td>
    <td>The support stage of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedMethods" /></td>
    <td><code>array</code></td>
    <td>The list of the supported methods. This field exists only in response to GetSupportedService</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The name of the supported product, such as 'Cloud Product API'.</td>
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
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Returns a VPC-SC supported service based on the service name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all VPC-SC supported services.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns a VPC-SC supported service based on the service name.

```sql
SELECT
name,
availableOnRestrictedVip,
knownLimitations,
serviceSupportStage,
supportStage,
supportedMethods,
title
FROM google.accesscontextmanager.services
WHERE name = '{{ name }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all VPC-SC supported services.

```sql
SELECT
name,
availableOnRestrictedVip,
knownLimitations,
serviceSupportStage,
supportStage,
supportedMethods,
title
FROM google.accesscontextmanager.services
WHERE pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
