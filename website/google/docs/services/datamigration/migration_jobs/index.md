--- 
title: migration_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_jobs
  - datamigration
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

Creates, updates, deletes, gets or lists a <code>migration_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>migration_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datamigration.migration_jobs" /></td></tr>
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
    <td>The name (URI) of this migration job resource, in the form of: projects/&#123;project&#125;/locations/&#123;location&#125;/migrationJobs/&#123;migrationJob&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekKeyName" /></td>
    <td><code>string</code></td>
    <td>The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]</td>
</tr>
<tr>
    <td><CopyableCode code="conversionWorkspace" /></td>
    <td><code>object</code></td>
    <td>The conversion workspace used by the migration. (id: ConversionWorkspaceInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name (URI) of the destination connection profile.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatabase" /></td>
    <td><code>object</code></td>
    <td>The database engine type and provider of the destination. (id: DatabaseType)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The migration job display name.</td>
</tr>
<tr>
    <td><CopyableCode code="dumpFlags" /></td>
    <td><code>object</code></td>
    <td>The initial dump flags. This field and the "dump_path" field are mutually exclusive. (id: DumpFlags)</td>
</tr>
<tr>
    <td><CopyableCode code="dumpPath" /></td>
    <td><code>string</code></td>
    <td>The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="dumpType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If the migration job is completed, the time when it was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of state FAILED. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `&#123; "name": "wrench", "mass": "1.3kg", "count": "3" &#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="objectsConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The objects that need to be migrated. (id: MigrationJobObjectsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleToPostgresConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for heterogeneous **Oracle to Cloud SQL for PostgreSQL** and **Oracle to AlloyDB for PostgreSQL** migrations. (id: OracleToPostgresConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Data dump parallelism settings used by the migration. (id: PerformanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Output only. The current migration job phase.</td>
</tr>
<tr>
    <td><CopyableCode code="reverseSshConnectivity" /></td>
    <td><code>object</code></td>
    <td>The details needed to communicate to the source over Reverse SSH tunnel connectivity. (id: ReverseSshConnectivity)</td>
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
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name (URI) of the source connection profile.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDatabase" /></td>
    <td><code>object</code></td>
    <td>The database engine type and provider of the source. (id: DatabaseType)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverHomogeneousMigrationJobConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for SQL Server homogeneous migration. (id: SqlServerHomogeneousMigrationJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverToPostgresConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for heterogeneous **SQL Server to Cloud SQL for PostgreSQL** migrations. (id: SqlServerToPostgresConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current migration job state.</td>
</tr>
<tr>
    <td><CopyableCode code="staticIpConnectivity" /></td>
    <td><code>object</code></td>
    <td>static ip connectivity data (default, no additional details needed). (id: StaticIpConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The migration job type.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="vpcPeeringConnectivity" /></td>
    <td><code>object</code></td>
    <td>The details of the VPC network that the source database is located in. (id: VpcPeeringConnectivity)</td>
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
    <td>The name (URI) of this migration job resource, in the form of: projects/&#123;project&#125;/locations/&#123;location&#125;/migrationJobs/&#123;migrationJob&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="cmekKeyName" /></td>
    <td><code>string</code></td>
    <td>The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]</td>
</tr>
<tr>
    <td><CopyableCode code="conversionWorkspace" /></td>
    <td><code>object</code></td>
    <td>The conversion workspace used by the migration. (id: ConversionWorkspaceInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name (URI) of the destination connection profile.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatabase" /></td>
    <td><code>object</code></td>
    <td>The database engine type and provider of the destination. (id: DatabaseType)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The migration job display name.</td>
</tr>
<tr>
    <td><CopyableCode code="dumpFlags" /></td>
    <td><code>object</code></td>
    <td>The initial dump flags. This field and the "dump_path" field are mutually exclusive. (id: DumpFlags)</td>
</tr>
<tr>
    <td><CopyableCode code="dumpPath" /></td>
    <td><code>string</code></td>
    <td>The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="dumpType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If the migration job is completed, the time when it was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of state FAILED. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `&#123; "name": "wrench", "mass": "1.3kg", "count": "3" &#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="objectsConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The objects that need to be migrated. (id: MigrationJobObjectsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleToPostgresConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for heterogeneous **Oracle to Cloud SQL for PostgreSQL** and **Oracle to AlloyDB for PostgreSQL** migrations. (id: OracleToPostgresConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Data dump parallelism settings used by the migration. (id: PerformanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Output only. The current migration job phase.</td>
</tr>
<tr>
    <td><CopyableCode code="reverseSshConnectivity" /></td>
    <td><code>object</code></td>
    <td>The details needed to communicate to the source over Reverse SSH tunnel connectivity. (id: ReverseSshConnectivity)</td>
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
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name (URI) of the source connection profile.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDatabase" /></td>
    <td><code>object</code></td>
    <td>The database engine type and provider of the source. (id: DatabaseType)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverHomogeneousMigrationJobConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for SQL Server homogeneous migration. (id: SqlServerHomogeneousMigrationJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverToPostgresConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for heterogeneous **SQL Server to Cloud SQL for PostgreSQL** migrations. (id: SqlServerToPostgresConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current migration job state.</td>
</tr>
<tr>
    <td><CopyableCode code="staticIpConnectivity" /></td>
    <td><code>object</code></td>
    <td>static ip connectivity data (default, no additional details needed). (id: StaticIpConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The migration job type.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="vpcPeeringConnectivity" /></td>
    <td><code>object</code></td>
    <td>The details of the VPC network that the source database is located in. (id: VpcPeeringConnectivity)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Gets details of a single migration job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists migration jobs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-migrationJobId"><code>migrationJobId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new migration job in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single migration job.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single migration job.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Start an already created migration job.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Stops a running migration job.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).</td>
</tr>
<tr>
    <td><a href="#promote"><CopyableCode code="promote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.</td>
</tr>
<tr>
    <td><a href="#demote_destination"><CopyableCode code="demote_destination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Demotes the destination database to become a read replica of the source. This is applicable for the following migrations: 1. MySQL to Cloud SQL for MySQL 2. PostgreSQL to Cloud SQL for PostgreSQL 3. PostgreSQL to AlloyDB for PostgreSQL.</td>
</tr>
<tr>
    <td><a href="#verify"><CopyableCode code="verify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.</td>
</tr>
<tr>
    <td><a href="#generate_ssh_script"><CopyableCode code="generate_ssh_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Generate a SSH configuration script to configure the reverse SSH connectivity.</td>
</tr>
<tr>
    <td><a href="#generate_tcp_proxy_script"><CopyableCode code="generate_tcp_proxy_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.</td>
</tr>
<tr>
    <td><a href="#fetch_source_objects"><CopyableCode code="fetch_source_objects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Retrieves objects from the source database that can be selected for data migration. This is applicable for the following migrations: 1. PostgreSQL to Cloud SQL for PostgreSQL 2. PostgreSQL to AlloyDB for PostgreSQL.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-migrationJobsId">
    <td><CopyableCode code="migrationJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
<tr id="parameter-migrationJobId">
    <td><CopyableCode code="migrationJobId" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets details of a single migration job.

```sql
SELECT
name,
cmekKeyName,
conversionWorkspace,
createTime,
destination,
destinationDatabase,
displayName,
dumpFlags,
dumpPath,
dumpType,
duration,
endTime,
error,
filter,
labels,
objectsConfig,
oracleToPostgresConfig,
performanceConfig,
phase,
reverseSshConnectivity,
satisfiesPzi,
satisfiesPzs,
source,
sourceDatabase,
sqlserverHomogeneousMigrationJobConfig,
sqlserverToPostgresConfig,
state,
staticIpConnectivity,
type,
updateTime,
vpcPeeringConnectivity
FROM google.datamigration.migration_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND migrationJobsId = '{{ migrationJobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists migration jobs in a given project and location.

```sql
SELECT
name,
cmekKeyName,
conversionWorkspace,
createTime,
destination,
destinationDatabase,
displayName,
dumpFlags,
dumpPath,
dumpType,
duration,
endTime,
error,
filter,
labels,
objectsConfig,
oracleToPostgresConfig,
performanceConfig,
phase,
reverseSshConnectivity,
satisfiesPzi,
satisfiesPzs,
source,
sourceDatabase,
sqlserverHomogeneousMigrationJobConfig,
sqlserverToPostgresConfig,
state,
staticIpConnectivity,
type,
updateTime,
vpcPeeringConnectivity
FROM google.datamigration.migration_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a new migration job in a given project and location.

```sql
INSERT INTO google.datamigration.migration_jobs (
data__name,
data__labels,
data__displayName,
data__state,
data__type,
data__dumpPath,
data__dumpFlags,
data__source,
data__destination,
data__reverseSshConnectivity,
data__vpcPeeringConnectivity,
data__staticIpConnectivity,
data__sourceDatabase,
data__destinationDatabase,
data__conversionWorkspace,
data__filter,
data__cmekKeyName,
data__performanceConfig,
data__sqlserverHomogeneousMigrationJobConfig,
data__dumpType,
data__oracleToPostgresConfig,
data__sqlserverToPostgresConfig,
data__objectsConfig,
projectsId,
locationsId,
migrationJobId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ displayName }}',
'{{ state }}',
'{{ type }}',
'{{ dumpPath }}',
'{{ dumpFlags }}',
'{{ source }}',
'{{ destination }}',
'{{ reverseSshConnectivity }}',
'{{ vpcPeeringConnectivity }}',
'{{ staticIpConnectivity }}',
'{{ sourceDatabase }}',
'{{ destinationDatabase }}',
'{{ conversionWorkspace }}',
'{{ filter }}',
'{{ cmekKeyName }}',
'{{ performanceConfig }}',
'{{ sqlserverHomogeneousMigrationJobConfig }}',
'{{ dumpType }}',
'{{ oracleToPostgresConfig }}',
'{{ sqlserverToPostgresConfig }}',
'{{ objectsConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ migrationJobId }}',
'{{ requestId }}'
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
- name: migration_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the migration_jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the migration_jobs resource.
    - name: name
      value: string
      description: >
        The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
        
    - name: labels
      value: object
      description: >
        The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
        
    - name: displayName
      value: string
      description: >
        The migration job display name.
        
    - name: state
      value: string
      description: >
        The current migration job state.
        
      valid_values: ['STATE_UNSPECIFIED', 'MAINTENANCE', 'DRAFT', 'CREATING', 'NOT_STARTED', 'RUNNING', 'FAILED', 'COMPLETED', 'DELETING', 'STOPPING', 'STOPPED', 'DELETED', 'UPDATING', 'STARTING', 'RESTARTING', 'RESUMING']
    - name: type
      value: string
      description: >
        Required. The migration job type.
        
      valid_values: ['TYPE_UNSPECIFIED', 'ONE_TIME', 'CONTINUOUS']
    - name: dumpPath
      value: string
      description: >
        The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.
        
    - name: dumpFlags
      value: object
      description: >
        The initial dump flags. This field and the "dump_path" field are mutually exclusive.
        
    - name: source
      value: string
      description: >
        Required. The resource name (URI) of the source connection profile.
        
    - name: destination
      value: string
      description: >
        Required. The resource name (URI) of the destination connection profile.
        
    - name: reverseSshConnectivity
      value: object
      description: >
        The details needed to communicate to the source over Reverse SSH tunnel connectivity.
        
    - name: vpcPeeringConnectivity
      value: object
      description: >
        The details of the VPC network that the source database is located in.
        
    - name: staticIpConnectivity
      value: object
      description: >
        static ip connectivity data (default, no additional details needed).
        
    - name: sourceDatabase
      value: object
      description: >
        The database engine type and provider of the source.
        
    - name: destinationDatabase
      value: object
      description: >
        The database engine type and provider of the destination.
        
    - name: conversionWorkspace
      value: object
      description: >
        The conversion workspace used by the migration.
        
    - name: filter
      value: string
      description: >
        This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.
        
    - name: cmekKeyName
      value: string
      description: >
        The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
        
    - name: performanceConfig
      value: object
      description: >
        Optional. Data dump parallelism settings used by the migration.
        
    - name: sqlserverHomogeneousMigrationJobConfig
      value: object
      description: >
        Optional. Configuration for SQL Server homogeneous migration.
        
    - name: dumpType
      value: string
      description: >
        Optional. The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only.
        
      valid_values: ['DUMP_TYPE_UNSPECIFIED', 'LOGICAL', 'PHYSICAL']
    - name: oracleToPostgresConfig
      value: object
      description: >
        Configuration for heterogeneous **Oracle to Cloud SQL for PostgreSQL** and **Oracle to AlloyDB for PostgreSQL** migrations.
        
    - name: sqlserverToPostgresConfig
      value: object
      description: >
        Configuration for heterogeneous **SQL Server to Cloud SQL for PostgreSQL** migrations.
        
    - name: objectsConfig
      value: object
      description: >
        Optional. The objects that need to be migrated.
        
    - name: migrationJobId
      value: string
    - name: requestId
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

Updates the parameters of a single migration job.

```sql
UPDATE google.datamigration.migration_jobs
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__state = '{{ state }}',
data__type = '{{ type }}',
data__dumpPath = '{{ dumpPath }}',
data__dumpFlags = '{{ dumpFlags }}',
data__source = '{{ source }}',
data__destination = '{{ destination }}',
data__reverseSshConnectivity = '{{ reverseSshConnectivity }}',
data__vpcPeeringConnectivity = '{{ vpcPeeringConnectivity }}',
data__staticIpConnectivity = '{{ staticIpConnectivity }}',
data__sourceDatabase = '{{ sourceDatabase }}',
data__destinationDatabase = '{{ destinationDatabase }}',
data__conversionWorkspace = '{{ conversionWorkspace }}',
data__filter = '{{ filter }}',
data__cmekKeyName = '{{ cmekKeyName }}',
data__performanceConfig = '{{ performanceConfig }}',
data__sqlserverHomogeneousMigrationJobConfig = '{{ sqlserverHomogeneousMigrationJobConfig }}',
data__dumpType = '{{ dumpType }}',
data__oracleToPostgresConfig = '{{ oracleToPostgresConfig }}',
data__sqlserverToPostgresConfig = '{{ sqlserverToPostgresConfig }}',
data__objectsConfig = '{{ objectsConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND migrationJobsId = '{{ migrationJobsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single migration job.

```sql
DELETE FROM google.datamigration.migration_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND migrationJobsId = '{{ migrationJobsId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'resume', value: 'resume' },
        { label: 'promote', value: 'promote' },
        { label: 'demote_destination', value: 'demote_destination' },
        { label: 'verify', value: 'verify' },
        { label: 'restart', value: 'restart' },
        { label: 'generate_ssh_script', value: 'generate_ssh_script' },
        { label: 'generate_tcp_proxy_script', value: 'generate_tcp_proxy_script' },
        { label: 'fetch_source_objects', value: 'fetch_source_objects' }
    ]}
>
<TabItem value="start">

Start an already created migration job.

```sql
EXEC google.datamigration.migration_jobs.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"skipValidation": {{ skipValidation }}
}';
```
</TabItem>
<TabItem value="stop">

Stops a running migration job.

```sql
EXEC google.datamigration.migration_jobs.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required;
```
</TabItem>
<TabItem value="resume">

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

```sql
EXEC google.datamigration.migration_jobs.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"skipValidation": {{ skipValidation }}
}';
```
</TabItem>
<TabItem value="promote">

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

```sql
EXEC google.datamigration.migration_jobs.promote 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"objectsFilter": "{{ objectsFilter }}"
}';
```
</TabItem>
<TabItem value="demote_destination">

Demotes the destination database to become a read replica of the source. This is applicable for the following migrations: 1. MySQL to Cloud SQL for MySQL 2. PostgreSQL to Cloud SQL for PostgreSQL 3. PostgreSQL to AlloyDB for PostgreSQL.

```sql
EXEC google.datamigration.migration_jobs.demote_destination 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required;
```
</TabItem>
<TabItem value="verify">

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

```sql
EXEC google.datamigration.migration_jobs.verify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"updateMask": "{{ updateMask }}", 
"migrationJob": "{{ migrationJob }}"
}';
```
</TabItem>
<TabItem value="restart">

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

```sql
EXEC google.datamigration.migration_jobs.restart 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"skipValidation": {{ skipValidation }}, 
"objectsFilter": "{{ objectsFilter }}", 
"restartFailedObjects": {{ restartFailedObjects }}
}';
```
</TabItem>
<TabItem value="generate_ssh_script">

Generate a SSH configuration script to configure the reverse SSH connectivity.

```sql
EXEC google.datamigration.migration_jobs.generate_ssh_script 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"vm": "{{ vm }}", 
"vmCreationConfig": "{{ vmCreationConfig }}", 
"vmSelectionConfig": "{{ vmSelectionConfig }}", 
"vmPort": {{ vmPort }}
}';
```
</TabItem>
<TabItem value="generate_tcp_proxy_script">

Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.

```sql
EXEC google.datamigration.migration_jobs.generate_tcp_proxy_script 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"vmName": "{{ vmName }}", 
"vmMachineType": "{{ vmMachineType }}", 
"vmZone": "{{ vmZone }}", 
"vmSubnet": "{{ vmSubnet }}"
}';
```
</TabItem>
<TabItem value="fetch_source_objects">

Retrieves objects from the source database that can be selected for data migration. This is applicable for the following migrations: 1. PostgreSQL to Cloud SQL for PostgreSQL 2. PostgreSQL to AlloyDB for PostgreSQL.

```sql
EXEC google.datamigration.migration_jobs.fetch_source_objects 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required;
```
</TabItem>
</Tabs>
