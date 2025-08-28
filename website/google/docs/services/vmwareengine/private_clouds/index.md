--- 
title: private_clouds
hide_title: false
hide_table_of_contents: false
keywords:
  - private_clouds
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

Creates, updates, deletes, gets or lists a <code>private_clouds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>private_clouds</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.private_clouds" /></td></tr>
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
    <td>Output only. Identifier. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource was scheduled for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this private cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource will be irreversibly deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="hcx" /></td>
    <td><code>object</code></td>
    <td>Output only. HCX appliance. (id: Hcx)</td>
</tr>
<tr>
    <td><CopyableCode code="managementCluster" /></td>
    <td><code>object</code></td>
    <td>Required. Input only. The management cluster for this private cloud. This field is required during creation of the private cloud to provide details for the default cluster. The following fields can't be changed after private cloud creation: `ManagementCluster.clusterId`, `ManagementCluster.nodeTypeId`. (id: ManagementCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Network configuration of the private cloud. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nsx" /></td>
    <td><code>object</code></td>
    <td>Output only. NSX appliance. (id: Nsx)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the resource. New values may be added to this enum when appropriate.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of the private cloud. Defaults to STANDARD.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>Output only. Vcenter appliance. (id: Vcenter)</td>
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
    <td>Output only. Identifier. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource was scheduled for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this private cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource will be irreversibly deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="hcx" /></td>
    <td><code>object</code></td>
    <td>Output only. HCX appliance. (id: Hcx)</td>
</tr>
<tr>
    <td><CopyableCode code="managementCluster" /></td>
    <td><code>object</code></td>
    <td>Required. Input only. The management cluster for this private cloud. This field is required during creation of the private cloud to provide details for the default cluster. The following fields can't be changed after private cloud creation: `ManagementCluster.clusterId`, `ManagementCluster.nodeTypeId`. (id: ManagementCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Network configuration of the private cloud. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nsx" /></td>
    <td><code>object</code></td>
    <td>Output only. NSX appliance. (id: Nsx)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the resource. New values may be added to this enum when appropriate.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of the private cloud. Defaults to STANDARD.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>Output only. Vcenter appliance. (id: Vcenter)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Retrieves a `PrivateCloud` resource by its resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists `PrivateCloud` resources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-privateCloudId"><code>privateCloudId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new `PrivateCloud` resource in a given project and location. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. Creating a private cloud also creates a [management cluster](https://cloud.google.com/vmware-engine/docs/concepts-vmware-components) for that private cloud.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Modifies a `PrivateCloud` resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-delayHours"><code>delayHours</code></a></td>
    <td>Schedules a `PrivateCloud` resource for deletion. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `expireTime` set to the time when deletion is final and can no longer be reversed. The delete operation is marked as done as soon as the `PrivateCloud` is successfully scheduled for deletion (this also applies when `delayHours` is set to zero), and the operation is not kept in pending state until `PrivateCloud` is purged. `PrivateCloud` can be restored using `UndeletePrivateCloud` method before the `expireTime` elapses. When `expireTime` is reached, deletion is final and all private cloud resources are irreversibly removed and billing stops. During the final removal process, `PrivateCloud.state` is set to `PURGING`. `PrivateCloud` can be polled using standard `GET` method for the whole period of deletion and purging. It will not be returned only when it is completely purged.</td>
</tr>
<tr>
    <td><a href="#private_cloud_deletion_now"><CopyableCode code="private_cloud_deletion_now" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Accelerates the deletion of a private cloud that is currently in soft deletion A `PrivateCloud` resource in soft deletion has `PrivateCloud.state` set to `SOFT_DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Restores a private cloud that was previously scheduled for deletion by `DeletePrivateCloud`. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.</td>
</tr>
<tr>
    <td><a href="#show_nsx_credentials"><CopyableCode code="show_nsx_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Gets details of credentials for NSX appliance.</td>
</tr>
<tr>
    <td><a href="#show_vcenter_credentials"><CopyableCode code="show_vcenter_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td>Gets details of credentials for Vcenter appliance.</td>
</tr>
<tr>
    <td><a href="#reset_nsx_credentials"><CopyableCode code="reset_nsx_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Resets credentials of the NSX appliance.</td>
</tr>
<tr>
    <td><a href="#reset_vcenter_credentials"><CopyableCode code="reset_vcenter_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-privateCloudsId"><code>privateCloudsId</code></a></td>
    <td></td>
    <td>Resets credentials of the Vcenter appliance.</td>
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
<tr id="parameter-privateCloudsId">
    <td><CopyableCode code="privateCloudsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-delayHours">
    <td><CopyableCode code="delayHours" /></td>
    <td><code>integer (int32)</code></td>
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
<tr id="parameter-privateCloudId">
    <td><CopyableCode code="privateCloudId" /></td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Retrieves a `PrivateCloud` resource by its resource name.

```sql
SELECT
name,
createTime,
deleteTime,
description,
expireTime,
hcx,
managementCluster,
networkConfig,
nsx,
state,
type,
uid,
updateTime,
vcenter
FROM google.vmwareengine.private_clouds
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND privateCloudsId = '{{ privateCloudsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists `PrivateCloud` resources in a given project and location.

