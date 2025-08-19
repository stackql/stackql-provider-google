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

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="bulk_delete_feedback_labels"
    values={[
        { label: 'bulk_delete_feedback_labels', value: 'bulk_delete_feedback_labels' }
    ]}
>
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
        { label: 'bulk_download_feedback_labels', value: 'bulk_download_feedback_labels' }
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
</Tabs>
