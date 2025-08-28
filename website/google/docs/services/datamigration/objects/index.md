--- 
title: objects
hide_title: false
hide_table_of_contents: false
keywords:
  - objects
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

Creates, updates, deletes, gets or lists an <code>objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>objects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datamigration.objects" /></td></tr>
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
    <td>The object's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the migration job object.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="heterogeneousMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata for heterogeneous migration jobs objects. (id: HeterogeneousMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Output only. The phase of the migration job object.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceObject" /></td>
    <td><code>object</code></td>
    <td>The object identifier in the data source. (id: SourceObjectIdentifier)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the migration job object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of the migration job object.</td>
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
    <td>The object's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the migration job object.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="heterogeneousMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata for heterogeneous migration jobs objects. (id: HeterogeneousMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Output only. The phase of the migration job object.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceObject" /></td>
    <td><code>object</code></td>
    <td>The object identifier in the data source. (id: SourceObjectIdentifier)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the migration job object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of the migration job object.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a>, <a href="#parameter-objectsId"><code>objectsId</code></a></td>
    <td></td>
    <td>Use this method to get details about a migration job object.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Use this method to list the objects of a specific migration job.</td>
</tr>
<tr>
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-migrationJobsId"><code>migrationJobsId</code></a></td>
    <td></td>
    <td>Use this method to look up a migration job object by its source object identifier.</td>
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
<tr id="parameter-objectsId">
    <td><CopyableCode code="objectsId" /></td>
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

Use this method to get details about a migration job object.

```sql
SELECT
name,
createTime,
error,
heterogeneousMetadata,
phase,
sourceObject,
state,
updateTime
FROM google.datamigration.objects
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND migrationJobsId = '{{ migrationJobsId }}' -- required
AND objectsId = '{{ objectsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Use this method to list the objects of a specific migration job.

```sql
SELECT
name,
createTime,
error,
heterogeneousMetadata,
phase,
sourceObject,
state,
updateTime
FROM google.datamigration.objects
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND migrationJobsId = '{{ migrationJobsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="lookup"
    values={[
        { label: 'lookup', value: 'lookup' }
    ]}
>
<TabItem value="lookup">

Use this method to look up a migration job object by its source object identifier.

```sql
EXEC google.datamigration.objects.lookup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@migrationJobsId='{{ migrationJobsId }}' --required 
@@json=
'{
"sourceObjectIdentifier": "{{ sourceObjectIdentifier }}"
}';
```
</TabItem>
</Tabs>
