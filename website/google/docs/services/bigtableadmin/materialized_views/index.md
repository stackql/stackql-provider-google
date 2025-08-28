--- 
title: materialized_views
hide_title: false
hide_table_of_contents: false
keywords:
  - materialized_views
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

Creates, updates, deletes, gets or lists a <code>materialized_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>materialized_views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.materialized_views" /></td></tr>
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
    <td>Identifier. The unique name of the materialized view. Format: `projects/&#123;project&#125;/instances/&#123;instance&#125;/materializedViews/&#123;materialized_view&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to make the MaterializedView protected against deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag for this materialized view. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The server returns an ABORTED error on a mismatched etag.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The materialized view's select query.</td>
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
    <td>Identifier. The unique name of the materialized view. Format: `projects/&#123;project&#125;/instances/&#123;instance&#125;/materializedViews/&#123;materialized_view&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to make the MaterializedView protected against deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag for this materialized view. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The server returns an ABORTED error on a mismatched etag.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The materialized view's select query.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-materializedViewsId"><code>materializedViewsId</code></a></td>
    <td></td>
    <td>Gets information about a materialized view.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists information about materialized views in an instance.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-materializedViewId"><code>materializedViewId</code></a></td>
    <td>Creates a materialized view within an instance.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-materializedViewsId"><code>materializedViewsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a materialized view within an instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-materializedViewsId"><code>materializedViewsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a materialized view from an instance.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-materializedViewsId">
    <td><CopyableCode code="materializedViewsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-materializedViewId">
    <td><CopyableCode code="materializedViewId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets information about a materialized view.

```sql
SELECT
name,
deletionProtection,
etag,
query
FROM google.bigtableadmin.materialized_views
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND materializedViewsId = '{{ materializedViewsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists information about materialized views in an instance.

```sql
SELECT
name,
deletionProtection,
etag,
query
FROM google.bigtableadmin.materialized_views
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
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

Creates a materialized view within an instance.

```sql
INSERT INTO google.bigtableadmin.materialized_views (
data__name,
data__query,
data__etag,
data__deletionProtection,
projectsId,
instancesId,
materializedViewId
)
SELECT 
'{{ name }}',
'{{ query }}',
'{{ etag }}',
{{ deletionProtection }},
'{{ projectsId }}',
'{{ instancesId }}',
'{{ materializedViewId }}'
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
- name: materialized_views
  props:
    - name: projectsId
      value: string
      description: Required parameter for the materialized_views resource.
    - name: instancesId
      value: string
      description: Required parameter for the materialized_views resource.
    - name: name
      value: string
      description: >
        Identifier. The unique name of the materialized view. Format: `projects/{project}/instances/{instance}/materializedViews/{materialized_view}`
        
    - name: query
      value: string
      description: >
        Required. Immutable. The materialized view's select query.
        
    - name: etag
      value: string
      description: >
        Optional. The etag for this materialized view. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The server returns an ABORTED error on a mismatched etag.
        
    - name: deletionProtection
      value: boolean
      description: >
        Set to true to make the MaterializedView protected against deletion.
        
    - name: materializedViewId
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

Updates a materialized view within an instance.

```sql
UPDATE google.bigtableadmin.materialized_views
SET 
data__name = '{{ name }}',
data__query = '{{ query }}',
data__etag = '{{ etag }}',
data__deletionProtection = {{ deletionProtection }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND materializedViewsId = '{{ materializedViewsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a materialized view from an instance.

```sql
DELETE FROM google.bigtableadmin.materialized_views
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND materializedViewsId = '{{ materializedViewsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
