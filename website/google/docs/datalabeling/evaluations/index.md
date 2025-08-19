--- 
title: evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluations
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

Creates, updates, deletes, gets or lists an <code>evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_datasets_evaluations_get"
    values={[
        { label: 'projects_datasets_evaluations_get', value: 'projects_datasets_evaluations_get' }
    ]}
>
<TabItem value="projects_datasets_evaluations_get">

Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.

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
    <td>Output only. Resource name of an evaluation. The name has the following format: "projects/&#123;project_id&#125;/datasets/&#123;dataset_id&#125;/evaluations/ &#123;evaluation_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="annotationType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Output only. Options used in the evaluation job that created this evaluation. (id: GoogleCloudDatalabelingV1beta1EvaluationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp for when this evaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatedItemCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationJobRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp for when the evaluation job that created this evaluation ran.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationMetrics" /></td>
    <td><code>object</code></td>
    <td>Output only. Metrics comparing predictions to ground truth labels. (id: GoogleCloudDatalabelingV1beta1EvaluationMetrics)</td>
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
    <td><a href="#projects_datasets_evaluations_get"><CopyableCode code="projects_datasets_evaluations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a></td>
    <td></td>
    <td> Gets an evaluation by resource name (to search, use projects.evaluations.search).</td>
</tr>
<tr>
    <td><a href="#projects_evaluations_search"><CopyableCode code="projects_evaluations_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Searches evaluations within a project.</td>
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
<tr id="parameter-evaluationsId">
    <td><CopyableCode code="evaluationsId" /></td>
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
    defaultValue="projects_datasets_evaluations_get"
    values={[
        { label: 'projects_datasets_evaluations_get', value: 'projects_datasets_evaluations_get' }
    ]}
>
<TabItem value="projects_datasets_evaluations_get">

 Gets an evaluation by resource name (to search, use projects.evaluations.search).

```sql
SELECT
name,
annotationType,
config,
createTime,
evaluatedItemCount,
evaluationJobRunTime,
evaluationMetrics
FROM google.datalabeling.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND evaluationsId = '{{ evaluationsId }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_evaluations_search"
    values={[
        { label: 'projects_evaluations_search', value: 'projects_evaluations_search' }
    ]}
>
<TabItem value="projects_evaluations_search">

Searches evaluations within a project.

```sql
EXEC google.datalabeling.evaluations.projects_evaluations_search 
@projectsId='{{ projectsId }}' --required, 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
</Tabs>
