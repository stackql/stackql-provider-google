--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
  - networkconnectivity
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.routes" /></td></tr>
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

A route defines a path from VM instances within a spoke to a specific destination resource. Only VPC spokes have routes.

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
    <td>Immutable. The name of the route. Route names must be unique. Route names use the following form: `projects/&#123;project_number&#125;/locations/global/hubs/&#123;hub&#125;/routeTables/&#123;route_table_id&#125;/routes/&#123;route_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the route was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The destination IP address range.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The origin location of the route. Uses the following form: "projects/&#123;project&#125;/locations/&#123;location&#125;" Example: projects/1234/locations/us-central1</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopInterconnectAttachment" /></td>
    <td><code>object</code></td>
    <td>Immutable. The next-hop VLAN attachment for packets on this route. (id: NextHopInterconnectAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopRouterApplianceInstance" /></td>
    <td><code>object</code></td>
    <td>Immutable. The next-hop Router appliance instance for packets on this route. (id: NextHopRouterApplianceInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopSpoke" /></td>
    <td><code>object</code></td>
    <td>Immutable. The next-hop spoke for packets on this route. (id: NextHopSpoke)</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopVpcNetwork" /></td>
    <td><code>object</code></td>
    <td>Immutable. The destination VPC network for packets on this route. (id: NextHopVpcNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopVpnTunnel" /></td>
    <td><code>object</code></td>
    <td>Immutable. The next-hop VPN tunnel for packets on this route. (id: NextHopVPNTunnel)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The priority of this route. Priority is used to break ties in cases where a destination matches more than one route. In these cases the route with the lowest-numbered priority value wins.</td>
</tr>
<tr>
    <td><CopyableCode code="spoke" /></td>
    <td><code>string</code></td>
    <td>Immutable. The spoke that this route leads to. Example: projects/12345/locations/global/spokes/SPOKE</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The route's type. Its type is determined by the properties of its IP address range.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the route. This value is unique across all Network Connectivity Center route resources. If a route is deleted and another with the same name is created, the new route is assigned a different `uid`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the route was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for HubService.ListRoutes method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>array</code></td>
    <td>The requested routes.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>RouteTables that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a>, <a href="#parameter-routeTablesId"><code>routeTablesId</code></a>, <a href="#parameter-routesId"><code>routesId</code></a></td>
    <td></td>
    <td>Gets details about the specified route.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a>, <a href="#parameter-routeTablesId"><code>routeTablesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists routes in a given route table.</td>
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
<tr id="parameter-hubsId">
    <td><CopyableCode code="hubsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-routeTablesId">
    <td><CopyableCode code="routeTablesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-routesId">
    <td><CopyableCode code="routesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets details about the specified route.

```sql
SELECT
name,
createTime,
description,
ipCidrRange,
labels,
location,
nextHopInterconnectAttachment,
nextHopRouterApplianceInstance,
nextHopSpoke,
nextHopVpcNetwork,
nextHopVpnTunnel,
priority,
spoke,
state,
type,
uid,
updateTime
FROM google.networkconnectivity.routes
WHERE projectsId = '{{ projectsId }}' -- required
AND hubsId = '{{ hubsId }}' -- required
AND routeTablesId = '{{ routeTablesId }}' -- required
AND routesId = '{{ routesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists routes in a given route table.

```sql
SELECT
nextPageToken,
routes,
unreachable
FROM google.networkconnectivity.routes
WHERE projectsId = '{{ projectsId }}' -- required
AND hubsId = '{{ hubsId }}' -- required
AND routeTablesId = '{{ routeTablesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
