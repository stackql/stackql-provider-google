--- 
title: model_deployment_monitoring_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_deployment_monitoring_jobs
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

Creates, updates, deletes, gets or lists a <code>model_deployment_monitoring_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>model_deployment_monitoring_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.model_deployment_monitoring_jobs" /></td></tr>
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

Represents a job that runs periodically to monitor the deployed models in an endpoint. It will analyze the logged training & prediction data to detect any abnormal behaviors.

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
    <td>Output only. Resource name of a ModelDeploymentMonitoringJob.</td>
</tr>
<tr>
    <td><CopyableCode code="analysisInstanceSchemaUri" /></td>
    <td><code>string</code></td>
    <td>YAML schema file uri describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze. If this field is empty, all the feature data types are inferred from predict_instance_schema_uri, meaning that TFDV will use the data in the exact format(data type) as prediction request/response. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryTables" /></td>
    <td><code>array</code></td>
    <td>Output only. The created bigquery tables for the job under customer project. Customer could do their own query & analysis. There could be 4 log tables in maximum: 1. Training data logging predict request/response 2. Serving data logging predict request/response</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ModelDeploymentMonitoringJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the ModelDeploymentMonitoringJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. Display name of a ModelDeploymentMonitoringJob.</td>
</tr>
<tr>
    <td><CopyableCode code="enableMonitoringPipelineLogs" /></td>
    <td><code>boolean</code></td>
    <td>If true, the scheduled monitoring pipeline logs are sent to Google Cloud Logging, including pipeline status and anomalies detected. Please note the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging#pricing).</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a ModelDeploymentMonitoringJob. If set, this ModelDeploymentMonitoringJob and all sub-resources of this ModelDeploymentMonitoringJob will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Required. Endpoint resource name. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/endpoints/&#123;endpoint&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your ModelDeploymentMonitoringJob. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="latestMonitoringPipelineMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Latest triggered monitoring pipeline metadata. (id: GoogleCloudAiplatformV1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="logTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The TTL of BigQuery tables in user projects which stores logs. A day is the basic unit of the TTL and we take the ceil of TTL/86400(a day). e.g. &#123; second: 3600&#125; indicates ttl = 1 day.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingSamplingStrategy" /></td>
    <td><code>object</code></td>
    <td>Required. Sample Strategy for logging. (id: GoogleCloudAiplatformV1SamplingStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="modelDeploymentMonitoringObjectiveConfigs" /></td>
    <td><code>array</code></td>
    <td>Required. The config for monitoring objectives. This is a per DeployedModel config. Each DeployedModel needs to be configured separately.</td>
</tr>
<tr>
    <td><CopyableCode code="modelDeploymentMonitoringScheduleConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Schedule config for running the monitoring job. (id: GoogleCloudAiplatformV1ModelDeploymentMonitoringScheduleConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelMonitoringAlertConfig" /></td>
    <td><code>object</code></td>
    <td>Alert config for model monitoring. (id: GoogleCloudAiplatformV1ModelMonitoringAlertConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nextScheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this monitoring pipeline will be scheduled to run for the next round.</td>
</tr>
<tr>
    <td><CopyableCode code="predictInstanceSchemaUri" /></td>
    <td><code>string</code></td>
    <td>YAML schema file uri describing the format of a single instance, which are given to format this Endpoint's prediction (and explanation). If not set, we will generate predict schema from collected predict requests.</td>
</tr>
<tr>
    <td><CopyableCode code="samplePredictInstance" /></td>
    <td><code>any</code></td>
    <td>Sample Predict instance, same format as PredictRequest.instances, this can be set as a replacement of ModelDeploymentMonitoringJob.predict_instance_schema_uri. If not set, we will generate predict schema from collected predict requests.</td>
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
    <td><CopyableCode code="scheduleState" /></td>
    <td><code>string</code></td>
    <td>Output only. Schedule state when the monitoring job is in Running state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the monitoring job. When the job is still creating, the state will be 'PENDING'. Once the job is successfully created, the state will be 'RUNNING'. Pause the job, the state will be 'PAUSED'. Resume the job, the state will return to 'RUNNING'.</td>
</tr>
<tr>
    <td><CopyableCode code="statsAnomaliesBaseDirectory" /></td>
    <td><code>object</code></td>
    <td>Stats anomalies base folder path. (id: GoogleCloudAiplatformV1GcsDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ModelDeploymentMonitoringJob was updated most recently.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for JobService.ListModelDeploymentMonitoringJobs.

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
    <td><CopyableCode code="modelDeploymentMonitoringJobs" /></td>
    <td><code>array</code></td>
    <td>A list of ModelDeploymentMonitoringJobs that matches the specified filter in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The standard List next-page token.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelDeploymentMonitoringJobsId"><code>modelDeploymentMonitoringJobsId</code></a></td>
    <td></td>
    <td>Gets a ModelDeploymentMonitoringJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists ModelDeploymentMonitoringJobs in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a ModelDeploymentMonitoringJob. It will run periodically on a configured interval.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelDeploymentMonitoringJobsId"><code>modelDeploymentMonitoringJobsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ModelDeploymentMonitoringJob.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelDeploymentMonitoringJobsId"><code>modelDeploymentMonitoringJobsId</code></a></td>
    <td></td>
    <td>Deletes a ModelDeploymentMonitoringJob.</td>
</tr>
<tr>
    <td><a href="#search_model_deployment_monitoring_stats_anomalies"><CopyableCode code="search_model_deployment_monitoring_stats_anomalies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelDeploymentMonitoringJobsId"><code>modelDeploymentMonitoringJobsId</code></a></td>
    <td></td>
    <td>Searches Model Monitoring Statistics generated within a given time window.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelDeploymentMonitoringJobsId"><code>modelDeploymentMonitoringJobsId</code></a></td>
    <td></td>
    <td>Pauses a ModelDeploymentMonitoringJob. If the job is running, the server makes a best effort to cancel the job. Will mark ModelDeploymentMonitoringJob.state to 'PAUSED'.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-modelDeploymentMonitoringJobsId"><code>modelDeploymentMonitoringJobsId</code></a></td>
    <td></td>
    <td>Resumes a paused ModelDeploymentMonitoringJob. It will start to run from next scheduled time. A deleted ModelDeploymentMonitoringJob can't be resumed.</td>
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
<tr id="parameter-modelDeploymentMonitoringJobsId">
    <td><CopyableCode code="modelDeploymentMonitoringJobsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
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

Gets a ModelDeploymentMonitoringJob.

```sql
SELECT
name,
analysisInstanceSchemaUri,
bigqueryTables,
createTime,
displayName,
enableMonitoringPipelineLogs,
encryptionSpec,
endpoint,
error,
labels,
latestMonitoringPipelineMetadata,
logTtl,
loggingSamplingStrategy,
modelDeploymentMonitoringObjectiveConfigs,
modelDeploymentMonitoringScheduleConfig,
modelMonitoringAlertConfig,
nextScheduleTime,
predictInstanceSchemaUri,
samplePredictInstance,
satisfiesPzi,
satisfiesPzs,
scheduleState,
state,
statsAnomaliesBaseDirectory,
updateTime
FROM google.aiplatform.model_deployment_monitoring_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND modelDeploymentMonitoringJobsId = '{{ modelDeploymentMonitoringJobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ModelDeploymentMonitoringJobs in a Location.

```sql
SELECT
modelDeploymentMonitoringJobs,
nextPageToken
FROM google.aiplatform.model_deployment_monitoring_jobs
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

Creates a ModelDeploymentMonitoringJob. It will run periodically on a configured interval.

```sql
INSERT INTO google.aiplatform.model_deployment_monitoring_jobs (
data__displayName,
data__endpoint,
data__modelDeploymentMonitoringObjectiveConfigs,
data__modelDeploymentMonitoringScheduleConfig,
data__loggingSamplingStrategy,
data__modelMonitoringAlertConfig,
data__predictInstanceSchemaUri,
data__samplePredictInstance,
data__analysisInstanceSchemaUri,
data__logTtl,
data__labels,
data__statsAnomaliesBaseDirectory,
data__encryptionSpec,
data__enableMonitoringPipelineLogs,
projectsId,
locationsId
)
SELECT 
'{{ displayName }}',
'{{ endpoint }}',
'{{ modelDeploymentMonitoringObjectiveConfigs }}',
'{{ modelDeploymentMonitoringScheduleConfig }}',
'{{ loggingSamplingStrategy }}',
'{{ modelMonitoringAlertConfig }}',
'{{ predictInstanceSchemaUri }}',
'{{ samplePredictInstance }}',
'{{ analysisInstanceSchemaUri }}',
'{{ logTtl }}',
'{{ labels }}',
'{{ statsAnomaliesBaseDirectory }}',
'{{ encryptionSpec }}',
{{ enableMonitoringPipelineLogs }},
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
analysisInstanceSchemaUri,
bigqueryTables,
createTime,
displayName,
enableMonitoringPipelineLogs,
encryptionSpec,
endpoint,
error,
labels,
latestMonitoringPipelineMetadata,
logTtl,
loggingSamplingStrategy,
modelDeploymentMonitoringObjectiveConfigs,
modelDeploymentMonitoringScheduleConfig,
modelMonitoringAlertConfig,
nextScheduleTime,
predictInstanceSchemaUri,
samplePredictInstance,
satisfiesPzi,
satisfiesPzs,
scheduleState,
state,
statsAnomaliesBaseDirectory,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: model_deployment_monitoring_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the model_deployment_monitoring_jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the model_deployment_monitoring_jobs resource.
    - name: displayName
      value: string
      description: >
        Required. The user-defined name of the ModelDeploymentMonitoringJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. Display name of a ModelDeploymentMonitoringJob.
        
    - name: endpoint
      value: string
      description: >
        Required. Endpoint resource name. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
        
    - name: modelDeploymentMonitoringObjectiveConfigs
      value: array
      description: >
        Required. The config for monitoring objectives. This is a per DeployedModel config. Each DeployedModel needs to be configured separately.
        
    - name: modelDeploymentMonitoringScheduleConfig
      value: object
      description: >
        Required. Schedule config for running the monitoring job.
        
    - name: loggingSamplingStrategy
      value: object
      description: >
        Required. Sample Strategy for logging.
        
    - name: modelMonitoringAlertConfig
      value: object
      description: >
        Alert config for model monitoring.
        
    - name: predictInstanceSchemaUri
      value: string
      description: >
        YAML schema file uri describing the format of a single instance, which are given to format this Endpoint's prediction (and explanation). If not set, we will generate predict schema from collected predict requests.
        
    - name: samplePredictInstance
      value: any
      description: >
        Sample Predict instance, same format as PredictRequest.instances, this can be set as a replacement of ModelDeploymentMonitoringJob.predict_instance_schema_uri. If not set, we will generate predict schema from collected predict requests.
        
    - name: analysisInstanceSchemaUri
      value: string
      description: >
        YAML schema file uri describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze. If this field is empty, all the feature data types are inferred from predict_instance_schema_uri, meaning that TFDV will use the data in the exact format(data type) as prediction request/response. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string.
        
    - name: logTtl
      value: string
      description: >
        The TTL of BigQuery tables in user projects which stores logs. A day is the basic unit of the TTL and we take the ceil of TTL/86400(a day). e.g. { second: 3600} indicates ttl = 1 day.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your ModelDeploymentMonitoringJob. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: statsAnomaliesBaseDirectory
      value: object
      description: >
        Stats anomalies base folder path.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key spec for a ModelDeploymentMonitoringJob. If set, this ModelDeploymentMonitoringJob and all sub-resources of this ModelDeploymentMonitoringJob will be secured by this key.
        
    - name: enableMonitoringPipelineLogs
      value: boolean
      description: >
        If true, the scheduled monitoring pipeline logs are sent to Google Cloud Logging, including pipeline status and anomalies detected. Please note the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging#pricing).
        
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

Updates a ModelDeploymentMonitoringJob.

```sql
UPDATE google.aiplatform.model_deployment_monitoring_jobs
SET 
data__displayName = '{{ displayName }}',
data__endpoint = '{{ endpoint }}',
data__modelDeploymentMonitoringObjectiveConfigs = '{{ modelDeploymentMonitoringObjectiveConfigs }}',
data__modelDeploymentMonitoringScheduleConfig = '{{ modelDeploymentMonitoringScheduleConfig }}',
data__loggingSamplingStrategy = '{{ loggingSamplingStrategy }}',
data__modelMonitoringAlertConfig = '{{ modelMonitoringAlertConfig }}',
data__predictInstanceSchemaUri = '{{ predictInstanceSchemaUri }}',
data__samplePredictInstance = '{{ samplePredictInstance }}',
data__analysisInstanceSchemaUri = '{{ analysisInstanceSchemaUri }}',
data__logTtl = '{{ logTtl }}',
data__labels = '{{ labels }}',
data__statsAnomaliesBaseDirectory = '{{ statsAnomaliesBaseDirectory }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__enableMonitoringPipelineLogs = {{ enableMonitoringPipelineLogs }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND modelDeploymentMonitoringJobsId = '{{ modelDeploymentMonitoringJobsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a ModelDeploymentMonitoringJob.

```sql
DELETE FROM google.aiplatform.model_deployment_monitoring_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND modelDeploymentMonitoringJobsId = '{{ modelDeploymentMonitoringJobsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_model_deployment_monitoring_stats_anomalies"
    values={[
        { label: 'search_model_deployment_monitoring_stats_anomalies', value: 'search_model_deployment_monitoring_stats_anomalies' },
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' }
    ]}
>
<TabItem value="search_model_deployment_monitoring_stats_anomalies">

Searches Model Monitoring Statistics generated within a given time window.

```sql
EXEC google.aiplatform.model_deployment_monitoring_jobs.search_model_deployment_monitoring_stats_anomalies 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelDeploymentMonitoringJobsId='{{ modelDeploymentMonitoringJobsId }}' --required 
@@json=
'{
"deployedModelId": "{{ deployedModelId }}", 
"featureDisplayName": "{{ featureDisplayName }}", 
"objectives": "{{ objectives }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}"
}';
```
</TabItem>
<TabItem value="pause">

Pauses a ModelDeploymentMonitoringJob. If the job is running, the server makes a best effort to cancel the job. Will mark ModelDeploymentMonitoringJob.state to 'PAUSED'.

```sql
EXEC google.aiplatform.model_deployment_monitoring_jobs.pause 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelDeploymentMonitoringJobsId='{{ modelDeploymentMonitoringJobsId }}' --required;
```
</TabItem>
<TabItem value="resume">

Resumes a paused ModelDeploymentMonitoringJob. It will start to run from next scheduled time. A deleted ModelDeploymentMonitoringJob can't be resumed.

```sql
EXEC google.aiplatform.model_deployment_monitoring_jobs.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@modelDeploymentMonitoringJobsId='{{ modelDeploymentMonitoringJobsId }}' --required;
```
</TabItem>
</Tabs>
