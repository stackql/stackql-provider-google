--- 
title: workspaces_file_git_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces_file_git_statuses
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

Creates, updates, deletes, gets or lists a <code>workspaces_file_git_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workspaces_file_git_statuses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.workspaces_file_git_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_file_git_statuses"
    values={[
        { label: 'fetch_file_git_statuses', value: 'fetch_file_git_statuses' }
    ]}
>
<TabItem value="fetch_file_git_statuses">

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
    <td><CopyableCode code="uncommittedFileChanges" /></td>
    <td><code>array</code></td>
    <td>A list of all files which have uncommitted Git changes. There will only be a single entry for any given file.</td>
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
    <td><a href="#fetch_file_git_statuses"><CopyableCode code="fetch_file_git_statuses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Fetches Git statuses for the files in a Workspace.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_file_git_statuses"
    values={[
        { label: 'fetch_file_git_statuses', value: 'fetch_file_git_statuses' }
    ]}
>
<TabItem value="fetch_file_git_statuses">

Fetches Git statuses for the files in a Workspace.

```sql
SELECT
uncommittedFileChanges
FROM google.dataform.workspaces_file_git_statuses
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workspacesId = '{{ workspacesId }}' -- required;
```
</TabItem>
</Tabs>
