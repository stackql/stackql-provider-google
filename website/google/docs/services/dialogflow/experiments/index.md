--- 
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
  - dialogflow
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

Creates, updates, deletes, gets or lists an <code>experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>experiments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.experiments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_get"
    values={[
        { label: 'projects_locations_agents_environments_experiments_get', value: 'projects_locations_agents_environments_experiments_get' },
        { label: 'projects_locations_agents_environments_experiments_list', value: 'projects_locations_agents_environments_experiments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_get">

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
    <td>The name of the experiment. Format: projects//locations//agents//environments//experiments/.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Creation time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the experiment. (id: GoogleCloudDialogflowCxV3ExperimentDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The human-readable description of the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>End time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="experimentLength" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Maximum number of days to run the experiment/rollout. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last update time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Inference result of the experiment. (id: GoogleCloudDialogflowCxV3ExperimentResult)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration for auto rollout. If set, there should be exactly two variants in the experiment (control variant being the default version of the flow), the traffic allocation for the non-control variant will gradually increase to 100% when conditions are met, and eventually replace the control variant to become the default version of the flow. (id: GoogleCloudDialogflowCxV3RolloutConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutFailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutState" /></td>
    <td><code>object</code></td>
    <td>State of the auto rollout process. (id: GoogleCloudDialogflowCxV3RolloutState)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Start time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT-&gt;RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT-&gt;DONE or RUNNING-&gt;DONE.</td>
</tr>
<tr>
    <td><CopyableCode code="variantsHistory" /></td>
    <td><code>array</code></td>
    <td>The history of updates to the experiment variants.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_environments_experiments_list">

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
    <td>The name of the experiment. Format: projects//locations//agents//environments//experiments/.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Creation time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the experiment. (id: GoogleCloudDialogflowCxV3ExperimentDefinition)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The human-readable description of the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>End time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="experimentLength" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Maximum number of days to run the experiment/rollout. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Last update time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Inference result of the experiment. (id: GoogleCloudDialogflowCxV3ExperimentResult)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration for auto rollout. If set, there should be exactly two variants in the experiment (control variant being the default version of the flow), the traffic allocation for the non-control variant will gradually increase to 100% when conditions are met, and eventually replace the control variant to become the default version of the flow. (id: GoogleCloudDialogflowCxV3RolloutConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutFailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutState" /></td>
    <td><code>object</code></td>
    <td>State of the auto rollout process. (id: GoogleCloudDialogflowCxV3RolloutState)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Start time of this experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT-&gt;RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT-&gt;DONE or RUNNING-&gt;DONE.</td>
</tr>
<tr>
    <td><CopyableCode code="variantsHistory" /></td>
    <td><code>array</code></td>
    <td>The history of updates to the experiment variants.</td>
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
    <td><a href="#projects_locations_agents_environments_experiments_get"><CopyableCode code="projects_locations_agents_environments_experiments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Retrieves the specified Experiment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_list"><CopyableCode code="projects_locations_agents_environments_experiments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the list of all experiments in the specified Environment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_create"><CopyableCode code="projects_locations_agents_environments_experiments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates an Experiment in the specified Environment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_patch"><CopyableCode code="projects_locations_agents_environments_experiments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Experiment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_delete"><CopyableCode code="projects_locations_agents_environments_experiments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Deletes the specified Experiment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_start"><CopyableCode code="projects_locations_agents_environments_experiments_start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.</td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_stop"><CopyableCode code="projects_locations_agents_environments_experiments_stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.</td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-experimentsId">
    <td><CopyableCode code="experimentsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_get"
    values={[
        { label: 'projects_locations_agents_environments_experiments_get', value: 'projects_locations_agents_environments_experiments_get' },
        { label: 'projects_locations_agents_environments_experiments_list', value: 'projects_locations_agents_environments_experiments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_get">

Retrieves the specified Experiment.

```sql
SELECT
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory
FROM google.dialogflow.experiments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND experimentsId = '{{ experimentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_experiments_list">

Returns the list of all experiments in the specified Environment.

```sql
SELECT
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory
FROM google.dialogflow.experiments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_create"
    values={[
        { label: 'projects_locations_agents_environments_experiments_create', value: 'projects_locations_agents_environments_experiments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_create">

Creates an Experiment in the specified Environment.

```sql
INSERT INTO google.dialogflow.experiments (
data__name,
data__displayName,
data__description,
data__state,
data__definition,
data__rolloutConfig,
data__rolloutState,
data__rolloutFailureReason,
data__result,
data__createTime,
data__startTime,
data__endTime,
data__lastUpdateTime,
data__experimentLength,
data__variantsHistory,
projectsId,
locationsId,
agentsId,
environmentsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ state }}',
'{{ definition }}',
'{{ rolloutConfig }}',
'{{ rolloutState }}',
'{{ rolloutFailureReason }}',
'{{ result }}',
'{{ createTime }}',
'{{ startTime }}',
'{{ endTime }}',
'{{ lastUpdateTime }}',
'{{ experimentLength }}',
'{{ variantsHistory }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ environmentsId }}'
RETURNING
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: experiments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the experiments resource.
    - name: locationsId
      value: string
      description: Required parameter for the experiments resource.
    - name: agentsId
      value: string
      description: Required parameter for the experiments resource.
    - name: environmentsId
      value: string
      description: Required parameter for the experiments resource.
    - name: name
      value: string
      description: >
        The name of the experiment. Format: projects//locations//agents//environments//experiments/.
        
    - name: displayName
      value: string
      description: >
        Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters.
        
    - name: description
      value: string
      description: >
        The human-readable description of the experiment.
        
    - name: state
      value: string
      description: >
        The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT->RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT->DONE or RUNNING->DONE.
        
      valid_values: ['STATE_UNSPECIFIED', 'DRAFT', 'RUNNING', 'DONE', 'ROLLOUT_FAILED']
    - name: definition
      value: object
      description: >
        The definition of the experiment.
        
    - name: rolloutConfig
      value: object
      description: >
        The configuration for auto rollout. If set, there should be exactly two variants in the experiment (control variant being the default version of the flow), the traffic allocation for the non-control variant will gradually increase to 100% when conditions are met, and eventually replace the control variant to become the default version of the flow.
        
    - name: rolloutState
      value: object
      description: >
        State of the auto rollout process.
        
    - name: rolloutFailureReason
      value: string
      description: >
        The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED.
        
    - name: result
      value: object
      description: >
        Inference result of the experiment.
        
    - name: createTime
      value: string
      description: >
        Creation time of this experiment.
        
    - name: startTime
      value: string
      description: >
        Start time of this experiment.
        
    - name: endTime
      value: string
      description: >
        End time of this experiment.
        
    - name: lastUpdateTime
      value: string
      description: >
        Last update time of this experiment.
        
    - name: experimentLength
      value: string
      description: >
        Maximum number of days to run the experiment/rollout. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days.
        
    - name: variantsHistory
      value: array
      description: >
        The history of updates to the experiment variants.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_patch"
    values={[
        { label: 'projects_locations_agents_environments_experiments_patch', value: 'projects_locations_agents_environments_experiments_patch' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_patch">

Updates the specified Experiment.

```sql
UPDATE google.dialogflow.experiments
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__state = '{{ state }}',
data__definition = '{{ definition }}',
data__rolloutConfig = '{{ rolloutConfig }}',
data__rolloutState = '{{ rolloutState }}',
data__rolloutFailureReason = '{{ rolloutFailureReason }}',
data__result = '{{ result }}',
data__createTime = '{{ createTime }}',
data__startTime = '{{ startTime }}',
data__endTime = '{{ endTime }}',
data__lastUpdateTime = '{{ lastUpdateTime }}',
data__experimentLength = '{{ experimentLength }}',
data__variantsHistory = '{{ variantsHistory }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_delete"
    values={[
        { label: 'projects_locations_agents_environments_experiments_delete', value: 'projects_locations_agents_environments_experiments_delete' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_delete">

Deletes the specified Experiment.

```sql
DELETE FROM google.dialogflow.experiments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_start"
    values={[
        { label: 'projects_locations_agents_environments_experiments_start', value: 'projects_locations_agents_environments_experiments_start' },
        { label: 'projects_locations_agents_environments_experiments_stop', value: 'projects_locations_agents_environments_experiments_stop' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_start">

Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.

```sql
EXEC google.dialogflow.experiments.projects_locations_agents_environments_experiments_start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_experiments_stop">

Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.

```sql
EXEC google.dialogflow.experiments.projects_locations_agents_environments_experiments_stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required;
```
</TabItem>
</Tabs>
