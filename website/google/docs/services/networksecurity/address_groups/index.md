--- 
title: address_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - address_groups
  - networksecurity
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

Creates, updates, deletes, gets or lists an <code>address_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>address_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.address_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_address_groups_get"
    values={[
        { label: 'projects_locations_address_groups_get', value: 'projects_locations_address_groups_get' },
        { label: 'organizations_locations_address_groups_get', value: 'organizations_locations_address_groups_get' },
        { label: 'projects_locations_address_groups_list', value: 'projects_locations_address_groups_list' },
        { label: 'organizations_locations_address_groups_list', value: 'organizations_locations_address_groups_list' }
    ]}
>
<TabItem value="projects_locations_address_groups_get">

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
    <td>Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/&#123;location&#125;/addressGroups/`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Capacity of the Address Group</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Optional. List of items.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AddressGroup resource.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>array</code></td>
    <td>Optional. List of supported purposes of the Address Group.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_address_groups_get">

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
    <td>Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/&#123;location&#125;/addressGroups/`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Capacity of the Address Group</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Optional. List of items.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AddressGroup resource.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>array</code></td>
    <td>Optional. List of supported purposes of the Address Group.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_address_groups_list">

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
    <td>Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/&#123;location&#125;/addressGroups/`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Capacity of the Address Group</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Optional. List of items.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AddressGroup resource.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>array</code></td>
    <td>Optional. List of supported purposes of the Address Group.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_address_groups_list">

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
    <td>Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/&#123;location&#125;/addressGroups/`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Capacity of the Address Group</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Optional. List of items.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AddressGroup resource.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>array</code></td>
    <td>Optional. List of supported purposes of the Address Group.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td><a href="#projects_locations_address_groups_get"><CopyableCode code="projects_locations_address_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Gets details of a single address group.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_get"><CopyableCode code="organizations_locations_address_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Gets details of a single address group.</td>
</tr>
<tr>
    <td><a href="#projects_locations_address_groups_list"><CopyableCode code="projects_locations_address_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists address groups in a given project and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_list"><CopyableCode code="organizations_locations_address_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists address groups in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_address_groups_create"><CopyableCode code="projects_locations_address_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-addressGroupId"><code>addressGroupId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new address group in a given project and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_create"><CopyableCode code="organizations_locations_address_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-addressGroupId"><code>addressGroupId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new address group in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_address_groups_patch"><CopyableCode code="projects_locations_address_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single address group.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_patch"><CopyableCode code="organizations_locations_address_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates parameters of an address group.</td>
</tr>
<tr>
    <td><a href="#projects_locations_address_groups_delete"><CopyableCode code="projects_locations_address_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single address group.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_delete"><CopyableCode code="organizations_locations_address_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes an address group.</td>
</tr>
<tr>
    <td><a href="#projects_locations_address_groups_clone_items"><CopyableCode code="projects_locations_address_groups_clone_items" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Clones items from one address group to another.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_address_groups_clone_items"><CopyableCode code="organizations_locations_address_groups_clone_items" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addressGroupsId"><code>addressGroupsId</code></a></td>
    <td></td>
    <td>Clones items from one address group to another.</td>
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
<tr id="parameter-addressGroupsId">
    <td><CopyableCode code="addressGroupsId" /></td>
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
<tr id="parameter-addressGroupId">
    <td><CopyableCode code="addressGroupId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_address_groups_get"
    values={[
        { label: 'projects_locations_address_groups_get', value: 'projects_locations_address_groups_get' },
        { label: 'organizations_locations_address_groups_get', value: 'organizations_locations_address_groups_get' },
        { label: 'projects_locations_address_groups_list', value: 'projects_locations_address_groups_list' },
        { label: 'organizations_locations_address_groups_list', value: 'organizations_locations_address_groups_list' }
    ]}
>
<TabItem value="projects_locations_address_groups_get">

Gets details of a single address group.

```sql
SELECT
name,
capacity,
createTime,
description,
items,
labels,
purpose,
selfLink,
type,
updateTime
FROM google.networksecurity.address_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND addressGroupsId = '{{ addressGroupsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_address_groups_get">

Gets details of a single address group.

```sql
SELECT
name,
capacity,
createTime,
description,
items,
labels,
purpose,
selfLink,
type,
updateTime
FROM google.networksecurity.address_groups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND addressGroupsId = '{{ addressGroupsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_address_groups_list">

Lists address groups in a given project and location.

