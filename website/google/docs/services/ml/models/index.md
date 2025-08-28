--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - ml
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_models_get"
    values={[
        { label: 'projects_models_get', value: 'projects_models_get' },
        { label: 'projects_models_list', value: 'projects_models_list' }
    ]}
>
<TabItem value="projects_models_get">

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
    <td>Required. The name specified for the model when it was created. The model name must be unique within the project it is created in.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultVersion" /></td>
    <td><code>object</code></td>
    <td>Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.models.versions.setDefault. (id: GoogleCloudMlV1__Version)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description specified for the model when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.</td>
</tr>
<tr>
    <td><CopyableCode code="onlinePredictionConsoleLogging" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="onlinePredictionLogging" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_models_list">

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
    <td>Required. The name specified for the model when it was created. The model name must be unique within the project it is created in.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultVersion" /></td>
    <td><code>object</code></td>
    <td>Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.models.versions.setDefault. (id: GoogleCloudMlV1__Version)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description specified for the model when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.</td>
</tr>
<tr>
    <td><CopyableCode code="onlinePredictionConsoleLogging" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="onlinePredictionLogging" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field.</td>
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
    <td><a href="#projects_models_get"><CopyableCode code="projects_models_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).</td>
</tr>
<tr>
    <td><a href="#projects_models_list"><CopyableCode code="projects_models_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: &#123;&#125;.</td>
</tr>
<tr>
    <td><a href="#projects_models_create"><CopyableCode code="projects_models_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.</td>
</tr>
<tr>
    <td><a href="#projects_models_patch"><CopyableCode code="projects_models_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a specific model resource. Currently the only supported fields to update are `description` and `default_version.name`.</td>
</tr>
<tr>
    <td><a href="#projects_models_delete"><CopyableCode code="projects_models_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-modelsId"><code>modelsId</code></a></td>
    <td></td>
    <td>Deletes a model. You can only delete a model if there are no versions in it. You can delete versions by calling projects.models.versions.delete.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_models_get"
    values={[
        { label: 'projects_models_get', value: 'projects_models_get' },
        { label: 'projects_models_list', value: 'projects_models_list' }
    ]}
>
<TabItem value="projects_models_get">

Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).

```sql
SELECT
name,
defaultVersion,
description,
etag,
labels,
onlinePredictionConsoleLogging,
onlinePredictionLogging,
regions
FROM google.ml.models
WHERE projectsId = '{{ projectsId }}' -- required
AND modelsId = '{{ modelsId }}' -- required;
```
</TabItem>
<TabItem value="projects_models_list">

Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: &#123;&#125;.

```sql
SELECT
name,
defaultVersion,
description,
etag,
labels,
onlinePredictionConsoleLogging,
onlinePredictionLogging,
regions
FROM google.ml.models
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_models_create"
    values={[
        { label: 'projects_models_create', value: 'projects_models_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_models_create">

Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.

```sql
INSERT INTO google.ml.models (
data__name,
data__description,
data__defaultVersion,
data__regions,
data__onlinePredictionLogging,
data__onlinePredictionConsoleLogging,
data__labels,
data__etag,
projectsId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ defaultVersion }}',
'{{ regions }}',
{{ onlinePredictionLogging }},
{{ onlinePredictionConsoleLogging }},
'{{ labels }}',
'{{ etag }}',
'{{ projectsId }}'
RETURNING
name,
defaultVersion,
description,
etag,
labels,
onlinePredictionConsoleLogging,
onlinePredictionLogging,
regions
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
    - name: name
      value: string
      description: >
        Required. The name specified for the model when it was created. The model name must be unique within the project it is created in.
        
    - name: description
      value: string
      description: >
        Optional. The description specified for the model when it was created.
        
    - name: defaultVersion
      value: object
      description: >
        Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.models.versions.setDefault.
        
    - name: regions
      value: array
      description: >
        Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field.
        
    - name: onlinePredictionLogging
      value: boolean
      description: >
        Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false.
        
    - name: onlinePredictionConsoleLogging
      value: boolean
      description: >
        Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false.
        
    - name: labels
      value: object
      description: >
        Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.
        
    - name: etag
      value: string
      description: >
        `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_models_patch"
    values={[
        { label: 'projects_models_patch', value: 'projects_models_patch' }
    ]}
>
<TabItem value="projects_models_patch">

Updates a specific model resource. Currently the only supported fields to update are `description` and `default_version.name`.

```sql
UPDATE google.ml.models
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__defaultVersion = '{{ defaultVersion }}',
data__regions = '{{ regions }}',
data__onlinePredictionLogging = {{ onlinePredictionLogging }},
data__onlinePredictionConsoleLogging = {{ onlinePredictionConsoleLogging }},
data__labels = '{{ labels }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND modelsId = '{{ modelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_models_delete"
    values={[
        { label: 'projects_models_delete', value: 'projects_models_delete' }
    ]}
>
<TabItem value="projects_models_delete">

Deletes a model. You can only delete a model if there are no versions in it. You can delete versions by calling projects.models.versions.delete.

```sql
DELETE FROM google.ml.models
WHERE projectsId = '{{ projectsId }}' --required
AND modelsId = '{{ modelsId }}' --required;
```
</TabItem>
</Tabs>
