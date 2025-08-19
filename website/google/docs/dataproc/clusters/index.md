--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_regions_clusters_get"
    values={[
        { label: 'projects_regions_clusters_get', value: 'projects_regions_clusters_get' },
        { label: 'projects_regions_clusters_list', value: 'projects_regions_clusters_list' }
    ]}
>
<TabItem value="projects_regions_clusters_get">

Describes the identifying information, config, and status of a Dataproc cluster

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
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterUuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified. (id: ClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. (id: ClusterMetrics)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Required. The Google Cloud Platform project ID that the cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster status. (id: ClusterStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="statusHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. The previous cluster status.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified. (id: VirtualClusterConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_regions_clusters_list">

The list of all clusters in a project.

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
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>Output only. The clusters in the project.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.</td>
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
    <td><a href="#projects_regions_clusters_get"><CopyableCode code="projects_regions_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Gets the resource representation for a cluster in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_list"><CopyableCode code="projects_regions_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all regions/&#123;region&#125;/clusters in a project alphabetically.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_create"><CopyableCode code="projects_regions_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-actionOnFailedPrimaryWorkers"><code>actionOnFailedPrimaryWorkers</code></a></td>
    <td>Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_patch"><CopyableCode code="projects_regions_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td><a href="#parameter-gracefulDecommissionTimeout"><code>gracefulDecommissionTimeout</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_delete"><CopyableCode code="projects_regions_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td><a href="#parameter-clusterUuid"><code>clusterUuid</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-gracefulTerminationTimeout"><code>gracefulTerminationTimeout</code></a></td>
    <td>Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_stop"><CopyableCode code="projects_regions_clusters_stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Stops a cluster in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_start"><CopyableCode code="projects_regions_clusters_start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Starts a cluster in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_repair"><CopyableCode code="projects_regions_clusters_repair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Repairs a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_diagnose"><CopyableCode code="projects_regions_clusters_diagnose" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_inject_credentials"><CopyableCode code="projects_regions_clusters_inject_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.</td>
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
<tr id="parameter-clusterName">
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-regionsId">
    <td><CopyableCode code="regionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-actionOnFailedPrimaryWorkers">
    <td><CopyableCode code="actionOnFailedPrimaryWorkers" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterUuid">
    <td><CopyableCode code="clusterUuid" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gracefulDecommissionTimeout">
    <td><CopyableCode code="gracefulDecommissionTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-gracefulTerminationTimeout">
    <td><CopyableCode code="gracefulTerminationTimeout" /></td>
    <td><code>string (google-duration)</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_regions_clusters_get"
    values={[
        { label: 'projects_regions_clusters_get', value: 'projects_regions_clusters_get' },
        { label: 'projects_regions_clusters_list', value: 'projects_regions_clusters_list' }
    ]}
>
<TabItem value="projects_regions_clusters_get">

Gets the resource representation for a cluster in a project.

```sql
SELECT
clusterName,
clusterUuid,
config,
labels,
metrics,
projectId,
status,
statusHistory,
virtualClusterConfig
FROM google.dataproc.clusters
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND clusterName = '{{ clusterName }}' -- required;
```
</TabItem>
<TabItem value="projects_regions_clusters_list">

Lists all regions/&#123;region&#125;/clusters in a project alphabetically.

```sql
SELECT
clusters,
nextPageToken
FROM google.dataproc.clusters
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_regions_clusters_create"
    values={[
        { label: 'projects_regions_clusters_create', value: 'projects_regions_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_regions_clusters_create">

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

```sql
INSERT INTO google.dataproc.clusters (
data__projectId,
data__clusterName,
data__config,
data__virtualClusterConfig,
data__labels,
projectId,
region,
requestId,
actionOnFailedPrimaryWorkers
)
SELECT 
'{{ projectId }}',
'{{ clusterName }}',
'{{ config }}',
'{{ virtualClusterConfig }}',
'{{ labels }}',
'{{ projectId }}',
'{{ region }}',
'{{ requestId }}',
'{{ actionOnFailedPrimaryWorkers }}'
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
    - name: projectId
      value: string
      description: Required parameter for the clusters resource.
    - name: region
      value: string
      description: Required parameter for the clusters resource.
    - name: projectId
      value: string
      description: >
        Required. The Google Cloud Platform project ID that the cluster belongs to.
        
    - name: clusterName
      value: string
      description: >
        Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.
        
    - name: config
      value: object
      description: >
        Optional. The cluster config for a cluster of Compute Engine Instances. Note that Dataproc may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.
        
    - name: virtualClusterConfig
      value: object
      description: >
        Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.
        
    - name: labels
      value: object
      description: >
        Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
        
    - name: requestId
      value: string
    - name: actionOnFailedPrimaryWorkers
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_regions_clusters_patch"
    values={[
        { label: 'projects_regions_clusters_patch', value: 'projects_regions_clusters_patch' }
    ]}
>
<TabItem value="projects_regions_clusters_patch">

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

```sql
UPDATE google.dataproc.clusters
SET 
data__projectId = '{{ projectId }}',
data__clusterName = '{{ clusterName }}',
data__config = '{{ config }}',
data__virtualClusterConfig = '{{ virtualClusterConfig }}',
data__labels = '{{ labels }}'
WHERE 
projectId = '{{ projectId }}' --required
AND region = '{{ region }}' --required
AND clusterName = '{{ clusterName }}' --required
AND gracefulDecommissionTimeout = '{{ gracefulDecommissionTimeout}}'
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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
    defaultValue="projects_regions_clusters_delete"
    values={[
        { label: 'projects_regions_clusters_delete', value: 'projects_regions_clusters_delete' }
    ]}
>
<TabItem value="projects_regions_clusters_delete">

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

```sql
DELETE FROM google.dataproc.clusters
WHERE projectId = '{{ projectId }}' --required
AND region = '{{ region }}' --required
AND clusterName = '{{ clusterName }}' --required
AND clusterUuid = '{{ clusterUuid }}'
AND requestId = '{{ requestId }}'
AND gracefulTerminationTimeout = '{{ gracefulTerminationTimeout }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_regions_clusters_stop"
    values={[
        { label: 'projects_regions_clusters_stop', value: 'projects_regions_clusters_stop' },
        { label: 'projects_regions_clusters_start', value: 'projects_regions_clusters_start' },
        { label: 'projects_regions_clusters_repair', value: 'projects_regions_clusters_repair' },
        { label: 'projects_regions_clusters_diagnose', value: 'projects_regions_clusters_diagnose' },
        { label: 'projects_regions_clusters_inject_credentials', value: 'projects_regions_clusters_inject_credentials' }
    ]}
>
<TabItem value="projects_regions_clusters_stop">

Stops a cluster in a project.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_stop 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="projects_regions_clusters_start">

Starts a cluster in a project.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_start 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="projects_regions_clusters_repair">

Repairs a cluster.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_repair 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"requestId": "{{ requestId }}", 
"nodePools": "{{ nodePools }}", 
"gracefulDecommissionTimeout": "{{ gracefulDecommissionTimeout }}", 
"parentOperationId": "{{ parentOperationId }}", 
"cluster": "{{ cluster }}"
}';
```
</TabItem>
<TabItem value="projects_regions_clusters_diagnose">

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_diagnose 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"tarballGcsDir": "{{ tarballGcsDir }}", 
"tarballAccess": "{{ tarballAccess }}", 
"diagnosisInterval": "{{ diagnosisInterval }}", 
"job": "{{ job }}", 
"yarnApplicationId": "{{ yarnApplicationId }}", 
"jobs": "{{ jobs }}", 
"yarnApplicationIds": "{{ yarnApplicationIds }}"
}';
```
</TabItem>
<TabItem value="projects_regions_clusters_inject_credentials">

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_inject_credentials 
@projectsId='{{ projectsId }}' --required, 
@regionsId='{{ regionsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"credentialsCiphertext": "{{ credentialsCiphertext }}"
}';
```
</TabItem>
</Tabs>