```sql
SELECT
name,
capacity,
createTime,
description,
items,
labels,
purpose,
selfLink,
type,
updateTime
FROM google.networksecurity.address_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="organizations_locations_address_groups_list">

Lists address groups in a given project and location.

```sql
SELECT
name,
capacity,
createTime,
description,
items,
labels,
purpose,
selfLink,
type,
updateTime
FROM google.networksecurity.address_groups
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_address_groups_create"
    values={[
        { label: 'projects_locations_address_groups_create', value: 'projects_locations_address_groups_create' },
        { label: 'organizations_locations_address_groups_create', value: 'organizations_locations_address_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_address_groups_create">

Creates a new address group in a given project and location.

```sql
INSERT INTO google.networksecurity.address_groups (
data__name,
data__description,
data__labels,
data__type,
data__items,
data__capacity,
data__purpose,
projectsId,
locationsId,
addressGroupId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ type }}',
'{{ items }}',
{{ capacity }},
'{{ purpose }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ addressGroupId }}',
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
<TabItem value="organizations_locations_address_groups_create">

Creates a new address group in a given project and location.

```sql
INSERT INTO google.networksecurity.address_groups (
data__name,
data__description,
data__labels,
data__type,
data__items,
data__capacity,
data__purpose,
organizationsId,
locationsId,
addressGroupId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ type }}',
'{{ items }}',
{{ capacity }},
'{{ purpose }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ addressGroupId }}',
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
- name: address_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the address_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the address_groups resource.
    - name: organizationsId
      value: string
      description: Required parameter for the address_groups resource.
    - name: name
      value: string
      description: >
        Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/{location}/addressGroups/`.
        
    - name: description
      value: string
      description: >
        Optional. Free-text description of the resource.
        
    - name: labels
      value: object
      description: >
        Optional. Set of label tags associated with the AddressGroup resource.
        
    - name: type
      value: string
      description: >
        Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".
        
      valid_values: ['TYPE_UNSPECIFIED', 'IPV4', 'IPV6']
    - name: items
      value: array
      description: >
        Optional. List of items.
        
    - name: capacity
      value: integer
      description: >
        Required. Capacity of the Address Group
        
    - name: purpose
      value: array
      description: >
        Optional. List of supported purposes of the Address Group.
        
    - name: addressGroupId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_address_groups_patch"
    values={[
        { label: 'projects_locations_address_groups_patch', value: 'projects_locations_address_groups_patch' },
        { label: 'organizations_locations_address_groups_patch', value: 'organizations_locations_address_groups_patch' }
    ]}
>
<TabItem value="projects_locations_address_groups_patch">

Updates the parameters of a single address group.

```sql
UPDATE google.networksecurity.address_groups
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__type = '{{ type }}',
data__items = '{{ items }}',
data__capacity = {{ capacity }},
data__purpose = '{{ purpose }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND addressGroupsId = '{{ addressGroupsId }}' --required
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
<TabItem value="organizations_locations_address_groups_patch">

Updates parameters of an address group.

```sql
UPDATE google.networksecurity.address_groups
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__type = '{{ type }}',
data__items = '{{ items }}',
data__capacity = {{ capacity }},
data__purpose = '{{ purpose }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND addressGroupsId = '{{ addressGroupsId }}' --required
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
    defaultValue="projects_locations_address_groups_delete"
    values={[
        { label: 'projects_locations_address_groups_delete', value: 'projects_locations_address_groups_delete' },
        { label: 'organizations_locations_address_groups_delete', value: 'organizations_locations_address_groups_delete' }
    ]}
>
<TabItem value="projects_locations_address_groups_delete">

Deletes a single address group.

```sql
DELETE FROM google.networksecurity.address_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND addressGroupsId = '{{ addressGroupsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
<TabItem value="organizations_locations_address_groups_delete">

Deletes an address group.

```sql
DELETE FROM google.networksecurity.address_groups
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND addressGroupsId = '{{ addressGroupsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_address_groups_clone_items"
    values={[
        { label: 'projects_locations_address_groups_clone_items', value: 'projects_locations_address_groups_clone_items' },
        { label: 'organizations_locations_address_groups_clone_items', value: 'organizations_locations_address_groups_clone_items' }
    ]}
>
<TabItem value="projects_locations_address_groups_clone_items">

Clones items from one address group to another.

```sql
EXEC google.networksecurity.address_groups.projects_locations_address_groups_clone_items 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@addressGroupsId='{{ addressGroupsId }}' --required 
@@json=
'{
"sourceAddressGroup": "{{ sourceAddressGroup }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="organizations_locations_address_groups_clone_items">

Clones items from one address group to another.

```sql
EXEC google.networksecurity.address_groups.organizations_locations_address_groups_clone_items 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@addressGroupsId='{{ addressGroupsId }}' --required 
@@json=
'{
"sourceAddressGroup": "{{ sourceAddressGroup }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
