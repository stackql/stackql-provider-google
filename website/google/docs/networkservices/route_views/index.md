--- 
title: route_views
hide_title: false
hide_table_of_contents: false
keywords:
  - route_views
  - networkservices
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

Creates, updates, deletes, gets or lists a <code>route_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>route_views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.route_views" /></td></tr>
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

MeshRouteView defines view-only resource for Routes to a Mesh

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
    <td>Output only. Identifier. Full path name of the MeshRouteView resource. Format: projects/&#123;project_number&#125;/locations/&#123;location&#125;/meshes/&#123;mesh&#125;/routeViews/&#123;route_view&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="routeId" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource id for the route.</td>
</tr>
<tr>
    <td><CopyableCode code="routeLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. Location where the route exists.</td>
</tr>
<tr>
    <td><CopyableCode code="routeProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Project number where the route exists.</td>
</tr>
<tr>
    <td><CopyableCode code="routeType" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the route: HttpRoute,GrpcRoute,TcpRoute, or TlsRoute</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response returned by the ListMeshRouteViews method.

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
    <td><CopyableCode code="meshRouteViews" /></td>
    <td><code>array</code></td>
    <td>List of MeshRouteView resources.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-meshesId"><code>meshesId</code></a>, <a href="#parameter-routeViewsId"><code>routeViewsId</code></a></td>
    <td></td>
    <td>Get a single RouteView of a Mesh.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-meshesId"><code>meshesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists RouteViews</td>
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
<tr id="parameter-meshesId">
    <td><CopyableCode code="meshesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-routeViewsId">
    <td><CopyableCode code="routeViewsId" /></td>
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

Get a single RouteView of a Mesh.

```sql
SELECT
name,
routeId,
routeLocation,
routeProjectNumber,
routeType
FROM google.networkservices.route_views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND meshesId = '{{ meshesId }}' -- required
AND routeViewsId = '{{ routeViewsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists RouteViews

```sql
SELECT
meshRouteViews,
nextPageToken,
unreachable
FROM google.networkservices.route_views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND meshesId = '{{ meshesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
