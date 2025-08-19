--- 
title: clusters_cluster_upgrade_info
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_cluster_upgrade_info
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

Creates, updates, deletes, gets or lists a <code>clusters_cluster_upgrade_info</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clusters_cluster_upgrade_info</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.clusters_cluster_upgrade_info" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_clusters_fetch_cluster_upgrade_info"
    values={[
        { label: 'projects_locations_clusters_fetch_cluster_upgrade_info', value: 'projects_locations_clusters_fetch_cluster_upgrade_info' },
        { label: 'projects_zones_clusters_fetch_cluster_upgrade_info', value: 'projects_zones_clusters_fetch_cluster_upgrade_info' }
    ]}
>
<TabItem value="projects_locations_clusters_fetch_cluster_upgrade_info">

ClusterUpgradeInfo contains the upgrade information of a cluster.

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
    <td><CopyableCode code="autoUpgradeStatus" /></td>
    <td><code>array</code></td>
    <td>The auto upgrade status.</td>
</tr>
<tr>
    <td><CopyableCode code="endOfExtendedSupportTimestamp" /></td>
    <td><code>string</code></td>
    <td>The cluster's current minor version's end of extended support timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="endOfStandardSupportTimestamp" /></td>
    <td><code>string</code></td>
    <td>The cluster's current minor version's end of standard support timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="minorTargetVersion" /></td>
    <td><code>string</code></td>
    <td>minor_target_version indicates the target version for minor upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="patchTargetVersion" /></td>
    <td><code>string</code></td>
    <td>patch_target_version indicates the target version for patch upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="pausedReason" /></td>
    <td><code>array</code></td>
    <td>The auto upgrade paused reason.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeDetails" /></td>
    <td><code>array</code></td>
    <td>The list of past auto upgrades.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_fetch_cluster_upgrade_info">

ClusterUpgradeInfo contains the upgrade information of a cluster.

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
    <td><CopyableCode code="autoUpgradeStatus" /></td>
    <td><code>array</code></td>
    <td>The auto upgrade status.</td>
</tr>
<tr>
    <td><CopyableCode code="endOfExtendedSupportTimestamp" /></td>
    <td><code>string</code></td>
    <td>The cluster's current minor version's end of extended support timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="endOfStandardSupportTimestamp" /></td>
    <td><code>string</code></td>
    <td>The cluster's current minor version's end of standard support timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="minorTargetVersion" /></td>
    <td><code>string</code></td>
    <td>minor_target_version indicates the target version for minor upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="patchTargetVersion" /></td>
    <td><code>string</code></td>
    <td>patch_target_version indicates the target version for patch upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="pausedReason" /></td>
    <td><code>array</code></td>
    <td>The auto upgrade paused reason.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeDetails" /></td>
    <td><code>array</code></td>
    <td>The list of past auto upgrades.</td>
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
    <td><a href="#projects_locations_clusters_fetch_cluster_upgrade_info"><CopyableCode code="projects_locations_clusters_fetch_cluster_upgrade_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Fetch upgrade information of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_fetch_cluster_upgrade_info"><CopyableCode code="projects_zones_clusters_fetch_cluster_upgrade_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Fetch upgrade information of a specific cluster.</td>
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
<tr id="parameter-zonesId">
    <td><CopyableCode code="zonesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_clusters_fetch_cluster_upgrade_info"
    values={[
        { label: 'projects_locations_clusters_fetch_cluster_upgrade_info', value: 'projects_locations_clusters_fetch_cluster_upgrade_info' },
        { label: 'projects_zones_clusters_fetch_cluster_upgrade_info', value: 'projects_zones_clusters_fetch_cluster_upgrade_info' }
    ]}
>
<TabItem value="projects_locations_clusters_fetch_cluster_upgrade_info">

Fetch upgrade information of a specific cluster.

```sql
SELECT
autoUpgradeStatus,
endOfExtendedSupportTimestamp,
endOfStandardSupportTimestamp,
minorTargetVersion,
patchTargetVersion,
pausedReason,
upgradeDetails
FROM google.container.clusters_cluster_upgrade_info
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND version = '{{ version }}';
```
</TabItem>
<TabItem value="projects_zones_clusters_fetch_cluster_upgrade_info">

Fetch upgrade information of a specific cluster.

```sql
SELECT
autoUpgradeStatus,
endOfExtendedSupportTimestamp,
endOfStandardSupportTimestamp,
minorTargetVersion,
patchTargetVersion,
pausedReason,
upgradeDetails
FROM google.container.clusters_cluster_upgrade_info
WHERE projectsId = '{{ projectsId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND version = '{{ version }}';
```
</TabItem>
</Tabs>
