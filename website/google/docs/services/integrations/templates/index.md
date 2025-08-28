--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - integrations
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.integrations.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_templates_get"
    values={[
        { label: 'projects_locations_templates_get', value: 'projects_locations_templates_get' },
        { label: 'projects_locations_templates_list', value: 'projects_locations_templates_list' }
    ]}
>
<TabItem value="projects_locations_templates_get">

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
    <td>Identifier. Resource name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Optional. Creator of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Required. Categories associated with the Template. The categories listed below will be utilized for the Template listing.</td>
</tr>
<tr>
    <td><CopyableCode code="components" /></td>
    <td><code>array</code></td>
    <td>Optional. Components being used in the template. This could be used to categorize and filter.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the template. The length should not be more than 255 characters</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the template</td>
</tr>
<tr>
    <td><CopyableCode code="docLink" /></td>
    <td><code>string</code></td>
    <td>Optional. Link to template documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUsedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Time the template was last used.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWith" /></td>
    <td><code>array</code></td>
    <td>Required. Resource names with which the template is shared for example ProjectNumber/Ord id</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Required. Tags which are used to identify templates. These tags could be for business use case, connectors etc.</td>
</tr>
<tr>
    <td><CopyableCode code="templateBundle" /></td>
    <td><code>object</code></td>
    <td>Required. Bundle which is part of the templates. The template entities in the bundle would be converted to an actual entity. (id: GoogleCloudIntegrationsV1alphaTemplateBundle)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated</td>
</tr>
<tr>
    <td><CopyableCode code="usageCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Number of template usages.</td>
</tr>
<tr>
    <td><CopyableCode code="usageInfo" /></td>
    <td><code>string</code></td>
    <td>Optional. Information on how to use the template. This should contain detailed information about usage of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Required. Visibility of the template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_templates_list">

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
    <td>Identifier. Resource name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Optional. Creator of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Required. Categories associated with the Template. The categories listed below will be utilized for the Template listing.</td>
</tr>
<tr>
    <td><CopyableCode code="components" /></td>
    <td><code>array</code></td>
    <td>Optional. Components being used in the template. This could be used to categorize and filter.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the template. The length should not be more than 255 characters</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the template</td>
</tr>
<tr>
    <td><CopyableCode code="docLink" /></td>
    <td><code>string</code></td>
    <td>Optional. Link to template documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUsedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Time the template was last used.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWith" /></td>
    <td><code>array</code></td>
    <td>Required. Resource names with which the template is shared for example ProjectNumber/Ord id</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Required. Tags which are used to identify templates. These tags could be for business use case, connectors etc.</td>
</tr>
<tr>
    <td><CopyableCode code="templateBundle" /></td>
    <td><code>object</code></td>
    <td>Required. Bundle which is part of the templates. The template entities in the bundle would be converted to an actual entity. (id: GoogleCloudIntegrationsV1alphaTemplateBundle)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Auto-generated</td>
</tr>
<tr>
    <td><CopyableCode code="usageCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Number of template usages.</td>
</tr>
<tr>
    <td><CopyableCode code="usageInfo" /></td>
    <td><code>string</code></td>
    <td>Optional. Information on how to use the template. This should contain detailed information about usage of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Required. Visibility of the template.</td>
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
    <td><a href="#projects_locations_templates_get"><CopyableCode code="projects_locations_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td></td>
    <td>Get a template in the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_list"><CopyableCode code="projects_locations_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists all templates matching the filter.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_create"><CopyableCode code="projects_locations_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new template</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_patch"><CopyableCode code="projects_locations_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the template by given id.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_delete"><CopyableCode code="projects_locations_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td></td>
    <td>Deletes a template</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_search"><CopyableCode code="projects_locations_templates_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-enableNaturalLanguageQueryUnderstanding"><code>enableNaturalLanguageQueryUnderstanding</code></a></td>
    <td>Search templates based on user query and filters. This api would query the templates and return a list of templates based on the user filter.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_use"><CopyableCode code="projects_locations_templates_use" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td></td>
    <td>Use the template to create integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_import"><CopyableCode code="projects_locations_templates_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td></td>
    <td>Import the template to an existing integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_share"><CopyableCode code="projects_locations_templates_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td></td>
    <td>Share a template with other clients. Only the template owner can share the templates with other projects. PERMISSION_DENIED would be thrown if the request is not from the owner.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_unshare"><CopyableCode code="projects_locations_templates_unshare" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td></td>
    <td>Unshare a template from given clients. Owner of the template can unshare template with clients. Shared client can only unshare the template from itself. PERMISSION_DENIED would be thrown if request is not from owner or for unsharing itself.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_upload"><CopyableCode code="projects_locations_templates_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Uploads a template. The content can be a previously downloaded template. Performs the same function as CreateTemplate, but accepts input in a string format, which holds the complete representation of the Template content.</td>
