--- 
title: target_https_proxies
hide_title: false
hide_table_of_contents: false
keywords:
  - target_https_proxies
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

Creates, updates, deletes, gets or lists a <code>target_https_proxies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_https_proxies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.target_https_proxies" /></td></tr>
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. A URL referring to a networksecurity.AuthorizationPolicy resource that describes how the proxy should authorize inbound traffic. If left blank, access will not be restricted by an authorization policy. Refer to the AuthorizationPolicy resource for additional details. authorizationPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED. Note: This field currently has no impact.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateMap" /></td>
    <td><code>string</code></td>
    <td>URL of a certificate map that identifies a certificate map associated with the given target proxy. This field can only be set for Global external Application Load Balancer or Classic Application Load Balancer. For other products use Certificate Manager Certificates instead. If set, sslCertificates will be ignored. Accepted format is //certificatemanager.googleapis.com/projects/&#123;project &#125;/locations/&#123;location&#125;/certificateMaps/&#123;resourceName&#125;.</td>
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
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a TargetHttpsProxy. An up-to-date fingerprint must be provided in order to patch the TargetHttpsProxy; otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the TargetHttpsProxy.</td>
</tr>
<tr>
    <td><CopyableCode code="httpKeepAliveTimeoutSec" /></td>
    <td><code>integer (int32)</code></td>
    <td>Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). If an HTTP keep-alive is not specified, a default value (610 seconds) will be used. For global external Application Load Balancers, the minimum allowed value is 5 seconds and the maximum allowed value is 1200 seconds. For classic Application Load Balancers, this option is not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies. (default: compute#targetHttpsProxy)</td>
</tr>
<tr>
    <td><CopyableCode code="proxyBind" /></td>
    <td><code>boolean</code></td>
    <td>This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. When this field is set to true, Envoy proxies set up inbound traffic interception and bind to the IP address and port specified in the forwarding rule. This is generally useful when using Traffic Director to configure Envoy as a gateway or middle proxy (in other words, not a sidecar proxy). The Envoy proxy listens for inbound requests and handles requests when it receives them. The default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="quicOverride" /></td>
    <td><code>string</code></td>
    <td>Specifies the QUIC override policy for this TargetHttpsProxy resource. This setting determines whether the load balancer attempts to negotiate QUIC with clients. You can specify NONE, ENABLE, or DISABLE. - When quic-override is set to NONE, Google manages whether QUIC is used. - When quic-override is set to ENABLE, the load balancer uses QUIC when possible. - When quic-override is set to DISABLE, the load balancer doesn't use QUIC. - If the quic-override flag is not specified, NONE is implied. </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the regional TargetHttpsProxy resides. This field is not applicable to global TargetHttpsProxies.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serverTlsPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED or INTERNAL_MANAGED. It also applies to a regional TargetHttpsProxy attached to regional forwardingRules with the loadBalancingScheme set to EXTERNAL_MANAGED or INTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, INTERNAL_MANAGED, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="sslCertificates" /></td>
    <td><code>array</code></td>
    <td>URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. At least one SSL certificate must be specified. SslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED. The URLs should refer to a SSL Certificate resource or Certificate Manager Certificate resource. Mixing Classic Certificates and Certificate Manager Certificates is not allowed. Certificate Manager Certificates must include the certificatemanager API namespace. Using Certificate Manager Certificates in this field is not supported by Global external Application Load Balancer or Classic Application Load Balancer, use certificate_map instead. Currently, you may specify up to 15 Classic SSL Certificates or up to 100 Certificate Manager Certificates. Certificate Manager Certificates accepted formats are: - //certificatemanager.googleapis.com/projects/&#123;project&#125;/locations/&#123; location&#125;/certificates/&#123;resourceName&#125;. - https://certificatemanager.googleapis.com/v1alpha1/projects/&#123;project &#125;/locations/&#123;location&#125;/certificates/&#123;resourceName&#125;. </td>
</tr>
<tr>
    <td><CopyableCode code="sslPolicy" /></td>
    <td><code>string</code></td>
    <td>URL of SslPolicy resource that will be associated with the TargetHttpsProxy resource. If not set, the TargetHttpsProxy resource has no SSL policy configured.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsEarlyData" /></td>
    <td><code>string</code></td>
    <td> Specifies whether TLS 1.3 0-RTT Data ("Early Data") should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to "zero". This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). This can improve application performance, especially on networks where interruptions may be common, such as on mobile. Requests with Early Data will have the "Early-Data" HTTP header set on the request, with a value of "1", to allow the backend to determine whether Early Data was included. Note: TLS Early Data may allow requests to be replayed, as the data is sent to the backend before the handshake has fully completed. Applications that allow idempotent HTTP methods to make non-idempotent changes, such as a GET request updating a database, should not accept Early Data on those requests, and reject requests with the "Early-Data: 1" HTTP header by returning a HTTP 425 (Too Early) status code, in order to remain RFC compliant. The default value is DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="urlMap" /></td>
    <td><code>string</code></td>
    <td>A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map: - https://www.googleapis.compute/v1/projects/project/global/urlMaps/ url-map - projects/project/global/urlMaps/url-map - global/urlMaps/url-map </td>
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
    <td>A list of TargetHttpsProxy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. Always compute#targetHttpsProxyList for lists of target HTTPS proxies. (default: compute#targetHttpsProxyList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td></td>
    <td>Returns the specified TargetHttpsProxy resource in the specified region.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified TargetHttpsProxy resource.</td>
