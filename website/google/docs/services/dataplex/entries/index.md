--- 
title: entries
hide_title: false
hide_table_of_contents: false
keywords:
  - entries
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

Creates, updates, deletes, gets or lists an <code>entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_groups_entries_get"
    values={[
        { label: 'projects_locations_entry_groups_entries_get', value: 'projects_locations_entry_groups_entries_get' },
        { label: 'projects_locations_entry_groups_entries_list', value: 'projects_locations_entry_groups_entries_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_get">

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
    <td>Identifier. The relative resource name of the entry, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;/entries/&#123;entry_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="aspects" /></td>
    <td><code>object</code></td>
    <td>Optional. The aspects that are attached to the entry. Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following: If the aspect is attached directly to the entry: &#123;project_id_or_number&#125;.&#123;location_id&#125;.&#123;aspect_type_id&#125; If the aspect is attached to an entry's path: &#123;project_id_or_number&#125;.&#123;location_id&#125;.&#123;aspect_type_id&#125;@&#123;path&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the entry was created in Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="entrySource" /></td>
    <td><code>object</code></td>
    <td>Optional. Information related to the source system of the data resource that is represented by the entry. (id: GoogleCloudDataplexV1EntrySource)</td>
</tr>
<tr>
    <td><CopyableCode code="entryType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The relative resource name of the entry type that was used to create this entry, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryTypes/&#123;entry_type_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="fullyQualifiedName" /></td>
    <td><code>string</code></td>
    <td>Optional. A name for the entry that can be referenced by an external system. For more information, see Fully qualified names (https://cloud.google.com/data-catalog/docs/fully-qualified-names). The maximum size of the field is 4000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="parentEntry" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of the parent entry, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;/entries/&#123;entry_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the entry was last updated in Dataplex Universal Catalog.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_list">

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
    <td>Identifier. The relative resource name of the entry, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;/entries/&#123;entry_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="aspects" /></td>
    <td><code>object</code></td>
    <td>Optional. The aspects that are attached to the entry. Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following: If the aspect is attached directly to the entry: &#123;project_id_or_number&#125;.&#123;location_id&#125;.&#123;aspect_type_id&#125; If the aspect is attached to an entry's path: &#123;project_id_or_number&#125;.&#123;location_id&#125;.&#123;aspect_type_id&#125;@&#123;path&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the entry was created in Dataplex Universal Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="entrySource" /></td>
    <td><code>object</code></td>
    <td>Optional. Information related to the source system of the data resource that is represented by the entry. (id: GoogleCloudDataplexV1EntrySource)</td>
</tr>
<tr>
    <td><CopyableCode code="entryType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The relative resource name of the entry type that was used to create this entry, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryTypes/&#123;entry_type_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="fullyQualifiedName" /></td>
    <td><code>string</code></td>
    <td>Optional. A name for the entry that can be referenced by an external system. For more information, see Fully qualified names (https://cloud.google.com/data-catalog/docs/fully-qualified-names). The maximum size of the field is 4000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="parentEntry" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of the parent entry, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;/entries/&#123;entry_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the entry was last updated in Dataplex Universal Catalog.</td>
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
    <td><a href="#projects_locations_entry_groups_entries_get"><CopyableCode code="projects_locations_entry_groups_entries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-aspectTypes"><code>aspectTypes</code></a>, <a href="#parameter-paths"><code>paths</code></a></td>
    <td>Gets an Entry.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_list"><CopyableCode code="projects_locations_entry_groups_entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Entries within an EntryGroup.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_create"><CopyableCode code="projects_locations_entry_groups_entries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-entryId"><code>entryId</code></a></td>
    <td>Creates an Entry.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_patch"><CopyableCode code="projects_locations_entry_groups_entries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-deleteMissingAspects"><code>deleteMissingAspects</code></a>, <a href="#parameter-aspectKeys"><code>aspectKeys</code></a></td>
    <td>Updates an Entry.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_delete"><CopyableCode code="projects_locations_entry_groups_entries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Deletes an Entry.</td>
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
<tr id="parameter-entriesId">
    <td><CopyableCode code="entriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-aspectKeys">
    <td><CopyableCode code="aspectKeys" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-aspectTypes">
    <td><CopyableCode code="aspectTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deleteMissingAspects">
    <td><CopyableCode code="deleteMissingAspects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-entryId">
    <td><CopyableCode code="entryId" /></td>
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
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
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
    defaultValue="projects_locations_entry_groups_entries_get"
    values={[
        { label: 'projects_locations_entry_groups_entries_get', value: 'projects_locations_entry_groups_entries_get' },
        { label: 'projects_locations_entry_groups_entries_list', value: 'projects_locations_entry_groups_entries_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_get">

Gets an Entry.

```sql
SELECT
name,
aspects,
createTime,
entrySource,
entryType,
fullyQualifiedName,
parentEntry,
updateTime
FROM google.dataplex.entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND entriesId = '{{ entriesId }}' -- required
AND view = '{{ view }}'
AND aspectTypes = '{{ aspectTypes }}'
AND paths = '{{ paths }}';
```
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_list">

Lists Entries within an EntryGroup.

```sql
SELECT
name,
aspects,
createTime,
entrySource,
entryType,
fullyQualifiedName,
parentEntry,
updateTime
FROM google.dataplex.entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_create"
    values={[
        { label: 'projects_locations_entry_groups_entries_create', value: 'projects_locations_entry_groups_entries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_create">

Creates an Entry.

```sql
INSERT INTO google.dataplex.entries (
data__name,
data__entryType,
data__aspects,
data__parentEntry,
data__fullyQualifiedName,
data__entrySource,
projectsId,
locationsId,
entryGroupsId,
entryId
)
SELECT 
'{{ name }}',
'{{ entryType }}',
'{{ aspects }}',
'{{ parentEntry }}',
'{{ fullyQualifiedName }}',
'{{ entrySource }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupsId }}',
'{{ entryId }}'
RETURNING
name,
aspects,
createTime,
entrySource,
entryType,
fullyQualifiedName,
parentEntry,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: entries
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entries resource.
    - name: locationsId
      value: string
      description: Required parameter for the entries resource.
    - name: entryGroupsId
      value: string
      description: Required parameter for the entries resource.
    - name: name
      value: string
      description: >
        Identifier. The relative resource name of the entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.
        
    - name: entryType
      value: string
      description: >
        Required. Immutable. The relative resource name of the entry type that was used to create this entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryTypes/{entry_type_id}.
        
    - name: aspects
      value: object
      description: >
        Optional. The aspects that are attached to the entry. Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following: If the aspect is attached directly to the entry: {project_id_or_number}.{location_id}.{aspect_type_id} If the aspect is attached to an entry's path: {project_id_or_number}.{location_id}.{aspect_type_id}@{path}
        
    - name: parentEntry
      value: string
      description: >
        Optional. Immutable. The resource name of the parent entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.
        
    - name: fullyQualifiedName
      value: string
      description: >
        Optional. A name for the entry that can be referenced by an external system. For more information, see Fully qualified names (https://cloud.google.com/data-catalog/docs/fully-qualified-names). The maximum size of the field is 4000 characters.
        
    - name: entrySource
      value: object
      description: >
        Optional. Information related to the source system of the data resource that is represented by the entry.
        
    - name: entryId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_patch"
    values={[
        { label: 'projects_locations_entry_groups_entries_patch', value: 'projects_locations_entry_groups_entries_patch' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_patch">

Updates an Entry.

```sql
UPDATE google.dataplex.entries
SET 
data__name = '{{ name }}',
data__entryType = '{{ entryType }}',
data__aspects = '{{ aspects }}',
data__parentEntry = '{{ parentEntry }}',
data__fullyQualifiedName = '{{ fullyQualifiedName }}',
data__entrySource = '{{ entrySource }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entriesId = '{{ entriesId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
AND deleteMissingAspects = {{ deleteMissingAspects}}
AND aspectKeys = '{{ aspectKeys}}'
RETURNING
name,
aspects,
createTime,
entrySource,
entryType,
fullyQualifiedName,
parentEntry,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_delete"
    values={[
        { label: 'projects_locations_entry_groups_entries_delete', value: 'projects_locations_entry_groups_entries_delete' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_delete">

Deletes an Entry.

```sql
DELETE FROM google.dataplex.entries
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entriesId = '{{ entriesId }}' --required;
```
</TabItem>
</Tabs>
