--- 
title: apiproducts
hide_title: false
hide_table_of_contents: false
keywords:
  - apiproducts
  - apigee
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

Creates, updates, deletes, gets or lists an <code>apiproducts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apiproducts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apiproducts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apiproducts_get"
    values={[
        { label: 'organizations_apiproducts_get', value: 'organizations_apiproducts_get' },
        { label: 'organizations_apiproducts_list', value: 'organizations_apiproducts_list' }
    ]}
>
<TabItem value="organizations_apiproducts_get">

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
    <td>Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product.</td>
</tr>
<tr>
    <td><CopyableCode code="apiResources" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products.</td>
</tr>
<tr>
    <td><CopyableCode code="approvalType" /></td>
    <td><code>string</code></td>
    <td>Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Response only. Creation time of this environment as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the API product. Include key information about the API product that is not captured by other fields.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Name displayed in the UI or developer portal to developers registering for API access.</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`.</td>
</tr>
<tr>
    <td><CopyableCode code="graphqlOperationGroup" /></td>
    <td><code>object</code></td>
    <td>Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type. (id: GoogleCloudApigeeV1GraphQLOperationGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="grpcOperationGroup" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC service. (id: GoogleCloudApigeeV1GrpcOperationGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Response only. Modified time of this environment as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="operationGroup" /></td>
    <td><code>object</code></td>
    <td>Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the `quota` setting). **Note:** The `api_resources` setting cannot be specified for both the API product and operation group; otherwise the call will fail. (id: GoogleCloudApigeeV1OperationGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="proxies" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>string</code></td>
    <td>Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaCounterScope" /></td>
    <td><code>string</code></td>
    <td>Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaInterval" /></td>
    <td><code>string</code></td>
    <td>Time interval over which the number of request messages is calculated.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaTimeUnit" /></td>
    <td><code>string</code></td>
    <td>Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.</td>
</tr>
<tr>
    <td><CopyableCode code="space" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. To learn how Spaces can be used to manage resources, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apiproducts_list">

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
    <td><CopyableCode code="apiProduct" /></td>
    <td><code>array</code></td>
    <td>Lists all API product names defined for an organization.</td>
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
    <td><a href="#organizations_apiproducts_get"><CopyableCode code="organizations_apiproducts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Gets configuration details for an API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_list"><CopyableCode code="organizations_apiproducts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-attributename"><code>attributename</code></a>, <a href="#parameter-attributevalue"><code>attributevalue</code></a>, <a href="#parameter-expand"><code>expand</code></a>, <a href="#parameter-startKey"><code>startKey</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-space"><code>space</code></a></td>
    <td>Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_create"><CopyableCode code="organizations_apiproducts_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_update"><CopyableCode code="organizations_apiproducts_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Updates an existing API product. You must include all required values, whether or not you are updating them, as well as any optional values that you are updating. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via UI or API. View the list of API products to identify their internal names.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_keys_apiproducts_delete"><CopyableCode code="organizations_appgroups_apps_keys_apiproducts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_delete"><CopyableCode code="organizations_apiproducts_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Deletes an API product from an organization. Deleting an API product causes app requests to the resource URIs defined in the API product to fail. Ensure that you create a new API product to serve existing apps, unless your intention is to disable access to the resources defined in the API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_move"><CopyableCode code="organizations_apiproducts_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Moves an API product to a different space.</td>
</tr>
<tr>
    <td><a href="#organizations_apiproducts_attributes"><CopyableCode code="organizations_apiproducts_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td></td>
    <td>Updates or creates API product attributes. This API **replaces** the current list of attributes with the attributes specified in the request body. In this way, you can update existing attributes, add new attributes, or delete existing attributes by omitting them from the request body. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product"><CopyableCode code="organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a>, <a href="#parameter-apiproductsId"><code>apiproductsId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.</td>
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
<tr id="parameter-apiproductsId">
    <td><CopyableCode code="apiproductsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appgroupsId">
    <td><CopyableCode code="appgroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-attributename">
    <td><CopyableCode code="attributename" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-attributevalue">
    <td><CopyableCode code="attributevalue" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-expand">
    <td><CopyableCode code="expand" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-space">
    <td><CopyableCode code="space" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-startKey">
    <td><CopyableCode code="startKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_apiproducts_get"
    values={[
        { label: 'organizations_apiproducts_get', value: 'organizations_apiproducts_get' },
        { label: 'organizations_apiproducts_list', value: 'organizations_apiproducts_list' }
    ]}
>
<TabItem value="organizations_apiproducts_get">

Gets configuration details for an API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.

```sql
SELECT
name,
apiResources,
approvalType,
attributes,
createdAt,
description,
displayName,
environments,
graphqlOperationGroup,
grpcOperationGroup,
lastModifiedAt,
operationGroup,
proxies,
quota,
quotaCounterScope,
quotaInterval,
quotaTimeUnit,
scopes,
space
FROM google.apigee.apiproducts
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apiproductsId = '{{ apiproductsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apiproducts_list">

Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).

