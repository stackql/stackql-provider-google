--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - datacatalog
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_groups_entries_tags_list"
    values={[
        { label: 'projects_locations_entry_groups_entries_tags_list', value: 'projects_locations_entry_groups_entries_tags_list' },
        { label: 'projects_locations_entry_groups_tags_list', value: 'projects_locations_entry_groups_tags_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_tags_list">

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
    <td>Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="column" /></td>
    <td><code>string</code></td>
    <td>Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplexTransferStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Denotes the transfer status of the Tag Template.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the tag template this tag uses. Example: `projects/&#123;PROJECT_ID&#125;/locations/&#123;LOCATION&#125;/tagTemplates/&#123;TAG_TEMPLATE_ID&#125;` This field cannot be modified after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="templateDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the tag template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_entry_groups_tags_list">

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
    <td>Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="column" /></td>
    <td><code>string</code></td>
    <td>Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplexTransferStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Denotes the transfer status of the Tag Template.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the tag template this tag uses. Example: `projects/&#123;PROJECT_ID&#125;/locations/&#123;LOCATION&#125;/tagTemplates/&#123;TAG_TEMPLATE_ID&#125;` This field cannot be modified after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="templateDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the tag template.</td>
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
    <td><a href="#projects_locations_entry_groups_entries_tags_list"><CopyableCode code="projects_locations_entry_groups_entries_tags_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists tags assigned to an Entry. The columns in the response are lowercased.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_tags_list"><CopyableCode code="projects_locations_entry_groups_tags_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists tags assigned to an Entry. The columns in the response are lowercased.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_tags_create"><CopyableCode code="projects_locations_entry_groups_entries_tags_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_tags_create"><CopyableCode code="projects_locations_entry_groups_tags_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td></td>
    <td>Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_tags_patch"><CopyableCode code="projects_locations_entry_groups_entries_tags_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a>, <a href="#parameter-tagsId"><code>tagsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing tag.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_tags_patch"><CopyableCode code="projects_locations_entry_groups_tags_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-tagsId"><code>tagsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing tag.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_tags_delete"><CopyableCode code="projects_locations_entry_groups_entries_tags_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a>, <a href="#parameter-tagsId"><code>tagsId</code></a></td>
    <td></td>
    <td>Deletes a tag.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_tags_delete"><CopyableCode code="projects_locations_entry_groups_tags_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-tagsId"><code>tagsId</code></a></td>
    <td></td>
    <td>Deletes a tag.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_tags_reconcile"><CopyableCode code="projects_locations_entry_groups_entries_tags_reconcile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>`ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message. Note: SearchCatalog might return stale search results for up to 24 hours after the `ReconcileTags` operation completes.</td>
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
<tr id="parameter-tagsId">
    <td><CopyableCode code="tagsId" /></td>
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
    defaultValue="projects_locations_entry_groups_entries_tags_list"
    values={[
        { label: 'projects_locations_entry_groups_entries_tags_list', value: 'projects_locations_entry_groups_entries_tags_list' },
        { label: 'projects_locations_entry_groups_tags_list', value: 'projects_locations_entry_groups_tags_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_tags_list">

Lists tags assigned to an Entry. The columns in the response are lowercased.

```sql
SELECT
name,
column,
dataplexTransferStatus,
fields,
template,
templateDisplayName
FROM google.datacatalog.tags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND entriesId = '{{ entriesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_entry_groups_tags_list">

Lists tags assigned to an Entry. The columns in the response are lowercased.

```sql
SELECT
name,
column,
dataplexTransferStatus,
fields,
template,
templateDisplayName
FROM google.datacatalog.tags
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_tags_create"
    values={[
        { label: 'projects_locations_entry_groups_entries_tags_create', value: 'projects_locations_entry_groups_entries_tags_create' },
        { label: 'projects_locations_entry_groups_tags_create', value: 'projects_locations_entry_groups_tags_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_tags_create">

Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

```sql
INSERT INTO google.datacatalog.tags (
data__name,
data__template,
data__column,
data__fields,
projectsId,
locationsId,
entryGroupsId,
entriesId
)
SELECT 
'{{ name }}',
'{{ template }}',
'{{ column }}',
'{{ fields }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupsId }}',
'{{ entriesId }}'
RETURNING
name,
column,
dataplexTransferStatus,
fields,
template,
templateDisplayName
;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_tags_create">

Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

```sql
INSERT INTO google.datacatalog.tags (
data__name,
data__template,
data__column,
data__fields,
projectsId,
locationsId,
entryGroupsId
)
SELECT 
'{{ name }}',
'{{ template }}',
'{{ column }}',
'{{ fields }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupsId }}'
RETURNING
name,
column,
dataplexTransferStatus,
fields,
template,
templateDisplayName
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tags
  props:
    - name: projectsId
      value: string
      description: Required parameter for the tags resource.
    - name: locationsId
      value: string
      description: Required parameter for the tags resource.
    - name: entryGroupsId
      value: string
      description: Required parameter for the tags resource.
    - name: entriesId
      value: string
      description: Required parameter for the tags resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.
        
    - name: template
      value: string
      description: >
        Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation.
        
    - name: column
      value: string
      description: >
        Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.
        
    - name: fields
      value: object
      description: >
        Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_tags_patch"
    values={[
        { label: 'projects_locations_entry_groups_entries_tags_patch', value: 'projects_locations_entry_groups_entries_tags_patch' },
        { label: 'projects_locations_entry_groups_tags_patch', value: 'projects_locations_entry_groups_tags_patch' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_tags_patch">

Updates an existing tag.

```sql
UPDATE google.datacatalog.tags
SET 
data__name = '{{ name }}',
data__template = '{{ template }}',
data__column = '{{ column }}',
data__fields = '{{ fields }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entriesId = '{{ entriesId }}' --required
AND tagsId = '{{ tagsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
column,
dataplexTransferStatus,
fields,
template,
templateDisplayName;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_tags_patch">

Updates an existing tag.

```sql
UPDATE google.datacatalog.tags
SET 
data__name = '{{ name }}',
data__template = '{{ template }}',
data__column = '{{ column }}',
data__fields = '{{ fields }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND tagsId = '{{ tagsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
column,
dataplexTransferStatus,
fields,
template,
templateDisplayName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_tags_delete"
    values={[
        { label: 'projects_locations_entry_groups_entries_tags_delete', value: 'projects_locations_entry_groups_entries_tags_delete' },
        { label: 'projects_locations_entry_groups_tags_delete', value: 'projects_locations_entry_groups_tags_delete' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_tags_delete">

Deletes a tag.

```sql
DELETE FROM google.datacatalog.tags
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entriesId = '{{ entriesId }}' --required
AND tagsId = '{{ tagsId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_tags_delete">

Deletes a tag.

```sql
DELETE FROM google.datacatalog.tags
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND tagsId = '{{ tagsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_entry_groups_entries_tags_reconcile"
    values={[
        { label: 'projects_locations_entry_groups_entries_tags_reconcile', value: 'projects_locations_entry_groups_entries_tags_reconcile' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_tags_reconcile">

`ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message. Note: SearchCatalog might return stale search results for up to 24 hours after the `ReconcileTags` operation completes.

```sql
EXEC google.datacatalog.tags.projects_locations_entry_groups_entries_tags_reconcile 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@entryGroupsId='{{ entryGroupsId }}' --required, 
@entriesId='{{ entriesId }}' --required 
@@json=
'{
"tagTemplate": "{{ tagTemplate }}", 
"forceDeleteMissing": {{ forceDeleteMissing }}, 
"tags": "{{ tags }}"
}';
```
</TabItem>
</Tabs>
