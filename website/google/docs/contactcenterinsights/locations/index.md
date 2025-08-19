--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
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

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.locations" /></td></tr>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Delete feedback labels in bulk using a filter.</td>
</tr>
<tr>
    <td><a href="#query_metrics"><CopyableCode code="query_metrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Query metrics.</td>
</tr>
<tr>
    <td><a href="#query_performance_overview"><CopyableCode code="query_performance_overview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.</td>
</tr>
<tr>
    <td><a href="#bulk_upload_feedback_labels"><CopyableCode code="bulk_upload_feedback_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.</td>
</tr>
<tr>
    <td><a href="#bulk_download_feedback_labels"><CopyableCode code="bulk_download_feedback_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
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
DELETE FROM google.contactcenterinsights.locations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query_metrics"
    values={[
        { label: 'query_metrics', value: 'query_metrics' },
        { label: 'query_performance_overview', value: 'query_performance_overview' },
        { label: 'bulk_upload_feedback_labels', value: 'bulk_upload_feedback_labels' },
        { label: 'bulk_download_feedback_labels', value: 'bulk_download_feedback_labels' }
    ]}
>
<TabItem value="query_metrics">

Query metrics.

```sql
EXEC google.contactcenterinsights.locations.query_metrics 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"timeGranularity": "{{ timeGranularity }}", 
"dimensions": "{{ dimensions }}", 
"measureMask": "{{ measureMask }}"
}';
```
</TabItem>
<TabItem value="query_performance_overview">

Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.

```sql
EXEC google.contactcenterinsights.locations.query_performance_overview 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"agentPerformanceSource": "{{ agentPerformanceSource }}", 
"filter": "{{ filter }}", 
"queryInterval": "{{ queryInterval }}", 
"comparisonQueryInterval": "{{ comparisonQueryInterval }}"
}';
```
</TabItem>
<TabItem value="bulk_upload_feedback_labels">

Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.

```sql
EXEC google.contactcenterinsights.locations.bulk_upload_feedback_labels 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
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
EXEC google.contactcenterinsights.locations.bulk_download_feedback_labels 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
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
