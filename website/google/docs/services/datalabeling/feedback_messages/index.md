--- 
title: feedback_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - feedback_messages
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

Creates, updates, deletes, gets or lists a <code>feedback_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feedback_messages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.feedback_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get', value: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get' },
        { label: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list', value: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get">

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
    <td>Name of the feedback message in a feedback thread. Format: 'project/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/annotatedDatasets/&#123;annotated_dataset_id&#125;/feedbackThreads/&#123;feedback_thread_id&#125;/feedbackMessage/&#123;feedback_message_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>String content of the feedback. Maximum of 10000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string (byte)</code></td>
    <td>The image storing this feedback if the feedback is an image representing operator's comments.</td>
</tr>
<tr>
    <td><CopyableCode code="operatorFeedbackMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata describing the feedback from the operator. (id: GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="requesterFeedbackMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata describing the feedback from the labeling task requester. (id: GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list">

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
    <td>Name of the feedback message in a feedback thread. Format: 'project/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/annotatedDatasets/&#123;annotated_dataset_id&#125;/feedbackThreads/&#123;feedback_thread_id&#125;/feedbackMessage/&#123;feedback_message_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>String content of the feedback. Maximum of 10000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string (byte)</code></td>
    <td>The image storing this feedback if the feedback is an image representing operator's comments.</td>
</tr>
<tr>
    <td><CopyableCode code="operatorFeedbackMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata describing the feedback from the operator. (id: GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="requesterFeedbackMetadata" /></td>
    <td><code>object</code></td>
    <td>Metadata describing the feedback from the labeling task requester. (id: GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata)</td>
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
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-feedbackThreadsId"><code>feedbackThreadsId</code></a>, <a href="#parameter-feedbackMessagesId"><code>feedbackMessagesId</code></a></td>
    <td></td>
    <td>Get a FeedbackMessage object.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-feedbackThreadsId"><code>feedbackThreadsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List FeedbackMessages with pagination.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-feedbackThreadsId"><code>feedbackThreadsId</code></a></td>
    <td></td>
    <td>Create a FeedbackMessage object.</td>
</tr>
<tr>
    <td><a href="#projects_datasets_annotated_datasets_feedback_threads_feedback_messages_delete"><CopyableCode code="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-annotatedDatasetsId"><code>annotatedDatasetsId</code></a>, <a href="#parameter-feedbackThreadsId"><code>feedbackThreadsId</code></a>, <a href="#parameter-feedbackMessagesId"><code>feedbackMessagesId</code></a></td>
    <td></td>
    <td>Delete a FeedbackMessage.</td>
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
<tr id="parameter-feedbackMessagesId">
    <td><CopyableCode code="feedbackMessagesId" /></td>
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
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get', value: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get' },
        { label: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list', value: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_get">

Get a FeedbackMessage object.

```sql
SELECT
name,
body,
createTime,
image,
operatorFeedbackMetadata,
requesterFeedbackMetadata
FROM google.datalabeling.feedback_messages
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required
AND feedbackThreadsId = '{{ feedbackThreadsId }}' -- required
AND feedbackMessagesId = '{{ feedbackMessagesId }}' -- required;
```
</TabItem>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list">

List FeedbackMessages with pagination.

```sql
SELECT
name,
body,
createTime,
image,
operatorFeedbackMetadata,
requesterFeedbackMetadata
FROM google.datalabeling.feedback_messages
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' -- required
AND feedbackThreadsId = '{{ feedbackThreadsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create', value: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create">

Create a FeedbackMessage object.

```sql
INSERT INTO google.datalabeling.feedback_messages (
data__requesterFeedbackMetadata,
data__operatorFeedbackMetadata,
data__name,
data__body,
data__image,
data__createTime,
projectsId,
datasetsId,
annotatedDatasetsId,
feedbackThreadsId
)
SELECT 
'{{ requesterFeedbackMetadata }}',
'{{ operatorFeedbackMetadata }}',
'{{ name }}',
'{{ body }}',
'{{ image }}',
'{{ createTime }}',
'{{ projectsId }}',
'{{ datasetsId }}',
'{{ annotatedDatasetsId }}',
'{{ feedbackThreadsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: feedback_messages
  props:
    - name: projectsId
      value: string
      description: Required parameter for the feedback_messages resource.
    - name: datasetsId
      value: string
      description: Required parameter for the feedback_messages resource.
    - name: annotatedDatasetsId
      value: string
      description: Required parameter for the feedback_messages resource.
    - name: feedbackThreadsId
      value: string
      description: Required parameter for the feedback_messages resource.
    - name: requesterFeedbackMetadata
      value: object
      description: >
        Metadata describing the feedback from the labeling task requester.
        
    - name: operatorFeedbackMetadata
      value: object
      description: >
        Metadata describing the feedback from the operator.
        
    - name: name
      value: string
      description: >
        Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}'
        
    - name: body
      value: string
      description: >
        String content of the feedback. Maximum of 10000 characters.
        
    - name: image
      value: string
      description: >
        The image storing this feedback if the feedback is an image representing operator's comments.
        
    - name: createTime
      value: string
      description: >
        Create time.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_delete"
    values={[
        { label: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_delete', value: 'projects_datasets_annotated_datasets_feedback_threads_feedback_messages_delete' }
    ]}
>
<TabItem value="projects_datasets_annotated_datasets_feedback_threads_feedback_messages_delete">

Delete a FeedbackMessage.

```sql
DELETE FROM google.datalabeling.feedback_messages
WHERE projectsId = '{{ projectsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND annotatedDatasetsId = '{{ annotatedDatasetsId }}' --required
AND feedbackThreadsId = '{{ feedbackThreadsId }}' --required
AND feedbackMessagesId = '{{ feedbackMessagesId }}' --required;
```
</TabItem>
</Tabs>
