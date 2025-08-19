--- 
title: workspaces_git_ahead_behind
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces_git_ahead_behind
  - dataform
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

Creates, updates, deletes, gets or lists a <code>workspaces_git_ahead_behind</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workspaces_git_ahead_behind</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.workspaces_git_ahead_behind" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_git_ahead_behind"
    values={[
        { label: 'fetch_git_ahead_behind', value: 'fetch_git_ahead_behind' }
    ]}
>
<TabItem value="fetch_git_ahead_behind">

`FetchGitAheadBehind` response message.

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
    <td><CopyableCode code="commitsAhead" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of commits in the remote branch that are not in the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="commitsBehind" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of commits in the workspace that are not in the remote branch.</td>
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
    <td><a href="#fetch_git_ahead_behind"><CopyableCode code="fetch_git_ahead_behind" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td><a href="#parameter-remoteBranch"><code>remoteBranch</code></a></td>
    <td>Fetches Git ahead/behind against a remote branch.</td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workspacesId">
    <td><CopyableCode code="workspacesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-remoteBranch">
    <td><CopyableCode code="remoteBranch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_git_ahead_behind"
    values={[
        { label: 'fetch_git_ahead_behind', value: 'fetch_git_ahead_behind' }
    ]}
>
<TabItem value="fetch_git_ahead_behind">

Fetches Git ahead/behind against a remote branch.

```sql
SELECT
commitsAhead,
commitsBehind
FROM google.dataform.workspaces_git_ahead_behind
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workspacesId = '{{ workspacesId }}' -- required
AND remoteBranch = '{{ remoteBranch }}';
```
</TabItem>
</Tabs>
