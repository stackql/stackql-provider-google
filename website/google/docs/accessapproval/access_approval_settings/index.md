--- 
title: access_approval_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - access_approval_settings
  - accessapproval
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

Creates, updates, deletes, gets or lists an <code>access_approval_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>access_approval_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accessapproval.access_approval_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_get_access_approval_settings"
    values={[
        { label: 'projects_get_access_approval_settings', value: 'projects_get_access_approval_settings' },
        { label: 'folders_get_access_approval_settings', value: 'folders_get_access_approval_settings' },
        { label: 'organizations_get_access_approval_settings', value: 'organizations_get_access_approval_settings' }
    ]}
>
<TabItem value="projects_get_access_approval_settings">

Settings on a Project/Folder/Organization related to Access Approval.

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
    <td>The resource name of the settings. Format is one of: * "projects/&#123;project&#125;/accessApprovalSettings" * "folders/&#123;folder&#125;/accessApprovalSettings" * "organizations/&#123;organization&#125;/accessApprovalSettings"</td>
</tr>
<tr>
    <td><CopyableCode code="activeKeyVersion" /></td>
    <td><code>string</code></td>
    <td>The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorHasActiveKeyVersion" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors).</td>
</tr>
<tr>
    <td><CopyableCode code="approvalPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Policy for approval. This contains all policies. (id: CustomerApprovalApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveApprovalPolicy" /></td>
    <td><code>object</code></td>
    <td>Output only. Policy for approval included inherited settings to understand the exact policy applied to this resource. This is a read-only field. (id: CustomerApprovalApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="enrolledAncestor" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).</td>
</tr>
<tr>
    <td><CopyableCode code="enrolledServices" /></td>
    <td><code>array</code></td>
    <td>A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidKeyVersion" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationEmails" /></td>
    <td><code>array</code></td>
    <td>A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Optional. A pubsub topic to which notifications relating to approval requests should be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="preferNoBroadApprovalRequests" /></td>
    <td><code>boolean</code></td>
    <td>This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredRequestExpirationDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestScopeMaxWidthPreference" /></td>
    <td><code>string</code></td>
    <td>Optional. A setting to indicate the maximum width of an Access Approval request.</td>
</tr>
<tr>
    <td><CopyableCode code="requireCustomerVisibleJustification" /></td>
    <td><code>boolean</code></td>
    <td>Optional. A setting to require approval request justifications to be customer visible.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_get_access_approval_settings">

Settings on a Project/Folder/Organization related to Access Approval.

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
    <td>The resource name of the settings. Format is one of: * "projects/&#123;project&#125;/accessApprovalSettings" * "folders/&#123;folder&#125;/accessApprovalSettings" * "organizations/&#123;organization&#125;/accessApprovalSettings"</td>
</tr>
<tr>
    <td><CopyableCode code="activeKeyVersion" /></td>
    <td><code>string</code></td>
    <td>The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorHasActiveKeyVersion" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors).</td>
</tr>
<tr>
    <td><CopyableCode code="approvalPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Policy for approval. This contains all policies. (id: CustomerApprovalApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveApprovalPolicy" /></td>
    <td><code>object</code></td>
    <td>Output only. Policy for approval included inherited settings to understand the exact policy applied to this resource. This is a read-only field. (id: CustomerApprovalApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="enrolledAncestor" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).</td>
</tr>
<tr>
    <td><CopyableCode code="enrolledServices" /></td>
    <td><code>array</code></td>
    <td>A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidKeyVersion" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationEmails" /></td>
    <td><code>array</code></td>
    <td>A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Optional. A pubsub topic to which notifications relating to approval requests should be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="preferNoBroadApprovalRequests" /></td>
    <td><code>boolean</code></td>
    <td>This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredRequestExpirationDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestScopeMaxWidthPreference" /></td>
    <td><code>string</code></td>
    <td>Optional. A setting to indicate the maximum width of an Access Approval request.</td>
</tr>
<tr>
    <td><CopyableCode code="requireCustomerVisibleJustification" /></td>
    <td><code>boolean</code></td>
    <td>Optional. A setting to require approval request justifications to be customer visible.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_get_access_approval_settings">

Settings on a Project/Folder/Organization related to Access Approval.

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
    <td>The resource name of the settings. Format is one of: * "projects/&#123;project&#125;/accessApprovalSettings" * "folders/&#123;folder&#125;/accessApprovalSettings" * "organizations/&#123;organization&#125;/accessApprovalSettings"</td>
</tr>
<tr>
    <td><CopyableCode code="activeKeyVersion" /></td>
    <td><code>string</code></td>
    <td>The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.</td>
</tr>
<tr>
    <td><CopyableCode code="ancestorHasActiveKeyVersion" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors).</td>
</tr>
<tr>
    <td><CopyableCode code="approvalPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Policy for approval. This contains all policies. (id: CustomerApprovalApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveApprovalPolicy" /></td>
    <td><code>object</code></td>
    <td>Output only. Policy for approval included inherited settings to understand the exact policy applied to this resource. This is a read-only field. (id: CustomerApprovalApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="enrolledAncestor" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).</td>
