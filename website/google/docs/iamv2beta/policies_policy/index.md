--- 
title: policies_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - policies_policy
  - iamv2beta
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

Creates, updates, deletes, gets or lists a <code>policies_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iamv2beta.policies_policy" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a>, <a href="#parameter-policiesId1"><code>policiesId1</code></a></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a></td>
    <td>Creates a policy.</td>
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
<tr id="parameter-policyId">
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

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
INSERT INTO google.iamv2beta.policies_policy (
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
- name: policies_policy
  props:
    - name: policiesId
      value: string
      description: Required parameter for the policies_policy resource.
    - name: policiesId1
      value: string
      description: Required parameter for the policies_policy resource.
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
