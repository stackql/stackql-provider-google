--- 
title: storage_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_pools
  - netapp
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

Creates, updates, deletes, gets or lists a <code>storage_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>storage_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.storage_pools" /></td></tr>
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
    <td>Identifier. Name of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="activeDirectory" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the Active Directory to be used for creating a SMB volume.</td>
</tr>
<tr>
    <td><CopyableCode code="allowAutoTiering" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="availableThroughputMibps" /></td>
    <td><code>number (double)</code></td>
    <td>Output only. Available throughput of the storage pool (in MiB/s).</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Capacity in GIB of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="customPerformanceEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if using Independent Scaling of capacity and performance (Hyperdisk) By default set to false</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="enableHotTierAutoResize" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. Default is true. The increment will kick in only if the new size after increment is still less than or equal to storage pool size.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionType" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the current pool encryption key source.</td>
</tr>
<tr>
    <td><CopyableCode code="globalAccessAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. Used to allow SO pool to access AD or DNS server from other regions.</td>
</tr>
<tr>
    <td><CopyableCode code="hotTierSizeGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Total hot tier capacity for the Storage Pool. It is applicable only to Flex service level. It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the KMS config to be used for volume encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="ldapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the pool is NFS LDAP enabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. VPC Network name. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="psaRange" /></td>
    <td><code>string</code></td>
    <td>Optional. This field is not implemented. The values provided in this field are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="qosType" /></td>
    <td><code>string</code></td>
    <td>Optional. QoS (Quality of Service) Type of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the replica zone for regional storagePool.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevel" /></td>
    <td><code>string</code></td>
    <td>Required. Service level of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="totalIops" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Custom Performance Total IOPS of the pool if not provided, it will be calculated based on the total_throughput_mibps</td>
</tr>
<tr>
    <td><CopyableCode code="totalThroughputMibps" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Custom Performance Total Throughput of the pool (in MiBps)</td>
</tr>
<tr>
    <td><CopyableCode code="volumeCapacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Allocated size of all volumes in GIB in the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="volumeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Volume count of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the active zone for regional storagePool.</td>
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
    <td>Identifier. Name of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="activeDirectory" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the Active Directory to be used for creating a SMB volume.</td>
</tr>
<tr>
    <td><CopyableCode code="allowAutoTiering" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="availableThroughputMibps" /></td>
    <td><code>number (double)</code></td>
    <td>Output only. Available throughput of the storage pool (in MiB/s).</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Capacity in GIB of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="customPerformanceEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if using Independent Scaling of capacity and performance (Hyperdisk) By default set to false</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="enableHotTierAutoResize" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. Default is true. The increment will kick in only if the new size after increment is still less than or equal to storage pool size.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionType" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the current pool encryption key source.</td>
</tr>
<tr>
    <td><CopyableCode code="globalAccessAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. Used to allow SO pool to access AD or DNS server from other regions.</td>
</tr>
<tr>
    <td><CopyableCode code="hotTierSizeGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Total hot tier capacity for the Storage Pool. It is applicable only to Flex service level. It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the KMS config to be used for volume encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="ldapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the pool is NFS LDAP enabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. VPC Network name. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="psaRange" /></td>
    <td><code>string</code></td>
    <td>Optional. This field is not implemented. The values provided in this field are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="qosType" /></td>
    <td><code>string</code></td>
    <td>Optional. QoS (Quality of Service) Type of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the replica zone for regional storagePool.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevel" /></td>
    <td><code>string</code></td>
    <td>Required. Service level of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="totalIops" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Custom Performance Total IOPS of the pool if not provided, it will be calculated based on the total_throughput_mibps</td>
</tr>
<tr>
    <td><CopyableCode code="totalThroughputMibps" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Custom Performance Total Throughput of the pool (in MiBps)</td>
</tr>
<tr>
    <td><CopyableCode code="volumeCapacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Allocated size of all volumes in GIB in the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="volumeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Volume count of the storage pool</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies the active zone for regional storagePool.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a></td>
    <td></td>
    <td>Returns the description of the specified storage pool by poolId.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns descriptions of all storage pools owned by the caller.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-storagePoolId"><code>storagePoolId</code></a></td>
    <td>Creates a new storage pool.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the storage pool properties with the full spec</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a></td>
    <td></td>
    <td>Warning! This operation will permanently delete the storage pool.</td>
