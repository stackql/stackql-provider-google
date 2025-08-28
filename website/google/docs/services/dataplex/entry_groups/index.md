--- 
title: entry_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - entry_groups
  - dataplex
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

Creates, updates, deletes, gets or lists an <code>entry_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entry_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.entry_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_groups_get"
    values={[
        { label: 'projects_locations_entry_groups_get', value: 'projects_locations_entry_groups_get' },
        { label: 'projects_locations_entry_groups_list', value: 'projects_locations_entry_groups_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_get">

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
    <td>Output only. The relative resource name of the EntryGroup, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EntryGroup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the EntryGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the EntryGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="transferStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Denotes the transfer status of the Entry Group. It is unspecified for Entry Group created from Dataplex API.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the EntryGroup. If you delete and recreate the EntryGroup with the same name, this ID will be different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EntryGroup was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_entry_groups_list">

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
    <td>Output only. The relative resource name of the EntryGroup, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EntryGroup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the EntryGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the EntryGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="transferStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Denotes the transfer status of the Entry Group. It is unspecified for Entry Group created from Dataplex API.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the EntryGroup. If you delete and recreate the EntryGroup with the same name, this ID will be different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EntryGroup was last updated.</td>
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
    <td><a href="#projects_locations_entry_groups_get"><CopyableCode code="projects_locations_entry_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td></td>
    <td>Gets an EntryGroup.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_list"><CopyableCode code="projects_locations_entry_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists EntryGroup resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_create"><CopyableCode code="projects_locations_entry_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-entryGroupId"><code>entryGroupId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates an EntryGroup.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_patch"><CopyableCode code="projects_locations_entry_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an EntryGroup.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_delete"><CopyableCode code="projects_locations_entry_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an EntryGroup.</td>
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
<tr id="parameter-entryGroupsId">
    <td><CopyableCode code="entryGroupsId" /></td>
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
<tr id="parameter-entryGroupId">
    <td><CopyableCode code="entryGroupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_get"
    values={[
        { label: 'projects_locations_entry_groups_get', value: 'projects_locations_entry_groups_get' },
        { label: 'projects_locations_entry_groups_list', value: 'projects_locations_entry_groups_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_get">

Gets an EntryGroup.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
transferStatus,
uid,
updateTime
FROM google.dataplex.entry_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_list">

Lists EntryGroup resources in a project and location.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
transferStatus,
uid,
updateTime
FROM google.dataplex.entry_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_create"
    values={[
        { label: 'projects_locations_entry_groups_create', value: 'projects_locations_entry_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_groups_create">

Creates an EntryGroup.

```sql
INSERT INTO google.dataplex.entry_groups (
data__description,
data__displayName,
data__labels,
data__etag,
projectsId,
locationsId,
entryGroupId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupId }}',
'{{ validateOnly }}'
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
- name: entry_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entry_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the entry_groups resource.
    - name: description
      value: string
      description: >
        Optional. Description of the EntryGroup.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the EntryGroup.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: entryGroupId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_patch"
    values={[
        { label: 'projects_locations_entry_groups_patch', value: 'projects_locations_entry_groups_patch' }
    ]}
>
<TabItem value="projects_locations_entry_groups_patch">

Updates an EntryGroup.

```sql
UPDATE google.dataplex.entry_groups
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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
    defaultValue="projects_locations_entry_groups_delete"
    values={[
        { label: 'projects_locations_entry_groups_delete', value: 'projects_locations_entry_groups_delete' }
    ]}
>
<TabItem value="projects_locations_entry_groups_delete">

Deletes an EntryGroup.

```sql
DELETE FROM google.dataplex.entry_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