</tr>
<tr>
    <td><CopyableCode code="enrolledServices" /></td>
    <td><code>array</code></td>
    <td>A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.</td>
</tr>
<tr>
    <td><CopyableCode code="invalidKeyVersion" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationEmails" /></td>
    <td><code>array</code></td>
    <td>A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationPubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Optional. A pubsub topic to which notifications relating to approval requests should be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="preferNoBroadApprovalRequests" /></td>
    <td><code>boolean</code></td>
    <td>This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredRequestExpirationDays" /></td>
    <td><code>integer (int32)</code></td>
    <td>This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time.</td>
</tr>
<tr>
    <td><CopyableCode code="requestScopeMaxWidthPreference" /></td>
    <td><code>string</code></td>
    <td>Optional. A setting to indicate the maximum width of an Access Approval request.</td>
</tr>
<tr>
    <td><CopyableCode code="requireCustomerVisibleJustification" /></td>
    <td><code>boolean</code></td>
    <td>Optional. A setting to require approval request justifications to be customer visible.</td>
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
    <td><a href="#projects_get_access_approval_settings"><CopyableCode code="projects_get_access_approval_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets the settings associated with a project, folder, or organization.</td>
</tr>
<tr>
    <td><a href="#folders_get_access_approval_settings"><CopyableCode code="folders_get_access_approval_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Gets the settings associated with a project, folder, or organization.</td>
</tr>
<tr>
    <td><a href="#organizations_get_access_approval_settings"><CopyableCode code="organizations_get_access_approval_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Gets the settings associated with a project, folder, or organization.</td>
</tr>
<tr>
    <td><a href="#projects_update_access_approval_settings"><CopyableCode code="projects_update_access_approval_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.</td>
</tr>
<tr>
    <td><a href="#folders_update_access_approval_settings"><CopyableCode code="folders_update_access_approval_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.</td>
</tr>
<tr>
    <td><a href="#organizations_update_access_approval_settings"><CopyableCode code="organizations_update_access_approval_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.</td>
</tr>
<tr>
    <td><a href="#projects_delete_access_approval_settings"><CopyableCode code="projects_delete_access_approval_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.</td>
</tr>
<tr>
    <td><a href="#folders_delete_access_approval_settings"><CopyableCode code="folders_delete_access_approval_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.</td>
</tr>
<tr>
    <td><a href="#organizations_delete_access_approval_settings"><CopyableCode code="organizations_delete_access_approval_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
    defaultValue="projects_get_access_approval_settings"
    values={[
        { label: 'projects_get_access_approval_settings', value: 'projects_get_access_approval_settings' },
        { label: 'folders_get_access_approval_settings', value: 'folders_get_access_approval_settings' },
        { label: 'organizations_get_access_approval_settings', value: 'organizations_get_access_approval_settings' }
    ]}
>
<TabItem value="projects_get_access_approval_settings">

Gets the settings associated with a project, folder, or organization.

```sql
SELECT
name,
activeKeyVersion,
ancestorHasActiveKeyVersion,
approvalPolicy,
effectiveApprovalPolicy,
enrolledAncestor,
enrolledServices,
invalidKeyVersion,
notificationEmails,
notificationPubsubTopic,
preferNoBroadApprovalRequests,
preferredRequestExpirationDays,
requestScopeMaxWidthPreference,
requireCustomerVisibleJustification
FROM google.accessapproval.access_approval_settings
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
<TabItem value="folders_get_access_approval_settings">

Gets the settings associated with a project, folder, or organization.

```sql
SELECT
name,
activeKeyVersion,
ancestorHasActiveKeyVersion,
approvalPolicy,
effectiveApprovalPolicy,
enrolledAncestor,
enrolledServices,
invalidKeyVersion,
notificationEmails,
notificationPubsubTopic,
preferNoBroadApprovalRequests,
preferredRequestExpirationDays,
requestScopeMaxWidthPreference,
requireCustomerVisibleJustification
FROM google.accessapproval.access_approval_settings
WHERE foldersId = '{{ foldersId }}' -- required;
```
</TabItem>
<TabItem value="organizations_get_access_approval_settings">

Gets the settings associated with a project, folder, or organization.

```sql
SELECT
name,
activeKeyVersion,
ancestorHasActiveKeyVersion,
approvalPolicy,
effectiveApprovalPolicy,
enrolledAncestor,
enrolledServices,
invalidKeyVersion,
notificationEmails,
notificationPubsubTopic,
preferNoBroadApprovalRequests,
preferredRequestExpirationDays,
requestScopeMaxWidthPreference,
requireCustomerVisibleJustification
FROM google.accessapproval.access_approval_settings
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_update_access_approval_settings"
    values={[
        { label: 'projects_update_access_approval_settings', value: 'projects_update_access_approval_settings' },
        { label: 'folders_update_access_approval_settings', value: 'folders_update_access_approval_settings' },
        { label: 'organizations_update_access_approval_settings', value: 'organizations_update_access_approval_settings' }
    ]}
