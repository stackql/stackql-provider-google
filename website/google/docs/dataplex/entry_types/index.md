--- 
title: entry_types
hide_title: false
hide_table_of_contents: false
keywords:
  - entry_types
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

Creates, updates, deletes, gets or lists an <code>entry_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entry_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.entry_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_types_get"
    values={[
        { label: 'projects_locations_entry_types_get', value: 'projects_locations_entry_types_get' },
        { label: 'projects_locations_entry_types_list', value: 'projects_locations_entry_types_list' }
    ]}
>
<TabItem value="projects_locations_entry_types_get">

Entry Type is a template for creating Entries.

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
    <td>Output only. The relative resource name of the EntryType, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/entryTypes/&#123;entry_type_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>Immutable. Authorization defined for this type. (id: GoogleCloudDataplexV1EntryTypeAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EntryType was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the EntryType.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the EntryType.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>Optional. The platform that Entries of this type belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="requiredAspects" /></td>
    <td><code>array</code></td>
    <td>AspectInfo for the entry type.</td>
</tr>
<tr>
    <td><CopyableCode code="system" /></td>
    <td><code>string</code></td>
    <td>Optional. The system that Entries of this type belongs to. Examples include CloudSQL, MariaDB etc</td>
</tr>
<tr>
    <td><CopyableCode code="typeAliases" /></td>
    <td><code>array</code></td>
    <td>Optional. Indicates the classes this Entry Type belongs to, for example, TABLE, DATABASE, MODEL.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the EntryType. This ID will be different if the EntryType is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EntryType was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_entry_types_list">

List EntryTypes response.

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
    <td><CopyableCode code="entryTypes" /></td>
    <td><code>array</code></td>
    <td>EntryTypes under the given parent location.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachableLocations" /></td>
    <td><code>array</code></td>
    <td>Locations that the service couldn't reach.</td>
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
    <td><a href="#projects_locations_entry_types_get"><CopyableCode code="projects_locations_entry_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryTypesId"><code>entryTypesId</code></a></td>
    <td></td>
    <td>Gets an EntryType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_types_list"><CopyableCode code="projects_locations_entry_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists EntryType resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_types_create"><CopyableCode code="projects_locations_entry_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-entryTypeId"><code>entryTypeId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates an EntryType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_types_patch"><CopyableCode code="projects_locations_entry_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryTypesId"><code>entryTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an EntryType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_types_delete"><CopyableCode code="projects_locations_entry_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryTypesId"><code>entryTypesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an EntryType.</td>
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
<tr id="parameter-entryTypesId">
    <td><CopyableCode code="entryTypesId" /></td>
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
<tr id="parameter-entryTypeId">
    <td><CopyableCode code="entryTypeId" /></td>
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
    defaultValue="projects_locations_entry_types_get"
    values={[
        { label: 'projects_locations_entry_types_get', value: 'projects_locations_entry_types_get' },
        { label: 'projects_locations_entry_types_list', value: 'projects_locations_entry_types_list' }
    ]}
>
<TabItem value="projects_locations_entry_types_get">

Gets an EntryType.

```sql
SELECT
name,
authorization,
createTime,
description,
displayName,
etag,
labels,
platform,
requiredAspects,
system,
typeAliases,
uid,
updateTime
FROM google.dataplex.entry_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryTypesId = '{{ entryTypesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_entry_types_list">

Lists EntryType resources in a project and location.

```sql
SELECT
entryTypes,
nextPageToken,
unreachableLocations
FROM google.dataplex.entry_types
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
    defaultValue="projects_locations_entry_types_create"
    values={[
        { label: 'projects_locations_entry_types_create', value: 'projects_locations_entry_types_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_types_create">

Creates an EntryType.

```sql
INSERT INTO google.dataplex.entry_types (
data__description,
data__displayName,
data__labels,
data__etag,
data__typeAliases,
data__platform,
data__system,
data__requiredAspects,
data__authorization,
projectsId,
locationsId,
entryTypeId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ etag }}',
'{{ typeAliases }}',
'{{ platform }}',
'{{ system }}',
'{{ requiredAspects }}',
'{{ authorization }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryTypeId }}',
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
- name: entry_types
  props:
    - name: projectsId
      value: string
      description: Required parameter for the entry_types resource.
    - name: locationsId
      value: string
      description: Required parameter for the entry_types resource.
    - name: description
      value: string
      description: >
        Optional. Description of the EntryType.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the EntryType.
        
    - name: etag
      value: string
      description: >
        Optional. This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: typeAliases
      value: array
      description: >
        Optional. Indicates the classes this Entry Type belongs to, for example, TABLE, DATABASE, MODEL.
        
    - name: platform
      value: string
      description: >
        Optional. The platform that Entries of this type belongs to.
        
    - name: system
      value: string
      description: >
        Optional. The system that Entries of this type belongs to. Examples include CloudSQL, MariaDB etc
        
    - name: requiredAspects
      value: array
      description: >
        AspectInfo for the entry type.
        
    - name: authorization
      value: object
      description: >
        Immutable. Authorization defined for this type.
        
    - name: entryTypeId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_entry_types_patch"
    values={[
        { label: 'projects_locations_entry_types_patch', value: 'projects_locations_entry_types_patch' }
    ]}
>
<TabItem value="projects_locations_entry_types_patch">

Updates an EntryType.

```sql
UPDATE google.dataplex.entry_types
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__typeAliases = '{{ typeAliases }}',
data__platform = '{{ platform }}',
data__system = '{{ system }}',
data__requiredAspects = '{{ requiredAspects }}',
data__authorization = '{{ authorization }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryTypesId = '{{ entryTypesId }}' --required
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
    defaultValue="projects_locations_entry_types_delete"
    values={[
        { label: 'projects_locations_entry_types_delete', value: 'projects_locations_entry_types_delete' }
    ]}
>
<TabItem value="projects_locations_entry_types_delete">

Deletes an EntryType.

```sql
DELETE FROM google.dataplex.entry_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryTypesId = '{{ entryTypesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
