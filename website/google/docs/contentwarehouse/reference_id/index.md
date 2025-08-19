--- 
title: reference_id
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_id
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

Creates, updates, deletes, gets or lists a <code>reference_id</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reference_id</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contentwarehouse.reference_id" /></td></tr>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-referenceIdId"><code>referenceIdId</code></a></td>
    <td></td>
    <td>Gets a document. Returns NOT_FOUND if the document does not exist.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-referenceIdId"><code>referenceIdId</code></a></td>
    <td></td>
    <td>Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-referenceIdId"><code>referenceIdId</code></a></td>
    <td></td>
    <td>Deletes a document. Returns NOT_FOUND if the document does not exist.</td>
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
<tr id="parameter-referenceIdId">
    <td><CopyableCode code="referenceIdId" /></td>
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
FROM google.contentwarehouse.reference_id
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND referenceIdId = '{{ referenceIdId }}' -- required;
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
UPDATE google.contentwarehouse.reference_id
SET 
data__document = '{{ document }}',
data__updateOptions = '{{ updateOptions }}',
data__requestMetadata = '{{ requestMetadata }}',
data__cloudAiDocumentOption = '{{ cloudAiDocumentOption }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND referenceIdId = '{{ referenceIdId }}' --required
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
DELETE FROM google.contentwarehouse.reference_id
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND referenceIdId = '{{ referenceIdId }}' --required;
```
</TabItem>
</Tabs>
