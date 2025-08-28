--- 
title: testers
hide_title: false
hide_table_of_contents: false
keywords:
  - testers
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

Creates, updates, deletes, gets or lists a <code>testers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>testers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appdistribution.testers" /></td></tr>
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
    <td>The name of the tester resource. Format: `projects/&#123;project_number&#125;/testers/&#123;email_address&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the tester associated with the Google account used to accept the tester invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>The resource names of the groups this tester belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="lastActivityTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they've never installed one or if the release no longer exists, this is the time the tester was added to the project.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists testers and their resource ids.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-testersId"><code>testersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a tester. If the testers joins a group they gain access to all releases that the group has access to.</td>
</tr>
<tr>
    <td><a href="#batch_add"><CopyableCode code="batch_add" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.</td>
</tr>
<tr>
    <td><a href="#batch_remove"><CopyableCode code="batch_remove" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-testersId">
    <td><CopyableCode code="testersId" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists testers and their resource ids.

```sql
SELECT
name,
displayName,
groups,
lastActivityTime
FROM firebase.appdistribution.testers
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

```sql
UPDATE firebase.appdistribution.testers
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__groups = '{{ groups }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND testersId = '{{ testersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
groups,
lastActivityTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_add"
    values={[
        { label: 'batch_add', value: 'batch_add' },
        { label: 'batch_remove', value: 'batch_remove' }
    ]}
>
<TabItem value="batch_add">

Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.

```sql
EXEC firebase.appdistribution.testers.batch_add 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"emails": "{{ emails }}"
}';
```
</TabItem>
<TabItem value="batch_remove">

Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.

```sql
EXEC firebase.appdistribution.testers.batch_remove 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"emails": "{{ emails }}"
}';
```
</TabItem>
</Tabs>
