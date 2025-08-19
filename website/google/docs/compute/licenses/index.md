--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
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

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>licenses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.licenses" /></td></tr>
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

Represents a License resource. A License represents billing and aggregate usage data for public and marketplace images. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

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
    <td>Name of the resource. The name must be 1-63 characters long and comply with RFC1035. (pattern: [a-z](?:[-a-z0-9]&#123;0,61&#125;[a-z0-9])?)</td>
</tr>
<tr>
    <td><CopyableCode code="allowedReplacementLicenses" /></td>
    <td><code>array</code></td>
    <td>Specifies licenseCodes of licenses that can replace this license. Note: such replacements are allowed even if removable_from_disk is false.</td>
</tr>
<tr>
    <td><CopyableCode code="appendableToDisk" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can be appended to an existing disk's set of licenses.</td>
</tr>
<tr>
    <td><CopyableCode code="chargesUseFee" /></td>
    <td><code>boolean</code></td>
    <td>[Output Only] Deprecated. This field no longer reflects whether a license charges a usage fee.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Creation timestamp in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional textual description of the resource; provided by the client when the resource is created.</td>
</tr>
<tr>
    <td><CopyableCode code="incompatibleLicenses" /></td>
    <td><code>array</code></td>
    <td>Specifies licenseCodes of licenses that are incompatible with this license. If a license is incompatible with this license, it cannot be attached to the same disk or image.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of resource. Always compute#license for licenses. (default: compute#license)</td>
</tr>
<tr>
    <td><CopyableCode code="licenseCode" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique code used to attach this license to images, snapshots, and disks.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumRetention" /></td>
    <td><code>object</code></td>
    <td>If set, this license will be unable to be removed or replaced once attached to a disk until the minimum_retention period has passed. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="multiTenantOnly" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can only be used on VMs on multi tenant nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="osLicense" /></td>
    <td><code>boolean</code></td>
    <td>If true, indicates this is an OS license. Only one OS license can be attached to a disk or image at a time.</td>
</tr>
<tr>
    <td><CopyableCode code="removableFromDisk" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can be removed from a disk's set of licenses, with no replacement license needed.</td>
</tr>
<tr>
    <td><CopyableCode code="requiredCoattachedLicenses" /></td>
    <td><code>array</code></td>
    <td>Specifies the set of permissible coattached licenseCodes of licenses that satisfy the coattachment requirement of this license. At least one license from the set must be attached to the same disk or image as this license.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRequirements" /></td>
    <td><code>object</code></td>
    <td>[Input Only] Deprecated. (id: LicenseResourceRequirements)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="soleTenantOnly" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can only be used on VMs on sole tenant nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="transferable" /></td>
    <td><code>boolean</code></td>
    <td>If false, licenses will not be copied from the source resource when creating an image from a disk, disk from snapshot, or snapshot from disk.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Last update timestamp in RFC3339 text format.</td>
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
    <td>A list of License resources.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-license"><code>license</code></a></td>
    <td></td>
    <td>Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. </td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. </td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. </td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-license"><code>license</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. </td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-license"><code>license</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. </td>
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
<tr id="parameter-license">
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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

Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

```sql
SELECT
id,
name,
allowedReplacementLicenses,
appendableToDisk,
chargesUseFee,
creationTimestamp,
description,
incompatibleLicenses,
kind,
licenseCode,
minimumRetention,
multiTenantOnly,
osLicense,
removableFromDisk,
requiredCoattachedLicenses,
resourceRequirements,
selfLink,
selfLinkWithId,
soleTenantOnly,
transferable,
updateTimestamp
FROM google.compute.licenses
WHERE project = '{{ project }}' -- required
AND license = '{{ license }}' -- required;
```
</TabItem>
<TabItem value="list">

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

```sql
SELECT
id,
items,
nextPageToken,
selfLink,
warning
FROM google.compute.licenses
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

Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

```sql
INSERT INTO google.compute.licenses (
data__kind,
data__name,
data__chargesUseFee,
data__id,
data__licenseCode,
data__creationTimestamp,
data__description,
data__transferable,
data__selfLink,
data__selfLinkWithId,
data__resourceRequirements,
data__appendableToDisk,
data__removableFromDisk,
data__allowedReplacementLicenses,
data__osLicense,
data__incompatibleLicenses,
data__requiredCoattachedLicenses,
data__soleTenantOnly,
data__multiTenantOnly,
data__minimumRetention,
data__updateTimestamp,
project,
requestId
)
SELECT 
'{{ kind }}',
'{{ name }}',
{{ chargesUseFee }},
'{{ id }}',
'{{ licenseCode }}',
'{{ creationTimestamp }}',
'{{ description }}',
{{ transferable }},
'{{ selfLink }}',
'{{ selfLinkWithId }}',
'{{ resourceRequirements }}',
{{ appendableToDisk }},
{{ removableFromDisk }},
'{{ allowedReplacementLicenses }}',
{{ osLicense }},
'{{ incompatibleLicenses }}',
'{{ requiredCoattachedLicenses }}',
{{ soleTenantOnly }},
{{ multiTenantOnly }},
'{{ minimumRetention }}',
'{{ updateTimestamp }}',
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
- name: licenses
  props:
    - name: project
      value: string
      description: Required parameter for the licenses resource.
    - name: kind
      value: string
      description: >
        [Output Only] Type of resource. Always compute#license for licenses.
        
      default: compute#license
    - name: name
      value: string
      description: >
        Name of the resource. The name must be 1-63 characters long and comply with RFC1035.
        
    - name: chargesUseFee
      value: boolean
      description: >
        [Output Only] Deprecated. This field no longer reflects whether a license charges a usage fee.
        
    - name: id
      value: string
      description: >
        [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        
    - name: licenseCode
      value: string
      description: >
        [Output Only] The unique code used to attach this license to images, snapshots, and disks.
        
    - name: creationTimestamp
      value: string
      description: >
        [Output Only] Creation timestamp in RFC3339 text format.
        
    - name: description
      value: string
      description: >
        An optional textual description of the resource; provided by the client when the resource is created.
        
    - name: transferable
      value: boolean
      description: >
        If false, licenses will not be copied from the source resource when creating an image from a disk, disk from snapshot, or snapshot from disk.
        
    - name: selfLink
      value: string
      description: >
        [Output Only] Server-defined URL for the resource.
        
    - name: selfLinkWithId
      value: string
      description: >
        [Output Only] Server-defined URL for this resource with the resource id.
        
    - name: resourceRequirements
      value: object
      description: >
        [Input Only] Deprecated.
        
    - name: appendableToDisk
      value: boolean
      description: >
        If true, this license can be appended to an existing disk's set of licenses.
        
    - name: removableFromDisk
      value: boolean
      description: >
        If true, this license can be removed from a disk's set of licenses, with no replacement license needed.
        
    - name: allowedReplacementLicenses
      value: array
      description: >
        Specifies licenseCodes of licenses that can replace this license. Note: such replacements are allowed even if removable_from_disk is false.
        
    - name: osLicense
      value: boolean
      description: >
        If true, indicates this is an OS license. Only one OS license can be attached to a disk or image at a time.
        
    - name: incompatibleLicenses
      value: array
      description: >
        Specifies licenseCodes of licenses that are incompatible with this license. If a license is incompatible with this license, it cannot be attached to the same disk or image.
        
    - name: requiredCoattachedLicenses
      value: array
      description: >
        Specifies the set of permissible coattached licenseCodes of licenses that satisfy the coattachment requirement of this license. At least one license from the set must be attached to the same disk or image as this license.
        
    - name: soleTenantOnly
      value: boolean
      description: >
        If true, this license can only be used on VMs on sole tenant nodes.
        
    - name: multiTenantOnly
      value: boolean
      description: >
        If true, this license can only be used on VMs on multi tenant nodes.
        
    - name: minimumRetention
      value: object
      description: >
        If set, this license will be unable to be removed or replaced once attached to a disk until the minimum_retention period has passed.
        
    - name: updateTimestamp
      value: string
      description: >
        [Output Only] Last update timestamp in RFC3339 text format.
        
    - name: requestId
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

Updates a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

```sql
UPDATE google.compute.licenses
SET 
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__chargesUseFee = {{ chargesUseFee }},
data__id = '{{ id }}',
data__licenseCode = '{{ licenseCode }}',
data__creationTimestamp = '{{ creationTimestamp }}',
data__description = '{{ description }}',
data__transferable = {{ transferable }},
data__selfLink = '{{ selfLink }}',
data__selfLinkWithId = '{{ selfLinkWithId }}',
data__resourceRequirements = '{{ resourceRequirements }}',
data__appendableToDisk = {{ appendableToDisk }},
data__removableFromDisk = {{ removableFromDisk }},
data__allowedReplacementLicenses = '{{ allowedReplacementLicenses }}',
data__osLicense = {{ osLicense }},
data__incompatibleLicenses = '{{ incompatibleLicenses }}',
data__requiredCoattachedLicenses = '{{ requiredCoattachedLicenses }}',
data__soleTenantOnly = {{ soleTenantOnly }},
data__multiTenantOnly = {{ multiTenantOnly }},
data__minimumRetention = '{{ minimumRetention }}',
data__updateTimestamp = '{{ updateTimestamp }}'
WHERE 
project = '{{ project }}' --required
AND license = '{{ license }}' --required
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

Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

```sql
DELETE FROM google.compute.licenses
WHERE project = '{{ project }}' --required
AND license = '{{ license }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
