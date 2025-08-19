--- 
title: buckets_storage_layout
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets_storage_layout
  - storage
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

Creates, updates, deletes, gets or lists a <code>buckets_storage_layout</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets_storage_layout</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.buckets_storage_layout" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_layout"
    values={[
        { label: 'get_storage_layout', value: 'get_storage_layout' }
    ]}
>
<TabItem value="get_storage_layout">

The storage layout configuration of a bucket.

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
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="customPlacementConfig" /></td>
    <td><code>object</code></td>
    <td>The bucket's custom placement configuration for Custom Dual Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchicalNamespace" /></td>
    <td><code>object</code></td>
    <td>The bucket's hierarchical namespace configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For storage layout, this is always storage#storageLayout. (default: storage#storageLayout)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="locationType" /></td>
    <td><code>string</code></td>
    <td>The type of the bucket location.</td>
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
    <td><a href="#get_storage_layout"><CopyableCode code="get_storage_layout" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Returns the storage layout configuration for the specified bucket. Note that this operation requires storage.objects.list permission.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_layout"
    values={[
        { label: 'get_storage_layout', value: 'get_storage_layout' }
    ]}
>
<TabItem value="get_storage_layout">

Returns the storage layout configuration for the specified bucket. Note that this operation requires storage.objects.list permission.

```sql
SELECT
bucket,
customPlacementConfig,
hierarchicalNamespace,
kind,
location,
locationType
FROM google.storage.buckets_storage_layout
WHERE bucket = '{{ bucket }}' -- required
AND prefix = '{{ prefix }}';
```
</TabItem>
</Tabs>
