--- 
title: rag_files
hide_title: false
hide_table_of_contents: false
keywords:
  - rag_files
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>rag_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rag_files</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.rag_files" /></td></tr>
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
    <td>Output only. The resource name of the RagFile.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this RagFile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the RagFile.</td>
</tr>
<tr>
    <td><CopyableCode code="directUploadSource" /></td>
    <td><code>object</code></td>
    <td>Output only. The RagFile is encapsulated and uploaded in the UploadRagFile request. (id: GoogleCloudAiplatformV1DirectUploadSource)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the RagFile. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. State of the RagFile. (id: GoogleCloudAiplatformV1FileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Google Cloud Storage location of the RagFile. It does not support wildcards in the Cloud Storage uri for now. (id: GoogleCloudAiplatformV1GcsSource)</td>
</tr>
<tr>
    <td><CopyableCode code="googleDriveSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Google Drive location. Supports importing individual files as well as Google Drive folders. (id: GoogleCloudAiplatformV1GoogleDriveSource)</td>
</tr>
<tr>
    <td><CopyableCode code="jiraSource" /></td>
    <td><code>object</code></td>
    <td>The RagFile is imported from a Jira query. (id: GoogleCloudAiplatformV1JiraSource)</td>
</tr>
<tr>
    <td><CopyableCode code="sharePointSources" /></td>
    <td><code>object</code></td>
    <td>The RagFile is imported from a SharePoint source. (id: GoogleCloudAiplatformV1SharePointSources)</td>
</tr>
<tr>
    <td><CopyableCode code="slackSource" /></td>
    <td><code>object</code></td>
    <td>The RagFile is imported from a Slack channel. (id: GoogleCloudAiplatformV1SlackSource)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this RagFile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. The metadata for metadata search. The user_metadata Needs to be in JSON format.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the RagFile.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this RagFile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the RagFile.</td>
</tr>
<tr>
    <td><CopyableCode code="directUploadSource" /></td>
    <td><code>object</code></td>
    <td>Output only. The RagFile is encapsulated and uploaded in the UploadRagFile request. (id: GoogleCloudAiplatformV1DirectUploadSource)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the RagFile. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. State of the RagFile. (id: GoogleCloudAiplatformV1FileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Google Cloud Storage location of the RagFile. It does not support wildcards in the Cloud Storage uri for now. (id: GoogleCloudAiplatformV1GcsSource)</td>
</tr>
<tr>
    <td><CopyableCode code="googleDriveSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Google Drive location. Supports importing individual files as well as Google Drive folders. (id: GoogleCloudAiplatformV1GoogleDriveSource)</td>
</tr>
<tr>
    <td><CopyableCode code="jiraSource" /></td>
    <td><code>object</code></td>
    <td>The RagFile is imported from a Jira query. (id: GoogleCloudAiplatformV1JiraSource)</td>
</tr>
<tr>
    <td><CopyableCode code="sharePointSources" /></td>
    <td><code>object</code></td>
    <td>The RagFile is imported from a SharePoint source. (id: GoogleCloudAiplatformV1SharePointSources)</td>
</tr>
<tr>
    <td><CopyableCode code="slackSource" /></td>
    <td><code>object</code></td>
    <td>The RagFile is imported from a Slack channel. (id: GoogleCloudAiplatformV1SlackSource)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this RagFile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. The metadata for metadata search. The user_metadata Needs to be in JSON format.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a>, <a href="#parameter-ragFilesId"><code>ragFilesId</code></a></td>
    <td></td>
    <td>Gets a RagFile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists RagFiles in a RagCorpus.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a>, <a href="#parameter-ragFilesId"><code>ragFilesId</code></a></td>
    <td><a href="#parameter-forceDelete"><code>forceDelete</code></a></td>
    <td>Deletes a RagFile.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a></td>
    <td></td>
    <td>Import files from Google Cloud Storage or Google Drive into a RagCorpus.</td>
</tr>
<tr>
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a></td>
    <td></td>
    <td>Upload a file into a RagCorpus.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ragCorporaId">
    <td><CopyableCode code="ragCorporaId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ragFilesId">
    <td><CopyableCode code="ragFilesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-forceDelete">
    <td><CopyableCode code="forceDelete" /></td>
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

Gets a RagFile.

```sql
SELECT
name,
createTime,
description,
directUploadSource,
displayName,
fileStatus,
gcsSource,
googleDriveSource,
jiraSource,
sharePointSources,
slackSource,
updateTime,
userMetadata
FROM google.aiplatform.rag_files
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND ragCorporaId = '{{ ragCorporaId }}' -- required
AND ragFilesId = '{{ ragFilesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists RagFiles in a RagCorpus.

```sql
SELECT
name,
createTime,
description,
directUploadSource,
displayName,
fileStatus,
gcsSource,
googleDriveSource,
jiraSource,
sharePointSources,
slackSource,
updateTime,
userMetadata
FROM google.aiplatform.rag_files
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND ragCorporaId = '{{ ragCorporaId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Deletes a RagFile.

```sql
DELETE FROM google.aiplatform.rag_files
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND ragCorporaId = '{{ ragCorporaId }}' --required
AND ragFilesId = '{{ ragFilesId }}' --required
AND forceDelete = '{{ forceDelete }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' },
        { label: 'upload', value: 'upload' }
    ]}
>
<TabItem value="import">

Import files from Google Cloud Storage or Google Drive into a RagCorpus.

```sql
EXEC google.aiplatform.rag_files.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@ragCorporaId='{{ ragCorporaId }}' --required 
@@json=
'{
"importRagFilesConfig": "{{ importRagFilesConfig }}"
}';
```
</TabItem>
<TabItem value="upload">

Upload a file into a RagCorpus.

```sql
EXEC google.aiplatform.rag_files.upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@ragCorporaId='{{ ragCorporaId }}' --required 
@@json=
'{
"ragFile": "{{ ragFile }}", 
"uploadRagFileConfig": "{{ uploadRagFileConfig }}"
}';
```
</TabItem>
</Tabs>
