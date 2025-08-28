--- 
title: product_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - product_sets
  - vision
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

Creates, updates, deletes, gets or lists a <code>product_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>product_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vision.product_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_product_sets_get"
    values={[
        { label: 'projects_locations_product_sets_get', value: 'projects_locations_product_sets_get' },
        { label: 'projects_locations_product_sets_list', value: 'projects_locations_product_sets_list' }
    ]}
>
<TabItem value="projects_locations_product_sets_get">

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
    <td>The resource name of the ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. This field is ignored when creating a ProductSet.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name for this ProductSet. Must not be empty. Must be at most 4096 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="indexError" /></td>
    <td><code>object</code></td>
    <td>Output only. If there was an error with indexing the product set, the field is populated. This field is ignored when creating a ProductSet. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="indexTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this ProductSet was last indexed. Query results will reflect all updates before this time. If this ProductSet has never been indexed, this timestamp is the default value "1970-01-01T00:00:00Z". This field is ignored when creating a ProductSet.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_product_sets_list">

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
    <td>The resource name of the ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. This field is ignored when creating a ProductSet.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name for this ProductSet. Must not be empty. Must be at most 4096 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="indexError" /></td>
    <td><code>object</code></td>
    <td>Output only. If there was an error with indexing the product set, the field is populated. This field is ignored when creating a ProductSet. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="indexTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this ProductSet was last indexed. Query results will reflect all updates before this time. If this ProductSet has never been indexed, this timestamp is the default value "1970-01-01T00:00:00Z". This field is ignored when creating a ProductSet.</td>
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
    <td><a href="#projects_locations_product_sets_get"><CopyableCode code="projects_locations_product_sets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productSetsId"><code>productSetsId</code></a></td>
    <td></td>
    <td>Gets information associated with a ProductSet. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_product_sets_list"><CopyableCode code="projects_locations_product_sets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1.</td>
</tr>
<tr>
    <td><a href="#projects_locations_product_sets_create"><CopyableCode code="projects_locations_product_sets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-productSetId"><code>productSetId</code></a></td>
    <td>Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters.</td>
</tr>
<tr>
    <td><a href="#projects_locations_product_sets_patch"><CopyableCode code="projects_locations_product_sets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productSetsId"><code>productSetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters.</td>
</tr>
<tr>
    <td><a href="#projects_locations_product_sets_delete"><CopyableCode code="projects_locations_product_sets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productSetsId"><code>productSetsId</code></a></td>
    <td></td>
    <td>Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.</td>
</tr>
<tr>
    <td><a href="#projects_locations_product_sets_import"><CopyableCode code="projects_locations_product_sets_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.</td>
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
<tr id="parameter-productSetsId">
    <td><CopyableCode code="productSetsId" /></td>
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
<tr id="parameter-productSetId">
    <td><CopyableCode code="productSetId" /></td>
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
    defaultValue="projects_locations_product_sets_get"
    values={[
        { label: 'projects_locations_product_sets_get', value: 'projects_locations_product_sets_get' },
        { label: 'projects_locations_product_sets_list', value: 'projects_locations_product_sets_list' }
    ]}
>
<TabItem value="projects_locations_product_sets_get">

Gets information associated with a ProductSet. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist.

```sql
SELECT
name,
displayName,
indexError,
indexTime
FROM google.vision.product_sets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productSetsId = '{{ productSetsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_product_sets_list">

Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1.

```sql
SELECT
name,
displayName,
indexError,
indexTime
FROM google.vision.product_sets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_product_sets_create"
    values={[
        { label: 'projects_locations_product_sets_create', value: 'projects_locations_product_sets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_product_sets_create">

Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters.

```sql
INSERT INTO google.vision.product_sets (
data__name,
data__displayName,
projectsId,
locationsId,
productSetId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productSetId }}'
RETURNING
name,
displayName,
indexError,
indexTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: product_sets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the product_sets resource.
    - name: locationsId
      value: string
      description: Required parameter for the product_sets resource.
    - name: name
      value: string
      description: >
        The resource name of the ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. This field is ignored when creating a ProductSet.
        
    - name: displayName
      value: string
      description: >
        The user-provided name for this ProductSet. Must not be empty. Must be at most 4096 characters long.
        
    - name: productSetId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_product_sets_patch"
    values={[
        { label: 'projects_locations_product_sets_patch', value: 'projects_locations_product_sets_patch' }
    ]}
>
<TabItem value="projects_locations_product_sets_patch">

Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters.

```sql
UPDATE google.vision.product_sets
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productSetsId = '{{ productSetsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
indexError,
indexTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_product_sets_delete"
    values={[
        { label: 'projects_locations_product_sets_delete', value: 'projects_locations_product_sets_delete' }
    ]}
>
<TabItem value="projects_locations_product_sets_delete">

Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.

```sql
DELETE FROM google.vision.product_sets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productSetsId = '{{ productSetsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_product_sets_import"
    values={[
        { label: 'projects_locations_product_sets_import', value: 'projects_locations_product_sets_import' }
    ]}
>
<TabItem value="projects_locations_product_sets_import">

Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.

```sql
EXEC google.vision.product_sets.projects_locations_product_sets_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"inputConfig": "{{ inputConfig }}"
}';
```
</TabItem>
</Tabs>
