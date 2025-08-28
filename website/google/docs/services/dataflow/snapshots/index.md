--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - dataflow
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_snapshots_get"
    values={[
        { label: 'projects_locations_snapshots_get', value: 'projects_locations_snapshots_get' },
        { label: 'projects_locations_jobs_snapshots_list', value: 'projects_locations_jobs_snapshots_list' },
        { label: 'projects_snapshots_get', value: 'projects_snapshots_get' },
        { label: 'projects_locations_snapshots_list', value: 'projects_locations_snapshots_list' },
        { label: 'projects_snapshots_list', value: 'projects_snapshots_list' }
    ]}
>
<TabItem value="projects_locations_snapshots_get">

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
    <td><code>string</code></td>
    <td>The unique ID of this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User specified description of the snapshot. Maybe empty.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The disk byte size of the snapshot. Only available for snapshots in READY state.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The project this snapshot belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="pubsubMetadata" /></td>
    <td><code>array</code></td>
    <td>Pub/Sub snapshot metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region where this snapshot lives in, e.g., "us-central1".</td>
</tr>
<tr>
    <td><CopyableCode code="sourceJobId" /></td>
    <td><code>string</code></td>
    <td>The job this snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The time after which this snapshot will be automatically deleted.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_jobs_snapshots_list">

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
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>Returned snapshots.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_snapshots_get">

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
    <td><code>string</code></td>
    <td>The unique ID of this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User specified description of the snapshot. Maybe empty.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The disk byte size of the snapshot. Only available for snapshots in READY state.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The project this snapshot belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="pubsubMetadata" /></td>
    <td><code>array</code></td>
    <td>Pub/Sub snapshot metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region where this snapshot lives in, e.g., "us-central1".</td>
</tr>
<tr>
    <td><CopyableCode code="sourceJobId" /></td>
    <td><code>string</code></td>
    <td>The job this snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The time after which this snapshot will be automatically deleted.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_snapshots_list">

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
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>Returned snapshots.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_snapshots_list">

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
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>Returned snapshots.</td>
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
    <td><a href="#projects_locations_snapshots_get"><CopyableCode code="projects_locations_snapshots_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-snapshotId"><code>snapshotId</code></a></td>
    <td></td>
    <td>Gets information about a snapshot.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_snapshots_list"><CopyableCode code="projects_locations_jobs_snapshots_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Lists snapshots.</td>
</tr>
<tr>
    <td><a href="#projects_snapshots_get"><CopyableCode code="projects_snapshots_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-snapshotId"><code>snapshotId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a></td>
    <td>Gets information about a snapshot.</td>
</tr>
<tr>
    <td><a href="#projects_locations_snapshots_list"><CopyableCode code="projects_locations_snapshots_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a></td>
    <td>Lists snapshots.</td>
</tr>
<tr>
    <td><a href="#projects_snapshots_list"><CopyableCode code="projects_snapshots_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Lists snapshots.</td>
</tr>
<tr>
    <td><a href="#projects_locations_snapshots_delete"><CopyableCode code="projects_locations_snapshots_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-snapshotId"><code>snapshotId</code></a></td>
    <td></td>
    <td>Deletes a snapshot.</td>
</tr>
<tr>
    <td><a href="#projects_delete_snapshots"><CopyableCode code="projects_delete_snapshots" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-snapshotId"><code>snapshotId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Deletes a snapshot.</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-snapshotId">
    <td><CopyableCode code="snapshotId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-snapshotId">
    <td><CopyableCode code="snapshotId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_snapshots_get"
    values={[
        { label: 'projects_locations_snapshots_get', value: 'projects_locations_snapshots_get' },
        { label: 'projects_locations_jobs_snapshots_list', value: 'projects_locations_jobs_snapshots_list' },
        { label: 'projects_snapshots_get', value: 'projects_snapshots_get' },
        { label: 'projects_locations_snapshots_list', value: 'projects_locations_snapshots_list' },
        { label: 'projects_snapshots_list', value: 'projects_snapshots_list' }
    ]}
>
<TabItem value="projects_locations_snapshots_get">

Gets information about a snapshot.

```sql
SELECT
id,
creationTime,
description,
diskSizeBytes,
projectId,
pubsubMetadata,
region,
sourceJobId,
state,
ttl
FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND snapshotId = '{{ snapshotId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_jobs_snapshots_list">

Lists snapshots.

```sql
SELECT
snapshots
FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required;
```
</TabItem>
<TabItem value="projects_snapshots_get">

Gets information about a snapshot.

```sql
SELECT
id,
creationTime,
description,
diskSizeBytes,
projectId,
pubsubMetadata,
region,
sourceJobId,
state,
ttl
FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' -- required
AND snapshotId = '{{ snapshotId }}' -- required
AND location = '{{ location }}';
```
</TabItem>
<TabItem value="projects_locations_snapshots_list">

Lists snapshots.

```sql
SELECT
snapshots
FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}';
```
</TabItem>
<TabItem value="projects_snapshots_list">

Lists snapshots.

```sql
SELECT
snapshots
FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' -- required
AND jobId = '{{ jobId }}'
AND location = '{{ location }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_snapshots_delete"
    values={[
        { label: 'projects_locations_snapshots_delete', value: 'projects_locations_snapshots_delete' },
        { label: 'projects_delete_snapshots', value: 'projects_delete_snapshots' }
    ]}
>
<TabItem value="projects_locations_snapshots_delete">

Deletes a snapshot.

```sql
DELETE FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' --required
AND location = '{{ location }}' --required
AND snapshotId = '{{ snapshotId }}' --required;
```
</TabItem>
<TabItem value="projects_delete_snapshots">

Deletes a snapshot.

```sql
DELETE FROM google.dataflow.snapshots
WHERE projectId = '{{ projectId }}' --required
AND snapshotId = '{{ snapshotId }}'
AND location = '{{ location }}';
```
</TabItem>
</Tabs>
