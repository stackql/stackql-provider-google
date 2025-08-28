--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_integrations_versions_get"
    values={[
        { label: 'projects_locations_products_integrations_versions_get', value: 'projects_locations_products_integrations_versions_get' },
        { label: 'projects_locations_products_integrations_versions_list', value: 'projects_locations_products_integrations_versions_list' },
        { label: 'projects_locations_integrations_versions_get', value: 'projects_locations_integrations_versions_get' },
        { label: 'projects_locations_integrations_versions_list', value: 'projects_locations_integrations_versions_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_versions_get">

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
    <td>Output only. Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudKmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS resource name for the CMEK encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingDetails" /></td>
    <td><code>object</code></td>
    <td>Optional. Cloud Logging details for the integration version (id: GoogleCloudIntegrationsV1alphaCloudLoggingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional. The resource name of the template from which the integration is created.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePersistencePolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The integration description.</td>
</tr>
<tr>
    <td><CopyableCode code="enableVariableMasking" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if variable masking feature should be turned on for this version</td>
</tr>
<tr>
    <td><CopyableCode code="errorCatcherConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Error Catch Task configuration for the integration. It's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfigParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Config Parameters that are expected to be passed to the integration when an integration is published. This consists of all the parameters that are expected to provide configuration in the integration execution. This gives the user the ability to provide default values, value, add information like connection url, project based configuration value and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParametersInternal" /></td>
    <td><code>object</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter. (id: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="lockHolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>Optional. The origin that indicates where this integration is coming from.</td>
</tr>
<tr>
    <td><CopyableCode code="parentTemplateId" /></td>
    <td><code>string</code></td>
    <td>Optional. The id of the template which was used to create this integration_version.</td>
</tr>
<tr>
    <td><CopyableCode code="runAsServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. Generated by eventbus. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="teardown" /></td>
    <td><code>object</code></td>
    <td>Optional. Contains a graph of tasks that will be executed before putting the event in a terminal state (SUCCEEDED/FAILED/FATAL), regardless of success or failure, similar to "finally" in code. (id: EnterpriseCrmEventbusProtoTeardown)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabel" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_integrations_versions_list">

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
    <td>Output only. Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudKmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS resource name for the CMEK encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingDetails" /></td>
    <td><code>object</code></td>
    <td>Optional. Cloud Logging details for the integration version (id: GoogleCloudIntegrationsV1alphaCloudLoggingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional. The resource name of the template from which the integration is created.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePersistencePolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The integration description.</td>
</tr>
<tr>
    <td><CopyableCode code="enableVariableMasking" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if variable masking feature should be turned on for this version</td>
</tr>
<tr>
    <td><CopyableCode code="errorCatcherConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Error Catch Task configuration for the integration. It's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfigParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Config Parameters that are expected to be passed to the integration when an integration is published. This consists of all the parameters that are expected to provide configuration in the integration execution. This gives the user the ability to provide default values, value, add information like connection url, project based configuration value and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParametersInternal" /></td>
    <td><code>object</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter. (id: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="lockHolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>Optional. The origin that indicates where this integration is coming from.</td>
</tr>
<tr>
    <td><CopyableCode code="parentTemplateId" /></td>
    <td><code>string</code></td>
    <td>Optional. The id of the template which was used to create this integration_version.</td>
</tr>
<tr>
    <td><CopyableCode code="runAsServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. Generated by eventbus. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="teardown" /></td>
    <td><code>object</code></td>
    <td>Optional. Contains a graph of tasks that will be executed before putting the event in a terminal state (SUCCEEDED/FAILED/FATAL), regardless of success or failure, similar to "finally" in code. (id: EnterpriseCrmEventbusProtoTeardown)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabel" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_versions_get">

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
    <td>Output only. Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudKmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS resource name for the CMEK encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingDetails" /></td>
    <td><code>object</code></td>
    <td>Optional. Cloud Logging details for the integration version (id: GoogleCloudIntegrationsV1alphaCloudLoggingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional. The resource name of the template from which the integration is created.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePersistencePolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The integration description.</td>
</tr>
<tr>
    <td><CopyableCode code="enableVariableMasking" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if variable masking feature should be turned on for this version</td>
</tr>
<tr>
    <td><CopyableCode code="errorCatcherConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Error Catch Task configuration for the integration. It's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfigParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Config Parameters that are expected to be passed to the integration when an integration is published. This consists of all the parameters that are expected to provide configuration in the integration execution. This gives the user the ability to provide default values, value, add information like connection url, project based configuration value and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParametersInternal" /></td>
    <td><code>object</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter. (id: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="lockHolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>Optional. The origin that indicates where this integration is coming from.</td>
</tr>
<tr>
    <td><CopyableCode code="parentTemplateId" /></td>
    <td><code>string</code></td>
    <td>Optional. The id of the template which was used to create this integration_version.</td>
</tr>
<tr>
    <td><CopyableCode code="runAsServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. Generated by eventbus. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="teardown" /></td>
    <td><code>object</code></td>
    <td>Optional. Contains a graph of tasks that will be executed before putting the event in a terminal state (SUCCEEDED/FAILED/FATAL), regardless of success or failure, similar to "finally" in code. (id: EnterpriseCrmEventbusProtoTeardown)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabel" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_integrations_versions_list">

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
    <td>Output only. Auto-generated primary key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudKmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS resource name for the CMEK encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingDetails" /></td>
    <td><code>object</code></td>
    <td>Optional. Cloud Logging details for the integration version (id: GoogleCloudIntegrationsV1alphaCloudLoggingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional. The resource name of the template from which the integration is created.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePersistencePolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The integration description.</td>
</tr>
<tr>
    <td><CopyableCode code="enableVariableMasking" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if variable masking feature should be turned on for this version</td>
</tr>
<tr>
    <td><CopyableCode code="errorCatcherConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Error Catch Task configuration for the integration. It's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfigParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Config Parameters that are expected to be passed to the integration when an integration is published. This consists of all the parameters that are expected to provide configuration in the integration execution. This gives the user the ability to provide default values, value, add information like connection url, project based configuration value and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParameters" /></td>
    <td><code>array</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationParametersInternal" /></td>
    <td><code>object</code></td>
    <td>Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter. (id: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifierEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="lockHolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>Optional. The origin that indicates where this integration is coming from.</td>
</tr>
<tr>
    <td><CopyableCode code="parentTemplateId" /></td>
    <td><code>string</code></td>
    <td>Optional. The id of the template which was used to create this integration_version.</td>
</tr>
<tr>
    <td><CopyableCode code="runAsServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. Generated by eventbus. User should not set it as an input.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="taskConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.</td>
</tr>
<tr>
    <td><CopyableCode code="teardown" /></td>
    <td><code>object</code></td>
    <td>Optional. Contains a graph of tasks that will be executed before putting the event in a terminal state (SUCCEEDED/FAILED/FATAL), regardless of success or failure, similar to "finally" in code. (id: EnterpriseCrmEventbusProtoTeardown)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigsInternal" /></td>
    <td><code>array</code></td>
    <td>Optional. Trigger configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="userLabel" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.</td>
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
    <td><a href="#projects_locations_products_integrations_versions_get"><CopyableCode code="projects_locations_products_integrations_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Get a integration in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_list"><CopyableCode code="projects_locations_products_integrations_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a></td>
    <td>Returns the list of all integration versions in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_get"><CopyableCode code="projects_locations_integrations_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Get a integration in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_list"><CopyableCode code="projects_locations_integrations_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a></td>
    <td>Returns the list of all integration versions in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_create"><CopyableCode code="projects_locations_products_integrations_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td><a href="#parameter-newIntegration"><code>newIntegration</code></a>, <a href="#parameter-createSampleIntegrations"><code>createSampleIntegrations</code></a></td>
    <td>Create a integration with a draft version in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_create"><CopyableCode code="projects_locations_integrations_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td><a href="#parameter-newIntegration"><code>newIntegration</code></a>, <a href="#parameter-createSampleIntegrations"><code>createSampleIntegrations</code></a></td>
    <td>Create a integration with a draft version in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_patch"><CopyableCode code="projects_locations_products_integrations_versions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a integration with a draft version in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_patch"><CopyableCode code="projects_locations_integrations_versions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a integration with a draft version in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_delete"><CopyableCode code="projects_locations_products_integrations_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_delete"><CopyableCode code="projects_locations_integrations_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_publish"><CopyableCode code="projects_locations_products_integrations_versions_publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_upload"><CopyableCode code="projects_locations_products_integrations_versions_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_download"><CopyableCode code="projects_locations_products_integrations_versions_download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-fileFormat"><code>fileFormat</code></a>, <a href="#parameter-files"><code>files</code></a></td>
    <td>Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_takeover_edit_lock"><CopyableCode code="projects_locations_products_integrations_versions_takeover_edit_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_integrations_versions_unpublish"><CopyableCode code="projects_locations_products_integrations_versions_unpublish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_publish"><CopyableCode code="projects_locations_integrations_versions_publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_upload"><CopyableCode code="projects_locations_integrations_versions_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a></td>
    <td></td>
    <td>Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_download"><CopyableCode code="projects_locations_integrations_versions_download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-fileFormat"><code>fileFormat</code></a>, <a href="#parameter-files"><code>files</code></a></td>
    <td>Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_download_json_package"><CopyableCode code="projects_locations_integrations_versions_download_json_package" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-files"><code>files</code></a></td>
    <td>Downloads an Integration version package like IntegrationVersion,Integration Config etc. Retrieves the IntegrationVersion package for a given `integration_id` and returns the response as a JSON.</td>
</tr>
<tr>
    <td><a href="#projects_locations_integrations_versions_unpublish"><CopyableCode code="projects_locations_integrations_versions_unpublish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-integrationsId"><code>integrationsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.</td>
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
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-createSampleIntegrations">
    <td><CopyableCode code="createSampleIntegrations" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-fieldMask">
    <td><CopyableCode code="fieldMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-fileFormat">
    <td><CopyableCode code="fileFormat" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-files">
    <td><CopyableCode code="files" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-newIntegration">
    <td><CopyableCode code="newIntegration" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_products_integrations_versions_get"
    values={[
        { label: 'projects_locations_products_integrations_versions_get', value: 'projects_locations_products_integrations_versions_get' },
        { label: 'projects_locations_products_integrations_versions_list', value: 'projects_locations_products_integrations_versions_list' },
        { label: 'projects_locations_integrations_versions_get', value: 'projects_locations_integrations_versions_get' },
        { label: 'projects_locations_integrations_versions_list', value: 'projects_locations_integrations_versions_list' }
    ]}
>
<TabItem value="projects_locations_products_integrations_versions_get">

Get a integration in the specified project.

```sql
SELECT
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel
FROM google.integrations.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_integrations_versions_list">

Returns the list of all integration versions in the specified project.

```sql
SELECT
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel
FROM google.integrations.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND fieldMask = '{{ fieldMask }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_get">

Get a integration in the specified project.

```sql
SELECT
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel
FROM google.integrations.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_list">

Returns the list of all integration versions in the specified project.

```sql
SELECT
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel
FROM google.integrations.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND integrationsId = '{{ integrationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND fieldMask = '{{ fieldMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_products_integrations_versions_create"
    values={[
        { label: 'projects_locations_products_integrations_versions_create', value: 'projects_locations_products_integrations_versions_create' },
        { label: 'projects_locations_integrations_versions_create', value: 'projects_locations_integrations_versions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_integrations_versions_create">

Create a integration with a draft version in the specified project.

```sql
INSERT INTO google.integrations.versions (
data__description,
data__taskConfigsInternal,
data__taskConfigs,
data__triggerConfigsInternal,
data__triggerConfigs,
data__integrationParametersInternal,
data__integrationParameters,
data__teardown,
data__origin,
data__lockHolder,
data__lastModifierEmail,
data__parentTemplateId,
data__userLabel,
data__databasePersistencePolicy,
data__errorCatcherConfigs,
data__runAsServiceAccount,
data__cloudLoggingDetails,
data__integrationConfigParameters,
data__enableVariableMasking,
data__createdFromTemplate,
data__cloudKmsKey,
projectsId,
locationsId,
productsId,
integrationsId,
newIntegration,
createSampleIntegrations
)
SELECT 
'{{ description }}',
'{{ taskConfigsInternal }}',
'{{ taskConfigs }}',
'{{ triggerConfigsInternal }}',
'{{ triggerConfigs }}',
'{{ integrationParametersInternal }}',
'{{ integrationParameters }}',
'{{ teardown }}',
'{{ origin }}',
'{{ lockHolder }}',
'{{ lastModifierEmail }}',
'{{ parentTemplateId }}',
'{{ userLabel }}',
'{{ databasePersistencePolicy }}',
'{{ errorCatcherConfigs }}',
'{{ runAsServiceAccount }}',
'{{ cloudLoggingDetails }}',
'{{ integrationConfigParameters }}',
{{ enableVariableMasking }},
'{{ createdFromTemplate }}',
'{{ cloudKmsKey }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}',
'{{ integrationsId }}',
'{{ newIntegration }}',
'{{ createSampleIntegrations }}'
RETURNING
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel
;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_create">

Create a integration with a draft version in the specified project.

```sql
INSERT INTO google.integrations.versions (
data__description,
data__taskConfigsInternal,
data__taskConfigs,
data__triggerConfigsInternal,
data__triggerConfigs,
data__integrationParametersInternal,
data__integrationParameters,
data__teardown,
data__origin,
data__lockHolder,
data__lastModifierEmail,
data__parentTemplateId,
data__userLabel,
data__databasePersistencePolicy,
data__errorCatcherConfigs,
data__runAsServiceAccount,
data__cloudLoggingDetails,
data__integrationConfigParameters,
data__enableVariableMasking,
data__createdFromTemplate,
data__cloudKmsKey,
projectsId,
locationsId,
integrationsId,
newIntegration,
createSampleIntegrations
)
SELECT 
'{{ description }}',
'{{ taskConfigsInternal }}',
'{{ taskConfigs }}',
'{{ triggerConfigsInternal }}',
'{{ triggerConfigs }}',
'{{ integrationParametersInternal }}',
'{{ integrationParameters }}',
'{{ teardown }}',
'{{ origin }}',
'{{ lockHolder }}',
'{{ lastModifierEmail }}',
'{{ parentTemplateId }}',
'{{ userLabel }}',
'{{ databasePersistencePolicy }}',
'{{ errorCatcherConfigs }}',
'{{ runAsServiceAccount }}',
'{{ cloudLoggingDetails }}',
'{{ integrationConfigParameters }}',
{{ enableVariableMasking }},
'{{ createdFromTemplate }}',
'{{ cloudKmsKey }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ integrationsId }}',
'{{ newIntegration }}',
'{{ createSampleIntegrations }}'
RETURNING
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: versions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the versions resource.
    - name: locationsId
      value: string
      description: Required parameter for the versions resource.
    - name: productsId
      value: string
      description: Required parameter for the versions resource.
    - name: integrationsId
      value: string
      description: Required parameter for the versions resource.
    - name: description
      value: string
      description: >
        Optional. The integration description.
        
    - name: taskConfigsInternal
      value: array
      description: >
        Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.
        
    - name: taskConfigs
      value: array
      description: >
        Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.
        
    - name: triggerConfigsInternal
      value: array
      description: >
        Optional. Trigger configurations.
        
    - name: triggerConfigs
      value: array
      description: >
        Optional. Trigger configurations.
        
    - name: integrationParametersInternal
      value: object
      description: >
        Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.
        
    - name: integrationParameters
      value: array
      description: >
        Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.
        
    - name: teardown
      value: object
      description: >
        Optional. Contains a graph of tasks that will be executed before putting the event in a terminal state (SUCCEEDED/FAILED/FATAL), regardless of success or failure, similar to "finally" in code.
        
    - name: origin
      value: string
      description: >
        Optional. The origin that indicates where this integration is coming from.
        
      valid_values: ['UNSPECIFIED', 'UI', 'PIPER_V2', 'PIPER_V3', 'APPLICATION_IP_PROVISIONING', 'TEST_CASE']
    - name: lockHolder
      value: string
      description: >
        Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: lastModifierEmail
      value: string
      description: >
        Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
        
    - name: parentTemplateId
      value: string
      description: >
        Optional. The id of the template which was used to create this integration_version.
        
    - name: userLabel
      value: string
      description: >
        Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.
        
    - name: databasePersistencePolicy
      value: string
      description: >
        Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.
        
      valid_values: ['DATABASE_PERSISTENCE_POLICY_UNSPECIFIED', 'DATABASE_PERSISTENCE_DISABLED', 'DATABASE_PERSISTENCE_ASYNC']
    - name: errorCatcherConfigs
      value: array
      description: >
        Optional. Error Catch Task configuration for the integration. It's optional.
        
    - name: runAsServiceAccount
      value: string
      description: >
        Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task.
        
    - name: cloudLoggingDetails
      value: object
      description: >
        Optional. Cloud Logging details for the integration version
        
    - name: integrationConfigParameters
      value: array
      description: >
        Optional. Config Parameters that are expected to be passed to the integration when an integration is published. This consists of all the parameters that are expected to provide configuration in the integration execution. This gives the user the ability to provide default values, value, add information like connection url, project based configuration value and also provide data types of each parameter.
        
    - name: enableVariableMasking
      value: boolean
      description: >
        Optional. True if variable masking feature should be turned on for this version
        
    - name: createdFromTemplate
      value: string
      description: >
        Optional. Optional. The resource name of the template from which the integration is created.
        
    - name: cloudKmsKey
      value: string
      description: >
        Optional. Cloud KMS resource name for the CMEK encryption key.
        
    - name: newIntegration
      value: boolean
    - name: createSampleIntegrations
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_products_integrations_versions_patch"
    values={[
        { label: 'projects_locations_products_integrations_versions_patch', value: 'projects_locations_products_integrations_versions_patch' },
        { label: 'projects_locations_integrations_versions_patch', value: 'projects_locations_integrations_versions_patch' }
    ]}
>
<TabItem value="projects_locations_products_integrations_versions_patch">

Update a integration with a draft version in the specified project.

```sql
UPDATE google.integrations.versions
SET 
data__description = '{{ description }}',
data__taskConfigsInternal = '{{ taskConfigsInternal }}',
data__taskConfigs = '{{ taskConfigs }}',
data__triggerConfigsInternal = '{{ triggerConfigsInternal }}',
data__triggerConfigs = '{{ triggerConfigs }}',
data__integrationParametersInternal = '{{ integrationParametersInternal }}',
data__integrationParameters = '{{ integrationParameters }}',
data__teardown = '{{ teardown }}',
data__origin = '{{ origin }}',
data__lockHolder = '{{ lockHolder }}',
data__lastModifierEmail = '{{ lastModifierEmail }}',
data__parentTemplateId = '{{ parentTemplateId }}',
data__userLabel = '{{ userLabel }}',
data__databasePersistencePolicy = '{{ databasePersistencePolicy }}',
data__errorCatcherConfigs = '{{ errorCatcherConfigs }}',
data__runAsServiceAccount = '{{ runAsServiceAccount }}',
data__cloudLoggingDetails = '{{ cloudLoggingDetails }}',
data__integrationConfigParameters = '{{ integrationConfigParameters }}',
data__enableVariableMasking = {{ enableVariableMasking }},
data__createdFromTemplate = '{{ createdFromTemplate }}',
data__cloudKmsKey = '{{ cloudKmsKey }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_patch">

Update a integration with a draft version in the specified project.

```sql
UPDATE google.integrations.versions
SET 
data__description = '{{ description }}',
data__taskConfigsInternal = '{{ taskConfigsInternal }}',
data__taskConfigs = '{{ taskConfigs }}',
data__triggerConfigsInternal = '{{ triggerConfigsInternal }}',
data__triggerConfigs = '{{ triggerConfigs }}',
data__integrationParametersInternal = '{{ integrationParametersInternal }}',
data__integrationParameters = '{{ integrationParameters }}',
data__teardown = '{{ teardown }}',
data__origin = '{{ origin }}',
data__lockHolder = '{{ lockHolder }}',
data__lastModifierEmail = '{{ lastModifierEmail }}',
data__parentTemplateId = '{{ parentTemplateId }}',
data__userLabel = '{{ userLabel }}',
data__databasePersistencePolicy = '{{ databasePersistencePolicy }}',
data__errorCatcherConfigs = '{{ errorCatcherConfigs }}',
data__runAsServiceAccount = '{{ runAsServiceAccount }}',
data__cloudLoggingDetails = '{{ cloudLoggingDetails }}',
data__integrationConfigParameters = '{{ integrationConfigParameters }}',
data__enableVariableMasking = {{ enableVariableMasking }},
data__createdFromTemplate = '{{ createdFromTemplate }}',
data__cloudKmsKey = '{{ cloudKmsKey }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
cloudKmsKey,
cloudLoggingDetails,
createTime,
createdFromTemplate,
databasePersistencePolicy,
description,
enableVariableMasking,
errorCatcherConfigs,
integrationConfigParameters,
integrationParameters,
integrationParametersInternal,
lastModifierEmail,
lockHolder,
origin,
parentTemplateId,
runAsServiceAccount,
snapshotNumber,
state,
status,
taskConfigs,
taskConfigsInternal,
teardown,
triggerConfigs,
triggerConfigsInternal,
updateTime,
userLabel;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_products_integrations_versions_delete"
    values={[
        { label: 'projects_locations_products_integrations_versions_delete', value: 'projects_locations_products_integrations_versions_delete' },
        { label: 'projects_locations_integrations_versions_delete', value: 'projects_locations_integrations_versions_delete' }
    ]}
>
<TabItem value="projects_locations_products_integrations_versions_delete">

Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.

```sql
DELETE FROM google.integrations.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required
AND versionsId = '{{ versionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_delete">

Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.

```sql
DELETE FROM google.integrations.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND integrationsId = '{{ integrationsId }}' --required
AND versionsId = '{{ versionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_products_integrations_versions_publish"
    values={[
        { label: 'projects_locations_products_integrations_versions_publish', value: 'projects_locations_products_integrations_versions_publish' },
        { label: 'projects_locations_products_integrations_versions_upload', value: 'projects_locations_products_integrations_versions_upload' },
        { label: 'projects_locations_products_integrations_versions_download', value: 'projects_locations_products_integrations_versions_download' },
        { label: 'projects_locations_products_integrations_versions_takeover_edit_lock', value: 'projects_locations_products_integrations_versions_takeover_edit_lock' },
        { label: 'projects_locations_products_integrations_versions_unpublish', value: 'projects_locations_products_integrations_versions_unpublish' },
        { label: 'projects_locations_integrations_versions_publish', value: 'projects_locations_integrations_versions_publish' },
        { label: 'projects_locations_integrations_versions_upload', value: 'projects_locations_integrations_versions_upload' },
        { label: 'projects_locations_integrations_versions_download', value: 'projects_locations_integrations_versions_download' },
        { label: 'projects_locations_integrations_versions_download_json_package', value: 'projects_locations_integrations_versions_download_json_package' },
        { label: 'projects_locations_integrations_versions_unpublish', value: 'projects_locations_integrations_versions_unpublish' }
    ]}
>
<TabItem value="projects_locations_products_integrations_versions_publish">

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

```sql
EXEC google.integrations.versions.projects_locations_products_integrations_versions_publish 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"configParameters": "{{ configParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_products_integrations_versions_upload">

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

```sql
EXEC google.integrations.versions.projects_locations_products_integrations_versions_upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"content": "{{ content }}", 
"fileFormat": "{{ fileFormat }}"
}';
```
</TabItem>
<TabItem value="projects_locations_products_integrations_versions_download">

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

```sql
EXEC google.integrations.versions.projects_locations_products_integrations_versions_download 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@fileFormat='{{ fileFormat }}', 
@files='{{ files }}';
```
</TabItem>
<TabItem value="projects_locations_products_integrations_versions_takeover_edit_lock">

Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.

```sql
EXEC google.integrations.versions.projects_locations_products_integrations_versions_takeover_edit_lock 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_products_integrations_versions_unpublish">

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

```sql
EXEC google.integrations.versions.projects_locations_products_integrations_versions_unpublish 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@productsId='{{ productsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_publish">

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

```sql
EXEC google.integrations.versions.projects_locations_integrations_versions_publish 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"configParameters": "{{ configParameters }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_upload">

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

```sql
EXEC google.integrations.versions.projects_locations_integrations_versions_upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required 
@@json=
'{
"content": "{{ content }}", 
"fileFormat": "{{ fileFormat }}"
}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_download">

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

```sql
EXEC google.integrations.versions.projects_locations_integrations_versions_download 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@fileFormat='{{ fileFormat }}', 
@files='{{ files }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_download_json_package">

Downloads an Integration version package like IntegrationVersion,Integration Config etc. Retrieves the IntegrationVersion package for a given `integration_id` and returns the response as a JSON.

```sql
EXEC google.integrations.versions.projects_locations_integrations_versions_download_json_package 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required, 
@files='{{ files }}';
```
</TabItem>
<TabItem value="projects_locations_integrations_versions_unpublish">

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

```sql
EXEC google.integrations.versions.projects_locations_integrations_versions_unpublish 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@integrationsId='{{ integrationsId }}' --required, 
@versionsId='{{ versionsId }}' --required;
```
</TabItem>
</Tabs>
