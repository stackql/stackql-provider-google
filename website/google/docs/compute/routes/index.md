--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
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

Creates, updates, deletes, gets or lists a <code>routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.routes" /></td></tr>
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

Represents a Route resource. A route defines a path from VM instances in the VPC network to a specific destination. This destination can be inside or outside the VPC network. For more information, read the Routes overview.

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
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="asPaths" /></td>
    <td><code>array</code></td>
    <td>[Output Only] AS path.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this field when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destRange" /></td>
    <td><code>string</code></td>
    <td>The destination range of outgoing packets that this route applies to. Both IPv4 and IPv6 are supported. Must specify an IPv4 range (e.g. 192.0.2.0/24) or an IPv6 range in RFC 4291 format (e.g. 2001:db8::/32). IPv6 range will be displayed using RFC 5952 compressed format.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of this resource. Always compute#routes for Route resources. (default: compute#route)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Fully-qualified URL of the network that this route applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopGateway" /></td>
    <td><code>string</code></td>
    <td>The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL: projects/ project/global/gateways/default-internet-gateway</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopHub" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The full resource name of the Network Connectivity Center hub that will handle matching packets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopIlb" /></td>
    <td><code>string</code></td>
    <td>The URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets or the IP address of the forwarding Rule. For example, the following are all valid URLs: - https://www.googleapis.com/compute/v1/projects/project/regions/region /forwardingRules/forwardingRule - regions/region/forwardingRules/forwardingRule If an IP address is provided, must specify an IPv4 address in dot-decimal notation or an IPv6 address in RFC 4291 format. For example, the following are all valid IP addresses: - 10.128.0.56 - 2001:db8::2d9:51:0:0 - 2001:db8:0:0:2d9:51:0:0 IPv6 addresses will be displayed using RFC 5952 compressed format (e.g. 2001:db8::2d9:51:0:0). Should never be an IPv4-mapped IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopInstance" /></td>
    <td><code>string</code></td>
    <td>The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example: https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopInterRegionCost" /></td>
    <td><code>integer (uint32)</code></td>
    <td>[Output only] Internal fixed region-to-region cost that Google Cloud calculates based on factors such as network performance, distance, and available bandwidth between regions.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopIp" /></td>
    <td><code>string</code></td>
    <td>The network IP address of an instance that should handle matching packets. Both IPv6 address and IPv4 addresses are supported. Must specify an IPv4 address in dot-decimal notation (e.g. 192.0.2.99) or an IPv6 address in RFC 4291 format (e.g. 2001:db8::2d9:51:0:0 or 2001:db8:0:0:2d9:51:0:0). IPv6 addresses will be displayed using RFC 5952 compressed format (e.g. 2001:db8::2d9:51:0:0). Should never be an IPv4-mapped IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopMed" /></td>
    <td><code>integer (uint32)</code></td>
    <td>[Output Only] Multi-Exit Discriminator, a BGP route metric that indicates the desirability of a particular route in a network.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopNetwork" /></td>
    <td><code>string</code></td>
    <td>The URL of the local network if it should handle matching packets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopOrigin" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Indicates the origin of the route. Can be IGP (Interior Gateway Protocol), EGP (Exterior Gateway Protocol), or INCOMPLETE.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopPeering" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The network peering name that should handle matching packets, which should conform to RFC1035.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopVpnTunnel" /></td>
    <td><code>string</code></td>
    <td>The URL to a VpnTunnel that should handle matching packets.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: RouteParams)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (uint32)</code></td>
    <td>The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In cases where multiple routes have equal prefix length, the one with the lowest-numbered priority value wins. The default value is `1000`. The priority value must be from `0` to `65535`, inclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="routeStatus" /></td>
    <td><code>string</code></td>
    <td>[Output only] The status of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="routeType" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The type of this route, which can be one of the following values: - 'TRANSIT' for a transit route that this router learned from another Cloud Router and will readvertise to one of its BGP peers - 'SUBNET' for a route from a subnet of the VPC - 'BGP' for a route learned from a BGP peer of this router - 'STATIC' for a static route</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of instance tags to which this route applies.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>[Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of Route resources.

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
    <td>A list of Route resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#routeList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-route"><code>route</code></a></td>
    <td></td>
    <td>Returns the specified Route resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of Route resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Route resource in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-route"><code>route</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified Route resource.</td>
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
<tr id="parameter-route">
    <td><CopyableCode code="route" /></td>
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

Returns the specified Route resource.

```sql
SELECT
id,
name,
asPaths,
creationTimestamp,
description,
destRange,
kind,
network,
nextHopGateway,
nextHopHub,
nextHopIlb,
nextHopInstance,
nextHopInterRegionCost,
nextHopIp,
nextHopMed,
nextHopNetwork,
nextHopOrigin,
nextHopPeering,
nextHopVpnTunnel,
params,
priority,
routeStatus,
routeType,
selfLink,
tags,
warnings
FROM google.compute.routes
WHERE project = '{{ project }}' -- required
AND route = '{{ route }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of Route resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.routes
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

Creates a Route resource in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.routes (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__network,
data__tags,
data__destRange,
data__priority,
data__nextHopInstance,
data__nextHopIp,
data__nextHopNetwork,
data__nextHopGateway,
data__nextHopPeering,
data__nextHopIlb,
data__warnings,
data__nextHopVpnTunnel,
data__nextHopHub,
data__selfLink,
data__routeType,
data__asPaths,
data__routeStatus,
data__nextHopOrigin,
data__nextHopMed,
data__nextHopInterRegionCost,
data__params,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ network }}',
'{{ tags }}',
'{{ destRange }}',
{{ priority }},
'{{ nextHopInstance }}',
'{{ nextHopIp }}',
'{{ nextHopNetwork }}',
'{{ nextHopGateway }}',
'{{ nextHopPeering }}',
'{{ nextHopIlb }}',
'{{ warnings }}',
'{{ nextHopVpnTunnel }}',
'{{ nextHopHub }}',
'{{ selfLink }}',
'{{ routeType }}',
'{{ asPaths }}',
'{{ routeStatus }}',
'{{ nextHopOrigin }}',
{{ nextHopMed }},
{{ nextHopInterRegionCost }},
'{{ params }}',
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
- name: routes
  props:
    - name: project
      value: string
      description: Required parameter for the routes resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of this resource. Always compute#routes for Route resources.
        
      default: compute#route
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
        Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this field when you create the resource.
        
    - name: network
      value: string
      description: >
        Fully-qualified URL of the network that this route applies to.
        
    - name: tags
      value: array
      description: >
        A list of instance tags to which this route applies.
        
    - name: destRange
      value: string
      description: >
        The destination range of outgoing packets that this route applies to. Both IPv4 and IPv6 are supported. Must specify an IPv4 range (e.g. 192.0.2.0/24) or an IPv6 range in RFC 4291 format (e.g. 2001:db8::/32). IPv6 range will be displayed using RFC 5952 compressed format.
        
    - name: priority
      value: integer
      description: >
        The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In cases where multiple routes have equal prefix length, the one with the lowest-numbered priority value wins. The default value is `1000`. The priority value must be from `0` to `65535`, inclusive.
        
    - name: nextHopInstance
      value: string
      description: >
        The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example: https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/
        
    - name: nextHopIp
      value: string
      description: >
        The network IP address of an instance that should handle matching packets. Both IPv6 address and IPv4 addresses are supported. Must specify an IPv4 address in dot-decimal notation (e.g. 192.0.2.99) or an IPv6 address in RFC 4291 format (e.g. 2001:db8::2d9:51:0:0 or 2001:db8:0:0:2d9:51:0:0). IPv6 addresses will be displayed using RFC 5952 compressed format (e.g. 2001:db8::2d9:51:0:0). Should never be an IPv4-mapped IPv6 address.
        
    - name: nextHopNetwork
      value: string
      description: >
        The URL of the local network if it should handle matching packets.
        
    - name: nextHopGateway
      value: string
      description: >
        The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL: projects/ project/global/gateways/default-internet-gateway
        
    - name: nextHopPeering
      value: string
      description: >
        [Output Only] The network peering name that should handle matching packets, which should conform to RFC1035.
        
    - name: nextHopIlb
      value: string
      description: >
        The URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets or the IP address of the forwarding Rule. For example, the following are all valid URLs: - https://www.googleapis.com/compute/v1/projects/project/regions/region /forwardingRules/forwardingRule - regions/region/forwardingRules/forwardingRule If an IP address is provided, must specify an IPv4 address in dot-decimal notation or an IPv6 address in RFC 4291 format. For example, the following are all valid IP addresses: - 10.128.0.56 - 2001:db8::2d9:51:0:0 - 2001:db8:0:0:2d9:51:0:0 IPv6 addresses will be displayed using RFC 5952 compressed format (e.g. 2001:db8::2d9:51:0:0). Should never be an IPv4-mapped IPv6 address.
        
    - name: warnings
      value: array
      description: >
        [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
        
    - name: nextHopVpnTunnel
      value: string
      description: >
        The URL to a VpnTunnel that should handle matching packets.
        
    - name: nextHopHub
      value: string
      description: >
        [Output Only] The full resource name of the Network Connectivity Center hub that will handle matching packets.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined fully-qualified URL for this resource.
        
    - name: routeType
      value: string
      description: >
        [Output Only] The type of this route, which can be one of the following values: - 'TRANSIT' for a transit route that this router learned from another Cloud Router and will readvertise to one of its BGP peers - 'SUBNET' for a route from a subnet of the VPC - 'BGP' for a route learned from a BGP peer of this router - 'STATIC' for a static route
        
      valid_values: ['BGP', 'STATIC', 'SUBNET', 'TRANSIT']
    - name: asPaths
      value: array
      description: >
        [Output Only] AS path.
        
    - name: routeStatus
      value: string
      description: >
        [Output only] The status of the route.
        
      valid_values: ['ACTIVE', 'DROPPED', 'INACTIVE', 'PENDING']
    - name: nextHopOrigin
      value: string
      description: >
        [Output Only] Indicates the origin of the route. Can be IGP (Interior Gateway Protocol), EGP (Exterior Gateway Protocol), or INCOMPLETE.
        
      valid_values: ['EGP', 'IGP', 'INCOMPLETE']
    - name: nextHopMed
      value: integer
      description: >
        [Output Only] Multi-Exit Discriminator, a BGP route metric that indicates the desirability of a particular route in a network.
        
    - name: nextHopInterRegionCost
      value: integer
      description: >
        [Output only] Internal fixed region-to-region cost that Google Cloud calculates based on factors such as network performance, distance, and available bandwidth between regions.
        
    - name: params
      value: object
      description: >
        Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload.
        
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

Deletes the specified Route resource.

```sql
DELETE FROM google.compute.routes
WHERE project = '{{ project }}' --required
AND route = '{{ route }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