>
<TabItem value="projects_update_access_approval_settings">

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

```sql
UPDATE google.accessapproval.access_approval_settings
SET 
data__name = '{{ name }}',
data__notificationEmails = '{{ notificationEmails }}',
data__enrolledServices = '{{ enrolledServices }}',
data__activeKeyVersion = '{{ activeKeyVersion }}',
data__preferredRequestExpirationDays = {{ preferredRequestExpirationDays }},
data__preferNoBroadApprovalRequests = {{ preferNoBroadApprovalRequests }},
data__notificationPubsubTopic = '{{ notificationPubsubTopic }}',
data__requireCustomerVisibleJustification = {{ requireCustomerVisibleJustification }},
data__requestScopeMaxWidthPreference = '{{ requestScopeMaxWidthPreference }}',
data__approvalPolicy = '{{ approvalPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeKeyVersion,
ancestorHasActiveKeyVersion,
approvalPolicy,
effectiveApprovalPolicy,
enrolledAncestor,
enrolledServices,
invalidKeyVersion,
notificationEmails,
notificationPubsubTopic,
preferNoBroadApprovalRequests,
preferredRequestExpirationDays,
requestScopeMaxWidthPreference,
requireCustomerVisibleJustification;
```
</TabItem>
<TabItem value="folders_update_access_approval_settings">

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

```sql
UPDATE google.accessapproval.access_approval_settings
SET 
data__name = '{{ name }}',
data__notificationEmails = '{{ notificationEmails }}',
data__enrolledServices = '{{ enrolledServices }}',
data__activeKeyVersion = '{{ activeKeyVersion }}',
data__preferredRequestExpirationDays = {{ preferredRequestExpirationDays }},
data__preferNoBroadApprovalRequests = {{ preferNoBroadApprovalRequests }},
data__notificationPubsubTopic = '{{ notificationPubsubTopic }}',
data__requireCustomerVisibleJustification = {{ requireCustomerVisibleJustification }},
data__requestScopeMaxWidthPreference = '{{ requestScopeMaxWidthPreference }}',
data__approvalPolicy = '{{ approvalPolicy }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeKeyVersion,
ancestorHasActiveKeyVersion,
approvalPolicy,
effectiveApprovalPolicy,
enrolledAncestor,
enrolledServices,
invalidKeyVersion,
notificationEmails,
notificationPubsubTopic,
preferNoBroadApprovalRequests,
preferredRequestExpirationDays,
requestScopeMaxWidthPreference,
requireCustomerVisibleJustification;
```
</TabItem>
<TabItem value="organizations_update_access_approval_settings">

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

```sql
UPDATE google.accessapproval.access_approval_settings
SET 
data__name = '{{ name }}',
data__notificationEmails = '{{ notificationEmails }}',
data__enrolledServices = '{{ enrolledServices }}',
data__activeKeyVersion = '{{ activeKeyVersion }}',
data__preferredRequestExpirationDays = {{ preferredRequestExpirationDays }},
data__preferNoBroadApprovalRequests = {{ preferNoBroadApprovalRequests }},
data__notificationPubsubTopic = '{{ notificationPubsubTopic }}',
data__requireCustomerVisibleJustification = {{ requireCustomerVisibleJustification }},
data__requestScopeMaxWidthPreference = '{{ requestScopeMaxWidthPreference }}',
data__approvalPolicy = '{{ approvalPolicy }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeKeyVersion,
ancestorHasActiveKeyVersion,
approvalPolicy,
effectiveApprovalPolicy,
enrolledAncestor,
enrolledServices,
invalidKeyVersion,
notificationEmails,
notificationPubsubTopic,
preferNoBroadApprovalRequests,
preferredRequestExpirationDays,
requestScopeMaxWidthPreference,
requireCustomerVisibleJustification;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_delete_access_approval_settings"
    values={[
        { label: 'projects_delete_access_approval_settings', value: 'projects_delete_access_approval_settings' },
        { label: 'folders_delete_access_approval_settings', value: 'folders_delete_access_approval_settings' },
        { label: 'organizations_delete_access_approval_settings', value: 'organizations_delete_access_approval_settings' }
    ]}
>
<TabItem value="projects_delete_access_approval_settings">

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

```sql
DELETE FROM google.accessapproval.access_approval_settings
WHERE projectsId = '{{ projectsId }}' --required;
```
</TabItem>
<TabItem value="folders_delete_access_approval_settings">

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

```sql
DELETE FROM google.accessapproval.access_approval_settings
WHERE foldersId = '{{ foldersId }}' --required;
```
</TabItem>
<TabItem value="organizations_delete_access_approval_settings">

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

```sql
DELETE FROM google.accessapproval.access_approval_settings
WHERE organizationsId = '{{ organizationsId }}' --required;
```
</TabItem>
</Tabs>
