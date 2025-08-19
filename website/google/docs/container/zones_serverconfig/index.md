--- 
title: zones_serverconfig
hide_title: false
hide_table_of_contents: false
keywords:
  - zones_serverconfig
  - container
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

Creates, updates, deletes, gets or lists a <code>zones_serverconfig</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>zones_serverconfig</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.zones_serverconfig" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_zones_get_serverconfig"
    values={[
        { label: 'projects_zones_get_serverconfig', value: 'projects_zones_get_serverconfig' }
    ]}
>
<TabItem value="projects_zones_get_serverconfig">

Kubernetes Engine service configuration.

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
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>List of release channel configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultClusterVersion" /></td>
    <td><code>string</code></td>
    <td>Version of Kubernetes the service deploys by default.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultImageType" /></td>
    <td><code>string</code></td>
    <td>Default image type.</td>
</tr>
<tr>
    <td><CopyableCode code="validImageTypes" /></td>
    <td><code>array</code></td>
    <td>List of valid image types.</td>
</tr>
<tr>
    <td><CopyableCode code="validMasterVersions" /></td>
    <td><code>array</code></td>
    <td>List of valid master versions, in descending order.</td>
</tr>
<tr>
    <td><CopyableCode code="validNodeVersions" /></td>
    <td><code>array</code></td>
    <td>List of valid node upgrade target versions, in descending order.</td>
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
    <td><a href="#projects_zones_get_serverconfig"><CopyableCode code="projects_zones_get_serverconfig" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Returns configuration info about the Google Kubernetes Engine service.</td>
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
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_zones_get_serverconfig"
    values={[
        { label: 'projects_zones_get_serverconfig', value: 'projects_zones_get_serverconfig' }
    ]}
>
<TabItem value="projects_zones_get_serverconfig">

Returns configuration info about the Google Kubernetes Engine service.

```sql
SELECT
channels,
defaultClusterVersion,
defaultImageType,
validImageTypes,
validMasterVersions,
validNodeVersions
FROM google.container.zones_serverconfig
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND name = '{{ name }}';
```
</TabItem>
</Tabs>
