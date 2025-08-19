--- 
title: assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - assessments
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

Creates, updates, deletes, gets or lists an <code>assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>assessments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.assessments" /></td></tr>
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

The assessment resource.

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
    <td>Identifier. The resource name of the assessment. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/conversations/&#123;conversation&#125;/assessments/&#123;assessment&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="agentInfo" /></td>
    <td><code>object</code></td>
    <td>Information about an agent involved in the conversation. (id: GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the assessment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the assessment was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response of listing assessments.

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
    <td><CopyableCode code="assessments" /></td>
    <td><code>array</code></td>
    <td>The assessments that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Get Assessment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List Assessments.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td></td>
    <td>Create Assessment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Delete an Assessment.</td>
</tr>
<tr>
    <td><a href="#publish"><CopyableCode code="publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Publish an Assessment.</td>
</tr>
<tr>
    <td><a href="#appeal"><CopyableCode code="appeal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Appeal an Assessment.</td>
</tr>
<tr>
    <td><a href="#finalize"><CopyableCode code="finalize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Finalize an Assessment.</td>
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
<tr id="parameter-assessmentsId">
    <td><CopyableCode code="assessmentsId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Get Assessment.

```sql
SELECT
name,
agentInfo,
createTime,
state,
updateTime
FROM google.contactcenterinsights.assessments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND assessmentsId = '{{ assessmentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List Assessments.

```sql
SELECT
assessments,
nextPageToken
FROM google.contactcenterinsights.assessments
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

Create Assessment.

```sql
INSERT INTO google.contactcenterinsights.assessments (
data__name,
data__agentInfo,
projectsId,
locationsId,
authorizedViewSetsId,
authorizedViewsId,
conversationsId
)
SELECT 
'{{ name }}',
'{{ agentInfo }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authorizedViewSetsId }}',
'{{ authorizedViewsId }}',
'{{ conversationsId }}'
RETURNING
name,
agentInfo,
createTime,
state,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: assessments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the assessments resource.
    - name: locationsId
      value: string
      description: Required parameter for the assessments resource.
    - name: authorizedViewSetsId
      value: string
      description: Required parameter for the assessments resource.
    - name: authorizedViewsId
      value: string
      description: Required parameter for the assessments resource.
    - name: conversationsId
      value: string
      description: Required parameter for the assessments resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the assessment. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}
        
    - name: agentInfo
      value: object
      description: >
        Information about an agent involved in the conversation.
        
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

Delete an Assessment.

```sql
DELETE FROM google.contactcenterinsights.assessments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND assessmentsId = '{{ assessmentsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="publish"
    values={[
        { label: 'publish', value: 'publish' },
        { label: 'appeal', value: 'appeal' },
        { label: 'finalize', value: 'finalize' }
    ]}
>
<TabItem value="publish">

Publish an Assessment.

```sql
EXEC google.contactcenterinsights.assessments.publish 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required, 
@conversationsId='{{ conversationsId }}' --required, 
@assessmentsId='{{ assessmentsId }}' --required;
```
</TabItem>
<TabItem value="appeal">

Appeal an Assessment.

```sql
EXEC google.contactcenterinsights.assessments.appeal 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required, 
@conversationsId='{{ conversationsId }}' --required, 
@assessmentsId='{{ assessmentsId }}' --required;
```
</TabItem>
<TabItem value="finalize">

Finalize an Assessment.

```sql
EXEC google.contactcenterinsights.assessments.finalize 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authorizedViewSetsId='{{ authorizedViewSetsId }}' --required, 
@authorizedViewsId='{{ authorizedViewsId }}' --required, 
@conversationsId='{{ conversationsId }}' --required, 
@assessmentsId='{{ assessmentsId }}' --required;
```
</TabItem>
</Tabs>
