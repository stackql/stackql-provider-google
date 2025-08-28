--- 
title: data_taxonomies
hide_title: false
hide_table_of_contents: false
keywords:
  - data_taxonomies
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

Creates, updates, deletes, gets or lists a <code>data_taxonomies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_taxonomies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.data_taxonomies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_taxonomies_get"
    values={[
        { label: 'projects_locations_data_taxonomies_get', value: 'projects_locations_data_taxonomies_get' },
        { label: 'projects_locations_data_taxonomies_list', value: 'projects_locations_data_taxonomies_list' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_get">

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
    <td>Output only. The relative resource name of the DataTaxonomy, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataTaxonomies/&#123;data_taxonomy_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of attributes in the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="classCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of classes in the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataTaxonomy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataTaxonomy was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_taxonomies_list">

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
    <td>Output only. The relative resource name of the DataTaxonomy, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataTaxonomies/&#123;data_taxonomy_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of attributes in the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="classCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of classes in the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataTaxonomy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataTaxonomy was last updated.</td>
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
    <td><a href="#projects_locations_data_taxonomies_get"><CopyableCode code="projects_locations_data_taxonomies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a></td>
    <td></td>
    <td>Retrieves a DataTaxonomy resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_list"><CopyableCode code="projects_locations_data_taxonomies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists DataTaxonomy resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_create"><CopyableCode code="projects_locations_data_taxonomies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dataTaxonomyId"><code>dataTaxonomyId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a DataTaxonomy resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_patch"><CopyableCode code="projects_locations_data_taxonomies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a DataTaxonomy resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_delete"><CopyableCode code="projects_locations_data_taxonomies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a DataTaxonomy resource. All attributes within the DataTaxonomy must be deleted before the DataTaxonomy can be deleted.</td>
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
<tr id="parameter-dataTaxonomiesId">
    <td><CopyableCode code="dataTaxonomiesId" /></td>
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
<tr id="parameter-dataTaxonomyId">
    <td><CopyableCode code="dataTaxonomyId" /></td>
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
    defaultValue="projects_locations_data_taxonomies_get"
    values={[
        { label: 'projects_locations_data_taxonomies_get', value: 'projects_locations_data_taxonomies_get' },
        { label: 'projects_locations_data_taxonomies_list', value: 'projects_locations_data_taxonomies_list' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_get">

Retrieves a DataTaxonomy resource.

```sql
SELECT
name,
attributeCount,
classCount,
createTime,
description,
displayName,
etag,
labels,
uid,
updateTime
FROM google.dataplex.data_taxonomies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_taxonomies_list">

Lists DataTaxonomy resources in a project and location.

```sql
SELECT
name,
attributeCount,
classCount,
createTime,
description,
displayName,
etag,
labels,
uid,
updateTime
FROM google.dataplex.data_taxonomies
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
    defaultValue="projects_locations_data_taxonomies_create"
    values={[
        { label: 'projects_locations_data_taxonomies_create', value: 'projects_locations_data_taxonomies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_create">

Create a DataTaxonomy resource.

```sql
INSERT INTO google.dataplex.data_taxonomies (
data__description,
data__displayName,
data__labels,
data__etag,
projectsId,
locationsId,
dataTaxonomyId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataTaxonomyId }}',
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
- name: data_taxonomies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_taxonomies resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_taxonomies resource.
    - name: description
      value: string
      description: >
        Optional. Description of the DataTaxonomy.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the DataTaxonomy.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: dataTaxonomyId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_taxonomies_patch"
    values={[
        { label: 'projects_locations_data_taxonomies_patch', value: 'projects_locations_data_taxonomies_patch' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_patch">

Updates a DataTaxonomy resource.

```sql
UPDATE google.dataplex.data_taxonomies
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' --required
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
    defaultValue="projects_locations_data_taxonomies_delete"
    values={[
        { label: 'projects_locations_data_taxonomies_delete', value: 'projects_locations_data_taxonomies_delete' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_delete">

Deletes a DataTaxonomy resource. All attributes within the DataTaxonomy must be deleted before the DataTaxonomy can be deleted.

```sql
DELETE FROM google.dataplex.data_taxonomies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
