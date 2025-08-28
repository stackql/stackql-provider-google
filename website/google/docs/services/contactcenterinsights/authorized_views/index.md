--- 
title: authorized_views
hide_title: false
hide_table_of_contents: false
keywords:
  - authorized_views
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

Creates, updates, deletes, gets or lists an <code>authorized_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>authorized_views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.authorized_views" /></td></tr>
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
    <td>Identifier. The resource name of the AuthorizedView. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/authorizedViewSets/&#123;authorized_view_set&#125;/authorizedViews/&#123;authorized_view&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="conversationFilter" /></td>
    <td><code>string</code></td>
    <td>A filter to reduce conversation results to a specific subset. The AuthorizedView's assigned permission (read/write) could be applied to the subset of conversations. If conversation_filter is empty, there is no restriction on the conversations that the AuthorizedView can access. Having *authorizedViews.get* access to the AuthorizedView means having the same read/write access to the Conversations (as well as metadata/annotations linked to the conversation) that this AuthorizedView has.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the authorized view was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name. Limit 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the authorized view was updated.</td>
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
    <td>Identifier. The resource name of the AuthorizedView. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/authorizedViewSets/&#123;authorized_view_set&#125;/authorizedViews/&#123;authorized_view&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="conversationFilter" /></td>
    <td><code>string</code></td>
    <td>A filter to reduce conversation results to a specific subset. The AuthorizedView's assigned permission (read/write) could be applied to the subset of conversations. If conversation_filter is empty, there is no restriction on the conversations that the AuthorizedView can access. Having *authorizedViews.get* access to the AuthorizedView means having the same read/write access to the Conversations (as well as metadata/annotations linked to the conversation) that this AuthorizedView has.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the authorized view was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name. Limit 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the authorized view was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td></td>
    <td>Get AuthorizedView</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>List AuthorizedViewSets</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a></td>
    <td><a href="#parameter-authorizedViewId"><code>authorizedViewId</code></a></td>
    <td>Create AuthorizedView</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an AuthorizedView.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td></td>
    <td>Deletes an AuthorizedView.</td>
</tr>
<tr>
    <td><a href="#query_metrics"><CopyableCode code="query_metrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td></td>
    <td>Query metrics.</td>
</tr>
<tr>
    <td><a href="#query_performance_overview"><CopyableCode code="query_performance_overview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td></td>
    <td>Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.</td>
</tr>
<tr>
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>SearchAuthorizedViewSets</td>
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
<tr id="parameter-authorizedViewId">
    <td><CopyableCode code="authorizedViewId" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
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

Get AuthorizedView

```sql
SELECT
name,
conversationFilter,
createTime,
displayName,
updateTime
FROM google.contactcenterinsights.authorized_views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List AuthorizedViewSets

```sql
SELECT
name,
conversationFilter,
createTime,
displayName,
updateTime
FROM google.contactcenterinsights.authorized_views
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Create AuthorizedView

```sql
INSERT INTO google.contactcenterinsights.authorized_views (
data__name,
data__displayName,
data__conversationFilter,
projectsId,
locationsId,
authorizedViewSetsId,
authorizedViewId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ conversationFilter }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authorizedViewSetsId }}',
'{{ authorizedViewId }}'
RETURNING
name,
conversationFilter,
createTime,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: authorized_views
  props:
    - name: projectsId
      value: string
      description: Required parameter for the authorized_views resource.
    - name: locationsId
      value: string
      description: Required parameter for the authorized_views resource.
    - name: authorizedViewSetsId
      value: string
      description: Required parameter for the authorized_views resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the AuthorizedView. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}/authorizedViews/{authorized_view}
        
    - name: displayName
      value: string
      description: >
        Display Name. Limit 64 characters.
        
    - name: conversationFilter
      value: string
      description: >
        A filter to reduce conversation results to a specific subset. The AuthorizedView's assigned permission (read/write) could be applied to the subset of conversations. If conversation_filter is empty, there is no restriction on the conversations that the AuthorizedView can access. Having *authorizedViews.get* access to the AuthorizedView means having the same read/write access to the Conversations (as well as metadata/annotations linked to the conversation) that this AuthorizedView has.
        
    - name: authorizedViewId
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

Updates an AuthorizedView.

```sql
UPDATE google.contactcenterinsights.authorized_views
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__conversationFilter = '{{ conversationFilter }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
conversationFilter,
createTime,
displayName,
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

Deletes an AuthorizedView.

```sql
DELETE FROM google.contactcenterinsights.authorized_views
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query_metrics"
    values={[
        { label: 'query_metrics', value: 'query_metrics' },
        { label: 'query_performance_overview', value: 'query_performance_overview' },
        { label: 'search', value: 'search' }
    ]}
>
<TabItem value="query_metrics">

Query metrics.

```sql
EXEC google.contactcenterinsights.authorized_views.query_metrics 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required 
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
EXEC google.contactcenterinsights.authorized_views.query_performance_overview 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required 
@@json=
'{
"agentPerformanceSource": "{{ agentPerformanceSource }}", 
"filter": "{{ filter }}", 
"queryInterval": "{{ queryInterval }}", 
"comparisonQueryInterval": "{{ comparisonQueryInterval }}"
}';
```
</TabItem>
<TabItem value="search">

SearchAuthorizedViewSets

```sql
EXEC google.contactcenterinsights.authorized_views.search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@query='{{ query }}', 
@orderBy='{{ orderBy }}';
```
</TabItem>
</Tabs>
