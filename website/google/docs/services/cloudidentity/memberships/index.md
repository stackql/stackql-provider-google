--- 
title: memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - memberships
  - cloudidentity
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

Creates, updates, deletes, gets or lists a <code>memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>memberships</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.memberships" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/&#123;group&#125;/memberships/&#123;membership&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Membership` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySetting" /></td>
    <td><code>string</code></td>
    <td>Output only. Delivery setting associated with the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredMemberKey" /></td>
    <td><code>object</code></td>
    <td>A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. (id: EntityKey)</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Membership` was last updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/&#123;group&#125;/memberships/&#123;membership&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Membership` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySetting" /></td>
    <td><code>string</code></td>
    <td>Output only. Delivery setting associated with the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredMemberKey" /></td>
    <td><code>object</code></td>
    <td>A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. (id: EntityKey)</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Membership` was last updated.</td>
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
    <td><a href="#parameter-groupsId"><code>groupsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a></td>
    <td></td>
    <td>Retrieves a `Membership`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the `Membership`s within a `Group`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td></td>
    <td>Creates a `Membership`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a></td>
    <td></td>
    <td>Deletes a `Membership`.</td>
</tr>
<tr>
    <td><a href="#lookup"><CopyableCode code="lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-memberKey.id"><code>memberKey.id</code></a>, <a href="#parameter-memberKey.namespace"><code>memberKey.namespace</code></a></td>
    <td>Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.</td>
</tr>
<tr>
    <td><a href="#modify_membership_roles"><CopyableCode code="modify_membership_roles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a></td>
    <td></td>
    <td>Modifies the `MembershipRole`s of a `Membership`.</td>
</tr>
<tr>
    <td><a href="#search_transitive_memberships"><CopyableCode code="search_transitive_memberships" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.</td>
</tr>
<tr>
    <td><a href="#search_transitive_groups"><CopyableCode code="search_transitive_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.</td>
</tr>
<tr>
    <td><a href="#check_transitive_membership"><CopyableCode code="check_transitive_membership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a></td>
    <td>Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.</td>
</tr>
<tr>
    <td><a href="#search_direct_groups"><CopyableCode code="search_direct_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-groupsId"><code>groupsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Searches direct groups of a member.</td>
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
<tr id="parameter-groupsId">
    <td><CopyableCode code="groupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-membershipsId">
    <td><CopyableCode code="membershipsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-memberKey.id">
    <td><CopyableCode code="memberKey.id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-memberKey.namespace">
    <td><CopyableCode code="memberKey.namespace" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Retrieves a `Membership`.

```sql
SELECT
name,
createTime,
deliverySetting,
preferredMemberKey,
roles,
type,
updateTime
FROM google.cloudidentity.memberships
WHERE groupsId = '{{ groupsId }}' -- required
AND membershipsId = '{{ membershipsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the `Membership`s within a `Group`.

```sql
SELECT
name,
createTime,
deliverySetting,
preferredMemberKey,
roles,
type,
updateTime
FROM google.cloudidentity.memberships
WHERE groupsId = '{{ groupsId }}' -- required
AND view = '{{ view }}'
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

Creates a `Membership`.

```sql
INSERT INTO google.cloudidentity.memberships (
data__preferredMemberKey,
data__roles,
groupsId
)
SELECT 
'{{ preferredMemberKey }}',
'{{ roles }}',
'{{ groupsId }}'
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
- name: memberships
  props:
    - name: groupsId
      value: string
      description: Required parameter for the memberships resource.
    - name: preferredMemberKey
      value: object
      description: >
        A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
        
    - name: roles
      value: array
      description: >
        The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
        
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

Deletes a `Membership`.

```sql
DELETE FROM google.cloudidentity.memberships
WHERE groupsId = '{{ groupsId }}' --required
AND membershipsId = '{{ membershipsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="lookup"
    values={[
        { label: 'lookup', value: 'lookup' },
        { label: 'modify_membership_roles', value: 'modify_membership_roles' },
        { label: 'search_transitive_memberships', value: 'search_transitive_memberships' },
        { label: 'search_transitive_groups', value: 'search_transitive_groups' },
        { label: 'check_transitive_membership', value: 'check_transitive_membership' },
        { label: 'search_direct_groups', value: 'search_direct_groups' }
    ]}
>
<TabItem value="lookup">

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.

```sql
EXEC google.cloudidentity.memberships.lookup 
@groupsId='{{ groupsId }}' --required, 
@memberKey.id='{{ memberKey.id }}', 
@memberKey.namespace='{{ memberKey.namespace }}';
```
</TabItem>
<TabItem value="modify_membership_roles">

Modifies the `MembershipRole`s of a `Membership`.

```sql
EXEC google.cloudidentity.memberships.modify_membership_roles 
@groupsId='{{ groupsId }}' --required, 
@membershipsId='{{ membershipsId }}' --required 
@@json=
'{
"addRoles": "{{ addRoles }}", 
"removeRoles": "{{ removeRoles }}", 
"updateRolesParams": "{{ updateRolesParams }}"
}';
```
</TabItem>
<TabItem value="search_transitive_memberships">

Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.

```sql
EXEC google.cloudidentity.memberships.search_transitive_memberships 
@groupsId='{{ groupsId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="search_transitive_groups">

Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.

```sql
EXEC google.cloudidentity.memberships.search_transitive_groups 
@groupsId='{{ groupsId }}' --required, 
@query='{{ query }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}';
```
</TabItem>
<TabItem value="check_transitive_membership">

Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.

```sql
EXEC google.cloudidentity.memberships.check_transitive_membership 
@groupsId='{{ groupsId }}' --required, 
@query='{{ query }}';
```
</TabItem>
<TabItem value="search_direct_groups">

Searches direct groups of a member.

```sql
EXEC google.cloudidentity.memberships.search_direct_groups 
@groupsId='{{ groupsId }}' --required, 
@query='{{ query }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@orderBy='{{ orderBy }}';
```
</TabItem>
</Tabs>
