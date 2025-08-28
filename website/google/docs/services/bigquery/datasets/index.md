--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - bigquery
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.datasets" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.</td>
</tr>
<tr>
    <td><CopyableCode code="access" /></td>
    <td><code>array</code></td>
    <td>Optional. An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; If you patch a dataset, then this field is overwritten by the patched dataset's access field. To add entities, you must supply the entire existing access array in addition to any new entities that you want to add.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this dataset was created, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetReference" /></td>
    <td><code>object</code></td>
    <td>Required. A reference that identifies the dataset. (id: DatasetReference)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultCollation" /></td>
    <td><code>string</code></td>
    <td>Optional. Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultEncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The default encryption key for all tables in the dataset. After this property is set, the encryption key of all newly-created tables in the dataset is set to this value unless the table creation request or query explicitly overrides the key. (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultPartitionExpirationMs" /></td>
    <td><code>string (int64)</code></td>
    <td>This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the `TimePartitioning.expirationMs` property on the new table. If you set `TimePartitioning.expirationMs` explicitly when creating a table, the `defaultPartitionExpirationMs` of the containing dataset is ignored. When creating a partitioned table, if `defaultPartitionExpirationMs` is set, the `defaultTableExpirationMs` value is ignored and the table will not be inherit a table expiration deadline.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRoundingMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Defines the default rounding mode specification of new tables created within this dataset. During table creation, if this field is specified, the table within this dataset will inherit the default rounding mode of the dataset. Setting the default rounding mode on a table overrides this option. Existing tables in the dataset are unaffected. If columns are defined during that table creation, they will immediately inherit the table's default rounding mode, unless otherwise specified.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultTableExpirationMs" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-friendly description of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A hash of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="externalCatalogDatasetOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options defining open source compatible datasets living in the BigQuery catalog. Contains metadata of open source database, schema or namespace represented by the current dataset. (id: ExternalCatalogDatasetOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="externalDatasetReference" /></td>
    <td><code>object</code></td>
    <td>Optional. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL. (id: ExternalDatasetReference)</td>
</tr>
<tr>
    <td><CopyableCode code="friendlyName" /></td>
    <td><code>string</code></td>
    <td>Optional. A descriptive name for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="isCaseInsensitive" /></td>
    <td><code>boolean</code></td>
    <td>Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource type. (default: bigquery#dataset)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See [Creating and Updating Dataset Labels](https://cloud.google.com/bigquery/docs/creating-managing-labels#creating_and_updating_dataset_labels) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The date when this dataset was last modified, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedDatasetMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata about the LinkedDataset. Filled out when the dataset type is LINKED. (id: LinkedDatasetMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedDatasetSource" /></td>
    <td><code>object</code></td>
    <td>Optional. The source dataset reference when the dataset is of type LINKED. For all other dataset types it is not set. This field cannot be updated once it is set. Any attempt to update this field using Update and Patch API Operations will be ignored. (id: LinkedDatasetSource)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.</td>
</tr>
<tr>
    <td><CopyableCode code="maxTimeTravelHours" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceTags" /></td>
    <td><code>object</code></td>
    <td>Optional. The [tags](https://cloud.google.com/bigquery/docs/tags) attached to this dataset. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Restriction config for all tables and dataset. If set, restrict certain accesses on the dataset and all its tables based on the config. See [Data egress](https://cloud.google.com/bigquery/docs/analytics-hub-introduction#data_egress) for more details. (id: RestrictionConfig)</td>
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
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBillingModel" /></td>
    <td><code>string</code></td>
    <td>Optional. Updates storage_billing_model for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Output only. Tags for the dataset. To provide tags as inputs, use the `resourceTags` field.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Same as `type` in `ListFormatDataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The fully-qualified, unique, opaque ID of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetReference" /></td>
    <td><code>object</code></td>
    <td>The dataset reference. Use this property to access specific parts of the dataset's ID, such as project ID or dataset ID. (id: DatasetReference)</td>
</tr>
<tr>
    <td><CopyableCode code="externalDatasetReference" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL. (id: ExternalDatasetReference)</td>
</tr>
<tr>
    <td><CopyableCode code="friendlyName" /></td>
    <td><code>string</code></td>
    <td>An alternate name for the dataset. The friendly name is purely decorative in nature.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resource type. This property always returns the value "bigquery#dataset"</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this dataset. You can use these to organize and group your datasets.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The geographic location where the dataset resides.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-accessPolicyVersion"><code>accessPolicyVersion</code></a>, <a href="#parameter-datasetView"><code>datasetView</code></a></td>
    <td>Returns the dataset specified by datasetID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-all"><code>all</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all datasets in the specified project to which the user has been granted the READER dataset role.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-accessPolicyVersion"><code>accessPolicyVersion</code></a></td>
    <td>Creates a new empty dataset.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-accessPolicyVersion"><code>accessPolicyVersion</code></a>, <a href="#parameter-updateMode"><code>updateMode</code></a></td>
    <td>Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-accessPolicyVersion"><code>accessPolicyVersion</code></a>, <a href="#parameter-updateMode"><code>updateMode</code></a></td>
    <td>Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-deleteContents"><code>deleteContents</code></a></td>
    <td>Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td></td>
    <td>Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.</td>
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
<tr id="parameter-+datasetId">
    <td><CopyableCode code="+datasetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-accessPolicyVersion">
    <td><CopyableCode code="accessPolicyVersion" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-all">
    <td><CopyableCode code="all" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetView">
    <td><CopyableCode code="datasetView" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deleteContents">
    <td><CopyableCode code="deleteContents" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMode">
    <td><CopyableCode code="updateMode" /></td>
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

Returns the dataset specified by datasetID.

```sql
SELECT
id,
access,
creationTime,
datasetReference,
defaultCollation,
defaultEncryptionConfiguration,
defaultPartitionExpirationMs,
defaultRoundingMode,
defaultTableExpirationMs,
description,
etag,
externalCatalogDatasetOptions,
externalDatasetReference,
friendlyName,
isCaseInsensitive,
kind,
labels,
lastModifiedTime,
linkedDatasetMetadata,
linkedDatasetSource,
location,
maxTimeTravelHours,
resourceTags,
restrictions,
satisfiesPzi,
satisfiesPzs,
selfLink,
storageBillingModel,
tags,
type
FROM google.bigquery.datasets
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND accessPolicyVersion = '{{ accessPolicyVersion }}'
AND datasetView = '{{ datasetView }}';
```
</TabItem>
<TabItem value="list">

Lists all datasets in the specified project to which the user has been granted the READER dataset role.

```sql
SELECT
id,
datasetReference,
externalDatasetReference,
friendlyName,
kind,
labels,
location
FROM google.bigquery.datasets
WHERE projectId = '{{ projectId }}' -- required
AND all = '{{ all }}'
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new empty dataset.

```sql
INSERT INTO google.bigquery.datasets (
data__access,
data__datasetReference,
data__defaultCollation,
data__defaultEncryptionConfiguration,
data__defaultPartitionExpirationMs,
data__defaultRoundingMode,
data__defaultTableExpirationMs,
data__description,
data__externalCatalogDatasetOptions,
data__externalDatasetReference,
data__friendlyName,
data__isCaseInsensitive,
data__labels,
data__linkedDatasetSource,
data__location,
data__maxTimeTravelHours,
data__resourceTags,
data__storageBillingModel,
projectId,
accessPolicyVersion
)
SELECT 
'{{ access }}',
'{{ datasetReference }}',
'{{ defaultCollation }}',
'{{ defaultEncryptionConfiguration }}',
'{{ defaultPartitionExpirationMs }}',
'{{ defaultRoundingMode }}',
'{{ defaultTableExpirationMs }}',
'{{ description }}',
'{{ externalCatalogDatasetOptions }}',
'{{ externalDatasetReference }}',
'{{ friendlyName }}',
{{ isCaseInsensitive }},
'{{ labels }}',
'{{ linkedDatasetSource }}',
'{{ location }}',
'{{ maxTimeTravelHours }}',
'{{ resourceTags }}',
'{{ storageBillingModel }}',
'{{ projectId }}',
'{{ accessPolicyVersion }}'
RETURNING
id,
access,
creationTime,
datasetReference,
defaultCollation,
defaultEncryptionConfiguration,
defaultPartitionExpirationMs,
defaultRoundingMode,
defaultTableExpirationMs,
description,
etag,
externalCatalogDatasetOptions,
externalDatasetReference,
friendlyName,
isCaseInsensitive,
kind,
labels,
lastModifiedTime,
linkedDatasetMetadata,
linkedDatasetSource,
location,
maxTimeTravelHours,
resourceTags,
restrictions,
satisfiesPzi,
satisfiesPzs,
selfLink,
storageBillingModel,
tags,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: datasets
  props:
    - name: projectId
      value: string
      description: Required parameter for the datasets resource.
    - name: access
      value: array
      description: >
        Optional. An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; If you patch a dataset, then this field is overwritten by the patched dataset's access field. To add entities, you must supply the entire existing access array in addition to any new entities that you want to add.
        
    - name: datasetReference
      value: object
      description: >
        Required. A reference that identifies the dataset.
        
    - name: defaultCollation
      value: string
      description: >
        Optional. Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
        
    - name: defaultEncryptionConfiguration
      value: object
      description: >
        The default encryption key for all tables in the dataset. After this property is set, the encryption key of all newly-created tables in the dataset is set to this value unless the table creation request or query explicitly overrides the key.
        
    - name: defaultPartitionExpirationMs
      value: string
      description: >
        This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the `TimePartitioning.expirationMs` property on the new table. If you set `TimePartitioning.expirationMs` explicitly when creating a table, the `defaultPartitionExpirationMs` of the containing dataset is ignored. When creating a partitioned table, if `defaultPartitionExpirationMs` is set, the `defaultTableExpirationMs` value is ignored and the table will not be inherit a table expiration deadline.
        
    - name: defaultRoundingMode
      value: string
      description: >
        Optional. Defines the default rounding mode specification of new tables created within this dataset. During table creation, if this field is specified, the table within this dataset will inherit the default rounding mode of the dataset. Setting the default rounding mode on a table overrides this option. Existing tables in the dataset are unaffected. If columns are defined during that table creation, they will immediately inherit the table's default rounding mode, unless otherwise specified.
        
      valid_values: ['ROUNDING_MODE_UNSPECIFIED', 'ROUND_HALF_AWAY_FROM_ZERO', 'ROUND_HALF_EVEN']
    - name: defaultTableExpirationMs
      value: string
      description: >
        Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
        
    - name: description
      value: string
      description: >
        Optional. A user-friendly description of the dataset.
        
    - name: externalCatalogDatasetOptions
      value: object
      description: >
        Optional. Options defining open source compatible datasets living in the BigQuery catalog. Contains metadata of open source database, schema or namespace represented by the current dataset.
        
    - name: externalDatasetReference
      value: object
      description: >
        Optional. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL.
        
    - name: friendlyName
      value: string
      description: >
        Optional. A descriptive name for the dataset.
        
    - name: isCaseInsensitive
      value: boolean
      description: >
        Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.
        
    - name: labels
      value: object
      description: >
        The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See [Creating and Updating Dataset Labels](https://cloud.google.com/bigquery/docs/creating-managing-labels#creating_and_updating_dataset_labels) for more information.
        
    - name: linkedDatasetSource
      value: object
      description: >
        Optional. The source dataset reference when the dataset is of type LINKED. For all other dataset types it is not set. This field cannot be updated once it is set. Any attempt to update this field using Update and Patch API Operations will be ignored.
        
    - name: location
      value: string
      description: >
        The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
        
    - name: maxTimeTravelHours
      value: string
      description: >
        Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.
        
    - name: resourceTags
      value: object
      description: >
        Optional. The [tags](https://cloud.google.com/bigquery/docs/tags) attached to this dataset. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details.
        
    - name: storageBillingModel
      value: string
      description: >
        Optional. Updates storage_billing_model for the dataset.
        
      valid_values: ['STORAGE_BILLING_MODEL_UNSPECIFIED', 'LOGICAL', 'PHYSICAL']
    - name: accessPolicyVersion
      value: integer (int32)
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

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.

```sql
UPDATE google.bigquery.datasets
SET 
data__access = '{{ access }}',
data__datasetReference = '{{ datasetReference }}',
data__defaultCollation = '{{ defaultCollation }}',
data__defaultEncryptionConfiguration = '{{ defaultEncryptionConfiguration }}',
data__defaultPartitionExpirationMs = '{{ defaultPartitionExpirationMs }}',
data__defaultRoundingMode = '{{ defaultRoundingMode }}',
data__defaultTableExpirationMs = '{{ defaultTableExpirationMs }}',
data__description = '{{ description }}',
data__externalCatalogDatasetOptions = '{{ externalCatalogDatasetOptions }}',
data__externalDatasetReference = '{{ externalDatasetReference }}',
data__friendlyName = '{{ friendlyName }}',
data__isCaseInsensitive = {{ isCaseInsensitive }},
data__labels = '{{ labels }}',
data__linkedDatasetSource = '{{ linkedDatasetSource }}',
data__location = '{{ location }}',
data__maxTimeTravelHours = '{{ maxTimeTravelHours }}',
data__resourceTags = '{{ resourceTags }}',
data__storageBillingModel = '{{ storageBillingModel }}'
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND accessPolicyVersion = '{{ accessPolicyVersion}}'
AND updateMode = '{{ updateMode}}'
RETURNING
id,
access,
creationTime,
datasetReference,
defaultCollation,
defaultEncryptionConfiguration,
defaultPartitionExpirationMs,
defaultRoundingMode,
defaultTableExpirationMs,
description,
etag,
externalCatalogDatasetOptions,
externalDatasetReference,
friendlyName,
isCaseInsensitive,
kind,
labels,
lastModifiedTime,
linkedDatasetMetadata,
linkedDatasetSource,
location,
maxTimeTravelHours,
resourceTags,
restrictions,
satisfiesPzi,
satisfiesPzs,
selfLink,
storageBillingModel,
tags,
type;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

```sql
REPLACE google.bigquery.datasets
SET 
data__access = '{{ access }}',
data__datasetReference = '{{ datasetReference }}',
data__defaultCollation = '{{ defaultCollation }}',
data__defaultEncryptionConfiguration = '{{ defaultEncryptionConfiguration }}',
data__defaultPartitionExpirationMs = '{{ defaultPartitionExpirationMs }}',
data__defaultRoundingMode = '{{ defaultRoundingMode }}',
data__defaultTableExpirationMs = '{{ defaultTableExpirationMs }}',
data__description = '{{ description }}',
data__externalCatalogDatasetOptions = '{{ externalCatalogDatasetOptions }}',
data__externalDatasetReference = '{{ externalDatasetReference }}',
data__friendlyName = '{{ friendlyName }}',
data__isCaseInsensitive = {{ isCaseInsensitive }},
data__labels = '{{ labels }}',
data__linkedDatasetSource = '{{ linkedDatasetSource }}',
data__location = '{{ location }}',
data__maxTimeTravelHours = '{{ maxTimeTravelHours }}',
data__resourceTags = '{{ resourceTags }}',
data__storageBillingModel = '{{ storageBillingModel }}'
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND accessPolicyVersion = '{{ accessPolicyVersion}}'
AND updateMode = '{{ updateMode}}'
RETURNING
id,
access,
creationTime,
datasetReference,
defaultCollation,
defaultEncryptionConfiguration,
defaultPartitionExpirationMs,
defaultRoundingMode,
defaultTableExpirationMs,
description,
etag,
externalCatalogDatasetOptions,
externalDatasetReference,
friendlyName,
isCaseInsensitive,
kind,
labels,
lastModifiedTime,
linkedDatasetMetadata,
linkedDatasetSource,
location,
maxTimeTravelHours,
resourceTags,
restrictions,
satisfiesPzi,
satisfiesPzs,
selfLink,
storageBillingModel,
tags,
type;
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

Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.

```sql
DELETE FROM google.bigquery.datasets
WHERE projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND deleteContents = '{{ deleteContents }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="undelete">

Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.

```sql
EXEC google.bigquery.datasets.undelete 
@projectId='{{ projectId }}' --required, 
@+datasetId='{{ +datasetId }}' --required 
@@json=
'{
"deletionTime": "{{ deletionTime }}"
}';
```
</TabItem>
</Tabs>
