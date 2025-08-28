--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - run
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.jobs" /></td></tr>
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
    <td>The fully qualified name of this Job. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/jobs/&#123;job&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="client" /></td>
    <td><code>string</code></td>
    <td>Arbitrary identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="clientVersion" /></td>
    <td><code>string</code></td>
    <td>Arbitrary version identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the authenticated creator.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="executionCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of executions created for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCreatedExecution" /></td>
    <td><code>object</code></td>
    <td>Output only. Name of the last created execution. (id: GoogleCloudRunV2ExecutionReference)</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`.</td>
</tr>
<tr>
    <td><CopyableCode code="runExecutionToken" /></td>
    <td><code>string</code></td>
    <td>A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully completed. The sum of job name and token length must be fewer than 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startExecutionToken" /></td>
    <td><code>string</code></td>
    <td>A unique string used as a suffix creating a new execution. The Job will become ready when the execution is successfully started. The sum of job name and token length must be fewer than 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Required. The template used to create executions for this Job. (id: GoogleCloudRunV2ExecutionTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
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
    <td>The fully qualified name of this Job. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/jobs/&#123;job&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="client" /></td>
    <td><code>string</code></td>
    <td>Arbitrary identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="clientVersion" /></td>
    <td><code>string</code></td>
    <td>Arbitrary version identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the authenticated creator.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="executionCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of executions created for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCreatedExecution" /></td>
    <td><code>object</code></td>
    <td>Output only. Name of the last created execution. (id: GoogleCloudRunV2ExecutionReference)</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`.</td>
</tr>
<tr>
    <td><CopyableCode code="runExecutionToken" /></td>
    <td><code>string</code></td>
    <td>A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully completed. The sum of job name and token length must be fewer than 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startExecutionToken" /></td>
    <td><code>string</code></td>
    <td>A unique string used as a suffix creating a new execution. The Job will become ready when the execution is successfully started. The sum of job name and token length must be fewer than 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Required. The template used to create executions for this Job. (id: GoogleCloudRunV2ExecutionTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Gets information about a Job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists Jobs. Results are sorted by creation time, descending.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a Job.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a Job.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a Job.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Triggers creation of a new Execution of this Job.</td>
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
<tr id="parameter-jobsId">
    <td><CopyableCode code="jobsId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Gets information about a Job.

```sql
SELECT
name,
annotations,
binaryAuthorization,
client,
clientVersion,
conditions,
createTime,
creator,
deleteTime,
etag,
executionCount,
expireTime,
generation,
labels,
lastModifier,
latestCreatedExecution,
launchStage,
observedGeneration,
reconciling,
runExecutionToken,
satisfiesPzs,
startExecutionToken,
template,
terminalCondition,
uid,
updateTime
FROM google.run.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Jobs. Results are sorted by creation time, descending.

```sql
SELECT
name,
annotations,
binaryAuthorization,
client,
clientVersion,
conditions,
createTime,
creator,
deleteTime,
etag,
executionCount,
expireTime,
generation,
labels,
lastModifier,
latestCreatedExecution,
launchStage,
observedGeneration,
reconciling,
runExecutionToken,
satisfiesPzs,
startExecutionToken,
template,
terminalCondition,
uid,
updateTime
FROM google.run.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}';
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

Creates a Job.

```sql
INSERT INTO google.run.jobs (
data__name,
data__labels,
data__annotations,
data__client,
data__clientVersion,
data__launchStage,
data__binaryAuthorization,
data__template,
data__startExecutionToken,
data__runExecutionToken,
data__etag,
projectsId,
locationsId,
jobId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ annotations }}',
'{{ client }}',
'{{ clientVersion }}',
'{{ launchStage }}',
'{{ binaryAuthorization }}',
'{{ template }}',
'{{ startExecutionToken }}',
'{{ runExecutionToken }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ jobId }}',
'{{ validateOnly }}'
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
- name: jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the jobs resource.
    - name: name
      value: string
      description: >
        The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job}
        
    - name: labels
      value: object
      description: >
        Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.
        
    - name: annotations
      value: object
      description: >
        Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules.
        
    - name: client
      value: string
      description: >
        Arbitrary identifier for the API client.
        
    - name: clientVersion
      value: string
      description: >
        Arbitrary version identifier for the API client.
        
    - name: launchStage
      value: string
      description: >
        The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
        
      valid_values: ['LAUNCH_STAGE_UNSPECIFIED', 'UNIMPLEMENTED', 'PRELAUNCH', 'EARLY_ACCESS', 'ALPHA', 'BETA', 'GA', 'DEPRECATED']
    - name: binaryAuthorization
      value: object
      description: >
        Settings for the Binary Authorization feature.
        
    - name: template
      value: object
      description: >
        Required. The template used to create executions for this Job.
        
    - name: startExecutionToken
      value: string
      description: >
        A unique string used as a suffix creating a new execution. The Job will become ready when the execution is successfully started. The sum of job name and token length must be fewer than 63 characters.
        
    - name: runExecutionToken
      value: string
      description: >
        A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully completed. The sum of job name and token length must be fewer than 63 characters.
        
    - name: etag
      value: string
      description: >
        Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
        
    - name: jobId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a Job.

```sql
UPDATE google.run.jobs
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}',
data__client = '{{ client }}',
data__clientVersion = '{{ clientVersion }}',
data__launchStage = '{{ launchStage }}',
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__template = '{{ template }}',
data__startExecutionToken = '{{ startExecutionToken }}',
data__runExecutionToken = '{{ runExecutionToken }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND validateOnly = {{ validateOnly}}
AND allowMissing = {{ allowMissing}}
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a Job.

```sql
DELETE FROM google.run.jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="run"
    values={[
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="run">

Triggers creation of a new Execution of this Job.

```sql
EXEC google.run.jobs.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobsId='{{ jobsId }}' --required 
@@json=
'{
"validateOnly": {{ validateOnly }}, 
"etag": "{{ etag }}", 
"overrides": "{{ overrides }}"
}';
```
</TabItem>
</Tabs>
