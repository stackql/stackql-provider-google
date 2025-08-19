--- 
title: instances_storage_info
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_storage_info
  - healthcare
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

Creates, updates, deletes, gets or lists an <code>instances_storage_info</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_storage_info</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.instances_storage_info" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_info"
    values={[
        { label: 'get_storage_info', value: 'get_storage_info' }
    ]}
>
<TabItem value="get_storage_info">

StorageInfo encapsulates all the storage info of a resource.

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
    <td><CopyableCode code="blobStorageInfo" /></td>
    <td><code>object</code></td>
    <td>Info about the data stored in blob storage for the resource. (id: BlobStorageInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="referencedResource" /></td>
    <td><code>string</code></td>
    <td>The resource whose storage info is returned. For example: `projects/&#123;projectID&#125;/locations/&#123;locationID&#125;/datasets/&#123;datasetID&#125;/dicomStores/&#123;dicomStoreID&#125;/dicomWeb/studies/&#123;studyUID&#125;/series/&#123;seriesUID&#125;/instances/&#123;instanceUID&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="structuredStorageInfo" /></td>
    <td><code>object</code></td>
    <td>Info about the data stored in structured storage for the resource. (id: StructuredStorageInfo)</td>
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
    <td><a href="#get_storage_info"><CopyableCode code="get_storage_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-seriesId"><code>seriesId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>GetStorageInfo returns the storage info of the specified resource.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dicomStoresId">
    <td><CopyableCode code="dicomStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-seriesId">
    <td><CopyableCode code="seriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-studiesId">
    <td><CopyableCode code="studiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_info"
    values={[
        { label: 'get_storage_info', value: 'get_storage_info' }
    ]}
>
<TabItem value="get_storage_info">

GetStorageInfo returns the storage info of the specified resource.

```sql
SELECT
blobStorageInfo,
referencedResource,
structuredStorageInfo
FROM google.healthcare.instances_storage_info
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND dicomStoresId = '{{ dicomStoresId }}' -- required
AND studiesId = '{{ studiesId }}' -- required
AND seriesId = '{{ seriesId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
</Tabs>
