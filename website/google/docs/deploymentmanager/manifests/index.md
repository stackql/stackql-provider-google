--- 
title: manifests
hide_title: false
hide_table_of_contents: false
keywords:
  - manifests
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

Creates, updates, deletes, gets or lists a <code>manifests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>manifests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.deploymentmanager.manifests" /></td></tr>
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
    <td>Output only. The name of the manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Output only. The YAML configuration for this manifest. (id: ConfigFile)</td>
</tr>
<tr>
    <td><CopyableCode code="expandedConfig" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully-expanded configuration file, including any templates and references.</td>
</tr>
<tr>
    <td><CopyableCode code="imports" /></td>
    <td><code>array</code></td>
    <td>Output only. The imported files for this manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="insertTime" /></td>
    <td><code>string</code></td>
    <td>Output only. Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="layout" /></td>
    <td><code>string</code></td>
    <td>Output only. The YAML layout for this manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="manifestSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The computed size of the fully expanded manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="manifestSizeLimitBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size limit for expanded manifests in the project.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Self link for the manifest.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.

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
    <td><CopyableCode code="manifests" /></td>
    <td><code>array</code></td>
    <td>Output only. Manifests contained in this list response.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. A token used to continue a truncated list request.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-deployment"><code>deployment</code></a>, <a href="#parameter-manifest"><code>manifest</code></a></td>
    <td><a href="#parameter-header.bypassBillingFilter"><code>header.bypassBillingFilter</code></a></td>
    <td>Gets information about a specific manifest.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-deployment"><code>deployment</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all manifests for a given deployment.</td>
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
<tr id="parameter-manifest">
    <td><CopyableCode code="manifest" /></td>
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

Gets information about a specific manifest.

```sql
SELECT
id,
name,
config,
expandedConfig,
imports,
insertTime,
layout,
manifestSizeBytes,
manifestSizeLimitBytes,
selfLink
FROM google.deploymentmanager.manifests
WHERE project = '{{ project }}' -- required
AND deployment = '{{ deployment }}' -- required
AND manifest = '{{ manifest }}' -- required
AND header.bypassBillingFilter = '{{ header.bypassBillingFilter }}';
```
</TabItem>
<TabItem value="list">

Lists all manifests for a given deployment.

```sql
SELECT
manifests,
nextPageToken
FROM google.deploymentmanager.manifests
WHERE project = '{{ project }}' -- required
AND deployment = '{{ deployment }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
