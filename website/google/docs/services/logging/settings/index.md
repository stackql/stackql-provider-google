--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.logging.settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_get_settings"
    values={[
        { label: 'projects_get_settings', value: 'projects_get_settings' },
        { label: 'organizations_get_settings', value: 'organizations_get_settings' },
        { label: 'folders_get_settings', value: 'folders_get_settings' }
    ]}
>
<TabItem value="projects_get_settings">

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
<TabItem value="organizations_get_settings">

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
<TabItem value="folders_get_settings">

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
    <td><a href="#projects_get_settings"><CopyableCode code="projects_get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.</td>
</tr>
<tr>
    <td><a href="#organizations_get_settings"><CopyableCode code="organizations_get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.</td>
</tr>
<tr>
    <td><a href="#folders_get_settings"><CopyableCode code="folders_get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.</td>
</tr>
<tr>
    <td><a href="#organizations_update_settings"><CopyableCode code="organizations_update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.</td>
</tr>
<tr>
    <td><a href="#folders_update_settings"><CopyableCode code="folders_update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.</td>
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
    defaultValue="projects_get_settings"
    values={[
        { label: 'projects_get_settings', value: 'projects_get_settings' },
        { label: 'organizations_get_settings', value: 'organizations_get_settings' },
        { label: 'folders_get_settings', value: 'folders_get_settings' }
    ]}
>
<TabItem value="projects_get_settings">

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
FROM google.logging.settings
WHERE projectsId = '{{ projectsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_get_settings">

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
FROM google.logging.settings
WHERE organizationsId = '{{ organizationsId }}' -- required;
```
</TabItem>
<TabItem value="folders_get_settings">

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
FROM google.logging.settings
WHERE foldersId = '{{ foldersId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_update_settings"
    values={[
        { label: 'organizations_update_settings', value: 'organizations_update_settings' },
        { label: 'folders_update_settings', value: 'folders_update_settings' }
    ]}
>
<TabItem value="organizations_update_settings">

Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.

```sql
UPDATE google.logging.settings
SET 
data__kmsKeyName = '{{ kmsKeyName }}',
data__storageLocation = '{{ storageLocation }}',
data__disableDefaultSink = {{ disableDefaultSink }},
data__defaultSinkConfig = '{{ defaultSinkConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
defaultSinkConfig,
disableDefaultSink,
kmsKeyName,
kmsServiceAccountId,
loggingServiceAccountId,
storageLocation;
```
</TabItem>
<TabItem value="folders_update_settings">

Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.

```sql
UPDATE google.logging.settings
SET 
data__kmsKeyName = '{{ kmsKeyName }}',
data__storageLocation = '{{ storageLocation }}',
data__disableDefaultSink = {{ disableDefaultSink }},
data__defaultSinkConfig = '{{ defaultSinkConfig }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
defaultSinkConfig,
disableDefaultSink,
kmsKeyName,
kmsServiceAccountId,
loggingServiceAccountId,
storageLocation;
```
</TabItem>
</Tabs>
