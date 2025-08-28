--- 
title: image_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - image_import_jobs
  - vmmigration
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

Creates, updates, deletes, gets or lists an <code>image_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>image_import_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.image_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td>Output only. The resource path of the ImageImportJob.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudStorageUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The path to the Cloud Storage file from which the image should be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the image import was created (as an API call, not when it was actually created in the target).</td>
</tr>
<tr>
    <td><CopyableCode code="createdResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource paths of the resources created by the image import job.</td>
</tr>
<tr>
    <td><CopyableCode code="diskImageTargetDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Target details used to import a disk image. (id: DiskImageTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the image import was ended.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Provides details on the error that led to the image import state in case of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="machineImageTargetDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Target details used to import a machine image. (id: MachineImageTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the image import.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Output only. The image import steps list representing its progress.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. Warnings that occurred during the image import.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Output only. The resource path of the ImageImportJob.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudStorageUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The path to the Cloud Storage file from which the image should be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the image import was created (as an API call, not when it was actually created in the target).</td>
</tr>
<tr>
    <td><CopyableCode code="createdResources" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource paths of the resources created by the image import job.</td>
</tr>
<tr>
    <td><CopyableCode code="diskImageTargetDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Target details used to import a disk image. (id: DiskImageTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the image import was ended.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Provides details on the error that led to the image import state in case of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="machineImageTargetDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Target details used to import a machine image. (id: MachineImageTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the image import.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Output only. The image import steps list representing its progress.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. Warnings that occurred during the image import.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-imageImportsId"><code>imageImportsId</code></a>, <a href="#parameter-imageImportJobsId"><code>imageImportJobsId</code></a></td>
    <td></td>
    <td>Gets details of a single ImageImportJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-imageImportsId"><code>imageImportsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ImageImportJobs in a given project.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-imageImportsId"><code>imageImportsId</code></a>, <a href="#parameter-imageImportJobsId"><code>imageImportJobsId</code></a></td>
    <td></td>
    <td>Initiates the cancellation of a running clone job.</td>
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
<tr id="parameter-imageImportJobsId">
    <td><CopyableCode code="imageImportJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-imageImportsId">
    <td><CopyableCode code="imageImportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single ImageImportJob.

```sql
SELECT
name,
cloudStorageUri,
createTime,
createdResources,
diskImageTargetDetails,
endTime,
errors,
machineImageTargetDetails,
state,
steps,
warnings
FROM google.vmmigration.image_import_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND imageImportsId = '{{ imageImportsId }}' -- required
AND imageImportJobsId = '{{ imageImportJobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ImageImportJobs in a given project.

```sql
SELECT
name,
cloudStorageUri,
createTime,
createdResources,
diskImageTargetDetails,
endTime,
errors,
machineImageTargetDetails,
state,
steps,
warnings
FROM google.vmmigration.image_import_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND imageImportsId = '{{ imageImportsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Initiates the cancellation of a running clone job.

```sql
EXEC google.vmmigration.image_import_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@imageImportsId='{{ imageImportsId }}' --required, 
@imageImportJobsId='{{ imageImportJobsId }}' --required;
```
</TabItem>
</Tabs>
