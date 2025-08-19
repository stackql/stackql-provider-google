--- 
title: authorized_orgs_descs
hide_title: false
hide_table_of_contents: false
keywords:
  - authorized_orgs_descs
  - accesscontextmanager
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

Creates, updates, deletes, gets or lists an <code>authorized_orgs_descs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>authorized_orgs_descs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accesscontextmanager.authorized_orgs_descs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

`AuthorizedOrgsDesc` contains data for an organization's authorization policy.

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
    <td>Identifier. Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/&#123;access_policy&#125;/authorizedOrgsDescs/&#123;authorized_orgs_desc&#125;`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`.</td>
</tr>
<tr>
    <td><CopyableCode code="assetType" /></td>
    <td><code>string</code></td>
    <td>The asset type of this authorized orgs desc. Valid values are `ASSET_TYPE_DEVICE`, and `ASSET_TYPE_CREDENTIAL_STRENGTH`.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationDirection" /></td>
    <td><code>string</code></td>
    <td>The direction of the authorization relationship between this organization and the organizations listed in the `orgs` field. The valid values for this field include the following: `AUTHORIZATION_DIRECTION_FROM`: Allows this organization to evaluate traffic in the organizations listed in the `orgs` field. `AUTHORIZATION_DIRECTION_TO`: Allows the organizations listed in the `orgs` field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying `AUTHORIZATION_DIRECTION_TO` as the authorization direction, organizations B and C must specify `AUTHORIZATION_DIRECTION_FROM` as the authorization direction in their `AuthorizedOrgsDesc` resource.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationType" /></td>
    <td><code>string</code></td>
    <td>A granular control type for authorization levels. Valid value is `AUTHORIZATION_TYPE_TRUST`.</td>
</tr>
<tr>
    <td><CopyableCode code="orgs" /></td>
    <td><code>array</code></td>
    <td>The list of organization ids in this AuthorizedOrgsDesc. Format: `organizations/` Example: `organizations/123456`</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A response to `ListAuthorizedOrgsDescsRequest`.

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
    <td><CopyableCode code="authorizedOrgsDescs" /></td>
    <td><code>array</code></td>
    <td>List of all the Authorized Orgs Desc instances.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to retrieve the next page of results. If the value is empty, no further results remain.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-authorizedOrgsDescsId"><code>authorizedOrgsDescsId</code></a></td>
    <td></td>
    <td>Gets an authorized orgs desc based on the resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all authorized orgs descs for an access policy.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a></td>
    <td></td>
    <td>Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-authorizedOrgsDescsId"><code>authorizedOrgsDescsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. Only the organization list in `AuthorizedOrgsDesc` can be updated. The name, authorization_type, asset_type and authorization_direction cannot be updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-authorizedOrgsDescsId"><code>authorizedOrgsDescsId</code></a></td>
    <td></td>
    <td>Deletes an authorized orgs desc based on the resource name. The long-running operation from this RPC has a successful status after the authorized orgs desc is removed from long-lasting storage.</td>
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
<tr id="parameter-accessPoliciesId">
    <td><CopyableCode code="accessPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-authorizedOrgsDescsId">
    <td><CopyableCode code="authorizedOrgsDescsId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets an authorized orgs desc based on the resource name.

```sql
SELECT
name,
assetType,
authorizationDirection,
authorizationType,
orgs
FROM google.accesscontextmanager.authorized_orgs_descs
WHERE accessPoliciesId = '{{ accessPoliciesId }}' -- required
AND authorizedOrgsDescsId = '{{ authorizedOrgsDescsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all authorized orgs descs for an access policy.

```sql
SELECT
authorizedOrgsDescs,
nextPageToken
FROM google.accesscontextmanager.authorized_orgs_descs
WHERE accessPoliciesId = '{{ accessPoliciesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.

```sql
INSERT INTO google.accesscontextmanager.authorized_orgs_descs (
data__name,
data__authorizationType,
data__assetType,
data__authorizationDirection,
data__orgs,
accessPoliciesId
)
SELECT 
'{{ name }}',
'{{ authorizationType }}',
'{{ assetType }}',
'{{ authorizationDirection }}',
'{{ orgs }}',
'{{ accessPoliciesId }}'
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
- name: authorized_orgs_descs
  props:
    - name: accessPoliciesId
      value: string
      description: Required parameter for the authorized_orgs_descs resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`.
        
    - name: authorizationType
      value: string
      description: >
        A granular control type for authorization levels. Valid value is `AUTHORIZATION_TYPE_TRUST`.
        
      valid_values: ['AUTHORIZATION_TYPE_UNSPECIFIED', 'AUTHORIZATION_TYPE_TRUST']
    - name: assetType
      value: string
      description: >
        The asset type of this authorized orgs desc. Valid values are `ASSET_TYPE_DEVICE`, and `ASSET_TYPE_CREDENTIAL_STRENGTH`.
        
      valid_values: ['ASSET_TYPE_UNSPECIFIED', 'ASSET_TYPE_DEVICE', 'ASSET_TYPE_CREDENTIAL_STRENGTH']
    - name: authorizationDirection
      value: string
      description: >
        The direction of the authorization relationship between this organization and the organizations listed in the `orgs` field. The valid values for this field include the following: `AUTHORIZATION_DIRECTION_FROM`: Allows this organization to evaluate traffic in the organizations listed in the `orgs` field. `AUTHORIZATION_DIRECTION_TO`: Allows the organizations listed in the `orgs` field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying `AUTHORIZATION_DIRECTION_TO` as the authorization direction, organizations B and C must specify `AUTHORIZATION_DIRECTION_FROM` as the authorization direction in their `AuthorizedOrgsDesc` resource.
        
      valid_values: ['AUTHORIZATION_DIRECTION_UNSPECIFIED', 'AUTHORIZATION_DIRECTION_TO', 'AUTHORIZATION_DIRECTION_FROM']
    - name: orgs
      value: array
      description: >
        The list of organization ids in this AuthorizedOrgsDesc. Format: `organizations/` Example: `organizations/123456`
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. Only the organization list in `AuthorizedOrgsDesc` can be updated. The name, authorization_type, asset_type and authorization_direction cannot be updated.

```sql
UPDATE google.accesscontextmanager.authorized_orgs_descs
SET 
data__name = '{{ name }}',
data__authorizationType = '{{ authorizationType }}',
data__assetType = '{{ assetType }}',
data__authorizationDirection = '{{ authorizationDirection }}',
data__orgs = '{{ orgs }}'
WHERE 
accessPoliciesId = '{{ accessPoliciesId }}' --required
AND authorizedOrgsDescsId = '{{ authorizedOrgsDescsId }}' --required
AND updateMask = '{{ updateMask}}'
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an authorized orgs desc based on the resource name. The long-running operation from this RPC has a successful status after the authorized orgs desc is removed from long-lasting storage.

```sql
DELETE FROM google.accesscontextmanager.authorized_orgs_descs
WHERE accessPoliciesId = '{{ accessPoliciesId }}' --required
AND authorizedOrgsDescsId = '{{ authorizedOrgsDescsId }}' --required;
```
</TabItem>
</Tabs>
