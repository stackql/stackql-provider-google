--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.models" /></td></tr>
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

A Model Garden Publisher Model.

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
    <td>Output only. The resource name of the PublisherModel.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworks" /></td>
    <td><code>array</code></td>
    <td>Optional. Additional information about the model's Frameworks.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Optional. Indicates the launch stage of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="openSourceCategory" /></td>
    <td><code>string</code></td>
    <td>Required. Indicates the open source category of the publisher model.</td>
</tr>
<tr>
    <td><CopyableCode code="predictSchemata" /></td>
    <td><code>object</code></td>
    <td>Optional. The schemata that describes formats of the PublisherModel's predictions and explanations as given and returned via PredictionService.Predict. (id: GoogleCloudAiplatformV1PredictSchemata)</td>
</tr>
<tr>
    <td><CopyableCode code="publisherModelTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Immutable. Used to indicate this model has a publisher model and provide the template of the publisher model resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedActions" /></td>
    <td><code>object</code></td>
    <td>Optional. Supported call-to-action options. (id: GoogleCloudAiplatformV1PublisherModelCallToAction)</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The version ID of the PublisherModel. A new version is committed when a new model version is uploaded under an existing model id. It is an auto-incrementing decimal number in string representation.</td>
</tr>
<tr>
    <td><CopyableCode code="versionState" /></td>
    <td><code>string</code></td>
    <td>Optional. Indicates the state of the model version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ModelService.ListModels

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
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>List of Models in the requested page.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page.</td>
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
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-isHuggingFaceModel"><code>isHuggingFaceModel</code></a>, <a href="#parameter-huggingFaceToken"><code>huggingFaceToken</code></a></td>
    <td>Gets a Model Garden publisher model.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Models in a Location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Model.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Deletes a Model. A model cannot be deleted if any Endpoint resource has a DeployedModel based on the model in its deployed_models field.</td>
</tr>
<tr>
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Uploads a Model artifact into Vertex AI.</td>
</tr>
<tr>
    <td><a href="#merge_version_aliases"><CopyableCode code="merge_version_aliases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Merges a set of aliases for a Model version.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Exports a trained, exportable Model to a location specified by the user. A Model is considered to be exportable if it has at least one supported export format.</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Copies an already existing Vertex AI Model into the specified Location. The source Model must exist in the same Project. When copying custom Models, the users themselves are responsible for Model.metadata content to be region-agnostic, as well as making sure that any resources (e.g. files) it depends on remain accessible.</td>
</tr>
<tr>
    <td><a href="#predict"><CopyableCode code="predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Perform an online prediction.</td>
</tr>
<tr>
    <td><a href="#raw_predict"><CopyableCode code="raw_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction. * `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.</td>
</tr>
<tr>
    <td><a href="#stream_raw_predict"><CopyableCode code="stream_raw_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Perform a streaming online prediction with an arbitrary HTTP payload.</td>
</tr>
<tr>
    <td><a href="#server_streaming_predict"><CopyableCode code="server_streaming_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Perform a server-side streaming online prediction request for Vertex LLM streaming.</td>
</tr>
<tr>
    <td><a href="#predict_long_running"><CopyableCode code="predict_long_running" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#generate_content"><CopyableCode code="generate_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Generate content with multimodal inputs.</td>
</tr>
<tr>
    <td><a href="#stream_generate_content"><CopyableCode code="stream_generate_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Generate content with multimodal inputs with streaming support.</td>
</tr>
<tr>
    <td><a href="#count_tokens"><CopyableCode code="count_tokens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Perform a token counting.</td>
</tr>
<tr>
    <td><a href="#compute_tokens"><CopyableCode code="compute_tokens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publishersId"><code>publishersId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Return a list of tokens based on the input text.</td>
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
<tr id="parameter-publishersId">
    <td><CopyableCode code="publishersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-huggingFaceToken">
    <td><CopyableCode code="huggingFaceToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-isHuggingFaceModel">
    <td><CopyableCode code="isHuggingFaceModel" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
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

Gets a Model Garden publisher model.

```sql
SELECT
name,
frameworks,
launchStage,
openSourceCategory,
predictSchemata,
publisherModelTemplate,
supportedActions,
versionId,
versionState
FROM google.aiplatform.models
WHERE publishersId = '{{ publishersId }}' -- required
AND modelsId = '{{ modelsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND view = '{{ view }}'
AND isHuggingFaceModel = '{{ isHuggingFaceModel }}'
AND huggingFaceToken = '{{ huggingFaceToken }}';
```
</TabItem>
<TabItem value="list">

Lists Models in a Location.

