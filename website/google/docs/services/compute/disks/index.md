--- 
title: disks
hide_title: false
hide_table_of_contents: false
keywords:
  - disks
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

Creates, updates, deletes, gets or lists a <code>disks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>disks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.disks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="accessMode" /></td>
    <td><code>string</code></td>
    <td>The access mode of the disk. - READ_WRITE_SINGLE: The default AccessMode, means the disk can be attached to single instance in RW mode. - READ_WRITE_MANY: The AccessMode means the disk can be attached to multiple instances in RW mode. - READ_ONLY_MANY: The AccessMode means the disk can be attached to multiple instances in RO mode. The AccessMode is only valid for Hyperdisk disk types.</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the disk. Valid values are ARM64 or X86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="asyncPrimaryDisk" /></td>
    <td><code>object</code></td>
    <td>Disk asynchronously replicated into this disk. (id: DiskAsyncReplication)</td>
</tr>
<tr>
    <td><CopyableCode code="asyncSecondaryDisks" /></td>
    <td><code>object</code></td>
    <td>[Output Only] A list of disks this disk is asynchronously replicated to.</td>
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
    <td><CopyableCode code="diskEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>Encrypts the disk using a customer-supplied encryption key or a customer-managed encryption key. Encryption keys do not protect access to metadata of the disk. After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later. For example, to create a disk snapshot, to create a disk image, to create a machine image, or to attach the disk to a virtual machine. After you encrypt a disk with a customer-managed key, the diskEncryptionKey.kmsKeyName is set to a key *version* name once the disk is created. The disk is encrypted with this version of the key. In the response, diskEncryptionKey.kmsKeyName appears in the following format: "diskEncryptionKey.kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeysVersions/version If you do not provide an encryption key when creating the disk, then the disk is encrypted using an automatically generated key and you don't need to provide a key to use the disk later. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="enableConfidentialCompute" /></td>
    <td><code>boolean</code></td>
    <td>Whether this disk is using confidential compute mode.</td>
</tr>
<tr>
    <td><CopyableCode code="guestOsFeatures" /></td>
    <td><code>array</code></td>
    <td>A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#disk for disks. (default: compute#disk)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a disk.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels to apply to this disk. These can be later modified by the setLabels method.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttachTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Last attach timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDetachTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Last detach timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseCodes" /></td>
    <td><code>array</code></td>
    <td>Integer license codes indicating which licenses are attached to this disk.</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>A list of publicly visible licenses. Reserved for Google's use.</td>
</tr>
<tr>
    <td><CopyableCode code="locationHint" /></td>
    <td><code>string</code></td>
    <td>An opaque location hint used to place the disk close to other resources. This field is for use by internal tools that use the public API.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Internal use only.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: DiskParams)</td>
