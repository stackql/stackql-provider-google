--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_developers_apps_get"
    values={[
        { label: 'organizations_developers_apps_get', value: 'organizations_developers_apps_get' },
        { label: 'organizations_appgroups_apps_get', value: 'organizations_appgroups_apps_get' },
        { label: 'organizations_apps_get', value: 'organizations_apps_get' },
        { label: 'organizations_developers_apps_list', value: 'organizations_developers_apps_list' },
        { label: 'organizations_appgroups_apps_list', value: 'organizations_appgroups_apps_list' },
        { label: 'organizations_apps_list', value: 'organizations_apps_list' }
    ]}
>
<TabItem value="organizations_developers_apps_get">

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
    <td>Name of the developer app.</td>
</tr>
<tr>
    <td><CopyableCode code="apiProducts" /></td>
    <td><code>array</code></td>
    <td>List of API products associated with the developer app.</td>
</tr>
<tr>
    <td><CopyableCode code="appFamily" /></td>
    <td><code>string</code></td>
    <td>Developer app family.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>ID of the developer app. This ID is not user specified but is automatically generated on app creation. appId is a UUID.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>List of attributes for the developer app.</td>
</tr>
<tr>
    <td><CopyableCode code="callbackUrl" /></td>
    <td><code>string</code></td>
    <td>Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the developer app was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.</td>
