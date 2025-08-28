--- 
title: resource_backup_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_backup_configs
  - backupdr
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

Creates, updates, deletes, gets or lists a <code>resource_backup_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>resource_backup_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.resource_backup_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The resource name of the ResourceBackupConfig. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/resourceBackupConfigs/&#123;uid&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfigsDetails" /></td>
    <td><code>array</code></td>
    <td>Backup configurations applying to the target resource, including those targeting its related/child resources. For example, backup configuration applicable to Compute Engine disks will be populated in this field for a Compute Engine VM which has the disk associated.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfigured" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the target resource is configured for backup. This is true if the backup_configs_details is not empty.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResource" /></td>
    <td><code>string</code></td>
    <td>Output only. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the cloud resource that this configuration applies to. Supported resource types are ResourceBackupConfig.ResourceType.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceDisplayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The human friendly name of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceLabels" /></td>
    <td><code>object</code></td>
    <td>Labels associated with the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource backup config.</td>
</tr>
<tr>
    <td><CopyableCode code="vaulted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the target resource is protected by a backup vault. This is true if the backup_configs_details is not empty and any of the ResourceBackupConfig.backup_configs_details has a backup configuration with BackupConfigDetails.backup_vault set. set.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ResourceBackupConfigs.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists ResourceBackupConfigs.

```sql
SELECT
name,
backupConfigsDetails,
backupConfigured,
targetResource,
targetResourceDisplayName,
targetResourceLabels,
targetResourceType,
uid,
vaulted
FROM google.backupdr.resource_backup_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>
