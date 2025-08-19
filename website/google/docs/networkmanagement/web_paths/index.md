--- 
title: web_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - web_paths
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

Creates, updates, deletes, gets or lists a <code>web_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>web_paths</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkmanagement.web_paths" /></td></tr>
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

Message describing WebPath resource.

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
    <td>Identifier. Name of the resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/networkMonitoringProviders/&#123;network_monitoring_provider&#125;/webPaths/&#123;web_path&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the WebPath was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Output only. Web monitoring target.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the WebPath.</td>
</tr>
<tr>
    <td><CopyableCode code="interval" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. Monitoring interval.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Is monitoring enabled for the WebPath.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringPolicyDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the monitoring policy.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the monitoring policy.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The monitoring status of the WebPath.</td>
</tr>
<tr>
    <td><CopyableCode code="providerTags" /></td>
    <td><code>array</code></td>
    <td>Output only. The provider tags of the web path.</td>
</tr>
<tr>
    <td><CopyableCode code="providerUiUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Link to provider's UI; link shows the WebPath.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedNetworkPathId" /></td>
    <td><code>string</code></td>
    <td>Output only. Provider's UUID of the related NetworkPath.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMonitoringPointId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the source MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the WebPath was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowType" /></td>
    <td><code>string</code></td>
    <td>Output only. The workflow type of the WebPath.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing WebPaths

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
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="webPaths" /></td>
    <td><code>array</code></td>
    <td>The list of WebPath.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a>, <a href="#parameter-webPathsId"><code>webPathsId</code></a></td>
    <td></td>
    <td>Gets the WebPath resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists WebPaths for a given network monitoring provider.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-webPathsId">
    <td><CopyableCode code="webPathsId" /></td>
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

Gets the WebPath resource.

```sql
SELECT
name,
createTime,
destination,
displayName,
interval,
monitoringEnabled,
monitoringPolicyDisplayName,
monitoringPolicyId,
monitoringStatus,
providerTags,
providerUiUri,
relatedNetworkPathId,
sourceMonitoringPointId,
updateTime,
workflowType
FROM google.networkmanagement.web_paths
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required
AND webPathsId = '{{ webPathsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists WebPaths for a given network monitoring provider.

```sql
SELECT
nextPageToken,
webPaths
FROM google.networkmanagement.web_paths
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
