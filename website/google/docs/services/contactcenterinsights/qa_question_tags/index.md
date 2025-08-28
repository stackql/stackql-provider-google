--- 
title: qa_question_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - qa_question_tags
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

Creates, updates, deletes, gets or lists a <code>qa_question_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>qa_question_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.qa_question_tags" /></td></tr>
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
    <td>Identifier. Resource name for the QaQuestionTag Format projects/&#123;project&#125;/locations/&#123;location&#125;/qaQuestionTags/&#123;qa_question_tag&#125; In the above format, the last segment, i.e., qa_question_tag, is a server-generated ID corresponding to the tag resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the question tag was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. A user-specified display name for the tag.</td>
</tr>
<tr>
    <td><CopyableCode code="qaQuestionIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of Scorecard Question IDs that the tag applies to. Each QaQuestionId is represented as a full resource name containing the Question ID. Lastly, Since a tag may not necessarily be referenced by any Scorecard Questions, we treat this field as optional.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the question tag was updated.</td>
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
    <td>Identifier. Resource name for the QaQuestionTag Format projects/&#123;project&#125;/locations/&#123;location&#125;/qaQuestionTags/&#123;qa_question_tag&#125; In the above format, the last segment, i.e., qa_question_tag, is a server-generated ID corresponding to the tag resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the question tag was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. A user-specified display name for the tag.</td>
</tr>
<tr>
    <td><CopyableCode code="qaQuestionIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of Scorecard Question IDs that the tag applies to. Each QaQuestionId is represented as a full resource name containing the Question ID. Lastly, Since a tag may not necessarily be referenced by any Scorecard Questions, we treat this field as optional.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the question tag was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaQuestionTagsId"><code>qaQuestionTagsId</code></a></td>
    <td></td>
    <td>Gets a QaQuestionTag.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the question tags.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-qaQuestionTagId"><code>qaQuestionTagId</code></a></td>
    <td>Creates a QaQuestionTag.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaQuestionTagsId"><code>qaQuestionTagsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a QaQuestionTag.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-qaQuestionTagsId"><code>qaQuestionTagsId</code></a></td>
    <td></td>
    <td>Deletes a QaQuestionTag.</td>
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
<tr id="parameter-qaQuestionTagsId">
    <td><CopyableCode code="qaQuestionTagsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-qaQuestionTagId">
    <td><CopyableCode code="qaQuestionTagId" /></td>
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

Gets a QaQuestionTag.

```sql
SELECT
name,
createTime,
displayName,
qaQuestionIds,
updateTime
FROM google.contactcenterinsights.qa_question_tags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND qaQuestionTagsId = '{{ qaQuestionTagsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the question tags.

```sql
SELECT
name,
createTime,
displayName,
qaQuestionIds,
updateTime
FROM google.contactcenterinsights.qa_question_tags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a QaQuestionTag.

```sql
INSERT INTO google.contactcenterinsights.qa_question_tags (
data__name,
data__displayName,
data__qaQuestionIds,
projectsId,
locationsId,
qaQuestionTagId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ qaQuestionIds }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ qaQuestionTagId }}'
RETURNING
name,
createTime,
displayName,
qaQuestionIds,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: qa_question_tags
  props:
    - name: projectsId
      value: string
      description: Required parameter for the qa_question_tags resource.
    - name: locationsId
      value: string
      description: Required parameter for the qa_question_tags resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name for the QaQuestionTag Format projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag} In the above format, the last segment, i.e., qa_question_tag, is a server-generated ID corresponding to the tag resource.
        
    - name: displayName
      value: string
      description: >
        Required. A user-specified display name for the tag.
        
    - name: qaQuestionIds
      value: array
      description: >
        Optional. The list of Scorecard Question IDs that the tag applies to. Each QaQuestionId is represented as a full resource name containing the Question ID. Lastly, Since a tag may not necessarily be referenced by any Scorecard Questions, we treat this field as optional.
        
    - name: qaQuestionTagId
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

Updates a QaQuestionTag.

```sql
UPDATE google.contactcenterinsights.qa_question_tags
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__qaQuestionIds = '{{ qaQuestionIds }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND qaQuestionTagsId = '{{ qaQuestionTagsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a QaQuestionTag.

```sql
DELETE FROM google.contactcenterinsights.qa_question_tags
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND qaQuestionTagsId = '{{ qaQuestionTagsId }}' --required;
```
</TabItem>
</Tabs>