</tr>
<tr>
    <td><a href="#validate_directory_service"><CopyableCode code="validate_directory_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a></td>
    <td></td>
    <td>ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.</td>
</tr>
<tr>
    <td><a href="#switch"><CopyableCode code="switch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a></td>
    <td></td>
    <td>This operation will switch the active/replica zone for a regional storagePool.</td>
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
<tr id="parameter-storagePoolsId">
    <td><CopyableCode code="storagePoolsId" /></td>
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
<tr id="parameter-storagePoolId">
    <td><CopyableCode code="storagePoolId" /></td>
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

Returns the description of the specified storage pool by poolId.

```sql
SELECT
name,
activeDirectory,
allowAutoTiering,
availableThroughputMibps,
capacityGib,
createTime,
customPerformanceEnabled,
description,
enableHotTierAutoResize,
encryptionType,
globalAccessAllowed,
hotTierSizeGib,
kmsConfig,
labels,
ldapEnabled,
network,
psaRange,
qosType,
replicaZone,
satisfiesPzi,
satisfiesPzs,
serviceLevel,
state,
stateDetails,
totalIops,
totalThroughputMibps,
volumeCapacityGib,
volumeCount,
zone
FROM google.netapp.storage_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND storagePoolsId = '{{ storagePoolsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns descriptions of all storage pools owned by the caller.

```sql
SELECT
name,
activeDirectory,
allowAutoTiering,
availableThroughputMibps,
capacityGib,
createTime,
customPerformanceEnabled,
description,
enableHotTierAutoResize,
encryptionType,
globalAccessAllowed,
hotTierSizeGib,
kmsConfig,
labels,
ldapEnabled,
network,
psaRange,
qosType,
replicaZone,
satisfiesPzi,
satisfiesPzs,
serviceLevel,
state,
stateDetails,
totalIops,
totalThroughputMibps,
volumeCapacityGib,
volumeCount,
zone
FROM google.netapp.storage_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new storage pool.

