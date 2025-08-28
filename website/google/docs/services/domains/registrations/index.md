--- 
title: registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - registrations
  - domains
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

Creates, updates, deletes, gets or lists a <code>registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>registrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.domains.registrations" /></td></tr>
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
    <td>Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`.</td>
</tr>
<tr>
    <td><CopyableCode code="contactSettings" /></td>
    <td><code>object</code></td>
    <td>Required. Settings for contact information linked to the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureContactSettings` method. (id: ContactSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the `Registration` resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsSettings" /></td>
    <td><code>object</code></td>
    <td>Settings controlling the DNS configuration of the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureDnsSettings` method. (id: DnsSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.</td>
</tr>
<tr>
    <td><CopyableCode code="domainProperties" /></td>
    <td><code>array</code></td>
    <td>Output only. Special properties of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The expiration timestamp of the `Registration`.</td>
</tr>
<tr>
    <td><CopyableCode code="issues" /></td>
    <td><code>array</code></td>
    <td>Output only. The set of issues with the `Registration` that require attention.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Set of labels associated with the `Registration`.</td>
</tr>
<tr>
    <td><CopyableCode code="managementSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for management of the `Registration`, including renewal, billing, and transfer. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureManagementSettings` method. (id: ManagementSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingContactSettings" /></td>
    <td><code>object</code></td>
    <td>Output only. Pending contact settings for the `Registration`. Updates to the `contact_settings` field that change its `registrant_contact` or `privacy` fields require email confirmation by the `registrant_contact` before taking effect. This field is set only if there are pending updates to the `contact_settings` that have not been confirmed. To confirm the changes, the `registrant_contact` must follow the instructions in the email they receive. (id: ContactSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="registerFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the `Registration`</td>
</tr>
<tr>
    <td><CopyableCode code="supportedPrivacy" /></td>
    <td><code>array</code></td>
    <td>Output only. Set of options for the `contact_settings.privacy` field that this `Registration` supports.</td>
</tr>
<tr>
    <td><CopyableCode code="transferFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state.</td>
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
    <td>Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`.</td>
</tr>
<tr>
    <td><CopyableCode code="contactSettings" /></td>
    <td><code>object</code></td>
    <td>Required. Settings for contact information linked to the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureContactSettings` method. (id: ContactSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the `Registration` resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsSettings" /></td>
    <td><code>object</code></td>
    <td>Settings controlling the DNS configuration of the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureDnsSettings` method. (id: DnsSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.</td>
</tr>
<tr>
    <td><CopyableCode code="domainProperties" /></td>
    <td><code>array</code></td>
    <td>Output only. Special properties of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The expiration timestamp of the `Registration`.</td>
</tr>
<tr>
    <td><CopyableCode code="issues" /></td>
    <td><code>array</code></td>
    <td>Output only. The set of issues with the `Registration` that require attention.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Set of labels associated with the `Registration`.</td>
</tr>
<tr>
    <td><CopyableCode code="managementSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for management of the `Registration`, including renewal, billing, and transfer. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureManagementSettings` method. (id: ManagementSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingContactSettings" /></td>
    <td><code>object</code></td>
    <td>Output only. Pending contact settings for the `Registration`. Updates to the `contact_settings` field that change its `registrant_contact` or `privacy` fields require email confirmation by the `registrant_contact` before taking effect. This field is set only if there are pending updates to the `contact_settings` that have not been confirmed. To confirm the changes, the `registrant_contact` must follow the instructions in the email they receive. (id: ContactSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="registerFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the `Registration`</td>
</tr>
<tr>
    <td><CopyableCode code="supportedPrivacy" /></td>
    <td><code>array</code></td>
    <td>Output only. Set of options for the `contact_settings.privacy` field that this `Registration` supports.</td>
</tr>
<tr>
    <td><CopyableCode code="transferFailureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Gets the details of a `Registration` resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists the `Registration` resources in a project.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](https://cloud.google.com/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains. After January 2024 you will only be able to delete `Registration` resources when `state` is one of: `EXPORTED`, `EXPIRED`,`REGISTRATION_FAILED` or `TRANSFER_FAILED`. See [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) for more details.</td>
</tr>
<tr>
    <td><a href="#search_domains"><CopyableCode code="search_domains" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-query"><code>query</code></a></td>
    <td>Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.</td>
</tr>
<tr>
    <td><a href="#register"><CopyableCode code="register" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.</td>
</tr>
<tr>
    <td><a href="#transfer"><CopyableCode code="transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.</td>
</tr>
<tr>
    <td><a href="#configure_management_settings"><CopyableCode code="configure_management_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Updates a `Registration`'s management settings.</td>
</tr>
<tr>
    <td><a href="#configure_dns_settings"><CopyableCode code="configure_dns_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Updates a `Registration`'s DNS settings.</td>
</tr>
<tr>
    <td><a href="#configure_contact_settings"><CopyableCode code="configure_contact_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact . Caution: Please consider carefully any changes to contact privacy settings when changing from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA.` There may be a delay in reflecting updates you make to registrant contact information such that any changes you make to contact privacy (including from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA`) will be applied without delay but changes to registrant contact information may take a limited time to be publicized. This means that changes to contact privacy from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA` may make the previous registrant contact data public until the modified registrant contact details are published.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.</td>
</tr>
<tr>
    <td><a href="#reset_authorization_code"><CopyableCode code="reset_authorization_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration. Domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties` don't support authorization codes and must use the `InitiatePushTransfer` method to initiate the process to transfer the domain to a different registrar.</td>
</tr>
<tr>
    <td><a href="#initiate_push_transfer"><CopyableCode code="initiate_push_transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Initiates the `Push Transfer` process to transfer the domain to another registrar. The process might complete instantly or might require confirmation or additional work. Check the emails sent to the email address of the registrant. The process is aborted after a timeout if it's not completed. This method is only supported for domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties`. The domain must also be unlocked before it can be transferred to a different registrar. For more information, see [Transfer a registered domain to another registrar](https://cloud.google.com/domains/docs/transfer-domain-to-another-registrar).</td>
</tr>
<tr>
    <td><a href="#renew_domain"><CopyableCode code="renew_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registrationsId"><code>registrationsId</code></a></td>
    <td></td>
    <td>Renews a recently expired domain. This method can only be called on domains that expired in the previous 30 days. After the renewal, the new expiration time of the domain is one year after the old expiration time and you are charged a `yearly_price` for the renewal.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-registrationsId">
    <td><CopyableCode code="registrationsId" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
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

Gets the details of a `Registration` resource.

```sql
SELECT
name,
contactSettings,
createTime,
dnsSettings,
domainName,
domainProperties,
expireTime,
issues,
labels,
managementSettings,
pendingContactSettings,
registerFailureReason,
state,
supportedPrivacy,
transferFailureReason
FROM google.domains.registrations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND registrationsId = '{{ registrationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the `Registration` resources in a project.

```sql
SELECT
name,
contactSettings,
createTime,
dnsSettings,
domainName,
domainProperties,
expireTime,
issues,
labels,
managementSettings,
pendingContactSettings,
registerFailureReason,
state,
supportedPrivacy,
transferFailureReason
FROM google.domains.registrations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`

```sql
UPDATE google.domains.registrations
SET 
data__domainName = '{{ domainName }}',
data__labels = '{{ labels }}',
data__managementSettings = '{{ managementSettings }}',
data__dnsSettings = '{{ dnsSettings }}',
data__contactSettings = '{{ contactSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND registrationsId = '{{ registrationsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](https://cloud.google.com/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains. After January 2024 you will only be able to delete `Registration` resources when `state` is one of: `EXPORTED`, `EXPIRED`,`REGISTRATION_FAILED` or `TRANSFER_FAILED`. See [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) for more details.

```sql
DELETE FROM google.domains.registrations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND registrationsId = '{{ registrationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_domains"
    values={[
        { label: 'search_domains', value: 'search_domains' },
        { label: 'register', value: 'register' },
        { label: 'transfer', value: 'transfer' },
        { label: 'import', value: 'import' },
        { label: 'configure_management_settings', value: 'configure_management_settings' },
        { label: 'configure_dns_settings', value: 'configure_dns_settings' },
        { label: 'configure_contact_settings', value: 'configure_contact_settings' },
        { label: 'export', value: 'export' },
        { label: 'reset_authorization_code', value: 'reset_authorization_code' },
        { label: 'initiate_push_transfer', value: 'initiate_push_transfer' },
        { label: 'renew_domain', value: 'renew_domain' }
    ]}
>
<TabItem value="search_domains">

Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

```sql
EXEC google.domains.registrations.search_domains 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@query='{{ query }}';
```
</TabItem>
<TabItem value="register">

Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

```sql
EXEC google.domains.registrations.register 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"registration": "{{ registration }}", 
"domainNotices": "{{ domainNotices }}", 
"contactNotices": "{{ contactNotices }}", 
"yearlyPrice": "{{ yearlyPrice }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="transfer">

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

```sql
EXEC google.domains.registrations.transfer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"registration": "{{ registration }}", 
"contactNotices": "{{ contactNotices }}", 
"yearlyPrice": "{{ yearlyPrice }}", 
"authorizationCode": "{{ authorizationCode }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="import">

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.

```sql
EXEC google.domains.registrations.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"domainName": "{{ domainName }}", 
"labels": "{{ labels }}"
}';
```
</TabItem>
<TabItem value="configure_management_settings">

Updates a `Registration`'s management settings.

```sql
EXEC google.domains.registrations.configure_management_settings 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required 
@@json=
'{
"managementSettings": "{{ managementSettings }}", 
"updateMask": "{{ updateMask }}"
}';
```
</TabItem>
<TabItem value="configure_dns_settings">

Updates a `Registration`'s DNS settings.

```sql
EXEC google.domains.registrations.configure_dns_settings 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required 
@@json=
'{
"dnsSettings": "{{ dnsSettings }}", 
"updateMask": "{{ updateMask }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="configure_contact_settings">

Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact . Caution: Please consider carefully any changes to contact privacy settings when changing from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA.` There may be a delay in reflecting updates you make to registrant contact information such that any changes you make to contact privacy (including from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA`) will be applied without delay but changes to registrant contact information may take a limited time to be publicized. This means that changes to contact privacy from `REDACTED_CONTACT_DATA` to `PUBLIC_CONTACT_DATA` may make the previous registrant contact data public until the modified registrant contact details are published.

```sql
EXEC google.domains.registrations.configure_contact_settings 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required 
@@json=
'{
"contactSettings": "{{ contactSettings }}", 
"updateMask": "{{ updateMask }}", 
"contactNotices": "{{ contactNotices }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="export">

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations) Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

```sql
EXEC google.domains.registrations.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required;
```
</TabItem>
<TabItem value="reset_authorization_code">

Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration. Domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties` don't support authorization codes and must use the `InitiatePushTransfer` method to initiate the process to transfer the domain to a different registrar.

```sql
EXEC google.domains.registrations.reset_authorization_code 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required;
```
</TabItem>
<TabItem value="initiate_push_transfer">

Initiates the `Push Transfer` process to transfer the domain to another registrar. The process might complete instantly or might require confirmation or additional work. Check the emails sent to the email address of the registrant. The process is aborted after a timeout if it's not completed. This method is only supported for domains that have the `REQUIRE_PUSH_TRANSFER` property in the list of `domain_properties`. The domain must also be unlocked before it can be transferred to a different registrar. For more information, see [Transfer a registered domain to another registrar](https://cloud.google.com/domains/docs/transfer-domain-to-another-registrar).

```sql
EXEC google.domains.registrations.initiate_push_transfer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required 
@@json=
'{
"tag": "{{ tag }}"
}';
```
</TabItem>
<TabItem value="renew_domain">

Renews a recently expired domain. This method can only be called on domains that expired in the previous 30 days. After the renewal, the new expiration time of the domain is one year after the old expiration time and you are charged a `yearly_price` for the renewal.

```sql
EXEC google.domains.registrations.renew_domain 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registrationsId='{{ registrationsId }}' --required 
@@json=
'{
"yearlyPrice": "{{ yearlyPrice }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
</Tabs>
