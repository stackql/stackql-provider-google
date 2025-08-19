--- 
title: slices
hide_title: false
hide_table_of_contents: false
keywords:
  - slices
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>slices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>slices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.slices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A collection of metrics calculated by comparing Model's predictions on a slice of the test data against ground truth annotations.

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
    <td>Output only. The resource name of the ModelEvaluationSlice.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ModelEvaluationSlice was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>any</code></td>
    <td>Output only. Sliced evaluation metrics of the Model. The schema of the metrics is stored in metrics_schema_uri</td>
</tr>
<tr>
    <td><CopyableCode code="metricsSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Points to a YAML file stored on Google Cloud Storage describing the metrics of this ModelEvaluationSlice. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).</td>
</tr>
<tr>
    <td><CopyableCode code="modelExplanation" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated explanation metrics for the Model's prediction output over the data this ModelEvaluation uses. This field is populated only if the Model is evaluated with explanations, and only for tabular Models. (id: GoogleCloudAiplatformV1ModelExplanation)</td>
</tr>
<tr>
    <td><CopyableCode code="slice" /></td>
    <td><code>object</code></td>
    <td>Output only. The slice of the test data that is used to evaluate the Model. (id: GoogleCloudAiplatformV1ModelEvaluationSliceSlice)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ModelService.ListModelEvaluationSlices.

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
    <td><CopyableCode code="modelEvaluationSlices" /></td>
    <td><code>array</code></td>
    <td>List of ModelEvaluations in the requested page.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass to ListModelEvaluationSlicesRequest.page_token to obtain that page.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a>, <a href="#parameter-slicesId"><code>slicesId</code></a></td>
    <td></td>
    <td>Gets a ModelEvaluationSlice.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists ModelEvaluationSlices in a ModelEvaluation.</td>
</tr>
<tr>
    <td><a href="#batch_import"><CopyableCode code="batch_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a>, <a href="#parameter-slicesId"><code>slicesId</code></a></td>
    <td></td>
    <td>Imports a list of externally generated EvaluatedAnnotations.</td>
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
<tr id="parameter-evaluationsId">
    <td><CopyableCode code="evaluationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-modelsId">
    <td><CopyableCode code="modelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-slicesId">
    <td><CopyableCode code="slicesId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a ModelEvaluationSlice.

```sql
SELECT
name,
createTime,
metrics,
metricsSchemaUri,
modelExplanation,
slice
FROM google.aiplatform.slices
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND evaluationsId = '{{ evaluationsId }}' -- required
AND slicesId = '{{ slicesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ModelEvaluationSlices in a ModelEvaluation.

```sql
SELECT
modelEvaluationSlices,
nextPageToken
FROM google.aiplatform.slices
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND evaluationsId = '{{ evaluationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_import"
    values={[
        { label: 'batch_import', value: 'batch_import' }
    ]}
>
<TabItem value="batch_import">

Imports a list of externally generated EvaluatedAnnotations.

```sql
EXEC google.aiplatform.slices.batch_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelsId='{{ modelsId }}' --required, 
@evaluationsId='{{ evaluationsId }}' --required, 
@slicesId='{{ slicesId }}' --required 
@@json=
'{
"evaluatedAnnotations": "{{ evaluatedAnnotations }}"
}';
```
</TabItem>
</Tabs>
