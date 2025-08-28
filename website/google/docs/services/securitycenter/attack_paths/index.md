--- 
title: attack_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - attack_paths
  - securitycenter
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

Creates, updates, deletes, gets or lists an <code>attack_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attack_paths</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.attack_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_simulations_valued_resources_attack_paths_list"
    values={[
        { label: 'organizations_simulations_valued_resources_attack_paths_list', value: 'organizations_simulations_valued_resources_attack_paths_list' },
        { label: 'organizations_simulations_attack_exposure_results_attack_paths_list', value: 'organizations_simulations_attack_exposure_results_attack_paths_list' },
        { label: 'organizations_simulations_attack_paths_list', value: 'organizations_simulations_attack_paths_list' },
        { label: 'organizations_attack_paths_list', value: 'organizations_attack_paths_list' }
    ]}
>
<TabItem value="organizations_simulations_valued_resources_attack_paths_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The attack path name, for example, `organizations/12/simulation/34/valuedResources/56/attackPaths/78`</td>
</tr>
<tr>
    <td><CopyableCode code="edges" /></td>
    <td><code>array</code></td>
    <td>A list of the edges between nodes in this attack path.</td>
</tr>
<tr>
    <td><CopyableCode code="pathNodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes that exist in this attack path.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_simulations_attack_exposure_results_attack_paths_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The attack path name, for example, `organizations/12/simulation/34/valuedResources/56/attackPaths/78`</td>
</tr>
<tr>
    <td><CopyableCode code="edges" /></td>
    <td><code>array</code></td>
    <td>A list of the edges between nodes in this attack path.</td>
</tr>
<tr>
    <td><CopyableCode code="pathNodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes that exist in this attack path.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_simulations_attack_paths_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The attack path name, for example, `organizations/12/simulation/34/valuedResources/56/attackPaths/78`</td>
</tr>
<tr>
    <td><CopyableCode code="edges" /></td>
    <td><code>array</code></td>
    <td>A list of the edges between nodes in this attack path.</td>
</tr>
<tr>
    <td><CopyableCode code="pathNodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes that exist in this attack path.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_attack_paths_list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The attack path name, for example, `organizations/12/simulation/34/valuedResources/56/attackPaths/78`</td>
</tr>
<tr>
    <td><CopyableCode code="edges" /></td>
    <td><code>array</code></td>
    <td>A list of the edges between nodes in this attack path.</td>
</tr>
<tr>
    <td><CopyableCode code="pathNodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes that exist in this attack path.</td>
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
    <td><a href="#organizations_simulations_valued_resources_attack_paths_list"><CopyableCode code="organizations_simulations_valued_resources_attack_paths_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a>, <a href="#parameter-valuedResourcesId"><code>valuedResourcesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the attack paths for a set of simulation results or valued resources and filter.</td>
</tr>
<tr>
    <td><a href="#organizations_simulations_attack_exposure_results_attack_paths_list"><CopyableCode code="organizations_simulations_attack_exposure_results_attack_paths_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a>, <a href="#parameter-attackExposureResultsId"><code>attackExposureResultsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the attack paths for a set of simulation results or valued resources and filter.</td>
</tr>
<tr>
    <td><a href="#organizations_simulations_attack_paths_list"><CopyableCode code="organizations_simulations_attack_paths_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the attack paths for a set of simulation results or valued resources and filter.</td>
</tr>
<tr>
    <td><a href="#organizations_attack_paths_list"><CopyableCode code="organizations_attack_paths_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the attack paths for a set of simulation results or valued resources and filter.</td>
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
<tr id="parameter-attackExposureResultsId">
    <td><CopyableCode code="attackExposureResultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-simulationsId">
    <td><CopyableCode code="simulationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-valuedResourcesId">
    <td><CopyableCode code="valuedResourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="organizations_simulations_valued_resources_attack_paths_list"
    values={[
        { label: 'organizations_simulations_valued_resources_attack_paths_list', value: 'organizations_simulations_valued_resources_attack_paths_list' },
        { label: 'organizations_simulations_attack_exposure_results_attack_paths_list', value: 'organizations_simulations_attack_exposure_results_attack_paths_list' },
        { label: 'organizations_simulations_attack_paths_list', value: 'organizations_simulations_attack_paths_list' },
        { label: 'organizations_attack_paths_list', value: 'organizations_attack_paths_list' }
    ]}
>
<TabItem value="organizations_simulations_valued_resources_attack_paths_list">

Lists the attack paths for a set of simulation results or valued resources and filter.

```sql
SELECT
name,
edges,
pathNodes
FROM google.securitycenter.attack_paths
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required
AND valuedResourcesId = '{{ valuedResourcesId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_simulations_attack_exposure_results_attack_paths_list">

Lists the attack paths for a set of simulation results or valued resources and filter.

```sql
SELECT
name,
edges,
pathNodes
FROM google.securitycenter.attack_paths
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required
AND attackExposureResultsId = '{{ attackExposureResultsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_simulations_attack_paths_list">

Lists the attack paths for a set of simulation results or valued resources and filter.

```sql
SELECT
name,
edges,
pathNodes
FROM google.securitycenter.attack_paths
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_attack_paths_list">

Lists the attack paths for a set of simulation results or valued resources and filter.

```sql
SELECT
name,
edges,
pathNodes
FROM google.securitycenter.attack_paths
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>