```sql
SELECT
name,
createTime,
deleteTime,
description,
expireTime,
hcx,
managementCluster,
networkConfig,
nsx,
state,
type,
uid,
updateTime,
vcenter
FROM google.vmwareengine.private_clouds
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new `PrivateCloud` resource in a given project and location. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. Creating a private cloud also creates a [management cluster](https://cloud.google.com/vmware-engine/docs/concepts-vmware-components) for that private cloud.

```sql
INSERT INTO google.vmwareengine.private_clouds (
data__networkConfig,
data__managementCluster,
data__description,
data__type,
projectsId,
locationsId,
privateCloudId,
requestId,
validateOnly
)
SELECT 
'{{ networkConfig }}',
'{{ managementCluster }}',
'{{ description }}',
'{{ type }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ privateCloudId }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
- name: private_clouds
  props:
    - name: projectsId
      value: string
      description: Required parameter for the private_clouds resource.
    - name: locationsId
      value: string
      description: Required parameter for the private_clouds resource.
    - name: networkConfig
      value: object
      description: >
        Required. Network configuration of the private cloud.
        
    - name: managementCluster
      value: object
      description: >
        Required. Input only. The management cluster for this private cloud. This field is required during creation of the private cloud to provide details for the default cluster. The following fields can't be changed after private cloud creation: `ManagementCluster.clusterId`, `ManagementCluster.nodeTypeId`.
        
    - name: description
      value: string
      description: >
        User-provided description for this private cloud.
        
    - name: type
      value: string
      description: >
        Optional. Type of the private cloud. Defaults to STANDARD.
        
      valid_values: ['STANDARD', 'TIME_LIMITED', 'STRETCHED']
    - name: privateCloudId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
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

Modifies a `PrivateCloud` resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.

```sql
UPDATE google.vmwareengine.private_clouds
SET 
data__networkConfig = '{{ networkConfig }}',
data__managementCluster = '{{ managementCluster }}',
data__description = '{{ description }}',
data__type = '{{ type }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Schedules a `PrivateCloud` resource for deletion. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `expireTime` set to the time when deletion is final and can no longer be reversed. The delete operation is marked as done as soon as the `PrivateCloud` is successfully scheduled for deletion (this also applies when `delayHours` is set to zero), and the operation is not kept in pending state until `PrivateCloud` is purged. `PrivateCloud` can be restored using `UndeletePrivateCloud` method before the `expireTime` elapses. When `expireTime` is reached, deletion is final and all private cloud resources are irreversibly removed and billing stops. During the final removal process, `PrivateCloud.state` is set to `PURGING`. `PrivateCloud` can be polled using standard `GET` method for the whole period of deletion and purging. It will not be returned only when it is completely purged.

```sql
DELETE FROM google.vmwareengine.private_clouds
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND privateCloudsId = '{{ privateCloudsId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}'
AND delayHours = '{{ delayHours }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="private_cloud_deletion_now"
    values={[
        { label: 'private_cloud_deletion_now', value: 'private_cloud_deletion_now' },
        { label: 'undelete', value: 'undelete' },
        { label: 'show_nsx_credentials', value: 'show_nsx_credentials' },
        { label: 'show_vcenter_credentials', value: 'show_vcenter_credentials' },
        { label: 'reset_nsx_credentials', value: 'reset_nsx_credentials' },
        { label: 'reset_vcenter_credentials', value: 'reset_vcenter_credentials' }
    ]}
>
<TabItem value="private_cloud_deletion_now">

Accelerates the deletion of a private cloud that is currently in soft deletion A `PrivateCloud` resource in soft deletion has `PrivateCloud.state` set to `SOFT_DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.

```sql
EXEC google.vmwareengine.private_clouds.private_cloud_deletion_now 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="undelete">

Restores a private cloud that was previously scheduled for deletion by `DeletePrivateCloud`. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.

```sql
EXEC google.vmwareengine.private_clouds.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="show_nsx_credentials">

Gets details of credentials for NSX appliance.

```sql
EXEC google.vmwareengine.private_clouds.show_nsx_credentials 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required;
```
</TabItem>
<TabItem value="show_vcenter_credentials">

Gets details of credentials for Vcenter appliance.

```sql
EXEC google.vmwareengine.private_clouds.show_vcenter_credentials 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required, 
@username='{{ username }}';
```
</TabItem>
<TabItem value="reset_nsx_credentials">

Resets credentials of the NSX appliance.

```sql
EXEC google.vmwareengine.private_clouds.reset_nsx_credentials 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="reset_vcenter_credentials">

Resets credentials of the Vcenter appliance.

```sql
EXEC google.vmwareengine.private_clouds.reset_vcenter_credentials 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@privateCloudsId='{{ privateCloudsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"username": "{{ username }}"
}';
```
</TabItem>
</Tabs>
