--- 
title: trials
hide_title: false
hide_table_of_contents: false
keywords:
  - trials
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>trials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>trials</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.trials" /></td></tr>
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

A message representing a Trial. A Trial contains a unique set of Parameters that has been or will be evaluated, along with the objective metrics got by running the Trial.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the Trial assigned by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the Trial assigned by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the client that originally requested this Trial. Each client is identified by a unique client_id. When a client asks for a suggestion, Vertex AI Vizier will assign it a Trial. The client should evaluate the Trial, complete it, and report back to Vertex AI Vizier. If suggestion is asked again by same client_id before the Trial is completed, the same Trial will be returned. Multiple clients with different client_ids can ask for suggestions simultaneously, each of them will get their own Trial.</td>
</tr>
<tr>
    <td><CopyableCode code="customJob" /></td>
    <td><code>string</code></td>
    <td>Output only. The CustomJob name linked to the Trial. It's set for a HyperparameterTuningJob's Trial.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the Trial's status changed to `SUCCEEDED` or `INFEASIBLE`.</td>
</tr>
<tr>
    <td><CopyableCode code="finalMeasurement" /></td>
    <td><code>object</code></td>
    <td>Output only. The final measurement containing the objective value. (id: GoogleCloudAiplatformV1Measurement)</td>
</tr>
<tr>
    <td><CopyableCode code="infeasibleReason" /></td>
    <td><code>string</code></td>
    <td>Output only. A human readable string describing why the Trial is infeasible. This is set only if Trial state is `INFEASIBLE`.</td>
</tr>
<tr>
    <td><CopyableCode code="measurements" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_duration). These are used for early stopping computations.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Output only. The parameters of the Trial.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the Trial was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the Trial.</td>
</tr>
<tr>
    <td><CopyableCode code="webAccessUris" /></td>
    <td><code>object</code></td>
    <td>Output only. URIs for accessing [interactive shells](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) (one URI for each training node). Only available if this trial is part of a HyperparameterTuningJob and the job's trial_job_spec.enable_web_access field is `true`. The keys are names of each node used for the trial; for example, `workerpool0-0` for the primary node, `workerpool1-0` for the first node in the second worker pool, and `workerpool1-1` for the second node in the second worker pool. The values are the URIs for each node's interactive shell.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for VizierService.ListTrials.

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
    <td>Pass this token as the `page_token` field of the request for a subsequent call. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="trials" /></td>
    <td><code>array</code></td>
    <td>The Trials associated with the Study.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Gets a Trial.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the Trials associated with a Study.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Adds a user provided Trial to a Study.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Deletes a Trial.</td>
</tr>
<tr>
    <td><a href="#suggest"><CopyableCode code="suggest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.</td>
</tr>
<tr>
    <td><a href="#complete"><CopyableCode code="complete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Marks a Trial as complete.</td>
</tr>
<tr>
    <td><a href="#check_trial_early_stopping_state"><CopyableCode code="check_trial_early_stopping_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Stops a Trial.</td>
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
<tr id="parameter-studiesId">
    <td><CopyableCode code="studiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-trialsId">
    <td><CopyableCode code="trialsId" /></td>
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

Gets a Trial.

```sql
SELECT
id,
name,
clientId,
customJob,
endTime,
finalMeasurement,
infeasibleReason,
measurements,
parameters,
startTime,
state,
webAccessUris
FROM google.aiplatform.trials
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND studiesId = '{{ studiesId }}' -- required
AND trialsId = '{{ trialsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Trials associated with a Study.

```sql
SELECT
nextPageToken,
trials
FROM google.aiplatform.trials
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND studiesId = '{{ studiesId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
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

Adds a user provided Trial to a Study.

```sql
INSERT INTO google.aiplatform.trials (
projectsId,
locationsId,
studiesId
)
SELECT 
'{{ projectsId }}',
'{{ locationsId }}',
'{{ studiesId }}'
RETURNING
id,
name,
clientId,
customJob,
endTime,
finalMeasurement,
infeasibleReason,
measurements,
parameters,
startTime,
state,
webAccessUris
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: trials
  props:
    - name: projectsId
      value: string
      description: Required parameter for the trials resource.
    - name: locationsId
      value: string
      description: Required parameter for the trials resource.
    - name: studiesId
      value: string
      description: Required parameter for the trials resource.
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

Deletes a Trial.

```sql
DELETE FROM google.aiplatform.trials
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND studiesId = '{{ studiesId }}' --required
AND trialsId = '{{ trialsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="suggest"
    values={[
        { label: 'suggest', value: 'suggest' },
        { label: 'complete', value: 'complete' },
        { label: 'check_trial_early_stopping_state', value: 'check_trial_early_stopping_state' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="suggest">

Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

```sql
EXEC google.aiplatform.trials.suggest 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required 
@@json=
'{
"suggestionCount": {{ suggestionCount }}, 
"clientId": "{{ clientId }}", 
"contexts": "{{ contexts }}"
}';
```
</TabItem>
<TabItem value="complete">

Marks a Trial as complete.

```sql
EXEC google.aiplatform.trials.complete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@trialsId='{{ trialsId }}' --required 
@@json=
'{
"finalMeasurement": "{{ finalMeasurement }}", 
"trialInfeasible": {{ trialInfeasible }}, 
"infeasibleReason": "{{ infeasibleReason }}"
}';
```
</TabItem>
<TabItem value="check_trial_early_stopping_state">

Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

```sql
EXEC google.aiplatform.trials.check_trial_early_stopping_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@trialsId='{{ trialsId }}' --required;
```
</TabItem>
<TabItem value="stop">

Stops a Trial.

```sql
EXEC google.aiplatform.trials.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@trialsId='{{ trialsId }}' --required;
```
</TabItem>
</Tabs>
