--- 
title: serving_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - serving_configs
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

Creates, updates, deletes, gets or lists a <code>serving_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>serving_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.serving_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_get"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_get', value: 'projects_locations_catalogs_serving_configs_get' },
        { label: 'projects_locations_catalogs_serving_configs_list', value: 'projects_locations_catalogs_serving_configs_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_get">

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
    <td>Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityType" /></td>
    <td><code>string</code></td>
    <td>What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.</td>
</tr>
<tr>
    <td><CopyableCode code="doNotAssociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="dynamicFacetSpec" /></td>
    <td><code>object</code></td>
    <td>The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. (id: GoogleCloudRetailV2SearchRequestDynamicFacetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="enableCategoryFilterLevel" /></td>
    <td><code>string</code></td>
    <td>Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="facetControlIds" /></td>
    <td><code>array</code></td>
    <td>Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreRecsDenylist" /></td>
    <td><code>boolean</code></td>
    <td>When the flag is enabled, the products in the denylist will not be filtered out in the recommendation filtering results.</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="personalizationSpec" /></td>
    <td><code>object</code></td>
    <td>The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec. (id: GoogleCloudRetailV2SearchRequestPersonalizationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="priceRerankingLevel" /></td>
    <td><code>string</code></td>
    <td>How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionTypes" /></td>
    <td><code>array</code></td>
    <td>Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.</td>
</tr>
<tr>
    <td><CopyableCode code="twowaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_catalogs_serving_configs_list">

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
    <td>Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityType" /></td>
    <td><code>string</code></td>
    <td>What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.</td>
</tr>
<tr>
    <td><CopyableCode code="doNotAssociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="dynamicFacetSpec" /></td>
    <td><code>object</code></td>
    <td>The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. (id: GoogleCloudRetailV2SearchRequestDynamicFacetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="enableCategoryFilterLevel" /></td>
    <td><code>string</code></td>
    <td>Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="facetControlIds" /></td>
    <td><code>array</code></td>
    <td>Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreRecsDenylist" /></td>
    <td><code>boolean</code></td>
    <td>When the flag is enabled, the products in the denylist will not be filtered out in the recommendation filtering results.</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="personalizationSpec" /></td>
    <td><code>object</code></td>
    <td>The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec. (id: GoogleCloudRetailV2SearchRequestPersonalizationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="priceRerankingLevel" /></td>
    <td><code>string</code></td>
    <td>How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionTypes" /></td>
    <td><code>array</code></td>
    <td>Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.</td>
</tr>
<tr>
    <td><CopyableCode code="twowaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.</td>
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
    <td><a href="#projects_locations_catalogs_serving_configs_get"><CopyableCode code="projects_locations_catalogs_serving_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_list"><CopyableCode code="projects_locations_catalogs_serving_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all ServingConfigs linked to this catalog.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_create"><CopyableCode code="projects_locations_catalogs_serving_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a></td>
    <td><a href="#parameter-servingConfigId"><code>servingConfigId</code></a></td>
    <td>Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_patch"><CopyableCode code="projects_locations_catalogs_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_delete"><CopyableCode code="projects_locations_catalogs_serving_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_search"><CopyableCode code="projects_locations_catalogs_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_serving_configs_predict"><CopyableCode code="projects_locations_catalogs_serving_configs_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation prediction.</td>
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
<tr id="parameter-servingConfigsId">
    <td><CopyableCode code="servingConfigsId" /></td>
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
<tr id="parameter-servingConfigId">
    <td><CopyableCode code="servingConfigId" /></td>
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
    defaultValue="projects_locations_catalogs_serving_configs_get"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_get', value: 'projects_locations_catalogs_serving_configs_get' },
        { label: 'projects_locations_catalogs_serving_configs_list', value: 'projects_locations_catalogs_serving_configs_list' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_get">

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

```sql
SELECT
name,
boostControlIds,
displayName,
diversityLevel,
diversityType,
doNotAssociateControlIds,
dynamicFacetSpec,
enableCategoryFilterLevel,
facetControlIds,
filterControlIds,
ignoreControlIds,
ignoreRecsDenylist,
modelId,
onewaySynonymsControlIds,
personalizationSpec,
priceRerankingLevel,
redirectControlIds,
replacementControlIds,
solutionTypes,
twowaySynonymsControlIds
FROM google.retail.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND servingConfigsId = '{{ servingConfigsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_catalogs_serving_configs_list">

Lists all ServingConfigs linked to this catalog.

```sql
SELECT
name,
boostControlIds,
displayName,
diversityLevel,
diversityType,
doNotAssociateControlIds,
dynamicFacetSpec,
enableCategoryFilterLevel,
facetControlIds,
filterControlIds,
ignoreControlIds,
ignoreRecsDenylist,
modelId,
onewaySynonymsControlIds,
personalizationSpec,
priceRerankingLevel,
redirectControlIds,
replacementControlIds,
solutionTypes,
twowaySynonymsControlIds
FROM google.retail.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND catalogsId = '{{ catalogsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_create"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_create', value: 'projects_locations_catalogs_serving_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_create">

Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.

```sql
INSERT INTO google.retail.serving_configs (
data__name,
data__displayName,
data__modelId,
data__priceRerankingLevel,
data__facetControlIds,
data__dynamicFacetSpec,
data__boostControlIds,
data__filterControlIds,
data__redirectControlIds,
data__twowaySynonymsControlIds,
data__onewaySynonymsControlIds,
data__doNotAssociateControlIds,
data__replacementControlIds,
data__ignoreControlIds,
data__diversityLevel,
data__diversityType,
data__enableCategoryFilterLevel,
data__ignoreRecsDenylist,
data__personalizationSpec,
data__solutionTypes,
projectsId,
locationsId,
catalogsId,
servingConfigId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ modelId }}',
'{{ priceRerankingLevel }}',
'{{ facetControlIds }}',
'{{ dynamicFacetSpec }}',
'{{ boostControlIds }}',
'{{ filterControlIds }}',
'{{ redirectControlIds }}',
'{{ twowaySynonymsControlIds }}',
'{{ onewaySynonymsControlIds }}',
'{{ doNotAssociateControlIds }}',
'{{ replacementControlIds }}',
'{{ ignoreControlIds }}',
'{{ diversityLevel }}',
'{{ diversityType }}',
'{{ enableCategoryFilterLevel }}',
{{ ignoreRecsDenylist }},
'{{ personalizationSpec }}',
'{{ solutionTypes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ catalogsId }}',
'{{ servingConfigId }}'
RETURNING
name,
boostControlIds,
displayName,
diversityLevel,
diversityType,
doNotAssociateControlIds,
dynamicFacetSpec,
enableCategoryFilterLevel,
facetControlIds,
filterControlIds,
ignoreControlIds,
ignoreRecsDenylist,
modelId,
onewaySynonymsControlIds,
personalizationSpec,
priceRerankingLevel,
redirectControlIds,
replacementControlIds,
solutionTypes,
twowaySynonymsControlIds
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: serving_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the serving_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the serving_configs resource.
    - name: catalogsId
      value: string
      description: Required parameter for the serving_configs resource.
    - name: name
      value: string
      description: >
        Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`
        
    - name: displayName
      value: string
      description: >
        Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
        
    - name: modelId
      value: string
      description: >
        The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.
        
    - name: priceRerankingLevel
      value: string
      description: >
        How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.
        
    - name: facetControlIds
      value: array
      description: >
        Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: dynamicFacetSpec
      value: object
      description: >
        The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: boostControlIds
      value: array
      description: >
        Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: filterControlIds
      value: array
      description: >
        Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: redirectControlIds
      value: array
      description: >
        Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: twowaySynonymsControlIds
      value: array
      description: >
        Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: onewaySynonymsControlIds
      value: array
      description: >
        Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: doNotAssociateControlIds
      value: array
      description: >
        Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: replacementControlIds
      value: array
      description: >
        Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: ignoreControlIds
      value: array
      description: >
        Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
        
    - name: diversityLevel
      value: string
      description: >
        How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.
        
    - name: diversityType
      value: string
      description: >
        What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.
        
      valid_values: ['DIVERSITY_TYPE_UNSPECIFIED', 'RULE_BASED_DIVERSITY', 'DATA_DRIVEN_DIVERSITY']
    - name: enableCategoryFilterLevel
      value: string
      description: >
        Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.
        
    - name: ignoreRecsDenylist
      value: boolean
      description: >
        When the flag is enabled, the products in the denylist will not be filtered out in the recommendation filtering results.
        
    - name: personalizationSpec
      value: object
      description: >
        The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.
        
    - name: solutionTypes
      value: array
      description: >
        Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.
        
    - name: servingConfigId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_patch"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_patch', value: 'projects_locations_catalogs_serving_configs_patch' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_patch">

Updates a ServingConfig.

```sql
UPDATE google.retail.serving_configs
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__modelId = '{{ modelId }}',
data__priceRerankingLevel = '{{ priceRerankingLevel }}',
data__facetControlIds = '{{ facetControlIds }}',
data__dynamicFacetSpec = '{{ dynamicFacetSpec }}',
data__boostControlIds = '{{ boostControlIds }}',
data__filterControlIds = '{{ filterControlIds }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__twowaySynonymsControlIds = '{{ twowaySynonymsControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__doNotAssociateControlIds = '{{ doNotAssociateControlIds }}',
data__replacementControlIds = '{{ replacementControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__diversityLevel = '{{ diversityLevel }}',
data__diversityType = '{{ diversityType }}',
data__enableCategoryFilterLevel = '{{ enableCategoryFilterLevel }}',
data__ignoreRecsDenylist = {{ ignoreRecsDenylist }},
data__personalizationSpec = '{{ personalizationSpec }}',
data__solutionTypes = '{{ solutionTypes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
boostControlIds,
displayName,
diversityLevel,
diversityType,
doNotAssociateControlIds,
dynamicFacetSpec,
enableCategoryFilterLevel,
facetControlIds,
filterControlIds,
ignoreControlIds,
ignoreRecsDenylist,
modelId,
onewaySynonymsControlIds,
personalizationSpec,
priceRerankingLevel,
redirectControlIds,
replacementControlIds,
solutionTypes,
twowaySynonymsControlIds;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_delete"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_delete', value: 'projects_locations_catalogs_serving_configs_delete' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_delete">

Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

```sql
DELETE FROM google.retail.serving_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND catalogsId = '{{ catalogsId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_serving_configs_search"
    values={[
        { label: 'projects_locations_catalogs_serving_configs_search', value: 'projects_locations_catalogs_serving_configs_search' },
        { label: 'projects_locations_catalogs_serving_configs_predict', value: 'projects_locations_catalogs_serving_configs_predict' }
    ]}
>
<TabItem value="projects_locations_catalogs_serving_configs_search">

Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

```sql
EXEC google.retail.serving_configs.projects_locations_catalogs_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"query": "{{ query }}", 
"visitorId": "{{ visitorId }}", 
"userInfo": "{{ userInfo }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"offset": {{ offset }}, 
"filter": "{{ filter }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"orderBy": "{{ orderBy }}", 
"facetSpecs": "{{ facetSpecs }}", 
"dynamicFacetSpec": "{{ dynamicFacetSpec }}", 
"boostSpec": "{{ boostSpec }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"variantRollupKeys": "{{ variantRollupKeys }}", 
"pageCategories": "{{ pageCategories }}", 
"searchMode": "{{ searchMode }}", 
"personalizationSpec": "{{ personalizationSpec }}", 
"labels": "{{ labels }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"entity": "{{ entity }}", 
"conversationalSearchSpec": "{{ conversationalSearchSpec }}", 
"tileNavigationSpec": "{{ tileNavigationSpec }}", 
"languageCode": "{{ languageCode }}", 
"regionCode": "{{ regionCode }}", 
"placeId": "{{ placeId }}", 
"userAttributes": "{{ userAttributes }}"
}';
```
</TabItem>
<TabItem value="projects_locations_catalogs_serving_configs_predict">

Makes a recommendation prediction.

```sql
EXEC google.retail.serving_configs.projects_locations_catalogs_serving_configs_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userEvent": "{{ userEvent }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
</Tabs>
