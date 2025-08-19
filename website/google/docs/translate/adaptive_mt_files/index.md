--- 
title: adaptive_mt_files
hide_title: false
hide_table_of_contents: false
keywords:
  - adaptive_mt_files
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

Creates, updates, deletes, gets or lists an <code>adaptive_mt_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>adaptive_mt_files</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.adaptive_mt_files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_adaptive_mt_files_get"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_get', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_get' },
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_list', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_list' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_get">

An AdaptiveMtFile.

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
    <td>Required. The resource name of the file, in form of `projects/&#123;project-number-or-id&#125;/locations/&#123;location_id&#125;/adaptiveMtDatasets/&#123;dataset&#125;/adaptiveMtFiles/&#123;file&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this file was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The file's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="entryCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of entries that the file contains.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this file was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_list">

The response for listing all AdaptiveMt files under a given dataset.

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
    <td><CopyableCode code="adaptiveMtFiles" /></td>
    <td><code>array</code></td>
    <td>Output only. The Adaptive MT files.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to `ListAdaptiveMtFiles` method to retrieve the next page of results.</td>
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
    <td><a href="#projects_locations_adaptive_mt_datasets_adaptive_mt_files_get"><CopyableCode code="projects_locations_adaptive_mt_datasets_adaptive_mt_files_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a>, <a href="#parameter-adaptiveMtFilesId"><code>adaptiveMtFilesId</code></a></td>
    <td></td>
    <td>Gets and AdaptiveMtFile</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_adaptive_mt_files_list"><CopyableCode code="projects_locations_adaptive_mt_datasets_adaptive_mt_files_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete"><CopyableCode code="projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a>, <a href="#parameter-adaptiveMtFilesId"><code>adaptiveMtFilesId</code></a></td>
    <td></td>
    <td>Deletes an AdaptiveMtFile along with its sentences.</td>
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
<tr id="parameter-adaptiveMtFilesId">
    <td><CopyableCode code="adaptiveMtFilesId" /></td>
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
    defaultValue="projects_locations_adaptive_mt_datasets_adaptive_mt_files_get"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_get', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_get' },
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_list', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_list' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_get">

Gets and AdaptiveMtFile

```sql
SELECT
name,
createTime,
displayName,
entryCount,
updateTime
FROM google.translate.adaptive_mt_files
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' -- required
AND adaptiveMtFilesId = '{{ adaptiveMtFilesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_list">

Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

```sql
SELECT
adaptiveMtFiles,
nextPageToken
FROM google.translate.adaptive_mt_files
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete">

Deletes an AdaptiveMtFile along with its sentences.

```sql
DELETE FROM google.translate.adaptive_mt_files
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' --required
AND adaptiveMtFilesId = '{{ adaptiveMtFilesId }}' --required;
```
</TabItem>
</Tabs>
