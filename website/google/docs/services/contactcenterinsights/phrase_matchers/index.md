--- 
title: phrase_matchers
hide_title: false
hide_table_of_contents: false
keywords:
  - phrase_matchers
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

Creates, updates, deletes, gets or lists a <code>phrase_matchers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>phrase_matchers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.phrase_matchers" /></td></tr>
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
    <td>The resource name of the phrase matcher. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/phraseMatchers/&#123;phrase_matcher&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="activationUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the activation status was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Applies the phrase matcher only when it is active.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the phrase matcher.</td>
</tr>
<tr>
    <td><CopyableCode code="phraseMatchRuleGroups" /></td>
    <td><code>array</code></td>
    <td>A list of phase match rule groups that are included in this matcher.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567</td>
</tr>
<tr>
    <td><CopyableCode code="roleMatch" /></td>
    <td><code>string</code></td>
    <td>The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of this phrase matcher.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the phrase matcher was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionTag" /></td>
    <td><code>string</code></td>
    <td>The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.</td>
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
    <td>The resource name of the phrase matcher. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/phraseMatchers/&#123;phrase_matcher&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="activationUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the activation status was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Applies the phrase matcher only when it is active.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the phrase matcher.</td>
</tr>
<tr>
    <td><CopyableCode code="phraseMatchRuleGroups" /></td>
    <td><code>array</code></td>
    <td>A list of phase match rule groups that are included in this matcher.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567</td>
</tr>
<tr>
    <td><CopyableCode code="roleMatch" /></td>
    <td><code>string</code></td>
    <td>The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of this phrase matcher.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the phrase matcher was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionTag" /></td>
    <td><code>string</code></td>
    <td>The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-phraseMatchersId"><code>phraseMatchersId</code></a></td>
    <td></td>
    <td>Gets a phrase matcher.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists phrase matchers.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a phrase matcher.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-phraseMatchersId"><code>phraseMatchersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a phrase matcher.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-phraseMatchersId"><code>phraseMatchersId</code></a></td>
    <td></td>
    <td>Deletes a phrase matcher.</td>
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
<tr id="parameter-phraseMatchersId">
    <td><CopyableCode code="phraseMatchersId" /></td>
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

Gets a phrase matcher.

```sql
SELECT
name,
activationUpdateTime,
active,
displayName,
phraseMatchRuleGroups,
revisionCreateTime,
revisionId,
roleMatch,
type,
updateTime,
versionTag
FROM google.contactcenterinsights.phrase_matchers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND phraseMatchersId = '{{ phraseMatchersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists phrase matchers.

```sql
SELECT
name,
activationUpdateTime,
active,
displayName,
phraseMatchRuleGroups,
revisionCreateTime,
revisionId,
roleMatch,
type,
updateTime,
versionTag
FROM google.contactcenterinsights.phrase_matchers
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

Creates a phrase matcher.

```sql
INSERT INTO google.contactcenterinsights.phrase_matchers (
data__name,
data__versionTag,
data__displayName,
data__type,
data__active,
data__phraseMatchRuleGroups,
data__roleMatch,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ versionTag }}',
'{{ displayName }}',
'{{ type }}',
{{ active }},
'{{ phraseMatchRuleGroups }}',
'{{ roleMatch }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
activationUpdateTime,
active,
displayName,
phraseMatchRuleGroups,
revisionCreateTime,
revisionId,
roleMatch,
type,
updateTime,
versionTag
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: phrase_matchers
  props:
    - name: projectsId
      value: string
      description: Required parameter for the phrase_matchers resource.
    - name: locationsId
      value: string
      description: Required parameter for the phrase_matchers resource.
    - name: name
      value: string
      description: >
        The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
        
    - name: versionTag
      value: string
      description: >
        The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.
        
    - name: displayName
      value: string
      description: >
        The human-readable name of the phrase matcher.
        
    - name: type
      value: string
      description: >
        Required. The type of this phrase matcher.
        
      valid_values: ['PHRASE_MATCHER_TYPE_UNSPECIFIED', 'ALL_OF', 'ANY_OF']
    - name: active
      value: boolean
      description: >
        Applies the phrase matcher only when it is active.
        
    - name: phraseMatchRuleGroups
      value: array
      description: >
        A list of phase match rule groups that are included in this matcher.
        
    - name: roleMatch
      value: string
      description: >
        The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.
        
      valid_values: ['ROLE_UNSPECIFIED', 'HUMAN_AGENT', 'AUTOMATED_AGENT', 'END_USER', 'ANY_AGENT']
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

Updates a phrase matcher.

```sql
UPDATE google.contactcenterinsights.phrase_matchers
SET 
data__name = '{{ name }}',
data__versionTag = '{{ versionTag }}',
data__displayName = '{{ displayName }}',
data__type = '{{ type }}',
data__active = {{ active }},
data__phraseMatchRuleGroups = '{{ phraseMatchRuleGroups }}',
data__roleMatch = '{{ roleMatch }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND phraseMatchersId = '{{ phraseMatchersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activationUpdateTime,
active,
displayName,
phraseMatchRuleGroups,
revisionCreateTime,
revisionId,
roleMatch,
type,
updateTime,
versionTag;
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

Deletes a phrase matcher.

```sql
DELETE FROM google.contactcenterinsights.phrase_matchers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND phraseMatchersId = '{{ phraseMatchersId }}' --required;
```
</TabItem>
</Tabs>
