--- 
title: health_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - health_checks
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

Creates, updates, deletes, gets or lists a <code>health_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>health_checks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.health_checks" /></td></tr>
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

Represents a health check resource. Google Compute Engine has two health check resources: * [Regional](https://cloud.google.com/compute/docs/reference/rest/v1/regionHealthChecks) * [Global](https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks) These health check resources can be used for load balancing and for autohealing VMs in a managed instance group (MIG). **Load balancing** Health check requirements vary depending on the type of load balancer. For details about the type of health check supported for each load balancer and corresponding backend type, see Health checks overview: Load balancer guide. **Autohealing in MIGs** The health checks that you use for autohealing VMs in a MIG can be either regional or global. For more information, see Set up an application health check and autohealing. For more information, see Health checks overview.

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
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. For example, a name that is 1-63 characters long, matches the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`, and otherwise complies with RFC1035. This regular expression describes a name where the first character is a lowercase letter, and all following characters are a dash, lowercase letter, or digit, except the last character, which isn't a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="checkIntervalSec" /></td>
    <td><code>integer (int32)</code></td>
    <td>How often (in seconds) to send a health check. The default value is 5 seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in 3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="grpcHealthCheck" /></td>
    <td><code>object</code></td>
    <td> (id: GRPCHealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="healthyThreshold" /></td>
    <td><code>integer (int32)</code></td>
    <td>A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.</td>
</tr>
<tr>
    <td><CopyableCode code="http2HealthCheck" /></td>
    <td><code>object</code></td>
    <td> (id: HTTP2HealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="httpHealthCheck" /></td>
    <td><code>object</code></td>
    <td> (id: HTTPHealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="httpsHealthCheck" /></td>
    <td><code>object</code></td>
    <td> (id: HTTPSHealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of the resource. (default: compute#healthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>Configure logging on this health check. (id: HealthCheckLogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Region where the health check resides. Not applicable to global health checks.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceRegions" /></td>
    <td><code>array</code></td>
    <td>The list of cloud regions from which health checks are performed. If any regions are specified, then exactly 3 regions should be specified. The region names must be valid names of Google Cloud regions. This can only be set for global health check. If this list is non-empty, then there are restrictions on what other health check fields are supported and what other resources can use this health check: - SSL, HTTP2, and GRPC protocols are not supported. - The TCP request field is not supported. - The proxyHeader field for HTTP, HTTPS, and TCP is not supported. - The checkIntervalSec field must be at least 30. - The health check cannot be used with BackendService nor with managed instance group auto-healing. </td>
</tr>
<tr>
    <td><CopyableCode code="sslHealthCheck" /></td>
    <td><code>object</code></td>
    <td> (id: SSLHealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="tcpHealthCheck" /></td>
    <td><code>object</code></td>
    <td> (id: TCPHealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutSec" /></td>
    <td><code>integer (int32)</code></td>
    <td>How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of the healthCheck, either TCP, SSL, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check fields must be specified, which must match type field.</td>
</tr>
<tr>
    <td><CopyableCode code="unhealthyThreshold" /></td>
    <td><code>integer (int32)</code></td>
    <td>A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of HealthCheck resources.

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
    <td>A list of HealthCheck resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#healthCheckList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-healthCheck"><code>healthCheck</code></a></td>
    <td></td>
    <td>Returns the specified HealthCheck resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of HealthCheck resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a HealthCheck resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-healthCheck"><code>healthCheck</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-healthCheck"><code>healthCheck</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a HealthCheck resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-healthCheck"><code>healthCheck</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified HealthCheck resource.</td>
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
<tr id="parameter-healthCheck">
    <td><CopyableCode code="healthCheck" /></td>
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

Returns the specified HealthCheck resource.

```sql
SELECT
id,
name,
checkIntervalSec,
creationTimestamp,
description,
grpcHealthCheck,
healthyThreshold,
http2HealthCheck,
httpHealthCheck,
httpsHealthCheck,
kind,
logConfig,
region,
selfLink,
sourceRegions,
sslHealthCheck,
tcpHealthCheck,
timeoutSec,
type,
unhealthyThreshold
FROM google.compute.health_checks
WHERE project = '{{ project }}' -- required
AND healthCheck = '{{ healthCheck }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of HealthCheck resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.health_checks
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

Creates a HealthCheck resource in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.health_checks (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__checkIntervalSec,
data__timeoutSec,
data__unhealthyThreshold,
data__healthyThreshold,
data__type,
data__tcpHealthCheck,
data__sslHealthCheck,
data__httpHealthCheck,
data__httpsHealthCheck,
data__http2HealthCheck,
data__grpcHealthCheck,
data__sourceRegions,
data__selfLink,
data__region,
data__logConfig,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
{{ checkIntervalSec }},
{{ timeoutSec }},
{{ unhealthyThreshold }},
{{ healthyThreshold }},
'{{ type }}',
'{{ tcpHealthCheck }}',
'{{ sslHealthCheck }}',
'{{ httpHealthCheck }}',
'{{ httpsHealthCheck }}',
'{{ http2HealthCheck }}',
'{{ grpcHealthCheck }}',
'{{ sourceRegions }}',
'{{ selfLink }}',
'{{ region }}',
'{{ logConfig }}',
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
- name: health_checks
  props:
    - name: project
      value: string
      description: Required parameter for the health_checks resource.
    - name: kind
      value: string
      description: >
        Type of the resource.
        
      default: compute#healthCheck
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in 3339 text format.
        
    - name: name
      value: string
      description: >
        Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. For example, a name that is 1-63 characters long, matches the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`, and otherwise complies with RFC1035. This regular expression describes a name where the first character is a lowercase letter, and all following characters are a dash, lowercase letter, or digit, except the last character, which isn't a dash.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: checkIntervalSec
      value: integer
      description: >
        How often (in seconds) to send a health check. The default value is 5 seconds.
        
    - name: timeoutSec
      value: integer
      description: >
        How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
        
    - name: unhealthyThreshold
      value: integer
      description: >
        A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
        
    - name: healthyThreshold
      value: integer
      description: >
        A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
        
    - name: type
      value: string
      description: >
        Specifies the type of the healthCheck, either TCP, SSL, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check fields must be specified, which must match type field.
        
      valid_values: ['GRPC', 'HTTP', 'HTTP2', 'HTTPS', 'INVALID', 'SSL', 'TCP']
    - name: tcpHealthCheck
      value: object
    - name: sslHealthCheck
      value: object
    - name: httpHealthCheck
      value: object
    - name: httpsHealthCheck
      value: object
    - name: http2HealthCheck
      value: object
    - name: grpcHealthCheck
      value: object
    - name: sourceRegions
      value: array
      description: >
        The list of cloud regions from which health checks are performed. If any regions are specified, then exactly 3 regions should be specified. The region names must be valid names of Google Cloud regions. This can only be set for global health check. If this list is non-empty, then there are restrictions on what other health check fields are supported and what other resources can use this health check: - SSL, HTTP2, and GRPC protocols are not supported. - The TCP request field is not supported. - The proxyHeader field for HTTP, HTTPS, and TCP is not supported. - The checkIntervalSec field must be at least 30. - The health check cannot be used with BackendService nor with managed instance group auto-healing. 
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: region
      value: string
      description: >
        [Output Only] Region where the health check resides. Not applicable to global health checks.
        
    - name: logConfig
      value: object
      description: >
        Configure logging on this health check.
        
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

Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

```sql
UPDATE google.compute.health_checks
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__checkIntervalSec = {{ checkIntervalSec }},
data__timeoutSec = {{ timeoutSec }},
data__unhealthyThreshold = {{ unhealthyThreshold }},
data__healthyThreshold = {{ healthyThreshold }},
data__type = '{{ type }}',
data__tcpHealthCheck = '{{ tcpHealthCheck }}',
data__sslHealthCheck = '{{ sslHealthCheck }}',
data__httpHealthCheck = '{{ httpHealthCheck }}',
data__httpsHealthCheck = '{{ httpsHealthCheck }}',
data__http2HealthCheck = '{{ http2HealthCheck }}',
data__grpcHealthCheck = '{{ grpcHealthCheck }}',
data__sourceRegions = '{{ sourceRegions }}',
data__selfLink = '{{ selfLink }}',
data__region = '{{ region }}',
data__logConfig = '{{ logConfig }}'
WHERE 
project = '{{ project }}' --required
AND healthCheck = '{{ healthCheck }}' --required
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

Updates a HealthCheck resource in the specified project using the data included in the request.

```sql
REPLACE google.compute.health_checks
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__checkIntervalSec = {{ checkIntervalSec }},
data__timeoutSec = {{ timeoutSec }},
data__unhealthyThreshold = {{ unhealthyThreshold }},
data__healthyThreshold = {{ healthyThreshold }},
data__type = '{{ type }}',
data__tcpHealthCheck = '{{ tcpHealthCheck }}',
data__sslHealthCheck = '{{ sslHealthCheck }}',
data__httpHealthCheck = '{{ httpHealthCheck }}',
data__httpsHealthCheck = '{{ httpsHealthCheck }}',
data__http2HealthCheck = '{{ http2HealthCheck }}',
data__grpcHealthCheck = '{{ grpcHealthCheck }}',
data__sourceRegions = '{{ sourceRegions }}',
data__selfLink = '{{ selfLink }}',
data__region = '{{ region }}',
data__logConfig = '{{ logConfig }}'
WHERE 
project = '{{ project }}' --required
AND healthCheck = '{{ healthCheck }}' --required
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

Deletes the specified HealthCheck resource.

```sql
DELETE FROM google.compute.health_checks
WHERE project = '{{ project }}' --required
AND healthCheck = '{{ healthCheck }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
