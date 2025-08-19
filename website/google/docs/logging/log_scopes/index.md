--- 
title: log_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - log_scopes
  - logging
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

Creates, updates, deletes, gets or lists a <code>log_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>log_scopes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.log_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_log_scopes_get"
    values={[
        { label: 'projects_locations_log_scopes_get', value: 'projects_locations_log_scopes_get' },
        { label: 'organizations_locations_log_scopes_get', value: 'organizations_locations_log_scopes_get' },
        { label: 'folders_locations_log_scopes_get', value: 'folders_locations_log_scopes_get' },
        { label: 'projects_locations_log_scopes_list', value: 'projects_locations_log_scopes_list' },
        { label: 'organizations_locations_log_scopes_list', value: 'organizations_locations_log_scopes_list' },
        { label: 'folders_locations_log_scopes_list', value: 'folders_locations_log_scopes_list' }
    ]}
>
<TabItem value="projects_locations_log_scopes_get">

Describes a group of resources to read log entries from.

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
    <td>Output only. The resource name of the log scope.Log scopes are only available in the global location. For example:projects/my-project/locations/global/logScopes/my-log-scope</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the log scope.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this log scope.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceNames" /></td>
    <td><code>array</code></td>
    <td>Required. Names of one or more parent resources: projects/[PROJECT_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]A log scope can include a maximum of 5 projects and a maximum of 100 resources in total.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the log scope.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_log_scopes_get">

Describes a group of resources to read log entries from.

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
    <td>Output only. The resource name of the log scope.Log scopes are only available in the global location. For example:projects/my-project/locations/global/logScopes/my-log-scope</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the log scope.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this log scope.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceNames" /></td>
    <td><code>array</code></td>
    <td>Required. Names of one or more parent resources: projects/[PROJECT_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]A log scope can include a maximum of 5 projects and a maximum of 100 resources in total.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the log scope.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_log_scopes_get">

Describes a group of resources to read log entries from.

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
    <td>Output only. The resource name of the log scope.Log scopes are only available in the global location. For example:projects/my-project/locations/global/logScopes/my-log-scope</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the log scope.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this log scope.The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceNames" /></td>
    <td><code>array</code></td>
    <td>Required. Names of one or more parent resources: projects/[PROJECT_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]A log scope can include a maximum of 5 projects and a maximum of 100 resources in total.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the log scope.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_log_scopes_list">

The response from ListLogScopes. Every project has a _Default log scope that cannot be modified or deleted.

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
    <td><CopyableCode code="logScopes" /></td>
    <td><code>array</code></td>
    <td>A list of log scopes.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_log_scopes_list">

The response from ListLogScopes. Every project has a _Default log scope that cannot be modified or deleted.

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
    <td><CopyableCode code="logScopes" /></td>
    <td><code>array</code></td>
    <td>A list of log scopes.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_locations_log_scopes_list">

The response from ListLogScopes. Every project has a _Default log scope that cannot be modified or deleted.

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
    <td><CopyableCode code="logScopes" /></td>
    <td><code>array</code></td>
    <td>A list of log scopes.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.</td>
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
    <td><a href="#projects_locations_log_scopes_get"><CopyableCode code="projects_locations_log_scopes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td></td>
    <td>Gets a log scope.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_log_scopes_get"><CopyableCode code="organizations_locations_log_scopes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td></td>
    <td>Gets a log scope.</td>
</tr>
<tr>
    <td><a href="#folders_locations_log_scopes_get"><CopyableCode code="folders_locations_log_scopes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td></td>
    <td>Gets a log scope.</td>
</tr>
<tr>
    <td><a href="#projects_locations_log_scopes_list"><CopyableCode code="projects_locations_log_scopes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log scopes.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_log_scopes_list"><CopyableCode code="organizations_locations_log_scopes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log scopes.</td>
</tr>
<tr>
    <td><a href="#folders_locations_log_scopes_list"><CopyableCode code="folders_locations_log_scopes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists log scopes.</td>
