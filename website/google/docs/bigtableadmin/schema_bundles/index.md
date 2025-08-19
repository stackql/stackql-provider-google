--- 
title: schema_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_bundles
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

Creates, updates, deletes, gets or lists a <code>schema_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schema_bundles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.schema_bundles" /></td></tr>
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

A named collection of related schemas.

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
    <td>Identifier. The unique name identifying this schema bundle. Values are of the form `projects/&#123;project&#125;/instances/&#123;instance&#125;/tables/&#123;table&#125;/schemaBundles/&#123;schema_bundle&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag for this schema bundle. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. The server returns an ABORTED error on a mismatched etag.</td>
</tr>
<tr>
    <td><CopyableCode code="protoSchema" /></td>
    <td><code>object</code></td>
    <td>Schema for Protobufs. (id: ProtoSchema)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for ListSchemaBundles.

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
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaBundles" /></td>
    <td><code>array</code></td>
    <td>The schema bundles from the specified table.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a>, <a href="#parameter-schemaBundlesId"><code>schemaBundlesId</code></a></td>
    <td></td>
    <td>Gets metadata information about the specified schema bundle.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists all schema bundles associated with the specified table.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a></td>
    <td><a href="#parameter-schemaBundleId"><code>schemaBundleId</code></a></td>
    <td>Creates a new schema bundle in the specified table.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a>, <a href="#parameter-schemaBundlesId"><code>schemaBundlesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-ignoreWarnings"><code>ignoreWarnings</code></a></td>
    <td>Updates a schema bundle in the specified table.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-tablesId"><code>tablesId</code></a>, <a href="#parameter-schemaBundlesId"><code>schemaBundlesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a schema bundle in the specified table.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-schemaBundlesId">
    <td><CopyableCode code="schemaBundlesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tablesId">
    <td><CopyableCode code="tablesId" /></td>
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
<tr id="parameter-schemaBundleId">
    <td><CopyableCode code="schemaBundleId" /></td>
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

Gets metadata information about the specified schema bundle.

```sql
SELECT
name,
etag,
protoSchema
FROM google.bigtableadmin.schema_bundles
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND tablesId = '{{ tablesId }}' -- required
AND schemaBundlesId = '{{ schemaBundlesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all schema bundles associated with the specified table.

```sql
SELECT
nextPageToken,
schemaBundles
FROM google.bigtableadmin.schema_bundles
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

Creates a new schema bundle in the specified table.

```sql
INSERT INTO google.bigtableadmin.schema_bundles (
data__name,
data__protoSchema,
data__etag,
projectsId,
instancesId,
tablesId,
schemaBundleId
)
SELECT 
'{{ name }}',
'{{ protoSchema }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ tablesId }}',
'{{ schemaBundleId }}'
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
- name: schema_bundles
  props:
    - name: projectsId
      value: string
      description: Required parameter for the schema_bundles resource.
    - name: instancesId
      value: string
      description: Required parameter for the schema_bundles resource.
    - name: tablesId
      value: string
      description: Required parameter for the schema_bundles resource.
    - name: name
      value: string
      description: >
        Identifier. The unique name identifying this schema bundle. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}`
        
    - name: protoSchema
      value: object
      description: >
        Schema for Protobufs.
        
    - name: etag
      value: string
      description: >
        Optional. The etag for this schema bundle. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. The server returns an ABORTED error on a mismatched etag.
        
    - name: schemaBundleId
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

Updates a schema bundle in the specified table.

```sql
UPDATE google.bigtableadmin.schema_bundles
SET 
data__name = '{{ name }}',
data__protoSchema = '{{ protoSchema }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND tablesId = '{{ tablesId }}' --required
AND schemaBundlesId = '{{ schemaBundlesId }}' --required
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

Deletes a schema bundle in the specified table.

```sql
DELETE FROM google.bigtableadmin.schema_bundles
WHERE projectsId = '{{ projectsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND tablesId = '{{ tablesId }}' --required
AND schemaBundlesId = '{{ schemaBundlesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
