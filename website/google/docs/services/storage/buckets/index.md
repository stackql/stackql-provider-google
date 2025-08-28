--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
  - storage
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.buckets" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the bucket. For buckets, the id and name properties are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="acl" /></td>
    <td><code>array</code></td>
    <td>Access controls on the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="autoclass" /></td>
    <td><code>object</code></td>
    <td>The bucket's Autoclass configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>The bucket's billing configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="cors" /></td>
    <td><code>array</code></td>
    <td>The bucket's Cross-Origin Resource Sharing (CORS) configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="customPlacementConfig" /></td>
    <td><code>object</code></td>
    <td>The bucket's custom placement configuration for Custom Dual Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultEventBasedHold" /></td>
    <td><code>boolean</code></td>
    <td>The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultObjectAcl" /></td>
    <td><code>array</code></td>
    <td>Default access controls to apply to new objects when no ACL is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration for a bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>HTTP 1.1 Entity tag for the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>The generation of this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="hardDeleteTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The hard delete time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchicalNamespace" /></td>
    <td><code>object</code></td>
    <td>The bucket's hierarchical namespace configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="iamConfiguration" /></td>
    <td><code>object</code></td>
    <td>The bucket's IAM configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ipFilter" /></td>
    <td><code>object</code></td>
    <td>The bucket's IP filter configuration. Specifies the network sources that are allowed to access the operations on the bucket, as well as its underlying objects. Only enforced when the mode is set to 'Enabled'.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For buckets, this is always storage#bucket. (default: storage#bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-provided labels, in key/value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>The bucket's lifecycle configuration. See [Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the [Developer's Guide](https://cloud.google.com/storage/docs/locations) for the authoritative list.</td>
</tr>
<tr>
    <td><CopyableCode code="locationType" /></td>
    <td><code>string</code></td>
    <td>The type of the bucket location.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.</td>
</tr>
<tr>
    <td><CopyableCode code="metageneration" /></td>
    <td><code>string (int64)</code></td>
    <td>The metadata generation of this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="objectRetention" /></td>
    <td><code>object</code></td>
    <td>The bucket's object retention config.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The owner of the bucket. This is always the project team's owner group.</td>
</tr>
<tr>
    <td><CopyableCode code="projectNumber" /></td>
    <td><code>string (uint64)</code></td>
    <td>The project number of the project the bucket belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPolicy" /></td>
    <td><code>object</code></td>
    <td>The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.</td>
</tr>
<tr>
    <td><CopyableCode code="rpo" /></td>
    <td><code>string</code></td>
    <td>The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPZI" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPZS" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeletePolicy" /></td>
    <td><code>object</code></td>
    <td>The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeleteTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The soft delete time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="storageClass" /></td>
    <td><code>string</code></td>
    <td>The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see [Storage Classes](https://cloud.google.com/storage/docs/storage-classes).</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="versioning" /></td>
    <td><code>object</code></td>
    <td>The bucket's versioning configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>object</code></td>
    <td>The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the [Static Website Examples](https://cloud.google.com/storage/docs/static-website) for more information.</td>
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
    <td>The ID of the bucket. For buckets, the id and name properties are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="acl" /></td>
    <td><code>array</code></td>
    <td>Access controls on the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="autoclass" /></td>
    <td><code>object</code></td>
    <td>The bucket's Autoclass configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>The bucket's billing configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="cors" /></td>
    <td><code>array</code></td>
    <td>The bucket's Cross-Origin Resource Sharing (CORS) configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="customPlacementConfig" /></td>
    <td><code>object</code></td>
    <td>The bucket's custom placement configuration for Custom Dual Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultEventBasedHold" /></td>
    <td><code>boolean</code></td>
    <td>The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultObjectAcl" /></td>
    <td><code>array</code></td>
    <td>Default access controls to apply to new objects when no ACL is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration for a bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>HTTP 1.1 Entity tag for the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>The generation of this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="hardDeleteTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The hard delete time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchicalNamespace" /></td>
    <td><code>object</code></td>
    <td>The bucket's hierarchical namespace configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="iamConfiguration" /></td>
    <td><code>object</code></td>
    <td>The bucket's IAM configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ipFilter" /></td>
    <td><code>object</code></td>
    <td>The bucket's IP filter configuration. Specifies the network sources that are allowed to access the operations on the bucket, as well as its underlying objects. Only enforced when the mode is set to 'Enabled'.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For buckets, this is always storage#bucket. (default: storage#bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-provided labels, in key/value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>The bucket's lifecycle configuration. See [Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the [Developer's Guide](https://cloud.google.com/storage/docs/locations) for the authoritative list.</td>
</tr>
<tr>
    <td><CopyableCode code="locationType" /></td>
    <td><code>string</code></td>
    <td>The type of the bucket location.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.</td>
</tr>
<tr>
    <td><CopyableCode code="metageneration" /></td>
    <td><code>string (int64)</code></td>
    <td>The metadata generation of this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="objectRetention" /></td>
    <td><code>object</code></td>
    <td>The bucket's object retention config.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The owner of the bucket. This is always the project team's owner group.</td>
</tr>
<tr>
    <td><CopyableCode code="projectNumber" /></td>
    <td><code>string (uint64)</code></td>
    <td>The project number of the project the bucket belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPolicy" /></td>
    <td><code>object</code></td>
    <td>The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.</td>
</tr>
<tr>
    <td><CopyableCode code="rpo" /></td>
    <td><code>string</code></td>
    <td>The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPZI" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPZS" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeletePolicy" /></td>
    <td><code>object</code></td>
    <td>The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeleteTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The soft delete time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="storageClass" /></td>
    <td><code>string</code></td>
    <td>The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see [Storage Classes](https://cloud.google.com/storage/docs/storage-classes).</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the bucket in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="versioning" /></td>
    <td><code>object</code></td>
    <td>The bucket's versioning configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>object</code></td>
    <td>The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the [Static Website Examples](https://cloud.google.com/storage/docs/static-website) for more information.</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-softDeleted"><code>softDeleted</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Returns metadata for the specified bucket.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-softDeleted"><code>softDeleted</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Retrieves a list of buckets for a given project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-predefinedDefaultObjectAcl"><code>predefinedDefaultObjectAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a>, <a href="#parameter-enableObjectRetention"><code>enableObjectRetention</code></a></td>
    <td>Creates a new bucket.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-predefinedDefaultObjectAcl"><code>predefinedDefaultObjectAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-predefinedDefaultObjectAcl"><code>predefinedDefaultObjectAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Deletes an empty bucket. Deletions are permanent unless soft delete is enabled on the bucket.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-generation"><code>generation</code></a></td>
    <td><a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Restores a soft-deleted bucket.</td>
</tr>
<tr>
    <td><a href="#relocate"><CopyableCode code="relocate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Initiates a long-running Relocate Bucket operation on the specified bucket.</td>
</tr>
<tr>
    <td><a href="#lock_retention_policy"><CopyableCode code="lock_retention_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a></td>
    <td><a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Locks retention policy on a bucket.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-generation">
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationMatch">
    <td><CopyableCode code="ifMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enableObjectRetention">
    <td><CopyableCode code="enableObjectRetention" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-generation">
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationMatch">
    <td><CopyableCode code="ifMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationNotMatch">
    <td><CopyableCode code="ifMetagenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-predefinedAcl">
    <td><CopyableCode code="predefinedAcl" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-predefinedDefaultObjectAcl">
    <td><CopyableCode code="predefinedDefaultObjectAcl" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projection">
    <td><CopyableCode code="projection" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-softDeleted">
    <td><CopyableCode code="softDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-userProject">
    <td><CopyableCode code="userProject" /></td>
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

Returns metadata for the specified bucket.

```sql
SELECT
id,
name,
acl,
autoclass,
billing,
cors,
customPlacementConfig,
defaultEventBasedHold,
defaultObjectAcl,
encryption,
etag,
generation,
hardDeleteTime,
hierarchicalNamespace,
iamConfiguration,
ipFilter,
kind,
labels,
lifecycle,
location,
locationType,
logging,
metageneration,
objectRetention,
owner,
projectNumber,
retentionPolicy,
rpo,
satisfiesPZI,
satisfiesPZS,
selfLink,
softDeletePolicy,
softDeleteTime,
storageClass,
timeCreated,
updated,
versioning,
website
FROM google.storage.buckets
WHERE bucket = '{{ bucket }}' -- required
AND generation = '{{ generation }}'
AND softDeleted = '{{ softDeleted }}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
AND projection = '{{ projection }}'
AND userProject = '{{ userProject }}';
```
</TabItem>
<TabItem value="list">

Retrieves a list of buckets for a given project.

```sql
SELECT
id,
name,
acl,
autoclass,
billing,
cors,
customPlacementConfig,
defaultEventBasedHold,
defaultObjectAcl,
encryption,
etag,
generation,
hardDeleteTime,
hierarchicalNamespace,
iamConfiguration,
ipFilter,
kind,
labels,
lifecycle,
location,
locationType,
logging,
metageneration,
objectRetention,
owner,
projectNumber,
retentionPolicy,
rpo,
satisfiesPZI,
satisfiesPZS,
selfLink,
softDeletePolicy,
softDeleteTime,
storageClass,
timeCreated,
updated,
versioning,
website
FROM google.storage.buckets
WHERE project = '{{ project }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND prefix = '{{ prefix }}'
AND softDeleted = '{{ softDeleted }}'
AND projection = '{{ projection }}'
AND userProject = '{{ userProject }}';
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

Creates a new bucket.

```sql
INSERT INTO google.storage.buckets (
data__acl,
data__billing,
data__cors,
data__customPlacementConfig,
data__defaultEventBasedHold,
data__defaultObjectAcl,
data__encryption,
data__etag,
data__hierarchicalNamespace,
data__iamConfiguration,
data__id,
data__ipFilter,
data__kind,
data__labels,
data__lifecycle,
data__autoclass,
data__location,
data__locationType,
data__logging,
data__generation,
data__metageneration,
data__name,
data__owner,
data__projectNumber,
data__retentionPolicy,
data__objectRetention,
data__rpo,
data__selfLink,
data__softDeletePolicy,
data__storageClass,
data__timeCreated,
data__updated,
data__softDeleteTime,
data__hardDeleteTime,
data__versioning,
data__website,
data__satisfiesPZS,
data__satisfiesPZI,
project,
predefinedAcl,
predefinedDefaultObjectAcl,
projection,
userProject,
enableObjectRetention
)
SELECT 
'{{ acl }}',
'{{ billing }}',
'{{ cors }}',
'{{ customPlacementConfig }}',
{{ defaultEventBasedHold }},
'{{ defaultObjectAcl }}',
'{{ encryption }}',
'{{ etag }}',
'{{ hierarchicalNamespace }}',
'{{ iamConfiguration }}',
'{{ id }}',
'{{ ipFilter }}',
'{{ kind }}',
'{{ labels }}',
'{{ lifecycle }}',
'{{ autoclass }}',
'{{ location }}',
'{{ locationType }}',
'{{ logging }}',
'{{ generation }}',
'{{ metageneration }}',
'{{ name }}',
'{{ owner }}',
'{{ projectNumber }}',
'{{ retentionPolicy }}',
'{{ objectRetention }}',
'{{ rpo }}',
'{{ selfLink }}',
'{{ softDeletePolicy }}',
'{{ storageClass }}',
'{{ timeCreated }}',
'{{ updated }}',
'{{ softDeleteTime }}',
'{{ hardDeleteTime }}',
'{{ versioning }}',
'{{ website }}',
{{ satisfiesPZS }},
{{ satisfiesPZI }},
'{{ project }}',
'{{ predefinedAcl }}',
'{{ predefinedDefaultObjectAcl }}',
'{{ projection }}',
'{{ userProject }}',
'{{ enableObjectRetention }}'
RETURNING
id,
name,
acl,
autoclass,
billing,
cors,
customPlacementConfig,
defaultEventBasedHold,
defaultObjectAcl,
encryption,
etag,
generation,
hardDeleteTime,
hierarchicalNamespace,
iamConfiguration,
ipFilter,
kind,
labels,
lifecycle,
location,
locationType,
logging,
metageneration,
objectRetention,
owner,
projectNumber,
retentionPolicy,
rpo,
satisfiesPZI,
satisfiesPZS,
selfLink,
softDeletePolicy,
softDeleteTime,
storageClass,
timeCreated,
updated,
versioning,
website
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: buckets
  props:
    - name: project
      value: string
      description: Required parameter for the buckets resource.
    - name: acl
      value: array
      description: >
        Access controls on the bucket.
        
    - name: billing
      value: object
      description: >
        The bucket's billing configuration.
        
    - name: cors
      value: array
      description: >
        The bucket's Cross-Origin Resource Sharing (CORS) configuration.
        
    - name: customPlacementConfig
      value: object
      description: >
        The bucket's custom placement configuration for Custom Dual Regions.
        
    - name: defaultEventBasedHold
      value: boolean
      description: >
        The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.
        
    - name: defaultObjectAcl
      value: array
      description: >
        Default access controls to apply to new objects when no ACL is provided.
        
    - name: encryption
      value: object
      description: >
        Encryption configuration for a bucket.
        
    - name: etag
      value: string
      description: >
        HTTP 1.1 Entity tag for the bucket.
        
    - name: hierarchicalNamespace
      value: object
      description: >
        The bucket's hierarchical namespace configuration.
        
    - name: iamConfiguration
      value: object
      description: >
        The bucket's IAM configuration.
        
    - name: id
      value: string
      description: >
        The ID of the bucket. For buckets, the id and name properties are the same.
        
    - name: ipFilter
      value: object
      description: >
        The bucket's IP filter configuration. Specifies the network sources that are allowed to access the operations on the bucket, as well as its underlying objects. Only enforced when the mode is set to 'Enabled'.
        
    - name: kind
      value: string
      description: >
        The kind of item this is. For buckets, this is always storage#bucket.
        
      default: storage#bucket
    - name: labels
      value: object
      description: >
        User-provided labels, in key/value pairs.
        
    - name: lifecycle
      value: object
      description: >
        The bucket's lifecycle configuration. See [Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle) for more information.
        
    - name: autoclass
      value: object
      description: >
        The bucket's Autoclass configuration.
        
    - name: location
      value: string
      description: >
        The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the [Developer's Guide](https://cloud.google.com/storage/docs/locations) for the authoritative list.
        
    - name: locationType
      value: string
      description: >
        The type of the bucket location.
        
    - name: logging
      value: object
      description: >
        The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
        
    - name: generation
      value: string
      description: >
        The generation of this bucket.
        
    - name: metageneration
      value: string
      description: >
        The metadata generation of this bucket.
        
    - name: name
      value: string
      description: >
        The name of the bucket.
        
    - name: owner
      value: object
      description: >
        The owner of the bucket. This is always the project team's owner group.
        
    - name: projectNumber
      value: string
      description: >
        The project number of the project the bucket belongs to.
        
    - name: retentionPolicy
      value: object
      description: >
        The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
        
    - name: objectRetention
      value: object
      description: >
        The bucket's object retention config.
        
    - name: rpo
      value: string
      description: >
        The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.
        
    - name: selfLink
      value: string
      description: >
        The URI of this bucket.
        
    - name: softDeletePolicy
      value: object
      description: >
        The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted.
        
    - name: storageClass
      value: string
      description: >
        The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see [Storage Classes](https://cloud.google.com/storage/docs/storage-classes).
        
    - name: timeCreated
      value: string
      description: >
        The creation time of the bucket in RFC 3339 format.
        
    - name: updated
      value: string
      description: >
        The modification time of the bucket in RFC 3339 format.
        
    - name: softDeleteTime
      value: string
      description: >
        The soft delete time of the bucket in RFC 3339 format.
        
    - name: hardDeleteTime
      value: string
      description: >
        The hard delete time of the bucket in RFC 3339 format.
        
    - name: versioning
      value: object
      description: >
        The bucket's versioning configuration.
        
    - name: website
      value: object
      description: >
        The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the [Static Website Examples](https://cloud.google.com/storage/docs/static-website) for more information.
        
    - name: satisfiesPZS
      value: boolean
      description: >
        Reserved for future use.
        
    - name: satisfiesPZI
      value: boolean
      description: >
        Reserved for future use.
        
    - name: predefinedAcl
      value: string
    - name: predefinedDefaultObjectAcl
      value: string
    - name: projection
      value: string
    - name: userProject
      value: string
    - name: enableObjectRetention
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

Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

```sql
UPDATE google.storage.buckets
SET 
data__acl = '{{ acl }}',
data__billing = '{{ billing }}',
data__cors = '{{ cors }}',
data__customPlacementConfig = '{{ customPlacementConfig }}',
data__defaultEventBasedHold = {{ defaultEventBasedHold }},
data__defaultObjectAcl = '{{ defaultObjectAcl }}',
data__encryption = '{{ encryption }}',
data__etag = '{{ etag }}',
data__hierarchicalNamespace = '{{ hierarchicalNamespace }}',
data__iamConfiguration = '{{ iamConfiguration }}',
data__id = '{{ id }}',
data__ipFilter = '{{ ipFilter }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__lifecycle = '{{ lifecycle }}',
data__autoclass = '{{ autoclass }}',
data__location = '{{ location }}',
data__locationType = '{{ locationType }}',
data__logging = '{{ logging }}',
data__generation = '{{ generation }}',
data__metageneration = '{{ metageneration }}',
data__name = '{{ name }}',
data__owner = '{{ owner }}',
data__projectNumber = '{{ projectNumber }}',
data__retentionPolicy = '{{ retentionPolicy }}',
data__objectRetention = '{{ objectRetention }}',
data__rpo = '{{ rpo }}',
data__selfLink = '{{ selfLink }}',
data__softDeletePolicy = '{{ softDeletePolicy }}',
data__storageClass = '{{ storageClass }}',
data__timeCreated = '{{ timeCreated }}',
data__updated = '{{ updated }}',
data__softDeleteTime = '{{ softDeleteTime }}',
data__hardDeleteTime = '{{ hardDeleteTime }}',
data__versioning = '{{ versioning }}',
data__website = '{{ website }}',
data__satisfiesPZS = {{ satisfiesPZS }},
data__satisfiesPZI = {{ satisfiesPZI }}
WHERE 
bucket = '{{ bucket }}' --required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch}}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch}}'
AND predefinedAcl = '{{ predefinedAcl}}'
AND predefinedDefaultObjectAcl = '{{ predefinedDefaultObjectAcl}}'
AND projection = '{{ projection}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
name,
acl,
autoclass,
billing,
cors,
customPlacementConfig,
defaultEventBasedHold,
defaultObjectAcl,
encryption,
etag,
generation,
hardDeleteTime,
hierarchicalNamespace,
iamConfiguration,
ipFilter,
kind,
labels,
lifecycle,
location,
locationType,
logging,
metageneration,
objectRetention,
owner,
projectNumber,
retentionPolicy,
rpo,
satisfiesPZI,
satisfiesPZS,
selfLink,
softDeletePolicy,
softDeleteTime,
storageClass,
timeCreated,
updated,
versioning,
website;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

```sql
REPLACE google.storage.buckets
SET 
data__acl = '{{ acl }}',
data__billing = '{{ billing }}',
data__cors = '{{ cors }}',
data__customPlacementConfig = '{{ customPlacementConfig }}',
data__defaultEventBasedHold = {{ defaultEventBasedHold }},
data__defaultObjectAcl = '{{ defaultObjectAcl }}',
data__encryption = '{{ encryption }}',
data__etag = '{{ etag }}',
data__hierarchicalNamespace = '{{ hierarchicalNamespace }}',
data__iamConfiguration = '{{ iamConfiguration }}',
data__id = '{{ id }}',
data__ipFilter = '{{ ipFilter }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__lifecycle = '{{ lifecycle }}',
data__autoclass = '{{ autoclass }}',
data__location = '{{ location }}',
data__locationType = '{{ locationType }}',
data__logging = '{{ logging }}',
data__generation = '{{ generation }}',
data__metageneration = '{{ metageneration }}',
data__name = '{{ name }}',
data__owner = '{{ owner }}',
data__projectNumber = '{{ projectNumber }}',
data__retentionPolicy = '{{ retentionPolicy }}',
data__objectRetention = '{{ objectRetention }}',
data__rpo = '{{ rpo }}',
data__selfLink = '{{ selfLink }}',
data__softDeletePolicy = '{{ softDeletePolicy }}',
data__storageClass = '{{ storageClass }}',
data__timeCreated = '{{ timeCreated }}',
data__updated = '{{ updated }}',
data__softDeleteTime = '{{ softDeleteTime }}',
data__hardDeleteTime = '{{ hardDeleteTime }}',
data__versioning = '{{ versioning }}',
data__website = '{{ website }}',
data__satisfiesPZS = {{ satisfiesPZS }},
data__satisfiesPZI = {{ satisfiesPZI }}
WHERE 
bucket = '{{ bucket }}' --required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch}}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch}}'
AND predefinedAcl = '{{ predefinedAcl}}'
AND predefinedDefaultObjectAcl = '{{ predefinedDefaultObjectAcl}}'
AND projection = '{{ projection}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
name,
acl,
autoclass,
billing,
cors,
customPlacementConfig,
defaultEventBasedHold,
defaultObjectAcl,
encryption,
etag,
generation,
hardDeleteTime,
hierarchicalNamespace,
iamConfiguration,
ipFilter,
kind,
labels,
lifecycle,
location,
locationType,
logging,
metageneration,
objectRetention,
owner,
projectNumber,
retentionPolicy,
rpo,
satisfiesPZI,
satisfiesPZS,
selfLink,
softDeletePolicy,
softDeleteTime,
storageClass,
timeCreated,
updated,
versioning,
website;
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

Deletes an empty bucket. Deletions are permanent unless soft delete is enabled on the bucket.

```sql
DELETE FROM google.storage.buckets
WHERE bucket = '{{ bucket }}' --required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' },
        { label: 'relocate', value: 'relocate' },
        { label: 'lock_retention_policy', value: 'lock_retention_policy' }
    ]}
>
<TabItem value="restore">

Restores a soft-deleted bucket.

```sql
EXEC google.storage.buckets.restore 
@bucket='{{ bucket }}' --required, 
@generation='{{ generation }}' --required, 
@projection='{{ projection }}', 
@userProject='{{ userProject }}';
```
</TabItem>
<TabItem value="relocate">

Initiates a long-running Relocate Bucket operation on the specified bucket.

```sql
EXEC google.storage.buckets.relocate 
@bucket='{{ bucket }}' --required 
@@json=
'{
"destinationLocation": "{{ destinationLocation }}", 
"destinationCustomPlacementConfig": "{{ destinationCustomPlacementConfig }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="lock_retention_policy">

Locks retention policy on a bucket.

```sql
EXEC google.storage.buckets.lock_retention_policy 
@bucket='{{ bucket }}' --required, 
@ifMetagenerationMatch='{{ ifMetagenerationMatch }}' --required, 
@userProject='{{ userProject }}';
```
</TabItem>
</Tabs>
