--- 
title: batch_prediction_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_prediction_jobs
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

Creates, updates, deletes, gets or lists a <code>batch_prediction_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>batch_prediction_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.batch_prediction_jobs" /></td></tr>
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
    <td>Output only. Resource name of the BatchPredictionJob.</td>
</tr>
<tr>
    <td><CopyableCode code="completionStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Statistics on completed and failed prediction instances. (id: GoogleCloudAiplatformV1CompletionStats)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedResources" /></td>
    <td><code>object</code></td>
    <td>The config of resources used by the Model during the batch prediction. If the Model supports DEDICATED_RESOURCES this config may be provided (and the job will use these resources), if the Model doesn't support AUTOMATIC_RESOURCES, this config must be provided. (id: GoogleCloudAiplatformV1BatchDedicatedResources)</td>
</tr>
<tr>
    <td><CopyableCode code="disableContainerLogging" /></td>
    <td><code>boolean</code></td>
    <td>For custom-trained Models and AutoML Tabular Models, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging/pricing). User can disable container logging by setting this flag to true.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of this BatchPredictionJob.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a BatchPredictionJob. If this is set, then all resources created by the BatchPredictionJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob entered any of the following states: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Only populated when the job's state is JOB_STATE_FAILED or JOB_STATE_CANCELLED. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="explanationSpec" /></td>
    <td><code>object</code></td>
    <td>Explanation configuration for this BatchPredictionJob. Can be specified only if generate_explanation is set to `true`. This value overrides the value of Model.explanation_spec. All fields of explanation_spec are optional in the request. If a field of the explanation_spec object is not populated, the corresponding field of the Model.explanation_spec object is inherited. (id: GoogleCloudAiplatformV1ExplanationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="generateExplanation" /></td>
    <td><code>boolean</code></td>
    <td>Generate explanation with the batch prediction results. When set to `true`, the batch prediction output changes based on the `predictions_format` field of the BatchPredictionJob.output_config object: * `bigquery`: output includes a column named `explanation`. The value is a struct that conforms to the Explanation object. * `jsonl`: The JSON objects on each line include an additional entry keyed `explanation`. The value of the entry is a JSON object that conforms to the Explanation object. * `csv`: Generating explanations for CSV format is not supported. If this field is set to true, either the Model.explanation_spec or explanation_spec must be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="inputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Input configuration of the instances on which predictions are performed. The schema of any single instance may be specified via the Model's PredictSchemata's instance_schema_uri. (id: GoogleCloudAiplatformV1BatchPredictionJobInputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for how to convert batch prediction input instances to the prediction instances that are sent to the Model. (id: GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize BatchPredictionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="manualBatchTuningParameters" /></td>
    <td><code>object</code></td>
    <td>Immutable. Parameters configuring the batch behavior. Currently only applicable when dedicated_resources are used (in other cases Vertex AI does the tuning itself). (id: GoogleCloudAiplatformV1ManualBatchTuningParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The name of the Model resource that produces the predictions via this job, must share the same ancestor Location. Starting this job has no impact on any existing deployments of the Model and their resources. Exactly one of model and unmanaged_container_model must be set. The model resource name may contain version id or version alias to specify the version. Example: `projects/&#123;project&#125;/locations/&#123;location&#125;/models/&#123;model&#125;@2` or `projects/&#123;project&#125;/locations/&#123;location&#125;/models/&#123;model&#125;@golden` if no version is specified, the default version will be deployed. The model resource could also be a publisher model. Example: `publishers/&#123;publisher&#125;/models/&#123;model&#125;` or `projects/&#123;project&#125;/locations/&#123;location&#125;/publishers/&#123;publisher&#125;/models/&#123;model&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="modelParameters" /></td>
    <td><code>any</code></td>
    <td>The parameters that govern the predictions. The schema of the parameters may be specified via the Model's PredictSchemata's parameters_schema_uri.</td>
</tr>
<tr>
    <td><CopyableCode code="modelVersionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The version ID of the Model that produces the predictions via this job.</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. The Configuration specifying where output predictions should be written. The schema of any single prediction may be specified as a concatenation of Model's PredictSchemata's instance_schema_uri and prediction_schema_uri. (id: GoogleCloudAiplatformV1BatchPredictionJobOutputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="outputInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information further describing the output of this job. (id: GoogleCloudAiplatformV1BatchPredictionJobOutputInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="partialFailures" /></td>
    <td><code>array</code></td>
    <td>Output only. Partial failures encountered. For example, single files that can't be read. This field never exceeds 20 entries. Status details fields contain standard Google Cloud error details.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesConsumed" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about resources that had been consumed by this job. Provided in real time at best effort basis, as well as a final value once the job completes. Note: This field currently may be not populated for batch predictions that use AutoML Models. (id: GoogleCloudAiplatformV1ResourcesConsumed)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account that the DeployedModel's container runs as. If not specified, a system generated one will be used, which has minimal permissions and the custom container, if used, may not have enough permission to access other Google Cloud resources. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="unmanagedContainerModel" /></td>
    <td><code>object</code></td>
    <td>Contains model information necessary to perform batch prediction without requiring uploading to model registry. Exactly one of model and unmanaged_container_model must be set. (id: GoogleCloudAiplatformV1UnmanagedContainerModel)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob was most recently updated.</td>
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
    <td>Output only. Resource name of the BatchPredictionJob.</td>
</tr>
<tr>
    <td><CopyableCode code="completionStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Statistics on completed and failed prediction instances. (id: GoogleCloudAiplatformV1CompletionStats)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedResources" /></td>
    <td><code>object</code></td>
    <td>The config of resources used by the Model during the batch prediction. If the Model supports DEDICATED_RESOURCES this config may be provided (and the job will use these resources), if the Model doesn't support AUTOMATIC_RESOURCES, this config must be provided. (id: GoogleCloudAiplatformV1BatchDedicatedResources)</td>
</tr>
<tr>
    <td><CopyableCode code="disableContainerLogging" /></td>
    <td><code>boolean</code></td>
    <td>For custom-trained Models and AutoML Tabular Models, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging/pricing). User can disable container logging by setting this flag to true.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of this BatchPredictionJob.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a BatchPredictionJob. If this is set, then all resources created by the BatchPredictionJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob entered any of the following states: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Only populated when the job's state is JOB_STATE_FAILED or JOB_STATE_CANCELLED. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="explanationSpec" /></td>
    <td><code>object</code></td>
    <td>Explanation configuration for this BatchPredictionJob. Can be specified only if generate_explanation is set to `true`. This value overrides the value of Model.explanation_spec. All fields of explanation_spec are optional in the request. If a field of the explanation_spec object is not populated, the corresponding field of the Model.explanation_spec object is inherited. (id: GoogleCloudAiplatformV1ExplanationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="generateExplanation" /></td>
    <td><code>boolean</code></td>
    <td>Generate explanation with the batch prediction results. When set to `true`, the batch prediction output changes based on the `predictions_format` field of the BatchPredictionJob.output_config object: * `bigquery`: output includes a column named `explanation`. The value is a struct that conforms to the Explanation object. * `jsonl`: The JSON objects on each line include an additional entry keyed `explanation`. The value of the entry is a JSON object that conforms to the Explanation object. * `csv`: Generating explanations for CSV format is not supported. If this field is set to true, either the Model.explanation_spec or explanation_spec must be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="inputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Input configuration of the instances on which predictions are performed. The schema of any single instance may be specified via the Model's PredictSchemata's instance_schema_uri. (id: GoogleCloudAiplatformV1BatchPredictionJobInputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for how to convert batch prediction input instances to the prediction instances that are sent to the Model. (id: GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize BatchPredictionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="manualBatchTuningParameters" /></td>
    <td><code>object</code></td>
    <td>Immutable. Parameters configuring the batch behavior. Currently only applicable when dedicated_resources are used (in other cases Vertex AI does the tuning itself). (id: GoogleCloudAiplatformV1ManualBatchTuningParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The name of the Model resource that produces the predictions via this job, must share the same ancestor Location. Starting this job has no impact on any existing deployments of the Model and their resources. Exactly one of model and unmanaged_container_model must be set. The model resource name may contain version id or version alias to specify the version. Example: `projects/&#123;project&#125;/locations/&#123;location&#125;/models/&#123;model&#125;@2` or `projects/&#123;project&#125;/locations/&#123;location&#125;/models/&#123;model&#125;@golden` if no version is specified, the default version will be deployed. The model resource could also be a publisher model. Example: `publishers/&#123;publisher&#125;/models/&#123;model&#125;` or `projects/&#123;project&#125;/locations/&#123;location&#125;/publishers/&#123;publisher&#125;/models/&#123;model&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="modelParameters" /></td>
    <td><code>any</code></td>
    <td>The parameters that govern the predictions. The schema of the parameters may be specified via the Model's PredictSchemata's parameters_schema_uri.</td>
</tr>
<tr>
    <td><CopyableCode code="modelVersionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The version ID of the Model that produces the predictions via this job.</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. The Configuration specifying where output predictions should be written. The schema of any single prediction may be specified as a concatenation of Model's PredictSchemata's instance_schema_uri and prediction_schema_uri. (id: GoogleCloudAiplatformV1BatchPredictionJobOutputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="outputInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information further describing the output of this job. (id: GoogleCloudAiplatformV1BatchPredictionJobOutputInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="partialFailures" /></td>
    <td><code>array</code></td>
    <td>Output only. Partial failures encountered. For example, single files that can't be read. This field never exceeds 20 entries. Status details fields contain standard Google Cloud error details.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesConsumed" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about resources that had been consumed by this job. Provided in real time at best effort basis, as well as a final value once the job completes. Note: This field currently may be not populated for batch predictions that use AutoML Models. (id: GoogleCloudAiplatformV1ResourcesConsumed)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account that the DeployedModel's container runs as. If not specified, a system generated one will be used, which has minimal permissions and the custom container, if used, may not have enough permission to access other Google Cloud resources. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="unmanagedContainerModel" /></td>
    <td><code>object</code></td>
    <td>Contains model information necessary to perform batch prediction without requiring uploading to model registry. Exactly one of model and unmanaged_container_model must be set. (id: GoogleCloudAiplatformV1UnmanagedContainerModel)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the BatchPredictionJob was most recently updated.</td>
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
    <td><a href="#parameter-batchPredictionJobsId"><code>batchPredictionJobsId</code></a></td>
    <td></td>
    <td>Gets a BatchPredictionJob</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists BatchPredictionJobs in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchPredictionJobsId"><code>batchPredictionJobsId</code></a></td>
    <td></td>
    <td>Deletes a BatchPredictionJob. Can only be called on jobs that already finished.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchPredictionJobsId"><code>batchPredictionJobsId</code></a></td>
    <td></td>
    <td>Cancels a BatchPredictionJob. Starts asynchronous cancellation on the BatchPredictionJob. The server makes the best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetBatchPredictionJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On a successful cancellation, the BatchPredictionJob is not deleted;instead its BatchPredictionJob.state is set to `CANCELLED`. Any files already outputted by the job are not deleted.</td>
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
<tr id="parameter-batchPredictionJobsId">
    <td><CopyableCode code="batchPredictionJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
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

Gets a BatchPredictionJob

```sql
SELECT
name,
completionStats,
createTime,
dedicatedResources,
disableContainerLogging,
displayName,
encryptionSpec,
endTime,
error,
explanationSpec,
generateExplanation,
inputConfig,
instanceConfig,
labels,
manualBatchTuningParameters,
model,
modelParameters,
modelVersionId,
outputConfig,
outputInfo,
partialFailures,
resourcesConsumed,
satisfiesPzi,
satisfiesPzs,
serviceAccount,
startTime,
state,
unmanagedContainerModel,
updateTime
FROM google.aiplatform.batch_prediction_jobs
WHERE batchPredictionJobsId = '{{ batchPredictionJobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists BatchPredictionJobs in a Location.

```sql
SELECT
name,
completionStats,
createTime,
dedicatedResources,
disableContainerLogging,
displayName,
encryptionSpec,
endTime,
error,
explanationSpec,
generateExplanation,
inputConfig,
instanceConfig,
labels,
manualBatchTuningParameters,
model,
modelParameters,
modelVersionId,
outputConfig,
outputInfo,
partialFailures,
resourcesConsumed,
satisfiesPzi,
satisfiesPzs,
serviceAccount,
startTime,
state,
unmanagedContainerModel,
updateTime
FROM google.aiplatform.batch_prediction_jobs
WHERE parent = '{{ parent }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a BatchPredictionJob. A BatchPredictionJob once created will right away be attempted to start.

```sql
INSERT INTO google.aiplatform.batch_prediction_jobs (
data__displayName,
data__model,
data__unmanagedContainerModel,
data__inputConfig,
data__instanceConfig,
data__modelParameters,
data__outputConfig,
data__dedicatedResources,
data__serviceAccount,
data__manualBatchTuningParameters,
data__generateExplanation,
data__explanationSpec,
data__labels,
data__encryptionSpec,
data__disableContainerLogging,
parent
)
SELECT 
'{{ displayName }}',
'{{ model }}',
'{{ unmanagedContainerModel }}',
'{{ inputConfig }}',
'{{ instanceConfig }}',
'{{ modelParameters }}',
'{{ outputConfig }}',
'{{ dedicatedResources }}',
'{{ serviceAccount }}',
'{{ manualBatchTuningParameters }}',
{{ generateExplanation }},
'{{ explanationSpec }}',
'{{ labels }}',
'{{ encryptionSpec }}',
{{ disableContainerLogging }},
'{{ parent }}'
RETURNING
name,
completionStats,
createTime,
dedicatedResources,
disableContainerLogging,
displayName,
encryptionSpec,
endTime,
error,
explanationSpec,
generateExplanation,
inputConfig,
instanceConfig,
labels,
manualBatchTuningParameters,
model,
modelParameters,
modelVersionId,
outputConfig,
outputInfo,
partialFailures,
resourcesConsumed,
satisfiesPzi,
satisfiesPzs,
serviceAccount,
startTime,
state,
unmanagedContainerModel,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: batch_prediction_jobs
  props:
    - name: displayName
      value: string
      description: >
        Required. The user-defined name of this BatchPredictionJob.
        
    - name: model
      value: string
      description: >
        The name of the Model resource that produces the predictions via this job, must share the same ancestor Location. Starting this job has no impact on any existing deployments of the Model and their resources. Exactly one of model and unmanaged_container_model must be set. The model resource name may contain version id or version alias to specify the version. Example: `projects/{project}/locations/{location}/models/{model}@2` or `projects/{project}/locations/{location}/models/{model}@golden` if no version is specified, the default version will be deployed. The model resource could also be a publisher model. Example: `publishers/{publisher}/models/{model}` or `projects/{project}/locations/{location}/publishers/{publisher}/models/{model}`
        
    - name: unmanagedContainerModel
      value: object
      description: >
        Contains model information necessary to perform batch prediction without requiring uploading to model registry. Exactly one of model and unmanaged_container_model must be set.
        
    - name: inputConfig
      value: object
      description: >
        Required. Input configuration of the instances on which predictions are performed. The schema of any single instance may be specified via the Model's PredictSchemata's instance_schema_uri.
        
    - name: instanceConfig
      value: object
      description: >
        Configuration for how to convert batch prediction input instances to the prediction instances that are sent to the Model.
        
    - name: modelParameters
      value: any
      description: >
        The parameters that govern the predictions. The schema of the parameters may be specified via the Model's PredictSchemata's parameters_schema_uri.
        
    - name: outputConfig
      value: object
      description: >
        Required. The Configuration specifying where output predictions should be written. The schema of any single prediction may be specified as a concatenation of Model's PredictSchemata's instance_schema_uri and prediction_schema_uri.
        
    - name: dedicatedResources
      value: object
      description: >
        The config of resources used by the Model during the batch prediction. If the Model supports DEDICATED_RESOURCES this config may be provided (and the job will use these resources), if the Model doesn't support AUTOMATIC_RESOURCES, this config must be provided.
        
    - name: serviceAccount
      value: string
      description: >
        The service account that the DeployedModel's container runs as. If not specified, a system generated one will be used, which has minimal permissions and the custom container, if used, may not have enough permission to access other Google Cloud resources. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.
        
    - name: manualBatchTuningParameters
      value: object
      description: >
        Immutable. Parameters configuring the batch behavior. Currently only applicable when dedicated_resources are used (in other cases Vertex AI does the tuning itself).
        
    - name: generateExplanation
      value: boolean
      description: >
        Generate explanation with the batch prediction results. When set to `true`, the batch prediction output changes based on the `predictions_format` field of the BatchPredictionJob.output_config object: * `bigquery`: output includes a column named `explanation`. The value is a struct that conforms to the Explanation object. * `jsonl`: The JSON objects on each line include an additional entry keyed `explanation`. The value of the entry is a JSON object that conforms to the Explanation object. * `csv`: Generating explanations for CSV format is not supported. If this field is set to true, either the Model.explanation_spec or explanation_spec must be populated.
        
    - name: explanationSpec
      value: object
      description: >
        Explanation configuration for this BatchPredictionJob. Can be specified only if generate_explanation is set to `true`. This value overrides the value of Model.explanation_spec. All fields of explanation_spec are optional in the request. If a field of the explanation_spec object is not populated, the corresponding field of the Model.explanation_spec object is inherited.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize BatchPredictionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key options for a BatchPredictionJob. If this is set, then all resources created by the BatchPredictionJob will be encrypted with the provided encryption key.
        
    - name: disableContainerLogging
      value: boolean
      description: >
        For custom-trained Models and AutoML Tabular Models, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging/pricing). User can disable container logging by setting this flag to true.
        
    - name: parent
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a BatchPredictionJob. Can only be called on jobs that already finished.

```sql
DELETE FROM google.aiplatform.batch_prediction_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND batchPredictionJobsId = '{{ batchPredictionJobsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels a BatchPredictionJob. Starts asynchronous cancellation on the BatchPredictionJob. The server makes the best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetBatchPredictionJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On a successful cancellation, the BatchPredictionJob is not deleted;instead its BatchPredictionJob.state is set to `CANCELLED`. Any files already outputted by the job are not deleted.

```sql
EXEC google.aiplatform.batch_prediction_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchPredictionJobsId='{{ batchPredictionJobsId }}' --required;
```
</TabItem>
</Tabs>
