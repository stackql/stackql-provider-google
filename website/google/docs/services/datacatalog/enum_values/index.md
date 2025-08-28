--- 
title: enum_values
hide_title: false
hide_table_of_contents: false
keywords:
  - enum_values
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

Creates, updates, deletes, gets or lists an <code>enum_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>enum_values</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.enum_values" /></td></tr>
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
    <td><a href="#projects_locations_tag_templates_fields_enum_values_rename"><CopyableCode code="projects_locations_tag_templates_fields_enum_values_rename" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a>, <a href="#parameter-fieldsId"><code>fieldsId</code></a>, <a href="#parameter-enumValuesId"><code>enumValuesId</code></a></td>
    <td></td>
    <td>Renames an enum value in a tag template. Within a single enum field, enum values must be unique.</td>
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
<tr id="parameter-enumValuesId">
    <td><CopyableCode code="enumValuesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_tag_templates_fields_enum_values_rename"
    values={[
        { label: 'projects_locations_tag_templates_fields_enum_values_rename', value: 'projects_locations_tag_templates_fields_enum_values_rename' }
    ]}
>
<TabItem value="projects_locations_tag_templates_fields_enum_values_rename">

Renames an enum value in a tag template. Within a single enum field, enum values must be unique.

```sql
EXEC google.datacatalog.enum_values.projects_locations_tag_templates_fields_enum_values_rename 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tagTemplatesId='{{ tagTemplatesId }}' --required, 
@fieldsId='{{ fieldsId }}' --required, 
@enumValuesId='{{ enumValuesId }}' --required 
@@json=
'{
"newEnumValueDisplayName": "{{ newEnumValueDisplayName }}"
}';
```
</TabItem>
</Tabs>
