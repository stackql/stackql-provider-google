--- 
title: disks_snapshot
hide_title: false
hide_table_of_contents: false
keywords:
  - disks_snapshot
  - compute
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

Creates, updates, deletes, gets or lists a <code>disks_snapshot</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>disks_snapshot</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.disks_snapshot" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-guestFlush"><code>guestFlush</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.</td>
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
<tr id="parameter-disk">
    <td><CopyableCode code="disk" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-guestFlush">
    <td><CopyableCode code="guestFlush" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.

```sql
INSERT INTO google.compute.disks_snapshot (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__status,
data__sourceDisk,
data__sourceDiskId,
data__diskSizeGb,
data__storageBytes,
data__storageBytesStatus,
data__licenses,
data__snapshotEncryptionKey,
data__sourceDiskEncryptionKey,
data__selfLink,
data__labels,
data__labelFingerprint,
data__licenseCodes,
data__storageLocations,
data__autoCreated,
data__guestOsFeatures,
data__downloadBytes,
data__chainName,
data__satisfiesPzs,
data__guestFlush,
data__locationHint,
data__sourceSnapshotSchedulePolicy,
data__sourceSnapshotSchedulePolicyId,
data__sourceInstantSnapshot,
data__sourceInstantSnapshotId,
data__architecture,
data__snapshotType,
data__creationSizeBytes,
data__enableConfidentialCompute,
data__sourceDiskForRecoveryCheckpoint,
data__sourceInstantSnapshotEncryptionKey,
project,
zone,
disk,
guestFlush,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ status }}',
'{{ sourceDisk }}',
'{{ sourceDiskId }}',
'{{ diskSizeGb }}',
'{{ storageBytes }}',
'{{ storageBytesStatus }}',
'{{ licenses }}',
'{{ snapshotEncryptionKey }}',
'{{ sourceDiskEncryptionKey }}',
'{{ selfLink }}',
'{{ labels }}',
'{{ labelFingerprint }}',
'{{ licenseCodes }}',
'{{ storageLocations }}',
{{ autoCreated }},
'{{ guestOsFeatures }}',
'{{ downloadBytes }}',
'{{ chainName }}',
{{ satisfiesPzs }},
{{ guestFlush }},
'{{ locationHint }}',
'{{ sourceSnapshotSchedulePolicy }}',
'{{ sourceSnapshotSchedulePolicyId }}',
'{{ sourceInstantSnapshot }}',
'{{ sourceInstantSnapshotId }}',
'{{ architecture }}',
'{{ snapshotType }}',
'{{ creationSizeBytes }}',
{{ enableConfidentialCompute }},
'{{ sourceDiskForRecoveryCheckpoint }}',
'{{ sourceInstantSnapshotEncryptionKey }}',
'{{ project }}',
'{{ zone }}',
'{{ disk }}',
'{{ guestFlush }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: disks_snapshot
  props:
    - name: project
      value: string
      description: Required parameter for the disks_snapshot resource.
    - name: zone
      value: string
      description: Required parameter for the disks_snapshot resource.
    - name: disk
      value: string
      description: Required parameter for the disks_snapshot resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#snapshot for Snapshot resources.
        
      default: compute#snapshot
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: name
      value: string
      description: >
        Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: status
      value: string
      description: >
        [Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.
        
      valid_values: ['CREATING', 'DELETING', 'FAILED', 'READY', 'UPLOADING']
    - name: sourceDisk
      value: string
      description: >
        The source disk used to create this snapshot.
        
    - name: sourceDiskId
      value: string
      description: >
        [Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.
        
    - name: diskSizeGb
      value: string
      description: >
        [Output Only] Size of the source disk, specified in GB.
        
    - name: storageBytes
      value: string
      description: >
        [Output Only] A size of the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot creation/deletion.
        
    - name: storageBytesStatus
      value: string
      description: >
        [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
        
      valid_values: ['UPDATING', 'UP_TO_DATE']
    - name: licenses
      value: array
      description: >
        [Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a Windows image).
        
    - name: snapshotEncryptionKey
      value: object
      description: >
        Encrypts the snapshot using a customer-supplied encryption key. After you encrypt a snapshot using a customer-supplied key, you must provide the same key if you use the snapshot later. For example, you must provide the encryption key when you create a disk from the encrypted snapshot in a future request. Customer-supplied encryption keys do not protect access to metadata of the snapshot. If you do not provide an encryption key when creating the snapshot, then the snapshot will be encrypted using an automatically generated key and you do not need to provide a key to use the snapshot later.
        
    - name: sourceDiskEncryptionKey
      value: object
      description: >
        The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: labels
      value: object
      description: >
        Labels to apply to this snapshot. These can be later modified by the setLabels method. Label values may be empty.
        
    - name: labelFingerprint
      value: string
      description: >
        A fingerprint for the labels being applied to this snapshot, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a snapshot.
        
    - name: licenseCodes
      value: array
      description: >
        [Output Only] Integer license codes indicating which licenses are attached to this snapshot.
        
    - name: storageLocations
      value: array
      description: >
        Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
        
    - name: autoCreated
      value: boolean
      description: >
        [Output Only] Set to true if snapshots are automatically created by applying resource policy on the target disk.
        
    - name: guestOsFeatures
      value: array
      description: >
        [Output Only] A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
        
    - name: downloadBytes
      value: string
      description: >
        [Output Only] Number of bytes downloaded to restore a snapshot to a disk.
        
    - name: chainName
      value: string
      description: >
        Creates the new snapshot in the snapshot chain labeled with the specified name. The chain name must be 1-63 characters long and comply with RFC1035. This is an uncommon option only for advanced service owners who needs to create separate snapshot chains, for example, for chargeback tracking. When you describe your snapshot resource, this field is visible only if it has a non-empty value.
        
    - name: satisfiesPzs
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: guestFlush
      value: boolean
      description: >
        [Input Only] Whether to attempt an application consistent snapshot by informing the OS to prepare for the snapshot process.
        
    - name: locationHint
      value: string
      description: >
        An opaque location hint used to place the snapshot close to other resources. This field is for use by internal tools that use the public API.
        
    - name: sourceSnapshotSchedulePolicy
      value: string
      description: >
        [Output Only] URL of the resource policy which created this scheduled snapshot.
        
    - name: sourceSnapshotSchedulePolicyId
      value: string
      description: >
        [Output Only] ID of the resource policy which created this scheduled snapshot.
        
    - name: sourceInstantSnapshot
      value: string
      description: >
        The source instant snapshot used to create this snapshot. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instantSnapshots/instantSnapshot - projects/project/zones/zone/instantSnapshots/instantSnapshot - zones/zone/instantSnapshots/instantSnapshot 
        
    - name: sourceInstantSnapshotId
      value: string
      description: >
        [Output Only] The unique ID of the instant snapshot used to create this snapshot. This value identifies the exact instant snapshot that was used to create this snapshot. For example, if you created the snapshot from an instant snapshot that was later deleted and recreated under the same name, the source instant snapshot ID would identify the exact instant snapshot that was used.
        
    - name: architecture
      value: string
      description: >
        [Output Only] The architecture of the snapshot. Valid values are ARM64 or X86_64.
        
      valid_values: ['ARCHITECTURE_UNSPECIFIED', 'ARM64', 'X86_64']
    - name: snapshotType
      value: string
      description: >
        Indicates the type of the snapshot.
        
      valid_values: ['ARCHIVE', 'STANDARD']
    - name: creationSizeBytes
      value: string
      description: >
        [Output Only] Size in bytes of the snapshot at creation time.
        
    - name: enableConfidentialCompute
      value: boolean
      description: >
        Whether this snapshot is created from a confidential compute mode disk. [Output Only]: This field is not set by user, but from source disk.
        
    - name: sourceDiskForRecoveryCheckpoint
      value: string
      description: >
        The source disk whose recovery checkpoint will be used to create this snapshot.
        
    - name: sourceInstantSnapshotEncryptionKey
      value: object
      description: >
        Customer provided encryption key when creating Snapshot from Instant Snapshot.
        
    - name: guestFlush
      value: boolean
    - name: requestId
      value: string
```
</TabItem>
</Tabs>
