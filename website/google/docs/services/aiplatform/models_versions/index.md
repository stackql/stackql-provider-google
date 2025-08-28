--- 
title: models_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - models_versions
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

Creates, updates, deletes, gets or lists a <code>models_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>models_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.models_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_versions"
    values={[
        { label: 'list_versions', value: 'list_versions' }
    ]}
>
<TabItem value="list_versions">

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
    <td>The resource name of the Model.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactUri" /></td>
    <td><code>string</code></td>
    <td>Immutable. The path to the directory containing the Model artifact and any of its supporting files. Not required for AutoML Models.</td>
</tr>
<tr>
    <td><CopyableCode code="baseModelSource" /></td>
    <td><code>object</code></td>
    <td>Optional. User input field to specify the base model source. Currently it only supports specifing the Model Garden models and Genie models. (id: GoogleCloudAiplatformV1ModelBaseModelSource)</td>
</tr>
<tr>
    <td><CopyableCode code="checkpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. The checkpoints of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="containerSpec" /></td>
    <td><code>object</code></td>
    <td>Input only. The specification of the container that is to be used when deploying this Model. The specification is ingested upon ModelService.UploadModel, and all binaries it contains are copied and stored internally by Vertex AI. Not required for AutoML Models. (id: GoogleCloudAiplatformV1ModelContainerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Model was uploaded into Vertex AI.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStats" /></td>
    <td><code>object</code></td>
    <td>Stats of data used for training or evaluating the Model. Only populated when the Model is trained by a TrainingPipeline with data_input_config. (id: GoogleCloudAiplatformV1ModelDataStats)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultCheckpointId" /></td>
    <td><code>string</code></td>
    <td>The default checkpoint id of a model version.</td>
</tr>
<tr>
    <td><CopyableCode code="deployedModels" /></td>
    <td><code>array</code></td>
    <td>Output only. The pointers to DeployedModels created from this Model. Note that Model could have been deployed to Endpoints in different Locations.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Model.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the Model. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a Model. If set, this Model and all sub-resources of this Model will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="explanationSpec" /></td>
    <td><code>object</code></td>
    <td>The default explanation specification for this Model. The Model can be used for requesting explanation after being deployed if it is populated. The Model can be used for batch explanation if it is populated. All fields of the explanation_spec can be overridden by explanation_spec of DeployModelRequest.deployed_model, or explanation_spec of BatchPredictionJob. If the default explanation specification is not set for this Model, this Model can still be used for requesting explanation by setting explanation_spec of DeployModelRequest.deployed_model and for batch explanation by setting explanation_spec of BatchPredictionJob. (id: GoogleCloudAiplatformV1ExplanationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Models. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Immutable. An additional information about the Model; the schema of the metadata can be found in metadata_schema. Unset if the Model does not have any additional information.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataArtifact" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Artifact that was created in MetadataStore when creating the Model. The Artifact resource name pattern is `projects/&#123;project&#125;/locations/&#123;location&#125;/metadataStores/&#123;metadata_store&#125;/artifacts/&#123;artifact&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Model, that is specific to it. Unset if the Model does not have any additional information. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML Models always have this field populated by Vertex AI, if no additional metadata is needed, this field is set to an empty string. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.</td>
</tr>
<tr>
    <td><CopyableCode code="modelSourceInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Source of a model. It can either be automl training pipeline, custom training pipeline, BigQuery ML, or saved and tuned from Genie or Model Garden. (id: GoogleCloudAiplatformV1ModelSourceInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="originalModelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. If this Model is a copy of another Model, this contains info about the original. (id: GoogleCloudAiplatformV1ModelOriginalModelInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineJob" /></td>
    <td><code>string</code></td>
    <td>Optional. This field is populated if the model is produced by a pipeline job.</td>
</tr>
<tr>
    <td><CopyableCode code="predictSchemata" /></td>
    <td><code>object</code></td>
    <td>The schemata that describe formats of the Model's predictions and explanations as given and returned via PredictionService.Predict and PredictionService.Explain. (id: GoogleCloudAiplatformV1PredictSchemata)</td>
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
    <td><CopyableCode code="supportedDeploymentResourcesTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. When this Model is deployed, its prediction resources are described by the `prediction_resources` field of the Endpoint.deployed_models object. Because not all Models support all resource configuration types, the configuration types this Model supports are listed here. If no configuration types are listed, the Model cannot be deployed to an Endpoint and does not support online predictions (PredictionService.Predict or PredictionService.Explain). Such a Model can serve predictions by using a BatchPredictionJob, if it has at least one entry each in supported_input_storage_formats and supported_output_storage_formats.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedExportFormats" /></td>
    <td><code>array</code></td>
    <td>Output only. The formats in which this Model may be exported. If empty, this Model is not available for export.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedInputStorageFormats" /></td>
    <td><code>array</code></td>
    <td>Output only. The formats this Model supports in BatchPredictionJob.input_config. If PredictSchemata.instance_schema_uri exists, the instances should be given as per that schema. The possible formats are: * `jsonl` The JSON Lines format, where each instance is a single line. Uses GcsSource. * `csv` The CSV format, where each instance is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses GcsSource. * `tf-record` The TFRecord format, where each instance is a single record in tfrecord syntax. Uses GcsSource. * `tf-record-gzip` Similar to `tf-record`, but the file is gzipped. Uses GcsSource. * `bigquery` Each instance is a single row in BigQuery. Uses BigQuerySource. * `file-list` Each line of the file is the location of an instance to process, uses `gcs_source` field of the InputConfig object. If this Model doesn't support any of these formats it means it cannot be used with a BatchPredictionJob. However, if it has supported_deployment_resources_types, it could serve online predictions by using PredictionService.Predict or PredictionService.Explain.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedOutputStorageFormats" /></td>
    <td><code>array</code></td>
    <td>Output only. The formats this Model supports in BatchPredictionJob.output_config. If both PredictSchemata.instance_schema_uri and PredictSchemata.prediction_schema_uri exist, the predictions are returned together with their instances. In other words, the prediction has the original instance data first, followed by the actual prediction content (as per the schema). The possible formats are: * `jsonl` The JSON Lines format, where each prediction is a single line. Uses GcsDestination. * `csv` The CSV format, where each prediction is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses GcsDestination. * `bigquery` Each prediction is a single row in a BigQuery table, uses BigQueryDestination . If this Model doesn't support any of these formats it means it cannot be used with a BatchPredictionJob. However, if it has supported_deployment_resources_types, it could serve online predictions by using PredictionService.Predict or PredictionService.Explain.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingPipeline" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the TrainingPipeline that uploaded this Model, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Model was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionAliases" /></td>
    <td><code>array</code></td>
    <td>User provided version aliases so that a model version can be referenced via alias (i.e. `projects/&#123;project&#125;/locations/&#123;location&#125;/models/&#123;model_id&#125;@&#123;version_alias&#125;` instead of auto-generated version id (i.e. `projects/&#123;project&#125;/locations/&#123;location&#125;/models/&#123;model_id&#125;@&#123;version_id&#125;)`. The format is a-z&#123;0,126&#125;[a-z0-9] to distinguish from version_id. A default version alias will be created for the first version of the model, and there must be exactly one default version alias for a model.</td>
</tr>
<tr>
    <td><CopyableCode code="versionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="versionDescription" /></td>
    <td><code>string</code></td>
    <td>The description of this version.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The version ID of the model. A new version is committed when a new model version is uploaded or trained under an existing model id. It is an auto-incrementing decimal number in string representation.</td>
</tr>
<tr>
    <td><CopyableCode code="versionUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this version was most recently updated.</td>
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
    <td><a href="#list_versions"><CopyableCode code="list_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists versions of the specified model.</td>
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
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="list_versions"
    values={[
        { label: 'list_versions', value: 'list_versions' }
    ]}
>
<TabItem value="list_versions">

Lists versions of the specified model.

```sql
SELECT
name,
artifactUri,
baseModelSource,
checkpoints,
containerSpec,
createTime,
dataStats,
defaultCheckpointId,
deployedModels,
description,
displayName,
encryptionSpec,
etag,
explanationSpec,
labels,
metadata,
metadataArtifact,
metadataSchemaUri,
modelSourceInfo,
originalModelInfo,
pipelineJob,
predictSchemata,
satisfiesPzi,
satisfiesPzs,
supportedDeploymentResourcesTypes,
supportedExportFormats,
supportedInputStorageFormats,
supportedOutputStorageFormats,
trainingPipeline,
updateTime,
versionAliases,
versionCreateTime,
versionDescription,
versionId,
versionUpdateTime
FROM google.aiplatform.models_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
