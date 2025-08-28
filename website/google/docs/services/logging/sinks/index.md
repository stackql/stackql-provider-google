--- 
title: sinks
hide_title: false
hide_table_of_contents: false
keywords:
  - sinks
  - logging
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

Creates, updates, deletes, gets or lists a <code>sinks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sinks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.sinks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="sinks_list"
    values={[
        { label: 'sinks_list', value: 'sinks_list' },
        { label: 'projects_sinks_get', value: 'projects_sinks_get' },
        { label: 'organizations_sinks_get', value: 'organizations_sinks_get' },
        { label: 'folders_sinks_get', value: 'folders_sinks_get' },
        { label: 'billing_accounts_sinks_get', value: 'billing_accounts_sinks_get' },
        { label: 'sinks_get', value: 'sinks_get' },
        { label: 'projects_sinks_list', value: 'projects_sinks_list' },
        { label: 'organizations_sinks_list', value: 'organizations_sinks_list' },
        { label: 'folders_sinks_list', value: 'folders_sinks_list' },
        { label: 'billing_accounts_sinks_list', value: 'billing_accounts_sinks_list' }
    ]}
>
<TabItem value="sinks_list">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_sinks_get">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sinks_get">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_sinks_get">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_sinks_get">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="sinks_get">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_sinks_list">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sinks_list">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_sinks_list">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="billing_accounts_sinks_list">

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
    <td>Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options that affect sinks exporting data to BigQuery. (id: BigQueryOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this sink.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, then this sink is disabled and it does not export any log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions" /></td>
    <td><code>array</code></td>
    <td>Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity&gt;=ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance</td>
</tr>
<tr>
    <td><CopyableCode code="interceptChildren" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVersionFormat" /></td>
    <td><code>string</code></td>
    <td>Deprecated. This field is unused.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the sink. "projects/[PROJECT_ID]/sinks/[SINK_NAME] "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME] "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME] "folders/[FOLDER_ID]/sinks/[SINK_NAME] For example: projects/my_project/sinks/SINK_NAME</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the sink.This field may not be present for older sinks.</td>
</tr>
<tr>
    <td><CopyableCode code="writerIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.</td>
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
    <td><a href="#sinks_list"><CopyableCode code="sinks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists sinks.</td>
</tr>
<tr>
    <td><a href="#projects_sinks_get"><CopyableCode code="projects_sinks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Gets a sink.</td>
</tr>
<tr>
    <td><a href="#organizations_sinks_get"><CopyableCode code="organizations_sinks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Gets a sink.</td>
</tr>
<tr>
    <td><a href="#folders_sinks_get"><CopyableCode code="folders_sinks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Gets a sink.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_sinks_get"><CopyableCode code="billing_accounts_sinks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Gets a sink.</td>
</tr>
<tr>
    <td><a href="#sinks_get"><CopyableCode code="sinks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sinkName"><code>sinkName</code></a></td>
    <td></td>
    <td>Gets a sink.</td>
</tr>
<tr>
    <td><a href="#projects_sinks_list"><CopyableCode code="projects_sinks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists sinks.</td>
</tr>
<tr>
    <td><a href="#organizations_sinks_list"><CopyableCode code="organizations_sinks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists sinks.</td>
</tr>
<tr>
    <td><a href="#folders_sinks_list"><CopyableCode code="folders_sinks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists sinks.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_sinks_list"><CopyableCode code="billing_accounts_sinks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists sinks.</td>
</tr>
<tr>
    <td><a href="#sinks_create"><CopyableCode code="sinks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a></td>
    <td>Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.</td>
</tr>
<tr>
    <td><a href="#projects_sinks_create"><CopyableCode code="projects_sinks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a></td>
    <td>Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.</td>
</tr>
<tr>
    <td><a href="#organizations_sinks_create"><CopyableCode code="organizations_sinks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a></td>
    <td>Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.</td>
</tr>
<tr>
    <td><a href="#folders_sinks_create"><CopyableCode code="folders_sinks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a></td>
    <td>Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_sinks_create"><CopyableCode code="billing_accounts_sinks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a></td>
    <td>Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.</td>
</tr>
<tr>
    <td><a href="#projects_sinks_patch"><CopyableCode code="projects_sinks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#organizations_sinks_patch"><CopyableCode code="organizations_sinks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#folders_sinks_patch"><CopyableCode code="folders_sinks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_sinks_patch"><CopyableCode code="billing_accounts_sinks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#projects_sinks_update"><CopyableCode code="projects_sinks_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#organizations_sinks_update"><CopyableCode code="organizations_sinks_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#folders_sinks_update"><CopyableCode code="folders_sinks_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_sinks_update"><CopyableCode code="billing_accounts_sinks_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#sinks_update"><CopyableCode code="sinks_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-sinkName"><code>sinkName</code></a></td>
    <td><a href="#parameter-uniqueWriterIdentity"><code>uniqueWriterIdentity</code></a>, <a href="#parameter-customWriterIdentity"><code>customWriterIdentity</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.</td>