</tr>
<tr>
    <td><CopyableCode code="physicalBlockSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Physical block size of the persistent disk, in bytes. If not present in a request, a default value is used. The currently supported size is 4096, other sizes may be added in the future. If an unsupported value is requested, the error message will list the supported values for the caller's project.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedIops" /></td>
    <td><code>string (int64)</code></td>
    <td>Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the Extreme persistent disk documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedThroughput" /></td>
    <td><code>string (int64)</code></td>
    <td>Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the disk resides. Only applicable for regional resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZones" /></td>
    <td><code>array</code></td>
    <td>URLs of the zones where the disk should be replicated to. Only applicable for regional resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>array</code></td>
    <td>Resource policies applied to this disk for automatic snapshot creations.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Status information for the disk resource. (id: DiskResourceStatus)</td>
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
    <td>[Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Size, in GB, of the persistent disk. You can specify this field when creating a persistent disk using the sourceImage, sourceSnapshot, or sourceDisk parameter, or specify it alone to create an empty persistent disk. If you specify this field along with a source, the value of sizeGb must not be less than the size of the source. Acceptable values are greater than 0.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConsistencyGroupPolicy" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConsistencyGroupPolicyId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] ID of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDisk" /></td>
    <td><code>string</code></td>
    <td>The source disk used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - https://www.googleapis.com/compute/v1/projects/project/regions/region /disks/disk - projects/project/zones/zone/disks/disk - projects/project/regions/region/disks/disk - zones/zone/disks/disk - regions/region/disks/disk </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the disk used to create this disk. This value identifies the exact disk that was used to create this persistent disk. For example, if you created the persistent disk from a disk that was later deleted and recreated under the same name, the source disk ID would identify the exact version of the disk that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceImage" /></td>
    <td><code>string</code></td>
    <td>The source image used to create this disk. If the source image is deleted, this field will not be set. To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-9 to use the latest Debian 9 image: projects/debian-cloud/global/images/family/debian-9 Alternatively, use a specific version of a public operating system image: projects/debian-cloud/global/images/debian-9-stretch-vYYYYMMDD To create a disk with a custom image that you created, specify the image name in the following format: global/images/my-custom-image You can also specify a custom image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name: global/images/family/my-image-family </td>
</tr>
<tr>
    <td><CopyableCode code="sourceImageEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceImageId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshot" /></td>
    <td><code>string</code></td>
    <td>The source instant snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instantSnapshots/instantSnapshot - projects/project/zones/zone/instantSnapshots/instantSnapshot - zones/zone/instantSnapshots/instantSnapshot </td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshotId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the instant snapshot used to create this disk. This value identifies the exact instant snapshot that was used to create this persistent disk. For example, if you created the persistent disk from an instant snapshot that was later deleted and recreated under the same name, the source instant snapshot ID would identify the exact version of the instant snapshot that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshot" /></td>
    <td><code>string</code></td>
    <td>The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project /global/snapshots/snapshot - projects/project/global/snapshots/snapshot - global/snapshots/snapshot </td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceStorageObject" /></td>
    <td><code>string</code></td>
    <td>The full Google Cloud Storage URI where the disk image is stored. This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk. Valid URIs may start with gs:// or https://storage.googleapis.com/. This flag is not optimized for creating multiple disks from a source storage object. To create many disks from a source storage object, use gcloud compute images import instead.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of disk creation. - CREATING: Disk is provisioning. - RESTORING: Source data is being copied into the disk. - FAILED: Disk creation failed. - READY: Disk is ready for use. - DELETING: Disk is deleting. </td>
</tr>
<tr>
    <td><CopyableCode code="storagePool" /></td>
    <td><code>string</code></td>
    <td>The storage pool in which the new disk is created. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /storagePools/storagePool - projects/project/zones/zone/storagePools/storagePool - zones/zone/storagePools/storagePool </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk. For example: projects/project /zones/zone/diskTypes/pd-ssd . See Persistent disk types.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Links to the users of the disk (attached instances) in form: projects/project/zones/zone/instances/instance</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the zone where the disk resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of Disk resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#diskList for lists of disks. (default: compute#diskList)</td>
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
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="accessMode" /></td>
    <td><code>string</code></td>
    <td>The access mode of the disk. - READ_WRITE_SINGLE: The default AccessMode, means the disk can be attached to single instance in RW mode. - READ_WRITE_MANY: The AccessMode means the disk can be attached to multiple instances in RW mode. - READ_ONLY_MANY: The AccessMode means the disk can be attached to multiple instances in RO mode. The AccessMode is only valid for Hyperdisk disk types.</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the disk. Valid values are ARM64 or X86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="asyncPrimaryDisk" /></td>
    <td><code>object</code></td>
    <td>Disk asynchronously replicated into this disk. (id: DiskAsyncReplication)</td>
</tr>
<tr>
    <td><CopyableCode code="asyncSecondaryDisks" /></td>
    <td><code>object</code></td>
    <td>[Output Only] A list of disks this disk is asynchronously replicated to.</td>
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
    <td><CopyableCode code="diskEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>Encrypts the disk using a customer-supplied encryption key or a customer-managed encryption key. Encryption keys do not protect access to metadata of the disk. After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later. For example, to create a disk snapshot, to create a disk image, to create a machine image, or to attach the disk to a virtual machine. After you encrypt a disk with a customer-managed key, the diskEncryptionKey.kmsKeyName is set to a key *version* name once the disk is created. The disk is encrypted with this version of the key. In the response, diskEncryptionKey.kmsKeyName appears in the following format: "diskEncryptionKey.kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeysVersions/version If you do not provide an encryption key when creating the disk, then the disk is encrypted using an automatically generated key and you don't need to provide a key to use the disk later. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="enableConfidentialCompute" /></td>
    <td><code>boolean</code></td>
    <td>Whether this disk is using confidential compute mode.</td>
</tr>
<tr>
    <td><CopyableCode code="guestOsFeatures" /></td>
    <td><code>array</code></td>
    <td>A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#disk for disks. (default: compute#disk)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a disk.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels to apply to this disk. These can be later modified by the setLabels method.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttachTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Last attach timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDetachTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Last detach timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseCodes" /></td>
    <td><code>array</code></td>
    <td>Integer license codes indicating which licenses are attached to this disk.</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>A list of publicly visible licenses. Reserved for Google's use.</td>
</tr>
<tr>
    <td><CopyableCode code="locationHint" /></td>
    <td><code>string</code></td>
    <td>An opaque location hint used to place the disk close to other resources. This field is for use by internal tools that use the public API.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Internal use only.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: DiskParams)</td>
