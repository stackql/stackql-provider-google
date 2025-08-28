--- 
title: dicom_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - dicom_stores
  - healthcare
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

Creates, updates, deletes, gets or lists a <code>dicom_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dicom_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.healthcare.dicom_stores" /></td></tr>
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
    <td>Identifier. Resource name of the DICOM store, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/dicomStores/&#123;dicom_store_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Notification destination for new DICOM instances. Supplied by the client. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies where and whether to send notifications upon changes to a DICOM store.</td>
</tr>
<tr>
    <td><CopyableCode code="streamConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.</td>
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
    <td>Identifier. Resource name of the DICOM store, of the form `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/datasets/&#123;dataset_id&#125;/dicomStores/&#123;dicom_store_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; No more than 64 labels can be associated with a given store.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Notification destination for new DICOM instances. Supplied by the client. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies where and whether to send notifications upon changes to a DICOM store.</td>
</tr>
<tr>
    <td><CopyableCode code="streamConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>Gets the specified DICOM store.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the DICOM stores in the given dataset.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-dicomStoreId"><code>dicomStoreId</code></a></td>
    <td>Creates a new DICOM store within the parent dataset.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified DICOM store.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>Deletes the specified DICOM store and removes all images that are contained within it.</td>
</tr>
<tr>
    <td><a href="#deidentify"><CopyableCode code="deidentify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyDicomStoreSummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The output DICOM store will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).</td>
</tr>
<tr>
    <td><a href="#set_blob_storage_settings"><CopyableCode code="set_blob_storage_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>SetBlobStorageSettings sets the blob storage settings of the specified resources.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>Imports data into the DICOM store by copying it from the specified source. Errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>Exports data to the specified destination by copying it from the DICOM store. Errors are also logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.</td>
</tr>
<tr>
    <td><a href="#search_for_studies"><CopyableCode code="search_for_studies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>SearchForStudies returns a list of matching studies. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForStudies, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForStudies, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).</td>
</tr>
<tr>
    <td><a href="#store_instances"><CopyableCode code="store_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Store DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#store-dicom).</td>
</tr>
<tr>
    <td><a href="#search_for_series"><CopyableCode code="search_for_series" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>SearchForSeries returns a list of matching series. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForSeries, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForSeries, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).</td>
</tr>
<tr>
    <td><a href="#search_for_instances"><CopyableCode code="search_for_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a></td>
    <td></td>
    <td>SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForInstances, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForInstances, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).</td>
</tr>
<tr>
    <td><a href="#retrieve_frames"><CopyableCode code="retrieve_frames" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-seriesId"><code>seriesId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-framesId"><code>framesId</code></a></td>
    <td></td>
    <td>RetrieveFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4&#125;. For details on the implementation of RetrieveFrames, see [DICOM frames](https://cloud.google.com/healthcare/docs/dicom#dicom_frames) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveFrames, see [Retrieve DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-dicom).</td>
</tr>
<tr>
    <td><a href="#retrieve_rendered"><CopyableCode code="retrieve_rendered" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-seriesId"><code>seriesId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-framesId"><code>framesId</code></a></td>
    <td><a href="#parameter-viewport"><code>viewport</code></a></td>
    <td>RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieve consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-consumer).</td>
</tr>
<tr>
    <td><a href="#retrieve_bulkdata"><CopyableCode code="retrieve_bulkdata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-dicomStoresId"><code>dicomStoresId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-seriesId"><code>seriesId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-bulkdataId"><code>bulkdataId</code></a>, <a href="#parameter-bulkdataId1"><code>bulkdataId1</code></a></td>
    <td></td>
    <td>Returns uncompressed, unencoded bytes representing the referenced bulkdata tag from an instance. See [Retrieve Transaction](http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveBulkdata, see [Bulkdata resources](https://cloud.google.com/healthcare/docs/dicom#bulkdata-resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveBulkdata, see [Retrieve bulkdata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-bulkdata).</td>
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
<tr id="parameter-bulkdataId">
    <td><CopyableCode code="bulkdataId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bulkdataId1">
    <td><CopyableCode code="bulkdataId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dicomStoresId">
    <td><CopyableCode code="dicomStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-framesId">
    <td><CopyableCode code="framesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-seriesId">
    <td><CopyableCode code="seriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-studiesId">
    <td><CopyableCode code="studiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dicomStoreId">
    <td><CopyableCode code="dicomStoreId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-viewport">
    <td><CopyableCode code="viewport" /></td>
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

Gets the specified DICOM store.

```sql
SELECT
name,
labels,
notificationConfig,
notificationConfigs,
streamConfigs
FROM google.healthcare.dicom_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND dicomStoresId = '{{ dicomStoresId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the DICOM stores in the given dataset.