```sql
SELECT
apiProduct
FROM google.apigee.apiproducts
WHERE organizationsId = '{{ organizationsId }}' -- required
AND attributename = '{{ attributename }}'
AND attributevalue = '{{ attributevalue }}'
AND expand = '{{ expand }}'
AND startKey = '{{ startKey }}'
AND count = '{{ count }}'
AND space = '{{ space }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_apiproducts_create"
    values={[
        { label: 'organizations_apiproducts_create', value: 'organizations_apiproducts_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_apiproducts_create">

Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?

```sql
INSERT INTO google.apigee.apiproducts (
data__name,
data__displayName,
data__approvalType,
data__attributes,
data__description,
data__apiResources,
data__environments,
data__proxies,
data__quota,
data__quotaInterval,
data__quotaTimeUnit,
data__scopes,
data__createdAt,
data__lastModifiedAt,
data__operationGroup,
data__graphqlOperationGroup,
data__grpcOperationGroup,
data__quotaCounterScope,
data__space,
organizationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ approvalType }}',
'{{ attributes }}',
'{{ description }}',
'{{ apiResources }}',
'{{ environments }}',
'{{ proxies }}',
'{{ quota }}',
'{{ quotaInterval }}',
'{{ quotaTimeUnit }}',
'{{ scopes }}',
'{{ createdAt }}',
'{{ lastModifiedAt }}',
'{{ operationGroup }}',
'{{ graphqlOperationGroup }}',
'{{ grpcOperationGroup }}',
'{{ quotaCounterScope }}',
'{{ space }}',
'{{ organizationsId }}'
RETURNING
name,
apiResources,
approvalType,
attributes,
createdAt,
description,
displayName,
environments,
graphqlOperationGroup,
grpcOperationGroup,
lastModifiedAt,
operationGroup,
proxies,
quota,
quotaCounterScope,
quotaInterval,
quotaTimeUnit,
scopes,
space
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apiproducts
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the apiproducts resource.
    - name: name
      value: string
      description: >
        Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product.
        
    - name: displayName
      value: string
      description: >
        Name displayed in the UI or developer portal to developers registering for API access.
        
    - name: approvalType
      value: string
      description: >
        Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities.
        
    - name: attributes
      value: array
      description: >
        Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers.
        
    - name: description
      value: string
      description: >
        Description of the API product. Include key information about the API product that is not captured by other fields.
        
    - name: apiResources
      value: array
      description: >
        Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products.
        
    - name: environments
      value: array
      description: >
        Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`.
        
    - name: proxies
      value: array
      description: >
        Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.
        
    - name: quota
      value: string
      description: >
        Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.
        
    - name: quotaInterval
      value: string
      description: >
        Time interval over which the number of request messages is calculated.
        
    - name: quotaTimeUnit
      value: string
      description: >
        Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`.
        
    - name: scopes
      value: array
      description: >
        Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.
        
    - name: createdAt
      value: string
      description: >
        Response only. Creation time of this environment as milliseconds since epoch.
        
    - name: lastModifiedAt
      value: string
      description: >
        Response only. Modified time of this environment as milliseconds since epoch.
        
    - name: operationGroup
      value: object
      description: >
        Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the `quota` setting). **Note:** The `api_resources` setting cannot be specified for both the API product and operation group; otherwise the call will fail.
        
    - name: graphqlOperationGroup
      value: object
      description: >
        Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.
        
    - name: grpcOperationGroup
      value: object
      description: >
        Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC service.
        
    - name: quotaCounterScope
      value: string
      description: >
        Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.
        
      valid_values: ['QUOTA_COUNTER_SCOPE_UNSPECIFIED', 'PROXY', 'OPERATION']
    - name: space
      value: string
      description: >
        Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. To learn how Spaces can be used to manage resources, read the [Apigee Spaces Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_apiproducts_update"
    values={[
        { label: 'organizations_apiproducts_update', value: 'organizations_apiproducts_update' }
    ]}
>
<TabItem value="organizations_apiproducts_update">

Updates an existing API product. You must include all required values, whether or not you are updating them, as well as any optional values that you are updating. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via UI or API. View the list of API products to identify their internal names.

```sql
REPLACE google.apigee.apiproducts
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__approvalType = '{{ approvalType }}',
data__attributes = '{{ attributes }}',
data__description = '{{ description }}',
data__apiResources = '{{ apiResources }}',
data__environments = '{{ environments }}',
data__proxies = '{{ proxies }}',
data__quota = '{{ quota }}',
data__quotaInterval = '{{ quotaInterval }}',
data__quotaTimeUnit = '{{ quotaTimeUnit }}',
data__scopes = '{{ scopes }}',
data__createdAt = '{{ createdAt }}',
data__lastModifiedAt = '{{ lastModifiedAt }}',
data__operationGroup = '{{ operationGroup }}',
data__graphqlOperationGroup = '{{ graphqlOperationGroup }}',
data__grpcOperationGroup = '{{ grpcOperationGroup }}',
data__quotaCounterScope = '{{ quotaCounterScope }}',
data__space = '{{ space }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required
RETURNING
name,
apiResources,
approvalType,
attributes,
createdAt,
description,
displayName,
environments,
graphqlOperationGroup,
grpcOperationGroup,
lastModifiedAt,
operationGroup,
proxies,
quota,
quotaCounterScope,
quotaInterval,
quotaTimeUnit,
scopes,
space;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_appgroups_apps_keys_apiproducts_delete"
    values={[
        { label: 'organizations_appgroups_apps_keys_apiproducts_delete', value: 'organizations_appgroups_apps_keys_apiproducts_delete' },
        { label: 'organizations_apiproducts_delete', value: 'organizations_apiproducts_delete' }
    ]}
>
<TabItem value="organizations_appgroups_apps_keys_apiproducts_delete">

Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.

```sql
DELETE FROM google.apigee.apiproducts
WHERE organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
AND appsId = '{{ appsId }}' --required
AND keysId = '{{ keysId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required;
```
</TabItem>
<TabItem value="organizations_apiproducts_delete">

Deletes an API product from an organization. Deleting an API product causes app requests to the resource URIs defined in the API product to fail. Ensure that you create a new API product to serve existing apps, unless your intention is to disable access to the resources defined in the API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.

```sql
DELETE FROM google.apigee.apiproducts
WHERE organizationsId = '{{ organizationsId }}' --required
AND apiproductsId = '{{ apiproductsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_apiproducts_move"
    values={[
        { label: 'organizations_apiproducts_move', value: 'organizations_apiproducts_move' },
        { label: 'organizations_apiproducts_attributes', value: 'organizations_apiproducts_attributes' },
        { label: 'organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product', value: 'organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product' }
    ]}
>
<TabItem value="organizations_apiproducts_move">

Moves an API product to a different space.

```sql
EXEC google.apigee.apiproducts.organizations_apiproducts_move 
@organizationsId='{{ organizationsId }}' --required, 
@apiproductsId='{{ apiproductsId }}' --required 
@@json=
'{
"space": "{{ space }}"
}';
```
</TabItem>
<TabItem value="organizations_apiproducts_attributes">

Updates or creates API product attributes. This API **replaces** the current list of attributes with the attributes specified in the request body. In this way, you can update existing attributes, add new attributes, or delete existing attributes by omitting them from the request body. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

```sql
EXEC google.apigee.apiproducts.organizations_apiproducts_attributes 
@organizationsId='{{ organizationsId }}' --required, 
@apiproductsId='{{ apiproductsId }}' --required 
@@json=
'{
"attribute": "{{ attribute }}"
}';
```
</TabItem>
<TabItem value="organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product">

Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.

```sql
EXEC google.apigee.apiproducts.organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product 
@organizationsId='{{ organizationsId }}' --required, 
@appgroupsId='{{ appgroupsId }}' --required, 
@appsId='{{ appsId }}' --required, 
@keysId='{{ keysId }}' --required, 
@apiproductsId='{{ apiproductsId }}' --required, 
@action='{{ action }}';
```
</TabItem>
</Tabs>
