--- 
title: automation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_runs
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

Creates, updates, deletes, gets or lists an <code>automation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>automation_runs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.automation_runs" /></td></tr>
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

An `AutomationRun` resource in the Cloud Deploy API. An `AutomationRun` represents an execution instance of an automation rule.

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
    <td>Output only. Name of the `AutomationRun`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;delivery_pipeline&#125;/automationRuns/&#123;automation_run&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="advanceRolloutOperation" /></td>
    <td><code>object</code></td>
    <td>Output only. Advances a rollout to the next phase. (id: AdvanceRolloutOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="automationId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the automation that initiated the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="automationSnapshot" /></td>
    <td><code>object</code></td>
    <td>An `Automation` resource in the Cloud Deploy API. An `Automation` enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement. The intention of Automation is to reduce manual intervention in the continuous delivery process. (id: Automation)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `AutomationRun` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The weak etag of the `AutomationRun` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the `AutomationRun` expires. An `AutomationRun` expires after 14 days from its creation date.</td>
</tr>
<tr>
    <td><CopyableCode code="policyViolation" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains information about what policies prevented the `AutomationRun` from proceeding. (id: PolicyViolation)</td>
</tr>
<tr>
    <td><CopyableCode code="promoteReleaseOperation" /></td>
    <td><code>object</code></td>
    <td>Output only. Promotes a release to a specified 'Target'. (id: PromoteReleaseOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="repairRolloutOperation" /></td>
    <td><code>object</code></td>
    <td>Output only. Repairs a failed 'Rollout'. (id: RepairRolloutOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the automation rule that initiated the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user-managed IAM service account that performs the operations against Cloud Deploy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the `AutomationRun`.</td>
</tr>
<tr>
    <td><CopyableCode code="stateDescription" /></td>
    <td><code>string</code></td>
    <td>Output only. Explains the current state of the `AutomationRun`. Present only when an explanation is needed.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the source target that initiates the `AutomationRun`. The value of this field is the last segment of a target name.</td>
</tr>
<tr>
    <td><CopyableCode code="timedPromoteReleaseOperation" /></td>
    <td><code>object</code></td>
    <td>Output only. Promotes a release to a specified 'Target' as defined in a Timed Promote Release rule. (id: TimedPromoteReleaseOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the automationRun was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="waitUntilTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Earliest time the `AutomationRun` will attempt to resume. Wait-time is configured by `wait` in automation rule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response object from `ListAutomationRuns`.

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
    <td><CopyableCode code="automationRuns" /></td>
    <td><code>array</code></td>
    <td>The `AutomationRuns` objects.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-automationRunsId"><code>automationRunsId</code></a></td>
    <td></td>
    <td>Gets details of a single AutomationRun.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists AutomationRuns in a given project and location.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-automationRunsId"><code>automationRunsId</code></a></td>
    <td></td>
    <td>Cancels an AutomationRun. The `state` of the `AutomationRun` after cancelling is `CANCELLED`. `CancelAutomationRun` can be called on AutomationRun in the state `IN_PROGRESS` and `PENDING`; AutomationRun in a different state returns an `FAILED_PRECONDITION` error.</td>
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
<tr id="parameter-automationRunsId">
    <td><CopyableCode code="automationRunsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deliveryPipelinesId">
    <td><CopyableCode code="deliveryPipelinesId" /></td>
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

Gets details of a single AutomationRun.

```sql
SELECT
name,
advanceRolloutOperation,
automationId,
automationSnapshot,
createTime,
etag,
expireTime,
policyViolation,
promoteReleaseOperation,
repairRolloutOperation,
ruleId,
serviceAccount,
state,
stateDescription,
targetId,
timedPromoteReleaseOperation,
updateTime,
waitUntilTime
FROM google.clouddeploy.automation_runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND automationRunsId = '{{ automationRunsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists AutomationRuns in a given project and location.

```sql
SELECT
automationRuns,
nextPageToken,
unreachable
FROM google.clouddeploy.automation_runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Cancels an AutomationRun. The `state` of the `AutomationRun` after cancelling is `CANCELLED`. `CancelAutomationRun` can be called on AutomationRun in the state `IN_PROGRESS` and `PENDING`; AutomationRun in a different state returns an `FAILED_PRECONDITION` error.

```sql
EXEC google.clouddeploy.automation_runs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deliveryPipelinesId='{{ deliveryPipelinesId }}' --required, 
@automationRunsId='{{ automationRunsId }}' --required;
```
</TabItem>
</Tabs>
