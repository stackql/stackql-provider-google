--- 
title: backend_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_buckets
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

Creates, updates, deletes, gets or lists a <code>backend_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backend_buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.backend_buckets" /></td></tr>
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
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>Cloud Storage bucket name.</td>
</tr>
<tr>
    <td><CopyableCode code="cdnPolicy" /></td>
    <td><code>object</code></td>
    <td>Cloud CDN configuration for this BackendBucket. (id: BackendBucketCdnPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="compressionMode" /></td>
    <td><code>string</code></td>
    <td>Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customResponseHeaders" /></td>
    <td><code>array</code></td>
    <td>Headers that the Application Load Balancer should add to proxied responses.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional textual description of the resource; provided by the client when the resource is created.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeSecurityPolicy" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The resource URL for the edge security policy associated with this backend bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="enableCdn" /></td>
    <td><code>boolean</code></td>
    <td>If true, enable Cloud CDN for this BackendBucket.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of the resource. (default: compute#backendBucket)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingScheme" /></td>
    <td><code>string</code></td>
    <td>The value can only be INTERNAL_MANAGED for cross-region internal layer 7 load balancer. If loadBalancingScheme is not specified, the backend bucket can be used by classic global external load balancers, or global application external load balancers, or both.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: BackendBucketParams)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="usedBy" /></td>
    <td><code>array</code></td>
    <td>[Output Only] List of resources referencing that backend bucket.</td>
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
    <td>A list of BackendBucket resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#backendBucketList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td></td>
    <td>Returns the specified BackendBucket resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of BackendBucket resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a BackendBucket resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified BackendBucket resource with the data included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified BackendBucket resource.</td>
</tr>
<tr>
    <td><a href="#add_signed_url_key"><CopyableCode code="add_signed_url_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds a key for validating requests with signed URLs for this backend bucket.</td>
</tr>
<tr>
    <td><a href="#delete_signed_url_key"><CopyableCode code="delete_signed_url_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a>, <a href="#parameter-keyName"><code>keyName</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a key for validating requests with signed URLs for this backend bucket.</td>
</tr>
<tr>
    <td><a href="#set_edge_security_policy"><CopyableCode code="set_edge_security_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-backendBucket"><code>backendBucket</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the edge security policy for the specified backend bucket.</td>
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
<tr id="parameter-backendBucket">
    <td><CopyableCode code="backendBucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keyName">
    <td><CopyableCode code="keyName" /></td>
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

Returns the specified BackendBucket resource.

```sql
SELECT
id,
name,
bucketName,
cdnPolicy,
compressionMode,
creationTimestamp,
customResponseHeaders,
description,
edgeSecurityPolicy,
enableCdn,
kind,
loadBalancingScheme,
params,
selfLink,
usedBy
FROM google.compute.backend_buckets
WHERE project = '{{ project }}' -- required
AND backendBucket = '{{ backendBucket }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of BackendBucket resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.backend_buckets
WHERE project = '{{ project }}' -- required
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

Creates a BackendBucket resource in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.backend_buckets (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__selfLink,
data__bucketName,
data__enableCdn,
data__cdnPolicy,
data__customResponseHeaders,
data__edgeSecurityPolicy,
data__compressionMode,
data__loadBalancingScheme,
data__params,
data__usedBy,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ selfLink }}',
'{{ bucketName }}',
{{ enableCdn }},
'{{ cdnPolicy }}',
'{{ customResponseHeaders }}',
'{{ edgeSecurityPolicy }}',
'{{ compressionMode }}',
'{{ loadBalancingScheme }}',
'{{ params }}',
'{{ usedBy }}',
'{{ project }}',
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
- name: backend_buckets
  props:
    - name: project
      value: string
      description: Required parameter for the backend_buckets resource.
    - name: kind
      value: string
      description: >
        Type of the resource.
        
      default: compute#backendBucket
    - name: id
      value: string
      description: >
        [Output Only] Unique identifier for the resource; defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional textual description of the resource; provided by the client when the resource is created.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: bucketName
      value: string
      description: >
        Cloud Storage bucket name.
        
    - name: enableCdn
      value: boolean
      description: >
        If true, enable Cloud CDN for this BackendBucket.
        
    - name: cdnPolicy
      value: object
      description: >
        Cloud CDN configuration for this BackendBucket.
        
    - name: customResponseHeaders
      value: array
      description: >
        Headers that the Application Load Balancer should add to proxied responses.
        
    - name: edgeSecurityPolicy
      value: string
      description: >
        [Output Only] The resource URL for the edge security policy associated with this backend bucket.
        
    - name: compressionMode
      value: string
      description: >
        Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
        
      valid_values: ['AUTOMATIC', 'DISABLED']
    - name: loadBalancingScheme
      value: string
      description: >
        The value can only be INTERNAL_MANAGED for cross-region internal layer 7 load balancer. If loadBalancingScheme is not specified, the backend bucket can be used by classic global external load balancers, or global application external load balancers, or both.
        
      valid_values: ['INTERNAL_MANAGED']
    - name: params
      value: object
      description: >
        Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload.
        
    - name: usedBy
      value: array
      description: >
        [Output Only] List of resources referencing that backend bucket.
        
    - name: requestId
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

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

```sql
UPDATE google.compute.backend_buckets
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__bucketName = '{{ bucketName }}',
data__enableCdn = {{ enableCdn }},
data__cdnPolicy = '{{ cdnPolicy }}',
data__customResponseHeaders = '{{ customResponseHeaders }}',
data__edgeSecurityPolicy = '{{ edgeSecurityPolicy }}',
data__compressionMode = '{{ compressionMode }}',
data__loadBalancingScheme = '{{ loadBalancingScheme }}',
data__params = '{{ params }}',
data__usedBy = '{{ usedBy }}'
WHERE 
project = '{{ project }}' --required
AND backendBucket = '{{ backendBucket }}' --required
AND requestId = '{{ requestId}}'
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
zone;
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

Updates the specified BackendBucket resource with the data included in the request.

```sql
REPLACE google.compute.backend_buckets
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__bucketName = '{{ bucketName }}',
data__enableCdn = {{ enableCdn }},
data__cdnPolicy = '{{ cdnPolicy }}',
data__customResponseHeaders = '{{ customResponseHeaders }}',
data__edgeSecurityPolicy = '{{ edgeSecurityPolicy }}',
data__compressionMode = '{{ compressionMode }}',
data__loadBalancingScheme = '{{ loadBalancingScheme }}',
data__params = '{{ params }}',
data__usedBy = '{{ usedBy }}'
WHERE 
project = '{{ project }}' --required
AND backendBucket = '{{ backendBucket }}' --required
AND requestId = '{{ requestId}}'
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
zone;
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

Deletes the specified BackendBucket resource.

```sql
DELETE FROM google.compute.backend_buckets
WHERE project = '{{ project }}' --required
AND backendBucket = '{{ backendBucket }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_signed_url_key"
    values={[
        { label: 'add_signed_url_key', value: 'add_signed_url_key' },
        { label: 'delete_signed_url_key', value: 'delete_signed_url_key' },
        { label: 'set_edge_security_policy', value: 'set_edge_security_policy' }
    ]}
>
<TabItem value="add_signed_url_key">

Adds a key for validating requests with signed URLs for this backend bucket.

```sql
EXEC google.compute.backend_buckets.add_signed_url_key 
@project='{{ project }}' --required, 
@backendBucket='{{ backendBucket }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"keyName": "{{ keyName }}", 
"keyValue": "{{ keyValue }}"
}';
```
</TabItem>
<TabItem value="delete_signed_url_key">

Deletes a key for validating requests with signed URLs for this backend bucket.

```sql
EXEC google.compute.backend_buckets.delete_signed_url_key 
@project='{{ project }}' --required, 
@backendBucket='{{ backendBucket }}' --required, 
@keyName='{{ keyName }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="set_edge_security_policy">

Sets the edge security policy for the specified backend bucket.

```sql
EXEC google.compute.backend_buckets.set_edge_security_policy 
@project='{{ project }}' --required, 
@backendBucket='{{ backendBucket }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"securityPolicy": "{{ securityPolicy }}"
}';
```
</TabItem>
</Tabs>
