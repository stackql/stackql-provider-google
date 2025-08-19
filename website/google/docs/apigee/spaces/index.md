--- 
title: spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces
  - apigee
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

Creates, updates, deletes, gets or lists a <code>spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>spaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_spaces_get"
    values={[
        { label: 'organizations_spaces_get', value: 'organizations_spaces_get' },
        { label: 'organizations_spaces_list', value: 'organizations_spaces_list' }
    ]}
>
<TabItem value="organizations_spaces_get">

Organization space resource.

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
    <td>Output only. Identifier. Id of the space. This field is used as the resource name, and must follow [AIP-122](https://google.aip.dev/122) guidelines.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last modified timestamp of the space.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_spaces_list">

A response to a ListSpaces request containing the list of organization spaces and a page token for the next page.

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
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>List of Apigee organization spaces.</td>
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
    <td><a href="#organizations_spaces_get"><CopyableCode code="organizations_spaces_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-spacesId"><code>spacesId</code></a></td>
    <td></td>
    <td>Get a space under an Organization.</td>
</tr>
<tr>
    <td><a href="#organizations_spaces_list"><CopyableCode code="organizations_spaces_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists spaces under an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_spaces_create"><CopyableCode code="organizations_spaces_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-spaceId"><code>spaceId</code></a></td>
    <td>Create a space under an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_spaces_patch"><CopyableCode code="organizations_spaces_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-spacesId"><code>spacesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a space.</td>
</tr>
<tr>
    <td><a href="#organizations_spaces_delete"><CopyableCode code="organizations_spaces_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-spacesId"><code>spacesId</code></a></td>
    <td></td>
    <td>Deletes an organization space.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-spacesId">
    <td><CopyableCode code="spacesId" /></td>
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
<tr id="parameter-spaceId">
    <td><CopyableCode code="spaceId" /></td>
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
    defaultValue="organizations_spaces_get"
    values={[
        { label: 'organizations_spaces_get', value: 'organizations_spaces_get' },
        { label: 'organizations_spaces_list', value: 'organizations_spaces_list' }
    ]}
>
<TabItem value="organizations_spaces_get">

Get a space under an Organization.

```sql
SELECT
name,
createTime,
displayName,
updateTime
FROM google.apigee.spaces
WHERE organizationsId = '{{ organizationsId }}' -- required
AND spacesId = '{{ spacesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_spaces_list">

Lists spaces under an organization.

```sql
SELECT
nextPageToken,
spaces
FROM google.apigee.spaces
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_spaces_create"
    values={[
        { label: 'organizations_spaces_create', value: 'organizations_spaces_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_spaces_create">

Create a space under an organization.

```sql
INSERT INTO google.apigee.spaces (
data__displayName,
organizationsId,
spaceId
)
SELECT 
'{{ displayName }}',
'{{ organizationsId }}',
'{{ spaceId }}'
RETURNING
name,
createTime,
displayName,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: spaces
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the spaces resource.
    - name: displayName
      value: string
      description: >
        Optional. Display name of the space.
        
    - name: spaceId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_spaces_patch"
    values={[
        { label: 'organizations_spaces_patch', value: 'organizations_spaces_patch' }
    ]}
>
<TabItem value="organizations_spaces_patch">

Updates a space.

```sql
UPDATE google.apigee.spaces
SET 
data__displayName = '{{ displayName }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND spacesId = '{{ spacesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_spaces_delete"
    values={[
        { label: 'organizations_spaces_delete', value: 'organizations_spaces_delete' }
    ]}
>
<TabItem value="organizations_spaces_delete">

Deletes an organization space.

```sql
DELETE FROM google.apigee.spaces
WHERE organizationsId = '{{ organizationsId }}' --required
AND spacesId = '{{ spacesId }}' --required;
```
</TabItem>
</Tabs>
