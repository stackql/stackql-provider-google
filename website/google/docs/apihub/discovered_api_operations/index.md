--- 
title: discovered_api_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_api_operations
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

Creates, updates, deletes, gets or lists a <code>discovered_api_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>discovered_api_operations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.discovered_api_operations" /></td></tr>
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

DiscoveredApiOperation represents an API Operation observed in one of the sources.

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
    <td>Identifier. The name of the discovered API Operation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/discoveredApiObservations/&#123;discovered_api_observation&#125;/discoveredApiOperations/&#123;discovered_api_operation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>Output only. The classification of the discovered API operation.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The number of occurrences of this API Operation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp of the discovered API operation in API Hub.</td>
</tr>
<tr>
    <td><CopyableCode code="firstSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. First seen time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="httpOperation" /></td>
    <td><code>object</code></td>
    <td>Optional. An HTTP Operation. (id: GoogleCloudApihubV1HttpOperationDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Last seen time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="matchResults" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of matched results for the discovered API operation. This will be populated only if the classification is known. The current usecase is for a single match. Keeping it repeated to support multiple matches in future.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMetadata" /></td>
    <td><code>object</code></td>
    <td>SourceMetadata represents the metadata for a resource at the source. (id: GoogleCloudApihubV1SourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp of the discovered API operation in API Hub.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing DiscoveredApiOperations

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
    <td><CopyableCode code="discoveredApiOperations" /></td>
    <td><code>array</code></td>
    <td>The DiscoveredApiOperations from the specified project, location and DiscoveredApiObservation.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredApiObservationsId"><code>discoveredApiObservationsId</code></a>, <a href="#parameter-discoveredApiOperationsId"><code>discoveredApiOperationsId</code></a></td>
    <td></td>
    <td>Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredApiObservationsId"><code>discoveredApiObservationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.</td>
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
<tr id="parameter-discoveredApiOperationsId">
    <td><CopyableCode code="discoveredApiOperationsId" /></td>
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

Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.

```sql
SELECT
name,
classification,
count,
createTime,
firstSeenTime,
httpOperation,
lastSeenTime,
matchResults,
sourceMetadata,
updateTime
FROM google.apihub.discovered_api_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveredApiObservationsId = '{{ discoveredApiObservationsId }}' -- required
AND discoveredApiOperationsId = '{{ discoveredApiOperationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.

```sql
SELECT
discoveredApiOperations,
nextPageToken
FROM google.apihub.discovered_api_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveredApiObservationsId = '{{ discoveredApiObservationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
