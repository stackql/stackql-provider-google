--- 
title: storage_pool_types
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_pool_types
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

Creates, updates, deletes, gets or lists a <code>storage_pool_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>storage_pool_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.storage_pool_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Name of the resource. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The deprecation status associated with this storage pool type. (id: DeprecationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#storagePoolType for storage pool types. (default: compute#storagePoolType)</td>
</tr>
<tr>
    <td><CopyableCode code="maxPoolProvisionedCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Maximum storage pool size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="maxPoolProvisionedIops" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Maximum provisioned IOPS.</td>
</tr>
<tr>
    <td><CopyableCode code="maxPoolProvisionedThroughput" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Maximum provisioned throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="minPoolProvisionedCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Minimum storage pool size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="minPoolProvisionedIops" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Minimum provisioned IOPS.</td>
</tr>
<tr>
    <td><CopyableCode code="minPoolProvisionedThroughput" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Minimum provisioned throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="minSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Deprecated] This field is deprecated. Use minPoolProvisionedCapacityGb instead.</td>
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
    <td><CopyableCode code="supportedDiskTypes" /></td>
    <td><code>array</code></td>
    <td>[Output Only] The list of disk types supported in this storage pool type.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the zone where the storage pool type resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
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
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of StoragePoolType resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#storagePoolTypeList for storage pool types. (default: compute#storagePoolTypeList)</td>
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
<TabItem value="aggregated_list">

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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Name of the resource. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The deprecation status associated with this storage pool type. (id: DeprecationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#storagePoolType for storage pool types. (default: compute#storagePoolType)</td>
</tr>
<tr>
    <td><CopyableCode code="maxPoolProvisionedCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Maximum storage pool size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="maxPoolProvisionedIops" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Maximum provisioned IOPS.</td>
</tr>
<tr>
    <td><CopyableCode code="maxPoolProvisionedThroughput" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Maximum provisioned throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="minPoolProvisionedCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Minimum storage pool size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="minPoolProvisionedIops" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Minimum provisioned IOPS.</td>
</tr>
<tr>
    <td><CopyableCode code="minPoolProvisionedThroughput" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Minimum provisioned throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="minSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Deprecated] This field is deprecated. Use minPoolProvisionedCapacityGb instead.</td>
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
    <td><CopyableCode code="supportedDiskTypes" /></td>
    <td><code>array</code></td>
    <td>[Output Only] The list of disk types supported in this storage pool type.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the zone where the storage pool type resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-storagePoolType"><code>storagePoolType</code></a></td>
    <td></td>
    <td>Returns the specified storage pool type.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of storage pool types available to the specified project.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of storage pool types. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-storagePoolType">
    <td><CopyableCode code="storagePoolType" /></td>
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
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified storage pool type.

```sql
SELECT
id,
name,
creationTimestamp,
deprecated,
description,
kind,
maxPoolProvisionedCapacityGb,
maxPoolProvisionedIops,
maxPoolProvisionedThroughput,
minPoolProvisionedCapacityGb,
minPoolProvisionedIops,
minPoolProvisionedThroughput,
minSizeGb,
selfLink,
selfLinkWithId,
supportedDiskTypes,
zone
FROM google.compute.storage_pool_types
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND storagePoolType = '{{ storagePoolType }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a list of storage pool types available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.storage_pool_types
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of storage pool types. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
creationTimestamp,
deprecated,
description,
kind,
maxPoolProvisionedCapacityGb,
maxPoolProvisionedIops,
maxPoolProvisionedThroughput,
minPoolProvisionedCapacityGb,
minPoolProvisionedIops,
minPoolProvisionedThroughput,
minSizeGb,
selfLink,
selfLinkWithId,
supportedDiskTypes,
zone
FROM google.compute.storage_pool_types
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}';
```
</TabItem>
</Tabs>
