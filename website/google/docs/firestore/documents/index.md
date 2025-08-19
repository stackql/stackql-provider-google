--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - firestore
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

Creates, updates, deletes, gets or lists a <code>documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>documents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' },
        { label: 'list_documents', value: 'list_documents' },
        { label: 'listen', value: 'listen' }
    ]}
>
<TabItem value="list">

The response for Firestore.ListDocuments.

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
    <td><CopyableCode code="documents" /></td>
    <td><code>array</code></td>
    <td>The Documents found.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get">

A Firestore document. Must not exceed 1 MiB - 4 bytes.

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
    <td>The resource name of the document, for example `projects/&#123;project_id&#125;/databases/&#123;database_id&#125;/documents/&#123;document_path&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>The document's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The field names, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For `map_value`, the field path is represented by a dot-delimited (`.`) string of segments. Each segment is either a simple field name (defined below) or a quoted field name. For example, the structured field `"foo" : &#123; map_value: &#123; "x&y" : &#123; string_value: "hello" &#125;&#125;&#125;` would be represented by the field path `` foo.`x&y` ``. A simple field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`, or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`. A quoted field name starts and ends with `` ` `` and may contain any character. Some characters, including `` ` ``, must be escaped using a `\`. For example, `` `x&y` `` represents `x&y` and `` `bak\`tik` `` represents `` bak`tik ``.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_documents">

The response for Firestore.ListDocuments.

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
    <td><CopyableCode code="documents" /></td>
    <td><code>array</code></td>
    <td>The Documents found.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="listen">

The response for Firestore.Listen.

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
    <td><CopyableCode code="documentChange" /></td>
    <td><code>object</code></td>
    <td>A Document has changed. (id: DocumentChange)</td>
