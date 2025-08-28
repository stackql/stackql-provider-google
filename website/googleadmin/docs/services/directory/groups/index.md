--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.groups" /></td></tr>
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
    <td>Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The group's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="adminCreated" /></td>
    <td><code>boolean</code></td>
    <td>Read-only. Value is `true` if this group was created by an administrator rather than a user.</td>
</tr>
<tr>
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="directMembersCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Groups resources, the value is `admin#directory#group`. (default: admin#directory#group)</td>
</tr>
<tr>
    <td><CopyableCode code="nonEditableAliases" /></td>
    <td><code>array</code></td>
    <td>Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The group's display name.</td>
</tr>
<tr>
    <td><CopyableCode code="adminCreated" /></td>
    <td><code>boolean</code></td>
    <td>Read-only. Value is `true` if this group was created by an administrator rather than a user.</td>
</tr>
<tr>
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="directMembersCount" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Groups resources, the value is `admin#directory#group`. (default: admin#directory#group)</td>
</tr>
<tr>
    <td><CopyableCode code="nonEditableAliases" /></td>
    <td><code>array</code></td>
    <td>Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.</td>
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
    <td><a href="#parameter-groupKey"><code>groupKey</code></a></td>
    <td></td>
    <td>Retrieves a group's properties.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-customer"><code>customer</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-userKey"><code>userKey</code></a></td>
    <td>Retrieves all groups of a domain or of a user given a userKey (paginated).</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a group.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a></td>
    <td></td>
    <td>Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a></td>
    <td></td>
    <td>Updates a group's properties.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a></td>
    <td></td>
    <td>Deletes a group.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-groupKey">
    <td><CopyableCode code="groupKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-customer">
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userKey">
    <td><CopyableCode code="userKey" /></td>
    <td><code>string</code></td>
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

Retrieves a group's properties.

```sql
SELECT
id,
name,
adminCreated,
aliases,
description,
directMembersCount,
email,
etag,
kind,
nonEditableAliases
FROM googleadmin.directory.groups
WHERE groupKey = '{{ groupKey }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves all groups of a domain or of a user given a userKey (paginated).

```sql
SELECT
id,
name,
adminCreated,
aliases,
description,
directMembersCount,
email,
etag,
kind,
nonEditableAliases
FROM googleadmin.directory.groups
WHERE domain = '{{ domain }}' -- required
AND customer = '{{ customer }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND query = '{{ query }}'
AND sortOrder = '{{ sortOrder }}'
AND userKey = '{{ userKey }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a group.

```sql
INSERT INTO googleadmin.directory.groups (
data__id,
data__email,
data__name,
data__description,
data__adminCreated,
data__directMembersCount,
data__kind,
data__etag,
data__aliases,
data__nonEditableAliases
)
SELECT 
'{{ id }}',
'{{ email }}',
'{{ name }}',
'{{ description }}',
{{ adminCreated }},
'{{ directMembersCount }}',
'{{ kind }}',
'{{ etag }}',
'{{ aliases }}',
'{{ nonEditableAliases }}'
RETURNING
id,
name,
adminCreated,
aliases,
description,
directMembersCount,
email,
etag,
kind,
nonEditableAliases
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: groups
  props:
    - name: id
      value: string
      description: >
        Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.
        
    - name: email
      value: string
      description: >
        The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.
        
    - name: name
      value: string
      description: >
        The group's display name.
        
    - name: description
      value: string
      description: >
        An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.
        
    - name: adminCreated
      value: boolean
      description: >
        Read-only. Value is `true` if this group was created by an administrator rather than a user.
        
    - name: directMembersCount
      value: string
      description: >
        The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.
        
    - name: kind
      value: string
      description: >
        The type of the API resource. For Groups resources, the value is `admin#directory#group`.
        
      default: admin#directory#group
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
    - name: aliases
      value: array
      description: >
        Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.
        
    - name: nonEditableAliases
      value: array
      description: >
        Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.
        
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

Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

```sql
UPDATE googleadmin.directory.groups
SET 
data__id = '{{ id }}',
data__email = '{{ email }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__adminCreated = {{ adminCreated }},
data__directMembersCount = '{{ directMembersCount }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__aliases = '{{ aliases }}',
data__nonEditableAliases = '{{ nonEditableAliases }}'
WHERE 
groupKey = '{{ groupKey }}' --required
RETURNING
id,
name,
adminCreated,
aliases,
description,
directMembersCount,
email,
etag,
kind,
nonEditableAliases;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a group's properties.

```sql
REPLACE googleadmin.directory.groups
SET 
data__id = '{{ id }}',
data__email = '{{ email }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__adminCreated = {{ adminCreated }},
data__directMembersCount = '{{ directMembersCount }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__aliases = '{{ aliases }}',
data__nonEditableAliases = '{{ nonEditableAliases }}'
WHERE 
groupKey = '{{ groupKey }}' --required
RETURNING
id,
name,
adminCreated,
aliases,
description,
directMembersCount,
email,
etag,
kind,
nonEditableAliases;
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

Deletes a group.

```sql
DELETE FROM googleadmin.directory.groups
WHERE groupKey = '{{ groupKey }}' --required;
```
</TabItem>
</Tabs>
