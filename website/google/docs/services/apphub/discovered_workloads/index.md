--- 
title: discovered_workloads
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_workloads
  - apphub
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

Creates, updates, deletes, gets or lists a <code>discovered_workloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>discovered_workloads</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apphub.discovered_workloads" /></td></tr>
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
    <td>Identifier. The resource name of the discovered workload. Format: `"projects/&#123;host-project-id&#125;/locations/&#123;location&#125;/discoveredWorkloads/&#123;uuid&#125;"`</td>
</tr>
<tr>
    <td><CopyableCode code="workloadProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Properties of an underlying compute resource represented by the Workload. These are immutable. (id: WorkloadProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadReference" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference of an underlying compute resource represented by the Workload. These are immutable. (id: WorkloadReference)</td>
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
    <td>Identifier. The resource name of the discovered workload. Format: `"projects/&#123;host-project-id&#125;/locations/&#123;location&#125;/discoveredWorkloads/&#123;uuid&#125;"`</td>
</tr>
<tr>
    <td><CopyableCode code="workloadProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Properties of an underlying compute resource represented by the Workload. These are immutable. (id: WorkloadProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadReference" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference of an underlying compute resource represented by the Workload. These are immutable. (id: WorkloadReference)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredWorkloadsId"><code>discoveredWorkloadsId</code></a></td>
    <td></td>
    <td>Gets a Discovered Workload in a host project and location.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Discovered Workloads that can be added to an Application in a host project and location.</td>
</tr>
<tr>
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-uri"><code>uri</code></a></td>
    <td>Lists a Discovered Workload in a host project and location, with a given resource URI.</td>
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
<tr id="parameter-discoveredWorkloadsId">
    <td><CopyableCode code="discoveredWorkloadsId" /></td>
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
<tr id="parameter-uri">
    <td><CopyableCode code="uri" /></td>
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

Gets a Discovered Workload in a host project and location.

```sql
SELECT
name,
workloadProperties,
workloadReference
FROM google.apphub.discovered_workloads
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveredWorkloadsId = '{{ discoveredWorkloadsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Discovered Workloads that can be added to an Application in a host project and location.

```sql
SELECT
name,
workloadProperties,
workloadReference
FROM google.apphub.discovered_workloads
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Lists a Discovered Workload in a host project and location, with a given resource URI.

```sql
EXEC google.apphub.discovered_workloads.lookup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@uri='{{ uri }}';
```
</TabItem>
</Tabs>
