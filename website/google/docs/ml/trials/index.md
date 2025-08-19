--- 
title: trials
hide_title: false
hide_table_of_contents: false
keywords:
  - trials
  - ml
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.trials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_studies_trials_get"
    values={[
        { label: 'projects_locations_studies_trials_get', value: 'projects_locations_studies_trials_get' },
        { label: 'projects_locations_studies_trials_list', value: 'projects_locations_studies_trials_list' }
    ]}
>
<TabItem value="projects_locations_studies_trials_get">

A message representing a trial.

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
    <td>Output only. Name of the trial assigned by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the client that originally requested this trial.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the trial's status changed to COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="finalMeasurement" /></td>
    <td><code>object</code></td>
    <td>The final measurement containing the objective value. (id: GoogleCloudMlV1__Measurement)</td>
</tr>
<tr>
    <td><CopyableCode code="infeasibleReason" /></td>
    <td><code>string</code></td>
    <td>Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true.</td>
</tr>
<tr>
    <td><CopyableCode code="measurements" /></td>
    <td><code>array</code></td>
    <td>A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>The parameters of the trial.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the trial was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The detailed state of a trial.</td>
</tr>
<tr>
    <td><CopyableCode code="trialInfeasible" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, the parameters in this trial are not attempted again.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_studies_trials_list">

The response message for the ListTrials method.

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
    <td><CopyableCode code="trials" /></td>
    <td><code>array</code></td>
    <td>The trials associated with the study.</td>
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
    <td><a href="#projects_locations_studies_trials_get"><CopyableCode code="projects_locations_studies_trials_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Gets a trial.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_list"><CopyableCode code="projects_locations_studies_trials_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Lists the trials associated with a study.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_create"><CopyableCode code="projects_locations_studies_trials_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Adds a user provided trial to a study.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_delete"><CopyableCode code="projects_locations_studies_trials_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Deletes a trial.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_suggest"><CopyableCode code="projects_locations_studies_trials_suggest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a></td>
    <td></td>
    <td>Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_complete"><CopyableCode code="projects_locations_studies_trials_complete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Marks a trial as complete.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_check_early_stopping_state"><CopyableCode code="projects_locations_studies_trials_check_early_stopping_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.</td>
</tr>
<tr>
    <td><a href="#projects_locations_studies_trials_stop"><CopyableCode code="projects_locations_studies_trials_stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-studiesId"><code>studiesId</code></a>, <a href="#parameter-trialsId"><code>trialsId</code></a></td>
    <td></td>
    <td>Stops a trial.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_studies_trials_get"
    values={[
        { label: 'projects_locations_studies_trials_get', value: 'projects_locations_studies_trials_get' },
        { label: 'projects_locations_studies_trials_list', value: 'projects_locations_studies_trials_list' }
    ]}
>
<TabItem value="projects_locations_studies_trials_get">

Gets a trial.

```sql
SELECT
name,
clientId,
endTime,
finalMeasurement,
infeasibleReason,
measurements,
parameters,
startTime,
state,
trialInfeasible
FROM google.ml.trials
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND studiesId = '{{ studiesId }}' -- required
AND trialsId = '{{ trialsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_studies_trials_list">

Lists the trials associated with a study.

```sql
SELECT
trials
FROM google.ml.trials
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND studiesId = '{{ studiesId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_studies_trials_create"
    values={[
        { label: 'projects_locations_studies_trials_create', value: 'projects_locations_studies_trials_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_studies_trials_create">

Adds a user provided trial to a study.

```sql
INSERT INTO google.ml.trials (
data__state,
data__parameters,
data__finalMeasurement,
data__measurements,
projectsId,
locationsId,
studiesId
)
SELECT 
'{{ state }}',
'{{ parameters }}',
'{{ finalMeasurement }}',
'{{ measurements }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ studiesId }}'
RETURNING
name,
clientId,
endTime,
finalMeasurement,
infeasibleReason,
measurements,
parameters,
startTime,
state,
trialInfeasible
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
    - name: state
      value: string
      description: >
        The detailed state of a trial.
        
      valid_values: ['STATE_UNSPECIFIED', 'REQUESTED', 'ACTIVE', 'COMPLETED', 'STOPPING']
    - name: parameters
      value: array
      description: >
        The parameters of the trial.
        
    - name: finalMeasurement
      value: object
      description: >
        The final measurement containing the objective value.
        
    - name: measurements
      value: array
      description: >
        A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_studies_trials_delete"
    values={[
        { label: 'projects_locations_studies_trials_delete', value: 'projects_locations_studies_trials_delete' }
    ]}
>
<TabItem value="projects_locations_studies_trials_delete">

Deletes a trial.

```sql
DELETE FROM google.ml.trials
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND studiesId = '{{ studiesId }}' --required
AND trialsId = '{{ trialsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_studies_trials_suggest"
    values={[
        { label: 'projects_locations_studies_trials_suggest', value: 'projects_locations_studies_trials_suggest' },
        { label: 'projects_locations_studies_trials_complete', value: 'projects_locations_studies_trials_complete' },
        { label: 'projects_locations_studies_trials_check_early_stopping_state', value: 'projects_locations_studies_trials_check_early_stopping_state' },
        { label: 'projects_locations_studies_trials_stop', value: 'projects_locations_studies_trials_stop' }
    ]}
>
<TabItem value="projects_locations_studies_trials_suggest">

Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

```sql
EXEC google.ml.trials.projects_locations_studies_trials_suggest 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required 
@@json=
'{
"suggestionCount": {{ suggestionCount }}, 
"clientId": "{{ clientId }}"
}';
```
</TabItem>
<TabItem value="projects_locations_studies_trials_complete">

Marks a trial as complete.

```sql
EXEC google.ml.trials.projects_locations_studies_trials_complete 
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
<TabItem value="projects_locations_studies_trials_check_early_stopping_state">

Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

```sql
EXEC google.ml.trials.projects_locations_studies_trials_check_early_stopping_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@trialsId='{{ trialsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_studies_trials_stop">

Stops a trial.

```sql
EXEC google.ml.trials.projects_locations_studies_trials_stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@studiesId='{{ studiesId }}' --required, 
@trialsId='{{ trialsId }}' --required;
```
</TabItem>
</Tabs>
