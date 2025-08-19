--- 
title: policies_effective_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - policies_effective_policy
  - orgpolicy
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

Creates, updates, deletes, gets or lists a <code>policies_effective_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies_effective_policy</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.orgpolicy.policies_effective_policy" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_policies_get_effective_policy"
    values={[
        { label: 'projects_policies_get_effective_policy', value: 'projects_policies_get_effective_policy' },
        { label: 'folders_policies_get_effective_policy', value: 'folders_policies_get_effective_policy' },
        { label: 'organizations_policies_get_effective_policy', value: 'organizations_policies_get_effective_policy' }
    ]}
>
<TabItem value="projects_policies_get_effective_policy">

Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.

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
    <td>Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125;` * `folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125;` * `organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/&#123;project_id&#125;/policies/&#123;constraint_name&#125;` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.</td>
</tr>
<tr>
    <td><CopyableCode code="alternate" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: GoogleCloudOrgpolicyV2AlternatePolicySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dryRunSpec" /></td>
    <td><code>object</code></td>
    <td>Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced. (id: GoogleCloudOrgpolicyV2PolicySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This 'etag' is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Basic information about the organization policy. (id: GoogleCloudOrgpolicyV2PolicySpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_policies_get_effective_policy">

Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.

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
    <td>Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125;` * `folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125;` * `organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/&#123;project_id&#125;/policies/&#123;constraint_name&#125;` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.</td>
</tr>
<tr>
    <td><CopyableCode code="alternate" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: GoogleCloudOrgpolicyV2AlternatePolicySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dryRunSpec" /></td>
    <td><code>object</code></td>
    <td>Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced. (id: GoogleCloudOrgpolicyV2PolicySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This 'etag' is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Basic information about the organization policy. (id: GoogleCloudOrgpolicyV2PolicySpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_policies_get_effective_policy">

Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.

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
    <td>Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/&#123;project_number&#125;/policies/&#123;constraint_name&#125;` * `folders/&#123;folder_id&#125;/policies/&#123;constraint_name&#125;` * `organizations/&#123;organization_id&#125;/policies/&#123;constraint_name&#125;` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/&#123;project_id&#125;/policies/&#123;constraint_name&#125;` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.</td>
</tr>
<tr>
    <td><CopyableCode code="alternate" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: GoogleCloudOrgpolicyV2AlternatePolicySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dryRunSpec" /></td>
    <td><code>object</code></td>
    <td>Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced. (id: GoogleCloudOrgpolicyV2PolicySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This 'etag' is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Basic information about the organization policy. (id: GoogleCloudOrgpolicyV2PolicySpec)</td>
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
    <td><a href="#projects_policies_get_effective_policy"><CopyableCode code="projects_policies_get_effective_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.</td>
</tr>
<tr>
    <td><a href="#folders_policies_get_effective_policy"><CopyableCode code="folders_policies_get_effective_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.</td>
</tr>
<tr>
    <td><a href="#organizations_policies_get_effective_policy"><CopyableCode code="organizations_policies_get_effective_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-policiesId">
    <td><CopyableCode code="policiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_policies_get_effective_policy"
    values={[
        { label: 'projects_policies_get_effective_policy', value: 'projects_policies_get_effective_policy' },
        { label: 'folders_policies_get_effective_policy', value: 'folders_policies_get_effective_policy' },
        { label: 'organizations_policies_get_effective_policy', value: 'organizations_policies_get_effective_policy' }
    ]}
>
<TabItem value="projects_policies_get_effective_policy">

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies_effective_policy
WHERE projectsId = '{{ projectsId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="folders_policies_get_effective_policy">

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies_effective_policy
WHERE foldersId = '{{ foldersId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_policies_get_effective_policy">

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies_effective_policy
WHERE organizationsId = '{{ organizationsId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
</Tabs>