```sql
SELECT
name,
labels,
notificationConfig,
notificationConfigs,
streamConfigs
FROM google.healthcare.dicom_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new DICOM store within the parent dataset.

```sql
INSERT INTO google.healthcare.dicom_stores (
data__name,
data__notificationConfig,
data__labels,
data__streamConfigs,
data__notificationConfigs,
projectsId,
locationsId,
datasetsId,
dicomStoreId
)
SELECT 
'{{ name }}',
'{{ notificationConfig }}',
'{{ labels }}',
'{{ streamConfigs }}',
'{{ notificationConfigs }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetsId }}',
'{{ dicomStoreId }}'
RETURNING
name,
labels,
notificationConfig,
notificationConfigs,
streamConfigs
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dicom_stores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the dicom_stores resource.
    - name: locationsId
      value: string
      description: Required parameter for the dicom_stores resource.
    - name: datasetsId
      value: string
      description: Required parameter for the dicom_stores resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
        
    - name: notificationConfig
      value: object
      description: >
        Optional. Notification destination for new DICOM instances. Supplied by the client.
        
    - name: labels
      value: object
      description: >
        User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
        
    - name: streamConfigs
      value: array
      description: >
        Optional. A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.
        
    - name: notificationConfigs
      value: array
      description: >
        Optional. Specifies where and whether to send notifications upon changes to a DICOM store.
        
    - name: dicomStoreId
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

Updates the specified DICOM store.

```sql
UPDATE google.healthcare.dicom_stores
SET 
data__name = '{{ name }}',
data__notificationConfig = '{{ notificationConfig }}',
data__labels = '{{ labels }}',
data__streamConfigs = '{{ streamConfigs }}',
data__notificationConfigs = '{{ notificationConfigs }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND dicomStoresId = '{{ dicomStoresId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
labels,
notificationConfig,
notificationConfigs,
streamConfigs;
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

Deletes the specified DICOM store and removes all images that are contained within it.

```sql
DELETE FROM google.healthcare.dicom_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND dicomStoresId = '{{ dicomStoresId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deidentify"
    values={[
        { label: 'deidentify', value: 'deidentify' },
        { label: 'set_blob_storage_settings', value: 'set_blob_storage_settings' },
        { label: 'import', value: 'import' },
        { label: 'export', value: 'export' },
        { label: 'search_for_studies', value: 'search_for_studies' },
        { label: 'store_instances', value: 'store_instances' },
        { label: 'search_for_series', value: 'search_for_series' },
        { label: 'search_for_instances', value: 'search_for_instances' },
        { label: 'retrieve_frames', value: 'retrieve_frames' },
        { label: 'retrieve_rendered', value: 'retrieve_rendered' },
        { label: 'retrieve_bulkdata', value: 'retrieve_bulkdata' }
    ]}
>
<TabItem value="deidentify">

De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyDicomStoreSummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The output DICOM store will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).

