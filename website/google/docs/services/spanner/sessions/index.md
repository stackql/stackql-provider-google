--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_instances_databases_sessions_get"
    values={[
        { label: 'projects_instances_databases_sessions_get', value: 'projects_instances_databases_sessions_get' },
        { label: 'projects_instances_databases_sessions_list', value: 'projects_instances_databases_sessions_list' }
    ]}
>
<TabItem value="projects_instances_databases_sessions_get">

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
    <td>Output only. The name of the session. This is always system-assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="approximateLastUseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The approximate timestamp when the session is last used. It's typically earlier than the actual last use time.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the session is created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorRole" /></td>
    <td><code>string</code></td>
    <td>The database role which created this session.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="multiplexed" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If `true`, specifies a multiplexed session. Use a multiplexed session for multiple, concurrent read-only operations. Don't use them for read-write transactions, partitioned reads, or partitioned queries. Use `sessions.create` to create multiplexed sessions. Don't use BatchCreateSessions to create a multiplexed session. You can't delete or list multiplexed sessions.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_instances_databases_sessions_list">

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
    <td>Output only. The name of the session. This is always system-assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="approximateLastUseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The approximate timestamp when the session is last used. It's typically earlier than the actual last use time.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the session is created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorRole" /></td>
    <td><code>string</code></td>
    <td>The database role which created this session.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="multiplexed" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If `true`, specifies a multiplexed session. Use a multiplexed session for multiple, concurrent read-only operations. Don't use them for read-write transactions, partitioned reads, or partitioned queries. Use `sessions.create` to create multiplexed sessions. Don't use BatchCreateSessions to create a multiplexed session. You can't delete or list multiplexed sessions.</td>
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
    <td><a href="#projects_instances_databases_sessions_get"><CopyableCode code="projects_instances_databases_sessions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Gets a session. Returns `NOT_FOUND` if the session doesn't exist. This is mainly useful for determining whether a session is still alive.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_list"><CopyableCode code="projects_instances_databases_sessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all sessions in a given database.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_create"><CopyableCode code="projects_instances_databases_sessions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it's a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner can delete sessions when no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, for example, `"SELECT 1"`.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_batch_create"><CopyableCode code="projects_instances_databases_sessions_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_delete"><CopyableCode code="projects_instances_databases_sessions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Ends a session, releasing server resources associated with it. This asynchronously triggers the cancellation of any operations that are running with this session.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_adapter"><CopyableCode code="projects_instances_databases_sessions_adapter" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Creates a new session to be used for requests made by the adapter. A session identifies a specific incarnation of a database resource and is meant to be reused across many `AdaptMessage` calls.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_adapt_message"><CopyableCode code="projects_instances_databases_sessions_adapt_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Handles a single message from the client and returns the result as a stream. The server will interpret the message frame and respond with message frames to the client.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_execute_sql"><CopyableCode code="projects_instances_databases_sessions_execute_sql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Executes an SQL statement, returning all results in a single reply. This method can't be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead. The query string can be SQL or [Graph Query Language (GQL)](https://cloud.google.com/spanner/docs/reference/standard-sql/graph-intro).</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_execute_streaming_sql"><CopyableCode code="projects_instances_databases_sessions_execute_streaming_sql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB. The query string can be SQL or [Graph Query Language (GQL)](https://cloud.google.com/spanner/docs/reference/standard-sql/graph-intro).</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_execute_batch_dml"><CopyableCode code="projects_instances_databases_sessions_execute_batch_dml" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_read"><CopyableCode code="projects_instances_databases_sessions_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method can't be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_streaming_read"><CopyableCode code="projects_instances_databases_sessions_streaming_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_begin_transaction"><CopyableCode code="projects_instances_databases_sessions_begin_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_commit"><CopyableCode code="projects_instances_databases_sessions_commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should retry the transaction from the beginning, reusing the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_rollback"><CopyableCode code="projects_instances_databases_sessions_rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Rolls back a transaction, releasing any locks it holds. It's a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction isn't found. `Rollback` never returns `ABORTED`.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_partition_query"><CopyableCode code="projects_instances_databases_sessions_partition_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the `PartitionQueryRequest` used to create the partition tokens and the `ExecuteSqlRequests` that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it isn't possible to resume the query, and the whole operation must be restarted from the beginning.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_partition_read"><CopyableCode code="projects_instances_databases_sessions_partition_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the `PartitionReadRequest` used to create the partition tokens and the `ReadRequests` that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual `StreamingRead` call issued with a `partition_token`. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it isn't possible to resume the read, and the whole operation must be restarted from the beginning.</td>
