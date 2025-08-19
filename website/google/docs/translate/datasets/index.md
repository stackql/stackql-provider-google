--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_datasets_get"
    values={[
        { label: 'projects_locations_datasets_get', value: 'projects_locations_datasets_get' },
        { label: 'projects_locations_datasets_list', value: 'projects_locations_datasets_list' }
    ]}
>
<TabItem value="projects_locations_datasets_get">

A dataset that hosts the examples (sentence pairs) used for translation models.

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
    <td>The resource name of the dataset, in form of `projects/&#123;project-number-or-id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.</td>
</tr>
<tr>
    <td><CopyableCode code="exampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of examples in the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceLanguageCode" /></td>
    <td><code>string</code></td>
    <td>The BCP-47 language code of the source language.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLanguageCode" /></td>
    <td><code>string</code></td>
    <td>The BCP-47 language code of the target language.</td>
</tr>
<tr>
    <td><CopyableCode code="testExampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of test examples (sentence pairs).</td>
</tr>
<tr>
    <td><CopyableCode code="trainExampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of training examples (sentence pairs).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this dataset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validateExampleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of validation examples (sentence pairs).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_datasets_list">

Response message for ListDatasets.

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
    <td><CopyableCode code="datasets" /></td>
    <td><code>array</code></td>
    <td>The datasets read.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to obtain the corresponding page.</td>
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
    <td><a href="#projects_locations_datasets_get"><CopyableCode code="projects_locations_datasets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Gets a Dataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_datasets_list"><CopyableCode code="projects_locations_datasets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists datasets.</td>
</tr>
<tr>
    <td><a href="#projects_locations_datasets_create"><CopyableCode code="projects_locations_datasets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a Dataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_datasets_delete"><CopyableCode code="projects_locations_datasets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Deletes a dataset and all of its contents.</td>
</tr>
<tr>
    <td><a href="#projects_locations_datasets_import_data"><CopyableCode code="projects_locations_datasets_import_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Import sentence pairs into translation Dataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_datasets_export_data"><CopyableCode code="projects_locations_datasets_export_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Exports dataset's data to the provided output location.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
    defaultValue="projects_locations_datasets_get"
    values={[
        { label: 'projects_locations_datasets_get', value: 'projects_locations_datasets_get' },
        { label: 'projects_locations_datasets_list', value: 'projects_locations_datasets_list' }
    ]}
>
<TabItem value="projects_locations_datasets_get">

Gets a Dataset.

```sql
SELECT
name,
createTime,
displayName,
exampleCount,
sourceLanguageCode,
targetLanguageCode,
testExampleCount,
trainExampleCount,
updateTime,
validateExampleCount
FROM google.translate.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_datasets_list">

Lists datasets.

```sql
SELECT
datasets,
nextPageToken
FROM google.translate.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_datasets_create"
    values={[
        { label: 'projects_locations_datasets_create', value: 'projects_locations_datasets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_datasets_create">

Creates a Dataset.

```sql
INSERT INTO google.translate.datasets (
data__name,
data__displayName,
data__sourceLanguageCode,
data__targetLanguageCode,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ sourceLanguageCode }}',
'{{ targetLanguageCode }}',
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
- name: datasets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the datasets resource.
    - name: locationsId
      value: string
      description: Required parameter for the datasets resource.
    - name: name
      value: string
      description: >
        The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
        
    - name: displayName
      value: string
      description: >
        The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
        
    - name: sourceLanguageCode
      value: string
      description: >
        The BCP-47 language code of the source language.
        
    - name: targetLanguageCode
      value: string
      description: >
        The BCP-47 language code of the target language.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_datasets_delete"
    values={[
        { label: 'projects_locations_datasets_delete', value: 'projects_locations_datasets_delete' }
    ]}
>
<TabItem value="projects_locations_datasets_delete">

Deletes a dataset and all of its contents.

```sql
DELETE FROM google.translate.datasets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_datasets_import_data"
    values={[
        { label: 'projects_locations_datasets_import_data', value: 'projects_locations_datasets_import_data' },
        { label: 'projects_locations_datasets_export_data', value: 'projects_locations_datasets_export_data' }
    ]}
>
<TabItem value="projects_locations_datasets_import_data">

Import sentence pairs into translation Dataset.

```sql
EXEC google.translate.datasets.projects_locations_datasets_import_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"inputConfig": "{{ inputConfig }}"
}';
```
</TabItem>
<TabItem value="projects_locations_datasets_export_data">

Exports dataset's data to the provided output location.

```sql
EXEC google.translate.datasets.projects_locations_datasets_export_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"outputConfig": "{{ outputConfig }}"
}';
```
</TabItem>
</Tabs>