</tr>
<tr>
    <td><a href="#projects_sinks_delete"><CopyableCode code="projects_sinks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_sinks_delete"><CopyableCode code="organizations_sinks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.</td>
</tr>
<tr>
    <td><a href="#folders_sinks_delete"><CopyableCode code="folders_sinks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_sinks_delete"><CopyableCode code="billing_accounts_sinks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-sinksId"><code>sinksId</code></a></td>
    <td></td>
    <td>Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.</td>
</tr>
<tr>
    <td><a href="#sinks_delete"><CopyableCode code="sinks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sinkName"><code>sinkName</code></a></td>
    <td></td>
    <td>Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sinkName">
    <td><CopyableCode code="sinkName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sinksId">
    <td><CopyableCode code="sinksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customWriterIdentity">
    <td><CopyableCode code="customWriterIdentity" /></td>
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
<tr id="parameter-uniqueWriterIdentity">
    <td><CopyableCode code="uniqueWriterIdentity" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="sinks_list"
    values={[
        { label: 'sinks_list', value: 'sinks_list' },
        { label: 'projects_sinks_get', value: 'projects_sinks_get' },
        { label: 'organizations_sinks_get', value: 'organizations_sinks_get' },
        { label: 'folders_sinks_get', value: 'folders_sinks_get' },
        { label: 'billing_accounts_sinks_get', value: 'billing_accounts_sinks_get' },
        { label: 'sinks_get', value: 'sinks_get' },
        { label: 'projects_sinks_list', value: 'projects_sinks_list' },
        { label: 'organizations_sinks_list', value: 'organizations_sinks_list' },
        { label: 'folders_sinks_list', value: 'folders_sinks_list' },
        { label: 'billing_accounts_sinks_list', value: 'billing_accounts_sinks_list' }
    ]}
>
<TabItem value="sinks_list">

Lists sinks.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="projects_sinks_get">

Gets a sink.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE projectsId = '{{ projectsId }}' -- required
AND sinksId = '{{ sinksId }}' -- required;
```
</TabItem>
<TabItem value="organizations_sinks_get">

Gets a sink.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sinksId = '{{ sinksId }}' -- required;
```
</TabItem>
<TabItem value="folders_sinks_get">

Gets a sink.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE foldersId = '{{ foldersId }}' -- required
AND sinksId = '{{ sinksId }}' -- required;
```
</TabItem>
<TabItem value="billing_accounts_sinks_get">

Gets a sink.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND sinksId = '{{ sinksId }}' -- required;
```
</TabItem>
<TabItem value="sinks_get">

