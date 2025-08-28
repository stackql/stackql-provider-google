--- 
title: issue_models
hide_title: false
hide_table_of_contents: false
keywords:
  - issue_models
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists an <code>issue_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>issue_models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.issue_models" /></td></tr>
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
    <td>Immutable. The resource name of the issue model. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/issueModels/&#123;issue_model&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this issue model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The representative name for the issue model.</td>
</tr>
<tr>
    <td><CopyableCode code="inputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Configs for the input data that used to create the issue model. (id: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="issueCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of issues in this issue model.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Language of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="modelType" /></td>
    <td><code>string</code></td>
    <td>Type of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingStats" /></td>
    <td><code>object</code></td>
    <td>Output only. Immutable. The issue model's label statistics on its training data. (id: GoogleCloudContactcenterinsightsV1IssueModelLabelStats)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the issue model was updated.</td>
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
    <td><CopyableCode code="issueModels" /></td>
    <td><code>array</code></td>
    <td>The issue models that match the request.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Gets an issue model.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Lists issue models.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an issue model.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an issue model.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Deletes an issue model.</td>
</tr>
<tr>
    <td><a href="#deploy"><CopyableCode code="deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.</td>
</tr>
<tr>
    <td><a href="#undeploy"><CopyableCode code="undeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Exports an issue model to the provided destination.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Imports an issue model from a Cloud Storage bucket.</td>
</tr>
<tr>
    <td><a href="#calculate_issue_model_stats"><CopyableCode code="calculate_issue_model_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-issueModelsId"><code>issueModelsId</code></a></td>
    <td></td>
    <td>Gets an issue model's statistics.</td>
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
<tr id="parameter-issueModelsId">
    <td><CopyableCode code="issueModelsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
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

Gets an issue model.

```sql
SELECT
name,
createTime,
displayName,
inputDataConfig,
issueCount,
languageCode,
modelType,
state,
trainingStats,
updateTime
FROM google.contactcenterinsights.issue_models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND issueModelsId = '{{ issueModelsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists issue models.

```sql
SELECT
issueModels
FROM google.contactcenterinsights.issue_models
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required;
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

Creates an issue model.

```sql
INSERT INTO google.contactcenterinsights.issue_models (
data__name,
data__displayName,
data__inputDataConfig,
data__modelType,
data__languageCode,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ inputDataConfig }}',
'{{ modelType }}',
'{{ languageCode }}',
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
- name: issue_models
  props:
    - name: projectsId
      value: string
      description: Required parameter for the issue_models resource.
    - name: locationsId
      value: string
      description: Required parameter for the issue_models resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}
        
    - name: displayName
      value: string
      description: >
        The representative name for the issue model.
        
    - name: inputDataConfig
      value: object
      description: >
        Configs for the input data that used to create the issue model.
        
    - name: modelType
      value: string
      description: >
        Type of the model.
        
      valid_values: ['MODEL_TYPE_UNSPECIFIED', 'TYPE_V1', 'TYPE_V2']
    - name: languageCode
      value: string
      description: >
        Language of the model.
        
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

Updates an issue model.

```sql
UPDATE google.contactcenterinsights.issue_models
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__inputDataConfig = '{{ inputDataConfig }}',
data__modelType = '{{ modelType }}',
data__languageCode = '{{ languageCode }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND issueModelsId = '{{ issueModelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
inputDataConfig,
issueCount,
languageCode,
modelType,
state,
trainingStats,
updateTime;
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

Deletes an issue model.

```sql
DELETE FROM google.contactcenterinsights.issue_models
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND issueModelsId = '{{ issueModelsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deploy"
    values={[
        { label: 'deploy', value: 'deploy' },
        { label: 'undeploy', value: 'undeploy' },
        { label: 'export', value: 'export' },
        { label: 'import', value: 'import' },
        { label: 'calculate_issue_model_stats', value: 'calculate_issue_model_stats' }
    ]}
>
<TabItem value="deploy">

Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.

```sql
EXEC google.contactcenterinsights.issue_models.deploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@issueModelsId='{{ issueModelsId }}' --required 
@@json=
'{
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="undeploy">

Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.

```sql
EXEC google.contactcenterinsights.issue_models.undeploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@issueModelsId='{{ issueModelsId }}' --required 
@@json=
'{
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="export">

Exports an issue model to the provided destination.

```sql
EXEC google.contactcenterinsights.issue_models.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@issueModelsId='{{ issueModelsId }}' --required 
@@json=
'{
"gcsDestination": "{{ gcsDestination }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="import">

Imports an issue model from a Cloud Storage bucket.

```sql
EXEC google.contactcenterinsights.issue_models.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"gcsSource": "{{ gcsSource }}", 
"parent": "{{ parent }}", 
"createNewModel": {{ createNewModel }}
}';
```
</TabItem>
<TabItem value="calculate_issue_model_stats">

Gets an issue model's statistics.

```sql
EXEC google.contactcenterinsights.issue_models.calculate_issue_model_stats 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@issueModelsId='{{ issueModelsId }}' --required;
```
</TabItem>
</Tabs>
