--- 
title: feedback_threads
hide_title: false
hide_table_of_contents: false
keywords:
  - feedback_threads
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

Creates, updates, deletes, gets or lists a <code>feedback_threads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feedback_threads</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.feedback_threads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_get', value: 'projects_datasets_annotated_datasets_feedback_threads_get' },
        { label: 'projects_datasets_annotated_datasets_feedback_threads_list', value: 'projects_datasets_annotated_datasets_feedback_threads_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_get">

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
    <td>Name of the feedback thread. Format: 'project/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/annotatedDatasets/&#123;annotated_dataset_id&#125;/feedbackThreads/&#123;feedback_thread_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="feedbackThreadMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata regarding the feedback thread. (id: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_list">

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
    <td>Name of the feedback thread. Format: 'project/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/annotatedDatasets/&#123;annotated_dataset_id&#125;/feedbackThreads/&#123;feedback_thread_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="feedbackThreadMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata regarding the feedback thread. (id: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata)</td>
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
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_get"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-feedbackThreadsId"><code>feedbackThreadsId</code></a></td>
    <td></td>
    <td> Get a FeedbackThread object.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_list"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List FeedbackThreads with pagination.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_delete"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-feedbackThreadsId"><code>feedbackThreadsId</code></a></td>
    <td></td>
    <td>Delete a FeedbackThread.</td>
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
<tr id="parameter-feedbackThreadsId">
    <td><CopyableCode code="feedbackThreadsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_get', value: 'projects_datasets_annotated_datasets_feedback_threads_get' },
        { label: 'projects_datasets_annotated_datasets_feedback_threads_list', value: 'projects_datasets_annotated_datasets_feedback_threads_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_get">

 Get a FeedbackThread object.

```sql
SELECT
name,
feedbackThreadMetadata
FROM google.datalabeling.feedback_threads
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required
AND feedbackThreadsId = '{{ feedbackThreadsId }}' -- required;
```
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_list">

List FeedbackThreads with pagination.

```sql
SELECT
name,
feedbackThreadMetadata
FROM google.datalabeling.feedback_threads
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_delete"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_delete', value: 'projects_datasets_annotated_datasets_feedback_threads_delete' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_delete">

Delete a FeedbackThread.

```sql
DELETE FROM google.datalabeling.feedback_threads
WHERE projectsId = '{{ projectsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' --required
AND feedbackThreadsId = '{{ feedbackThreadsId }}' --required;
```
</TabItem>
</Tabs>
