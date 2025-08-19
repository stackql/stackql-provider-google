--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - storagebatchoperations
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storagebatchoperations.jobs" /></td></tr>
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

The Storage Batch Operations Job description.

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
    <td>Identifier. The resource name of the Job. job_id is unique within the project, that is either set by the customer or defined by the service. Format: projects/&#123;project&#125;/locations/global/jobs/&#123;job_id&#125; . For example: "projects/123456/locations/global/jobs/job01".</td>
</tr>
<tr>
    <td><CopyableCode code="bucketList" /></td>
    <td><code>object</code></td>
    <td>Specifies a list of buckets and their objects to be transformed. (id: BucketList)</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the progress of the job. (id: Counters)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteObject" /></td>
    <td><code>object</code></td>
    <td>Delete objects. (id: DeleteObject)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="errorSummaries" /></td>
    <td><code>array</code></td>
    <td>Output only. Summarizes errors encountered with sample error log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Logging configuration. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="putMetadata" /></td>
    <td><code>object</code></td>
    <td>Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. (id: PutMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="putObjectHold" /></td>
    <td><code>object</code></td>
    <td>Changes object hold status. (id: PutObjectHold)</td>
</tr>
<tr>
    <td><CopyableCode code="rewriteObject" /></td>
    <td><code>object</code></td>
    <td>Rewrite the object and updates metadata like KMS key. (id: RewriteObject)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the job was scheduled.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Message for response to listing Jobs

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
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>A list of storage batch jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Gets a batch job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Jobs in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a batch job.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a batch job.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Cancels a batch job.</td>
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
<tr id="parameter-jobsId">
    <td><CopyableCode code="jobsId" /></td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets a batch job.

```sql
SELECT
name,
bucketList,
completeTime,
counters,
createTime,
deleteObject,
description,
errorSummaries,
loggingConfig,
putMetadata,
putObjectHold,
rewriteObject,
scheduleTime,
state
FROM google.storagebatchoperations.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Jobs in a given project.

```sql
SELECT
jobs,
nextPageToken,
unreachable
FROM google.storagebatchoperations.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a batch job.

```sql
INSERT INTO google.storagebatchoperations.jobs (
data__name,
data__description,
data__bucketList,
data__putObjectHold,
data__deleteObject,
data__putMetadata,
data__rewriteObject,
data__loggingConfig,
projectsId,
locationsId,
jobId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ bucketList }}',
'{{ putObjectHold }}',
'{{ deleteObject }}',
'{{ putMetadata }}',
'{{ rewriteObject }}',
'{{ loggingConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ jobId }}',
'{{ requestId }}'
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
- name: jobs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the jobs resource.
    - name: locationsId
      value: string
      description: Required parameter for the jobs resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the Job. job_id is unique within the project, that is either set by the customer or defined by the service. Format: projects/{project}/locations/global/jobs/{job_id} . For example: "projects/123456/locations/global/jobs/job01".
        
    - name: description
      value: string
      description: >
        Optional. A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.
        
    - name: bucketList
      value: object
      description: >
        Specifies a list of buckets and their objects to be transformed.
        
    - name: putObjectHold
      value: object
      description: >
        Changes object hold status.
        
    - name: deleteObject
      value: object
      description: >
        Delete objects.
        
    - name: putMetadata
      value: object
      description: >
        Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time.
        
    - name: rewriteObject
      value: object
      description: >
        Rewrite the object and updates metadata like KMS key.
        
    - name: loggingConfig
      value: object
      description: >
        Optional. Logging configuration.
        
    - name: jobId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a batch job.

```sql
DELETE FROM google.storagebatchoperations.jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND requestId = '{{ requestId }}';
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

Cancels a batch job.

```sql
EXEC google.storagebatchoperations.jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobsId='{{ jobsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
