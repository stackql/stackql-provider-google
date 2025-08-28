--- 
title: skus
hide_title: false
hide_table_of_contents: false
keywords:
  - skus
  - cloudbilling
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

Creates, updates, deletes, gets or lists a <code>skus</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>skus</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudbilling.skus" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>The resource name for the SKU. Example: "services/6F81-5844-456A/skus/D041-B8A1-6E0B"</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>object</code></td>
    <td>The category hierarchy of this SKU, purely for organizational purpose. (id: Category)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of the SKU, has a maximum length of 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="geoTaxonomy" /></td>
    <td><code>object</code></td>
    <td>The geographic taxonomy for this sku. (id: GeoTaxonomy)</td>
</tr>
<tr>
    <td><CopyableCode code="pricingInfo" /></td>
    <td><code>array</code></td>
    <td>A timeline of pricing info for this SKU in chronological order.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceProviderName" /></td>
    <td><code>string</code></td>
    <td>Identifies the service provider. This is 'Google' for first party services in Google Cloud Platform.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceRegions" /></td>
    <td><code>array</code></td>
    <td>List of service regions this SKU is offered at. Example: "asia-east1" Service regions can be found at https://cloud.google.com/about/locations/</td>
</tr>
<tr>
    <td><CopyableCode code="skuId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the SKU. Example: "D041-B8A1-6E0B"</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-currencyCode"><code>currencyCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all publicly available SKUs for a given cloud service.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-currencyCode">
    <td><CopyableCode code="currencyCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists all publicly available SKUs for a given cloud service.

```sql
SELECT
name,
category,
description,
geoTaxonomy,
pricingInfo,
serviceProviderName,
serviceRegions,
skuId
FROM google.cloudbilling.skus
WHERE servicesId = '{{ servicesId }}' -- required
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND currencyCode = '{{ currencyCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
