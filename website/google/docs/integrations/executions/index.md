--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - integrations
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>executions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_integrations_executions_get"
    values={[
        { label: 'projects_locations_products_integrations_executions_get', value: 'projects_locations_products_integrations_executions_get' },
        { label: 'projects_locations_products_integrations_executions_list', value: 'projects_locations_products_integrations_executions_list' },
        { label: 'projects_locations_integrations_executions_get', value: 'projects_locations_integrations_executions_get' },
        { label: 'projects_locations_integrations_executions_list', value: 'projects_locations_integrations_executions_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_executions_get">

The Execution resource contains detailed information of an individual integration execution.

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
    <td>Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudKmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS resource name for the CMEK encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingDetails" /></td>
    <td><code>object</code></td>
    <td>Cloud Logging details for the integration version (id: GoogleCloudIntegrationsV1alphaCloudLoggingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Created time of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="directSubExecutions" /></td>
    <td><code>array</code></td>
    <td>Direct sub executions of the following Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="eventExecutionDetails" /></td>
    <td><code>object</code></td>
    <td>The execution info about this event. (id: EnterpriseCrmEventbusProtoEventExecutionDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="executionDetails" /></td>
    <td><code>object</code></td>
    <td>Detailed info of this execution. (id: GoogleCloudIntegrationsV1alphaExecutionDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="executionMethod" /></td>
    <td><code>string</code></td>
    <td>The ways user posts this event.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationVersionState" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the integration version</td>
</tr>
<tr>
    <td><CopyableCode code="replayInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Replay info for the execution (id: GoogleCloudIntegrationsV1alphaExecutionReplayInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestParameters" /></td>
    <td><code>object</code></td>
    <td>Event parameters come in as part of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="requestParams" /></td>
    <td><code>array</code></td>
    <td>Event parameters come in as part of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="responseParameters" /></td>
    <td><code>object</code></td>
    <td>Event parameters returned as part of the response. In the case of error, the `ErrorInfo` field is returned in the following format: &#123; "ErrorInfo": &#123; "message": String, "code": Number &#125; &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="responseParams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="snapshotNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. An increasing sequence that is set when a new snapshot is created</td>
</tr>
<tr>
    <td><CopyableCode code="triggerId" /></td>
    <td><code>string</code></td>
    <td>The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last modified time of the execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_integrations_executions_list">

Response for listing the integration execution data.

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
    <td><CopyableCode code="executionInfos" /></td>
    <td><code>array</code></td>
    <td>Required. The detailed information of requested executions.</td>
</tr>
<tr>
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>The detailed information of requested executions</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_executions_get">

The Execution resource contains detailed information of an individual integration execution.

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
    <td>Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudKmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS resource name for the CMEK encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingDetails" /></td>
    <td><code>object</code></td>
    <td>Cloud Logging details for the integration version (id: GoogleCloudIntegrationsV1alphaCloudLoggingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Created time of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="directSubExecutions" /></td>
    <td><code>array</code></td>
    <td>Direct sub executions of the following Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="eventExecutionDetails" /></td>
    <td><code>object</code></td>
    <td>The execution info about this event. (id: EnterpriseCrmEventbusProtoEventExecutionDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="executionDetails" /></td>
    <td><code>object</code></td>
    <td>Detailed info of this execution. (id: GoogleCloudIntegrationsV1alphaExecutionDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="executionMethod" /></td>
    <td><code>string</code></td>
    <td>The ways user posts this event.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationVersionState" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the integration version</td>
</tr>
<tr>
    <td><CopyableCode code="replayInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Replay info for the execution (id: GoogleCloudIntegrationsV1alphaExecutionReplayInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="requestParameters" /></td>
    <td><code>object</code></td>
    <td>Event parameters come in as part of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="requestParams" /></td>
    <td><code>array</code></td>
    <td>Event parameters come in as part of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="responseParameters" /></td>
    <td><code>object</code></td>
    <td>Event parameters returned as part of the response. In the case of error, the `ErrorInfo` field is returned in the following format: &#123; "ErrorInfo": &#123; "message": String, "code": Number &#125; &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="responseParams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="snapshotNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. An increasing sequence that is set when a new snapshot is created</td>
</tr>
<tr>
    <td><CopyableCode code="triggerId" /></td>
    <td><code>string</code></td>
    <td>The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last modified time of the execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_executions_list">

Response for listing the integration execution data.

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
    <td><CopyableCode code="executionInfos" /></td>
    <td><code>array</code></td>
    <td>Required. The detailed information of requested executions.</td>
</tr>
<tr>
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>The detailed information of requested executions</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page results.</td>
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
    <td><a href="#projects_locations_products_integrations_executions_get"><CopyableCode code="projects_locations_products_integrations_executions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Get an execution in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_executions_list"><CopyableCode code="projects_locations_products_integrations_executions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-filterParams.workflowName"><code>filterParams.workflowName</code></a>, <a href="#parameter-filterParams.startTime"><code>filterParams.startTime</code></a>, <a href="#parameter-filterParams.endTime"><code>filterParams.endTime</code></a>, <a href="#parameter-filterParams.eventStatuses"><code>filterParams.eventStatuses</code></a>, <a href="#parameter-filterParams.taskStatuses"><code>filterParams.taskStatuses</code></a>, <a href="#parameter-filterParams.customFilter"><code>filterParams.customFilter</code></a>, <a href="#parameter-filterParams.executionId"><code>filterParams.executionId</code></a>, <a href="#parameter-filterParams.parameterValue"><code>filterParams.parameterValue</code></a>, <a href="#parameter-filterParams.parameterType"><code>filterParams.parameterType</code></a>, <a href="#parameter-filterParams.parameterKey"><code>filterParams.parameterKey</code></a>, <a href="#parameter-filterParams.parameterPairKey"><code>filterParams.parameterPairKey</code></a>, <a href="#parameter-filterParams.parameterPairValue"><code>filterParams.parameterPairValue</code></a>, <a href="#parameter-refreshAcl"><code>refreshAcl</code></a>, <a href="#parameter-truncateParams"><code>truncateParams</code></a>, <a href="#parameter-snapshotMetadataWithoutParams"><code>snapshotMetadataWithoutParams</code></a></td>
    <td>Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_get"><CopyableCode code="projects_locations_integrations_executions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Get an execution in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_list"><CopyableCode code="projects_locations_integrations_executions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-filterParams.workflowName"><code>filterParams.workflowName</code></a>, <a href="#parameter-filterParams.startTime"><code>filterParams.startTime</code></a>, <a href="#parameter-filterParams.endTime"><code>filterParams.endTime</code></a>, <a href="#parameter-filterParams.eventStatuses"><code>filterParams.eventStatuses</code></a>, <a href="#parameter-filterParams.taskStatuses"><code>filterParams.taskStatuses</code></a>, <a href="#parameter-filterParams.customFilter"><code>filterParams.customFilter</code></a>, <a href="#parameter-filterParams.executionId"><code>filterParams.executionId</code></a>, <a href="#parameter-filterParams.parameterValue"><code>filterParams.parameterValue</code></a>, <a href="#parameter-filterParams.parameterType"><code>filterParams.parameterType</code></a>, <a href="#parameter-filterParams.parameterKey"><code>filterParams.parameterKey</code></a>, <a href="#parameter-filterParams.parameterPairKey"><code>filterParams.parameterPairKey</code></a>, <a href="#parameter-filterParams.parameterPairValue"><code>filterParams.parameterPairValue</code></a>, <a href="#parameter-refreshAcl"><code>refreshAcl</code></a>, <a href="#parameter-truncateParams"><code>truncateParams</code></a>, <a href="#parameter-snapshotMetadataWithoutParams"><code>snapshotMetadataWithoutParams</code></a></td>
    <td>Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_executions_download"><CopyableCode code="projects_locations_products_integrations_executions_download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Download the execution.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_cancel"><CopyableCode code="projects_locations_integrations_executions_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Cancellation of an execution and associated sub-executions. This will not cancel an IN_PROCESS or completed(SUCCESSFUL, FAILED or CANCELLED) executions.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_download"><CopyableCode code="projects_locations_integrations_executions_download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Download the execution.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_executions_replay"><CopyableCode code="projects_locations_integrations_executions_replay" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Re-execute an existing execution, with same request parameters and execution strategy.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-integrationsId">
    <td><CopyableCode code="integrationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
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
<tr id="parameter-filterParams.customFilter">
    <td><CopyableCode code="filterParams.customFilter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.endTime">
    <td><CopyableCode code="filterParams.endTime" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.eventStatuses">
    <td><CopyableCode code="filterParams.eventStatuses" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.executionId">
    <td><CopyableCode code="filterParams.executionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.parameterKey">
    <td><CopyableCode code="filterParams.parameterKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.parameterPairKey">
    <td><CopyableCode code="filterParams.parameterPairKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.parameterPairValue">
    <td><CopyableCode code="filterParams.parameterPairValue" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.parameterType">
    <td><CopyableCode code="filterParams.parameterType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.parameterValue">
    <td><CopyableCode code="filterParams.parameterValue" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.startTime">
    <td><CopyableCode code="filterParams.startTime" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.taskStatuses">
    <td><CopyableCode code="filterParams.taskStatuses" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filterParams.workflowName">
    <td><CopyableCode code="filterParams.workflowName" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-refreshAcl">
    <td><CopyableCode code="refreshAcl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-snapshotMetadataWithoutParams">
    <td><CopyableCode code="snapshotMetadataWithoutParams" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-truncateParams">
    <td><CopyableCode code="truncateParams" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_products_integrations_executions_get"
    values={[
        { label: 'projects_locations_products_integrations_executions_get', value: 'projects_locations_products_integrations_executions_get' },
        { label: 'projects_locations_products_integrations_executions_list', value: 'projects_locations_products_integrations_executions_list' },
        { label: 'projects_locations_integrations_executions_get', value: 'projects_locations_integrations_executions_get' },
        { label: 'projects_locations_integrations_executions_list', value: 'projects_locations_integrations_executions_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_executions_get">

Get an execution in the specified project.

```sql
SELECT
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
directSubExecutions,
eventExecutionDetails,
executionDetails,
executionMethod,
integrationVersionState,
replayInfo,
requestParameters,
requestParams,
responseParameters,
responseParams,
snapshotNumber,
triggerId,
updateTime
FROM google.integrations.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_integrations_executions_list">

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

```sql
SELECT
executionInfos,
executions,
nextPageToken
FROM google.integrations.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND readMask = '{{ readMask }}'
AND filterParams.workflowName = '{{ filterParams.workflowName }}'
AND filterParams.startTime = '{{ filterParams.startTime }}'
AND filterParams.endTime = '{{ filterParams.endTime }}'
AND filterParams.eventStatuses = '{{ filterParams.eventStatuses }}'
AND filterParams.taskStatuses = '{{ filterParams.taskStatuses }}'
AND filterParams.customFilter = '{{ filterParams.customFilter }}'
AND filterParams.executionId = '{{ filterParams.executionId }}'
AND filterParams.parameterValue = '{{ filterParams.parameterValue }}'
AND filterParams.parameterType = '{{ filterParams.parameterType }}'
AND filterParams.parameterKey = '{{ filterParams.parameterKey }}'
AND filterParams.parameterPairKey = '{{ filterParams.parameterPairKey }}'
AND filterParams.parameterPairValue = '{{ filterParams.parameterPairValue }}'
AND refreshAcl = '{{ refreshAcl }}'
AND truncateParams = '{{ truncateParams }}'
AND snapshotMetadataWithoutParams = '{{ snapshotMetadataWithoutParams }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_get">

Get an execution in the specified project.

```sql
SELECT
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
directSubExecutions,
eventExecutionDetails,
executionDetails,
executionMethod,
integrationVersionState,
replayInfo,
requestParameters,
requestParams,
responseParameters,
responseParams,
snapshotNumber,
triggerId,
updateTime
FROM google.integrations.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND executionsId = '{{ executionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_list">

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

```sql
SELECT
executionInfos,
executions,
nextPageToken
FROM google.integrations.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND readMask = '{{ readMask }}'
AND filterParams.workflowName = '{{ filterParams.workflowName }}'
AND filterParams.startTime = '{{ filterParams.startTime }}'
AND filterParams.endTime = '{{ filterParams.endTime }}'
AND filterParams.eventStatuses = '{{ filterParams.eventStatuses }}'
AND filterParams.taskStatuses = '{{ filterParams.taskStatuses }}'
AND filterParams.customFilter = '{{ filterParams.customFilter }}'
AND filterParams.executionId = '{{ filterParams.executionId }}'
AND filterParams.parameterValue = '{{ filterParams.parameterValue }}'
AND filterParams.parameterType = '{{ filterParams.parameterType }}'
AND filterParams.parameterKey = '{{ filterParams.parameterKey }}'
AND filterParams.parameterPairKey = '{{ filterParams.parameterPairKey }}'
AND filterParams.parameterPairValue = '{{ filterParams.parameterPairValue }}'
AND refreshAcl = '{{ refreshAcl }}'
AND truncateParams = '{{ truncateParams }}'
AND snapshotMetadataWithoutParams = '{{ snapshotMetadataWithoutParams }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_products_integrations_executions_download"
    values={[
        { label: 'projects_locations_products_integrations_executions_download', value: 'projects_locations_products_integrations_executions_download' },
        { label: 'projects_locations_integrations_executions_cancel', value: 'projects_locations_integrations_executions_cancel' },
        { label: 'projects_locations_integrations_executions_download', value: 'projects_locations_integrations_executions_download' },
        { label: 'projects_locations_integrations_executions_replay', value: 'projects_locations_integrations_executions_replay' }
    ]}
>
<TabItem value="projects_locations_products_integrations_executions_download">

Download the execution.

```sql
EXEC google.integrations.executions.projects_locations_products_integrations_executions_download 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_cancel">

Cancellation of an execution and associated sub-executions. This will not cancel an IN_PROCESS or completed(SUCCESSFUL, FAILED or CANCELLED) executions.

```sql
EXEC google.integrations.executions.projects_locations_integrations_executions_cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required 
@@json=
'{
"cancelReason": "{{ cancelReason }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_download">

Download the execution.

```sql
EXEC google.integrations.executions.projects_locations_integrations_executions_download 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_integrations_executions_replay">

Re-execute an existing execution, with same request parameters and execution strategy.

```sql
EXEC google.integrations.executions.projects_locations_integrations_executions_replay 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@executionsId='{{ executionsId }}' --required 
@@json=
'{
"replayReason": "{{ replayReason }}", 
"updateMask": "{{ updateMask }}", 
"modifiedParameters": "{{ modifiedParameters }}", 
"replayMode": "{{ replayMode }}"
}';
```
</TabItem>
</Tabs>