</tr>
<tr>
    <td><CopyableCode code="physicalBlockSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Physical block size of the persistent disk, in bytes. If not present in a request, a default value is used. The currently supported size is 4096, other sizes may be added in the future. If an unsupported value is requested, the error message will list the supported values for the caller's project.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedIops" /></td>
    <td><code>string (int64)</code></td>
    <td>Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the Extreme persistent disk documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedThroughput" /></td>
    <td><code>string (int64)</code></td>
    <td>Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the region where the disk resides. Only applicable for regional resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaZones" /></td>
    <td><code>array</code></td>
    <td>URLs of the zones where the disk should be replicated to. Only applicable for regional resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>array</code></td>
    <td>Resource policies applied to this disk for automatic snapshot creations.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Status information for the disk resource. (id: DiskResourceStatus)</td>
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
    <td>[Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Size, in GB, of the persistent disk. You can specify this field when creating a persistent disk using the sourceImage, sourceSnapshot, or sourceDisk parameter, or specify it alone to create an empty persistent disk. If you specify this field along with a source, the value of sizeGb must not be less than the size of the source. Acceptable values are greater than 0.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConsistencyGroupPolicy" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConsistencyGroupPolicyId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] ID of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDisk" /></td>
    <td><code>string</code></td>
    <td>The source disk used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - https://www.googleapis.com/compute/v1/projects/project/regions/region /disks/disk - projects/project/zones/zone/disks/disk - projects/project/regions/region/disks/disk - zones/zone/disks/disk - regions/region/disks/disk </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the disk used to create this disk. This value identifies the exact disk that was used to create this persistent disk. For example, if you created the persistent disk from a disk that was later deleted and recreated under the same name, the source disk ID would identify the exact version of the disk that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceImage" /></td>
    <td><code>string</code></td>
    <td>The source image used to create this disk. If the source image is deleted, this field will not be set. To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-9 to use the latest Debian 9 image: projects/debian-cloud/global/images/family/debian-9 Alternatively, use a specific version of a public operating system image: projects/debian-cloud/global/images/debian-9-stretch-vYYYYMMDD To create a disk with a custom image that you created, specify the image name in the following format: global/images/my-custom-image You can also specify a custom image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name: global/images/family/my-image-family </td>
</tr>
<tr>
    <td><CopyableCode code="sourceImageEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceImageId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshot" /></td>
    <td><code>string</code></td>
    <td>The source instant snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instantSnapshots/instantSnapshot - projects/project/zones/zone/instantSnapshots/instantSnapshot - zones/zone/instantSnapshots/instantSnapshot </td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstantSnapshotId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the instant snapshot used to create this disk. This value identifies the exact instant snapshot that was used to create this persistent disk. For example, if you created the persistent disk from an instant snapshot that was later deleted and recreated under the same name, the source instant snapshot ID would identify the exact version of the instant snapshot that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshot" /></td>
    <td><code>string</code></td>
    <td>The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project /global/snapshots/snapshot - projects/project/global/snapshots/snapshot - global/snapshots/snapshot </td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceStorageObject" /></td>
    <td><code>string</code></td>
    <td>The full Google Cloud Storage URI where the disk image is stored. This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk. Valid URIs may start with gs:// or https://storage.googleapis.com/. This flag is not optimized for creating multiple disks from a source storage object. To create many disks from a source storage object, use gcloud compute images import instead.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of disk creation. - CREATING: Disk is provisioning. - RESTORING: Source data is being copied into the disk. - FAILED: Disk creation failed. - READY: Disk is ready for use. - DELETING: Disk is deleting. </td>
</tr>
<tr>
    <td><CopyableCode code="storagePool" /></td>
    <td><code>string</code></td>
    <td>The storage pool in which the new disk is created. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /storagePools/storagePool - projects/project/zones/zone/storagePools/storagePool - zones/zone/storagePools/storagePool </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk. For example: projects/project /zones/zone/diskTypes/pd-ssd . See Persistent disk types.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Links to the users of the disk (attached instances) in form: projects/project/zones/zone/instances/instance</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URL of the zone where the disk resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td></td>
    <td>Returns a specified regional persistent disk.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of persistent disks contained within the specified region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of persistent disks. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-sourceImage"><code>sourceImage</code></a></td>
    <td>Creates a persistent regional disk in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-paths"><code>paths</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the labels on the target regional disk.</td>
</tr>
<tr>
    <td><a href="#bulk_set_labels"><CopyableCode code="bulk_set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td>Sets the labels on many disks at once. To learn more about labels, read the Labeling Resources documentation.</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Resizes the specified regional persistent disk.</td>
</tr>
<tr>
    <td><a href="#start_async_replication"><CopyableCode code="start_async_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Starts asynchronous replication. Must be invoked on the primary disk.</td>
</tr>
<tr>
    <td><a href="#stop_async_replication"><CopyableCode code="stop_async_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.</td>
</tr>
<tr>
    <td><a href="#stop_group_async_replication"><CopyableCode code="stop_group_async_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.</td>
</tr>
<tr>
    <td><a href="#bulk_insert"><CopyableCode code="bulk_insert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Bulk create a set of disks.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-sourceImage">
    <td><CopyableCode code="sourceImage" /></td>
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
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns a specified regional persistent disk.

```sql
SELECT
id,
name,
accessMode,
architecture,
asyncPrimaryDisk,
asyncSecondaryDisks,
creationTimestamp,
description,
diskEncryptionKey,
enableConfidentialCompute,
guestOsFeatures,
kind,
labelFingerprint,
labels,
lastAttachTimestamp,
lastDetachTimestamp,
licenseCodes,
licenses,
locationHint,
options,
params,
physicalBlockSizeBytes,
provisionedIops,
provisionedThroughput,
region,
replicaZones,
resourcePolicies,
resourceStatus,
satisfiesPzi,
satisfiesPzs,
selfLink,
sizeGb,
sourceConsistencyGroupPolicy,
sourceConsistencyGroupPolicyId,
sourceDisk,
sourceDiskId,
sourceImage,
sourceImageEncryptionKey,
sourceImageId,
sourceInstantSnapshot,
sourceInstantSnapshotId,
sourceSnapshot,
sourceSnapshotEncryptionKey,
sourceSnapshotId,
sourceStorageObject,
status,
storagePool,
type,
users,
zone
FROM google.compute.disks
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND disk = '{{ disk }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of persistent disks contained within the specified region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.disks
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of persistent disks. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
accessMode,
architecture,
asyncPrimaryDisk,
asyncSecondaryDisks,
creationTimestamp,
description,
diskEncryptionKey,
enableConfidentialCompute,
guestOsFeatures,
kind,
labelFingerprint,
labels,
lastAttachTimestamp,
lastDetachTimestamp,
licenseCodes,
licenses,
locationHint,
options,
params,
physicalBlockSizeBytes,
provisionedIops,
provisionedThroughput,
region,
replicaZones,
resourcePolicies,
resourceStatus,
satisfiesPzi,
satisfiesPzs,
selfLink,
sizeGb,
sourceConsistencyGroupPolicy,
sourceConsistencyGroupPolicyId,
sourceDisk,
sourceDiskId,
sourceImage,
sourceImageEncryptionKey,
sourceImageId,
sourceInstantSnapshot,
sourceInstantSnapshotId,
sourceSnapshot,
sourceSnapshotEncryptionKey,
sourceSnapshotId,
sourceStorageObject,
status,
storagePool,
type,
users,
zone
FROM google.compute.disks
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}';
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

Creates a persistent regional disk in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.disks (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__sizeGb,
data__zone,
data__status,
data__sourceSnapshot,
data__sourceSnapshotId,
data__sourceStorageObject,
data__options,
data__selfLink,
data__sourceImage,
data__sourceImageId,
data__type,
data__licenses,
data__guestOsFeatures,
data__lastAttachTimestamp,
data__lastDetachTimestamp,
data__users,
data__diskEncryptionKey,
data__sourceImageEncryptionKey,
data__sourceSnapshotEncryptionKey,
data__labels,
data__labelFingerprint,
data__region,
data__replicaZones,
data__licenseCodes,
data__physicalBlockSizeBytes,
data__resourcePolicies,
data__sourceDisk,
data__sourceDiskId,
data__provisionedIops,
data__provisionedThroughput,
data__enableConfidentialCompute,
data__sourceInstantSnapshot,
data__sourceInstantSnapshotId,
data__satisfiesPzs,
data__locationHint,
data__storagePool,
data__accessMode,
data__asyncPrimaryDisk,
data__asyncSecondaryDisks,
data__resourceStatus,
data__sourceConsistencyGroupPolicy,
data__sourceConsistencyGroupPolicyId,
data__architecture,
data__params,
project,
region,
requestId,
sourceImage
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ sizeGb }}',
'{{ zone }}',
'{{ status }}',
'{{ sourceSnapshot }}',
'{{ sourceSnapshotId }}',
'{{ sourceStorageObject }}',
'{{ options }}',
'{{ selfLink }}',
'{{ sourceImage }}',
'{{ sourceImageId }}',
'{{ type }}',
'{{ licenses }}',
'{{ guestOsFeatures }}',
'{{ lastAttachTimestamp }}',
'{{ lastDetachTimestamp }}',
'{{ users }}',
'{{ diskEncryptionKey }}',
'{{ sourceImageEncryptionKey }}',
'{{ sourceSnapshotEncryptionKey }}',
'{{ labels }}',
'{{ labelFingerprint }}',
'{{ region }}',
'{{ replicaZones }}',
'{{ licenseCodes }}',
'{{ physicalBlockSizeBytes }}',
'{{ resourcePolicies }}',
'{{ sourceDisk }}',
'{{ sourceDiskId }}',
'{{ provisionedIops }}',
'{{ provisionedThroughput }}',
{{ enableConfidentialCompute }},
'{{ sourceInstantSnapshot }}',
'{{ sourceInstantSnapshotId }}',
{{ satisfiesPzs }},
'{{ locationHint }}',
'{{ storagePool }}',
'{{ accessMode }}',
'{{ asyncPrimaryDisk }}',
'{{ asyncSecondaryDisks }}',
'{{ resourceStatus }}',
'{{ sourceConsistencyGroupPolicy }}',
'{{ sourceConsistencyGroupPolicyId }}',
'{{ architecture }}',
'{{ params }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}',
'{{ sourceImage }}'
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
- name: disks
  props:
    - name: project
      value: string
      description: Required parameter for the disks resource.
    - name: region
      value: string
      description: Required parameter for the disks resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#disk for disks.
        
      default: compute#disk
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
        Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        
    - name: description
      value: string
      description: >
        An optional description of this resource. Provide this property when you create the resource.
        
    - name: sizeGb
      value: string
      description: >
        Size, in GB, of the persistent disk. You can specify this field when creating a persistent disk using the sourceImage, sourceSnapshot, or sourceDisk parameter, or specify it alone to create an empty persistent disk. If you specify this field along with a source, the value of sizeGb must not be less than the size of the source. Acceptable values are greater than 0.
        
    - name: zone
      value: string
      description: >
        [Output Only] URL of the zone where the disk resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
        
    - name: status
      value: string
      description: >
        [Output Only] The status of disk creation. - CREATING: Disk is provisioning. - RESTORING: Source data is being copied into the disk. - FAILED: Disk creation failed. - READY: Disk is ready for use. - DELETING: Disk is deleting. 
        
      valid_values: ['CREATING', 'DELETING', 'FAILED', 'READY', 'RESTORING', 'UNAVAILABLE']
    - name: sourceSnapshot
      value: string
      description: >
        The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project /global/snapshots/snapshot - projects/project/global/snapshots/snapshot - global/snapshots/snapshot 
        
    - name: sourceSnapshotId
      value: string
      description: >
        [Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.
        
    - name: sourceStorageObject
      value: string
      description: >
        The full Google Cloud Storage URI where the disk image is stored. This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk. Valid URIs may start with gs:// or https://storage.googleapis.com/. This flag is not optimized for creating multiple disks from a source storage object. To create many disks from a source storage object, use gcloud compute images import instead.
        
    - name: options
      value: string
      description: >
        Internal use only.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined fully-qualified URL for this resource.
        
    - name: sourceImage
      value: string
      description: >
        The source image used to create this disk. If the source image is deleted, this field will not be set. To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-9 to use the latest Debian 9 image: projects/debian-cloud/global/images/family/debian-9 Alternatively, use a specific version of a public operating system image: projects/debian-cloud/global/images/debian-9-stretch-vYYYYMMDD To create a disk with a custom image that you created, specify the image name in the following format: global/images/my-custom-image You can also specify a custom image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name: global/images/family/my-image-family 
        
    - name: sourceImageId
      value: string
      description: >
        [Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.
        
    - name: type
      value: string
      description: >
        URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk. For example: projects/project /zones/zone/diskTypes/pd-ssd . See Persistent disk types.
        
    - name: licenses
      value: array
      description: >
        A list of publicly visible licenses. Reserved for Google's use.
        
    - name: guestOsFeatures
      value: array
      description: >
        A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
        
    - name: lastAttachTimestamp
      value: string
      description: >
        [Output Only] Last attach timestamp in RFC3339 text format.
        
    - name: lastDetachTimestamp
      value: string
      description: >
        [Output Only] Last detach timestamp in RFC3339 text format.
        
    - name: users
      value: array
      description: >
        [Output Only] Links to the users of the disk (attached instances) in form: projects/project/zones/zone/instances/instance
        
    - name: diskEncryptionKey
      value: object
      description: >
        Encrypts the disk using a customer-supplied encryption key or a customer-managed encryption key. Encryption keys do not protect access to metadata of the disk. After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later. For example, to create a disk snapshot, to create a disk image, to create a machine image, or to attach the disk to a virtual machine. After you encrypt a disk with a customer-managed key, the diskEncryptionKey.kmsKeyName is set to a key *version* name once the disk is created. The disk is encrypted with this version of the key. In the response, diskEncryptionKey.kmsKeyName appears in the following format: "diskEncryptionKey.kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeysVersions/version If you do not provide an encryption key when creating the disk, then the disk is encrypted using an automatically generated key and you don't need to provide a key to use the disk later.
        
    - name: sourceImageEncryptionKey
      value: object
      description: >
        The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
        
    - name: sourceSnapshotEncryptionKey
      value: object
      description: >
        The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key.
        
    - name: labels
      value: object
      description: >
        Labels to apply to this disk. These can be later modified by the setLabels method.
        
    - name: labelFingerprint
      value: string
      description: >
        A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a disk.
        
    - name: region
      value: string
      description: >
        [Output Only] URL of the region where the disk resides. Only applicable for regional resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
        
    - name: replicaZones
      value: array
      description: >
        URLs of the zones where the disk should be replicated to. Only applicable for regional resources.
        
    - name: licenseCodes
      value: array
      description: >
        Integer license codes indicating which licenses are attached to this disk.
        
    - name: physicalBlockSizeBytes
      value: string
      description: >
        Physical block size of the persistent disk, in bytes. If not present in a request, a default value is used. The currently supported size is 4096, other sizes may be added in the future. If an unsupported value is requested, the error message will list the supported values for the caller's project.
        
    - name: resourcePolicies
      value: array
      description: >
        Resource policies applied to this disk for automatic snapshot creations.
        
    - name: sourceDisk
      value: string
      description: >
        The source disk used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - https://www.googleapis.com/compute/v1/projects/project/regions/region /disks/disk - projects/project/zones/zone/disks/disk - projects/project/regions/region/disks/disk - zones/zone/disks/disk - regions/region/disks/disk 
        
    - name: sourceDiskId
      value: string
      description: >
        [Output Only] The unique ID of the disk used to create this disk. This value identifies the exact disk that was used to create this persistent disk. For example, if you created the persistent disk from a disk that was later deleted and recreated under the same name, the source disk ID would identify the exact version of the disk that was used.
        
    - name: provisionedIops
      value: string
      description: >
        Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the Extreme persistent disk documentation.
        
    - name: provisionedThroughput
      value: string
      description: >
        Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1.
        
    - name: enableConfidentialCompute
      value: boolean
      description: >
        Whether this disk is using confidential compute mode.
        
    - name: sourceInstantSnapshot
      value: string
      description: >
        The source instant snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instantSnapshots/instantSnapshot - projects/project/zones/zone/instantSnapshots/instantSnapshot - zones/zone/instantSnapshots/instantSnapshot 
        
    - name: sourceInstantSnapshotId
      value: string
      description: >
        [Output Only] The unique ID of the instant snapshot used to create this disk. This value identifies the exact instant snapshot that was used to create this persistent disk. For example, if you created the persistent disk from an instant snapshot that was later deleted and recreated under the same name, the source instant snapshot ID would identify the exact version of the instant snapshot that was used.
        
    - name: satisfiesPzs
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: locationHint
      value: string
      description: >
        An opaque location hint used to place the disk close to other resources. This field is for use by internal tools that use the public API.
        
    - name: storagePool
      value: string
      description: >
        The storage pool in which the new disk is created. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /storagePools/storagePool - projects/project/zones/zone/storagePools/storagePool - zones/zone/storagePools/storagePool 
        
    - name: accessMode
      value: string
      description: >
        The access mode of the disk. - READ_WRITE_SINGLE: The default AccessMode, means the disk can be attached to single instance in RW mode. - READ_WRITE_MANY: The AccessMode means the disk can be attached to multiple instances in RW mode. - READ_ONLY_MANY: The AccessMode means the disk can be attached to multiple instances in RO mode. The AccessMode is only valid for Hyperdisk disk types.
        
      valid_values: ['READ_ONLY_MANY', 'READ_WRITE_MANY', 'READ_WRITE_SINGLE']
    - name: asyncPrimaryDisk
      value: object
      description: >
        Disk asynchronously replicated into this disk.
        
    - name: asyncSecondaryDisks
      value: object
      description: >
        [Output Only] A list of disks this disk is asynchronously replicated to.
        
    - name: resourceStatus
      value: object
      description: >
        [Output Only] Status information for the disk resource.
        
    - name: sourceConsistencyGroupPolicy
      value: string
      description: >
        [Output Only] URL of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.
        
    - name: sourceConsistencyGroupPolicyId
      value: string
      description: >
        [Output Only] ID of the DiskConsistencyGroupPolicy for a secondary disk that was created using a consistency group.
        
    - name: architecture
      value: string
      description: >
        The architecture of the disk. Valid values are ARM64 or X86_64.
        
      valid_values: ['ARCHITECTURE_UNSPECIFIED', 'ARM64', 'X86_64']
    - name: params
      value: object
      description: >
        Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload.
        
    - name: requestId
      value: string
    - name: sourceImage
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

```sql
UPDATE google.compute.disks
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__sizeGb = '{{ sizeGb }}',
data__zone = '{{ zone }}',
data__status = '{{ status }}',
data__sourceSnapshot = '{{ sourceSnapshot }}',
data__sourceSnapshotId = '{{ sourceSnapshotId }}',
data__sourceStorageObject = '{{ sourceStorageObject }}',
data__options = '{{ options }}',
data__selfLink = '{{ selfLink }}',
data__sourceImage = '{{ sourceImage }}',
data__sourceImageId = '{{ sourceImageId }}',
data__type = '{{ type }}',
data__licenses = '{{ licenses }}',
data__guestOsFeatures = '{{ guestOsFeatures }}',
data__lastAttachTimestamp = '{{ lastAttachTimestamp }}',
data__lastDetachTimestamp = '{{ lastDetachTimestamp }}',
data__users = '{{ users }}',
data__diskEncryptionKey = '{{ diskEncryptionKey }}',
data__sourceImageEncryptionKey = '{{ sourceImageEncryptionKey }}',
data__sourceSnapshotEncryptionKey = '{{ sourceSnapshotEncryptionKey }}',
data__labels = '{{ labels }}',
data__labelFingerprint = '{{ labelFingerprint }}',
data__region = '{{ region }}',
data__replicaZones = '{{ replicaZones }}',
data__licenseCodes = '{{ licenseCodes }}',
data__physicalBlockSizeBytes = '{{ physicalBlockSizeBytes }}',
data__resourcePolicies = '{{ resourcePolicies }}',
data__sourceDisk = '{{ sourceDisk }}',
data__sourceDiskId = '{{ sourceDiskId }}',
data__provisionedIops = '{{ provisionedIops }}',
data__provisionedThroughput = '{{ provisionedThroughput }}',
data__enableConfidentialCompute = {{ enableConfidentialCompute }},
data__sourceInstantSnapshot = '{{ sourceInstantSnapshot }}',
data__sourceInstantSnapshotId = '{{ sourceInstantSnapshotId }}',
data__satisfiesPzs = {{ satisfiesPzs }},
data__locationHint = '{{ locationHint }}',
data__storagePool = '{{ storagePool }}',
data__accessMode = '{{ accessMode }}',
data__asyncPrimaryDisk = '{{ asyncPrimaryDisk }}',
data__asyncSecondaryDisks = '{{ asyncSecondaryDisks }}',
data__resourceStatus = '{{ resourceStatus }}',
data__sourceConsistencyGroupPolicy = '{{ sourceConsistencyGroupPolicy }}',
data__sourceConsistencyGroupPolicyId = '{{ sourceConsistencyGroupPolicyId }}',
data__architecture = '{{ architecture }}',
data__params = '{{ params }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND disk = '{{ disk }}' --required
AND paths = '{{ paths}}'
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
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
zone;
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

Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.

```sql
DELETE FROM google.compute.disks
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND disk = '{{ disk }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_labels"
    values={[
        { label: 'set_labels', value: 'set_labels' },
        { label: 'bulk_set_labels', value: 'bulk_set_labels' },
        { label: 'resize', value: 'resize' },
        { label: 'start_async_replication', value: 'start_async_replication' },
        { label: 'stop_async_replication', value: 'stop_async_replication' },
        { label: 'stop_group_async_replication', value: 'stop_group_async_replication' },
        { label: 'bulk_insert', value: 'bulk_insert' }
    ]}
>
<TabItem value="set_labels">

Sets the labels on the target regional disk.

```sql
EXEC google.compute.disks.set_labels 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@resource='{{ resource }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"labels": "{{ labels }}", 
"labelFingerprint": "{{ labelFingerprint }}"
}';
```
</TabItem>
<TabItem value="bulk_set_labels">

Sets the labels on many disks at once. To learn more about labels, read the Labeling Resources documentation.

```sql
EXEC google.compute.disks.bulk_set_labels 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@requestId='{{ requestId }}', 
@resource='{{ resource }}' 
@@json=
'{
"requests": "{{ requests }}"
}';
```
</TabItem>
<TabItem value="resize">

Resizes the specified regional persistent disk.

```sql
EXEC google.compute.disks.resize 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@disk='{{ disk }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"sizeGb": "{{ sizeGb }}"
}';
```
</TabItem>
<TabItem value="start_async_replication">

Starts asynchronous replication. Must be invoked on the primary disk.

```sql
EXEC google.compute.disks.start_async_replication 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@disk='{{ disk }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"asyncSecondaryDisk": "{{ asyncSecondaryDisk }}"
}';
```
</TabItem>
<TabItem value="stop_async_replication">

Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.

```sql
EXEC google.compute.disks.stop_async_replication 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@disk='{{ disk }}' --required, 
@requestId='{{ requestId }}';
```
</TabItem>
<TabItem value="stop_group_async_replication">

Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.

```sql
EXEC google.compute.disks.stop_group_async_replication 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"resourcePolicy": "{{ resourcePolicy }}"
}';
```
</TabItem>
<TabItem value="bulk_insert">

Bulk create a set of disks.

```sql
EXEC google.compute.disks.bulk_insert 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"sourceConsistencyGroupPolicy": "{{ sourceConsistencyGroupPolicy }}"
}';
```
</TabItem>
</Tabs>
