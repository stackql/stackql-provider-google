--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_datasets_get"
    values={[
        { label: 'projects_datasets_get', value: 'projects_datasets_get' },
        { label: 'projects_datasets_list', value: 'projects_datasets_list' }
    ]}
>
<TabItem value="projects_datasets_get">

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
    <td>Output only. Dataset resource name, format is: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the dataset is created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataItemCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of data items in the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the dataset. Maximum of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="inputConfigs" /></td>
    <td><code>array</code></td>
    <td>Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMigrateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_list">

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
    <td>Output only. Dataset resource name, format is: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the dataset is created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataItemCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of data items in the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the dataset. Maximum of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="inputConfigs" /></td>
    <td><code>array</code></td>
    <td>Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMigrateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.</td>
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
    <td><a href="#projects_datasets_get"><CopyableCode code="projects_datasets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Gets dataset by resource name.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_list"><CopyableCode code="projects_datasets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists datasets under a project. Pagination is supported.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_create"><CopyableCode code="projects_datasets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td> Creates dataset. If success return a Dataset resource.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_delete"><CopyableCode code="projects_datasets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Deletes a dataset by resource name.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_import_data"><CopyableCode code="projects_datasets_import_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_export_data"><CopyableCode code="projects_datasets_export_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Exports data and annotations from dataset.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_image_label"><CopyableCode code="projects_datasets_image_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td> Starts a labeling task for image. The type of image labeling task is configured by feature in the request.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_video_label"><CopyableCode code="projects_datasets_video_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Starts a labeling task for video. The type of video labeling task is configured by feature in the request.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_text_label"><CopyableCode code="projects_datasets_text_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Starts a labeling task for text. The type of text labeling task is configured by feature in the request.</td>
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
    defaultValue="projects_datasets_get"
    values={[
        { label: 'projects_datasets_get', value: 'projects_datasets_get' },
        { label: 'projects_datasets_list', value: 'projects_datasets_list' }
    ]}
>
<TabItem value="projects_datasets_get">

Gets dataset by resource name.

```sql
SELECT
name,
blockingResources,
createTime,
dataItemCount,
description,
displayName,
inputConfigs,
lastMigrateTime
FROM google.datalabeling.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required;
```
</TabItem>
<TabItem value="projects_datasets_list">

Lists datasets under a project. Pagination is supported.

```sql
SELECT
name,
blockingResources,
createTime,
dataItemCount,
description,
displayName,
inputConfigs,
lastMigrateTime
FROM google.datalabeling.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_datasets_create"
    values={[
        { label: 'projects_datasets_create', value: 'projects_datasets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_datasets_create">

 Creates dataset. If success return a Dataset resource.

```sql
INSERT INTO google.datalabeling.datasets (
data__dataset,
projectsId
)
SELECT 
'{{ dataset }}',
'{{ projectsId }}'
RETURNING
name,
blockingResources,
createTime,
dataItemCount,
description,
displayName,
inputConfigs,
lastMigrateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: datasets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the datasets resource.
    - name: dataset
      value: object
      description: >
        Required. The dataset to be created.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_datasets_delete"
    values={[
        { label: 'projects_datasets_delete', value: 'projects_datasets_delete' }
    ]}
>
<TabItem value="projects_datasets_delete">

Deletes a dataset by resource name.

```sql
DELETE FROM google.datalabeling.datasets
WHERE projectsId = '{{ projectsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_datasets_import_data"
    values={[
        { label: 'projects_datasets_import_data', value: 'projects_datasets_import_data' },
        { label: 'projects_datasets_export_data', value: 'projects_datasets_export_data' },
        { label: 'projects_datasets_image_label', value: 'projects_datasets_image_label' },
        { label: 'projects_datasets_video_label', value: 'projects_datasets_video_label' },
        { label: 'projects_datasets_text_label', value: 'projects_datasets_text_label' }
    ]}
>
<TabItem value="projects_datasets_import_data">

Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.

```sql
EXEC google.datalabeling.datasets.projects_datasets_import_data 
@projectsId='{{ projectsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"inputConfig": "{{ inputConfig }}", 
"userEmailAddress": "{{ userEmailAddress }}"
}';
```
</TabItem>
<TabItem value="projects_datasets_export_data">

Exports data and annotations from dataset.

```sql
EXEC google.datalabeling.datasets.projects_datasets_export_data 
@projectsId='{{ projectsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"annotatedDataset": "{{ annotatedDataset }}", 
"filter": "{{ filter }}", 
"outputConfig": "{{ outputConfig }}", 
"userEmailAddress": "{{ userEmailAddress }}"
}';
```
</TabItem>
<TabItem value="projects_datasets_image_label">

 Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

```sql
EXEC google.datalabeling.datasets.projects_datasets_image_label 
@projectsId='{{ projectsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"imageClassificationConfig": "{{ imageClassificationConfig }}", 
"boundingPolyConfig": "{{ boundingPolyConfig }}", 
"polylineConfig": "{{ polylineConfig }}", 
"segmentationConfig": "{{ segmentationConfig }}", 
"basicConfig": "{{ basicConfig }}", 
"feature": "{{ feature }}"
}';
```
</TabItem>
<TabItem value="projects_datasets_video_label">

Starts a labeling task for video. The type of video labeling task is configured by feature in the request.

```sql
EXEC google.datalabeling.datasets.projects_datasets_video_label 
@projectsId='{{ projectsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"videoClassificationConfig": "{{ videoClassificationConfig }}", 
"objectDetectionConfig": "{{ objectDetectionConfig }}", 
"objectTrackingConfig": "{{ objectTrackingConfig }}", 
"eventConfig": "{{ eventConfig }}", 
"basicConfig": "{{ basicConfig }}", 
"feature": "{{ feature }}"
}';
```
</TabItem>
<TabItem value="projects_datasets_text_label">

Starts a labeling task for text. The type of text labeling task is configured by feature in the request.

```sql
EXEC google.datalabeling.datasets.projects_datasets_text_label 
@projectsId='{{ projectsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"textClassificationConfig": "{{ textClassificationConfig }}", 
"textEntityExtractionConfig": "{{ textEntityExtractionConfig }}", 
"basicConfig": "{{ basicConfig }}", 
"feature": "{{ feature }}"
}';
```
</TabItem>
</Tabs>
