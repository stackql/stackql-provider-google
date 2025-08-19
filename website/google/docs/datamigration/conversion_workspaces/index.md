--- 
title: conversion_workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - conversion_workspaces
  - datamigration
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

Creates, updates, deletes, gets or lists a <code>conversion_workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>conversion_workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datamigration.conversion_workspaces" /></td></tr>
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

The main conversion workspace resource entity.

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
    <td>Full name of the workspace resource, in the form of: projects/&#123;project&#125;/locations/&#123;location&#125;/conversionWorkspaces/&#123;conversion_workspace&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the workspace resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Required. The destination engine details. (id: DatabaseEngineInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="destinationProvider" /></td>
    <td><code>string</code></td>
    <td>Optional. The provider for the destination database.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name for the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="globalSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true</td>
</tr>
<tr>
    <td><CopyableCode code="hasUncommittedChanges" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed).</td>
</tr>
<tr>
    <td><CopyableCode code="latestCommitId" /></td>
    <td><code>string</code></td>
    <td>Output only. The latest commit ID.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCommitTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the workspace was committed.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. The source engine details. (id: DatabaseEngineInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceProvider" /></td>
    <td><code>string</code></td>
    <td>Optional. The provider for the source database.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the workspace resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for 'ListConversionWorkspaces' request.

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
    <td><CopyableCode code="conversionWorkspaces" /></td>
    <td><code>array</code></td>
    <td>The list of conversion workspace objects.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Gets details of a single conversion workspace.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists conversion workspaces in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-conversionWorkspaceId"><code>conversionWorkspaceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new conversion workspace in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single conversion workspace.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single conversion workspace.</td>
</tr>
<tr>
    <td><a href="#seed"><CopyableCode code="seed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Imports a snapshot of the source database into the conversion workspace.</td>
</tr>
<tr>
    <td><a href="#convert"><CopyableCode code="convert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Creates a draft tree schema for the destination database.</td>
</tr>
<tr>
    <td><a href="#commit"><CopyableCode code="commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Marks all the data in the conversion workspace as committed.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Rolls back a conversion workspace to the last committed snapshot.</td>
</tr>
<tr>
    <td><a href="#apply"><CopyableCode code="apply" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Applies draft tree onto a specific destination database.</td>
</tr>
<tr>
    <td><a href="#describe_database_entities"><CopyableCode code="describe_database_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-tree"><code>tree</code></a>, <a href="#parameter-uncommitted"><code>uncommitted</code></a>, <a href="#parameter-commitId"><code>commitId</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.</td>
</tr>
<tr>
    <td><a href="#search_background_jobs"><CopyableCode code="search_background_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-returnMostRecentPerJobType"><code>returnMostRecentPerJobType</code></a>, <a href="#parameter-maxSize"><code>maxSize</code></a>, <a href="#parameter-completedUntilTime"><code>completedUntilTime</code></a></td>
    <td>Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.</td>
</tr>
<tr>
    <td><a href="#describe_conversion_workspace_revisions"><CopyableCode code="describe_conversion_workspace_revisions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-commitId"><code>commitId</code></a></td>
    <td>Retrieves a list of committed revisions of a specific conversion workspace.</td>
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
<tr id="parameter-conversionWorkspacesId">
    <td><CopyableCode code="conversionWorkspacesId" /></td>
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
<tr id="parameter-commitId">
    <td><CopyableCode code="commitId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-completedUntilTime">
    <td><CopyableCode code="completedUntilTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-conversionWorkspaceId">
    <td><CopyableCode code="conversionWorkspaceId" /></td>
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
<tr id="parameter-maxSize">
    <td><CopyableCode code="maxSize" /></td>
    <td><code>integer (int32)</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnMostRecentPerJobType">
    <td><CopyableCode code="returnMostRecentPerJobType" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-tree">
    <td><CopyableCode code="tree" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-uncommitted">
    <td><CopyableCode code="uncommitted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single conversion workspace.

```sql
SELECT
name,
createTime,
destination,
destinationProvider,
displayName,
globalSettings,
hasUncommittedChanges,
latestCommitId,
latestCommitTime,
source,
sourceProvider,
updateTime
FROM google.datamigration.conversion_workspaces
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND conversionWorkspacesId = '{{ conversionWorkspacesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists conversion workspaces in a given project and location.

```sql
SELECT
conversionWorkspaces,
nextPageToken,
unreachable
FROM google.datamigration.conversion_workspaces
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new conversion workspace in a given project and location.

```sql
INSERT INTO google.datamigration.conversion_workspaces (
data__name,
data__source,
data__destination,
data__globalSettings,
data__displayName,
data__destinationProvider,
data__sourceProvider,
projectsId,
locationsId,
conversionWorkspaceId,
requestId
)
SELECT 
'{{ name }}',
'{{ source }}',
'{{ destination }}',
'{{ globalSettings }}',
'{{ displayName }}',
'{{ destinationProvider }}',
'{{ sourceProvider }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ conversionWorkspaceId }}',
'{{ requestId }}'
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
- name: conversion_workspaces
  props:
    - name: projectsId
      value: string
      description: Required parameter for the conversion_workspaces resource.
    - name: locationsId
      value: string
      description: Required parameter for the conversion_workspaces resource.
    - name: name
      value: string
      description: >
        Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
        
    - name: source
      value: object
      description: >
        Required. The source engine details.
        
    - name: destination
      value: object
      description: >
        Required. The destination engine details.
        
    - name: globalSettings
      value: object
      description: >
        Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true
        
    - name: displayName
      value: string
      description: >
        Optional. The display name for the workspace.
        
    - name: destinationProvider
      value: string
      description: >
        Optional. The provider for the destination database.
        
      valid_values: ['DATABASE_PROVIDER_UNSPECIFIED', 'CLOUDSQL', 'RDS', 'AURORA', 'ALLOYDB', 'AZURE_DATABASE']
    - name: sourceProvider
      value: string
      description: >
        Optional. The provider for the source database.
        
      valid_values: ['DATABASE_PROVIDER_UNSPECIFIED', 'CLOUDSQL', 'RDS', 'AURORA', 'ALLOYDB', 'AZURE_DATABASE']
    - name: conversionWorkspaceId
      value: string
    - name: requestId
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

Updates the parameters of a single conversion workspace.

```sql
UPDATE google.datamigration.conversion_workspaces
SET 
data__name = '{{ name }}',
data__source = '{{ source }}',
data__destination = '{{ destination }}',
data__globalSettings = '{{ globalSettings }}',
data__displayName = '{{ displayName }}',
data__destinationProvider = '{{ destinationProvider }}',
data__sourceProvider = '{{ sourceProvider }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND conversionWorkspacesId = '{{ conversionWorkspacesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a single conversion workspace.

```sql
DELETE FROM google.datamigration.conversion_workspaces
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND conversionWorkspacesId = '{{ conversionWorkspacesId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="seed"
    values={[
        { label: 'seed', value: 'seed' },
        { label: 'convert', value: 'convert' },
        { label: 'commit', value: 'commit' },
        { label: 'rollback', value: 'rollback' },
        { label: 'apply', value: 'apply' },
        { label: 'describe_database_entities', value: 'describe_database_entities' },
        { label: 'search_background_jobs', value: 'search_background_jobs' },
        { label: 'describe_conversion_workspace_revisions', value: 'describe_conversion_workspace_revisions' }
    ]}
>
<TabItem value="seed">

Imports a snapshot of the source database into the conversion workspace.

```sql
EXEC google.datamigration.conversion_workspaces.seed 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required 
@@json=
'{
"autoCommit": {{ autoCommit }}, 
"sourceConnectionProfile": "{{ sourceConnectionProfile }}", 
"destinationConnectionProfile": "{{ destinationConnectionProfile }}"
}';
```
</TabItem>
<TabItem value="convert">

Creates a draft tree schema for the destination database.

```sql
EXEC google.datamigration.conversion_workspaces.convert 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required 
@@json=
'{
"autoCommit": {{ autoCommit }}, 
"filter": "{{ filter }}", 
"convertFullPath": {{ convertFullPath }}
}';
```
</TabItem>
<TabItem value="commit">

Marks all the data in the conversion workspace as committed.

```sql
EXEC google.datamigration.conversion_workspaces.commit 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required 
@@json=
'{
"commitName": "{{ commitName }}"
}';
```
</TabItem>
<TabItem value="rollback">

Rolls back a conversion workspace to the last committed snapshot.

```sql
EXEC google.datamigration.conversion_workspaces.rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required;
```
</TabItem>
<TabItem value="apply">

Applies draft tree onto a specific destination database.

```sql
EXEC google.datamigration.conversion_workspaces.apply 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"dryRun": {{ dryRun }}, 
"autoCommit": {{ autoCommit }}, 
"connectionProfile": "{{ connectionProfile }}"
}';
```
</TabItem>
<TabItem value="describe_database_entities">

Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.

```sql
EXEC google.datamigration.conversion_workspaces.describe_database_entities 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@tree='{{ tree }}', 
@uncommitted={{ uncommitted }}, 
@commitId='{{ commitId }}', 
@filter='{{ filter }}', 
@view='{{ view }}';
```
</TabItem>
<TabItem value="search_background_jobs">

Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.

```sql
EXEC google.datamigration.conversion_workspaces.search_background_jobs 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required, 
@returnMostRecentPerJobType={{ returnMostRecentPerJobType }}, 
@maxSize='{{ maxSize }}', 
@completedUntilTime='{{ completedUntilTime }}';
```
</TabItem>
<TabItem value="describe_conversion_workspace_revisions">

Retrieves a list of committed revisions of a specific conversion workspace.

```sql
EXEC google.datamigration.conversion_workspaces.describe_conversion_workspace_revisions 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required, 
@commitId='{{ commitId }}';
```
</TabItem>
</Tabs>
