--- 
title: files
hide_title: false
hide_table_of_contents: false
keywords:
  - files
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

Creates, updates, deletes, gets or lists a <code>files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>files</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vision.files" /></td></tr>
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
    <td><a href="#projects_locations_files_annotate"><CopyableCode code="projects_locations_files_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.</td>
</tr>
<tr>
    <td><a href="#projects_locations_files_async_batch_annotate"><CopyableCode code="projects_locations_files_async_batch_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).</td>
</tr>
<tr>
    <td><a href="#projects_files_annotate"><CopyableCode code="projects_files_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.</td>
</tr>
<tr>
    <td><a href="#projects_files_async_batch_annotate"><CopyableCode code="projects_files_async_batch_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).</td>
</tr>
<tr>
    <td><a href="#files_annotate"><CopyableCode code="files_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.</td>
</tr>
<tr>
    <td><a href="#files_async_batch_annotate"><CopyableCode code="files_async_batch_annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).</td>
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
    defaultValue="projects_locations_files_annotate"
    values={[
        { label: 'projects_locations_files_annotate', value: 'projects_locations_files_annotate' },
        { label: 'projects_locations_files_async_batch_annotate', value: 'projects_locations_files_async_batch_annotate' },
        { label: 'projects_files_annotate', value: 'projects_files_annotate' },
        { label: 'projects_files_async_batch_annotate', value: 'projects_files_async_batch_annotate' },
        { label: 'files_annotate', value: 'files_annotate' },
        { label: 'files_async_batch_annotate', value: 'files_async_batch_annotate' }
    ]}
>
<TabItem value="projects_locations_files_annotate">

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

```sql
EXEC google.vision.files.projects_locations_files_annotate 
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
<TabItem value="projects_locations_files_async_batch_annotate">

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

```sql
EXEC google.vision.files.projects_locations_files_async_batch_annotate 
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
<TabItem value="projects_files_annotate">

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

```sql
EXEC google.vision.files.projects_files_annotate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="projects_files_async_batch_annotate">

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

```sql
EXEC google.vision.files.projects_files_async_batch_annotate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="files_annotate">

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

```sql
EXEC google.vision.files.files_annotate 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="files_async_batch_annotate">

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

```sql
EXEC google.vision.files.files_async_batch_annotate 
@@json=
'{
"requests": "{{ requests }}", 
"parent": "{{ parent }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
</Tabs>
