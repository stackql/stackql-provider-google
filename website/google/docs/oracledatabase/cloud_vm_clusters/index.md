--- 
title: cloud_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_vm_clusters
  - oracledatabase
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

Creates, updates, deletes, gets or lists a <code>cloud_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>cloud_vm_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.cloud_vm_clusters" /></td></tr>
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

Details of the Cloud VM Cluster resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/CloudVmCluster/

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
    <td>Identifier. The name of the VM Cluster resource with the format: projects/&#123;project&#125;/locations/&#123;region&#125;/cloudVmClusters/&#123;cloud_vm_cluster&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupOdbSubnet" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetCidr" /></td>
    <td><code>string</code></td>
    <td>Optional. CIDR range of the backup subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>Optional. Network settings. CIDR to use for cluster IP allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly name for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructure" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/cloudExadataInfrastuctures/&#123;cloud_extradata_infrastructure&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Output only. Google Cloud Platform location where Oracle Exadata is hosted. It is same as Google Cloud Platform Oracle zone of Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels or tags associated with the VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the VPC network. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbNetwork associated with the VM Cluster. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the odb_subnet and backup_odb_subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. Various properties of the VM Cluster. (id: CloudVmClusterProperties)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for `CloudVmCluster.List`.

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
    <td><CopyableCode code="cloudVmClusters" /></td>
    <td><code>array</code></td>
    <td>The list of VM Clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to fetch the next page of results.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cloudVmClustersId"><code>cloudVmClustersId</code></a></td>
    <td></td>
    <td>Gets details of a single VM Cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the VM Clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new VM Cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cloudVmClustersId"><code>cloudVmClustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single VM Cluster.</td>
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
<tr id="parameter-cloudVmClustersId">
    <td><CopyableCode code="cloudVmClustersId" /></td>
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
<tr id="parameter-cloudVmClusterId">
    <td><CopyableCode code="cloudVmClusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single VM Cluster.

```sql
SELECT
name,
backupOdbSubnet,
backupSubnetCidr,
cidr,
createTime,
displayName,
exadataInfrastructure,
gcpOracleZone,
labels,
network,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.cloud_vm_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND cloudVmClustersId = '{{ cloudVmClustersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the VM Clusters in a given project and location.

```sql
SELECT
cloudVmClusters,
nextPageToken
FROM google.oracledatabase.cloud_vm_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new VM Cluster in a given project and location.

```sql
INSERT INTO google.oracledatabase.cloud_vm_clusters (
data__name,
data__exadataInfrastructure,
data__displayName,
data__properties,
data__labels,
data__cidr,
data__backupSubnetCidr,
data__network,
data__odbNetwork,
data__odbSubnet,
data__backupOdbSubnet,
projectsId,
locationsId,
cloudVmClusterId,
requestId
)
SELECT 
'{{ name }}',
'{{ exadataInfrastructure }}',
'{{ displayName }}',
'{{ properties }}',
'{{ labels }}',
'{{ cidr }}',
'{{ backupSubnetCidr }}',
'{{ network }}',
'{{ odbNetwork }}',
'{{ odbSubnet }}',
'{{ backupOdbSubnet }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ cloudVmClusterId }}',
'{{ requestId }}'
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
- name: cloud_vm_clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the cloud_vm_clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the cloud_vm_clusters resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the VM Cluster resource with the format: projects/{project}/locations/{region}/cloudVmClusters/{cloud_vm_cluster}
        
    - name: exadataInfrastructure
      value: string
      description: >
        Required. The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly name for this resource.
        
    - name: properties
      value: object
      description: >
        Optional. Various properties of the VM Cluster.
        
    - name: labels
      value: object
      description: >
        Optional. Labels or tags associated with the VM Cluster.
        
    - name: cidr
      value: string
      description: >
        Optional. Network settings. CIDR to use for cluster IP allocation.
        
    - name: backupSubnetCidr
      value: string
      description: >
        Optional. CIDR range of the backup subnet.
        
    - name: network
      value: string
      description: >
        Optional. The name of the VPC network. Format: projects/{project}/global/networks/{network}
        
    - name: odbNetwork
      value: string
      description: >
        Optional. The name of the OdbNetwork associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the odb_subnet and backup_odb_subnet.
        
    - name: odbSubnet
      value: string
      description: >
        Optional. The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
        
    - name: backupOdbSubnet
      value: string
      description: >
        Optional. The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
        
    - name: cloudVmClusterId
      value: string
    - name: requestId
      value: string
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

Deletes a single VM Cluster.

```sql
DELETE FROM google.oracledatabase.cloud_vm_clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND cloudVmClustersId = '{{ cloudVmClustersId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
