--- 
title: aspect_types
hide_title: false
hide_table_of_contents: false
keywords:
  - aspect_types
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

Creates, updates, deletes, gets or lists an <code>aspect_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>aspect_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.aspect_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_aspect_types_get"
    values={[
        { label: 'projects_locations_aspect_types_get', value: 'projects_locations_aspect_types_get' },
        { label: 'projects_locations_aspect_types_list', value: 'projects_locations_aspect_types_list' }
    ]}
>
<TabItem value="projects_locations_aspect_types_get">

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
    <td>Output only. The relative resource name of the AspectType, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/aspectTypes/&#123;aspect_type_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>Immutable. Defines the Authorization for this type. (id: GoogleCloudDataplexV1AspectTypeAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the AspectType was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the AspectType.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The service computes this checksum. The client may send it on update and delete requests to ensure it has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the AspectType.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataTemplate" /></td>
    <td><code>object</code></td>
    <td>Required. MetadataTemplate of the aspect. (id: GoogleCloudDataplexV1AspectTypeMetadataTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="transferStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Denotes the transfer status of the Aspect Type. It is unspecified for Aspect Types created from Dataplex API.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the AspectType. If you delete and recreate the AspectType with the same name, then this ID will be different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the AspectType was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_aspect_types_list">

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
    <td>Output only. The relative resource name of the AspectType, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/aspectTypes/&#123;aspect_type_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>Immutable. Defines the Authorization for this type. (id: GoogleCloudDataplexV1AspectTypeAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the AspectType was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the AspectType.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The service computes this checksum. The client may send it on update and delete requests to ensure it has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the AspectType.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataTemplate" /></td>
    <td><code>object</code></td>
    <td>Required. MetadataTemplate of the aspect. (id: GoogleCloudDataplexV1AspectTypeMetadataTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="transferStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Denotes the transfer status of the Aspect Type. It is unspecified for Aspect Types created from Dataplex API.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the AspectType. If you delete and recreate the AspectType with the same name, then this ID will be different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the AspectType was last updated.</td>
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
    <td><a href="#projects_locations_aspect_types_get"><CopyableCode code="projects_locations_aspect_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aspectTypesId"><code>aspectTypesId</code></a></td>
    <td></td>
    <td>Gets an AspectType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_aspect_types_list"><CopyableCode code="projects_locations_aspect_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists AspectType resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_aspect_types_create"><CopyableCode code="projects_locations_aspect_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-aspectTypeId"><code>aspectTypeId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates an AspectType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_aspect_types_patch"><CopyableCode code="projects_locations_aspect_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aspectTypesId"><code>aspectTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an AspectType.</td>
</tr>
<tr>
    <td><a href="#projects_locations_aspect_types_delete"><CopyableCode code="projects_locations_aspect_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aspectTypesId"><code>aspectTypesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an AspectType.</td>
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
<tr id="parameter-aspectTypesId">
    <td><CopyableCode code="aspectTypesId" /></td>
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
<tr id="parameter-aspectTypeId">
    <td><CopyableCode code="aspectTypeId" /></td>
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
    defaultValue="projects_locations_aspect_types_get"
    values={[
        { label: 'projects_locations_aspect_types_get', value: 'projects_locations_aspect_types_get' },
        { label: 'projects_locations_aspect_types_list', value: 'projects_locations_aspect_types_list' }
    ]}
>
<TabItem value="projects_locations_aspect_types_get">

Gets an AspectType.

```sql
SELECT
name,
authorization,
createTime,
description,
displayName,
etag,
labels,
metadataTemplate,
transferStatus,
uid,
updateTime
FROM google.dataplex.aspect_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND aspectTypesId = '{{ aspectTypesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_aspect_types_list">

Lists AspectType resources in a project and location.

```sql
SELECT
name,
authorization,
createTime,
description,
displayName,
etag,
labels,
metadataTemplate,
transferStatus,
uid,
updateTime
FROM google.dataplex.aspect_types
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
    defaultValue="projects_locations_aspect_types_create"
    values={[
        { label: 'projects_locations_aspect_types_create', value: 'projects_locations_aspect_types_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_aspect_types_create">

Creates an AspectType.

```sql
INSERT INTO google.dataplex.aspect_types (
data__description,
data__displayName,
data__labels,
data__etag,
data__authorization,
data__metadataTemplate,
projectsId,
locationsId,
aspectTypeId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ etag }}',
'{{ authorization }}',
'{{ metadataTemplate }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ aspectTypeId }}',
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
- name: aspect_types
  props:
    - name: projectsId
      value: string
      description: Required parameter for the aspect_types resource.
    - name: locationsId
      value: string
      description: Required parameter for the aspect_types resource.
    - name: description
      value: string
      description: >
        Optional. Description of the AspectType.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the AspectType.
        
    - name: etag
      value: string
      description: >
        The service computes this checksum. The client may send it on update and delete requests to ensure it has an up-to-date value before proceeding.
        
    - name: authorization
      value: object
      description: >
        Immutable. Defines the Authorization for this type.
        
    - name: metadataTemplate
      value: object
      description: >
        Required. MetadataTemplate of the aspect.
        
    - name: aspectTypeId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_aspect_types_patch"
    values={[
        { label: 'projects_locations_aspect_types_patch', value: 'projects_locations_aspect_types_patch' }
    ]}
>
<TabItem value="projects_locations_aspect_types_patch">

Updates an AspectType.

```sql
UPDATE google.dataplex.aspect_types
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__authorization = '{{ authorization }}',
data__metadataTemplate = '{{ metadataTemplate }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND aspectTypesId = '{{ aspectTypesId }}' --required
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
    defaultValue="projects_locations_aspect_types_delete"
    values={[
        { label: 'projects_locations_aspect_types_delete', value: 'projects_locations_aspect_types_delete' }
    ]}
>
<TabItem value="projects_locations_aspect_types_delete">

Deletes an AspectType.

```sql
DELETE FROM google.dataplex.aspect_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND aspectTypesId = '{{ aspectTypesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