```sql
SELECT
models,
nextPageToken
FROM google.aiplatform.models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a Model.

```sql
UPDATE google.aiplatform.models
SET 
data__name = '{{ name }}',
data__versionAliases = '{{ versionAliases }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__versionDescription = '{{ versionDescription }}',
data__defaultCheckpointId = '{{ defaultCheckpointId }}',
data__predictSchemata = '{{ predictSchemata }}',
data__metadataSchemaUri = '{{ metadataSchemaUri }}',
data__metadata = '{{ metadata }}',
data__pipelineJob = '{{ pipelineJob }}',
data__containerSpec = '{{ containerSpec }}',
data__artifactUri = '{{ artifactUri }}',
data__explanationSpec = '{{ explanationSpec }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__dataStats = '{{ dataStats }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__baseModelSource = '{{ baseModelSource }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND modelsId = '{{ modelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
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
versionUpdateTime;
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

Deletes a Model. A model cannot be deleted if any Endpoint resource has a DeployedModel based on the model in its deployed_models field.

```sql
DELETE FROM google.aiplatform.models
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND modelsId = '{{ modelsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' },
        { label: 'merge_version_aliases', value: 'merge_version_aliases' },
        { label: 'export', value: 'export' },
        { label: 'copy', value: 'copy' },
        { label: 'predict', value: 'predict' },
        { label: 'raw_predict', value: 'raw_predict' },
        { label: 'stream_raw_predict', value: 'stream_raw_predict' },
        { label: 'server_streaming_predict', value: 'server_streaming_predict' },
        { label: 'predict_long_running', value: 'predict_long_running' },
        { label: 'generate_content', value: 'generate_content' },
        { label: 'stream_generate_content', value: 'stream_generate_content' },
        { label: 'count_tokens', value: 'count_tokens' },
        { label: 'compute_tokens', value: 'compute_tokens' }
    ]}
>
<TabItem value="upload">

Uploads a Model artifact into Vertex AI.

```sql
EXEC google.aiplatform.models.upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"parentModel": "{{ parentModel }}", 
"modelId": "{{ modelId }}", 
"model": "{{ model }}", 
"serviceAccount": "{{ serviceAccount }}"
}';
```
</TabItem>
<TabItem value="merge_version_aliases">

Merges a set of aliases for a Model version.

```sql
EXEC google.aiplatform.models.merge_version_aliases 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"versionAliases": "{{ versionAliases }}"
}';
```
</TabItem>
<TabItem value="export">

Exports a trained, exportable Model to a location specified by the user. A Model is considered to be exportable if it has at least one supported export format.

```sql
EXEC google.aiplatform.models.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"outputConfig": "{{ outputConfig }}"
}';
```
</TabItem>
<TabItem value="copy">

Copies an already existing Vertex AI Model into the specified Location. The source Model must exist in the same Project. When copying custom Models, the users themselves are responsible for Model.metadata content to be region-agnostic, as well as making sure that any resources (e.g. files) it depends on remain accessible.

```sql
EXEC google.aiplatform.models.copy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"modelId": "{{ modelId }}", 
"parentModel": "{{ parentModel }}", 
"sourceModel": "{{ sourceModel }}", 
"encryptionSpec": "{{ encryptionSpec }}"
}';
```
</TabItem>
<TabItem value="predict">

Perform an online prediction.

```sql
EXEC google.aiplatform.models.predict 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="raw_predict">

Perform an online prediction with an arbitrary HTTP payload. The response includes the following HTTP headers: * `X-Vertex-AI-Endpoint-Id`: ID of the Endpoint that served this prediction. * `X-Vertex-AI-Deployed-Model-Id`: ID of the Endpoint's DeployedModel that served this prediction.

```sql
EXEC google.aiplatform.models.raw_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"httpBody": "{{ httpBody }}"
}';
```
</TabItem>
<TabItem value="stream_raw_predict">

Perform a streaming online prediction with an arbitrary HTTP payload.

```sql
EXEC google.aiplatform.models.stream_raw_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"httpBody": "{{ httpBody }}"
}';
```
</TabItem>
<TabItem value="server_streaming_predict">

Perform a server-side streaming online prediction request for Vertex LLM streaming.

```sql
EXEC google.aiplatform.models.server_streaming_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"inputs": "{{ inputs }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="predict_long_running">

This resource represents a long-running operation that is the result of a network API call.

```sql
EXEC google.aiplatform.models.predict_long_running 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"parameters": "{{ parameters }}"
}';
```
</TabItem>
<TabItem value="generate_content">

Generate content with multimodal inputs.

```sql
EXEC google.aiplatform.models.generate_content 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"systemInstruction": "{{ systemInstruction }}", 
"cachedContent": "{{ cachedContent }}", 
"tools": "{{ tools }}", 
"toolConfig": "{{ toolConfig }}", 
"labels": "{{ labels }}", 
"safetySettings": "{{ safetySettings }}", 
"modelArmorConfig": "{{ modelArmorConfig }}", 
"generationConfig": "{{ generationConfig }}"
}';
```
</TabItem>
<TabItem value="stream_generate_content">

Generate content with multimodal inputs with streaming support.

```sql
EXEC google.aiplatform.models.stream_generate_content 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"contents": "{{ contents }}", 
"systemInstruction": "{{ systemInstruction }}", 
"cachedContent": "{{ cachedContent }}", 
"tools": "{{ tools }}", 
"toolConfig": "{{ toolConfig }}", 
"labels": "{{ labels }}", 
"safetySettings": "{{ safetySettings }}", 
"modelArmorConfig": "{{ modelArmorConfig }}", 
"generationConfig": "{{ generationConfig }}"
}';
```
</TabItem>
<TabItem value="count_tokens">

Perform a token counting.

```sql
EXEC google.aiplatform.models.count_tokens 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"model": "{{ model }}", 
"instances": "{{ instances }}", 
"contents": "{{ contents }}", 
"systemInstruction": "{{ systemInstruction }}", 
"tools": "{{ tools }}", 
"generationConfig": "{{ generationConfig }}"
}';
```
</TabItem>
<TabItem value="compute_tokens">

Return a list of tokens based on the input text.

```sql
EXEC google.aiplatform.models.compute_tokens 
@publishersId='{{ publishersId }}' --required, 
@modelsId='{{ modelsId }}' --required 
@@json=
'{
"instances": "{{ instances }}", 
"model": "{{ model }}", 
"contents": "{{ contents }}"
}';
```
</TabItem>
</Tabs>
