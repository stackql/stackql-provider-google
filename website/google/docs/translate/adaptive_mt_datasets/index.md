--- 
title: adaptive_mt_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - adaptive_mt_datasets
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

Creates, updates, deletes, gets or lists an <code>adaptive_mt_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>adaptive_mt_datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.adaptive_mt_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_get"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_get', value: 'projects_locations_adaptive_mt_datasets_get' },
        { label: 'projects_locations_adaptive_mt_datasets_list', value: 'projects_locations_adaptive_mt_datasets_list' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_get">

An Adaptive MT Dataset.

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
    <td>Required. The resource name of the dataset, in form of `projects/&#123;project-number-or-id&#125;/locations/&#123;location_id&#125;/adaptiveMtDatasets/&#123;dataset_id&#125;`</td>
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
    <td>The number of examples in the dataset.</td>
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
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this dataset was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_adaptive_mt_datasets_list">

A list of AdaptiveMtDatasets.

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
    <td><CopyableCode code="adaptiveMtDatasets" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of Adaptive MT datasets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to `ListAdaptiveMtDatasets` method to retrieve the next page of results.</td>
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
    <td><a href="#projects_locations_adaptive_mt_datasets_get"><CopyableCode code="projects_locations_adaptive_mt_datasets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a></td>
    <td></td>
    <td>Gets the Adaptive MT dataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_list"><CopyableCode code="projects_locations_adaptive_mt_datasets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all Adaptive MT datasets for which the caller has read permission.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_create"><CopyableCode code="projects_locations_adaptive_mt_datasets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an Adaptive MT dataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_delete"><CopyableCode code="projects_locations_adaptive_mt_datasets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a></td>
    <td></td>
    <td>Deletes an Adaptive MT dataset, including all its entries and associated metadata.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_import_adaptive_mt_file"><CopyableCode code="projects_locations_adaptive_mt_datasets_import_adaptive_mt_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a></td>
    <td></td>
    <td>Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.</td>
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
<tr id="parameter-adaptiveMtDatasetsId">
    <td><CopyableCode code="adaptiveMtDatasetsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_get"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_get', value: 'projects_locations_adaptive_mt_datasets_get' },
        { label: 'projects_locations_adaptive_mt_datasets_list', value: 'projects_locations_adaptive_mt_datasets_list' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_get">

Gets the Adaptive MT dataset.

```sql
SELECT
name,
createTime,
displayName,
exampleCount,
sourceLanguageCode,
targetLanguageCode,
updateTime
FROM google.translate.adaptive_mt_datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_adaptive_mt_datasets_list">

Lists all Adaptive MT datasets for which the caller has read permission.

```sql
SELECT
adaptiveMtDatasets,
nextPageToken
FROM google.translate.adaptive_mt_datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_create"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_create', value: 'projects_locations_adaptive_mt_datasets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_create">

Creates an Adaptive MT dataset.

```sql
INSERT INTO google.translate.adaptive_mt_datasets (
data__name,
data__displayName,
data__sourceLanguageCode,
data__targetLanguageCode,
data__exampleCount,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ sourceLanguageCode }}',
'{{ targetLanguageCode }}',
{{ exampleCount }},
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
exampleCount,
sourceLanguageCode,
targetLanguageCode,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: adaptive_mt_datasets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the adaptive_mt_datasets resource.
    - name: locationsId
      value: string
      description: Required parameter for the adaptive_mt_datasets resource.
    - name: name
      value: string
      description: >
        Required. The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}`
        
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
        
    - name: exampleCount
      value: integer
      description: >
        The number of examples in the dataset.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_delete"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_delete', value: 'projects_locations_adaptive_mt_datasets_delete' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_delete">

Deletes an Adaptive MT dataset, including all its entries and associated metadata.

```sql
DELETE FROM google.translate.adaptive_mt_datasets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_import_adaptive_mt_file"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_import_adaptive_mt_file', value: 'projects_locations_adaptive_mt_datasets_import_adaptive_mt_file' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_import_adaptive_mt_file">

Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

```sql
EXEC google.translate.adaptive_mt_datasets.projects_locations_adaptive_mt_datasets_import_adaptive_mt_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@adaptiveMtDatasetsId='{{ adaptiveMtDatasetsId }}' --required 
@@json=
'{
"fileInputSource": "{{ fileInputSource }}", 
"gcsInputSource": "{{ gcsInputSource }}"
}';
```
</TabItem>
</Tabs>
