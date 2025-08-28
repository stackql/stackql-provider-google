--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.orgpolicy.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_policies_get"
    values={[
        { label: 'projects_policies_get', value: 'projects_policies_get' },
        { label: 'folders_policies_get', value: 'folders_policies_get' },
        { label: 'organizations_policies_get', value: 'organizations_policies_get' },
        { label: 'projects_policies_list', value: 'projects_policies_list' },
        { label: 'folders_policies_list', value: 'folders_policies_list' },
        { label: 'organizations_policies_list', value: 'organizations_policies_list' }
    ]}
>
<TabItem value="projects_policies_get">

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
<TabItem value="folders_policies_get">

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
<TabItem value="organizations_policies_get">

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
<TabItem value="projects_policies_list">

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
<TabItem value="folders_policies_list">

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
<TabItem value="organizations_policies_list">

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
    <td><a href="#projects_policies_get"><CopyableCode code="projects_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.</td>
</tr>
<tr>
    <td><a href="#folders_policies_get"><CopyableCode code="folders_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.</td>
</tr>
<tr>
    <td><a href="#organizations_policies_get"><CopyableCode code="organizations_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.</td>
</tr>
<tr>
    <td><a href="#projects_policies_list"><CopyableCode code="projects_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves all of the policies that exist on a particular resource.</td>
</tr>
<tr>
    <td><a href="#folders_policies_list"><CopyableCode code="folders_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves all of the policies that exist on a particular resource.</td>
</tr>
<tr>
    <td><a href="#organizations_policies_list"><CopyableCode code="organizations_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves all of the policies that exist on a particular resource.</td>
</tr>
<tr>
    <td><a href="#projects_policies_create"><CopyableCode code="projects_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.</td>
</tr>
<tr>
    <td><a href="#folders_policies_create"><CopyableCode code="folders_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.</td>
</tr>
<tr>
    <td><a href="#organizations_policies_create"><CopyableCode code="organizations_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.</td>
</tr>
<tr>
    <td><a href="#projects_policies_patch"><CopyableCode code="projects_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.</td>
</tr>
<tr>
    <td><a href="#folders_policies_patch"><CopyableCode code="folders_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.</td>
</tr>
<tr>
    <td><a href="#organizations_policies_patch"><CopyableCode code="organizations_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.</td>
</tr>
<tr>
    <td><a href="#projects_policies_delete"><CopyableCode code="projects_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.</td>
</tr>
<tr>
    <td><a href="#folders_policies_delete"><CopyableCode code="folders_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.</td>
</tr>
<tr>
    <td><a href="#organizations_policies_delete"><CopyableCode code="organizations_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_policies_get"
    values={[
        { label: 'projects_policies_get', value: 'projects_policies_get' },
        { label: 'folders_policies_get', value: 'folders_policies_get' },
        { label: 'organizations_policies_get', value: 'organizations_policies_get' },
        { label: 'projects_policies_list', value: 'projects_policies_list' },
        { label: 'folders_policies_list', value: 'folders_policies_list' },
        { label: 'organizations_policies_list', value: 'organizations_policies_list' }
    ]}
>
<TabItem value="projects_policies_get">

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies
WHERE projectsId = '{{ projectsId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="folders_policies_get">

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies
WHERE foldersId = '{{ foldersId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_policies_get">

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies
WHERE organizationsId = '{{ organizationsId }}' -- required
AND policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="projects_policies_list">

Retrieves all of the policies that exist on a particular resource.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="folders_policies_list">

Retrieves all of the policies that exist on a particular resource.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_policies_list">

Retrieves all of the policies that exist on a particular resource.

