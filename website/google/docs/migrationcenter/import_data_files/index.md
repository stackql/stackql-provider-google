--- 
title: import_data_files
hide_title: false
hide_table_of_contents: false
keywords:
  - import_data_files
  - migrationcenter
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

Creates, updates, deletes, gets or lists an <code>import_data_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>import_data_files</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.migrationcenter.import_data_files" /></td></tr>
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

A resource that represents a payload file in an import job.

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
    <td>Output only. The name of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the file was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-friendly display name. Maximum length is 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Required. The payload format.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the import data file.</td>
</tr>
<tr>
    <td><CopyableCode code="uploadFileInfo" /></td>
    <td><code>object</code></td>
    <td>Information about a file that is uploaded to a storage service. (id: UploadFileInfo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for listing payload files of an import job.

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
    <td><CopyableCode code="importDataFiles" /></td>
    <td><code>array</code></td>
    <td>The list of import data files.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-importJobsId"><code>importJobsId</code></a>, <a href="#parameter-importDataFilesId"><code>importDataFilesId</code></a></td>
    <td></td>
    <td>Gets an import data file.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-importJobsId"><code>importJobsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>List import data files.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-importJobsId"><code>importJobsId</code></a></td>
    <td><a href="#parameter-importDataFileId"><code>importDataFileId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an import data file.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-importJobsId"><code>importJobsId</code></a>, <a href="#parameter-importDataFilesId"><code>importDataFilesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Delete an import data file.</td>
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
<tr id="parameter-importDataFilesId">
    <td><CopyableCode code="importDataFilesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-importJobsId">
    <td><CopyableCode code="importJobsId" /></td>
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
<tr id="parameter-importDataFileId">
    <td><CopyableCode code="importDataFileId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets an import data file.

```sql
SELECT
name,
createTime,
displayName,
format,
state,
uploadFileInfo
FROM google.migrationcenter.import_data_files
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND importJobsId = '{{ importJobsId }}' -- required
AND importDataFilesId = '{{ importDataFilesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List import data files.

```sql
SELECT
importDataFiles,
nextPageToken,
unreachable
FROM google.migrationcenter.import_data_files
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND importJobsId = '{{ importJobsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates an import data file.

```sql
INSERT INTO google.migrationcenter.import_data_files (
data__displayName,
data__format,
data__uploadFileInfo,
projectsId,
locationsId,
importJobsId,
importDataFileId,
requestId
)
SELECT 
'{{ displayName }}',
'{{ format }}',
'{{ uploadFileInfo }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ importJobsId }}',
'{{ importDataFileId }}',
'{{ requestId }}'
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
- name: import_data_files
  props:
    - name: projectsId
      value: string
      description: Required parameter for the import_data_files resource.
    - name: locationsId
      value: string
      description: Required parameter for the import_data_files resource.
    - name: importJobsId
      value: string
      description: Required parameter for the import_data_files resource.
    - name: displayName
      value: string
      description: >
        User-friendly display name. Maximum length is 63 characters.
        
    - name: format
      value: string
      description: >
        Required. The payload format.
        
      valid_values: ['IMPORT_JOB_FORMAT_UNSPECIFIED', 'IMPORT_JOB_FORMAT_RVTOOLS_XLSX', 'IMPORT_JOB_FORMAT_RVTOOLS_CSV', 'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV', 'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV', 'IMPORT_JOB_FORMAT_STRATOZONE_CSV', 'IMPORT_JOB_FORMAT_DATABASE_ZIP']
    - name: uploadFileInfo
      value: object
      description: >
        Information about a file that is uploaded to a storage service.
        
    - name: importDataFileId
      value: string
    - name: requestId
      value: string
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

Delete an import data file.

```sql
DELETE FROM google.migrationcenter.import_data_files
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND importJobsId = '{{ importJobsId }}' --required
AND importDataFilesId = '{{ importDataFilesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
