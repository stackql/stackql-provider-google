--- 
title: glossaries
hide_title: false
hide_table_of_contents: false
keywords:
  - glossaries
  - translate
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

Creates, updates, deletes, gets or lists a <code>glossaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>glossaries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.glossaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_glossaries_get"
    values={[
        { label: 'projects_locations_glossaries_get', value: 'projects_locations_glossaries_get' },
        { label: 'projects_locations_glossaries_list', value: 'projects_locations_glossaries_list' }
    ]}
>
<TabItem value="projects_locations_glossaries_get">

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
    <td>Required. The resource name of the glossary. Glossary names have the form `projects/&#123;project-number-or-id&#125;/locations/&#123;location-id&#125;/glossaries/&#123;glossary-id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the glossary creation was finished.</td>
</tr>
<tr>
    <td><CopyableCode code="entryCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of entries defined in the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="inputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints. (id: GlossaryInputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="languageCodesSet" /></td>
    <td><code>object</code></td>
    <td>Used with equivalent term set glossaries. (id: LanguageCodesSet)</td>
</tr>
<tr>
    <td><CopyableCode code="languagePair" /></td>
    <td><code>object</code></td>
    <td>Used with unidirectional glossaries. (id: LanguageCodePair)</td>
</tr>
<tr>
    <td><CopyableCode code="submitTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When CreateGlossary was called.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_glossaries_list">

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
    <td>Required. The resource name of the glossary. Glossary names have the form `projects/&#123;project-number-or-id&#125;/locations/&#123;location-id&#125;/glossaries/&#123;glossary-id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the glossary creation was finished.</td>
</tr>
<tr>
    <td><CopyableCode code="entryCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of entries defined in the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="inputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints. (id: GlossaryInputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="languageCodesSet" /></td>
    <td><code>object</code></td>
    <td>Used with equivalent term set glossaries. (id: LanguageCodesSet)</td>
</tr>
<tr>
    <td><CopyableCode code="languagePair" /></td>
    <td><code>object</code></td>
    <td>Used with unidirectional glossaries. (id: LanguageCodePair)</td>
</tr>
<tr>
    <td><CopyableCode code="submitTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When CreateGlossary was called.</td>
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
    <td><a href="#projects_locations_glossaries_get"><CopyableCode code="projects_locations_glossaries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td></td>
    <td>Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_list"><CopyableCode code="projects_locations_glossaries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_create"><CopyableCode code="projects_locations_glossaries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_patch"><CopyableCode code="projects_locations_glossaries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_delete"><CopyableCode code="projects_locations_glossaries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td></td>
    <td>Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_glossaries_get"
    values={[
        { label: 'projects_locations_glossaries_get', value: 'projects_locations_glossaries_get' },
        { label: 'projects_locations_glossaries_list', value: 'projects_locations_glossaries_list' }
    ]}
>
<TabItem value="projects_locations_glossaries_get">

Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

```sql
SELECT
name,
displayName,
endTime,
entryCount,
inputConfig,
languageCodesSet,
languagePair,
submitTime
FROM google.translate.glossaries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND glossariesId = '{{ glossariesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_glossaries_list">

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

```sql
SELECT
name,
displayName,
endTime,
entryCount,
inputConfig,
languageCodesSet,
languagePair,
submitTime
FROM google.translate.glossaries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_glossaries_create"
    values={[
        { label: 'projects_locations_glossaries_create', value: 'projects_locations_glossaries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_glossaries_create">

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

```sql
INSERT INTO google.translate.glossaries (
data__name,
data__languagePair,
data__languageCodesSet,
data__inputConfig,
data__displayName,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ languagePair }}',
'{{ languageCodesSet }}',
'{{ inputConfig }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
- name: glossaries
  props:
    - name: projectsId
      value: string
      description: Required parameter for the glossaries resource.
    - name: locationsId
      value: string
      description: Required parameter for the glossaries resource.
    - name: name
      value: string
      description: >
        Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
        
    - name: languagePair
      value: object
      description: >
        Used with unidirectional glossaries.
        
    - name: languageCodesSet
      value: object
      description: >
        Used with equivalent term set glossaries.
        
    - name: inputConfig
      value: object
      description: >
        Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.
        
    - name: displayName
      value: string
      description: >
        Optional. The display name of the glossary.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_glossaries_patch"
    values={[
        { label: 'projects_locations_glossaries_patch', value: 'projects_locations_glossaries_patch' }
    ]}
>
<TabItem value="projects_locations_glossaries_patch">

Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

```sql
UPDATE google.translate.glossaries
SET 
data__name = '{{ name }}',
data__languagePair = '{{ languagePair }}',
data__languageCodesSet = '{{ languageCodesSet }}',
data__inputConfig = '{{ inputConfig }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
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
    defaultValue="projects_locations_glossaries_delete"
    values={[
        { label: 'projects_locations_glossaries_delete', value: 'projects_locations_glossaries_delete' }
    ]}
>
<TabItem value="projects_locations_glossaries_delete">

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.

```sql
DELETE FROM google.translate.glossaries
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required;
```
</TabItem>
</Tabs>
