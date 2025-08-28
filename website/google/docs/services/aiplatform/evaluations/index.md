--- 
title: evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluations
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

Creates, updates, deletes, gets or lists an <code>evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.evaluations" /></td></tr>
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
    <td>Output only. The resource name of the ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Points to a YAML file stored on Google Cloud Storage describing EvaluatedDataItemView.predictions, EvaluatedDataItemView.ground_truths, EvaluatedAnnotation.predictions, and EvaluatedAnnotation.ground_truths. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ModelEvaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataItemSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Points to a YAML file stored on Google Cloud Storage describing EvaluatedDataItemView.data_item_payload and EvaluatedAnnotation.data_item_payload. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="explanationSpecs" /></td>
    <td><code>array</code></td>
    <td>Describes the values of ExplanationSpec that are used for explaining the predicted values on the evaluated data.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>The metadata of the ModelEvaluation. For the ModelEvaluation uploaded from Managed Pipeline, metadata contains a structured value with keys of "pipeline_job_id", "evaluation_dataset_type", "evaluation_dataset_path", "row_based_metrics_path".</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>any</code></td>
    <td>Evaluation metrics of the Model. The schema of the metrics is stored in metrics_schema_uri</td>
</tr>
<tr>
    <td><CopyableCode code="metricsSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Points to a YAML file stored on Google Cloud Storage describing the metrics of this ModelEvaluation. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).</td>
</tr>
<tr>
    <td><CopyableCode code="modelExplanation" /></td>
    <td><code>object</code></td>
    <td>Aggregated explanation metrics for the Model's prediction output over the data this ModelEvaluation uses. This field is populated only if the Model is evaluated with explanations, and only for AutoML tabular Models.  (id: GoogleCloudAiplatformV1ModelExplanation)</td>
</tr>
<tr>
    <td><CopyableCode code="sliceDimensions" /></td>
    <td><code>array</code></td>
    <td>All possible dimensions of ModelEvaluationSlices. The dimensions can be used as the filter of the ModelService.ListModelEvaluationSlices request, in the form of `slice.dimension = `.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Output only. The resource name of the ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Points to a YAML file stored on Google Cloud Storage describing EvaluatedDataItemView.predictions, EvaluatedDataItemView.ground_truths, EvaluatedAnnotation.predictions, and EvaluatedAnnotation.ground_truths. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ModelEvaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataItemSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Points to a YAML file stored on Google Cloud Storage describing EvaluatedDataItemView.data_item_payload and EvaluatedAnnotation.data_item_payload. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the ModelEvaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="explanationSpecs" /></td>
    <td><code>array</code></td>
    <td>Describes the values of ExplanationSpec that are used for explaining the predicted values on the evaluated data.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>The metadata of the ModelEvaluation. For the ModelEvaluation uploaded from Managed Pipeline, metadata contains a structured value with keys of "pipeline_job_id", "evaluation_dataset_type", "evaluation_dataset_path", "row_based_metrics_path".</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>any</code></td>
    <td>Evaluation metrics of the Model. The schema of the metrics is stored in metrics_schema_uri</td>
</tr>
<tr>
    <td><CopyableCode code="metricsSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Points to a YAML file stored on Google Cloud Storage describing the metrics of this ModelEvaluation. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).</td>
</tr>
<tr>
    <td><CopyableCode code="modelExplanation" /></td>
    <td><code>object</code></td>
    <td>Aggregated explanation metrics for the Model's prediction output over the data this ModelEvaluation uses. This field is populated only if the Model is evaluated with explanations, and only for AutoML tabular Models.  (id: GoogleCloudAiplatformV1ModelExplanation)</td>
</tr>
<tr>
    <td><CopyableCode code="sliceDimensions" /></td>
    <td><code>array</code></td>
    <td>All possible dimensions of ModelEvaluationSlices. The dimensions can be used as the filter of the ModelService.ListModelEvaluationSlices request, in the form of `slice.dimension = `.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a>, <a href="#parameter-evaluationsId"><code>evaluationsId</code></a></td>
    <td></td>
    <td>Gets a ModelEvaluation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists ModelEvaluations in a Model.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Imports an externally generated ModelEvaluation.</td>
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

Gets a ModelEvaluation.

```sql
SELECT
name,
annotationSchemaUri,
createTime,
dataItemSchemaUri,
displayName,
explanationSpecs,
metadata,
metrics,
metricsSchemaUri,
modelExplanation,
sliceDimensions
FROM google.aiplatform.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND evaluationsId = '{{ evaluationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ModelEvaluations in a Model.

```sql
SELECT
name,
annotationSchemaUri,
createTime,
dataItemSchemaUri,
displayName,
explanationSpecs,
metadata,
metrics,
metricsSchemaUri,
modelExplanation,
sliceDimensions
FROM google.aiplatform.evaluations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="import">

Imports an externally generated ModelEvaluation.

```sql
EXEC google.aiplatform.evaluations.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"modelEvaluation": "{{ modelEvaluation }}"
}';
```
</TabItem>
</Tabs>