```sql
SELECT
name,
alternate,
dryRunSpec,
etag,
spec
FROM google.orgpolicy.policies
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_policies_create"
    values={[
        { label: 'projects_policies_create', value: 'projects_policies_create' },
        { label: 'folders_policies_create', value: 'folders_policies_create' },
        { label: 'organizations_policies_create', value: 'organizations_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_policies_create">

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

```sql
INSERT INTO google.orgpolicy.policies (
data__name,
data__spec,
data__alternate,
data__dryRunSpec,
data__etag,
projectsId
)
SELECT 
'{{ name }}',
'{{ spec }}',
'{{ alternate }}',
'{{ dryRunSpec }}',
'{{ etag }}',
'{{ projectsId }}'
RETURNING
name,
alternate,
dryRunSpec,
etag,
spec
;
```
</TabItem>
<TabItem value="folders_policies_create">

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

```sql
INSERT INTO google.orgpolicy.policies (
data__name,
data__spec,
data__alternate,
data__dryRunSpec,
data__etag,
foldersId
)
SELECT 
'{{ name }}',
'{{ spec }}',
'{{ alternate }}',
'{{ dryRunSpec }}',
'{{ etag }}',
'{{ foldersId }}'
RETURNING
name,
alternate,
dryRunSpec,
etag,
spec
;
```
</TabItem>
<TabItem value="organizations_policies_create">

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

```sql
INSERT INTO google.orgpolicy.policies (
data__name,
data__spec,
data__alternate,
data__dryRunSpec,
data__etag,
organizationsId
)
SELECT 
'{{ name }}',
'{{ spec }}',
'{{ alternate }}',
'{{ dryRunSpec }}',
'{{ etag }}',
'{{ organizationsId }}'
RETURNING
name,
alternate,
dryRunSpec,
etag,
spec
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the policies resource.
    - name: foldersId
      value: string
      description: Required parameter for the policies resource.
    - name: organizationsId
      value: string
      description: Required parameter for the policies resource.
    - name: name
      value: string
      description: >
        Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
        
    - name: spec
      value: object
      description: >
        Basic information about the organization policy.
        
    - name: alternate
      value: object
      description: >
        Deprecated.
        
    - name: dryRunSpec
      value: object
      description: >
        Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.
        
    - name: etag
      value: string
      description: >
        Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This 'etag' is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_policies_patch"
    values={[
        { label: 'projects_policies_patch', value: 'projects_policies_patch' },
        { label: 'folders_policies_patch', value: 'folders_policies_patch' },
        { label: 'organizations_policies_patch', value: 'organizations_policies_patch' }
    ]}
>
<TabItem value="projects_policies_patch">

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

```sql
UPDATE google.orgpolicy.policies
SET 
data__name = '{{ name }}',
data__spec = '{{ spec }}',
data__alternate = '{{ alternate }}',
data__dryRunSpec = '{{ dryRunSpec }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
alternate,
dryRunSpec,
etag,
spec;
```
</TabItem>
<TabItem value="folders_policies_patch">

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

```sql
UPDATE google.orgpolicy.policies
SET 
data__name = '{{ name }}',
data__spec = '{{ spec }}',
data__alternate = '{{ alternate }}',
data__dryRunSpec = '{{ dryRunSpec }}',
data__etag = '{{ etag }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
alternate,
dryRunSpec,
etag,
spec;
```
</TabItem>
<TabItem value="organizations_policies_patch">

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

```sql
UPDATE google.orgpolicy.policies
SET 
data__name = '{{ name }}',
data__spec = '{{ spec }}',
data__alternate = '{{ alternate }}',
data__dryRunSpec = '{{ dryRunSpec }}',
data__etag = '{{ etag }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
alternate,
dryRunSpec,
etag,
spec;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_policies_delete"
    values={[
        { label: 'projects_policies_delete', value: 'projects_policies_delete' },
        { label: 'folders_policies_delete', value: 'folders_policies_delete' },
        { label: 'organizations_policies_delete', value: 'organizations_policies_delete' }
    ]}
>
<TabItem value="projects_policies_delete">

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

```sql
DELETE FROM google.orgpolicy.policies
WHERE projectsId = '{{ projectsId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
<TabItem value="folders_policies_delete">

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

```sql
DELETE FROM google.orgpolicy.policies
WHERE foldersId = '{{ foldersId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
<TabItem value="organizations_policies_delete">

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

```sql
DELETE FROM google.orgpolicy.policies
WHERE organizationsId = '{{ organizationsId }}' --required
AND policiesId = '{{ policiesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
