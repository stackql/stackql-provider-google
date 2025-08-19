--- 
title: time_series
hide_title: false
hide_table_of_contents: false
keywords:
  - time_series
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

Creates, updates, deletes, gets or lists a <code>time_series</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>time_series</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.time_series" /></td></tr>
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

TensorboardTimeSeries maps to times series produced in training runs

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
    <td>Output only. Name of the TensorboardTimeSeries.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this TensorboardTimeSeries was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of this TensorboardTimeSeries.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User provided name of this TensorboardTimeSeries. This value should be unique among all TensorboardTimeSeries resources belonging to the same TensorboardRun resource (parent resource).</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Scalar, Tensor, or Blob metadata for this TensorboardTimeSeries. (id: GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="pluginData" /></td>
    <td><code>string (byte)</code></td>
    <td>Data of the current plugin, with the size limited to 65KB.</td>
</tr>
<tr>
    <td><CopyableCode code="pluginName" /></td>
    <td><code>string</code></td>
    <td>Immutable. Name of the plugin this time series pertain to. Such as Scalar, Tensor, Blob</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this TensorboardTimeSeries was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Type of TensorboardTimeSeries value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for TensorboardService.ListTensorboardTimeSeries.

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
    <td>A token, which can be sent as ListTensorboardTimeSeriesRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="tensorboardTimeSeries" /></td>
    <td><code>array</code></td>
    <td>The TensorboardTimeSeries mathching the request.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a></td>
    <td></td>
    <td>Gets a TensorboardTimeSeries.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists TensorboardTimeSeries in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a></td>
    <td><a href="#parameter-tensorboardTimeSeriesId"><code>tensorboardTimeSeriesId</code></a></td>
    <td>Creates a TensorboardTimeSeries.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a TensorboardTimeSeries.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a></td>
    <td></td>
    <td>Deletes a TensorboardTimeSeries.</td>
</tr>
<tr>
    <td><a href="#read"><CopyableCode code="read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a></td>
    <td><a href="#parameter-maxDataPoints"><code>maxDataPoints</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Reads a TensorboardTimeSeries' data. By default, if the number of data points stored is less than 1000, all data is returned. Otherwise, 1000 data points is randomly selected from this time series and returned. This value can be changed by changing max_data_points, which can't be greater than 10k.</td>
</tr>
<tr>
    <td><a href="#read_blob_data"><CopyableCode code="read_blob_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a></td>
    <td><a href="#parameter-blobIds"><code>blobIds</code></a></td>
    <td>Gets bytes of TensorboardBlobs. This is to allow reading blob data stored in consumer project's Cloud Storage bucket without users having to obtain Cloud Storage access permission.</td>
</tr>
<tr>
    <td><a href="#export_tensorboard_time_series"><CopyableCode code="export_tensorboard_time_series" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tensorboardsId"><code>tensorboardsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a>, <a href="#parameter-runsId"><code>runsId</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a></td>
    <td></td>
    <td>Exports a TensorboardTimeSeries' data. Data is returned in paginated responses.</td>
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
<tr id="parameter-runsId">
    <td><CopyableCode code="runsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tensorboardsId">
    <td><CopyableCode code="tensorboardsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeSeriesId">
    <td><CopyableCode code="timeSeriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-blobIds">
    <td><CopyableCode code="blobIds" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxDataPoints">
    <td><CopyableCode code="maxDataPoints" /></td>
    <td><code>integer (int32)</code></td>
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
<tr id="parameter-tensorboardTimeSeriesId">
    <td><CopyableCode code="tensorboardTimeSeriesId" /></td>
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

Gets a TensorboardTimeSeries.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
metadata,
pluginData,
pluginName,
updateTime,
valueType
FROM google.aiplatform.time_series
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tensorboardsId = '{{ tensorboardsId }}' -- required
AND experimentsId = '{{ experimentsId }}' -- required
AND runsId = '{{ runsId }}' -- required
AND timeSeriesId = '{{ timeSeriesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists TensorboardTimeSeries in a Location.

```sql
SELECT
nextPageToken,
tensorboardTimeSeries
FROM google.aiplatform.time_series
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tensorboardsId = '{{ tensorboardsId }}' -- required
AND experimentsId = '{{ experimentsId }}' -- required
AND runsId = '{{ runsId }}' -- required
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a TensorboardTimeSeries.

```sql
INSERT INTO google.aiplatform.time_series (
data__displayName,
data__description,
data__valueType,
data__etag,
data__pluginName,
data__pluginData,
projectsId,
locationsId,
tensorboardsId,
experimentsId,
runsId,
tensorboardTimeSeriesId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ valueType }}',
'{{ etag }}',
'{{ pluginName }}',
'{{ pluginData }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ tensorboardsId }}',
'{{ experimentsId }}',
'{{ runsId }}',
'{{ tensorboardTimeSeriesId }}'
RETURNING
name,
createTime,
description,
displayName,
etag,
metadata,
pluginData,
pluginName,
updateTime,
valueType
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: time_series
  props:
    - name: projectsId
      value: string
      description: Required parameter for the time_series resource.
    - name: locationsId
      value: string
      description: Required parameter for the time_series resource.
    - name: tensorboardsId
      value: string
      description: Required parameter for the time_series resource.
    - name: experimentsId
      value: string
      description: Required parameter for the time_series resource.
    - name: runsId
      value: string
      description: Required parameter for the time_series resource.
    - name: displayName
      value: string
      description: >
        Required. User provided name of this TensorboardTimeSeries. This value should be unique among all TensorboardTimeSeries resources belonging to the same TensorboardRun resource (parent resource).
        
    - name: description
      value: string
      description: >
        Description of this TensorboardTimeSeries.
        
    - name: valueType
      value: string
      description: >
        Required. Immutable. Type of TensorboardTimeSeries value.
        
      valid_values: ['VALUE_TYPE_UNSPECIFIED', 'SCALAR', 'TENSOR', 'BLOB_SEQUENCE']
    - name: etag
      value: string
      description: >
        Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: pluginName
      value: string
      description: >
        Immutable. Name of the plugin this time series pertain to. Such as Scalar, Tensor, Blob
        
    - name: pluginData
      value: string
      description: >
        Data of the current plugin, with the size limited to 65KB.
        
    - name: tensorboardTimeSeriesId
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

