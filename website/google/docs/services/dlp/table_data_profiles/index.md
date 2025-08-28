--- 
title: table_data_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - table_data_profiles
  - dlp
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

Creates, updates, deletes, gets or lists a <code>table_data_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>table_data_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.table_data_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_table_data_profiles_get"
    values={[
        { label: 'projects_locations_table_data_profiles_get', value: 'projects_locations_table_data_profiles_get' },
        { label: 'organizations_locations_table_data_profiles_get', value: 'organizations_locations_table_data_profiles_get' },
        { label: 'projects_locations_table_data_profiles_list', value: 'projects_locations_table_data_profiles_list' },
        { label: 'organizations_locations_table_data_profiles_list', value: 'organizations_locations_table_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_table_data_profiles_get">

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
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="configSnapshot" /></td>
    <td><code>object</code></td>
    <td>The snapshot of the configurations used to generate the profile. (id: GooglePrivacyDlpV2DataProfileConfigSnapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this table. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>object</code></td>
    <td>The resource type that was profiled. (id: GooglePrivacyDlpV2DataSourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>If the resource is BigQuery, the dataset ID.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetLocation" /></td>
    <td><code>string</code></td>
    <td>If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>How the table is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The time when this table expires.</td>
</tr>
<tr>
    <td><CopyableCode code="failedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns skipped in the table because of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="fullResource" /></td>
    <td><code>string</code></td>
    <td>The Cloud Asset Inventory resource that was profiled in order to generate this TableDataProfile. https://cloud.google.com/apis/design/resource_names#full_resource_name</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when this table was last modified</td>
</tr>
<tr>
    <td><CopyableCode code="otherInfoTypes" /></td>
    <td><code>array</code></td>
    <td>Other infoTypes found in this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="predictedInfoTypes" /></td>
    <td><code>array</code></td>
    <td>The infoTypes predicted from this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="profileLastGenerated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileStatus" /></td>
    <td><code>object</code></td>
    <td>Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. (id: GooglePrivacyDlpV2ProfileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="projectDataProfile" /></td>
    <td><code>string</code></td>
    <td>The resource name of the project data profile for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>Resources related to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The labels applied to the resource at the time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceVisibility" /></td>
    <td><code>string</code></td>
    <td>How broadly a resource has been shared.</td>
</tr>
<tr>
    <td><CopyableCode code="rowCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of rows in the table when the profile was generated. This will not be populated for BigLake tables.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleFindingsTable" /></td>
    <td><code>object</code></td>
    <td>The BigQuery table to which the sample findings are written. (id: GooglePrivacyDlpV2BigQueryTable)</td>
</tr>
<tr>
    <td><CopyableCode code="scannedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns profiled in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this table. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile. This will always be set to DONE when the table data profile is written to another service like BigQuery or Pub/Sub.</td>
</tr>
<tr>
    <td><CopyableCode code="tableId" /></td>
    <td><code>string</code></td>
    <td>The table ID.</td>
</tr>
<tr>
    <td><CopyableCode code="tableSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The size of the table when the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags attached to the table, including any tags attached during profiling. Because tags are attached to Cloud SQL instances rather than Cloud SQL tables, this field is empty for Cloud SQL table profiles.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_table_data_profiles_get">

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
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="configSnapshot" /></td>
    <td><code>object</code></td>
    <td>The snapshot of the configurations used to generate the profile. (id: GooglePrivacyDlpV2DataProfileConfigSnapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this table. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>object</code></td>
    <td>The resource type that was profiled. (id: GooglePrivacyDlpV2DataSourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>If the resource is BigQuery, the dataset ID.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetLocation" /></td>
    <td><code>string</code></td>
    <td>If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>How the table is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The time when this table expires.</td>
</tr>
<tr>
    <td><CopyableCode code="failedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns skipped in the table because of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="fullResource" /></td>
    <td><code>string</code></td>
    <td>The Cloud Asset Inventory resource that was profiled in order to generate this TableDataProfile. https://cloud.google.com/apis/design/resource_names#full_resource_name</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when this table was last modified</td>
</tr>
<tr>
    <td><CopyableCode code="otherInfoTypes" /></td>
    <td><code>array</code></td>
    <td>Other infoTypes found in this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="predictedInfoTypes" /></td>
    <td><code>array</code></td>
    <td>The infoTypes predicted from this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="profileLastGenerated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileStatus" /></td>
    <td><code>object</code></td>
    <td>Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. (id: GooglePrivacyDlpV2ProfileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="projectDataProfile" /></td>
    <td><code>string</code></td>
    <td>The resource name of the project data profile for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>Resources related to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The labels applied to the resource at the time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceVisibility" /></td>
    <td><code>string</code></td>
    <td>How broadly a resource has been shared.</td>
</tr>
<tr>
    <td><CopyableCode code="rowCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of rows in the table when the profile was generated. This will not be populated for BigLake tables.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleFindingsTable" /></td>
    <td><code>object</code></td>
    <td>The BigQuery table to which the sample findings are written. (id: GooglePrivacyDlpV2BigQueryTable)</td>
</tr>
<tr>
    <td><CopyableCode code="scannedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns profiled in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this table. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile. This will always be set to DONE when the table data profile is written to another service like BigQuery or Pub/Sub.</td>
</tr>
<tr>
    <td><CopyableCode code="tableId" /></td>
    <td><code>string</code></td>
    <td>The table ID.</td>
</tr>
<tr>
    <td><CopyableCode code="tableSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The size of the table when the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags attached to the table, including any tags attached during profiling. Because tags are attached to Cloud SQL instances rather than Cloud SQL tables, this field is empty for Cloud SQL table profiles.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_table_data_profiles_list">

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
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="configSnapshot" /></td>
    <td><code>object</code></td>
    <td>The snapshot of the configurations used to generate the profile. (id: GooglePrivacyDlpV2DataProfileConfigSnapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this table. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>object</code></td>
    <td>The resource type that was profiled. (id: GooglePrivacyDlpV2DataSourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>If the resource is BigQuery, the dataset ID.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetLocation" /></td>
    <td><code>string</code></td>
    <td>If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>How the table is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The time when this table expires.</td>
</tr>
<tr>
    <td><CopyableCode code="failedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns skipped in the table because of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="fullResource" /></td>
    <td><code>string</code></td>
    <td>The Cloud Asset Inventory resource that was profiled in order to generate this TableDataProfile. https://cloud.google.com/apis/design/resource_names#full_resource_name</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when this table was last modified</td>
</tr>
<tr>
    <td><CopyableCode code="otherInfoTypes" /></td>
    <td><code>array</code></td>
    <td>Other infoTypes found in this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="predictedInfoTypes" /></td>
    <td><code>array</code></td>
    <td>The infoTypes predicted from this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="profileLastGenerated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileStatus" /></td>
    <td><code>object</code></td>
    <td>Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. (id: GooglePrivacyDlpV2ProfileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="projectDataProfile" /></td>
    <td><code>string</code></td>
    <td>The resource name of the project data profile for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>Resources related to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The labels applied to the resource at the time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceVisibility" /></td>
    <td><code>string</code></td>
    <td>How broadly a resource has been shared.</td>
</tr>
<tr>
    <td><CopyableCode code="rowCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of rows in the table when the profile was generated. This will not be populated for BigLake tables.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleFindingsTable" /></td>
    <td><code>object</code></td>
    <td>The BigQuery table to which the sample findings are written. (id: GooglePrivacyDlpV2BigQueryTable)</td>
</tr>
<tr>
    <td><CopyableCode code="scannedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns profiled in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this table. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile. This will always be set to DONE when the table data profile is written to another service like BigQuery or Pub/Sub.</td>
</tr>
<tr>
    <td><CopyableCode code="tableId" /></td>
    <td><code>string</code></td>
    <td>The table ID.</td>
</tr>
<tr>
    <td><CopyableCode code="tableSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The size of the table when the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags attached to the table, including any tags attached during profiling. Because tags are attached to Cloud SQL instances rather than Cloud SQL tables, this field is empty for Cloud SQL table profiles.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_table_data_profiles_list">

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
    <td>The name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="configSnapshot" /></td>
    <td><code>object</code></td>
    <td>The snapshot of the configurations used to generate the profile. (id: GooglePrivacyDlpV2DataProfileConfigSnapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this table. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>object</code></td>
    <td>The resource type that was profiled. (id: GooglePrivacyDlpV2DataSourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>If the resource is BigQuery, the dataset ID.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetLocation" /></td>
    <td><code>string</code></td>
    <td>If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>How the table is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. The time when this table expires.</td>
</tr>
<tr>
    <td><CopyableCode code="failedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns skipped in the table because of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="fullResource" /></td>
    <td><code>string</code></td>
    <td>The Cloud Asset Inventory resource that was profiled in order to generate this TableDataProfile. https://cloud.google.com/apis/design/resource_names#full_resource_name</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when this table was last modified</td>
</tr>
<tr>
    <td><CopyableCode code="otherInfoTypes" /></td>
    <td><code>array</code></td>
    <td>Other infoTypes found in this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="predictedInfoTypes" /></td>
    <td><code>array</code></td>
    <td>The infoTypes predicted from this table's data.</td>
</tr>
<tr>
    <td><CopyableCode code="profileLastGenerated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileStatus" /></td>
    <td><code>object</code></td>
    <td>Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. (id: GooglePrivacyDlpV2ProfileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="projectDataProfile" /></td>
    <td><code>string</code></td>
    <td>The resource name of the project data profile for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>Resources related to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The labels applied to the resource at the time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceVisibility" /></td>
    <td><code>string</code></td>
    <td>How broadly a resource has been shared.</td>
</tr>
<tr>
    <td><CopyableCode code="rowCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Number of rows in the table when the profile was generated. This will not be populated for BigLake tables.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleFindingsTable" /></td>
    <td><code>object</code></td>
    <td>The BigQuery table to which the sample findings are written. (id: GooglePrivacyDlpV2BigQueryTable)</td>
</tr>
<tr>
    <td><CopyableCode code="scannedColumnCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of columns profiled in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this table. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile. This will always be set to DONE when the table data profile is written to another service like BigQuery or Pub/Sub.</td>
</tr>
<tr>
    <td><CopyableCode code="tableId" /></td>
    <td><code>string</code></td>
    <td>The table ID.</td>
</tr>
<tr>
    <td><CopyableCode code="tableSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>The size of the table when the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags attached to the table, including any tags attached during profiling. Because tags are attached to Cloud SQL instances rather than Cloud SQL tables, this field is empty for Cloud SQL table profiles.</td>
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
    <td><a href="#projects_locations_table_data_profiles_get"><CopyableCode code="projects_locations_table_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tableDataProfilesId"><code>tableDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a table data profile.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_table_data_profiles_get"><CopyableCode code="organizations_locations_table_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tableDataProfilesId"><code>tableDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a table data profile.</td>
</tr>
<tr>
    <td><a href="#projects_locations_table_data_profiles_list"><CopyableCode code="projects_locations_table_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists table data profiles for an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_table_data_profiles_list"><CopyableCode code="organizations_locations_table_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists table data profiles for an organization.</td>
</tr>
<tr>
    <td><a href="#projects_locations_table_data_profiles_delete"><CopyableCode code="projects_locations_table_data_profiles_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tableDataProfilesId"><code>tableDataProfilesId</code></a></td>
    <td></td>
    <td>Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_table_data_profiles_delete"><CopyableCode code="organizations_locations_table_data_profiles_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tableDataProfilesId"><code>tableDataProfilesId</code></a></td>
    <td></td>
    <td>Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tableDataProfilesId">
    <td><CopyableCode code="tableDataProfilesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_table_data_profiles_get"
    values={[
        { label: 'projects_locations_table_data_profiles_get', value: 'projects_locations_table_data_profiles_get' },
        { label: 'organizations_locations_table_data_profiles_get', value: 'organizations_locations_table_data_profiles_get' },
        { label: 'projects_locations_table_data_profiles_list', value: 'projects_locations_table_data_profiles_list' },
        { label: 'organizations_locations_table_data_profiles_list', value: 'organizations_locations_table_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_table_data_profiles_get">

Gets a table data profile.

```sql
SELECT
name,
configSnapshot,
createTime,
dataRiskLevel,
dataSourceType,
datasetId,
datasetLocation,
datasetProjectId,
domains,
encryptionStatus,
expirationTime,
failedColumnCount,
fullResource,
lastModifiedTime,
otherInfoTypes,
predictedInfoTypes,
profileLastGenerated,
profileStatus,
projectDataProfile,
relatedResources,
resourceLabels,
resourceVisibility,
rowCount,
sampleFindingsTable,
scannedColumnCount,
sensitivityScore,
state,
tableId,
tableSizeBytes,
tags
FROM google.dlp.table_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tableDataProfilesId = '{{ tableDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_table_data_profiles_get">

Gets a table data profile.

```sql
SELECT
name,
configSnapshot,
createTime,
dataRiskLevel,
dataSourceType,
datasetId,
datasetLocation,
datasetProjectId,
domains,
encryptionStatus,
expirationTime,
failedColumnCount,
fullResource,
lastModifiedTime,
otherInfoTypes,
predictedInfoTypes,
profileLastGenerated,
profileStatus,
projectDataProfile,
relatedResources,
resourceLabels,
resourceVisibility,
rowCount,
sampleFindingsTable,
scannedColumnCount,
sensitivityScore,
state,
tableId,
tableSizeBytes,
tags
FROM google.dlp.table_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tableDataProfilesId = '{{ tableDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_table_data_profiles_list">

Lists table data profiles for an organization.

```sql
SELECT
name,
configSnapshot,
createTime,
dataRiskLevel,
dataSourceType,
datasetId,
datasetLocation,
datasetProjectId,
domains,
encryptionStatus,
expirationTime,
failedColumnCount,
fullResource,
lastModifiedTime,
otherInfoTypes,
predictedInfoTypes,
profileLastGenerated,
profileStatus,
projectDataProfile,
relatedResources,
resourceLabels,
resourceVisibility,
rowCount,
sampleFindingsTable,
scannedColumnCount,
sensitivityScore,
state,
tableId,
tableSizeBytes,
tags
FROM google.dlp.table_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_table_data_profiles_list">

Lists table data profiles for an organization.

```sql
SELECT
name,
configSnapshot,
createTime,
dataRiskLevel,
dataSourceType,
datasetId,
datasetLocation,
datasetProjectId,
domains,
encryptionStatus,
expirationTime,
failedColumnCount,
fullResource,
lastModifiedTime,
otherInfoTypes,
predictedInfoTypes,
profileLastGenerated,
profileStatus,
projectDataProfile,
relatedResources,
resourceLabels,
resourceVisibility,
rowCount,
sampleFindingsTable,
scannedColumnCount,
sensitivityScore,
state,
tableId,
tableSizeBytes,
tags
FROM google.dlp.table_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_table_data_profiles_delete"
    values={[
        { label: 'projects_locations_table_data_profiles_delete', value: 'projects_locations_table_data_profiles_delete' },
        { label: 'organizations_locations_table_data_profiles_delete', value: 'organizations_locations_table_data_profiles_delete' }
    ]}
>
<TabItem value="projects_locations_table_data_profiles_delete">

Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration.

```sql
DELETE FROM google.dlp.table_data_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tableDataProfilesId = '{{ tableDataProfilesId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_table_data_profiles_delete">

Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration.

```sql
DELETE FROM google.dlp.table_data_profiles
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tableDataProfilesId = '{{ tableDataProfilesId }}' --required;
```
</TabItem>
</Tabs>
