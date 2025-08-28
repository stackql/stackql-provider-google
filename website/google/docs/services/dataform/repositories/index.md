--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
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

Creates, updates, deletes, gets or lists a <code>repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>repositories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.repositories" /></td></tr>
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
    <td>Identifier. The repository's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. A data encryption state of a Git repository if this Repository is protected by a KMS key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The repository's user-friendly name.</td>
</tr>
<tr>
    <td><CopyableCode code="gitRemoteSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, configures this repository to be linked to a Git remote. (id: GitRemoteSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/&#123;kms_project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_location&#125;/cryptoKeys/&#123;key&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Repository user labels.</td>
</tr>
<tr>
    <td><CopyableCode code="npmrcEnvironmentVariablesSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The service account to run workflow invocations under.</td>
</tr>
<tr>
    <td><CopyableCode code="setAuthenticatedUserAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceCompilationOverrides" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information. (id: WorkspaceCompilationOverrides)</td>
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
    <td>Identifier. The repository's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. A data encryption state of a Git repository if this Repository is protected by a KMS key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The repository's user-friendly name.</td>
</tr>
<tr>
    <td><CopyableCode code="gitRemoteSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, configures this repository to be linked to a Git remote. (id: GitRemoteSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/&#123;kms_project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_location&#125;/cryptoKeys/&#123;key&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Repository user labels.</td>
</tr>
<tr>
    <td><CopyableCode code="npmrcEnvironmentVariablesSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The service account to run workflow invocations under.</td>
</tr>
<tr>
    <td><CopyableCode code="setAuthenticatedUserAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceCompilationOverrides" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information. (id: WorkspaceCompilationOverrides)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Fetches a single Repository.</td>
</tr>
<tr>
    <td><a href="#query_directory_contents"><CopyableCode code="query_directory_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-commitSha"><code>commitSha</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-repositoryId"><code>repositoryId</code></a></td>
    <td>Creates a new Repository in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Repository.</td>
</tr>
<tr>
    <td><a href="#commit"><CopyableCode code="commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.</td>
</tr>
<tr>
    <td><a href="#read_file"><CopyableCode code="read_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-commitSha"><code>commitSha</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td>Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.</td>
</tr>
<tr>
    <td><a href="#compute_access_token_status"><CopyableCode code="compute_access_token_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Computes a Repository's Git access token status.</td>
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
<tr id="parameter-commitSha">
    <td><CopyableCode code="commitSha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-repositoryId">
    <td><CopyableCode code="repositoryId" /></td>
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
        { label: 'query_directory_contents', value: 'query_directory_contents' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Fetches a single Repository.

```sql
SELECT
name,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
workspaceCompilationOverrides
FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required;
```
</TabItem>
<TabItem value="query_directory_contents">

Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.

```sql
SELECT
directoryEntries,
nextPageToken
FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND commitSha = '{{ commitSha }}'
AND path = '{{ path }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="list">

Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.

```sql
SELECT
name,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
workspaceCompilationOverrides
FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new Repository in a given project and location.

```sql
INSERT INTO google.dataform.repositories (
data__name,
data__displayName,
data__gitRemoteSettings,
data__npmrcEnvironmentVariablesSecretVersion,
data__workspaceCompilationOverrides,
data__labels,
data__setAuthenticatedUserAdmin,
data__serviceAccount,
data__kmsKeyName,
projectsId,
locationsId,
repositoryId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ gitRemoteSettings }}',
'{{ npmrcEnvironmentVariablesSecretVersion }}',
'{{ workspaceCompilationOverrides }}',
'{{ labels }}',
{{ setAuthenticatedUserAdmin }},
'{{ serviceAccount }}',
'{{ kmsKeyName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoryId }}'
RETURNING
name,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
workspaceCompilationOverrides
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: repositories
  props:
    - name: projectsId
      value: string
      description: Required parameter for the repositories resource.
    - name: locationsId
      value: string
      description: Required parameter for the repositories resource.
    - name: name
      value: string
      description: >
        Identifier. The repository's name.
        
    - name: displayName
      value: string
      description: >
        Optional. The repository's user-friendly name.
        
    - name: gitRemoteSettings
      value: object
      description: >
        Optional. If set, configures this repository to be linked to a Git remote.
        
    - name: npmrcEnvironmentVariablesSecretVersion
      value: string
      description: >
        Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.
        
    - name: workspaceCompilationOverrides
      value: object
      description: >
        Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information.
        
    - name: labels
      value: object
      description: >
        Optional. Repository user labels.
        
    - name: setAuthenticatedUserAdmin
      value: boolean
      description: >
        Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories
        
    - name: serviceAccount
      value: string
      description: >
        Optional. The service account to run workflow invocations under.
        
    - name: kmsKeyName
      value: string
      description: >
        Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/{kms_project}/locations/{location}/keyRings/{key_location}/cryptoKeys/{key}`
        
    - name: repositoryId
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

Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

```sql
UPDATE google.dataform.repositories
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__gitRemoteSettings = '{{ gitRemoteSettings }}',
data__npmrcEnvironmentVariablesSecretVersion = '{{ npmrcEnvironmentVariablesSecretVersion }}',
data__workspaceCompilationOverrides = '{{ workspaceCompilationOverrides }}',
data__labels = '{{ labels }}',
data__setAuthenticatedUserAdmin = {{ setAuthenticatedUserAdmin }},
data__serviceAccount = '{{ serviceAccount }}',
data__kmsKeyName = '{{ kmsKeyName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
workspaceCompilationOverrides;
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

Deletes a single Repository.

```sql
DELETE FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="commit"
    values={[
        { label: 'commit', value: 'commit' },
        { label: 'read_file', value: 'read_file' },
        { label: 'compute_access_token_status', value: 'compute_access_token_status' }
    ]}
>
<TabItem value="commit">

Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.

```sql
EXEC google.dataform.repositories.commit 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required 
@@json=
'{
"commitMetadata": "{{ commitMetadata }}", 
"requiredHeadCommitSha": "{{ requiredHeadCommitSha }}", 
"fileOperations": "{{ fileOperations }}"
}';
```
</TabItem>
<TabItem value="read_file">

Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.

```sql
EXEC google.dataform.repositories.read_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@commitSha='{{ commitSha }}', 
@path='{{ path }}';
```
</TabItem>
<TabItem value="compute_access_token_status">

Computes a Repository's Git access token status.

```sql
EXEC google.dataform.repositories.compute_access_token_status 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required;
```
</TabItem>
</Tabs>
