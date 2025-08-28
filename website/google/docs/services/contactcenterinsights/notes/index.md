--- 
title: notes
hide_title: false
hide_table_of_contents: false
keywords:
  - notes
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

Creates, updates, deletes, gets or lists a <code>notes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>notes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.notes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The resource name of the note. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/conversations/&#123;conversation&#125;/assessments/&#123;assessment&#125;/notes/&#123;note&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentNote" /></td>
    <td><code>object</code></td>
    <td>The note is associated to the entire parent assessment. (id: GoogleCloudContactcenterinsightsV1NoteAssessmentNote)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The note content.</td>
</tr>
<tr>
    <td><CopyableCode code="conversationTurnNote" /></td>
    <td><code>object</code></td>
    <td>The note is associated with a conversation turn. (id: GoogleCloudContactcenterinsightsV1NoteConversationTurnNote)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the note was created.</td>
</tr>
<tr>
    <td><CopyableCode code="noteCreator" /></td>
    <td><code>object</code></td>
    <td>Output only. The user that created the note. (id: GoogleCloudContactcenterinsightsV1UserInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="qaQuestionNote" /></td>
    <td><code>object</code></td>
    <td>The note is associated with a QA question in one of the conversation's scorecard results. (id: GoogleCloudContactcenterinsightsV1NoteQaQuestionNote)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the note was last updated.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List Notes.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Create Note.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update Note.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authorizedViewSetsId"><code>authorizedViewSetsId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td></td>
    <td>Deletes a Note.</td>
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
<tr id="parameter-notesId">
    <td><CopyableCode code="notesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List Notes.

```sql
SELECT
name,
assessmentNote,
content,
conversationTurnNote,
createTime,
noteCreator,
qaQuestionNote,
updateTime
FROM google.contactcenterinsights.notes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND assessmentsId = '{{ assessmentsId }}' -- required
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

Create Note.

```sql
INSERT INTO google.contactcenterinsights.notes (
data__conversationTurnNote,
data__qaQuestionNote,
data__assessmentNote,
data__name,
data__content,
projectsId,
locationsId,
authorizedViewSetsId,
authorizedViewsId,
conversationsId,
assessmentsId
)
SELECT 
'{{ conversationTurnNote }}',
'{{ qaQuestionNote }}',
'{{ assessmentNote }}',
'{{ name }}',
'{{ content }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authorizedViewSetsId }}',
'{{ authorizedViewsId }}',
'{{ conversationsId }}',
'{{ assessmentsId }}'
RETURNING
name,
assessmentNote,
content,
conversationTurnNote,
createTime,
noteCreator,
qaQuestionNote,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: notes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the notes resource.
    - name: locationsId
      value: string
      description: Required parameter for the notes resource.
    - name: authorizedViewSetsId
      value: string
      description: Required parameter for the notes resource.
    - name: authorizedViewsId
      value: string
      description: Required parameter for the notes resource.
    - name: conversationsId
      value: string
      description: Required parameter for the notes resource.
    - name: assessmentsId
      value: string
      description: Required parameter for the notes resource.
    - name: conversationTurnNote
      value: object
      description: >
        The note is associated with a conversation turn.
        
    - name: qaQuestionNote
      value: object
      description: >
        The note is associated with a QA question in one of the conversation's scorecard results.
        
    - name: assessmentNote
      value: object
      description: >
        The note is associated to the entire parent assessment.
        
    - name: name
      value: string
      description: >
        Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note}
        
    - name: content
      value: string
      description: >
        The note content.
        
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

Update Note.

```sql
UPDATE google.contactcenterinsights.notes
SET 
data__conversationTurnNote = '{{ conversationTurnNote }}',
data__qaQuestionNote = '{{ qaQuestionNote }}',
data__assessmentNote = '{{ assessmentNote }}',
data__name = '{{ name }}',
data__content = '{{ content }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND assessmentsId = '{{ assessmentsId }}' --required
AND notesId = '{{ notesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
assessmentNote,
content,
conversationTurnNote,
createTime,
noteCreator,
qaQuestionNote,
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

Deletes a Note.

```sql
DELETE FROM google.contactcenterinsights.notes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authorizedViewSetsId = '{{ authorizedViewSetsId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND assessmentsId = '{{ assessmentsId }}' --required
AND notesId = '{{ notesId }}' --required;
```
</TabItem>
</Tabs>
