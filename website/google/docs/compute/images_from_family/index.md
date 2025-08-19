--- 
title: images_from_family
hide_title: false
hide_table_of_contents: false
keywords:
  - images_from_family
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

Creates, updates, deletes, gets or lists an <code>images_from_family</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>images_from_family</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.images_from_family" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_from_family"
    values={[
        { label: 'get_from_family', value: 'get_from_family' }
    ]}
>
<TabItem value="get_from_family">

Represents an Image resource. You can use images to create boot disks for your VM instances. For more information, read Images.

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
    <td>The architecture of the image. Valid values are ARM64 or X86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="archiveSizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecated" /></td>
    <td><code>object</code></td>
    <td>The deprecation status associated with this image. (id: DeprecationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Size of the image when restored onto a persistent disk (in GB).</td>
</tr>
<tr>
    <td><CopyableCode code="enableConfidentialCompute" /></td>
    <td><code>boolean</code></td>
    <td>Whether this image is created from a confidential compute mode disk. [Output Only]: This field is not set by user, but from source disk.</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>The name of the image family to which this image belongs. The image family name can be from a publicly managed image family provided by Compute Engine, or from a custom image family you create. For example, centos-stream-9 is a publicly available image family. For more information, see Image family best practices. When creating disks, you can specify an image family instead of a specific image name. The image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.</td>
</tr>
<tr>
    <td><CopyableCode code="guestOsFeatures" /></td>
    <td><code>array</code></td>
    <td>A list of features to enable on the guest operating system. Applicable only for bootable images. To see a list of available options, see the guestOSfeatures[].type parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="imageEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>Encrypts the image using a customer-supplied encryption key. After you encrypt an image with a customer-supplied key, you must provide the same key if you use the image later (e.g. to create a disk from the image). Customer-supplied encryption keys do not protect access to metadata of the disk. If you do not provide an encryption key when creating the image, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the image later. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#image for images. (default: compute#image)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this image, which is essentially a hash of the labels used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an image.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels to apply to this image. These can be later modified by the setLabels method.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseCodes" /></td>
    <td><code>array</code></td>
    <td>Integer license codes indicating which licenses are attached to this image.</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>Any applicable license URI.</td>
</tr>
<tr>
    <td><CopyableCode code="rawDisk" /></td>
    <td><code>object</code></td>
    <td>The parameters of the raw disk image.</td>
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
    <td><CopyableCode code="shieldedInstanceInitialState" /></td>
    <td><code>object</code></td>
    <td>Set the secure boot keys of shielded instance. (id: InitialStateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDisk" /></td>
    <td><code>string</code></td>
    <td>URL of the source disk used to create this image. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - projects/project/zones/zone/disks/disk - zones/zone/disks/disk In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDiskId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceImage" /></td>
    <td><code>string</code></td>
    <td>URL of the source image used to create this image. The following are valid formats for the URL: - https://www.googleapis.com/compute/v1/projects/project_id/global/ images/image_name - projects/project_id/global/images/image_name In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL </td>
</tr>
<tr>
    <td><CopyableCode code="sourceImageEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceImageId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The ID value of the image used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given image name.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshot" /></td>
    <td><code>string</code></td>
    <td>URL of the source snapshot used to create this image. The following are valid formats for the URL: - https://www.googleapis.com/compute/v1/projects/project_id/global/ snapshots/snapshot_name - projects/project_id/global/snapshots/snapshot_name In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL </td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key. (id: CustomerEncryptionKey)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSnapshotId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The ID value of the snapshot used to create this image. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given snapshot name.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the image used to create this disk. The default and only valid value is RAW. (default: RAW)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully created and the status is set to READY. Possible values are FAILED, PENDING, or READY.</td>
</tr>
<tr>
    <td><CopyableCode code="storageLocations" /></td>
    <td><code>array</code></td>
    <td>Cloud Storage bucket storage location of the image (regional or multi-regional).</td>
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
    <td><a href="#get_from_family"><CopyableCode code="get_from_family" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-family"><code>family</code></a></td>
    <td></td>
    <td>Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.</td>
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
<tr id="parameter-family">
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_from_family"
    values={[
        { label: 'get_from_family', value: 'get_from_family' }
    ]}
>
<TabItem value="get_from_family">

Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.

```sql
SELECT
id,
name,
architecture,
archiveSizeBytes,
creationTimestamp,
deprecated,
description,
diskSizeGb,
enableConfidentialCompute,
family,
guestOsFeatures,
imageEncryptionKey,
kind,
labelFingerprint,
labels,
licenseCodes,
licenses,
rawDisk,
satisfiesPzi,
satisfiesPzs,
selfLink,
shieldedInstanceInitialState,
sourceDisk,
sourceDiskEncryptionKey,
sourceDiskId,
sourceImage,
sourceImageEncryptionKey,
sourceImageId,
sourceSnapshot,
sourceSnapshotEncryptionKey,
sourceSnapshotId,
sourceType,
status,
storageLocations
FROM google.compute.images_from_family
WHERE project = '{{ project }}' -- required
AND family = '{{ family }}' -- required;
```
</TabItem>
</Tabs>
