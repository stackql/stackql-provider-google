--- 
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
  - iam
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

Creates, updates, deletes, gets or lists a <code>roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>roles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iam.roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project_roles"
    values={[
        { label: 'get_project_roles', value: 'get_project_roles' },
        { label: 'get_org_roles', value: 'get_org_roles' },
        { label: 'list_project_roles', value: 'list_project_roles' },
        { label: 'get', value: 'get' },
        { label: 'list_org_roles', value: 'list_org_roles' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_project_roles">

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
    <td>The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/&#123;ORGANIZATION_ID&#125;/roles/myRole` for organization-level custom roles, and `projects/&#123;PROJECT_ID&#125;/roles/myRole` for project-level custom roles.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Used to perform a consistent read-modify-write.</td>
</tr>
<tr>
    <td><CopyableCode code="includedPermissions" /></td>
    <td><code>array</code></td>
    <td>The names of the permissions this role grants when bound in an IAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_roles">

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
    <td>The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/&#123;ORGANIZATION_ID&#125;/roles/myRole` for organization-level custom roles, and `projects/&#123;PROJECT_ID&#125;/roles/myRole` for project-level custom roles.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Used to perform a consistent read-modify-write.</td>
</tr>
<tr>
    <td><CopyableCode code="includedPermissions" /></td>
    <td><code>array</code></td>
    <td>The names of the permissions this role grants when bound in an IAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_project_roles">

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
    <td>The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/&#123;ORGANIZATION_ID&#125;/roles/myRole` for organization-level custom roles, and `projects/&#123;PROJECT_ID&#125;/roles/myRole` for project-level custom roles.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Used to perform a consistent read-modify-write.</td>
</tr>
<tr>
    <td><CopyableCode code="includedPermissions" /></td>
    <td><code>array</code></td>
    <td>The names of the permissions this role grants when bound in an IAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/&#123;ORGANIZATION_ID&#125;/roles/myRole` for organization-level custom roles, and `projects/&#123;PROJECT_ID&#125;/roles/myRole` for project-level custom roles.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Used to perform a consistent read-modify-write.</td>
</tr>
<tr>
    <td><CopyableCode code="includedPermissions" /></td>
    <td><code>array</code></td>
    <td>The names of the permissions this role grants when bound in an IAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_roles">

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
    <td>The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/&#123;ORGANIZATION_ID&#125;/roles/myRole` for organization-level custom roles, and `projects/&#123;PROJECT_ID&#125;/roles/myRole` for project-level custom roles.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Used to perform a consistent read-modify-write.</td>
</tr>
<tr>
    <td><CopyableCode code="includedPermissions" /></td>
    <td><code>array</code></td>
    <td>The names of the permissions this role grants when bound in an IAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/&#123;ORGANIZATION_ID&#125;/roles/myRole` for organization-level custom roles, and `projects/&#123;PROJECT_ID&#125;/roles/myRole` for project-level custom roles.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>Used to perform a consistent read-modify-write.</td>
</tr>
<tr>
    <td><CopyableCode code="includedPermissions" /></td>
    <td><code>array</code></td>
    <td>The names of the permissions this role grants when bound in an IAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes.</td>
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
    <td><a href="#get_project_roles"><CopyableCode code="get_project_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td></td>
    <td>Gets the definition of a Role.</td>
</tr>
<tr>
    <td><a href="#get_org_roles"><CopyableCode code="get_org_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td></td>
    <td>Gets the definition of a Role.</td>
</tr>
<tr>
    <td><a href="#list_project_roles"><CopyableCode code="list_project_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td></td>
    <td>Gets the definition of a Role.</td>
</tr>
<tr>
    <td><a href="#list_org_roles"><CopyableCode code="list_org_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.</td>
</tr>
<tr>
    <td><a href="#create_project_roles"><CopyableCode code="create_project_roles" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new custom Role.</td>
</tr>
<tr>
    <td><a href="#create_org_roles"><CopyableCode code="create_org_roles" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a new custom Role.</td>
</tr>
<tr>
    <td><a href="#patch_project_roles"><CopyableCode code="patch_project_roles" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the definition of a custom Role.</td>
</tr>
<tr>
    <td><a href="#patch_org_roles"><CopyableCode code="patch_org_roles" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the definition of a custom Role.</td>
</tr>
<tr>
    <td><a href="#delete_project_roles"><CopyableCode code="delete_project_roles" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.</td>
</tr>
<tr>
    <td><a href="#delete_org_roles"><CopyableCode code="delete_org_roles" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.</td>
</tr>
<tr>
    <td><a href="#undelete_project_roles"><CopyableCode code="undelete_project_roles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td></td>
    <td>Undeletes a custom Role.</td>
</tr>
<tr>
    <td><a href="#query_grantable_roles"><CopyableCode code="query_grantable_roles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.</td>
</tr>
<tr>
    <td><a href="#undelete_org_roles"><CopyableCode code="undelete_org_roles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-rolesId"><code>rolesId</code></a></td>
    <td></td>
    <td>Undeletes a custom Role.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rolesId">
    <td><CopyableCode code="rolesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_project_roles"
    values={[
        { label: 'get_project_roles', value: 'get_project_roles' },
        { label: 'get_org_roles', value: 'get_org_roles' },
        { label: 'list_project_roles', value: 'list_project_roles' },
        { label: 'get', value: 'get' },
        { label: 'list_org_roles', value: 'list_org_roles' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_project_roles">

Gets the definition of a Role.

```sql
SELECT
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
FROM google.iam.roles
WHERE projectsId = '{{ projectsId }}' -- required
AND rolesId = '{{ rolesId }}' -- required;
```
</TabItem>
<TabItem value="get_org_roles">

Gets the definition of a Role.

```sql
SELECT
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
FROM google.iam.roles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND rolesId = '{{ rolesId }}' -- required;
```
</TabItem>
<TabItem value="list_project_roles">

Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

```sql
SELECT
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
FROM google.iam.roles
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
AND showDeleted = '{{ showDeleted }}';
```
</TabItem>
<TabItem value="get">

Gets the definition of a Role.

```sql
SELECT
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
FROM google.iam.roles
WHERE rolesId = '{{ rolesId }}' -- required;
```
</TabItem>
<TabItem value="list_org_roles">

Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

```sql
SELECT
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
FROM google.iam.roles
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
AND showDeleted = '{{ showDeleted }}';
```
</TabItem>
<TabItem value="list">

Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.

```sql
SELECT
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
FROM google.iam.roles
WHERE parent = '{{ parent }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
AND showDeleted = '{{ showDeleted }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project_roles"
    values={[
        { label: 'create_project_roles', value: 'create_project_roles' },
        { label: 'create_org_roles', value: 'create_org_roles' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project_roles">

Creates a new custom Role.

```sql
INSERT INTO google.iam.roles (
data__roleId,
data__role,
projectsId
)
SELECT 
'{{ roleId }}',
'{{ role }}',
'{{ projectsId }}'
RETURNING
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
;
```
</TabItem>
<TabItem value="create_org_roles">

Creates a new custom Role.

```sql
INSERT INTO google.iam.roles (
data__roleId,
data__role,
organizationsId
)
SELECT 
'{{ roleId }}',
'{{ role }}',
'{{ organizationsId }}'
RETURNING
name,
deleted,
description,
etag,
includedPermissions,
stage,
title
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: roles
  props:
    - name: projectsId
      value: string
      description: Required parameter for the roles resource.
    - name: organizationsId
      value: string
      description: Required parameter for the roles resource.
    - name: roleId
      value: string
      description: >
        The role ID to use for this role. A role ID may contain alphanumeric characters, underscores (`_`), and periods (`.`). It must contain a minimum of 3 characters and a maximum of 64 characters.
        
    - name: role
      value: object
      description: >
        A role in the Identity and Access Management API.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_project_roles"
    values={[
        { label: 'patch_project_roles', value: 'patch_project_roles' },
        { label: 'patch_org_roles', value: 'patch_org_roles' }
    ]}
>
<TabItem value="patch_project_roles">

Updates the definition of a custom Role.

```sql
UPDATE google.iam.roles
SET 
data__name = '{{ name }}',
data__title = '{{ title }}',
data__description = '{{ description }}',
data__includedPermissions = '{{ includedPermissions }}',
data__stage = '{{ stage }}',
data__etag = '{{ etag }}',
data__deleted = {{ deleted }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND rolesId = '{{ rolesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
deleted,
description,
etag,
includedPermissions,
stage,
title;
```
</TabItem>
<TabItem value="patch_org_roles">

Updates the definition of a custom Role.

```sql
UPDATE google.iam.roles
SET 
data__name = '{{ name }}',
data__title = '{{ title }}',
data__description = '{{ description }}',
data__includedPermissions = '{{ includedPermissions }}',
data__stage = '{{ stage }}',
data__etag = '{{ etag }}',
data__deleted = {{ deleted }}
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND rolesId = '{{ rolesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
deleted,
description,
etag,
includedPermissions,
stage,
title;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project_roles"
    values={[
        { label: 'delete_project_roles', value: 'delete_project_roles' },
        { label: 'delete_org_roles', value: 'delete_org_roles' }
    ]}
>
<TabItem value="delete_project_roles">

Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.

```sql
DELETE FROM google.iam.roles
WHERE projectsId = '{{ projectsId }}' --required
AND rolesId = '{{ rolesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
<TabItem value="delete_org_roles">

Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a principal to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. A deleted custom role still counts toward the [custom role limit](https://cloud.google.com/iam/help/limits) until it is permanently deleted. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed. * The custom role no longer counts toward your custom role limit.

```sql
DELETE FROM google.iam.roles
WHERE organizationsId = '{{ organizationsId }}' --required
AND rolesId = '{{ rolesId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete_project_roles"
    values={[
        { label: 'undelete_project_roles', value: 'undelete_project_roles' },
        { label: 'query_grantable_roles', value: 'query_grantable_roles' },
        { label: 'undelete_org_roles', value: 'undelete_org_roles' }
    ]}
>
<TabItem value="undelete_project_roles">

Undeletes a custom Role.

```sql
EXEC google.iam.roles.undelete_project_roles 
@projectsId='{{ projectsId }}' --required, 
@rolesId='{{ rolesId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="query_grantable_roles">

Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.

```sql
EXEC google.iam.roles.query_grantable_roles 
@@json=
'{
"fullResourceName": "{{ fullResourceName }}", 
"view": "{{ view }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
<TabItem value="undelete_org_roles">

Undeletes a custom Role.

```sql
EXEC google.iam.roles.undelete_org_roles 
@organizationsId='{{ organizationsId }}' --required, 
@rolesId='{{ rolesId }}' --required 
@@json=
'{
"etag": "{{ etag }}"
}';
```
</TabItem>
</Tabs>
