--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - container
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_operations_get"
    values={[
        { label: 'projects_locations_operations_get', value: 'projects_locations_operations_get' },
        { label: 'projects_zones_operations_get', value: 'projects_zones_operations_get' },
        { label: 'projects_locations_operations_list', value: 'projects_locations_operations_list' },
        { label: 'projects_zones_operations_list', value: 'projects_zones_operations_list' }
    ]}
>
<TabItem value="projects_locations_operations_get">

This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.

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
    <td>Output only. The server-assigned ID for the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterConditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state. Deprecated. Use field error instead.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>string</code></td>
    <td>Output only. Detailed operation progress, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error result of the operation in case of failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) or [region](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="nodepoolConditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current node pool state. Deprecated. Use field error instead.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>Output only. The operation type.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Output only. Progress information for an operation. (id: OperationProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. If an error has occurred, a textual description of the error. Deprecated. Use the field error instead.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node`</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_operations_get">

This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.

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
    <td>Output only. The server-assigned ID for the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterConditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state. Deprecated. Use field error instead.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>string</code></td>
    <td>Output only. Detailed operation progress, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error result of the operation in case of failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) or [region](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="nodepoolConditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current node pool state. Deprecated. Use field error instead.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>Output only. The operation type.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Output only. Progress information for an operation. (id: OperationProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. If an error has occurred, a textual description of the error. Deprecated. Use the field error instead.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node`</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://&#123;$universe.dns_names.final_documentation_domain&#125;/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_operations_list">

ListOperationsResponse is the result of ListOperationsRequest.

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
    <td><CopyableCode code="missingZones" /></td>
    <td><code>array</code></td>
    <td>If any zones are listed here, the list of operations returned may be missing the operations from those zones.</td>
</tr>
<tr>
    <td><CopyableCode code="operations" /></td>
    <td><code>array</code></td>
    <td>A list of operations in the project in the specified zone.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_operations_list">

ListOperationsResponse is the result of ListOperationsRequest.

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
    <td><CopyableCode code="missingZones" /></td>
    <td><code>array</code></td>
    <td>If any zones are listed here, the list of operations returned may be missing the operations from those zones.</td>
</tr>
<tr>
    <td><CopyableCode code="operations" /></td>
    <td><code>array</code></td>
    <td>A list of operations in the project in the specified zone.</td>
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
    <td><a href="#projects_locations_operations_get"><CopyableCode code="projects_locations_operations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-operationId"><code>operationId</code></a></td>
    <td>Gets the specified operation.</td>
</tr>
<tr>
    <td><a href="#projects_zones_operations_get"><CopyableCode code="projects_zones_operations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-operationId"><code>operationId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets the specified operation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_operations_list"><CopyableCode code="projects_locations_operations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td>Lists all operations in a project in a specific zone or all zones.</td>
</tr>
<tr>
    <td><a href="#projects_zones_operations_list"><CopyableCode code="projects_zones_operations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Lists all operations in a project in a specific zone or all zones.</td>
</tr>
<tr>
    <td><a href="#projects_locations_operations_cancel"><CopyableCode code="projects_locations_operations_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td></td>
    <td>Cancels the specified operation.</td>
</tr>
<tr>
    <td><a href="#projects_zones_operations_cancel"><CopyableCode code="projects_zones_operations_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-operationId"><code>operationId</code></a></td>
    <td></td>
    <td>Cancels the specified operation.</td>
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
<tr id="parameter-operationId">
    <td><CopyableCode code="operationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-operationsId">
    <td><CopyableCode code="operationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-operationId">
    <td><CopyableCode code="operationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_operations_get"
    values={[
        { label: 'projects_locations_operations_get', value: 'projects_locations_operations_get' },
        { label: 'projects_zones_operations_get', value: 'projects_zones_operations_get' },
        { label: 'projects_locations_operations_list', value: 'projects_locations_operations_list' },
        { label: 'projects_zones_operations_list', value: 'projects_zones_operations_list' }
    ]}
>
<TabItem value="projects_locations_operations_get">

Gets the specified operation.

```sql
SELECT
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
FROM google.container.operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND operationsId = '{{ operationsId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
AND operationId = '{{ operationId }}';
```
</TabItem>
<TabItem value="projects_zones_operations_get">

Gets the specified operation.

```sql
SELECT
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
FROM google.container.operations
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND operationId = '{{ operationId }}' -- required
AND name = '{{ name }}';
```
</TabItem>
<TabItem value="projects_locations_operations_list">

Lists all operations in a project in a specific zone or all zones.

```sql
SELECT
missingZones,
operations
FROM google.container.operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}';
```
</TabItem>
<TabItem value="projects_zones_operations_list">

Lists all operations in a project in a specific zone or all zones.

```sql
SELECT
missingZones,
operations
FROM google.container.operations
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND parent = '{{ parent }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_operations_cancel"
    values={[
        { label: 'projects_locations_operations_cancel', value: 'projects_locations_operations_cancel' },
        { label: 'projects_zones_operations_cancel', value: 'projects_zones_operations_cancel' }
    ]}
>
<TabItem value="projects_locations_operations_cancel">

Cancels the specified operation.

```sql
EXEC google.container.operations.projects_locations_operations_cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@operationsId='{{ operationsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"operationId": "{{ operationId }}", 
"name": "{{ name }}"
}';
```
</TabItem>
<TabItem value="projects_zones_operations_cancel">

Cancels the specified operation.

```sql
EXEC google.container.operations.projects_zones_operations_cancel 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@operationId='{{ operationId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}", 
"operationId": "{{ operationId }}", 
"name": "{{ name }}"
}';
```
</TabItem>
</Tabs>
