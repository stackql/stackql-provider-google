--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - cloudbuild
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudbuild.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_connections_repositories_get"
    values={[
        { label: 'projects_locations_connections_repositories_get', value: 'projects_locations_connections_repositories_get' },
        { label: 'projects_locations_connections_repositories_list', value: 'projects_locations_connections_repositories_list' }
    ]}
>
<TabItem value="projects_locations_connections_repositories_get">

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
    <td>Immutable. Resource name of the repository, in the format `projects/*/locations/*/connections/*/repositories/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows clients to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Server assigned timestamp for when the connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteUri" /></td>
    <td><code>string</code></td>
    <td>Required. Git Clone HTTPS URI.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Server assigned timestamp for when the connection was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webhookId" /></td>
    <td><code>string</code></td>
    <td>Output only. External ID of the webhook created for the repository.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_connections_repositories_list">

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
    <td>Immutable. Resource name of the repository, in the format `projects/*/locations/*/connections/*/repositories/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows clients to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Server assigned timestamp for when the connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteUri" /></td>
    <td><code>string</code></td>
    <td>Required. Git Clone HTTPS URI.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Server assigned timestamp for when the connection was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webhookId" /></td>
    <td><code>string</code></td>
    <td>Output only. External ID of the webhook created for the repository.</td>
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
    <td><a href="#projects_locations_connections_repositories_get"><CopyableCode code="projects_locations_connections_repositories_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Gets details of a single repository.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_repositories_list"><CopyableCode code="projects_locations_connections_repositories_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists Repositories in a given connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_repositories_create"><CopyableCode code="projects_locations_connections_repositories_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-repositoryId"><code>repositoryId</code></a></td>
    <td>Creates a Repository.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_repositories_batch_create"><CopyableCode code="projects_locations_connections_repositories_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Creates multiple repositories inside a connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_repositories_delete"><CopyableCode code="projects_locations_connections_repositories_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single repository.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_repositories_access_read_write_token"><CopyableCode code="projects_locations_connections_repositories_access_read_write_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Fetches read/write token of a given repository.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_repositories_access_read_token"><CopyableCode code="projects_locations_connections_repositories_access_read_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Fetches read token of a given repository.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-repositoryId">
    <td><CopyableCode code="repositoryId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
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
    defaultValue="projects_locations_connections_repositories_get"
    values={[
        { label: 'projects_locations_connections_repositories_get', value: 'projects_locations_connections_repositories_get' },
        { label: 'projects_locations_connections_repositories_list', value: 'projects_locations_connections_repositories_list' }
    ]}
>
<TabItem value="projects_locations_connections_repositories_get">

Gets details of a single repository.

```sql
SELECT
name,
annotations,
createTime,
etag,
remoteUri,
updateTime,
webhookId
FROM google.cloudbuild.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_connections_repositories_list">

Lists Repositories in a given connection.

```sql
SELECT
name,
annotations,
createTime,
etag,
remoteUri,
updateTime,
webhookId
FROM google.cloudbuild.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_connections_repositories_create"
    values={[
        { label: 'projects_locations_connections_repositories_create', value: 'projects_locations_connections_repositories_create' },
        { label: 'projects_locations_connections_repositories_batch_create', value: 'projects_locations_connections_repositories_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_connections_repositories_create">

Creates a Repository.

```sql
INSERT INTO google.cloudbuild.repositories (
data__name,
data__remoteUri,
data__annotations,
data__etag,
projectsId,
locationsId,
connectionsId,
repositoryId
)
SELECT 
'{{ name }}',
'{{ remoteUri }}',
'{{ annotations }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionsId }}',
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
<TabItem value="projects_locations_connections_repositories_batch_create">

Creates multiple repositories inside a connection.

```sql
INSERT INTO google.cloudbuild.repositories (
data__requests,
projectsId,
locationsId,
connectionsId
)
SELECT 
'{{ requests }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionsId }}'
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
    - name: connectionsId
      value: string
      description: Required parameter for the repositories resource.
    - name: name
      value: string
      description: >
        Immutable. Resource name of the repository, in the format `projects/*/locations/*/connections/*/repositories/*`.
        
    - name: remoteUri
      value: string
      description: >
        Required. Git Clone HTTPS URI.
        
    - name: annotations
      value: object
      description: >
        Optional. Allows clients to store small amounts of arbitrary data.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: requests
      value: array
      description: >
        Required. The request messages specifying the repositories to create.
        
    - name: repositoryId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_connections_repositories_delete"
    values={[
        { label: 'projects_locations_connections_repositories_delete', value: 'projects_locations_connections_repositories_delete' }
    ]}
>
<TabItem value="projects_locations_connections_repositories_delete">

Deletes a single repository.

```sql
DELETE FROM google.cloudbuild.repositories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_connections_repositories_access_read_write_token"
    values={[
        { label: 'projects_locations_connections_repositories_access_read_write_token', value: 'projects_locations_connections_repositories_access_read_write_token' },
        { label: 'projects_locations_connections_repositories_access_read_token', value: 'projects_locations_connections_repositories_access_read_token' }
    ]}
>
<TabItem value="projects_locations_connections_repositories_access_read_write_token">

Fetches read/write token of a given repository.

```sql
EXEC google.cloudbuild.repositories.projects_locations_connections_repositories_access_read_write_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_connections_repositories_access_read_token">

Fetches read token of a given repository.

```sql
EXEC google.cloudbuild.repositories.projects_locations_connections_repositories_access_read_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required;
```
</TabItem>
</Tabs>
