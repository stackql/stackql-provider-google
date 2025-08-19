--- 
title: products
hide_title: false
hide_table_of_contents: false
keywords:
  - products
  - retail
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

Creates, updates, deletes, gets or lists a <code>products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>products</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_branches_products_get"
    values={[
        { label: 'projects_locations_catalogs_branches_products_get', value: 'projects_locations_catalogs_branches_products_get' },
        { label: 'projects_locations_catalogs_branches_products_list', value: 'projects_locations_catalogs_branches_products_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_get">

Product captures all metadata information of items to be recommended or searched.

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
    <td>Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `&#123; "vendor": &#123;"text": ["vendor123", "vendor456"]&#125;, "lengths_cm": &#123;"numbers":[2.3, 15.4]&#125;, "heights_cm": &#123;"numbers":[8.1, 6.4]&#125; &#125;`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="audience" /></td>
    <td><code>object</code></td>
    <td>The target group associated with a given audience (e.g. male, veterans, car owners, musicians, etc.) of the product. (id: GoogleCloudRetailV2Audience)</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>The online availability of the Product. Default to Availability.IN_STOCK. For primary products with variants set the availability of the primary as Availability.OUT_OF_STOCK and set the true availability at the variant level. This way the primary product will be considered "in stock" as long as it has at least one variant in stock. For primary products with no variants set the true availability at the primary level. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability).</td>
</tr>
<tr>
    <td><CopyableCode code="availableQuantity" /></td>
    <td><code>integer (int32)</code></td>
    <td>The available quantity of the item.</td>
</tr>
<tr>
    <td><CopyableCode code="availableTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT.</td>
</tr>
<tr>
    <td><CopyableCode code="brands" /></td>
    <td><code>array</code></td>
    <td>The brands of the product. A maximum of 30 brands are allowed unless overridden through the Google Cloud console. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand).</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '&gt;' sign to separate different hierarchies. If '&gt;' is part of the category name, replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -&gt; "Shoes"] and ["Sports & Fitness" -&gt; "Athletic Clothing" -&gt; "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories &gt; Shoes", "Sports & Fitness &gt; Athletic Clothing &gt; Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product unless overridden through the Google Cloud console. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436</td>
</tr>
<tr>
    <td><CopyableCode code="collectionMemberIds" /></td>
    <td><code>array</code></td>
    <td>The id of the collection members when type is Type.COLLECTION. Non-existent product ids are allowed. The type of the members must be either Type.PRIMARY or Type.VARIANT otherwise an INVALID_ARGUMENT error is thrown. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return.</td>
</tr>
<tr>
    <td><CopyableCode code="colorInfo" /></td>
    <td><code>object</code></td>
    <td>The color of the product. Corresponding properties: Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color). (id: GoogleCloudRetailV2ColorInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 1 value is allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description).</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Note that this field is applied in the following ways: * If the Product is already expired when it is uploaded, this product is not indexed for search. * If the Product is not expired when it is uploaded, only the Type.PRIMARY's and Type.COLLECTION's expireTime is respected, and Type.VARIANT's expireTime is not used. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499).</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillmentInfo" /></td>
    <td><code>array</code></td>
    <td>Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="gtin" /></td>
    <td><code>string</code></td>
    <td>The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="images" /></td>
    <td><code>array</code></td>
    <td>Product images for the product. We highly recommend putting the main image first. A maximum of 300 images are allowed. Corresponding properties: Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset.</td>
</tr>
<tr>
    <td><CopyableCode code="localInventories" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of local inventories specific to different places. This field can be managed by ProductService.AddLocalInventories and ProductService.RemoveLocalInventories APIs if fine-grained, high-volume updates are necessary.</td>
</tr>
<tr>
    <td><CopyableCode code="materials" /></td>
    <td><code>array</code></td>
    <td>The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 200 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material).</td>
</tr>
<tr>
    <td><CopyableCode code="patterns" /></td>
    <td><code>array</code></td>
    <td>The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern).</td>
</tr>
<tr>
    <td><CopyableCode code="priceInfo" /></td>
    <td><code>object</code></td>
    <td>Product price and cost information. Corresponding properties: Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). (id: GoogleCloudRetailV2PriceInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryProductId" /></td>
    <td><code>string</code></td>
    <td>Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID).</td>
</tr>
<tr>
    <td><CopyableCode code="promotions" /></td>
    <td><code>array</code></td>
    <td>The promotions applied to the product. A maximum of 10 values are allowed per Product. Only Promotion.promotion_id will be used, other fields will be ignored if set.</td>
