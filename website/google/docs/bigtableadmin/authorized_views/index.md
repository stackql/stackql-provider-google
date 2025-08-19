--- 
title: authorized_views
hide_title: false
hide_table_of_contents: false
keywords:
  - authorized_views
  - bigtableadmin
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

Creates, updates, deletes, gets or lists an <code>authorized_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>authorized_views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.authorized_views" /></td></tr>
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

An Authorized View of a Cloud Bigtable Table.

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
    <td>Identifier. The name of this AuthorizedView. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/tables/&#123;table&#125;/authorizedViews/&#123;authorized_view&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to make the AuthorizedView protected against deletion. The parent Table and containing Instance cannot be deleted if an AuthorizedView has this bit set.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag for this AuthorizedView. If this is provided on update, it must match the server's etag. The server returns ABORTED error on a mismatched etag.</td>
</tr>
<tr>
    <td><CopyableCode code="subsetView" /></td>
    <td><code>object</code></td>
    <td>An AuthorizedView permitting access to an explicit subset of a Table. (id: GoogleBigtableAdminV2AuthorizedViewSubsetView)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews

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
    <td><CopyableCode code="authorizedViews" /></td>
    <td><code>array</code></td>
    <td>The AuthorizedViews present in the requested table.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets information from a specified AuthorizedView.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists all AuthorizedViews from a specific table.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td><a href="#parameter-authorizedViewId"><code>authorizedViewId</code></a></td>
    <td>Creates a new AuthorizedView in a table.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-ignoreWarnings"><code>ignoreWarnings</code></a></td>
    <td>Updates an AuthorizedView in a table.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a>, <a href="#parameter-authorizedViewsId"><code>authorizedViewsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Permanently deletes a specified AuthorizedView.</td>
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
<tr id="parameter-authorizedViewsId">
    <td><CopyableCode code="authorizedViewsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tablesId">
    <td><CopyableCode code="tablesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-authorizedViewId">
    <td><CopyableCode code="authorizedViewId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreWarnings">
    <td><CopyableCode code="ignoreWarnings" /></td>
    <td><code>boolean</code></td>
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

Gets information from a specified AuthorizedView.

```sql
SELECT
name,
deletionProtection,
etag,
subsetView
FROM google.bigtableadmin.authorized_views
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND tablesId = '{{ tablesId }}' -- required
AND authorizedViewsId = '{{ authorizedViewsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists all AuthorizedViews from a specific table.

```sql
SELECT
authorizedViews,
nextPageToken
FROM google.bigtableadmin.authorized_views
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND tablesId = '{{ tablesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}';
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

Creates a new AuthorizedView in a table.

```sql
INSERT INTO google.bigtableadmin.authorized_views (
data__name,
data__subsetView,
data__etag,
data__deletionProtection,
projectsId,
instancesId,
tablesId,
authorizedViewId
)
SELECT 
'{{ name }}',
'{{ subsetView }}',
'{{ etag }}',
{{ deletionProtection }},
'{{ projectsId }}',
'{{ instancesId }}',
'{{ tablesId }}',
'{{ authorizedViewId }}'
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
- name: authorized_views
  props:
    - name: projectsId
      value: string
      description: Required parameter for the authorized_views resource.
    - name: instancesId
      value: string
      description: Required parameter for the authorized_views resource.
    - name: tablesId
      value: string
      description: Required parameter for the authorized_views resource.
    - name: name
      value: string
      description: >
        Identifier. The name of this AuthorizedView. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}`
        
    - name: subsetView
      value: object
      description: >
        An AuthorizedView permitting access to an explicit subset of a Table.
        
    - name: etag
      value: string
      description: >
        The etag for this AuthorizedView. If this is provided on update, it must match the server's etag. The server returns ABORTED error on a mismatched etag.
        
    - name: deletionProtection
      value: boolean
      description: >
        Set to true to make the AuthorizedView protected against deletion. The parent Table and containing Instance cannot be deleted if an AuthorizedView has this bit set.
        
    - name: authorizedViewId
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

Updates an AuthorizedView in a table.

```sql
UPDATE google.bigtableadmin.authorized_views
SET 
data__name = '{{ name }}',
data__subsetView = '{{ subsetView }}',
data__etag = '{{ etag }}',
data__deletionProtection = {{ deletionProtection }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND tablesId = '{{ tablesId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND updateMask = '{{ updateMask}}'
AND ignoreWarnings = {{ ignoreWarnings}}
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

Permanently deletes a specified AuthorizedView.

```sql
DELETE FROM google.bigtableadmin.authorized_views
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND tablesId = '{{ tablesId }}' --required
AND authorizedViewsId = '{{ authorizedViewsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
