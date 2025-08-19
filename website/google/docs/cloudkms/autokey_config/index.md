--- 
title: autokey_config
hide_title: false
hide_table_of_contents: false
keywords:
  - autokey_config
  - cloudkms
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

Creates, updates, deletes, gets or lists an <code>autokey_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>autokey_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.autokey_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autokey_config"
    values={[
        { label: 'get_autokey_config', value: 'get_autokey_config' }
    ]}
>
<TabItem value="get_autokey_config">

Cloud KMS Autokey configuration for a folder.

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
    <td>Identifier. Name of the AutokeyConfig resource, e.g. `folders/&#123;FOLDER_NUMBER&#125;/autokeyConfig`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A checksum computed by the server based on the value of other fields. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The request will be rejected with an ABORTED error on a mismatched etag.</td>
</tr>
<tr>
    <td><CopyableCode code="keyProject" /></td>
    <td><code>string</code></td>
    <td>Optional. Name of the key project, e.g. `projects/&#123;PROJECT_ID&#125;` or `projects/&#123;PROJECT_NUMBER&#125;`, where Cloud KMS Autokey will provision a new CryptoKey when a KeyHandle is created. On UpdateAutokeyConfig, the caller will require `cloudkms.cryptoKeys.setIamPolicy` permission on this key project. Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the `cloudkms.admin` role (or pertinent permissions). A request with an empty key project field will clear the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state for the AutokeyConfig.</td>
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
    <td><a href="#get_autokey_config"><CopyableCode code="get_autokey_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Returns the AutokeyConfig for a folder.</td>
</tr>
<tr>
    <td><a href="#update_autokey_config"><CopyableCode code="update_autokey_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the AutokeyConfig for a folder. The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A KeyHandle creation in the folder's descendant projects will use this configuration to determine where to create the resulting CryptoKey.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_autokey_config"
    values={[
        { label: 'get_autokey_config', value: 'get_autokey_config' }
    ]}
>
<TabItem value="get_autokey_config">

Returns the AutokeyConfig for a folder.

```sql
SELECT
name,
etag,
keyProject,
state
FROM google.cloudkms.autokey_config
WHERE foldersId = '{{ foldersId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_autokey_config"
    values={[
        { label: 'update_autokey_config', value: 'update_autokey_config' }
    ]}
>
<TabItem value="update_autokey_config">

Updates the AutokeyConfig for a folder. The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A KeyHandle creation in the folder's descendant projects will use this configuration to determine where to create the resulting CryptoKey.

```sql
UPDATE google.cloudkms.autokey_config
SET 
data__name = '{{ name }}',
data__keyProject = '{{ keyProject }}',
data__etag = '{{ etag }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
etag,
keyProject,
state;
```
</TabItem>
</Tabs>