</tr>
<tr>
    <td><a href="#set_url_map"><CopyableCode code="set_url_map" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes the URL map for TargetHttpsProxy.</td>
</tr>
<tr>
    <td><a href="#set_ssl_certificates"><CopyableCode code="set_ssl_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Replaces SslCertificates for TargetHttpsProxy.</td>
</tr>
<tr>
    <td><a href="#set_certificate_map"><CopyableCode code="set_certificate_map" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Changes the Certificate Map for TargetHttpsProxy.</td>
</tr>
<tr>
    <td><a href="#set_ssl_policy"><CopyableCode code="set_ssl_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.</td>
</tr>
<tr>
    <td><a href="#set_quic_override"><CopyableCode code="set_quic_override" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-targetHttpsProxy"><code>targetHttpsProxy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the QUIC override policy for TargetHttpsProxy.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-targetHttpsProxy">
    <td><CopyableCode code="targetHttpsProxy" /></td>
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

Returns the specified TargetHttpsProxy resource in the specified region.

```sql
SELECT
id,
name,
authorizationPolicy,
certificateMap,
creationTimestamp,
description,
fingerprint,
httpKeepAliveTimeoutSec,
kind,
proxyBind,
quicOverride,
region,
selfLink,
serverTlsPolicy,
sslCertificates,
sslPolicy,
tlsEarlyData,
urlMap
FROM google.compute.target_https_proxies
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND targetHttpsProxy = '{{ targetHttpsProxy }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.target_https_proxies
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
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

Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.

```sql
INSERT INTO google.compute.target_https_proxies (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__selfLink,
data__urlMap,
data__sslCertificates,
data__certificateMap,
data__quicOverride,
data__sslPolicy,
data__region,
data__proxyBind,
data__serverTlsPolicy,
data__authorizationPolicy,
data__fingerprint,
data__httpKeepAliveTimeoutSec,
data__tlsEarlyData,
project,
region,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ selfLink }}',
'{{ urlMap }}',
'{{ sslCertificates }}',
'{{ certificateMap }}',
'{{ quicOverride }}',
'{{ sslPolicy }}',
'{{ region }}',
{{ proxyBind }},
'{{ serverTlsPolicy }}',
'{{ authorizationPolicy }}',
'{{ fingerprint }}',
{{ httpKeepAliveTimeoutSec }},
'{{ tlsEarlyData }}',
'{{ project }}',
'{{ region }}',
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
- name: target_https_proxies
  props:
    - name: project
      value: string
      description: Required parameter for the target_https_proxies resource.
    - name: region
      value: string
      description: Required parameter for the target_https_proxies resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
        
      default: compute#targetHttpsProxy
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
        
    - name: urlMap
      value: string
      description: >
        A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map: - https://www.googleapis.compute/v1/projects/project/global/urlMaps/ url-map - projects/project/global/urlMaps/url-map - global/urlMaps/url-map 
        
    - name: sslCertificates
      value: array
      description: >
        URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. At least one SSL certificate must be specified. SslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED. The URLs should refer to a SSL Certificate resource or Certificate Manager Certificate resource. Mixing Classic Certificates and Certificate Manager Certificates is not allowed. Certificate Manager Certificates must include the certificatemanager API namespace. Using Certificate Manager Certificates in this field is not supported by Global external Application Load Balancer or Classic Application Load Balancer, use certificate_map instead. Currently, you may specify up to 15 Classic SSL Certificates or up to 100 Certificate Manager Certificates. Certificate Manager Certificates accepted formats are: - //certificatemanager.googleapis.com/projects/{project}/locations/{ location}/certificates/{resourceName}. - https://certificatemanager.googleapis.com/v1alpha1/projects/{project }/locations/{location}/certificates/{resourceName}. 
        
    - name: certificateMap
      value: string
      description: >
        URL of a certificate map that identifies a certificate map associated with the given target proxy. This field can only be set for Global external Application Load Balancer or Classic Application Load Balancer. For other products use Certificate Manager Certificates instead. If set, sslCertificates will be ignored. Accepted format is //certificatemanager.googleapis.com/projects/{project }/locations/{location}/certificateMaps/{resourceName}.
        
    - name: quicOverride
      value: string
      description: >
        Specifies the QUIC override policy for this TargetHttpsProxy resource. This setting determines whether the load balancer attempts to negotiate QUIC with clients. You can specify NONE, ENABLE, or DISABLE. - When quic-override is set to NONE, Google manages whether QUIC is used. - When quic-override is set to ENABLE, the load balancer uses QUIC when possible. - When quic-override is set to DISABLE, the load balancer doesn't use QUIC. - If the quic-override flag is not specified, NONE is implied. 
        
      valid_values: ['DISABLE', 'ENABLE', 'NONE']
    - name: sslPolicy
      value: string
      description: >
        URL of SslPolicy resource that will be associated with the TargetHttpsProxy resource. If not set, the TargetHttpsProxy resource has no SSL policy configured.
        
    - name: region
      value: string
      description: >
        [Output Only] URL of the region where the regional TargetHttpsProxy resides. This field is not applicable to global TargetHttpsProxies.
        
    - name: proxyBind
      value: boolean
      description: >
        This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. When this field is set to true, Envoy proxies set up inbound traffic interception and bind to the IP address and port specified in the forwarding rule. This is generally useful when using Traffic Director to configure Envoy as a gateway or middle proxy (in other words, not a sidecar proxy). The Envoy proxy listens for inbound requests and handles requests when it receives them. The default is false.
        
    - name: serverTlsPolicy
      value: string
      description: >
        Optional. A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED or INTERNAL_MANAGED. It also applies to a regional TargetHttpsProxy attached to regional forwardingRules with the loadBalancingScheme set to EXTERNAL_MANAGED or INTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, INTERNAL_MANAGED, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.
        
    - name: authorizationPolicy
      value: string
      description: >
        Optional. A URL referring to a networksecurity.AuthorizationPolicy resource that describes how the proxy should authorize inbound traffic. If left blank, access will not be restricted by an authorization policy. Refer to the AuthorizationPolicy resource for additional details. authorizationPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED. Note: This field currently has no impact.
        
    - name: fingerprint
      value: string
      description: >
        Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a TargetHttpsProxy. An up-to-date fingerprint must be provided in order to patch the TargetHttpsProxy; otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the TargetHttpsProxy.
        
    - name: httpKeepAliveTimeoutSec
      value: integer
      description: >
        Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). If an HTTP keep-alive is not specified, a default value (610 seconds) will be used. For global external Application Load Balancers, the minimum allowed value is 5 seconds and the maximum allowed value is 1200 seconds. For classic Application Load Balancers, this option is not supported.
        
    - name: tlsEarlyData
      value: string
      description: >
         Specifies whether TLS 1.3 0-RTT Data ("Early Data") should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to "zero". This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). This can improve application performance, especially on networks where interruptions may be common, such as on mobile. Requests with Early Data will have the "Early-Data" HTTP header set on the request, with a value of "1", to allow the backend to determine whether Early Data was included. Note: TLS Early Data may allow requests to be replayed, as the data is sent to the backend before the handshake has fully completed. Applications that allow idempotent HTTP methods to make non-idempotent changes, such as a GET request updating a database, should not accept Early Data on those requests, and reject requests with the "Early-Data: 1" HTTP header by returning a HTTP 425 (Too Early) status code, in order to remain RFC compliant. The default value is DISABLED.
        
      valid_values: ['DISABLED', 'PERMISSIVE', 'STRICT', 'UNRESTRICTED']
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

Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

