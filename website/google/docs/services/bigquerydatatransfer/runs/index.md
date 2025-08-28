--- 
title: runs
hide_title: false
hide_table_of_contents: false
keywords:
  - runs
  - bigquerydatatransfer
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

Creates, updates, deletes, gets or lists a <code>runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>runs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatatransfer.runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_transfer_configs_runs_get"
    values={[
        { label: 'projects_locations_transfer_configs_runs_get', value: 'projects_locations_transfer_configs_runs_get' },
        { label: 'projects_transfer_configs_runs_get', value: 'projects_transfer_configs_runs_get' },
        { label: 'projects_locations_transfer_configs_runs_list', value: 'projects_locations_transfer_configs_runs_list' },
        { label: 'projects_transfer_configs_runs_list', value: 'projects_transfer_configs_runs_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_runs_get">

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
    <td>Identifier. The resource name of the transfer run. Transfer run names have the form `projects/&#123;project_id&#125;/locations/&#123;location&#125;/transferConfigs/&#123;config_id&#125;/runs/&#123;run_id&#125;`. The name is ignored when creating a transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Output only. Data source id.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>Output only. The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run ended. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="errorStatus" /></td>
    <td><code>object</code></td>
    <td>Status of the transfer run. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="runTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>For batch transfer runs, specifies the date and time of the data should be ingested.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Minimum time after which a transfer run can be started.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run was started. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Data transfer run state. Ignored for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the data transfer run state was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_runs_get">

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
    <td>Identifier. The resource name of the transfer run. Transfer run names have the form `projects/&#123;project_id&#125;/locations/&#123;location&#125;/transferConfigs/&#123;config_id&#125;/runs/&#123;run_id&#125;`. The name is ignored when creating a transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Output only. Data source id.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>Output only. The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run ended. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="errorStatus" /></td>
    <td><code>object</code></td>
    <td>Status of the transfer run. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="runTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>For batch transfer runs, specifies the date and time of the data should be ingested.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Minimum time after which a transfer run can be started.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run was started. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Data transfer run state. Ignored for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the data transfer run state was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_transfer_configs_runs_list">

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
    <td>Identifier. The resource name of the transfer run. Transfer run names have the form `projects/&#123;project_id&#125;/locations/&#123;location&#125;/transferConfigs/&#123;config_id&#125;/runs/&#123;run_id&#125;`. The name is ignored when creating a transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Output only. Data source id.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>Output only. The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run ended. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="errorStatus" /></td>
    <td><code>object</code></td>
    <td>Status of the transfer run. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="runTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>For batch transfer runs, specifies the date and time of the data should be ingested.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Minimum time after which a transfer run can be started.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run was started. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Data transfer run state. Ignored for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the data transfer run state was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_runs_list">

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
    <td>Identifier. The resource name of the transfer run. Transfer run names have the form `projects/&#123;project_id&#125;/locations/&#123;location&#125;/transferConfigs/&#123;config_id&#125;/runs/&#123;run_id&#125;`. The name is ignored when creating a transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Output only. Data source id.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>Output only. The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run ended. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="errorStatus" /></td>
    <td><code>object</code></td>
    <td>Status of the transfer run. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="runTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>For batch transfer runs, specifies the date and time of the data should be ingested.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Minimum time after which a transfer run can be started.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when transfer run was started. Parameter ignored by server for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Data transfer run state. Ignored for input requests.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last time the data transfer run state was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
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
    <td><a href="#projects_locations_transfer_configs_runs_get"><CopyableCode code="projects_locations_transfer_configs_runs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td></td>
    <td>Returns information about the particular transfer run.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_runs_get"><CopyableCode code="projects_transfer_configs_runs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td></td>
    <td>Returns information about the particular transfer run.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_runs_list"><CopyableCode code="projects_locations_transfer_configs_runs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td><a href="#parameter-states"><code>states</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-runAttempt"><code>runAttempt</code></a></td>
    <td>Returns information about running and completed transfer runs.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_runs_list"><CopyableCode code="projects_transfer_configs_runs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td><a href="#parameter-states"><code>states</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-runAttempt"><code>runAttempt</code></a></td>
    <td>Returns information about running and completed transfer runs.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_runs_delete"><CopyableCode code="projects_locations_transfer_configs_runs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td></td>
    <td>Deletes the specified transfer run.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_runs_delete"><CopyableCode code="projects_transfer_configs_runs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td></td>
    <td>Deletes the specified transfer run.</td>
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
<tr id="parameter-runsId">
    <td><CopyableCode code="runsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-transferConfigsId">
    <td><CopyableCode code="transferConfigsId" /></td>
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
<tr id="parameter-runAttempt">
    <td><CopyableCode code="runAttempt" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-states">
    <td><CopyableCode code="states" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_runs_get"
    values={[
        { label: 'projects_locations_transfer_configs_runs_get', value: 'projects_locations_transfer_configs_runs_get' },
        { label: 'projects_transfer_configs_runs_get', value: 'projects_transfer_configs_runs_get' },
        { label: 'projects_locations_transfer_configs_runs_list', value: 'projects_locations_transfer_configs_runs_list' },
        { label: 'projects_transfer_configs_runs_list', value: 'projects_transfer_configs_runs_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_runs_get">

Returns information about the particular transfer run.

```sql
SELECT
name,
dataSourceId,
destinationDatasetId,
emailPreferences,
endTime,
errorStatus,
notificationPubsubTopic,
params,
runTime,
schedule,
scheduleTime,
startTime,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND runsId = '{{ runsId }}' -- required;
```
</TabItem>
<TabItem value="projects_transfer_configs_runs_get">

Returns information about the particular transfer run.

```sql
SELECT
name,
dataSourceId,
destinationDatasetId,
emailPreferences,
endTime,
errorStatus,
notificationPubsubTopic,
params,
runTime,
schedule,
scheduleTime,
startTime,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.runs
WHERE projectsId = '{{ projectsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND runsId = '{{ runsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_transfer_configs_runs_list">

Returns information about running and completed transfer runs.

```sql
SELECT
name,
dataSourceId,
destinationDatasetId,
emailPreferences,
endTime,
errorStatus,
notificationPubsubTopic,
params,
runTime,
schedule,
scheduleTime,
startTime,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND states = '{{ states }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND runAttempt = '{{ runAttempt }}';
```
</TabItem>
<TabItem value="projects_transfer_configs_runs_list">

Returns information about running and completed transfer runs.

```sql
SELECT
name,
dataSourceId,
destinationDatasetId,
emailPreferences,
endTime,
errorStatus,
notificationPubsubTopic,
params,
runTime,
schedule,
scheduleTime,
startTime,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.runs
WHERE projectsId = '{{ projectsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND states = '{{ states }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND runAttempt = '{{ runAttempt }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_runs_delete"
    values={[
        { label: 'projects_locations_transfer_configs_runs_delete', value: 'projects_locations_transfer_configs_runs_delete' },
        { label: 'projects_transfer_configs_runs_delete', value: 'projects_transfer_configs_runs_delete' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_runs_delete">

Deletes the specified transfer run.

```sql
DELETE FROM google.bigquerydatatransfer.runs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND transferConfigsId = '{{ transferConfigsId }}' --required
AND runsId = '{{ runsId }}' --required;
```
</TabItem>
<TabItem value="projects_transfer_configs_runs_delete">

Deletes the specified transfer run.

```sql
DELETE FROM google.bigquerydatatransfer.runs
WHERE projectsId = '{{ projectsId }}' --required
AND transferConfigsId = '{{ transferConfigsId }}' --required
AND runsId = '{{ runsId }}' --required;
```
</TabItem>
</Tabs>
