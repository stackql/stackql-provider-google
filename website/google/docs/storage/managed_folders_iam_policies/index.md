--- 
title: managed_folders_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_folders_iam_policies
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

Creates, updates, deletes, gets or lists a <code>managed_folders_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>managed_folders_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.managed_folders_iam_policies" /></td></tr>
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

A bucket/object/managedFolder IAM policy.

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
    <td><CopyableCode code="bindings" /></td>
    <td><code>array</code></td>
    <td>An association between a role, which comes with a set of permissions, and members who may assume that role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>HTTP 1.1  Entity tag for the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For policies, this is always storage#policy. This field is ignored on input. (default: storage#policy)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, projects/_/buckets/bucket/objects/object for objects, and projects/_/buckets/bucket/managedFolders/managedFolder. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>The IAM policy format version.</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-managedFolder"><code>managedFolder</code></a></td>
    <td><a href="#parameter-optionsRequestedPolicyVersion"><code>optionsRequestedPolicyVersion</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Returns an IAM policy for the specified managed folder.</td>
</tr>
<tr>
    <td><a href="#set_iam_policy"><CopyableCode code="set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-managedFolder"><code>managedFolder</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Updates an IAM policy for the specified managed folder.</td>
</tr>
<tr>
    <td><a href="#test_iam_permissions"><CopyableCode code="test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-managedFolder"><code>managedFolder</code></a>, <a href="#parameter-permissions"><code>permissions</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.</td>
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
<tr id="parameter-managedFolder">
    <td><CopyableCode code="managedFolder" /></td>
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

Returns an IAM policy for the specified managed folder.

```sql
SELECT
bindings,
etag,
kind,
resourceId,
version
FROM google.storage.managed_folders_iam_policies
WHERE bucket = '{{ bucket }}' -- required
AND managedFolder = '{{ managedFolder }}' -- required
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

Updates an IAM policy for the specified managed folder.

```sql
REPLACE google.storage.managed_folders_iam_policies
SET 
data__bindings = '{{ bindings }}',
data__etag = '{{ etag }}',
data__kind = '{{ kind }}',
data__resourceId = '{{ resourceId }}',
data__version = {{ version }}
WHERE 
bucket = '{{ bucket }}' --required
AND managedFolder = '{{ managedFolder }}' --required
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

Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.

```sql
EXEC google.storage.managed_folders_iam_policies.test_iam_permissions 
@bucket='{{ bucket }}' --required, 
@managedFolder='{{ managedFolder }}' --required, 
@permissions='{{ permissions }}' --required, 
@userProject='{{ userProject }}';
```
</TabItem>
</Tabs>
