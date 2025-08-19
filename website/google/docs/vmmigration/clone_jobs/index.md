--- 
title: clone_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - clone_jobs
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

Creates, updates, deletes, gets or lists a <code>clone_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>clone_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.clone_jobs" /></td></tr>
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

CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.

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
    <td>Output only. The name of the clone.</td>
</tr>
<tr>
    <td><CopyableCode code="computeEngineDisksTargetDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the target Persistent Disks in Compute Engine. (id: ComputeEngineDisksTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="computeEngineTargetDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the target VM in Compute Engine. (id: ComputeEngineTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the clone job was created (as an API call, not when it was actually created in the target).</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the clone job was ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Provides details for the errors that led to the Clone Job's state. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the clone job.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the state was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Output only. The clone steps list representing its progress.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for 'ListCloneJobs' request.

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
    <td><CopyableCode code="cloneJobs" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of clone jobs response.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Output only. Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a>, <a href="#parameter-cloneJobsId"><code>cloneJobsId</code></a></td>
    <td></td>
    <td>Gets details of a single CloneJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the CloneJobs of a migrating VM. Only 25 most recent CloneJobs are listed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a></td>
    <td><a href="#parameter-cloneJobId"><code>cloneJobId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Initiates a Clone of a specific migrating VM.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-migratingVmsId"><code>migratingVmsId</code></a>, <a href="#parameter-cloneJobsId"><code>cloneJobsId</code></a></td>
    <td></td>
    <td>Initiates the cancellation of a running clone job.</td>
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
<tr id="parameter-cloneJobsId">
    <td><CopyableCode code="cloneJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-migratingVmsId">
    <td><CopyableCode code="migratingVmsId" /></td>
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
<tr id="parameter-cloneJobId">
    <td><CopyableCode code="cloneJobId" /></td>
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

Gets details of a single CloneJob.

```sql
SELECT
name,
computeEngineDisksTargetDetails,
computeEngineTargetDetails,
createTime,
endTime,
error,
state,
stateTime,
steps
FROM google.vmmigration.clone_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND migratingVmsId = '{{ migratingVmsId }}' -- required
AND cloneJobsId = '{{ cloneJobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the CloneJobs of a migrating VM. Only 25 most recent CloneJobs are listed.

```sql
SELECT
cloneJobs,
nextPageToken,
unreachable
FROM google.vmmigration.clone_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND migratingVmsId = '{{ migratingVmsId }}' -- required
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

Initiates a Clone of a specific migrating VM.

```sql
INSERT INTO google.vmmigration.clone_jobs (
projectsId,
locationsId,
sourcesId,
migratingVmsId,
cloneJobId,
requestId
)
SELECT 
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sourcesId }}',
'{{ migratingVmsId }}',
'{{ cloneJobId }}',
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
- name: clone_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the clone_jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the clone_jobs resource.
    - name: sourcesId
      value: string
      description: Required parameter for the clone_jobs resource.
    - name: migratingVmsId
      value: string
      description: Required parameter for the clone_jobs resource.
    - name: cloneJobId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Initiates the cancellation of a running clone job.

```sql
EXEC google.vmmigration.clone_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@migratingVmsId='{{ migratingVmsId }}' --required, 
@cloneJobsId='{{ cloneJobsId }}' --required;
```
</TabItem>
</Tabs>