```sql
EXEC google.healthcare.dicom_stores.deidentify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required 
@@json=
'{
"destinationStore": "{{ destinationStore }}", 
"config": "{{ config }}", 
"gcsConfigUri": "{{ gcsConfigUri }}", 
"filterConfig": "{{ filterConfig }}"
}';
```
</TabItem>
<TabItem value="set_blob_storage_settings">

SetBlobStorageSettings sets the blob storage settings of the specified resources.

```sql
EXEC google.healthcare.dicom_stores.set_blob_storage_settings 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required 
@@json=
'{
"filterConfig": "{{ filterConfig }}", 
"blobStorageSettings": "{{ blobStorageSettings }}"
}';
```
</TabItem>
<TabItem value="import">

Imports data into the DICOM store by copying it from the specified source. Errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.

```sql
EXEC google.healthcare.dicom_stores.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required 
@@json=
'{
"gcsSource": "{{ gcsSource }}", 
"blobStorageSettings": "{{ blobStorageSettings }}"
}';
```
</TabItem>
<TabItem value="export">

Exports data to the specified destination by copying it from the DICOM store. Errors are also logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). The metadata field type is OperationMetadata.

```sql
EXEC google.healthcare.dicom_stores.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required 
@@json=
'{
"gcsDestination": "{{ gcsDestination }}", 
"bigqueryDestination": "{{ bigqueryDestination }}"
}';
```
</TabItem>
<TabItem value="search_for_studies">

SearchForStudies returns a list of matching studies. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForStudies, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForStudies, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).

```sql
EXEC google.healthcare.dicom_stores.search_for_studies 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required;
```
</TabItem>
<TabItem value="store_instances">

StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Store DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#store-dicom).

```sql
EXEC google.healthcare.dicom_stores.store_instances 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required 
@@json=
'{
"contentType": "{{ contentType }}", 
"data": "{{ data }}", 
"extensions": "{{ extensions }}"
}';
```
</TabItem>
<TabItem value="search_for_series">

SearchForSeries returns a list of matching series. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForSeries, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForSeries, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).

```sql
EXEC google.healthcare.dicom_stores.search_for_series 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required;
```
</TabItem>
<TabItem value="search_for_instances">

SearchForInstances returns a list of matching instances. See [Search Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6). For details on the implementation of SearchForInstances, see [Search transaction](https://cloud.google.com/healthcare/docs/dicom#search_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call SearchForInstances, see [Search for DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#search-dicom).

```sql
EXEC google.healthcare.dicom_stores.search_for_instances 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required;
```
</TabItem>
<TabItem value="retrieve_frames">

RetrieveFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4&#125;. For details on the implementation of RetrieveFrames, see [DICOM frames](https://cloud.google.com/healthcare/docs/dicom#dicom_frames) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveFrames, see [Retrieve DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-dicom).

```sql
EXEC google.healthcare.dicom_stores.retrieve_frames 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@seriesId='{{ seriesId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@framesId='{{ framesId }}' --required;
```
</TabItem>
<TabItem value="retrieve_rendered">

RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieve consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-consumer).

```sql
EXEC google.healthcare.dicom_stores.retrieve_rendered 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@seriesId='{{ seriesId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@framesId='{{ framesId }}' --required, 
@viewport='{{ viewport }}';
```
</TabItem>
<TabItem value="retrieve_bulkdata">

Returns uncompressed, unencoded bytes representing the referenced bulkdata tag from an instance. See [Retrieve Transaction](http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveBulkdata, see [Bulkdata resources](https://cloud.google.com/healthcare/docs/dicom#bulkdata-resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveBulkdata, see [Retrieve bulkdata](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-bulkdata).

```sql
EXEC google.healthcare.dicom_stores.retrieve_bulkdata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@dicomStoresId='{{ dicomStoresId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@seriesId='{{ seriesId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@bulkdataId='{{ bulkdataId }}' --required, 
@bulkdataId1='{{ bulkdataId1 }}' --required;
```
</TabItem>
</Tabs>
