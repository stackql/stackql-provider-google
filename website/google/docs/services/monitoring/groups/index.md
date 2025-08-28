--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_groups_get"
    values={[
        { label: 'projects_groups_get', value: 'projects_groups_get' },
        { label: 'projects_groups_list', value: 'projects_groups_list' }
    ]}
>
<TabItem value="projects_groups_get">

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
    <td>Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-assigned name for this group, used only for display purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The filter used to determine which monitored resources belong to this group.</td>
</tr>
<tr>
    <td><CopyableCode code="isCluster" /></td>
    <td><code>boolean</code></td>
    <td>If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="parentName" /></td>
    <td><code>string</code></td>
    <td>The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "".</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_groups_list">

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
    <td>Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-assigned name for this group, used only for display purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>The filter used to determine which monitored resources belong to this group.</td>
</tr>
<tr>
    <td><CopyableCode code="isCluster" /></td>
    <td><code>boolean</code></td>
    <td>If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="parentName" /></td>
    <td><code>string</code></td>
    <td>The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "".</td>
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
    <td><a href="#projects_groups_get"><CopyableCode code="projects_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Gets a single group.</td>
</tr>
<tr>
    <td><a href="#projects_groups_list"><CopyableCode code="projects_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-childrenOfGroup"><code>childrenOfGroup</code></a>, <a href="#parameter-ancestorsOfGroup"><code>ancestorsOfGroup</code></a>, <a href="#parameter-descendantsOfGroup"><code>descendantsOfGroup</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the existing groups.</td>
</tr>
<tr>
    <td><a href="#projects_groups_create"><CopyableCode code="projects_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new group.</td>
</tr>
<tr>
    <td><a href="#projects_groups_update"><CopyableCode code="projects_groups_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an existing group. You can change any group attributes except name.</td>
</tr>
<tr>
    <td><a href="#projects_groups_delete"><CopyableCode code="projects_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-recursive"><code>recursive</code></a></td>
    <td>Deletes an existing group.</td>
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
<tr id="parameter-ancestorsOfGroup">
    <td><CopyableCode code="ancestorsOfGroup" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-childrenOfGroup">
    <td><CopyableCode code="childrenOfGroup" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-descendantsOfGroup">
    <td><CopyableCode code="descendantsOfGroup" /></td>
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
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_groups_get"
    values={[
        { label: 'projects_groups_get', value: 'projects_groups_get' },
        { label: 'projects_groups_list', value: 'projects_groups_list' }
    ]}
>
<TabItem value="projects_groups_get">

Gets a single group.

```sql
SELECT
name,
displayName,
filter,
isCluster,
parentName
FROM google.monitoring.groups
WHERE projectsId = '{{ projectsId }}' -- required
AND groupsId = '{{ groupsId }}' -- required;
```
</TabItem>
<TabItem value="projects_groups_list">

Lists the existing groups.

```sql
SELECT
name,
displayName,
filter,
isCluster,
parentName
FROM google.monitoring.groups
WHERE projectsId = '{{ projectsId }}' -- required
AND childrenOfGroup = '{{ childrenOfGroup }}'
AND ancestorsOfGroup = '{{ ancestorsOfGroup }}'
AND descendantsOfGroup = '{{ descendantsOfGroup }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_groups_create"
    values={[
        { label: 'projects_groups_create', value: 'projects_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_groups_create">

Creates a new group.

```sql
INSERT INTO google.monitoring.groups (
data__name,
data__displayName,
data__parentName,
data__filter,
data__isCluster,
projectsId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ parentName }}',
'{{ filter }}',
{{ isCluster }},
'{{ projectsId }}',
'{{ validateOnly }}'
RETURNING
name,
displayName,
filter,
isCluster,
parentName
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
        Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.
        
    - name: displayName
      value: string
      description: >
        A user-assigned name for this group, used only for display purposes.
        
    - name: parentName
      value: string
      description: >
        The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "".
        
    - name: filter
      value: string
      description: >
        The filter used to determine which monitored resources belong to this group.
        
    - name: isCluster
      value: boolean
      description: >
        If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.
        
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_groups_update"
    values={[
        { label: 'projects_groups_update', value: 'projects_groups_update' }
    ]}
>
<TabItem value="projects_groups_update">

Updates an existing group. You can change any group attributes except name.

```sql
REPLACE google.monitoring.groups
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__parentName = '{{ parentName }}',
data__filter = '{{ filter }}',
data__isCluster = {{ isCluster }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND groupsId = '{{ groupsId }}' --required
AND validateOnly = {{ validateOnly}}
RETURNING
name,
displayName,
filter,
isCluster,
parentName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_groups_delete"
    values={[
        { label: 'projects_groups_delete', value: 'projects_groups_delete' }
    ]}
>
<TabItem value="projects_groups_delete">

Deletes an existing group.

```sql
DELETE FROM google.monitoring.groups
WHERE projectsId = '{{ projectsId }}' --required
AND groupsId = '{{ groupsId }}' --required
AND recursive = '{{ recursive }}';
```
</TabItem>
</Tabs>
