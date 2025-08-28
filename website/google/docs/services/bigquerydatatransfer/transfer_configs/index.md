--- 
title: transfer_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - transfer_configs
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

Creates, updates, deletes, gets or lists a <code>transfer_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>transfer_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatatransfer.transfer_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_transfer_configs_get"
    values={[
        { label: 'projects_locations_transfer_configs_get', value: 'projects_locations_transfer_configs_get' },
        { label: 'projects_transfer_configs_get', value: 'projects_transfer_configs_get' },
        { label: 'projects_locations_transfer_configs_list', value: 'projects_locations_transfer_configs_list' },
        { label: 'projects_transfer_configs_list', value: 'projects_transfer_configs_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_get">

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
    <td>Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/&#123;project_id&#125;/locations/&#123;region&#125;/transferConfigs/&#123;config_id&#125;` or `projects/&#123;project_id&#125;/transferConfigs/&#123;config_id&#125;`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRefreshWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list</td>
</tr>
<tr>
    <td><CopyableCode code="datasetRegion" /></td>
    <td><code>string</code></td>
    <td>Output only. Region in which BigQuery dataset is located.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Is this config disabled. When set to true, no runs will be scheduled for this transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified display name for the data transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent. (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Error code with detailed information about reason of the latest config failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="nextRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Next time when data transfer will run.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="ownerInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated. (id: UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptions" /></td>
    <td><code>object</code></td>
    <td>Options customizing the data transfer schedule. (id: ScheduleOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptionsV2" /></td>
    <td><code>object</code></td>
    <td>Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule. (id: ScheduleOptionsV2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the most recently updated transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Data transfer modification time. Ignored by server on input.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_get">

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
    <td>Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/&#123;project_id&#125;/locations/&#123;region&#125;/transferConfigs/&#123;config_id&#125;` or `projects/&#123;project_id&#125;/transferConfigs/&#123;config_id&#125;`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRefreshWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list</td>
</tr>
<tr>
    <td><CopyableCode code="datasetRegion" /></td>
    <td><code>string</code></td>
    <td>Output only. Region in which BigQuery dataset is located.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Is this config disabled. When set to true, no runs will be scheduled for this transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified display name for the data transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent. (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Error code with detailed information about reason of the latest config failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="nextRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Next time when data transfer will run.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="ownerInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated. (id: UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptions" /></td>
    <td><code>object</code></td>
    <td>Options customizing the data transfer schedule. (id: ScheduleOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptionsV2" /></td>
    <td><code>object</code></td>
    <td>Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule. (id: ScheduleOptionsV2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the most recently updated transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Data transfer modification time. Ignored by server on input.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_transfer_configs_list">

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
    <td>Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/&#123;project_id&#125;/locations/&#123;region&#125;/transferConfigs/&#123;config_id&#125;` or `projects/&#123;project_id&#125;/transferConfigs/&#123;config_id&#125;`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRefreshWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list</td>
</tr>
<tr>
    <td><CopyableCode code="datasetRegion" /></td>
    <td><code>string</code></td>
    <td>Output only. Region in which BigQuery dataset is located.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Is this config disabled. When set to true, no runs will be scheduled for this transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified display name for the data transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent. (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Error code with detailed information about reason of the latest config failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="nextRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Next time when data transfer will run.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="ownerInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated. (id: UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptions" /></td>
    <td><code>object</code></td>
    <td>Options customizing the data transfer schedule. (id: ScheduleOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptionsV2" /></td>
    <td><code>object</code></td>
    <td>Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule. (id: ScheduleOptionsV2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the most recently updated transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Data transfer modification time. Ignored by server on input.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string (int64)</code></td>
    <td>Deprecated. Unique ID of the user on whose behalf transfer is done.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_list">

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
    <td>Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/&#123;project_id&#125;/locations/&#123;region&#125;/transferConfigs/&#123;config_id&#125;` or `projects/&#123;project_id&#125;/transferConfigs/&#123;config_id&#125;`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRefreshWindowDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list</td>
</tr>
<tr>
    <td><CopyableCode code="datasetRegion" /></td>
    <td><code>string</code></td>
    <td>Output only. Region in which BigQuery dataset is located.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationDatasetId" /></td>
    <td><code>string</code></td>
    <td>The BigQuery target dataset id.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Is this config disabled. When set to true, no runs will be scheduled for this transfer config.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified display name for the data transfer.</td>
</tr>
<tr>
    <td><CopyableCode code="emailPreferences" /></td>
    <td><code>object</code></td>
    <td>Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config. (id: EmailPreferences)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent. (id: EncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. Error code with detailed information about reason of the latest config failure. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="nextRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Next time when data transfer will run.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/&#123;project_id&#125;/topics/&#123;topic_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="ownerInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated. (id: UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptions" /></td>
    <td><code>object</code></td>
    <td>Options customizing the data transfer schedule. (id: ScheduleOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleOptionsV2" /></td>
    <td><code>object</code></td>
    <td>Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule. (id: ScheduleOptionsV2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the most recently updated transfer run.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Data transfer modification time. Ignored by server on input.</td>
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
    <td><a href="#projects_locations_transfer_configs_get"><CopyableCode code="projects_locations_transfer_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Returns information about a data transfer config.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_get"><CopyableCode code="projects_transfer_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Returns information about a data transfer config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_list"><CopyableCode code="projects_locations_transfer_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dataSourceIds"><code>dataSourceIds</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Returns information about all transfer configs owned by a project in the specified location.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_list"><CopyableCode code="projects_transfer_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-dataSourceIds"><code>dataSourceIds</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Returns information about all transfer configs owned by a project in the specified location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_create"><CopyableCode code="projects_locations_transfer_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-authorizationCode"><code>authorizationCode</code></a>, <a href="#parameter-versionInfo"><code>versionInfo</code></a>, <a href="#parameter-serviceAccountName"><code>serviceAccountName</code></a></td>
    <td>Creates a new data transfer configuration.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_create"><CopyableCode code="projects_transfer_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-authorizationCode"><code>authorizationCode</code></a>, <a href="#parameter-versionInfo"><code>versionInfo</code></a>, <a href="#parameter-serviceAccountName"><code>serviceAccountName</code></a></td>
    <td>Creates a new data transfer configuration.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_patch"><CopyableCode code="projects_locations_transfer_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td><a href="#parameter-authorizationCode"><code>authorizationCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-versionInfo"><code>versionInfo</code></a>, <a href="#parameter-serviceAccountName"><code>serviceAccountName</code></a></td>
    <td>Updates a data transfer configuration. All fields must be set, even if they are not updated.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_patch"><CopyableCode code="projects_transfer_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td><a href="#parameter-authorizationCode"><code>authorizationCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-versionInfo"><code>versionInfo</code></a>, <a href="#parameter-serviceAccountName"><code>serviceAccountName</code></a></td>
    <td>Updates a data transfer configuration. All fields must be set, even if they are not updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_delete"><CopyableCode code="projects_locations_transfer_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Deletes a data transfer configuration, including any associated transfer runs and logs.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_delete"><CopyableCode code="projects_transfer_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Deletes a data transfer configuration, including any associated transfer runs and logs.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_schedule_runs"><CopyableCode code="projects_transfer_configs_schedule_runs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_start_manual_runs"><CopyableCode code="projects_transfer_configs_start_manual_runs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_schedule_runs"><CopyableCode code="projects_locations_transfer_configs_schedule_runs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_start_manual_runs"><CopyableCode code="projects_locations_transfer_configs_start_manual_runs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td></td>
    <td>Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.</td>
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
<tr id="parameter-transferConfigsId">
    <td><CopyableCode code="transferConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-authorizationCode">
    <td><CopyableCode code="authorizationCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataSourceIds">
    <td><CopyableCode code="dataSourceIds" /></td>
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
<tr id="parameter-serviceAccountName">
    <td><CopyableCode code="serviceAccountName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-versionInfo">
    <td><CopyableCode code="versionInfo" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_get"
    values={[
        { label: 'projects_locations_transfer_configs_get', value: 'projects_locations_transfer_configs_get' },
        { label: 'projects_transfer_configs_get', value: 'projects_transfer_configs_get' },
        { label: 'projects_locations_transfer_configs_list', value: 'projects_locations_transfer_configs_list' },
        { label: 'projects_transfer_configs_list', value: 'projects_transfer_configs_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_get">

Returns information about a data transfer config.

```sql
SELECT
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.transfer_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_transfer_configs_get">

Returns information about a data transfer config.

```sql
SELECT
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.transfer_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_transfer_configs_list">

Returns information about all transfer configs owned by a project in the specified location.

```sql
SELECT
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.transfer_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataSourceIds = '{{ dataSourceIds }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="projects_transfer_configs_list">

Returns information about all transfer configs owned by a project in the specified location.

```sql
SELECT
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId
FROM google.bigquerydatatransfer.transfer_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND dataSourceIds = '{{ dataSourceIds }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_create"
    values={[
        { label: 'projects_locations_transfer_configs_create', value: 'projects_locations_transfer_configs_create' },
        { label: 'projects_transfer_configs_create', value: 'projects_transfer_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_create">

Creates a new data transfer configuration.

```sql
INSERT INTO google.bigquerydatatransfer.transfer_configs (
data__name,
data__destinationDatasetId,
data__displayName,
data__dataSourceId,
data__params,
data__schedule,
data__scheduleOptions,
data__scheduleOptionsV2,
data__dataRefreshWindowDays,
data__disabled,
data__userId,
data__notificationPubsubTopic,
data__emailPreferences,
data__encryptionConfiguration,
projectsId,
locationsId,
authorizationCode,
versionInfo,
serviceAccountName
)
SELECT 
'{{ name }}',
'{{ destinationDatasetId }}',
'{{ displayName }}',
'{{ dataSourceId }}',
'{{ params }}',
'{{ schedule }}',
'{{ scheduleOptions }}',
'{{ scheduleOptionsV2 }}',
{{ dataRefreshWindowDays }},
{{ disabled }},
'{{ userId }}',
'{{ notificationPubsubTopic }}',
'{{ emailPreferences }}',
'{{ encryptionConfiguration }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authorizationCode }}',
'{{ versionInfo }}',
'{{ serviceAccountName }}'
RETURNING
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId
;
```
</TabItem>
<TabItem value="projects_transfer_configs_create">

Creates a new data transfer configuration.

```sql
INSERT INTO google.bigquerydatatransfer.transfer_configs (
data__name,
data__destinationDatasetId,
data__displayName,
data__dataSourceId,
data__params,
data__schedule,
data__scheduleOptions,
data__scheduleOptionsV2,
data__dataRefreshWindowDays,
data__disabled,
data__userId,
data__notificationPubsubTopic,
data__emailPreferences,
data__encryptionConfiguration,
projectsId,
authorizationCode,
versionInfo,
serviceAccountName
)
SELECT 
'{{ name }}',
'{{ destinationDatasetId }}',
'{{ displayName }}',
'{{ dataSourceId }}',
'{{ params }}',
'{{ schedule }}',
'{{ scheduleOptions }}',
'{{ scheduleOptionsV2 }}',
{{ dataRefreshWindowDays }},
{{ disabled }},
'{{ userId }}',
'{{ notificationPubsubTopic }}',
'{{ emailPreferences }}',
'{{ encryptionConfiguration }}',
'{{ projectsId }}',
'{{ authorizationCode }}',
'{{ versionInfo }}',
'{{ serviceAccountName }}'
RETURNING
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: transfer_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the transfer_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the transfer_configs resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
        
    - name: destinationDatasetId
      value: string
      description: >
        The BigQuery target dataset id.
        
    - name: displayName
      value: string
      description: >
        User specified display name for the data transfer.
        
    - name: dataSourceId
      value: string
      description: >
        Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list
        
    - name: params
      value: object
      description: >
        Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
        
    - name: schedule
      value: string
      description: >
        Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.
        
    - name: scheduleOptions
      value: object
      description: >
        Options customizing the data transfer schedule.
        
    - name: scheduleOptionsV2
      value: object
      description: >
        Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule.
        
    - name: dataRefreshWindowDays
      value: integer
      description: >
        The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.
        
    - name: disabled
      value: boolean
      description: >
        Is this config disabled. When set to true, no runs will be scheduled for this transfer config.
        
    - name: userId
      value: string
      description: >
        Deprecated. Unique ID of the user on whose behalf transfer is done.
        
    - name: notificationPubsubTopic
      value: string
      description: >
        Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project_id}/topics/{topic_id}`
        
    - name: emailPreferences
      value: object
      description: >
        Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.
        
    - name: encryptionConfiguration
      value: object
      description: >
        The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent.
        
    - name: authorizationCode
      value: string
    - name: versionInfo
      value: string
    - name: serviceAccountName
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_patch"
    values={[
        { label: 'projects_locations_transfer_configs_patch', value: 'projects_locations_transfer_configs_patch' },
        { label: 'projects_transfer_configs_patch', value: 'projects_transfer_configs_patch' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_patch">

Updates a data transfer configuration. All fields must be set, even if they are not updated.

```sql
UPDATE google.bigquerydatatransfer.transfer_configs
SET 
data__name = '{{ name }}',
data__destinationDatasetId = '{{ destinationDatasetId }}',
data__displayName = '{{ displayName }}',
data__dataSourceId = '{{ dataSourceId }}',
data__params = '{{ params }}',
data__schedule = '{{ schedule }}',
data__scheduleOptions = '{{ scheduleOptions }}',
data__scheduleOptionsV2 = '{{ scheduleOptionsV2 }}',
data__dataRefreshWindowDays = {{ dataRefreshWindowDays }},
data__disabled = {{ disabled }},
data__userId = '{{ userId }}',
data__notificationPubsubTopic = '{{ notificationPubsubTopic }}',
data__emailPreferences = '{{ emailPreferences }}',
data__encryptionConfiguration = '{{ encryptionConfiguration }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND transferConfigsId = '{{ transferConfigsId }}' --required
AND authorizationCode = '{{ authorizationCode}}'
AND updateMask = '{{ updateMask}}'
AND versionInfo = '{{ versionInfo}}'
AND serviceAccountName = '{{ serviceAccountName}}'
RETURNING
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId;
```
</TabItem>
<TabItem value="projects_transfer_configs_patch">

Updates a data transfer configuration. All fields must be set, even if they are not updated.

```sql
UPDATE google.bigquerydatatransfer.transfer_configs
SET 
data__name = '{{ name }}',
data__destinationDatasetId = '{{ destinationDatasetId }}',
data__displayName = '{{ displayName }}',
data__dataSourceId = '{{ dataSourceId }}',
data__params = '{{ params }}',
data__schedule = '{{ schedule }}',
data__scheduleOptions = '{{ scheduleOptions }}',
data__scheduleOptionsV2 = '{{ scheduleOptionsV2 }}',
data__dataRefreshWindowDays = {{ dataRefreshWindowDays }},
data__disabled = {{ disabled }},
data__userId = '{{ userId }}',
data__notificationPubsubTopic = '{{ notificationPubsubTopic }}',
data__emailPreferences = '{{ emailPreferences }}',
data__encryptionConfiguration = '{{ encryptionConfiguration }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND transferConfigsId = '{{ transferConfigsId }}' --required
AND authorizationCode = '{{ authorizationCode}}'
AND updateMask = '{{ updateMask}}'
AND versionInfo = '{{ versionInfo}}'
AND serviceAccountName = '{{ serviceAccountName}}'
RETURNING
name,
dataRefreshWindowDays,
dataSourceId,
datasetRegion,
destinationDatasetId,
disabled,
displayName,
emailPreferences,
encryptionConfiguration,
error,
nextRunTime,
notificationPubsubTopic,
ownerInfo,
params,
schedule,
scheduleOptions,
scheduleOptionsV2,
state,
updateTime,
userId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_delete"
    values={[
        { label: 'projects_locations_transfer_configs_delete', value: 'projects_locations_transfer_configs_delete' },
        { label: 'projects_transfer_configs_delete', value: 'projects_transfer_configs_delete' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_delete">

Deletes a data transfer configuration, including any associated transfer runs and logs.

```sql
DELETE FROM google.bigquerydatatransfer.transfer_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND transferConfigsId = '{{ transferConfigsId }}' --required;
```
</TabItem>
<TabItem value="projects_transfer_configs_delete">

Deletes a data transfer configuration, including any associated transfer runs and logs.

```sql
DELETE FROM google.bigquerydatatransfer.transfer_configs
WHERE projectsId = '{{ projectsId }}' --required
AND transferConfigsId = '{{ transferConfigsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_transfer_configs_schedule_runs"
    values={[
        { label: 'projects_transfer_configs_schedule_runs', value: 'projects_transfer_configs_schedule_runs' },
        { label: 'projects_transfer_configs_start_manual_runs', value: 'projects_transfer_configs_start_manual_runs' },
        { label: 'projects_locations_transfer_configs_schedule_runs', value: 'projects_locations_transfer_configs_schedule_runs' },
        { label: 'projects_locations_transfer_configs_start_manual_runs', value: 'projects_locations_transfer_configs_start_manual_runs' }
    ]}
>
<TabItem value="projects_transfer_configs_schedule_runs">

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

```sql
EXEC google.bigquerydatatransfer.transfer_configs.projects_transfer_configs_schedule_runs 
@projectsId='{{ projectsId }}' --required, 
@transferConfigsId='{{ transferConfigsId }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}"
}';
```
</TabItem>
<TabItem value="projects_transfer_configs_start_manual_runs">

Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.

```sql
EXEC google.bigquerydatatransfer.transfer_configs.projects_transfer_configs_start_manual_runs 
@projectsId='{{ projectsId }}' --required, 
@transferConfigsId='{{ transferConfigsId }}' --required 
@@json=
'{
"requestedTimeRange": "{{ requestedTimeRange }}", 
"requestedRunTime": "{{ requestedRunTime }}"
}';
```
</TabItem>
<TabItem value="projects_locations_transfer_configs_schedule_runs">

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

```sql
EXEC google.bigquerydatatransfer.transfer_configs.projects_locations_transfer_configs_schedule_runs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@transferConfigsId='{{ transferConfigsId }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}"
}';
```
</TabItem>
<TabItem value="projects_locations_transfer_configs_start_manual_runs">

Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.

```sql
EXEC google.bigquerydatatransfer.transfer_configs.projects_locations_transfer_configs_start_manual_runs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@transferConfigsId='{{ transferConfigsId }}' --required 
@@json=
'{
"requestedTimeRange": "{{ requestedTimeRange }}", 
"requestedRunTime": "{{ requestedRunTime }}"
}';
```
</TabItem>
</Tabs>
