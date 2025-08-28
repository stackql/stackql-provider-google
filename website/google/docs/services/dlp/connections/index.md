--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - dlp
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_connections_get"
    values={[
        { label: 'projects_locations_connections_get', value: 'projects_locations_connections_get' },
        { label: 'organizations_locations_connections_get', value: 'organizations_locations_connections_get' },
        { label: 'projects_locations_connections_list', value: 'projects_locations_connections_list' },
        { label: 'organizations_locations_connections_list', value: 'organizations_locations_connections_list' }
    ]}
>
<TabItem value="projects_locations_connections_get">

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
    <td>Output only. Name of the connection: `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSql" /></td>
    <td><code>object</code></td>
    <td>Connect to a Cloud SQL instance. (id: GooglePrivacyDlpV2CloudSqlProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Set if status == ERROR, to provide additional details. Will store the last 10 errors sorted with the most recent first.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The connection's state in its lifecycle.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_connections_get">

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
    <td>Output only. Name of the connection: `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSql" /></td>
    <td><code>object</code></td>
    <td>Connect to a Cloud SQL instance. (id: GooglePrivacyDlpV2CloudSqlProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Set if status == ERROR, to provide additional details. Will store the last 10 errors sorted with the most recent first.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The connection's state in its lifecycle.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_connections_list">

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
    <td>Output only. Name of the connection: `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSql" /></td>
    <td><code>object</code></td>
    <td>Connect to a Cloud SQL instance. (id: GooglePrivacyDlpV2CloudSqlProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Set if status == ERROR, to provide additional details. Will store the last 10 errors sorted with the most recent first.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The connection's state in its lifecycle.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_connections_list">

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
    <td>Output only. Name of the connection: `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSql" /></td>
    <td><code>object</code></td>
    <td>Connect to a Cloud SQL instance. (id: GooglePrivacyDlpV2CloudSqlProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Set if status == ERROR, to provide additional details. Will store the last 10 errors sorted with the most recent first.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Required. The connection's state in its lifecycle.</td>
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
    <td><a href="#projects_locations_connections_get"><CopyableCode code="projects_locations_connections_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Get a Connection by name.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_connections_get"><CopyableCode code="organizations_locations_connections_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Get a Connection by name.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_list"><CopyableCode code="projects_locations_connections_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Connections in a parent. Use SearchConnections to see all connections within an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_connections_list"><CopyableCode code="organizations_locations_connections_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Connections in a parent. Use SearchConnections to see all connections within an organization.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_create"><CopyableCode code="projects_locations_connections_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a Connection to an external data source.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_connections_create"><CopyableCode code="organizations_locations_connections_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a Connection to an external data source.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_patch"><CopyableCode code="projects_locations_connections_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Update a Connection.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_connections_patch"><CopyableCode code="organizations_locations_connections_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Update a Connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_delete"><CopyableCode code="projects_locations_connections_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Delete a Connection.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_connections_delete"><CopyableCode code="organizations_locations_connections_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Delete a Connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_search"><CopyableCode code="projects_locations_connections_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Searches for Connections in a parent.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_connections_search"><CopyableCode code="organizations_locations_connections_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Searches for Connections in a parent.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_connections_get"
    values={[
        { label: 'projects_locations_connections_get', value: 'projects_locations_connections_get' },
        { label: 'organizations_locations_connections_get', value: 'organizations_locations_connections_get' },
        { label: 'projects_locations_connections_list', value: 'projects_locations_connections_list' },
        { label: 'organizations_locations_connections_list', value: 'organizations_locations_connections_list' }
    ]}
>
<TabItem value="projects_locations_connections_get">

Get a Connection by name.

```sql
SELECT
name,
cloudSql,
errors,
state
FROM google.dlp.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_connections_get">

Get a Connection by name.

```sql
SELECT
name,
cloudSql,
errors,
state
FROM google.dlp.connections
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_connections_list">

Lists Connections in a parent. Use SearchConnections to see all connections within an organization.

```sql
SELECT
name,
cloudSql,
errors,
state
FROM google.dlp.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_connections_list">

Lists Connections in a parent. Use SearchConnections to see all connections within an organization.

```sql
SELECT
name,
cloudSql,
errors,
state
FROM google.dlp.connections
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_connections_create"
    values={[
        { label: 'projects_locations_connections_create', value: 'projects_locations_connections_create' },
        { label: 'organizations_locations_connections_create', value: 'organizations_locations_connections_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_connections_create">

Create a Connection to an external data source.

```sql
INSERT INTO google.dlp.connections (
data__connection,
projectsId,
locationsId
)
SELECT 
'{{ connection }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
cloudSql,
errors,
state
;
```
</TabItem>
<TabItem value="organizations_locations_connections_create">

Create a Connection to an external data source.

```sql
INSERT INTO google.dlp.connections (
data__connection,
organizationsId,
locationsId
)
SELECT 
'{{ connection }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
cloudSql,
errors,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: connections
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connections resource.
    - name: locationsId
      value: string
      description: Required parameter for the connections resource.
    - name: organizationsId
      value: string
      description: Required parameter for the connections resource.
    - name: connection
      value: object
      description: >
        Required. The connection resource.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_connections_patch"
    values={[
        { label: 'projects_locations_connections_patch', value: 'projects_locations_connections_patch' },
        { label: 'organizations_locations_connections_patch', value: 'organizations_locations_connections_patch' }
    ]}
>
<TabItem value="projects_locations_connections_patch">

Update a Connection.

```sql
UPDATE google.dlp.connections
SET 
data__connection = '{{ connection }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
RETURNING
name,
cloudSql,
errors,
state;
```
</TabItem>
<TabItem value="organizations_locations_connections_patch">

Update a Connection.

```sql
UPDATE google.dlp.connections
SET 
data__connection = '{{ connection }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
RETURNING
name,
cloudSql,
errors,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_connections_delete"
    values={[
        { label: 'projects_locations_connections_delete', value: 'projects_locations_connections_delete' },
        { label: 'organizations_locations_connections_delete', value: 'organizations_locations_connections_delete' }
    ]}
>
<TabItem value="projects_locations_connections_delete">

Delete a Connection.

```sql
DELETE FROM google.dlp.connections
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required;
```
</TabItem>
<TabItem value="organizations_locations_connections_delete">

Delete a Connection.

```sql
DELETE FROM google.dlp.connections
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_connections_search"
    values={[
        { label: 'projects_locations_connections_search', value: 'projects_locations_connections_search' },
        { label: 'organizations_locations_connections_search', value: 'organizations_locations_connections_search' }
    ]}
>
<TabItem value="projects_locations_connections_search">

Searches for Connections in a parent.

```sql
EXEC google.dlp.connections.projects_locations_connections_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@filter='{{ filter }}';
```
</TabItem>
<TabItem value="organizations_locations_connections_search">

Searches for Connections in a parent.

```sql
EXEC google.dlp.connections.organizations_locations_connections_search 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@filter='{{ filter }}';
```
</TabItem>
</Tabs>
