--- 
title: entry_links
hide_title: false
hide_table_of_contents: false
keywords:
  - entry_links
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

Creates, updates, deletes, gets or lists an <code>entry_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entry_links</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.entry_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_groups_entry_links_get"
    values={[
        { label: 'projects_locations_entry_groups_entry_links_get', value: 'projects_locations_entry_groups_entry_links_get' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entry_links_get">

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
    <td>Output only. Immutable. Identifier. The relative resource name of the Entry Link, of the form: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/entryGroups/&#123;entry_group_id&#125;/entryLinks/&#123;entry_link_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Entry Link was created.</td>
</tr>
<tr>
    <td><CopyableCode code="entryLinkType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Relative resource name of the Entry Link Type used to create this Entry Link. For example: Entry link between synonym terms in a glossary: projects/dataplex-types/locations/global/entryLinkTypes/synonym Entry link between related terms in a glossary: projects/dataplex-types/locations/global/entryLinkTypes/related Entry link between glossary terms and data assets: projects/dataplex-types/locations/global/entryLinkTypes/definition</td>
</tr>
<tr>
    <td><CopyableCode code="entryReferences" /></td>
    <td><code>array</code></td>
    <td>Required. Specifies the Entries referenced in the Entry Link. There should be exactly two entry references.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Entry Link was last updated.</td>
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
    <td><a href="#projects_locations_entry_groups_entry_links_get"><CopyableCode code="projects_locations_entry_groups_entry_links_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entryLinksId"><code>entryLinksId</code></a></td>
    <td></td>
    <td>Gets an Entry Link.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entry_links_create"><CopyableCode code="projects_locations_entry_groups_entry_links_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-entryLinkId"><code>entryLinkId</code></a></td>
    <td>Creates an Entry Link.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entry_links_delete"><CopyableCode code="projects_locations_entry_groups_entry_links_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entryLinksId"><code>entryLinksId</code></a></td>
    <td></td>
    <td>Deletes an Entry Link.</td>
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
<tr id="parameter-entryLinksId">
    <td><CopyableCode code="entryLinksId" /></td>
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
<tr id="parameter-entryLinkId">
    <td><CopyableCode code="entryLinkId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entry_links_get"
    values={[
        { label: 'projects_locations_entry_groups_entry_links_get', value: 'projects_locations_entry_groups_entry_links_get' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entry_links_get">

Gets an Entry Link.

```sql
SELECT
name,
createTime,
entryLinkType,
entryReferences,
updateTime
FROM google.dataplex.entry_links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND entryLinksId = '{{ entryLinksId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entry_links_create"
    values={[
        { label: 'projects_locations_entry_groups_entry_links_create', value: 'projects_locations_entry_groups_entry_links_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entry_links_create">

Creates an Entry Link.

```sql
INSERT INTO google.dataplex.entry_links (
data__entryLinkType,
data__entryReferences,
projectsId,
locationsId,
entryGroupsId,
entryLinkId
)
SELECT 
'{{ entryLinkType }}',
'{{ entryReferences }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupsId }}',
'{{ entryLinkId }}'
RETURNING
name,
createTime,
entryLinkType,
entryReferences,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: entry_links
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entry_links resource.
    - name: locationsId
      value: string
      description: Required parameter for the entry_links resource.
    - name: entryGroupsId
      value: string
      description: Required parameter for the entry_links resource.
    - name: entryLinkType
      value: string
      description: >
        Required. Immutable. Relative resource name of the Entry Link Type used to create this Entry Link. For example: Entry link between synonym terms in a glossary: projects/dataplex-types/locations/global/entryLinkTypes/synonym Entry link between related terms in a glossary: projects/dataplex-types/locations/global/entryLinkTypes/related Entry link between glossary terms and data assets: projects/dataplex-types/locations/global/entryLinkTypes/definition
        
    - name: entryReferences
      value: array
      description: >
        Required. Specifies the Entries referenced in the Entry Link. There should be exactly two entry references.
        
    - name: entryLinkId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entry_links_delete"
    values={[
        { label: 'projects_locations_entry_groups_entry_links_delete', value: 'projects_locations_entry_groups_entry_links_delete' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entry_links_delete">

Deletes an Entry Link.

```sql
DELETE FROM google.dataplex.entry_links
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entryLinksId = '{{ entryLinksId }}' --required;
```
</TabItem>
</Tabs>