```sql
INSERT INTO google.netapp.storage_pools (
data__name,
data__serviceLevel,
data__capacityGib,
data__description,
data__labels,
data__network,
data__activeDirectory,
data__kmsConfig,
data__ldapEnabled,
data__psaRange,
data__globalAccessAllowed,
data__allowAutoTiering,
data__replicaZone,
data__zone,
data__customPerformanceEnabled,
data__totalThroughputMibps,
data__totalIops,
data__hotTierSizeGib,
data__enableHotTierAutoResize,
data__qosType,
projectsId,
locationsId,
storagePoolId
)
SELECT 
'{{ name }}',
'{{ serviceLevel }}',
'{{ capacityGib }}',
'{{ description }}',
'{{ labels }}',
'{{ network }}',
'{{ activeDirectory }}',
'{{ kmsConfig }}',
{{ ldapEnabled }},
'{{ psaRange }}',
{{ globalAccessAllowed }},
{{ allowAutoTiering }},
'{{ replicaZone }}',
'{{ zone }}',
{{ customPerformanceEnabled }},
'{{ totalThroughputMibps }}',
'{{ totalIops }}',
'{{ hotTierSizeGib }}',
{{ enableHotTierAutoResize }},
'{{ qosType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ storagePoolId }}'
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
- name: storage_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the storage_pools resource.
    - name: locationsId
      value: string
      description: Required parameter for the storage_pools resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the storage pool
        
    - name: serviceLevel
      value: string
      description: >
        Required. Service level of the storage pool
        
      valid_values: ['SERVICE_LEVEL_UNSPECIFIED', 'PREMIUM', 'EXTREME', 'STANDARD', 'FLEX']
    - name: capacityGib
      value: string
      description: >
        Required. Capacity in GIB of the pool
        
    - name: description
      value: string
      description: >
        Optional. Description of the storage pool
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: network
      value: string
      description: >
        Required. VPC Network name. Format: projects/{project}/global/networks/{network}
        
    - name: activeDirectory
      value: string
      description: >
        Optional. Specifies the Active Directory to be used for creating a SMB volume.
        
    - name: kmsConfig
      value: string
      description: >
        Optional. Specifies the KMS config to be used for volume encryption.
        
    - name: ldapEnabled
      value: boolean
      description: >
        Optional. Flag indicating if the pool is NFS LDAP enabled or not.
        
    - name: psaRange
      value: string
      description: >
        Optional. This field is not implemented. The values provided in this field are ignored.
        
    - name: globalAccessAllowed
      value: boolean
      description: >
        Deprecated. Used to allow SO pool to access AD or DNS server from other regions.
        
    - name: allowAutoTiering
      value: boolean
      description: >
        Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.
        
    - name: replicaZone
      value: string
      description: >
        Optional. Specifies the replica zone for regional storagePool.
        
    - name: zone
      value: string
      description: >
        Optional. Specifies the active zone for regional storagePool.
        
    - name: customPerformanceEnabled
      value: boolean
      description: >
        Optional. True if using Independent Scaling of capacity and performance (Hyperdisk) By default set to false
        
    - name: totalThroughputMibps
      value: string
      description: >
        Optional. Custom Performance Total Throughput of the pool (in MiBps)
        
    - name: totalIops
      value: string
      description: >
        Optional. Custom Performance Total IOPS of the pool if not provided, it will be calculated based on the total_throughput_mibps
        
    - name: hotTierSizeGib
      value: string
      description: >
        Optional. Total hot tier capacity for the Storage Pool. It is applicable only to Flex service level. It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set.
        
    - name: enableHotTierAutoResize
      value: boolean
      description: >
        Optional. Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. Default is true. The increment will kick in only if the new size after increment is still less than or equal to storage pool size.
        
    - name: qosType
      value: string
      description: >
        Optional. QoS (Quality of Service) Type of the storage pool
        
      valid_values: ['QOS_TYPE_UNSPECIFIED', 'AUTO', 'MANUAL']
    - name: storagePoolId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the storage pool properties with the full spec

```sql
UPDATE google.netapp.storage_pools
SET 
data__name = '{{ name }}',
data__serviceLevel = '{{ serviceLevel }}',
data__capacityGib = '{{ capacityGib }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__network = '{{ network }}',
data__activeDirectory = '{{ activeDirectory }}',
data__kmsConfig = '{{ kmsConfig }}',
data__ldapEnabled = {{ ldapEnabled }},
data__psaRange = '{{ psaRange }}',
data__globalAccessAllowed = {{ globalAccessAllowed }},
data__allowAutoTiering = {{ allowAutoTiering }},
data__replicaZone = '{{ replicaZone }}',
data__zone = '{{ zone }}',
data__customPerformanceEnabled = {{ customPerformanceEnabled }},
data__totalThroughputMibps = '{{ totalThroughputMibps }}',
data__totalIops = '{{ totalIops }}',
data__hotTierSizeGib = '{{ hotTierSizeGib }}',
data__enableHotTierAutoResize = {{ enableHotTierAutoResize }},
data__qosType = '{{ qosType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND storagePoolsId = '{{ storagePoolsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Warning! This operation will permanently delete the storage pool.

```sql
DELETE FROM google.netapp.storage_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND storagePoolsId = '{{ storagePoolsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_directory_service"
    values={[
        { label: 'validate_directory_service', value: 'validate_directory_service' },
        { label: 'switch', value: 'switch' }
    ]}
>
<TabItem value="validate_directory_service">

ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.

```sql
EXEC google.netapp.storage_pools.validate_directory_service 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@storagePoolsId='{{ storagePoolsId }}' --required 
@@json=
'{
"directoryServiceType": "{{ directoryServiceType }}"
}';
```
</TabItem>
<TabItem value="switch">

This operation will switch the active/replica zone for a regional storagePool.

```sql
EXEC google.netapp.storage_pools.switch 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@storagePoolsId='{{ storagePoolsId }}' --required;
```
</TabItem>
</Tabs>
