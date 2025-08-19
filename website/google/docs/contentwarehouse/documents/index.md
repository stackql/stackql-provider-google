--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - contentwarehouse
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.contentwarehouse.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Defines the structure for content warehouse document proto.

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
    <td>The resource name of the document. Format: projects/&#123;project_number&#125;/locations/&#123;location&#125;/documents/&#123;document_id&#125;. The name is ignored when creating a document.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudAiDocument" /></td>
    <td><code>object</code></td>
    <td>Document AI format to save the structured content, including OCR. (id: GoogleCloudDocumentaiV1Document)</td>
</tr>
<tr>
    <td><CopyableCode code="contentCategory" /></td>
    <td><code>string</code></td>
    <td>Indicates the category (image, audio, video etc.) of the original content.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the document is created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>The user who creates the document.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the document given by the user. This name will be displayed in the UI. Customer can populate this field with the name of the document. This differs from the 'title' field as 'title' is optional and stores the top heading in the document.</td>
</tr>
<tr>
    <td><CopyableCode code="displayUri" /></td>
    <td><code>string</code></td>
    <td>Uri to display the document, for example, in the UI.</td>
</tr>
<tr>
    <td><CopyableCode code="dispositionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If linked to a Collection with RetentionPolicy, the date when the document becomes mutable.</td>
</tr>
<tr>
    <td><CopyableCode code="documentSchemaName" /></td>
    <td><code>string</code></td>
    <td>The Document schema name. Format: projects/&#123;project_number&#125;/locations/&#123;location&#125;/documentSchemas/&#123;document_schema_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="inlineRawDocument" /></td>
    <td><code>string (byte)</code></td>
    <td>Raw document content.</td>
</tr>
<tr>
    <td><CopyableCode code="legalHold" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the document has a legal hold on it.</td>
</tr>
<tr>
    <td><CopyableCode code="plainText" /></td>
    <td><code>string</code></td>
    <td>Other document format, such as PPTX, XLXS</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>List of values that are user supplied metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="rawDocumentFileType" /></td>
    <td><code>string</code></td>
    <td>This is used when DocAI was not used to load the document and parsing/ extracting is needed for the inline_raw_document. For example, if inline_raw_document is the byte representation of a PDF file, then this should be set to: RAW_DOCUMENT_FILE_TYPE_PDF.</td>
</tr>
<tr>
    <td><CopyableCode code="rawDocumentPath" /></td>
    <td><code>string</code></td>
    <td>Raw document file in Cloud Storage path.</td>
</tr>
<tr>
    <td><CopyableCode code="referenceId" /></td>
    <td><code>string</code></td>
    <td>The reference ID set by customers. Must be unique per project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="textExtractionDisabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, text extraction will not be performed.</td>
</tr>
<tr>
    <td><CopyableCode code="textExtractionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, text extraction will be performed.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title that describes the document. This can be the top heading or text that describes the document.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the document is last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updater" /></td>
    <td><code>string</code></td>
    <td>The user who lastly updates the document.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Gets a document. Returns NOT_FOUND if the document does not exist.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a document.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Deletes a document. Returns NOT_FOUND if the document does not exist.</td>
</tr>
<tr>
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Lock the document so the document cannot be updated by other users.</td>
</tr>
<tr>
    <td><a href="#linked_targets"><CopyableCode code="linked_targets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Return all target document-links from the document.</td>
</tr>
<tr>
    <td><a href="#linked_sources"><CopyableCode code="linked_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Return all source document-links from the document.</td>
</tr>
<tr>
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Searches for documents using provided SearchDocumentsRequest. This call only returns documents that the caller has permission to search against.</td>
</tr>
<tr>
    <td><a href="#set_acl"><CopyableCode code="set_acl" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Sets the access control policy for a resource. Replaces any existing policy.</td>
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
<tr id="parameter-documentsId">
    <td><CopyableCode code="documentsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets a document. Returns NOT_FOUND if the document does not exist.

