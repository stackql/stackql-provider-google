--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.datasets" /></td></tr>
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
    <td>Immutable. Identifier. Resource name of the dataset. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/datasets/&#123;dataset&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dataset create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Dataset description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name for the dataaset</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Option TTL for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Dataset usage type.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dataset update time.</td>
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
    <td>Immutable. Identifier. Resource name of the dataset. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/datasets/&#123;dataset&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dataset create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Dataset description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name for the dataaset</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Option TTL for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Dataset usage type.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dataset update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Gets a dataset.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List datasets matching the input.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-datasetId"><code>datasetId</code></a></td>
    <td>Creates a dataset.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a dataset.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Delete a dataset.</td>
</tr>
<tr>
    <td><a href="#bulk_delete_feedback_labels"><CopyableCode code="bulk_delete_feedback_labels" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Delete feedback labels in bulk using a filter.</td>
</tr>
<tr>
    <td><a href="#bulk_upload_feedback_labels"><CopyableCode code="bulk_upload_feedback_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.</td>
</tr>
<tr>
    <td><a href="#bulk_download_feedback_labels"><CopyableCode code="bulk_download_feedback_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td>Export insights data to a destination defined in the request body.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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
<tr id="parameter-datasetId">
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets a dataset.

```sql
SELECT
name,
createTime,
description,
displayName,
ttl,
type,
updateTime
FROM google.contactcenterinsights.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List datasets matching the input.

```sql
SELECT
name,
createTime,
description,
displayName,
ttl,
type,
updateTime
FROM google.contactcenterinsights.datasets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a dataset.

```sql
INSERT INTO google.contactcenterinsights.datasets (
data__name,
data__displayName,
data__description,
data__type,
data__ttl,
projectsId,
locationsId,
datasetId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ type }}',
'{{ ttl }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datasetId }}'
RETURNING
name,
createTime,
description,
displayName,
ttl,
type,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: datasets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the datasets resource.
    - name: locationsId
      value: string
      description: Required parameter for the datasets resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. Resource name of the dataset. Format: projects/{project}/locations/{location}/datasets/{dataset}
        
    - name: displayName
      value: string
      description: >
        Display name for the dataaset
        
    - name: description
      value: string
      description: >
        Dataset description.
        
    - name: type
      value: string
      description: >
        Dataset usage type.
        
      valid_values: ['TYPE_UNSPECIFIED', 'EVAL', 'LIVE']
    - name: ttl
      value: string
      description: >
        Optional. Option TTL for the dataset.
        
    - name: datasetId
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

Updates a dataset.

```sql
UPDATE google.contactcenterinsights.datasets
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__type = '{{ type }}',
data__ttl = '{{ ttl }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
ttl,
type,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'bulk_delete_feedback_labels', value: 'bulk_delete_feedback_labels' }
    ]}
>
<TabItem value="delete">

Delete a dataset.

```sql
DELETE FROM google.contactcenterinsights.datasets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required;
```
</TabItem>
<TabItem value="bulk_delete_feedback_labels">

Delete feedback labels in bulk using a filter.

```sql
DELETE FROM google.contactcenterinsights.datasets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="bulk_upload_feedback_labels"
    values={[
        { label: 'bulk_upload_feedback_labels', value: 'bulk_upload_feedback_labels' },
        { label: 'bulk_download_feedback_labels', value: 'bulk_download_feedback_labels' },
        { label: 'export', value: 'export' }
    ]}
>
<TabItem value="bulk_upload_feedback_labels">

Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.

```sql
EXEC google.contactcenterinsights.datasets.bulk_upload_feedback_labels 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"gcsSource": "{{ gcsSource }}", 
"sheetsSource": "{{ sheetsSource }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="bulk_download_feedback_labels">

Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.

```sql
EXEC google.contactcenterinsights.datasets.bulk_download_feedback_labels 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"gcsDestination": "{{ gcsDestination }}", 
"sheetsDestination": "{{ sheetsDestination }}", 
"parent": "{{ parent }}", 
"filter": "{{ filter }}", 
"maxDownloadCount": {{ maxDownloadCount }}, 
"feedbackLabelType": "{{ feedbackLabelType }}", 
"conversationFilter": "{{ conversationFilter }}", 
"templateQaScorecardId": "{{ templateQaScorecardId }}"
}';
```
</TabItem>
<TabItem value="export">

Export insights data to a destination defined in the request body.

```sql
EXEC google.contactcenterinsights.datasets.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"bigQueryDestination": "{{ bigQueryDestination }}", 
"parent": "{{ parent }}", 
"filter": "{{ filter }}", 
"kmsKey": "{{ kmsKey }}", 
"writeDisposition": "{{ writeDisposition }}", 
"exportSchemaVersion": "{{ exportSchemaVersion }}"
}';
```
</TabItem>
</Tabs>
