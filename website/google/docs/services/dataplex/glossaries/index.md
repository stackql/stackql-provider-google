--- 
title: glossaries
hide_title: false
hide_table_of_contents: false
keywords:
  - glossaries
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

Creates, updates, deletes, gets or lists a <code>glossaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>glossaries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.glossaries" /></td></tr>
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
    <td>Output only. Identifier. The resource name of the Glossary. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="categoryCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of GlossaryCategories in the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Glossary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-mutable description of the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name of the Glossary. This is user-mutable. This will be same as the GlossaryId, if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Needed for resource freshness validation. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="termCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of GlossaryTerms in the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated unique id for the Glossary. This ID will be different if the Glossary is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Glossary was last updated.</td>
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
    <td>Output only. Identifier. The resource name of the Glossary. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/glossaries/&#123;glossary_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="categoryCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of GlossaryCategories in the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Glossary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-mutable description of the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name of the Glossary. This is user-mutable. This will be same as the GlossaryId, if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Needed for resource freshness validation. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="termCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of GlossaryTerms in the Glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated unique id for the Glossary. This ID will be different if the Glossary is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Glossary was last updated.</td>
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
    <td>Gets a Glossary resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_list"><CopyableCode code="projects_locations_glossaries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Glossary resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_create"><CopyableCode code="projects_locations_glossaries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-glossaryId"><code>glossaryId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Glossary resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_patch"><CopyableCode code="projects_locations_glossaries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a Glossary resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_glossaries_delete"><CopyableCode code="projects_locations_glossaries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-glossariesId"><code>glossariesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a Glossary resource. All the categories and terms within the Glossary must be deleted before the Glossary can be deleted.</td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-glossaryId">
    <td><CopyableCode code="glossaryId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Gets a Glossary resource.

```sql
SELECT
name,
categoryCount,
createTime,
description,
displayName,
etag,
labels,
termCount,
uid,
updateTime
FROM google.dataplex.glossaries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND glossariesId = '{{ glossariesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_glossaries_list">

Lists Glossary resources in a project and location.

```sql
SELECT
name,
categoryCount,
createTime,
description,
displayName,
etag,
labels,
termCount,
uid,
updateTime
FROM google.dataplex.glossaries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new Glossary resource.

```sql
INSERT INTO google.dataplex.glossaries (
data__displayName,
data__description,
data__labels,
data__etag,
projectsId,
locationsId,
glossaryId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ labels }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ glossaryId }}',
'{{ validateOnly }}'
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
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name of the Glossary. This is user-mutable. This will be same as the GlossaryId, if not specified.
        
    - name: description
      value: string
      description: >
        Optional. The user-mutable description of the Glossary.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the Glossary.
        
    - name: etag
      value: string
      description: >
        Optional. Needed for resource freshness validation. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: glossaryId
      value: string
    - name: validateOnly
      value: boolean
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

Updates a Glossary resource.

```sql
UPDATE google.dataplex.glossaries
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Deletes a Glossary resource. All the categories and terms within the Glossary must be deleted before the Glossary can be deleted.

```sql
DELETE FROM google.dataplex.glossaries
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND glossariesId = '{{ glossariesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
