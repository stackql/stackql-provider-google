--- 
title: catalog_items
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_items
  - recommendationengine
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

Creates, updates, deletes, gets or lists a <code>catalog_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>catalog_items</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recommendationengine.catalog_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_catalog_items_get"
    values={[
        { label: 'projects_locations_catalogs_catalog_items_get', value: 'projects_locations_catalogs_catalog_items_get' },
        { label: 'projects_locations_catalogs_catalog_items_list', value: 'projects_locations_catalogs_catalog_items_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_catalog_items_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="categoryHierarchies" /></td>
    <td><code>array</code></td>
    <td>Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -&gt; "Shoes"] and ["Sports & Fitness" -&gt; "Athletic Clothing" -&gt; "Shoes"], it could be represented as: "categoryHierarchies": [ &#123; "categories": ["Shoes & Accessories", "Shoes"]&#125;, &#123; "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] &#125; ]</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.</td>
</tr>
<tr>
    <td><CopyableCode code="itemAttributes" /></td>
    <td><code>object</code></td>
    <td>Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here. (id: GoogleCloudRecommendationengineV1beta1FeatureMap)</td>
</tr>
<tr>
    <td><CopyableCode code="itemGroupId" /></td>
    <td><code>string</code></td>
    <td>Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.</td>
</tr>
<tr>
    <td><CopyableCode code="productMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata specific to retail products. (id: GoogleCloudRecommendationengineV1beta1ProductCatalogItem)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_catalogs_catalog_items_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="categoryHierarchies" /></td>
    <td><code>array</code></td>
    <td>Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -&gt; "Shoes"] and ["Sports & Fitness" -&gt; "Athletic Clothing" -&gt; "Shoes"], it could be represented as: "categoryHierarchies": [ &#123; "categories": ["Shoes & Accessories", "Shoes"]&#125;, &#123; "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] &#125; ]</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.</td>
</tr>
<tr>
    <td><CopyableCode code="itemAttributes" /></td>
    <td><code>object</code></td>
    <td>Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here. (id: GoogleCloudRecommendationengineV1beta1FeatureMap)</td>
</tr>
<tr>
    <td><CopyableCode code="itemGroupId" /></td>
    <td><code>string</code></td>
    <td>Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.</td>
</tr>
<tr>
    <td><CopyableCode code="productMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata specific to retail products. (id: GoogleCloudRecommendationengineV1beta1ProductCatalogItem)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.</td>
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
    <td><a href="#projects_locations_catalogs_catalog_items_get"><CopyableCode code="projects_locations_catalogs_catalog_items_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-catalogItemsId"><code>catalogItemsId</code></a></td>
    <td></td>
    <td>Gets a specific catalog item.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_catalog_items_list"><CopyableCode code="projects_locations_catalogs_catalog_items_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Gets a list of catalog items.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_catalog_items_create"><CopyableCode code="projects_locations_catalogs_catalog_items_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Creates a catalog item.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_catalog_items_patch"><CopyableCode code="projects_locations_catalogs_catalog_items_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-catalogItemsId"><code>catalogItemsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a catalog item. Partial updating is supported. Non-existing items will be created.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_catalog_items_delete"><CopyableCode code="projects_locations_catalogs_catalog_items_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-catalogItemsId"><code>catalogItemsId</code></a></td>
    <td></td>
    <td>Deletes a catalog item.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_catalog_items_import"><CopyableCode code="projects_locations_catalogs_catalog_items_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td></td>
    <td>Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.</td>
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
<tr id="parameter-catalogItemsId">
    <td><CopyableCode code="catalogItemsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_catalogs_catalog_items_get"
    values={[
        { label: 'projects_locations_catalogs_catalog_items_get', value: 'projects_locations_catalogs_catalog_items_get' },
        { label: 'projects_locations_catalogs_catalog_items_list', value: 'projects_locations_catalogs_catalog_items_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_catalog_items_get">

Gets a specific catalog item.

```sql
SELECT
id,
categoryHierarchies,
description,
itemAttributes,
itemGroupId,
languageCode,
productMetadata,
tags,
title
FROM google.recommendationengine.catalog_items
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND catalogItemsId = '{{ catalogItemsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_catalog_items_list">

Gets a list of catalog items.

```sql
SELECT
id,
categoryHierarchies,
description,
itemAttributes,
itemGroupId,
languageCode,
productMetadata,
tags,
title
FROM google.recommendationengine.catalog_items
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_catalog_items_create"
    values={[
        { label: 'projects_locations_catalogs_catalog_items_create', value: 'projects_locations_catalogs_catalog_items_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_catalog_items_create">

Creates a catalog item.

```sql
INSERT INTO google.recommendationengine.catalog_items (
data__id,
data__categoryHierarchies,
data__title,
data__description,
data__itemAttributes,
data__languageCode,
data__tags,
data__itemGroupId,
data__productMetadata,
projectsId,
locationsId,
catalogsId
)
SELECT 
'{{ id }}',
'{{ categoryHierarchies }}',
'{{ title }}',
'{{ description }}',
'{{ itemAttributes }}',
'{{ languageCode }}',
'{{ tags }}',
'{{ itemGroupId }}',
'{{ productMetadata }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}'
RETURNING
id,
categoryHierarchies,
description,
itemAttributes,
itemGroupId,
languageCode,
productMetadata,
tags,
title
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: catalog_items
  props:
    - name: projectsId
      value: string
      description: Required parameter for the catalog_items resource.
    - name: locationsId
      value: string
      description: Required parameter for the catalog_items resource.
    - name: catalogsId
      value: string
      description: Required parameter for the catalog_items resource.
    - name: id
      value: string
      description: >
        Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.
        
    - name: categoryHierarchies
      value: array
      description: >
        Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]
        
    - name: title
      value: string
      description: >
        Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.
        
    - name: description
      value: string
      description: >
        Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.
        
    - name: itemAttributes
      value: object
      description: >
        Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here.
        
    - name: languageCode
      value: string
      description: >
        Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.
        
    - name: tags
      value: array
      description: >
        Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.
        
    - name: itemGroupId
      value: string
      description: >
        Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).
        
    - name: productMetadata
      value: object
      description: >
        Optional. Metadata specific to retail products.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_catalog_items_patch"
    values={[
        { label: 'projects_locations_catalogs_catalog_items_patch', value: 'projects_locations_catalogs_catalog_items_patch' }
    ]}
>
<TabItem value="projects_locations_catalogs_catalog_items_patch">

Updates a catalog item. Partial updating is supported. Non-existing items will be created.

```sql
UPDATE google.recommendationengine.catalog_items
SET 
data__id = '{{ id }}',
data__categoryHierarchies = '{{ categoryHierarchies }}',
data__title = '{{ title }}',
data__description = '{{ description }}',
data__itemAttributes = '{{ itemAttributes }}',
data__languageCode = '{{ languageCode }}',
data__tags = '{{ tags }}',
data__itemGroupId = '{{ itemGroupId }}',
data__productMetadata = '{{ productMetadata }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND catalogItemsId = '{{ catalogItemsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
id,
categoryHierarchies,
description,
itemAttributes,
itemGroupId,
languageCode,
productMetadata,
tags,
title;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_catalog_items_delete"
    values={[
        { label: 'projects_locations_catalogs_catalog_items_delete', value: 'projects_locations_catalogs_catalog_items_delete' }
    ]}
>
<TabItem value="projects_locations_catalogs_catalog_items_delete">

Deletes a catalog item.

```sql
DELETE FROM google.recommendationengine.catalog_items
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND catalogItemsId = '{{ catalogItemsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_catalog_items_import"
    values={[
        { label: 'projects_locations_catalogs_catalog_items_import', value: 'projects_locations_catalogs_catalog_items_import' }
    ]}
>
<TabItem value="projects_locations_catalogs_catalog_items_import">

Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.

```sql
EXEC google.recommendationengine.catalog_items.projects_locations_catalogs_catalog_items_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"inputConfig": "{{ inputConfig }}", 
"errorsConfig": "{{ errorsConfig }}", 
"updateMask": "{{ updateMask }}"
}';
```
</TabItem>
</Tabs>
