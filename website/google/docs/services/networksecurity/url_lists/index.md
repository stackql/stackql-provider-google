--- 
title: url_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - url_lists
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

Creates, updates, deletes, gets or lists a <code>url_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>url_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.url_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_url_lists_get"
    values={[
        { label: 'projects_locations_url_lists_get', value: 'projects_locations_url_lists_get' },
        { label: 'projects_locations_url_lists_list', value: 'projects_locations_url_lists_list' }
    ]}
>
<TabItem value="projects_locations_url_lists_get">

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
    <td>Required. Name of the resource provided by the user. Name is of the form projects/&#123;project&#125;/locations/&#123;location&#125;/urlLists/&#123;url_list&#125; url_list should match the pattern:(^&#91;a-z&#93;([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the security policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the security policy was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>Required. FQDNs and URLs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_url_lists_list">

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
    <td>Required. Name of the resource provided by the user. Name is of the form projects/&#123;project&#125;/locations/&#123;location&#125;/urlLists/&#123;url_list&#125; url_list should match the pattern:(^&#91;a-z&#93;([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the security policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free-text description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the security policy was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>Required. FQDNs and URLs.</td>
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
    <td><a href="#projects_locations_url_lists_get"><CopyableCode code="projects_locations_url_lists_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-urlListsId"><code>urlListsId</code></a></td>
    <td></td>
    <td>Gets details of a single UrlList.</td>
</tr>
<tr>
    <td><a href="#projects_locations_url_lists_list"><CopyableCode code="projects_locations_url_lists_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists UrlLists in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_url_lists_create"><CopyableCode code="projects_locations_url_lists_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-urlListId"><code>urlListId</code></a></td>
    <td>Creates a new UrlList in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_url_lists_patch"><CopyableCode code="projects_locations_url_lists_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-urlListsId"><code>urlListsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single UrlList.</td>
</tr>
<tr>
    <td><a href="#projects_locations_url_lists_delete"><CopyableCode code="projects_locations_url_lists_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-urlListsId"><code>urlListsId</code></a></td>
    <td></td>
    <td>Deletes a single UrlList.</td>
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
<tr id="parameter-urlListsId">
    <td><CopyableCode code="urlListsId" /></td>
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
<tr id="parameter-urlListId">
    <td><CopyableCode code="urlListId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_url_lists_get"
    values={[
        { label: 'projects_locations_url_lists_get', value: 'projects_locations_url_lists_get' },
        { label: 'projects_locations_url_lists_list', value: 'projects_locations_url_lists_list' }
    ]}
>
<TabItem value="projects_locations_url_lists_get">

Gets details of a single UrlList.

```sql
SELECT
name,
createTime,
description,
updateTime,
values
FROM google.networksecurity.url_lists
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND urlListsId = '{{ urlListsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_url_lists_list">

Lists UrlLists in a given project and location.

```sql
SELECT
name,
createTime,
description,
updateTime,
values
FROM google.networksecurity.url_lists
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_url_lists_create"
    values={[
        { label: 'projects_locations_url_lists_create', value: 'projects_locations_url_lists_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_url_lists_create">

Creates a new UrlList in a given project and location.

```sql
INSERT INTO google.networksecurity.url_lists (
data__name,
data__description,
data__values,
projectsId,
locationsId,
urlListId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ values }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ urlListId }}'
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
- name: url_lists
  props:
    - name: projectsId
      value: string
      description: Required parameter for the url_lists resource.
    - name: locationsId
      value: string
      description: Required parameter for the url_lists resource.
    - name: name
      value: string
      description: >
        Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^&#91;a-z&#93;([a-z0-9-]{0,61}[a-z0-9])?$).
        
    - name: description
      value: string
      description: >
        Optional. Free-text description of the resource.
        
    - name: values
      value: array
      description: >
        Required. FQDNs and URLs.
        
    - name: urlListId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_url_lists_patch"
    values={[
        { label: 'projects_locations_url_lists_patch', value: 'projects_locations_url_lists_patch' }
    ]}
>
<TabItem value="projects_locations_url_lists_patch">

Updates the parameters of a single UrlList.

```sql
UPDATE google.networksecurity.url_lists
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__values = '{{ values }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND urlListsId = '{{ urlListsId }}' --required
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
    defaultValue="projects_locations_url_lists_delete"
    values={[
        { label: 'projects_locations_url_lists_delete', value: 'projects_locations_url_lists_delete' }
    ]}
>
<TabItem value="projects_locations_url_lists_delete">

Deletes a single UrlList.

```sql
DELETE FROM google.networksecurity.url_lists
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND urlListsId = '{{ urlListsId }}' --required;
```
</TabItem>
</Tabs>
