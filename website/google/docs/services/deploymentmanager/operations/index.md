--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - deploymentmanager
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.deploymentmanager.operations" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the operation. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Name of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Deprecated] This field is deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>[Output Only] A textual description of the operation, which is set when the operation is created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was completed. This value is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>[Output Only] If errors are generated during processing of the operation, this field will be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="httpErrorMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.</td>
</tr>
<tr>
    <td><CopyableCode code="httpErrorStatusCode" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.</td>
</tr>
<tr>
    <td><CopyableCode code="insertTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was requested. This value is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="instancesBulkInsertOperationMetadata" /></td>
    <td><code>object</code></td>
    <td> (id: InstancesBulkInsertOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always `compute#operation` for Operation resources. (default: compute#operation)</td>
</tr>
<tr>
    <td><CopyableCode code="operationGroupId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="setAutoscalerLinkOperationMetadata" /></td>
    <td><code>object</code></td>
    <td>This field is used internally by the Autoscaler team and should not be promoted to "alpha/beta/v1". (id: SetAutoscalerLinkOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="setCommonInstanceMetadataOperationMetadata" /></td>
    <td><code>object</code></td>
    <td>[Output Only] If the operation is for projects.setCommonInstanceMetadata, this field will contain information on all underlying zonal actions and their state. (id: SetCommonInstanceMetadataOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional textual description of the current status of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique target ID, which identifies a specific incarnation of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the disk that the snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>[Output Only] User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>[Output Only] If warning messages are generated during processing of the operation, this field will be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the operation. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Name of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Deprecated] This field is deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>[Output Only] A textual description of the operation, which is set when the operation is created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was completed. This value is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>[Output Only] If errors are generated during processing of the operation, this field will be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="httpErrorMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.</td>
</tr>
<tr>
    <td><CopyableCode code="httpErrorStatusCode" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.</td>
</tr>
<tr>
    <td><CopyableCode code="insertTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was requested. This value is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="instancesBulkInsertOperationMetadata" /></td>
    <td><code>object</code></td>
    <td> (id: InstancesBulkInsertOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always `compute#operation` for Operation resources. (default: compute#operation)</td>
</tr>
<tr>
    <td><CopyableCode code="operationGroupId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="setAutoscalerLinkOperationMetadata" /></td>
    <td><code>object</code></td>
    <td>This field is used internally by the Autoscaler team and should not be promoted to "alpha/beta/v1". (id: SetAutoscalerLinkOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="setCommonInstanceMetadataOperationMetadata" /></td>
    <td><code>object</code></td>
    <td>[Output Only] If the operation is for projects.setCommonInstanceMetadata, this field will contain information on all underlying zonal actions and their state. (id: SetCommonInstanceMetadataOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional textual description of the current status of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique target ID, which identifies a specific incarnation of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the disk that the snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>[Output Only] User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>[Output Only] If warning messages are generated during processing of the operation, this field will be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-operation"><code>operation</code></a></td>
    <td><a href="#parameter-header.bypassBillingFilter"><code>header.bypassBillingFilter</code></a></td>
    <td>Gets information about a specific operation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all operations for a project.</td>
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
<tr id="parameter-operation">
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-header.bypassBillingFilter">
    <td><CopyableCode code="header.bypassBillingFilter" /></td>
    <td><code>boolean</code></td>
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

Gets information about a specific operation.

```sql
SELECT
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
selfLinkWithId,
setAutoscalerLinkOperationMetadata,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
FROM google.deploymentmanager.operations
WHERE project = '{{ project }}' -- required
AND operation = '{{ operation }}' -- required
AND header.bypassBillingFilter = '{{ header.bypassBillingFilter }}';
```
</TabItem>
<TabItem value="list">

Lists all operations for a project.

```sql
SELECT
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
selfLinkWithId,
setAutoscalerLinkOperationMetadata,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
FROM google.deploymentmanager.operations
WHERE project = '{{ project }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
