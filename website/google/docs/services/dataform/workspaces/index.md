--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_directory_contents', value: 'query_directory_contents' },
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
    <td>Identifier. The workspace's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. A data encryption state of a Git repository if this Workspace is protected by a KMS key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_directory_contents">

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
    <td><CopyableCode code="directoryEntries" /></td>
    <td><code>array</code></td>
    <td>List of entries in the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td>Identifier. The workspace's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. A data encryption state of a Git repository if this Workspace is protected by a KMS key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Fetches a single Workspace.</td>
</tr>
<tr>
    <td><a href="#query_directory_contents"><CopyableCode code="query_directory_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the contents of a given Workspace directory.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Workspaces in a given Repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-workspaceId"><code>workspaceId</code></a></td>
    <td>Creates a new Workspace in a given Repository.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Deletes a single Workspace.</td>
</tr>
<tr>
    <td><a href="#install_npm_packages"><CopyableCode code="install_npm_packages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Installs dependency NPM packages (inside a Workspace).</td>
</tr>
<tr>
    <td><a href="#pull"><CopyableCode code="pull" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Pulls Git commits from the Repository's remote into a Workspace.</td>
</tr>
<tr>
    <td><a href="#push"><CopyableCode code="push" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Pushes Git commits from a Workspace to the Repository's remote.</td>
</tr>
<tr>
    <td><a href="#commit"><CopyableCode code="commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Applies a Git commit for uncommitted files in a Workspace.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Performs a Git reset for uncommitted files in a Workspace.</td>
</tr>
<tr>
    <td><a href="#search_files"><CopyableCode code="search_files" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Finds the contents of a given Workspace directory by filter.</td>
</tr>
<tr>
    <td><a href="#make_directory"><CopyableCode code="make_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Creates a directory inside a Workspace.</td>
</tr>
<tr>
    <td><a href="#remove_directory"><CopyableCode code="remove_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Deletes a directory (inside a Workspace) and all of its contents.</td>
</tr>
<tr>
    <td><a href="#move_directory"><CopyableCode code="move_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Moves a directory (inside a Workspace), and all of its contents, to a new location.</td>
</tr>
<tr>
    <td><a href="#read_file"><CopyableCode code="read_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-revision"><code>revision</code></a></td>
    <td>Returns the contents of a file (inside a Workspace).</td>
</tr>
<tr>
    <td><a href="#remove_file"><CopyableCode code="remove_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Deletes a file (inside a Workspace).</td>
</tr>
<tr>
    <td><a href="#move_file"><CopyableCode code="move_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Moves a file (inside a Workspace) to a new location.</td>
