--- 
title: reference_images
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_images
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

Creates, updates, deletes, gets or lists a <code>reference_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reference_images</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vision.reference_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_products_reference_images_get"
    values={[
        { label: 'projects_locations_products_reference_images_get', value: 'projects_locations_products_reference_images_get' },
        { label: 'projects_locations_products_reference_images_list', value: 'projects_locations_products_reference_images_list' }
    ]}
>
<TabItem value="projects_locations_products_reference_images_get">

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
    <td>The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.</td>
</tr>
<tr>
    <td><CopyableCode code="boundingPolys" /></td>
    <td><code>array</code></td>
    <td>Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_products_reference_images_list">

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
    <td>The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.</td>
</tr>
<tr>
    <td><CopyableCode code="boundingPolys" /></td>
    <td><code>array</code></td>
    <td>Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.</td>
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
    <td><a href="#projects_locations_products_reference_images_get"><CopyableCode code="projects_locations_products_reference_images_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-referenceImagesId"><code>referenceImagesId</code></a></td>
    <td></td>
    <td>Gets information associated with a ReferenceImage. Possible errors: * Returns NOT_FOUND if the specified image does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_reference_images_list"><CopyableCode code="projects_locations_products_reference_images_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_reference_images_create"><CopyableCode code="projects_locations_products_reference_images_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-referenceImageId"><code>referenceImageId</code></a></td>
    <td>Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.</td>
</tr>
<tr>
    <td><a href="#projects_locations_products_reference_images_delete"><CopyableCode code="projects_locations_products_reference_images_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a>, <a href="#parameter-referenceImagesId"><code>referenceImagesId</code></a></td>
    <td></td>
    <td>Permanently deletes a reference image. The image metadata will be deleted right away, but search queries against ProductSets containing the image may still work until all related caches are refreshed. The actual image files are not deleted from Google Cloud Storage.</td>
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
<tr id="parameter-productsId">
    <td><CopyableCode code="productsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-referenceImagesId">
    <td><CopyableCode code="referenceImagesId" /></td>
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
<tr id="parameter-referenceImageId">
    <td><CopyableCode code="referenceImageId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_products_reference_images_get"
    values={[
        { label: 'projects_locations_products_reference_images_get', value: 'projects_locations_products_reference_images_get' },
        { label: 'projects_locations_products_reference_images_list', value: 'projects_locations_products_reference_images_list' }
    ]}
>
<TabItem value="projects_locations_products_reference_images_get">

Gets information associated with a ReferenceImage. Possible errors: * Returns NOT_FOUND if the specified image does not exist.

```sql
SELECT
name,
boundingPolys,
uri
FROM google.vision.reference_images
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND referenceImagesId = '{{ referenceImagesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_products_reference_images_list">

Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1.

```sql
SELECT
name,
boundingPolys,
uri
FROM google.vision.reference_images
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND productsId = '{{ productsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_products_reference_images_create"
    values={[
        { label: 'projects_locations_products_reference_images_create', value: 'projects_locations_products_reference_images_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_products_reference_images_create">

Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.

```sql
INSERT INTO google.vision.reference_images (
data__name,
data__uri,
data__boundingPolys,
projectsId,
locationsId,
productsId,
referenceImageId
)
SELECT 
'{{ name }}',
'{{ uri }}',
'{{ boundingPolys }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ productsId }}',
'{{ referenceImageId }}'
RETURNING
name,
boundingPolys,
uri
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: reference_images
  props:
    - name: projectsId
      value: string
      description: Required parameter for the reference_images resource.
    - name: locationsId
      value: string
      description: Required parameter for the reference_images resource.
    - name: productsId
      value: string
      description: Required parameter for the reference_images resource.
    - name: name
      value: string
      description: >
        The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.
        
    - name: uri
      value: string
      description: >
        Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.
        
    - name: boundingPolys
      value: array
      description: >
        Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
        
    - name: referenceImageId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_products_reference_images_delete"
    values={[
        { label: 'projects_locations_products_reference_images_delete', value: 'projects_locations_products_reference_images_delete' }
    ]}
>
<TabItem value="projects_locations_products_reference_images_delete">

Permanently deletes a reference image. The image metadata will be deleted right away, but search queries against ProductSets containing the image may still work until all related caches are refreshed. The actual image files are not deleted from Google Cloud Storage.

```sql
DELETE FROM google.vision.reference_images
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND productsId = '{{ productsId }}' --required
AND referenceImagesId = '{{ referenceImagesId }}' --required;
```
</TabItem>
</Tabs>
