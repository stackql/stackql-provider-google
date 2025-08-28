--- 
title: utilization_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - utilization_reports
  - vmmigration
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

Creates, updates, deletes, gets or lists a <code>utilization_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>utilization_reports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.utilization_reports" /></td></tr>
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
    <td>Output only. The report unique name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The report display name, as assigned by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the report in case of an error. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="frameEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the state was last set.</td>
</tr>
<tr>
    <td><CopyableCode code="timeFrame" /></td>
    <td><code>string</code></td>
    <td>Time frame of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="vmCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Total number of VMs included in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="vms" /></td>
    <td><code>array</code></td>
    <td>List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.</td>
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
    <td>Output only. The report unique name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The report display name, as assigned by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details on the state of the report in case of an error. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="frameEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the state was last set.</td>
</tr>
<tr>
    <td><CopyableCode code="timeFrame" /></td>
    <td><code>string</code></td>
    <td>Time frame of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="vmCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Total number of VMs included in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="vms" /></td>
    <td><code>array</code></td>
    <td>List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-utilizationReportsId"><code>utilizationReportsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a single Utilization Report.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Utilization Reports of the given Source.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-utilizationReportId"><code>utilizationReportId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new UtilizationReport.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-utilizationReportsId"><code>utilizationReportsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Utilization Report.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-utilizationReportsId">
    <td><CopyableCode code="utilizationReportsId" /></td>
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
<tr id="parameter-utilizationReportId">
    <td><CopyableCode code="utilizationReportId" /></td>
    <td><code>string</code></td>
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

Gets a single Utilization Report.

```sql
SELECT
name,
createTime,
displayName,
error,
frameEndTime,
state,
stateTime,
timeFrame,
vmCount,
vms
FROM google.vmmigration.utilization_reports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND utilizationReportsId = '{{ utilizationReportsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists Utilization Reports of the given Source.

```sql
SELECT
name,
createTime,
displayName,
error,
frameEndTime,
state,
stateTime,
timeFrame,
vmCount,
vms
FROM google.vmmigration.utilization_reports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND view = '{{ view }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new UtilizationReport.

```sql
INSERT INTO google.vmmigration.utilization_reports (
data__displayName,
data__timeFrame,
data__vms,
projectsId,
locationsId,
sourcesId,
utilizationReportId,
requestId
)
SELECT 
'{{ displayName }}',
'{{ timeFrame }}',
'{{ vms }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sourcesId }}',
'{{ utilizationReportId }}',
'{{ requestId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: utilization_reports
  props:
    - name: projectsId
      value: string
      description: Required parameter for the utilization_reports resource.
    - name: locationsId
      value: string
      description: Required parameter for the utilization_reports resource.
    - name: sourcesId
      value: string
      description: Required parameter for the utilization_reports resource.
    - name: displayName
      value: string
      description: >
        The report display name, as assigned by the user.
        
    - name: timeFrame
      value: string
      description: >
        Time frame of the report.
        
      valid_values: ['TIME_FRAME_UNSPECIFIED', 'WEEK', 'MONTH', 'YEAR']
    - name: vms
      value: array
      description: >
        List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.
        
    - name: utilizationReportId
      value: string
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

Deletes a single Utilization Report.

```sql
DELETE FROM google.vmmigration.utilization_reports
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND utilizationReportsId = '{{ utilizationReportsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
