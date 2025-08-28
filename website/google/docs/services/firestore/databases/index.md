--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - firestore
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.databases" /></td></tr>
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
    <td>The resource name of the Database. Format: `projects/&#123;project&#125;/databases/&#123;database&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineIntegrationMode" /></td>
    <td><code>string</code></td>
    <td>The App Engine integration mode to use for this database.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Presence indicates CMEK is enabled for this database. (id: GoogleFirestoreAdminV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="concurrencyMode" /></td>
    <td><code>string</code></td>
    <td>The concurrency control mode to use for this database.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>Immutable. The edition of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteProtectionState" /></td>
    <td><code>string</code></td>
    <td>State of delete protection for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which this database was deleted. Only set if the database has been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="earliestVersionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with `now - version_retention_period`. This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="freeTier" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Background: Free tier is the ability of a Firestore database to use a small amount of resources every day without being charged. Once usage exceeds the free tier limit further usage is charged. Whether this database can make use of the free tier. Only one database per project can be eligible for the free tier. The first (or next) database that is created in a project without a free tier database will be marked as eligible for the free tier. Databases that are created while there is a free tier database will not be eligible for the free tier.</td>
</tr>
<tr>
    <td><CopyableCode code="keyPrefix" /></td>
    <td><code>string</code></td>
    <td>Output only. The key_prefix for this database. This key_prefix is used, in combination with the project ID ("~") to construct the application ID that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo).</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.</td>
</tr>
<tr>
    <td><CopyableCode code="pointInTimeRecoveryEnablement" /></td>
    <td><code>string</code></td>
    <td>Whether to enable the PITR feature on this database.</td>
</tr>
<tr>
    <td><CopyableCode code="previousId" /></td>
    <td><code>string</code></td>
    <td>Output only. The database resource's prior database ID. This field is only populated for deleted databases.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the provenance of this database. (id: GoogleFirestoreAdminV1SourceInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated UUID4 for this Database.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database.</td>
</tr>
<tr>
    <td><CopyableCode code="versionRetentionPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The period during which past versions of data are retained in the database. Any read or query can specify a `read_time` within this window, and will read the state of the database at that time. If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour.</td>
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
    <td><CopyableCode code="databases" /></td>
    <td><code>array</code></td>
    <td>The databases in the project.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>In the event that data about individual databases cannot be listed they will be recorded here. An example entry might be: projects/some_project/locations/some_location This can happen if the Cloud Region that the Database resides in is currently unavailable. In this case we can't fetch all the details about the database. You may be able to get a more detailed error message (or possibly fetch the resource) by sending a 'Get' request for the resource or a 'List' request for the specific location.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Gets information about a database.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>List all the databases in the project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a></td>
    <td>Create a database.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a database.</td>
</tr>
<tr>
    <td><a href="#bulk_delete_documents"><CopyableCode code="bulk_delete_documents" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Bulk deletes a subset of documents from Google Cloud Firestore. Documents created or updated after the underlying system starts to process the request will not be deleted. The bulk delete occurs in the background and its progress can be monitored and managed via the Operation resource that is created. For more details on bulk delete behavior, refer to: https://cloud.google.com/firestore/docs/manage-data/bulk-delete</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a database.</td>
</tr>
<tr>
    <td><a href="#export_documents"><CopyableCode code="export_documents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import</td>
</tr>
<tr>
    <td><a href="#import_documents"><CopyableCode code="import_documents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed.</td>
</tr>
<tr>
    <td><a href="#clone"><CopyableCode code="clone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new database by cloning an existing one. The new database must be in the same cloud region or multi-region location as the existing database. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing database. The long-running operation can be used to track the progress of the clone, with the Operation's metadata field type being the CloneDatabaseMetadata. The response type is the Database if the clone was successful. The new database is not readable or writeable until the LRO has completed.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-databaseId">
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
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

Gets information about a database.

```sql
SELECT
name,
appEngineIntegrationMode,
cmekConfig,
concurrencyMode,
createTime,
databaseEdition,
deleteProtectionState,
deleteTime,
earliestVersionTime,
etag,
freeTier,
keyPrefix,
locationId,
pointInTimeRecoveryEnablement,
previousId,
sourceInfo,
tags,
type,
uid,
updateTime,
versionRetentionPeriod
FROM google.firestore.databases
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List all the databases in the project.