Gets a sink.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE sinkName = '{{ sinkName }}' -- required;
```
</TabItem>
<TabItem value="projects_sinks_list">

Lists sinks.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_sinks_list">

Lists sinks.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="folders_sinks_list">

Lists sinks.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE foldersId = '{{ foldersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="billing_accounts_sinks_list">

Lists sinks.

```sql
SELECT
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
FROM google.logging.sinks
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="sinks_create"
    values={[
        { label: 'sinks_create', value: 'sinks_create' },
        { label: 'projects_sinks_create', value: 'projects_sinks_create' },
        { label: 'organizations_sinks_create', value: 'organizations_sinks_create' },
        { label: 'folders_sinks_create', value: 'folders_sinks_create' },
        { label: 'billing_accounts_sinks_create', value: 'billing_accounts_sinks_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="sinks_create">

Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

```sql
INSERT INTO google.logging.sinks (
data__name,
data__destination,
data__filter,
data__description,
data__disabled,
data__exclusions,
data__outputVersionFormat,
data__includeChildren,
data__interceptChildren,
data__bigqueryOptions,
parentType,
parent,
uniqueWriterIdentity,
customWriterIdentity
)
SELECT 
'{{ name }}',
'{{ destination }}',
'{{ filter }}',
'{{ description }}',
{{ disabled }},
'{{ exclusions }}',
'{{ outputVersionFormat }}',
{{ includeChildren }},
{{ interceptChildren }},
'{{ bigqueryOptions }}',
'{{ parentType }}',
'{{ parent }}',
'{{ uniqueWriterIdentity }}',
'{{ customWriterIdentity }}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
;
```
</TabItem>
<TabItem value="projects_sinks_create">

Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

```sql
INSERT INTO google.logging.sinks (
data__name,
data__destination,
data__filter,
data__description,
data__disabled,
data__exclusions,
data__outputVersionFormat,
data__includeChildren,
data__interceptChildren,
data__bigqueryOptions,
projectsId,
uniqueWriterIdentity,
customWriterIdentity
)
SELECT 
'{{ name }}',
'{{ destination }}',
'{{ filter }}',
'{{ description }}',
{{ disabled }},
'{{ exclusions }}',
'{{ outputVersionFormat }}',
{{ includeChildren }},
{{ interceptChildren }},
'{{ bigqueryOptions }}',
'{{ projectsId }}',
'{{ uniqueWriterIdentity }}',
'{{ customWriterIdentity }}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
;
```
</TabItem>
<TabItem value="organizations_sinks_create">

Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

```sql
INSERT INTO google.logging.sinks (
data__name,
data__destination,
data__filter,
data__description,
data__disabled,
data__exclusions,
data__outputVersionFormat,
data__includeChildren,
data__interceptChildren,
data__bigqueryOptions,
organizationsId,
uniqueWriterIdentity,
customWriterIdentity
)
SELECT 
'{{ name }}',
'{{ destination }}',
'{{ filter }}',
'{{ description }}',
{{ disabled }},
'{{ exclusions }}',
'{{ outputVersionFormat }}',
{{ includeChildren }},
{{ interceptChildren }},
'{{ bigqueryOptions }}',
'{{ organizationsId }}',
'{{ uniqueWriterIdentity }}',
'{{ customWriterIdentity }}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
;
```
</TabItem>
<TabItem value="folders_sinks_create">

Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

```sql
INSERT INTO google.logging.sinks (
data__name,
data__destination,
data__filter,
data__description,
data__disabled,
data__exclusions,
data__outputVersionFormat,
data__includeChildren,
data__interceptChildren,
data__bigqueryOptions,
foldersId,
uniqueWriterIdentity,
customWriterIdentity
)
SELECT 
'{{ name }}',
'{{ destination }}',
'{{ filter }}',
'{{ description }}',
{{ disabled }},
'{{ exclusions }}',
'{{ outputVersionFormat }}',
{{ includeChildren }},
{{ interceptChildren }},
'{{ bigqueryOptions }}',
'{{ foldersId }}',
'{{ uniqueWriterIdentity }}',
'{{ customWriterIdentity }}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
;
```
</TabItem>
<TabItem value="billing_accounts_sinks_create">

Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

```sql
INSERT INTO google.logging.sinks (
data__name,
data__destination,
data__filter,
data__description,
data__disabled,
data__exclusions,
data__outputVersionFormat,
data__includeChildren,
data__interceptChildren,
data__bigqueryOptions,
billingAccountsId,
uniqueWriterIdentity,
customWriterIdentity
)
SELECT 
'{{ name }}',
'{{ destination }}',
'{{ filter }}',
'{{ description }}',
{{ disabled }},
'{{ exclusions }}',
'{{ outputVersionFormat }}',
{{ includeChildren }},
{{ interceptChildren }},
'{{ bigqueryOptions }}',
'{{ billingAccountsId }}',
'{{ uniqueWriterIdentity }}',
'{{ customWriterIdentity }}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sinks
  props:
    - name: parentType
      value: string
      description: Required parameter for the sinks resource.
    - name: parent
      value: string
      description: Required parameter for the sinks resource.
    - name: projectsId
      value: string
      description: Required parameter for the sinks resource.
    - name: organizationsId
      value: string
      description: Required parameter for the sinks resource.
    - name: foldersId
      value: string
      description: Required parameter for the sinks resource.
    - name: billingAccountsId
      value: string
      description: Required parameter for the sinks resource.
    - name: name
      value: string
      description: >
        Optional. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.
        
    - name: destination
      value: string
      description: >
        Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
        
    - name: filter
      value: string
      description: >
        Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR
        
    - name: description
      value: string
      description: >
        Optional. A description of this sink.The maximum length of the description is 8000 characters.
        
    - name: disabled
      value: boolean
      description: >
        Optional. If set to true, then this sink is disabled and it does not export any log entries.
        
    - name: exclusions
      value: array
      description: >
        Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusions it will not be exported.
        
    - name: outputVersionFormat
      value: string
      description: >
        Deprecated. This field is unused.
        
      valid_values: ['VERSION_FORMAT_UNSPECIFIED', 'V2', 'V1']
    - name: includeChildren
      value: boolean
      description: >
        Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance
        
    - name: interceptChildren
      value: boolean
      description: >
        Optional. This field applies only to sinks owned by organizations and folders.When the value of 'intercept_children' is true, the following restrictions apply: The sink must have the include_children flag set to true. The sink destination must be a Cloud project.Also, the following behaviors apply: Any logs matched by the sink won't be included by non-_Required sinks owned by child resources. The sink appears in the results of a ListSinks call from a child resource if the value of the filter field in its request is either 'in_scope("ALL")' or 'in_scope("ANCESTOR")'.
        
    - name: bigqueryOptions
      value: object
      description: >
        Optional. Options that affect sinks exporting data to BigQuery.
        
    - name: uniqueWriterIdentity
      value: boolean
    - name: customWriterIdentity
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_sinks_patch"
    values={[
        { label: 'projects_sinks_patch', value: 'projects_sinks_patch' },
        { label: 'organizations_sinks_patch', value: 'organizations_sinks_patch' },
        { label: 'folders_sinks_patch', value: 'folders_sinks_patch' },
        { label: 'billing_accounts_sinks_patch', value: 'billing_accounts_sinks_patch' }
    ]}
>
<TabItem value="projects_sinks_patch">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
UPDATE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="organizations_sinks_patch">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
UPDATE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="folders_sinks_patch">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
UPDATE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="billing_accounts_sinks_patch">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
UPDATE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_sinks_update"
    values={[
        { label: 'projects_sinks_update', value: 'projects_sinks_update' },
        { label: 'organizations_sinks_update', value: 'organizations_sinks_update' },
        { label: 'folders_sinks_update', value: 'folders_sinks_update' },
        { label: 'billing_accounts_sinks_update', value: 'billing_accounts_sinks_update' },
        { label: 'sinks_update', value: 'sinks_update' }
    ]}
>
<TabItem value="projects_sinks_update">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
REPLACE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="organizations_sinks_update">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
REPLACE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="folders_sinks_update">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
REPLACE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="billing_accounts_sinks_update">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
REPLACE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
billingAccountsId = '{{ billingAccountsId }}' --required
AND sinksId = '{{ sinksId }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
<TabItem value="sinks_update">

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

```sql
REPLACE google.logging.sinks
SET 
data__name = '{{ name }}',
data__destination = '{{ destination }}',
data__filter = '{{ filter }}',
data__description = '{{ description }}',
data__disabled = {{ disabled }},
data__exclusions = '{{ exclusions }}',
data__outputVersionFormat = '{{ outputVersionFormat }}',
data__includeChildren = {{ includeChildren }},
data__interceptChildren = {{ interceptChildren }},
data__bigqueryOptions = '{{ bigqueryOptions }}'
WHERE 
sinkName = '{{ sinkName }}' --required
AND uniqueWriterIdentity = {{ uniqueWriterIdentity}}
AND customWriterIdentity = '{{ customWriterIdentity}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryOptions,
createTime,
description,
destination,
disabled,
exclusions,
filter,
includeChildren,
interceptChildren,
outputVersionFormat,
resourceName,
updateTime,
writerIdentity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_sinks_delete"
    values={[
        { label: 'projects_sinks_delete', value: 'projects_sinks_delete' },
        { label: 'organizations_sinks_delete', value: 'organizations_sinks_delete' },
        { label: 'folders_sinks_delete', value: 'folders_sinks_delete' },
        { label: 'billing_accounts_sinks_delete', value: 'billing_accounts_sinks_delete' },
        { label: 'sinks_delete', value: 'sinks_delete' }
    ]}
>
<TabItem value="projects_sinks_delete">

Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

```sql
DELETE FROM google.logging.sinks
WHERE projectsId = '{{ projectsId }}' --required
AND sinksId = '{{ sinksId }}' --required;
```
</TabItem>
<TabItem value="organizations_sinks_delete">

Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

```sql
DELETE FROM google.logging.sinks
WHERE organizationsId = '{{ organizationsId }}' --required
AND sinksId = '{{ sinksId }}' --required;
```
</TabItem>
<TabItem value="folders_sinks_delete">

Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

```sql
DELETE FROM google.logging.sinks
WHERE foldersId = '{{ foldersId }}' --required
AND sinksId = '{{ sinksId }}' --required;
```
</TabItem>
<TabItem value="billing_accounts_sinks_delete">

Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

```sql
DELETE FROM google.logging.sinks
WHERE billingAccountsId = '{{ billingAccountsId }}' --required
AND sinksId = '{{ sinksId }}' --required;
```
</TabItem>
<TabItem value="sinks_delete">

Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

```sql
DELETE FROM google.logging.sinks
WHERE sinkName = '{{ sinkName }}' --required;
```
</TabItem>
</Tabs>
