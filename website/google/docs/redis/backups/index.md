--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
  - redis
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.backups" /></td></tr>
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

Backup of a cluster.

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
    <td>Identifier. Full resource path of the backup. the last part of the name is the backup id with the following format: [YYYYMMDDHHMMSS]_[Shorted Cluster UID] OR customer specified while backup cluster. Example: 20240515123000_1234</td>
</tr>
<tr>
    <td><CopyableCode code="backupFiles" /></td>
    <td><code>array</code></td>
    <td>Output only. List of backup files of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="backupType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Output only. Cluster resource path of this backup.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterUid" /></td>
    <td><code>string</code></td>
    <td>Output only. Cluster uid of this backup.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Encryption information of the backup. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="engineVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. redis-7.2, valkey-7.5</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the backup will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>Output only. Node type of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of replicas for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of shards for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Total size of the backup in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System assigned unique identifier of the backup.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for [ListBackups].

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
    <td><CopyableCode code="backups" /></td>
    <td><code>array</code></td>
    <td>A list of backups in the project.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Backups that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupCollectionsId"><code>backupCollectionsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Gets the details of a specific backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupCollectionsId"><code>backupCollectionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all backups owned by a backup collection.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupCollectionsId"><code>backupCollectionsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a specific backup.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupCollectionsId"><code>backupCollectionsId</code></a>, <a href="#parameter-backupsId"><code>backupsId</code></a></td>
    <td></td>
    <td>Exports a specific backup to a customer target Cloud Storage URI.</td>
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
<tr id="parameter-backupCollectionsId">
    <td><CopyableCode code="backupCollectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-backupsId">
    <td><CopyableCode code="backupsId" /></td>
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

Gets the details of a specific backup.

```sql
SELECT
name,
backupFiles,
backupType,
cluster,
clusterUid,
createTime,
encryptionInfo,
engineVersion,
expireTime,
nodeType,
replicaCount,
shardCount,
state,
totalSizeBytes,
uid
FROM google.redis.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupCollectionsId = '{{ backupCollectionsId }}' -- required
AND backupsId = '{{ backupsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all backups owned by a backup collection.

```sql
SELECT
backups,
nextPageToken,
unreachable
FROM google.redis.backups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupCollectionsId = '{{ backupCollectionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Deletes a specific backup.

```sql
DELETE FROM google.redis.backups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupCollectionsId = '{{ backupCollectionsId }}' --required
AND backupsId = '{{ backupsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export"
    values={[
        { label: 'export', value: 'export' }
    ]}
>
<TabItem value="export">

Exports a specific backup to a customer target Cloud Storage URI.

```sql
EXEC google.redis.backups.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@backupCollectionsId='{{ backupCollectionsId }}' --required, 
@backupsId='{{ backupsId }}' --required 
@@json=
'{
"gcsBucket": "{{ gcsBucket }}"
}';
```
</TabItem>
</Tabs>
