--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - artifactregistry
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.artifactregistry.repositories" /></td></tr>
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

A Repository for storing artifacts with a specific format.

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
    <td>The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. For each location in a project, repository names must be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="cleanupPolicies" /></td>
    <td><code>object</code></td>
    <td>Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length.</td>
</tr>
<tr>
    <td><CopyableCode code="cleanupPolicyDryRun" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="disallowUnspecifiedMode" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If this is true, an unspecified repo type will be treated as error rather than defaulting to standard.</td>
</tr>
<tr>
    <td><CopyableCode code="dockerConfig" /></td>
    <td><code>object</code></td>
    <td>Docker repository config contains repository level configuration for the repositories of docker type. (id: DockerRepositoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Optional. The format of packages that are stored in the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.</td>
</tr>
<tr>
    <td><CopyableCode code="mavenConfig" /></td>
    <td><code>object</code></td>
    <td>Maven repository config contains repository level configuration for the repositories of maven type. (id: MavenRepositoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Optional. The mode of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="registryUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The repository endpoint, for example: `us-docker.pkg.dev/my-proj/my-repo`.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteRepositoryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration specific for a Remote Repository. (id: RemoteRepositoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this repository satisfies PZI.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this repository satisfies PZS.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the repository was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualRepositoryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration specific for a Virtual Repository. (id: VirtualRepositoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilityScanningConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Config and state for vulnerability scanning of resources within this Repository. (id: VulnerabilityScanningConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response from listing repositories.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of repositories, or empty if there are no more repositories to return.</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>The repositories returned.</td>
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
    <td>Gets a repository.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists repositories.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-repositoryId"><code>repositoryId</code></a></td>
    <td>Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a repository.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.</td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a repository.

```sql
SELECT
name,
cleanupPolicies,
cleanupPolicyDryRun,
createTime,
description,
disallowUnspecifiedMode,
dockerConfig,
format,
kmsKeyName,
labels,
mavenConfig,
mode,
registryUri,
remoteRepositoryConfig,
satisfiesPzi,
satisfiesPzs,
sizeBytes,
updateTime,
virtualRepositoryConfig,
vulnerabilityScanningConfig
FROM google.artifactregistry.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists repositories.

```sql
SELECT
nextPageToken,
repositories
FROM google.artifactregistry.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.

```sql
INSERT INTO google.artifactregistry.repositories (
data__mavenConfig,
data__dockerConfig,
data__virtualRepositoryConfig,
data__remoteRepositoryConfig,
data__name,
data__format,
data__description,
data__labels,
data__kmsKeyName,
data__mode,
data__cleanupPolicies,
data__cleanupPolicyDryRun,
data__vulnerabilityScanningConfig,
data__disallowUnspecifiedMode,
projectsId,
locationsId,
repositoryId
)
SELECT 
'{{ mavenConfig }}',
'{{ dockerConfig }}',
'{{ virtualRepositoryConfig }}',
'{{ remoteRepositoryConfig }}',
'{{ name }}',
'{{ format }}',
'{{ description }}',
'{{ labels }}',
'{{ kmsKeyName }}',
'{{ mode }}',
'{{ cleanupPolicies }}',
{{ cleanupPolicyDryRun }},
'{{ vulnerabilityScanningConfig }}',
{{ disallowUnspecifiedMode }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoryId }}'
RETURNING
name,
done,
error,
metadata,
response
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
    - name: mavenConfig
      value: object
      description: >
        Maven repository config contains repository level configuration for the repositories of maven type.
        
    - name: dockerConfig
      value: object
      description: >
        Docker repository config contains repository level configuration for the repositories of docker type.
        
    - name: virtualRepositoryConfig
      value: object
      description: >
        Configuration specific for a Virtual Repository.
        
    - name: remoteRepositoryConfig
      value: object
      description: >
        Configuration specific for a Remote Repository.
        
    - name: name
      value: string
      description: >
        The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. For each location in a project, repository names must be unique.
        
    - name: format
      value: string
      description: >
        Optional. The format of packages that are stored in the repository.
        
      valid_values: ['FORMAT_UNSPECIFIED', 'DOCKER', 'MAVEN', 'NPM', 'APT', 'YUM', 'GOOGET', 'PYTHON', 'KFP', 'GO', 'GENERIC']
    - name: description
      value: string
      description: >
        The user-provided description of the repository.
        
    - name: labels
      value: object
      description: >
        Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
        
    - name: kmsKeyName
      value: string
      description: >
        The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
        
    - name: mode
      value: string
      description: >
        Optional. The mode of the repository.
        
      valid_values: ['MODE_UNSPECIFIED', 'STANDARD_REPOSITORY', 'VIRTUAL_REPOSITORY', 'REMOTE_REPOSITORY', 'AOSS_REPOSITORY', 'ASSURED_OSS_REPOSITORY']
    - name: cleanupPolicies
      value: object
      description: >
        Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length.
        
    - name: cleanupPolicyDryRun
      value: boolean
      description: >
        Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository.
        
    - name: vulnerabilityScanningConfig
      value: object
      description: >
        Optional. Config and state for vulnerability scanning of resources within this Repository.
        
    - name: disallowUnspecifiedMode
      value: boolean
      description: >
        Optional. If this is true, an unspecified repo type will be treated as error rather than defaulting to standard.
        
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

Updates a repository.

```sql
UPDATE google.artifactregistry.repositories
SET 
data__mavenConfig = '{{ mavenConfig }}',
data__dockerConfig = '{{ dockerConfig }}',
data__virtualRepositoryConfig = '{{ virtualRepositoryConfig }}',
data__remoteRepositoryConfig = '{{ remoteRepositoryConfig }}',
data__name = '{{ name }}',
data__format = '{{ format }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__mode = '{{ mode }}',
data__cleanupPolicies = '{{ cleanupPolicies }}',
data__cleanupPolicyDryRun = {{ cleanupPolicyDryRun }},
data__vulnerabilityScanningConfig = '{{ vulnerabilityScanningConfig }}',
data__disallowUnspecifiedMode = {{ disallowUnspecifiedMode }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
cleanupPolicies,
cleanupPolicyDryRun,
createTime,
description,
disallowUnspecifiedMode,
dockerConfig,
format,
kmsKeyName,
labels,
mavenConfig,
mode,
registryUri,
remoteRepositoryConfig,
satisfiesPzi,
satisfiesPzs,
sizeBytes,
updateTime,
virtualRepositoryConfig,
vulnerabilityScanningConfig;
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

Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.

```sql
DELETE FROM google.artifactregistry.repositories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required;
```
</TabItem>
</Tabs>
