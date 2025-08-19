--- 
title: feedback_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - feedback_labels
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

Creates, updates, deletes, gets or lists a <code>feedback_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feedback_labels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.feedback_labels" /></td></tr>
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

Represents a conversation, resource, and label provided by the user. Can take the form of a string label or a QaAnswer label. QaAnswer labels are used for Quality AI example conversations. String labels are used for Topic Modeling. AgentAssistSummary labels are used for Agent Assist Summarization.

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
    <td>Immutable. Resource name of the FeedbackLabel. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/conversations/&#123;conversation&#125;/feedbackLabels/&#123;feedback_label&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the label.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>String label used for Topic Modeling.</td>
</tr>
<tr>
    <td><CopyableCode code="labeledResource" /></td>
    <td><code>string</code></td>
    <td>Name of the resource to be labeled. Supported resources are: * `projects/&#123;project&#125;/locations/&#123;location&#125;/qaScorecards/&#123;scorecard&#125;/revisions/&#123;revision&#125;/qaQuestions/&#123;question&#125;` * `projects/&#123;project&#125;/locations/&#123;location&#125;/issueModels/&#123;issue_model&#125;` * `projects/&#123;project&#125;/locations/&#123;location&#125;/generators/&#123;generator_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="qaAnswerLabel" /></td>
    <td><code>object</code></td>
    <td>QaAnswer label used for Quality AI example conversations. (id: GoogleCloudContactcenterinsightsV1QaAnswerAnswerValue)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time of the label.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for listing feedback labels.

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
    <td><CopyableCode code="feedbackLabels" /></td>
    <td><code>array</code></td>
    <td>The feedback labels that match the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-feedbackLabelsId"><code>feedbackLabelsId</code></a></td>
    <td></td>
    <td>Get feedback label.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List feedback labels.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-feedbackLabelId"><code>feedbackLabelId</code></a></td>
    <td>Create feedback label.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-feedbackLabelsId"><code>feedbackLabelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update feedback label.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-feedbackLabelsId"><code>feedbackLabelsId</code></a></td>
    <td></td>
    <td>Delete feedback label.</td>
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
<tr id="parameter-conversationsId">
    <td><CopyableCode code="conversationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-feedbackLabelsId">
    <td><CopyableCode code="feedbackLabelsId" /></td>
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
<tr id="parameter-feedbackLabelId">
    <td><CopyableCode code="feedbackLabelId" /></td>
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

Get feedback label.

```sql
SELECT
name,
createTime,
label,
labeledResource,
qaAnswerLabel,
updateTime
FROM google.contactcenterinsights.feedback_labels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND feedbackLabelsId = '{{ feedbackLabelsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List feedback labels.

```sql
SELECT
feedbackLabels,
nextPageToken
FROM google.contactcenterinsights.feedback_labels
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Create feedback label.

```sql
INSERT INTO google.contactcenterinsights.feedback_labels (
data__label,
data__qaAnswerLabel,
data__name,
data__labeledResource,
projectsId,
locationsId,
authorizedViewSetsId,
authorizedViewsId,
conversationsId,
feedbackLabelId
)
SELECT 
'{{ label }}',
'{{ qaAnswerLabel }}',
'{{ name }}',
'{{ labeledResource }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authorizedViewSetsId }}',
'{{ authorizedViewsId }}',
'{{ conversationsId }}',
'{{ feedbackLabelId }}'
RETURNING
name,
createTime,
label,
labeledResource,
qaAnswerLabel,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: feedback_labels
  props:
    - name: projectsId
      value: string
      description: Required parameter for the feedback_labels resource.
    - name: locationsId
      value: string
      description: Required parameter for the feedback_labels resource.
    - name: authorizedViewSetsId
      value: string
      description: Required parameter for the feedback_labels resource.
    - name: authorizedViewsId
      value: string
      description: Required parameter for the feedback_labels resource.
    - name: conversationsId
      value: string
      description: Required parameter for the feedback_labels resource.
    - name: label
      value: string
      description: >
        String label used for Topic Modeling.
        
    - name: qaAnswerLabel
      value: object
      description: >
        QaAnswer label used for Quality AI example conversations.
        
    - name: name
      value: string
      description: >
        Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
        
    - name: labeledResource
      value: string
      description: >
        Name of the resource to be labeled. Supported resources are: * `projects/{project}/locations/{location}/qaScorecards/{scorecard}/revisions/{revision}/qaQuestions/{question}` * `projects/{project}/locations/{location}/issueModels/{issue_model}` * `projects/{project}/locations/{location}/generators/{generator_id}`
        
    - name: feedbackLabelId
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

Update feedback label.

```sql
UPDATE google.contactcenterinsights.feedback_labels
SET 
data__label = '{{ label }}',
data__qaAnswerLabel = '{{ qaAnswerLabel }}',
data__name = '{{ name }}',
data__labeledResource = '{{ labeledResource }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND feedbackLabelsId = '{{ feedbackLabelsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
label,
labeledResource,
qaAnswerLabel,
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

Delete feedback label.

```sql
DELETE FROM google.contactcenterinsights.feedback_labels
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND feedbackLabelsId = '{{ feedbackLabelsId }}' --required;
```
</TabItem>
</Tabs>
