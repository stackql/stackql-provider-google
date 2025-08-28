--- 
title: categories
hide_title: false
hide_table_of_contents: false
keywords:
  - categories
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

Creates, updates, deletes, gets or lists a <code>categories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>categories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.categories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_glossaries_categories_get"
    values={[
        { label: 'projects_locations_glossaries_categories_get', value: 'projects_locations_glossaries_categories_get' },
        { label: 'projects_locations_glossaries_categories_list', value: 'projects_locations_glossaries_categories_list' }
    ]}
>
<TabItem value="projects_locations_glossaries_categories_get">

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
    <td>Output only. Identifier. The resource name of the GlossaryCategory. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125;/categories/&#123;category_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the GlossaryCategory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-mutable description of the GlossaryCategory.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name of the GlossaryCategory. This is user-mutable. This will be same as the GlossaryCategoryId, if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the GlossaryCategory.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td>Required. The immediate parent of the GlossaryCategory in the resource-hierarchy. It can either be a Glossary or a GlossaryCategory. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125; OR projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125;/categories/&#123;category_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated unique id for the GlossaryCategory. This ID will be different if the GlossaryCategory is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the GlossaryCategory was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_glossaries_categories_list">

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
    <td>Output only. Identifier. The resource name of the GlossaryCategory. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125;/categories/&#123;category_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the GlossaryCategory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-mutable description of the GlossaryCategory.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name of the GlossaryCategory. This is user-mutable. This will be same as the GlossaryCategoryId, if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the GlossaryCategory.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td>Required. The immediate parent of the GlossaryCategory in the resource-hierarchy. It can either be a Glossary or a GlossaryCategory. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125; OR projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125;/categories/&#123;category_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated unique id for the GlossaryCategory. This ID will be different if the GlossaryCategory is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the GlossaryCategory was last updated.</td>
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
    <td><a href="#projects_locations_glossaries_categories_get"><CopyableCode code="projects_locations_glossaries_categories_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a>, <a href="#parameter-categoriesId"><code>categoriesId</code></a></td>
    <td></td>
    <td>Gets a GlossaryCategory resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_categories_list"><CopyableCode code="projects_locations_glossaries_categories_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists GlossaryCategory resources in a Glossary.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_categories_create"><CopyableCode code="projects_locations_glossaries_categories_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td><a href="#parameter-categoryId"><code>categoryId</code></a></td>
    <td>Creates a new GlossaryCategory resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_categories_patch"><CopyableCode code="projects_locations_glossaries_categories_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a>, <a href="#parameter-categoriesId"><code>categoriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a GlossaryCategory resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_categories_delete"><CopyableCode code="projects_locations_glossaries_categories_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a>, <a href="#parameter-categoriesId"><code>categoriesId</code></a></td>
    <td></td>
    <td>Deletes a GlossaryCategory resource. All the GlossaryCategories and GlossaryTerms nested directly under the specified GlossaryCategory will be moved one level up to the parent in the hierarchy.</td>
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
<tr id="parameter-categoriesId">
    <td><CopyableCode code="categoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-glossariesId">
    <td><CopyableCode code="glossariesId" /></td>
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
<tr id="parameter-categoryId">
    <td><CopyableCode code="categoryId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_glossaries_categories_get"
    values={[
        { label: 'projects_locations_glossaries_categories_get', value: 'projects_locations_glossaries_categories_get' },
        { label: 'projects_locations_glossaries_categories_list', value: 'projects_locations_glossaries_categories_list' }
    ]}
>
<TabItem value="projects_locations_glossaries_categories_get">

Gets a GlossaryCategory resource.

```sql
SELECT
name,
createTime,
description,
displayName,
labels,
parent,
uid,
updateTime
FROM google.dataplex.categories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND glossariesId = '{{ glossariesId }}' -- required
AND categoriesId = '{{ categoriesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_glossaries_categories_list">

Lists GlossaryCategory resources in a Glossary.

```sql
SELECT
name,
createTime,
description,
displayName,
labels,
parent,
uid,
updateTime
FROM google.dataplex.categories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND glossariesId = '{{ glossariesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_glossaries_categories_create"
    values={[
        { label: 'projects_locations_glossaries_categories_create', value: 'projects_locations_glossaries_categories_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_glossaries_categories_create">

Creates a new GlossaryCategory resource.

```sql
INSERT INTO google.dataplex.categories (
data__displayName,
data__description,
data__labels,
data__parent,
projectsId,
locationsId,
glossariesId,
categoryId
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ labels }}',
'{{ parent }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ glossariesId }}',
'{{ categoryId }}'
RETURNING
name,
createTime,
description,
displayName,
labels,
parent,
uid,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: categories
  props:
    - name: projectsId
      value: string
      description: Required parameter for the categories resource.
    - name: locationsId
      value: string
      description: Required parameter for the categories resource.
    - name: glossariesId
      value: string
      description: Required parameter for the categories resource.
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name of the GlossaryCategory. This is user-mutable. This will be same as the GlossaryCategoryId, if not specified.
        
    - name: description
      value: string
      description: >
        Optional. The user-mutable description of the GlossaryCategory.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the GlossaryCategory.
        
    - name: parent
      value: string
      description: >
        Required. The immediate parent of the GlossaryCategory in the resource-hierarchy. It can either be a Glossary or a GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} OR projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}
        
    - name: categoryId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_glossaries_categories_patch"
    values={[
        { label: 'projects_locations_glossaries_categories_patch', value: 'projects_locations_glossaries_categories_patch' }
    ]}
>
<TabItem value="projects_locations_glossaries_categories_patch">

Updates a GlossaryCategory resource.

```sql
UPDATE google.dataplex.categories
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__parent = '{{ parent }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
AND categoriesId = '{{ categoriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
labels,
parent,
uid,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_glossaries_categories_delete"
    values={[
        { label: 'projects_locations_glossaries_categories_delete', value: 'projects_locations_glossaries_categories_delete' }
    ]}
>
<TabItem value="projects_locations_glossaries_categories_delete">

Deletes a GlossaryCategory resource. All the GlossaryCategories and GlossaryTerms nested directly under the specified GlossaryCategory will be moved one level up to the parent in the hierarchy.

```sql
DELETE FROM google.dataplex.categories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
AND categoriesId = '{{ categoriesId }}' --required;
```
</TabItem>
</Tabs>
