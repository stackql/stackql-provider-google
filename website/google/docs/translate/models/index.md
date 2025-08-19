--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - translate
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_models_get"
    values={[
        { label: 'projects_locations_models_get', value: 'projects_locations_models_get' },
        { label: 'projects_locations_models_list', value: 'projects_locations_models_list' }
    ]}
>
<TabItem value="projects_locations_models_get">

A trained translation model.

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
    <td>The resource name of the model, in form of `projects/&#123;project-number-or-id&#125;/locations/&#123;location_id&#125;/models/&#123;model_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the model resource was created, which is also when the training started.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td>The dataset from which the model is trained, in form of `projects/&#123;project-number-or-id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceLanguageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The BCP-47 language code of the source language.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLanguageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The BCP-47 language code of the target language.</td>
</tr>
<tr>
    <td><CopyableCode code="testExampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of examples (sentence pairs) used to test the model.</td>
</tr>
<tr>
    <td><CopyableCode code="trainExampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of examples (sentence pairs) used to train the model.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this model was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validateExampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of examples (sentence pairs) used to validate the model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_models_list">

Response message for ListModels.

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
    <td>The models read.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to obtain the corresponding page.</td>
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
    <td><a href="#projects_locations_models_get"><CopyableCode code="projects_locations_models_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Gets a model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_models_list"><CopyableCode code="projects_locations_models_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists models.</td>
</tr>
<tr>
    <td><a href="#projects_locations_models_create"><CopyableCode code="projects_locations_models_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a Model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_models_delete"><CopyableCode code="projects_locations_models_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Deletes a model.</td>
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
    defaultValue="projects_locations_models_get"
    values={[
        { label: 'projects_locations_models_get', value: 'projects_locations_models_get' },
        { label: 'projects_locations_models_list', value: 'projects_locations_models_list' }
    ]}
>
<TabItem value="projects_locations_models_get">

Gets a model.

```sql
SELECT
name,
createTime,
dataset,
displayName,
sourceLanguageCode,
targetLanguageCode,
testExampleCount,
trainExampleCount,
updateTime,
validateExampleCount
FROM google.translate.models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_models_list">

Lists models.

```sql
SELECT
models,
nextPageToken
FROM google.translate.models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_models_create"
    values={[
        { label: 'projects_locations_models_create', value: 'projects_locations_models_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_models_create">

Creates a Model.

```sql
INSERT INTO google.translate.models (
data__name,
data__displayName,
data__dataset,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ dataset }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
    - name: name
      value: string
      description: >
        The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}`
        
    - name: displayName
      value: string
      description: >
        The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
        
    - name: dataset
      value: string
      description: >
        The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_models_delete"
    values={[
        { label: 'projects_locations_models_delete', value: 'projects_locations_models_delete' }
    ]}
>
<TabItem value="projects_locations_models_delete">

Deletes a model.

```sql
DELETE FROM google.translate.models
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND modelsId = '{{ modelsId }}' --required;
```
</TabItem>
</Tabs>
