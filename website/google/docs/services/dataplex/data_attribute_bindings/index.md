--- 
title: data_attribute_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - data_attribute_bindings
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

Creates, updates, deletes, gets or lists a <code>data_attribute_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_attribute_bindings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.data_attribute_bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_attribute_bindings_get"
    values={[
        { label: 'projects_locations_data_attribute_bindings_get', value: 'projects_locations_data_attribute_bindings_get' },
        { label: 'projects_locations_data_attribute_bindings_list', value: 'projects_locations_data_attribute_bindings_list' }
    ]}
>
<TabItem value="projects_locations_data_attribute_bindings_get">

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
    <td>Output only. The relative resource name of the Data Attribute Binding, of the form: projects/&#123;project_number&#125;/locations/&#123;location&#125;/dataAttributeBindings/&#123;data_attribute_binding_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of attributes to be associated with the resource, provided in the form: projects/&#123;project&#125;/locations/&#123;location&#125;/dataTaxonomies/&#123;dataTaxonomy&#125;/attributes/&#123;data_attribute_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataAttributeBinding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DataAttributeBinding.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the DataAttributeBinding.</td>
</tr>
<tr>
    <td><CopyableCode code="paths" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/entities/&#123;entity_id&#125; Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataAttributeBinding was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_attribute_bindings_list">

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
    <td>Output only. The relative resource name of the Data Attribute Binding, of the form: projects/&#123;project_number&#125;/locations/&#123;location&#125;/dataAttributeBindings/&#123;data_attribute_binding_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of attributes to be associated with the resource, provided in the form: projects/&#123;project&#125;/locations/&#123;location&#125;/dataTaxonomies/&#123;dataTaxonomy&#125;/attributes/&#123;data_attribute_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataAttributeBinding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DataAttributeBinding.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the DataAttributeBinding.</td>
</tr>
<tr>
    <td><CopyableCode code="paths" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/&#123;project&#125;/locations/&#123;location&#125;/lakes/&#123;lake&#125;/zones/&#123;zone&#125;/entities/&#123;entity_id&#125; Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the DataAttributeBinding was last updated.</td>
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
    <td><a href="#projects_locations_data_attribute_bindings_get"><CopyableCode code="projects_locations_data_attribute_bindings_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataAttributeBindingsId"><code>dataAttributeBindingsId</code></a></td>
    <td></td>
    <td>Retrieves a DataAttributeBinding resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_attribute_bindings_list"><CopyableCode code="projects_locations_data_attribute_bindings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists DataAttributeBinding resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_attribute_bindings_create"><CopyableCode code="projects_locations_data_attribute_bindings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dataAttributeBindingId"><code>dataAttributeBindingId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a DataAttributeBinding resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_attribute_bindings_patch"><CopyableCode code="projects_locations_data_attribute_bindings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataAttributeBindingsId"><code>dataAttributeBindingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a DataAttributeBinding resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_attribute_bindings_delete"><CopyableCode code="projects_locations_data_attribute_bindings_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataAttributeBindingsId"><code>dataAttributeBindingsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a DataAttributeBinding resource. All attributes within the DataAttributeBinding must be deleted before the DataAttributeBinding can be deleted.</td>
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
<tr id="parameter-dataAttributeBindingsId">
    <td><CopyableCode code="dataAttributeBindingsId" /></td>
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
<tr id="parameter-dataAttributeBindingId">
    <td><CopyableCode code="dataAttributeBindingId" /></td>
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
    defaultValue="projects_locations_data_attribute_bindings_get"
    values={[
        { label: 'projects_locations_data_attribute_bindings_get', value: 'projects_locations_data_attribute_bindings_get' },
        { label: 'projects_locations_data_attribute_bindings_list', value: 'projects_locations_data_attribute_bindings_list' }
    ]}
>
<TabItem value="projects_locations_data_attribute_bindings_get">

Retrieves a DataAttributeBinding resource.

```sql
SELECT
name,
attributes,
createTime,
description,
displayName,
etag,
labels,
paths,
resource,
uid,
updateTime
FROM google.dataplex.data_attribute_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataAttributeBindingsId = '{{ dataAttributeBindingsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_data_attribute_bindings_list">

Lists DataAttributeBinding resources in a project and location.

```sql
SELECT
name,
attributes,
createTime,
description,
displayName,
etag,
labels,
paths,
resource,
uid,
updateTime
FROM google.dataplex.data_attribute_bindings
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
    defaultValue="projects_locations_data_attribute_bindings_create"
    values={[
        { label: 'projects_locations_data_attribute_bindings_create', value: 'projects_locations_data_attribute_bindings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_attribute_bindings_create">

Create a DataAttributeBinding resource.

```sql
INSERT INTO google.dataplex.data_attribute_bindings (
data__description,
data__displayName,
data__labels,
data__etag,
data__resource,
data__attributes,
data__paths,
projectsId,
locationsId,
dataAttributeBindingId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ labels }}',
'{{ etag }}',
'{{ resource }}',
'{{ attributes }}',
'{{ paths }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataAttributeBindingId }}',
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
- name: data_attribute_bindings
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_attribute_bindings resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_attribute_bindings resource.
    - name: description
      value: string
      description: >
        Optional. Description of the DataAttributeBinding.
        
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels for the DataAttributeBinding.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.
        
    - name: resource
      value: string
      description: >
        Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.
        
    - name: attributes
      value: array
      description: >
        Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}
        
    - name: paths
      value: array
      description: >
        Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.
        
    - name: dataAttributeBindingId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_attribute_bindings_patch"
    values={[
        { label: 'projects_locations_data_attribute_bindings_patch', value: 'projects_locations_data_attribute_bindings_patch' }
    ]}
>
<TabItem value="projects_locations_data_attribute_bindings_patch">

Updates a DataAttributeBinding resource.

```sql
UPDATE google.dataplex.data_attribute_bindings
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__resource = '{{ resource }}',
data__attributes = '{{ attributes }}',
data__paths = '{{ paths }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataAttributeBindingsId = '{{ dataAttributeBindingsId }}' --required
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
    defaultValue="projects_locations_data_attribute_bindings_delete"
    values={[
        { label: 'projects_locations_data_attribute_bindings_delete', value: 'projects_locations_data_attribute_bindings_delete' }
    ]}
>
<TabItem value="projects_locations_data_attribute_bindings_delete">

Deletes a DataAttributeBinding resource. All attributes within the DataAttributeBinding must be deleted before the DataAttributeBinding can be deleted.

```sql
DELETE FROM google.dataplex.data_attribute_bindings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataAttributeBindingsId = '{{ dataAttributeBindingsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
