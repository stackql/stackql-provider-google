--- 
title: apidocs
hide_title: false
hide_table_of_contents: false
keywords:
  - apidocs
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

Creates, updates, deletes, gets or lists an <code>apidocs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apidocs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apidocs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_sites_apidocs_get"
    values={[
        { label: 'organizations_sites_apidocs_get', value: 'organizations_sites_apidocs_get' },
        { label: 'organizations_sites_apidocs_list', value: 'organizations_sites_apidocs_list' }
    ]}
>
<TabItem value="organizations_sites_apidocs_get">

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>The catalog item resource. (id: GoogleCloudApigeeV1ApiDoc)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Unique error code for the request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Description of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sites_apidocs_list">

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
    <td><code>string (int64)</code></td>
    <td>Output only. The ID of the catalog item.</td>
</tr>
<tr>
    <td><CopyableCode code="anonAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)). Additionally, when enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be updated in the management UI.</td>
</tr>
<tr>
    <td><CopyableCode code="apiProductName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The `name` field of the associated [API product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may have only one catalog item associated with a given API product.</td>
</tr>
<tr>
    <td><CopyableCode code="categoryIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The IDs of the API categories to which this catalog item belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the catalog item. Max length is 10,000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeAPIProductName" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. DEPRECATED: use the `apiProductName` field instead</td>
</tr>
<tr>
    <td><CopyableCode code="graphqlEndpointUrl" /></td>
    <td><code>string</code></td>
    <td>Optional. DEPRECATED: manage documentation through the `getDocumentation` and `updateDocumentation` methods</td>
</tr>
<tr>
    <td><CopyableCode code="graphqlSchema" /></td>
    <td><code>string</code></td>
    <td>Optional. DEPRECATED: manage documentation through the `getDocumentation` and `updateDocumentation` methods</td>
</tr>
<tr>
    <td><CopyableCode code="graphqlSchemaDisplayName" /></td>
    <td><code>string</code></td>
    <td>Optional. DEPRECATED: manage documentation through the `getDocumentation` and `updateDocumentation` methods</td>
