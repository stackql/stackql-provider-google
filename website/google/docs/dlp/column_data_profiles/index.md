--- 
title: column_data_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - column_data_profiles
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

Creates, updates, deletes, gets or lists a <code>column_data_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>column_data_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.column_data_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_column_data_profiles_get"
    values={[
        { label: 'projects_locations_column_data_profiles_get', value: 'projects_locations_column_data_profiles_get' },
        { label: 'organizations_locations_column_data_profiles_get', value: 'organizations_locations_column_data_profiles_get' },
        { label: 'projects_locations_column_data_profiles_list', value: 'projects_locations_column_data_profiles_list' },
        { label: 'organizations_locations_column_data_profiles_list', value: 'organizations_locations_column_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_column_data_profiles_get">

The profile for a scanned column within a table.

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
    <td><CopyableCode code="column" /></td>
    <td><code>string</code></td>
    <td>The name of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="columnInfoType" /></td>
    <td><code>object</code></td>
    <td>The infoType details for this column. (id: GooglePrivacyDlpV2InfoTypeSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="columnType" /></td>
    <td><code>string</code></td>
    <td>The data type of a given column.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level for this column. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>The BigQuery dataset ID, if the resource profiled is a BigQuery table.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetLocation" /></td>
    <td><code>string</code></td>
    <td>If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported BigQuery locations.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the profiled resource.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedNullPercentage" /></td>
    <td><code>string</code></td>
    <td>Approximate percentage of entries being null in the column.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedUniquenessScore" /></td>
    <td><code>string</code></td>
    <td>Approximate uniqueness of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="freeTextScore" /></td>
    <td><code>number (double)</code></td>
    <td>The likelihood that this column contains free-form text. A value close to 1 may indicate the column is likely to contain free-form or natural language text. Range in 0-1.</td>
</tr>
<tr>
    <td><CopyableCode code="otherMatches" /></td>
    <td><code>array</code></td>
    <td>Other types found within this column. List will be unordered.</td>
</tr>
<tr>
    <td><CopyableCode code="policyState" /></td>
    <td><code>string</code></td>
    <td>Indicates if a policy tag has been applied to the column.</td>
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
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity of this column. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tableDataProfile" /></td>
    <td><code>string</code></td>
    <td>The resource name of the table data profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tableFullResource" /></td>
    <td><code>string</code></td>
    <td>The resource name of the resource this column is within.</td>
</tr>
<tr>
    <td><CopyableCode code="tableId" /></td>
    <td><code>string</code></td>
    <td>The table ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_column_data_profiles_get">

The profile for a scanned column within a table.

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
    <td><CopyableCode code="column" /></td>
    <td><code>string</code></td>
    <td>The name of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="columnInfoType" /></td>
    <td><code>object</code></td>
    <td>The infoType details for this column. (id: GooglePrivacyDlpV2InfoTypeSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="columnType" /></td>
    <td><code>string</code></td>
    <td>The data type of a given column.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level for this column. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>The BigQuery dataset ID, if the resource profiled is a BigQuery table.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetLocation" /></td>
    <td><code>string</code></td>
    <td>If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported BigQuery locations.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetProjectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the profiled resource.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedNullPercentage" /></td>
    <td><code>string</code></td>
    <td>Approximate percentage of entries being null in the column.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedUniquenessScore" /></td>
    <td><code>string</code></td>
    <td>Approximate uniqueness of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="freeTextScore" /></td>
    <td><code>number (double)</code></td>
    <td>The likelihood that this column contains free-form text. A value close to 1 may indicate the column is likely to contain free-form or natural language text. Range in 0-1.</td>
</tr>
<tr>
    <td><CopyableCode code="otherMatches" /></td>
    <td><code>array</code></td>
    <td>Other types found within this column. List will be unordered.</td>
</tr>
<tr>
    <td><CopyableCode code="policyState" /></td>
    <td><code>string</code></td>
    <td>Indicates if a policy tag has been applied to the column.</td>
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
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity of this column. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tableDataProfile" /></td>
    <td><code>string</code></td>
    <td>The resource name of the table data profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tableFullResource" /></td>
    <td><code>string</code></td>
    <td>The resource name of the resource this column is within.</td>
</tr>
<tr>
    <td><CopyableCode code="tableId" /></td>
    <td><code>string</code></td>
    <td>The table ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_column_data_profiles_list">

List of profiles generated for a given organization or project.

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
    <td><CopyableCode code="columnDataProfiles" /></td>
    <td><code>array</code></td>
    <td>List of data profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_column_data_profiles_list">

List of profiles generated for a given organization or project.

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
    <td><CopyableCode code="columnDataProfiles" /></td>
    <td><code>array</code></td>
    <td>List of data profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
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
    <td><a href="#projects_locations_column_data_profiles_get"><CopyableCode code="projects_locations_column_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-columnDataProfilesId"><code>columnDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a column data profile.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_column_data_profiles_get"><CopyableCode code="organizations_locations_column_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-columnDataProfilesId"><code>columnDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a column data profile.</td>
</tr>
<tr>
    <td><a href="#projects_locations_column_data_profiles_list"><CopyableCode code="projects_locations_column_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists column data profiles for an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_column_data_profiles_list"><CopyableCode code="organizations_locations_column_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists column data profiles for an organization.</td>
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
<tr id="parameter-columnDataProfilesId">
    <td><CopyableCode code="columnDataProfilesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
    defaultValue="projects_locations_column_data_profiles_get"
    values={[
        { label: 'projects_locations_column_data_profiles_get', value: 'projects_locations_column_data_profiles_get' },
        { label: 'organizations_locations_column_data_profiles_get', value: 'organizations_locations_column_data_profiles_get' },
        { label: 'projects_locations_column_data_profiles_list', value: 'projects_locations_column_data_profiles_list' },
        { label: 'organizations_locations_column_data_profiles_list', value: 'organizations_locations_column_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_column_data_profiles_get">

Gets a column data profile.

```sql
SELECT
name,
column,
columnInfoType,
columnType,
dataRiskLevel,
datasetId,
datasetLocation,
datasetProjectId,
estimatedNullPercentage,
estimatedUniquenessScore,
freeTextScore,
otherMatches,
policyState,
profileLastGenerated,
profileStatus,
sensitivityScore,
state,
tableDataProfile,
tableFullResource,
tableId
FROM google.dlp.column_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND columnDataProfilesId = '{{ columnDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_column_data_profiles_get">

Gets a column data profile.

```sql
SELECT
name,
column,
columnInfoType,
columnType,
dataRiskLevel,
datasetId,
datasetLocation,
datasetProjectId,
estimatedNullPercentage,
estimatedUniquenessScore,
freeTextScore,
otherMatches,
policyState,
profileLastGenerated,
profileStatus,
sensitivityScore,
state,
tableDataProfile,
tableFullResource,
tableId
FROM google.dlp.column_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND columnDataProfilesId = '{{ columnDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_column_data_profiles_list">

Lists column data profiles for an organization.

```sql
SELECT
columnDataProfiles,
nextPageToken
FROM google.dlp.column_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_column_data_profiles_list">

Lists column data profiles for an organization.

```sql
SELECT
columnDataProfiles,
nextPageToken
FROM google.dlp.column_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
