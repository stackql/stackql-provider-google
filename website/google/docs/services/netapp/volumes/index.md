--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>volumes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.volumes" /></td></tr>
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
    <td>Identifier. Name of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="activeDirectory" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the ActiveDirectory name of a SMB volume.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>BackupConfig of the volume. (id: BackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Capacity in GIB of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="coldTierSizeGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size of the volume cold tier data rounded down to the nearest GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionType" /></td>
    <td><code>string</code></td>
    <td>Output only. Specified the current volume encryption key source.</td>
</tr>
<tr>
    <td><CopyableCode code="exportPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Export policy of the volume (id: ExportPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="hasReplication" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the volume is part of a replication relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="hybridReplicationParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. The Hybrid Replication parameters for the volume. (id: HybridReplicationParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="kerberosEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).</td>
</tr>
<tr>
    <td><CopyableCode code="kmsConfig" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the KMS config to be used for volume encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="largeCapacity" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.</td>
</tr>
<tr>
    <td><CopyableCode code="ldapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Flag indicating if the volume is NFS LDAP enabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="mountOptions" /></td>
    <td><code>array</code></td>
    <td>Output only. Mount options of this volume</td>
</tr>
<tr>
    <td><CopyableCode code="multipleEndpoints" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints. Only the volume with large_capacity will be allowed to have multiple endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Output only. VPC Network name. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Required. Protocols required for the volume</td>
</tr>
<tr>
    <td><CopyableCode code="psaRange" /></td>
    <td><code>string</code></td>
    <td>Output only. This field is not implemented. The values provided in this field are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZone" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the replica zone for regional volume.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies the source of the volume to be created from. (id: RestoreParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedActions" /></td>
    <td><code>array</code></td>
    <td>Optional. List of actions that are restricted on this volume.</td>
</tr>
<tr>
    <td><CopyableCode code="securityStyle" /></td>
    <td><code>string</code></td>
    <td>Optional. Security Style of the Volume</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevel" /></td>
    <td><code>string</code></td>
    <td>Output only. Service level of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="shareName" /></td>
    <td><code>string</code></td>
    <td>Required. Share name of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="smbSettings" /></td>
    <td><code>array</code></td>
    <td>Optional. SMB share settings for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="snapReserve" /></td>
    <td><code>number (double)</code></td>
    <td>Optional. Snap_reserve specifies percentage of volume storage reserved for snapshot storage. Default is 0 percent.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotDirectory" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Snapshot_directory if enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. SnapshotPolicy for a volume. (id: SnapshotPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="storagePool" /></td>
    <td><code>string</code></td>
    <td>Required. StoragePool name of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="throughputMibps" /></td>
    <td><code>number (double)</code></td>
    <td>Optional. Throughput of the volume (in MiB/s)</td>
</tr>
<tr>
    <td><CopyableCode code="tieringPolicy" /></td>
    <td><code>object</code></td>
    <td>Tiering policy for the volume. (id: TieringPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="unixPermissions" /></td>
    <td><code>string</code></td>
    <td>Optional. Default unix style permission (e.g. 777) the mount point will be created with. Applicable for NFS protocol types only.</td>
</tr>
<tr>
    <td><CopyableCode code="usedGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Used capacity in GIB of the volume. This is computed periodically and it does not represent the realtime usage.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the active zone for regional volume.</td>
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
    <td>Identifier. Name of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="activeDirectory" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the ActiveDirectory name of a SMB volume.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>BackupConfig of the volume. (id: BackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Capacity in GIB of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="coldTierSizeGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size of the volume cold tier data rounded down to the nearest GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionType" /></td>
    <td><code>string</code></td>
    <td>Output only. Specified the current volume encryption key source.</td>
</tr>
<tr>
    <td><CopyableCode code="exportPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Export policy of the volume (id: ExportPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="hasReplication" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the volume is part of a replication relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="hybridReplicationParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. The Hybrid Replication parameters for the volume. (id: HybridReplicationParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="kerberosEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).</td>
</tr>
<tr>
    <td><CopyableCode code="kmsConfig" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the KMS config to be used for volume encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="largeCapacity" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.</td>
</tr>
<tr>
    <td><CopyableCode code="ldapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Flag indicating if the volume is NFS LDAP enabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="mountOptions" /></td>
    <td><code>array</code></td>
    <td>Output only. Mount options of this volume</td>
</tr>
<tr>
    <td><CopyableCode code="multipleEndpoints" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints. Only the volume with large_capacity will be allowed to have multiple endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Output only. VPC Network name. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Required. Protocols required for the volume</td>
</tr>
<tr>
    <td><CopyableCode code="psaRange" /></td>
    <td><code>string</code></td>
    <td>Output only. This field is not implemented. The values provided in this field are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZone" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the replica zone for regional volume.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies the source of the volume to be created from. (id: RestoreParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="restrictedActions" /></td>
    <td><code>array</code></td>
    <td>Optional. List of actions that are restricted on this volume.</td>
</tr>
<tr>
    <td><CopyableCode code="securityStyle" /></td>
    <td><code>string</code></td>
    <td>Optional. Security Style of the Volume</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevel" /></td>
    <td><code>string</code></td>
    <td>Output only. Service level of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="shareName" /></td>
    <td><code>string</code></td>
    <td>Required. Share name of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="smbSettings" /></td>
    <td><code>array</code></td>
    <td>Optional. SMB share settings for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="snapReserve" /></td>
    <td><code>number (double)</code></td>
    <td>Optional. Snap_reserve specifies percentage of volume storage reserved for snapshot storage. Default is 0 percent.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotDirectory" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Snapshot_directory if enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. SnapshotPolicy for a volume. (id: SnapshotPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="storagePool" /></td>
    <td><code>string</code></td>
    <td>Required. StoragePool name of the volume</td>
</tr>
<tr>
    <td><CopyableCode code="throughputMibps" /></td>
    <td><code>number (double)</code></td>
    <td>Optional. Throughput of the volume (in MiB/s)</td>
</tr>
<tr>
    <td><CopyableCode code="tieringPolicy" /></td>
    <td><code>object</code></td>
    <td>Tiering policy for the volume. (id: TieringPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="unixPermissions" /></td>
    <td><code>string</code></td>
    <td>Optional. Default unix style permission (e.g. 777) the mount point will be created with. Applicable for NFS protocol types only.</td>
</tr>
<tr>
    <td><CopyableCode code="usedGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Used capacity in GIB of the volume. This is computed periodically and it does not represent the realtime usage.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the active zone for regional volume.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td></td>
    <td>Gets details of a single Volume.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Volumes in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td>Creates a new Volume in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Volume.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Volume.</td>
</tr>
<tr>
    <td><a href="#revert"><CopyableCode code="revert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td></td>
    <td>Revert an existing volume to a specified snapshot. Warning! This operation will permanently revert all changes made after the snapshot was created.</td>
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
<tr id="parameter-volumesId">
    <td><CopyableCode code="volumesId" /></td>
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
<tr id="parameter-volumeId">
    <td><CopyableCode code="volumeId" /></td>
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

Gets details of a single Volume.

```sql
SELECT
name,
activeDirectory,
backupConfig,
capacityGib,
coldTierSizeGib,
createTime,
description,
encryptionType,
exportPolicy,
hasReplication,
hybridReplicationParameters,
kerberosEnabled,
kmsConfig,
labels,
largeCapacity,
ldapEnabled,
mountOptions,
multipleEndpoints,
network,
protocols,
psaRange,
replicaZone,
restoreParameters,
restrictedActions,
securityStyle,
serviceLevel,
shareName,
smbSettings,
snapReserve,
snapshotDirectory,
snapshotPolicy,
state,
stateDetails,
storagePool,
throughputMibps,
tieringPolicy,
unixPermissions,
usedGib,
zone
FROM google.netapp.volumes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND volumesId = '{{ volumesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Volumes in a given project.

```sql
SELECT
name,
activeDirectory,
backupConfig,
capacityGib,
coldTierSizeGib,
createTime,
description,
encryptionType,
exportPolicy,
hasReplication,
hybridReplicationParameters,
kerberosEnabled,
kmsConfig,
labels,
largeCapacity,
ldapEnabled,
mountOptions,
multipleEndpoints,
network,
protocols,
psaRange,
replicaZone,
restoreParameters,
restrictedActions,
securityStyle,
serviceLevel,
shareName,
smbSettings,
snapReserve,
snapshotDirectory,
snapshotPolicy,
state,
stateDetails,
storagePool,
throughputMibps,
tieringPolicy,
unixPermissions,
usedGib,
zone
FROM google.netapp.volumes
WHERE projectsId = '{{ projectsId }}' -- required
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new Volume in a given project and location.

```sql
INSERT INTO google.netapp.volumes (
data__name,
data__shareName,
data__storagePool,
data__capacityGib,
data__exportPolicy,
data__protocols,
data__smbSettings,
data__unixPermissions,
data__labels,
data__description,
data__snapshotPolicy,
data__snapReserve,
data__snapshotDirectory,
data__securityStyle,
data__kerberosEnabled,
data__restoreParameters,
data__backupConfig,
data__restrictedActions,
data__largeCapacity,
data__multipleEndpoints,
data__tieringPolicy,
data__hybridReplicationParameters,
data__throughputMibps,
projectsId,
locationsId,
volumeId
)
SELECT 
'{{ name }}',
'{{ shareName }}',
'{{ storagePool }}',
'{{ capacityGib }}',
'{{ exportPolicy }}',
'{{ protocols }}',
'{{ smbSettings }}',
'{{ unixPermissions }}',
'{{ labels }}',
'{{ description }}',
'{{ snapshotPolicy }}',
{{ snapReserve }},
{{ snapshotDirectory }},
'{{ securityStyle }}',
{{ kerberosEnabled }},
'{{ restoreParameters }}',
'{{ backupConfig }}',
'{{ restrictedActions }}',
{{ largeCapacity }},
{{ multipleEndpoints }},
'{{ tieringPolicy }}',
'{{ hybridReplicationParameters }}',
{{ throughputMibps }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ volumeId }}'
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
- name: volumes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the volumes resource.
    - name: locationsId
      value: string
      description: Required parameter for the volumes resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the volume
        
    - name: shareName
      value: string
      description: >
        Required. Share name of the volume
        
    - name: storagePool
      value: string
      description: >
        Required. StoragePool name of the volume
        
    - name: capacityGib
      value: string
      description: >
        Required. Capacity in GIB of the volume
        
    - name: exportPolicy
      value: object
      description: >
        Optional. Export policy of the volume
        
    - name: protocols
      value: array
      description: >
        Required. Protocols required for the volume
        
    - name: smbSettings
      value: array
      description: >
        Optional. SMB share settings for the volume.
        
    - name: unixPermissions
      value: string
      description: >
        Optional. Default unix style permission (e.g. 777) the mount point will be created with. Applicable for NFS protocol types only.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: description
      value: string
      description: >
        Optional. Description of the volume
        
    - name: snapshotPolicy
      value: object
      description: >
        Optional. SnapshotPolicy for a volume.
        
    - name: snapReserve
      value: number
      description: >
        Optional. Snap_reserve specifies percentage of volume storage reserved for snapshot storage. Default is 0 percent.
        
    - name: snapshotDirectory
      value: boolean
      description: >
        Optional. Snapshot_directory if enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots.
        
    - name: securityStyle
      value: string
      description: >
        Optional. Security Style of the Volume
        
      valid_values: ['SECURITY_STYLE_UNSPECIFIED', 'NTFS', 'UNIX']
    - name: kerberosEnabled
      value: boolean
      description: >
        Optional. Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
        
    - name: restoreParameters
      value: object
      description: >
        Optional. Specifies the source of the volume to be created from.
        
    - name: backupConfig
      value: object
      description: >
        BackupConfig of the volume.
        
    - name: restrictedActions
      value: array
      description: >
        Optional. List of actions that are restricted on this volume.
        
    - name: largeCapacity
      value: boolean
      description: >
        Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.
        
    - name: multipleEndpoints
      value: boolean
      description: >
        Optional. Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints. Only the volume with large_capacity will be allowed to have multiple endpoints.
        
    - name: tieringPolicy
      value: object
      description: >
        Tiering policy for the volume.
        
    - name: hybridReplicationParameters
      value: object
      description: >
        Optional. The Hybrid Replication parameters for the volume.
        
    - name: throughputMibps
      value: number
      description: >
        Optional. Throughput of the volume (in MiB/s)
        
    - name: volumeId
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

Updates the parameters of a single Volume.

```sql
UPDATE google.netapp.volumes
SET 
data__name = '{{ name }}',
data__shareName = '{{ shareName }}',
data__storagePool = '{{ storagePool }}',
data__capacityGib = '{{ capacityGib }}',
data__exportPolicy = '{{ exportPolicy }}',
data__protocols = '{{ protocols }}',
data__smbSettings = '{{ smbSettings }}',
data__unixPermissions = '{{ unixPermissions }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__snapshotPolicy = '{{ snapshotPolicy }}',
data__snapReserve = {{ snapReserve }},
data__snapshotDirectory = {{ snapshotDirectory }},
data__securityStyle = '{{ securityStyle }}',
data__kerberosEnabled = {{ kerberosEnabled }},
data__restoreParameters = '{{ restoreParameters }}',
data__backupConfig = '{{ backupConfig }}',
data__restrictedActions = '{{ restrictedActions }}',
data__largeCapacity = {{ largeCapacity }},
data__multipleEndpoints = {{ multipleEndpoints }},
data__tieringPolicy = '{{ tieringPolicy }}',
data__hybridReplicationParameters = '{{ hybridReplicationParameters }}',
data__throughputMibps = {{ throughputMibps }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND volumesId = '{{ volumesId }}' --required
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

Deletes a single Volume.

```sql
DELETE FROM google.netapp.volumes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND volumesId = '{{ volumesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revert"
    values={[
        { label: 'revert', value: 'revert' }
    ]}
>
<TabItem value="revert">

Revert an existing volume to a specified snapshot. Warning! This operation will permanently revert all changes made after the snapshot was created.

```sql
EXEC google.netapp.volumes.revert 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@volumesId='{{ volumesId }}' --required 
@@json=
'{
"snapshotId": "{{ snapshotId }}"
}';
```
</TabItem>
</Tabs>
