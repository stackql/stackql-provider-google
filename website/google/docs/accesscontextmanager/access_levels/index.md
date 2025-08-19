--- 
title: access_levels
hide_title: false
hide_table_of_contents: false
keywords:
  - access_levels
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

Creates, updates, deletes, gets or lists an <code>access_levels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_levels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accesscontextmanager.access_levels" /></td></tr>
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

An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.

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
    <td>Identifier. Resource name for the `AccessLevel`. Format: `accessPolicies/&#123;access_policy&#125;/accessLevels/&#123;access_level&#125;`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.</td>
</tr>
<tr>
    <td><CopyableCode code="basic" /></td>
    <td><code>object</code></td>
    <td>A `BasicLevel` composed of `Conditions`. (id: BasicLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="custom" /></td>
    <td><code>object</code></td>
    <td>A `CustomLevel` written in the Common Expression Language. (id: CustomLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the `AccessLevel` and its use. Does not affect behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Human readable title. Must be unique within the Policy.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A response to `ListAccessLevelsRequest`.

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
    <td><CopyableCode code="accessLevels" /></td>
    <td><code>array</code></td>
    <td>List of the Access Level instances.</td>
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
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-accessLevelsId"><code>accessLevelsId</code></a></td>
    <td><a href="#parameter-accessLevelFormat"><code>accessLevelFormat</code></a></td>
    <td>Gets an access level based on the resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-accessLevelFormat"><code>accessLevelFormat</code></a></td>
    <td>Lists all access levels for an access policy.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a></td>
    <td></td>
    <td>Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-accessLevelsId"><code>accessLevelsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an access level. The long-running operation from this RPC has a successful status after the changes to the access level propagate to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.</td>
</tr>
<tr>
    <td><a href="#replace_all"><CopyableCode code="replace_all" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a></td>
    <td></td>
    <td>Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-accessLevelsId"><code>accessLevelsId</code></a></td>
    <td></td>
    <td>Deletes an access level based on the resource name. The long-running operation from this RPC has a successful status after the access level has been removed from long-lasting storage.</td>
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
<tr id="parameter-accessLevelsId">
    <td><CopyableCode code="accessLevelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-accessPoliciesId">
    <td><CopyableCode code="accessPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-accessLevelFormat">
    <td><CopyableCode code="accessLevelFormat" /></td>
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

Gets an access level based on the resource name.

```sql
SELECT
name,
basic,
custom,
description,
title
FROM google.accesscontextmanager.access_levels
WHERE accessPoliciesId = '{{ accessPoliciesId }}' -- required
AND accessLevelsId = '{{ accessLevelsId }}' -- required
AND accessLevelFormat = '{{ accessLevelFormat }}';
```
</TabItem>
<TabItem value="list">

Lists all access levels for an access policy.

```sql
SELECT
accessLevels,
nextPageToken
FROM google.accesscontextmanager.access_levels
WHERE accessPoliciesId = '{{ accessPoliciesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND accessLevelFormat = '{{ accessLevelFormat }}';
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

Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

```sql
INSERT INTO google.accesscontextmanager.access_levels (
data__name,
data__title,
data__description,
data__basic,
data__custom,
accessPoliciesId
)
SELECT 
'{{ name }}',
'{{ title }}',
'{{ description }}',
'{{ basic }}',
'{{ custom }}',
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
- name: access_levels
  props:
    - name: accessPoliciesId
      value: string
      description: Required parameter for the access_levels resource.
    - name: name
      value: string
      description: >
        Identifier. Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.
        
    - name: title
      value: string
      description: >
        Human readable title. Must be unique within the Policy.
        
    - name: description
      value: string
      description: >
        Description of the `AccessLevel` and its use. Does not affect behavior.
        
    - name: basic
      value: object
      description: >
        A `BasicLevel` composed of `Conditions`.
        
    - name: custom
      value: object
      description: >
        A `CustomLevel` written in the Common Expression Language.
        
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

Updates an access level. The long-running operation from this RPC has a successful status after the changes to the access level propagate to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

```sql
UPDATE google.accesscontextmanager.access_levels
SET 
data__name = '{{ name }}',
data__title = '{{ title }}',
data__description = '{{ description }}',
data__basic = '{{ basic }}',
data__custom = '{{ custom }}'
WHERE 
accessPoliciesId = '{{ accessPoliciesId }}' --required
AND accessLevelsId = '{{ accessLevelsId }}' --required
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


## `REPLACE` examples

<Tabs
    defaultValue="replace_all"
    values={[
        { label: 'replace_all', value: 'replace_all' }
    ]}
>
<TabItem value="replace_all">

Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.

```sql
REPLACE google.accesscontextmanager.access_levels
SET 
data__accessLevels = '{{ accessLevels }}',
data__etag = '{{ etag }}'
WHERE 
accessPoliciesId = '{{ accessPoliciesId }}' --required
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

Deletes an access level based on the resource name. The long-running operation from this RPC has a successful status after the access level has been removed from long-lasting storage.

```sql
DELETE FROM google.accesscontextmanager.access_levels
WHERE accessPoliciesId = '{{ accessPoliciesId }}' --required
AND accessLevelsId = '{{ accessLevelsId }}' --required;
```
</TabItem>
</Tabs>
