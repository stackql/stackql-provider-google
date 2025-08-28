--- 
title: node_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - node_groups
  - dataproc
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

Creates, updates, deletes, gets or lists a <code>node_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>node_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.node_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_regions_clusters_node_groups_get"
    values={[
        { label: 'projects_regions_clusters_node_groups_get', value: 'projects_regions_clusters_node_groups_get' }
    ]}
>
<TabItem value="projects_regions_clusters_node_groups_get">

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
    <td>The Node group resource name (https://aip.dev/122).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labels.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeGroupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The node group instance group configuration. (id: InstanceGroupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>Required. Node group roles.</td>
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
    <td><a href="#projects_regions_clusters_node_groups_get"><CopyableCode code="projects_regions_clusters_node_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodeGroupsId"><code>nodeGroupsId</code></a></td>
    <td></td>
    <td>Gets the resource representation for a node group in a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_node_groups_create"><CopyableCode code="projects_regions_clusters_node_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-nodeGroupId"><code>nodeGroupId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-parentOperationId"><code>parentOperationId</code></a></td>
    <td>Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_node_groups_resize"><CopyableCode code="projects_regions_clusters_node_groups_resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodeGroupsId"><code>nodeGroupsId</code></a></td>
    <td></td>
    <td>Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_node_groups_repair"><CopyableCode code="projects_regions_clusters_node_groups_repair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-nodeGroupsId"><code>nodeGroupsId</code></a></td>
    <td></td>
    <td>Repair nodes in a node group.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodeGroupsId">
    <td><CopyableCode code="nodeGroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-regionsId">
    <td><CopyableCode code="regionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodeGroupId">
    <td><CopyableCode code="nodeGroupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentOperationId">
    <td><CopyableCode code="parentOperationId" /></td>
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
    defaultValue="projects_regions_clusters_node_groups_get"
    values={[
        { label: 'projects_regions_clusters_node_groups_get', value: 'projects_regions_clusters_node_groups_get' }
    ]}
>
<TabItem value="projects_regions_clusters_node_groups_get">

Gets the resource representation for a node group in a cluster.

```sql
SELECT
name,
labels,
nodeGroupConfig,
roles
FROM google.dataproc.node_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND regionsId = '{{ regionsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND nodeGroupsId = '{{ nodeGroupsId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_regions_clusters_node_groups_create"
    values={[
        { label: 'projects_regions_clusters_node_groups_create', value: 'projects_regions_clusters_node_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_regions_clusters_node_groups_create">

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

```sql
INSERT INTO google.dataproc.node_groups (
data__name,
data__roles,
data__nodeGroupConfig,
data__labels,
projectsId,
regionsId,
clustersId,
nodeGroupId,
requestId,
parentOperationId
)
SELECT 
'{{ name }}',
'{{ roles }}',
'{{ nodeGroupConfig }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ regionsId }}',
'{{ clustersId }}',
'{{ nodeGroupId }}',
'{{ requestId }}',
'{{ parentOperationId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: node_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the node_groups resource.
    - name: regionsId
      value: string
      description: Required parameter for the node_groups resource.
    - name: clustersId
      value: string
      description: Required parameter for the node_groups resource.
    - name: name
      value: string
      description: >
        The Node group resource name (https://aip.dev/122).
        
    - name: roles
      value: array
      description: >
        Required. Node group roles.
        
    - name: nodeGroupConfig
      value: object
      description: >
        Optional. The node group instance group configuration.
        
    - name: labels
      value: object
      description: >
        Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labels.
        
    - name: nodeGroupId
      value: string
    - name: requestId
      value: string
    - name: parentOperationId
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_regions_clusters_node_groups_resize"
    values={[
        { label: 'projects_regions_clusters_node_groups_resize', value: 'projects_regions_clusters_node_groups_resize' },
        { label: 'projects_regions_clusters_node_groups_repair', value: 'projects_regions_clusters_node_groups_repair' }
    ]}
>
<TabItem value="projects_regions_clusters_node_groups_resize">

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

```sql
EXEC google.dataproc.node_groups.projects_regions_clusters_node_groups_resize 
@projectsId='{{ projectsId }}' --required, 
@regionsId='{{ regionsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodeGroupsId='{{ nodeGroupsId }}' --required 
@@json=
'{
"size": {{ size }}, 
"requestId": "{{ requestId }}", 
"gracefulDecommissionTimeout": "{{ gracefulDecommissionTimeout }}", 
"parentOperationId": "{{ parentOperationId }}"
}';
```
</TabItem>
<TabItem value="projects_regions_clusters_node_groups_repair">

Repair nodes in a node group.

```sql
EXEC google.dataproc.node_groups.projects_regions_clusters_node_groups_repair 
@projectsId='{{ projectsId }}' --required, 
@regionsId='{{ regionsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@nodeGroupsId='{{ nodeGroupsId }}' --required 
@@json=
'{
"instanceNames": "{{ instanceNames }}", 
"repairAction": "{{ repairAction }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
