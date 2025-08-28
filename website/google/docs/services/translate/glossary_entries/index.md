--- 
title: glossary_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - glossary_entries
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

Creates, updates, deletes, gets or lists a <code>glossary_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>glossary_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.translate.glossary_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_glossaries_glossary_entries_get"
    values={[
        { label: 'projects_locations_glossaries_glossary_entries_get', value: 'projects_locations_glossaries_glossary_entries_get' },
        { label: 'projects_locations_glossaries_glossary_entries_list', value: 'projects_locations_glossaries_glossary_entries_list' }
    ]}
>
<TabItem value="projects_locations_glossaries_glossary_entries_get">

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
    <td>Identifier. The resource name of the entry. Format: `projects/*/locations/*/glossaries/*/glossaryEntries/*`</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Describes the glossary entry.</td>
</tr>
<tr>
    <td><CopyableCode code="termsPair" /></td>
    <td><code>object</code></td>
    <td>Used for an unidirectional glossary. (id: GlossaryTermsPair)</td>
</tr>
<tr>
    <td><CopyableCode code="termsSet" /></td>
    <td><code>object</code></td>
    <td>Used for an equivalent term sets glossary. (id: GlossaryTermsSet)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_glossaries_glossary_entries_list">

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
    <td>Identifier. The resource name of the entry. Format: `projects/*/locations/*/glossaries/*/glossaryEntries/*`</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Describes the glossary entry.</td>
</tr>
<tr>
    <td><CopyableCode code="termsPair" /></td>
    <td><code>object</code></td>
    <td>Used for an unidirectional glossary. (id: GlossaryTermsPair)</td>
</tr>
<tr>
    <td><CopyableCode code="termsSet" /></td>
    <td><code>object</code></td>
    <td>Used for an equivalent term sets glossary. (id: GlossaryTermsSet)</td>
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
    <td><a href="#projects_locations_glossaries_glossary_entries_get"><CopyableCode code="projects_locations_glossaries_glossary_entries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a>, <a href="#parameter-glossaryEntriesId"><code>glossaryEntriesId</code></a></td>
    <td></td>
    <td>Gets a single glossary entry by the given id.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_glossary_entries_list"><CopyableCode code="projects_locations_glossaries_glossary_entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List the entries for the glossary.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_glossary_entries_create"><CopyableCode code="projects_locations_glossaries_glossary_entries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td></td>
    <td>Creates a glossary entry.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_glossary_entries_patch"><CopyableCode code="projects_locations_glossaries_glossary_entries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a>, <a href="#parameter-glossaryEntriesId"><code>glossaryEntriesId</code></a></td>
    <td></td>
    <td>Updates a glossary entry.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_glossary_entries_delete"><CopyableCode code="projects_locations_glossaries_glossary_entries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a>, <a href="#parameter-glossaryEntriesId"><code>glossaryEntriesId</code></a></td>
    <td></td>
    <td>Deletes a single entry from the glossary</td>
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
<tr id="parameter-glossaryEntriesId">
    <td><CopyableCode code="glossaryEntriesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_glossaries_glossary_entries_get"
    values={[
        { label: 'projects_locations_glossaries_glossary_entries_get', value: 'projects_locations_glossaries_glossary_entries_get' },
        { label: 'projects_locations_glossaries_glossary_entries_list', value: 'projects_locations_glossaries_glossary_entries_list' }
    ]}
>
<TabItem value="projects_locations_glossaries_glossary_entries_get">

Gets a single glossary entry by the given id.

```sql
SELECT
name,
description,
termsPair,
termsSet
FROM google.translate.glossary_entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND glossariesId = '{{ glossariesId }}' -- required
AND glossaryEntriesId = '{{ glossaryEntriesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_glossaries_glossary_entries_list">

List the entries for the glossary.

```sql
SELECT
name,
description,
termsPair,
termsSet
FROM google.translate.glossary_entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND glossariesId = '{{ glossariesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_glossaries_glossary_entries_create"
    values={[
        { label: 'projects_locations_glossaries_glossary_entries_create', value: 'projects_locations_glossaries_glossary_entries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_glossaries_glossary_entries_create">

Creates a glossary entry.

```sql
INSERT INTO google.translate.glossary_entries (
data__name,
data__termsPair,
data__termsSet,
data__description,
projectsId,
locationsId,
glossariesId
)
SELECT 
'{{ name }}',
'{{ termsPair }}',
'{{ termsSet }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ glossariesId }}'
RETURNING
name,
description,
termsPair,
termsSet
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: glossary_entries
  props:
    - name: projectsId
      value: string
      description: Required parameter for the glossary_entries resource.
    - name: locationsId
      value: string
      description: Required parameter for the glossary_entries resource.
    - name: glossariesId
      value: string
      description: Required parameter for the glossary_entries resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the entry. Format: `projects/*/locations/*/glossaries/*/glossaryEntries/*`
        
    - name: termsPair
      value: object
      description: >
        Used for an unidirectional glossary.
        
    - name: termsSet
      value: object
      description: >
        Used for an equivalent term sets glossary.
        
    - name: description
      value: string
      description: >
        Describes the glossary entry.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_glossaries_glossary_entries_patch"
    values={[
        { label: 'projects_locations_glossaries_glossary_entries_patch', value: 'projects_locations_glossaries_glossary_entries_patch' }
    ]}
>
<TabItem value="projects_locations_glossaries_glossary_entries_patch">

Updates a glossary entry.

```sql
UPDATE google.translate.glossary_entries
SET 
data__name = '{{ name }}',
data__termsPair = '{{ termsPair }}',
data__termsSet = '{{ termsSet }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
AND glossaryEntriesId = '{{ glossaryEntriesId }}' --required
RETURNING
name,
description,
termsPair,
termsSet;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_glossaries_glossary_entries_delete"
    values={[
        { label: 'projects_locations_glossaries_glossary_entries_delete', value: 'projects_locations_glossaries_glossary_entries_delete' }
    ]}
>
<TabItem value="projects_locations_glossaries_glossary_entries_delete">

Deletes a single entry from the glossary

```sql
DELETE FROM google.translate.glossary_entries
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
AND glossaryEntriesId = '{{ glossaryEntriesId }}' --required;
```
</TabItem>
</Tabs>