```sql
SELECT
name,
cloudAiDocument,
contentCategory,
createTime,
creator,
displayName,
displayUri,
dispositionTime,
documentSchemaName,
inlineRawDocument,
legalHold,
plainText,
properties,
rawDocumentFileType,
rawDocumentPath,
referenceId,
textExtractionDisabled,
textExtractionEnabled,
title,
updateTime,
updater
FROM google.contentwarehouse.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND documentsId = '{{ documentsId }}' -- required;
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

Creates a document.

```sql
INSERT INTO google.contentwarehouse.documents (
data__cloudAiDocumentOption,
data__createMask,
data__policy,
data__document,
data__requestMetadata,
projectsId,
locationsId
)
SELECT 
'{{ cloudAiDocumentOption }}',
'{{ createMask }}',
'{{ policy }}',
'{{ document }}',
'{{ requestMetadata }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
document,
longRunningOperations,
metadata,
ruleEngineOutput
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
    - name: locationsId
      value: string
      description: Required parameter for the documents resource.
    - name: cloudAiDocumentOption
      value: object
      description: >
        Request Option for processing Cloud AI Document in Document Warehouse. This field offers limited support for mapping entities from Cloud AI Document to Warehouse Document. Please consult with product team before using this field and other available options.
        
    - name: createMask
      value: string
      description: >
        Field mask for creating Document fields. If mask path is empty, it means all fields are masked. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
        
    - name: policy
      value: object
      description: >
        Default document policy during creation. This refers to an Identity and Access (IAM) policy, which specifies access controls for the Document. Conditions defined in the policy will be ignored.
        
    - name: document
      value: object
      description: >
        Required. The document to create.
        
    - name: requestMetadata
      value: object
      description: >
        The meta information collected about the end user, used to enforce access control for the service.
        
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

Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.

```sql
UPDATE google.contentwarehouse.documents
SET 
data__document = '{{ document }}',
data__updateOptions = '{{ updateOptions }}',
data__requestMetadata = '{{ requestMetadata }}',
data__cloudAiDocumentOption = '{{ cloudAiDocumentOption }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND documentsId = '{{ documentsId }}' --required
RETURNING
document,
metadata,
ruleEngineOutput;
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

Deletes a document. Returns NOT_FOUND if the document does not exist.

```sql
DELETE FROM google.contentwarehouse.documents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND documentsId = '{{ documentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="lock"
    values={[
        { label: 'lock', value: 'lock' },
        { label: 'linked_targets', value: 'linked_targets' },
        { label: 'linked_sources', value: 'linked_sources' },
        { label: 'search', value: 'search' },
        { label: 'set_acl', value: 'set_acl' }
    ]}
>
<TabItem value="lock">

Lock the document so the document cannot be updated by other users.

```sql
EXEC google.contentwarehouse.documents.lock 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@documentsId='{{ documentsId }}' --required 
@@json=
'{
"lockingUser": "{{ lockingUser }}", 
"collectionId": "{{ collectionId }}"
}';
```
</TabItem>
<TabItem value="linked_targets">

Return all target document-links from the document.

```sql
EXEC google.contentwarehouse.documents.linked_targets 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@documentsId='{{ documentsId }}' --required 
@@json=
'{
"requestMetadata": "{{ requestMetadata }}"
}';
```
</TabItem>
<TabItem value="linked_sources">

Return all source document-links from the document.

```sql
EXEC google.contentwarehouse.documents.linked_sources 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@documentsId='{{ documentsId }}' --required 
@@json=
'{
"requestMetadata": "{{ requestMetadata }}", 
"pageToken": "{{ pageToken }}", 
"pageSize": {{ pageSize }}
}';
```
</TabItem>
<TabItem value="search">

Searches for documents using provided SearchDocumentsRequest. This call only returns documents that the caller has permission to search against.

```sql
EXEC google.contentwarehouse.documents.search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"orderBy": "{{ orderBy }}", 
"qaSizeLimit": {{ qaSizeLimit }}, 
"offset": {{ offset }}, 
"pageSize": {{ pageSize }}, 
"requestMetadata": "{{ requestMetadata }}", 
"requireTotalSize": {{ requireTotalSize }}, 
"pageToken": "{{ pageToken }}", 
"totalResultSize": "{{ totalResultSize }}", 
"documentQuery": "{{ documentQuery }}", 
"histogramQueries": "{{ histogramQueries }}"
}';
```
</TabItem>
<TabItem value="set_acl">

Sets the access control policy for a resource. Replaces any existing policy.

```sql
EXEC google.contentwarehouse.documents.set_acl 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@documentsId='{{ documentsId }}' --required 
@@json=
'{
"requestMetadata": "{{ requestMetadata }}", 
"projectOwner": {{ projectOwner }}, 
"policy": "{{ policy }}"
}';
```
</TabItem>
</Tabs>
