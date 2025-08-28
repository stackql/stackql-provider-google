--- 
title: node_types
hide_title: false
hide_table_of_contents: false
keywords:
  - node_types
  - vmwareengine
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

Creates, updates, deletes, gets or lists a <code>node_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>node_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.node_types" /></td></tr>
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
    <td>Output only. The resource name of this node type. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72`</td>
</tr>
<tr>
    <td><CopyableCode code="availableCustomCoreCounts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of possible values of custom core count.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Output only. Capabilities of this node type.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The amount of storage available, defined in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The friendly name for this node type. For example: ve1-standard-72</td>
</tr>
<tr>
    <td><CopyableCode code="families" /></td>
    <td><code>array</code></td>
    <td>Output only. Families of the node type. For node types to be in the same cluster they must share at least one element in the `families`.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The amount of physical memory available, defined in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeTypeId" /></td>
    <td><code>string</code></td>
    <td>Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of CPU cores in a single node.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualCpuCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of virtual CPUs in a single node.</td>
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
    <td>Output only. The resource name of this node type. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72`</td>
</tr>
<tr>
    <td><CopyableCode code="availableCustomCoreCounts" /></td>
    <td><code>array</code></td>
    <td>Output only. List of possible values of custom core count.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Output only. Capabilities of this node type.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The amount of storage available, defined in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The friendly name for this node type. For example: ve1-standard-72</td>
</tr>
<tr>
    <td><CopyableCode code="families" /></td>
    <td><code>array</code></td>
    <td>Output only. Families of the node type. For node types to be in the same cluster they must share at least one element in the `families`.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The amount of physical memory available, defined in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeTypeId" /></td>
    <td><code>string</code></td>
    <td>Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of CPU cores in a single node.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualCpuCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of virtual CPUs in a single node.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-nodeTypesId"><code>nodeTypesId</code></a></td>
    <td></td>
    <td>Gets details of a single `NodeType`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists node types</td>
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
<tr id="parameter-nodeTypesId">
    <td><CopyableCode code="nodeTypesId" /></td>
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

Gets details of a single `NodeType`.

```sql
SELECT
name,
availableCustomCoreCounts,
capabilities,
diskSizeGb,
displayName,
families,
kind,
memoryGb,
nodeTypeId,
totalCoreCount,
virtualCpuCount
FROM google.vmwareengine.node_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND nodeTypesId = '{{ nodeTypesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists node types

```sql
SELECT
name,
availableCustomCoreCounts,
capabilities,
diskSizeGb,
displayName,
families,
kind,
memoryGb,
nodeTypeId,
totalCoreCount,
virtualCpuCount
FROM google.vmwareengine.node_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