```sql
SELECT
databases,
unreachable
FROM google.firestore.databases
WHERE projectsId = '{{ projectsId }}' -- required
AND showDeleted = '{{ showDeleted }}';
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

Create a database.

```sql
INSERT INTO google.firestore.databases (
data__name,
data__locationId,
data__type,
data__concurrencyMode,
data__pointInTimeRecoveryEnablement,
data__appEngineIntegrationMode,
data__deleteProtectionState,
data__cmekConfig,
data__tags,
data__etag,
data__databaseEdition,
projectsId,
databaseId
)
SELECT 
'{{ name }}',
'{{ locationId }}',
'{{ type }}',
'{{ concurrencyMode }}',
'{{ pointInTimeRecoveryEnablement }}',
'{{ appEngineIntegrationMode }}',
'{{ deleteProtectionState }}',
'{{ cmekConfig }}',
'{{ tags }}',
'{{ etag }}',
'{{ databaseEdition }}',
'{{ projectsId }}',
'{{ databaseId }}'
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
    - name: name
      value: string
      description: >
        The resource name of the Database. Format: `projects/{project}/databases/{database}`
        
    - name: locationId
      value: string
      description: >
        The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.
        
    - name: type
      value: string
      description: >
        The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.
        
      valid_values: ['DATABASE_TYPE_UNSPECIFIED', 'FIRESTORE_NATIVE', 'DATASTORE_MODE']
    - name: concurrencyMode
      value: string
      description: >
        The concurrency control mode to use for this database.
        
      valid_values: ['CONCURRENCY_MODE_UNSPECIFIED', 'OPTIMISTIC', 'PESSIMISTIC', 'OPTIMISTIC_WITH_ENTITY_GROUPS']
    - name: pointInTimeRecoveryEnablement
      value: string
      description: >
        Whether to enable the PITR feature on this database.
        
      valid_values: ['POINT_IN_TIME_RECOVERY_ENABLEMENT_UNSPECIFIED', 'POINT_IN_TIME_RECOVERY_ENABLED', 'POINT_IN_TIME_RECOVERY_DISABLED']
    - name: appEngineIntegrationMode
      value: string
      description: >
        The App Engine integration mode to use for this database.
        
      valid_values: ['APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED', 'ENABLED', 'DISABLED']
    - name: deleteProtectionState
      value: string
      description: >
        State of delete protection for the database.
        
      valid_values: ['DELETE_PROTECTION_STATE_UNSPECIFIED', 'DELETE_PROTECTION_DISABLED', 'DELETE_PROTECTION_ENABLED']
    - name: cmekConfig
      value: object
      description: >
        Optional. Presence indicates CMEK is enabled for this database.
        
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: databaseEdition
      value: string
      description: >
        Immutable. The edition of the database.
        
      valid_values: ['DATABASE_EDITION_UNSPECIFIED', 'STANDARD', 'ENTERPRISE']
    - name: databaseId
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

Updates a database.

```sql
UPDATE google.firestore.databases
SET 
data__name = '{{ name }}',
data__locationId = '{{ locationId }}',
data__type = '{{ type }}',
data__concurrencyMode = '{{ concurrencyMode }}',
data__pointInTimeRecoveryEnablement = '{{ pointInTimeRecoveryEnablement }}',
data__appEngineIntegrationMode = '{{ appEngineIntegrationMode }}',
data__deleteProtectionState = '{{ deleteProtectionState }}',
data__cmekConfig = '{{ cmekConfig }}',
data__tags = '{{ tags }}',
data__etag = '{{ etag }}',
data__databaseEdition = '{{ databaseEdition }}'
WHERE 
projectsId = '{{ projectsId }}' --required
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
    defaultValue="bulk_delete_documents"
    values={[
        { label: 'bulk_delete_documents', value: 'bulk_delete_documents' },
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="bulk_delete_documents">

Bulk deletes a subset of documents from Google Cloud Firestore. Documents created or updated after the underlying system starts to process the request will not be deleted. The bulk delete occurs in the background and its progress can be monitored and managed via the Operation resource that is created. For more details on bulk delete behavior, refer to: https://cloud.google.com/firestore/docs/manage-data/bulk-delete

```sql
DELETE FROM google.firestore.databases
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required;
```
</TabItem>
<TabItem value="delete">

Deletes a database.

```sql
DELETE FROM google.firestore.databases
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_documents"
    values={[
        { label: 'export_documents', value: 'export_documents' },
        { label: 'import_documents', value: 'import_documents' },
        { label: 'restore', value: 'restore' },
        { label: 'clone', value: 'clone' }
    ]}
>
<TabItem value="export_documents">

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import

```sql
EXEC google.firestore.databases.export_documents 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"collectionIds": "{{ collectionIds }}", 
"outputUriPrefix": "{{ outputUriPrefix }}", 
"namespaceIds": "{{ namespaceIds }}", 
"snapshotTime": "{{ snapshotTime }}"
}';
```
</TabItem>
<TabItem value="import_documents">

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

```sql
EXEC google.firestore.databases.import_documents 
@projectsId='{{ projectsId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"collectionIds": "{{ collectionIds }}", 
"inputUriPrefix": "{{ inputUriPrefix }}", 
"namespaceIds": "{{ namespaceIds }}"
}';
```
</TabItem>
<TabItem value="restore">

Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed.

```sql
EXEC google.firestore.databases.restore 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"backup": "{{ backup }}", 
"encryptionConfig": "{{ encryptionConfig }}", 
"tags": "{{ tags }}"
}';
```
</TabItem>
<TabItem value="clone">

Creates a new database by cloning an existing one. The new database must be in the same cloud region or multi-region location as the existing database. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing database. The long-running operation can be used to track the progress of the clone, with the Operation's metadata field type being the CloneDatabaseMetadata. The response type is the Database if the clone was successful. The new database is not readable or writeable until the LRO has completed.

```sql
EXEC google.firestore.databases.clone 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"pitrSnapshot": "{{ pitrSnapshot }}", 
"encryptionConfig": "{{ encryptionConfig }}", 
"tags": "{{ tags }}"
}';
```
</TabItem>
</Tabs>