</tr>
<tr>
    <td><a href="#projects_locations_templates_download"><CopyableCode code="projects_locations_templates_download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-templatesId"><code>templatesId</code></a></td>
    <td><a href="#parameter-fileFormat"><code>fileFormat</code></a></td>
    <td>Downloads a template. Retrieves the `Template` and returns the response as a string.</td>
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
<tr id="parameter-templatesId">
    <td><CopyableCode code="templatesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enableNaturalLanguageQueryUnderstanding">
    <td><CopyableCode code="enableNaturalLanguageQueryUnderstanding" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-fileFormat">
    <td><CopyableCode code="fileFormat" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_templates_get"
    values={[
        { label: 'projects_locations_templates_get', value: 'projects_locations_templates_get' },
        { label: 'projects_locations_templates_list', value: 'projects_locations_templates_list' }
    ]}
>
<TabItem value="projects_locations_templates_get">

Get a template in the specified project.

```sql
SELECT
name,
author,
categories,
components,
createTime,
description,
displayName,
docLink,
lastUsedTime,
sharedWith,
tags,
templateBundle,
updateTime,
usageCount,
usageInfo,
visibility
FROM google.integrations.templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND templatesId = '{{ templatesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_templates_list">

Lists all templates matching the filter.

```sql
SELECT
name,
author,
categories,
components,
createTime,
description,
displayName,
docLink,
lastUsedTime,
sharedWith,
tags,
templateBundle,
updateTime,
usageCount,
usageInfo,
visibility
FROM google.integrations.templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_templates_create"
    values={[
        { label: 'projects_locations_templates_create', value: 'projects_locations_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_templates_create">

Creates a new template

```sql
INSERT INTO google.integrations.templates (
data__name,
data__displayName,
data__description,
data__usageInfo,
data__docLink,
data__templateBundle,
data__components,
data__tags,
data__categories,
data__author,
data__usageCount,
data__lastUsedTime,
data__visibility,
data__sharedWith,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ usageInfo }}',
'{{ docLink }}',
'{{ templateBundle }}',
'{{ components }}',
'{{ tags }}',
'{{ categories }}',
'{{ author }}',
'{{ usageCount }}',
'{{ lastUsedTime }}',
'{{ visibility }}',
'{{ sharedWith }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
author,
categories,
components,
createTime,
description,
displayName,
docLink,
lastUsedTime,
sharedWith,
tags,
templateBundle,
updateTime,
usageCount,
usageInfo,
visibility
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: templates
  props:
    - name: projectsId
      value: string
      description: Required parameter for the templates resource.
    - name: locationsId
      value: string
      description: Required parameter for the templates resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name of the template.
        
    - name: displayName
      value: string
      description: >
        Required. The name of the template
        
    - name: description
      value: string
      description: >
        Optional. Description of the template. The length should not be more than 255 characters
        
    - name: usageInfo
      value: string
      description: >
        Optional. Information on how to use the template. This should contain detailed information about usage of the template.
        
    - name: docLink
      value: string
      description: >
        Optional. Link to template documentation.
        
    - name: templateBundle
      value: object
      description: >
        Required. Bundle which is part of the templates. The template entities in the bundle would be converted to an actual entity.
        
    - name: components
      value: array
      description: >
        Optional. Components being used in the template. This could be used to categorize and filter.
        
    - name: tags
      value: array
      description: >
        Required. Tags which are used to identify templates. These tags could be for business use case, connectors etc.
        
    - name: categories
      value: array
      description: >
        Required. Categories associated with the Template. The categories listed below will be utilized for the Template listing.
        
    - name: author
      value: string
      description: >
        Optional. Creator of the template.
        
    - name: usageCount
      value: string
      description: >
        Optional. Number of template usages.
        
    - name: lastUsedTime
      value: string
      description: >
        Optional. Time the template was last used.
        
    - name: visibility
      value: string
      description: >
        Required. Visibility of the template.
        
      valid_values: ['VISIBILITY_UNSPECIFIED', 'PRIVATE', 'SHARED', 'PUBLIC']
    - name: sharedWith
      value: array
      description: >
        Required. Resource names with which the template is shared for example ProjectNumber/Ord id
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_templates_patch"
    values={[
        { label: 'projects_locations_templates_patch', value: 'projects_locations_templates_patch' }
    ]}
>
<TabItem value="projects_locations_templates_patch">

Updates the template by given id.

```sql
UPDATE google.integrations.templates
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__usageInfo = '{{ usageInfo }}',
data__docLink = '{{ docLink }}',
data__templateBundle = '{{ templateBundle }}',
data__components = '{{ components }}',
data__tags = '{{ tags }}',
data__categories = '{{ categories }}',
data__author = '{{ author }}',
data__usageCount = '{{ usageCount }}',
data__lastUsedTime = '{{ lastUsedTime }}',
data__visibility = '{{ visibility }}',
data__sharedWith = '{{ sharedWith }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND templatesId = '{{ templatesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
author,
categories,
components,
createTime,
description,
displayName,
docLink,
lastUsedTime,
sharedWith,
tags,
templateBundle,
updateTime,
usageCount,
usageInfo,
visibility;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_templates_delete"
    values={[
        { label: 'projects_locations_templates_delete', value: 'projects_locations_templates_delete' }
    ]}
>
<TabItem value="projects_locations_templates_delete">

Deletes a template

```sql
DELETE FROM google.integrations.templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND templatesId = '{{ templatesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_templates_search"
    values={[
        { label: 'projects_locations_templates_search', value: 'projects_locations_templates_search' },
        { label: 'projects_locations_templates_use', value: 'projects_locations_templates_use' },
        { label: 'projects_locations_templates_import', value: 'projects_locations_templates_import' },
        { label: 'projects_locations_templates_share', value: 'projects_locations_templates_share' },
        { label: 'projects_locations_templates_unshare', value: 'projects_locations_templates_unshare' },
        { label: 'projects_locations_templates_upload', value: 'projects_locations_templates_upload' },
        { label: 'projects_locations_templates_download', value: 'projects_locations_templates_download' }
    ]}
>
<TabItem value="projects_locations_templates_search">

Search templates based on user query and filters. This api would query the templates and return a list of templates based on the user filter.

```sql
EXEC google.integrations.templates.projects_locations_templates_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@filter='{{ filter }}', 
@orderBy='{{ orderBy }}', 
@readMask='{{ readMask }}', 
@query='{{ query }}', 
@enableNaturalLanguageQueryUnderstanding={{ enableNaturalLanguageQueryUnderstanding }};
```
</TabItem>
<TabItem value="projects_locations_templates_use">

Use the template to create integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.

```sql
EXEC google.integrations.templates.projects_locations_templates_use 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@templatesId='{{ templatesId }}' --required 
@@json=
'{
"integrationDetails": "{{ integrationDetails }}", 
"subIntegrations": "{{ subIntegrations }}", 
"integrationRegion": "{{ integrationRegion }}"
}';
```
</TabItem>
<TabItem value="projects_locations_templates_import">

Import the template to an existing integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.

```sql
EXEC google.integrations.templates.projects_locations_templates_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@templatesId='{{ templatesId }}' --required 
@@json=
'{
"integration": "{{ integration }}", 
"subIntegrations": "{{ subIntegrations }}"
}';
```
</TabItem>
<TabItem value="projects_locations_templates_share">

Share a template with other clients. Only the template owner can share the templates with other projects. PERMISSION_DENIED would be thrown if the request is not from the owner.

```sql
EXEC google.integrations.templates.projects_locations_templates_share 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@templatesId='{{ templatesId }}' --required 
@@json=
'{
"resourceNames": "{{ resourceNames }}"
}';
```
</TabItem>
<TabItem value="projects_locations_templates_unshare">

Unshare a template from given clients. Owner of the template can unshare template with clients. Shared client can only unshare the template from itself. PERMISSION_DENIED would be thrown if request is not from owner or for unsharing itself.

```sql
EXEC google.integrations.templates.projects_locations_templates_unshare 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@templatesId='{{ templatesId }}' --required 
@@json=
'{
"resourceNames": "{{ resourceNames }}"
}';
```
</TabItem>
<TabItem value="projects_locations_templates_upload">

Uploads a template. The content can be a previously downloaded template. Performs the same function as CreateTemplate, but accepts input in a string format, which holds the complete representation of the Template content.

```sql
EXEC google.integrations.templates.projects_locations_templates_upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"content": "{{ content }}", 
"fileFormat": "{{ fileFormat }}"
}';
```
</TabItem>
<TabItem value="projects_locations_templates_download">

Downloads a template. Retrieves the `Template` and returns the response as a string.

```sql
EXEC google.integrations.templates.projects_locations_templates_download 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@templatesId='{{ templatesId }}' --required, 
@fileFormat='{{ fileFormat }}';
```
</TabItem>
</Tabs>
