--- 
title: backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_vaults
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

Creates, updates, deletes, gets or lists a <code>backup_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>backup_vaults</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.backupdr.backup_vaults" /></td></tr>
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

Message describing a BackupVault object.

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
    <td>Output only. Identifier. Name of the backup vault to create. It must have the format`"projects/&#123;project&#125;/locations/&#123;location&#125;/backupVaults/&#123;backupvault&#125;"`. `&#123;backupvault&#125;` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="accessRestriction" /></td>
    <td><code>string</code></td>
    <td>Optional. Note: This field is added for future use case and will not be supported in the current release. Access restriction for the backup vault. Default value is WITHIN_ORGANIZATION if not provided during creation.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="backupCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of backups in this backup vault.</td>
</tr>
<tr>
    <td><CopyableCode code="backupMinimumEnforcedRetentionDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Set to true when there are no backups nested under this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the BackupVault instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Time after which the BackupVault resource is locked.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Server specified ETag for the backup vault resource to prevent simultaneous updates from overwiting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user provided metadata. No labels currently defined:</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. Service account used by the BackupVault Service for this BackupVault. The user should grant this account permissions in their workload project to enable the service to run backups and restores there.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The BackupVault resource instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="totalStoredBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Total size of the storage used by all backup resources.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable after resource creation until resource deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for listing BackupVaults.

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
    <td><CopyableCode code="backupVaults" /></td>
    <td><code>array</code></td>
    <td>The list of BackupVault instances in the project for the specified location. If the '&#123;location&#125;' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return backup vaults in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a BackupVault.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists BackupVaults in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-backupVaultId"><code>backupVaultId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new BackupVault in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-forceUpdateAccessRestriction"><code>forceUpdateAccessRestriction</code></a></td>
    <td>Updates the settings of a BackupVault.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backupVaultsId"><code>backupVaultsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-ignoreBackupPlanReferences"><code>ignoreBackupPlanReferences</code></a></td>
    <td>Deletes a BackupVault.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-backupVaultId">
    <td><CopyableCode code="backupVaultId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-forceUpdateAccessRestriction">
    <td><CopyableCode code="forceUpdateAccessRestriction" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreBackupPlanReferences">
    <td><CopyableCode code="ignoreBackupPlanReferences" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
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

Gets details of a BackupVault.

```sql
SELECT
name,
accessRestriction,
annotations,
backupCount,
backupMinimumEnforcedRetentionDuration,
createTime,
deletable,
description,
effectiveTime,
etag,
labels,
serviceAccount,
state,
totalStoredBytes,
uid,
updateTime
FROM google.backupdr.backup_vaults
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backupVaultsId = '{{ backupVaultsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists BackupVaults in a given project and location.

```sql
SELECT
backupVaults,
nextPageToken,
unreachable
FROM google.backupdr.backup_vaults
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND view = '{{ view }}';
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

Creates a new BackupVault in a given project and location.

```sql
INSERT INTO google.backupdr.backup_vaults (
data__description,
data__labels,
data__backupMinimumEnforcedRetentionDuration,
data__etag,
data__effectiveTime,
data__annotations,
data__accessRestriction,
projectsId,
locationsId,
backupVaultId,
requestId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ labels }}',
'{{ backupMinimumEnforcedRetentionDuration }}',
'{{ etag }}',
'{{ effectiveTime }}',
'{{ annotations }}',
'{{ accessRestriction }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backupVaultId }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
    - name: description
      value: string
      description: >
        Optional. The description of the BackupVault instance (2048 characters or less).
        
    - name: labels
      value: object
      description: >
        Optional. Resource labels to represent user provided metadata. No labels currently defined:
        
    - name: backupMinimumEnforcedRetentionDuration
      value: string
      description: >
        Required. The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.
        
    - name: etag
      value: string
      description: >
        Optional. Server specified ETag for the backup vault resource to prevent simultaneous updates from overwiting each other.
        
    - name: effectiveTime
      value: string
      description: >
        Optional. Time after which the BackupVault resource is locked.
        
    - name: annotations
      value: object
      description: >
        Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.
        
    - name: accessRestriction
      value: string
      description: >
        Optional. Note: This field is added for future use case and will not be supported in the current release. Access restriction for the backup vault. Default value is WITHIN_ORGANIZATION if not provided during creation.
        
      valid_values: ['ACCESS_RESTRICTION_UNSPECIFIED', 'WITHIN_PROJECT', 'WITHIN_ORGANIZATION', 'UNRESTRICTED', 'WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA']
    - name: backupVaultId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
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

Updates the settings of a BackupVault.

```sql
UPDATE google.backupdr.backup_vaults
SET 
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__backupMinimumEnforcedRetentionDuration = '{{ backupMinimumEnforcedRetentionDuration }}',
data__etag = '{{ etag }}',
data__effectiveTime = '{{ effectiveTime }}',
data__annotations = '{{ annotations }}',
data__accessRestriction = '{{ accessRestriction }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
AND force = {{ force}}
AND forceUpdateAccessRestriction = {{ forceUpdateAccessRestriction}}
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

Deletes a BackupVault.

```sql
DELETE FROM google.backupdr.backup_vaults
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backupVaultsId = '{{ backupVaultsId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
AND allowMissing = '{{ allowMissing }}'
AND ignoreBackupPlanReferences = '{{ ignoreBackupPlanReferences }}';
```
</TabItem>
</Tabs>
