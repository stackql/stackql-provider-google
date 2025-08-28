--- 
title: network_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - network_paths
  - networkmanagement
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

Creates, updates, deletes, gets or lists a <code>network_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>network_paths</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkmanagement.network_paths" /></td></tr>
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
    <td>Identifier. Name of the resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/networkMonitoringProviders/&#123;network_monitoring_provider&#125;/networkPaths/&#123;network_path&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the NetworkPath was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Output only. IP address or hostname of the network path destination.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationGeoLocation" /></td>
    <td><code>object</code></td>
    <td>Output only. Geographical location of the destination MonitoringPoint. ; (id: GeoLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="dualEnded" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the network path is dual ended. When true, the network path is measured both: from both source to destination, and from destination to source. When false, the network path is measured from the source through the destination back to the source (round trip measurement).</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is monitoring enabled for the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringPolicyDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the monitoring policy.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of monitoring policy.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The monitoring status of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="networkProtocol" /></td>
    <td><code>string</code></td>
    <td>Output only. The network protocol of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="providerTags" /></td>
    <td><code>array</code></td>
    <td>Output only. The provider tags of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="providerUiUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Link to provider's UI; link shows the NetworkPath.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMonitoringPointId" /></td>
    <td><code>string</code></td>
    <td>Output only. Provider's UUID of the source MonitoringPoint. This id may not point to a resource in the GCP.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the NetworkPath was updated.</td>
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
    <td>Identifier. Name of the resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/networkMonitoringProviders/&#123;network_monitoring_provider&#125;/networkPaths/&#123;network_path&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the NetworkPath was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Output only. IP address or hostname of the network path destination.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationGeoLocation" /></td>
    <td><code>object</code></td>
    <td>Output only. Geographical location of the destination MonitoringPoint. ; (id: GeoLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="dualEnded" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if the network path is dual ended. When true, the network path is measured both: from both source to destination, and from destination to source. When false, the network path is measured from the source through the destination back to the source (round trip measurement).</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is monitoring enabled for the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringPolicyDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the monitoring policy.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of monitoring policy.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The monitoring status of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="networkProtocol" /></td>
    <td><code>string</code></td>
    <td>Output only. The network protocol of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="providerTags" /></td>
    <td><code>array</code></td>
    <td>Output only. The provider tags of the network path.</td>
</tr>
<tr>
    <td><CopyableCode code="providerUiUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Link to provider's UI; link shows the NetworkPath.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMonitoringPointId" /></td>
    <td><code>string</code></td>
    <td>Output only. Provider's UUID of the source MonitoringPoint. This id may not point to a resource in the GCP.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the NetworkPath was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a>, <a href="#parameter-networkPathsId"><code>networkPathsId</code></a></td>
    <td></td>
    <td>Gets the NetworkPath resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists NetworkPaths for a given network monitoring provider.</td>
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
<tr id="parameter-networkMonitoringProvidersId">
    <td><CopyableCode code="networkMonitoringProvidersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkPathsId">
    <td><CopyableCode code="networkPathsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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

Gets the NetworkPath resource.

```sql
SELECT
name,
createTime,
destination,
destinationGeoLocation,
displayName,
dualEnded,
monitoringEnabled,
monitoringPolicyDisplayName,
monitoringPolicyId,
monitoringStatus,
networkProtocol,
providerTags,
providerUiUri,
sourceMonitoringPointId,
updateTime
FROM google.networkmanagement.network_paths
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required
AND networkPathsId = '{{ networkPathsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists NetworkPaths for a given network monitoring provider.

```sql
SELECT
name,
createTime,
destination,
destinationGeoLocation,
displayName,
dualEnded,
monitoringEnabled,
monitoringPolicyDisplayName,
monitoringPolicyId,
monitoringStatus,
networkProtocol,
providerTags,
providerUiUri,
sourceMonitoringPointId,
updateTime
FROM google.networkmanagement.network_paths
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