</tr>
<tr>
    <td><a href="#write_file"><CopyableCode code="write_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workspacesId"><code>workspacesId</code></a></td>
    <td></td>
    <td>Writes to a file (inside a Workspace).</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workspaceId">
    <td><CopyableCode code="workspaceId" /></td>
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
        { label: 'query_directory_contents', value: 'query_directory_contents' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Fetches a single Workspace.

```sql
SELECT
name,
createTime,
dataEncryptionState,
internalMetadata
FROM google.dataform.workspaces
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workspacesId = '{{ workspacesId }}' -- required;
```
</TabItem>
<TabItem value="query_directory_contents">

Returns the contents of a given Workspace directory.

```sql
SELECT
directoryEntries,
nextPageToken
FROM google.dataform.workspaces
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workspacesId = '{{ workspacesId }}' -- required
AND path = '{{ path }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="list">

Lists Workspaces in a given Repository.

```sql
SELECT
name,
createTime,
dataEncryptionState,
internalMetadata
FROM google.dataform.workspaces
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new Workspace in a given Repository.

```sql
INSERT INTO google.dataform.workspaces (
data__name,
projectsId,
locationsId,
repositoriesId,
workspaceId
)
SELECT 
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}',
'{{ workspaceId }}'
RETURNING
name,
createTime,
dataEncryptionState,
internalMetadata
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workspaces resource.
    - name: locationsId
      value: string
      description: Required parameter for the workspaces resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the workspaces resource.
    - name: name
      value: string
      description: >
        Identifier. The workspace's name.
        
    - name: workspaceId
      value: string
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

Deletes a single Workspace.

```sql
DELETE FROM google.dataform.workspaces
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND workspacesId = '{{ workspacesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="install_npm_packages"
    values={[
        { label: 'install_npm_packages', value: 'install_npm_packages' },
        { label: 'pull', value: 'pull' },
        { label: 'push', value: 'push' },
        { label: 'commit', value: 'commit' },
        { label: 'reset', value: 'reset' },
        { label: 'search_files', value: 'search_files' },
        { label: 'make_directory', value: 'make_directory' },
        { label: 'remove_directory', value: 'remove_directory' },
        { label: 'move_directory', value: 'move_directory' },
        { label: 'read_file', value: 'read_file' },
        { label: 'remove_file', value: 'remove_file' },
        { label: 'move_file', value: 'move_file' },
        { label: 'write_file', value: 'write_file' }
    ]}
>
<TabItem value="install_npm_packages">

Installs dependency NPM packages (inside a Workspace).

```sql
EXEC google.dataform.workspaces.install_npm_packages 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required;
```
</TabItem>
<TabItem value="pull">

Pulls Git commits from the Repository's remote into a Workspace.

```sql
EXEC google.dataform.workspaces.pull 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"remoteBranch": "{{ remoteBranch }}", 
"author": "{{ author }}"
}';
```
</TabItem>
<TabItem value="push">

Pushes Git commits from a Workspace to the Repository's remote.

```sql
EXEC google.dataform.workspaces.push 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"remoteBranch": "{{ remoteBranch }}"
}';
```
</TabItem>
<TabItem value="commit">

Applies a Git commit for uncommitted files in a Workspace.

```sql
EXEC google.dataform.workspaces.commit 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"author": "{{ author }}", 
"commitMessage": "{{ commitMessage }}", 
"paths": "{{ paths }}"
}';
```
</TabItem>
<TabItem value="reset">

Performs a Git reset for uncommitted files in a Workspace.

```sql
EXEC google.dataform.workspaces.reset 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"paths": "{{ paths }}", 
"clean": {{ clean }}
}';
```
</TabItem>
<TabItem value="search_files">

Finds the contents of a given Workspace directory by filter.

```sql
EXEC google.dataform.workspaces.search_files 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@filter='{{ filter }}';
```
</TabItem>
<TabItem value="make_directory">

Creates a directory inside a Workspace.

```sql
EXEC google.dataform.workspaces.make_directory 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"path": "{{ path }}"
}';
```
</TabItem>
<TabItem value="remove_directory">

Deletes a directory (inside a Workspace) and all of its contents.

```sql
EXEC google.dataform.workspaces.remove_directory 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"path": "{{ path }}"
}';
```
</TabItem>
<TabItem value="move_directory">

Moves a directory (inside a Workspace), and all of its contents, to a new location.

```sql
EXEC google.dataform.workspaces.move_directory 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"path": "{{ path }}", 
"newPath": "{{ newPath }}"
}';
```
</TabItem>
<TabItem value="read_file">

Returns the contents of a file (inside a Workspace).

```sql
EXEC google.dataform.workspaces.read_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required, 
@path='{{ path }}', 
@revision='{{ revision }}';
```
</TabItem>
<TabItem value="remove_file">

Deletes a file (inside a Workspace).

```sql
EXEC google.dataform.workspaces.remove_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"path": "{{ path }}"
}';
```
</TabItem>
<TabItem value="move_file">

Moves a file (inside a Workspace) to a new location.

```sql
EXEC google.dataform.workspaces.move_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"path": "{{ path }}", 
"newPath": "{{ newPath }}"
}';
```
</TabItem>
<TabItem value="write_file">

Writes to a file (inside a Workspace).

```sql
EXEC google.dataform.workspaces.write_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workspacesId='{{ workspacesId }}' --required 
@@json=
'{
"path": "{{ path }}", 
"contents": "{{ contents }}"
}';
```
</TabItem>
</Tabs>
