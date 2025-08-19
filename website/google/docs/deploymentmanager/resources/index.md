--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.deploymentmanager.resources" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the resource as it appears in the YAML config.</td>
</tr>
<tr>
    <td><CopyableCode code="accessControl" /></td>
    <td><code>object</code></td>
    <td>The Access Control Policy set on this resource. (id: ResourceAccessControl)</td>
</tr>
<tr>
    <td><CopyableCode code="finalProperties" /></td>
    <td><code>string</code></td>
    <td>Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.</td>
</tr>
<tr>
    <td><CopyableCode code="insertTime" /></td>
    <td><code>string</code></td>
    <td>Output only. Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest" /></td>
    <td><code>string</code></td>
    <td>Output only. URL of the manifest representing the current configuration of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>string</code></td>
    <td>Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the resource, for example `compute.v1.instance`, or `cloudfunctions.v1beta1.function`.</td>
</tr>
<tr>
    <td><CopyableCode code="update" /></td>
    <td><code>object</code></td>
    <td>Output only. If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here. (id: ResourceUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string</code></td>
    <td>Output only. Update timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Output only. The URL of the actual resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. If warning messages are generated during processing of this resource, this field will be populated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.

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
    <td>A token used to continue a truncated list request.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Resources contained in this list response.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-deployment"><code>deployment</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td><a href="#parameter-header.bypassBillingFilter"><code>header.bypassBillingFilter</code></a></td>
    <td>Gets information about a single resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-deployment"><code>deployment</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all resources in a given deployment.</td>
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
<tr id="parameter-deployment">
    <td><CopyableCode code="deployment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
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

Gets information about a single resource.

```sql
SELECT
id,
name,
accessControl,
finalProperties,
insertTime,
manifest,
properties,
type,
update,
updateTime,
url,
warnings
FROM google.deploymentmanager.resources
WHERE project = '{{ project }}' -- required
AND deployment = '{{ deployment }}' -- required
AND resource = '{{ resource }}' -- required
AND header.bypassBillingFilter = '{{ header.bypassBillingFilter }}';
```
</TabItem>
<TabItem value="list">

Lists all resources in a given deployment.

```sql
SELECT
nextPageToken,
resources
FROM google.deploymentmanager.resources
WHERE project = '{{ project }}' -- required
AND deployment = '{{ deployment }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
