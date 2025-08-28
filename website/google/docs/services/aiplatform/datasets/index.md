--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.datasets" /></td></tr>
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
    <td>Output only. Identifier. The resource name of the Dataset. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/datasets/&#123;dataset&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataItemCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of DataItems in this Dataset. Only apply for non-structured Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the Dataset. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Datasets. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable. Following system labels exist for each Dataset: * "aiplatform.googleapis.com/dataset_metadata_schema": output only, its value is the metadata_schema's title.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Required. Additional information about the Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataArtifact" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Artifact that was created in MetadataStore when creating the Dataset. The Artifact resource name pattern is `projects/&#123;project&#125;/locations/&#123;location&#125;/metadataStores/&#123;metadata_store&#125;/artifacts/&#123;artifact&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Required. Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.</td>
</tr>
<tr>
    <td><CopyableCode code="modelReference" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to the public base model last used by the dataset. Only set for prompt datasets.</td>
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
    <td><CopyableCode code="savedQueries" /></td>
    <td><code>array</code></td>
    <td>All SavedQueries belong to the Dataset will be returned in List/Get Dataset response. The annotation_specs field will not be populated except for UI cases which will only use annotation_spec_count. In CreateDataset request, a SavedQuery is created together if this field is set, up to one SavedQuery can be set in CreateDatasetRequest. The SavedQuery should not contain any AnnotationSpec.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Dataset was last updated.</td>
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
    <td>Output only. Identifier. The resource name of the Dataset. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/datasets/&#123;dataset&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataItemCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of DataItems in this Dataset. Only apply for non-structured Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the Dataset. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Datasets. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable. Following system labels exist for each Dataset: * "aiplatform.googleapis.com/dataset_metadata_schema": output only, its value is the metadata_schema's title.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Required. Additional information about the Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataArtifact" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Artifact that was created in MetadataStore when creating the Dataset. The Artifact resource name pattern is `projects/&#123;project&#125;/locations/&#123;location&#125;/metadataStores/&#123;metadata_store&#125;/artifacts/&#123;artifact&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataSchemaUri" /></td>
    <td><code>string</code></td>
    <td>Required. Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.</td>
</tr>
<tr>
    <td><CopyableCode code="modelReference" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to the public base model last used by the dataset. Only set for prompt datasets.</td>
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
    <td><CopyableCode code="savedQueries" /></td>
    <td><code>array</code></td>
    <td>All SavedQueries belong to the Dataset will be returned in List/Get Dataset response. The annotation_specs field will not be populated except for UI cases which will only use annotation_spec_count. In CreateDataset request, a SavedQuery is created together if this field is set, up to one SavedQuery can be set in CreateDatasetRequest. The SavedQuery should not contain any AnnotationSpec.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Dataset was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Gets a Dataset.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Datasets in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a Dataset.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Dataset.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Deletes a Dataset.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Imports data into a Dataset.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Exports data from a Dataset.</td>
</tr>
<tr>
    <td><a href="#search_data_items"><CopyableCode code="search_data_items" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-orderByDataItem"><code>orderByDataItem</code></a>, <a href="#parameter-orderByAnnotation.savedQuery"><code>orderByAnnotation.savedQuery</code></a>, <a href="#parameter-orderByAnnotation.orderBy"><code>orderByAnnotation.orderBy</code></a>, <a href="#parameter-savedQuery"><code>savedQuery</code></a>, <a href="#parameter-dataLabelingJob"><code>dataLabelingJob</code></a>, <a href="#parameter-dataItemFilter"><code>dataItemFilter</code></a>, <a href="#parameter-annotationsFilter"><code>annotationsFilter</code></a>, <a href="#parameter-annotationFilters"><code>annotationFilters</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-annotationsLimit"><code>annotationsLimit</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Searches DataItems in a Dataset.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
<tr id="parameter-annotationFilters">
    <td><CopyableCode code="annotationFilters" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-annotationsFilter">
    <td><CopyableCode code="annotationsFilter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-annotationsLimit">
    <td><CopyableCode code="annotationsLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-dataItemFilter">
    <td><CopyableCode code="dataItemFilter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataLabelingJob">
    <td><CopyableCode code="dataLabelingJob" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fieldMask">
    <td><CopyableCode code="fieldMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderByAnnotation.orderBy">
    <td><CopyableCode code="orderByAnnotation.orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderByAnnotation.savedQuery">
    <td><CopyableCode code="orderByAnnotation.savedQuery" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderByDataItem">
    <td><CopyableCode code="orderByDataItem" /></td>
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
<tr id="parameter-savedQuery">
    <td><CopyableCode code="savedQuery" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a Dataset.

