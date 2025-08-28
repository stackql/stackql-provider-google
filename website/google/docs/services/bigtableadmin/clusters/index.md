--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - bigtableadmin
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.clusters" /></td></tr>
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
    <td>The unique name of the cluster. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/a-z*`.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for this cluster. (id: ClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultStorageType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. The encryption configuration for CMEK-protected clusters. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/&#123;project&#125;/locations/&#123;zone&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeScalingFactor" /></td>
    <td><code>string</code></td>
    <td>Immutable. The node scaling factor of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="serveNodes" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the cluster.</td>
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
    <td>The unique name of the cluster. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/a-z*`.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for this cluster. (id: ClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultStorageType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. The encryption configuration for CMEK-protected clusters. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/&#123;project&#125;/locations/&#123;zone&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeScalingFactor" /></td>
    <td><code>string</code></td>
    <td>Immutable. The node scaling factor of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="serveNodes" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the cluster.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets information about a cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists information about clusters in an instance.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td>Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Deletes a cluster from an instance.</td>
</tr>
<tr>
    <td><a href="#partial_update_cluster"><CopyableCode code="partial_update_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Partially updates a cluster within a project. This method is the preferred way to update a Cluster. To enable and update autoscaling, set cluster_config.cluster_autoscaling_config. When autoscaling is enabled, serve_nodes is treated as an OUTPUT_ONLY field, meaning that updates to it are ignored. Note that an update cannot simultaneously set serve_nodes to non-zero and cluster_config.cluster_autoscaling_config to non-empty, and also specify both in the update_mask. To disable autoscaling, clear cluster_config.cluster_autoscaling_config, and explicitly set a serve_node count via the update_mask.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets information about a cluster.

```sql
SELECT
name,
clusterConfig,
defaultStorageType,
encryptionConfig,
location,
nodeScalingFactor,
serveNodes,
state
FROM google.bigtableadmin.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND clustersId = '{{ clustersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists information about clusters in an instance.

```sql
SELECT
name,
clusterConfig,
defaultStorageType,
encryptionConfig,
location,
nodeScalingFactor,
serveNodes,
state
FROM google.bigtableadmin.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

```sql
INSERT INTO google.bigtableadmin.clusters (
data__name,
data__location,
data__serveNodes,
data__nodeScalingFactor,
data__clusterConfig,
data__defaultStorageType,
data__encryptionConfig,
projectsId,
instancesId,
clusterId
)
SELECT 
'{{ name }}',
'{{ location }}',
{{ serveNodes }},
'{{ nodeScalingFactor }}',
'{{ clusterConfig }}',
'{{ defaultStorageType }}',
'{{ encryptionConfig }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ clusterId }}'
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
- name: clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the clusters resource.
    - name: instancesId
      value: string
      description: Required parameter for the clusters resource.
    - name: name
      value: string
      description: >
        The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.
        
    - name: location
      value: string
      description: >
        Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.
        
    - name: serveNodes
      value: integer
      description: >
        The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.
        
    - name: nodeScalingFactor
      value: string
      description: >
        Immutable. The node scaling factor of this cluster.
        
      valid_values: ['NODE_SCALING_FACTOR_UNSPECIFIED', 'NODE_SCALING_FACTOR_1X', 'NODE_SCALING_FACTOR_2X']
    - name: clusterConfig
      value: object
      description: >
        Configuration for this cluster.
        
    - name: defaultStorageType
      value: string
      description: >
        Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.
        
      valid_values: ['STORAGE_TYPE_UNSPECIFIED', 'SSD', 'HDD']
    - name: encryptionConfig
      value: object
      description: >
        Immutable. The encryption configuration for CMEK-protected clusters.
        
    - name: clusterId
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.

```sql
REPLACE google.bigtableadmin.clusters
SET 
data__name = '{{ name }}',
data__location = '{{ location }}',
data__serveNodes = {{ serveNodes }},
data__nodeScalingFactor = '{{ nodeScalingFactor }}',
data__clusterConfig = '{{ clusterConfig }}',
data__defaultStorageType = '{{ defaultStorageType }}',
data__encryptionConfig = '{{ encryptionConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND clustersId = '{{ clustersId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a cluster from an instance.

```sql
DELETE FROM google.bigtableadmin.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND clustersId = '{{ clustersId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="partial_update_cluster"
    values={[
        { label: 'partial_update_cluster', value: 'partial_update_cluster' }
    ]}
>
<TabItem value="partial_update_cluster">

Partially updates a cluster within a project. This method is the preferred way to update a Cluster. To enable and update autoscaling, set cluster_config.cluster_autoscaling_config. When autoscaling is enabled, serve_nodes is treated as an OUTPUT_ONLY field, meaning that updates to it are ignored. Note that an update cannot simultaneously set serve_nodes to non-zero and cluster_config.cluster_autoscaling_config to non-empty, and also specify both in the update_mask. To disable autoscaling, clear cluster_config.cluster_autoscaling_config, and explicitly set a serve_node count via the update_mask.

```sql
EXEC google.bigtableadmin.clusters.partial_update_cluster 
@projectsId='{{ projectsId }}' --required, 
@instancesId='{{ instancesId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@updateMask='{{ updateMask }}' 
@@json=
'{
"name": "{{ name }}", 
"location": "{{ location }}", 
"serveNodes": {{ serveNodes }}, 
"nodeScalingFactor": "{{ nodeScalingFactor }}", 
"clusterConfig": "{{ clusterConfig }}", 
"defaultStorageType": "{{ defaultStorageType }}", 
"encryptionConfig": "{{ encryptionConfig }}"
}';
```
</TabItem>
</Tabs>
