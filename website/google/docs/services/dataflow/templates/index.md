--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - dataflow
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_templates_get"
    values={[
        { label: 'projects_locations_templates_get', value: 'projects_locations_templates_get' },
        { label: 'projects_templates_get', value: 'projects_templates_get' }
    ]}
>
<TabItem value="projects_locations_templates_get">

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
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The template metadata describing the template name, available parameters, etc. (id: TemplateMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMetadata" /></td>
    <td><code>object</code></td>
    <td>Describes the runtime metadata with SDKInfo and available parameters. (id: RuntimeMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the get template request. Any problems with the request will be indicated in the error_details. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="templateType" /></td>
    <td><code>string</code></td>
    <td>Template Type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_templates_get">

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
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The template metadata describing the template name, available parameters, etc. (id: TemplateMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMetadata" /></td>
    <td><code>object</code></td>
    <td>Describes the runtime metadata with SDKInfo and available parameters. (id: RuntimeMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the get template request. Any problems with the request will be indicated in the error_details. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="templateType" /></td>
    <td><code>string</code></td>
    <td>Template Type.</td>
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
    <td><a href="#projects_locations_templates_get"><CopyableCode code="projects_locations_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td><a href="#parameter-gcsPath"><code>gcsPath</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.</td>
</tr>
<tr>
    <td><a href="#projects_templates_get"><CopyableCode code="projects_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-gcsPath"><code>gcsPath</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_create"><CopyableCode code="projects_locations_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td></td>
    <td>Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.</td>
</tr>
<tr>
    <td><a href="#projects_templates_create"><CopyableCode code="projects_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.</td>
</tr>
<tr>
    <td><a href="#projects_templates_launch"><CopyableCode code="projects_templates_launch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-gcsPath"><code>gcsPath</code></a>, <a href="#parameter-dynamicTemplate.gcsPath"><code>dynamicTemplate.gcsPath</code></a>, <a href="#parameter-dynamicTemplate.stagingLocation"><code>dynamicTemplate.stagingLocation</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_launch"><CopyableCode code="projects_locations_templates_launch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-gcsPath"><code>gcsPath</code></a>, <a href="#parameter-dynamicTemplate.gcsPath"><code>dynamicTemplate.gcsPath</code></a>, <a href="#parameter-dynamicTemplate.stagingLocation"><code>dynamicTemplate.stagingLocation</code></a></td>
    <td>Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.</td>
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
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dynamicTemplate.gcsPath">
    <td><CopyableCode code="dynamicTemplate.gcsPath" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dynamicTemplate.stagingLocation">
    <td><CopyableCode code="dynamicTemplate.stagingLocation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gcsPath">
    <td><CopyableCode code="gcsPath" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_templates_get"
    values={[
        { label: 'projects_locations_templates_get', value: 'projects_locations_templates_get' },
        { label: 'projects_templates_get', value: 'projects_templates_get' }
    ]}
>
<TabItem value="projects_locations_templates_get">

Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.

```sql
SELECT
metadata,
runtimeMetadata,
status,
templateType
FROM google.dataflow.templates
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND gcsPath = '{{ gcsPath }}'
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_templates_get">

Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.

```sql
SELECT
metadata,
runtimeMetadata,
status,
templateType
FROM google.dataflow.templates
WHERE projectId = '{{ projectId }}' -- required
AND gcsPath = '{{ gcsPath }}'
AND view = '{{ view }}'
AND location = '{{ location }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_templates_create"
    values={[
        { label: 'projects_locations_templates_create', value: 'projects_locations_templates_create' },
        { label: 'projects_templates_create', value: 'projects_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_templates_create">

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.

```sql
INSERT INTO google.dataflow.templates (
data__jobName,
data__gcsPath,
data__parameters,
data__environment,
data__location,
projectId,
location
)
SELECT 
'{{ jobName }}',
'{{ gcsPath }}',
'{{ parameters }}',
'{{ environment }}',
'{{ location }}',
'{{ projectId }}',
'{{ location }}'
RETURNING
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
;
```
</TabItem>
<TabItem value="projects_templates_create">

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.

```sql
INSERT INTO google.dataflow.templates (
data__jobName,
data__gcsPath,
data__parameters,
data__environment,
data__location,
projectId
)
SELECT 
'{{ jobName }}',
'{{ gcsPath }}',
'{{ parameters }}',
'{{ environment }}',
'{{ location }}',
'{{ projectId }}'
RETURNING
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: templates
  props:
    - name: projectId
      value: string
      description: Required parameter for the templates resource.
    - name: location
      value: string
      description: Required parameter for the templates resource.
    - name: jobName
      value: string
      description: >
        Required. The job name to use for the created job.
        
    - name: gcsPath
      value: string
      description: >
        Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
        
    - name: parameters
      value: object
      description: >
        The runtime parameters to pass to the job.
        
    - name: environment
      value: object
      description: >
        The runtime environment for the job.
        
    - name: location
      value: string
      description: >
        The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
        
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_templates_launch"
    values={[
        { label: 'projects_templates_launch', value: 'projects_templates_launch' },
        { label: 'projects_locations_templates_launch', value: 'projects_locations_templates_launch' }
    ]}
>
<TabItem value="projects_templates_launch">

Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.

```sql
EXEC google.dataflow.templates.projects_templates_launch 
@projectId='{{ projectId }}' --required, 
@validateOnly={{ validateOnly }}, 
@gcsPath='{{ gcsPath }}', 
@dynamicTemplate.gcsPath='{{ dynamicTemplate.gcsPath }}', 
@dynamicTemplate.stagingLocation='{{ dynamicTemplate.stagingLocation }}', 
@location='{{ location }}' 
@@json=
'{
"jobName": "{{ jobName }}", 
"parameters": "{{ parameters }}", 
"environment": "{{ environment }}", 
"update": {{ update }}, 
"transformNameMapping": "{{ transformNameMapping }}"
}';
```
</TabItem>
<TabItem value="projects_locations_templates_launch">

Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.

```sql
EXEC google.dataflow.templates.projects_locations_templates_launch 
@projectId='{{ projectId }}' --required, 
@location='{{ location }}' --required, 
@validateOnly={{ validateOnly }}, 
@gcsPath='{{ gcsPath }}', 
@dynamicTemplate.gcsPath='{{ dynamicTemplate.gcsPath }}', 
@dynamicTemplate.stagingLocation='{{ dynamicTemplate.stagingLocation }}' 
@@json=
'{
"jobName": "{{ jobName }}", 
"parameters": "{{ parameters }}", 
"environment": "{{ environment }}", 
"update": {{ update }}, 
"transformNameMapping": "{{ transformNameMapping }}"
}';
```
</TabItem>
</Tabs>