</tr>
<tr>
    <td><a href="#projects_instances_databases_sessions_batch_write"><CopyableCode code="projects_instances_databases_sessions_batch_write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Batches the supplied mutation groups in a collection of efficient transactions. All mutations in a group are committed atomically. However, mutations across groups can be committed non-atomically in an unspecified order and thus, they must be independent of each other. Partial failure is possible, that is, some groups might have been committed successfully, while some might have failed. The results of individual batches are streamed into the response as the batches are applied. `BatchWrite` requests are not replay protected, meaning that each mutation group can be applied more than once. Replays of non-idempotent mutations can have undesirable effects. For example, replays of an insert mutation can produce an already exists error or if you use generated or commit timestamp-based keys, it can result in additional rows being added to the mutation's table. We recommend structuring your mutation groups to be idempotent to avoid this issue.</td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_instances_databases_sessions_get"
    values={[
        { label: 'projects_instances_databases_sessions_get', value: 'projects_instances_databases_sessions_get' },
        { label: 'projects_instances_databases_sessions_list', value: 'projects_instances_databases_sessions_list' }
    ]}
>
<TabItem value="projects_instances_databases_sessions_get">

Gets a session. Returns `NOT_FOUND` if the session doesn't exist. This is mainly useful for determining whether a session is still alive.

