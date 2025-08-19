--- 
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
  - aiplatform
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

Creates, updates, deletes, gets or lists an <code>experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>experiments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.experiments" /></td></tr>
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

A TensorboardExperiment is a group of TensorboardRuns, that are typically the results of a training job run, in a Tensorboard.

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
    <td>Output only. Name of the TensorboardExperiment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/tensorboards/&#123;tensorboard&#125;/experiments/&#123;experiment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this TensorboardExperiment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of this TensorboardExperiment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided name of this TensorboardExperiment.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your TensorboardExperiment. Label keys and values cannot be longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `aiplatform.googleapis.com/` and are immutable. The following system labels exist for each Dataset: * `aiplatform.googleapis.com/dataset_metadata_schema`: output only. Its value is the metadata_schema's title.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Immutable. Source of the TensorboardExperiment. Example: a custom training job.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this TensorboardExperiment was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for TensorboardService.ListTensorboardExperiments.

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
    <td>A token, which can be sent as ListTensorboardExperimentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="tensorboardExperiments" /></td>
    <td><code>array</code></td>
    <td>The TensorboardExperiments mathching the request.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Gets a TensorboardExperiment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists TensorboardExperiments in a Location.</td>
</tr>
<tr>
    <td><a href="#batch_create"><CopyableCode code="batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Batch create TensorboardTimeSeries that belong to a TensorboardExperiment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a></td>
    <td><a href="#parameter-tensorboardExperimentId"><code>tensorboardExperimentId</code></a></td>
    <td>Creates a TensorboardExperiment.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a TensorboardExperiment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Deletes a TensorboardExperiment.</td>
</tr>
<tr>
    <td><a href="#write"><CopyableCode code="write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td>Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's. If any data fail to be ingested, an error is returned.</td>
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
<tr id="parameter-experimentsId">
    <td><CopyableCode code="experimentsId" /></td>
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
<tr id="parameter-tensorboardsId">
    <td><CopyableCode code="tensorboardsId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-tensorboardExperimentId">
    <td><CopyableCode code="tensorboardExperimentId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a TensorboardExperiment.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
source,
updateTime
FROM google.aiplatform.experiments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tensorboardsId = '{{ tensorboardsId }}' -- required
AND experimentsId = '{{ experimentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists TensorboardExperiments in a Location.

```sql
SELECT
nextPageToken,
tensorboardExperiments
FROM google.aiplatform.experiments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tensorboardsId = '{{ tensorboardsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="batch_create"
    values={[
        { label: 'batch_create', value: 'batch_create' },
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="batch_create">

Batch create TensorboardTimeSeries that belong to a TensorboardExperiment.

```sql
INSERT INTO google.aiplatform.experiments (
data__requests,
projectsId,
locationsId,
tensorboardsId,
experimentsId
)
SELECT 
'{{ requests }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ tensorboardsId }}',
'{{ experimentsId }}'
RETURNING
tensorboardTimeSeries
;
```
</TabItem>
<TabItem value="create">

Creates a TensorboardExperiment.

```sql
INSERT INTO google.aiplatform.experiments (
data__displayName,
data__description,
data__labels,
data__etag,
data__source,
projectsId,
locationsId,
tensorboardsId,
tensorboardExperimentId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ labels }}',
'{{ etag }}',
'{{ source }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ tensorboardsId }}',
'{{ tensorboardExperimentId }}'
RETURNING
name,
createTime,
description,
displayName,
etag,
labels,
source,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: experiments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the experiments resource.
    - name: locationsId
      value: string
      description: Required parameter for the experiments resource.
    - name: tensorboardsId
      value: string
      description: Required parameter for the experiments resource.
    - name: experimentsId
      value: string
      description: Required parameter for the experiments resource.
    - name: requests
      value: array
      description: >
        Required. The request message specifying the TensorboardTimeSeries to create. A maximum of 1000 TensorboardTimeSeries can be created in a batch.
        
    - name: displayName
      value: string
      description: >
        User provided name of this TensorboardExperiment.
        
    - name: description
      value: string
      description: >
        Description of this TensorboardExperiment.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your TensorboardExperiment. Label keys and values cannot be longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `aiplatform.googleapis.com/` and are immutable. The following system labels exist for each Dataset: * `aiplatform.googleapis.com/dataset_metadata_schema`: output only. Its value is the metadata_schema's title.
        
    - name: etag
      value: string
      description: >
        Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: source
      value: string
      description: >
        Immutable. Source of the TensorboardExperiment. Example: a custom training job.
        
    - name: tensorboardExperimentId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a TensorboardExperiment.

```sql
UPDATE google.aiplatform.experiments
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__source = '{{ source }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tensorboardsId = '{{ tensorboardsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
etag,
labels,
source,
updateTime;
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

Deletes a TensorboardExperiment.

```sql
DELETE FROM google.aiplatform.experiments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tensorboardsId = '{{ tensorboardsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="write"
    values={[
        { label: 'write', value: 'write' }
    ]}
>
<TabItem value="write">

Write time series data points of multiple TensorboardTimeSeries in multiple TensorboardRun's. If any data fail to be ingested, an error is returned.

```sql
EXEC google.aiplatform.experiments.write 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tensorboardsId='{{ tensorboardsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required 
@@json=
'{
"writeRunDataRequests": "{{ writeRunDataRequests }}"
}';
```
</TabItem>
</Tabs>
