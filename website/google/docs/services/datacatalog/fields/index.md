--- 
title: fields
hide_title: false
hide_table_of_contents: false
keywords:
  - fields
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

Creates, updates, deletes, gets or lists a <code>fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>fields</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.fields" /></td></tr>
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
    <td><a href="#projects_locations_tag_templates_fields_create"><CopyableCode code="projects_locations_tag_templates_fields_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a></td>
    <td><a href="#parameter-tagTemplateFieldId"><code>tagTemplateFieldId</code></a></td>
    <td>Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_tag_templates_fields_patch"><CopyableCode code="projects_locations_tag_templates_fields_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a>, <a href="#parameter-fieldsId"><code>fieldsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a field in a tag template. You can't update the field type with this method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_tag_templates_fields_delete"><CopyableCode code="projects_locations_tag_templates_fields_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a>, <a href="#parameter-fieldsId"><code>fieldsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a field in a tag template and all uses of this field from the tags based on this template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_tag_templates_fields_rename"><CopyableCode code="projects_locations_tag_templates_fields_rename" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a>, <a href="#parameter-fieldsId"><code>fieldsId</code></a></td>
    <td></td>
    <td>Renames a field in a tag template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
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
<tr id="parameter-fieldsId">
    <td><CopyableCode code="fieldsId" /></td>
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
<tr id="parameter-tagTemplatesId">
    <td><CopyableCode code="tagTemplatesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-tagTemplateFieldId">
    <td><CopyableCode code="tagTemplateFieldId" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="projects_locations_tag_templates_fields_create"
    values={[
        { label: 'projects_locations_tag_templates_fields_create', value: 'projects_locations_tag_templates_fields_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_tag_templates_fields_create">

Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
INSERT INTO google.datacatalog.fields (
data__name,
data__displayName,
data__type,
data__isRequired,
data__description,
data__order,
projectsId,
locationsId,
tagTemplatesId,
tagTemplateFieldId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ type }}',
{{ isRequired }},
'{{ description }}',
{{ order }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ tagTemplatesId }}',
'{{ tagTemplateFieldId }}'
RETURNING
name,
description,
displayName,
isRequired,
order,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: fields
  props:
    - name: projectsId
      value: string
      description: Required parameter for the fields resource.
    - name: locationsId
      value: string
      description: Required parameter for the fields resource.
    - name: tagTemplatesId
      value: string
      description: Required parameter for the fields resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the tag template field in URL format. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}` Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 64 characters.
        
    - name: displayName
      value: string
      description: >
        The display name for this field. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.
        
    - name: type
      value: object
      description: >
        Required. The type of value this tag field can contain.
        
    - name: isRequired
      value: boolean
      description: >
        If true, this field is required. Defaults to false.
        
    - name: description
      value: string
      description: >
        The description for this field. Defaults to an empty string.
        
    - name: order
      value: integer
      description: >
        The order of this field with respect to other fields in this tag template. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential.
        
    - name: tagTemplateFieldId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_tag_templates_fields_patch"
    values={[
        { label: 'projects_locations_tag_templates_fields_patch', value: 'projects_locations_tag_templates_fields_patch' }
    ]}
>
<TabItem value="projects_locations_tag_templates_fields_patch">

Updates a field in a tag template. You can't update the field type with this method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
UPDATE google.datacatalog.fields
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__type = '{{ type }}',
data__isRequired = {{ isRequired }},
data__description = '{{ description }}',
data__order = {{ order }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tagTemplatesId = '{{ tagTemplatesId }}' --required
AND fieldsId = '{{ fieldsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
description,
displayName,
isRequired,
order,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_tag_templates_fields_delete"
    values={[
        { label: 'projects_locations_tag_templates_fields_delete', value: 'projects_locations_tag_templates_fields_delete' }
    ]}
>
<TabItem value="projects_locations_tag_templates_fields_delete">

Deletes a field in a tag template and all uses of this field from the tags based on this template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
DELETE FROM google.datacatalog.fields
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tagTemplatesId = '{{ tagTemplatesId }}' --required
AND fieldsId = '{{ fieldsId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_tag_templates_fields_rename"
    values={[
        { label: 'projects_locations_tag_templates_fields_rename', value: 'projects_locations_tag_templates_fields_rename' }
    ]}
>
<TabItem value="projects_locations_tag_templates_fields_rename">

Renames a field in a tag template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
EXEC google.datacatalog.fields.projects_locations_tag_templates_fields_rename 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tagTemplatesId='{{ tagTemplatesId }}' --required, 
@fieldsId='{{ fieldsId }}' --required 
@@json=
'{
"newTagTemplateFieldId": "{{ newTagTemplateFieldId }}"
}';
```
</TabItem>
</Tabs>
