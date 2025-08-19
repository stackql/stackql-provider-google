--- 
title: lineage_events
hide_title: false
hide_table_of_contents: false
keywords:
  - lineage_events
  - datalineage
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

Creates, updates, deletes, gets or lists a <code>lineage_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>lineage_events</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalineage.lineage_events" /></td></tr>
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

A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field.

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
    <td>Immutable. The resource name of the lineage event. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/processes/&#123;process&#125;/runs/&#123;run&#125;/lineageEvents/&#123;lineage_event&#125;`. Can be specified or auto-assigned. &#123;lineage_event&#125; must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>Optional. List of source-target pairs. Can't contain more than 100 tuples.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListLineageEvents.

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
    <td><CopyableCode code="lineageEvents" /></td>
    <td><code>array</code></td>
    <td>Lineage events from the specified project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processesId"><code>processesId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-lineageEventsId"><code>lineageEventsId</code></a></td>
    <td></td>
    <td>Gets details of a specified lineage event.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processesId"><code>processesId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists lineage events in the given project and location. The list order is not defined.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processesId"><code>processesId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new lineage event.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processesId"><code>processesId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-lineageEventsId"><code>lineageEventsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Deletes the lineage event with the specified name.</td>
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
<tr id="parameter-lineageEventsId">
    <td><CopyableCode code="lineageEventsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-processesId">
    <td><CopyableCode code="processesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-runsId">
    <td><CopyableCode code="runsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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

Gets details of a specified lineage event.

```sql
SELECT
name,
endTime,
links,
startTime
FROM google.datalineage.lineage_events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processesId = '{{ processesId }}' -- required
AND runsId = '{{ runsId }}' -- required
AND lineageEventsId = '{{ lineageEventsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists lineage events in the given project and location. The list order is not defined.

```sql
SELECT
lineageEvents,
nextPageToken
FROM google.datalineage.lineage_events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND processesId = '{{ processesId }}' -- required
AND runsId = '{{ runsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new lineage event.

```sql
INSERT INTO google.datalineage.lineage_events (
data__name,
data__links,
data__startTime,
data__endTime,
projectsId,
locationsId,
processesId,
runsId,
requestId
)
SELECT 
'{{ name }}',
'{{ links }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ processesId }}',
'{{ runsId }}',
'{{ requestId }}'
RETURNING
name,
endTime,
links,
startTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: lineage_events
  props:
    - name: projectsId
      value: string
      description: Required parameter for the lineage_events resource.
    - name: locationsId
      value: string
      description: Required parameter for the lineage_events resource.
    - name: processesId
      value: string
      description: Required parameter for the lineage_events resource.
    - name: runsId
      value: string
      description: Required parameter for the lineage_events resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
        
    - name: links
      value: array
      description: >
        Optional. List of source-target pairs. Can't contain more than 100 tuples.
        
    - name: startTime
      value: string
      description: >
        Required. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.
        
    - name: endTime
      value: string
      description: >
        Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the lineage event with the specified name.

```sql
DELETE FROM google.datalineage.lineage_events
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND processesId = '{{ processesId }}' --required
AND runsId = '{{ runsId }}' --required
AND lineageEventsId = '{{ lineageEventsId }}' --required
AND allowMissing = '{{ allowMissing }}';
```
</TabItem>
</Tabs>
