--- 
title: groups_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - groups_assets
  - migrationcenter
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

Creates, updates, deletes, gets or lists a <code>groups_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groups_assets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.migrationcenter.groups_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_assets"><CopyableCode code="add_assets" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Adds assets to a group.</td>
</tr>
<tr>
    <td><a href="#remove_assets"><CopyableCode code="remove_assets" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Removes assets from a group.</td>
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
<tr id="parameter-groupsId">
    <td><CopyableCode code="groupsId" /></td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_assets"
    values={[
        { label: 'add_assets', value: 'add_assets' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_assets">

Adds assets to a group.

```sql
INSERT INTO google.migrationcenter.groups_assets (
data__requestId,
data__assets,
data__allowExisting,
projectsId,
locationsId,
groupsId
)
SELECT 
'{{ requestId }}',
'{{ assets }}',
{{ allowExisting }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ groupsId }}'
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
- name: groups_assets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the groups_assets resource.
    - name: locationsId
      value: string
      description: Required parameter for the groups_assets resource.
    - name: groupsId
      value: string
      description: Required parameter for the groups_assets resource.
    - name: requestId
      value: string
      description: >
        Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
        
    - name: assets
      value: object
      description: >
        Required. List of assets to be added. The maximum number of assets that can be added in a single request is 1000.
        
    - name: allowExisting
      value: boolean
      description: >
        Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_assets"
    values={[
        { label: 'remove_assets', value: 'remove_assets' }
    ]}
>
<TabItem value="remove_assets">

Removes assets from a group.

```sql
DELETE FROM google.migrationcenter.groups_assets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND groupsId = '{{ groupsId }}' --required;
```
</TabItem>
</Tabs>