Updates a TensorboardTimeSeries.

```sql
UPDATE google.aiplatform.time_series
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__valueType = '{{ valueType }}',
data__etag = '{{ etag }}',
data__pluginName = '{{ pluginName }}',
data__pluginData = '{{ pluginData }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tensorboardsId = '{{ tensorboardsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required
AND runsId = '{{ runsId }}' --required
AND timeSeriesId = '{{ timeSeriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
etag,
metadata,
pluginData,
pluginName,
updateTime,
valueType;
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

Deletes a TensorboardTimeSeries.

```sql
DELETE FROM google.aiplatform.time_series
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tensorboardsId = '{{ tensorboardsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required
AND runsId = '{{ runsId }}' --required
AND timeSeriesId = '{{ timeSeriesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="read"
    values={[
        { label: 'read', value: 'read' },
        { label: 'read_blob_data', value: 'read_blob_data' },
        { label: 'export_tensorboard_time_series', value: 'export_tensorboard_time_series' }
    ]}
>
<TabItem value="read">

Reads a TensorboardTimeSeries' data. By default, if the number of data points stored is less than 1000, all data is returned. Otherwise, 1000 data points is randomly selected from this time series and returned. This value can be changed by changing max_data_points, which can't be greater than 10k.

```sql
EXEC google.aiplatform.time_series.read 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tensorboardsId='{{ tensorboardsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required, 
@runsId='{{ runsId }}' --required, 
@timeSeriesId='{{ timeSeriesId }}' --required, 
@maxDataPoints='{{ maxDataPoints }}', 
@filter='{{ filter }}';
```
</TabItem>
<TabItem value="read_blob_data">

Gets bytes of TensorboardBlobs. This is to allow reading blob data stored in consumer project's Cloud Storage bucket without users having to obtain Cloud Storage access permission.

```sql
EXEC google.aiplatform.time_series.read_blob_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tensorboardsId='{{ tensorboardsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required, 
@runsId='{{ runsId }}' --required, 
@timeSeriesId='{{ timeSeriesId }}' --required, 
@blobIds='{{ blobIds }}';
```
</TabItem>
<TabItem value="export_tensorboard_time_series">

Exports a TensorboardTimeSeries' data. Data is returned in paginated responses.

```sql
EXEC google.aiplatform.time_series.export_tensorboard_time_series 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tensorboardsId='{{ tensorboardsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required, 
@runsId='{{ runsId }}' --required, 
@timeSeriesId='{{ timeSeriesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"orderBy": "{{ orderBy }}"
}';
```
</TabItem>
</Tabs>
