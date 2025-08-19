--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
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

Creates, updates, deletes, gets or lists an <code>operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>operations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.operations" /></td></tr>
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

An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.

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
    <td>An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="acquireSsrsLeaseContext" /></td>
    <td><code>object</code></td>
    <td>The context for acquire SSRS lease operation, if applicable. (id: AcquireSsrsLeaseContext)</td>
</tr>
<tr>
    <td><CopyableCode code="apiWarning" /></td>
    <td><code>object</code></td>
    <td>An Admin API warning message. (id: ApiWarning)</td>
</tr>
<tr>
    <td><CopyableCode code="backupContext" /></td>
    <td><code>object</code></td>
    <td>The context for backup operation, if applicable. (id: BackupContext)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>If errors occurred during processing of this operation, this field will be populated. (id: OperationErrors)</td>
</tr>
<tr>
    <td><CopyableCode code="exportContext" /></td>
    <td><code>object</code></td>
    <td>The context for export operation, if applicable. (id: ExportContext)</td>
</tr>
<tr>
    <td><CopyableCode code="importContext" /></td>
    <td><code>object</code></td>
    <td>The context for import operation, if applicable. (id: ImportContext)</td>
</tr>
<tr>
    <td><CopyableCode code="insertTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#operation`.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE`</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of an operation.</td>
</tr>
<tr>
    <td><CopyableCode code="subOperationType" /></td>
    <td><code>object</code></td>
    <td>Optional. The sub operation based on the operation type. (id: SqlSubOperationType)</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>Name of the resource on which this operation runs.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLink" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="targetProject" /></td>
    <td><code>string</code></td>
    <td>The project ID of the target instance related to this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The email address of the user who initiated this operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Operations list response.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>List of operation resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#operationsList`.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-operation"><code>operation</code></a></td>
    <td></td>
    <td>Retrieves an instance operation that has been performed on an instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-operation"><code>operation</code></a></td>
    <td></td>
    <td>Cancels an instance operation that has been performed on an instance.</td>
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
<tr id="parameter-operation">
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
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

Retrieves an instance operation that has been performed on an instance.

```sql
SELECT
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
FROM google.sqladmin.operations
WHERE project = '{{ project }}' -- required
AND operation = '{{ operation }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

```sql
SELECT
items,
kind,
nextPageToken
FROM google.sqladmin.operations
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels an instance operation that has been performed on an instance.

```sql
EXEC google.sqladmin.operations.cancel 
@project='{{ project }}' --required, 
@operation='{{ operation }}' --required;
```
</TabItem>
</Tabs>
