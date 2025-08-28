--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - bigtableadmin
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.tables" /></td></tr>
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
    <td>The unique name of the table. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupPolicy" /></td>
    <td><code>object</code></td>
    <td>If specified, automated backups are enabled for this table. Otherwise, automated backups are disabled. (id: AutomatedBackupPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="changeStreamConfig" /></td>
    <td><code>object</code></td>
    <td>If specified, enable the change stream on this table. Otherwise, the change stream is disabled and the change stream is not retained. (id: ChangeStreamConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterStates" /></td>
    <td><code>object</code></td>
    <td>Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL`</td>
</tr>
<tr>
    <td><CopyableCode code="columnFamilies" /></td>
    <td><code>object</code></td>
    <td>The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="granularity" /></td>
    <td><code>string</code></td>
    <td>Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore. (id: RestoreInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="rowKeySchema" /></td>
    <td><code>object</code></td>
    <td>The row key schema for this table. The schema is used to decode the raw row key bytes into a structured format. The order of field declarations in this schema is important, as it reflects how the raw row key bytes are structured. Currently, this only affects how the key is read via a GoogleSQL query from the ExecuteQuery API. For a SQL query, the _key column is still read as raw bytes. But queries can reference the key fields by name, which will be decoded from _key using provided type and encoding. Queries that reference key fields will fail if they encounter an invalid row key. For example, if _key = "some_id#2024-04-30#\x00\x13\x00\xf3" with the following schema: &#123; fields &#123; field_name: "id" type &#123; string &#123; encoding: utf8_bytes &#123;&#125; &#125; &#125; &#125; fields &#123; field_name: "date" type &#123; string &#123; encoding: utf8_bytes &#123;&#125; &#125; &#125; &#125; fields &#123; field_name: "product_code" type &#123; int64 &#123; encoding: big_endian_bytes &#123;&#125; &#125; &#125; &#125; encoding &#123; delimited_bytes &#123; delimiter: "#" &#125; &#125; &#125; The decoded key parts would be: id = "some_id", date = "2024-04-30", product_code = 1245427 The query "SELECT _key, product_code FROM table" will return two columns: /------------------------------------------------------\ | _key | product_code | | --------------------------------------|--------------| | "some_id#2024-04-30#\x00\x13\x00\xf3" | 1245427 | \------------------------------------------------------/ The schema has the following invariants: (1) The decoded field values are order-preserved. For read, the field values will be decoded in sorted mode from the raw bytes. (2) Every field in the schema must specify a non-empty name. (3) Every field must specify a type with an associated encoding. The type is limited to scalar types only: Array, Map, Aggregate, and Struct are not allowed. (4) The field names must not collide with existing column family names and reserved keywords "_key" and "_timestamp". The following update operations are allowed for row_key_schema: - Update from an empty schema to a new schema. - Remove the existing schema. This operation requires setting the `ignore_warnings` flag to `true`, since it might be a backward incompatible change. Without the flag, the update request will fail with an INVALID_ARGUMENT error. Any other row key schema update operation (e.g. update existing schema columns names or types) is currently unsupported. (id: GoogleBigtableAdminV2TypeStruct)</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td>Output only. Only available with STATS_VIEW, this includes summary statistics about the entire table contents. For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above. (id: TableStats)</td>
</tr>
<tr>
    <td><CopyableCode code="tieredStorageConfig" /></td>
    <td><code>object</code></td>
    <td>Rules to specify what data is stored in each storage tier. Different tiers store data differently, providing different trade-offs between cost and performance. Different parts of a table can be stored separately on different tiers. If a config is specified, tiered storage is enabled for this table. Otherwise, tiered storage is disabled. Only SSD instances can configure tiered storage. (id: TieredStorageConfig)</td>
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
    <td>The unique name of the table. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupPolicy" /></td>
    <td><code>object</code></td>
    <td>If specified, automated backups are enabled for this table. Otherwise, automated backups are disabled. (id: AutomatedBackupPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="changeStreamConfig" /></td>
    <td><code>object</code></td>
    <td>If specified, enable the change stream on this table. Otherwise, the change stream is disabled and the change stream is not retained. (id: ChangeStreamConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterStates" /></td>
    <td><code>object</code></td>
    <td>Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL`</td>
</tr>
<tr>
    <td><CopyableCode code="columnFamilies" /></td>
    <td><code>object</code></td>
    <td>The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="granularity" /></td>
    <td><code>string</code></td>
    <td>Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore. (id: RestoreInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="rowKeySchema" /></td>
    <td><code>object</code></td>
    <td>The row key schema for this table. The schema is used to decode the raw row key bytes into a structured format. The order of field declarations in this schema is important, as it reflects how the raw row key bytes are structured. Currently, this only affects how the key is read via a GoogleSQL query from the ExecuteQuery API. For a SQL query, the _key column is still read as raw bytes. But queries can reference the key fields by name, which will be decoded from _key using provided type and encoding. Queries that reference key fields will fail if they encounter an invalid row key. For example, if _key = "some_id#2024-04-30#\x00\x13\x00\xf3" with the following schema: &#123; fields &#123; field_name: "id" type &#123; string &#123; encoding: utf8_bytes &#123;&#125; &#125; &#125; &#125; fields &#123; field_name: "date" type &#123; string &#123; encoding: utf8_bytes &#123;&#125; &#125; &#125; &#125; fields &#123; field_name: "product_code" type &#123; int64 &#123; encoding: big_endian_bytes &#123;&#125; &#125; &#125; &#125; encoding &#123; delimited_bytes &#123; delimiter: "#" &#125; &#125; &#125; The decoded key parts would be: id = "some_id", date = "2024-04-30", product_code = 1245427 The query "SELECT _key, product_code FROM table" will return two columns: /------------------------------------------------------\ | _key | product_code | | --------------------------------------|--------------| | "some_id#2024-04-30#\x00\x13\x00\xf3" | 1245427 | \------------------------------------------------------/ The schema has the following invariants: (1) The decoded field values are order-preserved. For read, the field values will be decoded in sorted mode from the raw bytes. (2) Every field in the schema must specify a non-empty name. (3) Every field must specify a type with an associated encoding. The type is limited to scalar types only: Array, Map, Aggregate, and Struct are not allowed. (4) The field names must not collide with existing column family names and reserved keywords "_key" and "_timestamp". The following update operations are allowed for row_key_schema: - Update from an empty schema to a new schema. - Remove the existing schema. This operation requires setting the `ignore_warnings` flag to `true`, since it might be a backward incompatible change. Without the flag, the update request will fail with an INVALID_ARGUMENT error. Any other row key schema update operation (e.g. update existing schema columns names or types) is currently unsupported. (id: GoogleBigtableAdminV2TypeStruct)</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td>Output only. Only available with STATS_VIEW, this includes summary statistics about the entire table contents. For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above. (id: TableStats)</td>
</tr>
<tr>
    <td><CopyableCode code="tieredStorageConfig" /></td>
    <td><code>object</code></td>
    <td>Rules to specify what data is stored in each storage tier. Different tiers store data differently, providing different trade-offs between cost and performance. Different parts of a table can be stored separately on different tiers. If a config is specified, tiered storage is enabled for this table. Otherwise, tiered storage is disabled. Only SSD instances can configure tiered storage. (id: TieredStorageConfig)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets metadata information about the specified table.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all tables served from a specified instance.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-ignoreWarnings"><code>ignoreWarnings</code></a></td>
    <td>Updates a specified table.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td></td>
    <td>Permanently deletes a specified table and all of its data.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td></td>
    <td>Restores a specified table which was accidentally deleted.</td>
</tr>
<tr>
    <td><a href="#modify_column_families"><CopyableCode code="modify_column_families" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td></td>
    <td>Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.</td>
</tr>
<tr>
    <td><a href="#drop_row_range"><CopyableCode code="drop_row_range" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td></td>
    <td>Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix. Note that row key prefixes used here are treated as service data. For more information about how service data is handled, see the [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).</td>
</tr>
<tr>
    <td><a href="#generate_consistency_token"><CopyableCode code="generate_consistency_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td></td>
    <td>Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.</td>
</tr>
<tr>
    <td><a href="#check_consistency"><CopyableCode code="check_consistency" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td></td>
    <td>Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tablesId">
    <td><CopyableCode code="tablesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreWarnings">
    <td><CopyableCode code="ignoreWarnings" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets metadata information about the specified table.

```sql
SELECT
name,
automatedBackupPolicy,
changeStreamConfig,
clusterStates,
columnFamilies,
deletionProtection,
granularity,
restoreInfo,
rowKeySchema,
stats,
tieredStorageConfig
FROM google.bigtableadmin.tables
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND tablesId = '{{ tablesId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists all tables served from a specified instance.

```sql
SELECT
name,
automatedBackupPolicy,
changeStreamConfig,
clusterStates,
columnFamilies,
deletionProtection,
granularity,
restoreInfo,
rowKeySchema,
stats,
tieredStorageConfig
FROM google.bigtableadmin.tables
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.

```sql
INSERT INTO google.bigtableadmin.tables (
data__tableId,
data__table,
data__initialSplits,
projectsId,
instancesId
)
SELECT 
'{{ tableId }}',
'{{ table }}',
'{{ initialSplits }}',
'{{ projectsId }}',
'{{ instancesId }}'
RETURNING
name,
automatedBackupPolicy,
changeStreamConfig,
clusterStates,
columnFamilies,
deletionProtection,
granularity,
restoreInfo,
rowKeySchema,
stats,
tieredStorageConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tables
  props:
    - name: projectsId
      value: string
      description: Required parameter for the tables resource.
    - name: instancesId
      value: string
      description: Required parameter for the tables resource.
    - name: tableId
      value: string
      description: >
        Required. The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `{parent}/tables/foobar`. Maximum 50 characters.
        
    - name: table
      value: object
      description: >
        Required. The Table to create.
        
    - name: initialSplits
      value: array
      description: >
        The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, `s1` and `s2`, three tablets will be created, spanning the key ranges: `[, s1), [s1, s2), [s2, )`. Example: * Row keys := `["a", "apple", "custom", "customer_1", "customer_2",` `"other", "zz"]` * initial_split_keys := `["apple", "customer_1", "customer_2", "other"]` * Key assignment: - Tablet 1 `[, apple) => {"a"}.` - Tablet 2 `[apple, customer_1) => {"apple", "custom"}.` - Tablet 3 `[customer_1, customer_2) => {"customer_1"}.` - Tablet 4 `[customer_2, other) => {"customer_2"}.` - Tablet 5 `[other, ) => {"other", "zz"}.`
        
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

Updates a specified table.

```sql
UPDATE google.bigtableadmin.tables
SET 
data__name = '{{ name }}',
data__columnFamilies = '{{ columnFamilies }}',
data__granularity = '{{ granularity }}',
data__changeStreamConfig = '{{ changeStreamConfig }}',
data__deletionProtection = {{ deletionProtection }},
data__automatedBackupPolicy = '{{ automatedBackupPolicy }}',
data__tieredStorageConfig = '{{ tieredStorageConfig }}',
data__rowKeySchema = '{{ rowKeySchema }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND tablesId = '{{ tablesId }}' --required
AND updateMask = '{{ updateMask}}'
AND ignoreWarnings = {{ ignoreWarnings}}
RETURNING
name,
done,
error,
metadata,
response;
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

Permanently deletes a specified table and all of its data.

```sql
DELETE FROM google.bigtableadmin.tables
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND tablesId = '{{ tablesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' },
        { label: 'modify_column_families', value: 'modify_column_families' },
        { label: 'drop_row_range', value: 'drop_row_range' },
        { label: 'generate_consistency_token', value: 'generate_consistency_token' },
        { label: 'check_consistency', value: 'check_consistency' },
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="undelete">

Restores a specified table which was accidentally deleted.

```sql
EXEC google.bigtableadmin.tables.undelete 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@tablesId='{{ tablesId }}' --required;
```
</TabItem>
<TabItem value="modify_column_families">

Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.

```sql
EXEC google.bigtableadmin.tables.modify_column_families 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@tablesId='{{ tablesId }}' --required 
@@json=
'{
"modifications": "{{ modifications }}", 
"ignoreWarnings": {{ ignoreWarnings }}
}';
```
</TabItem>
<TabItem value="drop_row_range">

Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix. Note that row key prefixes used here are treated as service data. For more information about how service data is handled, see the [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).

```sql
EXEC google.bigtableadmin.tables.drop_row_range 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@tablesId='{{ tablesId }}' --required 
@@json=
'{
"rowKeyPrefix": "{{ rowKeyPrefix }}", 
"deleteAllDataFromTable": {{ deleteAllDataFromTable }}
}';
```
</TabItem>
<TabItem value="generate_consistency_token">

Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.

```sql
EXEC google.bigtableadmin.tables.generate_consistency_token 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@tablesId='{{ tablesId }}' --required;
```
</TabItem>
<TabItem value="check_consistency">

Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.

```sql
EXEC google.bigtableadmin.tables.check_consistency 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@tablesId='{{ tablesId }}' --required 
@@json=
'{
"consistencyToken": "{{ consistencyToken }}", 
"standardReadRemoteWrites": "{{ standardReadRemoteWrites }}", 
"dataBoostReadLocalWrites": "{{ dataBoostReadLocalWrites }}"
}';
```
</TabItem>
<TabItem value="restore">

Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.

```sql
EXEC google.bigtableadmin.tables.restore 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"tableId": "{{ tableId }}", 
"backup": "{{ backup }}"
}';
```
</TabItem>
</Tabs>
