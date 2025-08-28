--- 
title: object_access_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - object_access_controls
  - storage
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

Creates, updates, deletes, gets or lists an <code>object_access_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>object_access_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.object_access_controls" /></td></tr>
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
    <td>The ID of the access-control entry.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain associated with the entity, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address associated with the entity, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="entity" /></td>
    <td><code>string</code></td>
    <td>The entity holding the permission, in one of the following forms:  - user-userId  - user-email  - group-groupId  - group-email  - domain-domain  - project-team-projectId  - allUsers  - allAuthenticatedUsers Examples:  - The user liz@example.com would be user-liz@example.com.  - The group example@googlegroups.com would be group-example@googlegroups.com.  - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="entityId" /></td>
    <td><code>string</code></td>
    <td>The ID for the entity, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>HTTP 1.1 Entity tag for the access-control entry.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>The content generation of the object, if applied to an object.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For object access control entries, this is always storage#objectAccessControl. (default: storage#objectAccessControl)</td>
</tr>
<tr>
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td>The name of the object, if applied to an object.</td>
</tr>
<tr>
    <td><CopyableCode code="projectTeam" /></td>
    <td><code>object</code></td>
    <td>The project team associated with the entity, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The access permission for the entity.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this access-control entry.</td>
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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of items.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls. (default: storage#objectAccessControls)</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Returns the ACL entry for the specified entity on the specified object.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Retrieves ACL entries on the specified object.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Creates a new ACL entry on the specified object.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Patches an ACL entry on the specified object.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Updates an ACL entry on the specified object.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Permanently deletes the ACL entry for the specified entity on the specified object.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-entity">
    <td><CopyableCode code="entity" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-object">
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-generation">
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-userProject">
    <td><CopyableCode code="userProject" /></td>
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

Returns the ACL entry for the specified entity on the specified object.

```sql
SELECT
id,
bucket,
domain,
email,
entity,
entityId,
etag,
generation,
kind,
object,
projectTeam,
role,
selfLink
FROM google.storage.object_access_controls
WHERE bucket = '{{ bucket }}' -- required
AND object = '{{ object }}' -- required
AND entity = '{{ entity }}' -- required
AND generation = '{{ generation }}'
AND userProject = '{{ userProject }}';
```
</TabItem>
<TabItem value="list">

Retrieves ACL entries on the specified object.

```sql
SELECT
items,
kind
FROM google.storage.object_access_controls
WHERE bucket = '{{ bucket }}' -- required
AND object = '{{ object }}' -- required
AND generation = '{{ generation }}'
AND userProject = '{{ userProject }}';
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

Creates a new ACL entry on the specified object.

```sql
INSERT INTO google.storage.object_access_controls (
data__bucket,
data__domain,
data__email,
data__entity,
data__entityId,
data__etag,
data__generation,
data__id,
data__kind,
data__object,
data__projectTeam,
data__role,
data__selfLink,
bucket,
object,
generation,
userProject
)
SELECT 
'{{ bucket }}',
'{{ domain }}',
'{{ email }}',
'{{ entity }}',
'{{ entityId }}',
'{{ etag }}',
'{{ generation }}',
'{{ id }}',
'{{ kind }}',
'{{ object }}',
'{{ projectTeam }}',
'{{ role }}',
'{{ selfLink }}',
'{{ bucket }}',
'{{ object }}',
'{{ generation }}',
'{{ userProject }}'
RETURNING
id,
bucket,
domain,
email,
entity,
entityId,
etag,
generation,
kind,
object,
projectTeam,
role,
selfLink
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: object_access_controls
  props:
    - name: bucket
      value: string
      description: Required parameter for the object_access_controls resource.
    - name: object
      value: string
      description: Required parameter for the object_access_controls resource.
    - name: bucket
      value: string
      description: >
        The name of the bucket.
        
    - name: domain
      value: string
      description: >
        The domain associated with the entity, if any.
        
    - name: email
      value: string
      description: >
        The email address associated with the entity, if any.
        
    - name: entity
      value: string
      description: >
        The entity holding the permission, in one of the following forms: 
- user-userId 
- user-email 
- group-groupId 
- group-email 
- domain-domain 
- project-team-projectId 
- allUsers 
- allAuthenticatedUsers Examples: 
- The user liz@example.com would be user-liz@example.com. 
- The group example@googlegroups.com would be group-example@googlegroups.com. 
- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
        
    - name: entityId
      value: string
      description: >
        The ID for the entity, if any.
        
    - name: etag
      value: string
      description: >
        HTTP 1.1 Entity tag for the access-control entry.
        
    - name: generation
      value: string
      description: >
        The content generation of the object, if applied to an object.
        
    - name: id
      value: string
      description: >
        The ID of the access-control entry.
        
    - name: kind
      value: string
      description: >
        The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
        
      default: storage#objectAccessControl
    - name: object
      value: string
      description: >
        The name of the object, if applied to an object.
        
    - name: projectTeam
      value: object
      description: >
        The project team associated with the entity, if any.
        
    - name: role
      value: string
      description: >
        The access permission for the entity.
        
    - name: selfLink
      value: string
      description: >
        The link to this access-control entry.
        
    - name: generation
      value: string (int64)
    - name: userProject
      value: string
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

Patches an ACL entry on the specified object.

```sql
UPDATE google.storage.object_access_controls
SET 
data__bucket = '{{ bucket }}',
data__domain = '{{ domain }}',
data__email = '{{ email }}',
data__entity = '{{ entity }}',
data__entityId = '{{ entityId }}',
data__etag = '{{ etag }}',
data__generation = '{{ generation }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__object = '{{ object }}',
data__projectTeam = '{{ projectTeam }}',
data__role = '{{ role }}',
data__selfLink = '{{ selfLink }}'
WHERE 
bucket = '{{ bucket }}' --required
AND object = '{{ object }}' --required
AND entity = '{{ entity }}' --required
AND generation = '{{ generation}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
bucket,
domain,
email,
entity,
entityId,
etag,
generation,
kind,
object,
projectTeam,
role,
selfLink;
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

Updates an ACL entry on the specified object.

```sql
REPLACE google.storage.object_access_controls
SET 
data__bucket = '{{ bucket }}',
data__domain = '{{ domain }}',
data__email = '{{ email }}',
data__entity = '{{ entity }}',
data__entityId = '{{ entityId }}',
data__etag = '{{ etag }}',
data__generation = '{{ generation }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__object = '{{ object }}',
data__projectTeam = '{{ projectTeam }}',
data__role = '{{ role }}',
data__selfLink = '{{ selfLink }}'
WHERE 
bucket = '{{ bucket }}' --required
AND object = '{{ object }}' --required
AND entity = '{{ entity }}' --required
AND generation = '{{ generation}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
bucket,
domain,
email,
entity,
entityId,
etag,
generation,
kind,
object,
projectTeam,
role,
selfLink;
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

Permanently deletes the ACL entry for the specified entity on the specified object.

```sql
DELETE FROM google.storage.object_access_controls
WHERE bucket = '{{ bucket }}' --required
AND object = '{{ object }}' --required
AND entity = '{{ entity }}' --required
AND generation = '{{ generation }}'
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>
