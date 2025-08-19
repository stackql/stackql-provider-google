--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - bigquery
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.models" /></td></tr>
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
    <td><CopyableCode code="bestTrialId" /></td>
    <td><code>string (int64)</code></td>
    <td>The best trial_id across all training runs.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this model was created, in millisecs since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultTrialId" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-friendly description of this model.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Custom encryption configuration (e.g., Cloud KMS keys). This shows the encryption configuration of the model data while stored in BigQuery storage. This field can be used with PatchModel to update encryption key for an already encrypted model. (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A hash of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.</td>
</tr>
<tr>
    <td><CopyableCode code="featureColumns" /></td>
    <td><code>array</code></td>
    <td>Output only. Input feature columns for the model inference. If the model is trained with TRANSFORM clause, these are the input of the TRANSFORM clause.</td>
</tr>
<tr>
    <td><CopyableCode code="friendlyName" /></td>
    <td><code>string</code></td>
    <td>Optional. A descriptive name for this model.</td>
</tr>
<tr>
    <td><CopyableCode code="hparamSearchSpaces" /></td>
    <td><code>object</code></td>
    <td>Output only. All hyperparameter search spaces in this model. (id: HparamSearchSpaces)</td>
</tr>
<tr>
    <td><CopyableCode code="hparamTrials" /></td>
    <td><code>array</code></td>
    <td>Output only. Trials of a [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id.</td>
</tr>
<tr>
    <td><CopyableCode code="labelColumns" /></td>
    <td><code>array</code></td>
    <td>Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this model was last modified, in millisecs since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The geographic location where the model resides. This value is inherited from the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="modelReference" /></td>
    <td><code>object</code></td>
    <td>Required. Unique identifier for this model. (id: ModelReference)</td>
</tr>
<tr>
    <td><CopyableCode code="modelType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the model resource.</td>
</tr>
<tr>
    <td><CopyableCode code="optimalTrialIds" /></td>
    <td><code>array</code></td>
    <td>Output only. For single-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteModelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Remote model info (id: RemoteModelInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingRuns" /></td>
    <td><code>array</code></td>
    <td>Information for all training runs in increasing order of start_time.</td>
</tr>
<tr>
    <td><CopyableCode code="transformColumns" /></td>
    <td><code>array</code></td>
    <td>Output only. This field will be populated if a TRANSFORM clause was used to train a model. TRANSFORM clause (if used) takes feature_columns as input and outputs transform_columns. transform_columns then are used to train the model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response format for a single page when listing BigQuery ML models.

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
    <td>Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to request the next page of results.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+modelId"><code>+modelId</code></a></td>
    <td></td>
    <td>Gets the specified model resource by model ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+modelId"><code>+modelId</code></a></td>
    <td></td>
    <td>Patch specific fields in the specified model.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+modelId"><code>+modelId</code></a></td>
    <td></td>
    <td>Deletes the model specified by modelId from the dataset.</td>
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
<tr id="parameter-+datasetId">
    <td><CopyableCode code="+datasetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-+modelId">
    <td><CopyableCode code="+modelId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified model resource by model ID.

```sql
SELECT
bestTrialId,
creationTime,
defaultTrialId,
description,
encryptionConfiguration,
etag,
expirationTime,
featureColumns,
friendlyName,
hparamSearchSpaces,
hparamTrials,
labelColumns,
labels,
lastModifiedTime,
location,
modelReference,
modelType,
optimalTrialIds,
remoteModelInfo,
trainingRuns,
transformColumns
FROM google.bigquery.models
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND +modelId = '{{ +modelId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.

```sql
SELECT
models,
nextPageToken
FROM google.bigquery.models
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
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

Patch specific fields in the specified model.

```sql
UPDATE google.bigquery.models
SET 
data__bestTrialId = '{{ bestTrialId }}',
data__description = '{{ description }}',
data__encryptionConfiguration = '{{ encryptionConfiguration }}',
data__expirationTime = '{{ expirationTime }}',
data__friendlyName = '{{ friendlyName }}',
data__labels = '{{ labels }}',
data__modelReference = '{{ modelReference }}',
data__trainingRuns = '{{ trainingRuns }}'
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +modelId = '{{ +modelId }}' --required
RETURNING
bestTrialId,
creationTime,
defaultTrialId,
description,
encryptionConfiguration,
etag,
expirationTime,
featureColumns,
friendlyName,
hparamSearchSpaces,
hparamTrials,
labelColumns,
labels,
lastModifiedTime,
location,
modelReference,
modelType,
optimalTrialIds,
remoteModelInfo,
trainingRuns,
transformColumns;
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

Deletes the model specified by modelId from the dataset.

```sql
DELETE FROM google.bigquery.models
WHERE projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +modelId = '{{ +modelId }}' --required;
```
</TabItem>
</Tabs>