</tr>
<tr>
    <td><CopyableCode code="publishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="rating" /></td>
    <td><code>object</code></td>
    <td>The rating of this product. (id: GoogleCloudRetailV2Rating)</td>
</tr>
<tr>
    <td><CopyableCode code="retrievableFields" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td>Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead.</td>
</tr>
<tr>
    <td><CopyableCode code="sizes" /></td>
    <td><code>array</code></td>
    <td>The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497), and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size).</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Corresponding properties: Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset.</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).</td>
</tr>
<tr>
    <td><CopyableCode code="variants" /></td>
    <td><code>array</code></td>
    <td>Output only. Product variants grouped together on primary product which share similar product attributes. It's automatically grouped by primary_product_id for all the product variants. Only populated for Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_catalogs_branches_products_list">

Response message for ProductService.ListProducts method.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="products" /></td>
    <td><code>array</code></td>
    <td>The Products.</td>
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
    <td><a href="#projects_locations_catalogs_branches_products_get"><CopyableCode code="projects_locations_catalogs_branches_products_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Gets a Product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_list"><CopyableCode code="projects_locations_catalogs_branches_products_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Gets a list of Products.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_create"><CopyableCode code="projects_locations_catalogs_branches_products_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td><a href="#parameter-productId"><code>productId</code></a></td>
    <td>Creates a Product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_patch"><CopyableCode code="projects_locations_catalogs_branches_products_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates a Product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_delete"><CopyableCode code="projects_locations_catalogs_branches_products_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Deletes a Product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_purge"><CopyableCode code="projects_locations_catalogs_branches_products_purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td></td>
    <td>Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_import"><CopyableCode code="projects_locations_catalogs_branches_products_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a></td>
    <td></td>
    <td>Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_branches_products_set_inventory"><CopyableCode code="projects_locations_catalogs_branches_products_set_inventory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-branchesId"><code>branchesId</code></a>, <a href="#parameter-productsId"><code>productsId</code></a></td>
    <td></td>
    <td>Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.</td>
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
<tr id="parameter-branchesId">
    <td><CopyableCode code="branchesId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-productId">
    <td><CopyableCode code="productId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_catalogs_branches_products_get"
    values={[
        { label: 'projects_locations_catalogs_branches_products_get', value: 'projects_locations_catalogs_branches_products_get' },
        { label: 'projects_locations_catalogs_branches_products_list', value: 'projects_locations_catalogs_branches_products_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_get">

Gets a Product.

```sql
SELECT
id,
name,
attributes,
audience,
availability,
availableQuantity,
availableTime,
brands,
categories,
collectionMemberIds,
colorInfo,
conditions,
description,
expireTime,
fulfillmentInfo,
gtin,
images,
languageCode,
localInventories,
materials,
patterns,
priceInfo,
primaryProductId,
promotions,
publishTime,
rating,
retrievableFields,
sizes,
tags,
title,
ttl,
type,
uri,
variants
FROM google.retail.products
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND productsId = '{{ productsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_branches_products_list">

Gets a list of Products.

```sql
SELECT
nextPageToken,
products
FROM google.retail.products
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND branchesId = '{{ branchesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND readMask = '{{ readMask }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_branches_products_create"
    values={[
        { label: 'projects_locations_catalogs_branches_products_create', value: 'projects_locations_catalogs_branches_products_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_create">

Creates a Product.

```sql
INSERT INTO google.retail.products (
data__expireTime,
data__ttl,
data__name,
data__id,
data__type,
data__primaryProductId,
data__collectionMemberIds,
data__gtin,
data__categories,
data__title,
data__brands,
data__description,
data__languageCode,
data__attributes,
data__tags,
data__priceInfo,
data__rating,
data__availableTime,
data__availability,
data__availableQuantity,
data__fulfillmentInfo,
data__uri,
data__images,
data__audience,
data__colorInfo,
data__sizes,
data__materials,
data__patterns,
data__conditions,
data__promotions,
data__publishTime,
data__retrievableFields,
projectsId,
locationsId,
catalogsId,
branchesId,
productId
)
SELECT 
'{{ expireTime }}',
'{{ ttl }}',
'{{ name }}',
'{{ id }}',
'{{ type }}',
'{{ primaryProductId }}',
'{{ collectionMemberIds }}',
'{{ gtin }}',
'{{ categories }}',
'{{ title }}',
'{{ brands }}',
'{{ description }}',
'{{ languageCode }}',
'{{ attributes }}',
'{{ tags }}',
'{{ priceInfo }}',
'{{ rating }}',
'{{ availableTime }}',
'{{ availability }}',
{{ availableQuantity }},
'{{ fulfillmentInfo }}',
'{{ uri }}',
'{{ images }}',
'{{ audience }}',
'{{ colorInfo }}',
'{{ sizes }}',
'{{ materials }}',
'{{ patterns }}',
'{{ conditions }}',
'{{ promotions }}',
'{{ publishTime }}',
'{{ retrievableFields }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ branchesId }}',
'{{ productId }}'
RETURNING
id,
name,
attributes,
audience,
availability,
availableQuantity,
availableTime,
brands,
categories,
collectionMemberIds,
colorInfo,
conditions,
description,
expireTime,
fulfillmentInfo,
gtin,
images,
languageCode,
localInventories,
materials,
patterns,
priceInfo,
primaryProductId,
promotions,
publishTime,
rating,
retrievableFields,
sizes,
tags,
title,
ttl,
type,
uri,
variants
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: products
  props:
    - name: projectsId
      value: string
      description: Required parameter for the products resource.
    - name: locationsId
      value: string
      description: Required parameter for the products resource.
    - name: catalogsId
      value: string
      description: Required parameter for the products resource.
    - name: branchesId
      value: string
      description: Required parameter for the products resource.
    - name: expireTime
      value: string
      description: >
        Note that this field is applied in the following ways: * If the Product is already expired when it is uploaded, this product is not indexed for search. * If the Product is not expired when it is uploaded, only the Type.PRIMARY's and Type.COLLECTION's expireTime is respected, and Type.VARIANT's expireTime is not used. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499).
        
    - name: ttl
      value: string
      description: >
        Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts.
        
    - name: name
      value: string
      description: >
        Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
        
    - name: id
      value: string
      description: >
        Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku).
        
    - name: type
      value: string
      description: >
        Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset.
        
      valid_values: ['TYPE_UNSPECIFIED', 'PRIMARY', 'VARIANT', 'COLLECTION']
    - name: primaryProductId
      value: string
      description: >
        Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID).
        
    - name: collectionMemberIds
      value: array
      description: >
        The id of the collection members when type is Type.COLLECTION. Non-existent product ids are allowed. The type of the members must be either Type.PRIMARY or Type.VARIANT otherwise an INVALID_ARGUMENT error is thrown. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return.
        
    - name: gtin
      value: string
      description: >
        The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned.
        
    - name: categories
      value: array
      description: >
        Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories > Shoes", "Sports & Fitness > Athletic Clothing > Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product unless overridden through the Google Cloud console. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436
        
    - name: title
      value: string
      description: >
        Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).
        
    - name: brands
      value: array
      description: >
        The brands of the product. A maximum of 30 brands are allowed unless overridden through the Google Cloud console. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand).
        
    - name: description
      value: string
      description: >
        Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description).
        
    - name: languageCode
      value: string
      description: >
        Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset.
        
    - name: attributes
      value: object
      description: >
        Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]}, "lengths_cm": {"numbers":[2.3, 15.4]}, "heights_cm": {"numbers":[8.1, 6.4]} }`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed.
        
    - name: tags
      value: array
      description: >
        Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Corresponding properties: Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).
        
    - name: priceInfo
      value: object
      description: >
        Product price and cost information. Corresponding properties: Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).
        
    - name: rating
      value: object
      description: >
        The rating of this product.
        
    - name: availableTime
      value: string
      description: >
        The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT.
        
    - name: availability
      value: string
      description: >
        The online availability of the Product. Default to Availability.IN_STOCK. For primary products with variants set the availability of the primary as Availability.OUT_OF_STOCK and set the true availability at the variant level. This way the primary product will be considered "in stock" as long as it has at least one variant in stock. For primary products with no variants set the true availability at the primary level. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability).
        
      valid_values: ['AVAILABILITY_UNSPECIFIED', 'IN_STOCK', 'OUT_OF_STOCK', 'PREORDER', 'BACKORDER']
    - name: availableQuantity
      value: integer
      description: >
        The available quantity of the item.
        
    - name: fulfillmentInfo
      value: array
      description: >
        Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned.
        
    - name: uri
      value: string
      description: >
        Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).
        
    - name: images
      value: array
      description: >
        Product images for the product. We highly recommend putting the main image first. A maximum of 300 images are allowed. Corresponding properties: Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).
        
    - name: audience
      value: object
      description: >
        The target group associated with a given audience (e.g. male, veterans, car owners, musicians, etc.) of the product.
        
    - name: colorInfo
      value: object
      description: >
        The color of the product. Corresponding properties: Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).
        
    - name: sizes
      value: array
      description: >
        The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497), and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size).
        
    - name: materials
      value: array
      description: >
        The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 200 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material).
        
    - name: patterns
      value: array
      description: >
        The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern).
        
    - name: conditions
      value: array
      description: >
        The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 1 value is allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition).
        
    - name: promotions
      value: array
      description: >
        The promotions applied to the product. A maximum of 10 values are allowed per Product. Only Promotion.promotion_id will be used, other fields will be ignored if set.
        
    - name: publishTime
      value: string
      description: >
        The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation.
        
    - name: retrievableFields
      value: string
      description: >
        Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead.
        
    - name: productId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_branches_products_patch"
    values={[
        { label: 'projects_locations_catalogs_branches_products_patch', value: 'projects_locations_catalogs_branches_products_patch' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_patch">

Updates a Product.

```sql
UPDATE google.retail.products
SET 
data__expireTime = '{{ expireTime }}',
data__ttl = '{{ ttl }}',
data__name = '{{ name }}',
data__id = '{{ id }}',
data__type = '{{ type }}',
data__primaryProductId = '{{ primaryProductId }}',
data__collectionMemberIds = '{{ collectionMemberIds }}',
data__gtin = '{{ gtin }}',
data__categories = '{{ categories }}',
data__title = '{{ title }}',
data__brands = '{{ brands }}',
data__description = '{{ description }}',
data__languageCode = '{{ languageCode }}',
data__attributes = '{{ attributes }}',
data__tags = '{{ tags }}',
data__priceInfo = '{{ priceInfo }}',
data__rating = '{{ rating }}',
data__availableTime = '{{ availableTime }}',
data__availability = '{{ availability }}',
data__availableQuantity = {{ availableQuantity }},
data__fulfillmentInfo = '{{ fulfillmentInfo }}',
data__uri = '{{ uri }}',
data__images = '{{ images }}',
data__audience = '{{ audience }}',
data__colorInfo = '{{ colorInfo }}',
data__sizes = '{{ sizes }}',
data__materials = '{{ materials }}',
data__patterns = '{{ patterns }}',
data__conditions = '{{ conditions }}',
data__promotions = '{{ promotions }}',
data__publishTime = '{{ publishTime }}',
data__retrievableFields = '{{ retrievableFields }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND productsId = '{{ productsId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
id,
name,
attributes,
audience,
availability,
availableQuantity,
availableTime,
brands,
categories,
collectionMemberIds,
colorInfo,
conditions,
description,
expireTime,
fulfillmentInfo,
gtin,
images,
languageCode,
localInventories,
materials,
patterns,
priceInfo,
primaryProductId,
promotions,
publishTime,
rating,
retrievableFields,
sizes,
tags,
title,
ttl,
type,
uri,
variants;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_branches_products_delete"
    values={[
        { label: 'projects_locations_catalogs_branches_products_delete', value: 'projects_locations_catalogs_branches_products_delete' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_delete">

Deletes a Product.

```sql
DELETE FROM google.retail.products
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND branchesId = '{{ branchesId }}' --required
AND productsId = '{{ productsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_branches_products_purge"
    values={[
        { label: 'projects_locations_catalogs_branches_products_purge', value: 'projects_locations_catalogs_branches_products_purge' },
        { label: 'projects_locations_catalogs_branches_products_import', value: 'projects_locations_catalogs_branches_products_import' },
        { label: 'projects_locations_catalogs_branches_products_set_inventory', value: 'projects_locations_catalogs_branches_products_set_inventory' }
    ]}
>
<TabItem value="projects_locations_catalogs_branches_products_purge">

Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

```sql
EXEC google.retail.products.projects_locations_catalogs_branches_products_purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@branchesId='{{ branchesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_branches_products_import">

Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

```sql
EXEC google.retail.products.projects_locations_catalogs_branches_products_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@branchesId='{{ branchesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"inputConfig": "{{ inputConfig }}", 
"errorsConfig": "{{ errorsConfig }}", 
"updateMask": "{{ updateMask }}", 
"reconciliationMode": "{{ reconciliationMode }}", 
"notificationPubsubTopic": "{{ notificationPubsubTopic }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_branches_products_set_inventory">

Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

```sql
EXEC google.retail.products.projects_locations_catalogs_branches_products_set_inventory 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@branchesId='{{ branchesId }}' --required, 
@productsId='{{ productsId }}' --required 
@@json=
'{
"inventory": "{{ inventory }}", 
"setMask": "{{ setMask }}", 
"setTime": "{{ setTime }}", 
"allowMissing": {{ allowMissing }}
}';
```
</TabItem>
</Tabs>
