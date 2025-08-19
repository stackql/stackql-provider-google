--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - file
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.file.instances" /></td></tr>
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

A Filestore instance.

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
    <td>Output only. The resource name of the instance, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customPerformanceSupported" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this instance supports configuring its performance. If true, the user can configure the instance's performance by using the 'performance_config' field.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the instance is protected against deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionReason" /></td>
    <td><code>string</code></td>
    <td>Optional. The reason for enabling deletion protection.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="fileShares" /></td>
    <td><code>array</code></td>
    <td>File system shares on the instance. For this version, only a single file share is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>KMS key name used for data encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>VPC networks to which the instance is connected. For this version, only a single network is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="performanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Used to configure performance. (id: PerformanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceLimits" /></td>
    <td><code>object</code></td>
    <td>Output only. Used for getting performance limits. (id: PerformanceLimits)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`.</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Optional. Replication configuration. (id: Replication)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the instance state, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReasons" /></td>
    <td><code>array</code></td>
    <td>Output only. Field indicates all the reasons the instance is in "SUSPENDED" state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The service tier of the instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

ListInstancesResponse is the result of ListInstancesRequest.

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
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>A list of instances in the project for the specified location. If the `&#123;location&#125;` value in the request is "-", the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets the details of a specific instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all instances in a project for either a specified location or for all locations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings of a specific instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an instance.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).</td>
</tr>
<tr>
    <td><a href="#revert"><CopyableCode code="revert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Revert an existing instance's file system to a specified snapshot.</td>
</tr>
<tr>
    <td><a href="#promote_replica"><CopyableCode code="promote_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Promote the standby instance (replica).</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets the details of a specific instance.

```sql
SELECT
name,
createTime,
customPerformanceSupported,
deletionProtectionEnabled,
deletionProtectionReason,
description,
etag,
fileShares,
kmsKeyName,
labels,
networks,
performanceConfig,
performanceLimits,
protocol,
replication,
satisfiesPzi,
satisfiesPzs,
state,
statusMessage,
suspensionReasons,
tags,
tier
FROM google.file.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all instances in a project for either a specified location or for all locations.

```sql
SELECT
instances,
nextPageToken,
unreachable
FROM google.file.instances
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

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

```sql
INSERT INTO google.file.instances (
data__description,
data__tier,
data__labels,
data__fileShares,
data__networks,
data__etag,
data__kmsKeyName,
data__replication,
data__tags,
data__protocol,
data__performanceConfig,
data__deletionProtectionEnabled,
data__deletionProtectionReason,
projectsId,
locationsId,
instanceId
)
SELECT 
'{{ description }}',
'{{ tier }}',
'{{ labels }}',
'{{ fileShares }}',
'{{ networks }}',
'{{ etag }}',
'{{ kmsKeyName }}',
'{{ replication }}',
'{{ tags }}',
'{{ protocol }}',
'{{ performanceConfig }}',
{{ deletionProtectionEnabled }},
'{{ deletionProtectionReason }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}'
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
- name: instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the instances resource.
    - name: description
      value: string
      description: >
        The description of the instance (2048 characters or less).
        
    - name: tier
      value: string
      description: >
        The service tier of the instance.
        
      valid_values: ['TIER_UNSPECIFIED', 'STANDARD', 'PREMIUM', 'BASIC_HDD', 'BASIC_SSD', 'HIGH_SCALE_SSD', 'ENTERPRISE', 'ZONAL', 'REGIONAL']
    - name: labels
      value: object
      description: >
        Resource labels to represent user provided metadata.
        
    - name: fileShares
      value: array
      description: >
        File system shares on the instance. For this version, only a single file share is supported.
        
    - name: networks
      value: array
      description: >
        VPC networks to which the instance is connected. For this version, only a single network is supported.
        
    - name: etag
      value: string
      description: >
        Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
        
    - name: kmsKeyName
      value: string
      description: >
        KMS key name used for data encryption.
        
    - name: replication
      value: object
      description: >
        Optional. Replication configuration.
        
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
        
    - name: protocol
      value: string
      description: >
        Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`.
        
      valid_values: ['FILE_PROTOCOL_UNSPECIFIED', 'NFS_V3', 'NFS_V4_1']
    - name: performanceConfig
      value: object
      description: >
        Optional. Used to configure performance.
        
    - name: deletionProtectionEnabled
      value: boolean
      description: >
        Optional. Indicates whether the instance is protected against deletion.
        
    - name: deletionProtectionReason
      value: string
      description: >
        Optional. The reason for enabling deletion protection.
        
    - name: instanceId
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

Updates the settings of a specific instance.

```sql
UPDATE google.file.instances
SET 
data__description = '{{ description }}',
data__tier = '{{ tier }}',
data__labels = '{{ labels }}',
data__fileShares = '{{ fileShares }}',
data__networks = '{{ networks }}',
data__etag = '{{ etag }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__replication = '{{ replication }}',
data__tags = '{{ tags }}',
data__protocol = '{{ protocol }}',
data__performanceConfig = '{{ performanceConfig }}',
data__deletionProtectionEnabled = {{ deletionProtectionEnabled }},
data__deletionProtectionReason = '{{ deletionProtectionReason }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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

Deletes an instance.

```sql
DELETE FROM google.file.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' },
        { label: 'revert', value: 'revert' },
        { label: 'promote_replica', value: 'promote_replica' }
    ]}
>
<TabItem value="restore">

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

```sql
EXEC google.file.instances.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"fileShare": "{{ fileShare }}", 
"sourceBackup": "{{ sourceBackup }}"
}';
```
</TabItem>
<TabItem value="revert">

Revert an existing instance's file system to a specified snapshot.

```sql
EXEC google.file.instances.revert 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"targetSnapshotId": "{{ targetSnapshotId }}"
}';
```
</TabItem>
<TabItem value="promote_replica">

Promote the standby instance (replica).

```sql
EXEC google.file.instances.promote_replica 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"peerInstance": "{{ peerInstance }}"
}';
```
</TabItem>
</Tabs>
