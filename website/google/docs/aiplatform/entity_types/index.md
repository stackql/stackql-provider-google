--- 
title: entity_types
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_types
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

Creates, updates, deletes, gets or lists an <code>entity_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entity_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.entity_types" /></td></tr>
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

An entity type is a type of object in a system that needs to be modeled and have stored information about. For example, driver is an entity type, and driver0 is an instance of an entity type driver.

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
    <td>Immutable. Name of the EntityType. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featurestores/&#123;featurestore&#125;/entityTypes/&#123;entity_type&#125;` The last part entity_type is assigned by the client. The entity_type can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z and underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given a featurestore.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this EntityType was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the EntityType.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize your EntityTypes. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one EntityType (System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The default monitoring configuration for all Features with value type (Feature.ValueType) BOOL, STRING, DOUBLE or INT64 under this EntityType. If this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled. (id: GoogleCloudAiplatformV1FeaturestoreMonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="offlineStorageTtlDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than `offline_storage_ttl_days` since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this EntityType was most recently updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for FeaturestoreService.ListEntityTypes.

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
    <td><CopyableCode code="entityTypes" /></td>
    <td><code>array</code></td>
    <td>The EntityTypes matching the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as ListEntityTypesRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Gets details of a single EntityType.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists EntityTypes in a given Featurestore.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a></td>
    <td><a href="#parameter-entityTypeId"><code>entityTypeId</code></a></td>
    <td>Creates a new EntityType in a given Featurestore.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single EntityType.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.</td>
</tr>
<tr>
    <td><a href="#read_feature_values"><CopyableCode code="read_feature_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.</td>
</tr>
<tr>
    <td><a href="#streaming_read_feature_values"><CopyableCode code="streaming_read_feature_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across multiple responses.</td>
</tr>
<tr>
    <td><a href="#write_feature_values"><CopyableCode code="write_feature_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Writes Feature values of one or more entities of an EntityType. The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.</td>
</tr>
<tr>
    <td><a href="#import_feature_values"><CopyableCode code="import_feature_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Imports Feature values into the Featurestore from a source storage. The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done. If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done. There are also scenarios where the caller can cause inconsistency. - Source data for import contains multiple distinct Feature values for the same entity ID and timestamp. - Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy. - Online serving cluster is under-provisioned.</td>
</tr>
<tr>
    <td><a href="#export_feature_values"><CopyableCode code="export_feature_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featurestoresId"><code>featurestoresId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td>Exports Feature values from all the entities of a target EntityType.</td>
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
<tr id="parameter-entityTypesId">
    <td><CopyableCode code="entityTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-featurestoresId">
    <td><CopyableCode code="featurestoresId" /></td>
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
<tr id="parameter-entityTypeId">
    <td><CopyableCode code="entityTypeId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single EntityType.

```sql
SELECT
name,
createTime,
description,
etag,
labels,
monitoringConfig,
offlineStorageTtlDays,
satisfiesPzi,
satisfiesPzs,
updateTime
FROM google.aiplatform.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featurestoresId = '{{ featurestoresId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists EntityTypes in a given Featurestore.

```sql
SELECT
entityTypes,
nextPageToken
FROM google.aiplatform.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featurestoresId = '{{ featurestoresId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND readMask = '{{ readMask }}';
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

Creates a new EntityType in a given Featurestore.

