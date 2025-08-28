--- 
title: backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_vaults
  - netapp
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

Creates, updates, deletes, gets or lists a <code>backup_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_vaults</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.backup_vaults" /></td></tr>
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
    <td>Identifier. The resource name of the backup vault. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupVaults/&#123;backup_vault_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupRegion" /></td>
    <td><code>string</code></td>
    <td>Optional. Region where the backups are stored. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="backupRetentionPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Backup retention policy defining the retenton of backups. (id: BackupRetentionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="backupVaultType" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of backup vault to be created. Default is IN_REGION.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationBackupVault" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the Backup vault created in backup region. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupVaults/&#123;backup_vault_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceBackupVault" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the Backup vault created in source region. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupVaults/&#123;backup_vault_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="sourceRegion" /></td>
    <td><code>string</code></td>
    <td>Output only. Region in which the backup vault is created. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup vault state.</td>
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
    <td>Identifier. The resource name of the backup vault. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupVaults/&#123;backup_vault_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="backupRegion" /></td>
    <td><code>string</code></td>
    <td>Optional. Region where the backups are stored. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="backupRetentionPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Backup retention policy defining the retenton of backups. (id: BackupRetentionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="backupVaultType" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of backup vault to be created. Default is IN_REGION.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationBackupVault" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the Backup vault created in backup region. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupVaults/&#123;backup_vault_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceBackupVault" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the Backup vault created in source region. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/backupVaults/&#123;backup_vault_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="sourceRegion" /></td>
    <td><code>string</code></td>
    <td>Output only. Region in which the backup vault is created. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The backup vault state.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a></td>
    <td></td>
    <td>Returns the description of the specified backup vault</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns list of all available backup vaults.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupVaultId"><code>backupVaultId</code></a></td>
    <td>Creates new backup vault</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings of a specific backup vault.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a></td>
    <td></td>
    <td>Warning! This operation will permanently delete the backup vault.</td>
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
<tr id="parameter-backupVaultsId">
    <td><CopyableCode code="backupVaultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-backupVaultId">
    <td><CopyableCode code="backupVaultId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the description of the specified backup vault

```sql
SELECT
name,
backupRegion,
backupRetentionPolicy,
backupVaultType,
createTime,
description,
destinationBackupVault,
labels,
sourceBackupVault,
sourceRegion,
state
FROM google.netapp.backup_vaults
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns list of all available backup vaults.

```sql
SELECT
name,
backupRegion,
backupRetentionPolicy,
backupVaultType,
createTime,
description,
destinationBackupVault,
labels,
sourceBackupVault,
sourceRegion,
state
FROM google.netapp.backup_vaults
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates new backup vault

```sql
INSERT INTO google.netapp.backup_vaults (
data__name,
data__description,
data__labels,
data__backupVaultType,
data__backupRegion,
data__backupRetentionPolicy,
projectsId,
locationsId,
backupVaultId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ backupVaultType }}',
'{{ backupRegion }}',
'{{ backupRetentionPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupVaultId }}'
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
- name: backup_vaults
  props:
    - name: projectsId
      value: string
      description: Required parameter for the backup_vaults resource.
    - name: locationsId
      value: string
      description: Required parameter for the backup_vaults resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the backup vault. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`.
        
    - name: description
      value: string
      description: >
        Description of the backup vault.
        
    - name: labels
      value: object
      description: >
        Resource labels to represent user provided metadata.
        
    - name: backupVaultType
      value: string
      description: >
        Optional. Type of backup vault to be created. Default is IN_REGION.
        
      valid_values: ['BACKUP_VAULT_TYPE_UNSPECIFIED', 'IN_REGION', 'CROSS_REGION']
    - name: backupRegion
      value: string
      description: >
        Optional. Region where the backups are stored. Format: `projects/{project_id}/locations/{location}`
        
    - name: backupRetentionPolicy
      value: object
      description: >
        Optional. Backup retention policy defining the retenton of backups.
        
    - name: backupVaultId
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

Updates the settings of a specific backup vault.

```sql
UPDATE google.netapp.backup_vaults
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__backupVaultType = '{{ backupVaultType }}',
data__backupRegion = '{{ backupRegion }}',
data__backupRetentionPolicy = '{{ backupRetentionPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
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

Warning! This operation will permanently delete the backup vault.

```sql
DELETE FROM google.netapp.backup_vaults
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required;
```
</TabItem>
</Tabs>
