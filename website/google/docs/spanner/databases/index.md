--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - spanner
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>databases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instances_databases_get"
    values={[
        { label: 'projects_instances_databases_get', value: 'projects_instances_databases_get' },
        { label: 'projects_instances_databases_list', value: 'projects_instances_databases_list' }
    ]}
>
<TabItem value="projects_instances_databases_get">

A Cloud Spanner database.

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
    <td>Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If exists, the time at which the database creation started.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDialect" /></td>
    <td><code>string</code></td>
    <td>Output only. The dialect of the Cloud Spanner Database.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLeader" /></td>
    <td><code>string</code></td>
    <td>Output only. The read-write region which contains the database's leader replicas. This is the same as the value of default_leader database option set using DatabaseAdmin.CreateDatabase or DatabaseAdmin.UpdateDatabaseDdl. If not explicitly set, this is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="earliestVersionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Earliest timestamp at which older versions of the data can be read. This value is continuously updated by Cloud Spanner and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.</td>
</tr>
<tr>
    <td><CopyableCode code="enableDropProtection" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether drop protection is enabled for this database. Defaults to false, if not set. For more details, please see how to [prevent accidental database deletion](https://cloud.google.com/spanner/docs/prevent-database-deletion).</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. For databases that are using customer managed encryption, this field contains the encryption configuration for the database. For databases that are using Google default or other types of encryption, this field is empty. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>array</code></td>
    <td>Output only. For databases that are using customer managed encryption, this field contains the encryption information for the database, such as all Cloud KMS key versions that are in use. The `encryption_status` field inside of each `EncryptionInfo` is not populated. For databases that are using Google default or other types of encryption, this field is empty. This field is propagated lazily from the backend. There might be a delay from when a key version is being used and when it appears in this field.</td>
</tr>
<tr>
    <td><CopyableCode code="quorumInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Applicable only for databases that use dual-region instance configurations. Contains information about the quorum. (id: QuorumInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, the database is being updated. If false, there are no ongoing update operations for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Applicable only for restored databases. Contains information about the restore source. (id: RestoreInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current database state.</td>
</tr>
<tr>
    <td><CopyableCode code="versionRetentionPeriod" /></td>
    <td><code>string</code></td>
    <td>Output only. The period in which Cloud Spanner retains all versions of data for the database. This is the same as the value of version_retention_period database option set using UpdateDatabaseDdl. Defaults to 1 hour, if not set.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instances_databases_list">

The response for ListDatabases.

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
    <td><CopyableCode code="databases" /></td>
    <td><code>array</code></td>
    <td>Databases that matched the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>`next_page_token` can be sent in a subsequent ListDatabases call to fetch more of the matching databases.</td>
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
    <td><a href="#projects_instances_databases_get"><CopyableCode code="projects_instances_databases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Gets the state of a Cloud Spanner database.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_list"><CopyableCode code="projects_instances_databases_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Cloud Spanner databases.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_create"><CopyableCode code="projects_instances_databases_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Creates a new Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_patch"><CopyableCode code="projects_instances_databases_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Cloud Spanner database. The returned long-running operation can be used to track the progress of updating the database. If the named database does not exist, returns `NOT_FOUND`. While the operation is pending: * The database's reconciling field is set to true. * Cancelling the operation is best-effort. If the cancellation succeeds, the operation metadata's cancel_time is set, the updates are reverted, and the operation terminates with a `CANCELLED` status. * New UpdateDatabase requests will return a `FAILED_PRECONDITION` error until the pending operation is done (returns successfully or with error). * Reading the database via the API continues to give the pre-request values. Upon completion of the returned operation: * The new values are in effect and readable via the API. * The database's reconciling field becomes false. The returned long-running operation will have a name of the format `projects//instances//databases//operations/` and can be used to track the database modification. The metadata field type is UpdateDatabaseMetadata. The response field type is Database, if successful.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_drop_database"><CopyableCode code="projects_instances_databases_drop_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_changequorum"><CopyableCode code="projects_instances_databases_changequorum" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>`ChangeQuorum` is strictly restricted to databases that use dual-region instance configurations. Initiates a background operation to change the quorum of a database from dual-region mode to single-region mode or vice versa. The returned long-running operation has a name of the format `projects//instances//databases//operations/` and can be used to track execution of the `ChangeQuorum`. The metadata field type is ChangeQuorumMetadata. Authorization requires `spanner.databases.changequorum` permission on the resource database.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_restore"><CopyableCode code="projects_instances_databases_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.</td>
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
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
    defaultValue="projects_instances_databases_get"
    values={[
        { label: 'projects_instances_databases_get', value: 'projects_instances_databases_get' },
        { label: 'projects_instances_databases_list', value: 'projects_instances_databases_list' }
    ]}
>
<TabItem value="projects_instances_databases_get">

Gets the state of a Cloud Spanner database.

```sql
SELECT
name,
createTime,
databaseDialect,
defaultLeader,
earliestVersionTime,
enableDropProtection,
encryptionConfig,
encryptionInfo,
quorumInfo,
reconciling,
restoreInfo,
state,
versionRetentionPeriod
FROM google.spanner.databases
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND databasesId = '{{ databasesId }}' -- required;
```
</TabItem>
<TabItem value="projects_instances_databases_list">

Lists Cloud Spanner databases.

```sql
SELECT
databases,
nextPageToken
FROM google.spanner.databases
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instances_databases_create"
    values={[
        { label: 'projects_instances_databases_create', value: 'projects_instances_databases_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_databases_create">

Creates a new Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.

```sql
INSERT INTO google.spanner.databases (
data__createStatement,
data__extraStatements,
data__encryptionConfig,
data__databaseDialect,
data__protoDescriptors,
projectsId,
instancesId
)
SELECT 
'{{ createStatement }}',
'{{ extraStatements }}',
'{{ encryptionConfig }}',
'{{ databaseDialect }}',
'{{ protoDescriptors }}',
'{{ projectsId }}',
'{{ instancesId }}'
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
- name: databases
  props:
    - name: projectsId
      value: string
      description: Required parameter for the databases resource.
    - name: instancesId
      value: string
      description: Required parameter for the databases resource.
    - name: createStatement
      value: string
      description: >
        Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``).
        
    - name: extraStatements
      value: array
      description: >
        Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.
        
    - name: encryptionConfig
      value: object
      description: >
        Optional. The encryption configuration for the database. If this field is not specified, Cloud Spanner will encrypt/decrypt all data at rest using Google default encryption.
        
    - name: databaseDialect
      value: string
      description: >
        Optional. The dialect of the Cloud Spanner Database.
        
      valid_values: ['DATABASE_DIALECT_UNSPECIFIED', 'GOOGLE_STANDARD_SQL', 'POSTGRESQL']
    - name: protoDescriptors
      value: string
      description: >
        Optional. Proto descriptors used by `CREATE/ALTER PROTO BUNDLE` statements in 'extra_statements'. Contains a protobuf-serialized [`google.protobuf.FileDescriptorSet`](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto) descriptor set. To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run ``` $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto ``` For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_instances_databases_patch"
    values={[
        { label: 'projects_instances_databases_patch', value: 'projects_instances_databases_patch' }
    ]}
