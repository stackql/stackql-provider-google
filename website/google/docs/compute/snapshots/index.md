--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.snapshots" /></td></tr>
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

Represents a Persistent Disk Snapshot resource. You can use snapshots to back up data on a regular interval. For more information, read Creating persistent disk snapshots. LINT.IfChange

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The architecture of the snapshot. Valid values are ARM64 or X86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="autoCreated" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Set to true if snapshots are automatically created by applying resource policy on the target disk.</td>
</tr>
<tr>
    <td><CopyableCode code="chainName" /></td>
    <td><code>string</code></td>
    <td>Creates the new snapshot in the snapshot chain labeled with the specified name. The chain name must be 1-63 characters long and comply with RFC1035. This is an uncommon option only for advanced service owners who needs to create separate snapshot chains, for example, for chargeback tracking. When you describe your snapshot resource, this field is visible only if it has a non-empty value.</td>
</tr>
<tr>
    <td><CopyableCode code="creationSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Size in bytes of the snapshot at creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Size of the source disk, specified in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] Number of bytes downloaded to restore a snapshot to a disk.</td>
</tr>
<tr>
    <td><CopyableCode code="enableConfidentialCompute" /></td>
    <td><code>boolean</code></td>
    <td>Whether this snapshot is created from a confidential compute mode disk. [Output Only]: This field is not set by user, but from source disk.</td>
</tr>
<tr>
    <td><CopyableCode code="guestFlush" /></td>
    <td><code>boolean</code></td>
    <td>[Input Only] Whether to attempt an application consistent snapshot by informing the OS to prepare for the snapshot process.</td>
</tr>
<tr>
    <td><CopyableCode code="guestOsFeatures" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#snapshot for Snapshot resources. (default: compute#snapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this snapshot, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels to apply to this snapshot. These can be later modified by the setLabels method. Label values may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseCodes" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Integer license codes indicating which licenses are attached to this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a Windows image).</td>
</tr>
<tr>
    <td><CopyableCode code="locationHint" /></td>
    <td><code>string</code></td>
    <td>An opaque location hint used to place the snapshot close to other resources. This field is for use by internal tools that use the public API.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>Encrypts the snapshot using a customer-supplied encryption key. After you encrypt a snapshot using a customer-supplied key, you must provide the same key if you use the snapshot later. For example, you must provide the encryption key when you create a disk from the encrypted snapshot in a future request. Customer-supplied encryption keys do not protect access to metadata of the snapshot. If you do not provide an encryption key when creating the snapshot, then the snapshot will be encrypted using an automatically generated key and you do not need to provide a key to use the snapshot later. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotType" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDisk" /></td>
    <td><code>string</code></td>
    <td>The source disk used to create this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskForRecoveryCheckpoint" /></td>
    <td><code>string</code></td>
    <td>The source disk whose recovery checkpoint will be used to create this snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshot" /></td>
    <td><code>string</code></td>
    <td>The source instant snapshot used to create this snapshot. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instantSnapshots/instantSnapshot - projects/project/zones/zone/instantSnapshots/instantSnapshot - zones/zone/instantSnapshots/instantSnapshot </td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshotEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>Customer provided encryption key when creating Snapshot from Instant Snapshot. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshotId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the instant snapshot used to create this snapshot. This value identifies the exact instant snapshot that was used to create this snapshot. For example, if you created the snapshot from an instant snapshot that was later deleted and recreated under the same name, the source instant snapshot ID would identify the exact instant snapshot that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotSchedulePolicy" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the resource policy which created this scheduled snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotSchedulePolicyId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] ID of the resource policy which created this scheduled snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>[Output Only] A size of the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot creation/deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="storageBytesStatus" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.</td>
</tr>
<tr>
    <td><CopyableCode code="storageLocations" /></td>
    <td><code>array</code></td>
    <td>Cloud Storage bucket storage location of the snapshot (regional or multi-regional).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contains a list of Snapshot resources.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of Snapshot resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#snapshotList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-snapshot"><code>snapshot</code></a></td>
    <td></td>
    <td>Returns the specified Snapshot resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of Snapshot resources contained within the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-snapshot"><code>snapshot</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-snapshot">
    <td><CopyableCode code="snapshot" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Returns the specified Snapshot resource.

```sql
SELECT
id,
name,
architecture,
autoCreated,
chainName,
creationSizeBytes,
creationTimestamp,
description,
diskSizeGb,
downloadBytes,
enableConfidentialCompute,
guestFlush,
guestOsFeatures,
kind,
labelFingerprint,
labels,
licenseCodes,
licenses,
locationHint,
satisfiesPzi,
satisfiesPzs,
selfLink,
snapshotEncryptionKey,
snapshotType,
sourceDisk,
sourceDiskEncryptionKey,
sourceDiskForRecoveryCheckpoint,
sourceDiskId,
sourceInstantSnapshot,
sourceInstantSnapshotEncryptionKey,
sourceInstantSnapshotId,
sourceSnapshotSchedulePolicy,
sourceSnapshotSchedulePolicyId,
status,
storageBytes,
storageBytesStatus,
storageLocations
FROM google.compute.snapshots
WHERE project = '{{ project }}' -- required
AND snapshot = '{{ snapshot }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of Snapshot resources contained within the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.snapshots
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

```sql
INSERT INTO google.compute.snapshots (
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
- name: snapshots
  props:
    - name: project
      value: string
      description: Required parameter for the snapshots resource.
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
        
    - name: requestId
      value: string
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

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

```sql
DELETE FROM google.compute.snapshots
WHERE project = '{{ project }}' --required
AND snapshot = '{{ snapshot }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_labels"
    values={[
        { label: 'set_labels', value: 'set_labels' }
    ]}
>
<TabItem value="set_labels">

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

```sql
EXEC google.compute.snapshots.set_labels 
@project='{{ project }}' --required, 
@resource='{{ resource }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"labelFingerprint": "{{ labelFingerprint }}"
}';
```
</TabItem>
</Tabs>
