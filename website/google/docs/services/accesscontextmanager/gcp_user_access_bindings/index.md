--- 
title: gcp_user_access_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - gcp_user_access_bindings
  - accesscontextmanager
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

Creates, updates, deletes, gets or lists a <code>gcp_user_access_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>gcp_user_access_bindings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accesscontextmanager.gcp_user_access_bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"</td>
</tr>
<tr>
    <td><CopyableCode code="accessLevels" /></td>
    <td><code>array</code></td>
    <td>Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"</td>
</tr>
<tr>
    <td><CopyableCode code="dryRunAccessLevels" /></td>
    <td><code>array</code></td>
    <td>Optional. Dry run access level that will be evaluated but will not be enforced. The access denial based on dry run policy will be logged. Only one access level is supported, not multiple. This list must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"</td>
</tr>
<tr>
    <td><CopyableCode code="groupKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Google Group id whose users are subject to this binding's restrictions. See "id" in the [Google Workspace Directory API's Group Resource] (https://developers.google.com/admin-sdk/directory/v1/reference/groups#resource). If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedClientApplications" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of applications that are subject to this binding's restrictions. If the list is empty, the binding restrictions will universally apply to all applications.</td>
</tr>
<tr>
    <td><CopyableCode code="scopedAccessSettings" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of scoped access settings that set this binding's restrictions on a subset of applications. This field cannot be set if restricted_client_applications is set.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The Google Cloud session length (GCSL) policy for the group key. (id: SessionSettings)</td>
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
    <td>Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"</td>
</tr>
<tr>
    <td><CopyableCode code="accessLevels" /></td>
    <td><code>array</code></td>
    <td>Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"</td>
</tr>
<tr>
    <td><CopyableCode code="dryRunAccessLevels" /></td>
    <td><code>array</code></td>
    <td>Optional. Dry run access level that will be evaluated but will not be enforced. The access denial based on dry run policy will be logged. Only one access level is supported, not multiple. This list must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"</td>
</tr>
<tr>
    <td><CopyableCode code="groupKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Google Group id whose users are subject to this binding's restrictions. See "id" in the [Google Workspace Directory API's Group Resource] (https://developers.google.com/admin-sdk/directory/v1/reference/groups#resource). If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedClientApplications" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of applications that are subject to this binding's restrictions. If the list is empty, the binding restrictions will universally apply to all applications.</td>
</tr>
<tr>
    <td><CopyableCode code="scopedAccessSettings" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of scoped access settings that set this binding's restrictions on a subset of applications. This field cannot be set if restricted_client_applications is set.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The Google Cloud session length (GCSL) policy for the group key. (id: SessionSettings)</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-gcpUserAccessBindingsId"><code>gcpUserAccessBindingsId</code></a></td>
    <td></td>
    <td>Gets the GcpUserAccessBinding with the given name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all GcpUserAccessBindings for a Google Cloud organization.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-gcpUserAccessBindingsId"><code>gcpUserAccessBindingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-append"><code>append</code></a></td>
    <td>Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-gcpUserAccessBindingsId"><code>gcpUserAccessBindingsId</code></a></td>
    <td></td>
    <td>Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.</td>
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
<tr id="parameter-gcpUserAccessBindingsId">
    <td><CopyableCode code="gcpUserAccessBindingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-append">
    <td><CopyableCode code="append" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the GcpUserAccessBinding with the given name.

```sql
SELECT
name,
accessLevels,
dryRunAccessLevels,
groupKey,
restrictedClientApplications,
scopedAccessSettings,
sessionSettings
FROM google.accesscontextmanager.gcp_user_access_bindings
WHERE organizationsId = '{{ organizationsId }}' -- required
AND gcpUserAccessBindingsId = '{{ gcpUserAccessBindingsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all GcpUserAccessBindings for a Google Cloud organization.

```sql
SELECT
name,
accessLevels,
dryRunAccessLevels,
groupKey,
restrictedClientApplications,
scopedAccessSettings,
sessionSettings
FROM google.accesscontextmanager.gcp_user_access_bindings
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.

```sql
INSERT INTO google.accesscontextmanager.gcp_user_access_bindings (
data__name,
data__groupKey,
data__accessLevels,
data__dryRunAccessLevels,
data__sessionSettings,
data__restrictedClientApplications,
data__scopedAccessSettings,
organizationsId
)
SELECT 
'{{ name }}',
'{{ groupKey }}',
'{{ accessLevels }}',
'{{ dryRunAccessLevels }}',
'{{ sessionSettings }}',
'{{ restrictedClientApplications }}',
'{{ scopedAccessSettings }}',
'{{ organizationsId }}'
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
- name: gcp_user_access_bindings
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the gcp_user_access_bindings resource.
    - name: name
      value: string
      description: >
        Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
        
    - name: groupKey
      value: string
      description: >
        Optional. Immutable. Google Group id whose users are subject to this binding's restrictions. See "id" in the [Google Workspace Directory API's Group Resource] (https://developers.google.com/admin-sdk/directory/v1/reference/groups#resource). If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
        
    - name: accessLevels
      value: array
      description: >
        Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
        
    - name: dryRunAccessLevels
      value: array
      description: >
        Optional. Dry run access level that will be evaluated but will not be enforced. The access denial based on dry run policy will be logged. Only one access level is supported, not multiple. This list must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
        
    - name: sessionSettings
      value: object
      description: >
        Optional. The Google Cloud session length (GCSL) policy for the group key.
        
    - name: restrictedClientApplications
      value: array
      description: >
        Optional. A list of applications that are subject to this binding's restrictions. If the list is empty, the binding restrictions will universally apply to all applications.
        
    - name: scopedAccessSettings
      value: array
      description: >
        Optional. A list of scoped access settings that set this binding's restrictions on a subset of applications. This field cannot be set if restricted_client_applications is set.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

```sql
UPDATE google.accesscontextmanager.gcp_user_access_bindings
SET 
data__name = '{{ name }}',
data__groupKey = '{{ groupKey }}',
data__accessLevels = '{{ accessLevels }}',
data__dryRunAccessLevels = '{{ dryRunAccessLevels }}',
data__sessionSettings = '{{ sessionSettings }}',
data__restrictedClientApplications = '{{ restrictedClientApplications }}',
data__scopedAccessSettings = '{{ scopedAccessSettings }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND gcpUserAccessBindingsId = '{{ gcpUserAccessBindingsId }}' --required
AND updateMask = '{{ updateMask}}'
AND append = {{ append}}
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

Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.

```sql
DELETE FROM google.accesscontextmanager.gcp_user_access_bindings
WHERE organizationsId = '{{ organizationsId }}' --required
AND gcpUserAccessBindingsId = '{{ gcpUserAccessBindingsId }}' --required;
```
</TabItem>
</Tabs>
