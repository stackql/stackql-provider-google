--- 
title: attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes
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

Creates, updates, deletes, gets or lists an <code>attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>attributes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_taxonomies_attributes_get"
    values={[
        { label: 'projects_locations_data_taxonomies_attributes_get', value: 'projects_locations_data_taxonomies_attributes_get' },
        { label: 'projects_locations_data_taxonomies_attributes_list', value: 'projects_locations_data_taxonomies_attributes_list' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_attributes_get">

Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com 

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
    <td>Output only. The relative resource name of the dataAttribute, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataTaxonomies/&#123;dataTaxonomy&#125;/attributes/&#123;data_attribute_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="attributeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of child attributes present for this attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataAttribute was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataAccessSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Specified when applied to data stored on the resource (eg: rows, columns in BigQuery Tables). (id: GoogleCloudDataplexV1DataAccessSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DataAttribute.</td>
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
    <td>Optional. User-defined labels for the DataAttribute.</td>
</tr>
<tr>
    <td><CopyableCode code="parentId" /></td>
    <td><code>string</code></td>
    <td>Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -&gt; b -&gt; c -&gt; d -&gt; e, depth = 4</td>
</tr>
<tr>
    <td><CopyableCode code="resourceAccessSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Specified when applied to a resource (eg: Cloud Storage bucket, BigQuery dataset, BigQuery table). (id: GoogleCloudDataplexV1ResourceAccessSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataAttribute was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_taxonomies_attributes_list">

List DataAttributes response.

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
    <td><CopyableCode code="dataAttributes" /></td>
    <td><code>array</code></td>
    <td>DataAttributes under the given parent DataTaxonomy.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next page of results, or empty if there are no more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachableLocations" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#projects_locations_data_taxonomies_attributes_get"><CopyableCode code="projects_locations_data_taxonomies_attributes_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Retrieves a Data Attribute resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_attributes_list"><CopyableCode code="projects_locations_data_taxonomies_attributes_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Data Attribute resources in a DataTaxonomy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_attributes_create"><CopyableCode code="projects_locations_data_taxonomies_attributes_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a></td>
    <td><a href="#parameter-dataAttributeId"><code>dataAttributeId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a DataAttribute resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_attributes_patch"><CopyableCode code="projects_locations_data_taxonomies_attributes_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a DataAttribute resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_taxonomies_attributes_delete"><CopyableCode code="projects_locations_data_taxonomies_attributes_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataTaxonomiesId"><code>dataTaxonomiesId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a Data Attribute resource.</td>
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
<tr id="parameter-attributesId">
    <td><CopyableCode code="attributesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-dataAttributeId">
    <td><CopyableCode code="dataAttributeId" /></td>
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
    defaultValue="projects_locations_data_taxonomies_attributes_get"
    values={[
        { label: 'projects_locations_data_taxonomies_attributes_get', value: 'projects_locations_data_taxonomies_attributes_get' },
        { label: 'projects_locations_data_taxonomies_attributes_list', value: 'projects_locations_data_taxonomies_attributes_list' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_attributes_get">

Retrieves a Data Attribute resource.

```sql
SELECT
name,
attributeCount,
createTime,
dataAccessSpec,
description,
displayName,
etag,
labels,
parentId,
resourceAccessSpec,
uid,
updateTime
FROM google.dataplex.attributes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' -- required
AND attributesId = '{{ attributesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_taxonomies_attributes_list">

Lists Data Attribute resources in a DataTaxonomy.

```sql
SELECT
dataAttributes,
nextPageToken,
unreachableLocations
FROM google.dataplex.attributes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_taxonomies_attributes_create"
    values={[
        { label: 'projects_locations_data_taxonomies_attributes_create', value: 'projects_locations_data_taxonomies_attributes_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_attributes_create">

Create a DataAttribute resource.

```sql
INSERT INTO google.dataplex.attributes (
data__description,
data__displayName,
data__labels,
data__parentId,
data__etag,
data__resourceAccessSpec,
data__dataAccessSpec,
projectsId,
locationsId,
dataTaxonomiesId,
dataAttributeId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ parentId }}',
'{{ etag }}',
'{{ resourceAccessSpec }}',
'{{ dataAccessSpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataTaxonomiesId }}',
'{{ dataAttributeId }}',
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
- name: attributes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the attributes resource.
    - name: locationsId
      value: string
      description: Required parameter for the attributes resource.
    - name: dataTaxonomiesId
      value: string
      description: Required parameter for the attributes resource.
    - name: description
      value: string
      description: >
        Optional. Description of the DataAttribute.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the DataAttribute.
        
    - name: parentId
      value: string
      description: >
        Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: resourceAccessSpec
      value: object
      description: >
        Optional. Specified when applied to a resource (eg: Cloud Storage bucket, BigQuery dataset, BigQuery table).
        
    - name: dataAccessSpec
      value: object
      description: >
        Optional. Specified when applied to data stored on the resource (eg: rows, columns in BigQuery Tables).
        
    - name: dataAttributeId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_taxonomies_attributes_patch"
    values={[
        { label: 'projects_locations_data_taxonomies_attributes_patch', value: 'projects_locations_data_taxonomies_attributes_patch' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_attributes_patch">

Updates a DataAttribute resource.

```sql
UPDATE google.dataplex.attributes
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__parentId = '{{ parentId }}',
data__etag = '{{ etag }}',
data__resourceAccessSpec = '{{ resourceAccessSpec }}',
data__dataAccessSpec = '{{ dataAccessSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' --required
AND attributesId = '{{ attributesId }}' --required
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
    defaultValue="projects_locations_data_taxonomies_attributes_delete"
    values={[
        { label: 'projects_locations_data_taxonomies_attributes_delete', value: 'projects_locations_data_taxonomies_attributes_delete' }
    ]}
>
<TabItem value="projects_locations_data_taxonomies_attributes_delete">

Deletes a Data Attribute resource.

```sql
DELETE FROM google.dataplex.attributes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataTaxonomiesId = '{{ dataTaxonomiesId }}' --required
AND attributesId = '{{ attributesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
