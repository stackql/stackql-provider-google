--- 
title: volume_restores
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_restores
  - gkebackup
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

Creates, updates, deletes, gets or lists a <code>volume_restores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>volume_restores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkebackup.volume_restores" /></td></tr>
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

Represents the operation of restoring a volume from a VolumeBackup.

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
    <td>Output only. Full name of the VolumeRestore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*`</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the associated underlying volume restoration completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this VolumeRestore resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume restore updates in order to avoid race conditions.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this VolumeRestore.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. A human readable message explaining why the VolumeRestore is in its current state.</td>
</tr>
<tr>
    <td><CopyableCode code="targetPvc" /></td>
    <td><code>object</code></td>
    <td>A reference to a namespaced resource in Kubernetes. (id: NamespacedName)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this VolumeRestore resource was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeBackup" /></td>
    <td><code>string</code></td>
    <td>Output only. The full name of the VolumeBackup from which the volume will be restored. Format: `projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeHandle" /></td>
    <td><code>string</code></td>
    <td>Output only. A storage system-specific opaque handler to the underlying volume created for the target PVC from the volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of volume provisioned</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListVolumeRestores.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token which may be sent as page_token in a subsequent `ListVolumeRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeRestores" /></td>
    <td><code>array</code></td>
    <td>The list of VolumeRestores matching the given criteria.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a>, <a href="#parameter-restoresId"><code>restoresId</code></a>, <a href="#parameter-volumeRestoresId"><code>volumeRestoresId</code></a></td>
    <td></td>
    <td>Retrieve the details of a single VolumeRestore.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-restorePlansId"><code>restorePlansId</code></a>, <a href="#parameter-restoresId"><code>restoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the VolumeRestores for a given Restore.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-restorePlansId">
    <td><CopyableCode code="restorePlansId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-restoresId">
    <td><CopyableCode code="restoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-volumeRestoresId">
    <td><CopyableCode code="volumeRestoresId" /></td>
    <td><code>string</code></td>
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

Retrieve the details of a single VolumeRestore.

```sql
SELECT
name,
completeTime,
createTime,
etag,
state,
stateMessage,
targetPvc,
uid,
updateTime,
volumeBackup,
volumeHandle,
volumeType
FROM google.gkebackup.volume_restores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restorePlansId = '{{ restorePlansId }}' -- required
AND restoresId = '{{ restoresId }}' -- required
AND volumeRestoresId = '{{ volumeRestoresId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the VolumeRestores for a given Restore.

```sql
SELECT
nextPageToken,
volumeRestores
FROM google.gkebackup.volume_restores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND restorePlansId = '{{ restorePlansId }}' -- required
AND restoresId = '{{ restoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
