--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - iamv2
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iamv2.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get">

Data for an IAM policy.

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
    <td>Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/&#123;attachment_point&#125;/denypolicies/&#123;policy_id&#125;` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Policy` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-specified description of the `Policy`. This value can be up to 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the `Policy` was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

Response message for `ListPolicies`.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages.</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td>Metadata for the policies that are attached to the resource.</td>
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
    <td><a href="#parameter-policiesId"><code>policiesId</code></a>, <a href="#parameter-policiesId1"><code>policiesId1</code></a>, <a href="#parameter-policiesId2"><code>policiesId2</code></a></td>
    <td></td>
    <td>Gets a policy.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a>, <a href="#parameter-policiesId1"><code>policiesId1</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a>, <a href="#parameter-policiesId1"><code>policiesId1</code></a></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a></td>
    <td>Creates a policy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a>, <a href="#parameter-policiesId1"><code>policiesId1</code></a>, <a href="#parameter-policiesId2"><code>policiesId2</code></a></td>
    <td></td>
    <td>Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a>, <a href="#parameter-policiesId1"><code>policiesId1</code></a>, <a href="#parameter-policiesId2"><code>policiesId2</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a policy. This action is permanent.</td>
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
<tr id="parameter-policiesId">
    <td><CopyableCode code="policiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policiesId1">
    <td><CopyableCode code="policiesId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policiesId2">
    <td><CopyableCode code="policiesId2" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-policyId">
    <td><CopyableCode code="policyId" /></td>
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
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get">

Gets a policy.

```sql
SELECT
name,
annotations,
createTime,
deleteTime,
displayName,
etag,
kind,
rules,
uid,
updateTime
FROM google.iamv2.policies
WHERE policiesId = '{{ policiesId }}' -- required
AND policiesId1 = '{{ policiesId1 }}' -- required
AND policiesId2 = '{{ policiesId2 }}' -- required;
```
</TabItem>
<TabItem value="list_policies">

Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.

```sql
SELECT
nextPageToken,
policies
FROM google.iamv2.policies
WHERE policiesId = '{{ policiesId }}' -- required
AND policiesId1 = '{{ policiesId1 }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy"
    values={[
        { label: 'create_policy', value: 'create_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy">

Creates a policy.

```sql
INSERT INTO google.iamv2.policies (
data__name,
data__uid,
data__displayName,
data__annotations,
data__etag,
data__rules,
policiesId,
policiesId1,
policyId
)
SELECT 
'{{ name }}',
'{{ uid }}',
'{{ displayName }}',
'{{ annotations }}',
'{{ etag }}',
'{{ rules }}',
'{{ policiesId }}',
'{{ policiesId1 }}',
'{{ policyId }}'
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
- name: policies
  props:
    - name: policiesId
      value: string
      description: Required parameter for the policies resource.
    - name: policiesId1
      value: string
      description: Required parameter for the policies resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.
        
    - name: uid
      value: string
      description: >
        Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.
        
    - name: displayName
      value: string
      description: >
        A user-specified description of the `Policy`. This value can be up to 63 characters.
        
    - name: annotations
      value: object
      description: >
        A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.
        
    - name: etag
      value: string
      description: >
        An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.
        
    - name: rules
      value: array
      description: >
        A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.
        
    - name: policyId
      value: string
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

Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.

```sql
REPLACE google.iamv2.policies
SET 
data__name = '{{ name }}',
data__uid = '{{ uid }}',
data__displayName = '{{ displayName }}',
data__annotations = '{{ annotations }}',
data__etag = '{{ etag }}',
data__rules = '{{ rules }}'
WHERE 
policiesId = '{{ policiesId }}' --required
AND policiesId1 = '{{ policiesId1 }}' --required
AND policiesId2 = '{{ policiesId2 }}' --required
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

Deletes a policy. This action is permanent.

```sql
DELETE FROM google.iamv2.policies
WHERE policiesId = '{{ policiesId }}' --required
AND policiesId1 = '{{ policiesId1 }}' --required
AND policiesId2 = '{{ policiesId2 }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
