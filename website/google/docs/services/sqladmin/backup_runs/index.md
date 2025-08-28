--- 
title: backup_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_runs
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>backup_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_runs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.backup_runs" /></td></tr>
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
    <td><code>string (int64)</code></td>
    <td>The identifier for this backup run. Unique only for a specific Cloud SQL instance.</td>
</tr>
<tr>
    <td><CopyableCode code="backupKind" /></td>
    <td><code>string</code></td>
    <td>Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The instance database version at the time this backup was made.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of this run, only applicable to on-demand backups.</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration specific to a backup. (id: DiskEncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionStatus" /></td>
    <td><code>object</code></td>
    <td>Encryption status specific to a backup. (id: DiskEncryptionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="enqueuedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Database instance operation error. (id: OperationError)</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>Name of the database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#backupRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Location of the backups.</td>
</tr>
<tr>
    <td><CopyableCode code="maxChargeableBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The maximum chargeable bytes for the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this run.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.</td>
</tr>
<tr>
    <td><CopyableCode code="windowStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
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
    <td><code>string (int64)</code></td>
    <td>The identifier for this backup run. Unique only for a specific Cloud SQL instance.</td>
</tr>
<tr>
    <td><CopyableCode code="backupKind" /></td>
    <td><code>string</code></td>
    <td>Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The instance database version at the time this backup was made.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of this run, only applicable to on-demand backups.</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration specific to a backup. (id: DiskEncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionStatus" /></td>
    <td><code>object</code></td>
    <td>Encryption status specific to a backup. (id: DiskEncryptionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="enqueuedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Database instance operation error. (id: OperationError)</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>Name of the database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#backupRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Location of the backups.</td>
</tr>
<tr>
    <td><CopyableCode code="maxChargeableBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The maximum chargeable bytes for the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this run.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.</td>
</tr>
<tr>
    <td><CopyableCode code="windowStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Retrieves a resource containing information about a backup run.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Creates a new backup run on demand.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Deletes the backup taken by a backup run.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
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

Retrieves a resource containing information about a backup run.

```sql
SELECT
id,
backupKind,
databaseVersion,
description,
diskEncryptionConfiguration,
diskEncryptionStatus,
endTime,
enqueuedTime,
error,
instance,
kind,
location,
maxChargeableBytes,
selfLink,
startTime,
status,
timeZone,
type,
windowStartTime
FROM google.sqladmin.backup_runs
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND id = '{{ id }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

```sql
SELECT
id,
backupKind,
databaseVersion,
description,
diskEncryptionConfiguration,
diskEncryptionStatus,
endTime,
enqueuedTime,
error,
instance,
kind,
location,
maxChargeableBytes,
selfLink,
startTime,
status,
timeZone,
type,
windowStartTime
FROM google.sqladmin.backup_runs
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
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

Creates a new backup run on demand.

```sql
INSERT INTO google.sqladmin.backup_runs (
data__kind,
data__status,
data__enqueuedTime,
data__id,
data__startTime,
data__endTime,
data__error,
data__type,
data__description,
data__windowStartTime,
data__instance,
data__selfLink,
data__location,
data__diskEncryptionConfiguration,
data__diskEncryptionStatus,
data__backupKind,
data__timeZone,
project,
instance
)
SELECT 
'{{ kind }}',
'{{ status }}',
'{{ enqueuedTime }}',
'{{ id }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ error }}',
'{{ type }}',
'{{ description }}',
'{{ windowStartTime }}',
'{{ instance }}',
'{{ selfLink }}',
'{{ location }}',
'{{ diskEncryptionConfiguration }}',
'{{ diskEncryptionStatus }}',
'{{ backupKind }}',
'{{ timeZone }}',
'{{ project }}',
'{{ instance }}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: backup_runs
  props:
    - name: project
      value: string
      description: Required parameter for the backup_runs resource.
    - name: instance
      value: string
      description: Required parameter for the backup_runs resource.
    - name: kind
      value: string
      description: >
        This is always `sql#backupRun`.
        
    - name: status
      value: string
      description: >
        The status of this run.
        
      valid_values: ['SQL_BACKUP_RUN_STATUS_UNSPECIFIED', 'ENQUEUED', 'OVERDUE', 'RUNNING', 'FAILED', 'SUCCESSFUL', 'SKIPPED', 'DELETION_PENDING', 'DELETION_FAILED', 'DELETED']
    - name: enqueuedTime
      value: string
      description: >
        The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
        
    - name: id
      value: string
      description: >
        The identifier for this backup run. Unique only for a specific Cloud SQL instance.
        
    - name: startTime
      value: string
      description: >
        The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
        
    - name: endTime
      value: string
      description: >
        The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
        
    - name: error
      value: object
      description: >
        Database instance operation error.
        
    - name: type
      value: string
      description: >
        The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.
        
      valid_values: ['SQL_BACKUP_RUN_TYPE_UNSPECIFIED', 'AUTOMATED', 'ON_DEMAND']
    - name: description
      value: string
      description: >
        The description of this run, only applicable to on-demand backups.
        
    - name: windowStartTime
      value: string
      description: >
        The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
        
    - name: instance
      value: string
      description: >
        Name of the database instance.
        
    - name: selfLink
      value: string
      description: >
        The URI of this resource.
        
    - name: location
      value: string
      description: >
        Location of the backups.
        
    - name: diskEncryptionConfiguration
      value: object
      description: >
        Encryption configuration specific to a backup.
        
    - name: diskEncryptionStatus
      value: object
      description: >
        Encryption status specific to a backup.
        
    - name: backupKind
      value: string
      description: >
        Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.
        
      valid_values: ['SQL_BACKUP_KIND_UNSPECIFIED', 'SNAPSHOT', 'PHYSICAL']
    - name: timeZone
      value: string
      description: >
        Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.
        
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

Deletes the backup taken by a backup run.

```sql
DELETE FROM google.sqladmin.backup_runs
WHERE project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND id = '{{ id }}' --required;
```
</TabItem>
</Tabs>
