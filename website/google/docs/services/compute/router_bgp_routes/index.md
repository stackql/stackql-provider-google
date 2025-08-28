--- 
title: router_bgp_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - router_bgp_routes
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

Creates, updates, deletes, gets or lists a <code>router_bgp_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>router_bgp_routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.router_bgp_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bgp_routes"
    values={[
        { label: 'list_bgp_routes', value: 'list_bgp_routes' }
    ]}
>
<TabItem value="list_bgp_routes">

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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#routersListBgpRoutes for lists of bgp routes. (default: compute#routersListBgpRoutes)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of bgp routes.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachables" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Unreachable resources.</td>
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
    <td><a href="#list_bgp_routes"><CopyableCode code="list_bgp_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-addressFamily"><code>addressFamily</code></a>, <a href="#parameter-destinationPrefix"><code>destinationPrefix</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-peer"><code>peer</code></a>, <a href="#parameter-policyApplied"><code>policyApplied</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-routeType"><code>routeType</code></a></td>
    <td>Retrieves a list of router bgp routes available to the specified project.</td>
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
<tr id="parameter-router">
    <td><CopyableCode code="router" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-addressFamily">
    <td><CopyableCode code="addressFamily" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-destinationPrefix">
    <td><CopyableCode code="destinationPrefix" /></td>
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
<tr id="parameter-peer">
    <td><CopyableCode code="peer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policyApplied">
    <td><CopyableCode code="policyApplied" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-routeType">
    <td><CopyableCode code="routeType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_bgp_routes"
    values={[
        { label: 'list_bgp_routes', value: 'list_bgp_routes' }
    ]}
>
<TabItem value="list_bgp_routes">

Retrieves a list of router bgp routes available to the specified project.

```sql
SELECT
id,
etag,
kind,
nextPageToken,
result,
selfLink,
unreachables,
warning
FROM google.compute.router_bgp_routes
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND router = '{{ router }}' -- required
AND addressFamily = '{{ addressFamily }}'
AND destinationPrefix = '{{ destinationPrefix }}'
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND peer = '{{ peer }}'
AND policyApplied = '{{ policyApplied }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND routeType = '{{ routeType }}';
```
</TabItem>
</Tabs>