```sql
SELECT
name,
createTime,
dataItemCount,
description,
displayName,
encryptionSpec,
etag,
labels,
metadata,
metadataArtifact,
metadataSchemaUri,
modelReference,
satisfiesPzi,
satisfiesPzs,
savedQueries,
updateTime
FROM google.aiplatform.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND readMask = '{{ readMask }}';
```
</TabItem>
<TabItem value="list">

Lists Datasets in a Location.

```sql
SELECT
name,
createTime,
dataItemCount,
description,
displayName,
encryptionSpec,
etag,
labels,
metadata,
metadataArtifact,
metadataSchemaUri,
modelReference,
satisfiesPzi,
satisfiesPzs,
savedQueries,
updateTime
FROM google.aiplatform.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}'
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

Creates a Dataset.

```sql
INSERT INTO google.aiplatform.datasets (
data__displayName,
data__description,
data__metadataSchemaUri,
data__metadata,
data__etag,
data__labels,
data__savedQueries,
data__encryptionSpec,
data__modelReference,
projectsId,
locationsId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ metadataSchemaUri }}',
'{{ metadata }}',
'{{ etag }}',
'{{ labels }}',
'{{ savedQueries }}',
'{{ encryptionSpec }}',
'{{ modelReference }}',
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
- name: datasets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the datasets resource.
    - name: locationsId
      value: string
      description: Required parameter for the datasets resource.
    - name: displayName
      value: string
      description: >
        Required. The user-defined name of the Dataset. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: description
      value: string
      description: >
        The description of the Dataset.
        
    - name: metadataSchemaUri
      value: string
      description: >
        Required. Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.
        
    - name: metadata
      value: any
      description: >
        Required. Additional information about the Dataset.
        
    - name: etag
      value: string
      description: >
        Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your Datasets. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable. Following system labels exist for each Dataset: * "aiplatform.googleapis.com/dataset_metadata_schema": output only, its value is the metadata_schema's title.
        
    - name: savedQueries
      value: array
      description: >
        All SavedQueries belong to the Dataset will be returned in List/Get Dataset response. The annotation_specs field will not be populated except for UI cases which will only use annotation_spec_count. In CreateDataset request, a SavedQuery is created together if this field is set, up to one SavedQuery can be set in CreateDatasetRequest. The SavedQuery should not contain any AnnotationSpec.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key.
        
    - name: modelReference
      value: string
      description: >
        Optional. Reference to the public base model last used by the dataset. Only set for prompt datasets.
        
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

Updates a Dataset.

```sql
UPDATE google.aiplatform.datasets
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__metadataSchemaUri = '{{ metadataSchemaUri }}',
data__metadata = '{{ metadata }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__savedQueries = '{{ savedQueries }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__modelReference = '{{ modelReference }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataItemCount,
description,
displayName,
encryptionSpec,
etag,
labels,
metadata,
metadataArtifact,
metadataSchemaUri,
modelReference,
satisfiesPzi,
satisfiesPzs,
savedQueries,
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

Deletes a Dataset.

```sql
DELETE FROM google.aiplatform.datasets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' },
        { label: 'export', value: 'export' },
        { label: 'search_data_items', value: 'search_data_items' }
    ]}
>
<TabItem value="import">

Imports data into a Dataset.

```sql
EXEC google.aiplatform.datasets.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"importConfigs": "{{ importConfigs }}"
}';
```
</TabItem>
<TabItem value="export">

Exports data from a Dataset.

```sql
EXEC google.aiplatform.datasets.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"exportConfig": "{{ exportConfig }}"
}';
```
</TabItem>
<TabItem value="search_data_items">

Searches DataItems in a Dataset.

```sql
EXEC google.aiplatform.datasets.search_data_items 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required, 
@orderByDataItem='{{ orderByDataItem }}', 
@orderByAnnotation.savedQuery='{{ orderByAnnotation.savedQuery }}', 
@orderByAnnotation.orderBy='{{ orderByAnnotation.orderBy }}', 
@savedQuery='{{ savedQuery }}', 
@dataLabelingJob='{{ dataLabelingJob }}', 
@dataItemFilter='{{ dataItemFilter }}', 
@annotationsFilter='{{ annotationsFilter }}', 
@annotationFilters='{{ annotationFilters }}', 
@fieldMask='{{ fieldMask }}', 
@annotationsLimit='{{ annotationsLimit }}', 
@pageSize='{{ pageSize }}', 
@orderBy='{{ orderBy }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
</Tabs>
