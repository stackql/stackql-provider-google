--- 
title: file_store_data_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - file_store_data_profiles
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

Creates, updates, deletes, gets or lists a <code>file_store_data_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>file_store_data_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.file_store_data_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_file_store_data_profiles_get"
    values={[
        { label: 'projects_locations_file_store_data_profiles_get', value: 'projects_locations_file_store_data_profiles_get' },
        { label: 'organizations_locations_file_store_data_profiles_get', value: 'organizations_locations_file_store_data_profiles_get' },
        { label: 'projects_locations_file_store_data_profiles_list', value: 'projects_locations_file_store_data_profiles_list' },
        { label: 'organizations_locations_file_store_data_profiles_list', value: 'organizations_locations_file_store_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_file_store_data_profiles_get">

The profile for a file store. * Cloud Storage: maps 1:1 with a bucket. * Amazon S3: maps 1:1 with a bucket.

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
    <td>The time the file store was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this resource. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>object</code></td>
    <td>The resource type that was profiled. (id: GooglePrivacyDlpV2DataSourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageLocations" /></td>
    <td><code>array</code></td>
    <td>For resources that have multiple storage locations, these are those regions. For Cloud Storage this is the list of regions chosen for dual-region storage. `file_store_location` will normally be the corresponding multi-region for the list of individual locations. The first region is always picked as the processing and storage location for the data profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="fileClusterSummaries" /></td>
    <td><code>array</code></td>
    <td>FileClusterSummary per each cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreInfoTypeSummaries" /></td>
    <td><code>array</code></td>
    <td>InfoTypes detected in this file store.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreIsEmpty" /></td>
    <td><code>boolean</code></td>
    <td>The file store does not have any files. If the profiling operation failed, this is false.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreLocation" /></td>
    <td><code>string</code></td>
    <td>The location of the file store. * Cloud Storage: https://cloud.google.com/storage/docs/locations#available-locations * Amazon S3: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints</td>
</tr>
<tr>
    <td><CopyableCode code="fileStorePath" /></td>
    <td><code>string</code></td>
    <td>The file store path. * Cloud Storage: `gs://&#123;bucket&#125;` * Amazon S3: `s3://&#123;bucket&#125;` * Vertex AI dataset: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/datasets/&#123;dataset_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="fullResource" /></td>
    <td><code>string</code></td>
    <td>The resource name of the resource profiled. https://cloud.google.com/apis/design/resource_names#full_resource_name Example format of an S3 bucket full resource name: `//cloudasset.googleapis.com/organizations/&#123;org_id&#125;/otherCloudConnections/aws/arn:aws:s3:::&#123;bucket_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the file store was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="locationType" /></td>
    <td><code>string</code></td>
    <td>The location type of the file store (region, dual-region, multi-region, etc). If dual-region, expect data_storage_locations to be populated.</td>
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
    <td>The resource name of the project data profile for this file store.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the resource. For Amazon S3 buckets, this is the AWS Account Id.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>Resources related to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceAttributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the resource being profiled. Currently used attributes: * customer_managed_encryption: boolean - true: the resource is encrypted with a customer-managed key. - false: the resource is encrypted with a provider-managed key.</td>
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
    <td><CopyableCode code="sampleFindingsTable" /></td>
    <td><code>object</code></td>
    <td>The BigQuery table to which the sample findings are written. (id: GooglePrivacyDlpV2BigQueryTable)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this resource. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags attached to the resource, including any tags attached during profiling.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_file_store_data_profiles_get">

The profile for a file store. * Cloud Storage: maps 1:1 with a bucket. * Amazon S3: maps 1:1 with a bucket.

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
    <td>The time the file store was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataRiskLevel" /></td>
    <td><code>object</code></td>
    <td>The data risk level of this resource. (id: GooglePrivacyDlpV2DataRiskLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>object</code></td>
    <td>The resource type that was profiled. (id: GooglePrivacyDlpV2DataSourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageLocations" /></td>
    <td><code>array</code></td>
    <td>For resources that have multiple storage locations, these are those regions. For Cloud Storage this is the list of regions chosen for dual-region storage. `file_store_location` will normally be the corresponding multi-region for the list of individual locations. The first region is always picked as the processing and storage location for the data profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="fileClusterSummaries" /></td>
    <td><code>array</code></td>
    <td>FileClusterSummary per each cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreInfoTypeSummaries" /></td>
    <td><code>array</code></td>
    <td>InfoTypes detected in this file store.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreIsEmpty" /></td>
    <td><code>boolean</code></td>
    <td>The file store does not have any files. If the profiling operation failed, this is false.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStoreLocation" /></td>
    <td><code>string</code></td>
    <td>The location of the file store. * Cloud Storage: https://cloud.google.com/storage/docs/locations#available-locations * Amazon S3: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints</td>
</tr>
<tr>
    <td><CopyableCode code="fileStorePath" /></td>
    <td><code>string</code></td>
    <td>The file store path. * Cloud Storage: `gs://&#123;bucket&#125;` * Amazon S3: `s3://&#123;bucket&#125;` * Vertex AI dataset: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/datasets/&#123;dataset_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="fullResource" /></td>
    <td><code>string</code></td>
    <td>The resource name of the resource profiled. https://cloud.google.com/apis/design/resource_names#full_resource_name Example format of an S3 bucket full resource name: `//cloudasset.googleapis.com/organizations/&#123;org_id&#125;/otherCloudConnections/aws/arn:aws:s3:::&#123;bucket_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time the file store was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="locationType" /></td>
    <td><code>string</code></td>
    <td>The location type of the file store (region, dual-region, multi-region, etc). If dual-region, expect data_storage_locations to be populated.</td>
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
    <td>The resource name of the project data profile for this file store.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The Google Cloud project ID that owns the resource. For Amazon S3 buckets, this is the AWS Account Id.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>Resources related to this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceAttributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the resource being profiled. Currently used attributes: * customer_managed_encryption: boolean - true: the resource is encrypted with a customer-managed key. - false: the resource is encrypted with a provider-managed key.</td>
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
    <td><CopyableCode code="sampleFindingsTable" /></td>
    <td><code>object</code></td>
    <td>The BigQuery table to which the sample findings are written. (id: GooglePrivacyDlpV2BigQueryTable)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityScore" /></td>
    <td><code>object</code></td>
    <td>The sensitivity score of this resource. (id: GooglePrivacyDlpV2SensitivityScore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags attached to the resource, including any tags attached during profiling.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_file_store_data_profiles_list">

List of file store data profiles generated for a given organization or project.

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
    <td><CopyableCode code="fileStoreDataProfiles" /></td>
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
<TabItem value="organizations_locations_file_store_data_profiles_list">

List of file store data profiles generated for a given organization or project.

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
    <td><CopyableCode code="fileStoreDataProfiles" /></td>
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
    <td><a href="#projects_locations_file_store_data_profiles_get"><CopyableCode code="projects_locations_file_store_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-fileStoreDataProfilesId"><code>fileStoreDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a file store data profile.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_file_store_data_profiles_get"><CopyableCode code="organizations_locations_file_store_data_profiles_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-fileStoreDataProfilesId"><code>fileStoreDataProfilesId</code></a></td>
    <td></td>
    <td>Gets a file store data profile.</td>
</tr>
<tr>
    <td><a href="#projects_locations_file_store_data_profiles_list"><CopyableCode code="projects_locations_file_store_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists file store data profiles for an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_file_store_data_profiles_list"><CopyableCode code="organizations_locations_file_store_data_profiles_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists file store data profiles for an organization.</td>
</tr>
<tr>
    <td><a href="#projects_locations_file_store_data_profiles_delete"><CopyableCode code="projects_locations_file_store_data_profiles_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-fileStoreDataProfilesId"><code>fileStoreDataProfilesId</code></a></td>
    <td></td>
    <td>Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_file_store_data_profiles_delete"><CopyableCode code="organizations_locations_file_store_data_profiles_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-fileStoreDataProfilesId"><code>fileStoreDataProfilesId</code></a></td>
    <td></td>
    <td>Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration.</td>
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
<tr id="parameter-fileStoreDataProfilesId">
    <td><CopyableCode code="fileStoreDataProfilesId" /></td>
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
    defaultValue="projects_locations_file_store_data_profiles_get"
    values={[
        { label: 'projects_locations_file_store_data_profiles_get', value: 'projects_locations_file_store_data_profiles_get' },
        { label: 'organizations_locations_file_store_data_profiles_get', value: 'organizations_locations_file_store_data_profiles_get' },
        { label: 'projects_locations_file_store_data_profiles_list', value: 'projects_locations_file_store_data_profiles_list' },
        { label: 'organizations_locations_file_store_data_profiles_list', value: 'organizations_locations_file_store_data_profiles_list' }
    ]}
>
<TabItem value="projects_locations_file_store_data_profiles_get">

Gets a file store data profile.

```sql
SELECT
name,
configSnapshot,
createTime,
dataRiskLevel,
dataSourceType,
dataStorageLocations,
domains,
fileClusterSummaries,
fileStoreInfoTypeSummaries,
fileStoreIsEmpty,
fileStoreLocation,
fileStorePath,
fullResource,
lastModifiedTime,
locationType,
profileLastGenerated,
profileStatus,
projectDataProfile,
projectId,
relatedResources,
resourceAttributes,
resourceLabels,
resourceVisibility,
sampleFindingsTable,
sensitivityScore,
state,
tags
FROM google.dlp.file_store_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND fileStoreDataProfilesId = '{{ fileStoreDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_file_store_data_profiles_get">

Gets a file store data profile.

```sql
SELECT
name,
configSnapshot,
createTime,
dataRiskLevel,
dataSourceType,
dataStorageLocations,
domains,
fileClusterSummaries,
fileStoreInfoTypeSummaries,
fileStoreIsEmpty,
fileStoreLocation,
fileStorePath,
fullResource,
lastModifiedTime,
locationType,
profileLastGenerated,
profileStatus,
projectDataProfile,
projectId,
relatedResources,
resourceAttributes,
resourceLabels,
resourceVisibility,
sampleFindingsTable,
sensitivityScore,
state,
tags
FROM google.dlp.file_store_data_profiles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND fileStoreDataProfilesId = '{{ fileStoreDataProfilesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_file_store_data_profiles_list">

Lists file store data profiles for an organization.

```sql
SELECT
fileStoreDataProfiles,
nextPageToken
FROM google.dlp.file_store_data_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_file_store_data_profiles_list">

Lists file store data profiles for an organization.

```sql
SELECT
fileStoreDataProfiles,
nextPageToken
FROM google.dlp.file_store_data_profiles
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
    defaultValue="projects_locations_file_store_data_profiles_delete"
    values={[
        { label: 'projects_locations_file_store_data_profiles_delete', value: 'projects_locations_file_store_data_profiles_delete' },
        { label: 'organizations_locations_file_store_data_profiles_delete', value: 'organizations_locations_file_store_data_profiles_delete' }
    ]}
>
<TabItem value="projects_locations_file_store_data_profiles_delete">

Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration.

```sql
DELETE FROM google.dlp.file_store_data_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND fileStoreDataProfilesId = '{{ fileStoreDataProfilesId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_file_store_data_profiles_delete">

Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration.

```sql
DELETE FROM google.dlp.file_store_data_profiles
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND fileStoreDataProfilesId = '{{ fileStoreDataProfilesId }}' --required;
```
</TabItem>
</Tabs>
