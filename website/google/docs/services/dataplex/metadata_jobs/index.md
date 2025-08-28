--- 
title: metadata_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_jobs
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>metadata_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>metadata_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.metadata_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_metadata_jobs_get"
    values={[
        { label: 'projects_locations_metadata_jobs_get', value: 'projects_locations_metadata_jobs_get' },
        { label: 'projects_locations_metadata_jobs_list', value: 'projects_locations_metadata_jobs_list' }
    ]}
>
<TabItem value="projects_locations_metadata_jobs_get">

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
    <td>Output only. Identifier. The name of the resource that the configuration is applied to, in the format projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/metadataJobs/&#123;metadata_job_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="exportResult" /></td>
    <td><code>object</code></td>
    <td>Output only. Export job result. (id: GoogleCloudDataplexV1MetadataJobExportJobResult)</td>
</tr>
<tr>
    <td><CopyableCode code="exportSpec" /></td>
    <td><code>object</code></td>
    <td>Export job specification. (id: GoogleCloudDataplexV1MetadataJobExportJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="importResult" /></td>
    <td><code>object</code></td>
    <td>Output only. Import job result. (id: GoogleCloudDataplexV1MetadataJobImportJobResult)</td>
</tr>
<tr>
    <td><CopyableCode code="importSpec" /></td>
    <td><code>object</code></td>
    <td>Import job specification. (id: GoogleCloudDataplexV1MetadataJobImportJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata job status. (id: GoogleCloudDataplexV1MetadataJobStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Metadata job type.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-generated, globally unique ID for the metadata job. If the metadata job is deleted and then re-created with the same name, this ID is different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata job was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_metadata_jobs_list">

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
    <td>Output only. Identifier. The name of the resource that the configuration is applied to, in the format projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/metadataJobs/&#123;metadata_job_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="exportResult" /></td>
    <td><code>object</code></td>
    <td>Output only. Export job result. (id: GoogleCloudDataplexV1MetadataJobExportJobResult)</td>
</tr>
<tr>
    <td><CopyableCode code="exportSpec" /></td>
    <td><code>object</code></td>
    <td>Export job specification. (id: GoogleCloudDataplexV1MetadataJobExportJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="importResult" /></td>
    <td><code>object</code></td>
    <td>Output only. Import job result. (id: GoogleCloudDataplexV1MetadataJobImportJobResult)</td>
</tr>
<tr>
    <td><CopyableCode code="importSpec" /></td>
    <td><code>object</code></td>
    <td>Import job specification. (id: GoogleCloudDataplexV1MetadataJobImportJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata job status. (id: GoogleCloudDataplexV1MetadataJobStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Metadata job type.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-generated, globally unique ID for the metadata job. If the metadata job is deleted and then re-created with the same name, this ID is different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata job was updated.</td>
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
    <td><a href="#projects_locations_metadata_jobs_get"><CopyableCode code="projects_locations_metadata_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataJobsId"><code>metadataJobsId</code></a></td>
    <td></td>
    <td>Gets a metadata job.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_jobs_list"><CopyableCode code="projects_locations_metadata_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists metadata jobs.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_jobs_create"><CopyableCode code="projects_locations_metadata_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-metadataJobId"><code>metadataJobId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a metadata job. For example, use a metadata job to import metadata from a third-party system into Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_jobs_cancel"><CopyableCode code="projects_locations_metadata_jobs_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataJobsId"><code>metadataJobsId</code></a></td>
    <td></td>
    <td>Cancels a metadata job.If you cancel a metadata import job that is in progress, the changes in the job might be partially applied. We recommend that you reset the state of the entry groups in your project by running another metadata job that reverts the changes from the canceled job.</td>
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
<tr id="parameter-metadataJobsId">
    <td><CopyableCode code="metadataJobsId" /></td>
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
<tr id="parameter-metadataJobId">
    <td><CopyableCode code="metadataJobId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_metadata_jobs_get"
    values={[
        { label: 'projects_locations_metadata_jobs_get', value: 'projects_locations_metadata_jobs_get' },
        { label: 'projects_locations_metadata_jobs_list', value: 'projects_locations_metadata_jobs_list' }
    ]}
>
<TabItem value="projects_locations_metadata_jobs_get">

Gets a metadata job.

```sql
SELECT
name,
createTime,
exportResult,
exportSpec,
importResult,
importSpec,
labels,
status,
type,
uid,
updateTime
FROM google.dataplex.metadata_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataJobsId = '{{ metadataJobsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_metadata_jobs_list">

Lists metadata jobs.

```sql
SELECT
name,
createTime,
exportResult,
exportSpec,
importResult,
importSpec,
labels,
status,
type,
uid,
updateTime
FROM google.dataplex.metadata_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_metadata_jobs_create"
    values={[
        { label: 'projects_locations_metadata_jobs_create', value: 'projects_locations_metadata_jobs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_metadata_jobs_create">

Creates a metadata job. For example, use a metadata job to import metadata from a third-party system into Dataplex Universal Catalog.

```sql
INSERT INTO google.dataplex.metadata_jobs (
data__labels,
data__type,
data__importSpec,
data__exportSpec,
projectsId,
locationsId,
metadataJobId,
validateOnly
)
SELECT 
'{{ labels }}',
'{{ type }}',
'{{ importSpec }}',
'{{ exportSpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ metadataJobId }}',
'{{ validateOnly }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: metadata_jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the metadata_jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the metadata_jobs resource.
    - name: labels
      value: object
      description: >
        Optional. User-defined labels.
        
    - name: type
      value: string
      description: >
        Required. Metadata job type.
        
      valid_values: ['TYPE_UNSPECIFIED', 'IMPORT', 'EXPORT']
    - name: importSpec
      value: object
      description: >
        Import job specification.
        
    - name: exportSpec
      value: object
      description: >
        Export job specification.
        
    - name: metadataJobId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_metadata_jobs_cancel"
    values={[
        { label: 'projects_locations_metadata_jobs_cancel', value: 'projects_locations_metadata_jobs_cancel' }
    ]}
>
<TabItem value="projects_locations_metadata_jobs_cancel">

Cancels a metadata job.If you cancel a metadata import job that is in progress, the changes in the job might be partially applied. We recommend that you reset the state of the entry groups in your project by running another metadata job that reverts the changes from the canceled job.

```sql
EXEC google.dataplex.metadata_jobs.projects_locations_metadata_jobs_cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataJobsId='{{ metadataJobsId }}' --required;
```
</TabItem>
</Tabs>
