--- 
title: buckets_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets_iam_policies
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

Creates, updates, deletes, gets or lists a <code>buckets_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.buckets_iam_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_policy"
    values={[
        { label: 'get_iam_policy', value: 'get_iam_policy' }
    ]}
>
<TabItem value="get_iam_policy">

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
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. (id: Expr)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:   - allUsers - A special identifier that represents anyone on the internet; with or without a Google account.   - allAuthenticatedUsers - A special identifier that represents anyone who is authenticated with a Google account or a service account.   - user:emailid - An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.   - serviceAccount:emailid - An email address that represents a service account. For example,  serviceAccount:my-other-app@appspot.gserviceaccount.com .   - group:emailid - An email address that represents a Google group. For example, group:admins@example.com.   - domain:domain - A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.   - projectOwner:projectid - Owners of the given project. For example, projectOwner:my-example-project   - projectEditor:projectid - Editors of the given project. For example, projectEditor:my-example-project   - projectViewer:projectid - Viewers of the given project. For example, projectViewer:my-example-project</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole. The new IAM roles are:   - roles/storage.admin - Full control of Google Cloud Storage resources.   - roles/storage.objectViewer - Read-Only access to Google Cloud Storage objects.   - roles/storage.objectCreator - Access to create objects in Google Cloud Storage.   - roles/storage.objectAdmin - Full control of Google Cloud Storage objects.   The legacy IAM roles are:   - roles/storage.legacyObjectReader - Read-only access to objects without listing. Equivalent to an ACL entry on an object with the READER role.   - roles/storage.legacyObjectOwner - Read/write access to existing objects without listing. Equivalent to an ACL entry on an object with the OWNER role.   - roles/storage.legacyBucketReader - Read access to buckets with object listing. Equivalent to an ACL entry on a bucket with the READER role.   - roles/storage.legacyBucketWriter - Read access to buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the WRITER role.   - roles/storage.legacyBucketOwner - Read and write access to existing buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the OWNER role.</td>
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
    <td><a href="#get_iam_policy"><CopyableCode code="get_iam_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-optionsRequestedPolicyVersion"><code>optionsRequestedPolicyVersion</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Returns an IAM policy for the specified bucket.</td>
</tr>
<tr>
    <td><a href="#set_iam_policy"><CopyableCode code="set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Updates an IAM policy for the specified bucket.</td>
</tr>
<tr>
    <td><a href="#test_iam_permissions"><CopyableCode code="test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-permissions"><code>permissions</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Tests a set of permissions on the given bucket to see which, if any, are held by the caller.</td>
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
<tr id="parameter-permissions">
    <td><CopyableCode code="permissions" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-optionsRequestedPolicyVersion">
    <td><CopyableCode code="optionsRequestedPolicyVersion" /></td>
    <td><code>integer (int32)</code></td>
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
    defaultValue="get_iam_policy"
    values={[
        { label: 'get_iam_policy', value: 'get_iam_policy' }
    ]}
>
<TabItem value="get_iam_policy">

Returns an IAM policy for the specified bucket.

```sql
SELECT
condition,
members,
role
FROM google.storage.buckets_iam_policies
WHERE bucket = '{{ bucket }}' -- required
AND optionsRequestedPolicyVersion = '{{ optionsRequestedPolicyVersion }}'
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_iam_policy"
    values={[
        { label: 'set_iam_policy', value: 'set_iam_policy' }
    ]}
>
<TabItem value="set_iam_policy">

Updates an IAM policy for the specified bucket.

```sql
REPLACE google.storage.buckets_iam_policies
SET 
data__bindings = '{{ bindings }}',
data__etag = '{{ etag }}',
data__kind = '{{ kind }}',
data__resourceId = '{{ resourceId }}',
data__version = {{ version }}
WHERE 
bucket = '{{ bucket }}' --required
AND userProject = '{{ userProject}}'
RETURNING
bindings,
etag,
kind,
resourceId,
version;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_iam_permissions"
    values={[
        { label: 'test_iam_permissions', value: 'test_iam_permissions' }
    ]}
>
<TabItem value="test_iam_permissions">

Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

```sql
EXEC google.storage.buckets_iam_policies.test_iam_permissions 
@bucket='{{ bucket }}' --required, 
@permissions='{{ permissions }}' --required, 
@userProject='{{ userProject }}';
```
</TabItem>
</Tabs>
