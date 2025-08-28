--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.members" /></td></tr>
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
    <td>The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_settings" /></td>
    <td><code>string</code></td>
    <td>Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Members resources, the value is `admin#directory#member`. (default: admin#directory#member)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of member (Immutable)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of group member.</td>
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
    <td>The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_settings" /></td>
    <td><code>string</code></td>
    <td>Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Members resources, the value is `admin#directory#member`. (default: admin#directory#member)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of member (Immutable)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of group member.</td>
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
    <td><a href="#parameter-groupKey"><code>groupKey</code></a>, <a href="#parameter-memberKey"><code>memberKey</code></a></td>
    <td></td>
    <td>Retrieves a group member's properties.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a></td>
    <td><a href="#parameter-includeDerivedMembership"><code>includeDerivedMembership</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-roles"><code>roles</code></a></td>
    <td>Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a></td>
    <td></td>
    <td>Adds a user to the specified group.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a>, <a href="#parameter-memberKey"><code>memberKey</code></a></td>
    <td></td>
    <td>Updates the membership properties of a user in the specified group. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a>, <a href="#parameter-memberKey"><code>memberKey</code></a></td>
    <td></td>
    <td>Updates the membership of a user in the specified group.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a>, <a href="#parameter-memberKey"><code>memberKey</code></a></td>
    <td></td>
    <td>Removes a member from a group.</td>
</tr>
<tr>
    <td><a href="#has_member"><CopyableCode code="has_member" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupKey"><code>groupKey</code></a>, <a href="#parameter-memberKey"><code>memberKey</code></a></td>
    <td></td>
    <td>Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.</td>
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
<tr id="parameter-groupKey">
    <td><CopyableCode code="groupKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-memberKey">
    <td><CopyableCode code="memberKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeDerivedMembership">
    <td><CopyableCode code="includeDerivedMembership" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-roles">
    <td><CopyableCode code="roles" /></td>
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

Retrieves a group member's properties.

```sql
SELECT
id,
delivery_settings,
email,
etag,
kind,
role,
status,
type
FROM googleadmin.directory.members
WHERE groupKey = '{{ groupKey }}' -- required
AND memberKey = '{{ memberKey }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).

```sql
SELECT
id,
delivery_settings,
email,
etag,
kind,
role,
status,
type
FROM googleadmin.directory.members
WHERE groupKey = '{{ groupKey }}' -- required
AND includeDerivedMembership = '{{ includeDerivedMembership }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND roles = '{{ roles }}';
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

Adds a user to the specified group.

```sql
INSERT INTO googleadmin.directory.members (
data__kind,
data__email,
data__role,
data__etag,
data__type,
data__status,
data__delivery_settings,
data__id,
groupKey
)
SELECT 
'{{ kind }}',
'{{ email }}',
'{{ role }}',
'{{ etag }}',
'{{ type }}',
'{{ status }}',
'{{ delivery_settings }}',
'{{ id }}',
'{{ groupKey }}'
RETURNING
id,
delivery_settings,
email,
etag,
kind,
role,
status,
type
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: members
  props:
    - name: groupKey
      value: string
      description: Required parameter for the members resource.
    - name: kind
      value: string
      description: >
        The type of the API resource. For Members resources, the value is `admin#directory#member`.
        
      default: admin#directory#member
    - name: email
      value: string
      description: >
        The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.
        
    - name: role
      value: string
      description: >
        The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).
        
    - name: etag
      value: string
      description: >
        ETag of the resource.
        
    - name: type
      value: string
      description: >
        The type of group member.
        
    - name: status
      value: string
      description: >
        Status of member (Immutable)
        
    - name: delivery_settings
      value: string
      description: >
        Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.
        
    - name: id
      value: string
      description: >
        The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.
        
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

Updates the membership properties of a user in the specified group. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

```sql
UPDATE googleadmin.directory.members
SET 
data__kind = '{{ kind }}',
data__email = '{{ email }}',
data__role = '{{ role }}',
data__etag = '{{ etag }}',
data__type = '{{ type }}',
data__status = '{{ status }}',
data__delivery_settings = '{{ delivery_settings }}',
data__id = '{{ id }}'
WHERE 
groupKey = '{{ groupKey }}' --required
AND memberKey = '{{ memberKey }}' --required
RETURNING
id,
delivery_settings,
email,
etag,
kind,
role,
status,
type;
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

Updates the membership of a user in the specified group.

```sql
REPLACE googleadmin.directory.members
SET 
data__kind = '{{ kind }}',
data__email = '{{ email }}',
data__role = '{{ role }}',
data__etag = '{{ etag }}',
data__type = '{{ type }}',
data__status = '{{ status }}',
data__delivery_settings = '{{ delivery_settings }}',
data__id = '{{ id }}'
WHERE 
groupKey = '{{ groupKey }}' --required
AND memberKey = '{{ memberKey }}' --required
RETURNING
id,
delivery_settings,
email,
etag,
kind,
role,
status,
type;
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

Removes a member from a group.

```sql
DELETE FROM googleadmin.directory.members
WHERE groupKey = '{{ groupKey }}' --required
AND memberKey = '{{ memberKey }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="has_member"
    values={[
        { label: 'has_member', value: 'has_member' }
    ]}
>
<TabItem value="has_member">

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

```sql
EXEC googleadmin.directory.members.has_member 
@groupKey='{{ groupKey }}' --required, 
@memberKey='{{ memberKey }}' --required;
```
</TabItem>
</Tabs>
