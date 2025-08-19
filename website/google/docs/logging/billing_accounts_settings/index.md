--- 
title: billing_accounts_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_accounts_settings
  - logging
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

Creates, updates, deletes, gets or lists a <code>billing_accounts_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>billing_accounts_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.billing_accounts_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="billing_accounts_get_settings"
    values={[
        { label: 'billing_accounts_get_settings', value: 'billing_accounts_get_settings' }
    ]}
>
<TabItem value="billing_accounts_get_settings">

Describes the settings associated with a project, folder, organization, or billing account.

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
    <td>Output only. The resource name of the settings.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSinkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Overrides the built-in configuration for _Default sink. (id: DefaultSinkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="disableDefaultSink" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsServiceAccountId" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that will be used to access your Cloud KMS key. Use GetSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingServiceAccountId" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account for the given resource container, such as project or folder. Log sinks use this service account as their writer_identity if no custom service account is provided in the request when calling the create sink method.</td>
</tr>
<tr>
    <td><CopyableCode code="storageLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. The storage location for the _Default and _Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.Example value: europe-west1.Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets.</td>
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
    <td><a href="#billing_accounts_get_settings"><CopyableCode code="billing_accounts_get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a></td>
    <td></td>
    <td>Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.</td>
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
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="billing_accounts_get_settings"
    values={[
        { label: 'billing_accounts_get_settings', value: 'billing_accounts_get_settings' }
    ]}
>
<TabItem value="billing_accounts_get_settings">

Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.

```sql
SELECT
name,
defaultSinkConfig,
disableDefaultSink,
kmsKeyName,
kmsServiceAccountId,
loggingServiceAccountId,
storageLocation
FROM google.logging.billing_accounts_settings
WHERE billingAccountsId = '{{ billingAccountsId }}' -- required;
```
</TabItem>
</Tabs>
