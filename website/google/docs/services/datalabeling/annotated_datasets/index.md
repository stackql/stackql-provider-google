--- 
title: annotated_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - annotated_datasets
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

Creates, updates, deletes, gets or lists an <code>annotated_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>annotated_datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.annotated_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_datasets_annotated_datasets_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_get', value: 'projects_datasets_annotated_datasets_get' },
        { label: 'projects_datasets_annotated_datasets_list', value: 'projects_datasets_annotated_datasets_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_get">

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
    <td>Output only. AnnotatedDataset resource name in format of: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/annotatedDatasets/ &#123;annotated_dataset_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSource" /></td>
    <td><code>string</code></td>
    <td>Output only. Source of the annotation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the annotation. It is specified when starting labeling task.</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the annotated dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="completedExampleCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of examples that have annotation in the annotated dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the AnnotatedDataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="exampleCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of examples in the annotated dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="labelStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Per label statistics. (id: GoogleCloudDatalabelingV1beta1LabelStats)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about AnnotatedDataset. (id: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_list">

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
    <td>Output only. AnnotatedDataset resource name in format of: projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/annotatedDatasets/ &#123;annotated_dataset_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSource" /></td>
    <td><code>string</code></td>
    <td>Output only. Source of the annotation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the annotation. It is specified when starting labeling task.</td>
</tr>
<tr>
    <td><CopyableCode code="blockingResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The names of any related resources that are blocking changes to the annotated dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="completedExampleCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of examples that have annotation in the annotated dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the AnnotatedDataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="exampleCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of examples in the annotated dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="labelStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Per label statistics. (id: GoogleCloudDatalabelingV1beta1LabelStats)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about AnnotatedDataset. (id: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata)</td>
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
    <td><a href="#projects_datasets_annotated_datasets_get"><CopyableCode code="projects_datasets_annotated_datasets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a></td>
    <td></td>
    <td>Gets an annotated dataset by resource name.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_list"><CopyableCode code="projects_datasets_annotated_datasets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists annotated datasets for a dataset. Pagination is supported.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_delete"><CopyableCode code="projects_datasets_annotated_datasets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a></td>
    <td></td>
    <td>Deletes an annotated dataset by resource name.</td>
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
    defaultValue="projects_datasets_annotated_datasets_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_get', value: 'projects_datasets_annotated_datasets_get' },
        { label: 'projects_datasets_annotated_datasets_list', value: 'projects_datasets_annotated_datasets_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_get">

Gets an annotated dataset by resource name.

```sql
SELECT
name,
annotationSource,
annotationType,
blockingResources,
completedExampleCount,
createTime,
description,
displayName,
exampleCount,
labelStats,
metadata
FROM google.datalabeling.annotated_datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required;
```
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_list">

Lists annotated datasets for a dataset. Pagination is supported.

```sql
SELECT
name,
annotationSource,
annotationType,
blockingResources,
completedExampleCount,
createTime,
description,
displayName,
exampleCount,
labelStats,
metadata
FROM google.datalabeling.annotated_datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_datasets_annotated_datasets_delete"
    values={[
        { label: 'projects_datasets_annotated_datasets_delete', value: 'projects_datasets_annotated_datasets_delete' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_delete">

Deletes an annotated dataset by resource name.

```sql
DELETE FROM google.datalabeling.annotated_datasets
WHERE projectsId = '{{ projectsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' --required;
```
</TabItem>
</Tabs>
