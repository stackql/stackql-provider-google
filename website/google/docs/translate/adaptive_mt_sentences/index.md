--- 
title: adaptive_mt_sentences
hide_title: false
hide_table_of_contents: false
keywords:
  - adaptive_mt_sentences
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

Creates, updates, deletes, gets or lists an <code>adaptive_mt_sentences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>adaptive_mt_sentences</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.adaptive_mt_sentences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list' },
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list">

List AdaptiveMt sentences response.

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
    <td><CopyableCode code="adaptiveMtSentences" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of AdaptiveMtSentences.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Optional. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list">

List AdaptiveMt sentences response.

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
    <td><CopyableCode code="adaptiveMtSentences" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of AdaptiveMtSentences.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Optional. </td>
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
    <td><a href="#projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list"><CopyableCode code="projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a>, <a href="#parameter-adaptiveMtFilesId"><code>adaptiveMtFilesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all AdaptiveMtSentences under a given file/dataset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list"><CopyableCode code="projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-adaptiveMtDatasetsId"><code>adaptiveMtDatasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all AdaptiveMtSentences under a given file/dataset.</td>
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
    defaultValue="projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list"
    values={[
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list' },
        { label: 'projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list', value: 'projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list' }
    ]}
>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list">

Lists all AdaptiveMtSentences under a given file/dataset.

```sql
SELECT
adaptiveMtSentences,
nextPageToken
FROM google.translate.adaptive_mt_sentences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' -- required
AND adaptiveMtFilesId = '{{ adaptiveMtFilesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list">

Lists all AdaptiveMtSentences under a given file/dataset.

```sql
SELECT
adaptiveMtSentences,
nextPageToken
FROM google.translate.adaptive_mt_sentences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND adaptiveMtDatasetsId = '{{ adaptiveMtDatasetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