```sql
UPDATE google.compute.target_https_proxies
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__selfLink = '{{ selfLink }}',
data__urlMap = '{{ urlMap }}',
data__sslCertificates = '{{ sslCertificates }}',
data__certificateMap = '{{ certificateMap }}',
data__quicOverride = '{{ quicOverride }}',
data__sslPolicy = '{{ sslPolicy }}',
data__region = '{{ region }}',
data__proxyBind = {{ proxyBind }},
data__serverTlsPolicy = '{{ serverTlsPolicy }}',
data__authorizationPolicy = '{{ authorizationPolicy }}',
data__fingerprint = '{{ fingerprint }}',
data__httpKeepAliveTimeoutSec = {{ httpKeepAliveTimeoutSec }},
data__tlsEarlyData = '{{ tlsEarlyData }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND targetHttpsProxy = '{{ targetHttpsProxy }}' --required
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

Deletes the specified TargetHttpsProxy resource.

```sql
DELETE FROM google.compute.target_https_proxies
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND targetHttpsProxy = '{{ targetHttpsProxy }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_url_map"
    values={[
        { label: 'set_url_map', value: 'set_url_map' },
        { label: 'set_ssl_certificates', value: 'set_ssl_certificates' },
        { label: 'set_certificate_map', value: 'set_certificate_map' },
        { label: 'set_ssl_policy', value: 'set_ssl_policy' },
        { label: 'set_quic_override', value: 'set_quic_override' }
    ]}
