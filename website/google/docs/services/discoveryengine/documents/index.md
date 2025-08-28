--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - discoveryengine
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_documents_get"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_documents_get', value: 'projects_locations_collections_data_stores_branches_documents_get' },
        { label: 'projects_locations_collections_data_stores_branches_documents_list', value: 'projects_locations_collections_data_stores_branches_documents_list' },
        { label: 'projects_locations_data_stores_branches_documents_get', value: 'projects_locations_data_stores_branches_documents_get' },
        { label: 'projects_locations_data_stores_branches_documents_list', value: 'projects_locations_data_stores_branches_documents_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_documents_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. The full resource name of the document. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/branches/&#123;branch&#125;/documents/&#123;document_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="aclInfo" /></td>
    <td><code>object</code></td>
    <td>Access control information for the document. (id: GoogleCloudDiscoveryengineV1DocumentAclInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The unstructured data linked to this document. Content can only be set and must be set if this document is under a `CONTENT_REQUIRED` data store. (id: GoogleCloudDiscoveryengineV1DocumentContent)</td>
</tr>
<tr>
    <td><CopyableCode code="derivedStructData" /></td>
    <td><code>object</code></td>
    <td>Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.</td>
</tr>
<tr>
    <td><CopyableCode code="indexStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The index status of the document. * If document is indexed successfully, the index_time field is populated. * Otherwise, if document is not indexed due to errors, the error_samples field is populated. * Otherwise, if document's index is in progress, the pending_message field is populated. (id: GoogleCloudDiscoveryengineV1DocumentIndexStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="indexTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the document was indexed. If this field is set, the document could be returned in search results. This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonData" /></td>
    <td><code>string</code></td>
    <td>The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDocumentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schema located in the same data store.</td>
</tr>
<tr>
    <td><CopyableCode code="structData" /></td>
    <td><code>object</code></td>
    <td>The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_branches_documents_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. The full resource name of the document. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/branches/&#123;branch&#125;/documents/&#123;document_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="aclInfo" /></td>
    <td><code>object</code></td>
    <td>Access control information for the document. (id: GoogleCloudDiscoveryengineV1DocumentAclInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The unstructured data linked to this document. Content can only be set and must be set if this document is under a `CONTENT_REQUIRED` data store. (id: GoogleCloudDiscoveryengineV1DocumentContent)</td>
</tr>
<tr>
    <td><CopyableCode code="derivedStructData" /></td>
    <td><code>object</code></td>
    <td>Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.</td>
</tr>
<tr>
    <td><CopyableCode code="indexStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The index status of the document. * If document is indexed successfully, the index_time field is populated. * Otherwise, if document is not indexed due to errors, the error_samples field is populated. * Otherwise, if document's index is in progress, the pending_message field is populated. (id: GoogleCloudDiscoveryengineV1DocumentIndexStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="indexTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the document was indexed. If this field is set, the document could be returned in search results. This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonData" /></td>
    <td><code>string</code></td>
    <td>The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDocumentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schema located in the same data store.</td>
</tr>
<tr>
    <td><CopyableCode code="structData" /></td>
    <td><code>object</code></td>
    <td>The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. The full resource name of the document. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/branches/&#123;branch&#125;/documents/&#123;document_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="aclInfo" /></td>
    <td><code>object</code></td>
    <td>Access control information for the document. (id: GoogleCloudDiscoveryengineV1DocumentAclInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The unstructured data linked to this document. Content can only be set and must be set if this document is under a `CONTENT_REQUIRED` data store. (id: GoogleCloudDiscoveryengineV1DocumentContent)</td>
</tr>
<tr>
    <td><CopyableCode code="derivedStructData" /></td>
    <td><code>object</code></td>
    <td>Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.</td>
</tr>
<tr>
    <td><CopyableCode code="indexStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The index status of the document. * If document is indexed successfully, the index_time field is populated. * Otherwise, if document is not indexed due to errors, the error_samples field is populated. * Otherwise, if document's index is in progress, the pending_message field is populated. (id: GoogleCloudDiscoveryengineV1DocumentIndexStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="indexTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the document was indexed. If this field is set, the document could be returned in search results. This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonData" /></td>
    <td><code>string</code></td>
    <td>The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDocumentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schema located in the same data store.</td>
</tr>
<tr>
    <td><CopyableCode code="structData" /></td>
    <td><code>object</code></td>
    <td>The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. The full resource name of the document. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/dataStores/&#123;data_store&#125;/branches/&#123;branch&#125;/documents/&#123;document_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="aclInfo" /></td>
    <td><code>object</code></td>
    <td>Access control information for the document. (id: GoogleCloudDiscoveryengineV1DocumentAclInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The unstructured data linked to this document. Content can only be set and must be set if this document is under a `CONTENT_REQUIRED` data store. (id: GoogleCloudDiscoveryengineV1DocumentContent)</td>
</tr>
<tr>
    <td><CopyableCode code="derivedStructData" /></td>
    <td><code>object</code></td>
    <td>Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.</td>
</tr>
<tr>
    <td><CopyableCode code="indexStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The index status of the document. * If document is indexed successfully, the index_time field is populated. * Otherwise, if document is not indexed due to errors, the error_samples field is populated. * Otherwise, if document's index is in progress, the pending_message field is populated. (id: GoogleCloudDiscoveryengineV1DocumentIndexStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="indexTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the document was indexed. If this field is set, the document could be returned in search results. This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonData" /></td>
    <td><code>string</code></td>
    <td>The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDocumentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schema located in the same data store.</td>
</tr>
<tr>
    <td><CopyableCode code="structData" /></td>
    <td><code>object</code></td>
    <td>The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.</td>
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
    <td><a href="#projects_locations_collections_data_stores_branches_documents_get"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Gets a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_branches_documents_list"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Gets a list of Documents.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_get"><CopyableCode code="projects_locations_data_stores_branches_documents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Gets a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_list"><CopyableCode code="projects_locations_data_stores_branches_documents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Gets a list of Documents.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_branches_documents_create"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-documentId"><code>documentId</code></a></td>
    <td>Creates a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_create"><CopyableCode code="projects_locations_data_stores_branches_documents_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-documentId"><code>documentId</code></a></td>
    <td>Creates a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_branches_documents_patch"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_patch"><CopyableCode code="projects_locations_data_stores_branches_documents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_branches_documents_delete"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Deletes a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_delete"><CopyableCode code="projects_locations_data_stores_branches_documents_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Deletes a Document.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_branches_documents_import"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td></td>
    <td>Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_branches_documents_purge"><CopyableCode code="projects_locations_collections_data_stores_branches_documents_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td></td>
    <td>Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_import"><CopyableCode code="projects_locations_data_stores_branches_documents_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td></td>
    <td>Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_branches_documents_purge"><CopyableCode code="projects_locations_data_stores_branches_documents_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td></td>
    <td>Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.</td>
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
<tr id="parameter-branchesId">
    <td><CopyableCode code="branchesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-documentId">
    <td><CopyableCode code="documentId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_documents_get"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_documents_get', value: 'projects_locations_collections_data_stores_branches_documents_get' },
        { label: 'projects_locations_collections_data_stores_branches_documents_list', value: 'projects_locations_collections_data_stores_branches_documents_list' },
        { label: 'projects_locations_data_stores_branches_documents_get', value: 'projects_locations_data_stores_branches_documents_get' },
        { label: 'projects_locations_data_stores_branches_documents_list', value: 'projects_locations_data_stores_branches_documents_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_documents_get">

Gets a Document.

```sql
SELECT
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData
FROM google.discoveryengine.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND documentsId = '{{ documentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_branches_documents_list">

Gets a list of Documents.

```sql
SELECT
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData
FROM google.discoveryengine.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_get">

Gets a Document.

```sql
SELECT
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData
FROM google.discoveryengine.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND documentsId = '{{ documentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_list">

Gets a list of Documents.

```sql
SELECT
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData
FROM google.discoveryengine.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_documents_create"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_documents_create', value: 'projects_locations_collections_data_stores_branches_documents_create' },
        { label: 'projects_locations_data_stores_branches_documents_create', value: 'projects_locations_data_stores_branches_documents_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_documents_create">

Creates a Document.

```sql
INSERT INTO google.discoveryengine.documents (
data__structData,
data__jsonData,
data__name,
data__id,
data__schemaId,
data__content,
data__parentDocumentId,
data__aclInfo,
projectsId,
locationsId,
collectionsId,
dataStoresId,
branchesId,
documentId
)
SELECT 
'{{ structData }}',
'{{ jsonData }}',
'{{ name }}',
'{{ id }}',
'{{ schemaId }}',
'{{ content }}',
'{{ parentDocumentId }}',
'{{ aclInfo }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}',
'{{ branchesId }}',
'{{ documentId }}'
RETURNING
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_create">

Creates a Document.

```sql
INSERT INTO google.discoveryengine.documents (
data__structData,
data__jsonData,
data__name,
data__id,
data__schemaId,
data__content,
data__parentDocumentId,
data__aclInfo,
projectsId,
locationsId,
dataStoresId,
branchesId,
documentId
)
SELECT 
'{{ structData }}',
'{{ jsonData }}',
'{{ name }}',
'{{ id }}',
'{{ schemaId }}',
'{{ content }}',
'{{ parentDocumentId }}',
'{{ aclInfo }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}',
'{{ branchesId }}',
'{{ documentId }}'
RETURNING
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData
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
    - name: collectionsId
      value: string
      description: Required parameter for the documents resource.
    - name: dataStoresId
      value: string
      description: Required parameter for the documents resource.
    - name: branchesId
      value: string
      description: Required parameter for the documents resource.
    - name: structData
      value: object
      description: >
        The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.
        
    - name: jsonData
      value: string
      description: >
        The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.
        
    - name: name
      value: string
      description: >
        Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
        
    - name: id
      value: string
      description: >
        Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters.
        
    - name: schemaId
      value: string
      description: >
        The identifier of the schema located in the same data store.
        
    - name: content
      value: object
      description: >
        The unstructured data linked to this document. Content can only be set and must be set if this document is under a `CONTENT_REQUIRED` data store.
        
    - name: parentDocumentId
      value: string
      description: >
        The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
        
    - name: aclInfo
      value: object
      description: >
        Access control information for the document.
        
    - name: documentId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_documents_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_documents_patch', value: 'projects_locations_collections_data_stores_branches_documents_patch' },
        { label: 'projects_locations_data_stores_branches_documents_patch', value: 'projects_locations_data_stores_branches_documents_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_documents_patch">

Updates a Document.

```sql
UPDATE google.discoveryengine.documents
SET 
data__structData = '{{ structData }}',
data__jsonData = '{{ jsonData }}',
data__name = '{{ name }}',
data__id = '{{ id }}',
data__schemaId = '{{ schemaId }}',
data__content = '{{ content }}',
data__parentDocumentId = '{{ parentDocumentId }}',
data__aclInfo = '{{ aclInfo }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND documentsId = '{{ documentsId }}' --required
AND allowMissing = {{ allowMissing}}
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData;
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_patch">

Updates a Document.

```sql
UPDATE google.discoveryengine.documents
SET 
data__structData = '{{ structData }}',
data__jsonData = '{{ jsonData }}',
data__name = '{{ name }}',
data__id = '{{ id }}',
data__schemaId = '{{ schemaId }}',
data__content = '{{ content }}',
data__parentDocumentId = '{{ parentDocumentId }}',
data__aclInfo = '{{ aclInfo }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND documentsId = '{{ documentsId }}' --required
AND allowMissing = {{ allowMissing}}
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
aclInfo,
content,
derivedStructData,
indexStatus,
indexTime,
jsonData,
parentDocumentId,
schemaId,
structData;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_documents_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_documents_delete', value: 'projects_locations_collections_data_stores_branches_documents_delete' },
        { label: 'projects_locations_data_stores_branches_documents_delete', value: 'projects_locations_data_stores_branches_documents_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_documents_delete">

Deletes a Document.

```sql
DELETE FROM google.discoveryengine.documents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND documentsId = '{{ documentsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_delete">

Deletes a Document.

```sql
DELETE FROM google.discoveryengine.documents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND documentsId = '{{ documentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_branches_documents_import"
    values={[
        { label: 'projects_locations_collections_data_stores_branches_documents_import', value: 'projects_locations_collections_data_stores_branches_documents_import' },
        { label: 'projects_locations_collections_data_stores_branches_documents_purge', value: 'projects_locations_collections_data_stores_branches_documents_purge' },
        { label: 'projects_locations_data_stores_branches_documents_import', value: 'projects_locations_data_stores_branches_documents_import' },
        { label: 'projects_locations_data_stores_branches_documents_purge', value: 'projects_locations_data_stores_branches_documents_purge' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_branches_documents_import">

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.

```sql
EXEC google.discoveryengine.documents.projects_locations_collections_data_stores_branches_documents_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@branchesId='{{ branchesId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"gcsSource": "{{ gcsSource }}", 
"bigquerySource": "{{ bigquerySource }}", 
"fhirStoreSource": "{{ fhirStoreSource }}", 
"spannerSource": "{{ spannerSource }}", 
"cloudSqlSource": "{{ cloudSqlSource }}", 
"firestoreSource": "{{ firestoreSource }}", 
"alloyDbSource": "{{ alloyDbSource }}", 
"bigtableSource": "{{ bigtableSource }}", 
"errorConfig": "{{ errorConfig }}", 
"reconciliationMode": "{{ reconciliationMode }}", 
"updateMask": "{{ updateMask }}", 
"autoGenerateIds": {{ autoGenerateIds }}, 
"idField": "{{ idField }}", 
"forceRefreshContent": {{ forceRefreshContent }}
}';
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_branches_documents_purge">

Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.

```sql
EXEC google.discoveryengine.documents.projects_locations_collections_data_stores_branches_documents_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@branchesId='{{ branchesId }}' --required 
@@json=
'{
"gcsSource": "{{ gcsSource }}", 
"inlineSource": "{{ inlineSource }}", 
"filter": "{{ filter }}", 
"errorConfig": "{{ errorConfig }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_import">

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.

```sql
EXEC google.discoveryengine.documents.projects_locations_data_stores_branches_documents_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@branchesId='{{ branchesId }}' --required 
@@json=
'{
"inlineSource": "{{ inlineSource }}", 
"gcsSource": "{{ gcsSource }}", 
"bigquerySource": "{{ bigquerySource }}", 
"fhirStoreSource": "{{ fhirStoreSource }}", 
"spannerSource": "{{ spannerSource }}", 
"cloudSqlSource": "{{ cloudSqlSource }}", 
"firestoreSource": "{{ firestoreSource }}", 
"alloyDbSource": "{{ alloyDbSource }}", 
"bigtableSource": "{{ bigtableSource }}", 
"errorConfig": "{{ errorConfig }}", 
"reconciliationMode": "{{ reconciliationMode }}", 
"updateMask": "{{ updateMask }}", 
"autoGenerateIds": {{ autoGenerateIds }}, 
"idField": "{{ idField }}", 
"forceRefreshContent": {{ forceRefreshContent }}
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_branches_documents_purge">

Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.

```sql
EXEC google.discoveryengine.documents.projects_locations_data_stores_branches_documents_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@branchesId='{{ branchesId }}' --required 
@@json=
'{
"gcsSource": "{{ gcsSource }}", 
"inlineSource": "{{ inlineSource }}", 
"filter": "{{ filter }}", 
"errorConfig": "{{ errorConfig }}", 
"force": {{ force }}
}';
```
</TabItem>
</Tabs>
