--- 
title: discovered_api_observations
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_api_observations
  - apihub
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

Creates, updates, deletes, gets or lists a <code>discovered_api_observations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>discovered_api_observations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.discovered_api_observations" /></td></tr>
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

Respresents an API Observation observed in one of the sources.

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
    <td>Identifier. The name of the discovered API Observation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/discoveredApiObservations/&#123;discovered_api_observation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="apiOperationCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The number of observed API Operations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp of the observation in API Hub.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Optional. The hostname of requests processed for this Observation.</td>
</tr>
<tr>
    <td><CopyableCode code="knownOperationsCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of known API Operations.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEventDetectedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Last event detected time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>Optional. For an observation pushed from a gcp resource, this would be the gcp project id.</td>
</tr>
<tr>
    <td><CopyableCode code="serverIps" /></td>
    <td><code>array</code></td>
    <td>Optional. The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceLocations" /></td>
    <td><code>array</code></td>
    <td>Optional. The location of the observation source.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMetadata" /></td>
    <td><code>object</code></td>
    <td>SourceMetadata represents the metadata for a resource at the source. (id: GoogleCloudApihubV1SourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceTypes" /></td>
    <td><code>array</code></td>
    <td>Optional. The type of the source from which the observation was collected.</td>
</tr>
<tr>
    <td><CopyableCode code="style" /></td>
    <td><code>string</code></td>
    <td>Optional. Style of ApiObservation</td>
</tr>
<tr>
    <td><CopyableCode code="unknownOperationsCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of unknown API Operations.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp of the observation in API Hub.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing DiscoveredApiObservations

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
    <td><CopyableCode code="discoveredApiObservations" /></td>
    <td><code>array</code></td>
    <td>The DiscoveredApiObservation from the specified project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredApiObservationsId"><code>discoveredApiObservationsId</code></a></td>
    <td></td>
    <td>Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the DiscoveredAPIObservations in a given project and location.</td>
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
<tr id="parameter-discoveredApiObservationsId">
    <td><CopyableCode code="discoveredApiObservationsId" /></td>
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

Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.

```sql
SELECT
name,
apiOperationCount,
createTime,
hostname,
knownOperationsCount,
lastEventDetectedTime,
origin,
serverIps,
sourceLocations,
sourceMetadata,
sourceTypes,
style,
unknownOperationsCount,
updateTime
FROM google.apihub.discovered_api_observations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveredApiObservationsId = '{{ discoveredApiObservationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all the DiscoveredAPIObservations in a given project and location.

```sql
SELECT
discoveredApiObservations,
nextPageToken
FROM google.apihub.discovered_api_observations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
