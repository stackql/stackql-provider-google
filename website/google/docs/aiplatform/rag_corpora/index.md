--- 
title: rag_corpora
hide_title: false
hide_table_of_contents: false
keywords:
  - rag_corpora
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

Creates, updates, deletes, gets or lists a <code>rag_corpora</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rag_corpora</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.rag_corpora" /></td></tr>
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

A RagCorpus is a RagFile container and a project can have multiple RagCorpora.

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
    <td>Output only. The resource name of the RagCorpus.</td>
</tr>
<tr>
    <td><CopyableCode code="corpusStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. RagCorpus state. (id: GoogleCloudAiplatformV1CorpusStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this RagCorpus was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the RagCorpus.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the RagCorpus. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The CMEK key name used to encrypt at-rest data related to this Corpus. Only applicable to RagManagedDb option for Vector DB. This field can only be set at corpus creation time, and cannot be updated or deleted. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this RagCorpus was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vectorDbConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The config for the Vector DBs. (id: GoogleCloudAiplatformV1RagVectorDbConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="vertexAiSearchConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The config for the Vertex AI Search. (id: GoogleCloudAiplatformV1VertexAiSearchConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for VertexRagDataService.ListRagCorpora.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results. Pass to ListRagCorporaRequest.page_token to obtain that page.</td>
</tr>
<tr>
    <td><CopyableCode code="ragCorpora" /></td>
    <td><code>array</code></td>
    <td>List of RagCorpora in the requested page.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a></td>
    <td></td>
    <td>Gets a RagCorpus.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists RagCorpora in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a RagCorpus.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a></td>
    <td></td>
    <td>Updates a RagCorpus.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ragCorporaId"><code>ragCorporaId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a RagCorpus.</td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
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

Gets a RagCorpus.

```sql
SELECT
name,
corpusStatus,
createTime,
description,
displayName,
encryptionSpec,
updateTime,
vectorDbConfig,
vertexAiSearchConfig
FROM google.aiplatform.rag_corpora
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND ragCorporaId = '{{ ragCorporaId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists RagCorpora in a Location.

```sql
SELECT
nextPageToken,
ragCorpora
FROM google.aiplatform.rag_corpora
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a RagCorpus.

```sql
INSERT INTO google.aiplatform.rag_corpora (
data__vectorDbConfig,
data__vertexAiSearchConfig,
data__displayName,
data__description,
data__encryptionSpec,
projectsId,
locationsId
)
SELECT 
'{{ vectorDbConfig }}',
'{{ vertexAiSearchConfig }}',
'{{ displayName }}',
'{{ description }}',
'{{ encryptionSpec }}',
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
- name: rag_corpora
  props:
    - name: projectsId
      value: string
      description: Required parameter for the rag_corpora resource.
    - name: locationsId
      value: string
      description: Required parameter for the rag_corpora resource.
    - name: vectorDbConfig
      value: object
      description: >
        Optional. Immutable. The config for the Vector DBs.
        
    - name: vertexAiSearchConfig
      value: object
      description: >
        Optional. Immutable. The config for the Vertex AI Search.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the RagCorpus. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: description
      value: string
      description: >
        Optional. The description of the RagCorpus.
        
    - name: encryptionSpec
      value: object
      description: >
        Optional. Immutable. The CMEK key name used to encrypt at-rest data related to this Corpus. Only applicable to RagManagedDb option for Vector DB. This field can only be set at corpus creation time, and cannot be updated or deleted.
        
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

Updates a RagCorpus.

```sql
UPDATE google.aiplatform.rag_corpora
SET 
data__vectorDbConfig = '{{ vectorDbConfig }}',
data__vertexAiSearchConfig = '{{ vertexAiSearchConfig }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__encryptionSpec = '{{ encryptionSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND ragCorporaId = '{{ ragCorporaId }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a RagCorpus.

```sql
DELETE FROM google.aiplatform.rag_corpora
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND ragCorporaId = '{{ ragCorporaId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