</tr>
<tr>
    <td><a href="#projects_locations_log_scopes_create"><CopyableCode code="projects_locations_log_scopes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-logScopeId"><code>logScopeId</code></a></td>
    <td>Creates a log scope.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_log_scopes_create"><CopyableCode code="organizations_locations_log_scopes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-logScopeId"><code>logScopeId</code></a></td>
    <td>Creates a log scope.</td>
</tr>
<tr>
    <td><a href="#folders_locations_log_scopes_create"><CopyableCode code="folders_locations_log_scopes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-logScopeId"><code>logScopeId</code></a></td>
    <td>Creates a log scope.</td>
</tr>
<tr>
    <td><a href="#projects_locations_log_scopes_patch"><CopyableCode code="projects_locations_log_scopes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log scope.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_log_scopes_patch"><CopyableCode code="organizations_locations_log_scopes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log scope.</td>
</tr>
<tr>
    <td><a href="#folders_locations_log_scopes_patch"><CopyableCode code="folders_locations_log_scopes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a log scope.</td>
</tr>
<tr>
    <td><a href="#projects_locations_log_scopes_delete"><CopyableCode code="projects_locations_log_scopes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td></td>
    <td>Deletes a log scope.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_log_scopes_delete"><CopyableCode code="organizations_locations_log_scopes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td></td>
    <td>Deletes a log scope.</td>
</tr>
<tr>
    <td><a href="#folders_locations_log_scopes_delete"><CopyableCode code="folders_locations_log_scopes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-logScopesId"><code>logScopesId</code></a></td>
    <td></td>
    <td>Deletes a log scope.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-logScopesId">
    <td><CopyableCode code="logScopesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-logScopeId">
    <td><CopyableCode code="logScopeId" /></td>
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
    defaultValue="projects_locations_log_scopes_get"
    values={[
        { label: 'projects_locations_log_scopes_get', value: 'projects_locations_log_scopes_get' },
        { label: 'organizations_locations_log_scopes_get', value: 'organizations_locations_log_scopes_get' },
        { label: 'folders_locations_log_scopes_get', value: 'folders_locations_log_scopes_get' },
        { label: 'projects_locations_log_scopes_list', value: 'projects_locations_log_scopes_list' },
        { label: 'organizations_locations_log_scopes_list', value: 'organizations_locations_log_scopes_list' },
        { label: 'folders_locations_log_scopes_list', value: 'folders_locations_log_scopes_list' }
    ]}
>
<TabItem value="projects_locations_log_scopes_get">

Gets a log scope.

```sql
SELECT
name,
createTime,
description,
resourceNames,
updateTime
FROM google.logging.log_scopes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND logScopesId = '{{ logScopesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_log_scopes_get">

Gets a log scope.

```sql
SELECT
name,
createTime,
description,
resourceNames,
updateTime
FROM google.logging.log_scopes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND logScopesId = '{{ logScopesId }}' -- required;
```
</TabItem>
<TabItem value="folders_locations_log_scopes_get">

Gets a log scope.

```sql
SELECT
name,
createTime,
description,
resourceNames,
updateTime
FROM google.logging.log_scopes
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND logScopesId = '{{ logScopesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_log_scopes_list">

Lists log scopes.

```sql
SELECT
logScopes,
nextPageToken
FROM google.logging.log_scopes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="organizations_locations_log_scopes_list">

Lists log scopes.

```sql
SELECT
logScopes,
nextPageToken
FROM google.logging.log_scopes
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
<TabItem value="folders_locations_log_scopes_list">

Lists log scopes.

