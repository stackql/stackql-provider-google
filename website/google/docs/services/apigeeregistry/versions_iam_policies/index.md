--- 
title: versions_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - versions_iam_policies
  - apigeeregistry
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

Creates, updates, deletes, gets or lists a <code>versions_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>versions_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigeeregistry.versions_iam_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_apis_versions_get_iam_policy"
    values={[
        { label: 'projects_locations_apis_versions_get_iam_policy', value: 'projects_locations_apis_versions_get_iam_policy' }
    ]}
>
<TabItem value="projects_locations_apis_versions_get_iam_policy">

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
    <td>The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). (id: Expr)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:&#123;emailid&#125;`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:&#123;emailid&#125;`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:&#123;projectid&#125;.svc.id.goog[&#123;namespace&#125;/&#123;kubernetes-sa&#125;]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:&#123;emailid&#125;`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:&#123;domain&#125;`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:&#123;emailid&#125;?uid=&#123;uniqueid&#125;`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:&#123;emailid&#125;` and the recovered user retains the role in the binding. * `deleted:serviceAccount:&#123;emailid&#125;?uid=&#123;uniqueid&#125;`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:&#123;emailid&#125;` and the undeleted service account retains the role in the binding. * `deleted:group:&#123;emailid&#125;?uid=&#123;uniqueid&#125;`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:&#123;emailid&#125;` and the recovered group retains the role in the binding.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.</td>
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
    <td><a href="#projects_locations_apis_versions_get_iam_policy"><CopyableCode code="projects_locations_apis_versions_get_iam_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-options.requestedPolicyVersion"><code>options.requestedPolicyVersion</code></a></td>
    <td>Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_set_iam_policy"><CopyableCode code="projects_locations_apis_versions_set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.</td>
</tr>
<tr>
    <td><a href="#projects_locations_apis_versions_test_iam_permissions"><CopyableCode code="projects_locations_apis_versions_test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
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
    defaultValue="projects_locations_apis_versions_get_iam_policy"
    values={[
        { label: 'projects_locations_apis_versions_get_iam_policy', value: 'projects_locations_apis_versions_get_iam_policy' }
    ]}
>
<TabItem value="projects_locations_apis_versions_get_iam_policy">

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

```sql
SELECT
condition,
members,
role
FROM google.apigeeregistry.versions_iam_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND options.requestedPolicyVersion = '{{ options.requestedPolicyVersion }}';
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_apis_versions_set_iam_policy"
    values={[
        { label: 'projects_locations_apis_versions_set_iam_policy', value: 'projects_locations_apis_versions_set_iam_policy' }
    ]}
>
<TabItem value="projects_locations_apis_versions_set_iam_policy">

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

```sql
REPLACE google.apigeeregistry.versions_iam_policies
SET 
data__policy = '{{ policy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
RETURNING
bindings,
etag,
version;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_apis_versions_test_iam_permissions"
    values={[
        { label: 'projects_locations_apis_versions_test_iam_permissions', value: 'projects_locations_apis_versions_test_iam_permissions' }
    ]}
>
<TabItem value="projects_locations_apis_versions_test_iam_permissions">

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

```sql
EXEC google.apigeeregistry.versions_iam_policies.projects_locations_apis_versions_test_iam_permissions 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@apisId='{{ apisId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"permissions": "{{ permissions }}"
}';
```
</TabItem>
</Tabs>