>
<TabItem value="set_url_map">

Changes the URL map for TargetHttpsProxy.

```sql
EXEC google.compute.target_https_proxies.set_url_map 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@targetHttpsProxy='{{ targetHttpsProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"urlMap": "{{ urlMap }}"
}';
```
</TabItem>
<TabItem value="set_ssl_certificates">

Replaces SslCertificates for TargetHttpsProxy.

```sql
EXEC google.compute.target_https_proxies.set_ssl_certificates 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@targetHttpsProxy='{{ targetHttpsProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"sslCertificates": "{{ sslCertificates }}"
}';
```
</TabItem>
<TabItem value="set_certificate_map">

Changes the Certificate Map for TargetHttpsProxy.

```sql
EXEC google.compute.target_https_proxies.set_certificate_map 
@project='{{ project }}' --required, 
@targetHttpsProxy='{{ targetHttpsProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"certificateMap": "{{ certificateMap }}"
}';
```
</TabItem>
<TabItem value="set_ssl_policy">

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

```sql
EXEC google.compute.target_https_proxies.set_ssl_policy 
@project='{{ project }}' --required, 
@targetHttpsProxy='{{ targetHttpsProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"sslPolicy": "{{ sslPolicy }}"
}';
```
</TabItem>
<TabItem value="set_quic_override">

Sets the QUIC override policy for TargetHttpsProxy.

```sql
EXEC google.compute.target_https_proxies.set_quic_override 
@project='{{ project }}' --required, 
@targetHttpsProxy='{{ targetHttpsProxy }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"quicOverride": "{{ quicOverride }}"
}';
```
</TabItem>
</Tabs>
