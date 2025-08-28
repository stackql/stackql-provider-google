--- 
title: service_attachments_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_attachments_iam_policies
  - compute
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

Creates, updates, deletes, gets or lists a <code>service_attachments_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_attachments_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.service_attachments_iam_policies" /></td></tr>
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
    <td>The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). (id: Expr)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:&#123;emailid&#125;`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:&#123;emailid&#125;`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:&#123;projectid&#125;.svc.id.goog[&#123;namespace&#125;/&#123;kubernetes-sa&#125;]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:&#123;emailid&#125;`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:&#123;domain&#125;`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/&#123;pool_id&#125;/subject/&#123;subject_attribute_value&#125;`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/&#123;pool_id&#125;/group/&#123;group_id&#125;`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/&#123;pool_id&#125;/attribute.&#123;attribute_name&#125;/&#123;attribute_value&#125;`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/&#123;pool_id&#125;/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/&#123;project_number&#125;/locations/global/workloadIdentityPools/&#123;pool_id&#125;/subject/&#123;subject_attribute_value&#125;`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/&#123;project_number&#125;/locations/global/workloadIdentityPools/&#123;pool_id&#125;/group/&#123;group_id&#125;`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/&#123;project_number&#125;/locations/global/workloadIdentityPools/&#123;pool_id&#125;/attribute.&#123;attribute_name&#125;/&#123;attribute_value&#125;`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/&#123;project_number&#125;/locations/global/workloadIdentityPools/&#123;pool_id&#125;/*`: All identities in a workload identity pool. * `deleted:user:&#123;emailid&#125;?uid=&#123;uniqueid&#125;`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:&#123;emailid&#125;` and the recovered user retains the role in the binding. * `deleted:serviceAccount:&#123;emailid&#125;?uid=&#123;uniqueid&#125;`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:&#123;emailid&#125;` and the undeleted service account retains the role in the binding. * `deleted:group:&#123;emailid&#125;?uid=&#123;uniqueid&#125;`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:&#123;emailid&#125;` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/&#123;pool_id&#125;/subject/&#123;subject_attribute_value&#125;`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td><a href="#parameter-optionsRequestedPolicyVersion"><code>optionsRequestedPolicyVersion</code></a></td>
    <td>Gets the access control policy for a resource. May be empty if no such policy or resource exists.</td>
</tr>
<tr>
    <td><a href="#set_iam_policy"><CopyableCode code="set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the access control policy on the specified resource. Replaces any existing policy.</td>
</tr>
<tr>
    <td><a href="#test_iam_permissions"><CopyableCode code="test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Returns permissions that a caller has on the specified resource.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-optionsRequestedPolicyVersion">
    <td><CopyableCode code="optionsRequestedPolicyVersion" /></td>
    <td><code>integer (int32)</code></td>
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

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

```sql
SELECT
condition,
members,
role
FROM google.compute.service_attachments_iam_policies
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND resource = '{{ resource }}' -- required
AND optionsRequestedPolicyVersion = '{{ optionsRequestedPolicyVersion }}';
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

Sets the access control policy on the specified resource. Replaces any existing policy.

```sql
REPLACE google.compute.service_attachments_iam_policies
SET 
data__policy = '{{ policy }}',
data__bindings = '{{ bindings }}',
data__etag = '{{ etag }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND resource = '{{ resource }}' --required
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
    defaultValue="test_iam_permissions"
    values={[
        { label: 'test_iam_permissions', value: 'test_iam_permissions' }
    ]}
>
<TabItem value="test_iam_permissions">

Returns permissions that a caller has on the specified resource.

```sql
EXEC google.compute.service_attachments_iam_policies.test_iam_permissions 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@resource='{{ resource }}' --required 
@@json=
'{
"permissions": "{{ permissions }}"
}';
```
</TabItem>
</Tabs>