```sql
SELECT
name,
approximateLastUseTime,
createTime,
creatorRole,
labels,
multiplexed
FROM google.spanner.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_list">

Lists all sessions in a given database.

```sql
SELECT
name,
approximateLastUseTime,
createTime,
creatorRole,
labels,
multiplexed
FROM google.spanner.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_instances_databases_sessions_create"
    values={[
        { label: 'projects_instances_databases_sessions_create', value: 'projects_instances_databases_sessions_create' },
        { label: 'projects_instances_databases_sessions_batch_create', value: 'projects_instances_databases_sessions_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_databases_sessions_create">

Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it's a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner can delete sessions when no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, for example, `"SELECT 1"`.

```sql
INSERT INTO google.spanner.sessions (
data__session,
projectsId,
instancesId,
databasesId
)
SELECT 
'{{ session }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ databasesId }}'
RETURNING
name,
approximateLastUseTime,
createTime,
creatorRole,
labels,
multiplexed
;
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_batch_create">

Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.

```sql
INSERT INTO google.spanner.sessions (
data__sessionTemplate,
data__sessionCount,
projectsId,
instancesId,
databasesId
)
SELECT 
'{{ sessionTemplate }}',
{{ sessionCount }},
'{{ projectsId }}',
'{{ instancesId }}',
'{{ databasesId }}'
RETURNING
session
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sessions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sessions resource.
    - name: instancesId
      value: string
      description: Required parameter for the sessions resource.
    - name: databasesId
      value: string
      description: Required parameter for the sessions resource.
    - name: session
      value: object
      description: >
        Required. The session to create.
        
    - name: sessionTemplate
      value: object
      description: >
        Parameters to apply to each created session.
        
    - name: sessionCount
      value: integer
      description: >
        Required. The number of sessions to be created in this batch call. The API can return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to `BatchCreateSessions` (adjusting session_count as necessary).
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_instances_databases_sessions_delete"
    values={[
        { label: 'projects_instances_databases_sessions_delete', value: 'projects_instances_databases_sessions_delete' }
    ]}
>
<TabItem value="projects_instances_databases_sessions_delete">

Ends a session, releasing server resources associated with it. This asynchronously triggers the cancellation of any operations that are running with this session.

```sql
DELETE FROM google.spanner.sessions
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND sessionsId = '{{ sessionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_instances_databases_sessions_adapter"
    values={[
        { label: 'projects_instances_databases_sessions_adapter', value: 'projects_instances_databases_sessions_adapter' },
        { label: 'projects_instances_databases_sessions_adapt_message', value: 'projects_instances_databases_sessions_adapt_message' },
        { label: 'projects_instances_databases_sessions_execute_sql', value: 'projects_instances_databases_sessions_execute_sql' },
        { label: 'projects_instances_databases_sessions_execute_streaming_sql', value: 'projects_instances_databases_sessions_execute_streaming_sql' },
        { label: 'projects_instances_databases_sessions_execute_batch_dml', value: 'projects_instances_databases_sessions_execute_batch_dml' },
        { label: 'projects_instances_databases_sessions_read', value: 'projects_instances_databases_sessions_read' },
        { label: 'projects_instances_databases_sessions_streaming_read', value: 'projects_instances_databases_sessions_streaming_read' },
        { label: 'projects_instances_databases_sessions_begin_transaction', value: 'projects_instances_databases_sessions_begin_transaction' },
        { label: 'projects_instances_databases_sessions_commit', value: 'projects_instances_databases_sessions_commit' },
        { label: 'projects_instances_databases_sessions_rollback', value: 'projects_instances_databases_sessions_rollback' },
        { label: 'projects_instances_databases_sessions_partition_query', value: 'projects_instances_databases_sessions_partition_query' },
        { label: 'projects_instances_databases_sessions_partition_read', value: 'projects_instances_databases_sessions_partition_read' },
        { label: 'projects_instances_databases_sessions_batch_write', value: 'projects_instances_databases_sessions_batch_write' }
    ]}
>
<TabItem value="projects_instances_databases_sessions_adapter">

Creates a new session to be used for requests made by the adapter. A session identifies a specific incarnation of a database resource and is meant to be reused across many `AdaptMessage` calls.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_adapter 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required 
@@json=
'{
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_adapt_message">

Handles a single message from the client and returns the result as a stream. The server will interpret the message frame and respond with message frames to the client.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_adapt_message 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"protocol": "{{ protocol }}", 
"payload": "{{ payload }}", 
"attachments": "{{ attachments }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_execute_sql">

Executes an SQL statement, returning all results in a single reply. This method can't be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead. The query string can be SQL or [Graph Query Language (GQL)](https://cloud.google.com/spanner/docs/reference/standard-sql/graph-intro).

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_execute_sql 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"sql": "{{ sql }}", 
"params": "{{ params }}", 
"paramTypes": "{{ paramTypes }}", 
"resumeToken": "{{ resumeToken }}", 
"queryMode": "{{ queryMode }}", 
"partitionToken": "{{ partitionToken }}", 
"seqno": "{{ seqno }}", 
"queryOptions": "{{ queryOptions }}", 
"requestOptions": "{{ requestOptions }}", 
"directedReadOptions": "{{ directedReadOptions }}", 
"dataBoostEnabled": {{ dataBoostEnabled }}, 
"lastStatement": {{ lastStatement }}
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_execute_streaming_sql">

Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB. The query string can be SQL or [Graph Query Language (GQL)](https://cloud.google.com/spanner/docs/reference/standard-sql/graph-intro).

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_execute_streaming_sql 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"sql": "{{ sql }}", 
"params": "{{ params }}", 
"paramTypes": "{{ paramTypes }}", 
"resumeToken": "{{ resumeToken }}", 
"queryMode": "{{ queryMode }}", 
"partitionToken": "{{ partitionToken }}", 
"seqno": "{{ seqno }}", 
"queryOptions": "{{ queryOptions }}", 
"requestOptions": "{{ requestOptions }}", 
"directedReadOptions": "{{ directedReadOptions }}", 
"dataBoostEnabled": {{ dataBoostEnabled }}, 
"lastStatement": {{ lastStatement }}
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_execute_batch_dml">

Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_execute_batch_dml 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"statements": "{{ statements }}", 
"seqno": "{{ seqno }}", 
"requestOptions": "{{ requestOptions }}", 
"lastStatements": {{ lastStatements }}
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_read">

Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method can't be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_read 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"table": "{{ table }}", 
"index": "{{ index }}", 
"columns": "{{ columns }}", 
"keySet": "{{ keySet }}", 
"limit": "{{ limit }}", 
"resumeToken": "{{ resumeToken }}", 
"partitionToken": "{{ partitionToken }}", 
"requestOptions": "{{ requestOptions }}", 
"directedReadOptions": "{{ directedReadOptions }}", 
"dataBoostEnabled": {{ dataBoostEnabled }}, 
"orderBy": "{{ orderBy }}", 
"lockHint": "{{ lockHint }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_streaming_read">

Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_streaming_read 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"table": "{{ table }}", 
"index": "{{ index }}", 
"columns": "{{ columns }}", 
"keySet": "{{ keySet }}", 
"limit": "{{ limit }}", 
"resumeToken": "{{ resumeToken }}", 
"partitionToken": "{{ partitionToken }}", 
"requestOptions": "{{ requestOptions }}", 
"directedReadOptions": "{{ directedReadOptions }}", 
"dataBoostEnabled": {{ dataBoostEnabled }}, 
"orderBy": "{{ orderBy }}", 
"lockHint": "{{ lockHint }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_begin_transaction">

Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_begin_transaction 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"options": "{{ options }}", 
"requestOptions": "{{ requestOptions }}", 
"mutationKey": "{{ mutationKey }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_commit">

Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should retry the transaction from the beginning, reusing the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_commit 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transactionId": "{{ transactionId }}", 
"singleUseTransaction": "{{ singleUseTransaction }}", 
"mutations": "{{ mutations }}", 
"returnCommitStats": {{ returnCommitStats }}, 
"maxCommitDelay": "{{ maxCommitDelay }}", 
"requestOptions": "{{ requestOptions }}", 
"precommitToken": "{{ precommitToken }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_rollback">

Rolls back a transaction, releasing any locks it holds. It's a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction isn't found. `Rollback` never returns `ABORTED`.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_rollback 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transactionId": "{{ transactionId }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_partition_query">

Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the `PartitionQueryRequest` used to create the partition tokens and the `ExecuteSqlRequests` that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it isn't possible to resume the query, and the whole operation must be restarted from the beginning.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_partition_query 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"sql": "{{ sql }}", 
"params": "{{ params }}", 
"paramTypes": "{{ paramTypes }}", 
"partitionOptions": "{{ partitionOptions }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_partition_read">

Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the `PartitionReadRequest` used to create the partition tokens and the `ReadRequests` that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual `StreamingRead` call issued with a `partition_token`. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it isn't possible to resume the read, and the whole operation must be restarted from the beginning.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_partition_read 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"transaction": "{{ transaction }}", 
"table": "{{ table }}", 
"index": "{{ index }}", 
"columns": "{{ columns }}", 
"keySet": "{{ keySet }}", 
"partitionOptions": "{{ partitionOptions }}"
}';
```
</TabItem>
<TabItem value="projects_instances_databases_sessions_batch_write">

Batches the supplied mutation groups in a collection of efficient transactions. All mutations in a group are committed atomically. However, mutations across groups can be committed non-atomically in an unspecified order and thus, they must be independent of each other. Partial failure is possible, that is, some groups might have been committed successfully, while some might have failed. The results of individual batches are streamed into the response as the batches are applied. `BatchWrite` requests are not replay protected, meaning that each mutation group can be applied more than once. Replays of non-idempotent mutations can have undesirable effects. For example, replays of an insert mutation can produce an already exists error or if you use generated or commit timestamp-based keys, it can result in additional rows being added to the mutation's table. We recommend structuring your mutation groups to be idempotent to avoid this issue.

```sql
EXEC google.spanner.sessions.projects_instances_databases_sessions_batch_write 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@databasesId='{{ databasesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"requestOptions": "{{ requestOptions }}", 
"mutationGroups": "{{ mutationGroups }}", 
"excludeTxnFromChangeStreams": {{ excludeTxnFromChangeStreams }}
}';
```
</TabItem>
</Tabs>
