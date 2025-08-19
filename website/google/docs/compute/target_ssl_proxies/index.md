--- 
title: target_ssl_proxies
hide_title: false
hide_table_of_contents: false
keywords:
  - target_ssl_proxies
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

Creates, updates, deletes, gets or lists a <code>target_ssl_proxies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_ssl_proxies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.target_ssl_proxies" /></td></tr>
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

Represents a Target SSL Proxy resource. A target SSL proxy is a component of a Proxy Network Load Balancer. The forwarding rule references the target SSL proxy, and the target proxy then references a backend service. For more information, read Proxy Network Load Balancer overview.

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
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="certificateMap" /></td>
    <td><code>string</code></td>
    <td>URL of a certificate map that identifies a certificate map associated with the given target proxy. This field can only be set for global target proxies. If set, sslCertificates will be ignored. Accepted format is //certificatemanager.googleapis.com/projects/&#123;project &#125;/locations/&#123;location&#125;/certificateMaps/&#123;resourceName&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#targetSslProxy for target SSL proxies. (default: compute#targetSslProxy)</td>
</tr>
<tr>
    <td><CopyableCode code="proxyHeader" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>URL to the BackendService resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sslCertificates" /></td>
    <td><code>array</code></td>
    <td>URLs to SslCertificate resources that are used to authenticate connections to Backends. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.</td>
</tr>
<tr>
    <td><CopyableCode code="sslPolicy" /></td>
    <td><code>string</code></td>
    <td>URL of SslPolicy resource that will be associated with the TargetSslProxy resource. If not set, the TargetSslProxy resource will not have any SSL policy configured.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of TargetSslProxy resources.

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
    <td>A list of TargetSslProxy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#targetSslProxyList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td></td>
    <td>Returns the specified TargetSslProxy resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of TargetSslProxy resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a TargetSslProxy resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified TargetSslProxy resource.</td>
</tr>
<tr>
    <td><a href="#set_backend_service"><CopyableCode code="set_backend_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes the BackendService for TargetSslProxy.</td>
</tr>
<tr>
    <td><a href="#set_ssl_certificates"><CopyableCode code="set_ssl_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes SslCertificates for TargetSslProxy.</td>
</tr>
<tr>
    <td><a href="#set_certificate_map"><CopyableCode code="set_certificate_map" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes the Certificate Map for TargetSslProxy.</td>
</tr>
<tr>
    <td><a href="#set_proxy_header"><CopyableCode code="set_proxy_header" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes the ProxyHeaderType for TargetSslProxy.</td>
</tr>
<tr>
    <td><a href="#set_ssl_policy"><CopyableCode code="set_ssl_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetSslProxy"><code>targetSslProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the load balancer. They do not affect the connection between the load balancer and the backends.</td>
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
<tr id="parameter-targetSslProxy">
    <td><CopyableCode code="targetSslProxy" /></td>
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

Returns the specified TargetSslProxy resource.

```sql
SELECT
id,
name,
certificateMap,
creationTimestamp,
description,
kind,
proxyHeader,
selfLink,
service,
sslCertificates,
sslPolicy
FROM google.compute.target_ssl_proxies
WHERE project = '{{ project }}' -- required
AND targetSslProxy = '{{ targetSslProxy }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of TargetSslProxy resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.target_ssl_proxies
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

Creates a TargetSslProxy resource in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.target_ssl_proxies (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__selfLink,
data__service,
data__sslCertificates,
data__certificateMap,
data__proxyHeader,
data__sslPolicy,
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
'{{ service }}',
'{{ sslCertificates }}',
'{{ certificateMap }}',
'{{ proxyHeader }}',
'{{ sslPolicy }}',
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
- name: target_ssl_proxies
  props:
    - name: project
      value: string
      description: Required parameter for the target_ssl_proxies resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#targetSslProxy for target SSL proxies.
        
      default: compute#targetSslProxy
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
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
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: service
      value: string
      description: >
        URL to the BackendService resource.
        
    - name: sslCertificates
      value: array
      description: >
        URLs to SslCertificate resources that are used to authenticate connections to Backends. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
        
    - name: certificateMap
      value: string
      description: >
        URL of a certificate map that identifies a certificate map associated with the given target proxy. This field can only be set for global target proxies. If set, sslCertificates will be ignored. Accepted format is //certificatemanager.googleapis.com/projects/{project }/locations/{location}/certificateMaps/{resourceName}.
        
    - name: proxyHeader
      value: string
      description: >
        Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        
      valid_values: ['NONE', 'PROXY_V1']
    - name: sslPolicy
      value: string
      description: >
        URL of SslPolicy resource that will be associated with the TargetSslProxy resource. If not set, the TargetSslProxy resource will not have any SSL policy configured.
        
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

Deletes the specified TargetSslProxy resource.

```sql
DELETE FROM google.compute.target_ssl_proxies
WHERE project = '{{ project }}' --required
AND targetSslProxy = '{{ targetSslProxy }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_backend_service"
    values={[
        { label: 'set_backend_service', value: 'set_backend_service' },
        { label: 'set_ssl_certificates', value: 'set_ssl_certificates' },
        { label: 'set_certificate_map', value: 'set_certificate_map' },
        { label: 'set_proxy_header', value: 'set_proxy_header' },
        { label: 'set_ssl_policy', value: 'set_ssl_policy' }
    ]}
>
<TabItem value="set_backend_service">

Changes the BackendService for TargetSslProxy.

```sql
EXEC google.compute.target_ssl_proxies.set_backend_service 
@project='{{ project }}' --required, 
@targetSslProxy='{{ targetSslProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"service": "{{ service }}"
}';
```
</TabItem>
<TabItem value="set_ssl_certificates">

Changes SslCertificates for TargetSslProxy.

```sql
EXEC google.compute.target_ssl_proxies.set_ssl_certificates 
@project='{{ project }}' --required, 
@targetSslProxy='{{ targetSslProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"sslCertificates": "{{ sslCertificates }}"
}';
```
</TabItem>
<TabItem value="set_certificate_map">

Changes the Certificate Map for TargetSslProxy.

```sql
EXEC google.compute.target_ssl_proxies.set_certificate_map 
@project='{{ project }}' --required, 
@targetSslProxy='{{ targetSslProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"certificateMap": "{{ certificateMap }}"
}';
```
</TabItem>
<TabItem value="set_proxy_header">

Changes the ProxyHeaderType for TargetSslProxy.

```sql
EXEC google.compute.target_ssl_proxies.set_proxy_header 
@project='{{ project }}' --required, 
@targetSslProxy='{{ targetSslProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"proxyHeader": "{{ proxyHeader }}"
}';
```
</TabItem>
<TabItem value="set_ssl_policy">

Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the load balancer. They do not affect the connection between the load balancer and the backends.

```sql
EXEC google.compute.target_ssl_proxies.set_ssl_policy 
@project='{{ project }}' --required, 
@targetSslProxy='{{ targetSslProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"sslPolicy": "{{ sslPolicy }}"
}';
```
</TabItem>
</Tabs>
