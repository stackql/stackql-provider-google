--- 
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
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

Creates, updates, deletes, gets or lists an <code>organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>organizations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_get"
    values={[
        { label: 'organizations_get', value: 'organizations_get' },
        { label: 'organizations_list', value: 'organizations_list' }
    ]}
>
<TabItem value="organizations_get">

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
    <td>Output only. Name of the Apigee organization.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Addon configurations of the Apigee organization. (id: GoogleCloudApigeeV1AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="analyticsRegion" /></td>
    <td><code>string</code></td>
    <td>Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).</td>
</tr>
<tr>
    <td><CopyableCode code="apiConsumerDataEncryptionKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS key name used for encrypting API consumer data. If not specified or [BillingType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#billingtype) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`</td>
</tr>
<tr>
    <td><CopyableCode code="apiConsumerDataLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. This field is needed only for customers using non-default data residency regions. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU.</td>
</tr>
<tr>
    <td><CopyableCode code="apigeeProjectId" /></td>
    <td><code>string</code></td>
    <td>Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Not used by Apigee.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#runtimetype) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. When changing authorizedNetwork, you must reconfigure VPC peering. After VPC peering with previous network is deleted, [run the following command](https://cloud.google.com/sdk/gcloud/reference/services/vpc-peerings/delete): `gcloud services vpc-peerings delete --network=NETWORK`, where `NETWORK` is the name of the previous network. This will delete the previous Service Networking. Otherwise, you will get the following error: `The resource 'projects/...-tp' is already linked to another shared VPC host 'projects/...-tp`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/&#123;host-project-id&#125;/&#123;region&#125;/networks/&#123;network-name&#125;`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><CopyableCode code="billingType" /></td>
    <td><code>string</code></td>
    <td>Optional. Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).</td>
</tr>
<tr>
    <td><CopyableCode code="caCertificate" /></td>
    <td><code>string (byte)</code></td>
    <td>Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#runtimetype) is `CLOUD`.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEncryptionKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used for the data residency region "US" or "EU". If not specified or [BillingType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#billingtype) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time that the Apigee organization was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="customerName" /></td>
    <td><code>string</code></td>
    <td>Not used by Apigee.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the Apigee organization.</td>
</tr>
<tr>
    <td><CopyableCode code="disableVpcPeering" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name for the Apigee organization. Unused, but reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>Output only. List of environments in the Apigee organization.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time that the Apigee organization is scheduled for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time that the Apigee organization was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="networkEgressRestricted" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies if internet egress is restricted for VPC Service Controls. Valid only when runtime_type is `CLOUD` and disable_vpc_peering is `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="portalDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Configuration for the Portals settings.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Output only. Project ID associated with the Apigee organization.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. Properties defined in the Apigee organization profile. (id: GoogleCloudApigeeV1Properties)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeDatabaseEncryptionKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#runtimetype) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeType" /></td>
    <td><code>string</code></td>
    <td>Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. Subscription plan that the customer has purchased. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionType" /></td>
    <td><code>string</code></td>
    <td>Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Not used by Apigee.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_list">

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
    <td><CopyableCode code="organizations" /></td>
    <td><code>array</code></td>
    <td>List of Apigee organizations and associated Google Cloud projects.</td>
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
    <td><a href="#organizations_get"><CopyableCode code="organizations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Gets the profile for an Apigee organization. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).</td>
</tr>
<tr>
    <td><a href="#organizations_list"><CopyableCode code="organizations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).</td>
</tr>
<tr>
    <td><a href="#organizations_create"><CopyableCode code="organizations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).</td>
</tr>
<tr>
    <td><a href="#organizations_update"><CopyableCode code="organizations_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Updates the properties for an Apigee organization. No other fields in the organization profile will be updated.</td>
</tr>
<tr>
    <td><a href="#organizations_delete"><CopyableCode code="organizations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-retention"><code>retention</code></a></td>
    <td>Delete an Apigee organization. For organizations with BillingType EVALUATION, an immediate deletion is performed. For paid organizations (Subscription or Pay-as-you-go), a soft-deletion is performed. The organization can be restored within the soft-deletion period, which is specified using the `retention` field in the request or by filing a support ticket with Apigee. During the data retention period specified in the request, the Apigee organization cannot be recreated in the same Google Cloud project. **IMPORTANT: The default data retention setting for this operation is 7 days. To permanently delete the organization in 24 hours, set the retention parameter to `MINIMUM`.**</td>
</tr>
<tr>
    <td><a href="#organizations_set_sync_authorization"><CopyableCode code="organizations_set_sync_authorization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations/getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.</td>
</tr>
<tr>
    <td><a href="#organizations_set_addons"><CopyableCode code="organizations_set_addons" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.</td>
</tr>
<tr>
    <td><a href="#organizations_security_assessment_results_batch_compute"><CopyableCode code="organizations_security_assessment_results_batch_compute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Compute RAV2 security scores for a set of resources.</td>
</tr>
<tr>
    <td><a href="#projects_provision_organization"><CopyableCode code="projects_provision_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.</td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-retention">
    <td><CopyableCode code="retention" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_get"
    values={[
        { label: 'organizations_get', value: 'organizations_get' },
        { label: 'organizations_list', value: 'organizations_list' }
    ]}
>
<TabItem value="organizations_get">

Gets the profile for an Apigee organization. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).

```sql
SELECT
name,
addonsConfig,
analyticsRegion,
apiConsumerDataEncryptionKeyName,
apiConsumerDataLocation,
apigeeProjectId,
attributes,
authorizedNetwork,
billingType,
caCertificate,
controlPlaneEncryptionKeyName,
createdAt,
customerName,
description,
disableVpcPeering,
displayName,
environments,
expiresAt,
lastModifiedAt,
networkEgressRestricted,
portalDisabled,
projectId,
properties,
runtimeDatabaseEncryptionKeyName,
runtimeType,
state,
subscriptionPlan,
subscriptionType,
type
FROM google.apigee.organizations
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_list">

Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).

