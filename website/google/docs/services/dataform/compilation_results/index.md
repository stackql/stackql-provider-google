--- 
title: compilation_results
hide_title: false
hide_table_of_contents: false
keywords:
  - compilation_results
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

Creates, updates, deletes, gets or lists a <code>compilation_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>compilation_results</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.compilation_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query', value: 'query' },
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
    <td>Output only. The compilation result's name.</td>
</tr>
<tr>
    <td><CopyableCode code="codeCompilationConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. (id: CodeCompilationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="compilationErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors encountered during project compilation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the compilation result was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. Only set if the repository has a KMS Key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="dataformCoreVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of `@dataform/core` that was used for compilation.</td>
</tr>
<tr>
    <td><CopyableCode code="gitCommitish" /></td>
    <td><code>string</code></td>
    <td>Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseConfig" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the release config to compile. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedGitCommitSha" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the workspace to compile. Must be in the format `projects/*/locations/*/repositories/*/workspaces/*`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query">

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
    <td><CopyableCode code="compilationResultActions" /></td>
    <td><code>array</code></td>
    <td>List of compilation result actions.</td>
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
    <td>Output only. The compilation result's name.</td>
</tr>
<tr>
    <td><CopyableCode code="codeCompilationConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. (id: CodeCompilationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="compilationErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors encountered during project compilation.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the compilation result was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. Only set if the repository has a KMS Key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="dataformCoreVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of `@dataform/core` that was used for compilation.</td>
</tr>
<tr>
    <td><CopyableCode code="gitCommitish" /></td>
    <td><code>string</code></td>
    <td>Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseConfig" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the release config to compile. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedGitCommitSha" /></td>
    <td><code>string</code></td>
    <td>Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the workspace to compile. Must be in the format `projects/*/locations/*/repositories/*/workspaces/*`.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-compilationResultsId"><code>compilationResultsId</code></a></td>
    <td></td>
    <td>Fetches a single CompilationResult.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-compilationResultsId"><code>compilationResultsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns CompilationResultActions in a given CompilationResult.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists CompilationResults in a given Repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Creates a new CompilationResult in a given project and location.</td>
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
<tr id="parameter-compilationResultsId">
    <td><CopyableCode code="compilationResultsId" /></td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query', value: 'query' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Fetches a single CompilationResult.

```sql
SELECT
name,
codeCompilationConfig,
compilationErrors,
createTime,
dataEncryptionState,
dataformCoreVersion,
gitCommitish,
internalMetadata,
releaseConfig,
resolvedGitCommitSha,
workspace
FROM google.dataform.compilation_results
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND compilationResultsId = '{{ compilationResultsId }}' -- required;
```
</TabItem>
<TabItem value="query">

Returns CompilationResultActions in a given CompilationResult.

```sql
SELECT
compilationResultActions,
nextPageToken
FROM google.dataform.compilation_results
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND compilationResultsId = '{{ compilationResultsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="list">

Lists CompilationResults in a given Repository.

```sql
SELECT
name,
codeCompilationConfig,
compilationErrors,
createTime,
dataEncryptionState,
dataformCoreVersion,
gitCommitish,
internalMetadata,
releaseConfig,
resolvedGitCommitSha,
workspace
FROM google.dataform.compilation_results
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

Creates a new CompilationResult in a given project and location.

```sql
INSERT INTO google.dataform.compilation_results (
data__gitCommitish,
data__workspace,
data__releaseConfig,
data__codeCompilationConfig,
projectsId,
locationsId,
repositoriesId
)
SELECT 
'{{ gitCommitish }}',
'{{ workspace }}',
'{{ releaseConfig }}',
'{{ codeCompilationConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}'
RETURNING
name,
codeCompilationConfig,
compilationErrors,
createTime,
dataEncryptionState,
dataformCoreVersion,
gitCommitish,
internalMetadata,
releaseConfig,
resolvedGitCommitSha,
workspace
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: compilation_results
  props:
    - name: projectsId
      value: string
      description: Required parameter for the compilation_results resource.
    - name: locationsId
      value: string
      description: Required parameter for the compilation_results resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the compilation_results resource.
    - name: gitCommitish
      value: string
      description: >
        Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`
        
    - name: workspace
      value: string
      description: >
        Immutable. The name of the workspace to compile. Must be in the format `projects/*/locations/*/repositories/*/workspaces/*`.
        
    - name: releaseConfig
      value: string
      description: >
        Immutable. The name of the release config to compile. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.
        
    - name: codeCompilationConfig
      value: object
      description: >
        Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.
        
```
</TabItem>
</Tabs>
