--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
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

Creates, updates, deletes, gets or lists a <code>tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.tables" /></td></tr>
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
    <td>Output only. An opaque ID uniquely identifying the table.</td>
</tr>
<tr>
    <td><CopyableCode code="biglakeConfiguration" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies the configuration of a BigQuery table for Apache Iceberg. (id: BigLakeConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="cloneDefinition" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains information about the clone. This value is set via the clone operation. (id: CloneDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="clustering" /></td>
    <td><code>object</code></td>
    <td>Clustering specification for the table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered. (id: Clustering)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this table was created, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultCollation" /></td>
    <td><code>string</code></td>
    <td>Optional. Defines the default collation specification of new STRING fields in the table. During table creation or update, if a STRING field is added to this table without explicit collation specified, then the table inherits the table default collation. A change to this field affects only fields added afterwards, and does not alter the existing fields. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRoundingMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Defines the default rounding mode specification of new decimal fields (NUMERIC OR BIGNUMERIC) in the table. During table creation or update, if a decimal field is added to this table without an explicit rounding mode specified, then the field inherits the table default rounding mode. Changing this field doesn't affect existing fields.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-friendly description of this table.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Custom encryption configuration (e.g., Cloud KMS keys). (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A hash of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.</td>
</tr>
<tr>
    <td><CopyableCode code="externalCatalogTableOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options defining open source compatible table. (id: ExternalCatalogTableOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="externalDataConfiguration" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table. (id: ExternalDataConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="friendlyName" /></td>
    <td><code>string</code></td>
    <td>Optional. A descriptive name for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of resource ID. (default: bigquery#table)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. The time when this table was last modified, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The geographic location where the table resides. This value is inherited from the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="managedTableType" /></td>
    <td><code>string</code></td>
    <td>Optional. If set, overrides the default managed table type configured in the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="materializedView" /></td>
    <td><code>object</code></td>
    <td>Optional. The materialized view definition. (id: MaterializedViewDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="materializedViewStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. The materialized view status. (id: MaterializedViewStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="maxStaleness" /></td>
    <td><code>string</code></td>
    <td>Optional. The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: ModelDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="numActiveLogicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of logical bytes that are less than 90 days old.</td>
</tr>
<tr>
    <td><CopyableCode code="numActivePhysicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="numBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size of this table in logical bytes, excluding any data in the streaming buffer.</td>
</tr>
<tr>
    <td><CopyableCode code="numCurrentPhysicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of physical bytes used by current live data storage. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="numLongTermBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of logical bytes in the table that are considered "long-term storage".</td>
</tr>
<tr>
    <td><CopyableCode code="numLongTermLogicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of logical bytes that are more than 90 days old.</td>
</tr>
<tr>
    <td><CopyableCode code="numLongTermPhysicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="numPartitions" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="numPhysicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The physical size of this table in bytes. This includes storage used for time travel.</td>
</tr>
<tr>
    <td><CopyableCode code="numRows" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. The number of rows of data in this table, excluding any data in the streaming buffer.</td>
</tr>
<tr>
    <td><CopyableCode code="numTimeTravelPhysicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="numTotalLogicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Total number of logical bytes in the table or materialized view.</td>
</tr>
<tr>
    <td><CopyableCode code="numTotalPhysicalBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="partitionDefinition" /></td>
    <td><code>object</code></td>
    <td>Optional. The partition information for all table formats, including managed partitioned tables, hive partitioned tables, iceberg partitioned, and metastore partitioned tables. This field is only populated for metastore partitioned tables. For other table formats, this is an output only field. (id: PartitioningDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="rangePartitioning" /></td>
    <td><code>object</code></td>
    <td>If specified, configures range partitioning for this table. (id: RangePartitioning)</td>
</tr>
<tr>
    <td><CopyableCode code="replicas" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Table references of all replicas currently active on the table.</td>
</tr>
<tr>
    <td><CopyableCode code="requirePartitionFilter" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. (default: false)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceTags" /></td>
    <td><code>object</code></td>
    <td>[Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production".</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Restriction config for table. If set, restrict certain accesses on the table based on the config. See [Data egress](https://cloud.google.com/bigquery/docs/analytics-hub-introduction#data_egress) for more details. (id: RestrictionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes the schema of this table. (id: TableSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A URL that can be used to access this resource again.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotDefinition" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains information about the snapshot. This value is set via snapshot creation. (id: SnapshotDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="streamingBuffer" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains information regarding this table's streaming buffer, if one is present. This field will be absent if the table is not being streamed to or if there is no data in the streaming buffer. (id: Streamingbuffer)</td>
</tr>
<tr>
    <td><CopyableCode code="tableConstraints" /></td>
    <td><code>object</code></td>
    <td>Optional. Tables Primary Key and Foreign Key information (id: TableConstraints)</td>
</tr>
<tr>
    <td><CopyableCode code="tableReference" /></td>
    <td><code>object</code></td>
    <td>Required. Reference describing the ID of this table. (id: TableReference)</td>
</tr>
<tr>
    <td><CopyableCode code="tableReplicationInfo" /></td>
    <td><code>object</code></td>
    <td>Optional. Table replication info for table created `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv` (id: TableReplicationInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="timePartitioning" /></td>
    <td><code>object</code></td>
    <td>If specified, configures time-based partitioning for this table. (id: TimePartitioning)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the table type. The following values are supported: * `TABLE`: A normal BigQuery table. * `VIEW`: A virtual table defined by a SQL query. * `EXTERNAL`: A table that references data stored in an external storage system, such as Google Cloud Storage. * `MATERIALIZED_VIEW`: A precomputed view defined by a SQL query. * `SNAPSHOT`: An immutable BigQuery table that preserves the contents of a base table at a particular time. See additional information on [table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-intro). The default value is `TABLE`.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>object</code></td>
    <td>Optional. The view definition. (id: ViewDefinition)</td>
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
    <td>An opaque ID of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="clustering" /></td>
    <td><code>object</code></td>
    <td>Clustering specification for this table, if configured. (id: Clustering)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The time when this table was created, in milliseconds since the epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.</td>
</tr>
<tr>
    <td><CopyableCode code="friendlyName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this table. You can use these to organize and group your tables.</td>
</tr>
<tr>
    <td><CopyableCode code="rangePartitioning" /></td>
    <td><code>object</code></td>
    <td>The range partitioning for this table. (id: RangePartitioning)</td>
</tr>
<tr>
    <td><CopyableCode code="requirePartitionFilter" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, queries including this table must specify a partition filter. This filter is used for partition elimination. (default: false)</td>
</tr>
<tr>
    <td><CopyableCode code="tableReference" /></td>
    <td><code>object</code></td>
    <td>A reference uniquely identifying table. (id: TableReference)</td>
</tr>
<tr>
    <td><CopyableCode code="timePartitioning" /></td>
    <td><code>object</code></td>
    <td>The time-based partitioning for this table. (id: TimePartitioning)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of table.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>object</code></td>
    <td>Information about a logical view.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td><a href="#parameter-selectedFields"><code>selectedFields</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all tables in the specified dataset. Requires the READER dataset role.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a></td>
    <td></td>
    <td>Creates a new, empty table in the dataset.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td><a href="#parameter-autodetect_schema"><code>autodetect_schema</code></a></td>
    <td>Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td><a href="#parameter-autodetect_schema"><code>autodetect_schema</code></a></td>
    <td>Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+datasetId"><code>+datasetId</code></a>, <a href="#parameter-+tableId"><code>+tableId</code></a></td>
    <td></td>
    <td>Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.</td>
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
<tr id="parameter-+tableId">
    <td><CopyableCode code="+tableId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-autodetect_schema">
    <td><CopyableCode code="autodetect_schema" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-selectedFields">
    <td><CopyableCode code="selectedFields" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.

```sql
SELECT
id,
biglakeConfiguration,
cloneDefinition,
clustering,
creationTime,
defaultCollation,
defaultRoundingMode,
description,
encryptionConfiguration,
etag,
expirationTime,
externalCatalogTableOptions,
externalDataConfiguration,
friendlyName,
kind,
labels,
lastModifiedTime,
location,
managedTableType,
materializedView,
materializedViewStatus,
maxStaleness,
model,
numActiveLogicalBytes,
numActivePhysicalBytes,
numBytes,
numCurrentPhysicalBytes,
numLongTermBytes,
numLongTermLogicalBytes,
numLongTermPhysicalBytes,
numPartitions,
numPhysicalBytes,
numRows,
numTimeTravelPhysicalBytes,
numTotalLogicalBytes,
numTotalPhysicalBytes,
partitionDefinition,
rangePartitioning,
replicas,
requirePartitionFilter,
resourceTags,
restrictions,
schema,
selfLink,
snapshotDefinition,
streamingBuffer,
tableConstraints,
tableReference,
tableReplicationInfo,
timePartitioning,
type,
view
FROM google.bigquery.tables
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
AND +tableId = '{{ +tableId }}' -- required
AND selectedFields = '{{ selectedFields }}'
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists all tables in the specified dataset. Requires the READER dataset role.

```sql
SELECT
id,
clustering,
creationTime,
expirationTime,
friendlyName,
kind,
labels,
rangePartitioning,
requirePartitionFilter,
tableReference,
timePartitioning,
type,
view
FROM google.bigquery.tables
WHERE projectId = '{{ projectId }}' -- required
AND +datasetId = '{{ +datasetId }}' -- required
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

Creates a new, empty table in the dataset.

```sql
INSERT INTO google.bigquery.tables (
data__biglakeConfiguration,
data__clustering,
data__defaultCollation,
data__defaultRoundingMode,
data__description,
data__encryptionConfiguration,
data__expirationTime,
data__externalCatalogTableOptions,
data__externalDataConfiguration,
data__friendlyName,
data__kind,
data__labels,
data__managedTableType,
data__materializedView,
data__maxStaleness,
data__model,
data__partitionDefinition,
data__rangePartitioning,
data__requirePartitionFilter,
data__resourceTags,
data__schema,
data__tableConstraints,
data__tableReference,
data__tableReplicationInfo,
data__timePartitioning,
data__view,
projectId,
+datasetId
)
SELECT 
'{{ biglakeConfiguration }}',
'{{ clustering }}',
'{{ defaultCollation }}',
'{{ defaultRoundingMode }}',
'{{ description }}',
'{{ encryptionConfiguration }}',
'{{ expirationTime }}',
'{{ externalCatalogTableOptions }}',
'{{ externalDataConfiguration }}',
'{{ friendlyName }}',
'{{ kind }}',
'{{ labels }}',
'{{ managedTableType }}',
'{{ materializedView }}',
'{{ maxStaleness }}',
'{{ model }}',
'{{ partitionDefinition }}',
'{{ rangePartitioning }}',
{{ requirePartitionFilter }},
'{{ resourceTags }}',
'{{ schema }}',
'{{ tableConstraints }}',
'{{ tableReference }}',
'{{ tableReplicationInfo }}',
'{{ timePartitioning }}',
'{{ view }}',
'{{ projectId }}',
'{{ +datasetId }}'
RETURNING
id,
biglakeConfiguration,
cloneDefinition,
clustering,
creationTime,
defaultCollation,
defaultRoundingMode,
description,
encryptionConfiguration,
etag,
expirationTime,
externalCatalogTableOptions,
externalDataConfiguration,
friendlyName,
kind,
labels,
lastModifiedTime,
location,
managedTableType,
materializedView,
materializedViewStatus,
maxStaleness,
model,
numActiveLogicalBytes,
numActivePhysicalBytes,
numBytes,
numCurrentPhysicalBytes,
numLongTermBytes,
numLongTermLogicalBytes,
numLongTermPhysicalBytes,
numPartitions,
numPhysicalBytes,
numRows,
numTimeTravelPhysicalBytes,
numTotalLogicalBytes,
numTotalPhysicalBytes,
partitionDefinition,
rangePartitioning,
replicas,
requirePartitionFilter,
resourceTags,
restrictions,
schema,
selfLink,
snapshotDefinition,
streamingBuffer,
tableConstraints,
tableReference,
tableReplicationInfo,
timePartitioning,
type,
view
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tables
  props:
    - name: projectId
      value: string
      description: Required parameter for the tables resource.
    - name: +datasetId
      value: string
      description: Required parameter for the tables resource.
    - name: biglakeConfiguration
      value: object
      description: >
        Optional. Specifies the configuration of a BigQuery table for Apache Iceberg.
        
    - name: clustering
      value: object
      description: >
        Clustering specification for the table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.
        
    - name: defaultCollation
      value: string
      description: >
        Optional. Defines the default collation specification of new STRING fields in the table. During table creation or update, if a STRING field is added to this table without explicit collation specified, then the table inherits the table default collation. A change to this field affects only fields added afterwards, and does not alter the existing fields. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
        
    - name: defaultRoundingMode
      value: string
      description: >
        Optional. Defines the default rounding mode specification of new decimal fields (NUMERIC OR BIGNUMERIC) in the table. During table creation or update, if a decimal field is added to this table without an explicit rounding mode specified, then the field inherits the table default rounding mode. Changing this field doesn't affect existing fields.
        
      valid_values: ['ROUNDING_MODE_UNSPECIFIED', 'ROUND_HALF_AWAY_FROM_ZERO', 'ROUND_HALF_EVEN']
    - name: description
      value: string
      description: >
        Optional. A user-friendly description of this table.
        
    - name: encryptionConfiguration
      value: object
      description: >
        Custom encryption configuration (e.g., Cloud KMS keys).
        
    - name: expirationTime
      value: string
      description: >
        Optional. The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
        
    - name: externalCatalogTableOptions
      value: object
      description: >
        Optional. Options defining open source compatible table.
        
    - name: externalDataConfiguration
      value: object
      description: >
        Optional. Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
        
    - name: friendlyName
      value: string
      description: >
        Optional. A descriptive name for this table.
        
    - name: kind
      value: string
      description: >
        The type of resource ID.
        
      default: bigquery#table
    - name: labels
      value: object
      description: >
        The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
        
    - name: managedTableType
      value: string
      description: >
        Optional. If set, overrides the default managed table type configured in the dataset.
        
      valid_values: ['MANAGED_TABLE_TYPE_UNSPECIFIED', 'NATIVE', 'BIGLAKE']
    - name: materializedView
      value: object
      description: >
        Optional. The materialized view definition.
        
    - name: maxStaleness
      value: string
      description: >
        Optional. The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.
        
    - name: model
      value: object
      description: >
        Deprecated.
        
    - name: partitionDefinition
      value: object
      description: >
        Optional. The partition information for all table formats, including managed partitioned tables, hive partitioned tables, iceberg partitioned, and metastore partitioned tables. This field is only populated for metastore partitioned tables. For other table formats, this is an output only field.
        
    - name: rangePartitioning
      value: object
      description: >
        If specified, configures range partitioning for this table.
        
    - name: requirePartitionFilter
      value: boolean
      description: >
        Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
        
      default: false
    - name: resourceTags
      value: object
      description: >
        [Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production".
        
    - name: schema
      value: object
      description: >
        Optional. Describes the schema of this table.
        
    - name: tableConstraints
      value: object
      description: >
        Optional. Tables Primary Key and Foreign Key information
        
    - name: tableReference
      value: object
      description: >
        Required. Reference describing the ID of this table.
        
    - name: tableReplicationInfo
      value: object
      description: >
        Optional. Table replication info for table created `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`
        
    - name: timePartitioning
      value: object
      description: >
        If specified, configures time-based partitioning for this table.
        
    - name: view
      value: object
      description: >
        Optional. The view definition.
        
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

Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.

```sql
UPDATE google.bigquery.tables
SET 
data__biglakeConfiguration = '{{ biglakeConfiguration }}',
data__clustering = '{{ clustering }}',
data__defaultCollation = '{{ defaultCollation }}',
data__defaultRoundingMode = '{{ defaultRoundingMode }}',
data__description = '{{ description }}',
data__encryptionConfiguration = '{{ encryptionConfiguration }}',
data__expirationTime = '{{ expirationTime }}',
data__externalCatalogTableOptions = '{{ externalCatalogTableOptions }}',
data__externalDataConfiguration = '{{ externalDataConfiguration }}',
data__friendlyName = '{{ friendlyName }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__managedTableType = '{{ managedTableType }}',
data__materializedView = '{{ materializedView }}',
data__maxStaleness = '{{ maxStaleness }}',
data__model = '{{ model }}',
data__partitionDefinition = '{{ partitionDefinition }}',
data__rangePartitioning = '{{ rangePartitioning }}',
data__requirePartitionFilter = {{ requirePartitionFilter }},
data__resourceTags = '{{ resourceTags }}',
data__schema = '{{ schema }}',
data__tableConstraints = '{{ tableConstraints }}',
data__tableReference = '{{ tableReference }}',
data__tableReplicationInfo = '{{ tableReplicationInfo }}',
data__timePartitioning = '{{ timePartitioning }}',
data__view = '{{ view }}'
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +tableId = '{{ +tableId }}' --required
AND autodetect_schema = {{ autodetect_schema}}
RETURNING
id,
biglakeConfiguration,
cloneDefinition,
clustering,
creationTime,
defaultCollation,
defaultRoundingMode,
description,
encryptionConfiguration,
etag,
expirationTime,
externalCatalogTableOptions,
externalDataConfiguration,
friendlyName,
kind,
labels,
lastModifiedTime,
location,
managedTableType,
materializedView,
materializedViewStatus,
maxStaleness,
model,
numActiveLogicalBytes,
numActivePhysicalBytes,
numBytes,
numCurrentPhysicalBytes,
numLongTermBytes,
numLongTermLogicalBytes,
numLongTermPhysicalBytes,
numPartitions,
numPhysicalBytes,
numRows,
numTimeTravelPhysicalBytes,
numTotalLogicalBytes,
numTotalPhysicalBytes,
partitionDefinition,
rangePartitioning,
replicas,
requirePartitionFilter,
resourceTags,
restrictions,
schema,
selfLink,
snapshotDefinition,
streamingBuffer,
tableConstraints,
tableReference,
tableReplicationInfo,
timePartitioning,
type,
view;
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

Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.

```sql
REPLACE google.bigquery.tables
SET 
data__biglakeConfiguration = '{{ biglakeConfiguration }}',
data__clustering = '{{ clustering }}',
data__defaultCollation = '{{ defaultCollation }}',
data__defaultRoundingMode = '{{ defaultRoundingMode }}',
data__description = '{{ description }}',
data__encryptionConfiguration = '{{ encryptionConfiguration }}',
data__expirationTime = '{{ expirationTime }}',
data__externalCatalogTableOptions = '{{ externalCatalogTableOptions }}',
data__externalDataConfiguration = '{{ externalDataConfiguration }}',
data__friendlyName = '{{ friendlyName }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__managedTableType = '{{ managedTableType }}',
data__materializedView = '{{ materializedView }}',
data__maxStaleness = '{{ maxStaleness }}',
data__model = '{{ model }}',
data__partitionDefinition = '{{ partitionDefinition }}',
data__rangePartitioning = '{{ rangePartitioning }}',
data__requirePartitionFilter = {{ requirePartitionFilter }},
data__resourceTags = '{{ resourceTags }}',
data__schema = '{{ schema }}',
data__tableConstraints = '{{ tableConstraints }}',
data__tableReference = '{{ tableReference }}',
data__tableReplicationInfo = '{{ tableReplicationInfo }}',
data__timePartitioning = '{{ timePartitioning }}',
data__view = '{{ view }}'
WHERE 
projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +tableId = '{{ +tableId }}' --required
AND autodetect_schema = {{ autodetect_schema}}
RETURNING
id,
biglakeConfiguration,
cloneDefinition,
clustering,
creationTime,
defaultCollation,
defaultRoundingMode,
description,
encryptionConfiguration,
etag,
expirationTime,
externalCatalogTableOptions,
externalDataConfiguration,
friendlyName,
kind,
labels,
lastModifiedTime,
location,
managedTableType,
materializedView,
materializedViewStatus,
maxStaleness,
model,
numActiveLogicalBytes,
numActivePhysicalBytes,
numBytes,
numCurrentPhysicalBytes,
numLongTermBytes,
numLongTermLogicalBytes,
numLongTermPhysicalBytes,
numPartitions,
numPhysicalBytes,
numRows,
numTimeTravelPhysicalBytes,
numTotalLogicalBytes,
numTotalPhysicalBytes,
partitionDefinition,
rangePartitioning,
replicas,
requirePartitionFilter,
resourceTags,
restrictions,
schema,
selfLink,
snapshotDefinition,
streamingBuffer,
tableConstraints,
tableReference,
tableReplicationInfo,
timePartitioning,
type,
view;
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

Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.

```sql
DELETE FROM google.bigquery.tables
WHERE projectId = '{{ projectId }}' --required
AND +datasetId = '{{ +datasetId }}' --required
AND +tableId = '{{ +tableId }}' --required;
```
</TabItem>
</Tabs>
