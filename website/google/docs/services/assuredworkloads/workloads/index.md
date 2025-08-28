--- 
title: workloads
hide_title: false
hide_table_of_contents: false
keywords:
  - workloads
  - assuredworkloads
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

Creates, updates, deletes, gets or lists a <code>workloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workloads</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.assuredworkloads.workloads" /></td></tr>
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
    <td>Optional. The resource name of the workload. Format: organizations/&#123;organization&#125;/locations/&#123;location&#125;/workloads/&#123;workload&#125; Read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/&#123;billing_account_id&#125;`. For example, `billingAccounts/012345-567890-ABCDEF`.</td>
</tr>
<tr>
    <td><CopyableCode code="complianceRegime" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Compliance Regime associated with this workload.</td>
</tr>
<tr>
    <td><CopyableCode code="complianceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Count of active Violations in the Workload. (id: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="compliantButDisallowedServices" /></td>
    <td><code>array</code></td>
    <td>Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The Workload creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload</td>
</tr>
<tr>
    <td><CopyableCode code="ekmProvisioningResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. Represents the Ekm Provisioning State of the given workload. (id: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="enableSovereignControls" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.</td>
</tr>
<tr>
    <td><CopyableCode code="kajEnrollmentState" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the KAJ enrollment state of the given workload.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsSettings" /></td>
    <td><code>object</code></td>
    <td>Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field. (id: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels applied to the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>Optional. Partner regime associated with this workload.</td>
</tr>
<tr>
    <td><CopyableCode code="partnerPermissions" /></td>
    <td><code>object</code></td>
    <td>Optional. Permissions granted to the AW Partner SA account for the customer workload (id: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions)</td>
</tr>
<tr>
    <td><CopyableCode code="partnerServicesBillingAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedResourcesParent" /></td>
    <td><code>string</code></td>
    <td>Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/&#123;folder_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMonitoringEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSettings" /></td>
    <td><code>array</code></td>
    <td>Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.</td>
</tr>
<tr>
    <td><CopyableCode code="saaEnrollmentResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page. (id: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="violationNotificationsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options to be set for the given created workload. (id: GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions)</td>
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
    <td>Optional. The resource name of the workload. Format: organizations/&#123;organization&#125;/locations/&#123;location&#125;/workloads/&#123;workload&#125; Read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/&#123;billing_account_id&#125;`. For example, `billingAccounts/012345-567890-ABCDEF`.</td>
</tr>
<tr>
    <td><CopyableCode code="complianceRegime" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Compliance Regime associated with this workload.</td>
</tr>
<tr>
    <td><CopyableCode code="complianceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Count of active Violations in the Workload. (id: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="compliantButDisallowedServices" /></td>
    <td><code>array</code></td>
    <td>Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The Workload creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload</td>
</tr>
<tr>
    <td><CopyableCode code="ekmProvisioningResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. Represents the Ekm Provisioning State of the given workload. (id: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="enableSovereignControls" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.</td>
</tr>
<tr>
    <td><CopyableCode code="kajEnrollmentState" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the KAJ enrollment state of the given workload.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsSettings" /></td>
    <td><code>object</code></td>
    <td>Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field. (id: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels applied to the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>string</code></td>
    <td>Optional. Partner regime associated with this workload.</td>
</tr>
<tr>
    <td><CopyableCode code="partnerPermissions" /></td>
    <td><code>object</code></td>
    <td>Optional. Permissions granted to the AW Partner SA account for the customer workload (id: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions)</td>
</tr>
<tr>
    <td><CopyableCode code="partnerServicesBillingAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedResourcesParent" /></td>
    <td><code>string</code></td>
    <td>Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/&#123;folder_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMonitoringEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSettings" /></td>
    <td><code>array</code></td>
    <td>Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.</td>
</tr>
<tr>
    <td><CopyableCode code="saaEnrollmentResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page. (id: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="violationNotificationsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Options to be set for the given created workload. (id: GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions)</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>Gets Assured Workload associated with a CRM Node</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Assured Workloads under a CRM Node.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-externalId"><code>externalId</code></a></td>
    <td>Creates Assured Workload.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.</td>
</tr>
<tr>
    <td><a href="#restrict_allowed_resources"><CopyableCode code="restrict_allowed_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.</td>
</tr>
<tr>
    <td><a href="#analyze_workload_move"><CopyableCode code="analyze_workload_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-assetTypes"><code>assetTypes</code></a></td>
    <td>Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.</td>
</tr>
<tr>
    <td><a href="#mutate_partner_permissions"><CopyableCode code="mutate_partner_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.</td>
</tr>
<tr>
    <td><a href="#enable_resource_monitoring"><CopyableCode code="enable_resource_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>Enable resource violation monitoring for a workload.</td>
</tr>
<tr>
    <td><a href="#enable_compliance_updates"><CopyableCode code="enable_compliance_updates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadsId">
    <td><CopyableCode code="workloadsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assetTypes">
    <td><CopyableCode code="assetTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-externalId">
    <td><CopyableCode code="externalId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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

Gets Assured Workload associated with a CRM Node

```sql
SELECT
name,
billingAccount,
complianceRegime,
complianceStatus,
compliantButDisallowedServices,
createTime,
displayName,
ekmProvisioningResponse,
enableSovereignControls,
etag,
kajEnrollmentState,
kmsSettings,
labels,
partner,
partnerPermissions,
partnerServicesBillingAccount,
provisionedResourcesParent,
resourceMonitoringEnabled,
resourceSettings,
resources,
saaEnrollmentResponse,
violationNotificationsEnabled,
workloadOptions
FROM google.assuredworkloads.workloads
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Assured Workloads under a CRM Node.

```sql
SELECT
name,
billingAccount,
complianceRegime,
complianceStatus,
compliantButDisallowedServices,
createTime,
displayName,
ekmProvisioningResponse,
enableSovereignControls,
etag,
kajEnrollmentState,
kmsSettings,
labels,
partner,
partnerPermissions,
partnerServicesBillingAccount,
provisionedResourcesParent,
resourceMonitoringEnabled,
resourceSettings,
resources,
saaEnrollmentResponse,
violationNotificationsEnabled,
workloadOptions
FROM google.assuredworkloads.workloads
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates Assured Workload.

```sql
INSERT INTO google.assuredworkloads.workloads (
data__name,
data__displayName,
data__complianceRegime,
data__billingAccount,
data__etag,
data__labels,
data__provisionedResourcesParent,
data__kmsSettings,
data__resourceSettings,
data__enableSovereignControls,
data__partner,
data__partnerPermissions,
data__partnerServicesBillingAccount,
data__violationNotificationsEnabled,
data__workloadOptions,
organizationsId,
locationsId,
externalId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ complianceRegime }}',
'{{ billingAccount }}',
'{{ etag }}',
'{{ labels }}',
'{{ provisionedResourcesParent }}',
'{{ kmsSettings }}',
'{{ resourceSettings }}',
{{ enableSovereignControls }},
'{{ partner }}',
'{{ partnerPermissions }}',
'{{ partnerServicesBillingAccount }}',
{{ violationNotificationsEnabled }},
'{{ workloadOptions }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ externalId }}'
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
- name: workloads
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the workloads resource.
    - name: locationsId
      value: string
      description: Required parameter for the workloads resource.
    - name: name
      value: string
      description: >
        Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
        
    - name: displayName
      value: string
      description: >
        Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
        
    - name: complianceRegime
      value: string
      description: >
        Required. Immutable. Compliance Regime associated with this workload.
        
      valid_values: ['COMPLIANCE_REGIME_UNSPECIFIED', 'IL4', 'CJIS', 'FEDRAMP_HIGH', 'FEDRAMP_MODERATE', 'US_REGIONAL_ACCESS', 'HIPAA', 'HITRUST', 'EU_REGIONS_AND_SUPPORT', 'CA_REGIONS_AND_SUPPORT', 'ITAR', 'AU_REGIONS_AND_US_SUPPORT', 'ASSURED_WORKLOADS_FOR_PARTNERS', 'ISR_REGIONS', 'ISR_REGIONS_AND_SUPPORT', 'CA_PROTECTED_B', 'IL5', 'IL2', 'JP_REGIONS_AND_SUPPORT', 'KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS', 'REGIONAL_CONTROLS', 'HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS', 'HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_US_SUPPORT', 'IRS_1075', 'CANADA_CONTROLLED_GOODS', 'AUSTRALIA_DATA_BOUNDARY_AND_SUPPORT', 'CANADA_DATA_BOUNDARY_AND_SUPPORT', 'DATA_BOUNDARY_FOR_CANADA_CONTROLLED_GOODS', 'DATA_BOUNDARY_FOR_CANADA_PROTECTED_B', 'DATA_BOUNDARY_FOR_CJIS', 'DATA_BOUNDARY_FOR_FEDRAMP_HIGH', 'DATA_BOUNDARY_FOR_FEDRAMP_MODERATE', 'DATA_BOUNDARY_FOR_IL2', 'DATA_BOUNDARY_FOR_IL4', 'DATA_BOUNDARY_FOR_IL5', 'DATA_BOUNDARY_FOR_IRS_PUBLICATION_1075', 'DATA_BOUNDARY_FOR_ITAR', 'EU_DATA_BOUNDARY_AND_SUPPORT', 'ISRAEL_DATA_BOUNDARY_AND_SUPPORT', 'US_DATA_BOUNDARY_AND_SUPPORT', 'US_DATA_BOUNDARY_FOR_HEALTHCARE_AND_LIFE_SCIENCES', 'US_DATA_BOUNDARY_FOR_HEALTHCARE_AND_LIFE_SCIENCES_WITH_SUPPORT', 'KSA_DATA_BOUNDARY_WITH_ACCESS_JUSTIFICATIONS', 'REGIONAL_DATA_BOUNDARY', 'JAPAN_DATA_BOUNDARY']
    - name: billingAccount
      value: string
      description: >
        Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
        
    - name: etag
      value: string
      description: >
        Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
        
    - name: labels
      value: object
      description: >
        Optional. Labels applied to the workload.
        
    - name: provisionedResourcesParent
      value: string
      description: >
        Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
        
    - name: kmsSettings
      value: object
      description: >
        Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
        
    - name: resourceSettings
      value: array
      description: >
        Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
        
    - name: enableSovereignControls
      value: boolean
      description: >
        Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
        
    - name: partner
      value: string
      description: >
        Optional. Partner regime associated with this workload.
        
      valid_values: ['PARTNER_UNSPECIFIED', 'LOCAL_CONTROLS_BY_S3NS', 'SOVEREIGN_CONTROLS_BY_T_SYSTEMS', 'SOVEREIGN_CONTROLS_BY_SIA_MINSAIT', 'SOVEREIGN_CONTROLS_BY_PSN', 'SOVEREIGN_CONTROLS_BY_CNTXT', 'SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM']
    - name: partnerPermissions
      value: object
      description: >
        Optional. Permissions granted to the AW Partner SA account for the customer workload
        
    - name: partnerServicesBillingAccount
      value: string
      description: >
        Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC
        
    - name: violationNotificationsEnabled
      value: boolean
      description: >
        Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
        
    - name: workloadOptions
      value: object
      description: >
        Optional. Options to be set for the given created workload.
        
    - name: externalId
      value: string
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

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

```sql
UPDATE google.assuredworkloads.workloads
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__complianceRegime = '{{ complianceRegime }}',
data__billingAccount = '{{ billingAccount }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__provisionedResourcesParent = '{{ provisionedResourcesParent }}',
data__kmsSettings = '{{ kmsSettings }}',
data__resourceSettings = '{{ resourceSettings }}',
data__enableSovereignControls = {{ enableSovereignControls }},
data__partner = '{{ partner }}',
data__partnerPermissions = '{{ partnerPermissions }}',
data__partnerServicesBillingAccount = '{{ partnerServicesBillingAccount }}',
data__violationNotificationsEnabled = {{ violationNotificationsEnabled }},
data__workloadOptions = '{{ workloadOptions }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadsId = '{{ workloadsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
billingAccount,
complianceRegime,
complianceStatus,
compliantButDisallowedServices,
createTime,
displayName,
ekmProvisioningResponse,
enableSovereignControls,
etag,
kajEnrollmentState,
kmsSettings,
labels,
partner,
partnerPermissions,
partnerServicesBillingAccount,
provisionedResourcesParent,
resourceMonitoringEnabled,
resourceSettings,
resources,
saaEnrollmentResponse,
violationNotificationsEnabled,
workloadOptions;
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

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.

```sql
DELETE FROM google.assuredworkloads.workloads
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workloadsId = '{{ workloadsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restrict_allowed_resources"
    values={[
        { label: 'restrict_allowed_resources', value: 'restrict_allowed_resources' },
        { label: 'analyze_workload_move', value: 'analyze_workload_move' },
        { label: 'mutate_partner_permissions', value: 'mutate_partner_permissions' },
        { label: 'enable_resource_monitoring', value: 'enable_resource_monitoring' },
        { label: 'enable_compliance_updates', value: 'enable_compliance_updates' }
    ]}
>
<TabItem value="restrict_allowed_resources">

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

```sql
EXEC google.assuredworkloads.workloads.restrict_allowed_resources 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadsId='{{ workloadsId }}' --required 
@@json=
'{
"restrictionType": "{{ restrictionType }}"
}';
```
</TabItem>
<TabItem value="analyze_workload_move">

Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.

```sql
EXEC google.assuredworkloads.workloads.analyze_workload_move 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadsId='{{ workloadsId }}' --required, 
@project='{{ project }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@assetTypes='{{ assetTypes }}';
```
</TabItem>
<TabItem value="mutate_partner_permissions">

Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

```sql
EXEC google.assuredworkloads.workloads.mutate_partner_permissions 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadsId='{{ workloadsId }}' --required 
@@json=
'{
"partnerPermissions": "{{ partnerPermissions }}", 
"updateMask": "{{ updateMask }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="enable_resource_monitoring">

Enable resource violation monitoring for a workload.

```sql
EXEC google.assuredworkloads.workloads.enable_resource_monitoring 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadsId='{{ workloadsId }}' --required;
```
</TabItem>
<TabItem value="enable_compliance_updates">

This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder.

```sql
EXEC google.assuredworkloads.workloads.enable_compliance_updates 
@organizationsId='{{ organizationsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@workloadsId='{{ workloadsId }}' --required;
```
</TabItem>
</Tabs>
