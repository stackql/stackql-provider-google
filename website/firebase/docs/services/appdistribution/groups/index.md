--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - appdistribution
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appdistribution.groups" /></td></tr>
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
    <td>The name of the group resource. Format: `projects/&#123;project_number&#125;/groups/&#123;group_alias&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="inviteLinkCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of invite links for this group.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of releases this group is permitted to access.</td>
</tr>
<tr>
    <td><CopyableCode code="testerCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of testers who are members of this group.</td>
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
    <td>The name of the group resource. Format: `projects/&#123;project_number&#125;/groups/&#123;group_alias&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="inviteLinkCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of invite links for this group.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of releases this group is permitted to access.</td>
</tr>
<tr>
    <td><CopyableCode code="testerCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of testers who are members of this group.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Get a group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List groups.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a></td>
    <td>Create a group.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a group.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Delete a group.</td>
</tr>
<tr>
    <td><a href="#batch_join"><CopyableCode code="batch_join" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Batch adds members to a group. The testers will gain access to all releases that the groups have access to.</td>
</tr>
<tr>
    <td><a href="#batch_leave"><CopyableCode code="batch_leave" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Batch removed members from a group. The testers will lose access to all releases that the groups have access to.</td>
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
<tr id="parameter-groupsId">
    <td><CopyableCode code="groupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
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

Get a group.

```sql
SELECT
name,
displayName,
inviteLinkCount,
releaseCount,
testerCount
FROM firebase.appdistribution.groups
WHERE projectsId = '{{ projectsId }}' -- required
AND groupsId = '{{ groupsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List groups.

```sql
SELECT
name,
displayName,
inviteLinkCount,
releaseCount,
testerCount
FROM firebase.appdistribution.groups
WHERE projectsId = '{{ projectsId }}' -- required
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

Create a group.

```sql
INSERT INTO firebase.appdistribution.groups (
data__name,
data__displayName,
projectsId,
groupId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ groupId }}'
RETURNING
name,
displayName,
inviteLinkCount,
releaseCount,
testerCount
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the groups resource.
    - name: name
      value: string
      description: >
        The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the group.
        
    - name: groupId
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

Update a group.

```sql
UPDATE firebase.appdistribution.groups
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND groupsId = '{{ groupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
inviteLinkCount,
releaseCount,
testerCount;
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

Delete a group.

```sql
DELETE FROM firebase.appdistribution.groups
WHERE projectsId = '{{ projectsId }}' --required
AND groupsId = '{{ groupsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_join"
    values={[
        { label: 'batch_join', value: 'batch_join' },
        { label: 'batch_leave', value: 'batch_leave' }
    ]}
>
<TabItem value="batch_join">

Batch adds members to a group. The testers will gain access to all releases that the groups have access to.

```sql
EXEC firebase.appdistribution.groups.batch_join 
@projectsId='{{ projectsId }}' --required, 
@groupsId='{{ groupsId }}' --required 
@@json=
'{
"emails": "{{ emails }}", 
"createMissingTesters": {{ createMissingTesters }}
}';
```
</TabItem>
<TabItem value="batch_leave">

Batch removed members from a group. The testers will lose access to all releases that the groups have access to.

```sql
EXEC firebase.appdistribution.groups.batch_leave 
@projectsId='{{ projectsId }}' --required, 
@groupsId='{{ groupsId }}' --required 
@@json=
'{
"emails": "{{ emails }}"
}';
```
</TabItem>
</Tabs>
