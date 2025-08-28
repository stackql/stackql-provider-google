--- 
title: encryption_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_configs
  - dataplex
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

Creates, updates, deletes, gets or lists an <code>encryption_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>encryption_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.encryption_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_encryption_configs_get"
    values={[
        { label: 'organizations_locations_encryption_configs_get', value: 'organizations_locations_encryption_configs_get' },
        { label: 'organizations_locations_encryption_configs_list', value: 'organizations_locations_encryption_configs_list' }
    ]}
>
<TabItem value="organizations_locations_encryption_configs_get">

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
    <td>Identifier. The resource name of the EncryptionConfig. Format: organizations/&#123;organization&#125;/locations/&#123;location&#125;/encryptionConfigs/&#123;encryption_config&#125; Global location is not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Encryption configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionState" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of encryption of the databases.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag of the EncryptionConfig. This is a strong etag.</td>
</tr>
<tr>
    <td><CopyableCode code="failureDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the failure if anything related to Cmek db fails. (id: GoogleCloudDataplexV1EncryptionConfigFailureDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional. If a key is chosen, it means that the customer is using CMEK. If a key is not chosen, it means that the customer is using Google managed encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Encryption configuration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_encryption_configs_list">

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
    <td>Identifier. The resource name of the EncryptionConfig. Format: organizations/&#123;organization&#125;/locations/&#123;location&#125;/encryptionConfigs/&#123;encryption_config&#125; Global location is not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Encryption configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionState" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of encryption of the databases.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag of the EncryptionConfig. This is a strong etag.</td>
</tr>
<tr>
    <td><CopyableCode code="failureDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the failure if anything related to Cmek db fails. (id: GoogleCloudDataplexV1EncryptionConfigFailureDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional. If a key is chosen, it means that the customer is using CMEK. If a key is not chosen, it means that the customer is using Google managed encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Encryption configuration was last updated.</td>
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
    <td><a href="#organizations_locations_encryption_configs_get"><CopyableCode code="organizations_locations_encryption_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-encryptionConfigsId"><code>encryptionConfigsId</code></a></td>
    <td></td>
    <td>Get an EncryptionConfig.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_encryption_configs_list"><CopyableCode code="organizations_locations_encryption_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>List EncryptionConfigs.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_encryption_configs_create"><CopyableCode code="organizations_locations_encryption_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-encryptionConfigId"><code>encryptionConfigId</code></a></td>
    <td>Create an EncryptionConfig.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_encryption_configs_patch"><CopyableCode code="organizations_locations_encryption_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-encryptionConfigsId"><code>encryptionConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update an EncryptionConfig.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_encryption_configs_delete"><CopyableCode code="organizations_locations_encryption_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-encryptionConfigsId"><code>encryptionConfigsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Delete an EncryptionConfig.</td>
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
<tr id="parameter-encryptionConfigsId">
    <td><CopyableCode code="encryptionConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-encryptionConfigId">
    <td><CopyableCode code="encryptionConfigId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="organizations_locations_encryption_configs_get"
    values={[
        { label: 'organizations_locations_encryption_configs_get', value: 'organizations_locations_encryption_configs_get' },
        { label: 'organizations_locations_encryption_configs_list', value: 'organizations_locations_encryption_configs_list' }
    ]}
>
<TabItem value="organizations_locations_encryption_configs_get">

Get an EncryptionConfig.

```sql
SELECT
name,
createTime,
encryptionState,
etag,
failureDetails,
key,
updateTime
FROM google.dataplex.encryption_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND encryptionConfigsId = '{{ encryptionConfigsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_encryption_configs_list">

List EncryptionConfigs.

```sql
SELECT
name,
createTime,
encryptionState,
etag,
failureDetails,
key,
updateTime
FROM google.dataplex.encryption_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_locations_encryption_configs_create"
    values={[
        { label: 'organizations_locations_encryption_configs_create', value: 'organizations_locations_encryption_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_encryption_configs_create">

Create an EncryptionConfig.

```sql
INSERT INTO google.dataplex.encryption_configs (
data__name,
data__key,
data__etag,
organizationsId,
locationsId,
encryptionConfigId
)
SELECT 
'{{ name }}',
'{{ key }}',
'{{ etag }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ encryptionConfigId }}'
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
- name: encryption_configs
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the encryption_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the encryption_configs resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the EncryptionConfig. Format: organizations/{organization}/locations/{location}/encryptionConfigs/{encryption_config} Global location is not supported.
        
    - name: key
      value: string
      description: >
        Optional. If a key is chosen, it means that the customer is using CMEK. If a key is not chosen, it means that the customer is using Google managed encryption.
        
    - name: etag
      value: string
      description: >
        Etag of the EncryptionConfig. This is a strong etag.
        
    - name: encryptionConfigId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_locations_encryption_configs_patch"
    values={[
        { label: 'organizations_locations_encryption_configs_patch', value: 'organizations_locations_encryption_configs_patch' }
    ]}
>
<TabItem value="organizations_locations_encryption_configs_patch">

Update an EncryptionConfig.

```sql
UPDATE google.dataplex.encryption_configs
SET 
data__name = '{{ name }}',
data__key = '{{ key }}',
data__etag = '{{ etag }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND encryptionConfigsId = '{{ encryptionConfigsId }}' --required
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
    defaultValue="organizations_locations_encryption_configs_delete"
    values={[
        { label: 'organizations_locations_encryption_configs_delete', value: 'organizations_locations_encryption_configs_delete' }
    ]}
>
<TabItem value="organizations_locations_encryption_configs_delete">

Delete an EncryptionConfig.

```sql
DELETE FROM google.dataplex.encryption_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND encryptionConfigsId = '{{ encryptionConfigsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
