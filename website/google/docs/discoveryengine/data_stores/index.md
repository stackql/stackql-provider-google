--- 
title: data_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - data_stores
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

Creates, updates, deletes, gets or lists a <code>data_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.data_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_get"
    values={[
        { label: 'projects_locations_collections_data_stores_get', value: 'projects_locations_collections_data_stores_get' },
        { label: 'projects_locations_collections_data_stores_list', value: 'projects_locations_collections_data_stores_list' },
        { label: 'projects_locations_data_stores_get', value: 'projects_locations_data_stores_get' },
        { label: 'projects_locations_data_stores_list', value: 'projects_locations_data_stores_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_get">

DataStore captures global settings and configs at the DataStore level.

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
    <td>Immutable. Identifier. The full resource name of the data store. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/dataStores/&#123;data_store_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="aclEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether data in the DataStore has ACL information. If set to `true`, the source data must have ACL. ACL will be ingested when data is ingested by DocumentService.ImportDocuments methods. When ACL is enabled for the DataStore, Document can't be accessed by calling DocumentService.GetDocument or DocumentService.ListDocuments. Currently ACL is only supported in `GENERIC` industry vertical with non-`PUBLIC_WEBSITE` content config.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSiteSearchConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for advanced site search. (id: GoogleCloudDiscoveryengineV1AdvancedSiteSearchConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="billingEstimation" /></td>
    <td><code>object</code></td>
    <td>Output only. Data size estimation for billing. (id: GoogleCloudDiscoveryengineV1DataStoreBillingEstimation)</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations used to enable CMEK data encryption with Cloud KMS keys. (id: GoogleCloudDiscoveryengineV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="contentConfig" /></td>
    <td><code>string</code></td>
    <td>Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the DataStore was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSchemaId" /></td>
    <td><code>string</code></td>
    <td>Output only. The id of the default Schema associated to this data store.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="documentProcessingConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Document understanding and enrichment. (id: GoogleCloudDiscoveryengineV1DocumentProcessingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="healthcareFhirConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for `HEALTHCARE_FHIR` vertical. (id: GoogleCloudDiscoveryengineV1HealthcareFhirConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityMappingStore" /></td>
    <td><code>string</code></td>
    <td>Immutable. The fully qualified resource name of the associated IdentityMappingStore. This field can only be set for acl_enabled DataStores with `THIRD_PARTY` or `GSUITE` IdP. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/identityMappingStores/&#123;identity_mapping_store&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Immutable. The industry vertical that the data store registers.</td>
</tr>
<tr>
    <td><CopyableCode code="isInfobotFaqDataStore" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set, this DataStore is an Infobot FAQ DataStore.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Input only. The KMS key to be used to protect this DataStore at creation time. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the DataStore will be protected by the KMS key, as indicated in the cmek_config field.</td>
</tr>
<tr>
    <td><CopyableCode code="servingConfigDataStore" /></td>
    <td><code>object</code></td>
    <td>Optional. Stores serving config at DataStore level. (id: GoogleCloudDiscoveryengineV1DataStoreServingConfigDataStore)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionTypes" /></td>
    <td><code>array</code></td>
    <td>The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.</td>
</tr>
<tr>
    <td><CopyableCode code="startingSchema" /></td>
    <td><code>object</code></td>
    <td>The start schema to use for this DataStore when provisioning it. If unset, a default vertical specialized schema will be used. This field is only used by CreateDataStore API, and will be ignored if used in other APIs. This field will be omitted from all API responses including CreateDataStore API. To retrieve a schema of a DataStore, use SchemaService.GetSchema API instead. The provided schema will be validated against certain rules on schema. Learn more from [this doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema). (id: GoogleCloudDiscoveryengineV1Schema)</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceConfig" /></td>
    <td><code>object</code></td>
    <td>Config to store data store type configuration for workspace data. This must be set when DataStore.content_config is set as DataStore.ContentConfig.GOOGLE_WORKSPACE. (id: GoogleCloudDiscoveryengineV1WorkspaceConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_list">

Response message for DataStoreService.ListDataStores method.

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
    <td><CopyableCode code="dataStores" /></td>
    <td><code>array</code></td>
    <td>All the customer's DataStores.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as ListDataStoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_get">

DataStore captures global settings and configs at the DataStore level.

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
    <td>Immutable. Identifier. The full resource name of the data store. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/dataStores/&#123;data_store_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="aclEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Immutable. Whether data in the DataStore has ACL information. If set to `true`, the source data must have ACL. ACL will be ingested when data is ingested by DocumentService.ImportDocuments methods. When ACL is enabled for the DataStore, Document can't be accessed by calling DocumentService.GetDocument or DocumentService.ListDocuments. Currently ACL is only supported in `GENERIC` industry vertical with non-`PUBLIC_WEBSITE` content config.</td>
</tr>
<tr>
    <td><CopyableCode code="advancedSiteSearchConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for advanced site search. (id: GoogleCloudDiscoveryengineV1AdvancedSiteSearchConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="billingEstimation" /></td>
    <td><code>object</code></td>
    <td>Output only. Data size estimation for billing. (id: GoogleCloudDiscoveryengineV1DataStoreBillingEstimation)</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations used to enable CMEK data encryption with Cloud KMS keys. (id: GoogleCloudDiscoveryengineV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="contentConfig" /></td>
    <td><code>string</code></td>
    <td>Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the DataStore was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSchemaId" /></td>
    <td><code>string</code></td>
    <td>Output only. The id of the default Schema associated to this data store.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="documentProcessingConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Document understanding and enrichment. (id: GoogleCloudDiscoveryengineV1DocumentProcessingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="healthcareFhirConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for `HEALTHCARE_FHIR` vertical. (id: GoogleCloudDiscoveryengineV1HealthcareFhirConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityMappingStore" /></td>
    <td><code>string</code></td>
    <td>Immutable. The fully qualified resource name of the associated IdentityMappingStore. This field can only be set for acl_enabled DataStores with `THIRD_PARTY` or `GSUITE` IdP. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/identityMappingStores/&#123;identity_mapping_store&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Immutable. The industry vertical that the data store registers.</td>
</tr>
<tr>
    <td><CopyableCode code="isInfobotFaqDataStore" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set, this DataStore is an Infobot FAQ DataStore.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Input only. The KMS key to be used to protect this DataStore at creation time. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the DataStore will be protected by the KMS key, as indicated in the cmek_config field.</td>
</tr>
<tr>
    <td><CopyableCode code="servingConfigDataStore" /></td>
    <td><code>object</code></td>
    <td>Optional. Stores serving config at DataStore level. (id: GoogleCloudDiscoveryengineV1DataStoreServingConfigDataStore)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionTypes" /></td>
    <td><code>array</code></td>
    <td>The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.</td>
</tr>
<tr>
    <td><CopyableCode code="startingSchema" /></td>
    <td><code>object</code></td>
    <td>The start schema to use for this DataStore when provisioning it. If unset, a default vertical specialized schema will be used. This field is only used by CreateDataStore API, and will be ignored if used in other APIs. This field will be omitted from all API responses including CreateDataStore API. To retrieve a schema of a DataStore, use SchemaService.GetSchema API instead. The provided schema will be validated against certain rules on schema. Learn more from [this doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema). (id: GoogleCloudDiscoveryengineV1Schema)</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceConfig" /></td>
    <td><code>object</code></td>
    <td>Config to store data store type configuration for workspace data. This must be set when DataStore.content_config is set as DataStore.ContentConfig.GOOGLE_WORKSPACE. (id: GoogleCloudDiscoveryengineV1WorkspaceConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_list">

Response message for DataStoreService.ListDataStores method.

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
    <td><CopyableCode code="dataStores" /></td>
    <td><code>array</code></td>
    <td>All the customer's DataStores.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as ListDataStoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#projects_locations_collections_data_stores_get"><CopyableCode code="projects_locations_collections_data_stores_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Gets a DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_list"><CopyableCode code="projects_locations_collections_data_stores_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all the DataStores associated with the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_get"><CopyableCode code="projects_locations_data_stores_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Gets a DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_list"><CopyableCode code="projects_locations_data_stores_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all the DataStores associated with the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_create"><CopyableCode code="projects_locations_collections_data_stores_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-cmekConfigName"><code>cmekConfigName</code></a>, <a href="#parameter-disableCmek"><code>disableCmek</code></a>, <a href="#parameter-dataStoreId"><code>dataStoreId</code></a>, <a href="#parameter-createAdvancedSiteSearch"><code>createAdvancedSiteSearch</code></a>, <a href="#parameter-skipDefaultSchemaCreation"><code>skipDefaultSchemaCreation</code></a></td>
    <td>Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_create"><CopyableCode code="projects_locations_data_stores_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-cmekConfigName"><code>cmekConfigName</code></a>, <a href="#parameter-disableCmek"><code>disableCmek</code></a>, <a href="#parameter-dataStoreId"><code>dataStoreId</code></a>, <a href="#parameter-createAdvancedSiteSearch"><code>createAdvancedSiteSearch</code></a>, <a href="#parameter-skipDefaultSchemaCreation"><code>skipDefaultSchemaCreation</code></a></td>
    <td>Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_patch"><CopyableCode code="projects_locations_collections_data_stores_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a DataStore</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_patch"><CopyableCode code="projects_locations_data_stores_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a DataStore</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_delete"><CopyableCode code="projects_locations_collections_data_stores_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Deletes a DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_delete"><CopyableCode code="projects_locations_data_stores_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Deletes a DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_complete_query"><CopyableCode code="projects_locations_collections_data_stores_complete_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-queryModel"><code>queryModel</code></a>, <a href="#parameter-userPseudoId"><code>userPseudoId</code></a>, <a href="#parameter-includeTailSuggestions"><code>includeTailSuggestions</code></a></td>
    <td>Completes the specified user input with keyword suggestions.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_train_custom_model"><CopyableCode code="projects_locations_collections_data_stores_train_custom_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td></td>
    <td>Trains a custom model.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_complete_query"><CopyableCode code="projects_locations_data_stores_complete_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-queryModel"><code>queryModel</code></a>, <a href="#parameter-userPseudoId"><code>userPseudoId</code></a>, <a href="#parameter-includeTailSuggestions"><code>includeTailSuggestions</code></a></td>
    <td>Completes the specified user input with keyword suggestions.</td>
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
<tr id="parameter-cmekConfigName">
    <td><CopyableCode code="cmekConfigName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-createAdvancedSiteSearch">
    <td><CopyableCode code="createAdvancedSiteSearch" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoreId">
    <td><CopyableCode code="dataStoreId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-disableCmek">
    <td><CopyableCode code="disableCmek" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeTailSuggestions">
    <td><CopyableCode code="includeTailSuggestions" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-queryModel">
    <td><CopyableCode code="queryModel" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-skipDefaultSchemaCreation">
    <td><CopyableCode code="skipDefaultSchemaCreation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-userPseudoId">
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_get"
    values={[
        { label: 'projects_locations_collections_data_stores_get', value: 'projects_locations_collections_data_stores_get' },
        { label: 'projects_locations_collections_data_stores_list', value: 'projects_locations_collections_data_stores_list' },
        { label: 'projects_locations_data_stores_get', value: 'projects_locations_data_stores_get' },
        { label: 'projects_locations_data_stores_list', value: 'projects_locations_data_stores_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_get">

Gets a DataStore.

```sql
SELECT
name,
aclEnabled,
advancedSiteSearchConfig,
billingEstimation,
cmekConfig,
contentConfig,
createTime,
defaultSchemaId,
displayName,
documentProcessingConfig,
healthcareFhirConfig,
identityMappingStore,
industryVertical,
isInfobotFaqDataStore,
kmsKeyName,
servingConfigDataStore,
solutionTypes,
startingSchema,
workspaceConfig
FROM google.discoveryengine.data_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_list">

Lists all the DataStores associated with the project.

```sql
SELECT
dataStores,
nextPageToken
FROM google.discoveryengine.data_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_get">

Gets a DataStore.

```sql
SELECT
name,
aclEnabled,
advancedSiteSearchConfig,
billingEstimation,
cmekConfig,
contentConfig,
createTime,
defaultSchemaId,
displayName,
documentProcessingConfig,
healthcareFhirConfig,
identityMappingStore,
industryVertical,
isInfobotFaqDataStore,
kmsKeyName,
servingConfigDataStore,
solutionTypes,
startingSchema,
workspaceConfig
FROM google.discoveryengine.data_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_list">

Lists all the DataStores associated with the project.

```sql
SELECT
dataStores,
nextPageToken
FROM google.discoveryengine.data_stores
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
    defaultValue="projects_locations_collections_data_stores_create"
    values={[
        { label: 'projects_locations_collections_data_stores_create', value: 'projects_locations_collections_data_stores_create' },
        { label: 'projects_locations_data_stores_create', value: 'projects_locations_data_stores_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_create">

Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.

```sql
INSERT INTO google.discoveryengine.data_stores (
data__name,
data__displayName,
data__industryVertical,
data__solutionTypes,
data__contentConfig,
data__advancedSiteSearchConfig,
data__kmsKeyName,
data__aclEnabled,
data__workspaceConfig,
data__documentProcessingConfig,
data__startingSchema,
data__healthcareFhirConfig,
data__servingConfigDataStore,
data__identityMappingStore,
data__isInfobotFaqDataStore,
projectsId,
locationsId,
collectionsId,
cmekConfigName,
disableCmek,
dataStoreId,
createAdvancedSiteSearch,
skipDefaultSchemaCreation
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ industryVertical }}',
'{{ solutionTypes }}',
'{{ contentConfig }}',
'{{ advancedSiteSearchConfig }}',
'{{ kmsKeyName }}',
{{ aclEnabled }},
'{{ workspaceConfig }}',
'{{ documentProcessingConfig }}',
'{{ startingSchema }}',
'{{ healthcareFhirConfig }}',
'{{ servingConfigDataStore }}',
'{{ identityMappingStore }}',
{{ isInfobotFaqDataStore }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ cmekConfigName }}',
'{{ disableCmek }}',
'{{ dataStoreId }}',
'{{ createAdvancedSiteSearch }}',
'{{ skipDefaultSchemaCreation }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_create">

Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.

```sql
INSERT INTO google.discoveryengine.data_stores (
data__name,
data__displayName,
data__industryVertical,
data__solutionTypes,
data__contentConfig,
data__advancedSiteSearchConfig,
data__kmsKeyName,
data__aclEnabled,
data__workspaceConfig,
data__documentProcessingConfig,
data__startingSchema,
data__healthcareFhirConfig,
data__servingConfigDataStore,
data__identityMappingStore,
data__isInfobotFaqDataStore,
projectsId,
locationsId,
cmekConfigName,
disableCmek,
dataStoreId,
createAdvancedSiteSearch,
skipDefaultSchemaCreation
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ industryVertical }}',
'{{ solutionTypes }}',
'{{ contentConfig }}',
'{{ advancedSiteSearchConfig }}',
'{{ kmsKeyName }}',
{{ aclEnabled }},
'{{ workspaceConfig }}',
'{{ documentProcessingConfig }}',
'{{ startingSchema }}',
'{{ healthcareFhirConfig }}',
'{{ servingConfigDataStore }}',
'{{ identityMappingStore }}',
{{ isInfobotFaqDataStore }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ cmekConfigName }}',
'{{ disableCmek }}',
'{{ dataStoreId }}',
'{{ createAdvancedSiteSearch }}',
'{{ skipDefaultSchemaCreation }}'
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
- name: data_stores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_stores resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_stores resource.
    - name: collectionsId
      value: string
      description: Required parameter for the data_stores resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
        
    - name: displayName
      value: string
      description: >
        Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
        
    - name: industryVertical
      value: string
      description: >
        Immutable. The industry vertical that the data store registers.
        
      valid_values: ['INDUSTRY_VERTICAL_UNSPECIFIED', 'GENERIC', 'MEDIA', 'HEALTHCARE_FHIR']
    - name: solutionTypes
      value: array
      description: >
        The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.
        
    - name: contentConfig
      value: string
      description: >
        Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.
        
      valid_values: ['CONTENT_CONFIG_UNSPECIFIED', 'NO_CONTENT', 'CONTENT_REQUIRED', 'PUBLIC_WEBSITE', 'GOOGLE_WORKSPACE']
    - name: advancedSiteSearchConfig
      value: object
      description: >
        Optional. Configuration for advanced site search.
        
    - name: kmsKeyName
      value: string
      description: >
        Input only. The KMS key to be used to protect this DataStore at creation time. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the DataStore will be protected by the KMS key, as indicated in the cmek_config field.
        
    - name: aclEnabled
      value: boolean
      description: >
        Immutable. Whether data in the DataStore has ACL information. If set to `true`, the source data must have ACL. ACL will be ingested when data is ingested by DocumentService.ImportDocuments methods. When ACL is enabled for the DataStore, Document can't be accessed by calling DocumentService.GetDocument or DocumentService.ListDocuments. Currently ACL is only supported in `GENERIC` industry vertical with non-`PUBLIC_WEBSITE` content config.
        
    - name: workspaceConfig
      value: object
      description: >
        Config to store data store type configuration for workspace data. This must be set when DataStore.content_config is set as DataStore.ContentConfig.GOOGLE_WORKSPACE.
        
    - name: documentProcessingConfig
      value: object
      description: >
        Configuration for Document understanding and enrichment.
        
    - name: startingSchema
      value: object
      description: >
        The start schema to use for this DataStore when provisioning it. If unset, a default vertical specialized schema will be used. This field is only used by CreateDataStore API, and will be ignored if used in other APIs. This field will be omitted from all API responses including CreateDataStore API. To retrieve a schema of a DataStore, use SchemaService.GetSchema API instead. The provided schema will be validated against certain rules on schema. Learn more from [this doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema).
        
    - name: healthcareFhirConfig
      value: object
      description: >
        Optional. Configuration for `HEALTHCARE_FHIR` vertical.
        
    - name: servingConfigDataStore
      value: object
      description: >
        Optional. Stores serving config at DataStore level.
        
    - name: identityMappingStore
      value: string
      description: >
        Immutable. The fully qualified resource name of the associated IdentityMappingStore. This field can only be set for acl_enabled DataStores with `THIRD_PARTY` or `GSUITE` IdP. Format: `projects/{project}/locations/{location}/identityMappingStores/{identity_mapping_store}`.
        
    - name: isInfobotFaqDataStore
      value: boolean
      description: >
        Optional. If set, this DataStore is an Infobot FAQ DataStore.
        
    - name: cmekConfigName
      value: string
    - name: disableCmek
      value: boolean
    - name: dataStoreId
      value: string
    - name: createAdvancedSiteSearch
      value: boolean
    - name: skipDefaultSchemaCreation
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_patch', value: 'projects_locations_collections_data_stores_patch' },
        { label: 'projects_locations_data_stores_patch', value: 'projects_locations_data_stores_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_patch">

Updates a DataStore

```sql
UPDATE google.discoveryengine.data_stores
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__industryVertical = '{{ industryVertical }}',
data__solutionTypes = '{{ solutionTypes }}',
data__contentConfig = '{{ contentConfig }}',
data__advancedSiteSearchConfig = '{{ advancedSiteSearchConfig }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__aclEnabled = {{ aclEnabled }},
data__workspaceConfig = '{{ workspaceConfig }}',
data__documentProcessingConfig = '{{ documentProcessingConfig }}',
data__startingSchema = '{{ startingSchema }}',
data__healthcareFhirConfig = '{{ healthcareFhirConfig }}',
data__servingConfigDataStore = '{{ servingConfigDataStore }}',
data__identityMappingStore = '{{ identityMappingStore }}',
data__isInfobotFaqDataStore = {{ isInfobotFaqDataStore }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
aclEnabled,
advancedSiteSearchConfig,
billingEstimation,
cmekConfig,
contentConfig,
createTime,
defaultSchemaId,
displayName,
documentProcessingConfig,
healthcareFhirConfig,
identityMappingStore,
industryVertical,
isInfobotFaqDataStore,
kmsKeyName,
servingConfigDataStore,
solutionTypes,
startingSchema,
workspaceConfig;
```
</TabItem>
<TabItem value="projects_locations_data_stores_patch">

Updates a DataStore

```sql
UPDATE google.discoveryengine.data_stores
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__industryVertical = '{{ industryVertical }}',
data__solutionTypes = '{{ solutionTypes }}',
data__contentConfig = '{{ contentConfig }}',
data__advancedSiteSearchConfig = '{{ advancedSiteSearchConfig }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__aclEnabled = {{ aclEnabled }},
data__workspaceConfig = '{{ workspaceConfig }}',
data__documentProcessingConfig = '{{ documentProcessingConfig }}',
data__startingSchema = '{{ startingSchema }}',
data__healthcareFhirConfig = '{{ healthcareFhirConfig }}',
data__servingConfigDataStore = '{{ servingConfigDataStore }}',
data__identityMappingStore = '{{ identityMappingStore }}',
data__isInfobotFaqDataStore = {{ isInfobotFaqDataStore }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
aclEnabled,
advancedSiteSearchConfig,
billingEstimation,
cmekConfig,
contentConfig,
createTime,
defaultSchemaId,
displayName,
documentProcessingConfig,
healthcareFhirConfig,
identityMappingStore,
industryVertical,
isInfobotFaqDataStore,
kmsKeyName,
servingConfigDataStore,
solutionTypes,
startingSchema,
workspaceConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_delete', value: 'projects_locations_collections_data_stores_delete' },
        { label: 'projects_locations_data_stores_delete', value: 'projects_locations_data_stores_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_delete">

Deletes a DataStore.

```sql
DELETE FROM google.discoveryengine.data_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_data_stores_delete">

Deletes a DataStore.

```sql
DELETE FROM google.discoveryengine.data_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_stores_complete_query"
    values={[
        { label: 'projects_locations_collections_data_stores_complete_query', value: 'projects_locations_collections_data_stores_complete_query' },
        { label: 'projects_locations_collections_data_stores_train_custom_model', value: 'projects_locations_collections_data_stores_train_custom_model' },
        { label: 'projects_locations_data_stores_complete_query', value: 'projects_locations_data_stores_complete_query' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_complete_query">

Completes the specified user input with keyword suggestions.

```sql
EXEC google.discoveryengine.data_stores.projects_locations_collections_data_stores_complete_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@query='{{ query }}', 
@queryModel='{{ queryModel }}', 
@userPseudoId='{{ userPseudoId }}', 
@includeTailSuggestions={{ includeTailSuggestions }};
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_train_custom_model">

Trains a custom model.

```sql
EXEC google.discoveryengine.data_stores.projects_locations_collections_data_stores_train_custom_model 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required 
@@json=
'{
"gcsTrainingInput": "{{ gcsTrainingInput }}", 
"modelType": "{{ modelType }}", 
"errorConfig": "{{ errorConfig }}", 
"modelId": "{{ modelId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_data_stores_complete_query">

Completes the specified user input with keyword suggestions.

```sql
EXEC google.discoveryengine.data_stores.projects_locations_data_stores_complete_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@query='{{ query }}', 
@queryModel='{{ queryModel }}', 
@userPseudoId='{{ userPseudoId }}', 
@includeTailSuggestions={{ includeTailSuggestions }};
```
</TabItem>
</Tabs>
