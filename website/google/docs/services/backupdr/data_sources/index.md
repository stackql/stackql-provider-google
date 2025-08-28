--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - backupdr
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.data_sources" /></td></tr>
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
    <td>Output only. Identifier. Name of the datasource to create. It must have the format`"projects/&#123;project&#125;/locations/&#123;location&#125;/backupVaults/&#123;backupvault&#125;/dataSources/&#123;datasource&#125;"`. `&#123;datasource&#125;` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="backupBlockedByVaultAccessRestriction" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is set to true if the backup is blocked by vault access restriction.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfigInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of how the resource is configured for backup. (id: BackupConfigInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="backupCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of backups in the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="configState" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup configuration state.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceBackupApplianceApplication" /></td>
    <td><code>object</code></td>
    <td>The backed up resource is a backup appliance application. (id: DataSourceBackupApplianceApplication)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceGcpResource" /></td>
    <td><code>object</code></td>
    <td>The backed up resource is a Google Cloud resource. The word 'DataSource' was included in the names to indicate that this is the representation of the Google Cloud resource used within the DataSource object. (id: DataSourceGcpResource)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user provided metadata. No labels currently defined:</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The DataSource resource instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="totalStoredBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of bytes (metadata and data) stored in this datasource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
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
    <td>Output only. Identifier. Name of the datasource to create. It must have the format`"projects/&#123;project&#125;/locations/&#123;location&#125;/backupVaults/&#123;backupvault&#125;/dataSources/&#123;datasource&#125;"`. `&#123;datasource&#125;` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="backupBlockedByVaultAccessRestriction" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is set to true if the backup is blocked by vault access restriction.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfigInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of how the resource is configured for backup. (id: BackupConfigInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="backupCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of backups in the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="configState" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup configuration state.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceBackupApplianceApplication" /></td>
    <td><code>object</code></td>
    <td>The backed up resource is a backup appliance application. (id: DataSourceBackupApplianceApplication)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceGcpResource" /></td>
    <td><code>object</code></td>
    <td>The backed up resource is a Google Cloud resource. The word 'DataSource' was included in the names to indicate that this is the representation of the Google Cloud resource used within the DataSource object. (id: DataSourceGcpResource)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user provided metadata. No labels currently defined:</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The DataSource resource instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="totalStoredBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of bytes (metadata and data) stored in this datasource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Gets details of a DataSource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists DataSources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the settings of a DataSource.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Deletes a DataSource. This is a custom method instead of a standard delete method because external clients will not delete DataSources except for BackupDR backup appliances.</td>
</tr>
<tr>
    <td><a href="#set_internal_status"><CopyableCode code="set_internal_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Sets the internal status of a DataSource.</td>
</tr>
<tr>
    <td><a href="#initiate_backup"><CopyableCode code="initiate_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Internal only. Initiates a backup.</td>
</tr>
<tr>
    <td><a href="#abandon_backup"><CopyableCode code="abandon_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Internal only. Abandons a backup.</td>
</tr>
<tr>
    <td><a href="#finalize_backup"><CopyableCode code="finalize_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Internal only. Finalize a backup that was started by a call to InitiateBackup.</td>
</tr>
<tr>
    <td><a href="#fetch_access_token"><CopyableCode code="fetch_access_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a>, <a href="#parameter-dataSourcesId"><code>dataSourcesId</code></a></td>
    <td></td>
    <td>Internal only. Fetch access token for a given data source.</td>
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
<tr id="parameter-backupVaultsId">
    <td><CopyableCode code="backupVaultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataSourcesId">
    <td><CopyableCode code="dataSourcesId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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

Gets details of a DataSource.

```sql
SELECT
name,
backupBlockedByVaultAccessRestriction,
backupConfigInfo,
backupCount,
configState,
createTime,
dataSourceBackupApplianceApplication,
dataSourceGcpResource,
etag,
labels,
state,
totalStoredBytes,
updateTime
FROM google.backupdr.data_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required
AND dataSourcesId = '{{ dataSourcesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists DataSources in a given project and location.

```sql
SELECT
name,
backupBlockedByVaultAccessRestriction,
backupConfigInfo,
backupCount,
configState,
createTime,
dataSourceBackupApplianceApplication,
dataSourceGcpResource,
etag,
labels,
state,
totalStoredBytes,
updateTime
FROM google.backupdr.data_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Updates the settings of a DataSource.

```sql
UPDATE google.backupdr.data_sources
SET 
data__labels = '{{ labels }}',
data__backupCount = '{{ backupCount }}',
data__etag = '{{ etag }}',
data__totalStoredBytes = '{{ totalStoredBytes }}',
data__dataSourceGcpResource = '{{ dataSourceGcpResource }}',
data__dataSourceBackupApplianceApplication = '{{ dataSourceBackupApplianceApplication }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
AND dataSourcesId = '{{ dataSourcesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND allowMissing = {{ allowMissing}}
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
    defaultValue="remove"
    values={[
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="remove">

Deletes a DataSource. This is a custom method instead of a standard delete method because external clients will not delete DataSources except for BackupDR backup appliances.

```sql
DELETE FROM google.backupdr.data_sources
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
AND dataSourcesId = '{{ dataSourcesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_internal_status"
    values={[
        { label: 'set_internal_status', value: 'set_internal_status' },
        { label: 'initiate_backup', value: 'initiate_backup' },
        { label: 'abandon_backup', value: 'abandon_backup' },
        { label: 'finalize_backup', value: 'finalize_backup' },
        { label: 'fetch_access_token', value: 'fetch_access_token' }
    ]}
>
<TabItem value="set_internal_status">

Sets the internal status of a DataSource.

```sql
EXEC google.backupdr.data_sources.set_internal_status 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupVaultsId='{{ backupVaultsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required 
@@json=
'{
"value": "{{ value }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="initiate_backup">

Internal only. Initiates a backup.

```sql
EXEC google.backupdr.data_sources.initiate_backup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupVaultsId='{{ backupVaultsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"backupId": "{{ backupId }}"
}';
```
</TabItem>
<TabItem value="abandon_backup">

Internal only. Abandons a backup.

```sql
EXEC google.backupdr.data_sources.abandon_backup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupVaultsId='{{ backupVaultsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="finalize_backup">

Internal only. Finalize a backup that was started by a call to InitiateBackup.

```sql
EXEC google.backupdr.data_sources.finalize_backup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupVaultsId='{{ backupVaultsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required 
@@json=
'{
"description": "{{ description }}", 
"consistencyTime": "{{ consistencyTime }}", 
"requestId": "{{ requestId }}", 
"backupId": "{{ backupId }}", 
"recoveryRangeStartTime": "{{ recoveryRangeStartTime }}", 
"recoveryRangeEndTime": "{{ recoveryRangeEndTime }}", 
"retentionDuration": "{{ retentionDuration }}"
}';
```
</TabItem>
<TabItem value="fetch_access_token">

Internal only. Fetch access token for a given data source.

```sql
EXEC google.backupdr.data_sources.fetch_access_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupVaultsId='{{ backupVaultsId }}' --required, 
@dataSourcesId='{{ dataSourcesId }}' --required 
@@json=
'{
"generationId": {{ generationId }}
}';
```
</TabItem>
</Tabs>