```sql
SELECT
logScopes,
nextPageToken
FROM google.logging.log_scopes
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_log_scopes_create"
    values={[
        { label: 'projects_locations_log_scopes_create', value: 'projects_locations_log_scopes_create' },
        { label: 'organizations_locations_log_scopes_create', value: 'organizations_locations_log_scopes_create' },
        { label: 'folders_locations_log_scopes_create', value: 'folders_locations_log_scopes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_log_scopes_create">

Creates a log scope.

```sql
INSERT INTO google.logging.log_scopes (
data__resourceNames,
data__description,
projectsId,
locationsId,
logScopeId
)
SELECT 
'{{ resourceNames }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ logScopeId }}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime
;
```
</TabItem>
<TabItem value="organizations_locations_log_scopes_create">

Creates a log scope.

```sql
INSERT INTO google.logging.log_scopes (
data__resourceNames,
data__description,
organizationsId,
locationsId,
logScopeId
)
SELECT 
'{{ resourceNames }}',
'{{ description }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ logScopeId }}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime
;
```
</TabItem>
<TabItem value="folders_locations_log_scopes_create">

Creates a log scope.

```sql
INSERT INTO google.logging.log_scopes (
data__resourceNames,
data__description,
foldersId,
locationsId,
logScopeId
)
SELECT 
'{{ resourceNames }}',
'{{ description }}',
'{{ foldersId }}',
'{{ locationsId }}',
'{{ logScopeId }}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: log_scopes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the log_scopes resource.
    - name: locationsId
      value: string
      description: Required parameter for the log_scopes resource.
    - name: organizationsId
      value: string
      description: Required parameter for the log_scopes resource.
    - name: foldersId
      value: string
      description: Required parameter for the log_scopes resource.
    - name: resourceNames
      value: array
      description: >
        Required. Names of one or more parent resources: projects/[PROJECT_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]A log scope can include a maximum of 5 projects and a maximum of 100 resources in total.
        
    - name: description
      value: string
      description: >
        Optional. Describes this log scope.The maximum length of the description is 8000 characters.
        
    - name: logScopeId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_log_scopes_patch"
    values={[
        { label: 'projects_locations_log_scopes_patch', value: 'projects_locations_log_scopes_patch' },
        { label: 'organizations_locations_log_scopes_patch', value: 'organizations_locations_log_scopes_patch' },
        { label: 'folders_locations_log_scopes_patch', value: 'folders_locations_log_scopes_patch' }
    ]}
>
<TabItem value="projects_locations_log_scopes_patch">

Updates a log scope.

```sql
UPDATE google.logging.log_scopes
SET 
data__resourceNames = '{{ resourceNames }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND logScopesId = '{{ logScopesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_log_scopes_patch">

Updates a log scope.

```sql
UPDATE google.logging.log_scopes
SET 
data__resourceNames = '{{ resourceNames }}',
data__description = '{{ description }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND logScopesId = '{{ logScopesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime;
```
</TabItem>
<TabItem value="folders_locations_log_scopes_patch">

Updates a log scope.

```sql
UPDATE google.logging.log_scopes
SET 
data__resourceNames = '{{ resourceNames }}',
data__description = '{{ description }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND logScopesId = '{{ logScopesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_log_scopes_delete"
    values={[
        { label: 'projects_locations_log_scopes_delete', value: 'projects_locations_log_scopes_delete' },
        { label: 'organizations_locations_log_scopes_delete', value: 'organizations_locations_log_scopes_delete' },
        { label: 'folders_locations_log_scopes_delete', value: 'folders_locations_log_scopes_delete' }
    ]}
>
<TabItem value="projects_locations_log_scopes_delete">

Deletes a log scope.

```sql
DELETE FROM google.logging.log_scopes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND logScopesId = '{{ logScopesId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_log_scopes_delete">

Deletes a log scope.

```sql
DELETE FROM google.logging.log_scopes
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND logScopesId = '{{ logScopesId }}' --required;
```
</TabItem>
<TabItem value="folders_locations_log_scopes_delete">

Deletes a log scope.

```sql
DELETE FROM google.logging.log_scopes
WHERE foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND logScopesId = '{{ logScopesId }}' --required;
```
</TabItem>
</Tabs>
