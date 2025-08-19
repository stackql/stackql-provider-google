--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>images</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.images" /></td></tr>
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
<TabItem value="list">

Contains a list of images.

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
    <td>A list of Image resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (default: compute#imageList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-image"><code>image</code></a></td>
    <td></td>
    <td>Returns the specified image.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-forceCreate"><code>forceCreate</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an image in the specified project using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-image"><code>image</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-image"><code>image</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified image.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.</td>
</tr>
<tr>
    <td><a href="#deprecate"><CopyableCode code="deprecate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-image"><code>image</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.</td>
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
<tr id="parameter-image">
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-forceCreate">
    <td><CopyableCode code="forceCreate" /></td>
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

Returns the specified image.

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
FROM google.compute.images
WHERE project = '{{ project }}' -- required
AND image = '{{ image }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.images
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

Creates an image in the specified project using the data included in the request.

```sql
INSERT INTO google.compute.images (
data__kind,
data__id,
data__creationTimestamp,
data__name,
data__description,
data__sourceType,
data__rawDisk,
data__deprecated,
data__status,
data__archiveSizeBytes,
data__diskSizeGb,
data__sourceDisk,
data__sourceDiskId,
data__licenses,
data__family,
data__imageEncryptionKey,
data__sourceDiskEncryptionKey,
data__selfLink,
data__labels,
data__labelFingerprint,
data__guestOsFeatures,
data__licenseCodes,
data__sourceImage,
data__sourceImageId,
data__sourceImageEncryptionKey,
data__sourceSnapshot,
data__sourceSnapshotId,
data__sourceSnapshotEncryptionKey,
data__storageLocations,
data__shieldedInstanceInitialState,
data__satisfiesPzs,
data__architecture,
data__enableConfidentialCompute,
project,
forceCreate,
requestId
)
SELECT 
'{{ kind }}',
'{{ id }}',
'{{ creationTimestamp }}',
'{{ name }}',
'{{ description }}',
'{{ sourceType }}',
'{{ rawDisk }}',
'{{ deprecated }}',
'{{ status }}',
'{{ archiveSizeBytes }}',
'{{ diskSizeGb }}',
'{{ sourceDisk }}',
'{{ sourceDiskId }}',
'{{ licenses }}',
'{{ family }}',
'{{ imageEncryptionKey }}',
'{{ sourceDiskEncryptionKey }}',
'{{ selfLink }}',
'{{ labels }}',
'{{ labelFingerprint }}',
'{{ guestOsFeatures }}',
'{{ licenseCodes }}',
'{{ sourceImage }}',
'{{ sourceImageId }}',
'{{ sourceImageEncryptionKey }}',
'{{ sourceSnapshot }}',
'{{ sourceSnapshotId }}',
'{{ sourceSnapshotEncryptionKey }}',
'{{ storageLocations }}',
'{{ shieldedInstanceInitialState }}',
{{ satisfiesPzs }},
'{{ architecture }}',
{{ enableConfidentialCompute }},
'{{ project }}',
'{{ forceCreate }}',
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
- name: images
  props:
    - name: project
      value: string
      description: Required parameter for the images resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of the resource. Always compute#image for images.
        
      default: compute#image
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
        
    - name: sourceType
      value: string
      description: >
        The type of the image used to create this disk. The default and only valid value is RAW.
        
      valid_values: ['RAW']
      default: RAW
    - name: rawDisk
      value: object
      description: >
        The parameters of the raw disk image.
        
    - name: deprecated
      value: object
      description: >
        The deprecation status associated with this image.
        
    - name: status
      value: string
      description: >
        [Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully created and the status is set to READY. Possible values are FAILED, PENDING, or READY.
        
      valid_values: ['DELETING', 'FAILED', 'PENDING', 'READY']
    - name: archiveSizeBytes
      value: string
      description: >
        Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
        
    - name: diskSizeGb
      value: string
      description: >
        Size of the image when restored onto a persistent disk (in GB).
        
    - name: sourceDisk
      value: string
      description: >
        URL of the source disk used to create this image. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - projects/project/zones/zone/disks/disk - zones/zone/disks/disk In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL 
        
    - name: sourceDiskId
      value: string
      description: >
        [Output Only] The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.
        
    - name: licenses
      value: array
      description: >
        Any applicable license URI.
        
    - name: family
      value: string
      description: >
        The name of the image family to which this image belongs. The image family name can be from a publicly managed image family provided by Compute Engine, or from a custom image family you create. For example, centos-stream-9 is a publicly available image family. For more information, see Image family best practices. When creating disks, you can specify an image family instead of a specific image name. The image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.
        
    - name: imageEncryptionKey
      value: object
      description: >
        Encrypts the image using a customer-supplied encryption key. After you encrypt an image with a customer-supplied key, you must provide the same key if you use the image later (e.g. to create a disk from the image). Customer-supplied encryption keys do not protect access to metadata of the disk. If you do not provide an encryption key when creating the image, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the image later.
        
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
        Labels to apply to this image. These can be later modified by the setLabels method.
        
    - name: labelFingerprint
      value: string
      description: >
        A fingerprint for the labels being applied to this image, which is essentially a hash of the labels used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an image.
        
    - name: guestOsFeatures
      value: array
      description: >
        A list of features to enable on the guest operating system. Applicable only for bootable images. To see a list of available options, see the guestOSfeatures[].type parameter.
        
    - name: licenseCodes
      value: array
      description: >
        Integer license codes indicating which licenses are attached to this image.
        
    - name: sourceImage
      value: string
      description: >
        URL of the source image used to create this image. The following are valid formats for the URL: - https://www.googleapis.com/compute/v1/projects/project_id/global/ images/image_name - projects/project_id/global/images/image_name In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL 
        
    - name: sourceImageId
      value: string
      description: >
        [Output Only] The ID value of the image used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given image name.
        
    - name: sourceImageEncryptionKey
      value: object
      description: >
        The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
        
    - name: sourceSnapshot
      value: string
      description: >
        URL of the source snapshot used to create this image. The following are valid formats for the URL: - https://www.googleapis.com/compute/v1/projects/project_id/global/ snapshots/snapshot_name - projects/project_id/global/snapshots/snapshot_name In order to create an image, you must provide the full or partial URL of one of the following: - The rawDisk.source URL - The sourceDisk URL - The sourceImage URL - The sourceSnapshot URL 
        
    - name: sourceSnapshotId
      value: string
      description: >
        [Output Only] The ID value of the snapshot used to create this image. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given snapshot name.
        
    - name: sourceSnapshotEncryptionKey
      value: object
      description: >
        The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key.
        
    - name: storageLocations
      value: array
      description: >
        Cloud Storage bucket storage location of the image (regional or multi-regional).
        
    - name: shieldedInstanceInitialState
      value: object
      description: >
        Set the secure boot keys of shielded instance.
        
    - name: satisfiesPzs
      value: boolean
      description: >
        [Output Only] Reserved for future use.
        
    - name: architecture
      value: string
      description: >
        The architecture of the image. Valid values are ARM64 or X86_64.
        
      valid_values: ['ARCHITECTURE_UNSPECIFIED', 'ARM64', 'X86_64']
    - name: enableConfidentialCompute
      value: boolean
      description: >
        Whether this image is created from a confidential compute mode disk. [Output Only]: This field is not set by user, but from source disk.
        
    - name: forceCreate
      value: boolean
    - name: requestId
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

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

```sql
UPDATE google.compute.images
SET 
data__kind = '{{ kind }}',
data__id = '{{ id }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__sourceType = '{{ sourceType }}',
data__rawDisk = '{{ rawDisk }}',
data__deprecated = '{{ deprecated }}',
data__status = '{{ status }}',
data__archiveSizeBytes = '{{ archiveSizeBytes }}',
data__diskSizeGb = '{{ diskSizeGb }}',
data__sourceDisk = '{{ sourceDisk }}',
data__sourceDiskId = '{{ sourceDiskId }}',
data__licenses = '{{ licenses }}',
data__family = '{{ family }}',
data__imageEncryptionKey = '{{ imageEncryptionKey }}',
data__sourceDiskEncryptionKey = '{{ sourceDiskEncryptionKey }}',
data__selfLink = '{{ selfLink }}',
data__labels = '{{ labels }}',
data__labelFingerprint = '{{ labelFingerprint }}',
data__guestOsFeatures = '{{ guestOsFeatures }}',
data__licenseCodes = '{{ licenseCodes }}',
data__sourceImage = '{{ sourceImage }}',
data__sourceImageId = '{{ sourceImageId }}',
data__sourceImageEncryptionKey = '{{ sourceImageEncryptionKey }}',
data__sourceSnapshot = '{{ sourceSnapshot }}',
data__sourceSnapshotId = '{{ sourceSnapshotId }}',
data__sourceSnapshotEncryptionKey = '{{ sourceSnapshotEncryptionKey }}',
data__storageLocations = '{{ storageLocations }}',
data__shieldedInstanceInitialState = '{{ shieldedInstanceInitialState }}',
data__satisfiesPzs = {{ satisfiesPzs }},
data__architecture = '{{ architecture }}',
data__enableConfidentialCompute = {{ enableConfidentialCompute }}
WHERE 
project = '{{ project }}' --required
AND image = '{{ image }}' --required
AND requestId = '{{ requestId}}'
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

Deletes the specified image.

```sql
DELETE FROM google.compute.images
WHERE project = '{{ project }}' --required
AND image = '{{ image }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_labels"
    values={[
        { label: 'set_labels', value: 'set_labels' },
        { label: 'deprecate', value: 'deprecate' }
    ]}
>
<TabItem value="set_labels">

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

```sql
EXEC google.compute.images.set_labels 
@project='{{ project }}' --required, 
@resource='{{ resource }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"labelFingerprint": "{{ labelFingerprint }}"
}';
```
</TabItem>
<TabItem value="deprecate">

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

```sql
EXEC google.compute.images.deprecate 
@project='{{ project }}' --required, 
@image='{{ image }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"state": "{{ state }}", 
"replacement": "{{ replacement }}", 
"deprecated": "{{ deprecated }}", 
"obsolete": "{{ obsolete }}", 
"deleted": "{{ deleted }}"
}';
```
</TabItem>
</Tabs>
