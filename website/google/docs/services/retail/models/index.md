--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - retail
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_models_get"
    values={[
        { label: 'projects_locations_catalogs_models_get', value: 'projects_locations_catalogs_models_get' },
        { label: 'projects_locations_catalogs_models_list', value: 'projects_locations_catalogs_models_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_models_get">

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
    <td>Required. The fully qualified resource name of the model. Format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/catalogs/&#123;catalog_id&#125;/models/&#123;model_id&#125;` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Model was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataState" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="filteringOption" /></td>
    <td><code>string</code></td>
    <td>Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTuneTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the latest successful tune finished.</td>
</tr>
<tr>
    <td><CopyableCode code="modelFeaturesConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional model features config. (id: GoogleCloudRetailV2ModelModelFeaturesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="optimizationObjective" /></td>
    <td><code>string</code></td>
    <td>Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` =&gt; `ctr` `others-you-may-like` =&gt; `ctr` `frequently-bought-together` =&gt; `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.</td>
</tr>
<tr>
    <td><CopyableCode code="periodicTuningState" /></td>
    <td><code>string</code></td>
    <td>Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="servingConfigLists" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of valid serving configs associated with the PageOptimizationConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="servingState" /></td>
    <td><code>string</code></td>
    <td>Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingState" /></td>
    <td><code>string</code></td>
    <td>Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.</td>
</tr>
<tr>
    <td><CopyableCode code="tuningOperation" /></td>
    <td><code>string</code></td>
    <td>Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_catalogs_models_list">

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
    <td>Required. The fully qualified resource name of the model. Format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/catalogs/&#123;catalog_id&#125;/models/&#123;model_id&#125;` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Model was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataState" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="filteringOption" /></td>
    <td><code>string</code></td>
    <td>Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTuneTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the latest successful tune finished.</td>
</tr>
<tr>
    <td><CopyableCode code="modelFeaturesConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional model features config. (id: GoogleCloudRetailV2ModelModelFeaturesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="optimizationObjective" /></td>
    <td><code>string</code></td>
    <td>Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` =&gt; `ctr` `others-you-may-like` =&gt; `ctr` `frequently-bought-together` =&gt; `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.</td>
</tr>
<tr>
    <td><CopyableCode code="periodicTuningState" /></td>
    <td><code>string</code></td>
    <td>Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="servingConfigLists" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of valid serving configs associated with the PageOptimizationConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="servingState" /></td>
    <td><code>string</code></td>
    <td>Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingState" /></td>
    <td><code>string</code></td>
    <td>Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.</td>
</tr>
<tr>
    <td><CopyableCode code="tuningOperation" /></td>
    <td><code>string</code></td>
    <td>Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.</td>
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
    <td><a href="#projects_locations_catalogs_models_get"><CopyableCode code="projects_locations_catalogs_models_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Gets a model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_list"><CopyableCode code="projects_locations_catalogs_models_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the models linked to this event store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_create"><CopyableCode code="projects_locations_catalogs_models_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-dryRun"><code>dryRun</code></a></td>
    <td>Creates a new model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_patch"><CopyableCode code="projects_locations_catalogs_models_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update of model metadata. Only fields that currently can be updated are: `filtering_option` and `periodic_tuning_state`. If other values are provided, this API method ignores them.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_delete"><CopyableCode code="projects_locations_catalogs_models_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Deletes an existing model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_pause"><CopyableCode code="projects_locations_catalogs_models_pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Pauses the training of an existing model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_resume"><CopyableCode code="projects_locations_catalogs_models_resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Resumes the training of an existing model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_models_tune"><CopyableCode code="projects_locations_catalogs_models_tune" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Tunes an existing model.</td>
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
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
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
<tr id="parameter-dryRun">
    <td><CopyableCode code="dryRun" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_models_get"
    values={[
        { label: 'projects_locations_catalogs_models_get', value: 'projects_locations_catalogs_models_get' },
        { label: 'projects_locations_catalogs_models_list', value: 'projects_locations_catalogs_models_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_models_get">

Gets a model.

```sql
SELECT
name,
createTime,
dataState,
displayName,
filteringOption,
lastTuneTime,
modelFeaturesConfig,
optimizationObjective,
periodicTuningState,
servingConfigLists,
servingState,
trainingState,
tuningOperation,
type,
updateTime
FROM google.retail.models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_models_list">

Lists all the models linked to this event store.

```sql
SELECT
name,
createTime,
dataState,
displayName,
filteringOption,
lastTuneTime,
modelFeaturesConfig,
optimizationObjective,
periodicTuningState,
servingConfigLists,
servingState,
trainingState,
tuningOperation,
type,
updateTime
FROM google.retail.models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_models_create"
    values={[
        { label: 'projects_locations_catalogs_models_create', value: 'projects_locations_catalogs_models_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_models_create">

Creates a new model.

```sql
INSERT INTO google.retail.models (
data__name,
data__displayName,
data__trainingState,
data__type,
data__optimizationObjective,
data__periodicTuningState,
data__filteringOption,
data__modelFeaturesConfig,
projectsId,
locationsId,
catalogsId,
dryRun
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ trainingState }}',
'{{ type }}',
'{{ optimizationObjective }}',
'{{ periodicTuningState }}',
'{{ filteringOption }}',
'{{ modelFeaturesConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ dryRun }}'
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
- name: models
  props:
    - name: projectsId
      value: string
      description: Required parameter for the models resource.
    - name: locationsId
      value: string
      description: Required parameter for the models resource.
    - name: catalogsId
      value: string
      description: Required parameter for the models resource.
    - name: name
      value: string
      description: >
        Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.
        
    - name: trainingState
      value: string
      description: >
        Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.
        
      valid_values: ['TRAINING_STATE_UNSPECIFIED', 'PAUSED', 'TRAINING']
    - name: type
      value: string
      description: >
        Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.
        
    - name: optimizationObjective
      value: string
      description: >
        Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.
        
    - name: periodicTuningState
      value: string
      description: >
        Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.
        
      valid_values: ['PERIODIC_TUNING_STATE_UNSPECIFIED', 'PERIODIC_TUNING_DISABLED', 'ALL_TUNING_DISABLED', 'PERIODIC_TUNING_ENABLED']
    - name: filteringOption
      value: string
      description: >
        Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.
        
      valid_values: ['RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED', 'RECOMMENDATIONS_FILTERING_DISABLED', 'RECOMMENDATIONS_FILTERING_ENABLED']
    - name: modelFeaturesConfig
      value: object
      description: >
        Optional. Additional model features config.
        
    - name: dryRun
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_models_patch"
    values={[
        { label: 'projects_locations_catalogs_models_patch', value: 'projects_locations_catalogs_models_patch' }
    ]}
>
<TabItem value="projects_locations_catalogs_models_patch">

Update of model metadata. Only fields that currently can be updated are: `filtering_option` and `periodic_tuning_state`. If other values are provided, this API method ignores them.

```sql
UPDATE google.retail.models
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__trainingState = '{{ trainingState }}',
data__type = '{{ type }}',
data__optimizationObjective = '{{ optimizationObjective }}',
data__periodicTuningState = '{{ periodicTuningState }}',
data__filteringOption = '{{ filteringOption }}',
data__modelFeaturesConfig = '{{ modelFeaturesConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND modelsId = '{{ modelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataState,
displayName,
filteringOption,
lastTuneTime,
modelFeaturesConfig,
optimizationObjective,
periodicTuningState,
servingConfigLists,
servingState,
trainingState,
tuningOperation,
type,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_models_delete"
    values={[
        { label: 'projects_locations_catalogs_models_delete', value: 'projects_locations_catalogs_models_delete' }
    ]}
>
<TabItem value="projects_locations_catalogs_models_delete">

Deletes an existing model.

```sql
DELETE FROM google.retail.models
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND modelsId = '{{ modelsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_models_pause"
    values={[
        { label: 'projects_locations_catalogs_models_pause', value: 'projects_locations_catalogs_models_pause' },
        { label: 'projects_locations_catalogs_models_resume', value: 'projects_locations_catalogs_models_resume' },
        { label: 'projects_locations_catalogs_models_tune', value: 'projects_locations_catalogs_models_tune' }
    ]}
>
<TabItem value="projects_locations_catalogs_models_pause">

Pauses the training of an existing model.

```sql
EXEC google.retail.models.projects_locations_catalogs_models_pause 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@modelsId='{{ modelsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_models_resume">

Resumes the training of an existing model.

```sql
EXEC google.retail.models.projects_locations_catalogs_models_resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@modelsId='{{ modelsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_models_tune">

Tunes an existing model.

```sql
EXEC google.retail.models.projects_locations_catalogs_models_tune 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@modelsId='{{ modelsId }}' --required;
```
</TabItem>
</Tabs>
