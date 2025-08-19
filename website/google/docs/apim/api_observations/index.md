--- 
title: api_observations
hide_title: false
hide_table_of_contents: false
keywords:
  - api_observations
  - apim
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

Creates, updates, deletes, gets or lists an <code>api_observations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>api_observations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apim.api_observations" /></td></tr>
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

Message describing ApiObservation object

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
    <td>Identifier. Name of resource</td>
</tr>
<tr>
    <td><CopyableCode code="apiOperationCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of observed API Operations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname of requests processed for this Observation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEventDetectedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last event detected time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="serverIps" /></td>
    <td><code>array</code></td>
    <td>The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceLocations" /></td>
    <td><code>array</code></td>
    <td>Location of the Observation Source, for example "us-central1" or "europe-west1."</td>
</tr>
<tr>
    <td><CopyableCode code="style" /></td>
    <td><code>string</code></td>
    <td>Style of ApiObservation</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>User-defined tags to organize and sort</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Update time stamp</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing ApiObservations

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
    <td><CopyableCode code="apiObservations" /></td>
    <td><code>array</code></td>
    <td>The ApiObservation from the specified project and location and ObservationJobs.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-observationJobsId"><code>observationJobsId</code></a>, <a href="#parameter-apiObservationsId"><code>apiObservationsId</code></a></td>
    <td></td>
    <td>GetApiObservation retrieves a single ApiObservation by name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-observationJobsId"><code>observationJobsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>ListApiObservations gets all ApiObservations for a given project and location and ObservationJob.</td>
</tr>
<tr>
    <td><a href="#batch_edit_tags"><CopyableCode code="batch_edit_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-observationJobsId"><code>observationJobsId</code></a></td>
    <td></td>
    <td>BatchEditTagsApiObservations adds or removes Tags for ApiObservations.</td>
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
<tr id="parameter-apiObservationsId">
    <td><CopyableCode code="apiObservationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-observationJobsId">
    <td><CopyableCode code="observationJobsId" /></td>
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

GetApiObservation retrieves a single ApiObservation by name.

```sql
SELECT
name,
apiOperationCount,
createTime,
hostname,
lastEventDetectedTime,
serverIps,
sourceLocations,
style,
tags,
updateTime
FROM google.apim.api_observations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND observationJobsId = '{{ observationJobsId }}' -- required
AND apiObservationsId = '{{ apiObservationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

ListApiObservations gets all ApiObservations for a given project and location and ObservationJob.

```sql
SELECT
apiObservations,
nextPageToken
FROM google.apim.api_observations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND observationJobsId = '{{ observationJobsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_edit_tags"
    values={[
        { label: 'batch_edit_tags', value: 'batch_edit_tags' }
    ]}
>
<TabItem value="batch_edit_tags">

BatchEditTagsApiObservations adds or removes Tags for ApiObservations.

```sql
EXEC google.apim.api_observations.batch_edit_tags 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@observationJobsId='{{ observationJobsId }}' --required 
@@json=
'{
"requests": "{{ requests }}"
}';
```
</TabItem>
</Tabs>
