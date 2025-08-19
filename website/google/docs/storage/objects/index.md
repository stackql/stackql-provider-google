--- 
title: objects
hide_title: false
hide_table_of_contents: false
keywords:
  - objects
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

Creates, updates, deletes, gets or lists an <code>objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>objects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.objects" /></td></tr>
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

An object.

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
    <td>The ID of the object, including the bucket name, object name, and generation number.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the object. Required if not specified by URL parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="acl" /></td>
    <td><code>array</code></td>
    <td>Access controls on the object.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this object.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheControl" /></td>
    <td><code>string</code></td>
    <td>Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.</td>
</tr>
<tr>
    <td><CopyableCode code="componentCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of underlying components that make up this object. Components are accumulated by compose operations.</td>
</tr>
<tr>
    <td><CopyableCode code="contentDisposition" /></td>
    <td><code>string</code></td>
    <td>Content-Disposition of the object data.</td>
</tr>
<tr>
    <td><CopyableCode code="contentEncoding" /></td>
    <td><code>string</code></td>
    <td>Content-Encoding of the object data.</td>
</tr>
<tr>
    <td><CopyableCode code="contentLanguage" /></td>
    <td><code>string</code></td>
    <td>Content-Language of the object data.</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.</td>
</tr>
<tr>
    <td><CopyableCode code="contexts" /></td>
    <td><code>object</code></td>
    <td>User-defined or system-defined object contexts. Each object context is a key-payload pair, where the key provides the identification and the payload holds the associated value and additional metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="crc32c" /></td>
    <td><code>string</code></td>
    <td>CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see [Data Validation and Change Detection](https://cloud.google.com/storage/docs/data-validation).</td>
</tr>
<tr>
    <td><CopyableCode code="customTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp in RFC 3339 format specified by the user for an object.</td>
</tr>
<tr>
    <td><CopyableCode code="customerEncryption" /></td>
    <td><code>object</code></td>
    <td>Metadata of customer-supplied encryption key, if the object is encrypted by such a key.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>HTTP 1.1 Entity tag for the object.</td>
</tr>
<tr>
    <td><CopyableCode code="eventBasedHold" /></td>
    <td><code>boolean</code></td>
    <td>Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>The content generation of this object. Used for object versioning.</td>
</tr>
<tr>
    <td><CopyableCode code="hardDeleteTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is the time (in the future) when the soft-deleted object will no longer be restorable. It is equal to the soft delete time plus the current soft delete retention duration of the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For objects, this is always storage#object. (default: storage#object)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Hash" /></td>
    <td><code>string</code></td>
    <td>MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see [Data Validation and Change Detection](https://cloud.google.com/storage/docs/data-validation).</td>
</tr>
<tr>
    <td><CopyableCode code="mediaLink" /></td>
    <td><code>string</code></td>
    <td>Media download link.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>User-provided metadata, in key/value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="metageneration" /></td>
    <td><code>string (int64)</code></td>
    <td>The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The owner of the object. This will always be the uploader of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="restoreToken" /></td>
    <td><code>string</code></td>
    <td>Restore token used to differentiate deleted objects with the same name and generation. This field is only returned for deleted objects in hierarchical namespace buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="retention" /></td>
    <td><code>object</code></td>
    <td>A collection of object level retention parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this object.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (uint64)</code></td>
    <td>Content-Length of the data in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeleteTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the object became soft-deleted in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="storageClass" /></td>
    <td><code>string</code></td>
    <td>Storage class of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="temporaryHold" /></td>
    <td><code>boolean</code></td>
    <td>Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the object in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDeleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the object became noncurrent in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="timeFinalized" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the object was finalized.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStorageClassUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of objects.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of items.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For lists of objects, this is always storage#objects. (default: storage#objects)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="prefixes" /></td>
    <td><code>array</code></td>
    <td>The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a>, <a href="#parameter-softDeleted"><code>softDeleted</code></a>, <a href="#parameter-restoreToken"><code>restoreToken</code></a></td>
    <td>Retrieves an object or its metadata.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-endOffset"><code>endOffset</code></a>, <a href="#parameter-includeTrailingDelimiter"><code>includeTrailingDelimiter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-startOffset"><code>startOffset</code></a>, <a href="#parameter-userProject"><code>userProject</code></a>, <a href="#parameter-versions"><code>versions</code></a>, <a href="#parameter-matchGlob"><code>matchGlob</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-softDeleted"><code>softDeleted</code></a>, <a href="#parameter-includeFoldersAsPrefixes"><code>includeFoldersAsPrefixes</code></a></td>
    <td>Retrieves a list of objects matching the criteria.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-contentEncoding"><code>contentEncoding</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-kmsKeyName"><code>kmsKeyName</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Stores a new object and metadata.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-overrideUnlockedRetention"><code>overrideUnlockedRetention</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Patches an object's metadata.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-overrideUnlockedRetention"><code>overrideUnlockedRetention</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Updates an object's metadata.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.</td>
</tr>
<tr>
    <td><a href="#compose"><CopyableCode code="compose" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-destinationBucket"><code>destinationBucket</code></a>, <a href="#parameter-destinationObject"><code>destinationObject</code></a></td>
    <td><a href="#parameter-destinationPredefinedAcl"><code>destinationPredefinedAcl</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-kmsKeyName"><code>kmsKeyName</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Concatenates a list of existing objects into a new object in the same bucket.</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sourceBucket"><code>sourceBucket</code></a>, <a href="#parameter-sourceObject"><code>sourceObject</code></a>, <a href="#parameter-destinationBucket"><code>destinationBucket</code></a>, <a href="#parameter-destinationObject"><code>destinationObject</code></a></td>
    <td><a href="#parameter-destinationKmsKeyName"><code>destinationKmsKeyName</code></a>, <a href="#parameter-destinationPredefinedAcl"><code>destinationPredefinedAcl</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-ifSourceGenerationMatch"><code>ifSourceGenerationMatch</code></a>, <a href="#parameter-ifSourceGenerationNotMatch"><code>ifSourceGenerationNotMatch</code></a>, <a href="#parameter-ifSourceMetagenerationMatch"><code>ifSourceMetagenerationMatch</code></a>, <a href="#parameter-ifSourceMetagenerationNotMatch"><code>ifSourceMetagenerationNotMatch</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-sourceGeneration"><code>sourceGeneration</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Copies a source object to a destination object. Optionally overrides metadata.</td>
</tr>
<tr>
    <td><a href="#rewrite"><CopyableCode code="rewrite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sourceBucket"><code>sourceBucket</code></a>, <a href="#parameter-sourceObject"><code>sourceObject</code></a>, <a href="#parameter-destinationBucket"><code>destinationBucket</code></a>, <a href="#parameter-destinationObject"><code>destinationObject</code></a></td>
    <td><a href="#parameter-destinationKmsKeyName"><code>destinationKmsKeyName</code></a>, <a href="#parameter-destinationPredefinedAcl"><code>destinationPredefinedAcl</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-ifSourceGenerationMatch"><code>ifSourceGenerationMatch</code></a>, <a href="#parameter-ifSourceGenerationNotMatch"><code>ifSourceGenerationNotMatch</code></a>, <a href="#parameter-ifSourceMetagenerationMatch"><code>ifSourceMetagenerationMatch</code></a>, <a href="#parameter-ifSourceMetagenerationNotMatch"><code>ifSourceMetagenerationNotMatch</code></a>, <a href="#parameter-maxBytesRewrittenPerCall"><code>maxBytesRewrittenPerCall</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-rewriteToken"><code>rewriteToken</code></a>, <a href="#parameter-sourceGeneration"><code>sourceGeneration</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Rewrites a source object to a destination object. Optionally overrides metadata.</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-sourceObject"><code>sourceObject</code></a>, <a href="#parameter-destinationObject"><code>destinationObject</code></a></td>
    <td><a href="#parameter-ifSourceGenerationMatch"><code>ifSourceGenerationMatch</code></a>, <a href="#parameter-ifSourceGenerationNotMatch"><code>ifSourceGenerationNotMatch</code></a>, <a href="#parameter-ifSourceMetagenerationMatch"><code>ifSourceMetagenerationMatch</code></a>, <a href="#parameter-ifSourceMetagenerationNotMatch"><code>ifSourceMetagenerationNotMatch</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Moves the source object to the destination object in the same bucket.</td>
</tr>
<tr>
    <td><a href="#watch_all"><CopyableCode code="watch_all" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-endOffset"><code>endOffset</code></a>, <a href="#parameter-includeTrailingDelimiter"><code>includeTrailingDelimiter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-startOffset"><code>startOffset</code></a>, <a href="#parameter-userProject"><code>userProject</code></a>, <a href="#parameter-versions"><code>versions</code></a></td>
    <td>Watch for changes on all objects in a bucket.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a>, <a href="#parameter-generation"><code>generation</code></a></td>
    <td><a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-copySourceAcl"><code>copySourceAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a>, <a href="#parameter-restoreToken"><code>restoreToken</code></a></td>
    <td>Restores a soft-deleted object.</td>
</tr>
<tr>
    <td><a href="#bulk_restore"><CopyableCode code="bulk_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Initiates a long-running bulk restore operation on the specified bucket.</td>
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
<tr id="parameter-destinationBucket">
    <td><CopyableCode code="destinationBucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-destinationObject">
    <td><CopyableCode code="destinationObject" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-generation">
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-object">
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourceBucket">
    <td><CopyableCode code="sourceBucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourceObject">
    <td><CopyableCode code="sourceObject" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-contentEncoding">
    <td><CopyableCode code="contentEncoding" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-copySourceAcl">
    <td><CopyableCode code="copySourceAcl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-destinationKmsKeyName">
    <td><CopyableCode code="destinationKmsKeyName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-destinationPredefinedAcl">
    <td><CopyableCode code="destinationPredefinedAcl" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-endOffset">
    <td><CopyableCode code="endOffset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-generation">
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifGenerationMatch">
    <td><CopyableCode code="ifGenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifGenerationNotMatch">
    <td><CopyableCode code="ifGenerationNotMatch" /></td>
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
<tr id="parameter-ifSourceGenerationMatch">
    <td><CopyableCode code="ifSourceGenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifSourceGenerationNotMatch">
    <td><CopyableCode code="ifSourceGenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifSourceMetagenerationMatch">
    <td><CopyableCode code="ifSourceMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifSourceMetagenerationNotMatch">
    <td><CopyableCode code="ifSourceMetagenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-includeFoldersAsPrefixes">
    <td><CopyableCode code="includeFoldersAsPrefixes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeTrailingDelimiter">
    <td><CopyableCode code="includeTrailingDelimiter" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-kmsKeyName">
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-matchGlob">
    <td><CopyableCode code="matchGlob" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxBytesRewrittenPerCall">
    <td><CopyableCode code="maxBytesRewrittenPerCall" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-overrideUnlockedRetention">
    <td><CopyableCode code="overrideUnlockedRetention" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-restoreToken">
    <td><CopyableCode code="restoreToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rewriteToken">
    <td><CopyableCode code="rewriteToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-softDeleted">
    <td><CopyableCode code="softDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-sourceGeneration">
    <td><CopyableCode code="sourceGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-startOffset">
    <td><CopyableCode code="startOffset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userProject">
    <td><CopyableCode code="userProject" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versions">
    <td><CopyableCode code="versions" /></td>
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

Retrieves an object or its metadata.

```sql
SELECT
id,
name,
acl,
bucket,
cacheControl,
componentCount,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
contexts,
crc32c,
customTime,
customerEncryption,
etag,
eventBasedHold,
generation,
hardDeleteTime,
kind,
kmsKeyName,
md5Hash,
mediaLink,
metadata,
metageneration,
owner,
restoreToken,
retention,
retentionExpirationTime,
selfLink,
size,
softDeleteTime,
storageClass,
temporaryHold,
timeCreated,
timeDeleted,
timeFinalized,
timeStorageClassUpdated,
updated
FROM google.storage.objects
WHERE bucket = '{{ bucket }}' -- required
AND object = '{{ object }}' -- required
AND generation = '{{ generation }}'
AND ifGenerationMatch = '{{ ifGenerationMatch }}'
AND ifGenerationNotMatch = '{{ ifGenerationNotMatch }}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
AND projection = '{{ projection }}'
AND userProject = '{{ userProject }}'
AND softDeleted = '{{ softDeleted }}'
AND restoreToken = '{{ restoreToken }}';
```
</TabItem>
<TabItem value="list">

Retrieves a list of objects matching the criteria.

```sql
SELECT
items,
kind,
nextPageToken,
prefixes
FROM google.storage.objects
WHERE bucket = '{{ bucket }}' -- required
AND delimiter = '{{ delimiter }}'
AND endOffset = '{{ endOffset }}'
AND includeTrailingDelimiter = '{{ includeTrailingDelimiter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND prefix = '{{ prefix }}'
AND projection = '{{ projection }}'
AND startOffset = '{{ startOffset }}'
AND userProject = '{{ userProject }}'
AND versions = '{{ versions }}'
AND matchGlob = '{{ matchGlob }}'
AND filter = '{{ filter }}'
AND softDeleted = '{{ softDeleted }}'
AND includeFoldersAsPrefixes = '{{ includeFoldersAsPrefixes }}';
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

Stores a new object and metadata.

```sql
INSERT INTO google.storage.objects (
data__acl,
data__bucket,
data__cacheControl,
data__componentCount,
data__contentDisposition,
data__contentEncoding,
data__contentLanguage,
data__contentType,
data__crc32c,
data__customTime,
data__customerEncryption,
data__etag,
data__eventBasedHold,
data__generation,
data__id,
data__kind,
data__kmsKeyName,
data__md5Hash,
data__mediaLink,
data__metadata,
data__contexts,
data__restoreToken,
data__metageneration,
data__name,
data__owner,
data__retentionExpirationTime,
data__retention,
data__selfLink,
data__size,
data__storageClass,
data__temporaryHold,
data__timeCreated,
data__timeDeleted,
data__timeFinalized,
data__softDeleteTime,
data__hardDeleteTime,
data__timeStorageClassUpdated,
data__updated,
bucket,
contentEncoding,
ifGenerationMatch,
ifGenerationNotMatch,
ifMetagenerationMatch,
ifMetagenerationNotMatch,
kmsKeyName,
name,
predefinedAcl,
projection,
userProject
)
SELECT 
'{{ acl }}',
'{{ bucket }}',
'{{ cacheControl }}',
{{ componentCount }},
'{{ contentDisposition }}',
'{{ contentEncoding }}',
'{{ contentLanguage }}',
'{{ contentType }}',
'{{ crc32c }}',
'{{ customTime }}',
'{{ customerEncryption }}',
'{{ etag }}',
{{ eventBasedHold }},
'{{ generation }}',
'{{ id }}',
'{{ kind }}',
'{{ kmsKeyName }}',
'{{ md5Hash }}',
'{{ mediaLink }}',
'{{ metadata }}',
'{{ contexts }}',
'{{ restoreToken }}',
'{{ metageneration }}',
'{{ name }}',
'{{ owner }}',
'{{ retentionExpirationTime }}',
'{{ retention }}',
'{{ selfLink }}',
'{{ size }}',
'{{ storageClass }}',
{{ temporaryHold }},
'{{ timeCreated }}',
'{{ timeDeleted }}',
'{{ timeFinalized }}',
'{{ softDeleteTime }}',
'{{ hardDeleteTime }}',
'{{ timeStorageClassUpdated }}',
'{{ updated }}',
'{{ bucket }}',
'{{ contentEncoding }}',
'{{ ifGenerationMatch }}',
'{{ ifGenerationNotMatch }}',
'{{ ifMetagenerationMatch }}',
'{{ ifMetagenerationNotMatch }}',
'{{ kmsKeyName }}',
'{{ name }}',
'{{ predefinedAcl }}',
'{{ projection }}',
'{{ userProject }}'
RETURNING
id,
name,
acl,
bucket,
cacheControl,
componentCount,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
contexts,
crc32c,
customTime,
customerEncryption,
etag,
eventBasedHold,
generation,
hardDeleteTime,
kind,
kmsKeyName,
md5Hash,
mediaLink,
metadata,
metageneration,
owner,
restoreToken,
retention,
retentionExpirationTime,
selfLink,
size,
softDeleteTime,
storageClass,
temporaryHold,
timeCreated,
timeDeleted,
timeFinalized,
timeStorageClassUpdated,
updated
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: objects
  props:
    - name: bucket
      value: string
      description: Required parameter for the objects resource.
    - name: acl
      value: array
      description: >
        Access controls on the object.
        
    - name: bucket
      value: string
      description: >
        The name of the bucket containing this object.
        
    - name: cacheControl
      value: string
      description: >
        Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
        
    - name: componentCount
      value: integer
      description: >
        Number of underlying components that make up this object. Components are accumulated by compose operations.
        
    - name: contentDisposition
      value: string
      description: >
        Content-Disposition of the object data.
        
    - name: contentEncoding
      value: string
      description: >
        Content-Encoding of the object data.
        
    - name: contentLanguage
      value: string
      description: >
        Content-Language of the object data.
        
    - name: contentType
      value: string
      description: >
        Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.
        
    - name: crc32c
      value: string
      description: >
        CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see [Data Validation and Change Detection](https://cloud.google.com/storage/docs/data-validation).
        
    - name: customTime
      value: string
      description: >
        A timestamp in RFC 3339 format specified by the user for an object.
        
    - name: customerEncryption
      value: object
      description: >
        Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
        
    - name: etag
      value: string
      description: >
        HTTP 1.1 Entity tag for the object.
        
    - name: eventBasedHold
      value: boolean
      description: >
        Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.
        
    - name: generation
      value: string
      description: >
        The content generation of this object. Used for object versioning.
        
    - name: id
      value: string
      description: >
        The ID of the object, including the bucket name, object name, and generation number.
        
    - name: kind
      value: string
      description: >
        The kind of item this is. For objects, this is always storage#object.
        
      default: storage#object
    - name: kmsKeyName
      value: string
      description: >
        Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.
        
    - name: md5Hash
      value: string
      description: >
        MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see [Data Validation and Change Detection](https://cloud.google.com/storage/docs/data-validation).
        
    - name: mediaLink
      value: string
      description: >
        Media download link.
        
    - name: metadata
      value: object
      description: >
        User-provided metadata, in key/value pairs.
        
    - name: contexts
      value: object
      description: >
        User-defined or system-defined object contexts. Each object context is a key-payload pair, where the key provides the identification and the payload holds the associated value and additional metadata.
        
    - name: restoreToken
      value: string
      description: >
        Restore token used to differentiate deleted objects with the same name and generation. This field is only returned for deleted objects in hierarchical namespace buckets.
        
    - name: metageneration
      value: string
      description: >
        The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
        
    - name: name
      value: string
      description: >
        The name of the object. Required if not specified by URL parameter.
        
    - name: owner
      value: object
      description: >
        The owner of the object. This will always be the uploader of the object.
        
    - name: retentionExpirationTime
      value: string
      description: >
        A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).
        
    - name: retention
      value: object
      description: >
        A collection of object level retention parameters.
        
    - name: selfLink
      value: string
      description: >
        The link to this object.
        
    - name: size
      value: string
      description: >
        Content-Length of the data in bytes.
        
    - name: storageClass
      value: string
      description: >
        Storage class of the object.
        
    - name: temporaryHold
      value: boolean
      description: >
        Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.
        
    - name: timeCreated
      value: string
      description: >
        The creation time of the object in RFC 3339 format.
        
    - name: timeDeleted
      value: string
      description: >
        The time at which the object became noncurrent in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
        
    - name: timeFinalized
      value: string
      description: >
        The time when the object was finalized.
        
    - name: softDeleteTime
      value: string
      description: >
        The time at which the object became soft-deleted in RFC 3339 format.
        
    - name: hardDeleteTime
      value: string
      description: >
        This is the time (in the future) when the soft-deleted object will no longer be restorable. It is equal to the soft delete time plus the current soft delete retention duration of the bucket.
        
    - name: timeStorageClassUpdated
      value: string
      description: >
        The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.
        
    - name: updated
      value: string
      description: >
        The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.
        
    - name: contentEncoding
      value: string
    - name: ifGenerationMatch
      value: string (int64)
    - name: ifGenerationNotMatch
      value: string (int64)
    - name: ifMetagenerationMatch
      value: string (int64)
    - name: ifMetagenerationNotMatch
      value: string (int64)
    - name: kmsKeyName
      value: string
    - name: name
      value: string
    - name: predefinedAcl
      value: string
    - name: projection
      value: string
    - name: userProject
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

Patches an object's metadata.

```sql
UPDATE google.storage.objects
SET 
data__acl = '{{ acl }}',
data__bucket = '{{ bucket }}',
data__cacheControl = '{{ cacheControl }}',
data__componentCount = {{ componentCount }},
data__contentDisposition = '{{ contentDisposition }}',
data__contentEncoding = '{{ contentEncoding }}',
data__contentLanguage = '{{ contentLanguage }}',
data__contentType = '{{ contentType }}',
data__crc32c = '{{ crc32c }}',
data__customTime = '{{ customTime }}',
data__customerEncryption = '{{ customerEncryption }}',
data__etag = '{{ etag }}',
data__eventBasedHold = {{ eventBasedHold }},
data__generation = '{{ generation }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__md5Hash = '{{ md5Hash }}',
data__mediaLink = '{{ mediaLink }}',
data__metadata = '{{ metadata }}',
data__contexts = '{{ contexts }}',
data__restoreToken = '{{ restoreToken }}',
data__metageneration = '{{ metageneration }}',
data__name = '{{ name }}',
data__owner = '{{ owner }}',
data__retentionExpirationTime = '{{ retentionExpirationTime }}',
data__retention = '{{ retention }}',
data__selfLink = '{{ selfLink }}',
data__size = '{{ size }}',
data__storageClass = '{{ storageClass }}',
data__temporaryHold = {{ temporaryHold }},
data__timeCreated = '{{ timeCreated }}',
data__timeDeleted = '{{ timeDeleted }}',
data__timeFinalized = '{{ timeFinalized }}',
data__softDeleteTime = '{{ softDeleteTime }}',
data__hardDeleteTime = '{{ hardDeleteTime }}',
data__timeStorageClassUpdated = '{{ timeStorageClassUpdated }}',
data__updated = '{{ updated }}'
WHERE 
bucket = '{{ bucket }}' --required
AND object = '{{ object }}' --required
AND generation = '{{ generation}}'
AND ifGenerationMatch = '{{ ifGenerationMatch}}'
AND ifGenerationNotMatch = '{{ ifGenerationNotMatch}}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch}}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch}}'
AND overrideUnlockedRetention = {{ overrideUnlockedRetention}}
AND predefinedAcl = '{{ predefinedAcl}}'
AND projection = '{{ projection}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
name,
acl,
bucket,
cacheControl,
componentCount,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
contexts,
crc32c,
customTime,
customerEncryption,
etag,
eventBasedHold,
generation,
hardDeleteTime,
kind,
kmsKeyName,
md5Hash,
mediaLink,
metadata,
metageneration,
owner,
restoreToken,
retention,
retentionExpirationTime,
selfLink,
size,
softDeleteTime,
storageClass,
temporaryHold,
timeCreated,
timeDeleted,
timeFinalized,
timeStorageClassUpdated,
updated;
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

Updates an object's metadata.

```sql
REPLACE google.storage.objects
SET 
data__acl = '{{ acl }}',
data__bucket = '{{ bucket }}',
data__cacheControl = '{{ cacheControl }}',
data__componentCount = {{ componentCount }},
data__contentDisposition = '{{ contentDisposition }}',
data__contentEncoding = '{{ contentEncoding }}',
data__contentLanguage = '{{ contentLanguage }}',
data__contentType = '{{ contentType }}',
data__crc32c = '{{ crc32c }}',
data__customTime = '{{ customTime }}',
data__customerEncryption = '{{ customerEncryption }}',
data__etag = '{{ etag }}',
data__eventBasedHold = {{ eventBasedHold }},
data__generation = '{{ generation }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__md5Hash = '{{ md5Hash }}',
data__mediaLink = '{{ mediaLink }}',
data__metadata = '{{ metadata }}',
data__contexts = '{{ contexts }}',
data__restoreToken = '{{ restoreToken }}',
data__metageneration = '{{ metageneration }}',
data__name = '{{ name }}',
data__owner = '{{ owner }}',
data__retentionExpirationTime = '{{ retentionExpirationTime }}',
data__retention = '{{ retention }}',
data__selfLink = '{{ selfLink }}',
data__size = '{{ size }}',
data__storageClass = '{{ storageClass }}',
data__temporaryHold = {{ temporaryHold }},
data__timeCreated = '{{ timeCreated }}',
data__timeDeleted = '{{ timeDeleted }}',
data__timeFinalized = '{{ timeFinalized }}',
data__softDeleteTime = '{{ softDeleteTime }}',
data__hardDeleteTime = '{{ hardDeleteTime }}',
data__timeStorageClassUpdated = '{{ timeStorageClassUpdated }}',
data__updated = '{{ updated }}'
WHERE 
bucket = '{{ bucket }}' --required
AND object = '{{ object }}' --required
AND generation = '{{ generation}}'
AND ifGenerationMatch = '{{ ifGenerationMatch}}'
AND ifGenerationNotMatch = '{{ ifGenerationNotMatch}}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch}}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch}}'
AND overrideUnlockedRetention = {{ overrideUnlockedRetention}}
AND predefinedAcl = '{{ predefinedAcl}}'
AND projection = '{{ projection}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
name,
acl,
bucket,
cacheControl,
componentCount,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
contexts,
crc32c,
customTime,
customerEncryption,
etag,
eventBasedHold,
generation,
hardDeleteTime,
kind,
kmsKeyName,
md5Hash,
mediaLink,
metadata,
metageneration,
owner,
restoreToken,
retention,
retentionExpirationTime,
selfLink,
size,
softDeleteTime,
storageClass,
temporaryHold,
timeCreated,
timeDeleted,
timeFinalized,
timeStorageClassUpdated,
updated;
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

Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

```sql
DELETE FROM google.storage.objects
WHERE bucket = '{{ bucket }}' --required
AND object = '{{ object }}' --required
AND generation = '{{ generation }}'
AND ifGenerationMatch = '{{ ifGenerationMatch }}'
AND ifGenerationNotMatch = '{{ ifGenerationNotMatch }}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
AND userProject = '{{ userProject }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="compose"
    values={[
        { label: 'compose', value: 'compose' },
        { label: 'copy', value: 'copy' },
        { label: 'rewrite', value: 'rewrite' },
        { label: 'move', value: 'move' },
        { label: 'watch_all', value: 'watch_all' },
        { label: 'restore', value: 'restore' },
        { label: 'bulk_restore', value: 'bulk_restore' }
    ]}
>
<TabItem value="compose">

Concatenates a list of existing objects into a new object in the same bucket.

```sql
EXEC google.storage.objects.compose 
@destinationBucket='{{ destinationBucket }}' --required, 
@destinationObject='{{ destinationObject }}' --required, 
@destinationPredefinedAcl='{{ destinationPredefinedAcl }}', 
@ifGenerationMatch='{{ ifGenerationMatch }}', 
@ifMetagenerationMatch='{{ ifMetagenerationMatch }}', 
@kmsKeyName='{{ kmsKeyName }}', 
@userProject='{{ userProject }}' 
@@json=
'{
"destination": "{{ destination }}", 
"kind": "{{ kind }}", 
"sourceObjects": "{{ sourceObjects }}"
}';
```
</TabItem>
<TabItem value="copy">

Copies a source object to a destination object. Optionally overrides metadata.

```sql
EXEC google.storage.objects.copy 
@sourceBucket='{{ sourceBucket }}' --required, 
@sourceObject='{{ sourceObject }}' --required, 
@destinationBucket='{{ destinationBucket }}' --required, 
@destinationObject='{{ destinationObject }}' --required, 
@destinationKmsKeyName='{{ destinationKmsKeyName }}', 
@destinationPredefinedAcl='{{ destinationPredefinedAcl }}', 
@ifGenerationMatch='{{ ifGenerationMatch }}', 
@ifGenerationNotMatch='{{ ifGenerationNotMatch }}', 
@ifMetagenerationMatch='{{ ifMetagenerationMatch }}', 
@ifMetagenerationNotMatch='{{ ifMetagenerationNotMatch }}', 
@ifSourceGenerationMatch='{{ ifSourceGenerationMatch }}', 
@ifSourceGenerationNotMatch='{{ ifSourceGenerationNotMatch }}', 
@ifSourceMetagenerationMatch='{{ ifSourceMetagenerationMatch }}', 
@ifSourceMetagenerationNotMatch='{{ ifSourceMetagenerationNotMatch }}', 
@projection='{{ projection }}', 
@sourceGeneration='{{ sourceGeneration }}', 
@userProject='{{ userProject }}' 
@@json=
'{
"acl": "{{ acl }}", 
"bucket": "{{ bucket }}", 
"cacheControl": "{{ cacheControl }}", 
"componentCount": {{ componentCount }}, 
"contentDisposition": "{{ contentDisposition }}", 
"contentEncoding": "{{ contentEncoding }}", 
"contentLanguage": "{{ contentLanguage }}", 
"contentType": "{{ contentType }}", 
"crc32c": "{{ crc32c }}", 
"customTime": "{{ customTime }}", 
"customerEncryption": "{{ customerEncryption }}", 
"etag": "{{ etag }}", 
"eventBasedHold": {{ eventBasedHold }}, 
"generation": "{{ generation }}", 
"id": "{{ id }}", 
"kind": "{{ kind }}", 
"kmsKeyName": "{{ kmsKeyName }}", 
"md5Hash": "{{ md5Hash }}", 
"mediaLink": "{{ mediaLink }}", 
"metadata": "{{ metadata }}", 
"contexts": "{{ contexts }}", 
"restoreToken": "{{ restoreToken }}", 
"metageneration": "{{ metageneration }}", 
"name": "{{ name }}", 
"owner": "{{ owner }}", 
"retentionExpirationTime": "{{ retentionExpirationTime }}", 
"retention": "{{ retention }}", 
"selfLink": "{{ selfLink }}", 
"size": "{{ size }}", 
"storageClass": "{{ storageClass }}", 
"temporaryHold": {{ temporaryHold }}, 
"timeCreated": "{{ timeCreated }}", 
"timeDeleted": "{{ timeDeleted }}", 
"timeFinalized": "{{ timeFinalized }}", 
"softDeleteTime": "{{ softDeleteTime }}", 
"hardDeleteTime": "{{ hardDeleteTime }}", 
"timeStorageClassUpdated": "{{ timeStorageClassUpdated }}", 
"updated": "{{ updated }}"
}';
```
</TabItem>
<TabItem value="rewrite">

Rewrites a source object to a destination object. Optionally overrides metadata.

```sql
EXEC google.storage.objects.rewrite 
@sourceBucket='{{ sourceBucket }}' --required, 
@sourceObject='{{ sourceObject }}' --required, 
@destinationBucket='{{ destinationBucket }}' --required, 
@destinationObject='{{ destinationObject }}' --required, 
@destinationKmsKeyName='{{ destinationKmsKeyName }}', 
@destinationPredefinedAcl='{{ destinationPredefinedAcl }}', 
@ifGenerationMatch='{{ ifGenerationMatch }}', 
@ifGenerationNotMatch='{{ ifGenerationNotMatch }}', 
@ifMetagenerationMatch='{{ ifMetagenerationMatch }}', 
@ifMetagenerationNotMatch='{{ ifMetagenerationNotMatch }}', 
@ifSourceGenerationMatch='{{ ifSourceGenerationMatch }}', 
@ifSourceGenerationNotMatch='{{ ifSourceGenerationNotMatch }}', 
@ifSourceMetagenerationMatch='{{ ifSourceMetagenerationMatch }}', 
@ifSourceMetagenerationNotMatch='{{ ifSourceMetagenerationNotMatch }}', 
@maxBytesRewrittenPerCall='{{ maxBytesRewrittenPerCall }}', 
@projection='{{ projection }}', 
@rewriteToken='{{ rewriteToken }}', 
@sourceGeneration='{{ sourceGeneration }}', 
@userProject='{{ userProject }}' 
@@json=
'{
"acl": "{{ acl }}", 
"bucket": "{{ bucket }}", 
"cacheControl": "{{ cacheControl }}", 
"componentCount": {{ componentCount }}, 
"contentDisposition": "{{ contentDisposition }}", 
"contentEncoding": "{{ contentEncoding }}", 
"contentLanguage": "{{ contentLanguage }}", 
"contentType": "{{ contentType }}", 
"crc32c": "{{ crc32c }}", 
"customTime": "{{ customTime }}", 
"customerEncryption": "{{ customerEncryption }}", 
"etag": "{{ etag }}", 
"eventBasedHold": {{ eventBasedHold }}, 
"generation": "{{ generation }}", 
"id": "{{ id }}", 
"kind": "{{ kind }}", 
"kmsKeyName": "{{ kmsKeyName }}", 
"md5Hash": "{{ md5Hash }}", 
"mediaLink": "{{ mediaLink }}", 
"metadata": "{{ metadata }}", 
"contexts": "{{ contexts }}", 
"restoreToken": "{{ restoreToken }}", 
"metageneration": "{{ metageneration }}", 
"name": "{{ name }}", 
"owner": "{{ owner }}", 
"retentionExpirationTime": "{{ retentionExpirationTime }}", 
"retention": "{{ retention }}", 
"selfLink": "{{ selfLink }}", 
"size": "{{ size }}", 
"storageClass": "{{ storageClass }}", 
"temporaryHold": {{ temporaryHold }}, 
"timeCreated": "{{ timeCreated }}", 
"timeDeleted": "{{ timeDeleted }}", 
"timeFinalized": "{{ timeFinalized }}", 
"softDeleteTime": "{{ softDeleteTime }}", 
"hardDeleteTime": "{{ hardDeleteTime }}", 
"timeStorageClassUpdated": "{{ timeStorageClassUpdated }}", 
"updated": "{{ updated }}"
}';
```
</TabItem>
<TabItem value="move">

Moves the source object to the destination object in the same bucket.

```sql
EXEC google.storage.objects.move 
@bucket='{{ bucket }}' --required, 
@sourceObject='{{ sourceObject }}' --required, 
@destinationObject='{{ destinationObject }}' --required, 
@ifSourceGenerationMatch='{{ ifSourceGenerationMatch }}', 
@ifSourceGenerationNotMatch='{{ ifSourceGenerationNotMatch }}', 
@ifSourceMetagenerationMatch='{{ ifSourceMetagenerationMatch }}', 
@ifSourceMetagenerationNotMatch='{{ ifSourceMetagenerationNotMatch }}', 
@ifGenerationMatch='{{ ifGenerationMatch }}', 
@ifGenerationNotMatch='{{ ifGenerationNotMatch }}', 
@ifMetagenerationMatch='{{ ifMetagenerationMatch }}', 
@ifMetagenerationNotMatch='{{ ifMetagenerationNotMatch }}', 
@projection='{{ projection }}', 
@userProject='{{ userProject }}';
```
</TabItem>
<TabItem value="watch_all">

Watch for changes on all objects in a bucket.

```sql
EXEC google.storage.objects.watch_all 
@bucket='{{ bucket }}' --required, 
@delimiter='{{ delimiter }}', 
@endOffset='{{ endOffset }}', 
@includeTrailingDelimiter={{ includeTrailingDelimiter }}, 
@maxResults='{{ maxResults }}', 
@pageToken='{{ pageToken }}', 
@prefix='{{ prefix }}', 
@projection='{{ projection }}', 
@startOffset='{{ startOffset }}', 
@userProject='{{ userProject }}', 
@versions={{ versions }} 
@@json=
'{
"address": "{{ address }}", 
"expiration": "{{ expiration }}", 
"id": "{{ id }}", 
"kind": "{{ kind }}", 
"params": "{{ params }}", 
"payload": {{ payload }}, 
"resourceId": "{{ resourceId }}", 
"resourceUri": "{{ resourceUri }}", 
"token": "{{ token }}", 
"type": "{{ type }}"
}';
```
</TabItem>
<TabItem value="restore">

Restores a soft-deleted object.

```sql
EXEC google.storage.objects.restore 
@bucket='{{ bucket }}' --required, 
@object='{{ object }}' --required, 
@generation='{{ generation }}' --required, 
@ifGenerationMatch='{{ ifGenerationMatch }}', 
@ifGenerationNotMatch='{{ ifGenerationNotMatch }}', 
@ifMetagenerationMatch='{{ ifMetagenerationMatch }}', 
@ifMetagenerationNotMatch='{{ ifMetagenerationNotMatch }}', 
@copySourceAcl={{ copySourceAcl }}, 
@projection='{{ projection }}', 
@userProject='{{ userProject }}', 
@restoreToken='{{ restoreToken }}';
```
</TabItem>
<TabItem value="bulk_restore">

Initiates a long-running bulk restore operation on the specified bucket.

```sql
EXEC google.storage.objects.bulk_restore 
@bucket='{{ bucket }}' --required 
@@json=
'{
"allowOverwrite": {{ allowOverwrite }}, 
"softDeletedAfterTime": "{{ softDeletedAfterTime }}", 
"softDeletedBeforeTime": "{{ softDeletedBeforeTime }}", 
"matchGlobs": "{{ matchGlobs }}", 
"copySourceAcl": {{ copySourceAcl }}, 
"createdAfterTime": "{{ createdAfterTime }}", 
"createdBeforeTime": "{{ createdBeforeTime }}"
}';
```
</TabItem>
</Tabs>
