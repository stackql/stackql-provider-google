--- 
title: api_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - api_operations
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

Creates, updates, deletes, gets or lists an <code>api_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>api_operations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apim.api_operations" /></td></tr>
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

Message describing ApiOperation object

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
    <td><CopyableCode code="count" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of occurrences of this API Operation.</td>
</tr>
<tr>
    <td><CopyableCode code="firstSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>First seen time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="httpOperation" /></td>
    <td><code>object</code></td>
    <td>An HTTP Operation. (id: HttpOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last seen time stamp</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing ApiOperations

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
    <td><CopyableCode code="apiOperations" /></td>
    <td><code>array</code></td>
    <td>The ApiOperations from the specified project and location and ObservationJob and ApiObservation.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-observationJobsId"><code>observationJobsId</code></a>, <a href="#parameter-apiObservationsId"><code>apiObservationsId</code></a>, <a href="#parameter-apiOperationsId"><code>apiOperationsId</code></a></td>
    <td></td>
    <td>GetApiOperation retrieves a single ApiOperation by name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-observationJobsId"><code>observationJobsId</code></a>, <a href="#parameter-apiObservationsId"><code>apiObservationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>ListApiOperations gets all ApiOperations for a given project and location and ObservationJob and ApiObservation.</td>
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
<tr id="parameter-apiOperationsId">
    <td><CopyableCode code="apiOperationsId" /></td>
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

GetApiOperation retrieves a single ApiOperation by name.

```sql
SELECT
name,
count,
firstSeenTime,
httpOperation,
lastSeenTime
FROM google.apim.api_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND observationJobsId = '{{ observationJobsId }}' -- required
AND apiObservationsId = '{{ apiObservationsId }}' -- required
AND apiOperationsId = '{{ apiOperationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

ListApiOperations gets all ApiOperations for a given project and location and ObservationJob and ApiObservation.

```sql
SELECT
apiOperations,
nextPageToken
FROM google.apim.api_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND observationJobsId = '{{ observationJobsId }}' -- required
AND apiObservationsId = '{{ apiObservationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