>
<TabItem value="projects_instances_databases_patch">

Updates a Cloud Spanner database. The returned long-running operation can be used to track the progress of updating the database. If the named database does not exist, returns `NOT_FOUND`. While the operation is pending: * The database's reconciling field is set to true. * Cancelling the operation is best-effort. If the cancellation succeeds, the operation metadata's cancel_time is set, the updates are reverted, and the operation terminates with a `CANCELLED` status. * New UpdateDatabase requests will return a `FAILED_PRECONDITION` error until the pending operation is done (returns successfully or with error). * Reading the database via the API continues to give the pre-request values. Upon completion of the returned operation: * The new values are in effect and readable via the API. * The database's reconciling field becomes false. The returned long-running operation will have a name of the format `projects//instances//databases//operations/` and can be used to track the database modification. The metadata field type is UpdateDatabaseMetadata. The response field type is Database, if successful.

```sql
UPDATE google.spanner.databases
SET 
data__name = '{{ name }}',
data__enableDropProtection = {{ enableDropProtection }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND updateMask = '{{ updateMask}}'
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
    defaultValue="projects_instances_databases_drop_database"
    values={[
        { label: 'projects_instances_databases_drop_database', value: 'projects_instances_databases_drop_database' }
    ]}
>
<TabItem value="projects_instances_databases_drop_database">

Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.

```sql
DELETE FROM google.spanner.databases
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND databasesId = '{{ databasesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_instances_databases_changequorum"
    values={[
        { label: 'projects_instances_databases_changequorum', value: 'projects_instances_databases_changequorum' },
        { label: 'projects_instances_databases_restore', value: 'projects_instances_databases_restore' }
    ]}
>
<TabItem value="projects_instances_databases_changequorum">

`ChangeQuorum` is strictly restricted to databases that use dual-region instance configurations. Initiates a background operation to change the quorum of a database from dual-region mode to single-region mode or vice versa. The returned long-running operation has a name of the format `projects//instances//databases//operations/` and can be used to track execution of the `ChangeQuorum`. The metadata field type is ChangeQuorumMetadata. Authorization requires `spanner.databases.changequorum` permission on the resource database.

```sql
EXEC google.spanner.databases.projects_instances_databases_changequorum 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"name": "{{ name }}", 
"quorumType": "{{ quorumType }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_restore">

Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.

```sql
EXEC google.spanner.databases.projects_instances_databases_restore 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"backup": "{{ backup }}", 
"encryptionConfig": "{{ encryptionConfig }}"
}';
```
</TabItem>
</Tabs>
