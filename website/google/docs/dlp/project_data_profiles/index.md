--- 
title: project_data_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - project_data_profiles
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

Creates, updates, deletes, gets or lists a <code>project_data_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>project_data_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.project_data_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_project_data_profiles_get"
    values={[
        { label: 'projects_locations_project_data_profiles_get', value: 'projects_locations_project_data_profiles_get' },
        { label: 'organizations_locations_project_data_profiles_get', value: 'organizations_locations_project_data_profiles_get' },
        { label: 'projects_locations_project_data_profiles_list', value: 'projects_locations_project_data_profiles_list' },
        { label: 'organizations_locations_project_data_profiles_list', value: 'organizations_locations_project_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_project_data_profiles_get">

An aggregated profile for this project, based on the resources profiled within it.

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
    <td>The resource name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this project. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreDataProfileCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of file store data profiles generated for this project.</td>
</tr>
<tr>
    <td><CopyableCode code="profileLastGenerated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileStatus" /></td>
    <td><code>object</code></td>
    <td>Success or error status of the last attempt to profile the project. (id: GooglePrivacyDlpV2ProfileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Project ID or account that was profiled.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this project. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="tableDataProfileCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of table data profiles generated for this project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_project_data_profiles_get">

An aggregated profile for this project, based on the resources profiled within it.

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
    <td>The resource name of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this project. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreDataProfileCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of file store data profiles generated for this project.</td>
</tr>
<tr>
    <td><CopyableCode code="profileLastGenerated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The last time the profile was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="profileStatus" /></td>
    <td><code>object</code></td>
    <td>Success or error status of the last attempt to profile the project. (id: GooglePrivacyDlpV2ProfileStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Project ID or account that was profiled.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this project. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="tableDataProfileCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of table data profiles generated for this project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_project_data_profiles_list">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
</tr>
<tr>
    <td><CopyableCode code="projectDataProfiles" /></td>
    <td><code>array</code></td>
    <td>List of data profiles.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_project_data_profiles_list">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
</tr>
<tr>
    <td><CopyableCode code="projectDataProfiles" /></td>
    <td><code>array</code></td>
    <td>List of data profiles.</td>
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
    <td><a href="#projects_locations_project_data_profiles_get"><CopyableCode code="projects_locations_project_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-projectDataProfilesId"><code>projectDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a project data profile.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_project_data_profiles_get"><CopyableCode code="organizations_locations_project_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-projectDataProfilesId"><code>projectDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a project data profile.</td>
</tr>
<tr>
    <td><a href="#projects_locations_project_data_profiles_list"><CopyableCode code="projects_locations_project_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists project data profiles for an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_project_data_profiles_list"><CopyableCode code="organizations_locations_project_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists project data profiles for an organization.</td>
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
<tr id="parameter-projectDataProfilesId">
    <td><CopyableCode code="projectDataProfilesId" /></td>
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
    defaultValue="projects_locations_project_data_profiles_get"
    values={[
        { label: 'projects_locations_project_data_profiles_get', value: 'projects_locations_project_data_profiles_get' },
        { label: 'organizations_locations_project_data_profiles_get', value: 'organizations_locations_project_data_profiles_get' },
        { label: 'projects_locations_project_data_profiles_list', value: 'projects_locations_project_data_profiles_list' },
        { label: 'organizations_locations_project_data_profiles_list', value: 'organizations_locations_project_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_project_data_profiles_get">

Gets a project data profile.

```sql
SELECT
name,
dataRiskLevel,
fileStoreDataProfileCount,
profileLastGenerated,
profileStatus,
projectId,
sensitivityScore,
tableDataProfileCount
FROM google.dlp.project_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND projectDataProfilesId = '{{ projectDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_project_data_profiles_get">

Gets a project data profile.

```sql
SELECT
name,
dataRiskLevel,
fileStoreDataProfileCount,
profileLastGenerated,
profileStatus,
projectId,
sensitivityScore,
tableDataProfileCount
FROM google.dlp.project_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND projectDataProfilesId = '{{ projectDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_project_data_profiles_list">

Lists project data profiles for an organization.

```sql
SELECT
nextPageToken,
projectDataProfiles
FROM google.dlp.project_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_project_data_profiles_list">

Lists project data profiles for an organization.

```sql
SELECT
nextPageToken,
projectDataProfiles
FROM google.dlp.project_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
