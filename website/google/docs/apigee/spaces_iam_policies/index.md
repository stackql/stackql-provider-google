--- 
title: spaces_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces_iam_policies
  - apigee
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

Creates, updates, deletes, gets or lists a <code>spaces_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>spaces_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.spaces_iam_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_spaces_get_iam_policy"
    values={[
        { label: 'organizations_spaces_get_iam_policy', value: 'organizations_spaces_get_iam_policy' }
    ]}
>
<TabItem value="organizations_spaces_get_iam_policy">

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` &#123; "bindings": [ &#123; "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] &#125;, &#123; "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": &#123; "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time &lt; timestamp('2020-10-01T00:00:00.000Z')", &#125; &#125; ], "etag": "BwWWja0YfJA=", "version": 3 &#125; ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time &lt; timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

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
    <td><CopyableCode code="auditConfigs" /></td>
    <td><code>array</code></td>
    <td>Specifies cloud audit logging configuration for this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="bindings" /></td>
    <td><code>array</code></td>
    <td>Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).</td>
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
    <td><a href="#organizations_spaces_get_iam_policy"><CopyableCode code="organizations_spaces_get_iam_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-spacesId"><code>spacesId</code></a></td>
    <td><a href="#parameter-options.requestedPolicyVersion"><code>options.requestedPolicyVersion</code></a></td>
    <td>Callers must have apigee.spaces.getIamPolicy.</td>
</tr>
<tr>
    <td><a href="#organizations_spaces_set_iam_policy"><CopyableCode code="organizations_spaces_set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-spacesId"><code>spacesId</code></a></td>
    <td></td>
    <td>IAM META APIs Callers must have apigee.spaces.setIamPolicy.</td>
</tr>
<tr>
    <td><a href="#organizations_spaces_test_iam_permissions"><CopyableCode code="organizations_spaces_test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-spacesId"><code>spacesId</code></a></td>
    <td></td>
    <td>Callers don't need any permissions.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-spacesId">
    <td><CopyableCode code="spacesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-options.requestedPolicyVersion">
    <td><CopyableCode code="options.requestedPolicyVersion" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_spaces_get_iam_policy"
    values={[
        { label: 'organizations_spaces_get_iam_policy', value: 'organizations_spaces_get_iam_policy' }
    ]}
>
<TabItem value="organizations_spaces_get_iam_policy">

Callers must have apigee.spaces.getIamPolicy.

```sql
SELECT
auditConfigs,
bindings,
etag,
version
FROM google.apigee.spaces_iam_policies
WHERE organizationsId = '{{ organizationsId }}' -- required
AND spacesId = '{{ spacesId }}' -- required
AND options.requestedPolicyVersion = '{{ options.requestedPolicyVersion }}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_spaces_set_iam_policy"
    values={[
        { label: 'organizations_spaces_set_iam_policy', value: 'organizations_spaces_set_iam_policy' }
    ]}
>
<TabItem value="organizations_spaces_set_iam_policy">

IAM META APIs Callers must have apigee.spaces.setIamPolicy.

```sql
REPLACE google.apigee.spaces_iam_policies
SET 
data__policy = '{{ policy }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND spacesId = '{{ spacesId }}' --required
RETURNING
auditConfigs,
bindings,
etag,
version;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_spaces_test_iam_permissions"
    values={[
        { label: 'organizations_spaces_test_iam_permissions', value: 'organizations_spaces_test_iam_permissions' }
    ]}
>
<TabItem value="organizations_spaces_test_iam_permissions">

Callers don't need any permissions.

```sql
EXEC google.apigee.spaces_iam_policies.organizations_spaces_test_iam_permissions 
@organizationsId='{{ organizationsId }}' --required, 
@spacesId='{{ spacesId }}' --required 
@@json=
'{
"permissions": "{{ permissions }}"
}';
```
</TabItem>
</Tabs>
