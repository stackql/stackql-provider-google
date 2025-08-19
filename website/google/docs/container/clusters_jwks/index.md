--- 
title: clusters_jwks
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_jwks
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

Creates, updates, deletes, gets or lists a <code>clusters_jwks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters_jwks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.clusters_jwks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_clusters_get_jwks"
    values={[
        { label: 'projects_locations_clusters_get_jwks', value: 'projects_locations_clusters_get_jwks' }
    ]}
>
<TabItem value="projects_locations_clusters_get_jwks">

GetJSONWebKeysResponse is a valid JSON Web Key Set as specified in rfc 7517

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
    <td><CopyableCode code="cacheHeader" /></td>
    <td><code>object</code></td>
    <td>For HTTP requests, this field is automatically extracted into the Cache-Control HTTP header. (id: HttpCacheControlResponseHeader)</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>The public component of the keys used by the cluster to sign token requests.</td>
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
    <td><a href="#projects_locations_clusters_get_jwks"><CopyableCode code="projects_locations_clusters_get_jwks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets the public component of the cluster signing keys in JSON Web Key format.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_clusters_get_jwks"
    values={[
        { label: 'projects_locations_clusters_get_jwks', value: 'projects_locations_clusters_get_jwks' }
    ]}
>
<TabItem value="projects_locations_clusters_get_jwks">

Gets the public component of the cluster signing keys in JSON Web Key format.

```sql
SELECT
cacheHeader,
keys
FROM google.container.clusters_jwks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required;
```
</TabItem>
</Tabs>