```sql
INSERT INTO google.aiplatform.entity_types (
data__name,
data__description,
data__labels,
data__etag,
data__monitoringConfig,
data__offlineStorageTtlDays,
projectsId,
locationsId,
featurestoresId,
entityTypeId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ etag }}',
'{{ monitoringConfig }}',
{{ offlineStorageTtlDays }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ featurestoresId }}',
'{{ entityTypeId }}'
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
- name: entity_types
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: locationsId
      value: string
      description: Required parameter for the entity_types resource.
    - name: featurestoresId
      value: string
      description: Required parameter for the entity_types resource.
    - name: name
      value: string
      description: >
        Immutable. Name of the EntityType. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` The last part entity_type is assigned by the client. The entity_type can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z and underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given a featurestore.
        
    - name: description
      value: string
      description: >
        Optional. Description of the EntityType.
        
    - name: labels
      value: object
      description: >
        Optional. The labels with user-defined metadata to organize your EntityTypes. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one EntityType (System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.
        
    - name: etag
      value: string
      description: >
        Optional. Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: monitoringConfig
      value: object
      description: >
        Optional. The default monitoring configuration for all Features with value type (Feature.ValueType) BOOL, STRING, DOUBLE or INT64 under this EntityType. If this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.
        
    - name: offlineStorageTtlDays
      value: integer
      description: >
        Optional. Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than `offline_storage_ttl_days` since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.
        
    - name: entityTypeId
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

Updates the parameters of a single EntityType.

```sql
UPDATE google.aiplatform.entity_types
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__monitoringConfig = '{{ monitoringConfig }}',
data__offlineStorageTtlDays = {{ offlineStorageTtlDays }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featurestoresId = '{{ featurestoresId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
etag,
labels,
monitoringConfig,
offlineStorageTtlDays,
satisfiesPzi,
satisfiesPzs,
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

Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.

```sql
DELETE FROM google.aiplatform.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featurestoresId = '{{ featurestoresId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="read_feature_values"
    values={[
        { label: 'read_feature_values', value: 'read_feature_values' },
        { label: 'streaming_read_feature_values', value: 'streaming_read_feature_values' },
        { label: 'write_feature_values', value: 'write_feature_values' },
        { label: 'import_feature_values', value: 'import_feature_values' },
        { label: 'export_feature_values', value: 'export_feature_values' }
    ]}
>
<TabItem value="read_feature_values">

Reads Feature values of a specific entity of an EntityType. For reading feature values of multiple entities of an EntityType, please use StreamingReadFeatureValues.

```sql
EXEC google.aiplatform.entity_types.read_feature_values 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featurestoresId='{{ featurestoresId }}' --required, 
@entityTypesId='{{ entityTypesId }}' --required 
@@json=
'{
"entityId": "{{ entityId }}", 
"featureSelector": "{{ featureSelector }}"
}';
```
</TabItem>
<TabItem value="streaming_read_feature_values">

Reads Feature values for multiple entities. Depending on their size, data for different entities may be broken up across multiple responses.

```sql
EXEC google.aiplatform.entity_types.streaming_read_feature_values 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featurestoresId='{{ featurestoresId }}' --required, 
@entityTypesId='{{ entityTypesId }}' --required 
@@json=
'{
"entityIds": "{{ entityIds }}", 
"featureSelector": "{{ featureSelector }}"
}';
```
</TabItem>
<TabItem value="write_feature_values">

Writes Feature values of one or more entities of an EntityType. The Feature values are merged into existing entities if any. The Feature values to be written must have timestamp within the online storage retention.

```sql
EXEC google.aiplatform.entity_types.write_feature_values 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featurestoresId='{{ featurestoresId }}' --required, 
@entityTypesId='{{ entityTypesId }}' --required 
@@json=
'{
"payloads": "{{ payloads }}"
}';
```
</TabItem>
<TabItem value="import_feature_values">

Imports Feature values into the Featurestore from a source storage. The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done. If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done. There are also scenarios where the caller can cause inconsistency. - Source data for import contains multiple distinct Feature values for the same entity ID and timestamp. - Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy. - Online serving cluster is under-provisioned.

```sql
EXEC google.aiplatform.entity_types.import_feature_values 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featurestoresId='{{ featurestoresId }}' --required, 
@entityTypesId='{{ entityTypesId }}' --required 
@@json=
'{
"avroSource": "{{ avroSource }}", 
"bigquerySource": "{{ bigquerySource }}", 
"csvSource": "{{ csvSource }}", 
"featureTimeField": "{{ featureTimeField }}", 
"featureTime": "{{ featureTime }}", 
"entityIdField": "{{ entityIdField }}", 
"featureSpecs": "{{ featureSpecs }}", 
"disableOnlineServing": {{ disableOnlineServing }}, 
"workerCount": {{ workerCount }}, 
"disableIngestionAnalysis": {{ disableIngestionAnalysis }}
}';
```
</TabItem>
<TabItem value="export_feature_values">

Exports Feature values from all the entities of a target EntityType.

```sql
EXEC google.aiplatform.entity_types.export_feature_values 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@featurestoresId='{{ featurestoresId }}' --required, 
@entityTypesId='{{ entityTypesId }}' --required 
@@json=
'{
"snapshotExport": "{{ snapshotExport }}", 
"fullExport": "{{ fullExport }}", 
"destination": "{{ destination }}", 
"featureSelector": "{{ featureSelector }}", 
"settings": "{{ settings }}"
}';
```
</TabItem>
</Tabs>
