--- 
title: hyperparameter_tuning_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - hyperparameter_tuning_jobs
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

Creates, updates, deletes, gets or lists a <code>hyperparameter_tuning_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hyperparameter_tuning_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.hyperparameter_tuning_jobs" /></td></tr>
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
    <td>Output only. Resource name of the HyperparameterTuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the HyperparameterTuningJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a HyperparameterTuningJob. If this is set, then all resources created by the HyperparameterTuningJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob entered any of the following states: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Only populated when job's state is JOB_STATE_FAILED or JOB_STATE_CANCELLED. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize HyperparameterTuningJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="maxFailedTrialCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of failed Trials that need to be seen before failing the HyperparameterTuningJob. If set to 0, Vertex AI decides how many Trials must fail before the whole job fails.</td>
</tr>
<tr>
    <td><CopyableCode code="maxTrialCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. The desired total number of Trials.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelTrialCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. The desired number of Trials to run in parallel.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="studySpec" /></td>
    <td><code>object</code></td>
    <td>Required. Study configuration of the HyperparameterTuningJob. (id: GoogleCloudAiplatformV1StudySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="trialJobSpec" /></td>
    <td><code>object</code></td>
    <td>Required. The spec of a trial job. The same spec applies to the CustomJobs created in all the trials. (id: GoogleCloudAiplatformV1CustomJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="trials" /></td>
    <td><code>array</code></td>
    <td>Output only. Trials of the HyperparameterTuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob was most recently updated.</td>
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
    <td>Output only. Resource name of the HyperparameterTuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the HyperparameterTuningJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a HyperparameterTuningJob. If this is set, then all resources created by the HyperparameterTuningJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob entered any of the following states: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Only populated when job's state is JOB_STATE_FAILED or JOB_STATE_CANCELLED. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize HyperparameterTuningJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="maxFailedTrialCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of failed Trials that need to be seen before failing the HyperparameterTuningJob. If set to 0, Vertex AI decides how many Trials must fail before the whole job fails.</td>
</tr>
<tr>
    <td><CopyableCode code="maxTrialCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. The desired total number of Trials.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelTrialCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. The desired number of Trials to run in parallel.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="studySpec" /></td>
    <td><code>object</code></td>
    <td>Required. Study configuration of the HyperparameterTuningJob. (id: GoogleCloudAiplatformV1StudySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="trialJobSpec" /></td>
    <td><code>object</code></td>
    <td>Required. The spec of a trial job. The same spec applies to the CustomJobs created in all the trials. (id: GoogleCloudAiplatformV1CustomJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="trials" /></td>
    <td><code>array</code></td>
    <td>Output only. Trials of the HyperparameterTuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the HyperparameterTuningJob was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-hyperparameterTuningJobsId"><code>hyperparameterTuningJobsId</code></a></td>
    <td></td>
    <td>Gets a HyperparameterTuningJob</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists HyperparameterTuningJobs in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a HyperparameterTuningJob</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-hyperparameterTuningJobsId"><code>hyperparameterTuningJobsId</code></a></td>
    <td></td>
    <td>Deletes a HyperparameterTuningJob.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-hyperparameterTuningJobsId"><code>hyperparameterTuningJobsId</code></a></td>
    <td></td>
    <td>Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on the HyperparameterTuningJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetHyperparameterTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the HyperparameterTuningJob is not deleted; instead it becomes a job with a HyperparameterTuningJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and HyperparameterTuningJob.state is set to `CANCELLED`.</td>
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
<tr id="parameter-hyperparameterTuningJobsId">
    <td><CopyableCode code="hyperparameterTuningJobsId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets a HyperparameterTuningJob

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
labels,
maxFailedTrialCount,
maxTrialCount,
parallelTrialCount,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
studySpec,
trialJobSpec,
trials,
updateTime
FROM google.aiplatform.hyperparameter_tuning_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND hyperparameterTuningJobsId = '{{ hyperparameterTuningJobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists HyperparameterTuningJobs in a Location.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
labels,
maxFailedTrialCount,
maxTrialCount,
parallelTrialCount,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
studySpec,
trialJobSpec,
trials,
updateTime
FROM google.aiplatform.hyperparameter_tuning_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}';
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

Creates a HyperparameterTuningJob

```sql
INSERT INTO google.aiplatform.hyperparameter_tuning_jobs (
data__displayName,
data__studySpec,
data__maxTrialCount,
data__parallelTrialCount,
data__maxFailedTrialCount,
data__trialJobSpec,
data__labels,
data__encryptionSpec,
projectsId,
locationsId
)
SELECT 
'{{ displayName }}',
'{{ studySpec }}',
{{ maxTrialCount }},
{{ parallelTrialCount }},
{{ maxFailedTrialCount }},
'{{ trialJobSpec }}',
'{{ labels }}',
'{{ encryptionSpec }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
labels,
maxFailedTrialCount,
maxTrialCount,
parallelTrialCount,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
studySpec,
trialJobSpec,
trials,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: hyperparameter_tuning_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the hyperparameter_tuning_jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the hyperparameter_tuning_jobs resource.
    - name: displayName
      value: string
      description: >
        Required. The display name of the HyperparameterTuningJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.
        
    - name: studySpec
      value: object
      description: >
        Required. Study configuration of the HyperparameterTuningJob.
        
    - name: maxTrialCount
      value: integer
      description: >
        Required. The desired total number of Trials.
        
    - name: parallelTrialCount
      value: integer
      description: >
        Required. The desired number of Trials to run in parallel.
        
    - name: maxFailedTrialCount
      value: integer
      description: >
        The number of failed Trials that need to be seen before failing the HyperparameterTuningJob. If set to 0, Vertex AI decides how many Trials must fail before the whole job fails.
        
    - name: trialJobSpec
      value: object
      description: >
        Required. The spec of a trial job. The same spec applies to the CustomJobs created in all the trials.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize HyperparameterTuningJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key options for a HyperparameterTuningJob. If this is set, then all resources created by the HyperparameterTuningJob will be encrypted with the provided encryption key.
        
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

Deletes a HyperparameterTuningJob.

```sql
DELETE FROM google.aiplatform.hyperparameter_tuning_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND hyperparameterTuningJobsId = '{{ hyperparameterTuningJobsId }}' --required;
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

Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on the HyperparameterTuningJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetHyperparameterTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the HyperparameterTuningJob is not deleted; instead it becomes a job with a HyperparameterTuningJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and HyperparameterTuningJob.state is set to `CANCELLED`.

```sql
EXEC google.aiplatform.hyperparameter_tuning_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@hyperparameterTuningJobsId='{{ hyperparameterTuningJobsId }}' --required;
```
</TabItem>
</Tabs>