```sql
SELECT
organizations
FROM google.apigee.organizations;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_create"
    values={[
        { label: 'organizations_create', value: 'organizations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_create">

Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

```sql
INSERT INTO google.apigee.organizations (
data__displayName,
data__description,
data__customerName,
data__attributes,
data__properties,
data__type,
data__analyticsRegion,
data__authorizedNetwork,
data__disableVpcPeering,
data__runtimeType,
data__billingType,
data__addonsConfig,
data__runtimeDatabaseEncryptionKeyName,
data__portalDisabled,
data__apiConsumerDataEncryptionKeyName,
data__controlPlaneEncryptionKeyName,
data__apiConsumerDataLocation,
data__networkEgressRestricted,
parent
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ customerName }}',
'{{ attributes }}',
'{{ properties }}',
'{{ type }}',
'{{ analyticsRegion }}',
'{{ authorizedNetwork }}',
{{ disableVpcPeering }},
'{{ runtimeType }}',
'{{ billingType }}',
'{{ addonsConfig }}',
'{{ runtimeDatabaseEncryptionKeyName }}',
{{ portalDisabled }},
'{{ apiConsumerDataEncryptionKeyName }}',
'{{ controlPlaneEncryptionKeyName }}',
'{{ apiConsumerDataLocation }}',
{{ networkEgressRestricted }},
'{{ parent }}'
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
- name: organizations
  props:
    - name: displayName
      value: string
      description: >
        Optional. Display name for the Apigee organization. Unused, but reserved for future use.
        
    - name: description
      value: string
      description: >
        Optional. Description of the Apigee organization.
        
    - name: customerName
      value: string
      description: >
        Not used by Apigee.
        
    - name: attributes
      value: array
      description: >
        Not used by Apigee.
        
    - name: properties
      value: object
      description: >
        Optional. Properties defined in the Apigee organization profile.
        
    - name: type
      value: string
      description: >
        Not used by Apigee.
        
      valid_values: ['TYPE_UNSPECIFIED', 'TYPE_TRIAL', 'TYPE_PAID', 'TYPE_INTERNAL']
    - name: analyticsRegion
      value: string
      description: >
        Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
        
    - name: authorizedNetwork
      value: string
      description: >
        Optional. Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#runtimetype) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. When changing authorizedNetwork, you must reconfigure VPC peering. After VPC peering with previous network is deleted, [run the following command](https://cloud.google.com/sdk/gcloud/reference/services/vpc-peerings/delete): `gcloud services vpc-peerings delete --network=NETWORK`, where `NETWORK` is the name of the previous network. This will delete the previous Service Networking. Otherwise, you will get the following error: `The resource 'projects/...-tp' is already linked to another shared VPC host 'projects/...-tp`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.
        
    - name: disableVpcPeering
      value: boolean
      description: >
        Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.
        
    - name: runtimeType
      value: string
      description: >
        Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.
        
      valid_values: ['RUNTIME_TYPE_UNSPECIFIED', 'CLOUD', 'HYBRID']
    - name: billingType
      value: string
      description: >
        Optional. Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
        
      valid_values: ['BILLING_TYPE_UNSPECIFIED', 'SUBSCRIPTION', 'EVALUATION', 'PAYG']
    - name: addonsConfig
      value: object
      description: >
        Optional. Addon configurations of the Apigee organization.
        
    - name: runtimeDatabaseEncryptionKeyName
      value: string
      description: >
        Optional. Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#runtimetype) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.
        
    - name: portalDisabled
      value: boolean
      description: >
        Optional. Configuration for the Portals settings.
        
    - name: apiConsumerDataEncryptionKeyName
      value: string
      description: >
        Optional. Cloud KMS key name used for encrypting API consumer data. If not specified or [BillingType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#billingtype) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`
        
    - name: controlPlaneEncryptionKeyName
      value: string
      description: >
        Optional. Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used for the data residency region "US" or "EU". If not specified or [BillingType](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations#billingtype) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`
        
    - name: apiConsumerDataLocation
      value: string
      description: >
        Optional. This field is needed only for customers using non-default data residency regions. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU.
        
    - name: networkEgressRestricted
      value: boolean
      description: >
        Optional. Flag that specifies if internet egress is restricted for VPC Service Controls. Valid only when runtime_type is `CLOUD` and disable_vpc_peering is `true`.
        
    - name: parent
      value: string
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_update"
    values={[
        { label: 'organizations_update', value: 'organizations_update' }
    ]}
>
<TabItem value="organizations_update">

Updates the properties for an Apigee organization. No other fields in the organization profile will be updated.

```sql
REPLACE google.apigee.organizations
SET 
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__customerName = '{{ customerName }}',
data__attributes = '{{ attributes }}',
data__properties = '{{ properties }}',
data__type = '{{ type }}',
data__analyticsRegion = '{{ analyticsRegion }}',
data__authorizedNetwork = '{{ authorizedNetwork }}',
data__disableVpcPeering = {{ disableVpcPeering }},
data__runtimeType = '{{ runtimeType }}',
data__billingType = '{{ billingType }}',
data__addonsConfig = '{{ addonsConfig }}',
data__runtimeDatabaseEncryptionKeyName = '{{ runtimeDatabaseEncryptionKeyName }}',
data__portalDisabled = {{ portalDisabled }},
data__apiConsumerDataEncryptionKeyName = '{{ apiConsumerDataEncryptionKeyName }}',
data__controlPlaneEncryptionKeyName = '{{ controlPlaneEncryptionKeyName }}',
data__apiConsumerDataLocation = '{{ apiConsumerDataLocation }}',
data__networkEgressRestricted = {{ networkEgressRestricted }}
WHERE 
organizationsId = '{{ organizationsId }}' --required
RETURNING
name,
addonsConfig,
analyticsRegion,
apiConsumerDataEncryptionKeyName,
apiConsumerDataLocation,
apigeeProjectId,
attributes,
authorizedNetwork,
billingType,
caCertificate,
controlPlaneEncryptionKeyName,
createdAt,
customerName,
description,
disableVpcPeering,
displayName,
environments,
expiresAt,
lastModifiedAt,
networkEgressRestricted,
portalDisabled,
projectId,
properties,
runtimeDatabaseEncryptionKeyName,
runtimeType,
state,
subscriptionPlan,
subscriptionType,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_delete"
    values={[
        { label: 'organizations_delete', value: 'organizations_delete' }
    ]}
>
<TabItem value="organizations_delete">

Delete an Apigee organization. For organizations with BillingType EVALUATION, an immediate deletion is performed. For paid organizations (Subscription or Pay-as-you-go), a soft-deletion is performed. The organization can be restored within the soft-deletion period, which is specified using the `retention` field in the request or by filing a support ticket with Apigee. During the data retention period specified in the request, the Apigee organization cannot be recreated in the same Google Cloud project. **IMPORTANT: The default data retention setting for this operation is 7 days. To permanently delete the organization in 24 hours, set the retention parameter to `MINIMUM`.**

```sql
DELETE FROM google.apigee.organizations
WHERE organizationsId = '{{ organizationsId }}' --required
AND retention = '{{ retention }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_set_sync_authorization"
    values={[
        { label: 'organizations_set_sync_authorization', value: 'organizations_set_sync_authorization' },
        { label: 'organizations_set_addons', value: 'organizations_set_addons' },
        { label: 'organizations_security_assessment_results_batch_compute', value: 'organizations_security_assessment_results_batch_compute' },
        { label: 'projects_provision_organization', value: 'projects_provision_organization' }
    ]}
>
<TabItem value="organizations_set_sync_authorization">

Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations/getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.

```sql
EXEC google.apigee.organizations.organizations_set_sync_authorization 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"identities": "{{ identities }}", 
"etag": "{{ etag }}"
}';
```
</TabItem>
<TabItem value="organizations_set_addons">

Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.

```sql
EXEC google.apigee.organizations.organizations_set_addons 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"addonsConfig": "{{ addonsConfig }}"
}';
```
</TabItem>
<TabItem value="organizations_security_assessment_results_batch_compute">

Compute RAV2 security scores for a set of resources.

```sql
EXEC google.apigee.organizations.organizations_security_assessment_results_batch_compute 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"profile": "{{ profile }}", 
"scope": "{{ scope }}", 
"includeAllResources": "{{ includeAllResources }}", 
"include": "{{ include }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}';
```
</TabItem>
<TabItem value="projects_provision_organization">

Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.

```sql
EXEC google.apigee.organizations.projects_provision_organization 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"authorizedNetwork": "{{ authorizedNetwork }}", 
"disableVpcPeering": {{ disableVpcPeering }}, 
"analyticsRegion": "{{ analyticsRegion }}", 
"runtimeLocation": "{{ runtimeLocation }}"
}';
```
</TabItem>
</Tabs>
