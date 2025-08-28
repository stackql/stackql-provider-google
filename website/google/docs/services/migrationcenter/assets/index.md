--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - migrationcenter
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.migrationcenter.assets" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The full name of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="assignedGroups" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of groups that the asset is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Generic asset attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDeploymentDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Asset information specific for database deployments. (id: DatabaseDeploymentDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Asset information specific for logical databases. (id: DatabaseDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates if the asset is hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="hideReason" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional reason for marking this asset as hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="hideTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the asset was marked as hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="insightList" /></td>
    <td><code>object</code></td>
    <td>Output only. The list of insights associated with the asset. (id: InsightList)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="machineDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Asset information specific for virtual and physical machines. (id: MachineDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceData" /></td>
    <td><code>object</code></td>
    <td>Output only. Performance data for the asset. (id: AssetPerformanceData)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of sources contributing to the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated human readable name of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the asset was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Output only. The full name of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="assignedGroups" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of groups that the asset is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Generic asset attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDeploymentDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Asset information specific for database deployments. (id: DatabaseDeploymentDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Asset information specific for logical databases. (id: DatabaseDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates if the asset is hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="hideReason" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional reason for marking this asset as hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="hideTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the asset was marked as hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="insightList" /></td>
    <td><code>object</code></td>
    <td>Output only. The list of insights associated with the asset. (id: InsightList)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="machineDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Asset information specific for virtual and physical machines. (id: MachineDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceData" /></td>
    <td><code>object</code></td>
    <td>Output only. Performance data for the asset. (id: AssetPerformanceData)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of sources contributing to the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Output only. Server generated human readable name of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the asset was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the details of an asset.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-showHidden"><code>showHidden</code></a></td>
    <td>Lists all the assets in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of an asset.</td>
</tr>
<tr>
    <td><a href="#batch_update"><CopyableCode code="batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Updates the parameters of a list of assets.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes an asset.</td>
</tr>
<tr>
    <td><a href="#batch_delete"><CopyableCode code="batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Deletes list of Assets.</td>
</tr>
<tr>
    <td><a href="#report_asset_frames"><CopyableCode code="report_asset_frames" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>Reports a set of frames.</td>
</tr>
<tr>
    <td><a href="#aggregate_values"><CopyableCode code="aggregate_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Aggregates the requested fields based on provided function.</td>
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
<tr id="parameter-assetsId">
    <td><CopyableCode code="assetsId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showHidden">
    <td><CopyableCode code="showHidden" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets the details of an asset.

```sql
SELECT
name,
assignedGroups,
attributes,
createTime,
databaseDeploymentDetails,
databaseDetails,
hidden,
hideReason,
hideTime,
insightList,
labels,
machineDetails,
performanceData,
sources,
title,
updateTime
FROM google.migrationcenter.assets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND assetsId = '{{ assetsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists all the assets in a given project and location.

```sql
SELECT
name,
assignedGroups,
attributes,
createTime,
databaseDeploymentDetails,
databaseDetails,
hidden,
hideReason,
hideTime,
insightList,
labels,
machineDetails,
performanceData,
sources,
title,
updateTime
FROM google.migrationcenter.assets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}'
AND showHidden = '{{ showHidden }}';
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'batch_update', value: 'batch_update' }
    ]}
>
<TabItem value="patch">

Updates the parameters of an asset.

```sql
UPDATE google.migrationcenter.assets
SET 
data__labels = '{{ labels }}',
data__attributes = '{{ attributes }}',
data__hidden = {{ hidden }},
data__hideReason = '{{ hideReason }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND assetsId = '{{ assetsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
assignedGroups,
attributes,
createTime,
databaseDeploymentDetails,
databaseDetails,
hidden,
hideReason,
hideTime,
insightList,
labels,
machineDetails,
performanceData,
sources,
title,
updateTime;
```
</TabItem>
<TabItem value="batch_update">

Updates the parameters of a list of assets.

```sql
UPDATE google.migrationcenter.assets
SET 
data__requests = '{{ requests }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
RETURNING
assets;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'batch_delete', value: 'batch_delete' }
    ]}
>
<TabItem value="delete">

Deletes an asset.

```sql
DELETE FROM google.migrationcenter.assets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND assetsId = '{{ assetsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
<TabItem value="batch_delete">

Deletes list of Assets.

```sql
DELETE FROM google.migrationcenter.assets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="report_asset_frames"
    values={[
        { label: 'report_asset_frames', value: 'report_asset_frames' },
        { label: 'aggregate_values', value: 'aggregate_values' }
    ]}
>
<TabItem value="report_asset_frames">

Reports a set of frames.

```sql
EXEC google.migrationcenter.assets.report_asset_frames 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@source='{{ source }}' 
@@json=
'{
"framesData": "{{ framesData }}"
}';
```
</TabItem>
<TabItem value="aggregate_values">

Aggregates the requested fields based on provided function.

```sql
EXEC google.migrationcenter.assets.aggregate_values 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"aggregations": "{{ aggregations }}", 
"filter": "{{ filter }}", 
"showHidden": {{ showHidden }}
}';
```
</TabItem>
</Tabs>