</tr>
<tr>
    <td><CopyableCode code="imageUrl" /></td>
    <td><code>string</code></td>
    <td>Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an external URL or a file path for [image files stored in the portal](/apigee/docs/api-platform/publish/portal/portal-files"), for example, `/files/book-tree.jpg`. When specifying the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the integrated portal will be subject to its availability, which may be blocked or restricted by [content security policies](/apigee/docs/api-platform/publish/portal/csp). Max length of file path is 2,083 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the catalog item was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="published" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is managed by the `anonAllowed` flag.</td>
</tr>
<tr>
    <td><CopyableCode code="requireCallbackUrl" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's OAuth flow).</td>
</tr>
<tr>
    <td><CopyableCode code="siteId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the parent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="specId" /></td>
    <td><code>string</code></td>
    <td>Optional. DEPRECATED: DO NOT USE</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Required. The user-facing name of the catalog item. `title` must be a non-empty string with a max length of 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>boolean</code></td>
    <td>Optional. DEPRECATED: use the `published` field instead</td>
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
    <td><a href="#organizations_sites_apidocs_get"><CopyableCode code="organizations_sites_apidocs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apidocsId"><code>apidocsId</code></a></td>
    <td></td>
    <td>Gets a catalog item.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apidocs_list"><CopyableCode code="organizations_sites_apidocs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the catalog items associated with a portal.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apidocs_create"><CopyableCode code="organizations_sites_apidocs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a></td>
    <td></td>
    <td>Creates a new catalog item.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apidocs_update"><CopyableCode code="organizations_sites_apidocs_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apidocsId"><code>apidocsId</code></a></td>
    <td></td>
    <td>Updates a catalog item.</td>
</tr>
<tr>
    <td><a href="#organizations_sites_apidocs_delete"><CopyableCode code="organizations_sites_apidocs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sitesId"><code>sitesId</code></a>, <a href="#parameter-apidocsId"><code>apidocsId</code></a></td>
    <td></td>
    <td>Deletes a catalog item.</td>
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
<tr id="parameter-apidocsId">
    <td><CopyableCode code="apidocsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sitesId">
    <td><CopyableCode code="sitesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_sites_apidocs_get"
    values={[
        { label: 'organizations_sites_apidocs_get', value: 'organizations_sites_apidocs_get' },
        { label: 'organizations_sites_apidocs_list', value: 'organizations_sites_apidocs_list' }
    ]}
>
<TabItem value="organizations_sites_apidocs_get">

Gets a catalog item.

```sql
SELECT
data,
errorCode,
message,
requestId,
status
FROM google.apigee.apidocs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sitesId = '{{ sitesId }}' -- required
AND apidocsId = '{{ apidocsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_sites_apidocs_list">

Returns the catalog items associated with a portal.

```sql
SELECT
id,
anonAllowed,
apiProductName,
categoryIds,
description,
edgeAPIProductName,
graphqlEndpointUrl,
graphqlSchema,
graphqlSchemaDisplayName,
imageUrl,
modified,
published,
requireCallbackUrl,
siteId,
specId,
title,
visibility
FROM google.apigee.apidocs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sitesId = '{{ sitesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_sites_apidocs_create"
    values={[
        { label: 'organizations_sites_apidocs_create', value: 'organizations_sites_apidocs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_sites_apidocs_create">

Creates a new catalog item.

```sql
INSERT INTO google.apigee.apidocs (
data__title,
data__description,
data__published,
data__anonAllowed,
data__apiProductName,
data__requireCallbackUrl,
data__imageUrl,
data__categoryIds,
data__visibility,
data__edgeAPIProductName,
data__specId,
data__graphqlSchema,
data__graphqlEndpointUrl,
data__graphqlSchemaDisplayName,
organizationsId,
sitesId
)
SELECT 
'{{ title }}',
'{{ description }}',
{{ published }},
{{ anonAllowed }},
'{{ apiProductName }}',
{{ requireCallbackUrl }},
'{{ imageUrl }}',
'{{ categoryIds }}',
{{ visibility }},
'{{ edgeAPIProductName }}',
'{{ specId }}',
'{{ graphqlSchema }}',
'{{ graphqlEndpointUrl }}',
'{{ graphqlSchemaDisplayName }}',
'{{ organizationsId }}',
'{{ sitesId }}'
RETURNING
data,
errorCode,
message,
requestId,
status
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: apidocs
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the apidocs resource.
    - name: sitesId
      value: string
      description: Required parameter for the apidocs resource.
    - name: title
      value: string
      description: >
        Required. The user-facing name of the catalog item. `title` must be a non-empty string with a max length of 255 characters.
        
    - name: description
      value: string
      description: >
        Optional. Description of the catalog item. Max length is 10,000 characters.
        
    - name: published
      value: boolean
      description: >
        Optional. Denotes whether the catalog item is published to the portal or is in a draft state. When the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), the visibility can be set to public on creation by setting the anonAllowed flag to true or further managed in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)) before it can be visible to any users. If not enrolled in the audience management feature, the visibility is managed by the `anonAllowed` flag.
        
    - name: anonAllowed
      value: boolean
      description: >
        Optional. Boolean flag that manages user access to the catalog item. When true, the catalog item has public visibility and can be viewed anonymously; otherwise, only registered users may view it. Note: when the parent portal is enrolled in the [audience management feature](https://cloud.google.com/apigee/docs/api-platform/publish/portal/portal-audience#enrolling_in_the_beta_release_of_the_audience_management_feature), and this flag is set to false, visibility is set to an indeterminate state and must be explicitly specified in the management UI (see [Manage the visibility of an API in your portal](https://cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis#visibility)). Additionally, when enrolled in the audience management feature, updates to this flag will be ignored as visibility permissions must be updated in the management UI.
        
    - name: apiProductName
      value: string
      description: >
        Required. Immutable. The `name` field of the associated [API product](/apigee/docs/reference/apis/apigee/rest/v1/organizations.apiproducts). A portal may have only one catalog item associated with a given API product.
        
    - name: requireCallbackUrl
      value: boolean
      description: >
        Optional. Whether a callback URL is required when this catalog item's API product is enabled in a developer app. When true, a portal user will be required to input a URL when managing the app (this is typically used for the app's OAuth flow).
        
    - name: imageUrl
      value: string
      description: >
        Optional. Location of the image used for the catalog item in the catalog. This can be either an image with an external URL or a file path for [image files stored in the portal](/apigee/docs/api-platform/publish/portal/portal-files"), for example, `/files/book-tree.jpg`. When specifying the URL of an external image, the image won't be uploaded to your assets; additionally, loading the image in the integrated portal will be subject to its availability, which may be blocked or restricted by [content security policies](/apigee/docs/api-platform/publish/portal/csp). Max length of file path is 2,083 characters.
        
    - name: categoryIds
      value: array
      description: >
        Optional. The IDs of the API categories to which this catalog item belongs.
        
    - name: visibility
      value: boolean
      description: >
        Optional. DEPRECATED: use the `published` field instead
        
    - name: edgeAPIProductName
      value: string
      description: >
        Optional. Immutable. DEPRECATED: use the `apiProductName` field instead
        
    - name: specId
      value: string
      description: >
        Optional. DEPRECATED: DO NOT USE
        
    - name: graphqlSchema
      value: string
      description: >
        Optional. DEPRECATED: manage documentation through the `getDocumentation` and `updateDocumentation` methods
        
    - name: graphqlEndpointUrl
      value: string
      description: >
        Optional. DEPRECATED: manage documentation through the `getDocumentation` and `updateDocumentation` methods
        
    - name: graphqlSchemaDisplayName
      value: string
      description: >
        Optional. DEPRECATED: manage documentation through the `getDocumentation` and `updateDocumentation` methods
        
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_sites_apidocs_update"
    values={[
        { label: 'organizations_sites_apidocs_update', value: 'organizations_sites_apidocs_update' }
    ]}
>
<TabItem value="organizations_sites_apidocs_update">

Updates a catalog item.

```sql
REPLACE google.apigee.apidocs
SET 
data__title = '{{ title }}',
data__description = '{{ description }}',
data__published = {{ published }},
data__anonAllowed = {{ anonAllowed }},
data__apiProductName = '{{ apiProductName }}',
data__requireCallbackUrl = {{ requireCallbackUrl }},
data__imageUrl = '{{ imageUrl }}',
data__categoryIds = '{{ categoryIds }}',
data__visibility = {{ visibility }},
data__edgeAPIProductName = '{{ edgeAPIProductName }}',
data__specId = '{{ specId }}',
data__graphqlSchema = '{{ graphqlSchema }}',
data__graphqlEndpointUrl = '{{ graphqlEndpointUrl }}',
data__graphqlSchemaDisplayName = '{{ graphqlSchemaDisplayName }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sitesId = '{{ sitesId }}' --required
AND apidocsId = '{{ apidocsId }}' --required
RETURNING
data,
errorCode,
message,
requestId,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_sites_apidocs_delete"
    values={[
        { label: 'organizations_sites_apidocs_delete', value: 'organizations_sites_apidocs_delete' }
    ]}
>
<TabItem value="organizations_sites_apidocs_delete">

Deletes a catalog item.

```sql
DELETE FROM google.apigee.apidocs
WHERE organizationsId = '{{ organizationsId }}' --required
AND sitesId = '{{ sitesId }}' --required
AND apidocsId = '{{ apidocsId }}' --required;
```
</TabItem>
</Tabs>
