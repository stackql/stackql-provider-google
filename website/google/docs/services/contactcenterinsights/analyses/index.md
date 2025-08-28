--- 
title: analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - analyses
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

Creates, updates, deletes, gets or lists an <code>analyses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>analyses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.analyses" /></td></tr>
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
    <td>Immutable. The resource name of the analysis. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/conversations/&#123;conversation&#125;/analyses/&#123;analysis&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="analysisResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of the analysis, which is populated when the analysis finishes. (id: GoogleCloudContactcenterinsightsV1AnalysisResult)</td>
</tr>
<tr>
    <td><CopyableCode code="annotatorSelector" /></td>
    <td><code>object</code></td>
    <td>To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run. (id: GoogleCloudContactcenterinsightsV1AnnotatorSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the analysis was created, which occurs when the long-running operation completes.</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the analysis was requested.</td>
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
    <td>Immutable. The resource name of the analysis. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/conversations/&#123;conversation&#125;/analyses/&#123;analysis&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="analysisResult" /></td>
    <td><code>object</code></td>
    <td>Output only. The result of the analysis, which is populated when the analysis finishes. (id: GoogleCloudContactcenterinsightsV1AnalysisResult)</td>
</tr>
<tr>
    <td><CopyableCode code="annotatorSelector" /></td>
    <td><code>object</code></td>
    <td>To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run. (id: GoogleCloudContactcenterinsightsV1AnnotatorSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the analysis was created, which occurs when the long-running operation completes.</td>
</tr>
<tr>
    <td><CopyableCode code="requestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the analysis was requested.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-analysesId"><code>analysesId</code></a></td>
    <td></td>
    <td>Gets an analysis.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists analyses.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Creates an analysis. The long running operation is done when the analysis has completed.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-analysesId"><code>analysesId</code></a></td>
    <td></td>
    <td>Deletes an analysis.</td>
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
<tr id="parameter-analysesId">
    <td><CopyableCode code="analysesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-authorizedViewSetsId">
    <td><CopyableCode code="authorizedViewSetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-authorizedViewsId">
    <td><CopyableCode code="authorizedViewsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-conversationsId">
    <td><CopyableCode code="conversationsId" /></td>
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

Gets an analysis.

```sql
SELECT
name,
analysisResult,
annotatorSelector,
createTime,
requestTime
FROM google.contactcenterinsights.analyses
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND analysesId = '{{ analysesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists analyses.

```sql
SELECT
name,
analysisResult,
annotatorSelector,
createTime,
requestTime
FROM google.contactcenterinsights.analyses
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
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

Creates an analysis. The long running operation is done when the analysis has completed.

```sql
INSERT INTO google.contactcenterinsights.analyses (
data__name,
data__annotatorSelector,
projectsId,
locationsId,
authorizedViewSetsId,
authorizedViewsId,
conversationsId
)
SELECT 
'{{ name }}',
'{{ annotatorSelector }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authorizedViewSetsId }}',
'{{ authorizedViewsId }}',
'{{ conversationsId }}'
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
- name: analyses
  props:
    - name: projectsId
      value: string
      description: Required parameter for the analyses resource.
    - name: locationsId
      value: string
      description: Required parameter for the analyses resource.
    - name: authorizedViewSetsId
      value: string
      description: Required parameter for the analyses resource.
    - name: authorizedViewsId
      value: string
      description: Required parameter for the analyses resource.
    - name: conversationsId
      value: string
      description: Required parameter for the analyses resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}
        
    - name: annotatorSelector
      value: object
      description: >
        To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.
        
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

Deletes an analysis.

```sql
DELETE FROM google.contactcenterinsights.analyses
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND analysesId = '{{ analysesId }}' --required;
```
</TabItem>
</Tabs>