</tr>
<tr>
    <td><CopyableCode code="documentDelete" /></td>
    <td><code>object</code></td>
    <td>A Document has been deleted. (id: DocumentDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="documentRemove" /></td>
    <td><code>object</code></td>
    <td>A Document has been removed from a target (because it is no longer relevant to that target). (id: DocumentRemove)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>A filter to apply to the set of documents previously returned for the given target. Returned when documents may have been removed from the given target, but the exact documents are unknown. (id: ExistenceFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="targetChange" /></td>
    <td><code>object</code></td>
    <td>Targets have changed. (id: TargetChange)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a>, <a href="#parameter-collectionId"><code>collectionId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-mask.fieldPaths"><code>mask.fieldPaths</code></a>, <a href="#parameter-transaction"><code>transaction</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-showMissing"><code>showMissing</code></a></td>
    <td>Lists documents.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td><a href="#parameter-mask.fieldPaths"><code>mask.fieldPaths</code></a>, <a href="#parameter-transaction"><code>transaction</code></a>, <a href="#parameter-readTime"><code>readTime</code></a></td>
    <td>Gets a single document.</td>
</tr>
<tr>
    <td><a href="#list_documents"><CopyableCode code="list_documents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-collectionId"><code>collectionId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-mask.fieldPaths"><code>mask.fieldPaths</code></a>, <a href="#parameter-transaction"><code>transaction</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-showMissing"><code>showMissing</code></a></td>
    <td>Lists documents.</td>
</tr>
<tr>
    <td><a href="#listen"><CopyableCode code="listen" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Listens to changes. This method is only available via gRPC or WebChannel (not REST).</td>
</tr>
<tr>
    <td><a href="#create_document"><CopyableCode code="create_document" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-collectionId"><code>collectionId</code></a></td>
    <td><a href="#parameter-documentId"><code>documentId</code></a>, <a href="#parameter-mask.fieldPaths"><code>mask.fieldPaths</code></a></td>
    <td>Creates a new document.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td><a href="#parameter-updateMask.fieldPaths"><code>updateMask.fieldPaths</code></a>, <a href="#parameter-mask.fieldPaths"><code>mask.fieldPaths</code></a>, <a href="#parameter-currentDocument.exists"><code>currentDocument.exists</code></a>, <a href="#parameter-currentDocument.updateTime"><code>currentDocument.updateTime</code></a></td>
    <td>Updates or inserts a document.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td><a href="#parameter-currentDocument.exists"><code>currentDocument.exists</code></a>, <a href="#parameter-currentDocument.updateTime"><code>currentDocument.updateTime</code></a></td>
    <td>Deletes a document.</td>
</tr>
<tr>
    <td><a href="#batch_get"><CopyableCode code="batch_get" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.</td>
</tr>
<tr>
    <td><a href="#begin_transaction"><CopyableCode code="begin_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Starts a new transaction.</td>
</tr>
<tr>
    <td><a href="#commit"><CopyableCode code="commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Commits a transaction, while optionally updating documents.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Rolls back a transaction.</td>
</tr>
<tr>
    <td><a href="#run_query"><CopyableCode code="run_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td></td>
    <td>Runs a query.</td>
</tr>
<tr>
    <td><a href="#run_aggregation_query"><CopyableCode code="run_aggregation_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td></td>
    <td>Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```</td>
</tr>
<tr>
    <td><a href="#partition_query"><CopyableCode code="partition_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a>, <a href="#parameter-documentsId1"><code>documentsId1</code></a></td>
    <td></td>
    <td>Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.</td>
</tr>
<tr>
    <td><a href="#write"><CopyableCode code="write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).</td>
</tr>
<tr>
    <td><a href="#batch_write"><CopyableCode code="batch_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.</td>
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
<tr id="parameter-collectionId">
    <td><CopyableCode code="collectionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-documentsId">
    <td><CopyableCode code="documentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-documentsId1">
    <td><CopyableCode code="documentsId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-currentDocument.exists">
    <td><CopyableCode code="currentDocument.exists" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-currentDocument.updateTime">
    <td><CopyableCode code="currentDocument.updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-documentId">
    <td><CopyableCode code="documentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-mask.fieldPaths">
    <td><CopyableCode code="mask.fieldPaths" /></td>
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
<tr id="parameter-readTime">
    <td><CopyableCode code="readTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-showMissing">
    <td><CopyableCode code="showMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-transaction">
    <td><CopyableCode code="transaction" /></td>
    <td><code>string (byte)</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask.fieldPaths">
    <td><CopyableCode code="updateMask.fieldPaths" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' },
        { label: 'list_documents', value: 'list_documents' },
        { label: 'listen', value: 'listen' }
    ]}
>
<TabItem value="list">

Lists documents.

```sql
SELECT
documents,
nextPageToken
FROM google.firestore.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND documentsId = '{{ documentsId }}' -- required
AND documentsId1 = '{{ documentsId1 }}' -- required
AND collectionId = '{{ collectionId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND mask.fieldPaths = '{{ mask.fieldPaths }}'
AND transaction = '{{ transaction }}'
AND readTime = '{{ readTime }}'
AND showMissing = '{{ showMissing }}';
```
</TabItem>
<TabItem value="get">

Gets a single document.

```sql
SELECT
name,
createTime,
fields,
updateTime
FROM google.firestore.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND documentsId = '{{ documentsId }}' -- required
AND documentsId1 = '{{ documentsId1 }}' -- required
AND mask.fieldPaths = '{{ mask.fieldPaths }}'
AND transaction = '{{ transaction }}'
AND readTime = '{{ readTime }}';
```
</TabItem>
<TabItem value="list_documents">

Lists documents.

```sql
SELECT
documents,
nextPageToken
FROM google.firestore.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND collectionId = '{{ collectionId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND mask.fieldPaths = '{{ mask.fieldPaths }}'
AND transaction = '{{ transaction }}'
AND readTime = '{{ readTime }}'
AND showMissing = '{{ showMissing }}';
```
</TabItem>
<TabItem value="listen">

Listens to changes. This method is only available via gRPC or WebChannel (not REST).

```sql
SELECT
documentChange,
documentDelete,
documentRemove,
filter,
targetChange
FROM google.firestore.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_document"
    values={[
        { label: 'create_document', value: 'create_document' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_document">

Creates a new document.

```sql
INSERT INTO google.firestore.documents (
data__name,
data__fields,
data__createTime,
data__updateTime,
projectsId,
databasesId,
documentsId,
collectionId,
documentId,
mask.fieldPaths
)
SELECT 
'{{ name }}',
'{{ fields }}',
'{{ createTime }}',
'{{ updateTime }}',
'{{ projectsId }}',
'{{ databasesId }}',
'{{ documentsId }}',
'{{ collectionId }}',
'{{ documentId }}',
'{{ mask.fieldPaths }}'
RETURNING
name,
createTime,
fields,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: documents
  props:
    - name: projectsId
      value: string
      description: Required parameter for the documents resource.
    - name: databasesId
      value: string
      description: Required parameter for the documents resource.
    - name: documentsId
      value: string
      description: Required parameter for the documents resource.
    - name: collectionId
      value: string
      description: Required parameter for the documents resource.
    - name: name
      value: string
      description: >
        The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
        
    - name: fields
      value: object
      description: >
        The document's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The field names, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For `map_value`, the field path is represented by a dot-delimited (`.`) string of segments. Each segment is either a simple field name (defined below) or a quoted field name. For example, the structured field `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be represented by the field path `` foo.`x&y` ``. A simple field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`, or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`. A quoted field name starts and ends with `` ` `` and may contain any character. Some characters, including `` ` ``, must be escaped using a `\`. For example, `` `x&y` `` represents `x&y` and `` `bak\`tik` `` represents `` bak`tik ``.
        
    - name: createTime
      value: string
      description: >
        Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query.
        
    - name: updateTime
      value: string
      description: >
        Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query.
        
    - name: documentId
      value: string
    - name: mask.fieldPaths
      value: string
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

Updates or inserts a document.

```sql
UPDATE google.firestore.documents
SET 
data__name = '{{ name }}',
data__fields = '{{ fields }}',
data__createTime = '{{ createTime }}',
data__updateTime = '{{ updateTime }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND documentsId = '{{ documentsId }}' --required
AND documentsId1 = '{{ documentsId1 }}' --required
AND updateMask.fieldPaths = '{{ updateMask.fieldPaths}}'
AND mask.fieldPaths = '{{ mask.fieldPaths}}'
AND currentDocument.exists = {{ currentDocument.exists}}
AND currentDocument.updateTime = '{{ currentDocument.updateTime}}'
RETURNING
name,
createTime,
fields,
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

Deletes a document.

```sql
DELETE FROM google.firestore.documents
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND documentsId = '{{ documentsId }}' --required
AND documentsId1 = '{{ documentsId1 }}' --required
AND currentDocument.exists = '{{ currentDocument.exists }}'
AND currentDocument.updateTime = '{{ currentDocument.updateTime }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_get"
    values={[
        { label: 'batch_get', value: 'batch_get' },
        { label: 'begin_transaction', value: 'begin_transaction' },
        { label: 'commit', value: 'commit' },
        { label: 'rollback', value: 'rollback' },
        { label: 'run_query', value: 'run_query' },
        { label: 'run_aggregation_query', value: 'run_aggregation_query' },
        { label: 'partition_query', value: 'partition_query' },
        { label: 'write', value: 'write' },
        { label: 'batch_write', value: 'batch_write' }
    ]}
>
<TabItem value="batch_get">

Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.

```sql
EXEC google.firestore.documents.batch_get 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"documents": "{{ documents }}", 
"mask": "{{ mask }}", 
"transaction": "{{ transaction }}", 
"newTransaction": "{{ newTransaction }}", 
"readTime": "{{ readTime }}"
}';
```
</TabItem>
<TabItem value="begin_transaction">

Starts a new transaction.

```sql
EXEC google.firestore.documents.begin_transaction 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"options": "{{ options }}"
}';
```
</TabItem>
<TabItem value="commit">

Commits a transaction, while optionally updating documents.

```sql
EXEC google.firestore.documents.commit 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"writes": "{{ writes }}", 
"transaction": "{{ transaction }}"
}';
```
</TabItem>
<TabItem value="rollback">

Rolls back a transaction.

```sql
EXEC google.firestore.documents.rollback 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}"
}';
```
</TabItem>
<TabItem value="run_query">

Runs a query.

```sql
EXEC google.firestore.documents.run_query 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@documentsId='{{ documentsId }}' --required, 
@documentsId1='{{ documentsId1 }}' --required 
@@json=
'{
"structuredQuery": "{{ structuredQuery }}", 
"transaction": "{{ transaction }}", 
"newTransaction": "{{ newTransaction }}", 
"readTime": "{{ readTime }}", 
"explainOptions": "{{ explainOptions }}"
}';
```
</TabItem>
<TabItem value="run_aggregation_query">

Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```

```sql
EXEC google.firestore.documents.run_aggregation_query 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@documentsId='{{ documentsId }}' --required, 
@documentsId1='{{ documentsId1 }}' --required 
@@json=
'{
"structuredAggregationQuery": "{{ structuredAggregationQuery }}", 
"transaction": "{{ transaction }}", 
"newTransaction": "{{ newTransaction }}", 
"readTime": "{{ readTime }}", 
"explainOptions": "{{ explainOptions }}"
}';
```
</TabItem>
<TabItem value="partition_query">

Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.

```sql
EXEC google.firestore.documents.partition_query 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@documentsId='{{ documentsId }}' --required, 
@documentsId1='{{ documentsId1 }}' --required 
@@json=
'{
"structuredQuery": "{{ structuredQuery }}", 
"partitionCount": "{{ partitionCount }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}, 
"readTime": "{{ readTime }}"
}';
```
</TabItem>
<TabItem value="write">

Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).

```sql
EXEC google.firestore.documents.write 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"streamId": "{{ streamId }}", 
"writes": "{{ writes }}", 
"streamToken": "{{ streamToken }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="batch_write">

Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.

```sql
EXEC google.firestore.documents.batch_write 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"writes": "{{ writes }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
</Tabs>
