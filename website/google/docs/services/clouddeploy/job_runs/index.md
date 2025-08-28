--- 
title: job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_runs
  - clouddeploy
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

Creates, updates, deletes, gets or lists a <code>job_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>job_runs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.job_runs" /></td></tr>
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
    <td>Output only. Name of the `JobRun`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;releases&#125;/rollouts/&#123;rollouts&#125;/jobRuns/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="advanceChildRolloutJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to an advanceChildRollout `JobRun` (id: AdvanceChildRolloutJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="createChildRolloutJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a createChildRollout `JobRun`. (id: CreateChildRolloutJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `JobRun` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a deploy `JobRun`. (id: DeployJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `JobRun` ended.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the `Rollout` job this `JobRun` corresponds to.</td>
</tr>
<tr>
    <td><CopyableCode code="phaseId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the `Rollout` phase this `JobRun` belongs in.</td>
</tr>
<tr>
    <td><CopyableCode code="postdeployJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a postdeploy `JobRun`. (id: PostdeployJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="predeployJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a predeploy `JobRun`. (id: PredeployJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `JobRun` was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the `JobRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `JobRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="verifyJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a verify `JobRun`. (id: VerifyJobRun)</td>
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
    <td>Output only. Name of the `JobRun`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;deliveryPipeline&#125;/releases/&#123;releases&#125;/rollouts/&#123;rollouts&#125;/jobRuns/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="advanceChildRolloutJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to an advanceChildRollout `JobRun` (id: AdvanceChildRolloutJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="createChildRolloutJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a createChildRollout `JobRun`. (id: CreateChildRolloutJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `JobRun` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a deploy `JobRun`. (id: DeployJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `JobRun` ended.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the `Rollout` job this `JobRun` corresponds to.</td>
</tr>
<tr>
    <td><CopyableCode code="phaseId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the `Rollout` phase this `JobRun` belongs in.</td>
</tr>
<tr>
    <td><CopyableCode code="postdeployJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a postdeploy `JobRun`. (id: PostdeployJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="predeployJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a predeploy `JobRun`. (id: PredeployJobRun)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `JobRun` was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the `JobRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `JobRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="verifyJobRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Information specific to a verify `JobRun`. (id: VerifyJobRun)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a>, <a href="#parameter-jobRunsId"><code>jobRunsId</code></a></td>
    <td></td>
    <td>Gets details of a single JobRun.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists JobRuns in a given project and location.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-releasesId"><code>releasesId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a>, <a href="#parameter-jobRunsId"><code>jobRunsId</code></a></td>
    <td></td>
    <td>Terminates a Job Run in a given project and location.</td>
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
<tr id="parameter-deliveryPipelinesId">
    <td><CopyableCode code="deliveryPipelinesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobRunsId">
    <td><CopyableCode code="jobRunsId" /></td>
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
<tr id="parameter-releasesId">
    <td><CopyableCode code="releasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rolloutsId">
    <td><CopyableCode code="rolloutsId" /></td>
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

Gets details of a single JobRun.

```sql
SELECT
name,
advanceChildRolloutJobRun,
createChildRolloutJobRun,
createTime,
deployJobRun,
endTime,
etag,
jobId,
phaseId,
postdeployJobRun,
predeployJobRun,
startTime,
state,
uid,
verifyJobRun
FROM google.clouddeploy.job_runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
AND rolloutsId = '{{ rolloutsId }}' -- required
AND jobRunsId = '{{ jobRunsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists JobRuns in a given project and location.

```sql
SELECT
name,
advanceChildRolloutJobRun,
createChildRolloutJobRun,
createTime,
deployJobRun,
endTime,
etag,
jobId,
phaseId,
postdeployJobRun,
predeployJobRun,
startTime,
state,
uid,
verifyJobRun
FROM google.clouddeploy.job_runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND releasesId = '{{ releasesId }}' -- required
AND rolloutsId = '{{ rolloutsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="terminate"
    values={[
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="terminate">

Terminates a Job Run in a given project and location.

```sql
EXEC google.clouddeploy.job_runs.terminate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@releasesId='{{ releasesId }}' --required, 
@rolloutsId='{{ rolloutsId }}' --required, 
@jobRunsId='{{ jobRunsId }}' --required 
@@json=
'{
"overrideDeployPolicy": "{{ overrideDeployPolicy }}"
}';
```
</TabItem>
</Tabs>
