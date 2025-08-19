--- 
title: instance_group_manager_resize_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_group_manager_resize_requests
  - compute
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

Creates, updates, deletes, gets or lists an <code>instance_group_manager_resize_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instance_group_manager_resize_requests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instance_group_manager_resize_requests" /></td></tr>
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

InstanceGroupManagerResizeRequest represents a request to create a number of VMs: either immediately or by queuing the request for the specified time. This resize request is nested under InstanceGroupManager and the VMs created by this request are added to the owning InstanceGroupManager.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] A unique identifier for this resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The creation timestamp for this resize request in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource type, which is always compute#instanceGroupManagerResizeRequest for resize requests. (default: compute#instanceGroupManagerResizeRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedRunDuration" /></td>
    <td><code>object</code></td>
    <td>Requested run duration for instances that will be created by this request. At the end of the run duration instance will be deleted. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="resizeBy" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of instances to be created by this resize request. The group's target size will be increased by this number. This field cannot be used together with 'instances'.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL for this resize request. The server defines this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>[Output only] Current state of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>[Output only] Status of the request. (id: InstanceGroupManagerResizeRequestStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of a zone where the resize request is located. Populated only for zonal resize requests.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

[Output Only] A list of resize requests.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of resize request resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#instanceGroupManagerResizeRequestList for a list of resize requests. (default: compute#instanceGroupManagerResizeRequestList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-resizeRequest"><code>resizeRequest</code></a></td>
    <td></td>
    <td>Returns all of the details about the specified resize request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of resize requests that are contained in the managed instance group.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new resize request that starts provisioning VMs immediately or queues VM creation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-resizeRequest"><code>resizeRequest</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-resizeRequest"><code>resizeRequest</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.</td>
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
<tr id="parameter-instanceGroupManager">
    <td><CopyableCode code="instanceGroupManager" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resizeRequest">
    <td><CopyableCode code="resizeRequest" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
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

Returns all of the details about the specified resize request.

```sql
SELECT
id,
name,
creationTimestamp,
description,
kind,
requestedRunDuration,
resizeBy,
selfLink,
selfLinkWithId,
state,
status,
zone
FROM google.compute.instance_group_manager_resize_requests
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instanceGroupManager = '{{ instanceGroupManager }}' -- required
AND resizeRequest = '{{ resizeRequest }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of resize requests that are contained in the managed instance group.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.instance_group_manager_resize_requests
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instanceGroupManager = '{{ instanceGroupManager }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new resize request that starts provisioning VMs immediately or queues VM creation.

```sql
INSERT INTO google.compute.instance_group_manager_resize_requests (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__zone,
data__resizeBy,
data__requestedRunDuration,
data__state,
data__status,
data__selfLink,
data__selfLinkWithId,
project,
zone,
instanceGroupManager,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ zone }}',
{{ resizeBy }},
'{{ requestedRunDuration }}',
'{{ state }}',
'{{ status }}',
'{{ selfLink }}',
'{{ selfLinkWithId }}',
'{{ project }}',
'{{ zone }}',
'{{ instanceGroupManager }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: instance_group_manager_resize_requests
  props:
    - name: project
      value: string
      description: Required parameter for the instance_group_manager_resize_requests resource.
    - name: zone
      value: string
      description: Required parameter for the instance_group_manager_resize_requests resource.
    - name: instanceGroupManager
      value: string
      description: Required parameter for the instance_group_manager_resize_requests resource.
    - name: kind
      value: string
      description: >
        [Output Only] The resource type, which is always compute#instanceGroupManagerResizeRequest for resize requests.
        
      default: compute#instanceGroupManagerResizeRequest
    - name: id
      value: string
      description: >
        [Output Only] A unique identifier for this resource type. The server generates this identifier.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] The creation timestamp for this resize request in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.
        
    - name: description
      value: string
      description: >
        An optional description of this resource.
        
    - name: zone
      value: string
      description: >
        [Output Only] The URL of a zone where the resize request is located. Populated only for zonal resize requests.
        
    - name: resizeBy
      value: integer
      description: >
        The number of instances to be created by this resize request. The group's target size will be increased by this number. This field cannot be used together with 'instances'.
        
    - name: requestedRunDuration
      value: object
      description: >
        Requested run duration for instances that will be created by this request. At the end of the run duration instance will be deleted.
        
    - name: state
      value: string
      description: >
        [Output only] Current state of the request.
        
      valid_values: ['ACCEPTED', 'CANCELLED', 'CREATING', 'FAILED', 'STATE_UNSPECIFIED', 'SUCCEEDED']
    - name: status
      value: object
      description: >
        [Output only] Status of the request.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] The URL for this resize request. The server defines this URL.
        
    - name: selfLinkWithId
      value: string
      description: >
        [Output Only] Server-defined URL for this resource with the resource id.
        
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

Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.

```sql
DELETE FROM google.compute.instance_group_manager_resize_requests
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND instanceGroupManager = '{{ instanceGroupManager }}' --required
AND resizeRequest = '{{ resizeRequest }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.

```sql
EXEC google.compute.instance_group_manager_resize_requests.cancel 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@resizeRequest='{{ resizeRequest }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
</Tabs>
