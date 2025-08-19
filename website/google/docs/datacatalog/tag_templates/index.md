--- 
title: tag_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_templates
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

Creates, updates, deletes, gets or lists a <code>tag_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tag_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.tag_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_tag_templates_get"
    values={[
        { label: 'projects_locations_tag_templates_get', value: 'projects_locations_tag_templates_get' }
    ]}
>
<TabItem value="projects_locations_tag_templates_get">

A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to Google Cloud resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.

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
    <td>Identifier. The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplexTransferStatus" /></td>
    <td><code>string</code></td>
    <td>Optional. Transfer status of the TagTemplate</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name for this template. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. The map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. The IDs have the following limitations: * Can contain uppercase and lowercase letters, numbers (0-9) and underscores (_). * Must be at least 1 character and at most 64 characters long. * Must start with a letter or underscore.</td>
</tr>
<tr>
    <td><CopyableCode code="isPubliclyReadable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether tags created with this template are public. Public tags do not require tag template access to appear in ListTags API response. Additionally, you can search for a public tag by value with a simple search query in addition to using a ``tag:`` predicate.</td>
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
    <td><a href="#projects_locations_tag_templates_get"><CopyableCode code="projects_locations_tag_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a></td>
    <td></td>
    <td>Gets a tag template.</td>
</tr>
<tr>
    <td><a href="#projects_locations_tag_templates_create"><CopyableCode code="projects_locations_tag_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-tagTemplateId"><code>tagTemplateId</code></a></td>
    <td>Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_tag_templates_patch"><CopyableCode code="projects_locations_tag_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a tag template. You can't update template fields with this method. These fields are separate resources with their own create, update, and delete methods. You must enable the Data Catalog API in the project identified by the `tag_template.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_tag_templates_delete"><CopyableCode code="projects_locations_tag_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagTemplatesId"><code>tagTemplatesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a tag template and all tags that use it. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
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
<tr id="parameter-tagTemplateId">
    <td><CopyableCode code="tagTemplateId" /></td>
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
    defaultValue="projects_locations_tag_templates_get"
    values={[
        { label: 'projects_locations_tag_templates_get', value: 'projects_locations_tag_templates_get' }
    ]}
>
<TabItem value="projects_locations_tag_templates_get">

Gets a tag template.

```sql
SELECT
name,
dataplexTransferStatus,
displayName,
fields,
isPubliclyReadable
FROM google.datacatalog.tag_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tagTemplatesId = '{{ tagTemplatesId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_tag_templates_create"
    values={[
        { label: 'projects_locations_tag_templates_create', value: 'projects_locations_tag_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_tag_templates_create">

Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
INSERT INTO google.datacatalog.tag_templates (
data__name,
data__displayName,
data__isPubliclyReadable,
data__fields,
data__dataplexTransferStatus,
projectsId,
locationsId,
tagTemplateId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
{{ isPubliclyReadable }},
'{{ fields }}',
'{{ dataplexTransferStatus }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ tagTemplateId }}'
RETURNING
name,
dataplexTransferStatus,
displayName,
fields,
isPubliclyReadable
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tag_templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the tag_templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the tag_templates resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name.
        
    - name: displayName
      value: string
      description: >
        Display name for this template. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.
        
    - name: isPubliclyReadable
      value: boolean
      description: >
        Indicates whether tags created with this template are public. Public tags do not require tag template access to appear in ListTags API response. Additionally, you can search for a public tag by value with a simple search query in addition to using a ``tag:`` predicate.
        
    - name: fields
      value: object
      description: >
        Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. The map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. The IDs have the following limitations: * Can contain uppercase and lowercase letters, numbers (0-9) and underscores (_). * Must be at least 1 character and at most 64 characters long. * Must start with a letter or underscore.
        
    - name: dataplexTransferStatus
      value: string
      description: >
        Optional. Transfer status of the TagTemplate
        
      valid_values: ['DATAPLEX_TRANSFER_STATUS_UNSPECIFIED', 'MIGRATED', 'TRANSFERRED']
    - name: tagTemplateId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_tag_templates_patch"
    values={[
        { label: 'projects_locations_tag_templates_patch', value: 'projects_locations_tag_templates_patch' }
    ]}
>
<TabItem value="projects_locations_tag_templates_patch">

Updates a tag template. You can't update template fields with this method. These fields are separate resources with their own create, update, and delete methods. You must enable the Data Catalog API in the project identified by the `tag_template.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
UPDATE google.datacatalog.tag_templates
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__isPubliclyReadable = {{ isPubliclyReadable }},
data__fields = '{{ fields }}',
data__dataplexTransferStatus = '{{ dataplexTransferStatus }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tagTemplatesId = '{{ tagTemplatesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
dataplexTransferStatus,
displayName,
fields,
isPubliclyReadable;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_tag_templates_delete"
    values={[
        { label: 'projects_locations_tag_templates_delete', value: 'projects_locations_tag_templates_delete' }
    ]}
>
<TabItem value="projects_locations_tag_templates_delete">

Deletes a tag template and all tags that use it. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
DELETE FROM google.datacatalog.tag_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND tagTemplatesId = '{{ tagTemplatesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>