</tr>
<tr>
    <td><CopyableCode code="developerId" /></td>
    <td><code>string</code></td>
    <td>ID of the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="keyExpiresIn" /></td>
    <td><code>string (int64)</code></td>
    <td>Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the developer app was modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the credential. Valid values include `approved` or `revoked`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_appgroups_apps_get">

Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp], [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp]

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
    <td>Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/*/appgroups/*/apps/*).</td>
</tr>
<tr>
    <td><CopyableCode code="apiProducts" /></td>
    <td><code>array</code></td>
    <td>List of API products associated with the AppGroup app.</td>
</tr>
<tr>
    <td><CopyableCode code="appGroup" /></td>
    <td><code>string</code></td>
    <td>Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*).</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>Immutable. ID of the AppGroup app.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>List of attributes for the AppGroup app.</td>
</tr>
<tr>
    <td><CopyableCode code="callbackUrl" /></td>
    <td><code>string</code></td>
    <td>Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the AppGroup app was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with the API products.</td>
</tr>
<tr>
    <td><CopyableCode code="keyExpiresIn" /></td>
    <td><code>string (int64)</code></td>
    <td>Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the AppGroup app was modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the App. Valid values include `approved` or `revoked`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apps_get">

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
    <td>Name of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="apiProducts" /></td>
    <td><code>array</code></td>
    <td>List of API products associated with the app.</td>
</tr>
<tr>
    <td><CopyableCode code="appGroup" /></td>
    <td><code>string</code></td>
    <td>Name of the AppGroup</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>ID of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>List of attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="callbackUrl" /></td>
    <td><code>string</code></td>
    <td>Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps.</td>
</tr>
<tr>
    <td><CopyableCode code="companyName" /></td>
    <td><code>string</code></td>
    <td>Name of the company that owns the app.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Unix time when the app was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products.</td>
</tr>
<tr>
    <td><CopyableCode code="developerEmail" /></td>
    <td><code>string</code></td>
    <td>Email of the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="developerId" /></td>
    <td><code>string</code></td>
    <td>ID of the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="keyExpiresIn" /></td>
    <td><code>string (int64)</code></td>
    <td>Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Last modified time as milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the credential.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_developers_apps_list">

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
    <td><CopyableCode code="app" /></td>
    <td><code>array</code></td>
    <td>List of developer apps and their credentials.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_appgroups_apps_list">

Response for ListAppGroupApps

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
    <td><CopyableCode code="appGroupApps" /></td>
    <td><code>array</code></td>
    <td>List of AppGroup apps and their credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apps_list">

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
    <td><CopyableCode code="app" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Total count of Apps.</td>
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
    <td><a href="#organizations_developers_apps_get"><CopyableCode code="organizations_developers_apps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td>Returns the details for a developer app.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_get"><CopyableCode code="organizations_appgroups_apps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Returns the details for an AppGroup app.</td>
</tr>
<tr>
    <td><a href="#organizations_apps_get"><CopyableCode code="organizations_apps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Gets the app profile for the specified app ID.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_list"><CopyableCode code="organizations_developers_apps_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td><a href="#parameter-expand"><code>expand</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-startKey"><code>startKey</code></a>, <a href="#parameter-shallowExpand"><code>shallowExpand</code></a></td>
    <td>Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_list"><CopyableCode code="organizations_appgroups_apps_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all apps created by an AppGroup in an Apigee organization. Optionally, you can request an expanded view of the AppGroup apps. Lists all AppGroupApps in an AppGroup. A maximum of 1000 AppGroup apps are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.</td>
</tr>
<tr>
    <td><a href="#organizations_apps_list"><CopyableCode code="organizations_apps_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-apptype"><code>apptype</code></a>, <a href="#parameter-includeCred"><code>includeCred</code></a>, <a href="#parameter-startKey"><code>startKey</code></a>, <a href="#parameter-rows"><code>rows</code></a>, <a href="#parameter-expand"><code>expand</code></a>, <a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-keyStatus"><code>keyStatus</code></a>, <a href="#parameter-apiProduct"><code>apiProduct</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_create"><CopyableCode code="organizations_developers_apps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_create"><CopyableCode code="organizations_appgroups_apps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td></td>
    <td>Creates an app and associates it with an AppGroup. This API associates the AppGroup app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_update"><CopyableCode code="organizations_developers_apps_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Updates the details for a developer app. In addition, you can add an API product to a developer app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateDeveloperAppKey API. Using this API, you cannot update the following: * App name as it is the primary key used to identify the app and cannot be changed. * Scopes associated with the app. Instead, use the ReplaceDeveloperAppKey API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_update"><CopyableCode code="organizations_appgroups_apps_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Updates the details for an AppGroup app. In addition, you can add an API product to an AppGroup app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateAppGroupAppKey API. Using this API, you cannot update the app name, as it is the primary key used to identify the app and cannot be changed. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_delete"><CopyableCode code="organizations_developers_apps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Deletes a developer app. **Note**: The delete operation is asynchronous. The developer app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_apps_delete"><CopyableCode code="organizations_appgroups_apps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Deletes an AppGroup app. **Note**: The delete operation is asynchronous. The AppGroup app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_generate_key_pair_or_update_developer_app_status"><CopyableCode code="organizations_developers_apps_generate_key_pair_or_update_developer_app_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Manages access to a developer app by enabling you to: * Approve or revoke a developer app * Generate a new consumer key and secret for a developer app To approve or revoke a developer app, set the `action` query parameter to `approve` or `revoke`, respectively, and the `Content-Type` header to `application/octet-stream`. If a developer app is revoked, none of its API keys are valid for API calls even though the keys are still approved. If successful, the API call returns the following HTTP status code: `204 No Content` To generate a new consumer key and secret for a developer app, pass the new key/secret details. Rather than replace an existing key, this API generates a new key. In this case, multiple key pairs may be associated with a single developer app. Each key pair has an independent status (`approve` or `revoke`) and expiration time. Any approved, non-expired key can be used in an API call. For example, if you're using API key rotation, you can generate new keys with expiration times that overlap keys that are going to expire. You might also generate a new consumer key/secret if the security of the original key/secret is compromised. The `keyExpiresIn` property defines the expiration time for the API key in milliseconds. If you don't set this property or set it to `-1`, the API key never expires. **Notes**: * When generating a new key/secret, this API replaces the existing attributes, notes, and callback URLs with those specified in the request. Include or exclude any existing information that you want to retain or delete, respectively. * To migrate existing consumer keys and secrets to hybrid from another system, see the CreateDeveloperAppKey API.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_apps_attributes"><CopyableCode code="organizations_developers_apps_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.</td>
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
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
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
<tr id="parameter-apiProduct">
    <td><CopyableCode code="apiProduct" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-apptype">
    <td><CopyableCode code="apptype" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-entity">
    <td><CopyableCode code="entity" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-expand">
    <td><CopyableCode code="expand" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeCred">
    <td><CopyableCode code="includeCred" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-keyStatus">
    <td><CopyableCode code="keyStatus" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rows">
    <td><CopyableCode code="rows" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-shallowExpand">
    <td><CopyableCode code="shallowExpand" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-startKey">
    <td><CopyableCode code="startKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_developers_apps_get"
    values={[
        { label: 'organizations_developers_apps_get', value: 'organizations_developers_apps_get' },
        { label: 'organizations_appgroups_apps_get', value: 'organizations_appgroups_apps_get' },
        { label: 'organizations_apps_get', value: 'organizations_apps_get' },
        { label: 'organizations_developers_apps_list', value: 'organizations_developers_apps_list' },
        { label: 'organizations_appgroups_apps_list', value: 'organizations_appgroups_apps_list' },
        { label: 'organizations_apps_list', value: 'organizations_apps_list' }
    ]}
>
<TabItem value="organizations_developers_apps_get">

Returns the details for a developer app.

```sql
SELECT
name,
apiProducts,
appFamily,
appId,
attributes,
callbackUrl,
createdAt,
credentials,
developerId,
keyExpiresIn,
lastModifiedAt,
scopes,
status
FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND query = '{{ query }}'
AND entity = '{{ entity }}';
```
</TabItem>
<TabItem value="organizations_appgroups_apps_get">

Returns the details for an AppGroup app.

```sql
SELECT
name,
apiProducts,
appGroup,
appId,
attributes,
callbackUrl,
createdAt,
credentials,
keyExpiresIn,
lastModifiedAt,
scopes,
status
FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appgroupsId = '{{ appgroupsId }}' -- required
AND appsId = '{{ appsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_apps_get">

Gets the app profile for the specified app ID.

```sql
SELECT
name,
apiProducts,
appGroup,
appId,
attributes,
callbackUrl,
companyName,
createdAt,
credentials,
developerEmail,
developerId,
keyExpiresIn,
lastModifiedAt,
scopes,
status
FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appsId = '{{ appsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_developers_apps_list">

Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.

```sql
SELECT
app
FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND expand = '{{ expand }}'
AND count = '{{ count }}'
AND startKey = '{{ startKey }}'
AND shallowExpand = '{{ shallowExpand }}';
```
</TabItem>
<TabItem value="organizations_appgroups_apps_list">

Lists all apps created by an AppGroup in an Apigee organization. Optionally, you can request an expanded view of the AppGroup apps. Lists all AppGroupApps in an AppGroup. A maximum of 1000 AppGroup apps are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.

```sql
SELECT
appGroupApps,
nextPageToken
FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appgroupsId = '{{ appgroupsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_apps_list">

Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).

```sql
SELECT
app,
nextPageToken,
totalSize
FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND status = '{{ status }}'
AND apptype = '{{ apptype }}'
AND includeCred = '{{ includeCred }}'
AND startKey = '{{ startKey }}'
AND rows = '{{ rows }}'
AND expand = '{{ expand }}'
AND ids = '{{ ids }}'
AND keyStatus = '{{ keyStatus }}'
AND apiProduct = '{{ apiProduct }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_developers_apps_create"
    values={[
        { label: 'organizations_developers_apps_create', value: 'organizations_developers_apps_create' },
        { label: 'organizations_appgroups_apps_create', value: 'organizations_appgroups_apps_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_developers_apps_create">

Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.

```sql
INSERT INTO google.apigee.apps (
data__appId,
data__attributes,
data__callbackUrl,
data__developerId,
data__name,
data__scopes,
data__status,
data__keyExpiresIn,
data__appFamily,
data__apiProducts,
organizationsId,
developersId
)
SELECT 
'{{ appId }}',
'{{ attributes }}',
'{{ callbackUrl }}',
'{{ developerId }}',
'{{ name }}',
'{{ scopes }}',
'{{ status }}',
'{{ keyExpiresIn }}',
'{{ appFamily }}',
'{{ apiProducts }}',
'{{ organizationsId }}',
'{{ developersId }}'
RETURNING
name,
apiProducts,
appFamily,
appId,
attributes,
callbackUrl,
createdAt,
credentials,
developerId,
keyExpiresIn,
lastModifiedAt,
scopes,
status
;
```
</TabItem>
<TabItem value="organizations_appgroups_apps_create">

Creates an app and associates it with an AppGroup. This API associates the AppGroup app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls.

```sql
INSERT INTO google.apigee.apps (
data__appId,
data__attributes,
data__callbackUrl,
data__name,
data__scopes,
data__status,
data__keyExpiresIn,
data__apiProducts,
data__appGroup,
organizationsId,
appgroupsId
)
SELECT 
'{{ appId }}',
'{{ attributes }}',
'{{ callbackUrl }}',
'{{ name }}',
'{{ scopes }}',
'{{ status }}',
'{{ keyExpiresIn }}',
'{{ apiProducts }}',
'{{ appGroup }}',
'{{ organizationsId }}',
'{{ appgroupsId }}'
RETURNING
name,
apiProducts,
appGroup,
appId,
attributes,
callbackUrl,
createdAt,
credentials,
keyExpiresIn,
lastModifiedAt,
scopes,
status
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apps
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the apps resource.
    - name: developersId
      value: string
      description: Required parameter for the apps resource.
    - name: appgroupsId
      value: string
      description: Required parameter for the apps resource.
    - name: appId
      value: string
      description: >
        Immutable. ID of the AppGroup app.
        
    - name: attributes
      value: array
      description: >
        List of attributes for the AppGroup app.
        
    - name: callbackUrl
      value: string
      description: >
        Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps.
        
    - name: developerId
      value: string
      description: >
        ID of the developer.
        
    - name: name
      value: string
      description: >
        Immutable. Name of the AppGroup app whose resource name format is of syntax (organizations/*/appgroups/*/apps/*).
        
    - name: scopes
      value: array
      description: >
        Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you associate with the AppGroup app.
        
    - name: status
      value: string
      description: >
        Status of the App. Valid values include `approved` or `revoked`.
        
    - name: keyExpiresIn
      value: string
      description: >
        Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.
        
    - name: appFamily
      value: string
      description: >
        Developer app family.
        
    - name: apiProducts
      value: array
      description: >
        List of API products associated with the AppGroup app.
        
    - name: appGroup
      value: string
      description: >
        Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*).
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_developers_apps_update"
    values={[
        { label: 'organizations_developers_apps_update', value: 'organizations_developers_apps_update' },
        { label: 'organizations_appgroups_apps_update', value: 'organizations_appgroups_apps_update' }
    ]}
>
<TabItem value="organizations_developers_apps_update">

Updates the details for a developer app. In addition, you can add an API product to a developer app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateDeveloperAppKey API. Using this API, you cannot update the following: * App name as it is the primary key used to identify the app and cannot be changed. * Scopes associated with the app. Instead, use the ReplaceDeveloperAppKey API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.

```sql
REPLACE google.apigee.apps
SET 
data__appId = '{{ appId }}',
data__attributes = '{{ attributes }}',
data__callbackUrl = '{{ callbackUrl }}',
data__developerId = '{{ developerId }}',
data__name = '{{ name }}',
data__scopes = '{{ scopes }}',
data__status = '{{ status }}',
data__keyExpiresIn = '{{ keyExpiresIn }}',
data__appFamily = '{{ appFamily }}',
data__apiProducts = '{{ apiProducts }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND appsId = '{{ appsId }}' --required
RETURNING
name,
apiProducts,
appFamily,
appId,
attributes,
callbackUrl,
createdAt,
credentials,
developerId,
keyExpiresIn,
lastModifiedAt,
scopes,
status;
```
</TabItem>
<TabItem value="organizations_appgroups_apps_update">

Updates the details for an AppGroup app. In addition, you can add an API product to an AppGroup app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateAppGroupAppKey API. Using this API, you cannot update the app name, as it is the primary key used to identify the app and cannot be changed. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively.

```sql
REPLACE google.apigee.apps
SET 
data__appId = '{{ appId }}',
data__attributes = '{{ attributes }}',
data__callbackUrl = '{{ callbackUrl }}',
data__name = '{{ name }}',
data__scopes = '{{ scopes }}',
data__status = '{{ status }}',
data__keyExpiresIn = '{{ keyExpiresIn }}',
data__apiProducts = '{{ apiProducts }}',
data__appGroup = '{{ appGroup }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
AND appsId = '{{ appsId }}' --required
AND action = '{{ action}}'
RETURNING
name,
apiProducts,
appGroup,
appId,
attributes,
callbackUrl,
createdAt,
credentials,
keyExpiresIn,
lastModifiedAt,
scopes,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_developers_apps_delete"
    values={[
        { label: 'organizations_developers_apps_delete', value: 'organizations_developers_apps_delete' },
        { label: 'organizations_appgroups_apps_delete', value: 'organizations_appgroups_apps_delete' }
    ]}
>
<TabItem value="organizations_developers_apps_delete">

Deletes a developer app. **Note**: The delete operation is asynchronous. The developer app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.

```sql
DELETE FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
AND appsId = '{{ appsId }}' --required;
```
</TabItem>
<TabItem value="organizations_appgroups_apps_delete">

Deletes an AppGroup app. **Note**: The delete operation is asynchronous. The AppGroup app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.

```sql
DELETE FROM google.apigee.apps
WHERE organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
AND appsId = '{{ appsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_developers_apps_generate_key_pair_or_update_developer_app_status"
    values={[
        { label: 'organizations_developers_apps_generate_key_pair_or_update_developer_app_status', value: 'organizations_developers_apps_generate_key_pair_or_update_developer_app_status' },
        { label: 'organizations_developers_apps_attributes', value: 'organizations_developers_apps_attributes' }
    ]}
>
<TabItem value="organizations_developers_apps_generate_key_pair_or_update_developer_app_status">

Manages access to a developer app by enabling you to: * Approve or revoke a developer app * Generate a new consumer key and secret for a developer app To approve or revoke a developer app, set the `action` query parameter to `approve` or `revoke`, respectively, and the `Content-Type` header to `application/octet-stream`. If a developer app is revoked, none of its API keys are valid for API calls even though the keys are still approved. If successful, the API call returns the following HTTP status code: `204 No Content` To generate a new consumer key and secret for a developer app, pass the new key/secret details. Rather than replace an existing key, this API generates a new key. In this case, multiple key pairs may be associated with a single developer app. Each key pair has an independent status (`approve` or `revoke`) and expiration time. Any approved, non-expired key can be used in an API call. For example, if you're using API key rotation, you can generate new keys with expiration times that overlap keys that are going to expire. You might also generate a new consumer key/secret if the security of the original key/secret is compromised. The `keyExpiresIn` property defines the expiration time for the API key in milliseconds. If you don't set this property or set it to `-1`, the API key never expires. **Notes**: * When generating a new key/secret, this API replaces the existing attributes, notes, and callback URLs with those specified in the request. Include or exclude any existing information that you want to retain or delete, respectively. * To migrate existing consumer keys and secrets to hybrid from another system, see the CreateDeveloperAppKey API.

```sql
EXEC google.apigee.apps.organizations_developers_apps_generate_key_pair_or_update_developer_app_status 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required, 
@appsId='{{ appsId }}' --required, 
@action='{{ action }}' 
@@json=
'{
"appId": "{{ appId }}", 
"attributes": "{{ attributes }}", 
"callbackUrl": "{{ callbackUrl }}", 
"developerId": "{{ developerId }}", 
"name": "{{ name }}", 
"scopes": "{{ scopes }}", 
"status": "{{ status }}", 
"keyExpiresIn": "{{ keyExpiresIn }}", 
"appFamily": "{{ appFamily }}", 
"apiProducts": "{{ apiProducts }}"
}';
```
</TabItem>
<TabItem value="organizations_developers_apps_attributes">

Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.

```sql
EXEC google.apigee.apps.organizations_developers_apps_attributes 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"attribute": "{{ attribute }}"
}';
```
</TabItem>
</Tabs>
