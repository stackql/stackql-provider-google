--- 
title: data_items
hide_title: false
hide_table_of_contents: false
keywords:
  - data_items
  - datalabeling
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

Creates, updates, deletes, gets or lists a <code>data_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_items</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.data_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_datasets_annotated_datasets_data_items_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_data_items_get', value: 'projects_datasets_annotated_datasets_data_items_get' },
        { label: 'projects_datasets_data_items_get', value: 'projects_datasets_data_items_get' },
        { label: 'projects_datasets_annotated_datasets_data_items_list', value: 'projects_datasets_annotated_datasets_data_items_list' },
        { label: 'projects_datasets_data_items_list', value: 'projects_datasets_data_items_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_data_items_get">

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
    <td>Output only. Name of the data item, in format of: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/dataItems/&#123;data_item_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="imagePayload" /></td>
    <td><code>object</code></td>
    <td>The image payload, a container of the image bytes/uri. (id: GoogleCloudDatalabelingV1beta1ImagePayload)</td>
</tr>
<tr>
    <td><CopyableCode code="textPayload" /></td>
    <td><code>object</code></td>
    <td>The text payload, a container of text content. (id: GoogleCloudDatalabelingV1beta1TextPayload)</td>
</tr>
<tr>
    <td><CopyableCode code="videoPayload" /></td>
    <td><code>object</code></td>
    <td>The video payload, a container of the video uri. (id: GoogleCloudDatalabelingV1beta1VideoPayload)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_data_items_get">

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
    <td>Output only. Name of the data item, in format of: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/dataItems/&#123;data_item_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="imagePayload" /></td>
    <td><code>object</code></td>
    <td>The image payload, a container of the image bytes/uri. (id: GoogleCloudDatalabelingV1beta1ImagePayload)</td>
</tr>
<tr>
    <td><CopyableCode code="textPayload" /></td>
    <td><code>object</code></td>
    <td>The text payload, a container of text content. (id: GoogleCloudDatalabelingV1beta1TextPayload)</td>
</tr>
<tr>
    <td><CopyableCode code="videoPayload" /></td>
    <td><code>object</code></td>
    <td>The video payload, a container of the video uri. (id: GoogleCloudDatalabelingV1beta1VideoPayload)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_data_items_list">

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
    <td>Output only. Name of the data item, in format of: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/dataItems/&#123;data_item_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="imagePayload" /></td>
    <td><code>object</code></td>
    <td>The image payload, a container of the image bytes/uri. (id: GoogleCloudDatalabelingV1beta1ImagePayload)</td>
</tr>
<tr>
    <td><CopyableCode code="textPayload" /></td>
    <td><code>object</code></td>
    <td>The text payload, a container of text content. (id: GoogleCloudDatalabelingV1beta1TextPayload)</td>
</tr>
<tr>
    <td><CopyableCode code="videoPayload" /></td>
    <td><code>object</code></td>
    <td>The video payload, a container of the video uri. (id: GoogleCloudDatalabelingV1beta1VideoPayload)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_data_items_list">

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
    <td>Output only. Name of the data item, in format of: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/dataItems/&#123;data_item_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="imagePayload" /></td>
    <td><code>object</code></td>
    <td>The image payload, a container of the image bytes/uri. (id: GoogleCloudDatalabelingV1beta1ImagePayload)</td>
</tr>
<tr>
    <td><CopyableCode code="textPayload" /></td>
    <td><code>object</code></td>
    <td>The text payload, a container of text content. (id: GoogleCloudDatalabelingV1beta1TextPayload)</td>
</tr>
<tr>
    <td><CopyableCode code="videoPayload" /></td>
    <td><code>object</code></td>
    <td>The video payload, a container of the video uri. (id: GoogleCloudDatalabelingV1beta1VideoPayload)</td>
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
    <td><a href="#projects_datasets_annotated_datasets_data_items_get"><CopyableCode code="projects_datasets_annotated_datasets_data_items_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-dataItemsId"><code>dataItemsId</code></a></td>
    <td></td>
    <td>Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_data_items_get"><CopyableCode code="projects_datasets_data_items_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dataItemsId"><code>dataItemsId</code></a></td>
    <td></td>
    <td>Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_data_items_list"><CopyableCode code="projects_datasets_annotated_datasets_data_items_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_data_items_list"><CopyableCode code="projects_datasets_data_items_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.</td>
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
<tr id="parameter-annotatedDatasetsId">
    <td><CopyableCode code="annotatedDatasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataItemsId">
    <td><CopyableCode code="dataItemsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="projects_datasets_annotated_datasets_data_items_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_data_items_get', value: 'projects_datasets_annotated_datasets_data_items_get' },
        { label: 'projects_datasets_data_items_get', value: 'projects_datasets_data_items_get' },
        { label: 'projects_datasets_annotated_datasets_data_items_list', value: 'projects_datasets_annotated_datasets_data_items_list' },
        { label: 'projects_datasets_data_items_list', value: 'projects_datasets_data_items_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_data_items_get">

Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.

```sql
SELECT
name,
imagePayload,
textPayload,
videoPayload
FROM google.datalabeling.data_items
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required
AND dataItemsId = '{{ dataItemsId }}' -- required;
```
</TabItem>
<TabItem value="projects_datasets_data_items_get">

Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.

```sql
SELECT
name,
imagePayload,
textPayload,
videoPayload
FROM google.datalabeling.data_items
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND dataItemsId = '{{ dataItemsId }}' -- required;
```
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_data_items_list">

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

```sql
SELECT
name,
imagePayload,
textPayload,
videoPayload
FROM google.datalabeling.data_items
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_datasets_data_items_list">

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

```sql
SELECT
name,
imagePayload,
textPayload,
videoPayload
FROM google.datalabeling.data_items
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
