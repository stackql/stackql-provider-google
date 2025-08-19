--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - vision
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>images</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vision.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_images_annotate"><CopyableCode code="projects_locations_images_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Run image detection and annotation for a batch of images.</td>
</tr>
<tr>
    <td><a href="#projects_locations_images_async_batch_annotate"><CopyableCode code="projects_locations_images_async_batch_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.</td>
</tr>
<tr>
    <td><a href="#projects_images_annotate"><CopyableCode code="projects_images_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Run image detection and annotation for a batch of images.</td>
</tr>
<tr>
    <td><a href="#projects_images_async_batch_annotate"><CopyableCode code="projects_images_async_batch_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.</td>
</tr>
<tr>
    <td><a href="#images_annotate"><CopyableCode code="images_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Run image detection and annotation for a batch of images.</td>
</tr>
<tr>
    <td><a href="#images_async_batch_annotate"><CopyableCode code="images_async_batch_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_images_annotate"
    values={[
        { label: 'projects_locations_images_annotate', value: 'projects_locations_images_annotate' },
        { label: 'projects_locations_images_async_batch_annotate', value: 'projects_locations_images_async_batch_annotate' },
        { label: 'projects_images_annotate', value: 'projects_images_annotate' },
        { label: 'projects_images_async_batch_annotate', value: 'projects_images_async_batch_annotate' },
        { label: 'images_annotate', value: 'images_annotate' },
        { label: 'images_async_batch_annotate', value: 'images_async_batch_annotate' }
    ]}
>
<TabItem value="projects_locations_images_annotate">

Run image detection and annotation for a batch of images.

```sql
EXEC google.vision.images.projects_locations_images_annotate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_locations_images_async_batch_annotate">

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

```sql
EXEC google.vision.images.projects_locations_images_async_batch_annotate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"requests": "{{ requests }}", 
"outputConfig": "{{ outputConfig }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_images_annotate">

Run image detection and annotation for a batch of images.

```sql
EXEC google.vision.images.projects_images_annotate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_images_async_batch_annotate">

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

```sql
EXEC google.vision.images.projects_images_async_batch_annotate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"requests": "{{ requests }}", 
"outputConfig": "{{ outputConfig }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="images_annotate">

Run image detection and annotation for a batch of images.

```sql
EXEC google.vision.images.images_annotate 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="images_async_batch_annotate">

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

```sql
EXEC google.vision.images.images_async_batch_annotate 
@@json=
'{
"requests": "{{ requests }}", 
"outputConfig": "{{ outputConfig }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
</Tabs>
